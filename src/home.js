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
        if(i == 'home'){
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
    heading.textContent = "Chivesselle";
    
    const tagLine = create("p");
    tagLine.textContent = "a Vessel version of Chipotle";
    content.append(heading,tagLine);

    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@f_abrarrr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fathul Abrar</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    
    main.append(header(), content, credits);
    return main;
}

function intro_section(){
    const main = create("section");
    classAdd(main, "intro");

    const content = create("div");
    classAdd(content, "intro-content");
    
    const heading = create("h1");
    heading.textContent = "REAL FOOD MEETS REAL IMPACT";

    const tagLine = create("p");
    tagLine.textContent = "From seasonally sourced Fajita Veggies to our leading Food with Integrity standards, every order can help make a positive impact on the planet.";
    content.append(heading,tagLine);
    
    
    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@hermez777?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hermes Rivera</a> on <a href="https://unsplash.com/photos/Ww8eQWjMJWk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

    main.append(content, credits);
    return main;
}

function values_section() {
    const main = create("section");
    classAdd(main, "values");

    const content = create("div");
    classAdd(content, "values-content");
    
    const headings = ['Real Ingredients', 'Real Flavour', 'Real Purpose'];
    
    headings.forEach(head => {
        const heading = create("h1");
        heading.textContent = head;
        content.appendChild(heading);
    });
    
    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@calumlewis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Calum Lewis</a> on <a href="https://unsplash.com/photos/vA1L1jRTM70?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash';

    main.append(content, credits);
    return main;   
}

export default function generateHome(){
    const homePage = create("div");
    homePage.append(hero_section(), intro_section(), values_section());
    return homePage;
}
