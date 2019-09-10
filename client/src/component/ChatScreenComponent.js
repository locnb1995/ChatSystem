import React from 'react';
import styles from '../app-css/ChatScreen.module.css';
import LeftMenuComponent from './LeftMenuComponent';
import ChatComponent from './ChatComponent';

export default class ChatScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null
        };
    }

    componentDidMount() {
        var objDiv = document.getElementById("message-list");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    componentWillUnmount() {
        document.body.style = null;
    }

    render() {
        return (
            <div className={styles.ui}>
                <LeftMenuComponent />
                <ChatComponent />
            </div>
        );
    }
}