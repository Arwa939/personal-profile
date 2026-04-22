let mybutton = document.getElementById("topBtn");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

///////////////////////////////////////////////

let btn = document.getElementById("themeBtn");
btn.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
}