/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");


const view = (() => {
    function updateView(weatherData) {
        if(!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const icon = document.getElementById("icon");
        const description = document.getElementById("description");
        const temperature = document.getElementById("temperature");
        const tempMax = document.getElementById("tempMax");
        const tempMin = document.getElementById("tempMin");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = `${weatherData.cityName}`;
        icon.src = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
        description.textContent = `${weatherData.description}`;
        temperature.textContent = `${Math.round(weatherData.temperature)}`;
        tempMax.textContent = `High: ${Math.round(weatherData.tempMax)}`;
        tempMin.textContent = `Low: ${Math.round(weatherData.tempMin)}`;
        feelsLike.textContent = `Feels like: ${Math.round(weatherData.feelsLike)}`;
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
        wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
    }

    return { updateView };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    function convert(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity, temp_min: tempMin, temp_max: tempMax},
            wind: { speed: windSpeed},
            weather: [{ icon, description }],
        } = data;
        return { cityName, temperature, tempMin, tempMax, feelsLike, humidity, windSpeed, icon, description };
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8320d4df88252e4e2bb545b880b956e0`;
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            if(!response.ok) throw new Error(`City ${city} not found`);
            return convert(await response.json());
        }
        catch(error) {
            alert(error);
            return null;
        }
    }
    return { getData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");



const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
});

searchBtn.addEventListener("click", async () => {
    if(searchInput.value === "") return;
    const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(searchInput.value);
    _modules_view__WEBPACK_IMPORTED_MODULE_1__.default.updateView(weatherData);
});

document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData("chandler");
    _modules_view__WEBPACK_IMPORTED_MODULE_1__.default.updateView(weatherData);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MscUJBQXFCO0FBQ3ZELHdEQUF3RCxpQkFBaUI7QUFDekUscUNBQXFDLHdCQUF3QjtBQUM3RCxxQ0FBcUMsb0NBQW9DO0FBQ3pFLHVDQUF1QyxnQ0FBZ0M7QUFDdkUsc0NBQXNDLGdDQUFnQztBQUN0RSwrQ0FBK0Msa0NBQWtDO0FBQ2pGLDRDQUE0QyxxQkFBcUI7QUFDakUsb0NBQW9DLHNCQUFzQjtBQUMxRDs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7O0FDakNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwRkFBMEY7QUFDN0csbUJBQW1CLGtCQUFrQjtBQUNyQyx1QkFBdUIsb0JBQW9CO0FBQzNDLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSw4RUFBOEUsS0FBSztBQUNuRjtBQUNBLG9EQUFvRCxlQUFlO0FBQ25FLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsT0FBTyxFOzs7Ozs7VUMxQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4Qiw2REFBZTtBQUM3QyxJQUFJLDZEQUFlO0FBQ25CLENBQUM7O0FBRUQ7QUFDQSw4QkFBOEIsNkRBQWU7QUFDN0MsSUFBSSw2REFBZTtBQUNuQixDQUFDLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcblxuY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldyh3ZWF0aGVyRGF0YSkge1xuICAgICAgICBpZighd2VhdGhlckRhdGEpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFJlc3VsdFwiKTtcbiAgICAgICAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlOYW1lXCIpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcbiAgICAgICAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcE1heFwiKTtcbiAgICAgICAgY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcE1pblwiKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcblxuICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmNpdHlOYW1lfWA7XG4gICAgICAgIGljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmljb259QDR4LnBuZ2A7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlKX1gO1xuICAgICAgICB0ZW1wTWF4LnRleHRDb250ZW50ID0gYEhpZ2g6ICR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50ZW1wTWF4KX1gO1xuICAgICAgICB0ZW1wTWluLnRleHRDb250ZW50ID0gYExvdzogJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbXBNaW4pfWA7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQod2VhdGhlckRhdGEuZmVlbHNMaWtlKX1gO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0gJWA7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IGttL2hgO1xuICAgIH1cblxuICAgIHJldHVybiB7IHVwZGF0ZVZpZXcgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29udmVydChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5hbWU6IGNpdHlOYW1lLFxuICAgICAgICAgICAgbWFpbjogeyB0ZW1wOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eSwgdGVtcF9taW46IHRlbXBNaW4sIHRlbXBfbWF4OiB0ZW1wTWF4fSxcbiAgICAgICAgICAgIHdpbmQ6IHsgc3BlZWQ6IHdpbmRTcGVlZH0sXG4gICAgICAgICAgICB3ZWF0aGVyOiBbeyBpY29uLCBkZXNjcmlwdGlvbiB9XSxcbiAgICAgICAgfSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB7IGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgdGVtcE1pbiwgdGVtcE1heCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkLCBpY29uLCBkZXNjcmlwdGlvbiB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTgzMjBkNGRmODgyNTJlNGUyYmI1NDViODgwYjk1NmUwYDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICAgICAgICBpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnQoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlclwiO1xuaW1wb3J0IHZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3XCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZvcm1cIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ0blwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG59KTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0RGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgdmlldy51cGRhdGVWaWV3KHdlYXRoZXJEYXRhKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEoXCJjaGFuZGxlclwiKTtcbiAgICB2aWV3LnVwZGF0ZVZpZXcod2VhdGhlckRhdGEpO1xufSkiXSwic291cmNlUm9vdCI6IiJ9