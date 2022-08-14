// set variable for image index
var imageIndex = 1;

// displays the current image at given index
displayImage(imageIndex);

// function to determine the image's position, either next or previous
function imagePosition(num) {
    displayImage(imageIndex += num);
};


// function to determine the current image to show
function currentImage(num) {
    displayImage(imageIndex = num);
};


// function for the logic of the gallery
function displayImage(num) {
    var i;
    var images = document.getElementsByClassName("images");
    var queue = document.getElementsByClassName("queue");
    
    if (num > images.length) {
        imageIndex = 1
    }
    if (num < 1) {
        imageIndex = images.length
    }


    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (i = 0; i < queue.length; i++) {
        queue[i].className = queue[i].className.replace(" active", "");
    }

    images[imageIndex-1].style.display = "block";
    queue[imageIndex-1].className += " active";
};
