import React from "react";

export default class ComplaintDetail extends React.Component {


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
                <span className="btn btn-primary">
                    Back
                </span>
            </div>
        );
    }
}
