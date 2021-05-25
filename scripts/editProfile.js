// Firebase Authorization
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loadUserData(user.data());
        });
    }
});

// Add Tags Listener
let myAddButton = document.getElementById('add-tags');
myAddButton.addEventListener('click', addTagBox);

// Functions
/**
 * Read the user's data from database and post it to the profile page.
 * @param user
 */

function loadUserData(user) {
    $('#age').attr('value', user.age);
    let myGender = user.gender;
    switch(myGender) {
        case "M": $('#male').attr('checked', 'checked'); break;
        case "F": $('#female').attr('checked', 'checked'); break;
        default: $('#otherGender').attr('checked', 'checked'); break;
    }
    // Facebook link
    if (user.linkFacebook) {
        $('#facebook-link').attr('value', user.linkFacebook);
    }
    // Instagram Link
    console.log(user.linkInstagram)
    if (user.linkInstagram) {
        $('#instagram-link').attr('value', user.linkInstagram);
    }
    // Twitter link
    if (user.linkTwitter) {
        $('#twitter-link').attr('value', user.linkTwitter);
    }
    // Snapchat Link
    if (user.linkSnapchat) {
        $('#snapchat-link').attr('value', user.linkSnapchat);
    }
    user.tags.forEach((item) => {
        addTagBox()
        let boxes = document.getElementsByName('tag-form');
        let currentBox = boxes[boxes.length-1];
        currentBox.value = item;
    })
    $('#bio').text(user.bio);


}

/**
 * Add another tag text box.
 */
function addTagBox() {
    let newBox = document.createElement('input');

    newBox.setAttribute('class', 'text-box');
    newBox.setAttribute('id', 'tag');
    newBox.setAttribute('name', 'tag-form');
    newBox.setAttribute('type', 'text');

    myAddButton.insertAdjacentElement('beforebegin', newBox);
}




function submitProfile() {
    // age
    let newAge = $('#age').val();

    // tags
    let newTags = document.getElementsByName('tag-form');
    let newTagValues = []
    newTags.forEach((item) => {
        if (item.value!=="") {
            newTagValues.push(item.value);
        }
    });

    // bio
    let newBio = $('#bio').val();

    // gender
    let newGender;
    document.getElementsByName('genderradio').forEach((item) => {
        console.log(item.checked);
        if (item.checked) {
            newGender = item.value
        }
    })

    // links
    let newLinkFacebook =$('#facebook-link').val();
    let newLinkInstagram =$('#instagram-link').val();
    let newLinkTwitter =$('#twitter-link').val();
    let newLinkSnapchat =$('#snapchat-link').val();

    console.log("Now THIS is podracing!");

    // update all, then redirect to profile.html
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // userId = user.uid;
            async function awaitUpdate() {
                await db.collection("users").doc(user.uid).update({
                    age: newAge,
                    tags: newTagValues,
                    bio: newBio,
                    gender: newGender,
                    linkFacebook: newLinkFacebook,
                    linkTwitter: newLinkTwitter,
                    linkInstagram: newLinkInstagram,
                    linkSnapchat: newLinkSnapchat
                })
                window.location.href = "profile.html";
            }
            awaitUpdate();
        }
    })

}

$('#submit-profile').click(submitProfile)
