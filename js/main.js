
    $ (function () {
        'use strict' ;
        // get Skill height    
        var winh = $(window).height(),
        headingH = $('.heading').innerHeight(),
        navH = $('.navbar').innerHeight();
        
        $('.slider , .carousel-item').height((winh - ( headingH + navH )));
        
        // Filter Images of every Category
        $('.Featured-Work ul li').on('click', function (){
            $(this).addClass('active').siblings().removeClass('active');
            
            if($(this).data('class') === "all")
            {
                $('.Featured-imgs .col-md').css('opacity',1);
            }
            else
            {
                $('.Featured-imgs .col-md').css('opacity','.5');
                $($(this).data('class')).parent().css('opacity',1);
            }
        
            
        });

    });


    // Show Setting option 

    document.querySelector(".toggle .fa-gear").onclick = function (){
        this.classList.toggle("fa-spin");
        document.querySelector(".Setting-Box").classList.toggle("open");
    };

    // remove active class from ele 
    let mylis =document.querySelectorAll(".Colors-Option li");

    mylis.forEach( li =>  {
        li.addEventListener('click', (e) => {

            // add chose color to first color in css
            
            document.documentElement.style.setProperty('--first-color',e.target.dataset.color);

            // set color to localStorage
            localStorage.setItem("Mycolor" ,e.target.dataset.color );

            // remove active class from all li
            e.target.parentElement.querySelectorAll(".active").forEach(ele => {
                ele.classList.remove("active");
            });
        // add active class
            e.target.classList.add("active");

            
        });
    });

    // set the same color you chose when you reload the page

    if(localStorage.getItem("Mycolor") !== null){
        document.documentElement.style.setProperty('--first-color',localStorage.getItem("Mycolor"));

        // remove active class
        document.querySelectorAll(".Colors-Option li").forEach(ele => {
            ele.classList.remove("active");
            
            // add active class
            if(ele.dataset.color === (localStorage.getItem("Mycolor"))){
                ele.classList.add("active");
            }
        });
    }
// o to certain section

let ournavlink = document.querySelectorAll(".navbar-light .navbar-nav .nav-link");

ournavlink.forEach(navlink => {
    navlink.addEventListener('click', (navl) =>{
        navl.preventDefault();
                    document.querySelector(navl.target.dataset.navbar).scrollIntoView({
                        behavior : "smooth"
    });

});
});