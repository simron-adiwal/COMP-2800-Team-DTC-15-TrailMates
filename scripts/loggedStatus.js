
firebase.auth().onAuthStateChanged(user => {
    if (!(user)) window.location.href = "login.html";
});

function signUserOut() {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html"
    })
}

$('#sign-out-user').click(signUserOut);