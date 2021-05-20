firebase.auth().onAuthStateChanged(user => {
    if (user) {
        //userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function (user) {
            loadUserFriends(user.data());
        });
    }
    else console.log("Authentication failed.");
});

function loadUserFriends(user) {
    console.log(user.friendslist)

    let friendList = user.friendslist;
    friendList.forEach((friend) => {
        db.collection("users").doc(friend).get().then(function (frienduser) {
            let frienddata = frienduser.data();
            console.log(frienddata.name);
        });
    });
}


//db.collection("users").doc(user.uid)
