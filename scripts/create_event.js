let doc_ID = "blah"

function eventCreate() {
    db.collection("events").add(
        {
            Description: $("#hike_desc").val(),
            EventName: $("#event_name").val(),
            HikeName: $("#hike_name").val(),
            Length: $("#hike_length").val(),
            Meetup: $("#meetup").val(),
            Start: $("#start_time").val(),
            EventType: $('input[name="eventtype"]:checked').val()
        }
    )
        .then(function (docRef) {
            console.log("item added");
            doc_ID = String(docRef.id);
            console.log("Document written with ID: ", doc_ID);
        })
}

$("#create-button").click(function () {
    if ($("#event_name").val().length !== 0 & $("#hike_name").val().length !== 0 & $("#start_time").val().length !== 0 & $("#hike_length").val().length !== 0) {
    eventCreate();
    $("body").html('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> <script src="scripts/index.js"></script> <script src="scripts/landingpage.js"></script> <div id="mySidenav" class="sidenav"> <a href="profile.html">Profile</a> <a href="mytrailmates.html">My TrailMates</a> <a href="#">Create Event</a> <a href="#">Find new TrailMates</a> <a href="aboutus.html">About Us</a> <a href="hikesearch.html">Search Hikes</a> <a href="login.html">Sign out</a> </div><header> <p><span id="menu-button" onclick="openClose()"> &#9776; </span></p><div style="text-align: center"> <a href="landingpage.html"> <img alt="Help" id="logo" src="./images/TrailMates-white.png"> </a> </div></header> <h1 id="review_details_header">Review Details</h1> <div id="photo_div"> <p> <span id="time_span">Time and Date</span> </p><div id="text_div"> <h3>"<span id="event_name_span">CST T1 Survived</span>" Hike</h3> <h5><span id="hike_name_span">Garibaldi Lake</span></h5> <p><span id="public_or_private_span">Private</span></p><br><p> <strong>Meetup Location: </strong> <span id="meetup_span">Canada Place</span> </p><p> <strong>Length: </strong> <span id="length_span">8km</span> </p><br><h3>Description</h3> <p><span id="description_span">Hike to celebrate completing T1 successfully!</span></p></div><div> <button id="edit_event_button">Edit Event</button> <button id="publish_event_button">Publish Event</button> </div>')
    setTimeout(eventQuery, 500);
    $("#publish_event_button").click(function () {
        window.location.replace("landingpage.html");
        setTimeout(eventQuery, 1200);
        });
    }
});

function updateHTML() {
    $("#time_span").html(data1.Start)
    $("#event_name_span").html(data1.EventName)
    $("#hike_name_span").html(data1.HikeName)
    $("#public_or_private_span").html(data1.PublicOrPrivate)
    $("#meetup_span").html(data1.Meetup)
    $("#length_span").html(data1.Length)
    $("#description_span").html(data1.Description)
    $("#accessibility-value").html(data1.Accessibility)
    $("#location-value").html(data1.location)
    $("#length-value").html(data1.Length)
    $("#difficulty-value").html(data1.difficulty)
}


function eventQuery() {
    db.collection('events').doc(doc_ID)
        .get()
        .then(
            doc => {
                const data1 = doc.data();
                console.log(data1)
                $("#time_span").html(data1.Start)
                $("#event_name_span").html(data1.EventName)
                $("#hike_name_span").html(data1.HikeName)
                $("#public_or_private_span").html(data1.EventType)
                $("#meetup_span").html(data1.Meetup)
                $("#length_span").html(data1.Length)
                $("#description_span").html(data1.Description)
                $("#accessibility-value").html(data1.Accessibility)
                $("#location-value").html(data1.location)
                $("#length-value").html(data1.Length)
                $("#difficulty-value").html(data1.difficulty)
            }
        )
};

