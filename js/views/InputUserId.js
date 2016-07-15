import React from "react";

export default class InputUserIdForm extends React.Component {

    handleChange(event) {
        this.setState({
            value: event.target.value
        })

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
                                   onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-default" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        );
    }
}