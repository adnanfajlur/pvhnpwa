'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var attributeExceptions = ['role'];

function appendText(el, text) {
  var textNode = document.createTextNode(text);
  el.appendChild(textNode);
}

function appendArray(el, children) {
  children.forEach(function (child) {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === 'string') {
      appendText(el, child);
    }
  });
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute('styles');
    return;
  }

  Object.keys(styles).forEach(function (styleName) {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName];
    } else {
      console.warn(styleName + ' is not a valid style for a <' + el.tagName.toLowerCase() + '>');
    }
  });
}

function makeElement(type, textOrPropsOrChild) {
  var el = document.createElement(type);

  if (Array.isArray(textOrPropsOrChild)) {
    appendArray(el, textOrPropsOrChild);
  } else if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'string') {
    appendText(el, textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'object') {
    Object.keys(textOrPropsOrChild).forEach(function (propName) {
      if (propName in el || attributeExceptions.includes(propName)) {
        var value = textOrPropsOrChild[propName];

        if (propName === 'style') {
          setStyles(el, value);
        } else if (value) {
          el[propName] = value;
        }
      } else {
        console.warn(propName + ' is not a valid property of a <' + type + '>');
      }
    });
  }

  for (var _len = arguments.length, otherChildren = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    otherChildren[_key - 2] = arguments[_key];
  }

  if (otherChildren) appendArray(el, otherChildren);
  return el;
}

var a = exports.a = function a() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return makeElement.apply(undefined, ['a'].concat(args));
};
var div = exports.div = function div() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return makeElement.apply(undefined, ['div'].concat(args));
};
var p = exports.p = function p() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return makeElement.apply(undefined, ['p'].concat(args));
};
var span = exports.span = function span() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return makeElement.apply(undefined, ['span'].concat(args));
};