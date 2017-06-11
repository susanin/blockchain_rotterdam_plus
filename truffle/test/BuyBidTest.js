var SignDocument = artifacts.require("../contracts/SignDocument.sol");
var BuyBid = artifacts.require("../contracts/BuyBid.sol");

contract('BuyBid', function(accounts) {
    
    /*it('should not be signed on new contract', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, false, 'Document is signed');
        });
    });*/

    it('should not allow buying when not signed', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            return instance;
        }).then(function(stamp) {
            BuyBid.new(stamp, 'name', accounts[1], 1, 1).then(function(instance) {
                return instance.buy.call();
            }).then(function(value) {
                assert.fail('Exception expected');
            }).catch(function(error) {
                assert(error != null, 'Error expected');
            });
        });
    });

    it('should buy when signed', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            return instance;
        }).then(function(stamp) {
            stamp.sign({from: accounts[0]});

            BuyBid.new(stamp, 'name', accounts[1], 1, 1).then(function(instance) {
                return instance.buy();
            }).then(function(value) {
                //asset(value != null);
            });
        });
    });
   
});