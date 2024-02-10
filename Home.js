// When button is clicked toggle between showing menu & hiding menu contents//
function menu(){
    document.getElementById("myMenu").classList.toggle("show");
   
    
}

window.onclick = function(e) {
    if (!e.target.matches('.menubtn')){
        let menuDropDown = document.getElementsByClassName("menu-content");
        let i;
        for (i = 0; i < menuDropDown.length; i++){
            let openMenu = menuDropDown[i];
        if ( openMenu.classList.contains('show')){
            openMenu.classList.remove('show');
            }
         }
     }
}
