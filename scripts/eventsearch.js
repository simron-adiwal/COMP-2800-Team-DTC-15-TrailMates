// URL search param
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const searchURLParam = urlParams.get('search').toLowerCase()
console.log(searchURLParam)

// Firebase collection
const events = db.collection('events')
searchEvents()

// Search Feature
/**
 * Search events by name in the database.
 */
function searchEvents() {
    events.get().then((eventQuery) => {
        eventQuery.forEach((document) => {
            if (document.data().EventName.toLowerCase().includes(searchURLParam)) {
                printEvents(document)
            }
        })
    })
}

/**
 * Print Interactive Event Cards
 * @param event
 */
function printEvents(event) {
    $("body").append('<div class="card" style="width: 18rem;"> <div class="card-body card-background-img"> <h5 class="card-title eventName"> <strong>' + event.data().EventName+ '</strong></h5> <p class="card-text difficulty"><strong>'+ event.data().Start +'</strong> </p><a href="#" class="card-link length a-card"><strong>'+ event.data().Length +'</strong> </a> <strong><a id="'+ event.id+'_join_button" class="card-link createEvent a-card">Join Event</a></strong> </div></div>')
    $(`#${event.id}_join_button`).click(function() {
        setTimeout(eventCardLoad, 500)
        $("body").html(`<div id="mySidenav" class="sidenav"> <a href="profile.html">Profile</a> <a href="mytrailmates.html">My TrailMates</a> <a href="#">Create Event</a> <a href="#">Find new TrailMates</a> <a href="aboutus.html">About Us</a> <a href="hikesearch.html">Search Hikes</a> <a href="login.html">Sign out</a> </div><header> <p><span id="menu-button" onclick="openClose()"> &#9776; </span></p><div style="text-align: center"> <a href="landingpage.html"> <img alt="Help" id="logo" src="./images/TrailMates-white.png"> </a> </div></header> <h1 id="event-title-heading"></h1> <h6 id="start-time">June 4th at 12pm</h6> <h6 id="public-or-private">Public</h6> <a id="a-buttons"> <span id="going-btn">I'm going</span> <span id="invite-btn">Invite Trailmates</span> </a> <img id="hike-preview-img" src="" alt="Hike Image"> <div id="users-attending"> <img src=""> </div> <p id="description-p"></p>`)
        function eventCardLoad() {
            db.collection('events').doc(event.id)
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
        }
        setTimeout(eventCardLoad, 3500)
    })
}















