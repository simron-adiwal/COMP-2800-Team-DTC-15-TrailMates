// load event data from DB and display as event cards
function eventQuery() {
    // firebase.auth().onAuthStateChanged(function (user) {
    // console.log(db.collection('hikeDetails').doc('d').collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P'))
        // doc_ID = "DFxWMDGIhbOZSqIyYjXk";
        // console.log("console log it here after timeout " + doc_ID)
        db.collection('events')
            // db.collection('hikeDetails').doc('Kennedy Falls')

            // .collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P')
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    console.log(doc.id)
                    // new_div = document.createElement("div").setAttribute("class", "card");
                    // document.getElementById
                    $("body").append('<div class="card" style="width: 18rem;"> <div class="card-body card-background-img"> <h5 class="card-title eventName"> <strong>' + doc.data().EventName+ '</strong></h5> <p class="card-text difficulty"><strong>'+ doc.data().Start +'</strong> </p><a href="#" class="card-link length a-card"><strong>'+ doc.data().Length +'</strong> </a> <strong><a id="'+ doc.id+'_join_button" class="card-link createEvent a-card">Join Event</a></strong> </div></div>')
                    $(`#${doc.id}_join_button`).click(function() {
                        console.log(doc.id)
                        window.location.replace('eventcard.html')
                    })
                });
            });
        }
eventQuery()




// eventCreate();
$("#create-button").click(function () {


    eventCreate();
    $("body").html('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> <script src="scripts/index.js"></script> <script src="scripts/landingpage.js"></script> <div id="mySidenav" class="sidenav"> <a href="profile.html">Profile</a> <a href="mytrailmates.html">My TrailMates</a> <a href="#">Create Event</a> <a href="#">Find new TrailMates</a> <a href="aboutus.html">About Us</a> <a href="hikesearch.html">Search Hikes</a> <a href="login.html">Sign out</a> </div><header> <p><span id="menu-button" onclick="openClose()"> &#9776; </span></p><div style="text-align: center"> <a href="landingpage.html"> <img alt="Help" id="logo" src="./images/TrailMates-white.png"> </a> </div></header> <h1 id="review_details_header">Review Details</h1> <div id="photo_div"> <img src="https://via.placeholder.com/250" alt=""> <p> <span id="time_span">Time and Date</span> </p></div><div id="text_div"> <h3>"<span id="event_name_span">CST T1 Survived</span>" Hike</h3> <h5><span id="hike_name_span">Garibaldi Lake</span></h5> <p><span id="public_or_private_span">Private</span></p><br><p> <strong>Meetup Location: </strong> <span id="meetup_span">Canada Place</span> </p><p> <strong>Length: </strong> <span id="length_span">8km</span> </p><br><h3>Description</h3> <p><span id="description_span">Hike to celebrate completing T1 successfully!</span></p></div><div> <button id="edit_event_button">Edit Event</button> <button id="publish_event_button">Publish Event</button> </div>')
    // window.location.replace("review_event.html");
    console.log("hellodsfioajs")
    console.log(doc_ID)



    setTimeout(eventQuery, 500);

    $("#publish_event_button").click(function () {
        console.log('hihihihi');
        window.location.replace("landingpage.html");
        setTimeout(eventQuery, 1200);
    });

});
