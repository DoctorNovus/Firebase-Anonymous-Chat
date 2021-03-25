import { Component, html } from "@exalt/core";

import { AuthManager } from "../../services/AuthManager";

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

        let user = AuthManager.login(email.value, pass.value);
        this.success.user = user;
        this.dispatchEvent(this.success);
    }
}

Component.create({ name: "login-panel", styles: [style] }, LoginPanel);