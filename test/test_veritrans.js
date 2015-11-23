'use strict';

// NOTE: specify your own config file...
// It must contains merchantId, clientKey, serverKey, and url.
const expect = require('chai').expect;
const Veritrans = require('../');
const config = require('../config.json');

const vt = new Veritrans(config);

describe('index.js', () => {
    describe('Veritrans', () => {
        it('Should have transaction property', () => {
            expect(vt.transaction).to.be.an('object');
            expect(vt.transaction).not.to.be.empty;

            expect(vt.transaction.status).to.be.a('function');
            expect(vt.transaction.charge).to.be.a('function');
        });

        it('Should have credential property', () => {
            expect(vt.credential).to.be.an('object');
            expect(vt.credential).not.to.be.empty;
        });

        it('Should property change credential property', () => {
            vt.credential.setServerKey('Aha');
            expect(vt.credential.getServerKey()).to.equal('Aha');

            vt.credential.setClientKey('Aha');
            expect(vt.credential.getClientKey()).to.equal('Aha');

            vt.credential.setMerchantId('Id');
            expect(vt.credential.getMerchantId()).to.equal('Id');
        });
    });
});