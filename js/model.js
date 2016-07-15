import 'whatwg-fetch';

export default class UserDataStore {

    constructor() {
        this.apiBaseURL = "https://test3.caseblocks.com/case_blocks/search";
        this.userReference = "";
        this.authToken = "xFMvzLxiMsy8XdgDqT7r";

    }

    getApiEndPoint() {
        return `${this.apiBaseURL}?query=customer_reference:${this.userReference}&auth_token=${this.authToken}`
    }

    setUserReference(userReference){
        this.userReference = userReference;
    }

    fetchUserData(userReference) {
        return fetch(this.getApiEndPoint()).then((response) => {
            return response.json();
        }).then((json) => {
            const caseType = this.findUserById(json, 2);
            console.log(json);
            console.log(caseType);
        });
    }

    getComplaints(caseTypes) {
        const caseTypeId = 160;
        return caseTypes.filter((caseType) => {
            return caseType.case_type_id  == caseTypeId;
        })
    }

}

class User {
    constructor
}