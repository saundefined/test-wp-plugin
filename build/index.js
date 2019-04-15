/******/
(function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/      i: moduleId,
      /******/      l: false,
      /******/      exports: {},
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports,
        __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/
  __webpack_require__.d = function(exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/        configurable: false,
        /******/        enumerable: true,
        /******/        get: getter,
        /******/
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ 	// define __esModule on exports
  /******/
  __webpack_require__.r = function(exports) {
    /******/
    Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  };
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony
            // modules
  /******/
  __webpack_require__.n = function(module) {
    /******/
    var getter = module && module.__esModule ?
        /******/      function getDefault() { return module['default']; } :
        /******/      function getModuleExports() { return module; };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function(
      object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ 	// __webpack_public_path__
  /******/
  __webpack_require__.p = '';
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = './src/index.js');
  /******/
})
/************************************************************************/
/******/({

  /***/ './node_modules/@babel/runtime/helpers/assertThisInitialized.js':
  /*!**********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
    \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError(
            'this hasn\'t been initialised - super() hasn\'t been called');
      }

      return self;
    }

    module.exports = _assertThisInitialized;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/classCallCheck.js':
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    module.exports = _classCallCheck;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/createClass.js':
  /*!************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) {
          descriptor.writable = true;
        }
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps);
      }
      if (staticProps) {
        _defineProperties(Constructor, staticProps);
      }
      return Constructor;
    }

    module.exports = _createClass;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/getPrototypeOf.js':
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/inherits.js':
  /*!*********************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */
        './node_modules/@babel/runtime/helpers/setPrototypeOf.js');

    function _inherits(subClass, superClass) {
      if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
            'Super expression must either be null or a function');
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true,
        },
      });
      if (superClass) {
        setPrototypeOf(subClass, superClass);
      }
    }

    module.exports = _inherits;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js':
  /*!**************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    var _typeof = __webpack_require__(/*! ../helpers/typeof */
        './node_modules/@babel/runtime/helpers/typeof.js');

    var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */
        './node_modules/@babel/runtime/helpers/assertThisInitialized.js');

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
        return call;
      }

      return assertThisInitialized(self);
    }

    module.exports = _possibleConstructorReturn;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/setPrototypeOf.js':
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;

    /***/
  }),

  /***/ './node_modules/@babel/runtime/helpers/typeof.js':
  /*!*******************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function _typeof2(obj) {
      if (typeof Symbol === 'function' && typeof Symbol.iterator ===
          'symbol') { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else {
        _typeof2 = function _typeof2(obj) {
          return obj && typeof Symbol === 'function' && obj.constructor ===
          Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
        };
      }
      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (typeof Symbol === 'function' && _typeof2(Symbol.iterator) ===
          'symbol') {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === 'function' && obj.constructor ===
          Symbol && obj !== Symbol.prototype ? 'symbol' : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;

    /***/
  }),

  /***/ './src/Block.js':
  /*!**********************!*\
    !*** ./src/Block.js ***!
    \**********************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'default',
        function() { return Block; });
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */
        './node_modules/@babel/runtime/helpers/classCallCheck.js');
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */
        './node_modules/@babel/runtime/helpers/createClass.js');
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */
        './node_modules/@babel/runtime/helpers/possibleConstructorReturn.js');
    /* harmony import */
    var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */
        './node_modules/@babel/runtime/helpers/getPrototypeOf.js');
    /* harmony import */
    var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */
        './node_modules/@babel/runtime/helpers/inherits.js');
    /* harmony import */
    var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */
        '@wordpress/element');
    /* harmony import */
    var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(
        _wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */
        'react');
    /* harmony import */
    var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */
    var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */
        '@wordpress/components');
    /* harmony import */
    var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(
        _wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */
    var _FetchApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FetchApi */
        './src/FetchApi.js');

    var Block =
        /*#__PURE__*/
        function(_React$PureComponent) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
              Block, _React$PureComponent);

          function Block(props) {
            var _this;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
                this, Block);

            _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
                this,
                _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
                    Block).call(this, props));
            _this.state = {
              categoryId: 0,
              categories: [],
              productId: 0,
              products: [],
              isProductsLoaded: false,
              isCategoriesLoaded: false,
              isButtonBusy: false,
              hasError: false,
            };
            return _this;
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
              Block, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.fetchCategories();

                    if (this.props.categoryId > 0) {
                      this.fetchProducts(this.props.categoryId);
                    }

                    this.setState({
                      categoryId: this.props.categoryId,
                      productId: this.props.productId,
                    });
                  },
                }, {
                  key: 'fetchCategories',
                  value: function fetchCategories() {
                    var _this2 = this;

                    this.setState({
                      isCategoriesLoaded: false,
                    }, function() {
                      _FetchApi__WEBPACK_IMPORTED_MODULE_8__['default'].fetchCategories()
                          .then(function(response) {
                            _this2.setState({
                              categories: response,
                              isCategoriesLoaded: true,
                              hasError: false,
                            });
                          })
                          .catch(function() {
                            _this2.setState({
                              hasError: true,
                            });
                          });
                    });
                  },
                }, {
                  key: 'fetchProducts',
                  value: function fetchProducts(categoryId) {
                    var _this3 = this;

                    this.setState({
                      isProductsLoaded: false,
                    }, function() {
                      _FetchApi__WEBPACK_IMPORTED_MODULE_8__['default'].fetchProducts(
                          categoryId).then(function(response) {
                        _this3.setState({
                          products: response,
                          isProductsLoaded: true,
                          hasError: false,
                        });
                      }).catch(function() {
                        _this3.setState({
                          hasError: true,
                        });
                      });
                    });
                  },
                }, {
                  key: 'sync',
                  value: function sync(categoryId, productId) {
                    var _this4 = this;

                    this.setState({
                      isButtonBusy: true,
                    }, function() {
                      _FetchApi__WEBPACK_IMPORTED_MODULE_8__['default'].sync(
                          categoryId, productId).then(function() {
                        return _this4.setState({
                          isButtonBusy: false,
                        });
                      });
                    });
                  },
                }, {
                  key: 'render',
                  value: function render() {
                    var _this5 = this;

                    return Object(
                        _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                        'div', null, Object(
                            _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                            _wordpress_components__WEBPACK_IMPORTED_MODULE_7__['Placeholder'],
                            {
                              icon: 'wordpress-alt',
                              label: 'Awesome API',
                            }, !this.state.hasError
                                ? Object(
                                    _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                    'div', null,
                                    this.state.isCategoriesLoaded && Object(
                                    _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                    _wordpress_components__WEBPACK_IMPORTED_MODULE_7__['SelectControl'],
                                    {
                                      label: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E',
                                      value: this.state.categoryId,
                                      options: this.state.categories,
                                      onChange: function onChange(categoryId) {
                                        _this5.setState({
                                          categoryId: categoryId,
                                        });

                                        _this5.props.onCategoryChanged(
                                            categoryId);

                                        if (categoryId > 0) {
                                          _this5.fetchProducts(categoryId);
                                        }
                                      },
                                    }), this.state.categoryId > 0 &&
                                    this.state.isProductsLoaded && Object(
                                        _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                        _wordpress_components__WEBPACK_IMPORTED_MODULE_7__['SelectControl'],
                                        {
                                          label: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442',
                                          value: this.state.productId,
                                          options: this.state.products,
                                          onChange: function onChange(productId) {
                                            _this5.setState({
                                              productId: productId,
                                            });

                                            _this5.props.onProductChanged(
                                                productId);
                                          },
                                        }), this.state.categoryId > 0 &&
                                    this.state.isCategoriesLoaded &&
                                    this.state.productId > 0 &&
                                    this.state.isProductsLoaded && Object(
                                        _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                        'div', null, this.state.isButtonBusy
                                            ? Object(
                                                _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                                'p', null,
                                                '\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u043C...')
                                            : Object(
                                                _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                                _wordpress_components__WEBPACK_IMPORTED_MODULE_7__['Button'],
                                                {
                                                  onClick: function onClick() {
                                                    return _this5.sync(
                                                        _this5.state.categoryId,
                                                        _this5.state.productId);
                                                  },
                                                  isPrimary: true,
                                                  isLarge: true,
                                                },
                                                '\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C')))
                                : Object(
                                    _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                    'p', null,
                                    '\u041F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043A API \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 ',
                                    Object(
                                        _wordpress_element__WEBPACK_IMPORTED_MODULE_5__['createElement'])(
                                        'a', {
                                          href: '/wp-admin/admin.php?page=api/api.php',
                                        },
                                        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F'))));
                  },
                }]);

          return Block;
        }(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

    /***/
  }),

  /***/ './src/FetchApi.js':
  /*!*************************!*\
    !*** ./src/FetchApi.js ***!
    \*************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'default',
        function() { return FetchApi; });
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */
        './node_modules/@babel/runtime/helpers/classCallCheck.js');
    /* harmony import */
    var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */
        './node_modules/@babel/runtime/helpers/createClass.js');
    /* harmony import */
    var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);

    var addQueryArgs = wp.url.addQueryArgs;
    var _wp = wp,
        apiFetch = _wp.apiFetch;

    var FetchApi =
        /*#__PURE__*/
        function() {
          function FetchApi() {
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
                this, FetchApi);
          }

          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
              FetchApi, null, [
                {
                  key: 'callMethod',
                  value: function callMethod(path) {
                    var parameters = arguments.length > 1 && arguments[1] !==
                    undefined ? arguments[1] : {};
                    var request = apiFetch({
                      path: addQueryArgs('/api/' + path, parameters),
                    });
                    return request.then(function(response) {
                      return response;
                    });
                  },
                }, {
                  key: 'fetchCategories',
                  value: function fetchCategories() {
                    return this.callMethod('categories');
                  },
                }, {
                  key: 'fetchProducts',
                  value: function fetchProducts(categoryId) {
                    return this.callMethod('category/' + categoryId);
                  },
                }, {
                  key: 'fetchProduct',
                  value: function fetchProduct(categoryId, productId) {
                    return this.callMethod(
                        'category/' + categoryId + '/' + productId);
                  },
                }, {
                  key: 'sync',
                  value: function sync(categoryId, productId) {
                    return this.callMethod(
                        'sync/' + categoryId + '/' + productId);
                  },
                }]);

          return FetchApi;
        }();

    /***/
  }),

  /***/ './src/index.js':
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */
        '@wordpress/element');
    /* harmony import */
    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(
        _wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */
        '@wordpress/blocks');
    /* harmony import */
    var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(
        _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block */
        './src/Block.js');

    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__['registerBlockType'])(
        'api/fetch-data', {
          title: 'Awesome API',
          icon: 'universal-access-alt',
          category: 'embed',
          supports: {
            html: false,
          },
          attributes: {
            categoryId: {
              type: 'number',
              default: 0,
            },
            productId: {
              type: 'number',
              default: 0,
            },
          },
          edit: function edit(_ref) {
            var attributes = _ref.attributes,
                setAttributes = _ref.setAttributes;
            return Object(
                _wordpress_element__WEBPACK_IMPORTED_MODULE_0__['createElement'])(
                _Block__WEBPACK_IMPORTED_MODULE_2__['default'], {
                  categoryId: attributes.categoryId,
                  productId: attributes.productId,
                  onCategoryChanged: function onCategoryChanged(categoryId) {
                    return setAttributes({
                      categoryId: parseInt(categoryId),
                    });
                  },
                  onProductChanged: function onProductChanged(productId) {
                    return setAttributes({
                      productId: parseInt(productId),
                    });
                  },
                });
          },
          save: function save(_ref2) {
            var attributes = _ref2.attributes;
            return null;
          },
        });

    /***/
  }),

  /***/ '@wordpress/blocks':
  /*!*****************************************!*\
    !*** external {"this":["wp","blocks"]} ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    (function() { module.exports = this['wp']['blocks']; }());

    /***/
  }),

  /***/ '@wordpress/components':
  /*!*********************************************!*\
    !*** external {"this":["wp","components"]} ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    (function() { module.exports = this['wp']['components']; }());

    /***/
  }),

  /***/ '@wordpress/element':
  /*!******************************************!*\
    !*** external {"this":["wp","element"]} ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    (function() { module.exports = this['wp']['element']; }());

    /***/
  }),

  /***/ 'react':
  /*!************************!*\
    !*** external "React" ***!
    \************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = React;

    /***/
  })

  /******/
});
//# sourceMappingURL=index.js.map