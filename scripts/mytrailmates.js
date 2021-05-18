firebase.auth().onAuthStateChanged(user => {
    if (user) {
        //userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loadUserFriends(user.data());
        });
    }
});

function loadUserFriends(user) {
    console.log(user.friendslist)
};


//db.collection("users").doc(user.uid)