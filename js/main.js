$('.owl-carousel').owlCarousel({
    loop:true,
 
    autoplay:true,
    autoplayTimeout:3000,
    statePadding:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        280:{
            items:1,
            margin:290,
            
        },
        360:{
            items:2,
            margin:250,
            
        },
        390:{
            items:2,
            margin:250,
            
        },
        540:{
            items:2,
            margin:80,
        },
        572:{
            items:2,
            margin:230,
        },
        730:{
            items:2,
        },
        768:{
            items:3,
            margin:150,
        },
        912:{
            items:3,
            margin:80,
        },
        1024:{
            items:4,
            margin:180,
            
        },
        1100:{
            items:4,

        },
        1400:{
            items:5,
            margin:20,
            
        }
        
       
        
    }
});



const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});






