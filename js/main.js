import React from "react";
import ReactDOM from "react-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import UserDataStore from "./model";

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.userDataStore = new UserDataStore();
        this.state = {
            page: 'user_input',
            activeUser: null,
            activeComplaint: null,
        };
        this.selectUser = this.selectUser.bind(this);
        this.loadUserData = this.loadUserData.bind(this);
        this.selectComplaint = this.selectComplaint.bind(this);
    }

    selectUser(userReference){
        if (!this.userDataStore.loaded) {
            this.loadUserData(userReference);
        } else {
            const activeUser = this.userDataStore.getUserFromData(userReference);
            this.setState({
                page: 'complaint_list',
                activeUser: activeUser
            });
        }
    }

    loadUserData(userReference) {
        this.userDataStore.fetchData(userReference).then(() => {
            this.selectUser(userReference);
        });
    }

    selectComplaint(complaintReference) {
        const activeComplaint = this.state.activeUser.getComplaint(complaintReference);
        this.setState({
            page: 'complaint_detail',
            activeComplaint: activeComplaint
        });
    }

    render() {
        return (
            <DefaultLayout page={this.state.page}
                           selectUser={this.selectUser}
                           activeUser={this.state.activeUser}
                           selectComplaint={this.selectComplaint}
                           activeComplaint={this.state.activeComplaint}/>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Application/>, app);