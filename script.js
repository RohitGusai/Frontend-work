

const slide = document.querySelectorAll('.slides');
var counter = 0;
const slidecount = slide.length;
slide.forEach((slide,index)=>{
   slide.style.left =`${index * 100}%`; 
})

const prev = () =>{
    if(counter != 0)
    {
        counter--;
        slideimage();
    }
    
}

const next = () =>{
    if(counter < slidecount-1)
    {
        counter++;
        slideimage();
    }
   
}

const slideimage = () =>
{
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


        // Test if jQuery is loaded
        // $(document).ready(function() {
        //   $('#sname').focus(function()
        // {
        //     $(this).css('background-color','red');
        // })
        // $('#sname').blur(function()
        // {
        //     $(this).css('background-color','');
        // })
        // });

        



let elem = document.querySelector('#image-container')
let box = document.querySelector('#fixed-image')
elem.addEventListener('mouseenter',()=>{
   box.style.display = 'block'
})
elem.addEventListener('mouseleave',()=>{
    box.style.display = 'none'
 })

let ele = document.querySelectorAll('#ele')

ele.forEach(item =>{
    item.addEventListener('mouseenter',()=>{
        var image = item.getAttribute('data-image')
        box.style.backgroundImage = `url(${image})`;
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var menu = document.querySelector('#menu h3')
  var filter = document.querySelector('#fixed-src');
  var nav = document.querySelector('nav img');
  var flag = 0;
  menu.addEventListener('click',()=>{
    if(flag == 0)
    {
        filter.style.top = "0%";
        nav.style.opacity='0';
        flag=1;
    }
    else
    {
        filter.style.top = "-100%";
        nav.style.opacity='1';
        flag=0;
    }
   
  })

  var loader = document.querySelector('#loader')
  setTimeout(() => {
        loader.style.top='-100%'
  }, 4000);