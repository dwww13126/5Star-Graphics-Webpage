//Gets each of the navigation links
const navTags = document.querySelectorAll(".site-nav");
//Gets each of the segments which the navigation links direct to
const segments = document.querySelectorAll(".segment");
//Stores the ID of the closest segment that a user is viewing
let closestSegment = "";
//Sets up listners for each of the different category buttons
document.getElementById("Signs").addEventListener("click", function(){showCategory("Signs")});
document.getElementById("Vehicles").addEventListener("click", function(){showCategory("Vehicles")});
document.getElementById("Design").addEventListener("click", function(){showCategory("Design")});
document.getElementById("Print").addEventListener("click", function(){showCategory("Print")});
//Checks the users position on the page every time a scroll event occurs
window.onscroll = () => {
    //Goes through and checks each of the segments present on the webpage
    //to find the closest segment (Furthermost down the page )
    segments.forEach((segment) => {
        //Works out the position of the segment on the page and subtracts 70 pixels
        //to give extra whitespace to account for the height of the header.
        const segmentTop = segment.offsetTop - 70;
        //Checks if the user is scrolled to a point where a segment is past the
        //current position of the header bar by getting the current Y Offset
        //(How many pixels down the page)
        if (pageYOffset >= segmentTop) {
            //Assigns the ID of this segment to be the current closestSegment
            closestSegment = segment.getAttribute("id");
        }
    });

    //Goes through each of the navigation list items in order to highlight the element
    //to show the current section that a user is at
    navTags.forEach((li) => {
        //Sets the default class properties to be "nonactive"
        li.classList.remove("active");
        li.classList.add("nonactive");
        //Check if the segment ID name is within the classlist
        //meaning that it should be set as "active"
        if (li.classList.contains(closestSegment)) {
            //Sets the matching navigation list item as active
            li.classList.add("active");
            li.classList.remove("nonactive");
        }
    });
};

function showCategory(id) {
  //Removes the "service-type-selected" class from each of the services
  let serviceButtons = document.getElementById("services-grid").children;
  Array.from(serviceButtons).forEach((b) => {
    b.className = "service-type";
  });
  let button = document.getElementById(id);
  //Checks if the button is currently unselected
  if (button.classList.contains("service-type")){
    //
    button.className = "service-type-selected"
  }
  //
  else {
    button.className = "service-type";
  }
  //Alters the src of all the service-images
  let serviceImages = document.getElementsByClassName("service-image");
  console.log(serviceImages);
  let index = 0;
  Array.from(serviceImages).forEach((im) => {
    //Works out the modulo to loop back and repeat the 1st 3 images
    //after surpassing 8
    curindex = index % 8;
    //Puts together the image SRC and assigns it to the current image
    let imgSrc = "./Assets/Slideshow/" + id + "/" + curindex + ".jpg";
    im.setAttribute("src", imgSrc);
    //Increments index to move onto the next image
    index++;
  });
}
