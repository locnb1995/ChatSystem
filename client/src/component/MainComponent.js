import React from 'react';
//import LoginComponent from './LoginComponent';
import ChatScreenComponent from './ChatScreenComponent';
import LoginContainer from '../container/LoginContainer';


export default class MainComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginSuccess : false
        };
    }

    render() {
        let mainScreen;
        if(this.state.loginSuccess){
            mainScreen = <ChatScreenComponent />;
        }else{
            mainScreen = <LoginContainer />;
        }
        return(
            mainScreen
        );
    }
}