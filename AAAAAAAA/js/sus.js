const btt_mobile = document.getElementById("btt_mobile");

function toggle_menu(event){
    
    if(event.type == 'touchstart') event.preventDefault();

    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");

}

btt_mobile.addEventListener('click', toggle_menu);
btt_mobile.addEventListener('touchstart', toggle_menu);