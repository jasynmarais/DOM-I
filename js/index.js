const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
let navs = document.querySelectorAll("a");
navs[0].textContent = siteContent["nav"]["nav-item-1"];
navs[1].textContent = siteContent["nav"]["nav-item-2"];
navs[2].textContent = siteContent["nav"]["nav-item-3"];
navs[3].textContent = siteContent["nav"]["nav-item-4"];
navs[4].textContent = siteContent["nav"]["nav-item-5"];
navs[5].textContent = siteContent["nav"]["nav-item-6"];

//Nav color
navs.forEach(i => {
  i.style.color = "green";
});

//Add nav items

var appendNode = document.createElement("a");
var textAppend = document.createTextNode("Company");
var prependNode = document.createElement("a");
var textPrepend = document.createTextNode("Staff");
appendNode.appendChild(textAppend);
prependNode.appendChild(textPrepend);

document.querySelector("nav").appendChild(appendNode);
document.querySelector("nav").prepend(prependNode);

//CTA
let cta_h1 = document.querySelector("h1");
cta_h1.textContent = siteContent["cta"]["h1"];
let cta_button = document.querySelector("button");
cta_button.textContent = siteContent["cta"]["button"];
let cta_img = document.getElementById("cta-img");
cta_img.src = siteContent["cta"]["img-src"];