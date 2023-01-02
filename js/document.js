$(document).ready (function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:-0,
        nav:false,
        arrow:false,
        dots:false,
        items:1,
        smartSpeed:1000,

        responsive:{
            0:{
               
            },
            600:{
               
            },
            1000:{
                
            }
        }
    
    })
    
    $('#custom-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        arrow:false,
        dots:true,
        items:1,
        smartSpeed:1000,

        responsive:{
            0:{
               
            },
            // 600:{
               
            // },
            // 1000:{
                
            // }
            1300:{dots:true,}
        }
    
    })
    

});
// document.getElementById('custom-slider'),function(){

// }