import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

export class DBManager {
    static get(path) {
        return new Promise((resolve, reject) => {
            let posts = refer.child(path);
            posts.getDownloadURL()
                .then((url) => {
                    fetch(url).then(res => res.text()).then(data => {
                        if (data.length <= 0)
                            return;

                        try {
                            data = JSON.parse(data);
                            resolve(data);
                        } catch (e) {
                            console.log(e);
                        }
                    })
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static remove(path, posts, post) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].name == post.name && posts[i].timestamp.toString() == post.timestamp.toString()) {
                posts.splice(i, 1);
            }
        }

        DBManager.set(path, posts);
    }

    static add(path, posts, post) {
        posts.push(post);

        DBManager.set(path, posts);
    }

    static set(path, posts) {
        if (!Array.isArray(posts))
            posts = [posts];
            
        refer.child(path).putString(JSON.stringify(posts, 4, null));
    }

    static approveComment(path, posts, post, comment) {
        if (!post.unauthcomments)
            post.unauthcomments = [];

        let newPost = posts.find(p => p.name == post.name && p.timestamp.toString() == post.timestamp.toString());
        if (!newPost.comments)
            newPost.comments = [];

        newPost.comments.push(comment);

        if (post.unauthcomments)
            for (let i = 0; i < post.unauthcomments.length; i++) {
                if (post.unauthcomments[i].name == comment.name && post.unauthcomments[i].timestamp.toString() == comment.timestamp.toString())
                    post.unauthcomments.splice(i, 1);
            }

        DBManager.set(path, post);
    }

    static removeComment(path, posts, post, comment) {
        if (!post.unauthcomments)
            post.unauthcomments = [];

        let newPost = posts.find(p => p.name == post.name && p.timestamp.toSTring() == post.timestamp.toString());
        if (post.unauthcomments)
            for (let i = 0; i < post.unauthcomments.length; i++) {
                if (post.unauthcomments[i].name == comment.name && post.unauthcomments[i].timestamp.toString() == comment.timestamp.toString())
                    post.unauthcomments.splice(i, 1);
            }

        DBManager.set(path, posts);
    }
}