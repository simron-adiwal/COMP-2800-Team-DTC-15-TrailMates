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
                        setTimeout(eventCardLoad, 500)
                        // window.location.assign('eventcard.html')
                        $("body").html(`<div id="mySidenav" class="sidenav"> <a href="profile.html">Profile</a> <a href="mytrailmates.html">My TrailMates</a> <a href="#">Create Event</a> <a href="#">Find new TrailMates</a> <a href="aboutus.html">About Us</a> <a href="hikesearch.html">Search Hikes</a> <a href="login.html">Sign out</a> </div><header> <p><span id="menu-button" onclick="openClose()"> &#9776; </span></p><div style="text-align: center"> <a href="landingpage.html"> <img alt="Help" id="logo" src="./images/TrailMates-white.png"> </a> </div></header> <h1 id="event-title-heading"></h1> <h6 id="start-time">June 4th at 12pm</h6> <h6 id="public-or-private">Public</h6> <a id="a-buttons"> <span id="going-btn">I'm going</span> <span id="invite-btn">Invite Trailmates</span> </a> <img id="hike-preview-img" src="" alt="Hike Image"> <div id="users-attending"> <img src=""> </div> <p id="description-p"></p>`)
                        console.log(doc.id)
                        function eventCardLoad() {
                            db.collection('events').doc(doc.id)
                                .get()
                                .then(
                                    doc => {
                                        const data1 = doc.data();
                                        console.log(data1)
                                        $("#event-title-heading").html(data1.EventName)
                                        $("#start-time").html(data1.Start)
                                        $("#public-or-private").html(data1.EventType + " Event")
                                        $("#description-p").html(data1.Description)
                                    }
                                )
                        };
                        setTimeout(eventCardLoad, 3500)
                    })
                });
            });
        }
eventQuery()




    // function eventCardLoad() {
    //     db.collection('events').doc(doc.id)
    //         .get()
    //         .then(
    //             doc => {
    //                 const data1 = doc.data();
    //                 console.log(data1)
    //                 $("#event-title-heading").html(data1.EventName)
    //                 $("#start-time").html(data1.Start)
    //                 $("#public-or-private").html(data1.EventType)

                  
    //             }
    //         )
    // };
    
















