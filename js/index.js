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

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]) 

let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]) 

let navBar = document.querySelector('nav');

let anchorTags = document.querySelectorAll('a');
anchorTags[0].textContent = siteContent ["nav"]["nav-item-1"];
anchorTags[1].textContent = siteContent ["nav"]["nav-item-2"];
anchorTags[2].textContent = siteContent ["nav"]["nav-item-3"];
anchorTags[3].textContent = siteContent ["nav"]["nav-item-4"];
anchorTags[4].textContent = siteContent ["nav"]["nav-item-5"];
anchorTags[5].textContent = siteContent ["nav"]["nav-item-6"];

anchorTags[0].style.color = 'green';
anchorTags[1].style.color = 'green';
anchorTags[2].style.color = 'green';
anchorTags[3].style.color = 'green';
anchorTags[4].style.color = 'green';
anchorTags[5].style.color = 'green';


// Prepend Nav Item

let newTagsFirst = document.createElement('a');
newTagsFirst.textContent = 'First Item';
newTagsFirst.style.color = 'green';

navBar.prepend(newTagsFirst);

//Append Nav Item 

let newTagsLast = document.createElement('a');
newTagsLast.textContent = 'Last Item';
newTagsLast.style.color = 'green';

navBar.appendChild(newTagsLast);


let header = document.querySelector('h1');
header.textContent = siteContent ["cta"]["h1"];

let button = document.querySelector('button');
button.textContent = siteContent ["cta"]["button"];

let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent ["main-content"]["features-content"];
paragraphs[1].textContent = siteContent ["main-content"]["about-content"];
paragraphs[2].textContent = siteContent ["main-content"]["services-content"];
paragraphs[3].textContent = siteContent ["main-content"]["product-content"];
paragraphs[4].textContent = siteContent ["main-content"]["vision-content"];
paragraphs[5].textContent = siteContent ["contact"]["address"];
paragraphs[6].textContent = siteContent ["contact"]["phone"];
paragraphs[7].textContent = siteContent ["contact"]["email"];
paragraphs[8].textContent = siteContent ["footer"]["copyright"];

let h4Headers = document.querySelectorAll('h4');
h4Headers[0].textContent = siteContent ["main-content"]["features-h4"];
h4Headers[1].textContent = siteContent ["main-content"]["about-h4"];
h4Headers[2].textContent = siteContent ["main-content"]["services-h4"];
h4Headers[3].textContent = siteContent ["main-content"]["product-h4"];
h4Headers[4].textContent = siteContent ["main-content"]["vision-h4"];
h4Headers[5].textContent = siteContent ["contact"]["contact-h4"];

