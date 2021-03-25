import firebase from "firebase/app";
import "firebase/auth";

export class AuthManager {
    static login(email, password){
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    resolve(user);
                })
                .catch(reject);
        });
    }
}