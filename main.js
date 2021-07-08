const $ = (target) => {
    const elems = document.querySelectorAll(target)
    return (elems.length > 1) ? elems: document.querySelector(target)
}

/* Await Dropdown Activation */
document.addEventListener('DOMContentLoaded', function(){
    var drop=document.querySelectorAll(".dropdown-trigger")
    M.Dropdown.init(drop,{
        coverTrigger:false
    })
})

/* Hero Slider */
document.addEventListener('DOMContentLoaded', function(){
    M.Sidenav.init($('.sidenav'), {
        edge: 'right'
    })
    M.Slider.init($(`.slider`))
})