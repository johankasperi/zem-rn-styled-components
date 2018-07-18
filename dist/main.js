(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAX_BRIGHTNESS = exports.MAX_BRIGHTNESS = 255;
var HUE_MAX_DEGREE = exports.HUE_MAX_DEGREE = 360;
var MAX_PERCENTAGE = exports.MAX_PERCENTAGE = 100;
var HEX_BASE = exports.HEX_BASE = 16;
var JSON_SPACING = exports.JSON_SPACING = 2;
var NUMERICAL_FONT_BOLD = exports.NUMERICAL_FONT_BOLD = 700;
var NUMERICAL_FONT_NORMAL = exports.NUMERICAL_FONT_NORMAL = 400;
var NUMERICAL_DECIMAL_PRECISION = exports.NUMERICAL_DECIMAL_PRECISION = 1;
var REACT_RULES_WITH_COLOR = exports.REACT_RULES_WITH_COLOR = ['backgroundColor', 'borderColor', 'color', 'shadowColor', 'textDecorationColor', 'textShadowColor'];
var HTML_TAGS = exports.HTML_TAGS = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'math', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'];
var OPTION_NAMES = exports.OPTION_NAMES = { COLOR_FORMAT: "colorFormat", TEXT_BASE_COMPONENT: "textBaseComponent", COLOR_THEME_PREFIX: "colorThemePrefix", FONT_THEME_PREFIX: "fontThemePrefix" };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorUtils = __webpack_require__(4);

Object.keys(_colorUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorUtils[key];
    }
  });
});

var _commonUtils = __webpack_require__(5);

Object.keys(_commonUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _commonUtils[key];
    }
  });
});

var _layerUtils = __webpack_require__(6);

Object.keys(_layerUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layerUtils[key];
    }
  });
});

var _nameUtils = __webpack_require__(7);

Object.keys(_nameUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nameUtils[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textStyle = __webpack_require__(3);

var _color = __webpack_require__(8);

var _constants = __webpack_require__(0);

var styleguideColors = function styleguideColors(context, colors) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT)
  };

  var code = (0, _color.generateColorObjectFromProject)(options, context.project, colors);

  return {
    code,
    language: 'javascript'
  };
};

var styleguideTextStyles = function styleguideTextStyles(context, textStyles) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT),
    textBaseComponent: context.getOption(_constants.OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(_constants.OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(_constants.OPTION_NAMES.FONT_THEME_PREFIX)
  };

  var code = (0, _textStyle.generateTextComponentsFromProject)(options, context.project, textStyles);

  return {
    code,
    language: 'javascript'
  };
};

var layer = function layer(context, _layer) {
  var object = {
    layerName: _layer.name,
    projectName: context.project.name
  };

  var JSONString = JSON.stringify(object, null, 2);

  return {
    code: JSONString,
    language: 'json'
  };
};

var comment = function comment(context, text) {
  return `// ${text}`;
};

var exportStyleguideColors = function exportStyleguideColors(context, colors) {
  var codeObject = styleguideColors(context, colors);
  var code = codeObject.code;

  return {
    code,
    filename: 'colors.js',
    language: 'javascript'
  };
};

var exportStyleguideTextStyles = function exportStyleguideTextStyles(context, textStyles) {
  var codeObject = styleguideTextStyles(context, textStyles);
  var code = codeObject.code;

  return {
    code,
    filename: 'Fonts.js',
    language: 'javascript'
  };
};

exports.default = {
  layer,
  styleguideColors,
  styleguideTextStyles,
  comment,
  exportStyleguideColors,
  exportStyleguideTextStyles
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTextComponentsFromProject = undefined;

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var generateTextComponentsFromProject = function generateTextComponentsFromProject(options, project, textStyles) {
  var components = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textStyles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var textStyle = _step.value;

      components += `${generateTextComponentFromTextStyle(project, options, textStyle)}\n\n`;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return components;
};

var generateTextComponentFromTextStyle = function generateTextComponentFromTextStyle(project, options, textStyle) {
  var color = project.findColorEqual(textStyle.color) || (0, _utils.getColorStringByFormat)(textStyle.color, options.colorFormat);
  var colorValue = color.name ? `theme.${options.colorThemePrefix || 'color'}.${color.name}` : color;
  var styleObj = { fontFamily: `theme.${options.fontThemePrefix || 'font'}.${(0, _utils.generateName)(textStyle.fontFace)}`, fontSize: textStyle.fontSize && (0, _utils.round)(textStyle.fontSize, _constants.NUMERICAL_DECIMAL_PRECISION), lineHeight: textStyle.lineHeight && (0, _utils.round)(textStyle.lineHeight, _constants.NUMERICAL_DECIMAL_PRECISION), letterSpacing: textStyle.letterSpacing && (0, _utils.round)(textStyle.letterSpacing, _constants.NUMERICAL_DECIMAL_PRECISION), textAlign: textStyle.textAlign, color: colorValue };
  var textStylesStr = JSON.stringify(styleObj, null, _constants.JSON_SPACING);
  textStylesStr = textStylesStr.replace(/"(.+)":/g, '$1:').replace(/"theme.(.*)"/g, 'theme.$1');
  var componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(textStyle.name));
  var baseComponent = options.textBaseComponent ? `(${options.textBaseComponent})` : '.text';
  return `const ${componentName} = glamorous${baseComponent}((props, theme) => (${textStylesStr}))`;
};

exports.generateTextComponentsFromProject = generateTextComponentsFromProject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorStringByFormat = exports.toDefaultString = exports.getColorMapByFormat = exports.blendColors = undefined;

var _constants = __webpack_require__(0);

var alphaFormatter = new Intl.NumberFormat('en-US', {
  useGrouping: false,
  maximumFractionDigits: 2
});

function toHex(num) {
  return (num < _constants.HEX_BASE ? '0' : '') + num.toString(_constants.HEX_BASE);
}

function blendColors(colors) {
  return colors.reduce(function (blendedColor, color) {
    return blendedColor.blend(color);
  });
}

function getColorStringByFormat(color, colorFormat) {
  if (!('r' in color && 'g' in color && 'b' in color && 'a' in color)) {
    return;
  }

  switch (colorFormat) {
    case 'hex':
      return toHexString(color);

    case 'rgb':
      return toRGBAString(color);

    case 'hsl':
      return toHSLAString(color);

    case 'default':
    default:
      return toDefaultString(color);
  }
}

function getColorMapByFormat(colors, colorFormat) {
  return colors.reduce(function (colorMap, color) {
    var colorString = getColorStringByFormat(color, colorFormat);
    colorMap[colorString] = color.name;
    return colorMap;
  }, {});
}

function toHexString(color, prefix) {
  var hexCode = color.hexBase();

  if (color.a < 1) {
    var hexA = toHex(color.a * _constants.MAX_BRIGHTNESS);

    hexCode = prefix ? hexA + hexCode : hexCode + hexA;
  }

  return `#${hexCode}`;
}

function toRGBAString(color) {
  var rgb = `${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}`;

  var rgbStr = color.a < 1 ? `rgba(${rgb}, ${alphaFormatter.format(color.a)})` : `rgb(${rgb})`;

  return rgbStr;
}

function toHSLAString(color) {
  var hslColor = color.toHSL();
  var hsl = `${Math.round(hslColor.h * _constants.HUE_MAX_DEGREE)}, ` + `${Math.round(hslColor.s * _constants.MAX_PERCENTAGE)}%, ` + `${Math.round(hslColor.l * _constants.MAX_PERCENTAGE)}%`;

  var hslStr = color.a < 1 ? `hsla(${hsl}, ${alphaFormatter.format(color.a)})` : `hsl(${hsl})`;

  return hslStr;
}

function toDefaultString(color) {
  return color.a < 1 ? toRGBAString(color) : toHexString(color);
}

exports.blendColors = blendColors;
exports.getColorMapByFormat = getColorMapByFormat;
exports.toDefaultString = toDefaultString;
exports.getColorStringByFormat = getColorStringByFormat;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectorize = exports.round = exports.isHtmlTag = undefined;

var _constants = __webpack_require__(0);

function escape(str) {
  return str.trim().replace(/[^\s\w-]/g, '').replace(/^(-?\d+)+/, '').replace(/\s+/g, '-');
}

function isHtmlTag(str) {
  return _constants.HTML_TAGS.includes(str);
}

function round(number, precision) {
  var formattedNumber = Number(number).toLocaleString('en-US', {
    useGrouping: false,
    maximumFractionDigits: precision
  });

  return Number(formattedNumber);
}

function selectorize(str) {
  if (!str) {
    return '';
  }

  var selectorizedStr = str.trim();

  if (isHtmlTag(str)) {
    return selectorizedStr.toLowerCase();
  }

  if (/^[#.]/.test(selectorizedStr)) {
    var name = escape(selectorizedStr.substr(1));

    if (name) {
      return selectorizedStr[0] + name;
    }
  }

  selectorizedStr = escape(selectorizedStr);

  return selectorizedStr && `.${selectorizedStr}`;
}

exports.isHtmlTag = isHtmlTag;
exports.round = round;
exports.selectorize = selectorize;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function layerHasGradient(layer) {
  return layer.fills.some(function (f) {
    return f.type === 'gradient';
  });
}

function layerHasBlendMode(layer) {
  return layer.fills.some(function (f) {
    return f.blendMode && f.blendMode !== 'normal';
  });
}

exports.layerHasGradient = layerHasGradient;
exports.layerHasBlendMode = layerHasBlendMode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowercaseFirst = lowercaseFirst;
exports.uppercaseFirst = uppercaseFirst;
exports.generateName = generateName;
function lowercaseFirst(s) {
  return s.charAt(0).toLowerCase() + s.substring(1);
}

function uppercaseFirst(s) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}

function joinTokens(components) {
  var name = components.map(uppercaseFirst).join('');
  return lowercaseFirst(name);
}

function tokensForString(str) {
  var tokenizer = /\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g;

  var matchResult = str.match(tokenizer);
  if (!matchResult) {
    return ['invalid', 'name'];
  }

  return matchResult.map(function (token) {
    return token.toLowerCase();
  });
}

function generateName(name) {
  return joinTokens(tokensForString(name));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColorObjectFromProject = undefined;

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var generateColorObjectFromProject = function generateColorObjectFromProject(options, project, colors) {
  var colorsObject = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var color = _step.value;

      if (color.name) {
        colorsObject[color.name] = (0, _utils.getColorStringByFormat)(color, options.colorFormat);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var colorsStylesStr = JSON.stringify(colorsObject, null, _constants.JSON_SPACING);
  colorsStylesStr = colorsStylesStr.replace(/"(.+)":/g, '$1:');
  return `const base = ${colorsStylesStr}`;
};

exports.generateColorObjectFromProject = generateColorObjectFromProject;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNjcwZWU4NDhlZWNjODZjNmE4NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xheWVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYW1lLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJNQVhfQlJJR0hUTkVTUyIsIkhVRV9NQVhfREVHUkVFIiwiTUFYX1BFUkNFTlRBR0UiLCJIRVhfQkFTRSIsIkpTT05fU1BBQ0lORyIsIk5VTUVSSUNBTF9GT05UX0JPTEQiLCJOVU1FUklDQUxfRk9OVF9OT1JNQUwiLCJOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04iLCJSRUFDVF9SVUxFU19XSVRIX0NPTE9SIiwiSFRNTF9UQUdTIiwiT1BUSU9OX05BTUVTIiwiQ09MT1JfRk9STUFUIiwiVEVYVF9CQVNFX0NPTVBPTkVOVCIsIkNPTE9SX1RIRU1FX1BSRUZJWCIsIkZPTlRfVEhFTUVfUFJFRklYIiwic3R5bGVndWlkZUNvbG9ycyIsImNvbnRleHQiLCJjb2xvcnMiLCJvcHRpb25zIiwiY29sb3JGb3JtYXQiLCJnZXRPcHRpb24iLCJjb2RlIiwicHJvamVjdCIsImxhbmd1YWdlIiwic3R5bGVndWlkZVRleHRTdHlsZXMiLCJ0ZXh0U3R5bGVzIiwidGV4dEJhc2VDb21wb25lbnQiLCJjb2xvclRoZW1lUHJlZml4IiwiZm9udFRoZW1lUHJlZml4IiwibGF5ZXIiLCJvYmplY3QiLCJsYXllck5hbWUiLCJuYW1lIiwicHJvamVjdE5hbWUiLCJKU09OU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbW1lbnQiLCJ0ZXh0IiwiZXhwb3J0U3R5bGVndWlkZUNvbG9ycyIsImNvZGVPYmplY3QiLCJmaWxlbmFtZSIsImV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwiZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IiwiY29tcG9uZW50cyIsInRleHRTdHlsZSIsImdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUiLCJjb2xvciIsImZpbmRDb2xvckVxdWFsIiwiY29sb3JWYWx1ZSIsInN0eWxlT2JqIiwiZm9udEZhbWlseSIsImZvbnRGYWNlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRBbGlnbiIsInRleHRTdHlsZXNTdHIiLCJyZXBsYWNlIiwiY29tcG9uZW50TmFtZSIsImJhc2VDb21wb25lbnQiLCJhbHBoYUZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJ1c2VHcm91cGluZyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsInRvSGV4IiwibnVtIiwidG9TdHJpbmciLCJibGVuZENvbG9ycyIsInJlZHVjZSIsImJsZW5kZWRDb2xvciIsImJsZW5kIiwiZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdCIsInRvSGV4U3RyaW5nIiwidG9SR0JBU3RyaW5nIiwidG9IU0xBU3RyaW5nIiwidG9EZWZhdWx0U3RyaW5nIiwiZ2V0Q29sb3JNYXBCeUZvcm1hdCIsImNvbG9yTWFwIiwiY29sb3JTdHJpbmciLCJwcmVmaXgiLCJoZXhDb2RlIiwiaGV4QmFzZSIsImEiLCJoZXhBIiwicmdiIiwiTWF0aCIsInJvdW5kIiwiciIsImciLCJiIiwicmdiU3RyIiwiZm9ybWF0IiwiaHNsQ29sb3IiLCJ0b0hTTCIsImhzbCIsImgiLCJzIiwibCIsImhzbFN0ciIsImVzY2FwZSIsInN0ciIsInRyaW0iLCJpc0h0bWxUYWciLCJpbmNsdWRlcyIsIm51bWJlciIsInByZWNpc2lvbiIsImZvcm1hdHRlZE51bWJlciIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwic2VsZWN0b3JpemUiLCJzZWxlY3Rvcml6ZWRTdHIiLCJ0b0xvd2VyQ2FzZSIsInRlc3QiLCJzdWJzdHIiLCJsYXllckhhc0dyYWRpZW50IiwiZmlsbHMiLCJzb21lIiwiZiIsInR5cGUiLCJsYXllckhhc0JsZW5kTW9kZSIsImJsZW5kTW9kZSIsImxvd2VyY2FzZUZpcnN0IiwidXBwZXJjYXNlRmlyc3QiLCJnZW5lcmF0ZU5hbWUiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImpvaW5Ub2tlbnMiLCJtYXAiLCJqb2luIiwidG9rZW5zRm9yU3RyaW5nIiwidG9rZW5pemVyIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsInRva2VuIiwiZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0IiwiY29sb3JzT2JqZWN0IiwiY29sb3JzU3R5bGVzU3RyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FD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QUFBQTtBQUFBOztBQVVuRSxNQUFJd0gsa0JBQWtCeEcsS0FBS0MsU0FBTCxDQUFlc0csWUFBZixFQUE2QixJQUE3QixFQUFtQ3RJLHVCQUFuQyxDQUF0QjtBQUNBdUksb0JBQWtCQSxnQkFBZ0JqRixPQUFoQixDQUF3QixVQUF4QixFQUFvQyxLQUFwQyxDQUFsQjtBQUNBLFNBQVEsZ0JBQWVpRixlQUFnQixFQUF2QztBQUNELENBYkQ7O1FBZVNGLDhCLEdBQUFBLDhCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjY3MGVlODQ4ZWVjYzg2YzZhODUiLCJleHBvcnQgY29uc3QgTUFYX0JSSUdIVE5FU1MgPSAyNTVcbmV4cG9ydCBjb25zdCBIVUVfTUFYX0RFR1JFRSA9IDM2MFxuZXhwb3J0IGNvbnN0IE1BWF9QRVJDRU5UQUdFID0gMTAwXG5leHBvcnQgY29uc3QgSEVYX0JBU0UgPSAxNlxuZXhwb3J0IGNvbnN0IEpTT05fU1BBQ0lORyA9IDJcbmV4cG9ydCBjb25zdCBOVU1FUklDQUxfRk9OVF9CT0xEID0gNzAwXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0ZPTlRfTk9STUFMID0gNDAwXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OID0gMVxuZXhwb3J0IGNvbnN0IFJFQUNUX1JVTEVTX1dJVEhfQ09MT1IgPSBbXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxuICAnYm9yZGVyQ29sb3InLFxuICAnY29sb3InLFxuICAnc2hhZG93Q29sb3InLFxuICAndGV4dERlY29yYXRpb25Db2xvcicsXG4gICd0ZXh0U2hhZG93Q29sb3InXG5dXG5leHBvcnQgY29uc3QgSFRNTF9UQUdTID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJlYScsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmFzZScsXG4gICdiZGknLFxuICAnYmRvJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdicicsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkYXRhJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2RkJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaWFsb2cnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtJyxcbiAgJ2VtYmVkJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2tleWdlbicsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21hcCcsXG4gICdtYXJrJyxcbiAgJ21hdGgnLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICdtZXRhJyxcbiAgJ21ldGVyJyxcbiAgJ25hdicsXG4gICdub3NjcmlwdCcsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ291dHB1dCcsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3BpY3R1cmUnLFxuICAncHJlJyxcbiAgJ3Byb2dyZXNzJyxcbiAgJ3EnLFxuICAncnAnLFxuICAncnQnLFxuICAncnVieScsXG4gICdzJyxcbiAgJ3NhbXAnLFxuICAnc2NyaXB0JyxcbiAgJ3NlY3Rpb24nLFxuICAnc2VsZWN0JyxcbiAgJ3Nsb3QnLFxuICAnc21hbGwnLFxuICAnc291cmNlJyxcbiAgJ3NvdXJjZScsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdHlsZScsXG4gICdzdWInLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAnc3ZnJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndScsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nLFxuICAnd2JyJ1xuXVxuZXhwb3J0IGNvbnN0IE9QVElPTl9OQU1FUyA9IHsgQ09MT1JfRk9STUFUOiBcImNvbG9yRm9ybWF0XCIsIFRFWFRfQkFTRV9DT01QT05FTlQ6IFwidGV4dEJhc2VDb21wb25lbnRcIiwgQ09MT1JfVEhFTUVfUFJFRklYOiBcImNvbG9yVGhlbWVQcmVmaXhcIiwgRk9OVF9USEVNRV9QUkVGSVg6IFwiZm9udFRoZW1lUHJlZml4XCIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudHMuanMiLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb24tdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL2xheWVyLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnLi9uYW1lLXV0aWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiaW1wb3J0IHsgZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IH0gZnJvbSAnLi90ZXh0LXN0eWxlJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0IH0gZnJvbSAnLi9jb2xvcidcblxuaW1wb3J0IHsgT1BUSU9OX05BTUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IHN0eWxlZ3VpZGVDb2xvcnMgPSAoY29udGV4dCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JGb3JtYXQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9GT1JNQVQpXG4gIH1cblxuICBjb25zdCBjb2RlID0gZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0KG9wdGlvbnMsIGNvbnRleHQucHJvamVjdCwgY29sb3JzKVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbG9yRm9ybWF0OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfRk9STUFUKSxcbiAgICB0ZXh0QmFzZUNvbXBvbmVudDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLlRFWFRfQkFTRV9DT01QT05FTlQpLFxuICAgIGNvbG9yVGhlbWVQcmVmaXg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9USEVNRV9QUkVGSVgpLFxuICAgIGZvbnRUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkZPTlRfVEhFTUVfUFJFRklYKVxuICB9XG5cbiAgY29uc3QgY29kZSA9IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdChcbiAgICBvcHRpb25zLFxuICAgIGNvbnRleHQucHJvamVjdCxcbiAgICB0ZXh0U3R5bGVzXG4gIClcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmNvbnN0IGxheWVyID0gKGNvbnRleHQsIGxheWVyKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHtcbiAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgcHJvamVjdE5hbWU6IGNvbnRleHQucHJvamVjdC5uYW1lXG4gIH1cblxuICBjb25zdCBKU09OU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCBudWxsLCAyKVxuXG4gIHJldHVybiB7XG4gICAgY29kZTogSlNPTlN0cmluZyxcbiAgICBsYW5ndWFnZTogJ2pzb24nXG4gIH1cbn1cblxuY29uc3QgY29tbWVudCA9IChjb250ZXh0LCB0ZXh0KSA9PiB7XG4gIHJldHVybiBgLy8gJHt0ZXh0fWBcbn1cblxuY29uc3QgZXhwb3J0U3R5bGVndWlkZUNvbG9ycyA9IChjb250ZXh0LCBjb2xvcnMpID0+IHtcbiAgY29uc3QgY29kZU9iamVjdCA9IHN0eWxlZ3VpZGVDb2xvcnMoY29udGV4dCwgY29sb3JzKVxuICBjb25zdCBjb2RlID0gY29kZU9iamVjdC5jb2RlXG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlLFxuICAgIGZpbGVuYW1lOiAnY29sb3JzLmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3QgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBjb2RlT2JqZWN0ID0gc3R5bGVndWlkZVRleHRTdHlsZXMoY29udGV4dCwgdGV4dFN0eWxlcylcbiAgY29uc3QgY29kZSA9IGNvZGVPYmplY3QuY29kZVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBmaWxlbmFtZTogJ0ZvbnRzLmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYXllcixcbiAgc3R5bGVndWlkZUNvbG9ycyxcbiAgc3R5bGVndWlkZVRleHRTdHlsZXMsXG4gIGNvbW1lbnQsXG4gIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMsXG4gIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgeyBKU09OX1NQQUNJTkcsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIGdlbmVyYXRlTmFtZSxcbiAgdXBwZXJjYXNlRmlyc3QsXG4gIGdldENvbG9yU3RyaW5nQnlGb3JtYXQsXG4gIHJvdW5kXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBnZW5lcmF0ZVRleHRDb21wb25lbnRzRnJvbVByb2plY3QgPSAob3B0aW9ucywgcHJvamVjdCwgdGV4dFN0eWxlcykgPT4ge1xuICBsZXQgY29tcG9uZW50cyA9ICcnXG4gIGZvciAobGV0IHRleHRTdHlsZSBvZiB0ZXh0U3R5bGVzKSB7XG4gICAgY29tcG9uZW50cyArPSBgJHtnZW5lcmF0ZVRleHRDb21wb25lbnRGcm9tVGV4dFN0eWxlKFxuICAgICAgcHJvamVjdCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICB0ZXh0U3R5bGVcbiAgICApfVxcblxcbmBcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzXG59XG5cbmNvbnN0IGdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUgPSAoXG4gIHByb2plY3QsXG4gIG9wdGlvbnMsXG4gIHRleHRTdHlsZVxuKSA9PiB7XG4gIGNvbnN0IGNvbG9yID1cbiAgICBwcm9qZWN0LmZpbmRDb2xvckVxdWFsKHRleHRTdHlsZS5jb2xvcikgfHxcbiAgICBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KHRleHRTdHlsZS5jb2xvciwgb3B0aW9ucy5jb2xvckZvcm1hdClcbiAgY29uc3QgY29sb3JWYWx1ZSA9IGNvbG9yLm5hbWVcbiAgICA/IGB0aGVtZS4ke29wdGlvbnMuY29sb3JUaGVtZVByZWZpeCB8fCAnY29sb3InfS4ke2NvbG9yLm5hbWV9YFxuICAgIDogY29sb3JcbiAgY29uc3Qgc3R5bGVPYmogPSB7IGZvbnRGYW1pbHk6IGB0aGVtZS4ke29wdGlvbnMuZm9udFRoZW1lUHJlZml4IHx8ICdmb250J30uJHtnZW5lcmF0ZU5hbWUodGV4dFN0eWxlLmZvbnRGYWNlKX1gLCBmb250U2l6ZTogdGV4dFN0eWxlLmZvbnRTaXplICYmIHJvdW5kKHRleHRTdHlsZS5mb250U2l6ZSwgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OKSwgbGluZUhlaWdodDogdGV4dFN0eWxlLmxpbmVIZWlnaHQgJiYgcm91bmQodGV4dFN0eWxlLmxpbmVIZWlnaHQsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiksIGxldHRlclNwYWNpbmc6IHRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nICYmIHJvdW5kKHRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nLCBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04pLCB0ZXh0QWxpZ246IHRleHRTdHlsZS50ZXh0QWxpZ24sIGNvbG9yOiBjb2xvclZhbHVlIH07XG4gIGxldCB0ZXh0U3R5bGVzU3RyID0gSlNPTi5zdHJpbmdpZnkoc3R5bGVPYmosIG51bGwsIEpTT05fU1BBQ0lORylcbiAgdGV4dFN0eWxlc1N0ciA9IHRleHRTdHlsZXNTdHJcbiAgICAucmVwbGFjZSgvXCIoLispXCI6L2csICckMTonKVxuICAgIC5yZXBsYWNlKC9cInRoZW1lLiguKilcIi9nLCAndGhlbWUuJDEnKVxuICBjb25zdCBjb21wb25lbnROYW1lID0gdXBwZXJjYXNlRmlyc3QoZ2VuZXJhdGVOYW1lKHRleHRTdHlsZS5uYW1lKSlcbiAgY29uc3QgYmFzZUNvbXBvbmVudCA9IG9wdGlvbnMudGV4dEJhc2VDb21wb25lbnQgPyBgKCR7b3B0aW9ucy50ZXh0QmFzZUNvbXBvbmVudH0pYCA6ICcudGV4dCdcbiAgcmV0dXJuIGBjb25zdCAke2NvbXBvbmVudE5hbWV9ID0gZ2xhbW9yb3VzJHtiYXNlQ29tcG9uZW50fSgocHJvcHMsIHRoZW1lKSA9PiAoJHt0ZXh0U3R5bGVzU3RyfSkpYFxufVxuXG5leHBvcnQgeyBnZW5lcmF0ZVRleHRDb21wb25lbnRzRnJvbVByb2plY3QgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHQtc3R5bGUvaW5kZXguanMiLCJpbXBvcnQge1xuICBNQVhfQlJJR0hUTkVTUyxcbiAgSEVYX0JBU0UsXG4gIEhVRV9NQVhfREVHUkVFLFxuICBNQVhfUEVSQ0VOVEFHRVxufSBmcm9tICcuLi9jb25zdGFudHMnXG5cbnZhciBhbHBoYUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG59KVxuXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgcmV0dXJuIChudW0gPCBIRVhfQkFTRSA/ICcwJyA6ICcnKSArIG51bS50b1N0cmluZyhIRVhfQkFTRSlcbn1cblxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3JzKSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChibGVuZGVkQ29sb3IsIGNvbG9yKSA9PiBibGVuZGVkQ29sb3IuYmxlbmQoY29sb3IpKVxufVxuXG5mdW5jdGlvbiBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdCkge1xuICBpZiAoISgncicgaW4gY29sb3IgJiYgJ2cnIGluIGNvbG9yICYmICdiJyBpbiBjb2xvciAmJiAnYScgaW4gY29sb3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGNvbG9yRm9ybWF0KSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldHVybiB0b0hleFN0cmluZyhjb2xvcilcblxuICAgIGNhc2UgJ3JnYic6XG4gICAgICByZXR1cm4gdG9SR0JBU3RyaW5nKGNvbG9yKVxuXG4gICAgY2FzZSAnaHNsJzpcbiAgICAgIHJldHVybiB0b0hTTEFTdHJpbmcoY29sb3IpXG5cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRvRGVmYXVsdFN0cmluZyhjb2xvcilcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb2xvck1hcEJ5Rm9ybWF0KGNvbG9ycywgY29sb3JGb3JtYXQpIHtcbiAgcmV0dXJuIGNvbG9ycy5yZWR1Y2UoKGNvbG9yTWFwLCBjb2xvcikgPT4ge1xuICAgIHZhciBjb2xvclN0cmluZyA9IGdldENvbG9yU3RyaW5nQnlGb3JtYXQoY29sb3IsIGNvbG9yRm9ybWF0KVxuICAgIGNvbG9yTWFwW2NvbG9yU3RyaW5nXSA9IGNvbG9yLm5hbWVcbiAgICByZXR1cm4gY29sb3JNYXBcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIHRvSGV4U3RyaW5nKGNvbG9yLCBwcmVmaXgpIHtcbiAgdmFyIGhleENvZGUgPSBjb2xvci5oZXhCYXNlKClcblxuICBpZiAoY29sb3IuYSA8IDEpIHtcbiAgICB2YXIgaGV4QSA9IHRvSGV4KGNvbG9yLmEgKiBNQVhfQlJJR0hUTkVTUylcblxuICAgIGhleENvZGUgPSBwcmVmaXggPyBoZXhBICsgaGV4Q29kZSA6IGhleENvZGUgKyBoZXhBXG4gIH1cblxuICByZXR1cm4gYCMke2hleENvZGV9YFxufVxuXG5mdW5jdGlvbiB0b1JHQkFTdHJpbmcoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGAke01hdGgucm91bmQoY29sb3Iucil9LCAke01hdGgucm91bmQoY29sb3IuZyl9LCAke01hdGgucm91bmQoXG4gICAgY29sb3IuYlxuICApfWBcblxuICB2YXIgcmdiU3RyID1cbiAgICBjb2xvci5hIDwgMVxuICAgICAgPyBgcmdiYSgke3JnYn0sICR7YWxwaGFGb3JtYXR0ZXIuZm9ybWF0KGNvbG9yLmEpfSlgXG4gICAgICA6IGByZ2IoJHtyZ2J9KWBcblxuICByZXR1cm4gcmdiU3RyXG59XG5cbmZ1bmN0aW9uIHRvSFNMQVN0cmluZyhjb2xvcikge1xuICB2YXIgaHNsQ29sb3IgPSBjb2xvci50b0hTTCgpXG4gIHZhciBoc2wgPVxuICAgIGAke01hdGgucm91bmQoaHNsQ29sb3IuaCAqIEhVRV9NQVhfREVHUkVFKX0sIGAgK1xuICAgIGAke01hdGgucm91bmQoaHNsQ29sb3IucyAqIE1BWF9QRVJDRU5UQUdFKX0lLCBgICtcbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLmwgKiBNQVhfUEVSQ0VOVEFHRSl9JWBcblxuICB2YXIgaHNsU3RyID1cbiAgICBjb2xvci5hIDwgMVxuICAgICAgPyBgaHNsYSgke2hzbH0sICR7YWxwaGFGb3JtYXR0ZXIuZm9ybWF0KGNvbG9yLmEpfSlgXG4gICAgICA6IGBoc2woJHtoc2x9KWBcblxuICByZXR1cm4gaHNsU3RyXG59XG5cbmZ1bmN0aW9uIHRvRGVmYXVsdFN0cmluZyhjb2xvcikge1xuICByZXR1cm4gY29sb3IuYSA8IDEgPyB0b1JHQkFTdHJpbmcoY29sb3IpIDogdG9IZXhTdHJpbmcoY29sb3IpXG59XG5cbmV4cG9ydCB7XG4gIGJsZW5kQ29sb3JzLFxuICBnZXRDb2xvck1hcEJ5Rm9ybWF0LFxuICB0b0RlZmF1bHRTdHJpbmcsXG4gIGdldENvbG9yU3RyaW5nQnlGb3JtYXRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb2xvci11dGlscy5qcyIsImltcG9ydCB7IEhUTUxfVEFHUyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9bXlxcc1xcdy1dL2csICcnKVxuICAgIC5yZXBsYWNlKC9eKC0/XFxkKykrLywgJycpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxufVxuXG5mdW5jdGlvbiBpc0h0bWxUYWcoc3RyKSB7XG4gIHJldHVybiBIVE1MX1RBR1MuaW5jbHVkZXMoc3RyKVxufVxuXG5mdW5jdGlvbiByb3VuZChudW1iZXIsIHByZWNpc2lvbikge1xuICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gTnVtYmVyKG51bWJlcikudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByZWNpc2lvblxuICB9KVxuXG4gIHJldHVybiBOdW1iZXIoZm9ybWF0dGVkTnVtYmVyKVxufVxuXG5mdW5jdGlvbiBzZWxlY3Rvcml6ZShzdHIpIHtcbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHZhciBzZWxlY3Rvcml6ZWRTdHIgPSBzdHIudHJpbSgpXG5cbiAgaWYgKGlzSHRtbFRhZyhzdHIpKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yaXplZFN0ci50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBpZiAoL15bIy5dLy50ZXN0KHNlbGVjdG9yaXplZFN0cikpIHtcbiAgICB2YXIgbmFtZSA9IGVzY2FwZShzZWxlY3Rvcml6ZWRTdHIuc3Vic3RyKDEpKVxuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHJbMF0gKyBuYW1lXG4gICAgfVxuICB9XG5cbiAgc2VsZWN0b3JpemVkU3RyID0gZXNjYXBlKHNlbGVjdG9yaXplZFN0cilcblxuICByZXR1cm4gc2VsZWN0b3JpemVkU3RyICYmIGAuJHtzZWxlY3Rvcml6ZWRTdHJ9YFxufVxuXG5leHBvcnQgeyBpc0h0bWxUYWcsIHJvdW5kLCBzZWxlY3Rvcml6ZSB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29tbW9uLXV0aWxzLmpzIiwiZnVuY3Rpb24gbGF5ZXJIYXNHcmFkaWVudChsYXllcikge1xuICByZXR1cm4gbGF5ZXIuZmlsbHMuc29tZShmID0+IGYudHlwZSA9PT0gJ2dyYWRpZW50Jylcbn1cblxuZnVuY3Rpb24gbGF5ZXJIYXNCbGVuZE1vZGUobGF5ZXIpIHtcbiAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLmJsZW5kTW9kZSAmJiBmLmJsZW5kTW9kZSAhPT0gJ25vcm1hbCcpXG59XG5cbmV4cG9ydCB7IGxheWVySGFzR3JhZGllbnQsIGxheWVySGFzQmxlbmRNb2RlIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9sYXllci11dGlscy5qcyIsImV4cG9ydCBmdW5jdGlvbiBsb3dlcmNhc2VGaXJzdChzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyY2FzZUZpcnN0KHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKVxufVxuXG5mdW5jdGlvbiBqb2luVG9rZW5zKGNvbXBvbmVudHMpIHtcbiAgdmFyIG5hbWUgPSBjb21wb25lbnRzLm1hcCh1cHBlcmNhc2VGaXJzdCkuam9pbignJylcbiAgcmV0dXJuIGxvd2VyY2FzZUZpcnN0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIHRva2Vuc0ZvclN0cmluZyhzdHIpIHtcbiAgdmFyIHRva2VuaXplciA9IC9cXGQrfFthLXpdK3xbQS1aXSsoPyFbYS16XSl8W0EtWl1bYS16XSsvZ1xuXG4gIHZhciBtYXRjaFJlc3VsdCA9IHN0ci5tYXRjaCh0b2tlbml6ZXIpXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gWydpbnZhbGlkJywgJ25hbWUnXVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoUmVzdWx0Lm1hcChmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUobmFtZSkge1xuICByZXR1cm4gam9pblRva2Vucyh0b2tlbnNGb3JTdHJpbmcobmFtZSkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbmFtZS11dGlscy5qcyIsImltcG9ydCB7IEpTT05fU1BBQ0lORyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldENvbG9yU3RyaW5nQnlGb3JtYXQgfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0ID0gKG9wdGlvbnMsIHByb2plY3QsIGNvbG9ycykgPT4ge1xuICBjb25zdCBjb2xvcnNPYmplY3QgPSB7fVxuICBmb3IgKGxldCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBpZiAoY29sb3IubmFtZSkge1xuICAgICAgY29sb3JzT2JqZWN0W2NvbG9yLm5hbWVdID0gZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdChcbiAgICAgICAgY29sb3IsXG4gICAgICAgIG9wdGlvbnMuY29sb3JGb3JtYXRcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgbGV0IGNvbG9yc1N0eWxlc1N0ciA9IEpTT04uc3RyaW5naWZ5KGNvbG9yc09iamVjdCwgbnVsbCwgSlNPTl9TUEFDSU5HKVxuICBjb2xvcnNTdHlsZXNTdHIgPSBjb2xvcnNTdHlsZXNTdHIucmVwbGFjZSgvXCIoLispXCI6L2csICckMTonKVxuICByZXR1cm4gYGNvbnN0IGJhc2UgPSAke2NvbG9yc1N0eWxlc1N0cn1gXG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29sb3IvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9