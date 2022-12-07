$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>5){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});


var typed = new Typed(".typing", {
    strings:["Desenvolvedora", "Design", "Freelancer", "Engenheira"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});