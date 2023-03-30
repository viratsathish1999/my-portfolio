// function iconMove(){
//     var icon_old=document.querySelector(".body1")
//     console.log(icon_old)
    
//     var old_clname=icon_old.getAttribute("class")
//     console.log(old_clname)
//     if(old_clname=="body1"){
//         icon_old.setAttribute("class","body-transform")
//         console.log(icon_old)
//     }
//     else{
//         icon_old.setAttribute("class","body1")
//         console.log(icon_old)
    
//     }
//     console.log(icon_old)
// }
var data=document.querySelector(".header-nav");
function showDetails(){
    var checker=false;

    if(data.getAttribute("class")!="header-nav"){
        data.setAttribute("class","header-nav")
    }
    else{
        data.setAttribute("class","abs-header")
    }
}
function showHidden(){
    data.setAttribute("class","header-nav")
}