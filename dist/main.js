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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  TEXT_BASE_COMPONENT: 'textBaseComponent',
  COLOR_THEME_PREFIX: 'colorThemePrefix',
  FONT_THEME_PREFIX: 'fontThemePrefix',
  TYPOGRAPHY_COMPONENTS_PATH: 'typographyComponentsPath',
  BLUR_COMPONENT_PATH: 'blurComponentPath'
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
exports.generateTextComponentsFromProject = exports.generateTextComponentFromTextStyle = undefined;

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var generateTextComponentsFromProject = function generateTextComponentsFromProject(options, project, textStyles) {
  var components = '';
  var fonts = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textStyles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var textStyle = _step.value;

      var fontFaceName = (0, _utils.generateName)(textStyle.fontFace);
      if (!fonts[fontFaceName]) {
        fonts[fontFaceName] = textStyle.fontFace;
      }
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

  var fontsObjStr = (0, _utils.createJavascriptStringFromObj)(fonts);
  return `// Fonts (Put this in your theme)\n\nconst Fonts = ${fontsObjStr}\n\n// Text components\n\n${components}`;
};

var generateTextComponentFromTextStyle = exports.generateTextComponentFromTextStyle = function generateTextComponentFromTextStyle(project, options, textStyle) {
  var colorValue = (0, _utils.themeColor)(options, project, textStyle.color);
  var styleObj = {
    fontFamily: `theme.${options.fontThemePrefix || 'font'}.${(0, _utils.generateName)(textStyle.fontFace)}`,
    fontSize: textStyle.fontSize && (0, _utils.round)(textStyle.fontSize, _constants.NUMERICAL_DECIMAL_PRECISION),
    lineHeight: textStyle.lineHeight && (0, _utils.round)(textStyle.lineHeight, _constants.NUMERICAL_DECIMAL_PRECISION),
    letterSpacing: textStyle.letterSpacing && (0, _utils.round)(textStyle.letterSpacing, _constants.NUMERICAL_DECIMAL_PRECISION),
    textAlign: textStyle.textAlign,
    color: colorValue
  };
  var textStylesStr = (0, _utils.createJavascriptStringFromObj)(styleObj);
  var componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(textStyle.name));
  var baseComponent = options.textBaseComponent ? `(${options.textBaseComponent})` : '.text';
  return `const ${componentName} = glamorous${baseComponent}((props, theme) => (${textStylesStr}))`;
};

exports.generateTextComponentsFromProject = generateTextComponentsFromProject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textStyle = __webpack_require__(2);

var _color = __webpack_require__(8);

var _layer2 = __webpack_require__(9);

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
    fontThemePrefix: context.getOption(_constants.OPTION_NAMES.FONT_THEME_PREFIX),
    typographyComponentsPath: 'hej', // context.getOption(
    //   OPTION_NAMES.TYPOGRAPHY_COMPONENTS_PATH
    // ),
    blurComponentPath: context.getOption(_constants.OPTION_NAMES.BLUR_COMPONENT_PATH)
  };

  var code = (0, _textStyle.generateTextComponentsFromProject)(options, context.project, textStyles);

  return {
    code,
    language: 'javascript'
  };
};

var layer = function layer(context, _layer) {
  var options = {
    colorFormat: context.getOption(_constants.OPTION_NAMES.COLOR_FORMAT),
    textBaseComponent: context.getOption(_constants.OPTION_NAMES.TEXT_BASE_COMPONENT),
    colorThemePrefix: context.getOption(_constants.OPTION_NAMES.COLOR_THEME_PREFIX),
    fontThemePrefix: context.getOption(_constants.OPTION_NAMES.FONT_THEME_PREFIX)
  };
  var code = (0, _layer2.generateLayerComponent)(options, context.project, _layer);
  return { code, language: 'json' };
};

var comment = function comment(context, text) {
  return `// ${text}`;
};

var exportStyleguideColors = function exportStyleguideColors(context, colors) {
  var codeObject = styleguideColors(context, colors);
  var code = codeObject.code;

  return {
    code,
    filename: 'index.js',
    language: 'javascript'
  };
};

var exportStyleguideTextStyles = function exportStyleguideTextStyles(context, textStyles) {
  var codeObject = styleguideTextStyles(context, textStyles);
  var code = codeObject.code;

  return {
    code,
    filename: 'index.js',
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeColor = exports.getColorStringByFormat = exports.toDefaultString = exports.getColorMapByFormat = exports.blendColors = undefined;

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

var themeColor = function themeColor(options, project, color) {
  var themeColor = project.findColorEqual(color) || getColorStringByFormat(color, options.colorFormat);
  var strValue = themeColor.name ? `theme.${options.colorThemePrefix || 'color'}.${themeColor.name}` : themeColor;
  return strValue;
};

exports.blendColors = blendColors;
exports.getColorMapByFormat = getColorMapByFormat;
exports.toDefaultString = toDefaultString;
exports.getColorStringByFormat = getColorStringByFormat;
exports.themeColor = themeColor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJavascriptStringFromObj = exports.selectorize = exports.round = exports.isHtmlTag = undefined;

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

var createJavascriptStringFromObj = function createJavascriptStringFromObj(object) {
  var str = JSON.stringify(object, null, _constants.JSON_SPACING);
  str = str.replace(/"(.+)":/g, '$1:').replace(/"theme.(.*)"/g, 'theme.$1').replace(/"/g, "'");
  return str;
};

exports.isHtmlTag = isHtmlTag;
exports.round = round;
exports.selectorize = selectorize;
exports.createJavascriptStringFromObj = createJavascriptStringFromObj;

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

  var colorsStylesStr = (0, _utils.createJavascriptStringFromObj)(colorsObject);
  return `const base = ${colorsStylesStr}`;
};

exports.generateColorObjectFromProject = generateColorObjectFromProject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLayerComponent = undefined;

var _constants = __webpack_require__(0);

var _textStyle = __webpack_require__(2);

var _utils = __webpack_require__(1);

var generateLayerComponent = function generateLayerComponent(options, project, layer) {
  var containerStyle = {};
  containerStyle.height = layer.rect.height;
  containerStyle.width = layer.rect.width;

  if (layer.fills.length && layer.fills[0].color) {
    var blendedColor = (0, _utils.blendColors)(layer.fills.map(function (fill) {
      return fill.color;
    }));
    containerStyle.backgroundColor = (0, _utils.themeColor)(options, project, blendedColor);
  }
  if (layer.shadows.length) {
    Object.assign(containerStyle, generateShadowStyleObject(options, project, layer.shadows[layer.shadows.length - 1], layer.type));
  }
  if (layer.borders.length) {
    Object.assign(containerStyle, generateBorderStyleObject(options, project, layer.borders[layer.borders.length - 1], layer.type));
  }
  if (layer.borderRadius > 0) {
    containerStyle.borderRadius = layer.borderRadius;
  }
  if (layer.opacity < 1) {
    containerStyle.opacity = layer.opacity;
  }
  if (layer.rotation) {
    containerStyle.transform = [{ rotate: `${layer.rotation}deg` }];
  }

  if (layer.type === 'text') {
    return generateLayerComponentWithText(options, project, layer, containerStyle);
  }
  if (layer.blur) {
    return generateLayerComponentWithBlur(options, project, layer, containerStyle);
  }
  var containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
  var code = `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})`;
  return code;
};

var generateLayerComponentWithText = function generateLayerComponentWithText(options, project, layer, containerStyle) {
  var code = '';
  var textComponentNames = [];
  if (layer.textStyles.length > 0) {
    var textComponentsToImport = '';
    var createdTextComponents = '';
    for (var i = 0; i < layer.textStyles.length; i++) {
      var range = layer.textStyles[i].range;
      if (range.end === 0 || range.start === layer.content.length || range.start === range.end) {
        continue;
      }
      var textStyle = layer.textStyles[i].textStyle;
      var projectTextStyle = project.findTextStyleEqual(textStyle);
      var componentName = '';
      if (projectTextStyle) {
        componentName = (0, _utils.uppercaseFirst)((0, _utils.generateName)(projectTextStyle.name));
        // Prevents double text components import
        if (i > 0 && componentName === textComponentNames[i - 1]) {
          continue;
        }
        textComponentsToImport += `${componentName}, `;
      } else {
        textStyle.name = componentName = `StyledText${i}`;
        createdTextComponents += `${(0, _textStyle.generateTextComponentFromTextStyle)(project, options, textStyle)}\n\n`;
      }
      textComponentNames.push(componentName);
    }
    if (textComponentsToImport.length > 0) {
      code += `import { ${textComponentsToImport.substring(0, textComponentsToImport.length - 2)} } from '${options.typographyComponentsPath}'\n\n`;
    }
    if (createdTextComponents.length > 0) {
      if (options.textBaseComponent) {
        code += `import { ${options.textBaseComponent} } from '${options.typographyComponentsPath}\n\n`;
      }
      code += createdTextComponents;
    }
  }
  if (textComponentNames.length > 1) {
    var textChilds = '';
    for (var _i = 0; _i < textComponentNames.length; _i++) {
      textChilds += `<${textComponentNames[_i]}>{text${_i}}</${textComponentNames[_i]}>`;
    }
    var containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})\n\n`;
    code += `export const Component = props => {
    const { ${layer.textStyles.map(function (_, i) {
      return (i > 0 ? ' ' : '') + 'text' + i;
    })} } = props
    return <StyledContainer {...props}>
      ${textChilds}
    </StyledContainer>
  }`;
  } else {
    containerStyle.rect = layer.rect;
    var _containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `export const Component = glamorous(${textComponentNames[0]}){((props, theme) => (${_containerStyleStr})`;
  }

  return code;
};

var generateLayerComponentWithBlur = function generateLayerComponentWithBlur(options, project, layer, containerStyle) {
  var code = '';
  if (options.blurComponentPath) {
    code = `import { BlurView } from '${options.blurComponentPath}'\n\n`;
  } else {
    code = "import { BlurView as RNBlurView } from 'react-native-blur'\n\n";
    var containerStyleStr = (0, _utils.createJavascriptStringFromObj)(containerStyle);
    code += `const StyledContainer = glamorous.view((props, theme) => (${containerStyleStr})\n\n`;
    code += `const BlurView = glamorous(RNBlurView)({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })\n\n`;
  }
  code += `export const Component = props => {
  const { children } = props
  return <StyledContainer {...props}>
    <BlurView blurType="dark" /> // "xlight", "light" or "dark"
    {children}
  </StyledContainer>
}`;
  return code;
};

var generateShadowStyleObject = function generateShadowStyleObject(options, project, shadow, layerType) {
  if (layerType === 'text') {
    var _shadowColor = (0, _utils.themeColor)(options, project, shadow.color);
    return {
      textShadowColor: _shadowColor,
      textShadowOffset: {
        width: (0, _utils.round)(shadow.offsetX / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION),
        height: (0, _utils.round)(shadow.offsetY / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)
      },
      textShadowRadius: (0, _utils.round)(shadow.blurRadius / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)
    };
  }

  if (project.type === 'android') {
    return {};
  }

  // "iOS" doesn't have shadow spread
  var shadowColor = (0, _utils.themeColor)(options, project, shadow.color);

  return {
    shadowColor: shadowColor,
    shadowOffset: {
      width: (0, _utils.round)(shadow.offsetX / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION),
      height: (0, _utils.round)(shadow.offsetY / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION)
    },
    shadowRadius: (0, _utils.round)(shadow.blurRadius / project.densityDivisor, _constants.NUMERICAL_DECIMAL_PRECISION),
    shadowOpacity: 1.0
  };
};

var generateBorderStyleObject = function generateBorderStyleObject(options, project, border, layerType) {
  if (layerType === 'text' || border.fill && border.fill.type === 'gradient') {
    return {};
  }

  var borderColor = (0, _utils.themeColor)(options, project, border.fill.color);
  return {
    borderStyle: 'solid',
    borderWidth: (0, _utils.round)(border.thickness / project.densityDivisor, 1),
    borderColor
  };
};

exports.generateLayerComponent = generateLayerComponent;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMDg3MDZiOTkwNWYwZTU5ODQ1YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xheWVyLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYW1lLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiTUFYX0JSSUdIVE5FU1MiLCJIVUVfTUFYX0RFR1JFRSIsIk1BWF9QRVJDRU5UQUdFIiwiSEVYX0JBU0UiLCJKU09OX1NQQUNJTkciLCJOVU1FUklDQUxfRk9OVF9CT0xEIiwiTlVNRVJJQ0FMX0ZPTlRfTk9STUFMIiwiTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OIiwiUkVBQ1RfUlVMRVNfV0lUSF9DT0xPUiIsIkhUTUxfVEFHUyIsIk9QVElPTl9OQU1FUyIsIkNPTE9SX0ZPUk1BVCIsIlRFWFRfQkFTRV9DT01QT05FTlQiLCJDT0xPUl9USEVNRV9QUkVGSVgiLCJGT05UX1RIRU1FX1BSRUZJWCIsIlRZUE9HUkFQSFlfQ09NUE9ORU5UU19QQVRIIiwiQkxVUl9DT01QT05FTlRfUEFUSCIsImdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCIsIm9wdGlvbnMiLCJwcm9qZWN0IiwidGV4dFN0eWxlcyIsImNvbXBvbmVudHMiLCJmb250cyIsInRleHRTdHlsZSIsImZvbnRGYWNlTmFtZSIsImZvbnRGYWNlIiwiZ2VuZXJhdGVUZXh0Q29tcG9uZW50RnJvbVRleHRTdHlsZSIsImZvbnRzT2JqU3RyIiwiY29sb3JWYWx1ZSIsImNvbG9yIiwic3R5bGVPYmoiLCJmb250RmFtaWx5IiwiZm9udFRoZW1lUHJlZml4IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRBbGlnbiIsInRleHRTdHlsZXNTdHIiLCJjb21wb25lbnROYW1lIiwibmFtZSIsImJhc2VDb21wb25lbnQiLCJ0ZXh0QmFzZUNvbXBvbmVudCIsInN0eWxlZ3VpZGVDb2xvcnMiLCJjb250ZXh0IiwiY29sb3JzIiwiY29sb3JGb3JtYXQiLCJnZXRPcHRpb24iLCJjb2RlIiwibGFuZ3VhZ2UiLCJzdHlsZWd1aWRlVGV4dFN0eWxlcyIsImNvbG9yVGhlbWVQcmVmaXgiLCJ0eXBvZ3JhcGh5Q29tcG9uZW50c1BhdGgiLCJibHVyQ29tcG9uZW50UGF0aCIsImxheWVyIiwiY29tbWVudCIsInRleHQiLCJleHBvcnRTdHlsZWd1aWRlQ29sb3JzIiwiY29kZU9iamVjdCIsImZpbGVuYW1lIiwiZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMiLCJhbHBoYUZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJ1c2VHcm91cGluZyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsInRvSGV4IiwibnVtIiwidG9TdHJpbmciLCJibGVuZENvbG9ycyIsInJlZHVjZSIsImJsZW5kZWRDb2xvciIsImJsZW5kIiwiZ2V0Q29sb3JTdHJpbmdCeUZvcm1hdCIsInRvSGV4U3RyaW5nIiwidG9SR0JBU3RyaW5nIiwidG9IU0xBU3RyaW5nIiwidG9EZWZhdWx0U3RyaW5nIiwiZ2V0Q29sb3JNYXBCeUZvcm1hdCIsImNvbG9yTWFwIiwiY29sb3JTdHJpbmciLCJwcmVmaXgiLCJoZXhDb2RlIiwiaGV4QmFzZSIsImEiLCJoZXhBIiwicmdiIiwiTWF0aCIsInJvdW5kIiwiciIsImciLCJiIiwicmdiU3RyIiwiZm9ybWF0IiwiaHNsQ29sb3IiLCJ0b0hTTCIsImhzbCIsImgiLCJzIiwibCIsImhzbFN0ciIsInRoZW1lQ29sb3IiLCJmaW5kQ29sb3JFcXVhbCIsInN0clZhbHVlIiwiZXNjYXBlIiwic3RyIiwidHJpbSIsInJlcGxhY2UiLCJpc0h0bWxUYWciLCJpbmNsdWRlcyIsIm51bWJlciIsInByZWNpc2lvbiIsImZvcm1hdHRlZE51bWJlciIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwic2VsZWN0b3JpemUiLCJzZWxlY3Rvcml6ZWRTdHIiLCJ0b0xvd2VyQ2FzZSIsInRlc3QiLCJzdWJzdHIiLCJjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJvYmplY3QiLCJsYXllckhhc0dyYWRpZW50IiwiZmlsbHMiLCJzb21lIiwiZiIsInR5cGUiLCJsYXllckhhc0JsZW5kTW9kZSIsImJsZW5kTW9kZSIsImxvd2VyY2FzZUZpcnN0IiwidXBwZXJjYXNlRmlyc3QiLCJnZW5lcmF0ZU5hbWUiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImpvaW5Ub2tlbnMiLCJtYXAiLCJqb2luIiwidG9rZW5zRm9yU3RyaW5nIiwidG9rZW5pemVyIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsInRva2VuIiwiZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0IiwiY29sb3JzT2JqZWN0IiwiY29sb3JzU3R5bGVzU3RyIiwiZ2VuZXJhdGVMYXllckNvbXBvbmVudCIsImNvbnRhaW5lclN0eWxlIiwiaGVpZ2h0IiwicmVjdCIsIndpZHRoIiwibGVuZ3RoIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsInNoYWRvd3MiLCJPYmplY3QiLCJhc3NpZ24iLCJnZW5lcmF0ZVNoYWRvd1N0eWxlT2JqZWN0IiwiYm9yZGVycyIsImdlbmVyYXRlQm9yZGVyU3R5bGVPYmplY3QiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5Iiwicm90YXRpb24iLCJ0cmFuc2Zvcm0iLCJyb3RhdGUiLCJnZW5lcmF0ZUxheWVyQ29tcG9uZW50V2l0aFRleHQiLCJibHVyIiwiZ2VuZXJhdGVMYXllckNvbXBvbmVudFdpdGhCbHVyIiwiY29udGFpbmVyU3R5bGVTdHIiLCJ0ZXh0Q29tcG9uZW50TmFtZXMiLCJ0ZXh0Q29tcG9uZW50c1RvSW1wb3J0IiwiY3JlYXRlZFRleHRDb21wb25lbnRzIiwiaSIsInJhbmdlIiwiZW5kIiwic3RhcnQiLCJjb250ZW50IiwicHJvamVjdFRleHRTdHlsZSIsImZpbmRUZXh0U3R5bGVFcXVhbCIsInB1c2giLCJ0ZXh0Q2hpbGRzIiwiXyIsInNoYWRvdyIsImxheWVyVHlwZSIsInNoYWRvd0NvbG9yIiwidGV4dFNoYWRvd0NvbG9yIiwidGV4dFNoYWRvd09mZnNldCIsIm9mZnNldFgiLCJkZW5zaXR5RGl2aXNvciIsIm9mZnNldFkiLCJ0ZXh0U2hhZG93UmFkaXVzIiwiYmx1clJhZGl1cyIsInNoYWRvd09mZnNldCIsInNoYWRvd1JhZGl1cyIsInNoYWRvd09wYWNpdHkiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJ0aGlja25lc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4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QU0wRCxjQUFjLHVCQUFXdkssT0FBWCxFQUFvQkMsT0FBcEIsRUFBNkJvSyxPQUFPMUosS0FBcEMsQ0FBcEI7O0FBRUEsU0FBTztBQUNMNEosaUJBQWFBLFdBRFI7QUFFTFEsa0JBQWM7QUFDWjFDLGFBQU8sa0JBQ0xnQyxPQUFPSyxPQUFQLEdBQWlCekssUUFBUTBLLGNBRHBCLEVBRUx0TCxzQ0FGSyxDQURLO0FBS1o4SSxjQUFRLGtCQUNOa0MsT0FBT08sT0FBUCxHQUFpQjNLLFFBQVEwSyxjQURuQixFQUVOdEwsc0NBRk07QUFMSSxLQUZUO0FBWUwyTCxrQkFBYyxrQkFDWlgsT0FBT1MsVUFBUCxHQUFvQjdLLFFBQVEwSyxjQURoQixFQUVadEwsc0NBRlksQ0FaVDtBQWdCTDRMLG1CQUFlO0FBaEJWLEdBQVA7QUFrQkQsQ0EvQ0Q7O0FBaURBLElBQU1uQyw0QkFBNEIsU0FBNUJBLHlCQUE0QixDQUFDOUksT0FBRCxFQUFVQyxPQUFWLEVBQW1CaUwsTUFBbkIsRUFBMkJaLFNBQTNCLEVBQXlDO0FBQ3pFLE1BQ0VBLGNBQWMsTUFBZCxJQUNDWSxPQUFPM0MsSUFBUCxJQUFlMkMsT0FBTzNDLElBQVAsQ0FBWTFCLElBQVosS0FBcUIsVUFGdkMsRUFHRTtBQUNBLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQU1zRSxjQUFjLHVCQUFXbkwsT0FBWCxFQUFvQkMsT0FBcEIsRUFBNkJpTCxPQUFPM0MsSUFBUCxDQUFZNUgsS0FBekMsQ0FBcEI7QUFDQSxTQUFPO0FBQ0x5SyxpQkFBYSxPQURSO0FBRUxDLGlCQUFhLGtCQUFNSCxPQUFPSSxTQUFQLEdBQW1CckwsUUFBUTBLLGNBQWpDLEVBQWlELENBQWpELENBRlI7QUFHTFE7QUFISyxHQUFQO0FBS0QsQ0FkRDs7UUFnQlNsRCxzQixHQUFBQSxzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYwODcwNmI5OTA1ZjBlNTk4NDViIiwiZXhwb3J0IGNvbnN0IE1BWF9CUklHSFRORVNTID0gMjU1XG5leHBvcnQgY29uc3QgSFVFX01BWF9ERUdSRUUgPSAzNjBcbmV4cG9ydCBjb25zdCBNQVhfUEVSQ0VOVEFHRSA9IDEwMFxuZXhwb3J0IGNvbnN0IEhFWF9CQVNFID0gMTZcbmV4cG9ydCBjb25zdCBKU09OX1NQQUNJTkcgPSAyXG5leHBvcnQgY29uc3QgTlVNRVJJQ0FMX0ZPTlRfQk9MRCA9IDcwMFxuZXhwb3J0IGNvbnN0IE5VTUVSSUNBTF9GT05UX05PUk1BTCA9IDQwMFxuZXhwb3J0IGNvbnN0IE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiA9IDFcbmV4cG9ydCBjb25zdCBSRUFDVF9SVUxFU19XSVRIX0NPTE9SID0gW1xuICAnYmFja2dyb3VuZENvbG9yJyxcbiAgJ2JvcmRlckNvbG9yJyxcbiAgJ2NvbG9yJyxcbiAgJ3NoYWRvd0NvbG9yJyxcbiAgJ3RleHREZWNvcmF0aW9uQ29sb3InLFxuICAndGV4dFNoYWRvd0NvbG9yJ1xuXVxuZXhwb3J0IGNvbnN0IEhUTUxfVEFHUyA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhZGRyZXNzJyxcbiAgJ2FyZWEnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2Jhc2UnLFxuICAnYmRpJyxcbiAgJ2JkbycsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnInLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGF0YScsXG4gICdkYXRhbGlzdCcsXG4gICdkZCcsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGlhbG9nJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbScsXG4gICdlbWJlZCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdrZXlnZW4nLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ2xpbmsnLFxuICAnbWFpbicsXG4gICdtYXAnLFxuICAnbWFyaycsXG4gICdtYXRoJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbWV0YScsXG4gICdtZXRlcicsXG4gICduYXYnLFxuICAnbm9zY3JpcHQnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwYXJhbScsXG4gICdwaWN0dXJlJyxcbiAgJ3ByZScsXG4gICdwcm9ncmVzcycsXG4gICdxJyxcbiAgJ3JwJyxcbiAgJ3J0JyxcbiAgJ3J1YnknLFxuICAncycsXG4gICdzYW1wJyxcbiAgJ3NjcmlwdCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NlbGVjdCcsXG4gICdzbG90JyxcbiAgJ3NtYWxsJyxcbiAgJ3NvdXJjZScsXG4gICdzb3VyY2UnLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3R5bGUnLFxuICAnc3ViJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3N2ZycsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZW1wbGF0ZScsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyJyxcbiAgJ3RyYWNrJyxcbiAgJ3UnLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJyxcbiAgJ3dicidcbl1cbmV4cG9ydCBjb25zdCBPUFRJT05fTkFNRVMgPSB7XG4gIENPTE9SX0ZPUk1BVDogJ2NvbG9yRm9ybWF0JyxcbiAgVEVYVF9CQVNFX0NPTVBPTkVOVDogJ3RleHRCYXNlQ29tcG9uZW50JyxcbiAgQ09MT1JfVEhFTUVfUFJFRklYOiAnY29sb3JUaGVtZVByZWZpeCcsXG4gIEZPTlRfVEhFTUVfUFJFRklYOiAnZm9udFRoZW1lUHJlZml4JyxcbiAgVFlQT0dSQVBIWV9DT01QT05FTlRTX1BBVEg6ICd0eXBvZ3JhcGh5Q29tcG9uZW50c1BhdGgnLFxuICBCTFVSX0NPTVBPTkVOVF9QQVRIOiAnYmx1ckNvbXBvbmVudFBhdGgnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzLmpzIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnLi9sYXllci11dGlscydcbmV4cG9ydCAqIGZyb20gJy4vbmFtZS11dGlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC5qcyIsImltcG9ydCB7IE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7XG4gIGdlbmVyYXRlTmFtZSxcbiAgdXBwZXJjYXNlRmlyc3QsXG4gIHJvdW5kLFxuICB0aGVtZUNvbG9yLFxuICBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9ialxufSBmcm9tICcuLi91dGlscydcblxuY29uc3QgZ2VuZXJhdGVUZXh0Q29tcG9uZW50c0Zyb21Qcm9qZWN0ID0gKG9wdGlvbnMsIHByb2plY3QsIHRleHRTdHlsZXMpID0+IHtcbiAgbGV0IGNvbXBvbmVudHMgPSAnJ1xuICBsZXQgZm9udHMgPSB7fVxuICBmb3IgKGxldCB0ZXh0U3R5bGUgb2YgdGV4dFN0eWxlcykge1xuICAgIGNvbnN0IGZvbnRGYWNlTmFtZSA9IGdlbmVyYXRlTmFtZSh0ZXh0U3R5bGUuZm9udEZhY2UpXG4gICAgaWYgKCFmb250c1tmb250RmFjZU5hbWVdKSB7XG4gICAgICBmb250c1tmb250RmFjZU5hbWVdID0gdGV4dFN0eWxlLmZvbnRGYWNlXG4gICAgfVxuICAgIGNvbXBvbmVudHMgKz0gYCR7Z2VuZXJhdGVUZXh0Q29tcG9uZW50RnJvbVRleHRTdHlsZShcbiAgICAgIHByb2plY3QsXG4gICAgICBvcHRpb25zLFxuICAgICAgdGV4dFN0eWxlXG4gICAgKX1cXG5cXG5gXG4gIH1cblxuICBjb25zdCBmb250c09ialN0ciA9IGNyZWF0ZUphdmFzY3JpcHRTdHJpbmdGcm9tT2JqKGZvbnRzKVxuICByZXR1cm4gYC8vIEZvbnRzIChQdXQgdGhpcyBpbiB5b3VyIHRoZW1lKVxcblxcbmNvbnN0IEZvbnRzID0gJHtmb250c09ialN0cn1cXG5cXG4vLyBUZXh0IGNvbXBvbmVudHNcXG5cXG4ke2NvbXBvbmVudHN9YFxufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUZXh0Q29tcG9uZW50RnJvbVRleHRTdHlsZSA9IChcbiAgcHJvamVjdCxcbiAgb3B0aW9ucyxcbiAgdGV4dFN0eWxlXG4pID0+IHtcbiAgY29uc3QgY29sb3JWYWx1ZSA9IHRoZW1lQ29sb3Iob3B0aW9ucywgcHJvamVjdCwgdGV4dFN0eWxlLmNvbG9yKVxuICBjb25zdCBzdHlsZU9iaiA9IHtcbiAgICBmb250RmFtaWx5OiBgdGhlbWUuJHtvcHRpb25zLmZvbnRUaGVtZVByZWZpeCB8fCAnZm9udCd9LiR7Z2VuZXJhdGVOYW1lKFxuICAgICAgdGV4dFN0eWxlLmZvbnRGYWNlXG4gICAgKX1gLFxuICAgIGZvbnRTaXplOlxuICAgICAgdGV4dFN0eWxlLmZvbnRTaXplICYmXG4gICAgICByb3VuZCh0ZXh0U3R5bGUuZm9udFNpemUsIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiksXG4gICAgbGluZUhlaWdodDpcbiAgICAgIHRleHRTdHlsZS5saW5lSGVpZ2h0ICYmXG4gICAgICByb3VuZCh0ZXh0U3R5bGUubGluZUhlaWdodCwgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OKSxcbiAgICBsZXR0ZXJTcGFjaW5nOlxuICAgICAgdGV4dFN0eWxlLmxldHRlclNwYWNpbmcgJiZcbiAgICAgIHJvdW5kKHRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nLCBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT04pLFxuICAgIHRleHRBbGlnbjogdGV4dFN0eWxlLnRleHRBbGlnbixcbiAgICBjb2xvcjogY29sb3JWYWx1ZVxuICB9XG4gIGNvbnN0IHRleHRTdHlsZXNTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihzdHlsZU9iailcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHVwcGVyY2FzZUZpcnN0KGdlbmVyYXRlTmFtZSh0ZXh0U3R5bGUubmFtZSkpXG4gIGNvbnN0IGJhc2VDb21wb25lbnQgPSBvcHRpb25zLnRleHRCYXNlQ29tcG9uZW50XG4gICAgPyBgKCR7b3B0aW9ucy50ZXh0QmFzZUNvbXBvbmVudH0pYFxuICAgIDogJy50ZXh0J1xuICByZXR1cm4gYGNvbnN0ICR7Y29tcG9uZW50TmFtZX0gPSBnbGFtb3JvdXMke2Jhc2VDb21wb25lbnR9KChwcm9wcywgdGhlbWUpID0+ICgke3RleHRTdHlsZXNTdHJ9KSlgXG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC1zdHlsZS9pbmRleC5qcyIsImltcG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdCB9IGZyb20gJy4vdGV4dC1zdHlsZSdcbmltcG9ydCB7IGdlbmVyYXRlQ29sb3JPYmplY3RGcm9tUHJvamVjdCB9IGZyb20gJy4vY29sb3InXG5pbXBvcnQgeyBnZW5lcmF0ZUxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcidcblxuaW1wb3J0IHsgT1BUSU9OX05BTUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IHN0eWxlZ3VpZGVDb2xvcnMgPSAoY29udGV4dCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JGb3JtYXQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9GT1JNQVQpXG4gIH1cblxuICBjb25zdCBjb2RlID0gZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0KG9wdGlvbnMsIGNvbnRleHQucHJvamVjdCwgY29sb3JzKVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbG9yRm9ybWF0OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuQ09MT1JfRk9STUFUKSxcbiAgICB0ZXh0QmFzZUNvbXBvbmVudDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLlRFWFRfQkFTRV9DT01QT05FTlQpLFxuICAgIGNvbG9yVGhlbWVQcmVmaXg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9USEVNRV9QUkVGSVgpLFxuICAgIGZvbnRUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkZPTlRfVEhFTUVfUFJFRklYKSxcbiAgICB0eXBvZ3JhcGh5Q29tcG9uZW50c1BhdGg6ICdoZWonLCAvLyBjb250ZXh0LmdldE9wdGlvbihcbiAgICAvLyAgIE9QVElPTl9OQU1FUy5UWVBPR1JBUEhZX0NPTVBPTkVOVFNfUEFUSFxuICAgIC8vICksXG4gICAgYmx1ckNvbXBvbmVudFBhdGg6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5CTFVSX0NPTVBPTkVOVF9QQVRIKVxuICB9XG5cbiAgY29uc3QgY29kZSA9IGdlbmVyYXRlVGV4dENvbXBvbmVudHNGcm9tUHJvamVjdChcbiAgICBvcHRpb25zLFxuICAgIGNvbnRleHQucHJvamVjdCxcbiAgICB0ZXh0U3R5bGVzXG4gIClcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICB9XG59XG5cbmNvbnN0IGxheWVyID0gKGNvbnRleHQsIGxheWVyKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JGb3JtYXQ6IGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9OQU1FUy5DT0xPUl9GT1JNQVQpLFxuICAgIHRleHRCYXNlQ29tcG9uZW50OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuVEVYVF9CQVNFX0NPTVBPTkVOVCksXG4gICAgY29sb3JUaGVtZVByZWZpeDogY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX05BTUVTLkNPTE9SX1RIRU1FX1BSRUZJWCksXG4gICAgZm9udFRoZW1lUHJlZml4OiBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fTkFNRVMuRk9OVF9USEVNRV9QUkVGSVgpXG4gIH1cbiAgY29uc3QgY29kZSA9IGdlbmVyYXRlTGF5ZXJDb21wb25lbnQob3B0aW9ucywgY29udGV4dC5wcm9qZWN0LCBsYXllcilcbiAgcmV0dXJuIHsgY29kZSwgbGFuZ3VhZ2U6ICdqc29uJyB9XG59XG5cbmNvbnN0IGNvbW1lbnQgPSAoY29udGV4dCwgdGV4dCkgPT4ge1xuICByZXR1cm4gYC8vICR7dGV4dH1gXG59XG5cbmNvbnN0IGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMgPSAoY29udGV4dCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IGNvZGVPYmplY3QgPSBzdHlsZWd1aWRlQ29sb3JzKGNvbnRleHQsIGNvbG9ycylcbiAgY29uc3QgY29kZSA9IGNvZGVPYmplY3QuY29kZVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBmaWxlbmFtZTogJ2luZGV4LmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuY29uc3QgZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMgPSAoY29udGV4dCwgdGV4dFN0eWxlcykgPT4ge1xuICBjb25zdCBjb2RlT2JqZWN0ID0gc3R5bGVndWlkZVRleHRTdHlsZXMoY29udGV4dCwgdGV4dFN0eWxlcylcbiAgY29uc3QgY29kZSA9IGNvZGVPYmplY3QuY29kZVxuXG4gIHJldHVybiB7XG4gICAgY29kZSxcbiAgICBmaWxlbmFtZTogJ2luZGV4LmpzJyxcbiAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYXllcixcbiAgc3R5bGVndWlkZUNvbG9ycyxcbiAgc3R5bGVndWlkZVRleHRTdHlsZXMsXG4gIGNvbW1lbnQsXG4gIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMsXG4gIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQge1xuICBNQVhfQlJJR0hUTkVTUyxcbiAgSEVYX0JBU0UsXG4gIEhVRV9NQVhfREVHUkVFLFxuICBNQVhfUEVSQ0VOVEFHRVxufSBmcm9tICcuLi9jb25zdGFudHMnXG5cbnZhciBhbHBoYUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG59KVxuXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgcmV0dXJuIChudW0gPCBIRVhfQkFTRSA/ICcwJyA6ICcnKSArIG51bS50b1N0cmluZyhIRVhfQkFTRSlcbn1cblxuZnVuY3Rpb24gYmxlbmRDb2xvcnMoY29sb3JzKSB7XG4gIHJldHVybiBjb2xvcnMucmVkdWNlKChibGVuZGVkQ29sb3IsIGNvbG9yKSA9PiBibGVuZGVkQ29sb3IuYmxlbmQoY29sb3IpKVxufVxuXG5mdW5jdGlvbiBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBjb2xvckZvcm1hdCkge1xuICBpZiAoISgncicgaW4gY29sb3IgJiYgJ2cnIGluIGNvbG9yICYmICdiJyBpbiBjb2xvciAmJiAnYScgaW4gY29sb3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGNvbG9yRm9ybWF0KSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldHVybiB0b0hleFN0cmluZyhjb2xvcilcblxuICAgIGNhc2UgJ3JnYic6XG4gICAgICByZXR1cm4gdG9SR0JBU3RyaW5nKGNvbG9yKVxuXG4gICAgY2FzZSAnaHNsJzpcbiAgICAgIHJldHVybiB0b0hTTEFTdHJpbmcoY29sb3IpXG5cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRvRGVmYXVsdFN0cmluZyhjb2xvcilcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb2xvck1hcEJ5Rm9ybWF0KGNvbG9ycywgY29sb3JGb3JtYXQpIHtcbiAgcmV0dXJuIGNvbG9ycy5yZWR1Y2UoKGNvbG9yTWFwLCBjb2xvcikgPT4ge1xuICAgIHZhciBjb2xvclN0cmluZyA9IGdldENvbG9yU3RyaW5nQnlGb3JtYXQoY29sb3IsIGNvbG9yRm9ybWF0KVxuICAgIGNvbG9yTWFwW2NvbG9yU3RyaW5nXSA9IGNvbG9yLm5hbWVcbiAgICByZXR1cm4gY29sb3JNYXBcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIHRvSGV4U3RyaW5nKGNvbG9yLCBwcmVmaXgpIHtcbiAgdmFyIGhleENvZGUgPSBjb2xvci5oZXhCYXNlKClcblxuICBpZiAoY29sb3IuYSA8IDEpIHtcbiAgICB2YXIgaGV4QSA9IHRvSGV4KGNvbG9yLmEgKiBNQVhfQlJJR0hUTkVTUylcblxuICAgIGhleENvZGUgPSBwcmVmaXggPyBoZXhBICsgaGV4Q29kZSA6IGhleENvZGUgKyBoZXhBXG4gIH1cblxuICByZXR1cm4gYCMke2hleENvZGV9YFxufVxuXG5mdW5jdGlvbiB0b1JHQkFTdHJpbmcoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGAke01hdGgucm91bmQoY29sb3Iucil9LCAke01hdGgucm91bmQoY29sb3IuZyl9LCAke01hdGgucm91bmQoXG4gICAgY29sb3IuYlxuICApfWBcblxuICB2YXIgcmdiU3RyID1cbiAgICBjb2xvci5hIDwgMVxuICAgICAgPyBgcmdiYSgke3JnYn0sICR7YWxwaGFGb3JtYXR0ZXIuZm9ybWF0KGNvbG9yLmEpfSlgXG4gICAgICA6IGByZ2IoJHtyZ2J9KWBcblxuICByZXR1cm4gcmdiU3RyXG59XG5cbmZ1bmN0aW9uIHRvSFNMQVN0cmluZyhjb2xvcikge1xuICB2YXIgaHNsQ29sb3IgPSBjb2xvci50b0hTTCgpXG4gIHZhciBoc2wgPVxuICAgIGAke01hdGgucm91bmQoaHNsQ29sb3IuaCAqIEhVRV9NQVhfREVHUkVFKX0sIGAgK1xuICAgIGAke01hdGgucm91bmQoaHNsQ29sb3IucyAqIE1BWF9QRVJDRU5UQUdFKX0lLCBgICtcbiAgICBgJHtNYXRoLnJvdW5kKGhzbENvbG9yLmwgKiBNQVhfUEVSQ0VOVEFHRSl9JWBcblxuICB2YXIgaHNsU3RyID1cbiAgICBjb2xvci5hIDwgMVxuICAgICAgPyBgaHNsYSgke2hzbH0sICR7YWxwaGFGb3JtYXR0ZXIuZm9ybWF0KGNvbG9yLmEpfSlgXG4gICAgICA6IGBoc2woJHtoc2x9KWBcblxuICByZXR1cm4gaHNsU3RyXG59XG5cbmZ1bmN0aW9uIHRvRGVmYXVsdFN0cmluZyhjb2xvcikge1xuICByZXR1cm4gY29sb3IuYSA8IDEgPyB0b1JHQkFTdHJpbmcoY29sb3IpIDogdG9IZXhTdHJpbmcoY29sb3IpXG59XG5cbmNvbnN0IHRoZW1lQ29sb3IgPSAob3B0aW9ucywgcHJvamVjdCwgY29sb3IpID0+IHtcbiAgY29uc3QgdGhlbWVDb2xvciA9XG4gICAgcHJvamVjdC5maW5kQ29sb3JFcXVhbChjb2xvcikgfHxcbiAgICBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KGNvbG9yLCBvcHRpb25zLmNvbG9yRm9ybWF0KVxuICBjb25zdCBzdHJWYWx1ZSA9IHRoZW1lQ29sb3IubmFtZVxuICAgID8gYHRoZW1lLiR7b3B0aW9ucy5jb2xvclRoZW1lUHJlZml4IHx8ICdjb2xvcid9LiR7dGhlbWVDb2xvci5uYW1lfWBcbiAgICA6IHRoZW1lQ29sb3JcbiAgcmV0dXJuIHN0clZhbHVlXG59XG5cbmV4cG9ydCB7XG4gIGJsZW5kQ29sb3JzLFxuICBnZXRDb2xvck1hcEJ5Rm9ybWF0LFxuICB0b0RlZmF1bHRTdHJpbmcsXG4gIGdldENvbG9yU3RyaW5nQnlGb3JtYXQsXG4gIHRoZW1lQ29sb3Jcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb2xvci11dGlscy5qcyIsImltcG9ydCB7IEhUTUxfVEFHUywgSlNPTl9TUEFDSU5HIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UoL1teXFxzXFx3LV0vZywgJycpXG4gICAgLnJlcGxhY2UoL14oLT9cXGQrKSsvLCAnJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG59XG5cbmZ1bmN0aW9uIGlzSHRtbFRhZyhzdHIpIHtcbiAgcmV0dXJuIEhUTUxfVEFHUy5pbmNsdWRlcyhzdHIpXG59XG5cbmZ1bmN0aW9uIHJvdW5kKG51bWJlciwgcHJlY2lzaW9uKSB7XG4gIHZhciBmb3JtYXR0ZWROdW1iZXIgPSBOdW1iZXIobnVtYmVyKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJlY2lzaW9uXG4gIH0pXG5cbiAgcmV0dXJuIE51bWJlcihmb3JtYXR0ZWROdW1iZXIpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yaXplKHN0cikge1xuICBpZiAoIXN0cikge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgdmFyIHNlbGVjdG9yaXplZFN0ciA9IHN0ci50cmltKClcblxuICBpZiAoaXNIdG1sVGFnKHN0cikpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JpemVkU3RyLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGlmICgvXlsjLl0vLnRlc3Qoc2VsZWN0b3JpemVkU3RyKSkge1xuICAgIHZhciBuYW1lID0gZXNjYXBlKHNlbGVjdG9yaXplZFN0ci5zdWJzdHIoMSkpXG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yaXplZFN0clswXSArIG5hbWVcbiAgICB9XG4gIH1cblxuICBzZWxlY3Rvcml6ZWRTdHIgPSBlc2NhcGUoc2VsZWN0b3JpemVkU3RyKVxuXG4gIHJldHVybiBzZWxlY3Rvcml6ZWRTdHIgJiYgYC4ke3NlbGVjdG9yaXplZFN0cn1gXG59XG5cbmNvbnN0IGNyZWF0ZUphdmFzY3JpcHRTdHJpbmdGcm9tT2JqID0gb2JqZWN0ID0+IHtcbiAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCwgbnVsbCwgSlNPTl9TUEFDSU5HKVxuICBzdHIgPSBzdHJcbiAgICAucmVwbGFjZSgvXCIoLispXCI6L2csICckMTonKVxuICAgIC5yZXBsYWNlKC9cInRoZW1lLiguKilcIi9nLCAndGhlbWUuJDEnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCBcIidcIilcbiAgcmV0dXJuIHN0clxufVxuXG5leHBvcnQgeyBpc0h0bWxUYWcsIHJvdW5kLCBzZWxlY3Rvcml6ZSwgY3JlYXRlSmF2YXNjcmlwdFN0cmluZ0Zyb21PYmogfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbW1vbi11dGlscy5qcyIsImZ1bmN0aW9uIGxheWVySGFzR3JhZGllbnQobGF5ZXIpIHtcbiAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLnR5cGUgPT09ICdncmFkaWVudCcpXG59XG5cbmZ1bmN0aW9uIGxheWVySGFzQmxlbmRNb2RlKGxheWVyKSB7XG4gIHJldHVybiBsYXllci5maWxscy5zb21lKGYgPT4gZi5ibGVuZE1vZGUgJiYgZi5ibGVuZE1vZGUgIT09ICdub3JtYWwnKVxufVxuXG5leHBvcnQgeyBsYXllckhhc0dyYWRpZW50LCBsYXllckhhc0JsZW5kTW9kZSB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbGF5ZXItdXRpbHMuanMiLCJleHBvcnQgZnVuY3Rpb24gbG93ZXJjYXNlRmlyc3Qocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cHBlcmNhc2VGaXJzdChzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSlcbn1cblxuZnVuY3Rpb24gam9pblRva2Vucyhjb21wb25lbnRzKSB7XG4gIHZhciBuYW1lID0gY29tcG9uZW50cy5tYXAodXBwZXJjYXNlRmlyc3QpLmpvaW4oJycpXG4gIHJldHVybiBsb3dlcmNhc2VGaXJzdChuYW1lKVxufVxuXG5mdW5jdGlvbiB0b2tlbnNGb3JTdHJpbmcoc3RyKSB7XG4gIHZhciB0b2tlbml6ZXIgPSAvXFxkK3xbYS16XSt8W0EtWl0rKD8hW2Etel0pfFtBLVpdW2Etel0rL2dcblxuICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHIubWF0Y2godG9rZW5pemVyKVxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIFsnaW52YWxpZCcsICduYW1lJ11cbiAgfVxuXG4gIHJldHVybiBtYXRjaFJlc3VsdC5tYXAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGpvaW5Ub2tlbnModG9rZW5zRm9yU3RyaW5nKG5hbWUpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL25hbWUtdXRpbHMuanMiLCJpbXBvcnQgeyBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0LCBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBnZW5lcmF0ZUNvbG9yT2JqZWN0RnJvbVByb2plY3QgPSAob3B0aW9ucywgcHJvamVjdCwgY29sb3JzKSA9PiB7XG4gIGNvbnN0IGNvbG9yc09iamVjdCA9IHt9XG4gIGZvciAobGV0IGNvbG9yIG9mIGNvbG9ycykge1xuICAgIGlmIChjb2xvci5uYW1lKSB7XG4gICAgICBjb2xvcnNPYmplY3RbY29sb3IubmFtZV0gPSBnZXRDb2xvclN0cmluZ0J5Rm9ybWF0KFxuICAgICAgICBjb2xvcixcbiAgICAgICAgb3B0aW9ucy5jb2xvckZvcm1hdFxuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBjb2xvcnNTdHlsZXNTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihjb2xvcnNPYmplY3QpXG4gIHJldHVybiBgY29uc3QgYmFzZSA9ICR7Y29sb3JzU3R5bGVzU3RyfWBcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVDb2xvck9iamVjdEZyb21Qcm9qZWN0IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2xvci9pbmRleC5qcyIsImltcG9ydCB7IE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdlbmVyYXRlVGV4dENvbXBvbmVudEZyb21UZXh0U3R5bGUgfSBmcm9tICcuLi90ZXh0LXN0eWxlJ1xuaW1wb3J0IHtcbiAgcm91bmQsXG4gIGJsZW5kQ29sb3JzLFxuICB0aGVtZUNvbG9yLFxuICBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaixcbiAgdXBwZXJjYXNlRmlyc3QsXG4gIGdlbmVyYXRlTmFtZVxufSBmcm9tICcuLi91dGlscydcblxuY29uc3QgZ2VuZXJhdGVMYXllckNvbXBvbmVudCA9IChvcHRpb25zLCBwcm9qZWN0LCBsYXllcikgPT4ge1xuICBsZXQgY29udGFpbmVyU3R5bGUgPSB7fVxuICBjb250YWluZXJTdHlsZS5oZWlnaHQgPSBsYXllci5yZWN0LmhlaWdodFxuICBjb250YWluZXJTdHlsZS53aWR0aCA9IGxheWVyLnJlY3Qud2lkdGhcblxuICBpZiAobGF5ZXIuZmlsbHMubGVuZ3RoICYmIGxheWVyLmZpbGxzWzBdLmNvbG9yKSB7XG4gICAgY29uc3QgYmxlbmRlZENvbG9yID0gYmxlbmRDb2xvcnMobGF5ZXIuZmlsbHMubWFwKGZpbGwgPT4gZmlsbC5jb2xvcikpXG4gICAgY29udGFpbmVyU3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhlbWVDb2xvcihvcHRpb25zLCBwcm9qZWN0LCBibGVuZGVkQ29sb3IpXG4gIH1cbiAgaWYgKGxheWVyLnNoYWRvd3MubGVuZ3RoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIGNvbnRhaW5lclN0eWxlLFxuICAgICAgZ2VuZXJhdGVTaGFkb3dTdHlsZU9iamVjdChcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgbGF5ZXIuc2hhZG93c1tsYXllci5zaGFkb3dzLmxlbmd0aCAtIDFdLFxuICAgICAgICBsYXllci50eXBlXG4gICAgICApXG4gICAgKVxuICB9XG4gIGlmIChsYXllci5ib3JkZXJzLmxlbmd0aCkge1xuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICBjb250YWluZXJTdHlsZSxcbiAgICAgIGdlbmVyYXRlQm9yZGVyU3R5bGVPYmplY3QoXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGxheWVyLmJvcmRlcnNbbGF5ZXIuYm9yZGVycy5sZW5ndGggLSAxXSxcbiAgICAgICAgbGF5ZXIudHlwZVxuICAgICAgKVxuICAgIClcbiAgfVxuICBpZiAobGF5ZXIuYm9yZGVyUmFkaXVzID4gMCkge1xuICAgIGNvbnRhaW5lclN0eWxlLmJvcmRlclJhZGl1cyA9IGxheWVyLmJvcmRlclJhZGl1c1xuICB9XG4gIGlmIChsYXllci5vcGFjaXR5IDwgMSkge1xuICAgIGNvbnRhaW5lclN0eWxlLm9wYWNpdHkgPSBsYXllci5vcGFjaXR5XG4gIH1cbiAgaWYgKGxheWVyLnJvdGF0aW9uKSB7XG4gICAgY29udGFpbmVyU3R5bGUudHJhbnNmb3JtID0gW3sgcm90YXRlOiBgJHtsYXllci5yb3RhdGlvbn1kZWdgIH1dXG4gIH1cblxuICBpZiAobGF5ZXIudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlTGF5ZXJDb21wb25lbnRXaXRoVGV4dChcbiAgICAgIG9wdGlvbnMsXG4gICAgICBwcm9qZWN0LFxuICAgICAgbGF5ZXIsXG4gICAgICBjb250YWluZXJTdHlsZVxuICAgIClcbiAgfVxuICBpZiAobGF5ZXIuYmx1cikge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyQ29tcG9uZW50V2l0aEJsdXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgcHJvamVjdCxcbiAgICAgIGxheWVyLFxuICAgICAgY29udGFpbmVyU3R5bGVcbiAgICApXG4gIH1cbiAgY29uc3QgY29udGFpbmVyU3R5bGVTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihjb250YWluZXJTdHlsZSlcbiAgbGV0IGNvZGUgPSBgY29uc3QgU3R5bGVkQ29udGFpbmVyID0gZ2xhbW9yb3VzLnZpZXcoKHByb3BzLCB0aGVtZSkgPT4gKCR7Y29udGFpbmVyU3R5bGVTdHJ9KWBcbiAgcmV0dXJuIGNvZGVcbn1cblxuY29uc3QgZ2VuZXJhdGVMYXllckNvbXBvbmVudFdpdGhUZXh0ID0gKFxuICBvcHRpb25zLFxuICBwcm9qZWN0LFxuICBsYXllcixcbiAgY29udGFpbmVyU3R5bGVcbikgPT4ge1xuICBsZXQgY29kZSA9ICcnXG4gIGxldCB0ZXh0Q29tcG9uZW50TmFtZXMgPSBbXVxuICBpZiAobGF5ZXIudGV4dFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHRleHRDb21wb25lbnRzVG9JbXBvcnQgPSAnJ1xuICAgIGxldCBjcmVhdGVkVGV4dENvbXBvbmVudHMgPSAnJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXIudGV4dFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmFuZ2UgPSBsYXllci50ZXh0U3R5bGVzW2ldLnJhbmdlXG4gICAgICBpZiAoXG4gICAgICAgIHJhbmdlLmVuZCA9PT0gMCB8fFxuICAgICAgICByYW5nZS5zdGFydCA9PT0gbGF5ZXIuY29udGVudC5sZW5ndGggfHxcbiAgICAgICAgcmFuZ2Uuc3RhcnQgPT09IHJhbmdlLmVuZFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0U3R5bGUgPSBsYXllci50ZXh0U3R5bGVzW2ldLnRleHRTdHlsZVxuICAgICAgbGV0IHByb2plY3RUZXh0U3R5bGUgPSBwcm9qZWN0LmZpbmRUZXh0U3R5bGVFcXVhbCh0ZXh0U3R5bGUpXG4gICAgICBsZXQgY29tcG9uZW50TmFtZSA9ICcnXG4gICAgICBpZiAocHJvamVjdFRleHRTdHlsZSkge1xuICAgICAgICBjb21wb25lbnROYW1lID0gdXBwZXJjYXNlRmlyc3QoZ2VuZXJhdGVOYW1lKHByb2plY3RUZXh0U3R5bGUubmFtZSkpXG4gICAgICAgIC8vIFByZXZlbnRzIGRvdWJsZSB0ZXh0IGNvbXBvbmVudHMgaW1wb3J0XG4gICAgICAgIGlmIChpID4gMCAmJiBjb21wb25lbnROYW1lID09PSB0ZXh0Q29tcG9uZW50TmFtZXNbaSAtIDFdKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICB0ZXh0Q29tcG9uZW50c1RvSW1wb3J0ICs9IGAke2NvbXBvbmVudE5hbWV9LCBgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0U3R5bGUubmFtZSA9IGNvbXBvbmVudE5hbWUgPSBgU3R5bGVkVGV4dCR7aX1gXG4gICAgICAgIGNyZWF0ZWRUZXh0Q29tcG9uZW50cyArPSBgJHtnZW5lcmF0ZVRleHRDb21wb25lbnRGcm9tVGV4dFN0eWxlKFxuICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICB0ZXh0U3R5bGVcbiAgICAgICAgKX1cXG5cXG5gXG4gICAgICB9XG4gICAgICB0ZXh0Q29tcG9uZW50TmFtZXMucHVzaChjb21wb25lbnROYW1lKVxuICAgIH1cbiAgICBpZiAodGV4dENvbXBvbmVudHNUb0ltcG9ydC5sZW5ndGggPiAwKSB7XG4gICAgICBjb2RlICs9IGBpbXBvcnQgeyAke3RleHRDb21wb25lbnRzVG9JbXBvcnQuc3Vic3RyaW5nKFxuICAgICAgICAwLFxuICAgICAgICB0ZXh0Q29tcG9uZW50c1RvSW1wb3J0Lmxlbmd0aCAtIDJcbiAgICAgICl9IH0gZnJvbSAnJHtvcHRpb25zLnR5cG9ncmFwaHlDb21wb25lbnRzUGF0aH0nXFxuXFxuYFxuICAgIH1cbiAgICBpZiAoY3JlYXRlZFRleHRDb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLnRleHRCYXNlQ29tcG9uZW50KSB7XG4gICAgICAgIGNvZGUgKz0gYGltcG9ydCB7ICR7b3B0aW9ucy50ZXh0QmFzZUNvbXBvbmVudH0gfSBmcm9tICcke1xuICAgICAgICAgIG9wdGlvbnMudHlwb2dyYXBoeUNvbXBvbmVudHNQYXRoXG4gICAgICAgIH1cXG5cXG5gXG4gICAgICB9XG4gICAgICBjb2RlICs9IGNyZWF0ZWRUZXh0Q29tcG9uZW50c1xuICAgIH1cbiAgfVxuICBpZiAodGV4dENvbXBvbmVudE5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgdGV4dENoaWxkcyA9ICcnXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Q29tcG9uZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRleHRDaGlsZHMgKz0gYDwke3RleHRDb21wb25lbnROYW1lc1tpXX0+e3RleHQke2l9fTwvJHtcbiAgICAgICAgdGV4dENvbXBvbmVudE5hbWVzW2ldXG4gICAgICB9PmBcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGVTdHIgPSBjcmVhdGVKYXZhc2NyaXB0U3RyaW5nRnJvbU9iaihjb250YWluZXJTdHlsZSlcbiAgICBjb2RlICs9IGBjb25zdCBTdHlsZWRDb250YWluZXIgPSBnbGFtb3JvdXMudmlldygocHJvcHMsIHRoZW1lKSA9PiAoJHtjb250YWluZXJTdHlsZVN0cn0pXFxuXFxuYFxuICAgIGNvZGUgKz0gYGV4cG9ydCBjb25zdCBDb21wb25lbnQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyAke2xheWVyLnRleHRTdHlsZXMubWFwKFxuICAgIChfLCBpKSA9PiAoaSA+IDAgPyAnICcgOiAnJykgKyAndGV4dCcgKyBpXG4gICl9IH0gPSBwcm9wc1xuICAgIHJldHVybiA8U3R5bGVkQ29udGFpbmVyIHsuLi5wcm9wc30+XG4gICAgICAke3RleHRDaGlsZHN9XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gIH1gXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyU3R5bGUucmVjdCA9IGxheWVyLnJlY3RcbiAgICBjb25zdCBjb250YWluZXJTdHlsZVN0ciA9IGNyZWF0ZUphdmFzY3JpcHRTdHJpbmdGcm9tT2JqKGNvbnRhaW5lclN0eWxlKVxuICAgIGNvZGUgKz0gYGV4cG9ydCBjb25zdCBDb21wb25lbnQgPSBnbGFtb3JvdXMoJHtcbiAgICAgIHRleHRDb21wb25lbnROYW1lc1swXVxuICAgIH0peygocHJvcHMsIHRoZW1lKSA9PiAoJHtjb250YWluZXJTdHlsZVN0cn0pYFxuICB9XG5cbiAgcmV0dXJuIGNvZGVcbn1cblxuY29uc3QgZ2VuZXJhdGVMYXllckNvbXBvbmVudFdpdGhCbHVyID0gKFxuICBvcHRpb25zLFxuICBwcm9qZWN0LFxuICBsYXllcixcbiAgY29udGFpbmVyU3R5bGVcbikgPT4ge1xuICBsZXQgY29kZSA9ICcnXG4gIGlmIChvcHRpb25zLmJsdXJDb21wb25lbnRQYXRoKSB7XG4gICAgY29kZSA9IGBpbXBvcnQgeyBCbHVyVmlldyB9IGZyb20gJyR7b3B0aW9ucy5ibHVyQ29tcG9uZW50UGF0aH0nXFxuXFxuYFxuICB9IGVsc2Uge1xuICAgIGNvZGUgPSBcImltcG9ydCB7IEJsdXJWaWV3IGFzIFJOQmx1clZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUtYmx1cidcXG5cXG5cIlxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlU3RyID0gY3JlYXRlSmF2YXNjcmlwdFN0cmluZ0Zyb21PYmooY29udGFpbmVyU3R5bGUpXG4gICAgY29kZSArPSBgY29uc3QgU3R5bGVkQ29udGFpbmVyID0gZ2xhbW9yb3VzLnZpZXcoKHByb3BzLCB0aGVtZSkgPT4gKCR7Y29udGFpbmVyU3R5bGVTdHJ9KVxcblxcbmBcbiAgICBjb2RlICs9IGBjb25zdCBCbHVyVmlldyA9IGdsYW1vcm91cyhSTkJsdXJWaWV3KSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH0pXFxuXFxuYFxuICB9XG4gIGNvZGUgKz0gYGV4cG9ydCBjb25zdCBDb21wb25lbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXG4gIHJldHVybiA8U3R5bGVkQ29udGFpbmVyIHsuLi5wcm9wc30+XG4gICAgPEJsdXJWaWV3IGJsdXJUeXBlPVwiZGFya1wiIC8+IC8vIFwieGxpZ2h0XCIsIFwibGlnaHRcIiBvciBcImRhcmtcIlxuICAgIHtjaGlsZHJlbn1cbiAgPC9TdHlsZWRDb250YWluZXI+XG59YFxuICByZXR1cm4gY29kZVxufVxuXG5jb25zdCBnZW5lcmF0ZVNoYWRvd1N0eWxlT2JqZWN0ID0gKG9wdGlvbnMsIHByb2plY3QsIHNoYWRvdywgbGF5ZXJUeXBlKSA9PiB7XG4gIGlmIChsYXllclR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gdGhlbWVDb2xvcihvcHRpb25zLCBwcm9qZWN0LCBzaGFkb3cuY29sb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRTaGFkb3dDb2xvcjogc2hhZG93Q29sb3IsXG4gICAgICB0ZXh0U2hhZG93T2Zmc2V0OiB7XG4gICAgICAgIHdpZHRoOiByb3VuZChcbiAgICAgICAgICBzaGFkb3cub2Zmc2V0WCAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICAgICAgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OXG4gICAgICAgICksXG4gICAgICAgIGhlaWdodDogcm91bmQoXG4gICAgICAgICAgc2hhZG93Lm9mZnNldFkgLyBwcm9qZWN0LmRlbnNpdHlEaXZpc29yLFxuICAgICAgICAgIE5VTUVSSUNBTF9ERUNJTUFMX1BSRUNJU0lPTlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgdGV4dFNoYWRvd1JhZGl1czogcm91bmQoXG4gICAgICAgIHNoYWRvdy5ibHVyUmFkaXVzIC8gcHJvamVjdC5kZW5zaXR5RGl2aXNvcixcbiAgICAgICAgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2plY3QudHlwZSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICAvLyBcImlPU1wiIGRvZXNuJ3QgaGF2ZSBzaGFkb3cgc3ByZWFkXG4gIGNvbnN0IHNoYWRvd0NvbG9yID0gdGhlbWVDb2xvcihvcHRpb25zLCBwcm9qZWN0LCBzaGFkb3cuY29sb3IpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFkb3dDb2xvcjogc2hhZG93Q29sb3IsXG4gICAgc2hhZG93T2Zmc2V0OiB7XG4gICAgICB3aWR0aDogcm91bmQoXG4gICAgICAgIHNoYWRvdy5vZmZzZXRYIC8gcHJvamVjdC5kZW5zaXR5RGl2aXNvcixcbiAgICAgICAgTlVNRVJJQ0FMX0RFQ0lNQUxfUFJFQ0lTSU9OXG4gICAgICApLFxuICAgICAgaGVpZ2h0OiByb3VuZChcbiAgICAgICAgc2hhZG93Lm9mZnNldFkgLyBwcm9qZWN0LmRlbnNpdHlEaXZpc29yLFxuICAgICAgICBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT05cbiAgICAgIClcbiAgICB9LFxuICAgIHNoYWRvd1JhZGl1czogcm91bmQoXG4gICAgICBzaGFkb3cuYmx1clJhZGl1cyAvIHByb2plY3QuZGVuc2l0eURpdmlzb3IsXG4gICAgICBOVU1FUklDQUxfREVDSU1BTF9QUkVDSVNJT05cbiAgICApLFxuICAgIHNoYWRvd09wYWNpdHk6IDEuMFxuICB9XG59XG5cbmNvbnN0IGdlbmVyYXRlQm9yZGVyU3R5bGVPYmplY3QgPSAob3B0aW9ucywgcHJvamVjdCwgYm9yZGVyLCBsYXllclR5cGUpID0+IHtcbiAgaWYgKFxuICAgIGxheWVyVHlwZSA9PT0gJ3RleHQnIHx8XG4gICAgKGJvcmRlci5maWxsICYmIGJvcmRlci5maWxsLnR5cGUgPT09ICdncmFkaWVudCcpXG4gICkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZUNvbG9yKG9wdGlvbnMsIHByb2plY3QsIGJvcmRlci5maWxsLmNvbG9yKVxuICByZXR1cm4ge1xuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiByb3VuZChib3JkZXIudGhpY2tuZXNzIC8gcHJvamVjdC5kZW5zaXR5RGl2aXNvciwgMSksXG4gICAgYm9yZGVyQ29sb3JcbiAgfVxufVxuXG5leHBvcnQgeyBnZW5lcmF0ZUxheWVyQ29tcG9uZW50IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXllci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=