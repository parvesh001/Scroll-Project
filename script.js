// *****dynamic date*****
let date = document.getElementById("date");
date.innerText = new Date().getFullYear();


// ******dynamic navbar********
let barBtn = document.getElementById("bar-btn");
let linkContainer = document.querySelector(".link-container");
let linkList = document.querySelector(".link-list");

barBtn.addEventListener("click", () => {
    let containerHeight= linkContainer.getBoundingClientRect().height;
    let listHeight = linkList.getBoundingClientRect().height;
   
    if(containerHeight === 0){
        linkContainer.style.height = `${listHeight + 40}px`
    }else{
        linkContainer.style.height = 0;
    }
});

// *****dynamic fixed navbar*****
// **** dynamic scroll link *****
let nav = document.getElementById("nav");
let scrollLink = document.querySelector(".scroll-link");

window.addEventListener("scroll", () => {
    let scrollHeight = window.pageYOffset; //can also use "scrollY" instead of "pageYOffset"//
    let navHeight = nav.getBoundingClientRect().height;
    //console.log(navHeight)
    //----------for nav-------------//
    if(scrollHeight > navHeight){
        nav.classList.add("fixed-nav")
    }else{
        nav.classList.remove("fixed-nav")
    }
    //----------for link-------------//
    if(scrollHeight > 600){
        scrollLink.classList.add("show-link")
    }else{
        scrollLink.classList.remove("show-link")
    }
})


//*********Proper Smooth Scroll**********//

let links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", link => {
        // preventing default function
        link.preventDefault();

        //targetting section concerned to current target by extracting it from link
        let currElementId = link.currentTarget.getAttribute("href").slice(1);
        let currElement = document.getElementById(currElementId);

        //targetting other relevant things
        let navHeight = nav.getBoundingClientRect().height;
        let containerHeight= linkContainer.getBoundingClientRect().height;

        //letting currElement top-position related to parent
        let currElPosition = currElement.offsetTop - navHeight;

        // //adjusting for sm screen because in sm screen link-container enhance nav's height
        if(navHeight > 80){
            currElPosition = currElPosition + containerHeight
        }
        window.scrollTo(0, currElPosition);
        
        // instantly off navbar after click
        linkContainer.style.height = 0;

    })
})

