// Assign HTML ID Selectors
const name = $('#profileName');
const age = $('#profileAge');
const gender = $('#profileGender');
const joined = $('#profileJoined');
const hikes = $('#profileHikes');
const rep = $('#profileRep');
const bio = $('#profileBio');
const repBadge = $('#badge')

// Firebase Authorization
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loadUserProfile(user.data());
        });
    }
});

// Functions
/**
 * Load the user's data to the profile page.
 * @param user
 */
function loadUserProfile(user) {
    name.text(user.name);
    name.attr('style', 'color: black;')
    age.text(user.age);
    gender.text(user.gender);
    joined.text(user.joined);
    hikes.text(user.hikes);
    addBadge(user);
    rep.text(user.rep);
    bio.text(user.bio);
    bio.attr('style', "color: black;")
    addTags(user);
    emptyLinks(user);
}

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
 * Take user to the edit profile page.
 */
let toEdit = () => {
    console.log("its working")
    window.location.href = "editProfile.html";
}

// Edit Profile Button Listener
let editProfileButton = document.getElementById('edit-profile-button');
editProfileButton.addEventListener('click', toEdit);
