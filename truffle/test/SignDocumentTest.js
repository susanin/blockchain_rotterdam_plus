var SignDocument = artifacts.require("../contracts/SignDocument.sol");

contract('SignDocument', function(accounts) {
    it('should not be signed on new contract', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, false, 'Document is signed');
        });
    });

    it('should be signed by single stakeholder', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            instance.sign({from: accounts[0]});
            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, true, 'Document is not signed');
        });
    });

    it('should be signed by two stakeholders', function() {
        SignDocument.new([accounts[0], accounts[1]]).then(function(instance) {
            instance.sign({from: accounts[0]});
            instance.sign({from: accounts[1]});

            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, true, 'Document is not signed');
        });
    });

    it('should not be signed with one signature ouf of two', function() {
        SignDocument.new([accounts[0], accounts[1]]).then(function(instance) {
            instance.sign({from: accounts[0]});

            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, false, 'Document is signed');
        });
    });

    it('should not be signed by other accout', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            instance.sign({from: accounts[1]});

            return instance.signed.call();
        }).then(function(signed) {
            assert.equal(signed, false, 'Document is signed');
        });
    });

    it('should dissalow attemps to sing already signed contract', function() {
        SignDocument.new([accounts[0]]).then(function(instance) {
            instance.sign({from: accounts[0]});
            return instance.sign.call({from: accounts[0]});
        }).then(function(value) {
            assert.fail('Exception should be thrown');
        }).catch(function(error) {
            assert(error != null, 'Exception expected.');
        });
    });
});