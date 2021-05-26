// Set Bootstrap carousel auto slide off
$('.carousel').carousel({
    interval: false
})

// URL search param
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const searchURLParam = urlParams.get('docid')
console.log(searchURLParam)

/**
 * Reads from DB and populates page HTML according to url parameter
 */
function hikeQuery() {
    db.collection('hikeDetails').doc(searchURLParam)
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
                $('head').append('<meta name="twitter:card" content="summary">');
                $('head').append('<meta name="twitter:title" content="pagetitlehere">');
                $('head').append('<meta name="twitter:site" content="@TrailmatesApp">');
                $('head').append('<meta name="twitter:description" content="pagedeschere">');
                $('head').append('<meta name="twitter:image" content="imgurlhere">');
                $('head').append('<meta name="twitter:image:alt" content="imgalthere">');
                $("[name='twitter:title']").attr('content', data1.Name);
                $("[name='twitter:description']").attr('content', data1.Description);
                $("[name='twitter:image']").attr('content', data1.imgsrc);
                $("[name='twitter:imagealt']").attr('content', data1.Name);
                for (i = 0; i < data1.conditions.length; i++) {
                    console.log(i);
                    console.log(data1.conditions[i]);
                    $("#conditions-list").append("<li>" + data1.conditions[i] + "</li>");
                }
            }
        )
}

hikeQuery()
