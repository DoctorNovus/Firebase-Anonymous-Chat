import { Component, html } from "@exalt/core";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

import style from "./forum-post.css";
import { DBManager } from "../../services/DBManager";

export class ForumPost extends Component {
    refer = firebase.storage().ref();

    exit = new Event("exit");
    finished = new Event("finished");
    authorized = new Event("authorized");
    delete = new Event("delete");

    state = {
        mode: "main"
    }

    render({ post, active, type = "regular" }) {
        this.post = post;

        if (type == "catalog")
            return html`
            <div class="userInput">
                <input id="nameForPost" placeholder="Name for Post" />
                <input type="text" placeholder="Enter content" id="contentForPost" />
                <button onclick=${() => {
                    this.finished.post = {
                        name: this.root.querySelector("#nameForPost").value, content:
                            this.root.querySelector("#contentForPost").value
                    }; this.dispatchEvent(this.finished)
                }}>Send</button>
            </div>
            `;

        if (!post)
            post = { name: "Template", timestamp: new Date(), content: "Template Message" };

        return html`
            <div class="userPost">
                <div class="post">
                    <div class="user">
                        <div class="bind">
                            <h2>${post.name}</h2>
                            <span> </span>
                            <h2 ${active ? "visible" : "invisible"} class="red" onclick=${()=> this.dispatchEvent(this.exit)}>X
                            </h2>
                        </div>
                        <p>${new Date(post.timestamp).toUTCString()}</p>
                        <button ${this.props.staff=="authorized" ? "visible" : "invisible"} onclick=${()=>
                            this.dispatchEvent(this.delete)}>Delete</button>
                    </div>
                    <div class="content">
                        <p>${active ? post.content : post.shortDescription || post.content ? post.content.substr(0, 20) + "..." :
                "No description"}</p>
                        ${active ? this.authorize() : ""}
                    </div>
                </div>
            </div>
            <div ${active ? "visible" : "invisible" } class="comments">
                ${this.sortPosts(post)}
            </div>
        `;
    }

    setMode(mode) {
        this.state.mode = mode;
    }

    sortPosts(post) {
        if(!post.unauthcomments)
            post.unauthcomments = [];

        return html`
            ${post.comments ? post.comments.map(c => this.renderComment(c)) : ""}
            <div>-----</div>
            ${this.props.staff == "authorized" ? post.unauthcomments ? post.unauthcomments.map(c => this.renderComment(c, "auth")) : "" : ""}
            ${this.getNewCommentInput()}
        `;
    }

    authorize() {
        let mode = this.props.staff;

        if (mode != (null || "")) {
            return html`
                <div class="auth">
                    <button onclick=${() => { this.authorized.toggle = false; this.dispatchEvent(this.authorized) }}>Deny</button>
                    <button onclick=${() => { this.authorized.toggle = true; this.dispatchEvent(this.authorized) }}>Authorize</button>
                </div>
            `;
        }
    }

    checkDelete() {
        let mode = this.props.staff;

        if (mode != (null || "")) {
            return html`
                <div class="delete">
                    <button onclick=${() => { this.delete.toggle = true; this.dispatchEvent(this.delete) }}>Delete</button>
                </div>
            `;
        }
    }

    renderComment(comment, auth) {
        return html`
            <div class="userComment">
                <p>${new Date(comment.timestamp).toUTCString()}</p>
                <p>${comment.content}</p>
                <div ${auth == "auth" ? "visible" : "invisible"} class="buttons">
                    <button onclick=${() => DBManager.removeComment("queueMessages.json", this.props.posts, this.post, comment)}>Deny</button>
                    <button onclick=${() => DBManager.approveComment("messages.json", this.props.posts, this.post, comment)}>Approve</button>
                </div>
            </div>
        `;
    }

    getNewCommentInput() {
        return html`
            <input class="commentInput" id="newComment" placeholder="Enter comment" onchange=${()=> this.onInput()} />
        `;
    }

    onInput() {
        this.props.posts.find(p => p == this.props.post).unauthcomments = this.props.posts.find(p => p == this.props.post).unauthcomments || [];
        this.props.posts.find(p => p == this.props.post).unauthcomments.push({
            timestamp: new Date(),
            content: this.root.querySelector("#newComment").value
        });

        DBManager.set("queueMessages.json", this.props.posts);
    }
}

Component.create({ name: "forum-post", styles: [style] }, ForumPost);