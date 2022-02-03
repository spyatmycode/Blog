function show(){
    document.getElementById("fa-times").style.display ="flex";
    document.getElementById("fa-bars").style.display ="none";
    document.getElementById("mobile-menu").style.width ="100vw";



}

function hide(){
    document.getElementById("fa-times").style.display ="none";
    document.getElementById("fa-bars").style.display ="flex";
    document.getElementById("mobile-menu").style.width ="0px";
    



}


function darkmode(element){

    var currentBackgroundColor = element.style.backgroundColor;

    if (element.style.backgroundColor =="floralwhite") {
        element.style.backgroundColor = "black";
        document.getElementById("maintext").style.color = "white";
        document.getElementById("header").style.backgroundColor = "black";
        document.getElementById("darklight").innerHTML ="Light Mode";
        
    } else {
        element.style.backgroundColor = "floralwhite";
        
        document.getElementById("maintext").style.color = "dodgerblue";
        document.getElementById("header").style.backgroundColor = "floralwhite";
        document.getElementById("darklight").innerHTML ="Dark Mode";
// Copy Right Ohhh, Hire Me, Akeju Oluwanifemi

        
    }

    

    

  
    
    
    
}