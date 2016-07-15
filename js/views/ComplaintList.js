import React from "react";

export default class ComplaintList extends React.Component {
    render() {
        return (
            <pre>
                {this.props.activeUser}
            </pre>
        )
    }
}

class UserName extends React.Component {

}

class ComplaintTable extends React.Component {
    render(){
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>

                    </th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}