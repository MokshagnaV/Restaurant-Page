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

    const content = create("div"); // main-content consists of heading and tagline
    classAdd(content, "hero-content");

    const heading = create("h1");
    heading.textContent = "Contact";
    
    const tagLine = create("p");
    tagLine.textContent = "You can reach us from here!";
    content.append(heading,tagLine);

    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@f_abrarrr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fathul Abrar</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    
    main.append(header(), content, credits);
    return main;
}

export default function contact(){
    const div = create("div");
    const thisContent = create("h1");
    thisContent.textContent = "CONTACT PAGE";
    div.append(hero_section(), thisContent);

    return div
}

