console.log("hellodsfioajs")

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
                    $("#hike-title-heading").html(data1.Name)
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
                    // $("#conditions-list").html("<li>" + data1.conditions[i] +  "</li>")
                }
            )
        // })
    };
    hikeQuery()
