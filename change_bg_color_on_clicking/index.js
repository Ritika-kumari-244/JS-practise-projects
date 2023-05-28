var index = 0;

function changeColor(){
    var color = ["red","blue","yellow","green","orange","pruple"]

    document.getElementsByTagName("body")[0].style.background = color[index++];
   
    if(index > color.length - 1)
    index = 0;

}

// var ind = 0;

// function changeBgImg(){
//     var image = ["url(img1)","img2","img3"]

//     document.getElementsByTagName("body")[0].style.backgroundImage = image[index++];

//     if(index > image.length - 1)
//     index = 0;
// }