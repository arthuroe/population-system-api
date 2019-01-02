const expect  = require("chai").expect;
const sinon = require('sinon');
const mongoose  = require('sinon-mongoose');
const Location = require('../models/Location.ts');


const samplePayload = {
	"location_name": "kampala",
	"male": 10,
	"female": 20
}

// Test creating a new location
describe("test creating a new location", () => {
    // Test creating a new location
    it("should create a new location", (done) => {
        const newLocationMock = sinon.mock( new Location(samplePayload) );
        const location = newLocationMock.object;
        const expectedResult = { status: "Success"}
        newLocationMock.expects('save').yields(null, expectedResult);
        location.save(function (err, result) {
            expect(result.status).to.equal('Success');
            done();
        });
    });

    // Test Success getting all locations
    it("gets all locations - Success", (done) => {
        const newLocationMock = sinon.mock( Location );
        const location = newLocationMock.object;
        const expectedResult = { status: "Success", locations: []};
        newLocationMock.expects('find').yields(null, expectedResult);
        location.find((err, result) => {
            expect(result.status).to.equal('Success');
            done();
        })
    });

    // Test Failure getting all locations
    it("gets all locations - Failed", (done) => {
        const newLocationMock = sinon.mock( Location );
        const location = newLocationMock.object;
        const expectedResult = { status: "Failed" };
        newLocationMock.expects('find').yields(expectedResult, null);
        location.find((err, result) => {
            expect(err.status).to.equal('Failed');
            done();
        })
    });



})