import _ from "lodash";
import React from "react";

export default class ComplaintList extends React.Component {
    render() {
        return (
            <div>
                <UserName activeUser={this.props.activeUser}/>
                <ComplaintTable complaints={this.props.activeUser.complaints}
                                selectComplaint={this.props.selectComplaint}/>
            </div>
        );
    }
}

class UserName extends React.Component {
    render() {
        const { firstName, lastName } = this.props.activeUser;
        return (
            <h3>
                Welcome {firstName} {lastName}
            </h3>
        )
    }
}

class ComplaintTable extends React.Component {
    render(){
        return (
            <table className="table table-striped">
                <tbody>
                {_.map(this.props.complaints, (complaint) => {
                    return <ComplaintRow complaint={complaint}
                                         selectComplaint={this.props.selectComplaint}
                                         key={complaint.reference}/>
                })}
                </tbody>
            </table>
        );
    }
}

class ComplaintRow extends React.Component {

    constructor(props) {
        super(props);
        this.viewComplaint = this.viewComplaint.bind(this);
    }

    viewComplaint(){
        const complaintReference = this.props.complaint.reference;
        this.props.selectComplaint(complaintReference);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.complaint.reference}
                </td>
                <td>
                    {this.props.complaint.summary}
                </td>
                <td>
                    <span className="btn btn-primary btn-sm"
                          onClick={this.viewComplaint}>
                            View
                    </span>
                </td>
            </tr>
        );
    }
}