import { Component, html } from "@exalt/core";
import "./index.css";

import "@components/post-display";
import "@components/login-panel";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

/* Set Firebase Config and Initialize below this */

/**
 * const firebaseConfig = {...}
 * firebase.initializeApp(firebaseConfig)
 */

const firebaseConfig = {
    apiKey: "AIzaSyCG3uN9ufwu_CMWvT-YEjBemdeeKbjFUnw",
    authDomain: "scratal-c77cb.firebaseapp.com",
    projectId: "scratal-c77cb",
    storageBucket: "scratal-c77cb.appspot.com",
    messagingSenderId: "634884394477",
    appId: "1:634884394477:web:ca9a8d63b689dd9b7b6be4",
    measurementId: "G-MPGMXMLP0K"
};

firebase.initializeApp(firebaseConfig);

/* Set Firebase Config and Initialize above this */

export class App extends Component {

    render() {
        return html`
            <login-panel />
            <post-display />
        `;
    }
}

Component.create({ name: "app-root" }, App);