// URL search param
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const searchURLParam = urlParams.get('search').toLowerCase()
console.log(searchURLParam)

// Firebase collection
const users = db.collection('users')
// searchEvents()

// Search Feature
/**
 * Search events by name in the database.
 */
// function searchEvents(user) {
//     users.get().then((eventQuery) => {
//         console.log(user.uid)
//         eventQuery.forEach((document) => {
//
//             if (document.isEqual(user)) {
//                 console.log("That's you!");
//                 return;
//             }
//             if (document.data().name.toLowerCase().includes(searchURLParam.toLowerCase())) {
//                 printUsers(document)
//             }
//         })
//     })
// }

function printUsers(user) {
    $("#friend").append('<a class="profile-anchor"><div class="contact-card"> <img src="https://randomuser.me/api/portraits/thumb/men/45.jpg" alt="User Image Here" class="user-image"><h5 class="user-name"></h5></div> </a>')
    let friends = document.getElementsByClassName("profile-anchor");
    let friendNames = document.getElementsByClassName("user-name");
    String(user.name)
    friends[friends.length - 1].setAttribute("href","user.html?userid=" + user.data().id);
    friendNames[friendNames.length - 1].innerText = user.data().name;
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        let myuser = user.uid;
        users.get().then(user => {
            users.get().then((userQuery) => {
                userQuery.forEach((document) => {
                    let currentUser = document.data();
                    
                    if (currentUser.id === myuser) {
                        return;
                    }
                    if (currentUser.name.toLowerCase().includes(searchURLParam.toLowerCase())) {
                        printUsers(document)
                    }
                })
            })
        });
    }
});
