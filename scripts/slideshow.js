function next(n){

    /* Saving Ids */


    /* Saving Ids*/


    var get = document.getElementById('slideshow_main');
    console.log(get);
    if (get.src.match("images/slideshow/angry.jpg"))
    {
        get.src = "images/slideshow/car.jpg";
        console.log("Image 2");
    }
    else if (get.src.match("images/slideshow/car.jpg"))
    {
        get.src = "images/slideshow/sitting.jpg";
        console.log("Image 3");
    }
    else if (get.src.match("images/slideshow/sitting.jpg"))
    {
        get.src = "images/slideshow/standing.jpg";
    }
    else if (get.src.match("images/slideshow/standing.jpg"))
    {
        get.src = "images/slideshow/staring.jpg";
    }
    else if (get.src.match("images/slideshow/staring.jpg"))
    {
        get.src = "images/slideshow/watching.jpg";
    }
    else if (get.src.match("images/slideshow/watching.jpg"))
    {
        get.src = "images/slideshow/angry.jpg";
    }
}

function back(n){
    var get = document.getElementById('slideshow_main');
    console.log(get);

    if (get.src.match("images/slideshow/watching.jpg")){
        get.src = "images/slideshow/staring.jpg";
    }
    else if (get.src.match("images/slideshow/staring.jpg"))
    {
        get.src = "images/slideshow/standing.jpg";
    }
    else if (get.src.match("images/slideshow/standing.jpg"))
    {
        get.src = "images/slideshow/sitting.jpg";
    }
    else if (get.src.match("images/slideshow/sitting.jpg"))
    {
        get.src = "images/slideshow/car.jpg";
    }
    else if (get.src.match("images/slideshow/car.jpg"))
    {
        get.src = "images/slideshow/angry.jpg";
    }
    else if (get.src.match("images/slideshow/angry.jpg"))
    {
        get.src = "images/slideshow/watching.jpg";
    }
}