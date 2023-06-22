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

/***/ "./src/Getweather.js":
/*!***************************!*\
  !*** ./src/Getweather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function GetWeather(url, city) {\r\n  // Getting The Data From Api\r\n  url = url.replace(\"city\", city);\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  // Creating the Template\r\n  var template = document.getElementById(\"card-template\").content;\r\n  var template_content = document.importNode(template, true);\r\n  // Getting Day From Date\r\n  let my_date = new Date();\r\n  let days = [\r\n    \"Sunday\",\r\n    \"Monday\",\r\n    \"Tuesday\",\r\n    \"Wednesday\",\r\n    \"Thursday\",\r\n    \"Friday\",\r\n    \"Saturday\",\r\n  ];\r\n  // Customizing the Template\r\n  const card_container = template_content.querySelector(\".card-container\");\r\n  const card = template_content.querySelector(\".card\");\r\n  const city_text = template_content.querySelector(\"#city\");\r\n  const country_text = template_content.querySelector(\"#country\");\r\n  const info_text = template_content.querySelector(\"#text\");\r\n  const time_text = template_content.querySelector(\"#time\");\r\n  const feel_text = template_content.querySelector(\"#feel\");\r\n  const degrees = template_content.querySelector(\"#degrees\");\r\n  const humitidiy = template_content.querySelector(\"#humitidiy\");\r\n  const cloud = template_content.querySelector(\"#cloud\");\r\n  const wind = template_content.querySelector(\"#wind\");\r\n  function TempC() {\r\n    feel_text.innerText = `Feels Like ${data.current.feelslike_c}°`;\r\n    degrees.innerText = `${data.current.temp_c}°`;\r\n  }\r\n\r\n  function TempF() {\r\n    feel_text.innerText = `Feels Like ${data.current.feelslike_f}°`;\r\n    degrees.innerText = `${data.current.temp_f}°`;\r\n  }\r\n  TempC();\r\n  humitidiy.innerText = `${data.current.humidity}%`;\r\n  cloud.innerText = `${data.current.cloud}%`;\r\n  wind.innerText = `${data.current.wind_kph}km/p`;\r\n  city_text.innerText = data.location.name;\r\n  country_text.innerText = data.location.country;\r\n  info_text.innerText = data.current.condition.text;\r\n  time_text.innerText = `${\r\n    days[my_date.getDay()]\r\n  } ${my_date.getHours()}:${my_date.getMinutes()}`;\r\n  // background Chnage\r\n  if (data.current.temp_c > 28) {\r\n    card.style.backgroundImage = \"url('../resources/hot.jpg')\";\r\n  } else if (data.current.temp_c > 23) {\r\n    card.style.backgroundImage = \"url('../resources/chill.jpg')\";\r\n  } else {\r\n    card.style.backgroundImage = \"url('../resources/cold.jpg')\";\r\n  }\r\n  // Buttons Change\r\n  const celsius_btn = template_content.querySelector(\".celsius\");\r\n  const fahrenheit_btn = template_content.querySelector(\".fahrenheit\");\r\n  const button_container = template_content\r\n    .querySelector(\".btns-container\")\r\n    .querySelectorAll(\"button\");\r\n  button_container.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (event) => {\r\n      if (!event.target.classList.contains(\"btn-active\")) {\r\n        btn.classList.add(\"btn-active\");\r\n        if (event.target.classList.contains(\"celsius\")) {\r\n          fahrenheit_btn.classList.remove(\"btn-active\");\r\n          TempC();\r\n        } else {\r\n          celsius_btn.classList.remove(\"btn-active\");\r\n          TempF();\r\n          // SS\r\n        }\r\n      }\r\n    });\r\n  });\r\n  // removing when pressing other then the card\r\n\r\n  card_container.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"card-container\")) {\r\n      while (card_container.firstElementChild) {\r\n        card_container.firstElementChild.remove();\r\n      }\r\n      card_container.remove();\r\n    }\r\n  });\r\n  document.body.append(template_content);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetWeather);\r\n\n\n//# sourceURL=webpack://weather-app/./src/Getweather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Getweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Getweather */ \"./src/Getweather.js\");\n\r\n\r\nconst url = `https://api.weatherapi.com/v1/current.json?key=8a933995f8504f2ab31151715231705&q=city&aqi=yes`;\r\nconst search_bar_container = document.querySelector(\".search-bar-container\");\r\nconst search_bar = document.querySelector(\"#search-bar\");\r\nsearch_bar_container.addEventListener(\"keydown\", (event) => {\r\n  if (event.key === \"Enter\") {\r\n    if (document.body.querySelector(\".card-container\") === null) {\r\n      (0,_Getweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, search_bar.value);\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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