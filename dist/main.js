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
var OPTION_NAMES = exports.OPTION_NAMES = {
  COLOR_FORMAT: 'colorFormat',
  COLOR_THEME_PREFIX: 'colorThemePrefix',
  FONT_THEME_PREFIX: 'fontThemePrefix'
};

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

      components += `${generateTextComponentFromTextStyle(project, options.colorFormat, options.colorThemePrefix, options.fontThemePrefix, textStyle)}\n\n`;
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

var generateTextComponentFromTextStyle = function generateTextComponentFromTextStyle(project, colorFormat, colorThemePrefix, fontThemePrefix, textStyle) {
  var color = project.findColorEqual(textStyle.color) || (0, _utils.getColorStringByFormat)(textStyle.color, colorFormat);
  var colorValue = color.name ? `theme${colorThemePrefix ? '.' + colorThemePrefix : ''}.${color.name}` : color;
  var styleObj = {
    fontFamily: `theme${fontThemePrefix ? '.' + fontThemePrefix : ''}.${(0, _utils.generateName)(textStyle.fontFace)}`,
    fontSize: textStyle.fontSize && (0, _utils.round)(textStyle.fontSize, _constants.NUMERICAL_DECIMAL_PRECISION),
    lineHeight: textStyle.lineHeight && (0, _utils.round)(textStyle.lineHeight, _constants.NUMERICAL_DECIMAL_PRECISION),
    letterSpacing: textStyle.letterSpacing && (0, _utils.round)(textStyle.letterSpacing, _constants.NUMERICAL_DECIMAL_PRECISION),
    textAlign: textStyle.textAlign,
    color: colorValue
  };
  var textStylesStr = JSON.stringify(styleObj, null, _constants.JSON_SPACING);
  textStylesStr = textStylesStr.replace(/"(.+)":/g, '$1:').replace(/"theme.(.*)"/g, 'theme.$1');
  var componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(textStyle.name));
  return `const ${componentName} = glamorous(Base)((props, theme) => (${textStylesStr}))`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMWYyYzkyZmI4OTEzZjNkNzBjNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xheWVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYW1lLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJNQVhfQlJJR0hUTkVTUyIsIkhVRV9NQVhfREVHUkVFIiwiTUFYX1BFUkNFTlRBR0UiLCJIRVhfQkFTRSIsIkpTT05fU1BBQ0lORyIsIk5VTUVSSUNBTF9GT05UX0JPTEQiLCJOVU1FUklDQUxfRk9OVF9OT1JNQUwiLCJOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04iLCJSRUFDVF9SVUxFU19XSVRIX0NPTE9SIiwiSFRNTF9UQUdTIiwiT1BUSU9OX05BTUVTIiwiQ09MT1JfRk9STUFUIiwiQ09MT1JfVEhFTUVfUFJFRklYIiwiRk9OVF9USEVNRV9QUkVGSVgiLCJzdHlsZWd1aWRlQ29sb3JzIiwiY29udGV4dCIsImNvbG9ycyIsIm9wdGlvbnMiLCJjb2xvckZvcm1hdCIsImdldE9wdGlvbiIsImNvZGUiLCJwcm9qZWN0IiwibGFuZ3VhZ2UiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsInRleHRTdHlsZXMiLCJjb2xvclRoZW1lUHJlZml4IiwiZm9udFRoZW1lUHJlZml4IiwibGF5ZXIiLCJvYmplY3QiLCJsYXllck5hbWUiLCJuYW1lIiwicHJvamVjdE5hbWUiLCJKU09OU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbW1lbnQiLCJ0ZXh0IiwiZXhwb3J0U3R5bGVndWlkZUNvbG9ycyIsImNvZGVPYmplY3QiLCJmaWxlbmFtZSIsImV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwiZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IiwiY29tcG9uZW50cyIsInRleHRTdHlsZSIsImdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUiLCJjb2xvciIsImZpbmRDb2xvckVxdWFsIiwiY29sb3JWYWx1ZSIsInN0eWxlT2JqIiwiZm9udEZhbWlseSIsImZvbnRGYWNlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRBbGlnbiIsInRleHRTdHlsZXNTdHIiLCJyZXBsYWNlIiwiY29tcG9uZW50TmFtZSIsImFscGhhRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInVzZUdyb3VwaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwidG9IZXgiLCJudW0iLCJ0b1N0cmluZyIsImJsZW5kQ29sb3JzIiwicmVkdWNlIiwiYmxlbmRlZENvbG9yIiwiYmxlbmQiLCJnZXRDb2xvclN0cmluZ0J5Rm9ybWF0IiwidG9IZXhTdHJpbmciLCJ0b1JHQkFTdHJpbmciLCJ0b0hTTEFTdHJpbmciLCJ0b0RlZmF1bHRTdHJpbmciLCJnZXRDb2xvck1hcEJ5Rm9ybWF0IiwiY29sb3JNYXAiLCJjb2xvclN0cmluZyIsInByZWZpeCIsImhleENvZGUiLCJoZXhCYXNlIiwiYSIsImhleEEiLCJyZ2IiLCJNYXRoIiwicm91bmQiLCJyIiwiZyIsImIiLCJyZ2JTdHIiLCJmb3JtYXQiLCJoc2xDb2xvciIsInRvSFNMIiwiaHNsIiwiaCIsInMiLCJsIiwiaHNsU3RyIiwiZXNjYXBlIiwic3RyIiwidHJpbSIsImlzSHRtbFRhZyIsImluY2x1ZGVzIiwibnVtYmVyIiwicHJlY2lzaW9uIiwiZm9ybWF0dGVkTnVtYmVyIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJzZWxlY3Rvcml6ZSIsInNlbGVjdG9yaXplZFN0ciIsInRvTG93ZXJDYXNlIiwidGVzdCIsInN1YnN0ciIsImxheWVySGFzR3JhZGllbnQiLCJmaWxscyIsInNvbWUiLCJmIiwidHlwZSIsImxheWVySGFzQmxlbmRNb2RlIiwiYmxlbmRNb2RlIiwibG93ZXJjYXNlRmlyc3QiLCJ1cHBlcmNhc2VGaXJzdCIsImdlbmVyYXRlTmFtZSIsImNoYXJBdCIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiam9pblRva2VucyIsIm1hcCIsImpvaW4iLCJ0b2tlbnNGb3JTdHJpbmciLCJ0b2tlbml6ZXIiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwidG9rZW4iLCJnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QiLCJjb2xvcnNPYmplY3QiLCJjb2xvcnNTdHlsZXNTdHIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RE8sSUFBTUEsMENBQWlCLEdBQXZCO0FBQ0EsSUFBTUMsMENBQWlCLEdBQXZCO0FBQ0EsSUFBTUMs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QUNBLFNBQVEsZ0JBQWVnRixlQUFnQixFQUF2QztBQUNELENBYkQ7O1FBZVNGLDhCLEdBQUFBLDhCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzFmMmM5MmZiODkxM2YzZDcwYzQiLCJleHBvcnQgY29uc3QgTUFYX0JSSUdIVE5FU1MgPSAyNTVcbmV4cG9ydCBjb25zdCBIVUVfTUFYX0RFR1JFRSA9IDM2MFxuZXhwb3J0IGNvbnN0IE1BWF9QRVJDRU5UQUdFID0gMTAwXG5leHBvcnQgY29uc3QgSEVYX0JBU0UgPSAxNlxuZXhwb3J0IGNvbnN0IEpTT05fU1BBQ0lORyA9IDJcbmV4cG9ydCBjb25zdCBOVU1FUklDQUxfRk9OVF9CT0xEID0gNzAwXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0ZPTlRfTk9STUFMID0gNDAwXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OID0gMVxuZXhwb3J0IGNvbnN0IFJFQUNUX1JVTEVTX1dJVEhfQ09MT1IgPSBbXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxuICAnYm9yZGVyQ29sb3InLFxuICAnY29sb3InLFxuICAnc2hhZG93Q29sb3InLFxuICAndGV4dERlY29yYXRpb25Db2xvcicsXG4gICd0ZXh0U2hhZG93Q29sb3InXG5dXG5leHBvcnQgY29uc3QgSFRNTF9UQUdTID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJlYScsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmFzZScsXG4gICdiZGknLFxuICAnYmRvJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdicicsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkYXRhJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2RkJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaWFsb2cnLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtJyxcbiAgJ2VtYmVkJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2tleWdlbicsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21hcCcsXG4gICdtYXJrJyxcbiAgJ21hdGgnLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICdtZXRhJyxcbiAgJ21ldGVyJyxcbiAgJ25hdicsXG4gICdub3NjcmlwdCcsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ291dHB1dCcsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3BpY3R1cmUnLFxuICAncHJlJyxcbiAgJ3Byb2dyZXNzJyxcbiAgJ3EnLFxuICAncnAnLFxuICAncnQnLFxuICAncnVieScsXG4gICdzJyxcbiAgJ3NhbXAnLFxuICAnc2NyaXB0JyxcbiAgJ3NlY3Rpb24nLFxuICAnc2VsZWN0JyxcbiAgJ3Nsb3QnLFxuICAnc21hbGwnLFxuICAnc291cmNlJyxcbiAgJ3NvdXJjZScsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdHlsZScsXG4gICdzdWInLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAnc3ZnJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndScsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nLFxuICAnd2JyJ1xuXVxuZXhwb3J0IGNvbnN0IE9QVElPTl9OQU1FUyA9IHtcbiAgQ09MT1JfRk9STUFUOiAnY29sb3JGb3JtYXQnLFxuICBDT0xPUl9USEVNRV9QUkVGSVg6ICdjb2xvclRoZW1lUHJlZml4JyxcbiAgRk9OVF9USEVNRV9QUkVGSVg6ICdmb250VGhlbWVQcmVmaXgnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzLmpzIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnLi9sYXllci11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vbmFtZS11dGlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC5qcyIsImltcG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCB9IGZyb20gJy4vdGV4dC1zdHlsZSdcbmltcG9ydCB7IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCB9IGZyb20gJy4vY29sb3InXG5cbmltcG9ydCB7IE9QVElPTl9OQU1FUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jb25zdCBzdHlsZWd1aWRlQ29sb3JzID0gKGNvbnRleHQsIGNvbG9ycykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbG9yRm9ybWF0OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfRk9STUFUKVxuICB9XG5cbiAgY29uc3QgY29kZSA9IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdChvcHRpb25zLCBjb250ZXh0LnByb2plY3QsIGNvbG9ycylcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmNvbnN0IHN0eWxlZ3VpZGVUZXh0U3R5bGVzID0gKGNvbnRleHQsIHRleHRTdHlsZXMpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb2xvckZvcm1hdDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX0ZPUk1BVCksXG4gICAgY29sb3JUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX1RIRU1FX1BSRUZJWCksXG4gICAgZm9udFRoZW1lUHJlZml4OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuRk9OVF9USEVNRV9QUkVGSVgpXG4gIH1cblxuICBjb25zdCBjb2RlID0gZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0KFxuICAgIG9wdGlvbnMsXG4gICAgY29udGV4dC5wcm9qZWN0LFxuICAgIHRleHRTdHlsZXNcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3QgbGF5ZXIgPSAoY29udGV4dCwgbGF5ZXIpID0+IHtcbiAgY29uc3Qgb2JqZWN0ID0ge1xuICAgIGxheWVyTmFtZTogbGF5ZXIubmFtZSxcbiAgICBwcm9qZWN0TmFtZTogY29udGV4dC5wcm9qZWN0Lm5hbWVcbiAgfVxuXG4gIGNvbnN0IEpTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmplY3QsIG51bGwsIDIpXG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBKU09OU3RyaW5nLFxuICAgIGxhbmd1YWdlOiAnanNvbidcbiAgfVxufVxuXG5jb25zdCBjb21tZW50ID0gKGNvbnRleHQsIHRleHQpID0+IHtcbiAgcmV0dXJuIGAvLyAke3RleHR9YFxufVxuXG5jb25zdCBleHBvcnRTdHlsZWd1aWRlQ29sb3JzID0gKGNvbnRleHQsIGNvbG9ycykgPT4ge1xuICBjb25zdCBjb2RlT2JqZWN0ID0gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpXG4gIGNvbnN0IGNvZGUgPSBjb2RlT2JqZWN0LmNvZGVcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgZmlsZW5hbWU6ICdjb2xvcnMuanMnLFxuICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCdcbiAgfVxufVxuXG5jb25zdCBleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyA9IChjb250ZXh0LCB0ZXh0U3R5bGVzKSA9PiB7XG4gIGNvbnN0IGNvZGVPYmplY3QgPSBzdHlsZWd1aWRlVGV4dFN0eWxlcyhjb250ZXh0LCB0ZXh0U3R5bGVzKVxuICBjb25zdCBjb2RlID0gY29kZU9iamVjdC5jb2RlXG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlLFxuICAgIGZpbGVuYW1lOiAnRm9udHMuanMnLFxuICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheWVyLFxuICBzdHlsZWd1aWRlQ29sb3JzLFxuICBzdHlsZWd1aWRlVGV4dFN0eWxlcyxcbiAgY29tbWVudCxcbiAgZXhwb3J0U3R5bGVndWlkZUNvbG9ycyxcbiAgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCB7IEpTT05fU1BBQ0lORywgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVOYW1lLFxuICB1cHBlcmNhc2VGaXJzdCxcbiAgZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdCxcbiAgcm91bmRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCA9IChvcHRpb25zLCBwcm9qZWN0LCB0ZXh0U3R5bGVzKSA9PiB7XG4gIGxldCBjb21wb25lbnRzID0gJydcbiAgZm9yIChsZXQgdGV4dFN0eWxlIG9mIHRleHRTdHlsZXMpIHtcbiAgICBjb21wb25lbnRzICs9IGAke2dlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUoXG4gICAgICBwcm9qZWN0LFxuICAgICAgb3B0aW9ucy5jb2xvckZvcm1hdCxcbiAgICAgIG9wdGlvbnMuY29sb3JUaGVtZVByZWZpeCxcbiAgICAgIG9wdGlvbnMuZm9udFRoZW1lUHJlZml4LFxuICAgICAgdGV4dFN0eWxlXG4gICAgKX1cXG5cXG5gXG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50c1xufVxuXG5jb25zdCBnZW5lcmF0ZVRleHRDb21wb25lbnRGcm9tVGV4dFN0eWxlID0gKFxuICBwcm9qZWN0LFxuICBjb2xvckZvcm1hdCxcbiAgY29sb3JUaGVtZVByZWZpeCxcbiAgZm9udFRoZW1lUHJlZml4LFxuICB0ZXh0U3R5bGVcbikgPT4ge1xuICBjb25zdCBjb2xvciA9XG4gICAgcHJvamVjdC5maW5kQ29sb3JFcXVhbCh0ZXh0U3R5bGUuY29sb3IpIHx8XG4gICAgZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdCh0ZXh0U3R5bGUuY29sb3IsIGNvbG9yRm9ybWF0KVxuICBjb25zdCBjb2xvclZhbHVlID0gY29sb3IubmFtZVxuICAgID8gYHRoZW1lJHtjb2xvclRoZW1lUHJlZml4ID8gJy4nICsgY29sb3JUaGVtZVByZWZpeCA6ICcnfS4ke2NvbG9yLm5hbWV9YFxuICAgIDogY29sb3JcbiAgY29uc3Qgc3R5bGVPYmogPSB7XG4gICAgZm9udEZhbWlseTogYHRoZW1lJHtcbiAgICAgIGZvbnRUaGVtZVByZWZpeCA/ICcuJyArIGZvbnRUaGVtZVByZWZpeCA6ICcnXG4gICAgfS4ke2dlbmVyYXRlTmFtZSh0ZXh0U3R5bGUuZm9udEZhY2UpfWAsXG4gICAgZm9udFNpemU6XG4gICAgICB0ZXh0U3R5bGUuZm9udFNpemUgJiZcbiAgICAgIHJvdW5kKHRleHRTdHlsZS5mb250U2l6ZSwgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OKSxcbiAgICBsaW5lSGVpZ2h0OlxuICAgICAgdGV4dFN0eWxlLmxpbmVIZWlnaHQgJiZcbiAgICAgIHJvdW5kKHRleHRTdHlsZS5saW5lSGVpZ2h0LCBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04pLFxuICAgIGxldHRlclNwYWNpbmc6XG4gICAgICB0ZXh0U3R5bGUubGV0dGVyU3BhY2luZyAmJlxuICAgICAgcm91bmQodGV4dFN0eWxlLmxldHRlclNwYWNpbmcsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiksXG4gICAgdGV4dEFsaWduOiB0ZXh0U3R5bGUudGV4dEFsaWduLFxuICAgIGNvbG9yOiBjb2xvclZhbHVlXG4gIH1cbiAgbGV0IHRleHRTdHlsZXNTdHIgPSBKU09OLnN0cmluZ2lmeShzdHlsZU9iaiwgbnVsbCwgSlNPTl9TUEFDSU5HKVxuICB0ZXh0U3R5bGVzU3RyID0gdGV4dFN0eWxlc1N0clxuICAgIC5yZXBsYWNlKC9cIiguKylcIjovZywgJyQxOicpXG4gICAgLnJlcGxhY2UoL1widGhlbWUuKC4qKVwiL2csICd0aGVtZS4kMScpXG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB1cHBlcmNhc2VGaXJzdChnZW5lcmF0ZU5hbWUodGV4dFN0eWxlLm5hbWUpKVxuICByZXR1cm4gYGNvbnN0ICR7Y29tcG9uZW50TmFtZX0gPSBnbGFtb3JvdXMoQmFzZSkoKHByb3BzLCB0aGVtZSkgPT4gKCR7dGV4dFN0eWxlc1N0cn0pKWBcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LXN0eWxlL2luZGV4LmpzIiwiaW1wb3J0IHtcbiAgTUFYX0JSSUdIVE5FU1MsXG4gIEhFWF9CQVNFLFxuICBIVUVfTUFYX0RFR1JFRSxcbiAgTUFYX1BFUkNFTlRBR0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG52YXIgYWxwaGFGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICB1c2VHcm91cGluZzogZmFsc2UsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxufSlcblxuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gIHJldHVybiAobnVtIDwgSEVYX0JBU0UgPyAnMCcgOiAnJykgKyBudW0udG9TdHJpbmcoSEVYX0JBU0UpXG59XG5cbmZ1bmN0aW9uIGJsZW5kQ29sb3JzKGNvbG9ycykge1xuICByZXR1cm4gY29sb3JzLnJlZHVjZSgoYmxlbmRlZENvbG9yLCBjb2xvcikgPT4gYmxlbmRlZENvbG9yLmJsZW5kKGNvbG9yKSlcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdChjb2xvciwgY29sb3JGb3JtYXQpIHtcbiAgaWYgKCEoJ3InIGluIGNvbG9yICYmICdnJyBpbiBjb2xvciAmJiAnYicgaW4gY29sb3IgJiYgJ2EnIGluIGNvbG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChjb2xvckZvcm1hdCkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXR1cm4gdG9IZXhTdHJpbmcoY29sb3IpXG5cbiAgICBjYXNlICdyZ2InOlxuICAgICAgcmV0dXJuIHRvUkdCQVN0cmluZyhjb2xvcilcblxuICAgIGNhc2UgJ2hzbCc6XG4gICAgICByZXR1cm4gdG9IU0xBU3RyaW5nKGNvbG9yKVxuXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0b0RlZmF1bHRTdHJpbmcoY29sb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JNYXBCeUZvcm1hdChjb2xvcnMsIGNvbG9yRm9ybWF0KSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChjb2xvck1hcCwgY29sb3IpID0+IHtcbiAgICB2YXIgY29sb3JTdHJpbmcgPSBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdClcbiAgICBjb2xvck1hcFtjb2xvclN0cmluZ10gPSBjb2xvci5uYW1lXG4gICAgcmV0dXJuIGNvbG9yTWFwXG4gIH0sIHt9KVxufVxuXG5mdW5jdGlvbiB0b0hleFN0cmluZyhjb2xvciwgcHJlZml4KSB7XG4gIHZhciBoZXhDb2RlID0gY29sb3IuaGV4QmFzZSgpXG5cbiAgaWYgKGNvbG9yLmEgPCAxKSB7XG4gICAgdmFyIGhleEEgPSB0b0hleChjb2xvci5hICogTUFYX0JSSUdIVE5FU1MpXG5cbiAgICBoZXhDb2RlID0gcHJlZml4ID8gaGV4QSArIGhleENvZGUgOiBoZXhDb2RlICsgaGV4QVxuICB9XG5cbiAgcmV0dXJuIGAjJHtoZXhDb2RlfWBcbn1cblxuZnVuY3Rpb24gdG9SR0JBU3RyaW5nKGNvbG9yKSB7XG4gIHZhciByZ2IgPSBgJHtNYXRoLnJvdW5kKGNvbG9yLnIpfSwgJHtNYXRoLnJvdW5kKGNvbG9yLmcpfSwgJHtNYXRoLnJvdW5kKFxuICAgIGNvbG9yLmJcbiAgKX1gXG5cbiAgdmFyIHJnYlN0ciA9XG4gICAgY29sb3IuYSA8IDFcbiAgICAgID8gYHJnYmEoJHtyZ2J9LCAke2FscGhhRm9ybWF0dGVyLmZvcm1hdChjb2xvci5hKX0pYFxuICAgICAgOiBgcmdiKCR7cmdifSlgXG5cbiAgcmV0dXJuIHJnYlN0clxufVxuXG5mdW5jdGlvbiB0b0hTTEFTdHJpbmcoY29sb3IpIHtcbiAgdmFyIGhzbENvbG9yID0gY29sb3IudG9IU0woKVxuICB2YXIgaHNsID1cbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLmggKiBIVUVfTUFYX0RFR1JFRSl9LCBgICtcbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLnMgKiBNQVhfUEVSQ0VOVEFHRSl9JSwgYCArXG4gICAgYCR7TWF0aC5yb3VuZChoc2xDb2xvci5sICogTUFYX1BFUkNFTlRBR0UpfSVgXG5cbiAgdmFyIGhzbFN0ciA9XG4gICAgY29sb3IuYSA8IDFcbiAgICAgID8gYGhzbGEoJHtoc2x9LCAke2FscGhhRm9ybWF0dGVyLmZvcm1hdChjb2xvci5hKX0pYFxuICAgICAgOiBgaHNsKCR7aHNsfSlgXG5cbiAgcmV0dXJuIGhzbFN0clxufVxuXG5mdW5jdGlvbiB0b0RlZmF1bHRTdHJpbmcoY29sb3IpIHtcbiAgcmV0dXJuIGNvbG9yLmEgPCAxID8gdG9SR0JBU3RyaW5nKGNvbG9yKSA6IHRvSGV4U3RyaW5nKGNvbG9yKVxufVxuXG5leHBvcnQge1xuICBibGVuZENvbG9ycyxcbiAgZ2V0Q29sb3JNYXBCeUZvcm1hdCxcbiAgdG9EZWZhdWx0U3RyaW5nLFxuICBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMuanMiLCJpbXBvcnQgeyBIVE1MX1RBR1MgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvW15cXHNcXHctXS9nLCAnJylcbiAgICAucmVwbGFjZSgvXigtP1xcZCspKy8sICcnKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbn1cblxuZnVuY3Rpb24gaXNIdG1sVGFnKHN0cikge1xuICByZXR1cm4gSFRNTF9UQUdTLmluY2x1ZGVzKHN0cilcbn1cblxuZnVuY3Rpb24gcm91bmQobnVtYmVyLCBwcmVjaXNpb24pIHtcbiAgdmFyIGZvcm1hdHRlZE51bWJlciA9IE51bWJlcihudW1iZXIpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb25cbiAgfSlcblxuICByZXR1cm4gTnVtYmVyKGZvcm1hdHRlZE51bWJlcilcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JpemUoc3RyKSB7XG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICB2YXIgc2VsZWN0b3JpemVkU3RyID0gc3RyLnRyaW0oKVxuXG4gIGlmIChpc0h0bWxUYWcoc3RyKSkge1xuICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgaWYgKC9eWyMuXS8udGVzdChzZWxlY3Rvcml6ZWRTdHIpKSB7XG4gICAgdmFyIG5hbWUgPSBlc2NhcGUoc2VsZWN0b3JpemVkU3RyLnN1YnN0cigxKSlcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JpemVkU3RyWzBdICsgbmFtZVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdG9yaXplZFN0ciA9IGVzY2FwZShzZWxlY3Rvcml6ZWRTdHIpXG5cbiAgcmV0dXJuIHNlbGVjdG9yaXplZFN0ciAmJiBgLiR7c2VsZWN0b3JpemVkU3RyfWBcbn1cblxuZXhwb3J0IHsgaXNIdG1sVGFnLCByb3VuZCwgc2VsZWN0b3JpemUgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbW1vbi11dGlscy5qcyIsImZ1bmN0aW9uIGxheWVySGFzR3JhZGllbnQobGF5ZXIpIHtcbiAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLnR5cGUgPT09ICdncmFkaWVudCcpXG59XG5cbmZ1bmN0aW9uIGxheWVySGFzQmxlbmRNb2RlKGxheWVyKSB7XG4gIHJldHVybiBsYXllci5maWxscy5zb21lKGYgPT4gZi5ibGVuZE1vZGUgJiYgZi5ibGVuZE1vZGUgIT09ICdub3JtYWwnKVxufVxuXG5leHBvcnQgeyBsYXllckhhc0dyYWRpZW50LCBsYXllckhhc0JsZW5kTW9kZSB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbGF5ZXItdXRpbHMuanMiLCJleHBvcnQgZnVuY3Rpb24gbG93ZXJjYXNlRmlyc3Qocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cHBlcmNhc2VGaXJzdChzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSlcbn1cblxuZnVuY3Rpb24gam9pblRva2Vucyhjb21wb25lbnRzKSB7XG4gIHZhciBuYW1lID0gY29tcG9uZW50cy5tYXAodXBwZXJjYXNlRmlyc3QpLmpvaW4oJycpXG4gIHJldHVybiBsb3dlcmNhc2VGaXJzdChuYW1lKVxufVxuXG5mdW5jdGlvbiB0b2tlbnNGb3JTdHJpbmcoc3RyKSB7XG4gIHZhciB0b2tlbml6ZXIgPSAvXFxkK3xbYS16XSt8W0EtWl0rKD8hW2Etel0pfFtBLVpdW2Etel0rL2dcblxuICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHIubWF0Y2godG9rZW5pemVyKVxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIFsnaW52YWxpZCcsICduYW1lJ11cbiAgfVxuXG4gIHJldHVybiBtYXRjaFJlc3VsdC5tYXAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGpvaW5Ub2tlbnModG9rZW5zRm9yU3RyaW5nKG5hbWUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL25hbWUtdXRpbHMuanMiLCJpbXBvcnQgeyBKU09OX1NQQUNJTkcgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCA9IChvcHRpb25zLCBwcm9qZWN0LCBjb2xvcnMpID0+IHtcbiAgY29uc3QgY29sb3JzT2JqZWN0ID0ge31cbiAgZm9yIChsZXQgY29sb3Igb2YgY29sb3JzKSB7XG4gICAgaWYgKGNvbG9yLm5hbWUpIHtcbiAgICAgIGNvbG9yc09iamVjdFtjb2xvci5uYW1lXSA9IGdldENvbG9yU3RyaW5nQnlGb3JtYXQoXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBvcHRpb25zLmNvbG9yRm9ybWF0XG4gICAgICApXG4gICAgfVxuICB9XG4gIGxldCBjb2xvcnNTdHlsZXNTdHIgPSBKU09OLnN0cmluZ2lmeShjb2xvcnNPYmplY3QsIG51bGwsIEpTT05fU1BBQ0lORylcbiAgY29sb3JzU3R5bGVzU3RyID0gY29sb3JzU3R5bGVzU3RyLnJlcGxhY2UoL1wiKC4rKVwiOi9nLCAnJDE6JylcbiAgcmV0dXJuIGBjb25zdCBiYXNlID0gJHtjb2xvcnNTdHlsZXNTdHJ9YFxufVxuXG5leHBvcnQgeyBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbG9yL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==