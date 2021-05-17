/*
 *
 *
 */

/**
 * Add random image from list as background image for the search on the landing page on page load.
 */
function randomBackground() {
    let list = ["https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/880675/pexels-photo-880675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3985392/pexels-photo-3985392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/6563366/pexels-photo-6563366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/5647158/pexels-photo-5647158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/6631550/pexels-photo-6631550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];
    let index = Math.floor(Math.random() * list.length);
    document.getElementById("landing-search").style.backgroundImage = "url('" + list[index] + "')";
}

window.onload = randomBackground;
