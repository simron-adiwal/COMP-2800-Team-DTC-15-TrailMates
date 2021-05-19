let myAddButton = document.getElementById('add-tags');

myAddButton.addEventListener('click', (event) => {
    let newBox = document.createElement('input');
    
    newBox.setAttribute('class', 'text-box');
    newBox.setAttribute('id', 'tag');
    newBox.setAttribute('name', 'tag-form');
    newBox.setAttribute('type', 'text');
    
    myAddButton.insertAdjacentElement('beforebegin', newBox);
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            loadUserData(user.data());
        });
    }
});

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
    // Twitter link
    if (user.linkTwitter) {
        $('#twitter-link').attr('value', user.linkTwitter);
    }
    // Instagram Link
    if (user.linkInstagram) {
        $('#instagram-link').attr('value', user.linkInstagram);
    }
    // Snapchat Link
    if (user.linkSnapchat) {
        $('#snapchat-link').attr('value', user.linkSnapchat);
    }
    
}
