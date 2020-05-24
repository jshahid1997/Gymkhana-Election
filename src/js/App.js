import React from "react";
import "@fortawesome/fontawesome-free/js/all";

import ReactDOM from "react-dom";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import Election from "../../build/contracts/Election.json";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import MyNav from "./MyNav";
import { HashRouter as BrowserRouter, Switch } from "react-router-dom";
import EditDetails from "./EditDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      VP: [],
      GS: [],
      CS: [],
      SS: [],
      hasVoted: false,
      loading: true,
      voting: false,
    };

    if (typeof web3 != "undefined") {
      this.web3Provider = web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }

    this.web3 = new Web3(this.web3Provider);

    this.election = TruffleContract(Election);
    this.election.setProvider(this.web3Provider);

    this.castVote = this.castVote.bind(this);
    this.watchEvents = this.watchEvents.bind(this);
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      console.log(account);
      this.setState({ account });
      this.election.deployed().then((electionInstance) => {
        this.electionInstance = electionInstance;
        this.watchEvents();

        this.electionInstance.candidatesCount().then((candidatesCount) => {
          console.log(`Taz ${candidatesCount}`);
          for (var i = 1; i <= candidatesCount; i++) {
            // console.log("test");
            this.electionInstance.candidates(i).then((candidate) => {
              if (candidate[3] === "VP") {
                const VP = [...this.state.VP];

                VP.push({
                  id: candidate[0],
                  name: candidate[1],
                  voteCount: candidate[2],
                });
                this.setState({ VP: VP });
              } else if (candidate[3] === "GS") {
                const GS = [...this.state.GS];
                GS.push({
                  id: candidate[0],
                  name: candidate[1],
                  voteCount: candidate[2],
                });
                this.setState({ GS: GS });
              } else if (candidate[3] === "CS") {
                const CS = [...this.state.CS];
                CS.push({
                  id: candidate[0],
                  name: candidate[1],
                  voteCount: candidate[2],
                });
                this.setState({ CS: CS });
              } else {
                const SS = [...this.state.SS];
                SS.push({
                  id: candidate[0],
                  name: candidate[1],
                  voteCount: candidate[2],
                });
                this.setState({ SS: SS });
              }
            });
          }
        });
        this.electionInstance.voters(this.state.account).then((hasVoted) => {
          this.setState({ hasVoted, loading: false });
        });
      });
    });
  }

  watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    this.electionInstance
      .votedEvent(
        {},
        {
          fromBlock: 0,
          toBlock: "latest",
        }
      )
      .watch((error, event) => {
        this.setState({ voting: false });
      });
  }

  castVote(candidateIds) {
    this.setState({ voting: true });
    this.electionInstance
      .vote(candidateIds, { from: this.state.account })
      .then((result) => this.setState({ hasVoted: true }));
  }
  handleClick() {
    console.log("Hi");
    this.electionInstance
      .addCandidate("Arindom", "VP", { from: this.state.account })
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <MyNav />
        <Switch>
          <BrowserRouter exact path="/">
            <div className="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h1>Election</h1>
                  <br />
                  {this.state.loading || this.state.voting ? (
                    <p class="text-center">Loading...</p>
                  ) : (
                    <Content
                      account={this.state.account}
                      VP={this.state.VP}
                      GS={this.state.GS}
                      CS={this.state.CS}
                      SS={this.state.SS}
                      hasVoted={this.state.hasVoted}
                      castVote={this.castVote}
                    />
                  )}
                </div>
                {/* <Button onClick={() => this.handleClick()}>Add candidate</Button> */}
              </div>
            </div>
          </BrowserRouter>
          <BrowserRouter exact path="/editDetails">
            <EditDetails
              web3={this.web3}
              eth={this.electionInstance}
              VP={this.state.VP}
              GS={this.state.GS}
              CS={this.state.CS}
              SS={this.state.SS}
              account={this.state.account}
            />
          </BrowserRouter>
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
