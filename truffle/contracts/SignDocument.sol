pragma solidity ^0.4.4;

contract SignDocument {
  mapping (address => bool) signatures;
  address[] requiredStackeholders;
  uint aquiredSignatures;
  bool public signed;

  event StackeHolderSigns(address stackeholder);
  event FullySigned();

  function SignDocument(address[] stackeholders) {
    for (uint i = 0; i < stackeholders.length; i++) {
      signatures[stackeholders[i]] = false;
    }
    requiredStackeholders = stackeholders;
    aquiredSignatures = 0;
    signed = false;
  }

  function sign() {
    require(!signed);

    var sender = msg.sender;
    if (validStakeholder(sender) && !signatures[sender]) {
      signatures[sender] = true;
      aquiredSignatures++;
      StackeHolderSigns(sender);

      if (requiredStackeholders.length == aquiredSignatures) {
        signed = true;
        FullySigned();
      }
    }
  }

  function validStakeholder(address stakeholder)
    internal
    returns (bool valid) {
    valid = false;

    for (uint i = 0; i < requiredStackeholders.length; i++) {
      if (requiredStackeholders[i] == stakeholder) {
        valid = true;
        break;
      }
    }  
  }

}
