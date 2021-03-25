import { Component, html } from "@exalt/core";

import firebase from "firebase/app";
import "firebase/auth";

import style from "./login-panel.css";

export class LoginPanel extends Component {
    state = {
        name: ""
    }

    success = new Event("success");

    render() {
        return html`
            <span>${this.state.name == "" ? "Not logged in." : `Logged in as ${this.state.name}`}</span>
            <div id="login">
                <input type="email" id="email" placeholder="Enter staff email" />
                <input type="password" id="pass" placeholder="Enter staff password" />
                <button onclick=${() => this.login()}>Login</button>
            </div>
        `;
    }

    login() {
        let email = this.root.querySelector("#email");
        let pass = this.root.querySelector("#pass");

        firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
            .then((userCredential) => {
                let user = userCredential.user;

                this.success.user = user;
                this.dispatchEvent(this.success);

                this.state.name = user.email;
            });
    }
}

Component.create({ name: "login-panel", styles: [style] }, LoginPanel);