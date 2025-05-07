// Author: ManhNguyenDev

const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon')
console.log("main.js is loaded!");

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)){
        // Click to Toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-topmenu-expanded')
    }
    else{
        // click outSide from Toggle top menu icon
        if (topMenu.classList.contain('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
