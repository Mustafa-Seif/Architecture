const burger = document.querySelector(".burgerIcon")
const icon = document.querySelector(".burgerIcon i")
const list = document.querySelector(".sidebar")
const links = document.querySelectorAll(".menu-item a")

console.log(links)


// ==========burger icon toggle=========
burger.onclick = function () {
    list.classList.toggle("show-list")
    burger.classList.toggle("move-burger")
    icon.classList.toggle("fa-xmark")
    
}

// ==========links toggle=========

links.forEach(eo => {
    eo.onclick=function () {
    list.classList.toggle("show-list")
    burger.classList.toggle("move-burger")

    icon.classList.toggle("fa-xmark")
        
    }
});



// 


$(window).on('load', function () {
    $('.load-d').delay(3000).fadeOut('slow').$('.text-main ').css("margin-top","200px")
  })

  $('.text-main ').delay(7000).css("margin-top","200px")


//   $(window).on('load', function () {
//     $('body').delay(4000).css("overflow-y","scroll")
//   })

  

  

