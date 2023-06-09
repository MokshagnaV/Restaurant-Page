function classAdd(item, cName) {
    item.classList.add(cName);
}

function create(name){
    return document.createElement(name);
}

function header(){
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navItems = ['home', 'menu', 'contact'];

    navItems.forEach(i => {
        const item = document.createElement("span");
        classAdd(item, "nav-item")
        if(i == 'contact'){
            classAdd(item, "active");
        }
        item.textContent = i;
        nav.appendChild(item);
    });
    header.appendChild(nav);
    return header;
}

function hero_section() {
    const main = create("section");
    classAdd(main, "main-hero");
    classAdd(main, "contact");


    const content = create("div"); // main-content consists of heading and tagline
    classAdd(content, "hero-content");

    const heading = create("h1");
    heading.textContent = "Contact";
    
    const tagLine = create("p");
    tagLine.textContent = "You can reach us from here!";
    content.append(heading,tagLine);

    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@kalebtapp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">kaleb tapp</a> on <a href="https://unsplash.com/photos/J59wWPn09BE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    
    main.append(header(), content, credits);
    return main;
}

function contactSec(){
    const section = create("section");
    classAdd(section, "contactSec");

    const conDiv = create("div");
    classAdd(conDiv, "contact-content");

    const h1 = create("h1");
    h1.textContent = "Location of Chivesselle";
    conDiv.append(h1);

    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clem Onojeghuo</a> on <a href="https://unsplash.com/photos/zlABb6Gke24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    section.append(conDiv, credits);

    return section;
}

export default function contact(){
    const div = create("div");
    div.append(hero_section(), contactSec());

    return div
}