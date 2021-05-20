console.log("hellodsfioajs")
console.log(doc_ID)
// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         // userId = user.uid;
//         db.collection("users").doc(user.uid).get().then(function(user) {
//             // loadUserProfile(user.data());
//             console.log(user.data)
//         });
//     }
// });




    function eventQuery() {
        // firebase.auth().onAuthStateChanged(function (user) {
        // console.log(db.collection('hikeDetails').doc('d').collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P'))

        db.collection('events').doc('CST T1 Survived')
        // db.collection('hikeDetails').doc('Kennedy Falls')

            // .collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P')
            .get()
            .then(
                doc => {
                    const data1 = doc.data();
                    console.log(data1)
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
            )
    };
    eventQuery()
console.log("123")
