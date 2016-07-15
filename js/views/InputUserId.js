import React from "react";

import UserDataStore from "../model";

export default class InputUserIdForm extends React.Component {

    constructor() {
        super();
        this.setState({
            dataStore: new UserDataStore(),
            value: ''
        });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    getUser() {
        const userReference = this.state.value;
        this.state.dataStore.fetchUserData(userReference);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label for="userId">
                                What is your unique customer number?
                            </label>
                            <input id="userId"
                                   className="form-control"
                                   type="number"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                        <a className="btn btn-default"
                                onClick={this.getUser.bind(this)}>
                            Enter
                        </a>
                    </form>
                </div>
            </div>
        );
    }
}