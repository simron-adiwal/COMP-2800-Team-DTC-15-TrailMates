// Get target userID
// URL id = ./user.html?userid=<targeted-user-id>
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const otherUser = urlParams.get('userid')

// Assign HTML ID selectors
const name = $('#profileName');
const age = $('#profileAge');
const gender = $('#profileGender');
const joined = $('#profileJoined');
const hikes = $('#profileHikes');
const rep = $('#profileRep');
const repBadge = $('#badge');
const bio = $('#profileBio');

// Firebase Authorization
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        let loggedUserData;
        let targetUserData;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loggedUserData = user.data();
            console.log(loggedUserData);
            db.collection("users").doc(otherUser).get().then(function(user) {
                targetUserData = user.data();
                console.log(targetUserData);
                loadUserProfile(loggedUserData, targetUserData);
            });
        });
    }
});
// Add TrailMate Listener
let addMateButton = document.getElementById('add-trailmate');
addMateButton.addEventListener('click', addTrailMate)

// Add Rep Listener
let addRepButton = document.getElementById('give-rep');
addRepButton.addEventListener('click', addRep)

// Functions TODO: Remove console logs
/**
 * Load the user's data to the profile page.
 * @param loggedUserData
 * @param targetUserData
 */
function loadUserProfile(loggedUserData, targetUserData) {
    console.log(targetUserData);
    name.text(targetUserData.name);
    name.attr('style', 'color: black;')
    age.text(targetUserData.age);
    gender.text(targetUserData.gender);
    joined.text(targetUserData.joined);
    hikes.text(targetUserData.hikes);
    rep.text(targetUserData.rep);
    addBadge(targetUserData);
    bio.text(targetUserData.bio);
    bio.attr('style', "color: black;")
    addTags(targetUserData);
    emptyLinks(targetUserData);
}

/**
 * Add the user badge image to their profile.
 * @param user
 */
function addBadge(user) {
    if (user.rep < 10)
        repBadge.attr('src', './images/Badge_Green.png');
    else if (user.rep >= 10 && user.rep < 50)
        repBadge.attr('src', './images/Badge_Bronze.png');
    else if (user.rep >= 50 && user.rep < 100)
        repBadge.attr('src', './images/Badge_Silver.png');
    else if (user.rep >= 100)
        repBadge.attr('src', './images/Badge_Gold.png');
}

/**
 * Create and append the user's tags.
 * @param user
 */
function addTags(user) {
    console.log(user.tags);
    user.tags.forEach((tag) => {
        let newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'tagCard');
        let newtag = document.createElement('h6');
        let textnode = document.createTextNode(tag)
        newtag.appendChild(textnode);
        newdiv.append(newtag);
        $('.tags').append(newdiv);
    });
}

/**
 * Remove any unlinked social media accounts.
 * @param user
 */
function emptyLinks(user) {
    if (!(user.linkFacebook)) {
        $('#profileFacebook').remove();
    }
    if (!(user.linkTwitter)) {
        $('#profileTwitter').remove();
    }
    if (!(user.linkInstagram)) {
        $('#profileInstagram').remove();
    }
    if (!(user.linkSnapchat)) {
        $('#profileSnapchat').remove();
    }
}

/**
 * Add a TrailMate to user's "friend list".
 */
function addTrailMate() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("users").doc(user.uid).update({
                friendslist: firebase.firestore.FieldValue.arrayUnion(otherUser)
                // otherUser is the target uid
            });
        }
    });
}

/**
 * Give another user one Rep
 */
function addRep() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            let loggedUser = user.uid;
            db.collection("users").doc(user.uid).get().then(function(user) {
                let userData = user.data();
                db.collection("users").doc(otherUser).get().then(function(user) {
                    let targetUserData = user.data();
                    let newRep = targetUserData.rep + 1;
                    if (!(userData.hasRepped.includes(otherUser))) {
                        db.collection("users").doc(otherUser).update({
                            rep: newRep
                        });
                        db.collection("users").doc(loggedUser).update({
                            hasRepped: firebase.firestore.FieldValue.arrayUnion(otherUser)
                        });
                    }
                });
            })
        }
    });
}


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        //userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function (user) {
            randomBackground(user.data());
        });
    }
    else console.log("Authentication failed.");
});


function randomBackground(user) {
    // if DB field "picture" exists, load that picture. else randomly get a picture url, write it to the DB with a newly created "picture" field and then load that picture
    // db.collection("users").doc(user.uid).get().then(function (user) {
    let apple = user.picture;
    if (typeof(apple) == "string") {
        document.getElementById("avatar").setAttribute("src", apple);
    } else {
        let list = ["https://firebasestorage.googleapis.com/v0/b/trailmates-657f0.appspot.com/o/yellow_avatar.png?alt=media&token=ff124a11-70d0-447a-860c-2a68a7478a17",
            "https://firebasestorage.googleapis.com/v0/b/trailmates-657f0.appspot.com/o/red_avatar.png?alt=media&token=fe3ea5bc-57d0-4fa0-a146-c9fa5bef4ffe",
            "https://firebasestorage.googleapis.com/v0/b/trailmates-657f0.appspot.com/o/purple_avatar.png?alt=media&token=40fd43e2-76ca-49fb-a836-54042004925f",
            "https://firebasestorage.googleapis.com/v0/b/trailmates-657f0.appspot.com/o/blue_avatar.png?alt=media&token=1a373968-2aa8-4ae9-a220-44c1b583e2e4"];
        let index = Math.floor(Math.random() * list.length);
        db.collection("users").doc(user.id).set(
            {picture: list[index]},   {merge: true}
        ).then()
        document.getElementById("avatar").setAttribute("src", list[index]);
    }
}
