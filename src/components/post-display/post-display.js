import { Component, html } from "@exalt/core";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

import style from "./post-display.css";

import "@components/forum-post";

export class PostDisplay extends Component {
    refer = firebase.storage().ref();

    state = {
        activePost: { name: "Template", timestamp: new Date(), content: "Template Message" },
        posts: []
    }

    render() {
        return html`
            <div ${this.state.activePost.name !="Template" ? "" : "inactive"} id="display-post">
                <forum-post posts=${this.state.posts} active="true" post=${this.state.activePost} onexit=${()=>
                    this.state.activePost = { name: "Template", timestamp: new Date(), content: "Template Message" }} />
            </div>
            <div ${this.state.activePost.name !="Template" ? "inactive" : ""} id="display-posts">
                ${this.createCatalog()}
            </div>
        `;
    }

    mount() {
        this.getPosts();
    }

    createCatalog() {
        return html`
            <div class="megaPosts">
                ${this.state.posts.map(p => this.createPost(p))}
            </div>
            <forum-post type="catalog" onfinished=${(post) => {
                post.post.timestamp = new Date();

                this.state.posts.push(post.post);

                this.posts = this.state.posts;

                window.location.reload();
            }} />
        `;
    }

    createPost(post) {
        return html`
            <forum-post onclick=${()=> this.state.activePost = post} post=${post} />
        `;
    }

    getPosts() {
        let posts = this.refer.child("queueMessages.json");
        posts.getDownloadURL()
            .then((url) => {
                fetch(url).then(res => res.text()).then(data => {
                    if (data.length <= 0)
                        return;

                    try {
                        data = JSON.parse(data);
                        this.state.posts = data;
                    } catch (e) {
                        console.log(e);
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    set posts(post) {
        let posts = this.refer.child("queueMessages.json");
        posts.putString(JSON.stringify(post, 4, null));
    }
}

Component.create({ name: "post-display", styles: [style] }, PostDisplay);