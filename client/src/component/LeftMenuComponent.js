import React from 'react';
import styles from '../app-css/ChatScreen.module.css';
import userimage from '../img/user-image.jpg';
import serverimage from '../img/server-image.jpg';



export default class LeftMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginSuccess: false
        };
    }

    render() {
        return (
            <div className={styles.left_menu}>
                <form action="#" className={styles.search}>
                    <input placeholder="search..." type="search" name="" id="" />
                    <input type="submit" value="&#xf002;" />
                </form>
                <menu className={styles.list_friends}>
                    <li>
                        <img width="50" height="50" alt="" src={serverimage} />
                        <div className={styles.info}>
                            <div className={styles.user}>Server</div>
                            <div className={[styles.status, styles.on].join(' ')}> {'online'}</div>
                        </div>
                    </li>
                    <li>
                        <img width="50" height="50" alt="" src={userimage} />
                        <div className={styles.info}>
                            <div className={styles.user}>User1</div>
                            <div className={[styles.status, styles.on].join(' ')}> {'online'}</div>
                        </div>
                    </li>
                    <li>
                        <img width="50" height="50" alt="" src={userimage} />
                        <div className={styles.info}>
                            <div className={styles.user}>User2</div>
                            <div className={[styles.status, styles.on].join(' ')}> {'offline'}</div>
                        </div>
                    </li>
                </menu>
            </div>
        );
    }
}