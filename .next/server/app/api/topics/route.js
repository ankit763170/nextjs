"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/topics/route";
exports.ids = ["app/api/topics/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_ToDo_Next13_master_ToDo_Next13_master_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/topics/route.js */ \"(rsc)/./app/api/topics/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/topics/route\",\n        pathname: \"/api/topics\",\n        filename: \"route\",\n        bundlePath: \"app/api/topics/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\ToDo-Next13-master\\\\ToDo-Next13-master\\\\app\\\\api\\\\topics\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Lenovo_Downloads_ToDo_Next13_master_ToDo_Next13_master_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/topics/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b3BpY3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRvcGljcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRvcGljcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZW5vdm8lNUNEb3dubG9hZHMlNUNUb0RvLU5leHQxMy1tYXN0ZXIlNUNUb0RvLU5leHQxMy1tYXN0ZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0xlbm92byU1Q0Rvd25sb2FkcyU1Q1RvRG8tTmV4dDEzLW1hc3RlciU1Q1RvRG8tTmV4dDEzLW1hc3RlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUM4RDtBQUM3SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLz8yMmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRG93bmxvYWRzXFxcXFRvRG8tTmV4dDEzLW1hc3RlclxcXFxUb0RvLU5leHQxMy1tYXN0ZXJcXFxcYXBwXFxcXGFwaVxcXFx0b3BpY3NcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RvcGljcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RvcGljc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdG9waWNzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTGVub3ZvXFxcXERvd25sb2Fkc1xcXFxUb0RvLU5leHQxMy1tYXN0ZXJcXFxcVG9Eby1OZXh0MTMtbWFzdGVyXFxcXGFwcFxcXFxhcGlcXFxcdG9waWNzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3RvcGljcy9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/topics/route.js":
/*!*********************************!*\
  !*** ./app/api/topics/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/mongodb */ \"(rsc)/./libs/mongodb.js\");\n/* harmony import */ var _models_Topic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Topic */ \"(rsc)/./models/Topic.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nasync function POST(request) {\n    const { title, description } = await request.json();\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    await _models_Topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        title,\n        description\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n        message: \"Topic Created\"\n    }, {\n        status: 201\n    });\n}\nasync function GET() {\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const topics = await _models_Topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n        topics\n    });\n}\nasync function DELETE(request) {\n    const id = request.nextUrl.searchParams.get(\"id\");\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    await _models_Topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n        message: \"Topic deleted\"\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvcGljcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUNDO0FBRXBDLGVBQWVHLEtBQUtDLE9BQU87SUFDaEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7SUFDakQsTUFBTVAseURBQWNBO0lBQ3BCLE1BQU1DLHFEQUFLQSxDQUFDTyxNQUFNLENBQUM7UUFBRUg7UUFBT0M7SUFBWTtJQUN4QyxPQUFPSixrRkFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUVFLFNBQVM7SUFBZ0IsR0FBRztRQUFFQyxRQUFRO0lBQUk7QUFDdkU7QUFFTyxlQUFlQztJQUNwQixNQUFNWCx5REFBY0E7SUFDcEIsTUFBTVksU0FBUyxNQUFNWCxxREFBS0EsQ0FBQ1ksSUFBSTtJQUMvQixPQUFPWCxrRkFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUVLO0lBQU87QUFDcEM7QUFFTyxlQUFlRSxPQUFPVixPQUFPO0lBQ2xDLE1BQU1XLEtBQUtYLFFBQVFZLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDNUMsTUFBTWxCLHlEQUFjQTtJQUNwQixNQUFNQyxxREFBS0EsQ0FBQ2tCLGlCQUFpQixDQUFDSjtJQUM5QixPQUFPYixrRkFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUVFLFNBQVM7SUFBZ0IsR0FBRztRQUFFQyxRQUFRO0lBQUk7QUFDdkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vYXBwL2FwaS90b3BpY3Mvcm91dGUuanM/YTBiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvREIgZnJvbSBcIi4uLy4uLy4uL2xpYnMvbW9uZ29kYlwiO1xuaW1wb3J0IFRvcGljIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVG9waWNcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcbiAgYXdhaXQgVG9waWMuY3JlYXRlKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlRvcGljIENyZWF0ZWRcIiB9LCB7IHN0YXR1czogMjAxIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xuICBjb25zdCB0b3BpY3MgPSBhd2FpdCBUb3BpYy5maW5kKCk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHRvcGljcyB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KSB7XG4gIGNvbnN0IGlkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcbiAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcbiAgYXdhaXQgVG9waWMuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlRvcGljIGRlbGV0ZWRcIiB9LCB7IHN0YXR1czogMjAwIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiVG9waWMiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJqc29uIiwiY3JlYXRlIiwibWVzc2FnZSIsInN0YXR1cyIsIkdFVCIsInRvcGljcyIsImZpbmQiLCJERUxFVEUiLCJpZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/topics/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://ankit123:ankit123@cluster0.cqtqflo.mongodb.net/?retryWrites=true&w=majority\");\n        console.log(\"connected to mongoDB\");\n    } catch (e) {\n        console.log(e);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGlCQUFpQjtJQUNuQixJQUFJO1FBQ0QsTUFBTUQsdURBQWdCLENBQUM7UUFDdEJHLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixFQUFFLE9BQU9DLEdBQUc7UUFDUkYsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtBQUNKO0FBRUEsaUVBQWVKLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vbGlicy9tb25nb2RiLmpzPzU5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hbmtpdDEyMzphbmtpdDEyM0BjbHVzdGVyMC5jcXRxZmxvLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBtb25nb0RCXCIpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/Topic.js":
/*!*************************!*\
  !*** ./models/Topic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst topicSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    description: String\n}, {\n    timestamps: true\n});\nconst Topic = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Topic || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Topic\", topicSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topic);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVG9waWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBRTFDLE1BQU1FLGNBQWMsSUFBSUQsNENBQU1BLENBQzFCO0lBQ0lFLE9BQU1DO0lBQ05DLGFBQWFEO0FBQ2pCLEdBQUU7SUFDRUUsWUFBWTtBQUNoQjtBQUdKLE1BQU1DLFFBQVFQLHdEQUFlLENBQUNPLEtBQUssSUFBS1AscURBQWMsQ0FBQyxTQUFTRTtBQUVoRSxpRUFBZUssS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9tb2RlbHMvVG9waWMuanM/ODg5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHtTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB0b3BpY1NjaGVtYSA9IG5ldyBTY2hlbWEoXG4gICAge1xuICAgICAgICB0aXRsZTpTdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gICAgfSx7XG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcbiAgICB9XG4pXG5cbmNvbnN0IFRvcGljID0gbW9uZ29vc2UubW9kZWxzLlRvcGljIHx8ICBtb25nb29zZS5tb2RlbCgnVG9waWMnLCB0b3BpY1NjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidG9waWNTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwidGltZXN0YW1wcyIsIlRvcGljIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Topic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5CToDo-Next13-master%5CToDo-Next13-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();