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
 *  Load the user's data to the profile page.
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
    bio.text(targetUserData.bio);
    bio.attr('style', "color: black;")
    addTags(targetUserData);
    emptyLinks(targetUserData);
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
