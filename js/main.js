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
        };
        this.loadUserData = this.loadUserData.bind(this);
        // WARNING: Only for testing.
        this.loadUserData(2);
    }

    loadUserData(userReference) {
        this.userDataStore.fetchData(userReference).then(() => {
            const activeUser = this.userDataStore.getUserFromData(userReference);
            this.setState({
                page: 'complaint_list',
                activeUser: activeUser
            });
        })
    }

    render() {
        return (
            <DefaultLayout page={this.state.page}
                           loadUserData={this.loadUserData}
                           activeUser={this.state.activeUser} />
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Application/>, app);