import React from "react";
import "@fortawesome/fontawesome-free/js/all";

import Web3 from "web3";
import TruffleContract from "truffle-contract";
import Election from "../../build/contracts/Election.json";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import MyNav from "./MyNav";
import { HashRouter as BrowserRouter, Switch } from "react-router-dom";
import EditDetails from "./EditDetails";

import { connect } from "react-redux";
import {
  addVP,
  addGS,
  addCS,
  addSS,
  setInstance,
} from "../redux/ActionCreators";
import Candidature from "./Candidature";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      hasVoted: false,
      loading: true,
      voting: false,
    };

    ethereum.enable();

    if (typeof window.ethereum !== "undefined") {
      // Ethereum user detected. You can now use the provider.
      this.web3Provider = window["ethereum"];
      // console.log(ethereum.selectedAddress);
      // console.log(ethereum.isMetaMask);
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
        this.props.setInstance(this.electionInstance);
        this.electionInstance.candidatesCount().then((candidatesCount) => {
          // console.log(`Taz ${candidatesCount}`);
          for (var i = 1; i <= candidatesCount; i++) {
            // console.log("test");
            this.electionInstance.candidates(i).then((candidate) => {
              if (candidate[3] === "VP") {
                const VP = {
                  id: candidate[0].toNumber(),
                  name: candidate[1],
                  voteCount: candidate[2].toNumber(),
                };
                this.props.addVP(VP);
                // console.log(this.props.VP);
              } else if (candidate[3] === "GS") {
                const GS = {
                  id: candidate[0].toNumber(),
                  name: candidate[1],
                  voteCount: candidate[2].toNumber(),
                };
                this.props.addGS(GS);
              } else if (candidate[3] === "CS") {
                const CS = {
                  id: candidate[0].toNumber(),
                  name: candidate[1],
                  voteCount: candidate[2].toNumber(),
                };
                this.props.addCS(CS);
              } else {
                const SS = {
                  id: candidate[0].toNumber(),
                  name: candidate[1],
                  voteCount: candidate[2].toNumber(),
                };
                this.props.addSS(SS);
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

  render() {
    return (
      <div>
        <MyNav />
        <Switch>
          <BrowserRouter exact path="/">
            <div className="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h1 className="mt-4">Election</h1>
                  <br />
                  {this.state.loading || this.state.voting ? (
                    <p class="text-center">Loading...</p>
                  ) : (
                    <Content
                      account={this.state.account}
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
            <EditDetails account={this.state.account} />
          </BrowserRouter>
          <BrowserRouter exact path="/request">
            <Candidature account={this.state.account} />
          </BrowserRouter>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    VP: state.VP,
    GS: state.GS,
    CS: state.CS,
    SS: state.SS,
    instance: state.ElectionInstance.instance,
  };
};

const mapActionToProps = {
  addVP,
  addGS,
  addCS,
  addSS,
  setInstance,
};

export default connect(mapStateToProps, mapActionToProps)(App);
