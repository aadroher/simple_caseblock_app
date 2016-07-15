import React from "react";
import InputUserIdForm from "../views/InputUserId";
import ComplaintList from "../views/ComplaintList";
import ComplaintDetail from "../views/ComplaintDetail";

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Body page={this.props.page}
                      selectUser={this.props.selectUser}
                      activeUser={this.props.activeUser}
                      selectComplaint={this.props.selectComplaint}
                      activeComplaint={this.props.activeComplaint}/>
            </div>

        );
    }
}

class Body extends React.Component {
    render() {
        var page;
        switch (this.props.page) {
            case 'user_input':
                page = <InputUserIdForm selectUser={this.props.selectUser}/>
                break;
            case 'complaint_list':
                page = <ComplaintList activeUser={this.props.activeUser}
                                      selectComplaint={this.props.selectComplaint}/>
                break;
            case 'complaint_detail':
                page = <ComplaintDetail activeUser={this.props.activeUser}
                                        complaint={this.props.activeComplaint}
                                        selectUser={this.props.selectUser}/>
                break;
            default:
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