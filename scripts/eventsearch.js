// function loadUserFriends(user) {
//     console.log(user.friendslist)

//     let friendList = user.friendslist;
//     friendList.forEach((friend) => {
//         db.collection("users").doc(friend).get().then(function (frienduser) {
//             let frienddata = frienduser.data();
//             console.log(frienddata.name);
//             // $("body").append('<a href="profile.html" class="profile-anchor"><div class="contact-card"> <img src="https://randomuser.me/api/portraits/thumb/men/45.jpg" alt="User Image Here" class="user-image"><h5 class="user-name">' + String(frienddata.name) + '</h5></div> </a>')
//         });
//     });
// }

function eventQuery() {
    // firebase.auth().onAuthStateChanged(function (user) {
    // console.log(db.collection('hikeDetails').doc('d').collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P'))
        // doc_ID = "DFxWMDGIhbOZSqIyYjXk";
        // console.log("console log it here after timeout " + doc_ID)
        db.collection('events')
            // db.collection('hikeDetails').doc('Kennedy Falls')

            // .collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P')
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            });
        }

eventQuery()