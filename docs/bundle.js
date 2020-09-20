/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser/plugins/spine/dist/SpinePlugin */ \"./node_modules/phaser/plugins/spine/dist/SpinePlugin.js\");\n/* harmony import */ var phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  scale: {\n    mode: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scale.FIT,\n    autoCenter: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.DOM.CENTER_BOTH,\n    width: 800,\n    height: 600,\n    parent: 'content'\n  },\n  localStorageName: 'phaseres6webpack',\n  physics: {\n    default: 'arcade',\n    arcade: {\n      debug: true\n    }\n  },\n  plugins: {\n    scene: [{\n      key: 'SpinePlugin',\n      plugin: window.SpinePlugin,\n      sceneKey: 'spine'\n    }]\n  },\n  scene: _scenes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controls/CharacterControls.js":
/*!*******************************************!*\
  !*** ./src/controls/CharacterControls.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CharacterControls =\n/*#__PURE__*/\nfunction () {\n  function CharacterControls(scene) {\n    _classCallCheck(this, CharacterControls);\n\n    this.keyA = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.A);\n    this.keyD = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.D);\n    this.keySpace = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE);\n  }\n\n  _createClass(CharacterControls, [{\n    key: \"isMoveLeftActive\",\n    value: function isMoveLeftActive() {\n      return this.keyA.isDown;\n    }\n  }, {\n    key: \"isMoveRightActive\",\n    value: function isMoveRightActive() {\n      return this.keyD.isDown;\n    }\n  }, {\n    key: \"onChangeSkin\",\n    value: function onChangeSkin(callback) {\n      this.keySpace.on('down', callback);\n    }\n  }]);\n\n  return CharacterControls;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterControls);\n\n//# sourceURL=webpack:///./src/controls/CharacterControls.js?");

/***/ }),

/***/ "./src/entities/Goblin.js":
/*!********************************!*\
  !*** ./src/entities/Goblin.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _physics_SpineArcadePhysicsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../physics/SpineArcadePhysicsContainer */ \"./src/physics/SpineArcadePhysicsContainer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Goblin =\n/*#__PURE__*/\nfunction () {\n  function Goblin(scene, key) {\n    _classCallCheck(this, Goblin);\n\n    this.scene = scene;\n    this.key = key;\n    this.animationData = {\n      skins: ['goblin', 'goblingirl'],\n      attachments: ['spear', 'dagger', null],\n      animations: ['walk', 'idle']\n    };\n    this.spineObject = null;\n    this.spinePhysicsContainer = null;\n    this.state = {\n      skin: 'goblin',\n      attachment: null,\n      animation: 'idle',\n      currentState: 'IDLE'\n    };\n    this.walkSpeed = 200;\n    this.isInitialized = false;\n  }\n\n  _createClass(Goblin, [{\n    key: \"initialize\",\n    value: function initialize(x, y) {\n      if (this.isInitialized) throw Error(\"\".concat(this.key, \" already initialized\")); // create spine object at 0,0 since its position will be inherited from its container\n\n      this.spineObject = this.scene.add.spine(0, 0, 'goblin', this.state.animation, true); // use a physics-enabled Container to resolve issues with physics-enabled Spine game objects\n\n      this.spinePhysicsContainer = new _physics_SpineArcadePhysicsContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, \"\".concat(this.key, \"_container\"), x, y, this.spineObject);\n      this.spinePhysicsContainer.initialize();\n      this.spineObject.setSkinByName(this.state.skin); // smoothly transitions between animations instead of switching immediately\n\n      this.spineObject.setMix('walk', 'idle', 0.3);\n      this.spineObject.setMix('idle', 'walk', 0.3);\n      this.spineObject.skeleton.setAttachment('right hand item', this.state.attachment);\n      this.isInitialized = true;\n    }\n  }, {\n    key: \"toggleSkin\",\n    value: function toggleSkin() {\n      var skinToUse = this.state.skin === 'goblin' ? 'goblingirl' : 'goblin';\n      this.state.skin = skinToUse;\n      this.setSkin(skinToUse);\n    }\n  }, {\n    key: \"walkLeft\",\n    value: function walkLeft() {\n      if (this.currentState === 'WALK_LEFT') return;\n      this.spineObject.setScale(-1, 1);\n      this.setAnimation('walk', true);\n      this.spinePhysicsContainer.setVelocityX(-this.walkSpeed);\n      this.currentState = 'WALK_LEFT';\n    }\n  }, {\n    key: \"walkRight\",\n    value: function walkRight() {\n      if (this.currentState === 'WALK_RIGHT') return;\n      this.spineObject.setScale(1, 1);\n      this.setAnimation('walk', true);\n      this.spinePhysicsContainer.setVelocityX(this.walkSpeed);\n      this.currentState = 'WALK_RIGHT';\n    }\n  }, {\n    key: \"idle\",\n    value: function idle() {\n      if (this.currentState === 'IDLE') return;\n      this.setAnimation('idle', true);\n      this.spinePhysicsContainer.setVelocityX(0);\n      this.currentState = 'IDLE';\n    }\n  }, {\n    key: \"setAttachment\",\n    value: function setAttachment(slotName, attachmentName) {\n      this.spineObject.skeleton.setAttachment(slotName, attachmentName);\n    }\n  }, {\n    key: \"setSkin\",\n    value: function setSkin(skinName) {\n      this.spineObject.setSkinByName(skinName);\n    }\n  }, {\n    key: \"setAnimation\",\n    value: function setAnimation(animation) {\n      var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      this.spineObject.play(animation, loop);\n    }\n  }]);\n\n  return Goblin;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Goblin);\n\n//# sourceURL=webpack:///./src/entities/Goblin.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game);\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/physics/SpineArcadePhysicsContainer.js":
/*!****************************************************!*\
  !*** ./src/physics/SpineArcadePhysicsContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar SpineArcadePhysicsContainer =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$C) {\n  _inherits(SpineArcadePhysicsContainer, _Phaser$GameObjects$C);\n\n  function SpineArcadePhysicsContainer(scene, key, x, y, spineObject) {\n    var _this;\n\n    _classCallCheck(this, SpineArcadePhysicsContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpineArcadePhysicsContainer).call(this, scene, x, y));\n    _this.key = key;\n    _this.scene = scene;\n    _this.spineObject = spineObject;\n    _this.isInitialized = false;\n    return _this;\n  }\n\n  _createClass(SpineArcadePhysicsContainer, [{\n    key: \"initialize\",\n    value: function initialize() {\n      if (this.isInitialized) throw Error(\"\".concat(this.key, \" already initialized\"));\n      this.scene.physics.add.existing(this); // add this container to the scene's display list\n      // adding an object to a container removes it from all other display lists\n      // ... so this is necessary to get the spine object to render.\n\n      this.scene.sys.displayList.add(this);\n      var spineObjectBounds = this.spineObject.getBounds();\n      this.setPhysicsSize(spineObjectBounds.size.x, spineObjectBounds.size.y);\n      this.body.setCollideWorldBounds(true);\n      this.add(this.spineObject);\n      this.isInitialized = true;\n    }\n  }, {\n    key: \"setPhysicsSize\",\n    value: function setPhysicsSize(width, height) {\n      this.body.setOffset(width * -0.5, -height);\n      this.body.setSize(width, height);\n    }\n  }, {\n    key: \"setVelocityX\",\n    value: function setVelocityX(newVelocity) {\n      this.body.velocity.x = newVelocity;\n    }\n  }, {\n    key: \"setVelocityY\",\n    value: function setVelocityY(newVelocity) {\n      this.body.velocity.y = newVelocity;\n    }\n  }, {\n    key: \"getSpineObject\",\n    value: function getSpineObject() {\n      return this.spineObject;\n    }\n  }]);\n\n  return SpineArcadePhysicsContainer;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Container);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpineArcadePhysicsContainer);\n\n//# sourceURL=webpack:///./src/physics/SpineArcadePhysicsContainer.js?");

/***/ }),

/***/ "./src/scenes/MainScene.js":
/*!*********************************!*\
  !*** ./src/scenes/MainScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_Goblin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Goblin */ \"./src/entities/Goblin.js\");\n/* harmony import */ var _controls_CharacterControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/CharacterControls */ \"./src/controls/CharacterControls.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar MainScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(MainScene, _Phaser$Scene);\n\n  function MainScene() {\n    var _this;\n\n    _classCallCheck(this, MainScene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainScene).call(this, {\n      key: 'MainScene'\n    }));\n    _this.sceneData = {\n      player: null,\n      characterControls: null,\n      text: {\n        title: null,\n        controls: null\n      }\n    };\n    return _this;\n  }\n\n  _createClass(MainScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.setPath('assets/spine/');\n      this.load.spine('goblin', 'goblins.json', 'goblins.atlas');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this2 = this;\n\n      this.sceneData.player = new _entities_Goblin__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 'player');\n      this.sceneData.player.initialize(400, 600);\n      this.sceneData.characterControls = new _controls_CharacterControls__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n      this.sceneData.characterControls.onChangeSkin(function () {\n        _this2.sceneData.player.toggleSkin();\n      });\n      this.createText();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.sceneData.characterControls.isMoveLeftActive()) {\n        this.sceneData.player.walkLeft();\n      } else if (this.sceneData.characterControls.isMoveRightActive()) {\n        this.sceneData.player.walkRight();\n      } else {\n        this.sceneData.player.idle();\n      }\n    }\n  }, {\n    key: \"createText\",\n    value: function createText() {\n      this.sceneData.text.title = this.add.text(0, 0, \"Physics-enabled character animated with Spine\", {\n        fontFamily: 'monospace',\n        fontSize: 24,\n        fontStyle: 'bold',\n        color: '#ffffff'\n      });\n      this.sceneData.text.controls = this.add.text(0, 50, \"a:  move left \\nd:  move right\\nspace:  change skin\", {\n        fontFamily: 'monospace',\n        fontSize: 24,\n        fontStyle: 'bold',\n        color: '#ffffff'\n      });\n    }\n  }]);\n\n  return MainScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainScene);\n\n//# sourceURL=webpack:///./src/scenes/MainScene.js?");

/***/ }),

/***/ "./src/scenes/index.js":
/*!*****************************!*\
  !*** ./src/scenes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainScene */ \"./src/scenes/MainScene.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_MainScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/scenes/index.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ken/code/misc/phaser-spine-proof-of-concept/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });