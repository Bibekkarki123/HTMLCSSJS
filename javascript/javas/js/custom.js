var start=0;
function imageSlider(){
    let imgBox=document.getElementsByClassName('image_box');
    for (let i=0; i<imgBox.length; i++){
        imgBox[i].style.display="none";
    }
    if(start>imgBox.length-1){
        start=0;
    }
    imgBox[start].style.display="block";
    setTimeout(imageSlider, 2000);
    start++;
}
imageSlider()