pragma solidity ^0.5.16;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        string post;
    }

    struct Detail {
        string schID;
        string cpi;
        string spi;
        string addr;
        string branch;
        string hostelNo;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint256 => Candidate) public candidates;
    mapping(uint256 => Detail) public details;
    // Store Candidates Count
    uint256 public candidatesCount;

    // voted event

    event votedEvent(uint256[] _candidateId);

    // constructor() public {
    //     addCandidate("A", "VP");
    //     addCandidate("B", "GS");
    //     addCandidate("C", "VP");
    //     addCandidate("D", "GS");
    //     addCandidate("E", "CS");
    //     addCandidate("F", "CS");
    //     addCandidate("G", "SS");
    //     addCandidate("H", "SS");
    // }

    function addCandidate(
        string memory _name,
        string memory _post,
        string memory _schID,
        string memory _cpi,
        string memory _spi,
        string memory _addr,
        string memory _branch,
        string memory _hostelNo
    ) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            0,
            _post
        );
        details[candidatesCount] = Detail(
            _schID,
            _cpi,
            _spi,
            _addr,
            _branch,
            _hostelNo
        );
    }

    function removeCandidate(string memory _name, string memory _post)
        public
        returns (bool)
    {
        uint256 ind = 0;
        bool flag = false;
        for (uint256 i = 1; i <= candidatesCount; i++) {
            if (
                keccak256(bytes(candidates[i].name)) ==
                keccak256(bytes(_name)) &&
                keccak256(bytes(candidates[i].post)) == keccak256(bytes(_post))
            ) {
                delete candidates[i];
                delete details[i];
                ind = i;
                flag = true;
            }
        }
        if (flag) {
            for (uint256 i = ind + 1; i <= candidatesCount; i++) {
                candidates[i - 1] = candidates[i];
                candidates[i - 1].id = i - 1;
                delete candidates[i];
                details[i - 1] = details[i];
                delete details[i];
            }
        }
        candidatesCount--;
        return flag;
    }

    function vote(uint256[] memory _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        for (uint256 i = 0; i < _candidateId.length; i++) {
            require(_candidateId[i] > 0 && _candidateId[i] <= candidatesCount);
        }

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        for (uint256 i = 0; i < _candidateId.length; i++) {
            candidates[_candidateId[i]].voteCount++;
        }

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
