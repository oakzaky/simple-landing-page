/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function populate() {
    for (const section of sections) {
        let listItem = document.createElement('li');
        let anchor = document.createElement('span');
        anchor.innerHTML = section.dataset.nav;
        anchor.dataset.anchor = `#${section.id}`;
        anchor.classList.add('menu__link');
        listItem.appendChild(anchor);
        navbar.appendChild(listItem);
    }
}



// Add class 'active' to section when near top of viewport
function active() {
    let scrollPosition = document.documentElement.scrollTop +1; 
    for (const section of sections) {
        if(scrollPosition >= section.offsetTop && 
           scrollPosition < section.offsetTop+section.offsetHeight)
        {
            section.classList.add('active');
        }
        else{
            section.classList.remove('active');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scroll(event) {
    let id = event.target.dataset.anchor;
    let scrollToSection = document.querySelector(id); 
    scrollToSection.scrollIntoView({behavior: "smooth"});
}


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
document.addEventListener('DOMContentLoaded',() => {
    populate();
})

// Scroll to section on link click
navbar.addEventListener('click', (event) => {
    if(event.target.nodeName === 'SPAN'){
        scroll(event);
    }
})

// Set sections as active
document.addEventListener('scroll', () => {
    active();
})
