import { Component, html } from "@exalt/core";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

import style from "./forum-post.css";

export class ForumPost extends Component {
    refer = firebase.storage().ref();

    exit = new Event("exit");
    finished = new Event("finished");

    render({ post, active, type = "regular" }) {
        if(type == "catalog")
            return html`
            <div class="userInput">
                <input id="nameForPost" placeholder="Name for Post" />
                <input type="text" placeholder="Enter content" id="contentForPost" />
                <button onclick=${() => {this.finished.post = {name: this.root.querySelector("#nameForPost").value, content: this.root.querySelector("#contentForPost").value}; this.dispatchEvent(this.finished)}}>Send</button>
            </div>
            `;

        if(!post)
            post = {name: "Template", timestamp: new Date(), content: "Template Message"};

        return html`
            <div class="userPost">
                <div class="post">
                    <div class="user">
                        <div class="bind">
                            <h2>${post.name}</h2>
                            <span> </span>
                            <h2 ${active ? "visible" : "invisible"} class="red" onclick=${()=> this.dispatchEvent(this.exit)}>X</h2>
                        </div>
                        <p>${new Date(post.timestamp).toUTCString()}</p>
                    </div>
                    <div class="content">
                        <p>${active ? post.content : post.shortDescription || post.content ? post.content.substr(0, 20) + "..." :
                            "No description"}</p>
                    </div>
                </div>
            </div>
            <div ${active ? "visible" : "invisible" } class="comments">
                ${this.sortPosts(post)}
            </div>
        `;
    }

    sortPosts(post) {
        return html`
            ${post.comments ? post.comments.map(c => this.renderComment(c)) : ""}
            ${this.getNewCommentInput()}
        `;
    }

    renderComment(comment) {
        return html`
            <div class="userComment">
                <p>${new Date(comment.timestamp).toUTCString()}</p>
                <p>${comment.content}</p>
            </div>
        `;
    }

    getNewCommentInput() {
        return html`
            <input class="commentInput" id="newComment" placeholder="Enter comment" onchange=${()=> {
            this.props.posts.find(p => p == this.props.post).comments = this.props.posts.find(p => p == this.props.post).comments || [];
            this.props.posts.find(p => p == this.props.post).comments.push({
                timestamp: new Date(),
                content: this.root.querySelector("#newComment").value
            }); 
            this.posts = this.props.posts
            }} />
        `;
    }

    set posts(post) {
        let posts = this.refer.child("queueMessages.json");
        posts.putString(JSON.stringify(post, 4, null));

        window.location.reload();
    }
}

Component.create({ name: "forum-post", styles: [style] }, ForumPost);