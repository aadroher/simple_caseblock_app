import React from "react";

import UserDataStore from "../model";

export default class InputUserIdForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    submit() {
        const userReference = this.state.value;
        this.props.loadUserData(userReference);
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
                                   type="text"
                                   onChange={this.handleChange}/>
                        </div>
                        <span className="btn btn-primary"
                                onClick={this.submit}>
                            Enter
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}