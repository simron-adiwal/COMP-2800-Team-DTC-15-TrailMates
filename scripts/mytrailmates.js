/** Firebase user athentication.  */
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        //userId = user.uid;
        db.collection("users").doc(user.uid).get().then(function (user) {
            loadUserFriends(user.data());
        });
    }
    else console.log("Authentication failed.");
});

/** Read firebase and add friends into the section.  */
function loadUserFriends(user) {
    console.log(user.friendslist)

    let friendList = user.friendslist;
    friendList.forEach((friend) => {
        db.collection("users").doc(friend).get().then(function (frienduser) {
            let frienddata = frienduser.data();
            console.log(frienddata.name);
            $("#friend").append('<a href="profile.html" class="profile-anchor"><div class="contact-card"> <img src="https://randomuser.me/api/portraits/thumb/men/45.jpg" alt="User Image Here" class="user-image"><h5 class="user-name">' + String(frienddata.name) + '</h5></div> </a>')
        });
    });
}


/** create elements */
let sec = document.createElement("section");
let anc = document.createElement("a");
let card = document.createElement("div");
let pic = document.createElement("img")
let names = document.createElement("h5");

/** add class to anchor */
let att = document.createAttribute("class");
att.value = "profile-anchor";
anc.setAttributeNode(att);
/** add class to div */
let att2 = document.createAttribute("class");
att2.value = "contact-card";
card.setAttributeNode(att2);
/** add class to img */
let att3 = document.createAttribute("class");
att3.value = "user-image";
pic.setAttributeNode(att3);
/** add class to h5 */
let att4 = document.createAttribute("class");
att4.value = "user-name";
names.setAttributeNode(att4);
/** append textnode to names(h5) */
let t = document.createTextNode("friendlistname");
names.appendChild(t);



/** Initialize search bar. */
function getFriend(){
  document.getElementById("submit").addEventListener('click', function () {
      var fri = document.getElementById("search").value;
      console.log(fri);

      db.collection("users").doc(friend).get().then
      if (fri in db.collection("users").doc(friend) ) {
        location.href="profile.html";
      } else {console.log("No data")};

      //db.collection("users").doc(friend).get().then(function (frienduser) {
           //var frienddata = frienduser.data();
           //console.log(frienddata.name);
  })
}




//db.collection("users").doc(user.uid)
//function loadUserFriends(user) {
  //  console.log(user.friendslist)

    //let friendList = user.friendslist;
    //friendList.forEach((friend) => {
      //  db.collection("users").doc(friend).get().then(function (frienduser) {
        //    let frienddata = frienduser.data();
          //  console.log(frienddata.name);
       // });
   // });
//}
