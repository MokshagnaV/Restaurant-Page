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
        if(i == 'menu'){
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
    classAdd(main, "menuHero");

    const content = create("div"); // main-content consists of heading and tagline
    classAdd(content, "hero-content");

    const heading = create("h1");
    heading.textContent = "MENU";
    
    const tagLine = create("p");
    tagLine.textContent = "Look! what you can get.";
    content.append(heading,tagLine);

    const credits = create("p");
    classAdd(credits, "credits");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/photos/lXLct9D-ARE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    
    main.append(header(), content, credits);
    return main;
}

function menuSec(){
    const menu = create("section");
    classAdd(menu, "menu");

    const card = create("div");
    classAdd(card, "card");

    for(let i = 0; i < 4; i++){
        const card1 = create("div");
        classAdd(card1, "card");
        const img1 = create("div");
        classAdd(img1, "img");
        img1.innerHTML = '<img src="../images/taco.jpg" alt="">';
        const p1 = create("p");
        p1.textContent = "Taco";
        card1.append(img1, p1);
        const card2 = create("div");
        classAdd(card2, "card");
        const img2 = create("div");
        classAdd(img2, "img");
        img2.innerHTML = '<img src="../images/burritoBowl.jpg" alt="">';
        const p2 = create("p");
        p2.textContent = "Delicious Chipotle Chicken Burrito Bowl";
        card2.append(img2, p2);
        if(i%2==0){
            menu.append(card1, card2);
        }else{
            menu.append(card2, card1);
        }
    }
    return menu;
}

export default function menu(){
    const div = create("div");
    div.append(hero_section(), menuSec());
    return div;
}

