// URL search param
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const searchURLParam = urlParams.get('search').toLowerCase()
console.log(searchURLParam)

// Firebase collection
const users = db.collection('users')
searchEvents()

// Search Feature
/**
 * Search events by name in the database.
 */
function searchEvents(user) {
    users.get().then((eventQuery) => {
        eventQuery.forEach((document) => {
            if (document.uid === user.uid) {
                console.log("That's you!");
                return;
            }
            if (document.data().name.toLowerCase().includes(searchURLParam)) {
                printUsers(document)
            }
        })
    })
}

function printUsers(user) {
    console.log(user.data());
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function(user) {
            searchEvents(user)
        });
    }
});
