import React from 'react';
import styles from '../app-css/Login.module.css';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        document.body.style.background = '#76b852';
        document.body.style.background = '-webkit-linear-gradient(right, #76b852, #8DC26F)';
        document.body.style.background = '-moz-linear-gradient(right, #76b852, #8DC26F)';
        document.body.style.background = '-o-linear-gradient(right, #76b852, #8DC26F)';
        document.body.style.background = 'linear-gradient(to left, #76b852, #8DC26F)';
        //document.body.style = styles.body;
    }

    componentWillUnmount(){
        document.body.style = null;
    }

    render() {
        console.log(this.props.user);
        return (
            <div className={styles.login_page}>
                <div className={styles.form}>
                    <form className={styles.login_form}>
                    <input type="text" placeholder="username" onChange={this.props.usernameChange} />
                    <input type="password" placeholder="password" onChange={this.props.passwordChange} />
                    <p className={styles.alert}>{this.props.alert}</p>
                    <button onClick={(e) => this.props.onLogin(e)}>login</button>
                    <p className={styles.message}>Not registered? <a href="#top">Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }
}