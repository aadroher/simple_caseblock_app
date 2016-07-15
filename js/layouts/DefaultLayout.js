import React from "react";
import InputUserIdForm from "../views/InputUserId";

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Body/>
            </div>

        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <InputUserIdForm/>
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