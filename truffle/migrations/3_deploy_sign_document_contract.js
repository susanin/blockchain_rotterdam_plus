var SignDocument = artifacts.require("./SignDocument.sol");

module.exports = function(deployer) {
    deployer.deploy(SignDocument);
};