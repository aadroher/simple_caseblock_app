import React from "react";

export default class ComplaintDetail extends React.Component {

    constructor(props){
        super(props);
        this.back = this.back.bind(this);
    }

    back() {
        const userReference = this.props.activeUser.reference;
        this.props.selectUser(userReference);
    }

    render() {
        return (
            <div>
                <h3>
                    Complaint {this.props.complaint.reference}
                </h3>
                <dl>
                    <dt>
                        Summary
                    </dt>
                    <dl>
                        {this.props.complaint.summary}
                    </dl>
                    <dt>
                        Status
                    </dt>
                    <dl>
                        {this.props.complaint.status}
                    </dl>
                </dl>
                <span className="btn btn-primary" onClick={this.back}>
                    Back
                </span>
            </div>
        );
    }
}
