function eventQuery() {
    db.collection('events').doc(doc.id)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id)
                $("body").append('<div class="card" style="width: 18rem;"> <div class="card-body card-background-img"> <h5 class="card-title eventName"> <strong>' + doc.data().EventName + '</strong></h5> <p class="card-text difficulty"><strong>' + doc.data().Start + '</strong> </p><a href="#" class="card-link length a-card"><strong>' + doc.data().Length + '</strong> </a> <strong><a id="' + doc.id + '_join_button" class="card-link createEvent a-card">Join Event</a></strong> </div></div>')
                $(`#${doc.id}_join_button`).click(function () {
                    console.log(doc.id)
                    setTimeout(eventCardLoad, 3500)
                    window.location.assign('eventcard.html')
                    console.log(doc.id)
                    setTimeout(eventCardLoad, 3500)
                })
            });
        });
}
eventQuery()



function hikeQuery() {
    db.collection('hikeDetails').doc(doc.id)
        .get()
        .then(
            doc => {
                const data1 = doc.data();
                console.log(data1)
                $("#event-title-heading").html(data1.Name)
                $("#main-img").attr("src", data1.imgsrc)
                $("#map-img").attr("src", data1.mapsrc)
                $("#image-caption").html(data1.ImageCaption)
                $("#map-caption").html(data1.MapCaption)
                $("#description-value").html(data1.Description)
                $("#accessibility-value").html(data1.Accessibility)
                $("#location-value").html(data1.location)
                $("#length-value").html(data1.Length)
                $("#difficulty-value").html(data1.difficulty)
                for (i = 0; i < data1.conditions.length; i++) {
                    console.log(i)
                    console.log(data1.conditions[i])
                    $("#conditions-list").append("<li>" + data1.conditions[i] + "</li>")
                }
            }
        )
};
hikeQuery()
