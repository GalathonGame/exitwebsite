const checked = document.getElementById('menu-inp')
const menu= document.getElementById("menuToggle")
const yo = document.querySelector('.yobro')


menu.addEventListener("click", async() => {
    if (checked.checked === true)
    {
        if (yo.classList.contains("hidden")&&yo.classList.contains("active"))
        {
            yo.classList.remove("hidden")
        }

        yo.classList.remove('hidden')
        
        setTimeout(function() {yo.classList.toggle('active')},50)
        if (yo.classList.contains("hidden")&&yo.classList.contains("active"))
        {
            yo.classList.remove("hidden")
        }
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.paddingLeft = '50px'
        console.log(checked.checked)
    }
    else if (checked.checked===false)
    {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        
        document.body.style.paddingLeft = '0px'
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        if (yo.classList.contains("hidden")&&yo.classList.contains("active"))
        {
            yo.classList.remove("active")
        }
        yo.classList.remove('active');

        yo.addEventListener('transitionend', function(e) {setTimeout(function(){yo.classList.toggle('hidden');}),50}, {capture:false, once: true, passive: false});
        console.log(checked.checked)
    }
})