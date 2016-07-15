import 'whatwg-fetch';
import _ from 'lodash';

export default class UserDataStore {

    constructor() {
        this.apiBaseURL = "https://test3.caseblocks.com/case_blocks/search";
        this.authToken = "xFMvzLxiMsy8XdgDqT7r";
        this.userCaseTypeId = 165;
        this.complaintCaseTypeId = 160;
        this.loaded = false;
        this.results = {};
    }

    getApiEndPoint(userReference) {
        return `${this.apiBaseURL}?query=customer_reference:${userReference}&auth_token=${this.authToken}`;
    }

    fetchData(userReference) {
        return fetch(
            this.getApiEndPoint(userReference)
        ).then((response) => {
            return response.json();
        }).then((json) => {
            this.results = json;
            this.loaded = true;
        });
    }

    getUserFromData(userReference){
        const userCaseType = _.find(this.results, {case_type_id: this.userCaseTypeId});
        // TODO: Check what is wrong with the need of type casting.
        const userCase = _.find(userCaseType.cases, {customer_reference: parseInt(userReference)});
        return new User({
            firstName: userCase.first_name,
            lastName: userCase.last_name,
            complaints: this.getComplaintsFromData()
        })
    }

    getComplaintsFromData(){
        const complaintCaseType = _.find(this.results, {case_type_id: this.complaintCaseTypeId});
        return _.map(complaintCaseType.cases, (case_entry) => {
            return new Complaint({
                reference: case_entry.complaint_reference,
                summary: case_entry.complaint_summary,
                status: case_entry.current_state
            })
        })
    }
}


class User {
    constructor({ firstName, lastName, complaints=[] }){
        this.firstName = firstName;
        this.lastName = lastName;
        this.complaints = complaints;
    }
}

class Complaint {
    constructor({ reference, summary, status }) {
        this.reference = reference;
        this.summary = summary;
        this.status = status;
    }
}