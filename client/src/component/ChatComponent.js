import React from 'react';
import styles from '../app-css/ChatScreen.module.css';
import userimage from '../img/user-image.jpg';
//import serverimage from '../img/server-image.jpg';



export default class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginSuccess: false
        };
    }

    render() {
        return (
            <div className={styles.chat}>
                <div className={styles.top}>
                    <div className={styles.avatar}>
                        <img width="50" height="50" alt="" src={userimage} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>User</div>
                        <div className={styles.count}>already 1 902 messages</div>
                    </div>
                    <i className={[styles.fa, styles.fa_star].join(' ')}></i>
                </div>
                <ul className={styles.messages} id="message-list">
                    <li className={styles.i}>
                        <div className={styles.head}>
                            <span className={styles.time}>10:13 AM, Today</span>
                            <span className={styles.name}>User</span>
                        </div>
                        <div className={styles.message}>Hello!</div>
                    </li>
                    <li className={styles.i}>
                        <div className={styles.head}>
                            <span className={styles.time}>10:13 AM, Today</span>
                            <span className={styles.name}>User</span>
                        </div>
                        <div className={styles.message}>:D</div>
                    </li>
                    <li className={styles.friend_with_a_SVAGina}>
                        <div className={styles.head}>
                            <span className={styles.time}>Me</span>
                            <span className={styles.name}>10:15 AM, Today</span>
                        </div>
                        <div className={styles.message}>How are you?</div>
                    </li>
                </ul>
                <div className={styles.write_form}>
                    <textarea placeholder="Type your message" name="e" id="texxt" rows="2"></textarea>
                    <i className={[styles.fa, styles.fa_picture_o].join(' ')}></i>
                    <i className={[styles.fa, styles.fa_file_o].join(' ')}></i>
                    <span className={styles.send}>Send</span>
                </div>
            </div>
        );
    }
}