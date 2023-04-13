/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction classAdd(item, cName) {\n    item.classList.add(cName);\n}\n\nfunction create(name){\n    return document.createElement(name);\n}\n\nfunction header(){\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const navItems = ['home', 'menu', 'contact'];\n\n    navItems.forEach(i => {\n        const item = document.createElement(\"span\");\n        classAdd(item, \"nav-item\")\n        if(i == 'contact'){\n            classAdd(item, \"active\");\n        }\n        item.textContent = i;\n        nav.appendChild(item);\n    });\n    header.appendChild(nav);\n    return header;\n}\n\nfunction hero_section() {\n    const main = create(\"section\");\n    classAdd(main, \"main-hero\");\n    classAdd(main, \"contact\");\n\n\n    const content = create(\"div\"); // main-content consists of heading and tagline\n    classAdd(content, \"hero-content\");\n\n    const heading = create(\"h1\");\n    heading.textContent = \"Contact\";\n    \n    const tagLine = create(\"p\");\n    tagLine.textContent = \"You can reach us from here!\";\n    content.append(heading,tagLine);\n\n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@kalebtapp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">kaleb tapp</a> on <a href=\"https://unsplash.com/photos/J59wWPn09BE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    \n    main.append(header(), content, credits);\n    return main;\n}\n\nfunction contactSec(){\n    const section = create(\"section\");\n    classAdd(section, \"contactSec\");\n\n    const conDiv = create(\"div\");\n    classAdd(conDiv, \"contact-content\");\n\n    const h1 = create(\"h1\");\n    h1.textContent = \"Location of Chivesselle\";\n    conDiv.append(h1);\n\n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Clem Onojeghuo</a> on <a href=\"https://unsplash.com/photos/zlABb6Gke24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    section.append(conDiv, credits);\n\n    return section;\n}\n\nfunction contact(){\n    const div = create(\"div\");\n    div.append(hero_section(), contactSec());\n\n    return div\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHome)\n/* harmony export */ });\nfunction classAdd(item, cName) {\n    item.classList.add(cName);\n}\n\nfunction create(name){\n    return document.createElement(name);\n}\n\nfunction header(){\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const navItems = ['home', 'menu', 'contact'];\n\n    navItems.forEach(i => {\n        const item = document.createElement(\"span\");\n        classAdd(item, \"nav-item\")\n        if(i == 'home'){\n            classAdd(item, \"active\");\n        }\n        item.textContent = i;\n        nav.appendChild(item);\n    });\n    header.appendChild(nav);\n    return header;\n}\n\nfunction hero_section() {\n    const main = create(\"section\");\n    classAdd(main, \"main-hero\");\n\n    const content = create(\"div\"); // main-content consists of heading and tagline\n    classAdd(content, \"hero-content\");\n\n    const heading = create(\"h1\");\n    heading.textContent = \"Chivesselle\";\n    \n    const tagLine = create(\"p\");\n    tagLine.textContent = \"a Vessel version of Chipotle\";\n    content.append(heading,tagLine);\n\n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@f_abrarrr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Fathul Abrar</a> on <a href=\"https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    \n    main.append(header(), content, credits);\n    return main;\n}\n\nfunction intro_section(){\n    const main = create(\"section\");\n    classAdd(main, \"intro\");\n\n    const content = create(\"div\");\n    classAdd(content, \"intro-content\");\n    \n    const heading = create(\"h1\");\n    heading.textContent = \"REAL FOOD MEETS REAL IMPACT\";\n\n    const tagLine = create(\"p\");\n    tagLine.textContent = \"From seasonally sourced Fajita Veggies to our leading Food with Integrity standards, every order can help make a positive impact on the planet.\";\n    content.append(heading,tagLine);\n    \n    \n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@hermez777?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Hermes Rivera</a> on <a href=\"https://unsplash.com/photos/Ww8eQWjMJWk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n\n    main.append(content, credits);\n    return main;\n}\n\nfunction values_section() {\n    const main = create(\"section\");\n    classAdd(main, \"values\");\n\n    const content = create(\"div\");\n    classAdd(content, \"values-content\");\n    \n    const headings = ['Real Ingredients', 'Real Flavour', 'Real Purpose'];\n    \n    headings.forEach(head => {\n        const heading = create(\"h1\");\n        heading.textContent = head;\n        content.appendChild(heading);\n    });\n    \n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@calumlewis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Calum Lewis</a> on <a href=\"https://unsplash.com/photos/vA1L1jRTM70?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash';\n\n    main.append(content, credits);\n    return main;   \n}\n\nfunction generateHome(){\n    const homePage = create(\"div\");\n    homePage.append(hero_section(), intro_section(), values_section());\n    return homePage;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst container = document.querySelector(\"#content\");\ncontainer.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().innerHTML;\n\ndocument.addEventListener(\"click\", (e) => {\n    const target = e.target.innerText;\n    if (target === \"Home\") container.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().innerHTML;\n    if (target === \"Menu\") container.innerHTML = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().innerHTML;\n    if (target === \"Contact\") container.innerHTML = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().innerHTML;\n  });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction classAdd(item, cName) {\n    item.classList.add(cName);\n}\n\nfunction create(name){\n    return document.createElement(name);\n}\n\nfunction header(){\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const navItems = ['home', 'menu', 'contact'];\n\n    navItems.forEach(i => {\n        const item = document.createElement(\"span\");\n        classAdd(item, \"nav-item\")\n        if(i == 'menu'){\n            classAdd(item, \"active\");\n        }\n        item.textContent = i;\n        nav.appendChild(item);\n    });\n    header.appendChild(nav);\n    return header;\n}\n\nfunction hero_section() {\n    const main = create(\"section\");\n    classAdd(main, \"main-hero\");\n    classAdd(main, \"menuHero\");\n\n    const content = create(\"div\"); // main-content consists of heading and tagline\n    classAdd(content, \"hero-content\");\n\n    const heading = create(\"h1\");\n    heading.textContent = \"MENU\";\n    \n    const tagLine = create(\"p\");\n    tagLine.textContent = \"Look! what you can get.\";\n    content.append(heading,tagLine);\n\n    const credits = create(\"p\");\n    classAdd(credits, \"credits\");\n    credits.innerHTML = 'Photo by <a href=\"https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Louis Hansel</a> on <a href=\"https://unsplash.com/photos/lXLct9D-ARE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n    \n    main.append(header(), content, credits);\n    return main;\n}\n\nfunction menuSec(){\n    const menu = create(\"section\");\n    classAdd(menu, \"menu\");\n\n    const card = create(\"div\");\n    classAdd(card, \"card\");\n\n    for(let i = 0; i < 4; i++){\n        const card1 = create(\"div\");\n        classAdd(card1, \"card\");\n        const img1 = create(\"div\");\n        classAdd(img1, \"img\");\n        img1.innerHTML = '<img src=\"images/taco.jpg\" alt=\"\">';\n        const p1 = create(\"p\");\n        p1.textContent = \"Taco\";\n        card1.append(img1, p1);\n        const card2 = create(\"div\");\n        classAdd(card2, \"card\");\n        const img2 = create(\"div\");\n        classAdd(img2, \"img\");\n        img2.innerHTML = '<img src=\"images/burritoBowl.jpg\" alt=\"\">';\n        const p2 = create(\"p\");\n        p2.textContent = \"Delicious Chipotle Chicken Burrito Bowl\";\n        card2.append(img2, p2);\n        if(i%2==0){\n            menu.append(card1, card2);\n        }else{\n            menu.append(card2, card1);\n        }\n    }\n    return menu;\n}\n\nfunction menu(){\n    const div = create(\"div\");\n    div.append(hero_section(), menuSec());\n    return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;