import { Component, html } from "@exalt/core";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

import style from "./post-display.css";

import "@components/forum-post";

export class PostDisplay extends Component {
    refer = firebase.storage().ref();

    mode = "regular";

    state = {
        activePost: { name: "Template", timestamp: new Date(), content: "Template Message" },
        posts: [],
        secondPosts: [],
        user: ""
    }

    render() {
        let staff = "";

        if (this.state.user != (null || ""))
            staff = "authorized";

        return html`
            <div ${this.state.activePost.name != "Template" ? "" : "inactive" } id="display-post">
                <forum-post ondelete=${()=> this.deletePost()} staff=${staff} onauthorized=${e => this.authorizePost(e)}
                    posts=${this.state.posts} active="true"
                    post=${this.state.activePost} onexit=${() =>
                this.state.activePost = { name: "Template", timestamp: new Date(), content: "Template Message" }} />
            </div>
            <div ${this.state.activePost.name != "Template" ? "inactive" : "" } id="display-posts">
                ${this.createCatalog()}
            </div>
        `;
    }

    mount() {
        this.getPosts();
    }

    setUser(user) {
        this.state.user = user;
        this.getPosts();
    }

    deletePost() {
        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i] == this.state.activePost) {
                this.state.posts.splice(i, 1);
            }
        }

        this.mode = "regular";
        this.posts = this.state.posts;

    }

    createCatalog() {
        return html`
            <div class="megaPosts">
                ${this.state.posts.map(p => this.createPost(p))}
            </div>
            <forum-post type="catalog" onfinished=${(post)=> {
                post.post.timestamp = new Date();
            
                this.state.posts.push(post.post);
            
                this.posts = this.state.posts;
            
                // window.location.reload();
                }} />
        `;
    }

    authorizePost(e) {
        if (e.toggle == true) {
            this.getPosts(true);
        } else {
            for (let i = 0; i < this.state.posts.length; i++) {
                if (this.state.posts[i].name == this.state.activePost.name && this.state.posts[i].timestamp.toString() == this.state.activePost.timestamp.toString()) {
                    this.state.posts.splice(i, 1);
                }
            }
    
            this.mode = "auth";
            this.posts = this.state.posts;
        }
    }

    authTwo() {
        console.log(this.state.activePost);
        
        this.state.secondPosts.push(this.state.activePost);

        this.mode = "regular";

        this.posts = this.state.secondPosts;

        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i].name == this.state.activePost.name && this.state.posts[i].timestamp.toString() == this.state.activePost.timestamp.toString()) {
                this.state.posts.splice(i, 1);
            }
        }

        this.mode = "auth";
        this.posts = this.state.posts;
    }

    createPost(post) {
        return html`
            <forum-post onclick=${() => this.state.activePost = post} post=${post} />
        `;
    }

    getPosts(second = false) {
        let getter = "messages.json";

        if (this.state.user != (null || ""))
            getter = "queueMessages.json";

        if (second)
            getter = "messages.json";

        let posts = this.refer.child(getter);
        posts.getDownloadURL()
            .then((url) => {
                fetch(url).then(res => res.text()).then(data => {
                    if (data.length <= 0)
                        return;

                    try {
                        data = JSON.parse(data);
                        if (second) {
                            this.state.secondPosts = data;
                            this.authTwo();
                        }
                        else
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
        let getter = "queueMessages.json";

        if (this.state.user != (null || "") && this.mode == "regular")
            getter = "messages.json";

        let posts = this.refer.child(getter);
        posts.putString(JSON.stringify(post, 4, null));
    }
}

Component.create({ name: "post-display", styles: [style] }, PostDisplay);