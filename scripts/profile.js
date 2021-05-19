/*
 * profile.js
 *
 * JavaScript file containing scripts for editing the profile page
 *
*/

/* Example firebase read
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
});
 */

const name = $('#profileName');
const age = $('#profileAge');
const gender = $('#profileGender');
const joined = $('#profileJoined');
const hikes = $('#profileHikes');
const rep = $('#profileRep');
const bio = $('#profileBio');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loadUserProfile(user.data());
        });
    }
});

function loadUserProfile(user) {
    console.log(user);
    name.text(user.name);
    name.attr('style', 'color: black;')
    age.text(user.age);
    gender.text(user.gender);
    joined.text(user.joined);
    hikes.text(user.hikes);
    rep.text(user.rep);
    bio.text(user.bio);
    bio.attr('style', "color: black;")
    addTags(user);
    emptyLinks(user);
}

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

function writeProfile(user) {
    const profileDoc = db.collection("users").doc(user.uid)
}
