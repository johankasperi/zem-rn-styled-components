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
  var colorValue = color.name ? `theme.${colorThemePrefix || 'color'}.${color.name}` : color;
  var styleObj = { fontFamily: `theme.${fontThemePrefix || 'font'}.${(0, _utils.generateName)(textStyle.fontFace)}`, fontSize: textStyle.fontSize && (0, _utils.round)(textStyle.fontSize, _constants.NUMERICAL_DECIMAL_PRECISION), lineHeight: textStyle.lineHeight && (0, _utils.round)(textStyle.lineHeight, _constants.NUMERICAL_DECIMAL_PRECISION), letterSpacing: textStyle.letterSpacing && (0, _utils.round)(textStyle.letterSpacing, _constants.NUMERICAL_DECIMAL_PRECISION), textAlign: textStyle.textAlign, color: colorValue };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOTdiOWRiNGIzNGIzMjllYjllNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xheWVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYW1lLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJNQVhfQlJJR0hUTkVTUyIsIkhVRV9NQVhfREVHUkVFIiwiTUFYX1BFUkNFTlRBR0UiLCJIRVhfQkFTRSIsIkpTT05fU1BBQ0lORyIsIk5VTUVSSUNBTF9GT05UX0JPTEQiLCJOVU1FUklDQUxfRk9OVF9OT1JNQUwiLCJOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04iLCJSRUFDVF9SVUxFU19XSVRIX0NPTE9SIiwiSFRNTF9UQUdTIiwiT1BUSU9OX05BTUVTIiwiQ09MT1JfRk9STUFUIiwiQ09MT1JfVEhFTUVfUFJFRklYIiwiRk9OVF9USEVNRV9QUkVGSVgiLCJzdHlsZWd1aWRlQ29sb3JzIiwiY29udGV4dCIsImNvbG9ycyIsIm9wdGlvbnMiLCJjb2xvckZvcm1hdCIsImdldE9wdGlvbiIsImNvZGUiLCJwcm9qZWN0IiwibGFuZ3VhZ2UiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsInRleHRTdHlsZXMiLCJjb2xvclRoZW1lUHJlZml4IiwiZm9udFRoZW1lUHJlZml4IiwibGF5ZXIiLCJvYmplY3QiLCJsYXllck5hbWUiLCJuYW1lIiwicHJvamVjdE5hbWUiLCJKU09OU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbW1lbnQiLCJ0ZXh0IiwiZXhwb3J0U3R5bGVndWlkZUNvbG9ycyIsImNvZGVPYmplY3QiLCJmaWxlbmFtZSIsImV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwiZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IiwiY29tcG9uZW50cyIsInRleHRTdHlsZSIsImdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUiLCJjb2xvciIsImZpbmRDb2xvckVxdWFsIiwiY29sb3JWYWx1ZSIsInN0eWxlT2JqIiwiZm9udEZhbWlseSIsImZvbnRGYWNlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRBbGlnbiIsInRleHRTdHlsZXNTdHIiLCJyZXBsYWNlIiwiY29tcG9uZW50TmFtZSIsImFscGhhRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInVzZUdyb3VwaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwidG9IZXgiLCJudW0iLCJ0b1N0cmluZyIsImJsZW5kQ29sb3JzIiwicmVkdWNlIiwiYmxlbmRlZENvbG9yIiwiYmxlbmQiLCJnZXRDb2xvclN0cmluZ0J5Rm9ybWF0IiwidG9IZXhTdHJpbmciLCJ0b1JHQkFTdHJpbmciLCJ0b0hTTEFTdHJpbmciLCJ0b0RlZmF1bHRTdHJpbmciLCJnZXRDb2xvck1hcEJ5Rm9ybWF0IiwiY29sb3JNYXAiLCJjb2xvclN0cmluZyIsInByZWZpeCIsImhleENvZGUiLCJoZXhCYXNlIiwiYSIsImhleEEiLCJyZ2IiLCJNYXRoIiwicm91bmQiLCJyIiwiZyIsImIiLCJyZ2JTdHIiLCJmb3JtYXQiLCJoc2xDb2xvciIsInRvSFNMIiwiaHNsIiwiaCIsInMiLCJsIiwiaHNsU3RyIiwiZXNjYXBlIiwic3RyIiwidHJpbSIsImlzSHRtbFRhZyIsImluY2x1ZGVzIiwibnVtYmVyIiwicHJlY2lzaW9uIiwiZm9ybWF0dGVkTnVtYmVyIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJzZWxlY3Rvcml6ZSIsInNlbGVjdG9yaXplZFN0ciIsInRvTG93ZXJDYXNlIiwidGVzdCIsInN1YnN0ciIsImxheWVySGFzR3JhZGllbnQiLCJmaWxscyIsInNvbWUiLCJmIiwidHlwZSIsImxheWVySGFzQmxlbmRNb2RlIiwiYmxlbmRNb2RlIiwibG93ZXJjYXNlRmlyc3QiLCJ1cHBlcmNhc2VGaXJzdCIsImdlbmVyYXRlTmFtZSIsImNoYXJBdCIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiam9pblRva2VucyIsIm1hcCIsImpvaW4iLCJ0b2tlbnNGb3JTdHJpbmciLCJ0b2tlbml6ZXIiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwidG9rZW4iLCJnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QiLCJjb2xvcnNPYmplY3QiLCJjb2xvcnNTdHlsZXNTdHIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RE8sSUFBTUEsMENBQWlCLEdBQXZCO0FBQ0EsSUFBTUMsMENBQWlCLEdBQXZCO0FBQ0EsSUFBTUMs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QUFDRCxDQWJEOztRQWVTRiw4QixHQUFBQSw4QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM5N2I5ZGI0YjM0YjMyOWViOWU3IiwiZXhwb3J0IGNvbnN0IE1BWF9CUklHSFRORVNTID0gMjU1XG5leHBvcnQgY29uc3QgSFVFX01BWF9ERUdSRUUgPSAzNjBcbmV4cG9ydCBjb25zdCBNQVhfUEVSQ0VOVEFHRSA9IDEwMFxuZXhwb3J0IGNvbnN0IEhFWF9CQVNFID0gMTZcbmV4cG9ydCBjb25zdCBKU09OX1NQQUNJTkcgPSAyXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0ZPTlRfQk9MRCA9IDcwMFxuZXhwb3J0IGNvbnN0IE5VTUVSSUNBTF9GT05UX05PUk1BTCA9IDQwMFxuZXhwb3J0IGNvbnN0IE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiA9IDFcbmV4cG9ydCBjb25zdCBSRUFDVF9SVUxFU19XSVRIX0NPTE9SID0gW1xuICAnYmFja2dyb3VuZENvbG9yJyxcbiAgJ2JvcmRlckNvbG9yJyxcbiAgJ2NvbG9yJyxcbiAgJ3NoYWRvd0NvbG9yJyxcbiAgJ3RleHREZWNvcmF0aW9uQ29sb3InLFxuICAndGV4dFNoYWRvd0NvbG9yJ1xuXVxuZXhwb3J0IGNvbnN0IEhUTUxfVEFHUyA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhZGRyZXNzJyxcbiAgJ2FyZWEnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2Jhc2UnLFxuICAnYmRpJyxcbiAgJ2JkbycsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnInLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGF0YScsXG4gICdkYXRhbGlzdCcsXG4gICdkZCcsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGlhbG9nJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbScsXG4gICdlbWJlZCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdrZXlnZW4nLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ2xpbmsnLFxuICAnbWFpbicsXG4gICdtYXAnLFxuICAnbWFyaycsXG4gICdtYXRoJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbWV0YScsXG4gICdtZXRlcicsXG4gICduYXYnLFxuICAnbm9zY3JpcHQnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwYXJhbScsXG4gICdwaWN0dXJlJyxcbiAgJ3ByZScsXG4gICdwcm9ncmVzcycsXG4gICdxJyxcbiAgJ3JwJyxcbiAgJ3J0JyxcbiAgJ3J1YnknLFxuICAncycsXG4gICdzYW1wJyxcbiAgJ3NjcmlwdCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NlbGVjdCcsXG4gICdzbG90JyxcbiAgJ3NtYWxsJyxcbiAgJ3NvdXJjZScsXG4gICdzb3VyY2UnLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3R5bGUnLFxuICAnc3ViJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3N2ZycsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZW1wbGF0ZScsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyJyxcbiAgJ3RyYWNrJyxcbiAgJ3UnLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJyxcbiAgJ3dicidcbl1cbmV4cG9ydCBjb25zdCBPUFRJT05fTkFNRVMgPSB7XG4gIENPTE9SX0ZPUk1BVDogJ2NvbG9yRm9ybWF0JyxcbiAgQ09MT1JfVEhFTUVfUFJFRklYOiAnY29sb3JUaGVtZVByZWZpeCcsXG4gIEZPTlRfVEhFTUVfUFJFRklYOiAnZm9udFRoZW1lUHJlZml4J1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy5qcyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXItdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL25hbWUtdXRpbHMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJpbXBvcnQgeyBnZW5lcmF0ZVRleHRDb21wb25lbnRzRnJvbVByb2plY3QgfSBmcm9tICcuL3RleHQtc3R5bGUnXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QgfSBmcm9tICcuL2NvbG9yJ1xuXG5pbXBvcnQgeyBPUFRJT05fTkFNRVMgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY29uc3Qgc3R5bGVndWlkZUNvbG9ycyA9IChjb250ZXh0LCBjb2xvcnMpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb2xvckZvcm1hdDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX0ZPUk1BVClcbiAgfVxuXG4gIGNvbnN0IGNvZGUgPSBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3Qob3B0aW9ucywgY29udGV4dC5wcm9qZWN0LCBjb2xvcnMpXG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlLFxuICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCdcbiAgfVxufVxuXG5jb25zdCBzdHlsZWd1aWRlVGV4dFN0eWxlcyA9IChjb250ZXh0LCB0ZXh0U3R5bGVzKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JGb3JtYXQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9GT1JNQVQpLFxuICAgIGNvbG9yVGhlbWVQcmVmaXg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9USEVNRV9QUkVGSVgpLFxuICAgIGZvbnRUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkZPTlRfVEhFTUVfUFJFRklYKVxuICB9XG5cbiAgY29uc3QgY29kZSA9IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdChcbiAgICBvcHRpb25zLFxuICAgIGNvbnRleHQucHJvamVjdCxcbiAgICB0ZXh0U3R5bGVzXG4gIClcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmNvbnN0IGxheWVyID0gKGNvbnRleHQsIGxheWVyKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHtcbiAgICBsYXllck5hbWU6IGxheWVyLm5hbWUsXG4gICAgcHJvamVjdE5hbWU6IGNvbnRleHQucHJvamVjdC5uYW1lXG4gIH1cblxuICBjb25zdCBKU09OU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCBudWxsLCAyKVxuXG4gIHJldHVybiB7XG4gICAgY29kZTogSlNPTlN0cmluZyxcbiAgICBsYW5ndWFnZTogJ2pzb24nXG4gIH1cbn1cblxuY29uc3QgY29tbWVudCA9IChjb250ZXh0LCB0ZXh0KSA9PiB7XG4gIHJldHVybiBgLy8gJHt0ZXh0fWBcbn1cblxuY29uc3QgZXhwb3J0U3R5bGVndWlkZUNvbG9ycyA9IChjb250ZXh0LCBjb2xvcnMpID0+IHtcbiAgY29uc3QgY29kZU9iamVjdCA9IHN0eWxlZ3VpZGVDb2xvcnMoY29udGV4dCwgY29sb3JzKVxuICBjb25zdCBjb2RlID0gY29kZU9iamVjdC5jb2RlXG5cbiAgcmV0dXJuIHtcbiAgICBjb2RlLFxuICAgIGZpbGVuYW1lOiAnY29sb3JzLmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3QgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBjb2RlT2JqZWN0ID0gc3R5bGVndWlkZVRleHRTdHlsZXMoY29udGV4dCwgdGV4dFN0eWxlcylcbiAgY29uc3QgY29kZSA9IGNvZGVPYmplY3QuY29kZVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBmaWxlbmFtZTogJ0ZvbnRzLmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYXllcixcbiAgc3R5bGVndWlkZUNvbG9ycyxcbiAgc3R5bGVndWlkZVRleHRTdHlsZXMsXG4gIGNvbW1lbnQsXG4gIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMsXG4gIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgeyBKU09OX1NQQUNJTkcsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIGdlbmVyYXRlTmFtZSxcbiAgdXBwZXJjYXNlRmlyc3QsXG4gIGdldENvbG9yU3RyaW5nQnlGb3JtYXQsXG4gIHJvdW5kXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBnZW5lcmF0ZVRleHRDb21wb25lbnRzRnJvbVByb2plY3QgPSAob3B0aW9ucywgcHJvamVjdCwgdGV4dFN0eWxlcykgPT4ge1xuICBsZXQgY29tcG9uZW50cyA9ICcnXG4gIGZvciAobGV0IHRleHRTdHlsZSBvZiB0ZXh0U3R5bGVzKSB7XG4gICAgY29tcG9uZW50cyArPSBgJHtnZW5lcmF0ZVRleHRDb21wb25lbnRGcm9tVGV4dFN0eWxlKFxuICAgICAgcHJvamVjdCxcbiAgICAgIG9wdGlvbnMuY29sb3JGb3JtYXQsXG4gICAgICBvcHRpb25zLmNvbG9yVGhlbWVQcmVmaXgsXG4gICAgICBvcHRpb25zLmZvbnRUaGVtZVByZWZpeCxcbiAgICAgIHRleHRTdHlsZVxuICAgICl9XFxuXFxuYFxuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudHNcbn1cblxuY29uc3QgZ2VuZXJhdGVUZXh0Q29tcG9uZW50RnJvbVRleHRTdHlsZSA9IChcbiAgcHJvamVjdCxcbiAgY29sb3JGb3JtYXQsXG4gIGNvbG9yVGhlbWVQcmVmaXgsXG4gIGZvbnRUaGVtZVByZWZpeCxcbiAgdGV4dFN0eWxlXG4pID0+IHtcbiAgY29uc3QgY29sb3IgPVxuICAgIHByb2plY3QuZmluZENvbG9yRXF1YWwodGV4dFN0eWxlLmNvbG9yKSB8fFxuICAgIGdldENvbG9yU3RyaW5nQnlGb3JtYXQodGV4dFN0eWxlLmNvbG9yLCBjb2xvckZvcm1hdClcbiAgY29uc3QgY29sb3JWYWx1ZSA9IGNvbG9yLm5hbWVcbiAgICA/IGB0aGVtZS4ke2NvbG9yVGhlbWVQcmVmaXggfHwgJ2NvbG9yJ30uJHtjb2xvci5uYW1lfWBcbiAgICA6IGNvbG9yXG4gIGNvbnN0IHN0eWxlT2JqID0geyBmb250RmFtaWx5OiBgdGhlbWUuJHtmb250VGhlbWVQcmVmaXggfHwgJ2ZvbnQnfS4ke2dlbmVyYXRlTmFtZSh0ZXh0U3R5bGUuZm9udEZhY2UpfWAsIGZvbnRTaXplOiB0ZXh0U3R5bGUuZm9udFNpemUgJiYgcm91bmQodGV4dFN0eWxlLmZvbnRTaXplLCBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04pLCBsaW5lSGVpZ2h0OiB0ZXh0U3R5bGUubGluZUhlaWdodCAmJiByb3VuZCh0ZXh0U3R5bGUubGluZUhlaWdodCwgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OKSwgbGV0dGVyU3BhY2luZzogdGV4dFN0eWxlLmxldHRlclNwYWNpbmcgJiYgcm91bmQodGV4dFN0eWxlLmxldHRlclNwYWNpbmcsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiksIHRleHRBbGlnbjogdGV4dFN0eWxlLnRleHRBbGlnbiwgY29sb3I6IGNvbG9yVmFsdWUgfTtcbiAgbGV0IHRleHRTdHlsZXNTdHIgPSBKU09OLnN0cmluZ2lmeShzdHlsZU9iaiwgbnVsbCwgSlNPTl9TUEFDSU5HKVxuICB0ZXh0U3R5bGVzU3RyID0gdGV4dFN0eWxlc1N0clxuICAgIC5yZXBsYWNlKC9cIiguKylcIjovZywgJyQxOicpXG4gICAgLnJlcGxhY2UoL1widGhlbWUuKC4qKVwiL2csICd0aGVtZS4kMScpXG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB1cHBlcmNhc2VGaXJzdChnZW5lcmF0ZU5hbWUodGV4dFN0eWxlLm5hbWUpKVxuICByZXR1cm4gYGNvbnN0ICR7Y29tcG9uZW50TmFtZX0gPSBnbGFtb3JvdXMoQmFzZSkoKHByb3BzLCB0aGVtZSkgPT4gKCR7dGV4dFN0eWxlc1N0cn0pKWBcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LXN0eWxlL2luZGV4LmpzIiwiaW1wb3J0IHtcbiAgTUFYX0JSSUdIVE5FU1MsXG4gIEhFWF9CQVNFLFxuICBIVUVfTUFYX0RFR1JFRSxcbiAgTUFYX1BFUkNFTlRBR0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG52YXIgYWxwaGFGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICB1c2VHcm91cGluZzogZmFsc2UsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxufSlcblxuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gIHJldHVybiAobnVtIDwgSEVYX0JBU0UgPyAnMCcgOiAnJykgKyBudW0udG9TdHJpbmcoSEVYX0JBU0UpXG59XG5cbmZ1bmN0aW9uIGJsZW5kQ29sb3JzKGNvbG9ycykge1xuICByZXR1cm4gY29sb3JzLnJlZHVjZSgoYmxlbmRlZENvbG9yLCBjb2xvcikgPT4gYmxlbmRlZENvbG9yLmJsZW5kKGNvbG9yKSlcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdChjb2xvciwgY29sb3JGb3JtYXQpIHtcbiAgaWYgKCEoJ3InIGluIGNvbG9yICYmICdnJyBpbiBjb2xvciAmJiAnYicgaW4gY29sb3IgJiYgJ2EnIGluIGNvbG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChjb2xvckZvcm1hdCkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXR1cm4gdG9IZXhTdHJpbmcoY29sb3IpXG5cbiAgICBjYXNlICdyZ2InOlxuICAgICAgcmV0dXJuIHRvUkdCQVN0cmluZyhjb2xvcilcblxuICAgIGNhc2UgJ2hzbCc6XG4gICAgICByZXR1cm4gdG9IU0xBU3RyaW5nKGNvbG9yKVxuXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0b0RlZmF1bHRTdHJpbmcoY29sb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3JNYXBCeUZvcm1hdChjb2xvcnMsIGNvbG9yRm9ybWF0KSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChjb2xvck1hcCwgY29sb3IpID0+IHtcbiAgICB2YXIgY29sb3JTdHJpbmcgPSBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdClcbiAgICBjb2xvck1hcFtjb2xvclN0cmluZ10gPSBjb2xvci5uYW1lXG4gICAgcmV0dXJuIGNvbG9yTWFwXG4gIH0sIHt9KVxufVxuXG5mdW5jdGlvbiB0b0hleFN0cmluZyhjb2xvciwgcHJlZml4KSB7XG4gIHZhciBoZXhDb2RlID0gY29sb3IuaGV4QmFzZSgpXG5cbiAgaWYgKGNvbG9yLmEgPCAxKSB7XG4gICAgdmFyIGhleEEgPSB0b0hleChjb2xvci5hICogTUFYX0JSSUdIVE5FU1MpXG5cbiAgICBoZXhDb2RlID0gcHJlZml4ID8gaGV4QSArIGhleENvZGUgOiBoZXhDb2RlICsgaGV4QVxuICB9XG5cbiAgcmV0dXJuIGAjJHtoZXhDb2RlfWBcbn1cblxuZnVuY3Rpb24gdG9SR0JBU3RyaW5nKGNvbG9yKSB7XG4gIHZhciByZ2IgPSBgJHtNYXRoLnJvdW5kKGNvbG9yLnIpfSwgJHtNYXRoLnJvdW5kKGNvbG9yLmcpfSwgJHtNYXRoLnJvdW5kKFxuICAgIGNvbG9yLmJcbiAgKX1gXG5cbiAgdmFyIHJnYlN0ciA9XG4gICAgY29sb3IuYSA8IDFcbiAgICAgID8gYHJnYmEoJHtyZ2J9LCAke2FscGhhRm9ybWF0dGVyLmZvcm1hdChjb2xvci5hKX0pYFxuICAgICAgOiBgcmdiKCR7cmdifSlgXG5cbiAgcmV0dXJuIHJnYlN0clxufVxuXG5mdW5jdGlvbiB0b0hTTEFTdHJpbmcoY29sb3IpIHtcbiAgdmFyIGhzbENvbG9yID0gY29sb3IudG9IU0woKVxuICB2YXIgaHNsID1cbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLmggKiBIVUVfTUFYX0RFR1JFRSl9LCBgICtcbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLnMgKiBNQVhfUEVSQ0VOVEFHRSl9JSwgYCArXG4gICAgYCR7TWF0aC5yb3VuZChoc2xDb2xvci5sICogTUFYX1BFUkNFTlRBR0UpfSVgXG5cbiAgdmFyIGhzbFN0ciA9XG4gICAgY29sb3IuYSA8IDFcbiAgICAgID8gYGhzbGEoJHtoc2x9LCAke2FscGhhRm9ybWF0dGVyLmZvcm1hdChjb2xvci5hKX0pYFxuICAgICAgOiBgaHNsKCR7aHNsfSlgXG5cbiAgcmV0dXJuIGhzbFN0clxufVxuXG5mdW5jdGlvbiB0b0RlZmF1bHRTdHJpbmcoY29sb3IpIHtcbiAgcmV0dXJuIGNvbG9yLmEgPCAxID8gdG9SR0JBU3RyaW5nKGNvbG9yKSA6IHRvSGV4U3RyaW5nKGNvbG9yKVxufVxuXG5leHBvcnQge1xuICBibGVuZENvbG9ycyxcbiAgZ2V0Q29sb3JNYXBCeUZvcm1hdCxcbiAgdG9EZWZhdWx0U3RyaW5nLFxuICBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29sb3ItdXRpbHMuanMiLCJpbXBvcnQgeyBIVE1MX1RBR1MgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvW15cXHNcXHctXS9nLCAnJylcbiAgICAucmVwbGFjZSgvXigtP1xcZCspKy8sICcnKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbn1cblxuZnVuY3Rpb24gaXNIdG1sVGFnKHN0cikge1xuICByZXR1cm4gSFRNTF9UQUdTLmluY2x1ZGVzKHN0cilcbn1cblxuZnVuY3Rpb24gcm91bmQobnVtYmVyLCBwcmVjaXNpb24pIHtcbiAgdmFyIGZvcm1hdHRlZE51bWJlciA9IE51bWJlcihudW1iZXIpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcmVjaXNpb25cbiAgfSlcblxuICByZXR1cm4gTnVtYmVyKGZvcm1hdHRlZE51bWJlcilcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JpemUoc3RyKSB7XG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICB2YXIgc2VsZWN0b3JpemVkU3RyID0gc3RyLnRyaW0oKVxuXG4gIGlmIChpc0h0bWxUYWcoc3RyKSkge1xuICAgIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgaWYgKC9eWyMuXS8udGVzdChzZWxlY3Rvcml6ZWRTdHIpKSB7XG4gICAgdmFyIG5hbWUgPSBlc2NhcGUoc2VsZWN0b3JpemVkU3RyLnN1YnN0cigxKSlcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JpemVkU3RyWzBdICsgbmFtZVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdG9yaXplZFN0ciA9IGVzY2FwZShzZWxlY3Rvcml6ZWRTdHIpXG5cbiAgcmV0dXJuIHNlbGVjdG9yaXplZFN0ciAmJiBgLiR7c2VsZWN0b3JpemVkU3RyfWBcbn1cblxuZXhwb3J0IHsgaXNIdG1sVGFnLCByb3VuZCwgc2VsZWN0b3JpemUgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbW1vbi11dGlscy5qcyIsImZ1bmN0aW9uIGxheWVySGFzR3JhZGllbnQobGF5ZXIpIHtcbiAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLnR5cGUgPT09ICdncmFkaWVudCcpXG59XG5cbmZ1bmN0aW9uIGxheWVySGFzQmxlbmRNb2RlKGxheWVyKSB7XG4gIHJldHVybiBsYXllci5maWxscy5zb21lKGYgPT4gZi5ibGVuZE1vZGUgJiYgZi5ibGVuZE1vZGUgIT09ICdub3JtYWwnKVxufVxuXG5leHBvcnQgeyBsYXllckhhc0dyYWRpZW50LCBsYXllckhhc0JsZW5kTW9kZSB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbGF5ZXItdXRpbHMuanMiLCJleHBvcnQgZnVuY3Rpb24gbG93ZXJjYXNlRmlyc3Qocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cHBlcmNhc2VGaXJzdChzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSlcbn1cblxuZnVuY3Rpb24gam9pblRva2Vucyhjb21wb25lbnRzKSB7XG4gIHZhciBuYW1lID0gY29tcG9uZW50cy5tYXAodXBwZXJjYXNlRmlyc3QpLmpvaW4oJycpXG4gIHJldHVybiBsb3dlcmNhc2VGaXJzdChuYW1lKVxufVxuXG5mdW5jdGlvbiB0b2tlbnNGb3JTdHJpbmcoc3RyKSB7XG4gIHZhciB0b2tlbml6ZXIgPSAvXFxkK3xbYS16XSt8W0EtWl0rKD8hW2Etel0pfFtBLVpdW2Etel0rL2dcblxuICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHIubWF0Y2godG9rZW5pemVyKVxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIFsnaW52YWxpZCcsICduYW1lJ11cbiAgfVxuXG4gIHJldHVybiBtYXRjaFJlc3VsdC5tYXAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGpvaW5Ub2tlbnModG9rZW5zRm9yU3RyaW5nKG5hbWUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL25hbWUtdXRpbHMuanMiLCJpbXBvcnQgeyBKU09OX1NQQUNJTkcgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCA9IChvcHRpb25zLCBwcm9qZWN0LCBjb2xvcnMpID0+IHtcbiAgY29uc3QgY29sb3JzT2JqZWN0ID0ge31cbiAgZm9yIChsZXQgY29sb3Igb2YgY29sb3JzKSB7XG4gICAgaWYgKGNvbG9yLm5hbWUpIHtcbiAgICAgIGNvbG9yc09iamVjdFtjb2xvci5uYW1lXSA9IGdldENvbG9yU3RyaW5nQnlGb3JtYXQoXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBvcHRpb25zLmNvbG9yRm9ybWF0XG4gICAgICApXG4gICAgfVxuICB9XG4gIGxldCBjb2xvcnNTdHlsZXNTdHIgPSBKU09OLnN0cmluZ2lmeShjb2xvcnNPYmplY3QsIG51bGwsIEpTT05fU1BBQ0lORylcbiAgY29sb3JzU3R5bGVzU3RyID0gY29sb3JzU3R5bGVzU3RyLnJlcGxhY2UoL1wiKC4rKVwiOi9nLCAnJDE6JylcbiAgcmV0dXJuIGBjb25zdCBiYXNlID0gJHtjb2xvcnNTdHlsZXNTdHJ9YFxufVxuXG5leHBvcnQgeyBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbG9yL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==