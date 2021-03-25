import { Component, html } from "@exalt/core";

import style from "./post-display.css";

import "@components/forum-post";
import { DBManager } from "../../services/DBManager";

export class PostDisplay extends Component {
    mode = "regular";

    state = {
        activePost: { name: "Template", timestamp: new Date(), content: "Template Message" },
        posts: [],
        secondPosts: [],
        user: "",
        mode: "main"
    }

    render() {
        let staff = "";

        if (this.state.user != (null || ""))
            staff = "authorized";

        return html`
        <div class="switcher">
            <button ${staff=="authorized" ? "" : "invisible" } onclick=${() => { this.state.mode = this.state.mode == "main" ? "backend" : "main"; this.getPosts() }}>Switch to ${this.state.mode == "main" ? "Backend" : "Main"}</button>
        </div>
        <div ${this.state.activePost.name !="Template" ? "" : "inactive"} id="display-post">
            <forum-post id="main" ondelete=${() => DBManager.remove(this.state.mode == "main" ? "messages.json" : "queueMessages.json", this.state.posts, this.state.activePost)} staff=${staff} onauthorized=${e => this.authorizePost(e)} posts=${this.state.posts} active="true" post=${this.state.activePost} onexit=${() => this.state.activePost = { name: "Template", timestamp: new Date(), content: "Template Message" }} />
        </div>
        <div ${this.state.activePost.name !="Template" ? "inactive" : ""} id="display-posts">
            ${this.createCatalog()}
        </div>
        `;
    }

    getPosts(path, callback) {
        DBManager.get(`${path || this.state.mode == "main" ? "messages.json" : "queueMessages.json"}`).then((posts) => {
            this.state.posts = posts;

            if(callback)
                callback(posts);
        });
    }

    mount() {
        this.getPosts();
    }

    onUpdate() {
        this.root.querySelector("#main").setMode(this.state.mode);
    }

    setUser(user) {
        this.state.user = user;
    }

    createCatalog() {
        return html`
            <div class="megaPosts">
                ${this.state.posts.map(p => this.createPost(p))}
            </div>
            <forum-post type="catalog" onfinished=${post=> this.finish(post)} />
        `;
    }

    finish(post) {
        post = post.post;

        post.timestamp = new Date();

        DBManager.add("queueMessages.json", this.state.posts, post);
    }

    authorizePost(e) {
        if (e.toggle == true) {
            this.getPosts("messages.json", (posts) => {
                DBManager.add("messages.json", posts, this.state.activePost);
            });

            this.getPosts("queueMessages.json", (posts) => {
                DBManager.remove("queueMessages.json", posts, this.state.activePost);
            });
        } else {
            DBManager.remove("queueMessages.json", this.state.posts, this.state.activePost);
        }
    }

    createPost(post) {
        return html`
            <forum-post onclick=${()=> this.state.activePost = post} post=${post} />
        `;
    }
}

Component.create({ name: "post-display", styles: [style] }, PostDisplay);