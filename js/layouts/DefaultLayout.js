import React from "react";
import InputUserIdForm from "../views/InputUserId";
import ComplaintList from "../views/ComplaintList";

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Body page={this.props.page}
                      loadUserData={this.props.loadUserData}/>
            </div>

        );
    }
}

class Body extends React.Component {
    render() {
        var page;
        if(this.props.page === 'user_input') {
            page = <InputUserIdForm loadUserData={this.props.loadUserData}/>
        } else if (this.props.activeUser) {
            page = <ComplaintList activeUser={this.props.activeUser}/>
        } else {
            // Error
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        {page}
                    </div>
                </div>
            </div>
        );
    }
}

class TopBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        Simple CaseBlocks App
                    </span>
                </div>
            </nav>
        );
    }
}