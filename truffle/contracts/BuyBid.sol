pragma solidity ^0.4.4;
import './SignDocument.sol';


contract BuyBid {
  SignDocument requiredStamp;
  string bidName;
  address author;
  uint desiredPrice;
  uint expireTimestamp;

  function BuyBid(SignDocument stamp, string name, address initiator, uint price, uint timestamp) {
    requiredStamp = stamp;
    bidName = name;
    author = initiator;
    desiredPrice = price;
    expireTimestamp = timestamp;
  }

  function buy() {
    //require(requiredStamp.signed);
  }
}
