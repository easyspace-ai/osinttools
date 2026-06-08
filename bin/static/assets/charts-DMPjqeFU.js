var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2;
import { r as Sa, a as g, g as dr, c as nf, R as I1 } from "./monaco-BqKDZJPO.js";
var So = { exports: {} }, kt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var sf;
function j1() {
  if (sf) return kt;
  sf = 1;
  var e3 = Sa();
  function t(l) {
    var u = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var c = 2; c < arguments.length; c++) u += "&args[]=" + encodeURIComponent(arguments[c]);
    }
    return "Minified React error #" + l + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var n = { d: { f: r, r: function() {
    throw Error(t(522));
  }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, i = Symbol.for("react.portal");
  function s(l, u, c) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: i, key: h == null ? null : "" + h, children: l, containerInfo: u, implementation: c };
  }
  var a = e3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function o(l, u) {
    if (l === "font") return "";
    if (typeof u == "string") return u === "use-credentials" ? u : "";
  }
  return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, kt.createPortal = function(l, u) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11) throw Error(t(299));
    return s(l, u, null, c);
  }, kt.flushSync = function(l) {
    var u = a.T, c = n.p;
    try {
      if (a.T = null, n.p = 2, l) return l();
    } finally {
      a.T = u, n.p = c, n.d.f();
    }
  }, kt.preconnect = function(l, u) {
    typeof l == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, n.d.C(l, u));
  }, kt.prefetchDNS = function(l) {
    typeof l == "string" && n.d.D(l);
  }, kt.preinit = function(l, u) {
    if (typeof l == "string" && u && typeof u.as == "string") {
      var c = u.as, h = o(c, u.crossOrigin), f = typeof u.integrity == "string" ? u.integrity : void 0, d = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      c === "style" ? n.d.S(l, typeof u.precedence == "string" ? u.precedence : void 0, { crossOrigin: h, integrity: f, fetchPriority: d }) : c === "script" && n.d.X(l, { crossOrigin: h, integrity: f, fetchPriority: d, nonce: typeof u.nonce == "string" ? u.nonce : void 0 });
    }
  }, kt.preinitModule = function(l, u) {
    if (typeof l == "string") if (typeof u == "object" && u !== null) {
      if (u.as == null || u.as === "script") {
        var c = o(u.as, u.crossOrigin);
        n.d.M(l, { crossOrigin: c, integrity: typeof u.integrity == "string" ? u.integrity : void 0, nonce: typeof u.nonce == "string" ? u.nonce : void 0 });
      }
    } else u == null && n.d.M(l);
  }, kt.preload = function(l, u) {
    if (typeof l == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var c = u.as, h = o(c, u.crossOrigin);
      n.d.L(l, c, { crossOrigin: h, integrity: typeof u.integrity == "string" ? u.integrity : void 0, nonce: typeof u.nonce == "string" ? u.nonce : void 0, type: typeof u.type == "string" ? u.type : void 0, fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0, referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0, imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0, imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0, media: typeof u.media == "string" ? u.media : void 0 });
    }
  }, kt.preloadModule = function(l, u) {
    if (typeof l == "string") if (u) {
      var c = o(u.as, u.crossOrigin);
      n.d.m(l, { as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0, crossOrigin: c, integrity: typeof u.integrity == "string" ? u.integrity : void 0 });
    } else n.d.m(l);
  }, kt.requestFormReset = function(l) {
    n.d.r(l);
  }, kt.unstable_batchedUpdates = function(l, u) {
    return l(u);
  }, kt.useFormState = function(l, u, c) {
    return a.H.useFormState(l, u, c);
  }, kt.useFormStatus = function() {
    return a.H.useHostTransitionStatus();
  }, kt.version = "19.2.7", kt;
}
var af;
function T1() {
  if (af) return So.exports;
  af = 1;
  function e3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e3);
    } catch (t) {
      console.error(t);
    }
  }
  return e3(), So.exports = j1(), So.exports;
}
var Hg = T1();
function Gg(e3) {
  var t, r, n = "";
  if (typeof e3 == "string" || typeof e3 == "number") n += e3;
  else if (typeof e3 == "object") if (Array.isArray(e3)) {
    var i = e3.length;
    for (t = 0; t < i; t++) e3[t] && (r = Gg(e3[t])) && (n && (n += " "), n += r);
  } else for (r in e3) e3[r] && (n && (n += " "), n += r);
  return n;
}
function J() {
  for (var e3, t, r = 0, n = "", i = arguments.length; r < i; r++) (e3 = arguments[r]) && (t = Gg(e3)) && (n && (n += " "), n += t);
  return n;
}
var _o = { exports: {} }, Oo = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var of;
function N1() {
  if (of) return Oo;
  of = 1;
  var e3 = Sa();
  function t(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useState, i = e3.useEffect, s = e3.useLayoutEffect, a = e3.useDebugValue;
  function o(h, f) {
    var d = f(), v = n({ inst: { value: d, getSnapshot: f } }), m = v[0].inst, p = v[1];
    return s(function() {
      m.value = d, m.getSnapshot = f, l(m) && p({ inst: m });
    }, [h, d, f]), i(function() {
      return l(m) && p({ inst: m }), h(function() {
        l(m) && p({ inst: m });
      });
    }, [h]), a(d), d;
  }
  function l(h) {
    var f = h.getSnapshot;
    h = h.value;
    try {
      var d = f();
      return !r(h, d);
    } catch {
      return true;
    }
  }
  function u(h, f) {
    return f();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : o;
  return Oo.useSyncExternalStore = e3.useSyncExternalStore !== void 0 ? e3.useSyncExternalStore : c, Oo;
}
var lf;
function D1() {
  return lf || (lf = 1, _o.exports = N1()), _o.exports;
}
var L1 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function pc(e3) {
  if (typeof e3 != "string") return false;
  var t = L1;
  return t.includes(e3);
}
var R1 = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], $1 = new Set(R1);
function Xg(e3) {
  return typeof e3 != "string" ? false : $1.has(e3);
}
function Jg(e3) {
  return typeof e3 == "string" && e3.startsWith("data-");
}
function ce(e3) {
  if (typeof e3 != "object" || e3 === null) return {};
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (Xg(r) || Jg(r)) && (t[r] = e3[r]);
  return t;
}
function _a(e3) {
  if (e3 == null) return null;
  if (g.isValidElement(e3) && typeof e3.props == "object" && e3.props !== null) {
    var t = e3.props;
    return ce(t);
  }
  return typeof e3 == "object" && !Array.isArray(e3) ? ce(e3) : null;
}
function Nt(e3) {
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (Xg(r) || Jg(r) || pc(r)) && (t[r] = e3[r]);
  return t;
}
function z1(e3) {
  return e3 == null ? null : g.isValidElement(e3) ? Nt(e3.props) : typeof e3 == "object" && !Array.isArray(e3) ? Nt(e3) : null;
}
var B1 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, gu.apply(null, arguments);
}
function F1(e3, t) {
  if (e3 == null) return {};
  var r, n, i = W1(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function W1(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var Zg = g.forwardRef((e3, t) => {
  var { children: r, width: n, height: i, viewBox: s, className: a, style: o, title: l, desc: u } = e3, c = F1(e3, B1), h = s || { width: n, height: i, x: 0, y: 0 }, f = J("recharts-surface", a);
  return g.createElement("svg", gu({}, Nt(c), { className: f, width: n, height: i, style: o, viewBox: "".concat(h.x, " ").concat(h.y, " ").concat(h.width, " ").concat(h.height), ref: t }), g.createElement("title", null, l), g.createElement("desc", null, u), r);
}), q1 = ["children", "className"];
function yu() {
  return yu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, yu.apply(null, arguments);
}
function K1(e3, t) {
  if (e3 == null) return {};
  var r, n, i = U1(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function U1(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var ee = g.forwardRef((e3, t) => {
  var { children: r, className: n } = e3, i = K1(e3, q1), s = J("recharts-layer", n);
  return g.createElement("g", yu({ className: s }, Nt(i), { ref: t }), r);
}), V1 = g.createContext(null);
function et(e3) {
  return function() {
    return e3;
  };
}
const Qg = Math.cos, Os = Math.sin, ye = Math.sqrt, Ms = Math.PI, Oa = 2 * Ms, bu = Math.PI, wu = 2 * bu, Pr = 1e-6, Y1 = wu - Pr;
function ty(e3) {
  this._ += e3[0];
  for (let t = 1, r = e3.length; t < r; ++t) this._ += arguments[t] + e3[t];
}
function H1(e3) {
  let t = Math.floor(e3);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e3}`);
  if (t > 15) return ty;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, s = n.length; i < s; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class G1 {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ty : H1(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, s, a) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(t, r, n, i, s) {
    if (t = +t, r = +r, n = +n, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, o = this._y1, l = n - t, u = i - r, c = a - t, h = o - r, f = c * c + h * h;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > Pr) if (!(Math.abs(h * l - u * c) > Pr) || !s) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - a, v = i - o, m = l * l + u * u, p = d * d + v * v, y = Math.sqrt(m), b = Math.sqrt(f), w = s * Math.tan((bu - Math.acos((m + f - p) / (2 * y * b))) / 2), x = w / b, P = w / y;
      Math.abs(x - 1) > Pr && this._append`L${t + x * c},${r + x * h}`, this._append`A${s},${s},0,0,${+(h * d > c * v)},${this._x1 = t + P * l},${this._y1 = r + P * u}`;
    }
  }
  arc(t, r, n, i, s, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let o = n * Math.cos(i), l = n * Math.sin(i), u = t + o, c = r + l, h = 1 ^ a, f = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Pr || Math.abs(this._y1 - c) > Pr) && this._append`L${u},${c}`, n && (f < 0 && (f = f % wu + wu), f > Y1 ? this._append`A${n},${n},0,1,${h},${t - o},${r - l}A${n},${n},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Pr && this._append`A${n},${n},0,${+(f >= bu)},${h},${this._x1 = t + n * Math.cos(s)},${this._y1 = r + n * Math.sin(s)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function mc(e3) {
  let t = 3;
  return e3.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e3;
  }, () => new G1(t);
}
function gc(e3) {
  return typeof e3 == "object" && "length" in e3 ? e3 : Array.from(e3);
}
function ey(e3) {
  this._context = e3;
}
ey.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e3, t);
      break;
  }
} };
function Ma(e3) {
  return new ey(e3);
}
function ry(e3) {
  return e3[0];
}
function ny(e3) {
  return e3[1];
}
function iy(e3, t) {
  var r = et(true), n = null, i = Ma, s = null, a = mc(o);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? ry : et(e3), t = typeof t == "function" ? t : t === void 0 ? ny : et(t);
  function o(l) {
    var u, c = (l = gc(l)).length, h, f = false, d;
    for (n == null && (s = i(d = a())), u = 0; u <= c; ++u) !(u < c && r(h = l[u], u, l)) === f && ((f = !f) ? s.lineStart() : s.lineEnd()), f && s.point(+e3(h, u, l), +t(h, u, l));
    if (d) return s = null, d + "" || null;
  }
  return o.x = function(l) {
    return arguments.length ? (e3 = typeof l == "function" ? l : et(+l), o) : e3;
  }, o.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : et(+l), o) : t;
  }, o.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : et(!!l), o) : r;
  }, o.curve = function(l) {
    return arguments.length ? (i = l, n != null && (s = i(n)), o) : i;
  }, o.context = function(l) {
    return arguments.length ? (l == null ? n = s = null : s = i(n = l), o) : n;
  }, o;
}
function Hi(e3, t, r) {
  var n = null, i = et(true), s = null, a = Ma, o = null, l = mc(u);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? ry : et(+e3), t = typeof t == "function" ? t : et(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? ny : et(+r);
  function u(h) {
    var f, d, v, m = (h = gc(h)).length, p, y = false, b, w = new Array(m), x = new Array(m);
    for (s == null && (o = a(b = l())), f = 0; f <= m; ++f) {
      if (!(f < m && i(p = h[f], f, h)) === y) if (y = !y) d = f, o.areaStart(), o.lineStart();
      else {
        for (o.lineEnd(), o.lineStart(), v = f - 1; v >= d; --v) o.point(w[v], x[v]);
        o.lineEnd(), o.areaEnd();
      }
      y && (w[f] = +e3(p, f, h), x[f] = +t(p, f, h), o.point(n ? +n(p, f, h) : w[f], r ? +r(p, f, h) : x[f]));
    }
    if (b) return o = null, b + "" || null;
  }
  function c() {
    return iy().defined(i).curve(a).context(s);
  }
  return u.x = function(h) {
    return arguments.length ? (e3 = typeof h == "function" ? h : et(+h), n = null, u) : e3;
  }, u.x0 = function(h) {
    return arguments.length ? (e3 = typeof h == "function" ? h : et(+h), u) : e3;
  }, u.x1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : et(+h), u) : n;
  }, u.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : et(+h), r = null, u) : t;
  }, u.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : et(+h), u) : t;
  }, u.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : et(+h), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return c().x(e3).y(t);
  }, u.lineY1 = function() {
    return c().x(e3).y(r);
  }, u.lineX1 = function() {
    return c().x(n).y(t);
  }, u.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : et(!!h), u) : i;
  }, u.curve = function(h) {
    return arguments.length ? (a = h, s != null && (o = a(s)), u) : a;
  }, u.context = function(h) {
    return arguments.length ? (h == null ? s = o = null : o = a(s = h), u) : s;
  }, u;
}
class sy {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function X1(e3) {
  return new sy(e3, true);
}
function J1(e3) {
  return new sy(e3, false);
}
const yc = { draw(e3, t) {
  const r = ye(t / Ms);
  e3.moveTo(r, 0), e3.arc(0, 0, r, 0, Oa);
} }, Z1 = { draw(e3, t) {
  const r = ye(t / 5) / 2;
  e3.moveTo(-3 * r, -r), e3.lineTo(-r, -r), e3.lineTo(-r, -3 * r), e3.lineTo(r, -3 * r), e3.lineTo(r, -r), e3.lineTo(3 * r, -r), e3.lineTo(3 * r, r), e3.lineTo(r, r), e3.lineTo(r, 3 * r), e3.lineTo(-r, 3 * r), e3.lineTo(-r, r), e3.lineTo(-3 * r, r), e3.closePath();
} }, ay = ye(1 / 3), Q1 = ay * 2, tP = { draw(e3, t) {
  const r = ye(t / Q1), n = r * ay;
  e3.moveTo(0, -r), e3.lineTo(n, 0), e3.lineTo(0, r), e3.lineTo(-n, 0), e3.closePath();
} }, eP = { draw(e3, t) {
  const r = ye(t), n = -r / 2;
  e3.rect(n, n, r, r);
} }, rP = 0.8908130915292852, oy = Os(Ms / 10) / Os(7 * Ms / 10), nP = Os(Oa / 10) * oy, iP = -Qg(Oa / 10) * oy, sP = { draw(e3, t) {
  const r = ye(t * rP), n = nP * r, i = iP * r;
  e3.moveTo(0, -r), e3.lineTo(n, i);
  for (let s = 1; s < 5; ++s) {
    const a = Oa * s / 5, o = Qg(a), l = Os(a);
    e3.lineTo(l * r, -o * r), e3.lineTo(o * n - l * i, l * n + o * i);
  }
  e3.closePath();
} }, Mo = ye(3), aP = { draw(e3, t) {
  const r = -ye(t / (Mo * 3));
  e3.moveTo(0, r * 2), e3.lineTo(-Mo * r, -r), e3.lineTo(Mo * r, -r), e3.closePath();
} }, ie = -0.5, se = ye(3) / 2, xu = 1 / ye(12), oP = (xu / 2 + 1) * 3, lP = { draw(e3, t) {
  const r = ye(t / oP), n = r / 2, i = r * xu, s = n, a = r * xu + r, o = -s, l = a;
  e3.moveTo(n, i), e3.lineTo(s, a), e3.lineTo(o, l), e3.lineTo(ie * n - se * i, se * n + ie * i), e3.lineTo(ie * s - se * a, se * s + ie * a), e3.lineTo(ie * o - se * l, se * o + ie * l), e3.lineTo(ie * n + se * i, ie * i - se * n), e3.lineTo(ie * s + se * a, ie * a - se * s), e3.lineTo(ie * o + se * l, ie * l - se * o), e3.closePath();
} };
function uP(e3, t) {
  let r = null, n = mc(i);
  e3 = typeof e3 == "function" ? e3 : et(e3 || yc), t = typeof t == "function" ? t : et(t === void 0 ? 64 : +t);
  function i() {
    let s;
    if (r || (r = s = n()), e3.apply(this, arguments).draw(r, +t.apply(this, arguments)), s) return r = null, s + "" || null;
  }
  return i.type = function(s) {
    return arguments.length ? (e3 = typeof s == "function" ? s : et(s), i) : e3;
  }, i.size = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : et(+s), i) : t;
  }, i.context = function(s) {
    return arguments.length ? (r = s ?? null, i) : r;
  }, i;
}
function Es() {
}
function As(e3, t, r) {
  e3._context.bezierCurveTo((2 * e3._x0 + e3._x1) / 3, (2 * e3._y0 + e3._y1) / 3, (e3._x0 + 2 * e3._x1) / 3, (e3._y0 + 2 * e3._y1) / 3, (e3._x0 + 4 * e3._x1 + t) / 6, (e3._y0 + 4 * e3._y1 + r) / 6);
}
function ly(e3) {
  this._context = e3;
}
ly.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      As(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      As(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function cP(e3) {
  return new ly(e3);
}
function uy(e3) {
  this._context = e3;
}
uy.prototype = { areaStart: Es, areaEnd: Es, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e3, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e3, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e3, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e3) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      As(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function hP(e3) {
  return new uy(e3);
}
function cy(e3) {
  this._context = e3;
}
cy.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e3) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      As(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function fP(e3) {
  return new cy(e3);
}
function hy(e3) {
  this._context = e3;
}
hy.prototype = { areaStart: Es, areaEnd: Es, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e3, t) {
  e3 = +e3, t = +t, this._point ? this._context.lineTo(e3, t) : (this._point = 1, this._context.moveTo(e3, t));
} };
function dP(e3) {
  return new hy(e3);
}
function uf(e3) {
  return e3 < 0 ? -1 : 1;
}
function cf(e3, t, r) {
  var n = e3._x1 - e3._x0, i = t - e3._x1, s = (e3._y1 - e3._y0) / (n || i < 0 && -0), a = (r - e3._y1) / (i || n < 0 && -0), o = (s * i + a * n) / (n + i);
  return (uf(s) + uf(a)) * Math.min(Math.abs(s), Math.abs(a), 0.5 * Math.abs(o)) || 0;
}
function hf(e3, t) {
  var r = e3._x1 - e3._x0;
  return r ? (3 * (e3._y1 - e3._y0) / r - t) / 2 : t;
}
function Eo(e3, t, r) {
  var n = e3._x0, i = e3._y0, s = e3._x1, a = e3._y1, o = (s - n) / 3;
  e3._context.bezierCurveTo(n + o, i + o * t, s - o, a - o * r, s, a);
}
function Cs(e3) {
  this._context = e3;
}
Cs.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      Eo(this, this._t0, hf(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  var r = NaN;
  if (e3 = +e3, t = +t, !(e3 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, Eo(this, hf(this, r = cf(this, e3, t)), r);
        break;
      default:
        Eo(this, this._t0, r = cf(this, e3, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function fy(e3) {
  this._context = new dy(e3);
}
(fy.prototype = Object.create(Cs.prototype)).point = function(e3, t) {
  Cs.prototype.point.call(this, t, e3);
};
function dy(e3) {
  this._context = e3;
}
dy.prototype = { moveTo: function(e3, t) {
  this._context.moveTo(t, e3);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e3, t) {
  this._context.lineTo(t, e3);
}, bezierCurveTo: function(e3, t, r, n, i, s) {
  this._context.bezierCurveTo(t, e3, n, r, s, i);
} };
function vP(e3) {
  return new Cs(e3);
}
function pP(e3) {
  return new fy(e3);
}
function vy(e3) {
  this._context = e3;
}
vy.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e3 = this._x, t = this._y, r = e3.length;
  if (r) if (this._line ? this._context.lineTo(e3[0], t[0]) : this._context.moveTo(e3[0], t[0]), r === 2) this._context.lineTo(e3[1], t[1]);
  else for (var n = ff(e3), i = ff(t), s = 0, a = 1; a < r; ++s, ++a) this._context.bezierCurveTo(n[0][s], i[0][s], n[1][s], i[1][s], e3[a], t[a]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e3, t) {
  this._x.push(+e3), this._y.push(+t);
} };
function ff(e3) {
  var t, r = e3.length - 1, n, i = new Array(r), s = new Array(r), a = new Array(r);
  for (i[0] = 0, s[0] = 2, a[0] = e3[0] + 2 * e3[1], t = 1; t < r - 1; ++t) i[t] = 1, s[t] = 4, a[t] = 4 * e3[t] + 2 * e3[t + 1];
  for (i[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * e3[r - 1] + e3[r], t = 1; t < r; ++t) n = i[t] / s[t - 1], s[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / s[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / s[t];
  for (s[r - 1] = (e3[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) s[t] = 2 * e3[t + 1] - i[t + 1];
  return [i, s];
}
function mP(e3) {
  return new vy(e3);
}
function Ea(e3, t) {
  this._context = e3, this._t = t;
}
Ea.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e3, t);
      else {
        var r = this._x * (1 - this._t) + e3 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e3, this._y = t;
} };
function gP(e3) {
  return new Ea(e3, 0.5);
}
function yP(e3) {
  return new Ea(e3, 0);
}
function bP(e3) {
  return new Ea(e3, 1);
}
function Nr(e3, t) {
  if ((a = e3.length) > 1) for (var r = 1, n, i, s = e3[t[0]], a, o = s.length; r < a; ++r) for (i = s, s = e3[t[r]], n = 0; n < o; ++n) s[n][1] += s[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Pu(e3) {
  for (var t = e3.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function wP(e3, t) {
  return e3[t];
}
function xP(e3) {
  const t = [];
  return t.key = e3, t;
}
function PP() {
  var e3 = et([]), t = Pu, r = Nr, n = wP;
  function i(s) {
    var a = Array.from(e3.apply(this, arguments), xP), o, l = a.length, u = -1, c;
    for (const h of s) for (o = 0, ++u; o < l; ++o) (a[o][u] = [0, +n(h, a[o].key, u, s)]).data = h;
    for (o = 0, c = gc(t(a)); o < l; ++o) a[c[o]].index = o;
    return r(a, c), a;
  }
  return i.keys = function(s) {
    return arguments.length ? (e3 = typeof s == "function" ? s : et(Array.from(s)), i) : e3;
  }, i.value = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : et(+s), i) : n;
  }, i.order = function(s) {
    return arguments.length ? (t = s == null ? Pu : typeof s == "function" ? s : et(Array.from(s)), i) : t;
  }, i.offset = function(s) {
    return arguments.length ? (r = s ?? Nr, i) : r;
  }, i;
}
function SP(e3, t) {
  if ((n = e3.length) > 0) {
    for (var r, n, i = 0, s = e3[0].length, a; i < s; ++i) {
      for (a = r = 0; r < n; ++r) a += e3[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e3[r][i][1] /= a;
    }
    Nr(e3, t);
  }
}
function _P(e3, t) {
  if ((i = e3.length) > 0) {
    for (var r = 0, n = e3[t[0]], i, s = n.length; r < s; ++r) {
      for (var a = 0, o = 0; a < i; ++a) o += e3[a][r][1] || 0;
      n[r][1] += n[r][0] = -o / 2;
    }
    Nr(e3, t);
  }
}
function OP(e3, t) {
  if (!(!((a = e3.length) > 0) || !((s = (i = e3[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, s, a; n < s; ++n) {
      for (var o = 0, l = 0, u = 0; o < a; ++o) {
        for (var c = e3[t[o]], h = c[n][1] || 0, f = c[n - 1][1] || 0, d = (h - f) / 2, v = 0; v < o; ++v) {
          var m = e3[t[v]], p = m[n][1] || 0, y = m[n - 1][1] || 0;
          d += p - y;
        }
        l += h, u += d * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= u / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Nr(e3, t);
  }
}
var Ao = {}, Co = {}, df;
function MP() {
  if (df) return Co;
  df = 1;
  function e3(t) {
    return t === "__proto__";
  }
  return Co.isUnsafeProperty = e3, Co;
}
var ko = {}, vf;
function py() {
  if (vf) return ko;
  vf = 1;
  function e3(t) {
    switch (typeof t) {
      case "number":
      case "symbol":
        return false;
      case "string":
        return t.includes(".") || t.includes("[") || t.includes("]");
    }
  }
  return ko.isDeepKey = e3, ko;
}
var Io = {}, pf;
function bc() {
  if (pf) return Io;
  pf = 1;
  function e3(t) {
    var _a3;
    return typeof t == "string" || typeof t == "symbol" ? t : Object.is((_a3 = t == null ? void 0 : t.valueOf) == null ? void 0 : _a3.call(t), -0) ? "-0" : String(t);
  }
  return Io.toKey = e3, Io;
}
var jo = {}, To = {}, mf;
function EP() {
  if (mf) return To;
  mf = 1;
  function e3(t) {
    if (t == null) return "";
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return t.map(e3).join(",");
    const r = String(t);
    return r === "0" && Object.is(Number(t), -0) ? "-0" : r;
  }
  return To.toString = e3, To;
}
var gf;
function wc() {
  if (gf) return jo;
  gf = 1;
  const e3 = bc(), t = EP();
  function r(n) {
    if (Array.isArray(n)) return n.map(e3.toKey);
    if (typeof n == "symbol") return [n];
    n = t.toString(n);
    const i = [], s = n.length;
    if (s === 0) return i;
    let a = 0, o = "", l = "", u = false;
    for (n.charCodeAt(0) === 46 && (i.push(""), a++); a < s; ) {
      const c = n[a];
      l ? c === "\\" && a + 1 < s ? (a++, o += n[a]) : c === l ? l = "" : o += c : u ? c === '"' || c === "'" ? l = c : c === "]" ? (u = false, i.push(o), o = "") : o += c : c === "[" ? (u = true, o && (i.push(o), o = "")) : c === "." ? o && (i.push(o), o = "") : o += c, a++;
    }
    return o && i.push(o), i;
  }
  return jo.toPath = r, jo;
}
var yf;
function xc() {
  if (yf) return Ao;
  yf = 1;
  const e3 = MP(), t = py(), r = bc(), n = wc();
  function i(a, o, l) {
    if (a == null) return l;
    switch (typeof o) {
      case "string": {
        if (e3.isUnsafeProperty(o)) return l;
        const u = a[o];
        return u === void 0 ? t.isDeepKey(o) ? i(a, n.toPath(o), l) : l : u;
      }
      case "number":
      case "symbol": {
        typeof o == "number" && (o = r.toKey(o));
        const u = a[o];
        return u === void 0 ? l : u;
      }
      default: {
        if (Array.isArray(o)) return s(a, o, l);
        if (Object.is(o == null ? void 0 : o.valueOf(), -0) ? o = "-0" : o = String(o), e3.isUnsafeProperty(o)) return l;
        const u = a[o];
        return u === void 0 ? l : u;
      }
    }
  }
  function s(a, o, l) {
    if (o.length === 0) return l;
    let u = a;
    for (let c = 0; c < o.length; c++) {
      if (u == null || e3.isUnsafeProperty(o[c])) return l;
      u = u[o[c]];
    }
    return u === void 0 ? l : u;
  }
  return Ao.get = i, Ao;
}
var No, bf;
function AP() {
  return bf || (bf = 1, No = xc().get), No;
}
var CP = AP();
const Aa = dr(CP);
var kP = 4;
function or(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kP, r = 10 ** t, n = Math.round(e3 * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function lt(e3) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return e3.reduce((i, s, a) => {
    var o = r[a - 1];
    return typeof o == "string" ? i + o + s : o !== void 0 ? i + or(o) + s : i + s;
  }, "");
}
var oe = (e3) => e3 === 0 ? 0 : e3 > 0 ? 1 : -1, ke = (e3) => typeof e3 == "number" && e3 != +e3, Dr = (e3) => typeof e3 == "string" && e3.indexOf("%") === e3.length - 1, L = (e3) => (typeof e3 == "number" || e3 instanceof Number) && !ke(e3), Ie = (e3) => L(e3) || typeof e3 == "string", IP = 0, li = (e3) => {
  var t = ++IP;
  return "".concat(e3 || "").concat(t);
}, hr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && typeof t != "string") return n;
  var s;
  if (Dr(t)) {
    if (r == null) return n;
    var a = t.indexOf("%");
    s = r * parseFloat(t.slice(0, a)) / 100;
  } else s = +t;
  return ke(s) && (s = n), i && r != null && s > r && (s = r), s;
}, my = (e3) => {
  if (!Array.isArray(e3)) return false;
  for (var t = e3.length, r = {}, n = 0; n < t; n++) if (!r[String(e3[n])]) r[String(e3[n])] = true;
  else return true;
  return false;
};
function ct(e3, t, r) {
  return L(e3) && L(t) ? or(e3 + r * (t - e3)) : t;
}
function gy(e3, t, r) {
  if (!(!e3 || !e3.length)) return e3.find((n) => n && (typeof t == "function" ? t(n) : Aa(n, t)) === r);
}
var gt = (e3) => e3 === null || typeof e3 > "u", Ci = (e3) => gt(e3) ? e3 : "".concat(e3.charAt(0).toUpperCase()).concat(e3.slice(1));
function Vt(e3) {
  return e3 != null;
}
function Vr() {
}
var jP = ["type", "size", "sizeType"];
function Su() {
  return Su = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Su.apply(null, arguments);
}
function wf(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xf(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wf(Object(r), true).forEach(function(n) {
      TP(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function TP(e3, t, r) {
  return (t = NP(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function NP(e3) {
  var t = DP(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function DP(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function LP(e3, t) {
  if (e3 == null) return {};
  var r, n, i = RP(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function RP(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var yy = { symbolCircle: yc, symbolCross: Z1, symbolDiamond: tP, symbolSquare: eP, symbolStar: sP, symbolTriangle: aP, symbolWye: lP }, $P = Math.PI / 180, zP = (e3) => {
  var t = "symbol".concat(Ci(e3));
  return yy[t] || yc;
}, BP = (e3, t, r) => {
  if (t === "area") return e3;
  switch (r) {
    case "cross":
      return 5 * e3 * e3 / 9;
    case "diamond":
      return 0.5 * e3 * e3 / Math.sqrt(3);
    case "square":
      return e3 * e3;
    case "star": {
      var n = 18 * $P;
      return 1.25 * e3 * e3 * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e3 * e3 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e3 * e3 / 8;
    default:
      return Math.PI * e3 * e3 / 4;
  }
}, FP = (e3, t) => {
  yy["symbol".concat(Ci(e3))] = t;
}, by = (e3) => {
  var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e3, i = LP(e3, jP), s = xf(xf({}, i), {}, { type: t, size: r, sizeType: n }), a = "circle";
  typeof t == "string" && (a = t);
  var o = () => {
    var f = zP(a), d = uP().type(f).size(BP(r, n, a)), v = d();
    if (v !== null) return v;
  }, { className: l, cx: u, cy: c } = s, h = Nt(s);
  return L(u) && L(c) && L(r) ? g.createElement("path", Su({}, h, { className: J("recharts-symbols", l), transform: "translate(".concat(u, ", ").concat(c, ")"), d: o() })) : null;
};
by.registerSymbol = FP;
var wy = (e3) => "radius" in e3 && "startAngle" in e3 && "endAngle" in e3, Pc = (e3, t) => {
  if (!e3 || typeof e3 == "function" || typeof e3 == "boolean") return null;
  var r = e3;
  if (g.isValidElement(e3) && (r = e3.props), typeof r != "object" && typeof r != "function") return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    pc(i) && typeof r[i] == "function" && (n[i] = ((s) => r[i](r, s)));
  }), n;
}, WP = (e3, t, r) => (n) => (e3(t, r, n), null), qP = (e3, t, r) => {
  if (e3 === null || typeof e3 != "object" && typeof e3 != "function") return null;
  var n = null;
  return Object.keys(e3).forEach((i) => {
    var s = e3[i];
    pc(i) && typeof s == "function" && (n || (n = {}), n[i] = WP(s, t, r));
  }), n;
};
function Pf(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function KP(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pf(Object(r), true).forEach(function(n) {
      UP(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Pf(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function UP(e3, t, r) {
  return (t = VP(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function VP(e3) {
  var t = YP(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YP(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ft(e3, t) {
  var r = KP({}, e3), n = t, i = Object.keys(t), s = i.reduce((a, o) => (a[o] === void 0 && n[o] !== void 0 && (a[o] = n[o]), a), r);
  return s;
}
var Do = {}, Lo = {}, Sf;
function HP() {
  if (Sf) return Lo;
  Sf = 1;
  function e3(t, r) {
    const n = /* @__PURE__ */ new Map();
    for (let i = 0; i < t.length; i++) {
      const s = t[i], a = r(s, i, t);
      n.has(a) || n.set(a, s);
    }
    return Array.from(n.values());
  }
  return Lo.uniqBy = e3, Lo;
}
var Ro = {}, _f;
function GP() {
  if (_f) return Ro;
  _f = 1;
  function e3(t, r) {
    return function(...n) {
      return t.apply(this, n.slice(0, r));
    };
  }
  return Ro.ary = e3, Ro;
}
var $o = {}, Of;
function xy() {
  if (Of) return $o;
  Of = 1;
  function e3(t) {
    return t;
  }
  return $o.identity = e3, $o;
}
var zo = {}, Bo = {}, Mf;
function XP() {
  if (Mf) return Bo;
  Mf = 1;
  const e3 = xc();
  function t(r) {
    return function(n) {
      return e3.get(n, r);
    };
  }
  return Bo.property = t, Bo;
}
var Fo = {}, Wo = {}, Bn = {}, qo = {}, Ef;
function Py() {
  if (Ef) return qo;
  Ef = 1;
  function e3(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  return qo.isPrimitive = e3, qo;
}
var Ko = {}, Af;
function JP() {
  if (Af) return Ko;
  Af = 1;
  function e3(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  return Ko.isTypedArray = e3, Ko;
}
var Uo = {}, Cf;
function ZP() {
  if (Cf) return Uo;
  Cf = 1;
  function e3(t) {
    return Object.getOwnPropertySymbols(t).filter((r) => Object.prototype.propertyIsEnumerable.call(t, r));
  }
  return Uo.getSymbols = e3, Uo;
}
var Vo = {}, kf;
function Sc() {
  if (kf) return Vo;
  kf = 1;
  function e3(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  return Vo.getTag = e3, Vo;
}
var X = {}, If;
function Sy() {
  if (If) return X;
  If = 1;
  const e3 = "[object RegExp]", t = "[object String]", r = "[object Number]", n = "[object Boolean]", i = "[object Arguments]", s = "[object Symbol]", a = "[object Date]", o = "[object Map]", l = "[object Set]", u = "[object Array]", c = "[object Function]", h = "[object ArrayBuffer]", f = "[object Object]", d = "[object Error]", v = "[object DataView]", m = "[object Uint8Array]", p = "[object Uint8ClampedArray]", y = "[object Uint16Array]", b = "[object Uint32Array]", w = "[object BigUint64Array]", x = "[object Int8Array]", P = "[object Int16Array]", S = "[object Int32Array]", _ = "[object BigInt64Array]", M = "[object Float32Array]", A = "[object Float64Array]";
  return X.argumentsTag = i, X.arrayBufferTag = h, X.arrayTag = u, X.bigInt64ArrayTag = _, X.bigUint64ArrayTag = w, X.booleanTag = n, X.dataViewTag = v, X.dateTag = a, X.errorTag = d, X.float32ArrayTag = M, X.float64ArrayTag = A, X.functionTag = c, X.int16ArrayTag = P, X.int32ArrayTag = S, X.int8ArrayTag = x, X.mapTag = o, X.numberTag = r, X.objectTag = f, X.regexpTag = e3, X.setTag = l, X.stringTag = t, X.symbolTag = s, X.uint16ArrayTag = y, X.uint32ArrayTag = b, X.uint8ArrayTag = m, X.uint8ClampedArrayTag = p, X;
}
var Yo = {}, Ho = {}, jf;
function QP() {
  if (jf) return Ho;
  jf = 1;
  const e3 = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof nf == "object" && nf || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
  return Ho.globalThis_ = e3, Ho;
}
var Tf;
function tS() {
  if (Tf) return Yo;
  Tf = 1;
  const e3 = QP();
  function t(r) {
    return typeof e3.globalThis_.Buffer < "u" && e3.globalThis_.Buffer.isBuffer(r);
  }
  return Yo.isBuffer = t, Yo;
}
var Nf;
function _y() {
  if (Nf) return Bn;
  Nf = 1;
  const e3 = Py(), t = JP(), r = ZP(), n = Sc(), i = Sy(), s = tS();
  function a(c, h) {
    return o(c, void 0, c, /* @__PURE__ */ new Map(), h);
  }
  function o(c, h, f, d = /* @__PURE__ */ new Map(), v = void 0) {
    const m = v == null ? void 0 : v(c, h, f, d);
    if (m !== void 0) return m;
    if (e3.isPrimitive(c)) return c;
    if (d.has(c)) return d.get(c);
    if (Array.isArray(c)) {
      const p = new Array(c.length);
      d.set(c, p);
      for (let y = 0; y < c.length; y++) p[y] = o(c[y], y, f, d, v);
      return Object.hasOwn(c, "index") && (p.index = c.index), Object.hasOwn(c, "input") && (p.input = c.input), p;
    }
    if (c instanceof Date) return new Date(c.getTime());
    if (c instanceof RegExp) {
      const p = new RegExp(c.source, c.flags);
      return p.lastIndex = c.lastIndex, p;
    }
    if (c instanceof Map) {
      const p = /* @__PURE__ */ new Map();
      d.set(c, p);
      for (const [y, b] of c) p.set(y, o(b, y, f, d, v));
      return p;
    }
    if (c instanceof Set) {
      const p = /* @__PURE__ */ new Set();
      d.set(c, p);
      for (const y of c) p.add(o(y, void 0, f, d, v));
      return p;
    }
    if (s.isBuffer(c)) return c.subarray();
    if (t.isTypedArray(c)) {
      const p = new (Object.getPrototypeOf(c)).constructor(c.length);
      d.set(c, p);
      for (let y = 0; y < c.length; y++) p[y] = o(c[y], y, f, d, v);
      return p;
    }
    if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer) return c.slice(0);
    if (c instanceof DataView) {
      const p = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (typeof File < "u" && c instanceof File) {
      const p = new File([c], c.name, { type: c.type });
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (typeof Blob < "u" && c instanceof Blob) {
      const p = new Blob([c], { type: c.type });
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (c instanceof Error) {
      const p = structuredClone(c);
      return d.set(c, p), p.message = c.message, p.name = c.name, p.stack = c.stack, p.cause = c.cause, p.constructor = c.constructor, l(p, c, f, d, v), p;
    }
    if (c instanceof Boolean) {
      const p = new Boolean(c.valueOf());
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (c instanceof Number) {
      const p = new Number(c.valueOf());
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (c instanceof String) {
      const p = new String(c.valueOf());
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    if (typeof c == "object" && u(c)) {
      const p = Object.create(Object.getPrototypeOf(c));
      return d.set(c, p), l(p, c, f, d, v), p;
    }
    return c;
  }
  function l(c, h, f = c, d, v) {
    const m = [...Object.keys(h), ...r.getSymbols(h)];
    for (let p = 0; p < m.length; p++) {
      const y = m[p], b = Object.getOwnPropertyDescriptor(c, y);
      (b == null || b.writable) && (c[y] = o(h[y], y, f, d, v));
    }
  }
  function u(c) {
    switch (n.getTag(c)) {
      case i.argumentsTag:
      case i.arrayTag:
      case i.arrayBufferTag:
      case i.dataViewTag:
      case i.booleanTag:
      case i.dateTag:
      case i.float32ArrayTag:
      case i.float64ArrayTag:
      case i.int8ArrayTag:
      case i.int16ArrayTag:
      case i.int32ArrayTag:
      case i.mapTag:
      case i.numberTag:
      case i.objectTag:
      case i.regexpTag:
      case i.setTag:
      case i.stringTag:
      case i.symbolTag:
      case i.uint8ArrayTag:
      case i.uint8ClampedArrayTag:
      case i.uint16ArrayTag:
      case i.uint32ArrayTag:
        return true;
      default:
        return false;
    }
  }
  return Bn.cloneDeepWith = a, Bn.cloneDeepWithImpl = o, Bn.copyProperties = l, Bn;
}
var Df;
function eS() {
  if (Df) return Wo;
  Df = 1;
  const e3 = _y();
  function t(r) {
    return e3.cloneDeepWithImpl(r, void 0, r, /* @__PURE__ */ new Map(), void 0);
  }
  return Wo.cloneDeep = t, Wo;
}
var Go = {}, Xo = {}, Jo = {}, Lf;
function Oy() {
  if (Lf) return Jo;
  Lf = 1;
  function e3(t, r) {
    return t === r || Number.isNaN(t) && Number.isNaN(r);
  }
  return Jo.isEqualsSameValueZero = e3, Jo;
}
var Zo = {}, Rf;
function My() {
  if (Rf) return Zo;
  Rf = 1;
  function e3(t) {
    return t !== null && (typeof t == "object" || typeof t == "function");
  }
  return Zo.isObject = e3, Zo;
}
var $f;
function rS() {
  if ($f) return Xo;
  $f = 1;
  const e3 = Py(), t = Oy(), r = My();
  function n(u, c, h) {
    return typeof h != "function" ? n(u, c, () => {
    }) : i(u, c, function f(d, v, m, p, y, b) {
      const w = h(d, v, m, p, y, b);
      return w !== void 0 ? !!w : i(d, v, f, b);
    }, /* @__PURE__ */ new Map());
  }
  function i(u, c, h, f) {
    if (c === u) return true;
    switch (typeof c) {
      case "object":
        return s(u, c, h, f);
      case "function":
        return Object.keys(c).length > 0 ? i(u, { ...c }, h, f) : t.isEqualsSameValueZero(u, c);
      default:
        return r.isObject(u) ? typeof c == "string" ? c === "" : true : t.isEqualsSameValueZero(u, c);
    }
  }
  function s(u, c, h, f) {
    if (c == null) return true;
    if (Array.isArray(c)) return o(u, c, h, f);
    if (c instanceof Map) return a(u, c, h, f);
    if (c instanceof Set) return l(u, c, h, f);
    const d = Object.keys(c);
    if (u == null || e3.isPrimitive(u)) return d.length === 0;
    if (d.length === 0) return true;
    if (f == null ? void 0 : f.has(c)) return f.get(c) === u;
    f == null ? void 0 : f.set(c, u);
    try {
      for (let v = 0; v < d.length; v++) {
        const m = d[v];
        if (!e3.isPrimitive(u) && !(m in u) || c[m] === void 0 && u[m] !== void 0 || c[m] === null && u[m] !== null || !h(u[m], c[m], m, u, c, f)) return false;
      }
      return true;
    } finally {
      f == null ? void 0 : f.delete(c);
    }
  }
  function a(u, c, h, f) {
    if (c.size === 0) return true;
    if (!(u instanceof Map)) return false;
    for (const [d, v] of c.entries()) if (h(u.get(d), v, d, u, c, f) === false) return false;
    return true;
  }
  function o(u, c, h, f) {
    if (c.length === 0) return true;
    if (!Array.isArray(u)) return false;
    const d = /* @__PURE__ */ new Set();
    for (let v = 0; v < c.length; v++) {
      const m = c[v];
      let p = false;
      for (let y = 0; y < u.length; y++) {
        if (d.has(y)) continue;
        const b = u[y];
        let w = false;
        if (h(b, m, v, u, c, f) && (w = true), w) {
          d.add(y), p = true;
          break;
        }
      }
      if (!p) return false;
    }
    return true;
  }
  function l(u, c, h, f) {
    return c.size === 0 ? true : u instanceof Set ? o([...u], [...c], h, f) : false;
  }
  return Xo.isMatchWith = n, Xo;
}
var zf;
function Ey() {
  if (zf) return Go;
  zf = 1;
  const e3 = rS();
  function t(r, n) {
    return e3.isMatchWith(r, n, () => {
    });
  }
  return Go.isMatch = t, Go;
}
var Bf;
function nS() {
  if (Bf) return Fo;
  Bf = 1;
  const e3 = eS(), t = Ey();
  function r(n) {
    return n = e3.cloneDeep(n), (i) => t.isMatch(i, n);
  }
  return Fo.matches = r, Fo;
}
var Qo = {}, tl = {}, el = {}, Ff;
function iS() {
  if (Ff) return el;
  Ff = 1;
  const e3 = Sc(), t = Sy(), r = _y();
  function n(i, s) {
    return r.cloneDeepWith(i, (a, o, l, u) => {
      const c = s == null ? void 0 : s(a, o, l, u);
      if (c !== void 0) return c;
      if (typeof i == "object") {
        if (e3.getTag(i) === "[object Object]" && typeof i.constructor != "function") {
          const h = {};
          return u.set(i, h), r.copyProperties(h, i, l, u), h;
        }
        switch (Object.prototype.toString.call(i)) {
          case t.numberTag:
          case t.stringTag:
          case t.booleanTag: {
            const h = new i.constructor(i == null ? void 0 : i.valueOf());
            return r.copyProperties(h, i), h;
          }
          case t.argumentsTag: {
            const h = {};
            return r.copyProperties(h, i), h.length = i.length, h[Symbol.iterator] = i[Symbol.iterator], h;
          }
          default:
            return;
        }
      }
    });
  }
  return el.cloneDeepWith = n, el;
}
var Wf;
function sS() {
  if (Wf) return tl;
  Wf = 1;
  const e3 = iS();
  function t(r) {
    return e3.cloneDeepWith(r);
  }
  return tl.cloneDeep = t, tl;
}
var rl = {}, nl = {}, qf;
function Ay() {
  if (qf) return nl;
  qf = 1;
  const e3 = /^(?:0|[1-9]\d*)$/;
  function t(r, n = Number.MAX_SAFE_INTEGER) {
    switch (typeof r) {
      case "number":
        return Number.isInteger(r) && r >= 0 && r < n;
      case "symbol":
        return false;
      case "string":
        return e3.test(r);
    }
  }
  return nl.isIndex = t, nl;
}
var il = {}, Kf;
function aS() {
  if (Kf) return il;
  Kf = 1;
  const e3 = Sc();
  function t(r) {
    return r !== null && typeof r == "object" && e3.getTag(r) === "[object Arguments]";
  }
  return il.isArguments = t, il;
}
var Uf;
function oS() {
  if (Uf) return rl;
  Uf = 1;
  const e3 = py(), t = wc(), r = Ay(), n = aS();
  function i(s, a) {
    let o;
    if (Array.isArray(a) ? o = a : typeof a == "string" && e3.isDeepKey(a) && (s == null ? void 0 : s[a]) == null ? o = t.toPath(a) : o = [a], o.length === 0) return false;
    let l = s;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      if ((l == null || !Object.hasOwn(l, c)) && !((Array.isArray(l) || n.isArguments(l)) && r.isIndex(c) && c < l.length)) return false;
      l = l[c];
    }
    return true;
  }
  return rl.has = i, rl;
}
var Vf;
function lS() {
  if (Vf) return Qo;
  Vf = 1;
  const e3 = bc(), t = xc(), r = Ey(), n = sS(), i = oS();
  function s(a, o) {
    switch (typeof a) {
      case "object":
        Object.is(a == null ? void 0 : a.valueOf(), -0) && (a = "-0");
        break;
      case "number":
        a = e3.toKey(a);
        break;
    }
    return o = n.cloneDeep(o), function(l) {
      const u = t.get(l, a);
      return u === void 0 ? i.has(l, a) : o === void 0 ? u === void 0 : r.isMatch(u, o);
    };
  }
  return Qo.matchesProperty = s, Qo;
}
var Yf;
function uS() {
  if (Yf) return zo;
  Yf = 1;
  const e3 = xy(), t = XP(), r = nS(), n = lS();
  function i(s) {
    if (s == null) return e3.identity;
    switch (typeof s) {
      case "function":
        return s;
      case "object":
        return Array.isArray(s) && s.length === 2 ? n.matchesProperty(s[0], s[1]) : r.matches(s);
      case "string":
      case "symbol":
      case "number":
        return t.property(s);
    }
  }
  return zo.iteratee = i, zo;
}
var sl = {}, al = {}, ol = {}, Hf;
function cS() {
  if (Hf) return ol;
  Hf = 1;
  function e3(t) {
    return Number.isSafeInteger(t) && t >= 0;
  }
  return ol.isLength = e3, ol;
}
var Gf;
function Cy() {
  if (Gf) return al;
  Gf = 1;
  const e3 = cS();
  function t(r) {
    return r != null && typeof r != "function" && e3.isLength(r.length);
  }
  return al.isArrayLike = t, al;
}
var ll = {}, Xf;
function hS() {
  if (Xf) return ll;
  Xf = 1;
  function e3(t) {
    return typeof t == "object" && t !== null;
  }
  return ll.isObjectLike = e3, ll;
}
var Jf;
function fS() {
  if (Jf) return sl;
  Jf = 1;
  const e3 = Cy(), t = hS();
  function r(n) {
    return t.isObjectLike(n) && e3.isArrayLike(n);
  }
  return sl.isArrayLikeObject = r, sl;
}
var Zf;
function dS() {
  if (Zf) return Do;
  Zf = 1;
  const e3 = HP(), t = GP(), r = xy(), n = uS(), i = fS();
  function s(a, o = r.identity) {
    return i.isArrayLikeObject(a) ? e3.uniqBy(Array.from(a), t.ary(n.iteratee(o), 1)) : [];
  }
  return Do.uniqBy = s, Do;
}
var ul, Qf;
function vS() {
  return Qf || (Qf = 1, ul = dS().uniqBy), ul;
}
var pS = vS();
const td = dr(pS);
function mS(e3, t, r) {
  return t === true ? td(e3, r) : typeof t == "function" ? td(e3, t) : e3;
}
var cl = { exports: {} }, hl = {};
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ed;
function gS() {
  if (ed) return hl;
  ed = 1;
  var e3 = Sa(), t = D1();
  function r(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e3.useRef, a = e3.useEffect, o = e3.useMemo, l = e3.useDebugValue;
  return hl.useSyncExternalStoreWithSelector = function(u, c, h, f, d) {
    var v = s(null);
    if (v.current === null) {
      var m = { hasValue: false, value: null };
      v.current = m;
    } else m = v.current;
    v = o(function() {
      function y(S) {
        if (!b) {
          if (b = true, w = S, S = f(S), d !== void 0 && m.hasValue) {
            var _ = m.value;
            if (d(_, S)) return x = _;
          }
          return x = S;
        }
        if (_ = x, n(w, S)) return _;
        var M = f(S);
        return d !== void 0 && d(_, M) ? (w = S, _) : (w = S, x = M);
      }
      var b = false, w, x, P = h === void 0 ? null : h;
      return [function() {
        return y(c());
      }, P === null ? void 0 : function() {
        return y(P());
      }];
    }, [c, h, f, d]);
    var p = i(u, v[0], v[1]);
    return a(function() {
      m.hasValue = true, m.value = p;
    }, [p]), l(p), p;
  }, hl;
}
var rd;
function yS() {
  return rd || (rd = 1, cl.exports = gS()), cl.exports;
}
var ky = yS();
const PF = dr(ky);
var _c = g.createContext(null), bS = (e3) => e3, dt = () => {
  var e3 = g.useContext(_c);
  return e3 ? e3.store.dispatch : bS;
}, ys = () => {
}, wS = () => ys, xS = (e3, t) => e3 === t;
function z(e3) {
  var t = g.useContext(_c), r = g.useMemo(() => t ? (n) => {
    if (n != null) return e3(n);
  } : ys, [t, e3]);
  return ky.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : wS, t ? t.store.getState : ys, t ? t.store.getState : ys, r, xS);
}
function PS(e3, t = `expected a function, instead received ${typeof e3}`) {
  if (typeof e3 != "function") throw new TypeError(t);
}
function SS(e3, t = `expected an object, instead received ${typeof e3}`) {
  if (typeof e3 != "object") throw new TypeError(t);
}
function _S(e3, t = "expected all items to be functions, instead received the following types: ") {
  if (!e3.every((r) => typeof r == "function")) {
    const r = e3.map((n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var nd = (e3) => Array.isArray(e3) ? e3 : [e3];
function OS(e3) {
  const t = Array.isArray(e3[0]) ? e3[0] : e3;
  return _S(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function MS(e3, t) {
  const r = [], { length: n } = e3;
  for (let i = 0; i < n; i++) r.push(e3[i].apply(null, t));
  return r;
}
var ES = class {
  constructor(e3) {
    this.value = e3;
  }
  deref() {
    return this.value;
  }
}, AS = typeof WeakRef < "u" ? WeakRef : ES, CS = 0, id = 1;
function Gi() {
  return { s: CS, v: void 0, o: null, p: null };
}
function Iy(e3, t = {}) {
  let r = Gi();
  const { resultEqualityCheck: n } = t;
  let i, s = 0;
  function a() {
    var _a3;
    let o = r;
    const { length: l } = arguments;
    for (let h = 0, f = l; h < f; h++) {
      const d = arguments[h];
      if (typeof d == "function" || typeof d == "object" && d !== null) {
        let v = o.o;
        v === null && (o.o = v = /* @__PURE__ */ new WeakMap());
        const m = v.get(d);
        m === void 0 ? (o = Gi(), v.set(d, o)) : o = m;
      } else {
        let v = o.p;
        v === null && (o.p = v = /* @__PURE__ */ new Map());
        const m = v.get(d);
        m === void 0 ? (o = Gi(), v.set(d, o)) : o = m;
      }
    }
    const u = o;
    let c;
    if (o.s === id) c = o.v;
    else if (c = e3.apply(null, arguments), s++, n) {
      const h = ((_a3 = i == null ? void 0 : i.deref) == null ? void 0 : _a3.call(i)) ?? i;
      h != null && n(h, c) && (c = h, s !== 0 && s--), i = typeof c == "object" && c !== null || typeof c == "function" ? new AS(c) : c;
    }
    return u.s = id, u.v = c, c;
  }
  return a.clearCache = () => {
    r = Gi(), a.resetResultsCount();
  }, a.resultsCount = () => s, a.resetResultsCount = () => {
    s = 0;
  }, a;
}
function kS(e3, ...t) {
  const r = typeof e3 == "function" ? { memoize: e3, memoizeOptions: t } : e3, n = (...i) => {
    let s = 0, a = 0, o, l = {}, u = i.pop();
    typeof u == "object" && (l = u, u = i.pop()), PS(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
    const c = { ...r, ...l }, { memoize: h, memoizeOptions: f = [], argsMemoize: d = Iy, argsMemoizeOptions: v = [] } = c, m = nd(f), p = nd(v), y = OS(i), b = h(function() {
      return s++, u.apply(null, arguments);
    }, ...m), w = d(function() {
      a++;
      const P = MS(y, arguments);
      return o = b.apply(null, P), o;
    }, ...p);
    return Object.assign(w, { resultFunc: u, memoizedResultFunc: b, dependencies: y, dependencyRecomputations: () => a, resetDependencyRecomputations: () => {
      a = 0;
    }, lastResult: () => o, recomputations: () => s, resetRecomputations: () => {
      s = 0;
    }, memoize: h, argsMemoize: d });
  };
  return Object.assign(n, { withTypes: () => n }), n;
}
var O = kS(Iy), IS = Object.assign((e3, t = O) => {
  SS(e3, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e3}`);
  const r = Object.keys(e3), n = r.map((s) => e3[s]);
  return t(n, (...s) => s.reduce((a, o, l) => (a[r[l]] = o, a), {}));
}, { withTypes: () => IS }), fl = {}, dl = {}, sd;
function jS() {
  if (sd) return dl;
  sd = 1;
  function e3(t, r = 1) {
    const n = [], i = Math.floor(r), s = (a, o) => {
      for (let l = 0; l < a.length; l++) {
        const u = a[l];
        Array.isArray(u) && o < i ? s(u, o + 1) : n.push(u);
      }
    };
    return s(t, 0), n;
  }
  return dl.flatten = e3, dl;
}
var vl = {}, ad;
function jy() {
  if (ad) return vl;
  ad = 1;
  const e3 = Oy(), t = Cy(), r = My(), n = Ay();
  function i(s, a, o) {
    return r.isObject(o) && (typeof a == "number" && t.isArrayLike(o) && n.isIndex(a) && a < o.length || typeof a == "string" && a in o) ? e3.isEqualsSameValueZero(o[a], s) : false;
  }
  return vl.isIterateeCall = i, vl;
}
var pl = {}, ml = {}, od;
function TS() {
  if (od) return ml;
  od = 1;
  function e3(r) {
    return typeof r == "symbol" ? 1 : r === null ? 2 : r === void 0 ? 3 : r !== r ? 4 : 0;
  }
  const t = (r, n, i) => {
    if (r !== n) {
      const s = e3(r), a = e3(n);
      if (s === a && s === 0) {
        if (r < n) return i === "desc" ? 1 : -1;
        if (r > n) return i === "desc" ? -1 : 1;
      }
      return i === "desc" ? a - s : s - a;
    }
    return 0;
  };
  return ml.compareValues = t, ml;
}
var gl = {}, yl = {}, ld;
function Ty() {
  if (ld) return yl;
  ld = 1;
  function e3(t) {
    return typeof t == "symbol" || t instanceof Symbol;
  }
  return yl.isSymbol = e3, yl;
}
var ud;
function NS() {
  if (ud) return gl;
  ud = 1;
  const e3 = Ty(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function n(i, s) {
    return Array.isArray(i) ? false : typeof i == "number" || typeof i == "boolean" || i == null || e3.isSymbol(i) ? true : typeof i == "string" && (r.test(i) || !t.test(i)) || s != null && Object.hasOwn(s, i);
  }
  return gl.isKey = n, gl;
}
var cd;
function DS() {
  if (cd) return pl;
  cd = 1;
  const e3 = wc(), t = TS(), r = NS();
  function n(i, s, a, o) {
    if (i == null) return [];
    a = o ? void 0 : a, Array.isArray(i) || (i = Object.values(i)), Array.isArray(s) || (s = s == null ? [null] : [s]), s.length === 0 && (s = [null]), Array.isArray(a) || (a = a == null ? [] : [a]), a = a.map((h) => String(h));
    const l = (h, f) => {
      let d = h;
      for (let v = 0; v < f.length && d != null; ++v) d = d[f[v]];
      return d;
    }, u = (h, f) => f == null || h == null ? f : typeof h == "object" && "key" in h ? Object.hasOwn(f, h.key) ? f[h.key] : l(f, h.path) : typeof h == "function" ? h(f) : Array.isArray(h) ? l(f, h) : typeof f == "object" ? f[h] : f, c = s.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: e3.toPath(h) }));
    return i.map((h) => ({ original: h, criteria: c.map((f) => u(f, h)) })).slice().sort((h, f) => {
      for (let d = 0; d < c.length; d++) {
        const v = t.compareValues(h.criteria[d], f.criteria[d], a[d]);
        if (v !== 0) return v;
      }
      return 0;
    }).map((h) => h.original);
  }
  return pl.orderBy = n, pl;
}
var hd;
function LS() {
  if (hd) return fl;
  hd = 1;
  const e3 = jS(), t = jy(), r = DS();
  function n(i, ...s) {
    const a = s.length;
    return a > 1 && t.isIterateeCall(i, s[0], s[1]) ? s = [] : a > 2 && t.isIterateeCall(s[0], s[1], s[2]) && (s = [s[0]]), r.orderBy(i, e3.flatten(s), ["asc"]);
  }
  return fl.sortBy = n, fl;
}
var bl, fd;
function RS() {
  return fd || (fd = 1, bl = LS().sortBy), bl;
}
var $S = RS();
const Ca = dr($S);
var Ny = (e3) => e3.legend.settings, zS = (e3) => e3.legend.size, BS = (e3) => e3.legend.payload;
O([BS, Ny], (e3, t) => {
  var { itemSorter: r } = t, n = e3.flat(1);
  return r ? Ca(n, r) : n;
});
var Xi = 1;
function FS() {
  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = g.useState({ height: 0, left: 0, top: 0, width: 0 }), n = g.useCallback((i) => {
    if (i != null) {
      var s = i.getBoundingClientRect(), a = { height: s.height, left: s.left, top: s.top, width: s.width };
      (Math.abs(a.height - t.height) > Xi || Math.abs(a.left - t.left) > Xi || Math.abs(a.top - t.top) > Xi || Math.abs(a.width - t.width) > Xi) && r({ height: a.height, left: a.left, top: a.top, width: a.width });
    }
  }, [t.width, t.height, t.top, t.left, ...e3]);
  return [t, n];
}
function _t(e3) {
  return `Minified Redux error #${e3}; visit https://redux.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var WS = typeof Symbol == "function" && Symbol.observable || "@@observable", dd = WS, wl = () => Math.random().toString(36).substring(7).split("").join("."), qS = { INIT: `@@redux/INIT${wl()}`, REPLACE: `@@redux/REPLACE${wl()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${wl()}` }, ks = qS;
function Oc(e3) {
  if (typeof e3 != "object" || e3 === null) return false;
  let t = e3;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e3) === t || Object.getPrototypeOf(e3) === null;
}
function Dy(e3, t, r) {
  if (typeof e3 != "function") throw new Error(_t(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(_t(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(_t(1));
    return r(Dy)(e3, t);
  }
  let n = e3, i = t, s = /* @__PURE__ */ new Map(), a = s, o = 0, l = false;
  function u() {
    a === s && (a = /* @__PURE__ */ new Map(), s.forEach((p, y) => {
      a.set(y, p);
    }));
  }
  function c() {
    if (l) throw new Error(_t(3));
    return i;
  }
  function h(p) {
    if (typeof p != "function") throw new Error(_t(4));
    if (l) throw new Error(_t(5));
    let y = true;
    u();
    const b = o++;
    return a.set(b, p), function() {
      if (y) {
        if (l) throw new Error(_t(6));
        y = false, u(), a.delete(b), s = null;
      }
    };
  }
  function f(p) {
    if (!Oc(p)) throw new Error(_t(7));
    if (typeof p.type > "u") throw new Error(_t(8));
    if (typeof p.type != "string") throw new Error(_t(17));
    if (l) throw new Error(_t(9));
    try {
      l = true, i = n(i, p);
    } finally {
      l = false;
    }
    return (s = a).forEach((b) => {
      b();
    }), p;
  }
  function d(p) {
    if (typeof p != "function") throw new Error(_t(10));
    n = p, f({ type: ks.REPLACE });
  }
  function v() {
    const p = h;
    return { subscribe(y) {
      if (typeof y != "object" || y === null) throw new Error(_t(11));
      function b() {
        const x = y;
        x.next && x.next(c());
      }
      return b(), { unsubscribe: p(b) };
    }, [dd]() {
      return this;
    } };
  }
  return f({ type: ks.INIT }), { dispatch: f, subscribe: h, getState: c, replaceReducer: d, [dd]: v };
}
function KS(e3) {
  Object.keys(e3).forEach((t) => {
    const r = e3[t];
    if (typeof r(void 0, { type: ks.INIT }) > "u") throw new Error(_t(12));
    if (typeof r(void 0, { type: ks.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(_t(13));
  });
}
function Ly(e3) {
  const t = Object.keys(e3), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    typeof e3[a] == "function" && (r[a] = e3[a]);
  }
  const n = Object.keys(r);
  let i;
  try {
    KS(r);
  } catch (s) {
    i = s;
  }
  return function(a = {}, o) {
    if (i) throw i;
    let l = false;
    const u = {};
    for (let c = 0; c < n.length; c++) {
      const h = n[c], f = r[h], d = a[h], v = f(d, o);
      if (typeof v > "u") throw o && o.type, new Error(_t(14));
      u[h] = v, l = l || v !== d;
    }
    return l = l || n.length !== Object.keys(a).length, l ? u : a;
  };
}
function Is(...e3) {
  return e3.length === 0 ? (t) => t : e3.length === 1 ? e3[0] : e3.reduce((t, r) => (...n) => t(r(...n)));
}
function US(...e3) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let s = () => {
      throw new Error(_t(15));
    };
    const a = { getState: i.getState, dispatch: (l, ...u) => s(l, ...u) }, o = e3.map((l) => l(a));
    return s = Is(...o)(i.dispatch), { ...i, dispatch: s };
  };
}
function Ry(e3) {
  return Oc(e3) && "type" in e3 && typeof e3.type == "string";
}
var $y = Symbol.for("immer-nothing"), vd = Symbol.for("immer-draftable"), Bt = Symbol.for("immer-state");
function ve(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var Zt = Object, bn = Zt.getPrototypeOf, js = "constructor", ka = "prototype", _u = "configurable", Ts = "enumerable", bs = "writable", ui = "value", Ue = (e3) => !!e3 && !!e3[Bt];
function ge(e3) {
  var _a3;
  return e3 ? zy(e3) || ja(e3) || !!e3[vd] || !!((_a3 = e3[js]) == null ? void 0 : _a3[vd]) || Ta(e3) || Na(e3) : false;
}
var VS = Zt[ka][js].toString(), pd = /* @__PURE__ */ new WeakMap();
function zy(e3) {
  if (!e3 || !Mc(e3)) return false;
  const t = bn(e3);
  if (t === null || t === Zt[ka]) return true;
  const r = Zt.hasOwnProperty.call(t, js) && t[js];
  if (r === Object) return true;
  if (!on(r)) return false;
  let n = pd.get(r);
  return n === void 0 && (n = Function.toString.call(r), pd.set(r, n)), n === VS;
}
function Ia(e3, t, r = true) {
  ki(e3) === 0 ? (r ? Reflect.ownKeys(e3) : Zt.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function ki(e3) {
  const t = e3[Bt];
  return t ? t.type_ : ja(e3) ? 1 : Ta(e3) ? 2 : Na(e3) ? 3 : 0;
}
var md = (e3, t, r = ki(e3)) => r === 2 ? e3.has(t) : Zt[ka].hasOwnProperty.call(e3, t), Ou = (e3, t, r = ki(e3)) => r === 2 ? e3.get(t) : e3[t], Ns = (e3, t, r, n = ki(e3)) => {
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
};
function YS(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
var ja = Array.isArray, Ta = (e3) => e3 instanceof Map, Na = (e3) => e3 instanceof Set, Mc = (e3) => typeof e3 == "object", on = (e3) => typeof e3 == "function", xl = (e3) => typeof e3 == "boolean";
function HS(e3) {
  const t = +e3;
  return Number.isInteger(t) && String(t) === e3;
}
var Re = (e3) => e3.copy_ || e3.base_, Ec = (e3) => e3.modified_ ? e3.copy_ : e3.base_;
function Mu(e3, t) {
  if (Ta(e3)) return new Map(e3);
  if (Na(e3)) return new Set(e3);
  if (ja(e3)) return Array[ka].slice.call(e3);
  const r = zy(e3);
  if (t === true || t === "class_only" && !r) {
    const n = Zt.getOwnPropertyDescriptors(e3);
    delete n[Bt];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], o = n[a];
      o[bs] === false && (o[bs] = true, o[_u] = true), (o.get || o.set) && (n[a] = { [_u]: true, [bs]: true, [Ts]: o[Ts], [ui]: e3[a] });
    }
    return Zt.create(bn(e3), n);
  } else {
    const n = bn(e3);
    if (n !== null && r) return { ...e3 };
    const i = Zt.create(n);
    return Zt.assign(i, e3);
  }
}
function Ac(e3, t = false) {
  return Da(e3) || Ue(e3) || !ge(e3) || (ki(e3) > 1 && Zt.defineProperties(e3, { set: Ji, add: Ji, clear: Ji, delete: Ji }), Zt.freeze(e3), t && Ia(e3, (r, n) => {
    Ac(n, true);
  }, false)), e3;
}
function GS() {
  ve(2);
}
var Ji = { [ui]: GS };
function Da(e3) {
  return e3 === null || !Mc(e3) ? true : Zt.isFrozen(e3);
}
var Ds = "MapSet", Eu = "Patches", gd = "ArrayMethods", By = {};
function Lr(e3) {
  const t = By[e3];
  return t || ve(0, e3), t;
}
var yd = (e3) => !!By[e3], ci, Fy = () => ci, XS = (e3, t) => ({ drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: yd(Ds) ? Lr(Ds) : void 0, arrayMethodsPlugin_: yd(gd) ? Lr(gd) : void 0 });
function bd(e3, t) {
  t && (e3.patchPlugin_ = Lr(Eu), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function Au(e3) {
  Cu(e3), e3.drafts_.forEach(JS), e3.drafts_ = null;
}
function Cu(e3) {
  e3 === ci && (ci = e3.parent_);
}
var wd = (e3) => ci = XS(ci, e3);
function JS(e3) {
  const t = e3[Bt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function xd(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e3 !== void 0 && e3 !== r) {
    r[Bt].modified_ && (Au(t), ve(4)), ge(e3) && (e3 = Pd(t, e3));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(r[Bt].base_, e3, t);
  } else e3 = Pd(t, r);
  return ZS(t, e3, true), Au(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== $y ? e3 : void 0;
}
function Pd(e3, t) {
  if (Da(t)) return t;
  const r = t[Bt];
  if (!r) return Ls(t, e3.handledSet_, e3);
  if (!La(r, e3)) return t;
  if (!r.modified_) return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n) for (; n.length > 0; ) n.pop()(e3);
    Ky(r, e3);
  }
  return r.copy_;
}
function ZS(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && Ac(t, r);
}
function Wy(e3) {
  e3.finalized_ = true, e3.scope_.unfinalizedDrafts_--;
}
var La = (e3, t) => e3.scope_ === t, QS = [];
function qy(e3, t, r, n) {
  const i = Re(e3), s = e3.type_;
  if (n !== void 0 && Ou(i, n, s) === t) {
    Ns(i, n, r, s);
    return;
  }
  if (!e3.draftLocations_) {
    const o = e3.draftLocations_ = /* @__PURE__ */ new Map();
    Ia(i, (l, u) => {
      if (Ue(u)) {
        const c = o.get(u) || [];
        c.push(l), o.set(u, c);
      }
    });
  }
  const a = e3.draftLocations_.get(t) ?? QS;
  for (const o of a) Ns(i, o, r, s);
}
function t_(e3, t, r) {
  e3.callbacks_.push(function(i) {
    var _a3;
    const s = t;
    if (!s || !La(s, i)) return;
    (_a3 = i.mapSetPlugin_) == null ? void 0 : _a3.fixSetContents(s);
    const a = Ec(s);
    qy(e3, s.draft_ ?? s, a, r), Ky(s, i);
  });
}
function Ky(e3, t) {
  var _a3;
  if (e3.modified_ && !e3.finalized_ && (e3.type_ === 3 || e3.type_ === 1 && e3.allIndicesReassigned_ || (((_a3 = e3.assigned_) == null ? void 0 : _a3.size) ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e3);
      i && n.generatePatches_(e3, i, t);
    }
    Wy(e3);
  }
}
function e_(e3, t, r) {
  const { scope_: n } = e3;
  if (Ue(r)) {
    const i = r[Bt];
    La(i, n) && i.callbacks_.push(function() {
      ws(e3);
      const a = Ec(i);
      qy(e3, r, a, t);
    });
  } else ge(r) && e3.callbacks_.push(function() {
    const s = Re(e3);
    e3.type_ === 3 ? s.has(r) && Ls(r, n.handledSet_, n) : Ou(s, t, e3.type_) === r && n.drafts_.length > 1 && (e3.assigned_.get(t) ?? false) === true && e3.copy_ && Ls(Ou(e3.copy_, t, e3.type_), n.handledSet_, n);
  });
}
function Ls(e3, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Ue(e3) || t.has(e3) || !ge(e3) || Da(e3) || (t.add(e3), Ia(e3, (n, i) => {
    if (Ue(i)) {
      const s = i[Bt];
      if (La(s, r)) {
        const a = Ec(s);
        Ns(e3, n, a, e3.type_), Wy(s);
      }
    } else ge(i) && Ls(i, t, r);
  })), e3;
}
function r_(e3, t) {
  const r = ja(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : Fy(), modified_: false, finalized_: false, assigned_: void 0, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 };
  let i = n, s = Rs;
  r && (i = [n], s = hi);
  const { revoke: a, proxy: o } = Proxy.revocable(i, s);
  return n.draft_ = o, n.revoke_ = a, [o, n];
}
var Rs = { get(e3, t) {
  if (t === Bt) return e3;
  let r = e3.scope_.arrayMethodsPlugin_;
  const n = e3.type_ === 1 && typeof t == "string";
  if (n && (r == null ? void 0 : r.isArrayOperationMethod(t))) return r.createMethodInterceptor(e3, t);
  const i = Re(e3);
  if (!md(i, t, e3.type_)) return n_(e3, i, t);
  const s = i[t];
  if (e3.finalized_ || !ge(s) || n && e3.operationMethod && (r == null ? void 0 : r.isMutatingArrayMethod(e3.operationMethod)) && HS(t)) return s;
  if (s === Pl(e3.base_, t)) {
    ws(e3);
    const a = e3.type_ === 1 ? +t : t, o = Iu(e3.scope_, s, e3, a);
    return e3.copy_[a] = o;
  }
  return s;
}, has(e3, t) {
  return t in Re(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys(Re(e3));
}, set(e3, t, r) {
  const n = Uy(Re(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = Pl(Re(e3), t), s = i == null ? void 0 : i[Bt];
    if (s && s.base_ === r) return e3.copy_[t] = r, e3.assigned_.set(t, false), true;
    if (YS(r, i) && (r !== void 0 || md(e3.base_, t, e3.type_))) return true;
    ws(e3), ku(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_.set(t, true), e_(e3, t, r)), true;
}, deleteProperty(e3, t) {
  return ws(e3), Pl(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_.set(t, false), ku(e3)) : e3.assigned_.delete(t), e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = Re(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { [bs]: true, [_u]: e3.type_ !== 1 || t !== "length", [Ts]: n[Ts], [ui]: r[t] };
}, defineProperty() {
  ve(11);
}, getPrototypeOf(e3) {
  return bn(e3.base_);
}, setPrototypeOf() {
  ve(12);
} }, hi = {};
for (let e3 in Rs) {
  let t = Rs[e3];
  hi[e3] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
hi.deleteProperty = function(e3, t) {
  return hi.set.call(this, e3, t, void 0);
};
hi.set = function(e3, t, r) {
  return Rs.set.call(this, e3[0], t, r, e3[0]);
};
function Pl(e3, t) {
  const r = e3[Bt];
  return (r ? Re(r) : e3)[t];
}
function n_(e3, t, r) {
  var _a3;
  const n = Uy(t, r);
  return n ? ui in n ? n[ui] : (_a3 = n.get) == null ? void 0 : _a3.call(e3.draft_) : void 0;
}
function Uy(e3, t) {
  if (!(t in e3)) return;
  let r = bn(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = bn(r);
  }
}
function ku(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && ku(e3.parent_));
}
function ws(e3) {
  e3.copy_ || (e3.assigned_ = /* @__PURE__ */ new Map(), e3.copy_ = Mu(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var i_ = class {
  constructor(t) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (r, n, i) => {
      if (on(r) && !on(n)) {
        const a = n;
        n = r;
        const o = this;
        return function(u = a, ...c) {
          return o.produce(u, (h) => n.call(this, h, ...c));
        };
      }
      on(n) || ve(6), i !== void 0 && !on(i) && ve(7);
      let s;
      if (ge(r)) {
        const a = wd(this), o = Iu(a, r, void 0);
        let l = true;
        try {
          s = n(o), l = false;
        } finally {
          l ? Au(a) : Cu(a);
        }
        return bd(a, i), xd(s, a);
      } else if (!r || !Mc(r)) {
        if (s = n(r), s === void 0 && (s = r), s === $y && (s = void 0), this.autoFreeze_ && Ac(s, true), i) {
          const a = [], o = [];
          Lr(Eu).generateReplacementPatches_(r, s, { patches_: a, inversePatches_: o }), i(a, o);
        }
        return s;
      } else ve(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (on(r)) return (o, ...l) => this.produceWithPatches(o, (u) => r(u, ...l));
      let i, s;
      return [this.produce(r, n, (o, l) => {
        i = o, s = l;
      }), i, s];
    }, xl(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), xl(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), xl(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    ge(t) || ve(8), Ue(t) && (t = le(t));
    const r = wd(this), n = Iu(r, t, void 0);
    return n[Bt].isManual_ = true, Cu(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[Bt];
    (!n || !n.isManual_) && ve(9);
    const { scope_: i } = n;
    return bd(i, r), xd(void 0, i);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const s = r[n];
      if (s.path.length === 0 && s.op === "replace") {
        t = s.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = Lr(Eu).applyPatches_;
    return Ue(t) ? i(t, r) : this.produce(t, (s) => i(s, r));
  }
};
function Iu(e3, t, r, n) {
  const [i, s] = Ta(t) ? Lr(Ds).proxyMap_(t, r) : Na(t) ? Lr(Ds).proxySet_(t, r) : r_(t, r);
  return ((r == null ? void 0 : r.scope_) ?? Fy()).drafts_.push(i), s.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], s.key_ = n, r && n !== void 0 ? t_(r, s, n) : s.callbacks_.push(function(l) {
    var _a3;
    (_a3 = l.mapSetPlugin_) == null ? void 0 : _a3.fixSetContents(s);
    const { patchPlugin_: u } = l;
    s.modified_ && u && u.generatePatches_(s, [], l);
  }), i;
}
function le(e3) {
  return Ue(e3) || ve(10, e3), Vy(e3);
}
function Vy(e3) {
  if (!ge(e3) || Da(e3)) return e3;
  const t = e3[Bt];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = Mu(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = Mu(e3, true);
  return Ia(r, (i, s) => {
    Ns(r, i, Vy(s));
  }, n), t && (t.finalized_ = false), r;
}
var s_ = new i_(), Yy = s_.produce;
function Hy(e3) {
  return ({ dispatch: r, getState: n }) => (i) => (s) => typeof s == "function" ? s(r, n, e3) : i(s);
}
var a_ = Hy(), o_ = Hy, l_ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? Is : Is.apply(null, arguments);
};
function re(e3, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Qt(0));
      return { type: e3, payload: i.payload, ..."meta" in i && { meta: i.meta }, ..."error" in i && { error: i.error } };
    }
    return { type: e3, payload: n[0] };
  }
  return r.toString = () => `${e3}`, r.type = e3, r.match = (n) => Ry(n) && n.type === e3, r;
}
var Gy = class Qn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Qn.prototype);
  }
  static get [Symbol.species]() {
    return Qn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Qn(...t[0].concat(this)) : new Qn(...t.concat(this));
  }
};
function Sd(e3) {
  return ge(e3) ? Yy(e3, () => {
  }) : e3;
}
function Zi(e3, t, r) {
  return e3.has(t) ? e3.get(t) : e3.set(t, r(t)).get(t);
}
function u_(e3) {
  return typeof e3 == "boolean";
}
var c_ = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: i = true, actionCreatorCheck: s = true } = t ?? {};
  let a = new Gy();
  return r && (u_(r) ? a.push(a_) : a.push(o_(r.extraArgument))), a;
}, Xy = "RTK_autoBatch", nt = () => (e3) => ({ payload: e3, meta: { [Xy]: true } }), _d = (e3) => (t) => {
  setTimeout(t, e3);
}, h_ = (e3, t) => (r) => {
  let n = false;
  const i = () => {
    n || (n = true, cancelAnimationFrame(s), clearTimeout(a), r());
  }, s = e3(i), a = setTimeout(i, t);
}, Jy = (e3 = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let i = true, s = false, a = false;
  const o = /* @__PURE__ */ new Set(), l = e3.type === "tick" ? queueMicrotask : e3.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? h_(window.requestAnimationFrame, 100) : _d(10) : e3.type === "callback" ? e3.queueNotification : _d(e3.timeout), u = () => {
    a = false, s && (s = false, o.forEach((c) => c()));
  };
  return Object.assign({}, n, { subscribe(c) {
    const h = () => i && c(), f = n.subscribe(h);
    return o.add(c), () => {
      f(), o.delete(c);
    };
  }, dispatch(c) {
    var _a3;
    try {
      return i = !((_a3 = c == null ? void 0 : c.meta) == null ? void 0 : _a3[Xy]), s = !i, s && (a || (a = true, l(u))), n.dispatch(c);
    } finally {
      i = true;
    }
  } });
}, f_ = (e3) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let i = new Gy(e3);
  return n && i.push(Jy(typeof n == "object" ? n : void 0)), i;
};
function d_(e3) {
  const t = c_(), { reducer: r = void 0, middleware: n, devTools: i = true, preloadedState: s = void 0, enhancers: a = void 0 } = e3 || {};
  let o;
  if (typeof r == "function") o = r;
  else if (Oc(r)) o = Ly(r);
  else throw new Error(Qt(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let u = Is;
  i && (u = l_({ trace: false, ...typeof i == "object" && i }));
  const c = US(...l), h = f_(c);
  let f = typeof a == "function" ? a(h) : h();
  const d = u(...f);
  return Dy(o, s, d);
}
function Zy(e3) {
  const t = {}, r = [];
  let n;
  const i = { addCase(s, a) {
    const o = typeof s == "string" ? s : s.type;
    if (!o) throw new Error(Qt(28));
    if (o in t) throw new Error(Qt(29));
    return t[o] = a, i;
  }, addAsyncThunk(s, a) {
    return a.pending && (t[s.pending.type] = a.pending), a.rejected && (t[s.rejected.type] = a.rejected), a.fulfilled && (t[s.fulfilled.type] = a.fulfilled), a.settled && r.push({ matcher: s.settled, reducer: a.settled }), i;
  }, addMatcher(s, a) {
    return r.push({ matcher: s, reducer: a }), i;
  }, addDefaultCase(s) {
    return n = s, i;
  } };
  return e3(i), [t, r, n];
}
function v_(e3) {
  return typeof e3 == "function";
}
function p_(e3, t) {
  let [r, n, i] = Zy(t), s;
  if (v_(e3)) s = () => Sd(e3());
  else {
    const o = Sd(e3);
    s = () => o;
  }
  function a(o = s(), l) {
    let u = [r[l.type], ...n.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)];
    return u.filter((c) => !!c).length === 0 && (u = [i]), u.reduce((c, h) => {
      if (h) if (Ue(c)) {
        const d = h(c, l);
        return d === void 0 ? c : d;
      } else {
        if (ge(c)) return Yy(c, (f) => h(f, l));
        {
          const f = h(c, l);
          if (f === void 0) {
            if (c === null) return c;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return f;
        }
      }
      return c;
    }, o);
  }
  return a.getInitialState = s, a;
}
var m_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", g_ = (e3 = 21) => {
  let t = "", r = e3;
  for (; r--; ) t += m_[Math.random() * 64 | 0];
  return t;
}, y_ = Symbol.for("rtk-slice-createasyncthunk");
function b_(e3, t) {
  return `${e3}/${t}`;
}
function w_({ creators: e3 } = {}) {
  var _a3;
  const t = (_a3 = e3 == null ? void 0 : e3.asyncThunk) == null ? void 0 : _a3[y_];
  return function(n) {
    const { name: i, reducerPath: s = i } = n;
    if (!i) throw new Error(Qt(11));
    const a = (typeof n.reducers == "function" ? n.reducers(P_()) : n.reducers) || {}, o = Object.keys(a), l = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, u = { addCase(w, x) {
      const P = typeof w == "string" ? w : w.type;
      if (!P) throw new Error(Qt(12));
      if (P in l.sliceCaseReducersByType) throw new Error(Qt(13));
      return l.sliceCaseReducersByType[P] = x, u;
    }, addMatcher(w, x) {
      return l.sliceMatchers.push({ matcher: w, reducer: x }), u;
    }, exposeAction(w, x) {
      return l.actionCreators[w] = x, u;
    }, exposeCaseReducer(w, x) {
      return l.sliceCaseReducersByName[w] = x, u;
    } };
    o.forEach((w) => {
      const x = a[w], P = { reducerName: w, type: b_(i, w), createNotation: typeof n.reducers == "function" };
      __(x) ? M_(P, x, u, t) : S_(P, x, u);
    });
    function c() {
      const [w = {}, x = [], P = void 0] = typeof n.extraReducers == "function" ? Zy(n.extraReducers) : [n.extraReducers], S = { ...w, ...l.sliceCaseReducersByType };
      return p_(n.initialState, (_) => {
        for (let M in S) _.addCase(M, S[M]);
        for (let M of l.sliceMatchers) _.addMatcher(M.matcher, M.reducer);
        for (let M of x) _.addMatcher(M.matcher, M.reducer);
        P && _.addDefaultCase(P);
      });
    }
    const h = (w) => w, f = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap();
    let v;
    function m(w, x) {
      return v || (v = c()), v(w, x);
    }
    function p() {
      return v || (v = c()), v.getInitialState();
    }
    function y(w, x = false) {
      function P(_) {
        let M = _[w];
        return typeof M > "u" && x && (M = Zi(d, P, p)), M;
      }
      function S(_ = h) {
        const M = Zi(f, x, () => /* @__PURE__ */ new WeakMap());
        return Zi(M, _, () => {
          const A = {};
          for (const [j, k] of Object.entries(n.selectors ?? {})) A[j] = x_(k, _, () => Zi(d, _, p), x);
          return A;
        });
      }
      return { reducerPath: w, getSelectors: S, get selectors() {
        return S(P);
      }, selectSlice: P };
    }
    const b = { name: i, reducer: m, actions: l.actionCreators, caseReducers: l.sliceCaseReducersByName, getInitialState: p, ...y(s), injectInto(w, { reducerPath: x, ...P } = {}) {
      const S = x ?? s;
      return w.inject({ reducerPath: S, reducer: m }, P), { ...b, ...y(S, true) };
    } };
    return b;
  };
}
function x_(e3, t, r, n) {
  function i(s, ...a) {
    let o = t(s);
    return typeof o > "u" && n && (o = r()), e3(o, ...a);
  }
  return i.unwrapped = e3, i;
}
var Dt = w_();
function P_() {
  function e3(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return e3.withTypes = () => e3, { reducer(t) {
    return Object.assign({ [t.name](...r) {
      return t(...r);
    } }[t.name], { _reducerDefinitionType: "reducer" });
  }, preparedReducer(t, r) {
    return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: r };
  }, asyncThunk: e3 };
}
function S_({ type: e3, reducerName: t, createNotation: r }, n, i) {
  let s, a;
  if ("reducer" in n) {
    if (r && !O_(n)) throw new Error(Qt(17));
    s = n.reducer, a = n.prepare;
  } else s = n;
  i.addCase(e3, s).exposeCaseReducer(t, s).exposeAction(t, a ? re(e3, a) : re(e3));
}
function __(e3) {
  return e3._reducerDefinitionType === "asyncThunk";
}
function O_(e3) {
  return e3._reducerDefinitionType === "reducerWithPrepare";
}
function M_({ type: e3, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Qt(18));
  const { payloadCreator: s, fulfilled: a, pending: o, rejected: l, settled: u, options: c } = r, h = i(e3, s, c);
  n.exposeAction(t, h), a && n.addCase(h.fulfilled, a), o && n.addCase(h.pending, o), l && n.addCase(h.rejected, l), u && n.addMatcher(h.settled, u), n.exposeCaseReducer(t, { fulfilled: a || Qi, pending: o || Qi, rejected: l || Qi, settled: u || Qi });
}
function Qi() {
}
var E_ = "task", Qy = "listener", t0 = "completed", Cc = "cancelled", A_ = `task-${Cc}`, C_ = `task-${t0}`, ju = `${Qy}-${Cc}`, k_ = `${Qy}-${t0}`, Ra = class {
  constructor(e3) {
    __publicField(this, "code");
    __publicField(this, "name", "TaskAbortError");
    __publicField(this, "message");
    this.code = e3, this.message = `${E_} ${Cc} (reason: ${e3})`;
  }
}, kc = (e3, t) => {
  if (typeof e3 != "function") throw new TypeError(Qt(32));
}, $s = () => {
}, e0 = (e3, t = $s) => (e3.catch(t), e3), r0 = (e3, t) => (e3.addEventListener("abort", t, { once: true }), () => e3.removeEventListener("abort", t)), Cr = (e3) => {
  if (e3.aborted) throw new Ra(e3.reason);
};
function n0(e3, t) {
  let r = $s;
  return new Promise((n, i) => {
    const s = () => i(new Ra(e3.reason));
    if (e3.aborted) {
      s();
      return;
    }
    r = r0(e3, s), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = $s;
  });
}
var I_ = async (e3, t) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e3() };
  } catch (r) {
    return { status: r instanceof Ra ? "cancelled" : "rejected", error: r };
  } finally {
    t == null ? void 0 : t();
  }
}, zs = (e3) => (t) => e0(n0(e3, t).then((r) => (Cr(e3), r))), i0 = (e3) => {
  const t = zs(e3);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, { assign: dn } = Object, Od = {}, $a = "listenerMiddleware", j_ = (e3, t) => {
  const r = (n) => r0(e3, () => n.abort(e3.reason));
  return (n, i) => {
    kc(n);
    const s = new AbortController();
    r(s);
    const a = I_(async () => {
      Cr(e3), Cr(s.signal);
      const o = await n({ pause: zs(s.signal), delay: i0(s.signal), signal: s.signal });
      return Cr(s.signal), o;
    }, () => s.abort(C_));
    return (i == null ? void 0 : i.autoJoin) && t.push(a.catch($s)), { result: zs(e3)(a), cancel() {
      s.abort(A_);
    } };
  };
}, T_ = (e3, t) => {
  const r = async (n, i) => {
    Cr(t);
    let s = () => {
    };
    const o = [new Promise((l, u) => {
      let c = e3({ predicate: n, effect: (h, f) => {
        f.unsubscribe(), l([h, f.getState(), f.getOriginalState()]);
      } });
      s = () => {
        c(), u();
      };
    })];
    i != null && o.push(new Promise((l) => setTimeout(l, i, null)));
    try {
      const l = await n0(t, Promise.race(o));
      return Cr(t), l;
    } finally {
      s();
    }
  };
  return ((n, i) => e0(r(n, i)));
}, s0 = (e3) => {
  let { type: t, actionCreator: r, matcher: n, predicate: i, effect: s } = e3;
  if (t) i = re(t).match;
  else if (r) t = r.type, i = r.match;
  else if (n) i = n;
  else if (!i) throw new Error(Qt(21));
  return kc(s), { predicate: i, type: t, effect: s };
}, a0 = dn((e3) => {
  const { type: t, predicate: r, effect: n } = s0(e3);
  return { id: g_(), effect: n, type: t, predicate: r, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(Qt(22));
  } };
}, { withTypes: () => a0 }), Md = (e3, t) => {
  const { type: r, effect: n, predicate: i } = s0(t);
  return Array.from(e3.values()).find((s) => (typeof r == "string" ? s.type === r : s.predicate === i) && s.effect === n);
}, Tu = (e3) => {
  e3.pending.forEach((t) => {
    t.abort(ju);
  });
}, N_ = (e3, t) => () => {
  for (const r of t.keys()) Tu(r);
  e3.clear();
}, Ed = (e3, t, r) => {
  try {
    e3(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, o0 = dn(re(`${$a}/add`), { withTypes: () => o0 }), D_ = re(`${$a}/removeAll`), l0 = dn(re(`${$a}/remove`), { withTypes: () => l0 }), L_ = (...e3) => {
  console.error(`${$a}/error`, ...e3);
}, Ii = (e3 = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (d) => {
    const v = r.get(d) ?? 0;
    r.set(d, v + 1);
  }, i = (d) => {
    const v = r.get(d) ?? 1;
    v === 1 ? r.delete(d) : r.set(d, v - 1);
  }, { extra: s, onError: a = L_ } = e3;
  kc(a);
  const o = (d) => (d.unsubscribe = () => t.delete(d.id), t.set(d.id, d), (v) => {
    d.unsubscribe(), (v == null ? void 0 : v.cancelActive) && Tu(d);
  }), l = ((d) => {
    const v = Md(t, d) ?? a0(d);
    return o(v);
  });
  dn(l, { withTypes: () => l });
  const u = (d) => {
    const v = Md(t, d);
    return v && (v.unsubscribe(), d.cancelActive && Tu(v)), !!v;
  };
  dn(u, { withTypes: () => u });
  const c = async (d, v, m, p) => {
    const y = new AbortController(), b = T_(l, y.signal), w = [];
    try {
      d.pending.add(y), n(d), await Promise.resolve(d.effect(v, dn({}, m, { getOriginalState: p, condition: (x, P) => b(x, P).then(Boolean), take: b, delay: i0(y.signal), pause: zs(y.signal), extra: s, signal: y.signal, fork: j_(y.signal, w), unsubscribe: d.unsubscribe, subscribe: () => {
        t.set(d.id, d);
      }, cancelActiveListeners: () => {
        d.pending.forEach((x, P, S) => {
          x !== y && (x.abort(ju), S.delete(x));
        });
      }, cancel: () => {
        y.abort(ju), d.pending.delete(y);
      }, throwIfCancelled: () => {
        Cr(y.signal);
      } })));
    } catch (x) {
      x instanceof Ra || Ed(a, x, { raisedBy: "effect" });
    } finally {
      await Promise.all(w), y.abort(k_), i(d), d.pending.delete(y);
    }
  }, h = N_(t, r);
  return { middleware: (d) => (v) => (m) => {
    if (!Ry(m)) return v(m);
    if (o0.match(m)) return l(m.payload);
    if (D_.match(m)) {
      h();
      return;
    }
    if (l0.match(m)) return u(m.payload);
    let p = d.getState();
    const y = () => {
      if (p === Od) throw new Error(Qt(23));
      return p;
    };
    let b;
    try {
      if (b = v(m), t.size > 0) {
        const w = d.getState(), x = Array.from(t.values());
        for (const P of x) {
          let S = false;
          try {
            S = P.predicate(m, w, p);
          } catch (_) {
            S = false, Ed(a, _, { raisedBy: "predicate" });
          }
          S && c(P, m, d, y);
        }
      }
    } finally {
      p = Od;
    }
    return b;
  }, startListening: l, stopListening: u, clearListeners: h };
};
function Qt(e3) {
  return `Minified Redux Toolkit error #${e3}; visit https://redux-toolkit.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var R_ = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 }, u0 = Dt({ name: "chartLayout", initialState: R_, reducers: { setLayout(e3, t) {
  e3.layoutType = t.payload;
}, setChartSize(e3, t) {
  e3.width = t.payload.width, e3.height = t.payload.height;
}, setMargin(e3, t) {
  var r, n, i, s;
  e3.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e3.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e3.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e3.margin.left = (s = t.payload.left) !== null && s !== void 0 ? s : 0;
}, setScale(e3, t) {
  e3.scale = t.payload;
} } }), { setMargin: $_, setLayout: z_, setChartSize: B_, setScale: F_ } = u0.actions, W_ = u0.reducer;
function c0(e3, t, r) {
  return Array.isArray(e3) && e3 && t + r !== 0 ? e3.slice(t, r + 1) : e3;
}
function q(e3) {
  return Number.isFinite(e3);
}
function je(e3) {
  return typeof e3 == "number" && e3 > 0 && Number.isFinite(e3);
}
function Ad(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ln(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), true).forEach(function(n) {
      q_(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function q_(e3, t, r) {
  return (t = K_(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function K_(e3) {
  var t = U_(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function U_(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function ht(e3, t, r) {
  return gt(e3) || gt(t) ? r : Ie(t) ? Aa(e3, t, r) : typeof t == "function" ? t(e3) : r;
}
var V_ = (e3, t, r) => {
  if (t && r) {
    var { width: n, height: i } = r, { align: s, verticalAlign: a, layout: o } = t;
    if ((o === "vertical" || o === "horizontal" && a === "middle") && s !== "center" && L(e3[s])) return ln(ln({}, e3), {}, { [s]: e3[s] + (n || 0) });
    if ((o === "horizontal" || o === "vertical" && s === "center") && a !== "middle" && L(e3[a])) return ln(ln({}, e3), {}, { [a]: e3[a] + (i || 0) });
  }
  return e3;
}, be = (e3, t) => e3 === "horizontal" && t === "xAxis" || e3 === "vertical" && t === "yAxis" || e3 === "centric" && t === "angleAxis" || e3 === "radial" && t === "radiusAxis", h0 = (e3, t, r, n) => {
  if (n) return e3.map((o) => o.coordinate);
  var i, s, a = e3.map((o) => (o.coordinate === t && (i = true), o.coordinate === r && (s = true), o.coordinate));
  return i || a.push(t), s || a.push(r), a;
}, f0 = (e3, t, r) => {
  if (!e3) return null;
  var { duplicateDomain: n, type: i, range: s, scale: a, realScaleType: o, isCategorical: l, categoricalDomain: u, tickCount: c, ticks: h, niceTicks: f, axisType: d } = e3;
  if (!a) return null;
  var v = o === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, m = i === "category" && a.bandwidth ? a.bandwidth() / v : 0;
  if (m = d === "angleAxis" && s && s.length >= 2 ? oe(s[0] - s[1]) * 2 * m : m, h || f) {
    var p = (h || f || []).map((y, b) => {
      var w = n ? n.indexOf(y) : y, x = a.map(w);
      return q(x) ? { coordinate: x + m, value: y, offset: m, index: b } : null;
    }).filter(Vt);
    return p;
  }
  return l && u ? u.map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: y, index: b, offset: m } : null;
  }).filter(Vt) : a.ticks && c != null ? a.ticks(c).map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: y, index: b, offset: m } : null;
  }).filter(Vt) : a.domain().map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: n ? n[y] : y, index: b, offset: m } : null;
  }).filter(Vt);
}, Y_ = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var s = 0, a = 0, o = 0; o < r; ++o) {
      var l = e3[o], u = l == null ? void 0 : l[i];
      if (u != null) {
        var c = u[1], h = u[0], f = ke(c) ? h : c;
        f >= 0 ? (u[0] = s, s += f, u[1] = s) : (u[0] = a, a += f, u[1] = a);
      }
    }
  }
}, H_ = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var s = 0, a = 0; a < r; ++a) {
      var o = e3[a], l = o == null ? void 0 : o[i];
      if (l != null) {
        var u = ke(l[1]) ? l[0] : l[1];
        u >= 0 ? (l[0] = s, s += u, l[1] = s) : (l[0] = 0, l[1] = 0);
      }
    }
  }
}, G_ = { sign: Y_, expand: SP, none: Nr, silhouette: _P, wiggle: OP, positive: H_ }, X_ = (e3, t, r) => {
  var n, i = (n = G_[r]) !== null && n !== void 0 ? n : Nr, s = PP().keys(t).value((o, l) => Number(ht(o, l, 0))).order(Pu).offset(i), a = s(e3);
  return a.forEach((o, l) => {
    o.forEach((u, c) => {
      var h = ht(e3[c], t[l], 0);
      Array.isArray(h) && h.length === 2 && L(h[0]) && L(h[1]) && (u[0] = h[0], u[1] = h[1]);
    });
  }), a;
};
function J_(e3) {
  return e3 == null ? void 0 : String(e3);
}
function Bs(e3) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: s, dataKey: a } = e3;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !gt(i[t.dataKey])) {
      var o = gy(r, "value", i[t.dataKey]);
      if (o) return o.coordinate + n / 2;
    }
    return r != null && r[s] ? r[s].coordinate + n / 2 : null;
  }
  var l = ht(i, gt(a) ? t.dataKey : a), u = t.scale.map(l);
  return L(u) ? u : null;
}
var Z_ = (e3) => {
  var t = e3.flat(2).filter(L);
  return [Math.min(...t), Math.max(...t)];
}, Q_ = (e3) => [e3[0] === 1 / 0 ? 0 : e3[0], e3[1] === -1 / 0 ? 0 : e3[1]], tO = (e3, t, r) => {
  if (e3 != null) return Q_(Object.keys(e3).reduce((n, i) => {
    var s = e3[i];
    if (!s) return n;
    var { stackedData: a } = s, o = a.reduce((l, u) => {
      var c = c0(u, t, r), h = Z_(c);
      return !q(h[0]) || !q(h[1]) ? l : [Math.min(l[0], h[0]), Math.max(l[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
  }, [1 / 0, -1 / 0]));
}, Cd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, kd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wn = (e3, t, r) => {
  if (e3 && e3.scale && e3.scale.bandwidth) {
    var n = e3.scale.bandwidth();
    if (!r || n > 0) return n;
  }
  if (e3 && t && t.length >= 2) {
    for (var i = Ca(t, (c) => c.coordinate), s = 1 / 0, a = 1, o = i.length; a < o; a++) {
      var l = i[a], u = i[a - 1];
      s = Math.min(((l == null ? void 0 : l.coordinate) || 0) - ((u == null ? void 0 : u.coordinate) || 0), s);
    }
    return s === 1 / 0 ? 0 : s;
  }
  return r ? void 0 : 0;
};
function Id(e3) {
  var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: s } = e3;
  return ln(ln({}, t), {}, { dataKey: r, payload: n, value: i, name: s });
}
function za(e3, t) {
  if (e3) return String(e3);
  if (typeof t == "string") return t;
}
var eO = (e3, t) => {
  if (t === "horizontal") return e3.relativeX;
  if (t === "vertical") return e3.relativeY;
}, rO = (e3, t) => t === "centric" ? e3.angle : e3.radius, Ge = (e3) => e3.layout.width, Xe = (e3) => e3.layout.height, nO = (e3) => e3.layout.scale, d0 = (e3) => e3.layout.margin, Ba = O((e3) => e3.cartesianAxis.xAxis, (e3) => Object.values(e3)), Fa = O((e3) => e3.cartesianAxis.yAxis, (e3) => Object.values(e3)), iO = "data-recharts-item-index", sO = "data-recharts-item-id", ji = 60;
function jd(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ts(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jd(Object(r), true).forEach(function(n) {
      aO(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : jd(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function aO(e3, t, r) {
  return (t = oO(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function oO(e3) {
  var t = lO(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lO(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var uO = (e3) => e3.brush.height;
function cO(e3) {
  var t = Fa(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ji;
      return r + i;
    }
    return r;
  }, 0);
}
function hO(e3) {
  var t = Fa(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ji;
      return r + i;
    }
    return r;
  }, 0);
}
function fO(e3) {
  var t = Ba(e3);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function dO(e3) {
  var t = Ba(e3);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Ct = O([Ge, Xe, d0, uO, cO, hO, fO, dO, Ny, zS], (e3, t, r, n, i, s, a, o, l, u) => {
  var c = { left: (r.left || 0) + i, right: (r.right || 0) + s }, h = { top: (r.top || 0) + a, bottom: (r.bottom || 0) + o }, f = ts(ts({}, h), c), d = f.bottom;
  f.bottom += n, f = V_(f, l, u);
  var v = e3 - f.left - f.right, m = t - f.top - f.bottom;
  return ts(ts({ brushBottom: d }, f), {}, { width: Math.max(v, 0), height: Math.max(m, 0) });
}), vO = O(Ct, (e3) => ({ x: e3.left, y: e3.top, width: e3.width, height: e3.height })), v0 = O(Ge, Xe, (e3, t) => ({ x: 0, y: 0, width: e3, height: t })), pO = g.createContext(null), Lt = () => g.useContext(pO) != null, Wa = (e3) => e3.brush, qa = O([Wa, Ct, d0], (e3, t, r) => ({ height: e3.height, x: L(e3.x) ? e3.x : t.left, y: L(e3.y) ? e3.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0), width: L(e3.width) ? e3.width : t.width })), Sl = {}, _l = {}, Ol = {}, Td;
function mO() {
  if (Td) return Ol;
  Td = 1;
  function e3(t, r, { signal: n, edges: i } = {}) {
    let s, a = null;
    const o = i != null && i.includes("leading"), l = i == null || i.includes("trailing"), u = () => {
      a !== null && (t.apply(s, a), s = void 0, a = null);
    }, c = () => {
      l && u(), v();
    };
    let h = null;
    const f = () => {
      h != null && clearTimeout(h), h = setTimeout(() => {
        h = null, c();
      }, r);
    }, d = () => {
      h !== null && (clearTimeout(h), h = null);
    }, v = () => {
      d(), s = void 0, a = null;
    }, m = () => {
      u();
    }, p = function(...y) {
      if (n == null ? void 0 : n.aborted) return;
      s = this, a = y;
      const b = h == null;
      f(), o && b && u();
    };
    return p.schedule = f, p.cancel = v, p.flush = m, n == null ? void 0 : n.addEventListener("abort", v, { once: true }), p;
  }
  return Ol.debounce = e3, Ol;
}
var Nd;
function gO() {
  if (Nd) return _l;
  Nd = 1;
  const e3 = mO();
  function t(r, n = 0, i = {}) {
    typeof i != "object" && (i = {});
    const { leading: s = false, trailing: a = true, maxWait: o } = i, l = Array(2);
    s && (l[0] = "leading"), a && (l[1] = "trailing");
    let u, c = null;
    const h = e3.debounce(function(...v) {
      u = r.apply(this, v), c = null;
    }, n, { edges: l }), f = function(...v) {
      return o != null && (c === null && (c = Date.now()), Date.now() - c >= o) ? (u = r.apply(this, v), c = Date.now(), h.cancel(), h.schedule(), u) : (h.apply(this, v), u);
    }, d = () => (h.flush(), u);
    return f.cancel = h.cancel, f.flush = d, f;
  }
  return _l.debounce = t, _l;
}
var Dd;
function yO() {
  if (Dd) return Sl;
  Dd = 1;
  const e3 = gO();
  function t(r, n = 0, i = {}) {
    const { leading: s = true, trailing: a = true } = i;
    return e3.debounce(r, n, { leading: s, maxWait: n, trailing: a });
  }
  return Sl.throttle = t, Sl;
}
var Ml, Ld;
function bO() {
  return Ld || (Ld = 1, Ml = yO().throttle), Ml;
}
var wO = bO();
const xO = dr(wO);
var Fs = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) i[s - 2] = arguments[s];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t)) if (r === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var a = 0;
    console.warn(r.replace(/%s/g, () => i[a++]));
  }
}, Me = { width: "100%", height: "100%", debounce: 0, minWidth: 0, initialDimension: { width: -1, height: -1 } }, p0 = (e3, t, r) => {
  var { width: n = Me.width, height: i = Me.height, aspect: s, maxHeight: a } = r, o = Dr(n) ? e3 : Number(n), l = Dr(i) ? t : Number(i);
  return s && s > 0 && (o ? l = o / s : l && (o = l * s), a && l != null && l > a && (l = a)), { calculatedWidth: o, calculatedHeight: l };
}, PO = { width: 0, height: 0, overflow: "visible" }, SO = { width: 0, overflowX: "visible" }, _O = { height: 0, overflowY: "visible" }, OO = {}, MO = (e3) => {
  var { width: t, height: r } = e3, n = Dr(t), i = Dr(r);
  return n && i ? PO : n ? SO : i ? _O : OO;
};
function EO(e3) {
  var { width: t, height: r, aspect: n } = e3, i = t, s = r;
  return i === void 0 && s === void 0 ? (i = Me.width, s = Me.height) : i === void 0 ? i = n && n > 0 ? void 0 : Me.width : s === void 0 && (s = n && n > 0 ? void 0 : Me.height), { width: i, height: s };
}
function Nu() {
  return Nu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Nu.apply(null, arguments);
}
function Rd(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $d(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), true).forEach(function(n) {
      AO(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function AO(e3, t, r) {
  return (t = CO(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function CO(e3) {
  var t = kO(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kO(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var m0 = g.createContext(Me.initialDimension);
function IO(e3) {
  return je(e3.width) && je(e3.height);
}
function g0(e3) {
  var { children: t, width: r, height: n } = e3, i = g.useMemo(() => ({ width: r, height: n }), [r, n]);
  return IO(i) ? g.createElement(m0.Provider, { value: i }, t) : null;
}
var Ic = () => g.useContext(m0), jO = g.forwardRef((e3, t) => {
  var { aspect: r, initialDimension: n = Me.initialDimension, width: i, height: s, minWidth: a = Me.minWidth, minHeight: o, maxHeight: l, children: u, debounce: c = Me.debounce, id: h, className: f, onResize: d, style: v = {} } = e3, m = g.useRef(null), p = g.useRef();
  p.current = d, g.useImperativeHandle(t, () => m.current);
  var [y, b] = g.useState({ containerWidth: n.width, containerHeight: n.height }), w = g.useCallback((M, A) => {
    b((j) => {
      var k = Math.round(M), E = Math.round(A);
      return j.containerWidth === k && j.containerHeight === E ? j : { containerWidth: k, containerHeight: E };
    });
  }, []);
  g.useEffect(() => {
    if (m.current == null || typeof ResizeObserver > "u") return Vr;
    var M = (E) => {
      var $, R = E[0];
      if (R != null) {
        var { width: B, height: H } = R.contentRect;
        w(B, H), ($ = p.current) === null || $ === void 0 || $.call(p, B, H);
      }
    };
    c > 0 && (M = xO(M, c, { trailing: true, leading: false }));
    var A = new ResizeObserver(M), { width: j, height: k } = m.current.getBoundingClientRect();
    return w(j, k), A.observe(m.current), () => {
      A.disconnect();
    };
  }, [w, c]);
  var { containerWidth: x, containerHeight: P } = y;
  Fs(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var { calculatedWidth: S, calculatedHeight: _ } = p0(x, P, { width: i, height: s, aspect: r, maxHeight: l });
  return Fs(S != null && S > 0 || _ != null && _ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, S, _, i, s, a, o, r), g.createElement("div", { id: h ? "".concat(h) : void 0, className: J("recharts-responsive-container", f), style: $d($d({}, v), {}, { width: i, height: s, minWidth: a, minHeight: o, maxHeight: l }), ref: m }, g.createElement("div", { style: MO({ width: i, height: s }) }, g.createElement(g0, { width: S, height: _ }, u)));
}), _F = g.forwardRef((e3, t) => {
  var r = Ic();
  if (je(r.width) && je(r.height)) return e3.children;
  var { width: n, height: i } = EO({ width: e3.width, height: e3.height, aspect: e3.aspect }), { calculatedWidth: s, calculatedHeight: a } = p0(void 0, void 0, { width: n, height: i, aspect: e3.aspect, maxHeight: e3.maxHeight });
  return L(s) && L(a) ? g.createElement(g0, { width: s, height: a }, e3.children) : g.createElement(jO, Nu({}, e3, { width: n, height: i, ref: t }));
});
function jc(e3) {
  if (e3) return { x: e3.x, y: e3.y, upperWidth: "upperWidth" in e3 ? e3.upperWidth : e3.width, lowerWidth: "lowerWidth" in e3 ? e3.lowerWidth : e3.width, width: e3.width, height: e3.height };
}
var Ka = () => {
  var e3, t = Lt(), r = z(vO), n = z(qa), i = (e3 = z(Wa)) === null || e3 === void 0 ? void 0 : e3.padding;
  return !t || !n || !i ? r : { width: n.width - i.left - i.right, height: n.height - i.top - i.bottom, x: i.left, y: i.top };
}, TO = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 }, y0 = () => {
  var e3;
  return (e3 = z(Ct)) !== null && e3 !== void 0 ? e3 : TO;
}, b0 = () => z(Ge), w0 = () => z(Xe), rt = (e3) => e3.layout.layoutType, Yr = () => z(rt), Tc = () => {
  var e3 = Yr();
  if (e3 === "horizontal" || e3 === "vertical") return e3;
}, x0 = (e3) => {
  var t = e3.layout.layoutType;
  if (t === "centric" || t === "radial") return t;
}, NO = () => {
  var e3 = Yr();
  return e3 !== void 0;
}, Ti = (e3) => {
  var t = dt(), r = Lt(), { width: n, height: i } = e3, s = Ic(), a = n, o = i;
  return s && (a = s.width > 0 ? s.width : n, o = s.height > 0 ? s.height : i), g.useEffect(() => {
    !r && je(a) && je(o) && t(B_({ width: a, height: o }));
  }, [t, r, a, o]), null;
}, P0 = Symbol.for("immer-nothing"), zd = Symbol.for("immer-draftable"), ne = Symbol.for("immer-state");
function pe(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var fi = Object.getPrototypeOf;
function xn(e3) {
  return !!e3 && !!e3[ne];
}
function Rr(e3) {
  var _a3;
  return e3 ? S0(e3) || Array.isArray(e3) || !!e3[zd] || !!((_a3 = e3.constructor) == null ? void 0 : _a3[zd]) || Ni(e3) || Va(e3) : false;
}
var DO = Object.prototype.constructor.toString(), Bd = /* @__PURE__ */ new WeakMap();
function S0(e3) {
  if (!e3 || typeof e3 != "object") return false;
  const t = Object.getPrototypeOf(e3);
  if (t === null || t === Object.prototype) return true;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object) return true;
  if (typeof r != "function") return false;
  let n = Bd.get(r);
  return n === void 0 && (n = Function.toString.call(r), Bd.set(r, n)), n === DO;
}
function Ws(e3, t, r = true) {
  Ua(e3) === 0 ? (r ? Reflect.ownKeys(e3) : Object.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function Ua(e3) {
  const t = e3[ne];
  return t ? t.type_ : Array.isArray(e3) ? 1 : Ni(e3) ? 2 : Va(e3) ? 3 : 0;
}
function Du(e3, t) {
  return Ua(e3) === 2 ? e3.has(t) : Object.prototype.hasOwnProperty.call(e3, t);
}
function _0(e3, t, r) {
  const n = Ua(e3);
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
}
function LO(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function Ni(e3) {
  return e3 instanceof Map;
}
function Va(e3) {
  return e3 instanceof Set;
}
function Sr(e3) {
  return e3.copy_ || e3.base_;
}
function Lu(e3, t) {
  if (Ni(e3)) return new Map(e3);
  if (Va(e3)) return new Set(e3);
  if (Array.isArray(e3)) return Array.prototype.slice.call(e3);
  const r = S0(e3);
  if (t === true || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e3);
    delete n[ne];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], o = n[a];
      o.writable === false && (o.writable = true, o.configurable = true), (o.get || o.set) && (n[a] = { configurable: true, writable: true, enumerable: o.enumerable, value: e3[a] });
    }
    return Object.create(fi(e3), n);
  } else {
    const n = fi(e3);
    if (n !== null && r) return { ...e3 };
    const i = Object.create(n);
    return Object.assign(i, e3);
  }
}
function Nc(e3, t = false) {
  return Ya(e3) || xn(e3) || !Rr(e3) || (Ua(e3) > 1 && Object.defineProperties(e3, { set: es, add: es, clear: es, delete: es }), Object.freeze(e3), t && Object.values(e3).forEach((r) => Nc(r, true))), e3;
}
function RO() {
  pe(2);
}
var es = { value: RO };
function Ya(e3) {
  return e3 === null || typeof e3 != "object" ? true : Object.isFrozen(e3);
}
var $O = {};
function $r(e3) {
  const t = $O[e3];
  return t || pe(0, e3), t;
}
var di;
function O0() {
  return di;
}
function zO(e3, t) {
  return { drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function Fd(e3, t) {
  t && ($r("Patches"), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function Ru(e3) {
  $u(e3), e3.drafts_.forEach(BO), e3.drafts_ = null;
}
function $u(e3) {
  e3 === di && (di = e3.parent_);
}
function Wd(e3) {
  return di = zO(di, e3);
}
function BO(e3) {
  const t = e3[ne];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function qd(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e3 !== void 0 && e3 !== r ? (r[ne].modified_ && (Ru(t), pe(4)), Rr(e3) && (e3 = qs(t, e3), t.parent_ || Ks(t, e3)), t.patches_ && $r("Patches").generateReplacementPatches_(r[ne].base_, e3, t.patches_, t.inversePatches_)) : e3 = qs(t, r, []), Ru(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== P0 ? e3 : void 0;
}
function qs(e3, t, r) {
  if (Ya(t)) return t;
  const n = e3.immer_.shouldUseStrictIteration(), i = t[ne];
  if (!i) return Ws(t, (s, a) => Kd(e3, i, t, s, a, r), n), t;
  if (i.scope_ !== e3) return t;
  if (!i.modified_) return Ks(e3, i.base_, true), i.base_;
  if (!i.finalized_) {
    i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
    const s = i.copy_;
    let a = s, o = false;
    i.type_ === 3 && (a = new Set(s), s.clear(), o = true), Ws(a, (l, u) => Kd(e3, i, s, l, u, r, o), n), Ks(e3, s, false), r && e3.patches_ && $r("Patches").generatePatches_(i, r, e3.patches_, e3.inversePatches_);
  }
  return i.copy_;
}
function Kd(e3, t, r, n, i, s, a) {
  if (i == null || typeof i != "object" && !a) return;
  const o = Ya(i);
  if (!(o && !a)) {
    if (xn(i)) {
      const l = s && t && t.type_ !== 3 && !Du(t.assigned_, n) ? s.concat(n) : void 0, u = qs(e3, i, l);
      if (_0(r, n, u), xn(u)) e3.canAutoFreeze_ = false;
      else return;
    } else a && r.add(i);
    if (Rr(i) && !o) {
      if (!e3.immer_.autoFreeze_ && e3.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && o) return;
      qs(e3, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Ni(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Ks(e3, i);
    }
  }
}
function Ks(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && Nc(t, r);
}
function FO(e3, t) {
  const r = Array.isArray(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : O0(), modified_: false, finalized_: false, assigned_: {}, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false };
  let i = n, s = Dc;
  r && (i = [n], s = vi);
  const { revoke: a, proxy: o } = Proxy.revocable(i, s);
  return n.draft_ = o, n.revoke_ = a, o;
}
var Dc = { get(e3, t) {
  if (t === ne) return e3;
  const r = Sr(e3);
  if (!Du(r, t)) return WO(e3, r, t);
  const n = r[t];
  return e3.finalized_ || !Rr(n) ? n : n === El(e3.base_, t) ? (Al(e3), e3.copy_[t] = Bu(n, e3)) : n;
}, has(e3, t) {
  return t in Sr(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys(Sr(e3));
}, set(e3, t, r) {
  const n = M0(Sr(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = El(Sr(e3), t), s = i == null ? void 0 : i[ne];
    if (s && s.base_ === r) return e3.copy_[t] = r, e3.assigned_[t] = false, true;
    if (LO(r, i) && (r !== void 0 || Du(e3.base_, t))) return true;
    Al(e3), zu(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_[t] = true), true;
}, deleteProperty(e3, t) {
  return El(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_[t] = false, Al(e3), zu(e3)) : delete e3.assigned_[t], e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = Sr(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e3.type_ !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty() {
  pe(11);
}, getPrototypeOf(e3) {
  return fi(e3.base_);
}, setPrototypeOf() {
  pe(12);
} }, vi = {};
Ws(Dc, (e3, t) => {
  vi[e3] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
vi.deleteProperty = function(e3, t) {
  return vi.set.call(this, e3, t, void 0);
};
vi.set = function(e3, t, r) {
  return Dc.set.call(this, e3[0], t, r, e3[0]);
};
function El(e3, t) {
  const r = e3[ne];
  return (r ? Sr(r) : e3)[t];
}
function WO(e3, t, r) {
  var _a3;
  const n = M0(t, r);
  return n ? "value" in n ? n.value : (_a3 = n.get) == null ? void 0 : _a3.call(e3.draft_) : void 0;
}
function M0(e3, t) {
  if (!(t in e3)) return;
  let r = fi(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = fi(r);
  }
}
function zu(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && zu(e3.parent_));
}
function Al(e3) {
  e3.copy_ || (e3.copy_ = Lu(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var qO = class {
  constructor(e3) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = true, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const s = r;
        r = t;
        const a = this;
        return function(l = s, ...u) {
          return a.produce(l, (c) => r.call(this, c, ...u));
        };
      }
      typeof r != "function" && pe(6), n !== void 0 && typeof n != "function" && pe(7);
      let i;
      if (Rr(t)) {
        const s = Wd(this), a = Bu(t, void 0);
        let o = true;
        try {
          i = r(a), o = false;
        } finally {
          o ? Ru(s) : $u(s);
        }
        return Fd(s, n), qd(i, s);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === P0 && (i = void 0), this.autoFreeze_ && Nc(i, true), n) {
          const s = [], a = [];
          $r("Patches").generateReplacementPatches_(t, i, s, a), n(s, a);
        }
        return i;
      } else pe(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function") return (a, ...o) => this.produceWithPatches(a, (l) => t(l, ...o));
      let n, i;
      return [this.produce(t, r, (a, o) => {
        n = a, i = o;
      }), n, i];
    }, typeof (e3 == null ? void 0 : e3.autoFreeze) == "boolean" && this.setAutoFreeze(e3.autoFreeze), typeof (e3 == null ? void 0 : e3.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e3.useStrictShallowCopy), typeof (e3 == null ? void 0 : e3.useStrictIteration) == "boolean" && this.setUseStrictIteration(e3.useStrictIteration);
  }
  createDraft(e3) {
    Rr(e3) || pe(8), xn(e3) && (e3 = KO(e3));
    const t = Wd(this), r = Bu(e3, void 0);
    return r[ne].isManual_ = true, $u(t), r;
  }
  finishDraft(e3, t) {
    const r = e3 && e3[ne];
    (!r || !r.isManual_) && pe(9);
    const { scope_: n } = r;
    return Fd(n, t), qd(void 0, n);
  }
  setAutoFreeze(e3) {
    this.autoFreeze_ = e3;
  }
  setUseStrictShallowCopy(e3) {
    this.useStrictShallowCopy_ = e3;
  }
  setUseStrictIteration(e3) {
    this.useStrictIteration_ = e3;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e3, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e3 = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = $r("Patches").applyPatches_;
    return xn(e3) ? n(e3, t) : this.produce(e3, (i) => n(i, t));
  }
};
function Bu(e3, t) {
  const r = Ni(e3) ? $r("MapSet").proxyMap_(e3, t) : Va(e3) ? $r("MapSet").proxySet_(e3, t) : FO(e3, t);
  return (t ? t.scope_ : O0()).drafts_.push(r), r;
}
function KO(e3) {
  return xn(e3) || pe(10, e3), E0(e3);
}
function E0(e3) {
  if (!Rr(e3) || Ya(e3)) return e3;
  const t = e3[ne];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = Lu(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = Lu(e3, true);
  return Ws(r, (i, s) => {
    _0(r, i, E0(s));
  }, n), t && (t.finalized_ = false), r;
}
var UO = new qO();
UO.produce;
var VO = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] }, A0 = Dt({ name: "legend", initialState: VO, reducers: { setLegendSize(e3, t) {
  e3.size.width = t.payload.width, e3.size.height = t.payload.height;
}, setLegendSettings(e3, t) {
  e3.settings.align = t.payload.align, e3.settings.layout = t.payload.layout, e3.settings.verticalAlign = t.payload.verticalAlign, e3.settings.itemSorter = t.payload.itemSorter;
}, addLegendPayload: { reducer(e3, t) {
  e3.payload.push(t.payload);
}, prepare: nt() }, replaceLegendPayload: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = le(e3).payload.indexOf(r);
  i > -1 && (e3.payload[i] = n);
}, prepare: nt() }, removeLegendPayload: { reducer(e3, t) {
  var r = le(e3).payload.indexOf(t.payload);
  r > -1 && e3.payload.splice(r, 1);
}, prepare: nt() } } }), { setLegendSize: OF, setLegendSettings: MF, addLegendPayload: YO, replaceLegendPayload: HO, removeLegendPayload: GO } = A0.actions, XO = A0.reducer, Cl = { exports: {} }, kl = {};
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ud;
function JO() {
  if (Ud) return kl;
  Ud = 1;
  var e3 = Sa();
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useSyncExternalStore, i = e3.useRef, s = e3.useEffect, a = e3.useMemo, o = e3.useDebugValue;
  return kl.useSyncExternalStoreWithSelector = function(l, u, c, h, f) {
    var d = i(null);
    if (d.current === null) {
      var v = { hasValue: false, value: null };
      d.current = v;
    } else v = d.current;
    d = a(function() {
      function p(P) {
        if (!y) {
          if (y = true, b = P, P = h(P), f !== void 0 && v.hasValue) {
            var S = v.value;
            if (f(S, P)) return w = S;
          }
          return w = P;
        }
        if (S = w, r(b, P)) return S;
        var _ = h(P);
        return f !== void 0 && f(S, _) ? (b = P, S) : (b = P, w = _);
      }
      var y = false, b, w, x = c === void 0 ? null : c;
      return [function() {
        return p(u());
      }, x === null ? void 0 : function() {
        return p(x());
      }];
    }, [u, c, h, f]);
    var m = n(l, d[0], d[1]);
    return s(function() {
      v.hasValue = true, v.value = m;
    }, [m]), o(m), m;
  }, kl;
}
var Vd;
function ZO() {
  return Vd || (Vd = 1, Cl.exports = JO()), Cl.exports;
}
ZO();
function QO(e3) {
  e3();
}
function tM() {
  let e3 = null, t = null;
  return { clear() {
    e3 = null, t = null;
  }, notify() {
    QO(() => {
      let r = e3;
      for (; r; ) r.callback(), r = r.next;
    });
  }, get() {
    const r = [];
    let n = e3;
    for (; n; ) r.push(n), n = n.next;
    return r;
  }, subscribe(r) {
    let n = true;
    const i = t = { callback: r, next: null, prev: t };
    return i.prev ? i.prev.next = i : e3 = i, function() {
      !n || e3 === null || (n = false, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e3 = i.next);
    };
  } };
}
var Yd = { notify() {
}, get: () => [] };
function eM(e3, t) {
  let r, n = Yd, i = 0, s = false;
  function a(m) {
    c();
    const p = n.subscribe(m);
    let y = false;
    return () => {
      y || (y = true, p(), h());
    };
  }
  function o() {
    n.notify();
  }
  function l() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return s;
  }
  function c() {
    i++, r || (r = e3.subscribe(l), n = tM());
  }
  function h() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Yd);
  }
  function f() {
    s || (s = true, c());
  }
  function d() {
    s && (s = false, h());
  }
  const v = { addNestedSub: a, notifyNestedSubs: o, handleChangeWrapper: l, isSubscribed: u, trySubscribe: f, tryUnsubscribe: d, getListeners: () => n };
  return v;
}
var rM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nM = rM(), iM = () => typeof navigator < "u" && navigator.product === "ReactNative", sM = iM(), aM = () => nM || sM ? g.useLayoutEffect : g.useEffect, oM = aM();
function Hd(e3, t) {
  return e3 === t ? e3 !== 0 || t !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function lM(e3, t) {
  if (Hd(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  const r = Object.keys(e3), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (let i = 0; i < r.length; i++) if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Hd(e3[r[i]], t[r[i]])) return false;
  return true;
}
var uM = Symbol.for("react-redux-context"), cM = typeof globalThis < "u" ? globalThis : {};
function hM() {
  if (!g.createContext) return {};
  const e3 = cM[uM] ?? (cM[uM] = /* @__PURE__ */ new Map());
  let t = e3.get(g.createContext);
  return t || (t = g.createContext(null), e3.set(g.createContext, t)), t;
}
var fM = hM();
function dM(e3) {
  const { children: t, context: r, serverState: n, store: i } = e3, s = g.useMemo(() => {
    const l = eM(i);
    return { store: i, subscription: l, getServerState: n ? () => n : void 0 };
  }, [i, n]), a = g.useMemo(() => i.getState(), [i]);
  oM(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const o = r || fM;
  return g.createElement(o.Provider, { value: s }, t);
}
var vM = dM, pM = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
function mM(e3, t) {
  return e3 == null && t == null ? true : typeof e3 == "number" && typeof t == "number" ? e3 === t || e3 !== e3 && t !== t : e3 === t;
}
function Di(e3, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e3), ...Object.keys(t)]);
  for (var n of r) if (pM.has(n)) {
    if (e3[n] == null && t[n] == null) continue;
    if (!lM(e3[n], t[n])) return false;
  } else if (!mM(e3[n], t[n])) return false;
  return true;
}
function Fu() {
  return Fu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Fu.apply(null, arguments);
}
function Gd(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gd(Object(r), true).forEach(function(n) {
      gM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Gd(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function gM(e3, t, r) {
  return (t = yM(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function yM(e3) {
  var t = bM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function wM(e3) {
  return Array.isArray(e3) && Ie(e3[0]) && Ie(e3[1]) ? e3.join(" ~ ") : e3;
}
var Jr = { separator: " : ", contentStyle: { margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, itemStyle: { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" }, labelStyle: {}, accessibilityLayer: false };
function xM(e3, t) {
  return t == null ? e3 : Ca(e3, t);
}
var PM = (e3) => {
  var { separator: t = Jr.separator, contentStyle: r, itemStyle: n, labelStyle: i = Jr.labelStyle, payload: s, formatter: a, itemSorter: o, wrapperClassName: l, labelClassName: u, label: c, labelFormatter: h, accessibilityLayer: f = Jr.accessibilityLayer } = e3, d = () => {
    if (s && s.length) {
      var P = { padding: 0, margin: 0 }, S = xM(s, o), _ = S.map((M, A) => {
        if (!M || M.type === "none") return null;
        var j = M.formatter || a || wM, { value: k, name: E } = M, $ = k, R = E;
        if (j) {
          var B = j(k, E, M, A, s);
          if (Array.isArray(B)) [$, R] = B;
          else if (B != null) $ = B;
          else return null;
        }
        var H = Fn(Fn({}, Jr.itemStyle), {}, { color: M.color || Jr.itemStyle.color }, n);
        return g.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(A), style: H }, Ie(R) ? g.createElement("span", { className: "recharts-tooltip-item-name" }, R) : null, Ie(R) ? g.createElement("span", { className: "recharts-tooltip-item-separator" }, t) : null, g.createElement("span", { className: "recharts-tooltip-item-value" }, $), g.createElement("span", { className: "recharts-tooltip-item-unit" }, M.unit || ""));
      });
      return g.createElement("ul", { className: "recharts-tooltip-item-list", style: P }, _);
    }
    return null;
  }, v = Fn(Fn({}, Jr.contentStyle), r), m = Fn({ margin: 0 }, i), p = !gt(c), y = p ? c : "", b = J("recharts-default-tooltip", l), w = J("recharts-tooltip-label", u);
  p && h && s !== void 0 && s !== null && (y = h(c, s));
  var x = f ? { role: "status", "aria-live": "assertive" } : {};
  return g.createElement("div", Fu({ className: b, style: v }, x), g.createElement("p", { className: w, style: m }, g.isValidElement(y) ? y : "".concat(y)), d());
}, Wn = "recharts-tooltip-wrapper", SM = { visibility: "hidden" };
function _M(e3) {
  var { coordinate: t, translateX: r, translateY: n } = e3;
  return J(Wn, { ["".concat(Wn, "-right")]: L(r) && t && L(t.x) && r >= t.x, ["".concat(Wn, "-left")]: L(r) && t && L(t.x) && r < t.x, ["".concat(Wn, "-bottom")]: L(n) && t && L(t.y) && n >= t.y, ["".concat(Wn, "-top")]: L(n) && t && L(t.y) && n < t.y });
}
function Xd(e3) {
  var { allowEscapeViewBox: t, coordinate: r, key: n, offset: i, position: s, reverseDirection: a, tooltipDimension: o, viewBox: l, viewBoxDimension: u } = e3;
  if (s && L(s[n])) return s[n];
  var c = r[n] - o - (i > 0 ? i : 0), h = r[n] + i;
  if (t[n]) return a[n] ? c : h;
  var f = l[n];
  if (f == null) return 0;
  if (a[n]) {
    var d = c, v = f;
    return d < v ? Math.max(h, f) : Math.max(c, f);
  }
  if (u == null) return 0;
  var m = h + o, p = f + u;
  return m > p ? Math.max(c, f) : Math.max(h, f);
}
function OM(e3) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e3;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function MM(e3) {
  var { allowEscapeViewBox: t, coordinate: r, offsetTop: n, offsetLeft: i, position: s, reverseDirection: a, tooltipBox: o, useTranslate3d: l, viewBox: u } = e3, c, h, f;
  return o.height > 0 && o.width > 0 && r ? (h = Xd({ allowEscapeViewBox: t, coordinate: r, key: "x", offset: i, position: s, reverseDirection: a, tooltipDimension: o.width, viewBox: u, viewBoxDimension: u.width }), f = Xd({ allowEscapeViewBox: t, coordinate: r, key: "y", offset: n, position: s, reverseDirection: a, tooltipDimension: o.height, viewBox: u, viewBoxDimension: u.height }), c = OM({ translateX: h, translateY: f, useTranslate3d: l })) : c = SM, { cssProperties: c, cssClasses: _M({ translateX: h, translateY: f, coordinate: r }) };
}
var EM = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Li = { isSsr: EM() };
function C0() {
  var [e3, t] = g.useState(() => Li.isSsr || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return g.useEffect(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e3;
}
function Jd(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zr(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jd(Object(r), true).forEach(function(n) {
      AM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Jd(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function AM(e3, t, r) {
  return (t = CM(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function CM(e3) {
  var t = kM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function IM(e3) {
  if (!(e3.prefersReducedMotion && e3.isAnimationActive === "auto") && e3.isAnimationActive && e3.active) return "transform ".concat(e3.animationDuration, "ms ").concat(e3.animationEasing);
}
function jM(e3) {
  var t, r, n, i, s, a, o = C0(), [l, u] = g.useState(() => ({ dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }));
  g.useEffect(() => {
    var v = (m) => {
      if (m.key === "Escape") {
        var p, y, b, w;
        u({ dismissed: true, dismissedAtCoordinate: { x: (p = (y = e3.coordinate) === null || y === void 0 ? void 0 : y.x) !== null && p !== void 0 ? p : 0, y: (b = (w = e3.coordinate) === null || w === void 0 ? void 0 : w.y) !== null && b !== void 0 ? b : 0 } });
      }
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [(t = e3.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e3.coordinate) === null || r === void 0 ? void 0 : r.y]), l.dismissed && (((n = (i = e3.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== l.dismissedAtCoordinate.x || ((s = (a = e3.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && s !== void 0 ? s : 0) !== l.dismissedAtCoordinate.y) && u(Zr(Zr({}, l), {}, { dismissed: false }));
  var { cssClasses: c, cssProperties: h } = MM({ allowEscapeViewBox: e3.allowEscapeViewBox, coordinate: e3.coordinate, offsetLeft: typeof e3.offset == "number" ? e3.offset : e3.offset.x, offsetTop: typeof e3.offset == "number" ? e3.offset : e3.offset.y, position: e3.position, reverseDirection: e3.reverseDirection, tooltipBox: { height: e3.lastBoundingBox.height, width: e3.lastBoundingBox.width }, useTranslate3d: e3.useTranslate3d, viewBox: e3.viewBox }), f = e3.hasPortalFromProps ? {} : Zr(Zr({ transition: IM({ prefersReducedMotion: o, isAnimationActive: e3.isAnimationActive, active: e3.active, animationDuration: e3.animationDuration, animationEasing: e3.animationEasing }) }, h), {}, { pointerEvents: "none", position: "absolute", top: 0, left: 0 }), d = Zr(Zr({}, f), {}, { visibility: !l.dismissed && e3.active && e3.hasPayload ? "visible" : "hidden" }, e3.wrapperStyle);
  return g.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: c, style: d, ref: e3.innerRef }, e3.children);
}
var TM = g.memo(jM), k0 = () => {
  var e3;
  return (e3 = z((t) => t.rootProps.accessibilityLayer)) !== null && e3 !== void 0 ? e3 : true;
};
function Wu() {
  return Wu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Wu.apply(null, arguments);
}
function Zd(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qd(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zd(Object(r), true).forEach(function(n) {
      NM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function NM(e3, t, r) {
  return (t = DM(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function DM(e3) {
  var t = LM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var tv = { curveBasisClosed: hP, curveBasisOpen: fP, curveBasis: cP, curveBumpX: X1, curveBumpY: J1, curveLinearClosed: dP, curveLinear: Ma, curveMonotoneX: vP, curveMonotoneY: pP, curveNatural: mP, curveStep: gP, curveStepAfter: bP, curveStepBefore: yP }, Us = (e3) => q(e3.x) && q(e3.y), ev = (e3) => e3.base != null && Us(e3.base) && Us(e3), qn = (e3) => e3.x, Kn = (e3) => e3.y, RM = (e3, t) => {
  if (typeof e3 == "function") return e3;
  var r = "curve".concat(Ci(e3));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = tv["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n) return n;
  }
  return tv[r] || Ma;
}, rv = { connectNulls: false, type: "linear" }, $M = (e3) => {
  var { type: t = rv.type, points: r = [], baseLine: n, layout: i, connectNulls: s = rv.connectNulls } = e3, a = RM(t, i), o = s ? r.filter(Us) : r;
  if (Array.isArray(n)) {
    var l, u = r.map((v, m) => Qd(Qd({}, v), {}, { base: n[m] }));
    i === "vertical" ? l = Hi().y(Kn).x1(qn).x0((v) => v.base.x) : l = Hi().x(qn).y1(Kn).y0((v) => v.base.y);
    var c = l.defined(ev).curve(a), h = s ? u.filter(ev) : u;
    return c(h);
  }
  var f;
  i === "vertical" && L(n) ? f = Hi().y(Kn).x1(qn).x0(n) : L(n) ? f = Hi().x(qn).y1(Kn).y0(n) : f = iy().x(qn).y(Kn);
  var d = f.defined(Us).curve(a);
  return d(o);
}, ri = (e3) => {
  var { className: t, points: r, path: n, pathRef: i } = e3, s = Yr();
  if ((!r || !r.length) && !n) return null;
  var a = { type: e3.type, points: e3.points, baseLine: e3.baseLine, layout: e3.layout || s, connectNulls: e3.connectNulls }, o = r && r.length ? $M(a) : n;
  return g.createElement("path", Wu({}, ce(e3), Pc(e3), { className: J("recharts-curve", t), d: o === null ? void 0 : o, ref: i }));
}, zM = ["x", "y", "top", "left", "width", "height", "className"];
function qu() {
  return qu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, qu.apply(null, arguments);
}
function nv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function BM(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nv(Object(r), true).forEach(function(n) {
      FM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function FM(e3, t, r) {
  return (t = WM(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function WM(e3) {
  var t = qM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function KM(e3, t) {
  if (e3 == null) return {};
  var r, n, i = UM(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function UM(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var VM = (e3, t, r, n, i, s) => "M".concat(e3, ",").concat(i, "v").concat(n, "M").concat(s, ",").concat(t, "h").concat(r), YM = (e3) => {
  var { x: t = 0, y: r = 0, top: n = 0, left: i = 0, width: s = 0, height: a = 0, className: o } = e3, l = KM(e3, zM), u = BM({ x: t, y: r, top: n, left: i, width: s, height: a }, l);
  return !L(t) || !L(r) || !L(s) || !L(a) || !L(n) || !L(i) ? null : g.createElement("path", qu({}, Nt(u), { className: J("recharts-cross", o), d: VM(t, r, s, a, n, i) }));
};
function HM(e3, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e3 === "horizontal" ? t.x - i : r.left + 0.5, y: e3 === "horizontal" ? r.top + 0.5 : t.y - i, width: e3 === "horizontal" ? n : r.width - 1, height: e3 === "horizontal" ? r.height - 1 : n };
}
function iv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iv(Object(r), true).forEach(function(n) {
      GM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function GM(e3, t, r) {
  return (t = XM(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function XM(e3) {
  var t = JM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var ZM = (e3) => e3.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), I0 = (e3, t, r) => e3.map((n) => "".concat(ZM(n), " ").concat(t, "ms ").concat(r)).join(","), QM = (e3, t) => [Object.keys(e3), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), pi = (e3, t) => Object.keys(t).reduce((r, n) => sv(sv({}, r), {}, { [n]: e3(n, t[n]) }), {});
function av(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(r), true).forEach(function(n) {
      tE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : av(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function tE(e3, t, r) {
  return (t = eE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function eE(e3) {
  var t = rE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Vs = (e3, t, r) => e3 + (t - e3) * r, Ku = (e3) => {
  var { from: t, to: r } = e3;
  return t !== r;
}, j0 = (e3, t, r) => {
  var n = pi((i, s) => {
    if (Ku(s)) {
      var [a, o] = e3(s.from, s.to, s.velocity);
      return mt(mt({}, s), {}, { from: a, velocity: o });
    }
    return s;
  }, t);
  return r < 1 ? pi((i, s) => Ku(s) && n[i] != null ? mt(mt({}, s), {}, { velocity: Vs(s.velocity, n[i].velocity, r), from: Vs(s.from, n[i].from, r) }) : s, t) : j0(e3, n, r - 1);
};
function nE(e3, t, r, n, i, s) {
  var a, o = n.reduce((f, d) => mt(mt({}, f), {}, { [d]: { from: e3[d], velocity: 0, to: t[d] } }), {}), l = () => pi((f, d) => d.from, o), u = () => !Object.values(o).filter(Ku).length, c = null, h = (f) => {
    a || (a = f);
    var d = f - a, v = d / r.dt;
    o = j0(r, o, v), i(mt(mt(mt({}, e3), t), l())), a = f, u() || (c = s.setTimeout(h));
  };
  return () => (c = s.setTimeout(h), () => {
    var f;
    (f = c) === null || f === void 0 || f();
  });
}
function iE(e3, t, r, n, i, s, a) {
  var o = null, l = i.reduce((h, f) => {
    var d = e3[f], v = t[f];
    return d == null || v == null ? h : mt(mt({}, h), {}, { [f]: [d, v] });
  }, {}), u, c = (h) => {
    u || (u = h);
    var f = (h - u) / n, d = pi((m, p) => Vs(...p, r(f)), l);
    if (s(mt(mt(mt({}, e3), t), d)), f < 1) o = a.setTimeout(c);
    else {
      var v = pi((m, p) => Vs(...p, r(1)), l);
      s(mt(mt(mt({}, e3), t), v));
    }
  };
  return () => (o = a.setTimeout(c), () => {
    var h;
    (h = o) === null || h === void 0 || h();
  });
}
const sE = (e3, t, r, n, i, s) => {
  var a = QM(e3, t);
  return r == null ? () => (i(mt(mt({}, e3), t)), () => {
  }) : r.isStepper === true ? nE(e3, t, r, a, i, s) : iE(e3, t, r, n, a, i, s);
};
var Ys = 1e-4, T0 = (e3, t) => [0, 3 * e3, 3 * t - 6 * e3, 3 * e3 - 3 * t + 1], N0 = (e3, t) => e3.map((r, n) => r * t ** n).reduce((r, n) => r + n), ov = (e3, t) => (r) => {
  var n = T0(e3, t);
  return N0(n, r);
}, aE = (e3, t) => (r) => {
  var n = T0(e3, t), i = [...n.map((s, a) => s * a).slice(1), 0];
  return N0(i, r);
}, oE = (e3) => {
  var t, r = e3.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier") return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4) return null;
  var i = n.map((s) => parseFloat(s));
  return [i[0], i[1], i[2], i[3]];
}, lE = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      return [0, 0, 1, 1];
    case "ease":
      return [0.25, 0.1, 0.25, 1];
    case "ease-in":
      return [0.42, 0, 1, 1];
    case "ease-out":
      return [0.42, 0, 0.58, 1];
    case "ease-in-out":
      return [0, 0, 0.58, 1];
    default: {
      var i = oE(r[0]);
      if (i) return i;
    }
  }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, uE = (e3, t, r, n) => {
  var i = ov(e3, r), s = ov(t, n), a = aE(e3, r), o = (u) => u > 1 ? 1 : u < 0 ? 0 : u, l = (u) => {
    for (var c = u > 1 ? 1 : u, h = c, f = 0; f < 8; ++f) {
      var d = i(h) - c, v = a(h);
      if (Math.abs(d - c) < Ys || v < Ys) return s(h);
      h = o(h - d / v);
    }
    return s(h);
  };
  return l.isStepper = false, l;
}, lv = function() {
  return uE(...lE(...arguments));
}, cE = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: r = 100, damping: n = 8, dt: i = 17 } = t, s = (a, o, l) => {
    var u = -(a - o) * r, c = l * n, h = l + (u - c) * i / 1e3, f = l * i / 1e3 + a;
    return Math.abs(f - o) < Ys && Math.abs(h) < Ys ? [o, 0] : [f, h];
  };
  return s.isStepper = true, s.dt = i, s;
}, hE = (e3) => {
  if (typeof e3 == "string") switch (e3) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return lv(e3);
    case "spring":
      return cE();
    default:
      if (e3.split("(")[0] === "cubic-bezier") return lv(e3);
  }
  return typeof e3 == "function" ? e3 : null;
};
function fE(e3) {
  var t, r = () => null, n = false, i = null, s = (a) => {
    if (!n) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, [l, ...u] = o;
        if (typeof l == "number") {
          i = e3.setTimeout(s.bind(null, u), l);
          return;
        }
        s(l), i = e3.setTimeout(s.bind(null, u));
        return;
      }
      typeof a == "string" && (t = a, r(t)), typeof a == "object" && (t = a, r(t)), typeof a == "function" && a();
    }
  };
  return { stop: () => {
    n = true;
  }, start: (a) => {
    n = false, i && (i(), i = null), s(a);
  }, subscribe: (a) => (r = a, () => {
    r = () => null;
  }), getTimeoutController: () => e3 };
}
class dE {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, s = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(s));
    };
    return i = requestAnimationFrame(s), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function vE() {
  return fE(new dE());
}
var pE = g.createContext(vE);
function mE(e3, t) {
  var r = g.useContext(pE);
  return g.useMemo(() => t ?? r(e3), [e3, t, r]);
}
var gE = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} }, uv = { t: 0 }, Il = { t: 1 };
function Ha(e3) {
  var t = Ft(e3, gE), { isActive: r, canBegin: n, duration: i, easing: s, begin: a, onAnimationEnd: o, onAnimationStart: l, children: u } = t, c = C0(), h = r === "auto" ? !Li.isSsr && !c : r, f = mE(t.animationId, t.animationManager), [d, v] = g.useState(h ? uv : Il), m = g.useRef(null);
  return g.useEffect(() => {
    h || v(Il);
  }, [h]), g.useEffect(() => {
    if (!h || !n) return Vr;
    var p = sE(uv, Il, hE(s), i, v, f.getTimeoutController()), y = () => {
      m.current = p();
    };
    return f.start([l, a, y, i, o]), () => {
      f.stop(), m.current && m.current(), o();
    };
  }, [h, n, i, s, a, l, o, f]), u(d.t);
}
function Ga(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = g.useRef(li(t)), n = g.useRef(e3);
  return n.current !== e3 && (r.current = li(t), n.current = e3), r.current;
}
var yE = ["radius"], bE = ["radius"], cv, hv, fv, dv, vv, pv, mv, gv, yv, bv;
function wv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wv(Object(r), true).forEach(function(n) {
      wE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function wE(e3, t, r) {
  return (t = xE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function xE(e3) {
  var t = PE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Hs.apply(null, arguments);
}
function Pv(e3, t) {
  if (e3 == null) return {};
  var r, n, i = SE(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function SE(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function xe(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var Sv = (e3, t, r, n, i) => {
  var s = or(r), a = or(n), o = Math.min(Math.abs(s) / 2, Math.abs(a) / 2), l = a >= 0 ? 1 : -1, u = s >= 0 ? 1 : -1, c = a >= 0 && s >= 0 || a < 0 && s < 0 ? 1 : 0, h;
  if (o > 0 && Array.isArray(i)) {
    for (var f = [0, 0, 0, 0], d = 0, v = 4; d < v; d++) {
      var m, p = (m = i[d]) !== null && m !== void 0 ? m : 0;
      f[d] = p > o ? o : p;
    }
    h = lt(cv || (cv = xe(["M", ",", ""])), e3, t + l * f[0]), f[0] > 0 && (h += lt(hv || (hv = xe(["A ", ",", ",0,0,", ",", ",", ""])), f[0], f[0], c, e3 + u * f[0], t)), h += lt(fv || (fv = xe(["L ", ",", ""])), e3 + r - u * f[1], t), f[1] > 0 && (h += lt(dv || (dv = xe(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[1], f[1], c, e3 + r, t + l * f[1])), h += lt(vv || (vv = xe(["L ", ",", ""])), e3 + r, t + n - l * f[2]), f[2] > 0 && (h += lt(pv || (pv = xe(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[2], f[2], c, e3 + r - u * f[2], t + n)), h += lt(mv || (mv = xe(["L ", ",", ""])), e3 + u * f[3], t + n), f[3] > 0 && (h += lt(gv || (gv = xe(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[3], f[3], c, e3, t + n - l * f[3])), h += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var y = Math.min(o, i);
    h = lt(yv || (yv = xe(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e3, t + l * y, y, y, c, e3 + u * y, t, e3 + r - u * y, t, y, y, c, e3 + r, t + l * y, e3 + r, t + n - l * y, y, y, c, e3 + r - u * y, t + n, e3 + u * y, t + n, y, y, c, e3, t + n - l * y);
  } else h = lt(bv || (bv = xe(["M ", ",", " h ", " v ", " h ", " Z"])), e3, t, r, n, -r);
  return h;
}, _v = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, D0 = (e3) => {
  var t = Ft(e3, _v), r = g.useRef(null), [n, i] = g.useState(-1);
  g.useEffect(() => {
    if (r.current && r.current.getTotalLength) try {
      var W = r.current.getTotalLength();
      W && i(W);
    } catch {
    }
  }, []);
  var { x: s, y: a, width: o, height: l, radius: u, className: c } = t, { animationEasing: h, animationDuration: f, animationBegin: d, isAnimationActive: v, isUpdateAnimationActive: m } = t, p = g.useRef(o), y = g.useRef(l), b = g.useRef(s), w = g.useRef(a), x = g.useMemo(() => ({ x: s, y: a, width: o, height: l, radius: u }), [s, a, o, l, u]), P = Ga(x, "rectangle-");
  if (s !== +s || a !== +a || o !== +o || l !== +l || o === 0 || l === 0) return null;
  var S = J("recharts-rectangle", c);
  if (!m) {
    var _ = Nt(t), { radius: M } = _, A = Pv(_, yE);
    return g.createElement("path", Hs({}, A, { x: or(s), y: or(a), width: or(o), height: or(l), radius: typeof u == "number" ? u : void 0, className: S, d: Sv(s, a, o, l, u) }));
  }
  var j = p.current, k = y.current, E = b.current, $ = w.current, R = "0px ".concat(n === -1 ? 1 : n, "px"), B = "".concat(n, "px ").concat(n, "px"), H = I0(["strokeDasharray"], f, typeof h == "string" ? h : _v.animationEasing);
  return g.createElement(Ha, { animationId: P, key: P, canBegin: n > 0, duration: f, easing: h, isActive: m, begin: d }, (W) => {
    var G = ct(j, o, W), F = ct(k, l, W), U = ct(E, s, W), Rt = ct($, a, W);
    r.current && (p.current = G, y.current = F, b.current = U, w.current = Rt);
    var at;
    v ? W > 0 ? at = { transition: H, strokeDasharray: B } : at = { strokeDasharray: R } : at = { strokeDasharray: B };
    var de = Nt(t), { radius: qt } = de, Le = Pv(de, bE);
    return g.createElement("path", Hs({}, Le, { radius: typeof u == "number" ? u : void 0, className: S, d: Sv(U, Rt, G, F, u), ref: r, style: xv(xv({}, at), t.style) }));
  });
};
function Ov(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(r), true).forEach(function(n) {
      _E(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function _E(e3, t, r) {
  return (t = OE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function OE(e3) {
  var t = ME(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ME(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Gs = Math.PI / 180, EE = (e3) => e3 * 180 / Math.PI, At = (e3, t, r, n) => ({ x: e3 + Math.cos(-Gs * n) * r, y: t + Math.sin(-Gs * n) * r }), AE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, CE = (e3, t) => {
  var { x: r, y: n } = e3, { x: i, y: s } = t;
  return Math.sqrt((r - i) ** 2 + (n - s) ** 2);
}, kE = (e3, t) => {
  var { x: r, y: n } = e3, { cx: i, cy: s } = t, a = CE({ x: r, y: n }, { x: i, y: s });
  if (a <= 0) return { radius: a, angle: 0 };
  var o = (r - i) / a, l = Math.acos(o);
  return n > s && (l = 2 * Math.PI - l), { radius: a, angle: EE(l), angleInRadian: l };
}, IE = (e3) => {
  var { startAngle: t, endAngle: r } = e3, n = Math.floor(t / 360), i = Math.floor(r / 360), s = Math.min(n, i);
  return { startAngle: t - s * 360, endAngle: r - s * 360 };
}, jE = (e3, t) => {
  var { startAngle: r, endAngle: n } = t, i = Math.floor(r / 360), s = Math.floor(n / 360), a = Math.min(i, s);
  return e3 + a * 360;
}, TE = (e3, t) => {
  var { relativeX: r, relativeY: n } = e3, { radius: i, angle: s } = kE({ x: r, y: n }, t), { innerRadius: a, outerRadius: o } = t;
  if (i < a || i > o || i === 0) return null;
  var { startAngle: l, endAngle: u } = IE(t), c = s, h;
  if (l <= u) {
    for (; c > u; ) c -= 360;
    for (; c < l; ) c += 360;
    h = c >= l && c <= u;
  } else {
    for (; c > l; ) c -= 360;
    for (; c < u; ) c += 360;
    h = c >= u && c <= l;
  }
  return h ? Mv(Mv({}, t), {}, { radius: i, angle: jE(c, t) }) : null;
};
function L0(e3) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: s } = e3, a = At(t, r, n, i), o = At(t, r, n, s);
  return { points: [a, o], cx: t, cy: r, radius: n, startAngle: i, endAngle: s };
}
var Ev, Av, Cv, kv, Iv, jv, Tv;
function Uu() {
  return Uu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Uu.apply(null, arguments);
}
function Or(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var NE = (e3, t) => {
  var r = oe(t - e3), n = Math.min(Math.abs(t - e3), 359.999);
  return r * n;
}, rs = (e3) => {
  var { cx: t, cy: r, radius: n, angle: i, sign: s, isExternal: a, cornerRadius: o, cornerIsExternal: l } = e3, u = o * (a ? 1 : -1) + n, c = Math.asin(o / u) / Gs, h = l ? i : i + s * c, f = At(t, r, u, h), d = At(t, r, n, h), v = l ? i - s * c : i, m = At(t, r, u * Math.cos(c * Gs), v);
  return { center: f, circleTangency: d, lineTangency: m, theta: c };
}, R0 = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: s, endAngle: a } = e3, o = NE(s, a), l = s + o, u = At(t, r, i, s), c = At(t, r, i, l), h = lt(Ev || (Ev = Or(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), u.x, u.y, i, i, +(Math.abs(o) > 180), +(s > l), c.x, c.y);
  if (n > 0) {
    var f = At(t, r, n, s), d = At(t, r, n, l);
    h += lt(Av || (Av = Or(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), d.x, d.y, n, n, +(Math.abs(o) > 180), +(s <= l), f.x, f.y);
  } else h += lt(Cv || (Cv = Or(["L ", ",", " Z"])), t, r);
  return h;
}, DE = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, cornerRadius: s, forceCornerRadius: a, cornerIsExternal: o, startAngle: l, endAngle: u } = e3, c = oe(u - l), { circleTangency: h, lineTangency: f, theta: d } = rs({ cx: t, cy: r, radius: i, angle: l, sign: c, cornerRadius: s, cornerIsExternal: o }), { circleTangency: v, lineTangency: m, theta: p } = rs({ cx: t, cy: r, radius: i, angle: u, sign: -c, cornerRadius: s, cornerIsExternal: o }), y = o ? Math.abs(l - u) : Math.abs(l - u) - d - p;
  if (y < 0) return a ? lt(kv || (kv = Or(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), f.x, f.y, s, s, s * 2, s, s, -s * 2) : R0({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: l, endAngle: u });
  var b = lt(Iv || (Iv = Or(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), f.x, f.y, s, s, +(c < 0), h.x, h.y, i, i, +(y > 180), +(c < 0), v.x, v.y, s, s, +(c < 0), m.x, m.y);
  if (n > 0) {
    var { circleTangency: w, lineTangency: x, theta: P } = rs({ cx: t, cy: r, radius: n, angle: l, sign: c, isExternal: true, cornerRadius: s, cornerIsExternal: o }), { circleTangency: S, lineTangency: _, theta: M } = rs({ cx: t, cy: r, radius: n, angle: u, sign: -c, isExternal: true, cornerRadius: s, cornerIsExternal: o }), A = o ? Math.abs(l - u) : Math.abs(l - u) - P - M;
    if (A < 0 && s === 0) return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += lt(jv || (jv = Or(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), _.x, _.y, s, s, +(c < 0), S.x, S.y, n, n, +(A > 180), +(c > 0), w.x, w.y, s, s, +(c < 0), x.x, x.y);
  } else b += lt(Tv || (Tv = Or(["L", ",", "Z"])), t, r);
  return b;
}, LE = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, $0 = (e3) => {
  var t = Ft(e3, LE), { cx: r, cy: n, innerRadius: i, outerRadius: s, cornerRadius: a, forceCornerRadius: o, cornerIsExternal: l, startAngle: u, endAngle: c, className: h } = t;
  if (s < i || u === c) return null;
  var f = J("recharts-sector", h), d = s - i, v = hr(a, d, 0, true), m;
  return v > 0 && Math.abs(u - c) < 360 ? m = DE({ cx: r, cy: n, innerRadius: i, outerRadius: s, cornerRadius: Math.min(v, d / 2), forceCornerRadius: o, cornerIsExternal: l, startAngle: u, endAngle: c }) : m = R0({ cx: r, cy: n, innerRadius: i, outerRadius: s, startAngle: u, endAngle: c }), g.createElement("path", Uu({}, Nt(t), { className: f, d: m }));
};
function RE(e3, t, r) {
  if (e3 === "horizontal") return [{ x: t.x, y: r.top }, { x: t.x, y: r.top + r.height }];
  if (e3 === "vertical") return [{ x: r.left, y: t.y }, { x: r.left + r.width, y: t.y }];
  if (wy(t)) {
    if (e3 === "centric") {
      var { cx: n, cy: i, innerRadius: s, outerRadius: a, angle: o } = t, l = At(n, i, s, o), u = At(n, i, a, o);
      return [{ x: l.x, y: l.y }, { x: u.x, y: u.y }];
    }
    return L0(t);
  }
}
var jl = {}, Tl = {}, Nl = {}, Nv;
function $E() {
  if (Nv) return Nl;
  Nv = 1;
  const e3 = Ty();
  function t(r) {
    return e3.isSymbol(r) ? NaN : Number(r);
  }
  return Nl.toNumber = t, Nl;
}
var Dv;
function zE() {
  if (Dv) return Tl;
  Dv = 1;
  const e3 = $E();
  function t(r) {
    return r ? (r = e3.toNumber(r), r === 1 / 0 || r === -1 / 0 ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r === r ? r : 0) : r === 0 ? r : 0;
  }
  return Tl.toFinite = t, Tl;
}
var Lv;
function BE() {
  if (Lv) return jl;
  Lv = 1;
  const e3 = zE(), t = jy();
  function r(n, i, s) {
    s && typeof s != "number" && t.isIterateeCall(n, i, s) && (i = s = void 0), n = e3.toFinite(n), i === void 0 ? (i = n, n = 0) : i = e3.toFinite(i), s = s === void 0 ? n < i ? 1 : -1 : e3.toFinite(s);
    const a = Math.max(Math.ceil((i - n) / (s || 1)), 0), o = new Array(a);
    for (let l = 0; l < a; l++) o[l] = n, n += s;
    return o;
  }
  return jl.range = r, jl;
}
var Dl, Rv;
function FE() {
  return Rv || (Rv = 1, Dl = BE().range), Dl;
}
var WE = FE();
const z0 = dr(WE);
var we = (e3) => e3.chartData, Lc = O([we], (e3) => {
  var t = e3.chartData != null ? e3.chartData.length - 1 : 0;
  return { chartData: e3.chartData, computedData: e3.computedData, dataEndIndex: t, dataStartIndex: 0 };
}), Ri = (e3, t, r, n) => n ? Lc(e3) : we(e3), qE = (e3, t, r) => r ? Lc(e3) : we(e3), KE = O([Ri], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
O([Lc], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
var UE = O([we], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
function Ae(e3) {
  if (Array.isArray(e3) && e3.length === 2) {
    var [t, r] = e3;
    if (q(t) && q(r)) return true;
  }
  return false;
}
function $v(e3, t, r) {
  return r ? e3 : [Math.min(e3[0], t[0]), Math.max(e3[1], t[1])];
}
function B0(e3, t) {
  if (t && typeof e3 != "function" && Array.isArray(e3) && e3.length === 2) {
    var [r, n] = e3, i, s;
    if (q(r)) i = r;
    else if (typeof r == "function") return;
    if (q(n)) s = n;
    else if (typeof n == "function") return;
    var a = [i, s];
    if (Ae(a)) return a;
  }
}
function VE(e3, t, r) {
  if (!(!r && t == null)) {
    if (typeof e3 == "function" && t != null) try {
      var n = e3(t, r);
      if (Ae(n)) return $v(n, t, r);
    } catch {
    }
    if (Array.isArray(e3) && e3.length === 2) {
      var [i, s] = e3, a, o;
      if (i === "auto") t != null && (a = Math.min(...t));
      else if (L(i)) a = i;
      else if (typeof i == "function") try {
        t != null && (a = i(t == null ? void 0 : t[0]));
      } catch {
      }
      else if (typeof i == "string" && Cd.test(i)) {
        var l = Cd.exec(i);
        if (l == null || l[1] == null || t == null) a = void 0;
        else {
          var u = +l[1];
          a = t[0] - u;
        }
      } else a = t == null ? void 0 : t[0];
      if (s === "auto") t != null && (o = Math.max(...t));
      else if (L(s)) o = s;
      else if (typeof s == "function") try {
        t != null && (o = s(t == null ? void 0 : t[1]));
      } catch {
      }
      else if (typeof s == "string" && kd.test(s)) {
        var c = kd.exec(s);
        if (c == null || c[1] == null || t == null) o = void 0;
        else {
          var h = +c[1];
          o = t[1] + h;
        }
      } else o = t == null ? void 0 : t[1];
      var f = [a, o];
      if (Ae(f)) return t == null ? f : $v(f, t, r);
    }
  }
}
var kn = 1e9, YE = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, $c, st = true, he = "[DecimalError] ", kr = he + "Invalid argument: ", Rc = he + "Exponent out of range: ", In = Math.floor, _r = Math.pow, HE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Jt, wt = 1e7, it = 7, F0 = 9007199254740991, Xs = In(F0 / it), N = {};
N.absoluteValue = N.abs = function() {
  var e3 = new this.constructor(this);
  return e3.s && (e3.s = 1), e3;
};
N.comparedTo = N.cmp = function(e3) {
  var t, r, n, i, s = this;
  if (e3 = new s.constructor(e3), s.s !== e3.s) return s.s || -e3.s;
  if (s.e !== e3.e) return s.e > e3.e ^ s.s < 0 ? 1 : -1;
  for (n = s.d.length, i = e3.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (s.d[t] !== e3.d[t]) return s.d[t] > e3.d[t] ^ s.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ s.s < 0 ? 1 : -1;
};
N.decimalPlaces = N.dp = function() {
  var e3 = this, t = e3.d.length - 1, r = (t - e3.e) * it;
  if (t = e3.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
N.dividedBy = N.div = function(e3) {
  return qe(this, new this.constructor(e3));
};
N.dividedToIntegerBy = N.idiv = function(e3) {
  var t = this, r = t.constructor;
  return Q(qe(t, new r(e3), 0, 1), r.precision);
};
N.equals = N.eq = function(e3) {
  return !this.cmp(e3);
};
N.exponent = function() {
  return ft(this);
};
N.greaterThan = N.gt = function(e3) {
  return this.cmp(e3) > 0;
};
N.greaterThanOrEqualTo = N.gte = function(e3) {
  return this.cmp(e3) >= 0;
};
N.isInteger = N.isint = function() {
  return this.e > this.d.length - 2;
};
N.isNegative = N.isneg = function() {
  return this.s < 0;
};
N.isPositive = N.ispos = function() {
  return this.s > 0;
};
N.isZero = function() {
  return this.s === 0;
};
N.lessThan = N.lt = function(e3) {
  return this.cmp(e3) < 0;
};
N.lessThanOrEqualTo = N.lte = function(e3) {
  return this.cmp(e3) < 1;
};
N.logarithm = N.log = function(e3) {
  var t, r = this, n = r.constructor, i = n.precision, s = i + 5;
  if (e3 === void 0) e3 = new n(10);
  else if (e3 = new n(e3), e3.s < 1 || e3.eq(Jt)) throw Error(he + "NaN");
  if (r.s < 1) throw Error(he + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Jt) ? new n(0) : (st = false, t = qe(mi(r, s), mi(e3, s), s), st = true, Q(t, i));
};
N.minus = N.sub = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? K0(t, e3) : W0(t, (e3.s = -e3.s, e3));
};
N.modulo = N.mod = function(e3) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e3 = new n(e3), !e3.s) throw Error(he + "NaN");
  return r.s ? (st = false, t = qe(r, e3, 0, 1).times(e3), st = true, r.minus(t)) : Q(new n(r), i);
};
N.naturalExponential = N.exp = function() {
  return q0(this);
};
N.naturalLogarithm = N.ln = function() {
  return mi(this);
};
N.negated = N.neg = function() {
  var e3 = new this.constructor(this);
  return e3.s = -e3.s || 0, e3;
};
N.plus = N.add = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? W0(t, e3) : K0(t, (e3.s = -e3.s, e3));
};
N.precision = N.sd = function(e3) {
  var t, r, n, i = this;
  if (e3 !== void 0 && e3 !== !!e3 && e3 !== 1 && e3 !== 0) throw Error(kr + e3);
  if (t = ft(i) + 1, n = i.d.length - 1, r = n * it + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e3 && t > r ? t : r;
};
N.squareRoot = N.sqrt = function() {
  var e3, t, r, n, i, s, a, o = this, l = o.constructor;
  if (o.s < 1) {
    if (!o.s) return new l(0);
    throw Error(he + "NaN");
  }
  for (e3 = ft(o), st = false, i = Math.sqrt(+o), i == 0 || i == 1 / 0 ? (t = Ee(o.d), (t.length + e3) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e3 = In((e3 + 1) / 2) - (e3 < 0 || e3 % 2), i == 1 / 0 ? t = "5e" + e3 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e3), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = a = r + 3; ; ) if (s = n, n = s.plus(qe(o, s, a + 2)).times(0.5), Ee(s.d).slice(0, a) === (t = Ee(n.d)).slice(0, a)) {
    if (t = t.slice(a - 3, a + 1), i == a && t == "4999") {
      if (Q(s, r + 1, 0), s.times(s).eq(o)) {
        n = s;
        break;
      }
    } else if (t != "9999") break;
    a += 4;
  }
  return st = true, Q(n, r);
};
N.times = N.mul = function(e3) {
  var t, r, n, i, s, a, o, l, u, c = this, h = c.constructor, f = c.d, d = (e3 = new h(e3)).d;
  if (!c.s || !e3.s) return new h(0);
  for (e3.s *= c.s, r = c.e + e3.e, l = f.length, u = d.length, l < u && (s = f, f = d, d = s, a = l, l = u, u = a), s = [], a = l + u, n = a; n--; ) s.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) o = s[i] + d[n] * f[i - n - 1] + t, s[i--] = o % wt | 0, t = o / wt | 0;
    s[i] = (s[i] + t) % wt | 0;
  }
  for (; !s[--a]; ) s.pop();
  return t ? ++r : s.shift(), e3.d = s, e3.e = r, st ? Q(e3, h.precision) : e3;
};
N.toDecimalPlaces = N.todp = function(e3, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e3 === void 0 ? r : (Te(e3, 0, kn), t === void 0 ? t = n.rounding : Te(t, 0, 8), Q(r, e3 + ft(r) + 1, t));
};
N.toExponential = function(e3, t) {
  var r, n = this, i = n.constructor;
  return e3 === void 0 ? r = zr(n, true) : (Te(e3, 0, kn), t === void 0 ? t = i.rounding : Te(t, 0, 8), n = Q(new i(n), e3 + 1, t), r = zr(n, true, e3 + 1)), r;
};
N.toFixed = function(e3, t) {
  var r, n, i = this, s = i.constructor;
  return e3 === void 0 ? zr(i) : (Te(e3, 0, kn), t === void 0 ? t = s.rounding : Te(t, 0, 8), n = Q(new s(i), e3 + ft(i) + 1, t), r = zr(n.abs(), false, e3 + ft(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
N.toInteger = N.toint = function() {
  var e3 = this, t = e3.constructor;
  return Q(new t(e3), ft(e3) + 1, t.rounding);
};
N.toNumber = function() {
  return +this;
};
N.toPower = N.pow = function(e3) {
  var t, r, n, i, s, a, o = this, l = o.constructor, u = 12, c = +(e3 = new l(e3));
  if (!e3.s) return new l(Jt);
  if (o = new l(o), !o.s) {
    if (e3.s < 1) throw Error(he + "Infinity");
    return o;
  }
  if (o.eq(Jt)) return o;
  if (n = l.precision, e3.eq(Jt)) return Q(o, n);
  if (t = e3.e, r = e3.d.length - 1, a = t >= r, s = o.s, a) {
    if ((r = c < 0 ? -c : c) <= F0) {
      for (i = new l(Jt), t = Math.ceil(n / it + 4), st = false; r % 2 && (i = i.times(o), Bv(i.d, t)), r = In(r / 2), r !== 0; ) o = o.times(o), Bv(o.d, t);
      return st = true, e3.s < 0 ? new l(Jt).div(i) : Q(i, n);
    }
  } else if (s < 0) throw Error(he + "NaN");
  return s = s < 0 && e3.d[Math.max(t, r)] & 1 ? -1 : 1, o.s = 1, st = false, i = e3.times(mi(o, n + u)), st = true, i = q0(i), i.s = s, i;
};
N.toPrecision = function(e3, t) {
  var r, n, i = this, s = i.constructor;
  return e3 === void 0 ? (r = ft(i), n = zr(i, r <= s.toExpNeg || r >= s.toExpPos)) : (Te(e3, 1, kn), t === void 0 ? t = s.rounding : Te(t, 0, 8), i = Q(new s(i), e3, t), r = ft(i), n = zr(i, e3 <= r || r <= s.toExpNeg, e3)), n;
};
N.toSignificantDigits = N.tosd = function(e3, t) {
  var r = this, n = r.constructor;
  return e3 === void 0 ? (e3 = n.precision, t = n.rounding) : (Te(e3, 1, kn), t === void 0 ? t = n.rounding : Te(t, 0, 8)), Q(new n(r), e3, t);
};
N.toString = N.valueOf = N.val = N.toJSON = N[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e3 = this, t = ft(e3), r = e3.constructor;
  return zr(e3, t <= r.toExpNeg || t >= r.toExpPos);
};
function W0(e3, t) {
  var r, n, i, s, a, o, l, u, c = e3.constructor, h = c.precision;
  if (!e3.s || !t.s) return t.s || (t = new c(e3)), st ? Q(t, h) : t;
  if (l = e3.d, u = t.d, a = e3.e, i = t.e, l = l.slice(), s = a - i, s) {
    for (s < 0 ? (n = l, s = -s, o = u.length) : (n = u, i = a, o = l.length), a = Math.ceil(h / it), o = a > o ? a + 1 : o + 1, s > o && (s = o, n.length = 1), n.reverse(); s--; ) n.push(0);
    n.reverse();
  }
  for (o = l.length, s = u.length, o - s < 0 && (s = o, n = u, u = l, l = n), r = 0; s; ) r = (l[--s] = l[s] + u[s] + r) / wt | 0, l[s] %= wt;
  for (r && (l.unshift(r), ++i), o = l.length; l[--o] == 0; ) l.pop();
  return t.d = l, t.e = i, st ? Q(t, h) : t;
}
function Te(e3, t, r) {
  if (e3 !== ~~e3 || e3 < t || e3 > r) throw Error(kr + e3);
}
function Ee(e3) {
  var t, r, n, i = e3.length - 1, s = "", a = e3[0];
  if (i > 0) {
    for (s += a, t = 1; t < i; t++) n = e3[t] + "", r = it - n.length, r && (s += ir(r)), s += n;
    a = e3[t], n = a + "", r = it - n.length, r && (s += ir(r));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return s + a;
}
var qe = /* @__PURE__ */ (function() {
  function e3(n, i) {
    var s, a = 0, o = n.length;
    for (n = n.slice(); o--; ) s = n[o] * i + a, n[o] = s % wt | 0, a = s / wt | 0;
    return a && n.unshift(a), n;
  }
  function t(n, i, s, a) {
    var o, l;
    if (s != a) l = s > a ? 1 : -1;
    else for (o = l = 0; o < s; o++) if (n[o] != i[o]) {
      l = n[o] > i[o] ? 1 : -1;
      break;
    }
    return l;
  }
  function r(n, i, s) {
    for (var a = 0; s--; ) n[s] -= a, a = n[s] < i[s] ? 1 : 0, n[s] = a * wt + n[s] - i[s];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, s, a) {
    var o, l, u, c, h, f, d, v, m, p, y, b, w, x, P, S, _, M, A = n.constructor, j = n.s == i.s ? 1 : -1, k = n.d, E = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(he + "Division by zero");
    for (l = n.e - i.e, _ = E.length, P = k.length, d = new A(j), v = d.d = [], u = 0; E[u] == (k[u] || 0); ) ++u;
    if (E[u] > (k[u] || 0) && --l, s == null ? b = s = A.precision : a ? b = s + (ft(n) - ft(i)) + 1 : b = s, b < 0) return new A(0);
    if (b = b / it + 2 | 0, u = 0, _ == 1) for (c = 0, E = E[0], b++; (u < P || c) && b--; u++) w = c * wt + (k[u] || 0), v[u] = w / E | 0, c = w % E | 0;
    else {
      for (c = wt / (E[0] + 1) | 0, c > 1 && (E = e3(E, c), k = e3(k, c), _ = E.length, P = k.length), x = _, m = k.slice(0, _), p = m.length; p < _; ) m[p++] = 0;
      M = E.slice(), M.unshift(0), S = E[0], E[1] >= wt / 2 && ++S;
      do
        c = 0, o = t(E, m, _, p), o < 0 ? (y = m[0], _ != p && (y = y * wt + (m[1] || 0)), c = y / S | 0, c > 1 ? (c >= wt && (c = wt - 1), h = e3(E, c), f = h.length, p = m.length, o = t(h, m, f, p), o == 1 && (c--, r(h, _ < f ? M : E, f))) : (c == 0 && (o = c = 1), h = E.slice()), f = h.length, f < p && h.unshift(0), r(m, h, p), o == -1 && (p = m.length, o = t(E, m, _, p), o < 1 && (c++, r(m, _ < p ? M : E, p))), p = m.length) : o === 0 && (c++, m = [0]), v[u++] = c, o && m[0] ? m[p++] = k[x] || 0 : (m = [k[x]], p = 1);
      while ((x++ < P || m[0] !== void 0) && b--);
    }
    return v[0] || v.shift(), d.e = l, Q(d, a ? s + ft(d) + 1 : s);
  };
})();
function q0(e3, t) {
  var r, n, i, s, a, o, l = 0, u = 0, c = e3.constructor, h = c.precision;
  if (ft(e3) > 16) throw Error(Rc + ft(e3));
  if (!e3.s) return new c(Jt);
  for (st = false, o = h, a = new c(0.03125); e3.abs().gte(0.1); ) e3 = e3.times(a), u += 5;
  for (n = Math.log(_r(2, u)) / Math.LN10 * 2 + 5 | 0, o += n, r = i = s = new c(Jt), c.precision = o; ; ) {
    if (i = Q(i.times(e3), o), r = r.times(++l), a = s.plus(qe(i, r, o)), Ee(a.d).slice(0, o) === Ee(s.d).slice(0, o)) {
      for (; u--; ) s = Q(s.times(s), o);
      return c.precision = h, t == null ? (st = true, Q(s, h)) : s;
    }
    s = a;
  }
}
function ft(e3) {
  for (var t = e3.e * it, r = e3.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Ll(e3, t, r) {
  if (t > e3.LN10.sd()) throw st = true, r && (e3.precision = r), Error(he + "LN10 precision limit exceeded");
  return Q(new e3(e3.LN10), t);
}
function ir(e3) {
  for (var t = ""; e3--; ) t += "0";
  return t;
}
function mi(e3, t) {
  var r, n, i, s, a, o, l, u, c, h = 1, f = 10, d = e3, v = d.d, m = d.constructor, p = m.precision;
  if (d.s < 1) throw Error(he + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Jt)) return new m(0);
  if (t == null ? (st = false, u = p) : u = t, d.eq(10)) return t == null && (st = true), Ll(m, u);
  if (u += f, m.precision = u, r = Ee(v), n = r.charAt(0), s = ft(d), Math.abs(s) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e3), r = Ee(d.d), n = r.charAt(0), h++;
    s = ft(d), n > 1 ? (d = new m("0." + r), s++) : d = new m(n + "." + r.slice(1));
  } else return l = Ll(m, u + 2, p).times(s + ""), d = mi(new m(n + "." + r.slice(1)), u - f).plus(l), m.precision = p, t == null ? (st = true, Q(d, p)) : d;
  for (o = a = d = qe(d.minus(Jt), d.plus(Jt), u), c = Q(d.times(d), u), i = 3; ; ) {
    if (a = Q(a.times(c), u), l = o.plus(qe(a, new m(i), u)), Ee(l.d).slice(0, u) === Ee(o.d).slice(0, u)) return o = o.times(2), s !== 0 && (o = o.plus(Ll(m, u + 2, p).times(s + ""))), o = qe(o, new m(h), u), m.precision = p, t == null ? (st = true, Q(o, p)) : o;
    o = l, i += 2;
  }
}
function zv(e3, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e3.e = In(r / it), e3.d = [], n = (r + 1) % it, r < 0 && (n += it), n < i) {
      for (n && e3.d.push(+t.slice(0, n)), i -= it; n < i; ) e3.d.push(+t.slice(n, n += it));
      t = t.slice(n), n = it - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e3.d.push(+t), st && (e3.e > Xs || e3.e < -Xs)) throw Error(Rc + r);
  } else e3.s = 0, e3.e = 0, e3.d = [0];
  return e3;
}
function Q(e3, t, r) {
  var n, i, s, a, o, l, u, c, h = e3.d;
  for (a = 1, s = h[0]; s >= 10; s /= 10) a++;
  if (n = t - a, n < 0) n += it, i = t, u = h[c = 0];
  else {
    if (c = Math.ceil((n + 1) / it), s = h.length, c >= s) return e3;
    for (u = s = h[c], a = 1; s >= 10; s /= 10) a++;
    n %= it, i = n - it + a;
  }
  if (r !== void 0 && (s = _r(10, a - i - 1), o = u / s % 10 | 0, l = t < 0 || h[c + 1] !== void 0 || u % s, l = r < 4 ? (o || l) && (r == 0 || r == (e3.s < 0 ? 3 : 2)) : o > 5 || o == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? u / _r(10, a - i) : 0 : h[c - 1]) % 10 & 1 || r == (e3.s < 0 ? 8 : 7))), t < 1 || !h[0]) return l ? (s = ft(e3), h.length = 1, t = t - s - 1, h[0] = _r(10, (it - t % it) % it), e3.e = In(-t / it) || 0) : (h.length = 1, h[0] = e3.e = e3.s = 0), e3;
  if (n == 0 ? (h.length = c, s = 1, c--) : (h.length = c + 1, s = _r(10, it - n), h[c] = i > 0 ? (u / _r(10, a - i) % _r(10, i) | 0) * s : 0), l) for (; ; ) if (c == 0) {
    (h[0] += s) == wt && (h[0] = 1, ++e3.e);
    break;
  } else {
    if (h[c] += s, h[c] != wt) break;
    h[c--] = 0, s = 1;
  }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (st && (e3.e > Xs || e3.e < -Xs)) throw Error(Rc + ft(e3));
  return e3;
}
function K0(e3, t) {
  var r, n, i, s, a, o, l, u, c, h, f = e3.constructor, d = f.precision;
  if (!e3.s || !t.s) return t.s ? t.s = -t.s : t = new f(e3), st ? Q(t, d) : t;
  if (l = e3.d, h = t.d, n = t.e, u = e3.e, l = l.slice(), a = u - n, a) {
    for (c = a < 0, c ? (r = l, a = -a, o = h.length) : (r = h, n = u, o = l.length), i = Math.max(Math.ceil(d / it), o) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, o = h.length, c = i < o, c && (o = i), i = 0; i < o; i++) if (l[i] != h[i]) {
      c = l[i] < h[i];
      break;
    }
    a = 0;
  }
  for (c && (r = l, l = h, h = r, t.s = -t.s), o = l.length, i = h.length - o; i > 0; --i) l[o++] = 0;
  for (i = h.length; i > a; ) {
    if (l[--i] < h[i]) {
      for (s = i; s && l[--s] === 0; ) l[s] = wt - 1;
      --l[s], l[i] += wt;
    }
    l[i] -= h[i];
  }
  for (; l[--o] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, st ? Q(t, d) : t) : new f(0);
}
function zr(e3, t, r) {
  var n, i = ft(e3), s = Ee(e3.d), a = s.length;
  return t ? (r && (n = r - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + ir(n) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (i < 0 ? "e" : "e+") + i) : i < 0 ? (s = "0." + ir(-i - 1) + s, r && (n = r - a) > 0 && (s += ir(n))) : i >= a ? (s += ir(i + 1 - a), r && (n = r - i - 1) > 0 && (s = s + "." + ir(n))) : ((n = i + 1) < a && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (s += "."), s += ir(n))), e3.s < 0 ? "-" + s : s;
}
function Bv(e3, t) {
  if (e3.length > t) return e3.length = t, true;
}
function U0(e3) {
  var t, r, n;
  function i(s) {
    var a = this;
    if (!(a instanceof i)) return new i(s);
    if (a.constructor = i, s instanceof i) {
      a.s = s.s, a.e = s.e, a.d = (s = s.d) ? s.slice() : s;
      return;
    }
    if (typeof s == "number") {
      if (s * 0 !== 0) throw Error(kr + s);
      if (s > 0) a.s = 1;
      else if (s < 0) s = -s, a.s = -1;
      else {
        a.s = 0, a.e = 0, a.d = [0];
        return;
      }
      if (s === ~~s && s < 1e7) {
        a.e = 0, a.d = [s];
        return;
      }
      return zv(a, s.toString());
    } else if (typeof s != "string") throw Error(kr + s);
    if (s.charCodeAt(0) === 45 ? (s = s.slice(1), a.s = -1) : a.s = 1, HE.test(s)) zv(a, s);
    else throw Error(kr + s);
  }
  if (i.prototype = N, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = U0, i.config = i.set = GE, e3 === void 0 && (e3 = {}), e3) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e3.hasOwnProperty(r = n[t++]) || (e3[r] = this[r]);
  return i.config(e3), i;
}
function GE(e3) {
  if (!e3 || typeof e3 != "object") throw Error(he + "Object expected");
  var t, r, n, i = ["precision", 1, kn, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e3[r = i[t]]) !== void 0) if (In(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(kr + r + ": " + n);
  if ((n = e3[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(kr + r + ": " + n);
  return this;
}
var $c = U0(YE);
Jt = new $c(1);
const K = $c;
function V0(e3) {
  var t;
  return e3 === 0 ? t = 1 : t = Math.floor(new K(e3).abs().log(10).toNumber()) + 1, t;
}
function Y0(e3, t, r) {
  for (var n = new K(e3), i = 0, s = []; n.lt(t) && i < 1e5; ) s.push(n.toNumber()), n = n.add(r), i++;
  return s;
}
var H0 = (e3) => {
  var [t, r] = e3, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, zc = (e3, t, r) => {
  if (e3.lte(0)) return new K(0);
  var n = V0(e3.toNumber()), i = new K(10).pow(n), s = e3.div(i), a = n !== 1 ? 0.05 : 0.1, o = new K(Math.ceil(s.div(a).toNumber())).add(r).mul(a), l = o.mul(i);
  return t ? new K(l.toNumber()) : new K(Math.ceil(l.toNumber()));
}, G0 = (e3, t, r) => {
  var n;
  if (e3.lte(0)) return new K(0);
  var i = [1, 2, 2.5, 5], s = e3.toNumber(), a = Math.floor(new K(s).abs().log(10).toNumber()), o = new K(10).pow(a), l = e3.div(o).toNumber(), u = i.findIndex((d) => d >= l - 1e-10);
  if (u === -1 && (o = o.mul(10), u = 0), u += r, u >= i.length) {
    var c = Math.floor(u / i.length);
    u %= i.length, o = o.mul(new K(10).pow(c));
  }
  var h = (n = i[u]) !== null && n !== void 0 ? n : 1, f = new K(h).mul(o);
  return t ? f : new K(Math.ceil(f.toNumber()));
}, XE = (e3, t, r) => {
  var n = new K(1), i = new K(e3);
  if (!i.isint() && r) {
    var s = Math.abs(e3);
    s < 1 ? (n = new K(10).pow(V0(e3) - 1), i = new K(Math.floor(i.div(n).toNumber())).mul(n)) : s > 1 && (i = new K(Math.floor(e3)));
  } else e3 === 0 ? i = new K(Math.floor((t - 1) / 2)) : r || (i = new K(Math.floor(e3)));
  for (var a = Math.floor((t - 1) / 2), o = [], l = 0; l < t; l++) o.push(i.add(new K(l - a).mul(n)).toNumber());
  return o;
}, X0 = function(t, r, n, i) {
  var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : zc;
  if (!Number.isFinite((r - t) / (n - 1))) return { step: new K(0), tickMin: new K(0), tickMax: new K(0) };
  var o = a(new K(r).sub(t).div(n - 1), i, s), l;
  t <= 0 && r >= 0 ? l = new K(0) : (l = new K(t).add(r).div(2), l = l.sub(new K(l).mod(o)));
  var u = Math.ceil(l.sub(t).div(o).toNumber()), c = Math.ceil(new K(r).sub(l).div(o).toNumber()), h = u + c + 1;
  return h > n ? X0(t, r, n, i, s + 1, a) : (h < n && (c = r > 0 ? c + (n - h) : c, u = r > 0 ? u : u + (n - h)), { step: o, tickMin: l.sub(new K(u).mul(o)), tickMax: l.add(new K(c).mul(o)) });
}, Fv = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", o = Math.max(i, 2), [l, u] = H0([r, n]);
  if (l === -1 / 0 || u === 1 / 0) {
    var c = u === 1 / 0 ? [l, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), u];
    return r > n ? c.reverse() : c;
  }
  if (l === u) return XE(l, i, s);
  var h = a === "snap125" ? G0 : zc, { step: f, tickMin: d, tickMax: v } = X0(l, u, o, s, 0, h), m = Y0(d, v.add(new K(0.1).mul(f)), f);
  return r > n ? m.reverse() : m;
}, Wv = function(t, r) {
  var [n, i] = t, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [o, l] = H0([n, i]);
  if (o === -1 / 0 || l === 1 / 0) return [n, i];
  if (o === l) return [o];
  var u = a === "snap125" ? G0 : zc, c = Math.max(r, 2), h = u(new K(l).sub(o).div(c - 1), s, 0), f = [...Y0(new K(o), new K(l), h), l];
  return s === false && (f = f.map((d) => Math.round(d))), n > i ? f.reverse() : f;
}, JE = (e3) => e3.rootProps.barCategoryGap, Xa = (e3) => e3.rootProps.stackOffset, J0 = (e3) => e3.rootProps.reverseStackOrder, Bc = (e3) => e3.options.chartName, Fc = (e3) => e3.rootProps.syncId, Z0 = (e3) => e3.rootProps.syncMethod, Wc = (e3) => e3.options.eventEmitter, ZE = (e3) => e3.rootProps.baseValue, Tt = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 }, gr = { allowDecimals: false, allowDataOverflow: false, angleAxisId: 0, reversed: false, scale: "auto", tick: true, type: "auto" }, Pe = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, includeHidden: false, radiusAxisId: 0, reversed: false, scale: "auto", tick: true, tickCount: 5, type: "auto" }, Ja = (e3, t) => {
  if (!(!e3 || !t)) return e3 != null && e3.reversed ? [t[1], t[0]] : t;
};
function Za(e3, t, r) {
  if (r !== "auto") return r;
  if (e3 != null) return be(e3, t) ? "category" : "number";
}
function qv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Js(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(r), true).forEach(function(n) {
      QE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function QE(e3, t, r) {
  return (t = tA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function tA(e3) {
  var t = eA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Kv = { allowDataOverflow: gr.allowDataOverflow, allowDecimals: gr.allowDecimals, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: gr.angleAxisId, includeHidden: false, name: void 0, reversed: gr.reversed, scale: gr.scale, tick: gr.tick, tickCount: void 0, ticks: void 0, type: gr.type, unit: void 0, niceTicks: "auto" }, Uv = { allowDataOverflow: Pe.allowDataOverflow, allowDecimals: Pe.allowDecimals, allowDuplicatedCategory: Pe.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Pe.radiusAxisId, includeHidden: Pe.includeHidden, name: void 0, reversed: Pe.reversed, scale: Pe.scale, tick: Pe.tick, tickCount: Pe.tickCount, ticks: void 0, type: Pe.type, unit: void 0, niceTicks: "auto" }, rA = (e3, t) => {
  if (t != null) return e3.polarAxis.angleAxis[t];
}, qc = O([rA, x0], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = Za(t, "angleAxis", Kv.type)) !== null && r !== void 0 ? r : "category";
  return Js(Js({}, Kv), {}, { type: n });
}), nA = (e3, t) => e3.polarAxis.radiusAxis[t], Kc = O([nA, x0], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = Za(t, "radiusAxis", Uv.type)) !== null && r !== void 0 ? r : "category";
  return Js(Js({}, Uv), {}, { type: n });
}), Qa = (e3) => e3.polarOptions, Uc = O([Ge, Xe, Ct], AE), Q0 = O([Qa, Uc], (e3, t) => {
  if (e3 != null) return hr(e3.innerRadius, t, 0);
}), tb = O([Qa, Uc], (e3, t) => {
  if (e3 != null) return hr(e3.outerRadius, t, t * 0.8);
}), iA = (e3) => {
  if (e3 == null) return [0, 0];
  var { startAngle: t, endAngle: r } = e3;
  return [t, r];
}, eb = O([Qa], iA);
O([qc, eb], Ja);
var rb = O([Uc, Q0, tb], (e3, t, r) => {
  if (!(e3 == null || t == null || r == null)) return [t, r];
});
O([Kc, rb], Ja);
var nb = O([rt, Qa, Q0, tb, Ge, Xe], (e3, t, r, n, i, s) => {
  if (!(e3 !== "centric" && e3 !== "radial" || t == null || r == null || n == null)) {
    var { cx: a, cy: o, startAngle: l, endAngle: u } = t;
    return { cx: hr(a, i, i / 2), cy: hr(o, s, s / 2), innerRadius: r, outerRadius: n, startAngle: l, endAngle: u, clockWise: false };
  }
}), xt = (e3, t) => t, to = (e3, t, r) => r;
function Vc(e3) {
  return e3 == null ? void 0 : e3.id;
}
function ib(e3, t, r) {
  var { chartData: n = [] } = t, { allowDuplicatedCategory: i, dataKey: s } = r, a = /* @__PURE__ */ new Map();
  return e3.forEach((o) => {
    var l, u = (l = o.data) !== null && l !== void 0 ? l : n;
    if (!(u == null || u.length === 0)) {
      var c = Vc(o);
      u.forEach((h, f) => {
        var d = s == null || i ? f : String(ht(h, s, null)), v = ht(h, o.dataKey, 0), m;
        a.has(d) ? m = a.get(d) : m = {}, Object.assign(m, { [c]: v }), a.set(d, m);
      });
    }
  }), Array.from(a.values());
}
function Yc(e3) {
  return "stackId" in e3 && e3.stackId != null && e3.dataKey != null;
}
var eo = (e3, t) => e3 === t ? true : e3 == null || t == null ? false : e3[0] === t[0] && e3[1] === t[1];
function ro(e3, t) {
  return Array.isArray(e3) && Array.isArray(t) && e3.length === 0 && t.length === 0 ? true : e3 === t;
}
function sA(e3, t) {
  if (e3.length === t.length) {
    for (var r = 0; r < e3.length; r++) if (e3[r] !== t[r]) return false;
    return true;
  }
  return false;
}
var Pt = (e3) => {
  var t = rt(e3);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, jn = (e3) => e3.tooltip.settings.axisId;
function Hc(e3) {
  if (e3 != null) {
    var t = e3.ticks, r = e3.bandwidth, n = e3.range(), i = [Math.min(...n), Math.max(...n)];
    return { domain: () => e3.domain(), range: (function(s) {
      function a() {
        return s.apply(this, arguments);
      }
      return a.toString = function() {
        return s.toString();
      }, a;
    })(() => i), rangeMin: () => i[0], rangeMax: () => i[1], isInRange(s) {
      var a = i[0], o = i[1];
      return a <= o ? s >= a && s <= o : s >= o && s <= a;
    }, bandwidth: r ? () => r.call(e3) : void 0, ticks: t ? (s) => t.call(e3, s) : void 0, map: (s, a) => {
      var o = e3(s);
      if (o != null) {
        if (e3.bandwidth && a !== null && a !== void 0 && a.position) {
          var l = e3.bandwidth();
          switch (a.position) {
            case "middle":
              o += l / 2;
              break;
            case "end":
              o += l;
              break;
          }
        }
        return o;
      }
    } };
  }
}
var aA = (e3, t) => {
  if (t != null) switch (e3) {
    case "linear": {
      if (!Ae(t)) {
        for (var r, n, i = 0; i < t.length; i++) {
          var s = t[i];
          q(s) && ((r === void 0 || s < r) && (r = s), (n === void 0 || s > n) && (n = s));
        }
        return r !== void 0 && n !== void 0 ? [r, n] : void 0;
      }
      return t;
    }
    default:
      return t;
  }
};
function ur(e3, t) {
  return e3 == null || t == null ? NaN : e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
}
function oA(e3, t) {
  return e3 == null || t == null ? NaN : t < e3 ? -1 : t > e3 ? 1 : t >= e3 ? 0 : NaN;
}
function Gc(e3) {
  let t, r, n;
  e3.length !== 2 ? (t = ur, r = (o, l) => ur(e3(o), l), n = (o, l) => e3(o) - l) : (t = e3 === ur || e3 === oA ? e3 : lA, r = e3, n = e3);
  function i(o, l, u = 0, c = o.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        r(o[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function s(o, l, u = 0, c = o.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        r(o[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(o, l, u = 0, c = o.length) {
    const h = i(o, l, u, c - 1);
    return h > u && n(o[h - 1], l) > -n(o[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: s };
}
function lA() {
  return 0;
}
function sb(e3) {
  return e3 === null ? NaN : +e3;
}
function* uA(e3, t) {
  for (let r of e3) r != null && (r = +r) >= r && (yield r);
}
const cA = Gc(ur), $i = cA.right;
Gc(sb).center;
class Vv extends Map {
  constructor(t, r = dA) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Yv(this, t));
  }
  has(t) {
    return super.has(Yv(this, t));
  }
  set(t, r) {
    return super.set(hA(this, t), r);
  }
  delete(t) {
    return super.delete(fA(this, t));
  }
}
function Yv({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : r;
}
function hA({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : (e3.set(n, r), r);
}
function fA({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) && (r = e3.get(n), e3.delete(n)), r;
}
function dA(e3) {
  return e3 !== null && typeof e3 == "object" ? e3.valueOf() : e3;
}
function vA(e3 = ur) {
  if (e3 === ur) return ab;
  if (typeof e3 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e3(t, r);
    return n || n === 0 ? n : (e3(r, r) === 0) - (e3(t, t) === 0);
  };
}
function ab(e3, t) {
  return (e3 == null || !(e3 >= e3)) - (t == null || !(t >= t)) || (e3 < t ? -1 : e3 > t ? 1 : 0);
}
const pA = Math.sqrt(50), mA = Math.sqrt(10), gA = Math.sqrt(2);
function Zs(e3, t, r) {
  const n = (t - e3) / Math.max(0, r), i = Math.floor(Math.log10(n)), s = n / Math.pow(10, i), a = s >= pA ? 10 : s >= mA ? 5 : s >= gA ? 2 : 1;
  let o, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, o = Math.round(e3 * u), l = Math.round(t * u), o / u < e3 && ++o, l / u > t && --l, u = -u) : (u = Math.pow(10, i) * a, o = Math.round(e3 / u), l = Math.round(t / u), o * u < e3 && ++o, l * u > t && --l), l < o && 0.5 <= r && r < 2 ? Zs(e3, t, r * 2) : [o, l, u];
}
function Vu(e3, t, r) {
  if (t = +t, e3 = +e3, r = +r, !(r > 0)) return [];
  if (e3 === t) return [e3];
  const n = t < e3, [i, s, a] = n ? Zs(t, e3, r) : Zs(e3, t, r);
  if (!(s >= i)) return [];
  const o = s - i + 1, l = new Array(o);
  if (n) if (a < 0) for (let u = 0; u < o; ++u) l[u] = (s - u) / -a;
  else for (let u = 0; u < o; ++u) l[u] = (s - u) * a;
  else if (a < 0) for (let u = 0; u < o; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < o; ++u) l[u] = (i + u) * a;
  return l;
}
function Yu(e3, t, r) {
  return t = +t, e3 = +e3, r = +r, Zs(e3, t, r)[2];
}
function Hu(e3, t, r) {
  t = +t, e3 = +e3, r = +r;
  const n = t < e3, i = n ? Yu(t, e3, r) : Yu(e3, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Hv(e3, t) {
  let r;
  for (const n of e3) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Gv(e3, t) {
  let r;
  for (const n of e3) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function ob(e3, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e3.length - 1, n)), !(r <= t && t <= n)) return e3;
  for (i = i === void 0 ? ab : vA(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, u = t - r + 1, c = Math.log(l), h = 0.5 * Math.exp(2 * c / 3), f = 0.5 * Math.sqrt(c * h * (l - h) / l) * (u - l / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * h / l + f)), v = Math.min(n, Math.floor(t + (l - u) * h / l + f));
      ob(e3, t, d, v, i);
    }
    const s = e3[t];
    let a = r, o = n;
    for (Un(e3, r, t), i(e3[n], s) > 0 && Un(e3, r, n); a < o; ) {
      for (Un(e3, a, o), ++a, --o; i(e3[a], s) < 0; ) ++a;
      for (; i(e3[o], s) > 0; ) --o;
    }
    i(e3[r], s) === 0 ? Un(e3, r, o) : (++o, Un(e3, o, n)), o <= t && (r = o + 1), t <= o && (n = o - 1);
  }
  return e3;
}
function Un(e3, t, r) {
  const n = e3[t];
  e3[t] = e3[r], e3[r] = n;
}
function yA(e3, t, r) {
  if (e3 = Float64Array.from(uA(e3)), !(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Gv(e3);
    if (t >= 1) return Hv(e3);
    var n, i = (n - 1) * t, s = Math.floor(i), a = Hv(ob(e3, s).subarray(0, s + 1)), o = Gv(e3.subarray(s + 1));
    return a + (o - a) * (i - s);
  }
}
function bA(e3, t, r = sb) {
  if (!(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e3[0], 0, e3);
    if (t >= 1) return +r(e3[n - 1], n - 1, e3);
    var n, i = (n - 1) * t, s = Math.floor(i), a = +r(e3[s], s, e3), o = +r(e3[s + 1], s + 1, e3);
    return a + (o - a) * (i - s);
  }
}
function wA(e3, t, r) {
  e3 = +e3, t = +t, r = (i = arguments.length) < 2 ? (t = e3, e3 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e3) / r)) | 0, s = new Array(i); ++n < i; ) s[n] = e3 + n * r;
  return s;
}
function fe(e3, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e3);
      break;
    default:
      this.range(t).domain(e3);
      break;
  }
  return this;
}
function Je(e3, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e3 == "function" ? this.interpolator(e3) : this.range(e3);
      break;
    }
    default: {
      this.domain(e3), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Gu = Symbol("implicit");
function Xc() {
  var e3 = new Vv(), t = [], r = [], n = Gu;
  function i(s) {
    let a = e3.get(s);
    if (a === void 0) {
      if (n !== Gu) return n;
      e3.set(s, a = t.push(s) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e3 = new Vv();
    for (const a of s) e3.has(a) || e3.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(s) {
    return arguments.length ? (r = Array.from(s), i) : r.slice();
  }, i.unknown = function(s) {
    return arguments.length ? (n = s, i) : n;
  }, i.copy = function() {
    return Xc(t, r).unknown(n);
  }, fe.apply(i, arguments), i;
}
function Jc() {
  var e3 = Xc().unknown(void 0), t = e3.domain, r = e3.range, n = 0, i = 1, s, a, o = false, l = 0, u = 0, c = 0.5;
  delete e3.unknown;
  function h() {
    var f = t().length, d = i < n, v = d ? i : n, m = d ? n : i;
    s = (m - v) / Math.max(1, f - l + u * 2), o && (s = Math.floor(s)), v += (m - v - s * (f - l)) * c, a = s * (1 - l), o && (v = Math.round(v), a = Math.round(a));
    var p = wA(f).map(function(y) {
      return v + s * y;
    });
    return r(d ? p.reverse() : p);
  }
  return e3.domain = function(f) {
    return arguments.length ? (t(f), h()) : t();
  }, e3.range = function(f) {
    return arguments.length ? ([n, i] = f, n = +n, i = +i, h()) : [n, i];
  }, e3.rangeRound = function(f) {
    return [n, i] = f, n = +n, i = +i, o = true, h();
  }, e3.bandwidth = function() {
    return a;
  }, e3.step = function() {
    return s;
  }, e3.round = function(f) {
    return arguments.length ? (o = !!f, h()) : o;
  }, e3.padding = function(f) {
    return arguments.length ? (l = Math.min(1, u = +f), h()) : l;
  }, e3.paddingInner = function(f) {
    return arguments.length ? (l = Math.min(1, f), h()) : l;
  }, e3.paddingOuter = function(f) {
    return arguments.length ? (u = +f, h()) : u;
  }, e3.align = function(f) {
    return arguments.length ? (c = Math.max(0, Math.min(1, f)), h()) : c;
  }, e3.copy = function() {
    return Jc(t(), [n, i]).round(o).paddingInner(l).paddingOuter(u).align(c);
  }, fe.apply(h(), arguments);
}
function lb(e3) {
  var t = e3.copy;
  return e3.padding = e3.paddingOuter, delete e3.paddingInner, delete e3.paddingOuter, e3.copy = function() {
    return lb(t());
  }, e3;
}
function xA() {
  return lb(Jc.apply(null, arguments).paddingInner(1));
}
function Zc(e3, t, r) {
  e3.prototype = t.prototype = r, r.constructor = e3;
}
function ub(e3, t) {
  var r = Object.create(e3.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function zi() {
}
var gi = 0.7, Qs = 1 / gi, vn = "\\s*([+-]?\\d+)\\s*", yi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", PA = /^#([0-9a-f]{3,8})$/, SA = new RegExp(`^rgb\\(${vn},${vn},${vn}\\)$`), _A = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`), OA = new RegExp(`^rgba\\(${vn},${vn},${vn},${yi}\\)$`), MA = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${yi}\\)$`), EA = new RegExp(`^hsl\\(${yi},${Ce},${Ce}\\)$`), AA = new RegExp(`^hsla\\(${yi},${Ce},${Ce},${yi}\\)$`), Xv = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Zc(zi, bi, { copy(e3) {
  return Object.assign(new this.constructor(), this, e3);
}, displayable() {
  return this.rgb().displayable();
}, hex: Jv, formatHex: Jv, formatHex8: CA, formatHsl: kA, formatRgb: Zv, toString: Zv });
function Jv() {
  return this.rgb().formatHex();
}
function CA() {
  return this.rgb().formatHex8();
}
function kA() {
  return cb(this).formatHsl();
}
function Zv() {
  return this.rgb().formatRgb();
}
function bi(e3) {
  var t, r;
  return e3 = (e3 + "").trim().toLowerCase(), (t = PA.exec(e3)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Qv(t) : r === 3 ? new Yt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ns(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ns(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = SA.exec(e3)) ? new Yt(t[1], t[2], t[3], 1) : (t = _A.exec(e3)) ? new Yt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = OA.exec(e3)) ? ns(t[1], t[2], t[3], t[4]) : (t = MA.exec(e3)) ? ns(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = EA.exec(e3)) ? rp(t[1], t[2] / 100, t[3] / 100, 1) : (t = AA.exec(e3)) ? rp(t[1], t[2] / 100, t[3] / 100, t[4]) : Xv.hasOwnProperty(e3) ? Qv(Xv[e3]) : e3 === "transparent" ? new Yt(NaN, NaN, NaN, 0) : null;
}
function Qv(e3) {
  return new Yt(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
}
function ns(e3, t, r, n) {
  return n <= 0 && (e3 = t = r = NaN), new Yt(e3, t, r, n);
}
function IA(e3) {
  return e3 instanceof zi || (e3 = bi(e3)), e3 ? (e3 = e3.rgb(), new Yt(e3.r, e3.g, e3.b, e3.opacity)) : new Yt();
}
function Xu(e3, t, r, n) {
  return arguments.length === 1 ? IA(e3) : new Yt(e3, t, r, n ?? 1);
}
function Yt(e3, t, r, n) {
  this.r = +e3, this.g = +t, this.b = +r, this.opacity = +n;
}
Zc(Yt, Xu, ub(zi, { brighter(e3) {
  return e3 = e3 == null ? Qs : Math.pow(Qs, e3), new Yt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? gi : Math.pow(gi, e3), new Yt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Yt(Ir(this.r), Ir(this.g), Ir(this.b), ta(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: tp, formatHex: tp, formatHex8: jA, formatRgb: ep, toString: ep }));
function tp() {
  return `#${Mr(this.r)}${Mr(this.g)}${Mr(this.b)}`;
}
function jA() {
  return `#${Mr(this.r)}${Mr(this.g)}${Mr(this.b)}${Mr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ep() {
  const e3 = ta(this.opacity);
  return `${e3 === 1 ? "rgb(" : "rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
}
function ta(e3) {
  return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
}
function Ir(e3) {
  return Math.max(0, Math.min(255, Math.round(e3) || 0));
}
function Mr(e3) {
  return e3 = Ir(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
}
function rp(e3, t, r, n) {
  return n <= 0 ? e3 = t = r = NaN : r <= 0 || r >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new me(e3, t, r, n);
}
function cb(e3) {
  if (e3 instanceof me) return new me(e3.h, e3.s, e3.l, e3.opacity);
  if (e3 instanceof zi || (e3 = bi(e3)), !e3) return new me();
  if (e3 instanceof me) return e3;
  e3 = e3.rgb();
  var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, i = Math.min(t, r, n), s = Math.max(t, r, n), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (r - n) / o + (r < n) * 6 : r === s ? a = (n - t) / o + 2 : a = (t - r) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new me(a, o, l, e3.opacity);
}
function TA(e3, t, r, n) {
  return arguments.length === 1 ? cb(e3) : new me(e3, t, r, n ?? 1);
}
function me(e3, t, r, n) {
  this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
}
Zc(me, TA, ub(zi, { brighter(e3) {
  return e3 = e3 == null ? Qs : Math.pow(Qs, e3), new me(this.h, this.s, this.l * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? gi : Math.pow(gi, e3), new me(this.h, this.s, this.l * e3, this.opacity);
}, rgb() {
  var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Yt(Rl(e3 >= 240 ? e3 - 240 : e3 + 120, i, n), Rl(e3, i, n), Rl(e3 < 120 ? e3 + 240 : e3 - 120, i, n), this.opacity);
}, clamp() {
  return new me(np(this.h), is(this.s), is(this.l), ta(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e3 = ta(this.opacity);
  return `${e3 === 1 ? "hsl(" : "hsla("}${np(this.h)}, ${is(this.s) * 100}%, ${is(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
} }));
function np(e3) {
  return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
}
function is(e3) {
  return Math.max(0, Math.min(1, e3 || 0));
}
function Rl(e3, t, r) {
  return (e3 < 60 ? t + (r - t) * e3 / 60 : e3 < 180 ? r : e3 < 240 ? t + (r - t) * (240 - e3) / 60 : t) * 255;
}
const Qc = (e3) => () => e3;
function NA(e3, t) {
  return function(r) {
    return e3 + r * t;
  };
}
function DA(e3, t, r) {
  return e3 = Math.pow(e3, r), t = Math.pow(t, r) - e3, r = 1 / r, function(n) {
    return Math.pow(e3 + n * t, r);
  };
}
function LA(e3) {
  return (e3 = +e3) == 1 ? hb : function(t, r) {
    return r - t ? DA(t, r, e3) : Qc(isNaN(t) ? r : t);
  };
}
function hb(e3, t) {
  var r = t - e3;
  return r ? NA(e3, r) : Qc(isNaN(e3) ? t : e3);
}
const ip = (function e(t) {
  var r = LA(t);
  function n(i, s) {
    var a = r((i = Xu(i)).r, (s = Xu(s)).r), o = r(i.g, s.g), l = r(i.b, s.b), u = hb(i.opacity, s.opacity);
    return function(c) {
      return i.r = a(c), i.g = o(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function RA(e3, t) {
  t || (t = []);
  var r = e3 ? Math.min(t.length, e3.length) : 0, n = t.slice(), i;
  return function(s) {
    for (i = 0; i < r; ++i) n[i] = e3[i] * (1 - s) + t[i] * s;
    return n;
  };
}
function $A(e3) {
  return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
}
function zA(e3, t) {
  var r = t ? t.length : 0, n = e3 ? Math.min(r, e3.length) : 0, i = new Array(n), s = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = Tn(e3[a], t[a]);
  for (; a < r; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < n; ++a) s[a] = i[a](o);
    return s;
  };
}
function BA(e3, t) {
  var r = /* @__PURE__ */ new Date();
  return e3 = +e3, t = +t, function(n) {
    return r.setTime(e3 * (1 - n) + t * n), r;
  };
}
function ea(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return e3 * (1 - r) + t * r;
  };
}
function FA(e3, t) {
  var r = {}, n = {}, i;
  (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e3 ? r[i] = Tn(e3[i], t[i]) : n[i] = t[i];
  return function(s) {
    for (i in r) n[i] = r[i](s);
    return n;
  };
}
var Ju = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $l = new RegExp(Ju.source, "g");
function WA(e3) {
  return function() {
    return e3;
  };
}
function qA(e3) {
  return function(t) {
    return e3(t) + "";
  };
}
function KA(e3, t) {
  var r = Ju.lastIndex = $l.lastIndex = 0, n, i, s, a = -1, o = [], l = [];
  for (e3 = e3 + "", t = t + ""; (n = Ju.exec(e3)) && (i = $l.exec(t)); ) (s = i.index) > r && (s = t.slice(r, s), o[a] ? o[a] += s : o[++a] = s), (n = n[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: ea(n, i) })), r = $l.lastIndex;
  return r < t.length && (s = t.slice(r), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? qA(l[0].x) : WA(t) : (t = l.length, function(u) {
    for (var c = 0, h; c < t; ++c) o[(h = l[c]).i] = h.x(u);
    return o.join("");
  });
}
function Tn(e3, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Qc(t) : (r === "number" ? ea : r === "string" ? (n = bi(t)) ? (t = n, ip) : KA : t instanceof bi ? ip : t instanceof Date ? BA : $A(t) ? RA : Array.isArray(t) ? zA : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? FA : ea)(e3, t);
}
function th(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return Math.round(e3 * (1 - r) + t * r);
  };
}
function UA(e3, t) {
  t === void 0 && (t = e3, e3 = Tn);
  for (var r = 0, n = t.length - 1, i = t[0], s = new Array(n < 0 ? 0 : n); r < n; ) s[r] = e3(i, i = t[++r]);
  return function(a) {
    var o = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return s[o](a - o);
  };
}
function VA(e3) {
  return function() {
    return e3;
  };
}
function ra(e3) {
  return +e3;
}
var sp = [0, 1];
function $t(e3) {
  return e3;
}
function Zu(e3, t) {
  return (t -= e3 = +e3) ? function(r) {
    return (r - e3) / t;
  } : VA(isNaN(t) ? NaN : 0.5);
}
function YA(e3, t) {
  var r;
  return e3 > t && (r = e3, e3 = t, t = r), function(n) {
    return Math.max(e3, Math.min(t, n));
  };
}
function HA(e3, t, r) {
  var n = e3[0], i = e3[1], s = t[0], a = t[1];
  return i < n ? (n = Zu(i, n), s = r(a, s)) : (n = Zu(n, i), s = r(s, a)), function(o) {
    return s(n(o));
  };
}
function GA(e3, t, r) {
  var n = Math.min(e3.length, t.length) - 1, i = new Array(n), s = new Array(n), a = -1;
  for (e3[n] < e3[0] && (e3 = e3.slice().reverse(), t = t.slice().reverse()); ++a < n; ) i[a] = Zu(e3[a], e3[a + 1]), s[a] = r(t[a], t[a + 1]);
  return function(o) {
    var l = $i(e3, o, 1, n) - 1;
    return s[l](i[l](o));
  };
}
function Bi(e3, t) {
  return t.domain(e3.domain()).range(e3.range()).interpolate(e3.interpolate()).clamp(e3.clamp()).unknown(e3.unknown());
}
function no() {
  var e3 = sp, t = sp, r = Tn, n, i, s, a = $t, o, l, u;
  function c() {
    var f = Math.min(e3.length, t.length);
    return a !== $t && (a = YA(e3[0], e3[f - 1])), o = f > 2 ? GA : HA, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? s : (l || (l = o(e3.map(n), t, r)))(n(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = o(t, e3.map(n), ea)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (e3 = Array.from(f, ra), c()) : e3.slice();
  }, h.range = function(f) {
    return arguments.length ? (t = Array.from(f), c()) : t.slice();
  }, h.rangeRound = function(f) {
    return t = Array.from(f), r = th, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? true : $t, c()) : a !== $t;
  }, h.interpolate = function(f) {
    return arguments.length ? (r = f, c()) : r;
  }, h.unknown = function(f) {
    return arguments.length ? (s = f, h) : s;
  }, function(f, d) {
    return n = f, i = d, c();
  };
}
function eh() {
  return no()($t, $t);
}
function XA(e3) {
  return Math.abs(e3 = Math.round(e3)) >= 1e21 ? e3.toLocaleString("en").replace(/,/g, "") : e3.toString(10);
}
function na(e3, t) {
  if (!isFinite(e3) || e3 === 0) return null;
  var r = (e3 = t ? e3.toExponential(t - 1) : e3.toExponential()).indexOf("e"), n = e3.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e3.slice(r + 1)];
}
function Pn(e3) {
  return e3 = na(Math.abs(e3)), e3 ? e3[1] : NaN;
}
function JA(e3, t) {
  return function(r, n) {
    for (var i = r.length, s = [], a = 0, o = e3[0], l = 0; i > 0 && o > 0 && (l + o + 1 > n && (o = Math.max(1, n - l)), s.push(r.substring(i -= o, i + o)), !((l += o + 1) > n)); ) o = e3[a = (a + 1) % e3.length];
    return s.reverse().join(t);
  };
}
function ZA(e3) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e3[+r];
    });
  };
}
var QA = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wi(e3) {
  if (!(t = QA.exec(e3))) throw new Error("invalid format: " + e3);
  var t;
  return new rh({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
wi.prototype = rh.prototype;
function rh(e3) {
  this.fill = e3.fill === void 0 ? " " : e3.fill + "", this.align = e3.align === void 0 ? ">" : e3.align + "", this.sign = e3.sign === void 0 ? "-" : e3.sign + "", this.symbol = e3.symbol === void 0 ? "" : e3.symbol + "", this.zero = !!e3.zero, this.width = e3.width === void 0 ? void 0 : +e3.width, this.comma = !!e3.comma, this.precision = e3.precision === void 0 ? void 0 : +e3.precision, this.trim = !!e3.trim, this.type = e3.type === void 0 ? "" : e3.type + "";
}
rh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function tC(e3) {
  t: for (var t = e3.length, r = 1, n = -1, i; r < t; ++r) switch (e3[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e3[r]) break t;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e3.slice(0, n) + e3.slice(i + 1) : e3;
}
var ia;
function eC(e3, t) {
  var r = na(e3, t);
  if (!r) return ia = void 0, e3.toPrecision(t);
  var n = r[0], i = r[1], s = i - (ia = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return s === a ? n : s > a ? n + new Array(s - a + 1).join("0") : s > 0 ? n.slice(0, s) + "." + n.slice(s) : "0." + new Array(1 - s).join("0") + na(e3, Math.max(0, t + s - 1))[0];
}
function ap(e3, t) {
  var r = na(e3, t);
  if (!r) return e3 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const op = { "%": (e3, t) => (e3 * 100).toFixed(t), b: (e3) => Math.round(e3).toString(2), c: (e3) => e3 + "", d: XA, e: (e3, t) => e3.toExponential(t), f: (e3, t) => e3.toFixed(t), g: (e3, t) => e3.toPrecision(t), o: (e3) => Math.round(e3).toString(8), p: (e3, t) => ap(e3 * 100, t), r: ap, s: eC, X: (e3) => Math.round(e3).toString(16).toUpperCase(), x: (e3) => Math.round(e3).toString(16) };
function lp(e3) {
  return e3;
}
var up = Array.prototype.map, cp = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rC(e3) {
  var t = e3.grouping === void 0 || e3.thousands === void 0 ? lp : JA(up.call(e3.grouping, Number), e3.thousands + ""), r = e3.currency === void 0 ? "" : e3.currency[0] + "", n = e3.currency === void 0 ? "" : e3.currency[1] + "", i = e3.decimal === void 0 ? "." : e3.decimal + "", s = e3.numerals === void 0 ? lp : ZA(up.call(e3.numerals, String)), a = e3.percent === void 0 ? "%" : e3.percent + "", o = e3.minus === void 0 ? "\u2212" : e3.minus + "", l = e3.nan === void 0 ? "NaN" : e3.nan + "";
  function u(h, f) {
    h = wi(h);
    var d = h.fill, v = h.align, m = h.sign, p = h.symbol, y = h.zero, b = h.width, w = h.comma, x = h.precision, P = h.trim, S = h.type;
    S === "n" ? (w = true, S = "g") : op[S] || (x === void 0 && (x = 12), P = true, S = "g"), (y || d === "0" && v === "=") && (y = true, d = "0", v = "=");
    var _ = (f && f.prefix !== void 0 ? f.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""), M = (p === "$" ? n : /[%p]/.test(S) ? a : "") + (f && f.suffix !== void 0 ? f.suffix : ""), A = op[S], j = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function k(E) {
      var $ = _, R = M, B, H, W;
      if (S === "c") R = A(E) + R, E = "";
      else {
        E = +E;
        var G = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? l : A(Math.abs(E), x), P && (E = tC(E)), G && +E == 0 && m !== "+" && (G = false), $ = (G ? m === "(" ? m : o : m === "-" || m === "(" ? "" : m) + $, R = (S === "s" && !isNaN(E) && ia !== void 0 ? cp[8 + ia / 3] : "") + R + (G && m === "(" ? ")" : ""), j) {
          for (B = -1, H = E.length; ++B < H; ) if (W = E.charCodeAt(B), 48 > W || W > 57) {
            R = (W === 46 ? i + E.slice(B + 1) : E.slice(B)) + R, E = E.slice(0, B);
            break;
          }
        }
      }
      w && !y && (E = t(E, 1 / 0));
      var F = $.length + E.length + R.length, U = F < b ? new Array(b - F + 1).join(d) : "";
      switch (w && y && (E = t(U + E, U.length ? b - R.length : 1 / 0), U = ""), v) {
        case "<":
          E = $ + E + R + U;
          break;
        case "=":
          E = $ + U + E + R;
          break;
        case "^":
          E = U.slice(0, F = U.length >> 1) + $ + E + R + U.slice(F);
          break;
        default:
          E = U + $ + E + R;
          break;
      }
      return s(E);
    }
    return k.toString = function() {
      return h + "";
    }, k;
  }
  function c(h, f) {
    var d = Math.max(-8, Math.min(8, Math.floor(Pn(f) / 3))) * 3, v = Math.pow(10, -d), m = u((h = wi(h), h.type = "f", h), { suffix: cp[8 + d / 3] });
    return function(p) {
      return m(v * p);
    };
  }
  return { format: u, formatPrefix: c };
}
var ss, nh, fb;
nC({ thousands: ",", grouping: [3], currency: ["$", ""] });
function nC(e3) {
  return ss = rC(e3), nh = ss.format, fb = ss.formatPrefix, ss;
}
function iC(e3) {
  return Math.max(0, -Pn(Math.abs(e3)));
}
function sC(e3, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e3)));
}
function aC(e3, t) {
  return e3 = Math.abs(e3), t = Math.abs(t) - e3, Math.max(0, Pn(t) - Pn(e3)) + 1;
}
function db(e3, t, r, n) {
  var i = Hu(e3, t, r), s;
  switch (n = wi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e3), Math.abs(t));
      return n.precision == null && !isNaN(s = sC(i, a)) && (n.precision = s), fb(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(s = aC(i, Math.max(Math.abs(e3), Math.abs(t)))) && (n.precision = s - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(s = iC(i)) && (n.precision = s - (n.type === "%") * 2);
      break;
    }
  }
  return nh(n);
}
function vr(e3) {
  var t = e3.domain;
  return e3.ticks = function(r) {
    var n = t();
    return Vu(n[0], n[n.length - 1], r ?? 10);
  }, e3.tickFormat = function(r, n) {
    var i = t();
    return db(i[0], i[i.length - 1], r ?? 10, n);
  }, e3.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, s = n.length - 1, a = n[i], o = n[s], l, u, c = 10;
    for (o < a && (u = a, a = o, o = u, u = i, i = s, s = u); c-- > 0; ) {
      if (u = Yu(a, o, r), u === l) return n[i] = a, n[s] = o, t(n);
      if (u > 0) a = Math.floor(a / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0) a = Math.ceil(a * u) / u, o = Math.floor(o * u) / u;
      else break;
      l = u;
    }
    return e3;
  }, e3;
}
function vb() {
  var e3 = eh();
  return e3.copy = function() {
    return Bi(e3, vb());
  }, fe.apply(e3, arguments), vr(e3);
}
function pb(e3) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e3 = Array.from(n, ra), r) : e3.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return pb(e3).unknown(t);
  }, e3 = arguments.length ? Array.from(e3, ra) : [0, 1], vr(r);
}
function mb(e3, t) {
  e3 = e3.slice();
  var r = 0, n = e3.length - 1, i = e3[r], s = e3[n], a;
  return s < i && (a = r, r = n, n = a, a = i, i = s, s = a), e3[r] = t.floor(i), e3[n] = t.ceil(s), e3;
}
function hp(e3) {
  return Math.log(e3);
}
function fp(e3) {
  return Math.exp(e3);
}
function oC(e3) {
  return -Math.log(-e3);
}
function lC(e3) {
  return -Math.exp(-e3);
}
function uC(e3) {
  return isFinite(e3) ? +("1e" + e3) : e3 < 0 ? 0 : e3;
}
function cC(e3) {
  return e3 === 10 ? uC : e3 === Math.E ? Math.exp : (t) => Math.pow(e3, t);
}
function hC(e3) {
  return e3 === Math.E ? Math.log : e3 === 10 && Math.log10 || e3 === 2 && Math.log2 || (e3 = Math.log(e3), (t) => Math.log(t) / e3);
}
function dp(e3) {
  return (t, r) => -e3(-t, r);
}
function ih(e3) {
  const t = e3(hp, fp), r = t.domain;
  let n = 10, i, s;
  function a() {
    return i = hC(n), s = cC(n), r()[0] < 0 ? (i = dp(i), s = dp(s), e3(oC, lC)) : e3(hp, fp), t;
  }
  return t.base = function(o) {
    return arguments.length ? (n = +o, a()) : n;
  }, t.domain = function(o) {
    return arguments.length ? (r(o), a()) : r();
  }, t.ticks = (o) => {
    const l = r();
    let u = l[0], c = l[l.length - 1];
    const h = c < u;
    h && ([u, c] = [c, u]);
    let f = i(u), d = i(c), v, m;
    const p = o == null ? 10 : +o;
    let y = [];
    if (!(n % 1) && d - f < p) {
      if (f = Math.floor(f), d = Math.ceil(d), u > 0) {
        for (; f <= d; ++f) for (v = 1; v < n; ++v) if (m = f < 0 ? v / s(-f) : v * s(f), !(m < u)) {
          if (m > c) break;
          y.push(m);
        }
      } else for (; f <= d; ++f) for (v = n - 1; v >= 1; --v) if (m = f > 0 ? v / s(-f) : v * s(f), !(m < u)) {
        if (m > c) break;
        y.push(m);
      }
      y.length * 2 < p && (y = Vu(u, c, p));
    } else y = Vu(f, d, Math.min(d - f, p)).map(s);
    return h ? y.reverse() : y;
  }, t.tickFormat = (o, l) => {
    if (o == null && (o = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = wi(l)).precision == null && (l.trim = true), l = nh(l)), o === 1 / 0) return l;
    const u = Math.max(1, n * o / t.ticks().length);
    return (c) => {
      let h = c / s(Math.round(i(c)));
      return h * n < n - 0.5 && (h *= n), h <= u ? l(c) : "";
    };
  }, t.nice = () => r(mb(r(), { floor: (o) => s(Math.floor(i(o))), ceil: (o) => s(Math.ceil(i(o))) })), t;
}
function gb() {
  const e3 = ih(no()).domain([1, 10]);
  return e3.copy = () => Bi(e3, gb()).base(e3.base()), fe.apply(e3, arguments), e3;
}
function vp(e3) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e3));
  };
}
function pp(e3) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e3;
  };
}
function sh(e3) {
  var t = 1, r = e3(vp(t), pp(t));
  return r.constant = function(n) {
    return arguments.length ? e3(vp(t = +n), pp(t)) : t;
  }, vr(r);
}
function yb() {
  var e3 = sh(no());
  return e3.copy = function() {
    return Bi(e3, yb()).constant(e3.constant());
  }, fe.apply(e3, arguments);
}
function mp(e3) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e3) : Math.pow(t, e3);
  };
}
function fC(e3) {
  return e3 < 0 ? -Math.sqrt(-e3) : Math.sqrt(e3);
}
function dC(e3) {
  return e3 < 0 ? -e3 * e3 : e3 * e3;
}
function ah(e3) {
  var t = e3($t, $t), r = 1;
  function n() {
    return r === 1 ? e3($t, $t) : r === 0.5 ? e3(fC, dC) : e3(mp(r), mp(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, vr(t);
}
function oh() {
  var e3 = ah(no());
  return e3.copy = function() {
    return Bi(e3, oh()).exponent(e3.exponent());
  }, fe.apply(e3, arguments), e3;
}
function vC() {
  return oh.apply(null, arguments).exponent(0.5);
}
function gp(e3) {
  return Math.sign(e3) * e3 * e3;
}
function pC(e3) {
  return Math.sign(e3) * Math.sqrt(Math.abs(e3));
}
function bb() {
  var e3 = eh(), t = [0, 1], r = false, n;
  function i(s) {
    var a = pC(e3(s));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(s) {
    return e3.invert(gp(s));
  }, i.domain = function(s) {
    return arguments.length ? (e3.domain(s), i) : e3.domain();
  }, i.range = function(s) {
    return arguments.length ? (e3.range((t = Array.from(s, ra)).map(gp)), i) : t.slice();
  }, i.rangeRound = function(s) {
    return i.range(s).round(true);
  }, i.round = function(s) {
    return arguments.length ? (r = !!s, i) : r;
  }, i.clamp = function(s) {
    return arguments.length ? (e3.clamp(s), i) : e3.clamp();
  }, i.unknown = function(s) {
    return arguments.length ? (n = s, i) : n;
  }, i.copy = function() {
    return bb(e3.domain(), t).round(r).clamp(e3.clamp()).unknown(n);
  }, fe.apply(i, arguments), vr(i);
}
function wb() {
  var e3 = [], t = [], r = [], n;
  function i() {
    var a = 0, o = Math.max(1, t.length);
    for (r = new Array(o - 1); ++a < o; ) r[a - 1] = bA(e3, a / o);
    return s;
  }
  function s(a) {
    return a == null || isNaN(a = +a) ? n : t[$i(r, a)];
  }
  return s.invertExtent = function(a) {
    var o = t.indexOf(a);
    return o < 0 ? [NaN, NaN] : [o > 0 ? r[o - 1] : e3[0], o < r.length ? r[o] : e3[e3.length - 1]];
  }, s.domain = function(a) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let o of a) o != null && !isNaN(o = +o) && e3.push(o);
    return e3.sort(ur), i();
  }, s.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, s.unknown = function(a) {
    return arguments.length ? (n = a, s) : n;
  }, s.quantiles = function() {
    return r.slice();
  }, s.copy = function() {
    return wb().domain(e3).range(t).unknown(n);
  }, fe.apply(s, arguments);
}
function xb() {
  var e3 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], s;
  function a(l) {
    return l != null && l <= l ? i[$i(n, l, 0, r)] : s;
  }
  function o() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e3) / (r + 1);
    return a;
  }
  return a.domain = function(l) {
    return arguments.length ? ([e3, t] = l, e3 = +e3, t = +t, o()) : [e3, t];
  }, a.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, o()) : i.slice();
  }, a.invertExtent = function(l) {
    var u = i.indexOf(l);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e3, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, a.unknown = function(l) {
    return arguments.length && (s = l), a;
  }, a.thresholds = function() {
    return n.slice();
  }, a.copy = function() {
    return xb().domain([e3, t]).range(i).unknown(s);
  }, fe.apply(vr(a), arguments);
}
function Pb() {
  var e3 = [0.5], t = [0, 1], r, n = 1;
  function i(s) {
    return s != null && s <= s ? t[$i(e3, s, 0, n)] : r;
  }
  return i.domain = function(s) {
    return arguments.length ? (e3 = Array.from(s), n = Math.min(e3.length, t.length - 1), i) : e3.slice();
  }, i.range = function(s) {
    return arguments.length ? (t = Array.from(s), n = Math.min(e3.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(s) {
    var a = t.indexOf(s);
    return [e3[a - 1], e3[a]];
  }, i.unknown = function(s) {
    return arguments.length ? (r = s, i) : r;
  }, i.copy = function() {
    return Pb().domain(e3).range(t).unknown(r);
  }, fe.apply(i, arguments);
}
const zl = /* @__PURE__ */ new Date(), Bl = /* @__PURE__ */ new Date();
function yt(e3, t, r, n) {
  function i(s) {
    return e3(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return i.floor = (s) => (e3(s = /* @__PURE__ */ new Date(+s)), s), i.ceil = (s) => (e3(s = new Date(s - 1)), t(s, 1), e3(s), s), i.round = (s) => {
    const a = i(s), o = i.ceil(s);
    return s - a < o - s ? a : o;
  }, i.offset = (s, a) => (t(s = /* @__PURE__ */ new Date(+s), a == null ? 1 : Math.floor(a)), s), i.range = (s, a, o) => {
    const l = [];
    if (s = i.ceil(s), o = o == null ? 1 : Math.floor(o), !(s < a) || !(o > 0)) return l;
    let u;
    do
      l.push(u = /* @__PURE__ */ new Date(+s)), t(s, o), e3(s);
    while (u < s && s < a);
    return l;
  }, i.filter = (s) => yt((a) => {
    if (a >= a) for (; e3(a), !s(a); ) a.setTime(a - 1);
  }, (a, o) => {
    if (a >= a) if (o < 0) for (; ++o <= 0; ) for (; t(a, -1), !s(a); ) ;
    else for (; --o >= 0; ) for (; t(a, 1), !s(a); ) ;
  }), r && (i.count = (s, a) => (zl.setTime(+s), Bl.setTime(+a), e3(zl), e3(Bl), Math.floor(r(zl, Bl))), i.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(n ? (a) => n(a) % s === 0 : (a) => i.count(0, a) % s === 0) : i)), i;
}
const sa = yt(() => {
}, (e3, t) => {
  e3.setTime(+e3 + t);
}, (e3, t) => t - e3);
sa.every = (e3) => (e3 = Math.floor(e3), !isFinite(e3) || !(e3 > 0) ? null : e3 > 1 ? yt((t) => {
  t.setTime(Math.floor(t / e3) * e3);
}, (t, r) => {
  t.setTime(+t + r * e3);
}, (t, r) => (r - t) / e3) : sa);
sa.range;
const ze = 1e3, ue = ze * 60, Be = ue * 60, Ve = Be * 24, lh = Ve * 7, yp = Ve * 30, Fl = Ve * 365, Er = yt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds());
}, (e3, t) => {
  e3.setTime(+e3 + t * ze);
}, (e3, t) => (t - e3) / ze, (e3) => e3.getUTCSeconds());
Er.range;
const uh = yt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * ze);
}, (e3, t) => {
  e3.setTime(+e3 + t * ue);
}, (e3, t) => (t - e3) / ue, (e3) => e3.getMinutes());
uh.range;
const ch = yt((e3) => {
  e3.setUTCSeconds(0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * ue);
}, (e3, t) => (t - e3) / ue, (e3) => e3.getUTCMinutes());
ch.range;
const hh = yt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * ze - e3.getMinutes() * ue);
}, (e3, t) => {
  e3.setTime(+e3 + t * Be);
}, (e3, t) => (t - e3) / Be, (e3) => e3.getHours());
hh.range;
const fh = yt((e3) => {
  e3.setUTCMinutes(0, 0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * Be);
}, (e3, t) => (t - e3) / Be, (e3) => e3.getUTCHours());
fh.range;
const Fi = yt((e3) => e3.setHours(0, 0, 0, 0), (e3, t) => e3.setDate(e3.getDate() + t), (e3, t) => (t - e3 - (t.getTimezoneOffset() - e3.getTimezoneOffset()) * ue) / Ve, (e3) => e3.getDate() - 1);
Fi.range;
const io = yt((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Ve, (e3) => e3.getUTCDate() - 1);
io.range;
const Sb = yt((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Ve, (e3) => Math.floor(e3 / Ve));
Sb.range;
function Hr(e3) {
  return yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e3) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ue) / lh);
}
const so = Hr(0), aa = Hr(1), mC = Hr(2), gC = Hr(3), Sn = Hr(4), yC = Hr(5), bC = Hr(6);
so.range;
aa.range;
mC.range;
gC.range;
Sn.range;
yC.range;
bC.range;
function Gr(e3) {
  return yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e3) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / lh);
}
const ao = Gr(0), oa = Gr(1), wC = Gr(2), xC = Gr(3), _n = Gr(4), PC = Gr(5), SC = Gr(6);
ao.range;
oa.range;
wC.range;
xC.range;
_n.range;
PC.range;
SC.range;
const dh = yt((e3) => {
  e3.setDate(1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setMonth(e3.getMonth() + t);
}, (e3, t) => t.getMonth() - e3.getMonth() + (t.getFullYear() - e3.getFullYear()) * 12, (e3) => e3.getMonth());
dh.range;
const vh = yt((e3) => {
  e3.setUTCDate(1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCMonth(e3.getUTCMonth() + t);
}, (e3, t) => t.getUTCMonth() - e3.getUTCMonth() + (t.getUTCFullYear() - e3.getUTCFullYear()) * 12, (e3) => e3.getUTCMonth());
vh.range;
const Ye = yt((e3) => {
  e3.setMonth(0, 1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setFullYear(e3.getFullYear() + t);
}, (e3, t) => t.getFullYear() - e3.getFullYear(), (e3) => e3.getFullYear());
Ye.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e3) * e3), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e3);
});
Ye.range;
const He = yt((e3) => {
  e3.setUTCMonth(0, 1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCFullYear(e3.getUTCFullYear() + t);
}, (e3, t) => t.getUTCFullYear() - e3.getUTCFullYear(), (e3) => e3.getUTCFullYear());
He.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e3) * e3), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e3);
});
He.range;
function _b(e3, t, r, n, i, s) {
  const a = [[Er, 1, ze], [Er, 5, 5 * ze], [Er, 15, 15 * ze], [Er, 30, 30 * ze], [s, 1, ue], [s, 5, 5 * ue], [s, 15, 15 * ue], [s, 30, 30 * ue], [i, 1, Be], [i, 3, 3 * Be], [i, 6, 6 * Be], [i, 12, 12 * Be], [n, 1, Ve], [n, 2, 2 * Ve], [r, 1, lh], [t, 1, yp], [t, 3, 3 * yp], [e3, 1, Fl]];
  function o(u, c, h) {
    const f = c < u;
    f && ([u, c] = [c, u]);
    const d = h && typeof h.range == "function" ? h : l(u, c, h), v = d ? d.range(u, +c + 1) : [];
    return f ? v.reverse() : v;
  }
  function l(u, c, h) {
    const f = Math.abs(c - u) / h, d = Gc(([, , p]) => p).right(a, f);
    if (d === a.length) return e3.every(Hu(u / Fl, c / Fl, h));
    if (d === 0) return sa.every(Math.max(Hu(u, c, h), 1));
    const [v, m] = a[f / a[d - 1][2] < a[d][2] / f ? d - 1 : d];
    return v.every(m);
  }
  return [o, l];
}
const [_C, OC] = _b(He, vh, ao, Sb, fh, ch), [MC, EC] = _b(Ye, dh, so, Fi, hh, uh);
function Wl(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
    return t.setFullYear(e3.y), t;
  }
  return new Date(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
}
function ql(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(Date.UTC(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
    return t.setUTCFullYear(e3.y), t;
  }
  return new Date(Date.UTC(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
}
function Vn(e3, t, r) {
  return { y: e3, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function AC(e3) {
  var t = e3.dateTime, r = e3.date, n = e3.time, i = e3.periods, s = e3.days, a = e3.shortDays, o = e3.months, l = e3.shortMonths, u = Yn(i), c = Hn(i), h = Yn(s), f = Hn(s), d = Yn(a), v = Hn(a), m = Yn(o), p = Hn(o), y = Yn(l), b = Hn(l), w = { a: W, A: G, b: F, B: U, c: null, d: _p, e: _p, f: JC, g: ok, G: uk, H: HC, I: GC, j: XC, L: Ob, m: ZC, M: QC, p: Rt, q: at, Q: Ep, s: Ap, S: tk, u: ek, U: rk, V: nk, w: ik, W: sk, x: null, X: null, y: ak, Y: lk, Z: ck, "%": Mp }, x = { a: de, A: qt, b: Le, B: $n, c: null, d: Op, e: Op, f: vk, g: _k, G: Mk, H: hk, I: fk, j: dk, L: Eb, m: pk, M: mk, p: zn, q: Kt, Q: Ep, s: Ap, S: gk, u: yk, U: bk, V: wk, w: xk, W: Pk, x: null, X: null, y: Sk, Y: Ok, Z: Ek, "%": Mp }, P = { a: j, A: k, b: E, B: $, c: R, d: Pp, e: Pp, f: KC, g: xp, G: wp, H: Sp, I: Sp, j: BC, L: qC, m: zC, M: FC, p: A, q: $C, Q: VC, s: YC, S: WC, u: TC, U: NC, V: DC, w: jC, W: LC, x: B, X: H, y: xp, Y: wp, Z: RC, "%": UC };
  w.x = S(r, w), w.X = S(n, w), w.c = S(t, w), x.x = S(r, x), x.X = S(n, x), x.c = S(t, x);
  function S(D, T) {
    return function(V) {
      var I = [], Ut = -1, tt = 0, Gt = D.length, Xt, mr, rf;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++Ut < Gt; ) D.charCodeAt(Ut) === 37 && (I.push(D.slice(tt, Ut)), (mr = bp[Xt = D.charAt(++Ut)]) != null ? Xt = D.charAt(++Ut) : mr = Xt === "e" ? " " : "0", (rf = T[Xt]) && (Xt = rf(V, mr)), I.push(Xt), tt = Ut + 1);
      return I.push(D.slice(tt, Ut)), I.join("");
    };
  }
  function _(D, T) {
    return function(V) {
      var I = Vn(1900, void 0, 1), Ut = M(I, D, V += "", 0), tt, Gt;
      if (Ut != V.length) return null;
      if ("Q" in I) return new Date(I.Q);
      if ("s" in I) return new Date(I.s * 1e3 + ("L" in I ? I.L : 0));
      if (T && !("Z" in I) && (I.Z = 0), "p" in I && (I.H = I.H % 12 + I.p * 12), I.m === void 0 && (I.m = "q" in I ? I.q : 0), "V" in I) {
        if (I.V < 1 || I.V > 53) return null;
        "w" in I || (I.w = 1), "Z" in I ? (tt = ql(Vn(I.y, 0, 1)), Gt = tt.getUTCDay(), tt = Gt > 4 || Gt === 0 ? oa.ceil(tt) : oa(tt), tt = io.offset(tt, (I.V - 1) * 7), I.y = tt.getUTCFullYear(), I.m = tt.getUTCMonth(), I.d = tt.getUTCDate() + (I.w + 6) % 7) : (tt = Wl(Vn(I.y, 0, 1)), Gt = tt.getDay(), tt = Gt > 4 || Gt === 0 ? aa.ceil(tt) : aa(tt), tt = Fi.offset(tt, (I.V - 1) * 7), I.y = tt.getFullYear(), I.m = tt.getMonth(), I.d = tt.getDate() + (I.w + 6) % 7);
      } else ("W" in I || "U" in I) && ("w" in I || (I.w = "u" in I ? I.u % 7 : "W" in I ? 1 : 0), Gt = "Z" in I ? ql(Vn(I.y, 0, 1)).getUTCDay() : Wl(Vn(I.y, 0, 1)).getDay(), I.m = 0, I.d = "W" in I ? (I.w + 6) % 7 + I.W * 7 - (Gt + 5) % 7 : I.w + I.U * 7 - (Gt + 6) % 7);
      return "Z" in I ? (I.H += I.Z / 100 | 0, I.M += I.Z % 100, ql(I)) : Wl(I);
    };
  }
  function M(D, T, V, I) {
    for (var Ut = 0, tt = T.length, Gt = V.length, Xt, mr; Ut < tt; ) {
      if (I >= Gt) return -1;
      if (Xt = T.charCodeAt(Ut++), Xt === 37) {
        if (Xt = T.charAt(Ut++), mr = P[Xt in bp ? T.charAt(Ut++) : Xt], !mr || (I = mr(D, V, I)) < 0) return -1;
      } else if (Xt != V.charCodeAt(I++)) return -1;
    }
    return I;
  }
  function A(D, T, V) {
    var I = u.exec(T.slice(V));
    return I ? (D.p = c.get(I[0].toLowerCase()), V + I[0].length) : -1;
  }
  function j(D, T, V) {
    var I = d.exec(T.slice(V));
    return I ? (D.w = v.get(I[0].toLowerCase()), V + I[0].length) : -1;
  }
  function k(D, T, V) {
    var I = h.exec(T.slice(V));
    return I ? (D.w = f.get(I[0].toLowerCase()), V + I[0].length) : -1;
  }
  function E(D, T, V) {
    var I = y.exec(T.slice(V));
    return I ? (D.m = b.get(I[0].toLowerCase()), V + I[0].length) : -1;
  }
  function $(D, T, V) {
    var I = m.exec(T.slice(V));
    return I ? (D.m = p.get(I[0].toLowerCase()), V + I[0].length) : -1;
  }
  function R(D, T, V) {
    return M(D, t, T, V);
  }
  function B(D, T, V) {
    return M(D, r, T, V);
  }
  function H(D, T, V) {
    return M(D, n, T, V);
  }
  function W(D) {
    return a[D.getDay()];
  }
  function G(D) {
    return s[D.getDay()];
  }
  function F(D) {
    return l[D.getMonth()];
  }
  function U(D) {
    return o[D.getMonth()];
  }
  function Rt(D) {
    return i[+(D.getHours() >= 12)];
  }
  function at(D) {
    return 1 + ~~(D.getMonth() / 3);
  }
  function de(D) {
    return a[D.getUTCDay()];
  }
  function qt(D) {
    return s[D.getUTCDay()];
  }
  function Le(D) {
    return l[D.getUTCMonth()];
  }
  function $n(D) {
    return o[D.getUTCMonth()];
  }
  function zn(D) {
    return i[+(D.getUTCHours() >= 12)];
  }
  function Kt(D) {
    return 1 + ~~(D.getUTCMonth() / 3);
  }
  return { format: function(D) {
    var T = S(D += "", w);
    return T.toString = function() {
      return D;
    }, T;
  }, parse: function(D) {
    var T = _(D += "", false);
    return T.toString = function() {
      return D;
    }, T;
  }, utcFormat: function(D) {
    var T = S(D += "", x);
    return T.toString = function() {
      return D;
    }, T;
  }, utcParse: function(D) {
    var T = _(D += "", true);
    return T.toString = function() {
      return D;
    }, T;
  } };
}
var bp = { "-": "", _: " ", 0: "0" }, St = /^\s*\d+/, CC = /^%/, kC = /[\\^$*+?|[\]().{}]/g;
function Y(e3, t, r) {
  var n = e3 < 0 ? "-" : "", i = (n ? -e3 : e3) + "", s = i.length;
  return n + (s < r ? new Array(r - s + 1).join(t) + i : i);
}
function IC(e3) {
  return e3.replace(kC, "\\$&");
}
function Yn(e3) {
  return new RegExp("^(?:" + e3.map(IC).join("|") + ")", "i");
}
function Hn(e3) {
  return new Map(e3.map((t, r) => [t.toLowerCase(), r]));
}
function jC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? (e3.w = +n[0], r + n[0].length) : -1;
}
function TC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? (e3.u = +n[0], r + n[0].length) : -1;
}
function NC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.U = +n[0], r + n[0].length) : -1;
}
function DC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.V = +n[0], r + n[0].length) : -1;
}
function LC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.W = +n[0], r + n[0].length) : -1;
}
function wp(e3, t, r) {
  var n = St.exec(t.slice(r, r + 4));
  return n ? (e3.y = +n[0], r + n[0].length) : -1;
}
function xp(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function RC(e3, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e3.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function $C(e3, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? (e3.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function zC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.m = n[0] - 1, r + n[0].length) : -1;
}
function Pp(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.d = +n[0], r + n[0].length) : -1;
}
function BC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 3));
  return n ? (e3.m = 0, e3.d = +n[0], r + n[0].length) : -1;
}
function Sp(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.H = +n[0], r + n[0].length) : -1;
}
function FC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.M = +n[0], r + n[0].length) : -1;
}
function WC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? (e3.S = +n[0], r + n[0].length) : -1;
}
function qC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 3));
  return n ? (e3.L = +n[0], r + n[0].length) : -1;
}
function KC(e3, t, r) {
  var n = St.exec(t.slice(r, r + 6));
  return n ? (e3.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function UC(e3, t, r) {
  var n = CC.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function VC(e3, t, r) {
  var n = St.exec(t.slice(r));
  return n ? (e3.Q = +n[0], r + n[0].length) : -1;
}
function YC(e3, t, r) {
  var n = St.exec(t.slice(r));
  return n ? (e3.s = +n[0], r + n[0].length) : -1;
}
function _p(e3, t) {
  return Y(e3.getDate(), t, 2);
}
function HC(e3, t) {
  return Y(e3.getHours(), t, 2);
}
function GC(e3, t) {
  return Y(e3.getHours() % 12 || 12, t, 2);
}
function XC(e3, t) {
  return Y(1 + Fi.count(Ye(e3), e3), t, 3);
}
function Ob(e3, t) {
  return Y(e3.getMilliseconds(), t, 3);
}
function JC(e3, t) {
  return Ob(e3, t) + "000";
}
function ZC(e3, t) {
  return Y(e3.getMonth() + 1, t, 2);
}
function QC(e3, t) {
  return Y(e3.getMinutes(), t, 2);
}
function tk(e3, t) {
  return Y(e3.getSeconds(), t, 2);
}
function ek(e3) {
  var t = e3.getDay();
  return t === 0 ? 7 : t;
}
function rk(e3, t) {
  return Y(so.count(Ye(e3) - 1, e3), t, 2);
}
function Mb(e3) {
  var t = e3.getDay();
  return t >= 4 || t === 0 ? Sn(e3) : Sn.ceil(e3);
}
function nk(e3, t) {
  return e3 = Mb(e3), Y(Sn.count(Ye(e3), e3) + (Ye(e3).getDay() === 4), t, 2);
}
function ik(e3) {
  return e3.getDay();
}
function sk(e3, t) {
  return Y(aa.count(Ye(e3) - 1, e3), t, 2);
}
function ak(e3, t) {
  return Y(e3.getFullYear() % 100, t, 2);
}
function ok(e3, t) {
  return e3 = Mb(e3), Y(e3.getFullYear() % 100, t, 2);
}
function lk(e3, t) {
  return Y(e3.getFullYear() % 1e4, t, 4);
}
function uk(e3, t) {
  var r = e3.getDay();
  return e3 = r >= 4 || r === 0 ? Sn(e3) : Sn.ceil(e3), Y(e3.getFullYear() % 1e4, t, 4);
}
function ck(e3) {
  var t = e3.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Y(t / 60 | 0, "0", 2) + Y(t % 60, "0", 2);
}
function Op(e3, t) {
  return Y(e3.getUTCDate(), t, 2);
}
function hk(e3, t) {
  return Y(e3.getUTCHours(), t, 2);
}
function fk(e3, t) {
  return Y(e3.getUTCHours() % 12 || 12, t, 2);
}
function dk(e3, t) {
  return Y(1 + io.count(He(e3), e3), t, 3);
}
function Eb(e3, t) {
  return Y(e3.getUTCMilliseconds(), t, 3);
}
function vk(e3, t) {
  return Eb(e3, t) + "000";
}
function pk(e3, t) {
  return Y(e3.getUTCMonth() + 1, t, 2);
}
function mk(e3, t) {
  return Y(e3.getUTCMinutes(), t, 2);
}
function gk(e3, t) {
  return Y(e3.getUTCSeconds(), t, 2);
}
function yk(e3) {
  var t = e3.getUTCDay();
  return t === 0 ? 7 : t;
}
function bk(e3, t) {
  return Y(ao.count(He(e3) - 1, e3), t, 2);
}
function Ab(e3) {
  var t = e3.getUTCDay();
  return t >= 4 || t === 0 ? _n(e3) : _n.ceil(e3);
}
function wk(e3, t) {
  return e3 = Ab(e3), Y(_n.count(He(e3), e3) + (He(e3).getUTCDay() === 4), t, 2);
}
function xk(e3) {
  return e3.getUTCDay();
}
function Pk(e3, t) {
  return Y(oa.count(He(e3) - 1, e3), t, 2);
}
function Sk(e3, t) {
  return Y(e3.getUTCFullYear() % 100, t, 2);
}
function _k(e3, t) {
  return e3 = Ab(e3), Y(e3.getUTCFullYear() % 100, t, 2);
}
function Ok(e3, t) {
  return Y(e3.getUTCFullYear() % 1e4, t, 4);
}
function Mk(e3, t) {
  var r = e3.getUTCDay();
  return e3 = r >= 4 || r === 0 ? _n(e3) : _n.ceil(e3), Y(e3.getUTCFullYear() % 1e4, t, 4);
}
function Ek() {
  return "+0000";
}
function Mp() {
  return "%";
}
function Ep(e3) {
  return +e3;
}
function Ap(e3) {
  return Math.floor(+e3 / 1e3);
}
var Qr, Cb, kb;
Ak({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Ak(e3) {
  return Qr = AC(e3), Cb = Qr.format, Qr.parse, kb = Qr.utcFormat, Qr.utcParse, Qr;
}
function Ck(e3) {
  return new Date(e3);
}
function kk(e3) {
  return e3 instanceof Date ? +e3 : +/* @__PURE__ */ new Date(+e3);
}
function ph(e3, t, r, n, i, s, a, o, l, u) {
  var c = eh(), h = c.invert, f = c.domain, d = u(".%L"), v = u(":%S"), m = u("%I:%M"), p = u("%I %p"), y = u("%a %d"), b = u("%b %d"), w = u("%B"), x = u("%Y");
  function P(S) {
    return (l(S) < S ? d : o(S) < S ? v : a(S) < S ? m : s(S) < S ? p : n(S) < S ? i(S) < S ? y : b : r(S) < S ? w : x)(S);
  }
  return c.invert = function(S) {
    return new Date(h(S));
  }, c.domain = function(S) {
    return arguments.length ? f(Array.from(S, kk)) : f().map(Ck);
  }, c.ticks = function(S) {
    var _ = f();
    return e3(_[0], _[_.length - 1], S ?? 10);
  }, c.tickFormat = function(S, _) {
    return _ == null ? P : u(_);
  }, c.nice = function(S) {
    var _ = f();
    return (!S || typeof S.range != "function") && (S = t(_[0], _[_.length - 1], S ?? 10)), S ? f(mb(_, S)) : c;
  }, c.copy = function() {
    return Bi(c, ph(e3, t, r, n, i, s, a, o, l, u));
  }, c;
}
function Ik() {
  return fe.apply(ph(MC, EC, Ye, dh, so, Fi, hh, uh, Er, Cb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function jk() {
  return fe.apply(ph(_C, OC, He, vh, ao, io, fh, ch, Er, kb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function oo() {
  var e3 = 0, t = 1, r, n, i, s, a = $t, o = false, l;
  function u(h) {
    return h == null || isNaN(h = +h) ? l : a(i === 0 ? 0.5 : (h = (s(h) - r) * i, o ? Math.max(0, Math.min(1, h)) : h));
  }
  u.domain = function(h) {
    return arguments.length ? ([e3, t] = h, r = s(e3 = +e3), n = s(t = +t), i = r === n ? 0 : 1 / (n - r), u) : [e3, t];
  }, u.clamp = function(h) {
    return arguments.length ? (o = !!h, u) : o;
  }, u.interpolator = function(h) {
    return arguments.length ? (a = h, u) : a;
  };
  function c(h) {
    return function(f) {
      var d, v;
      return arguments.length ? ([d, v] = f, a = h(d, v), u) : [a(0), a(1)];
    };
  }
  return u.range = c(Tn), u.rangeRound = c(th), u.unknown = function(h) {
    return arguments.length ? (l = h, u) : l;
  }, function(h) {
    return s = h, r = h(e3), n = h(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function pr(e3, t) {
  return t.domain(e3.domain()).interpolator(e3.interpolator()).clamp(e3.clamp()).unknown(e3.unknown());
}
function Ib() {
  var e3 = vr(oo()($t));
  return e3.copy = function() {
    return pr(e3, Ib());
  }, Je.apply(e3, arguments);
}
function jb() {
  var e3 = ih(oo()).domain([1, 10]);
  return e3.copy = function() {
    return pr(e3, jb()).base(e3.base());
  }, Je.apply(e3, arguments);
}
function Tb() {
  var e3 = sh(oo());
  return e3.copy = function() {
    return pr(e3, Tb()).constant(e3.constant());
  }, Je.apply(e3, arguments);
}
function mh() {
  var e3 = ah(oo());
  return e3.copy = function() {
    return pr(e3, mh()).exponent(e3.exponent());
  }, Je.apply(e3, arguments);
}
function Tk() {
  return mh.apply(null, arguments).exponent(0.5);
}
function Nb() {
  var e3 = [], t = $t;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t(($i(e3, n, 1) - 1) / (e3.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e3.push(i);
    return e3.sort(ur), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e3.map((n, i) => t(i / (e3.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, s) => yA(e3, s / n));
  }, r.copy = function() {
    return Nb(t).domain(e3);
  }, Je.apply(r, arguments);
}
function lo() {
  var e3 = 0, t = 0.5, r = 1, n = 1, i, s, a, o, l, u = $t, c, h = false, f;
  function d(m) {
    return isNaN(m = +m) ? f : (m = 0.5 + ((m = +c(m)) - s) * (n * m < n * s ? o : l), u(h ? Math.max(0, Math.min(1, m)) : m));
  }
  d.domain = function(m) {
    return arguments.length ? ([e3, t, r] = m, i = c(e3 = +e3), s = c(t = +t), a = c(r = +r), o = i === s ? 0 : 0.5 / (s - i), l = s === a ? 0 : 0.5 / (a - s), n = s < i ? -1 : 1, d) : [e3, t, r];
  }, d.clamp = function(m) {
    return arguments.length ? (h = !!m, d) : h;
  }, d.interpolator = function(m) {
    return arguments.length ? (u = m, d) : u;
  };
  function v(m) {
    return function(p) {
      var y, b, w;
      return arguments.length ? ([y, b, w] = p, u = UA(m, [y, b, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = v(Tn), d.rangeRound = v(th), d.unknown = function(m) {
    return arguments.length ? (f = m, d) : f;
  }, function(m) {
    return c = m, i = m(e3), s = m(t), a = m(r), o = i === s ? 0 : 0.5 / (s - i), l = s === a ? 0 : 0.5 / (a - s), n = s < i ? -1 : 1, d;
  };
}
function Db() {
  var e3 = vr(lo()($t));
  return e3.copy = function() {
    return pr(e3, Db());
  }, Je.apply(e3, arguments);
}
function Lb() {
  var e3 = ih(lo()).domain([0.1, 1, 10]);
  return e3.copy = function() {
    return pr(e3, Lb()).base(e3.base());
  }, Je.apply(e3, arguments);
}
function Rb() {
  var e3 = sh(lo());
  return e3.copy = function() {
    return pr(e3, Rb()).constant(e3.constant());
  }, Je.apply(e3, arguments);
}
function gh() {
  var e3 = ah(lo());
  return e3.copy = function() {
    return pr(e3, gh()).exponent(e3.exponent());
  }, Je.apply(e3, arguments);
}
function Nk() {
  return gh.apply(null, arguments).exponent(0.5);
}
const $b = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: Jc, scaleDiverging: Db, scaleDivergingLog: Lb, scaleDivergingPow: gh, scaleDivergingSqrt: Nk, scaleDivergingSymlog: Rb, scaleIdentity: pb, scaleImplicit: Gu, scaleLinear: vb, scaleLog: gb, scaleOrdinal: Xc, scalePoint: xA, scalePow: oh, scaleQuantile: wb, scaleQuantize: xb, scaleRadial: bb, scaleSequential: Ib, scaleSequentialLog: jb, scaleSequentialPow: mh, scaleSequentialQuantile: Nb, scaleSequentialSqrt: Tk, scaleSequentialSymlog: Tb, scaleSqrt: vC, scaleSymlog: yb, scaleThreshold: Pb, scaleTime: Ik, scaleUtc: jk, tickFormat: db }, Symbol.toStringTag, { value: "Module" }));
function Dk(e3) {
  var t = $b;
  if (e3 in t && typeof t[e3] == "function") return t[e3]();
  var r = "scale".concat(Ci(e3));
  if (r in t && typeof t[r] == "function") return t[r]();
}
function Cp(e3, t, r) {
  if (typeof e3 == "function") return e3.copy().domain(t).range(r);
  if (e3 != null) {
    var n = Dk(e3);
    if (n != null) return n.domain(t).range(r), n;
  }
}
function yh(e3, t, r, n) {
  if (!(r == null || n == null)) return typeof e3.scale == "function" ? Cp(e3.scale, r, n) : Cp(t, r, n);
}
function Lk(e3) {
  return "scale".concat(Ci(e3));
}
function Rk(e3) {
  return Lk(e3) in $b;
}
var zb = (e3, t, r) => {
  if (e3 != null) {
    var { scale: n, type: i } = e3;
    if (n === "auto") return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string") return Rk(n) ? n : "point";
  }
};
function $k(e3, t) {
  for (var r = 0, n = e3.length, i = e3[0] < e3[e3.length - 1]; r < n; ) {
    var s = Math.floor((r + n) / 2);
    (i ? e3[s] < t : e3[s] > t) ? r = s + 1 : n = s;
  }
  return r;
}
function Bb(e3, t) {
  if (e3) {
    var r = t ?? e3.domain(), n = r.map((s) => {
      var a;
      return (a = e3(s)) !== null && a !== void 0 ? a : 0;
    }), i = e3.range();
    if (!(r.length === 0 || i.length < 2)) return (s) => {
      var a, o, l = $k(n, s);
      if (l <= 0) return r[0];
      if (l >= r.length) return r[r.length - 1];
      var u = (a = n[l - 1]) !== null && a !== void 0 ? a : 0, c = (o = n[l]) !== null && o !== void 0 ? o : 0;
      return Math.abs(s - u) <= Math.abs(s - c) ? r[l - 1] : r[l];
    };
  }
}
function zk(e3) {
  if (e3 != null) return "invert" in e3 && typeof e3.invert == "function" ? e3.invert.bind(e3) : Bb(e3, void 0);
}
function kp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function la(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kp(Object(r), true).forEach(function(n) {
      Bk(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : kp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Bk(e3, t, r) {
  return (t = Fk(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Fk(e3) {
  var t = Wk(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Wk(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Qu = [0, "auto"], vt = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0, niceTicks: "auto" }, Fb = (e3, t) => e3.cartesianAxis.xAxis[t], Ze = (e3, t) => {
  var r = Fb(e3, t);
  return r ?? vt;
}, pt = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: Qu, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, niceTicks: "auto", width: ji }, Wb = (e3, t) => e3.cartesianAxis.yAxis[t], Qe = (e3, t) => {
  var r = Wb(e3, t);
  return r ?? pt;
}, qk = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" }, bh = (e3, t) => {
  var r = e3.cartesianAxis.zAxis[t];
  return r ?? qk;
}, Wt = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return Ze(e3, r);
    case "yAxis":
      return Qe(e3, r);
    case "zAxis":
      return bh(e3, r);
    case "angleAxis":
      return qc(e3, r);
    case "radiusAxis":
      return Kc(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Kk = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return Ze(e3, r);
    case "yAxis":
      return Qe(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Wi = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return Ze(e3, r);
    case "yAxis":
      return Qe(e3, r);
    case "angleAxis":
      return qc(e3, r);
    case "radiusAxis":
      return Kc(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, qb = (e3) => e3.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e3.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Kb(e3, t) {
  return (r) => {
    switch (e3) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return false;
    }
  };
}
var wh = (e3) => e3.graphicalItems.cartesianItems, Uk = O([xt, to], Kb), Ub = (e3, t, r) => e3.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === true ? true : !n.hide), Nn = O([wh, Wt, Uk], Ub, { memoizeOptions: { resultEqualityCheck: ro } }), Vb = O([Nn], (e3) => e3.filter((t) => t.type === "area" || t.type === "bar").filter(Yc)), Yb = (e3) => e3.filter((t) => !("stackId" in t) || t.stackId === void 0), Vk = O([Nn], Yb), Hb = (e3) => e3.map((t) => t.data).filter(Boolean).flat(1), Yk = O([Nn], (e3) => e3.some((t) => !t.data)), Gb = O([Nn], Hb, { memoizeOptions: { resultEqualityCheck: ro } }), Xb = (e3, t) => {
  var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
  return e3.length > 0 ? e3 : r.slice(n, i + 1);
}, xh = O([Gb, Ri], Xb), Hk = (e3, t, r) => (t == null ? void 0 : t.dataKey) != null ? e3.map((n) => ({ value: ht(n, t.dataKey) })) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e3.map((i) => ({ value: ht(i, n) }))) : e3.map((n) => ({ value: n })), Jb = (e3, t, r, n, i, s) => {
  var { chartData: a = [], dataStartIndex: o, dataEndIndex: l } = n, u = Hk(e3, t, r);
  if (i && (t == null ? void 0 : t.dataKey) != null && s.length > 0) {
    var c = a.slice(o, l + 1), h = c.map((f) => ({ value: ht(f, t.dataKey) })).filter((f) => f.value != null);
    return [...h, ...u];
  }
  return u;
}, qi = O([xh, Wt, Nn, Ri, Yk, Gb], Jb);
function pn(e3) {
  if (Ie(e3) || e3 instanceof Date) {
    var t = Number(e3);
    if (q(t)) return t;
  }
}
function Ip(e3) {
  if (Array.isArray(e3)) {
    var t = [pn(e3[0]), pn(e3[1])];
    return Ae(t) ? t : void 0;
  }
  var r = pn(e3);
  if (r != null) return [r, r];
}
function Ne(e3) {
  return e3.map(pn).filter(Vt);
}
function Gk(e3, t) {
  var r = pn(e3), n = pn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var Xk = O([qi], (e3) => e3 == null ? void 0 : e3.map((t) => t.value).sort(Gk));
function Zb(e3, t) {
  switch (e3) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return false;
  }
}
function Jk(e3, t, r) {
  if (!r) return [];
  if (!r.length) return [];
  var n;
  if (typeof t == "number" && !ke(t)) n = t;
  else if (Array.isArray(t)) {
    var i = Ne(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : Ne(r.flatMap((s) => {
    var a = ht(e3, s.dataKey), o, l;
    if (Array.isArray(a) ? [o, l] = a : o = l = a, !(!q(o) || !q(l))) return [n - o, n + l];
  }));
}
var bt = (e3) => {
  var t = Pt(e3), r = jn(e3);
  return Wi(e3, t, r);
}, On = O([bt], (e3) => e3 == null ? void 0 : e3.dataKey), Zk = O([Vb, Ri, bt], ib), Qb = (e3, t, r, n) => {
  var i = {}, s = t.reduce((a, o) => {
    if (o.stackId == null) return a;
    var l = a[o.stackId];
    return l == null && (l = []), l.push(o), a[o.stackId] = l, a;
  }, i);
  return Object.fromEntries(Object.entries(s).map((a) => {
    var [o, l] = a, u = n ? [...l].reverse() : l, c = u.map(Vc);
    return [o, { stackedData: X_(e3, c, r), graphicalItems: u }];
  }));
}, tw = O([Zk, Vb, Xa, J0], Qb), ew = (e3, t, r, n) => {
  var { dataStartIndex: i, dataEndIndex: s } = t;
  if (n == null && r !== "zAxis") {
    var a = tO(e3, i, s);
    if (!(a != null && a[0] === 0 && a[1] === 0)) return a;
  }
}, Qk = O([Wt], (e3) => e3.allowDataOverflow), Ph = (e3) => {
  var t;
  if (e3 == null || !("domain" in e3)) return Qu;
  if (e3.domain != null) return e3.domain;
  if ("ticks" in e3 && e3.ticks != null) {
    if (e3.type === "number") {
      var r = Ne(e3.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e3.type === "category") return e3.ticks.map(String);
  }
  return (t = e3 == null ? void 0 : e3.domain) !== null && t !== void 0 ? t : Qu;
}, rw = O([Wt], Ph), nw = O([rw, Qk], B0), tI = O([tw, we, xt, nw], ew, { memoizeOptions: { resultEqualityCheck: eo } }), Sh = (e3) => e3.errorBars, eI = (e3, t, r) => e3.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Zb(r, n)), ua = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var s = i.flat(), a = Math.min(...s), o = Math.max(...s);
    return [a, o];
  }
}, iw = function(t, r, n, i, s) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], o, l;
  if (n.length > 0 && n.forEach((u) => {
    var c, h = u.data != null ? [...u.data] : a, f = (c = i[u.id]) === null || c === void 0 ? void 0 : c.filter((d) => Zb(s, d));
    h.forEach((d) => {
      var v, m = ht(d, (v = r.dataKey) !== null && v !== void 0 ? v : u.dataKey), p = Jk(d, m, f);
      if (p.length >= 2) {
        var y = Math.min(...p), b = Math.max(...p);
        (o == null || y < o) && (o = y), (l == null || b > l) && (l = b);
      }
      var w = Ip(m);
      w != null && (o = o == null ? w[0] : Math.min(o, w[0]), l = l == null ? w[1] : Math.max(l, w[1]));
    });
  }), (r == null ? void 0 : r.dataKey) != null && n.length === 0 && t.forEach((u) => {
    var c = Ip(ht(u, r.dataKey));
    c != null && (o = o == null ? c[0] : Math.min(o, c[0]), l = l == null ? c[1] : Math.max(l, c[1]));
  }), q(o) && q(l)) return [o, l];
}, rI = O([xh, Wt, Vk, Sh, xt, KE], iw, { memoizeOptions: { resultEqualityCheck: eo } });
function nI(e3) {
  var { value: t } = e3;
  if (Ie(t) || t instanceof Date) return t;
}
var iI = (e3, t, r) => {
  var n = e3.map(nI).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && my(n)) ? z0(0, e3.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, sw = (e3) => e3.referenceElements.dots, Dn = (e3, t, r) => e3.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), sI = O([sw, xt, to], Dn), aw = (e3) => e3.referenceElements.areas, aI = O([aw, xt, to], Dn), ow = (e3) => e3.referenceElements.lines, oI = O([ow, xt, to], Dn), lw = (e3, t) => {
  if (e3 != null) {
    var r = Ne(e3.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, lI = O(sI, xt, lw), uw = (e3, t) => {
  if (e3 != null) {
    var r = Ne(e3.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, uI = O([aI, xt], uw);
function cI(e3) {
  var t;
  if (e3.x != null) return Ne([e3.x]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : Ne(r);
}
function hI(e3) {
  var t;
  if (e3.y != null) return Ne([e3.y]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : Ne(r);
}
var cw = (e3, t) => {
  if (e3 != null) {
    var r = e3.flatMap((n) => t === "xAxis" ? cI(n) : hI(n));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, fI = O([oI, xt], cw), dI = O(lI, fI, uI, (e3, t, r) => ua(e3, r, t)), hw = (e3, t, r, n, i, s, a, o) => {
  if (r != null) return r;
  var l = a === "vertical" && o === "xAxis" || a === "horizontal" && o === "yAxis", u = l ? ua(n, s, i) : ua(s, i);
  return VE(t, u, e3.allowDataOverflow);
}, vI = O([Wt, rw, nw, tI, rI, dI, rt, xt], hw, { memoizeOptions: { resultEqualityCheck: eo } }), pI = [0, 1], fw = (e3, t, r, n, i, s, a) => {
  if (!((e3 == null || r == null || r.length === 0) && a === void 0)) {
    var { dataKey: o, type: l } = e3, u = be(t, s);
    if (u && o == null) {
      var c;
      return z0(0, (c = r == null ? void 0 : r.length) !== null && c !== void 0 ? c : 0);
    }
    return l === "category" ? iI(n, e3, u) : i === "expand" && !u ? pI : a;
  }
}, _h = O([Wt, rt, xh, qi, Xa, xt, vI], fw), Ln = O([Wt, qb, Bc], zb), dw = (e3, t, r) => {
  var { niceTicks: n } = t;
  if (n !== "none") {
    var i = Ph(t), s = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && Ae(e3)) {
      if (s) return Fv(e3, t.tickCount, t.allowDecimals, n);
      if (t.type === "number") return Wv(e3, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (s && Ae(e3)) return Fv(e3, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && Ae(e3)) return Wv(e3, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Oh = O([_h, Wi, Ln], dw), vw = (e3, t, r, n) => {
  if (n !== "angleAxis" && (e3 == null ? void 0 : e3.type) === "number" && Ae(t) && Array.isArray(r) && r.length > 0) {
    var i, s, a = t[0], o = (i = r[0]) !== null && i !== void 0 ? i : 0, l = t[1], u = (s = r[r.length - 1]) !== null && s !== void 0 ? s : 0;
    return [Math.min(a, o), Math.max(l, u)];
  }
  return t;
}, mI = O([Wt, _h, Oh, xt], vw), gI = O(qi, Wt, (e3, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(Ne(e3.map((h) => h.value))).sort((h, f) => h - f), i = n[0], s = n[n.length - 1];
    if (i == null || s == null) return 1 / 0;
    var a = s - i;
    if (a === 0) return 1 / 0;
    for (var o = 0; o < n.length - 1; o++) {
      var l = n[o], u = n[o + 1];
      if (!(l == null || u == null)) {
        var c = u - l;
        r = Math.min(r, c);
      }
    }
    return r / a;
  }
}), pw = O(gI, rt, JE, Ct, (e3, t, r, n, i) => i, (e3, t, r, n, i) => {
  if (!q(e3)) return 0;
  var s = t === "vertical" ? n.height : n.width;
  if (i === "gap") return e3 * s / 2;
  if (i === "no-gap") {
    var a = hr(r, e3 * s), o = e3 * s / 2;
    return o - a - (o - a) / s * a;
  }
  return 0;
}), yI = (e3, t, r) => {
  var n = Ze(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : pw(e3, "xAxis", t, r, n.padding);
}, bI = (e3, t, r) => {
  var n = Qe(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : pw(e3, "yAxis", t, r, n.padding);
}, wI = O(Ze, yI, (e3, t) => {
  var r, n;
  if (e3 == null) return { left: 0, right: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { left: t, right: t } : { left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t, right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t };
}), xI = O(Qe, bI, (e3, t) => {
  var r, n;
  if (e3 == null) return { top: 0, bottom: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { top: t, bottom: t } : { top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t, bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t };
}), PI = O([Ct, wI, qa, Wa, (e3, t, r) => r], (e3, t, r, n, i) => {
  var { padding: s } = n;
  return i ? [s.left, r.width - s.right] : [e3.left + t.left, e3.left + e3.width - t.right];
}), SI = O([Ct, rt, xI, qa, Wa, (e3, t, r) => r], (e3, t, r, n, i, s) => {
  var { padding: a } = i;
  return s ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e3.top + e3.height - r.bottom, e3.top + r.top] : [e3.top + r.top, e3.top + e3.height - r.bottom];
}), Ki = (e3, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return PI(e3, r, n);
    case "yAxis":
      return SI(e3, r, n);
    case "zAxis":
      return (i = bh(e3, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return eb(e3);
    case "radiusAxis":
      return rb(e3, r);
    default:
      return;
  }
}, mw = O([Wt, Ki], Ja), _I = O([Ln, mI], aA), Mh = O([Wt, Ln, _I, mw], yh), gw = (e3, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var { type: i, scale: s } = r, a = be(e3, n);
    if (a && (i === "number" || s !== "auto")) return t.map((o) => o.value);
  }
}, Eh = O([rt, qi, Wi, xt], gw), uo = O([Mh], Hc);
O([Mh], zk);
O([Mh, Xk], Bb);
O([Nn, Sh, xt], eI);
function yw(e3, t) {
  return e3.id < t.id ? -1 : e3.id > t.id ? 1 : 0;
}
var co = (e3, t) => t, ho = (e3, t, r) => r, OI = O(Ba, co, ho, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(yw)), MI = O(Fa, co, ho, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(yw)), bw = (e3, t) => ({ width: e3.width, height: t.height }), EI = (e3, t) => {
  var r = typeof t.width == "number" ? t.width : ji;
  return { width: r, height: e3.height };
}, AI = O(Ct, Ze, bw), CI = (e3, t, r) => {
  switch (t) {
    case "top":
      return e3.top;
    case "bottom":
      return r - e3.bottom;
    default:
      return 0;
  }
}, kI = (e3, t, r) => {
  switch (t) {
    case "left":
      return e3.left;
    case "right":
      return r - e3.right;
    default:
      return 0;
  }
}, II = O(Xe, Ct, OI, co, ho, (e3, t, r, n, i) => {
  var s = {}, a;
  return r.forEach((o) => {
    var l = bw(t, o);
    a == null && (a = CI(t, n, e3));
    var u = n === "top" && !i || n === "bottom" && i;
    s[o.id] = a - Number(u) * l.height, a += (u ? -1 : 1) * l.height;
  }), s;
}), jI = O(Ge, Ct, MI, co, ho, (e3, t, r, n, i) => {
  var s = {}, a;
  return r.forEach((o) => {
    var l = EI(t, o);
    a == null && (a = kI(t, n, e3));
    var u = n === "left" && !i || n === "right" && i;
    s[o.id] = a - Number(u) * l.width, a += (u ? -1 : 1) * l.width;
  }), s;
}), TI = (e3, t) => {
  var r = Ze(e3, t);
  if (r != null) return II(e3, r.orientation, r.mirror);
}, NI = O([Ct, Ze, TI, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: e3.left, y: 0 } : { x: e3.left, y: i };
  }
}), DI = (e3, t) => {
  var r = Qe(e3, t);
  if (r != null) return jI(e3, r.orientation, r.mirror);
}, LI = O([Ct, Qe, DI, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: 0, y: e3.top } : { x: i, y: e3.top };
  }
}), RI = O(Ct, Qe, (e3, t) => {
  var r = typeof t.width == "number" ? t.width : ji;
  return { width: r, height: e3.height };
}), ww = (e3, t, r, n) => {
  if (r != null) {
    var { allowDuplicatedCategory: i, type: s, dataKey: a } = r, o = be(e3, n), l = t.map((c) => c.value), u = l.filter((c) => c != null);
    if (a && o && s === "category" && i && my(u)) return l;
  }
}, Ah = O([rt, qi, Wt, xt], ww), jp = O([rt, Kk, Ln, uo, Ah, Eh, Ki, Oh, xt], (e3, t, r, n, i, s, a, o, l) => {
  if (t != null) {
    var u = be(e3, l);
    return { angle: t.angle, interval: t.interval, minTickGap: t.minTickGap, orientation: t.orientation, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, axisType: l, categoricalDomain: s, duplicateDomain: i, isCategorical: u, niceTicks: o, range: a, realScaleType: r, scale: n };
  }
}), $I = (e3, t, r, n, i, s, a, o, l) => {
  if (!(t == null || n == null)) {
    var u = be(e3, l), { type: c, ticks: h, tickCount: f } = t, d = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = c === "category" && n.bandwidth ? n.bandwidth() / d : 0;
    v = l === "angleAxis" && s != null && s.length >= 2 ? oe(s[0] - s[1]) * 2 * v : v;
    var m = h || i;
    return m ? m.map((p, y) => {
      var b = a ? a.indexOf(p) : p, w = n.map(b);
      return q(w) ? { index: y, coordinate: w + v, value: p, offset: v } : null;
    }).filter(Vt) : u && o ? o.map((p, y) => {
      var b = n.map(p);
      return q(b) ? { coordinate: b + v, value: p, index: y, offset: v } : null;
    }).filter(Vt) : n.ticks ? n.ticks(f).map((p, y) => {
      var b = n.map(p);
      return q(b) ? { coordinate: b + v, value: p, index: y, offset: v } : null;
    }).filter(Vt) : n.domain().map((p, y) => {
      var b = n.map(p);
      return q(b) ? { coordinate: b + v, value: a ? a[p] : p, index: y, offset: v } : null;
    }).filter(Vt);
  }
}, xw = O([rt, Wi, Ln, uo, Oh, Ki, Ah, Eh, xt], $I), zI = (e3, t, r, n, i, s, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var o = be(e3, a), { tickCount: l } = t, u = 0;
    return u = a === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? oe(n[0] - n[1]) * 2 * u : u, o && s ? s.map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: c, index: h, offset: u } : null;
    }).filter(Vt) : r.ticks ? r.ticks(l).map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: c, index: h, offset: u } : null;
    }).filter(Vt) : r.domain().map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: i ? i[c] : c, index: h, offset: u } : null;
    }).filter(Vt);
  }
}, fo = O([rt, Wi, uo, Ki, Ah, Eh, xt], zI), vo = O(Wt, uo, (e3, t) => {
  if (!(e3 == null || t == null)) return la(la({}, e3), {}, { scale: t });
}), BI = O([Wt, Ln, _h, mw], yh), FI = O([BI], Hc);
O((e3, t, r) => bh(e3, r), FI, (e3, t) => {
  if (!(e3 == null || t == null)) return la(la({}, e3), {}, { scale: t });
});
var WI = O([rt, Ba, Fa], (e3, t, r) => {
  switch (e3) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), qI = (e3, t, r) => {
  var n;
  return (n = e3.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
O([qI], (e3) => {
  if (!(!e3 || e3.length === 0)) return (t) => {
    var r, n = 1 / 0, i = e3[0];
    for (var s of e3) {
      var a = Math.abs(s.coordinate - t);
      a < n && (n = a, i = s);
    }
    return (r = i) === null || r === void 0 ? void 0 : r.value;
  };
});
var Pw = (e3) => e3.options.defaultTooltipEventType, Sw = (e3) => e3.options.validateTooltipEventTypes;
function _w(e3, t, r) {
  if (e3 == null) return t;
  var n = e3 ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Ui(e3, t) {
  var r = Pw(e3), n = Sw(e3);
  return _w(t, r, n);
}
function KI(e3) {
  return z((t) => Ui(t, e3));
}
var Ow = (e3, t) => {
  var r, n = Number(t);
  if (!(ke(n) || t == null)) return n >= 0 ? e3 == null || (r = e3[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, UI = (e3) => e3.tooltip.settings, ar = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 }, VI = { itemInteraction: { click: ar, hover: ar }, axisInteraction: { click: ar, hover: ar }, keyboardInteraction: ar, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } }, Mw = Dt({ name: "tooltip", initialState: VI, reducers: { addTooltipEntrySettings: { reducer(e3, t) {
  e3.tooltipItemPayloads.push(t.payload);
}, prepare: nt() }, replaceTooltipEntrySettings: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = le(e3).tooltipItemPayloads.indexOf(r);
  i > -1 && (e3.tooltipItemPayloads[i] = n);
}, prepare: nt() }, removeTooltipEntrySettings: { reducer(e3, t) {
  var r = le(e3).tooltipItemPayloads.indexOf(t.payload);
  r > -1 && e3.tooltipItemPayloads.splice(r, 1);
}, prepare: nt() }, setTooltipSettingsState(e3, t) {
  e3.settings = t.payload;
}, setActiveMouseOverItemIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.keyboardInteraction.active = false, e3.itemInteraction.hover.active = true, e3.itemInteraction.hover.index = t.payload.activeIndex, e3.itemInteraction.hover.dataKey = t.payload.activeDataKey, e3.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e3.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
}, mouseLeaveChart(e3) {
  e3.itemInteraction.hover.active = false, e3.axisInteraction.hover.active = false;
}, mouseLeaveItem(e3) {
  e3.itemInteraction.hover.active = false;
}, setActiveClickItemIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.itemInteraction.click.active = true, e3.keyboardInteraction.active = false, e3.itemInteraction.click.index = t.payload.activeIndex, e3.itemInteraction.click.dataKey = t.payload.activeDataKey, e3.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e3.itemInteraction.click.coordinate = t.payload.activeCoordinate;
}, setMouseOverAxisIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.axisInteraction.hover.active = true, e3.keyboardInteraction.active = false, e3.axisInteraction.hover.index = t.payload.activeIndex, e3.axisInteraction.hover.dataKey = t.payload.activeDataKey, e3.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
}, setMouseClickAxisIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.keyboardInteraction.active = false, e3.axisInteraction.click.active = true, e3.axisInteraction.click.index = t.payload.activeIndex, e3.axisInteraction.click.dataKey = t.payload.activeDataKey, e3.axisInteraction.click.coordinate = t.payload.activeCoordinate;
}, setSyncInteraction(e3, t) {
  e3.syncInteraction = t.payload;
}, setKeyboardInteraction(e3, t) {
  e3.keyboardInteraction.active = t.payload.active, e3.keyboardInteraction.index = t.payload.activeIndex, e3.keyboardInteraction.coordinate = t.payload.activeCoordinate;
} } }), { addTooltipEntrySettings: YI, replaceTooltipEntrySettings: HI, removeTooltipEntrySettings: GI, setTooltipSettingsState: XI, setActiveMouseOverItemIndex: JI, mouseLeaveItem: EF, mouseLeaveChart: Ew, setActiveClickItemIndex: AF, setMouseOverAxisIndex: Aw, setMouseClickAxisIndex: ZI, setSyncInteraction: ti, setKeyboardInteraction: ca } = Mw.actions, QI = Mw.reducer;
function Tp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function as(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tp(Object(r), true).forEach(function(n) {
      tj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function tj(e3, t, r) {
  return (t = ej(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ej(e3) {
  var t = rj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function nj(e3, t, r) {
  return t === "axis" ? r === "click" ? e3.axisInteraction.click : e3.axisInteraction.hover : r === "click" ? e3.itemInteraction.click : e3.itemInteraction.hover;
}
function ij(e3) {
  return e3.index != null;
}
var Cw = (e3, t, r, n) => {
  if (t == null) return ar;
  var i = nj(e3, t, r);
  if (i == null) return ar;
  if (i.active) return i;
  if (e3.keyboardInteraction.active) return e3.keyboardInteraction;
  if (e3.syncInteraction.active && e3.syncInteraction.index != null) return e3.syncInteraction;
  var s = e3.settings.active === true;
  if (ij(i)) {
    if (s) return as(as({}, i), {}, { active: true });
  } else if (n != null) return { active: true, coordinate: void 0, dataKey: void 0, index: n, graphicalItemId: void 0 };
  return as(as({}, ar), {}, { coordinate: i.coordinate });
};
function sj(e3) {
  if (typeof e3 == "number") return Number.isFinite(e3) ? e3 : void 0;
  if (e3 instanceof Date) {
    var t = e3.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e3);
  return Number.isFinite(r) ? r : void 0;
}
function aj(e3, t) {
  var r = sj(e3), n = t[0], i = t[1];
  if (r === void 0) return false;
  var s = Math.min(n, i), a = Math.max(n, i);
  return r >= s && r <= a;
}
function oj(e3, t, r) {
  if (r == null || t == null) return true;
  var n = ht(e3, t);
  return n == null || !Ae(r) ? true : aj(n, r);
}
var ni = (e3, t, r, n) => {
  var i = e3 == null ? void 0 : e3.index;
  if (i == null) return null;
  var s = Number(i);
  if (!q(s)) return i;
  var a = 0, o = 1 / 0;
  t.length > 0 && (o = t.length - 1);
  var l = Math.max(a, Math.min(s, o)), u = t[l];
  return u == null || oj(u, r, n) ? String(l) : null;
}, kw = (e3, t, r, n, i, s, a) => {
  if (s != null) {
    var o = a[0], l = o == null ? void 0 : o.getPosition(s);
    if (l != null) return l;
    var u = i == null ? void 0 : i[Number(s)];
    if (u) switch (r) {
      case "horizontal":
        return { x: u.coordinate, y: (n.top + t) / 2 };
      default:
        return { x: (n.left + e3) / 2, y: u.coordinate };
    }
  }
}, Iw = (e3, t, r, n) => {
  if (t === "axis") return e3.tooltipItemPayloads;
  if (e3.tooltipItemPayloads.length === 0) return [];
  var i;
  if (r === "hover" ? i = e3.itemInteraction.hover.graphicalItemId : i = e3.itemInteraction.click.graphicalItemId, e3.syncInteraction.active && i == null) return e3.tooltipItemPayloads;
  if (i == null && (n != null || e3.keyboardInteraction.active)) {
    var s = e3.tooltipItemPayloads[0];
    return s != null ? [s] : [];
  }
  return e3.tooltipItemPayloads.filter((a) => {
    var o;
    return ((o = a.settings) === null || o === void 0 ? void 0 : o.graphicalItemId) === i;
  });
}, jw = (e3) => e3.options.tooltipPayloadSearcher, Rn = (e3) => e3.tooltip;
function Np(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(r), true).forEach(function(n) {
      lj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function lj(e3, t, r) {
  return (t = uj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function uj(e3) {
  var t = cj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function hj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
}
function fj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean") return e3;
}
function dj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
  if (typeof e3 == "function") return (t) => e3(t);
}
function Lp(e3) {
  if (typeof e3 == "string") return e3;
}
function vj(e3) {
  if (!(e3 == null || typeof e3 != "object")) {
    var t = "name" in e3 ? hj(e3.name) : void 0, r = "unit" in e3 ? fj(e3.unit) : void 0, n = "dataKey" in e3 ? dj(e3.dataKey) : void 0, i = "payload" in e3 ? e3.payload : void 0, s = "color" in e3 ? Lp(e3.color) : void 0, a = "fill" in e3 ? Lp(e3.fill) : void 0;
    return { name: t, unit: r, dataKey: n, payload: i, color: s, fill: a };
  }
}
function pj(e3, t) {
  return e3 ?? t;
}
var Tw = (e3, t, r, n, i, s, a) => {
  if (!(t == null || s == null)) {
    var { chartData: o, computedData: l, dataStartIndex: u, dataEndIndex: c } = r, h = [];
    return e3.reduce((f, d) => {
      var v, { dataDefinedOnItem: m, settings: p } = d, y = pj(m, o), b = Array.isArray(y) ? c0(y, u, c) : y, w = (v = p == null ? void 0 : p.dataKey) !== null && v !== void 0 ? v : n, x = p == null ? void 0 : p.nameKey, P;
      if (n && Array.isArray(b) && !Array.isArray(b[0]) && a === "axis" ? P = gy(b, n, i) : P = s(b, t, l, x), Array.isArray(P)) P.forEach((_) => {
        var M, A, j = vj(_), k = j == null ? void 0 : j.name, E = j == null ? void 0 : j.dataKey, $ = j == null ? void 0 : j.payload, R = Dp(Dp({}, p), {}, { name: k, unit: j == null ? void 0 : j.unit, color: (M = j == null ? void 0 : j.color) !== null && M !== void 0 ? M : p == null ? void 0 : p.color, fill: (A = j == null ? void 0 : j.fill) !== null && A !== void 0 ? A : p == null ? void 0 : p.fill });
        f.push(Id({ tooltipEntrySettings: R, dataKey: E, payload: $, value: ht($, E), name: k == null ? void 0 : String(k) }));
      });
      else {
        var S;
        f.push(Id({ tooltipEntrySettings: p, dataKey: w, payload: P, value: ht(P, w), name: (S = ht(P, x)) !== null && S !== void 0 ? S : p == null ? void 0 : p.name }));
      }
      return f;
    }, h);
  }
}, Ch = O([bt, qb, Bc], zb), mj = O([(e3) => e3.graphicalItems.cartesianItems, (e3) => e3.graphicalItems.polarItems], (e3, t) => [...e3, ...t]), gj = O([Pt, jn], Kb), Xr = O([mj, bt, gj], Ub, { memoizeOptions: { resultEqualityCheck: ro } }), yj = O([Xr], (e3) => e3.filter(Yc)), Nw = O([Xr], Hb, { memoizeOptions: { resultEqualityCheck: ro } }), bj = O([Xr], (e3) => e3.some((t) => !t.data)), Br = O([Nw, we], Xb), wj = O([yj, we, bt], ib), kh = O([Br, bt, Xr, we, bj, Nw], Jb), Dw = O([bt], Ph), xj = O([bt], (e3) => e3.allowDataOverflow), Lw = O([Dw, xj], B0), Pj = O([Xr], (e3) => e3.filter(Yc)), Sj = O([wj, Pj, Xa, J0], Qb), _j = O([Sj, we, Pt, Lw], ew), Oj = O([Xr], Yb), Mj = O([Br, bt, Oj, Sh, Pt, UE], iw, { memoizeOptions: { resultEqualityCheck: eo } }), Ej = O([sw, Pt, jn], Dn), Aj = O([Ej, Pt], lw), Cj = O([aw, Pt, jn], Dn), kj = O([Cj, Pt], uw), Ij = O([ow, Pt, jn], Dn), jj = O([Ij, Pt], cw), Tj = O([Aj, jj, kj], ua), Nj = O([bt, Dw, Lw, _j, Mj, Tj, rt, Pt], hw), Mn = O([bt, rt, Br, kh, Xa, Pt, Nj], fw), Dj = O([Mn, bt, Ch], dw), Lj = O([bt, Mn, Dj, Pt], vw), Rw = (e3) => {
  var t = Pt(e3), r = jn(e3), n = false;
  return Ki(e3, t, r, n);
}, $w = O([bt, Rw], Ja), Rj = O([bt, Ch, Lj, $w], yh), zw = O([Rj], Hc), $j = O([rt, kh, bt, Pt], ww), zj = O([rt, kh, bt, Pt], gw), Bj = (e3, t, r, n, i, s, a, o) => {
  if (t) {
    var { type: l } = t, u = be(e3, o);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, h = l === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return h = o === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? oe(i[0] - i[1]) * 2 * h : h, u && a ? a.map((f, d) => {
        var v = n.map(f);
        return q(v) ? { coordinate: v + h, value: f, index: d, offset: h } : null;
      }).filter(Vt) : n.domain().map((f, d) => {
        var v = n.map(f);
        return q(v) ? { coordinate: v + h, value: s ? s[f] : f, index: d, offset: h } : null;
      }).filter(Vt);
    }
  }
}, tr = O([rt, bt, Ch, zw, Rw, $j, zj, Pt], Bj), Ih = O([Pw, Sw, UI], (e3, t, r) => _w(r.shared, e3, t)), Bw = (e3) => e3.tooltip.settings.trigger, jh = (e3) => e3.tooltip.settings.defaultIndex, Vi = O([Rn, Ih, Bw, jh], Cw), xi = O([Vi, Br, On, Mn], ni), Fw = O([tr, xi], Ow), Fj = O([Vi], (e3) => {
  if (e3) return e3.dataKey;
}), Wj = O([Vi], (e3) => {
  if (e3) return e3.graphicalItemId;
}), Ww = O([Rn, Ih, Bw, jh], Iw), qj = O([Ge, Xe, rt, Ct, tr, jh, Ww], kw), Kj = O([Vi, qj], (e3, t) => e3 != null && e3.coordinate ? e3.coordinate : t), Uj = O([Vi], (e3) => {
  var t;
  return (t = e3 == null ? void 0 : e3.active) !== null && t !== void 0 ? t : false;
}), Vj = O([Ww, xi, we, On, Fw, jw, Ih], Tw), Yj = O([Vj], (e3) => {
  if (e3 != null) {
    var t = e3.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function Rp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $p(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rp(Object(r), true).forEach(function(n) {
      Hj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Hj(e3, t, r) {
  return (t = Gj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Gj(e3) {
  var t = Xj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Jj = () => z(bt), Zj = () => {
  var e3 = Jj(), t = z(tr), r = z(zw);
  return wn(!e3 || !r ? void 0 : $p($p({}, e3), {}, { scale: r }), t);
};
function zp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zp(Object(r), true).forEach(function(n) {
      Qj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Qj(e3, t, r) {
  return (t = tT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function tT(e3) {
  var t = eT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var rT = (e3, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e3 === "horizontal") return { x: i.coordinate, y: n.relativeY };
    if (e3 === "vertical") return { x: n.relativeX, y: i.coordinate };
  }
  return { x: 0, y: 0 };
}, nT = (e3, t, r, n) => {
  var i = t.find((u) => u && u.index === r);
  if (i) {
    if (e3 === "centric") {
      var s = i.coordinate, { radius: a } = n;
      return tn(tn(tn({}, n), At(n.cx, n.cy, a, s)), {}, { angle: s, radius: a });
    }
    var o = i.coordinate, { angle: l } = n;
    return tn(tn(tn({}, n), At(n.cx, n.cy, o, l)), {}, { angle: l, radius: o });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function iT(e3, t) {
  var { relativeX: r, relativeY: n } = e3;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var qw = (e3, t, r, n, i) => {
  var s, a = (s = t == null ? void 0 : t.length) !== null && s !== void 0 ? s : 0;
  if (a <= 1 || e3 == null) return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var o = 0; o < a; o++) {
    var l, u, c, h, f, d = o > 0 ? (l = r[o - 1]) === null || l === void 0 ? void 0 : l.coordinate : (u = r[a - 1]) === null || u === void 0 ? void 0 : u.coordinate, v = (c = r[o]) === null || c === void 0 ? void 0 : c.coordinate, m = o >= a - 1 ? (h = r[0]) === null || h === void 0 ? void 0 : h.coordinate : (f = r[o + 1]) === null || f === void 0 ? void 0 : f.coordinate, p = void 0;
    if (!(d == null || v == null || m == null)) if (oe(v - d) !== oe(m - v)) {
      var y = [];
      if (oe(m - v) === oe(i[1] - i[0])) {
        p = m;
        var b = v + i[1] - i[0];
        y[0] = Math.min(b, (b + d) / 2), y[1] = Math.max(b, (b + d) / 2);
      } else {
        p = d;
        var w = m + i[1] - i[0];
        y[0] = Math.min(v, (w + v) / 2), y[1] = Math.max(v, (w + v) / 2);
      }
      var x = [Math.min(v, (p + v) / 2), Math.max(v, (p + v) / 2)];
      if (e3 > x[0] && e3 <= x[1] || e3 >= y[0] && e3 <= y[1]) {
        var P;
        return (P = r[o]) === null || P === void 0 ? void 0 : P.index;
      }
    } else {
      var S = Math.min(d, m), _ = Math.max(d, m);
      if (e3 > (S + v) / 2 && e3 <= (_ + v) / 2) {
        var M;
        return (M = r[o]) === null || M === void 0 ? void 0 : M.index;
      }
    }
  }
  else if (t) for (var A = 0; A < a; A++) {
    var j = t[A];
    if (j != null) {
      var k = t[A + 1], E = t[A - 1];
      if (A === 0 && k != null && e3 <= (j.coordinate + k.coordinate) / 2 || A === a - 1 && E != null && e3 > (j.coordinate + E.coordinate) / 2 || A > 0 && A < a - 1 && E != null && k != null && e3 > (j.coordinate + E.coordinate) / 2 && e3 <= (j.coordinate + k.coordinate) / 2) return j.index;
    }
  }
  return -1;
}, Kw = () => z(Bc), Th = (e3, t) => t, Uw = (e3, t, r) => r, Nh = (e3, t, r, n) => n, sT = O(tr, (e3) => Ca(e3, (t) => t.coordinate)), Dh = O([Rn, Th, Uw, Nh], Cw), Lh = O([Dh, Br, On, Mn], ni), aT = (e3, t, r) => {
  if (t != null) {
    var n = Rn(e3);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Vw = O([Rn, Th, Uw, Nh], Iw), ha = O([Ge, Xe, rt, Ct, tr, Nh, Vw], kw), oT = O([Dh, ha], (e3, t) => {
  var r;
  return (r = e3.coordinate) !== null && r !== void 0 ? r : t;
}), Yw = O([tr, Lh], Ow), lT = O([Vw, Lh, we, On, Yw, jw, Th], Tw), uT = O([Dh, Lh], (e3, t) => ({ isActive: e3.active && t != null, activeIndex: t })), cT = (e3, t, r, n, i, s, a) => {
  if (!(!e3 || !r || !n || !i) && iT(e3, a)) {
    var o = eO(e3, t), l = qw(o, s, i, r, n), u = rT(t, i, l, e3);
    return { activeIndex: String(l), activeCoordinate: u };
  }
}, hT = (e3, t, r, n, i, s, a) => {
  if (!(!e3 || !n || !i || !s || !r)) {
    var o = TE(e3, r);
    if (o) {
      var l = rO(o, t), u = qw(l, a, s, n, i), c = nT(t, s, u, o);
      return { activeIndex: String(u), activeCoordinate: c };
    }
  }
}, fT = (e3, t, r, n, i, s, a, o) => {
  if (!(!e3 || !t || !n || !i || !s)) return t === "horizontal" || t === "vertical" ? cT(e3, t, n, i, s, a, o) : hT(e3, t, r, n, i, s, a);
}, dT = O((e3) => e3.zIndex.zIndexMap, (e3, t) => t, (e3, t, r) => r, (e3, t, r) => {
  if (t != null) {
    var n = e3[t];
    if (n != null) return r ? n.panoramaElement : n.element;
  }
}), vT = O((e3) => e3.zIndex.zIndexMap, (e3) => {
  var t = Object.keys(e3).map((n) => parseInt(n, 10)).concat(Object.values(Tt)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, { memoizeOptions: { resultEqualityCheck: sA } });
function Bp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bp(Object(r), true).forEach(function(n) {
      pT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function pT(e3, t, r) {
  return (t = mT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function mT(e3) {
  var t = gT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var yT = {}, bT = { zIndexMap: Object.values(Tt).reduce((e3, t) => Fp(Fp({}, e3), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), yT) }, wT = new Set(Object.values(Tt));
function xT(e3) {
  return wT.has(e3);
}
var Hw = Dt({ name: "zIndex", initialState: bT, reducers: { registerZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] ? e3.zIndexMap[r].consumers += 1 : e3.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: nt() }, unregisterZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (e3.zIndexMap[r].consumers -= 1, e3.zIndexMap[r].consumers <= 0 && !xT(r) && delete e3.zIndexMap[r]);
}, prepare: nt() }, registerZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r, element: n, isPanorama: i } = t.payload;
  e3.zIndexMap[r] ? i ? e3.zIndexMap[r].panoramaElement = n : e3.zIndexMap[r].element = n : e3.zIndexMap[r] = { consumers: 0, element: i ? void 0 : n, panoramaElement: i ? n : void 0 };
}, prepare: nt() }, unregisterZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (t.payload.isPanorama ? e3.zIndexMap[r].panoramaElement = void 0 : e3.zIndexMap[r].element = void 0);
}, prepare: nt() } } }), { registerZIndexPortal: PT, unregisterZIndexPortal: Kl, registerZIndexPortalElement: ST, unregisterZIndexPortalElement: _T } = Hw.actions, OT = Hw.reducer;
function De(e3) {
  var { zIndex: t, children: r } = e3, n = NO(), i = n && t !== void 0 && t !== 0, s = Lt(), a = g.useRef(void 0), o = g.useRef(/* @__PURE__ */ new Set()), l = dt(), u = z((h) => dT(h, t, s));
  if (g.useLayoutEffect(() => {
    if (!i) {
      var h = o.current;
      h.forEach((d) => {
        l(Kl({ zIndex: d }));
      }), h.clear(), a.current = void 0;
      return;
    }
    if (o.current.has(t) || (l(PT({ zIndex: t })), o.current.add(t)), u) {
      a.current = u;
      var f = o.current;
      f.forEach((d) => {
        d !== t && (l(Kl({ zIndex: d })), f.delete(d));
      });
    }
  }, [l, t, i, u]), g.useLayoutEffect(() => {
    var h = o.current;
    return () => {
      h.forEach((f) => {
        l(Kl({ zIndex: f }));
      }), h.clear();
    };
  }, [l]), !i) return r;
  var c = u ?? a.current;
  return c ? Hg.createPortal(r, c) : null;
}
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, tc.apply(null, arguments);
}
function Wp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function os(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wp(Object(r), true).forEach(function(n) {
      MT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function MT(e3, t, r) {
  return (t = ET(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ET(e3) {
  var t = AT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function CT(e3) {
  var { cursor: t, cursorComp: r, cursorProps: n } = e3;
  return g.isValidElement(t) ? g.cloneElement(t, n) : g.createElement(r, n);
}
function kT(e3) {
  var t, { coordinate: r, payload: n, index: i, offset: s, tooltipAxisBandSize: a, layout: o, cursor: l, tooltipEventType: u, chartName: c } = e3, h = r, f = n, d = i;
  if (!l || !h || c !== "ScatterChart" && u !== "axis") return null;
  var v, m, p;
  if (c === "ScatterChart") v = h, m = YM, p = Tt.cursorLine;
  else if (c === "BarChart") v = HM(o, h, s, a), m = D0, p = Tt.cursorRectangle;
  else if (o === "radial" && wy(h)) {
    var { cx: y, cy: b, radius: w, startAngle: x, endAngle: P } = L0(h);
    v = { cx: y, cy: b, startAngle: x, endAngle: P, innerRadius: w, outerRadius: w }, m = $0, p = Tt.cursorLine;
  } else v = { points: RE(o, h, s) }, m = ri, p = Tt.cursorLine;
  var S = typeof l == "object" && "className" in l ? l.className : void 0, _ = os(os(os(os({ stroke: "#ccc", pointerEvents: "none" }, s), v), _a(l)), {}, { payload: f, payloadIndex: d, className: J("recharts-tooltip-cursor", S) });
  return g.createElement(De, { zIndex: (t = e3.zIndex) !== null && t !== void 0 ? t : p }, g.createElement(CT, { cursor: l, cursorComp: m, cursorProps: _ }));
}
function IT(e3) {
  var t = Zj(), r = y0(), n = Yr(), i = Kw();
  return t == null || r == null || n == null || i == null ? null : g.createElement(kT, tc({}, e3, { offset: r, layout: n, tooltipAxisBandSize: t, chartName: i }));
}
var Gw = g.createContext(null), jT = () => g.useContext(Gw), Ul = { exports: {} }, qp;
function TT() {
  return qp || (qp = 1, (function(e3) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
    function i(l, u, c) {
      this.fn = l, this.context = u, this.once = c || false;
    }
    function s(l, u, c, h, f) {
      if (typeof c != "function") throw new TypeError("The listener must be a function");
      var d = new i(c, h || l, f), v = r ? r + u : u;
      return l._events[v] ? l._events[v].fn ? l._events[v] = [l._events[v], d] : l._events[v].push(d) : (l._events[v] = d, l._eventsCount++), l;
    }
    function a(l, u) {
      --l._eventsCount === 0 ? l._events = new n() : delete l._events[u];
    }
    function o() {
      this._events = new n(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var u = [], c, h;
      if (this._eventsCount === 0) return u;
      for (h in c = this._events) t.call(c, h) && u.push(r ? h.slice(1) : h);
      return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(c)) : u;
    }, o.prototype.listeners = function(u) {
      var c = r ? r + u : u, h = this._events[c];
      if (!h) return [];
      if (h.fn) return [h.fn];
      for (var f = 0, d = h.length, v = new Array(d); f < d; f++) v[f] = h[f].fn;
      return v;
    }, o.prototype.listenerCount = function(u) {
      var c = r ? r + u : u, h = this._events[c];
      return h ? h.fn ? 1 : h.length : 0;
    }, o.prototype.emit = function(u, c, h, f, d, v) {
      var m = r ? r + u : u;
      if (!this._events[m]) return false;
      var p = this._events[m], y = arguments.length, b, w;
      if (p.fn) {
        switch (p.once && this.removeListener(u, p.fn, void 0, true), y) {
          case 1:
            return p.fn.call(p.context), true;
          case 2:
            return p.fn.call(p.context, c), true;
          case 3:
            return p.fn.call(p.context, c, h), true;
          case 4:
            return p.fn.call(p.context, c, h, f), true;
          case 5:
            return p.fn.call(p.context, c, h, f, d), true;
          case 6:
            return p.fn.call(p.context, c, h, f, d, v), true;
        }
        for (w = 1, b = new Array(y - 1); w < y; w++) b[w - 1] = arguments[w];
        p.fn.apply(p.context, b);
      } else {
        var x = p.length, P;
        for (w = 0; w < x; w++) switch (p[w].once && this.removeListener(u, p[w].fn, void 0, true), y) {
          case 1:
            p[w].fn.call(p[w].context);
            break;
          case 2:
            p[w].fn.call(p[w].context, c);
            break;
          case 3:
            p[w].fn.call(p[w].context, c, h);
            break;
          case 4:
            p[w].fn.call(p[w].context, c, h, f);
            break;
          default:
            if (!b) for (P = 1, b = new Array(y - 1); P < y; P++) b[P - 1] = arguments[P];
            p[w].fn.apply(p[w].context, b);
        }
      }
      return true;
    }, o.prototype.on = function(u, c, h) {
      return s(this, u, c, h, false);
    }, o.prototype.once = function(u, c, h) {
      return s(this, u, c, h, true);
    }, o.prototype.removeListener = function(u, c, h, f) {
      var d = r ? r + u : u;
      if (!this._events[d]) return this;
      if (!c) return a(this, d), this;
      var v = this._events[d];
      if (v.fn) v.fn === c && (!f || v.once) && (!h || v.context === h) && a(this, d);
      else {
        for (var m = 0, p = [], y = v.length; m < y; m++) (v[m].fn !== c || f && !v[m].once || h && v[m].context !== h) && p.push(v[m]);
        p.length ? this._events[d] = p.length === 1 ? p[0] : p : a(this, d);
      }
      return this;
    }, o.prototype.removeAllListeners = function(u) {
      var c;
      return u ? (c = r ? r + u : u, this._events[c] && a(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, e3.exports = o;
  })(Ul)), Ul.exports;
}
var NT = TT();
const DT = dr(NT);
var Pi = new DT(), ec = "recharts.syncEvent.tooltip", Kp = "recharts.syncEvent.brush", LT = (e3, t) => {
  if (t && Array.isArray(e3)) {
    var r = Number.parseInt(t, 10);
    if (!ke(r)) return e3[r];
  }
}, RT = { chartName: "", tooltipPayloadSearcher: () => {
}, eventEmitter: void 0, defaultTooltipEventType: "axis" }, Xw = Dt({ name: "options", initialState: RT, reducers: { createEventEmitter: (e3) => {
  e3.eventEmitter == null && (e3.eventEmitter = Symbol("rechartsEventEmitter"));
} } }), $T = Xw.reducer, { createEventEmitter: zT } = Xw.actions;
function BT(e3) {
  return e3.tooltip.syncInteraction;
}
var FT = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 }, Jw = Dt({ name: "chartData", initialState: FT, reducers: { setChartData(e3, t) {
  if (e3.chartData = t.payload, t.payload == null) {
    e3.dataStartIndex = 0, e3.dataEndIndex = 0;
    return;
  }
  t.payload.length > 0 && e3.dataEndIndex !== t.payload.length - 1 && (e3.dataEndIndex = t.payload.length - 1);
}, setComputedData(e3, t) {
  e3.computedData = t.payload;
}, setDataStartEndIndexes(e3, t) {
  var { startIndex: r, endIndex: n } = t.payload;
  r != null && (e3.dataStartIndex = r), n != null && (e3.dataEndIndex = n);
} } }), { setChartData: Up, setDataStartEndIndexes: WT, setComputedData: CF } = Jw.actions, qT = Jw.reducer, KT = ["x", "y"];
function Vp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function en(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vp(Object(r), true).forEach(function(n) {
      UT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function UT(e3, t, r) {
  return (t = VT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function VT(e3) {
  var t = YT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function HT(e3, t) {
  if (e3 == null) return {};
  var r, n, i = GT(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function GT(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function XT() {
  var e3 = z(Fc), t = z(Wc), r = dt(), n = z(Z0), i = z(tr), s = Yr(), a = Ka(), o = z((l) => l.rootProps.className);
  g.useEffect(() => {
    if (e3 == null) return Vr;
    var l = (u, c, h) => {
      if (t !== h && e3 === u) {
        if (c.payload.active === false) {
          r(ti({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
          return;
        }
        if (n === "index") {
          var f;
          if (a && c !== null && c !== void 0 && (f = c.payload) !== null && f !== void 0 && f.coordinate && c.payload.sourceViewBox) {
            var d = c.payload.coordinate, { x: v, y: m } = d, p = HT(d, KT), { x: y, y: b, width: w, height: x } = c.payload.sourceViewBox, P = en(en({}, p), {}, { x: a.x + (w ? (v - y) / w : 0) * a.width, y: a.y + (x ? (m - b) / x : 0) * a.height });
            r(en(en({}, c), {}, { payload: en(en({}, c.payload), {}, { coordinate: P }) }));
          } else r(c);
          return;
        }
        if (i != null) {
          var S;
          if (typeof n == "function") {
            var _ = { activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index), isTooltipActive: c.payload.active, activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index), activeLabel: c.payload.label, activeDataKey: c.payload.dataKey, activeCoordinate: c.payload.coordinate }, M = n(i, _);
            S = i[M];
          } else n === "value" && (S = i.find((H) => String(H.value) === c.payload.label));
          var { coordinate: A } = c.payload;
          if (A == null || a == null) {
            r(ti({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          if (S == null) {
            r(ti({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: void 0 }));
            return;
          }
          var { x: j, y: k } = A, E = Math.min(j, a.x + a.width), $ = Math.min(k, a.y + a.height), R = { x: s === "horizontal" ? S.coordinate : E, y: s === "horizontal" ? $ : S.coordinate }, B = ti({ active: c.payload.active, coordinate: R, dataKey: c.payload.dataKey, index: String(S.index), label: c.payload.label, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: c.payload.graphicalItemId });
          r(B);
        }
      }
    };
    return Pi.on(ec, l), () => {
      Pi.off(ec, l);
    };
  }, [o, r, t, e3, n, i, s, a]);
}
function JT() {
  var e3 = z(Fc), t = z(Wc), r = dt();
  g.useEffect(() => {
    if (e3 == null) return Vr;
    var n = (i, s, a) => {
      t !== a && e3 === i && r(WT(s));
    };
    return Pi.on(Kp, n), () => {
      Pi.off(Kp, n);
    };
  }, [r, t, e3]);
}
function ZT() {
  var e3 = dt();
  g.useEffect(() => {
    e3(zT());
  }, [e3]), XT(), JT();
}
function QT(e3, t, r, n, i, s) {
  var a = z((v) => aT(v, e3, t)), o = z(Wj), l = z(Wc), u = z(Fc), c = z(Z0), h = z(BT), f = (h == null ? void 0 : h.sourceViewBox) != null, d = Ka();
  g.useEffect(() => {
    if (!f && u != null && l != null) {
      var v = ti({ active: s, coordinate: r, dataKey: a, index: i, label: typeof n == "number" ? String(n) : n, sourceViewBox: d, graphicalItemId: o });
      Pi.emit(ec, u, v, l);
    }
  }, [f, r, a, o, i, n, l, u, c, s, d]);
}
function Yp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yp(Object(r), true).forEach(function(n) {
      tN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function tN(e3, t, r) {
  return (t = eN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function eN(e3) {
  var t = rN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function nN(e3) {
  return e3.dataKey;
}
function iN(e3, t) {
  return g.isValidElement(e3) ? g.cloneElement(e3, t) : typeof e3 == "function" ? g.createElement(e3, t) : g.createElement(PM, t);
}
var Gp = [], sN = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function kF(e3) {
  var t, r, n = Ft(e3, sN), { active: i, allowEscapeViewBox: s, animationDuration: a, animationEasing: o, content: l, filterNull: u, isAnimationActive: c, offset: h, payloadUniqBy: f, position: d, reverseDirection: v, useTranslate3d: m, wrapperStyle: p, cursor: y, shared: b, trigger: w, defaultIndex: x, portal: P, axisId: S } = n, _ = dt(), M = typeof x == "number" ? String(x) : x;
  g.useEffect(() => {
    _(XI({ shared: b, trigger: w, axisId: S, active: i, defaultIndex: M }));
  }, [_, b, w, S, i, M]);
  var A = Ka(), j = k0(), k = KI(b), { activeIndex: E, isActive: $ } = (t = z((Kt) => uT(Kt, k, w, M))) !== null && t !== void 0 ? t : {}, R = z((Kt) => lT(Kt, k, w, M)), B = z((Kt) => Yw(Kt, k, w, M)), H = z((Kt) => oT(Kt, k, w, M)), W = R, G = jT(), F = (r = i ?? $) !== null && r !== void 0 ? r : false, [U, Rt] = FS([W, F]), at = k === "axis" ? B : void 0;
  QT(k, w, H, at, E, F);
  var de = P ?? G;
  if (de == null || A == null || k == null) return null;
  var qt = W ?? Gp;
  F || (qt = Gp), u && qt.length && (qt = mS(qt.filter((Kt) => Kt.value != null && (Kt.hide !== true || n.includeHidden)), f, nN));
  var Le = qt.length > 0, $n = Hp(Hp({}, n), {}, { payload: qt, label: at, active: F, activeIndex: E, coordinate: H, accessibilityLayer: j }), zn = g.createElement(TM, { allowEscapeViewBox: s, animationDuration: a, animationEasing: o, isAnimationActive: c, active: F, coordinate: H, hasPayload: Le, offset: h, position: d, reverseDirection: v, useTranslate3d: m, viewBox: A, wrapperStyle: p, lastBoundingBox: U, innerRef: Rt, hasPortalFromProps: !!P }, iN(l, $n));
  return g.createElement(g.Fragment, null, Hg.createPortal(zn, de), F && g.createElement(IT, { cursor: y, tooltipEventType: k, coordinate: H, payload: qt, index: E }));
}
function aN(e3, t, r) {
  return (t = oN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function oN(e3) {
  var t = lN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
class uN {
  constructor(t) {
    aN(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t)) this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function Xp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cN(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xp(Object(r), true).forEach(function(n) {
      hN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function hN(e3, t, r) {
  return (t = fN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function fN(e3) {
  var t = dN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var vN = { cacheSize: 2e3, enableCache: true }, Zw = cN({}, vN), Jp = new uN(Zw.cacheSize), pN = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Zp = "recharts_measurement_span";
function mN(e3, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", s = t.fontStyle || "", a = t.letterSpacing || "", o = t.textTransform || "";
  return "".concat(e3, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(s, "|").concat(a, "|").concat(o);
}
var Qp = (e3, t) => {
  try {
    var r = document.getElementById(Zp);
    r || (r = document.createElement("span"), r.setAttribute("id", Zp), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, pN, t), r.textContent = "".concat(e3);
    var n = r.getBoundingClientRect();
    return { width: n.width, height: n.height };
  } catch {
    return { width: 0, height: 0 };
  }
}, ii = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Li.isSsr) return { width: 0, height: 0 };
  if (!Zw.enableCache) return Qp(t, r);
  var n = mN(t, r), i = Jp.get(n);
  if (i) return i;
  var s = Qp(t, r);
  return Jp.set(n, s), s;
}, Qw;
function gN(e3, t, r) {
  return (t = yN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function yN(e3) {
  var t = bN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var tm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, em = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, wN = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, xN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, PN = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, SN = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function _N(e3) {
  return SN.includes(e3);
}
var un = "NaN";
function ON(e3, t) {
  return e3 * PN[t];
}
class Mt {
  static parse(t) {
    var r, [, n, i] = (r = xN.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Mt.NaN : new Mt(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, ke(t) && (this.unit = ""), r !== "" && !wN.test(r) && (this.num = NaN, this.unit = ""), _N(r) && (this.num = ON(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Mt(NaN, "") : new Mt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Mt(NaN, "") : new Mt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Mt(NaN, "") : new Mt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Mt(NaN, "") : new Mt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return ke(this.num);
  }
}
Qw = Mt;
gN(Mt, "NaN", new Qw(NaN, ""));
function tx(e3) {
  if (e3 == null || e3.includes(un)) return un;
  for (var t = e3; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, s] = (r = tm.exec(t)) !== null && r !== void 0 ? r : [], a = Mt.parse(n ?? ""), o = Mt.parse(s ?? ""), l = i === "*" ? a.multiply(o) : a.divide(o);
    if (l.isNaN()) return un;
    t = t.replace(tm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, c, h, f] = (u = em.exec(t)) !== null && u !== void 0 ? u : [], d = Mt.parse(c ?? ""), v = Mt.parse(f ?? ""), m = h === "+" ? d.add(v) : d.subtract(v);
    if (m.isNaN()) return un;
    t = t.replace(em, m.toString());
  }
  return t;
}
var rm = /\(([^()]*)\)/;
function MN(e3) {
  for (var t = e3, r; (r = rm.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(rm, tx(n));
  }
  return t;
}
function EN(e3) {
  var t = e3.replace(/\s+/g, "");
  return t = MN(t), t = tx(t), t;
}
function AN(e3) {
  try {
    return EN(e3);
  } catch {
    return un;
  }
}
function Vl(e3) {
  var t = AN(e3.slice(5, -1));
  return t === un ? "" : t;
}
var CN = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], kN = ["dx", "dy", "angle", "className", "breakAll"];
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, rc.apply(null, arguments);
}
function nm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = IN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function IN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var ex = /[ \f\n\r\t\v\u2028\u2029]+/, rx = (e3) => {
  var { children: t, breakAll: r, style: n } = e3;
  try {
    var i = [];
    gt(t) || (r ? i = t.toString().split("") : i = t.toString().split(ex));
    var s = i.map((o) => ({ word: o, width: ii(o, n).width })), a = r ? 0 : ii("\xA0", n).width;
    return { wordsWithComputedWidth: s, spaceWidth: a };
  } catch {
    return null;
  }
};
function nx(e3) {
  return e3 === "start" || e3 === "middle" || e3 === "end" || e3 === "inherit";
}
function jN(e3) {
  return gt(e3) || typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean";
}
var ix = (e3, t, r, n) => e3.reduce((i, s) => {
  var { word: a, width: o } = s, l = i[i.length - 1];
  if (l && o != null && (t == null || n || l.width + o + r < Number(t))) l.words.push(a), l.width += o + r;
  else {
    var u = { words: [a], width: o };
    i.push(u);
  }
  return i;
}, []), sx = (e3) => e3.reduce((t, r) => t.width > r.width ? t : r), TN = "\u2026", im = (e3, t, r, n, i, s, a, o) => {
  var l = e3.slice(0, t), u = rx({ breakAll: r, style: n, children: l + TN });
  if (!u) return [false, []];
  var c = ix(u.wordsWithComputedWidth, s, a, o), h = c.length > i || sx(c).width > Number(s);
  return [h, c];
}, NN = (e3, t, r, n, i) => {
  var { maxLines: s, children: a, style: o, breakAll: l } = e3, u = L(s), c = String(a), h = ix(t, n, r, i);
  if (!u || i) return h;
  var f = h.length > s || sx(h).width > Number(n);
  if (!f) return h;
  for (var d = 0, v = c.length - 1, m = 0, p; d <= v && m <= c.length - 1; ) {
    var y = Math.floor((d + v) / 2), b = y - 1, [w, x] = im(c, b, l, o, s, n, r, i), [P] = im(c, y, l, o, s, n, r, i);
    if (!w && !P && (d = y + 1), w && P && (v = y - 1), !w && P) {
      p = x;
      break;
    }
    m++;
  }
  return p || h;
}, sm = (e3) => {
  var t = gt(e3) ? [] : e3.toString().split(ex);
  return [{ words: t, width: void 0 }];
}, DN = (e3) => {
  var { width: t, scaleToFit: r, children: n, style: i, breakAll: s, maxLines: a } = e3;
  if ((t || r) && !Li.isSsr) {
    var o, l, u = rx({ breakAll: s, children: n, style: i });
    if (u) {
      var { wordsWithComputedWidth: c, spaceWidth: h } = u;
      o = c, l = h;
    } else return sm(n);
    return NN({ breakAll: s, children: n, maxLines: a, style: i }, o, l, t, !!r);
  }
  return sm(n);
}, ax = "#808080", LN = { angle: 0, breakAll: false, capHeight: "0.71em", fill: ax, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 }, Rh = g.forwardRef((e3, t) => {
  var r = Ft(e3, LN), { x: n, y: i, lineHeight: s, capHeight: a, fill: o, scaleToFit: l, textAnchor: u, verticalAnchor: c } = r, h = nm(r, CN), f = g.useMemo(() => DN({ breakAll: h.breakAll, children: h.children, maxLines: h.maxLines, scaleToFit: l, style: h.style, width: h.width }), [h.breakAll, h.children, h.maxLines, l, h.style, h.width]), { dx: d, dy: v, angle: m, className: p, breakAll: y } = h, b = nm(h, kN);
  if (!Ie(n) || !Ie(i) || f.length === 0) return null;
  var w = Number(n) + (L(d) ? d : 0), x = Number(i) + (L(v) ? v : 0);
  if (!q(w) || !q(x)) return null;
  var P;
  switch (c) {
    case "start":
      P = Vl("calc(".concat(a, ")"));
      break;
    case "middle":
      P = Vl("calc(".concat((f.length - 1) / 2, " * -").concat(s, " + (").concat(a, " / 2))"));
      break;
    default:
      P = Vl("calc(".concat(f.length - 1, " * -").concat(s, ")"));
      break;
  }
  var S = [], _ = f[0];
  if (l && _ != null) {
    var M = _.width, { width: A } = h;
    S.push("scale(".concat(L(A) && L(M) ? A / M : 1, ")"));
  }
  return m && S.push("rotate(".concat(m, ", ").concat(w, ", ").concat(x, ")")), S.length && (b.transform = S.join(" ")), g.createElement("text", rc({}, Nt(b), { ref: t, x: w, y: x, className: J("recharts-text", p), textAnchor: u, fill: o.includes("url") ? ax : o }), f.map((j, k) => {
    var E = j.words.join(y ? "" : " ");
    return g.createElement("tspan", { x: w, dy: k === 0 ? P : s, key: "".concat(E, "-").concat(k) }, E);
  }));
});
Rh.displayName = "Text";
function am(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Se(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(r), true).forEach(function(n) {
      RN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : am(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function RN(e3, t, r) {
  return (t = $N(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function $N(e3) {
  var t = zN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var BN = (e3) => {
  var { viewBox: t, position: r, offset: n = 0, parentViewBox: i } = e3, { x: s, y: a, height: o, upperWidth: l, lowerWidth: u } = jc(t), c = s, h = s + (l - u) / 2, f = (c + h) / 2, d = (l + u) / 2, v = c + l / 2, m = o >= 0 ? 1 : -1, p = m * n, y = m > 0 ? "end" : "start", b = m > 0 ? "start" : "end", w = l >= 0 ? 1 : -1, x = w * n, P = w > 0 ? "end" : "start", S = w > 0 ? "start" : "end", _ = i;
  if (r === "top") {
    var M = { x: c + l / 2, y: a - p, horizontalAnchor: "middle", verticalAnchor: y };
    return _ && (M.height = Math.max(a - _.y, 0), M.width = l), M;
  }
  if (r === "bottom") {
    var A = { x: h + u / 2, y: a + o + p, horizontalAnchor: "middle", verticalAnchor: b };
    return _ && (A.height = Math.max(_.y + _.height - (a + o), 0), A.width = u), A;
  }
  if (r === "left") {
    var j = { x: f - x, y: a + o / 2, horizontalAnchor: P, verticalAnchor: "middle" };
    return _ && (j.width = Math.max(j.x - _.x, 0), j.height = o), j;
  }
  if (r === "right") {
    var k = { x: f + d + x, y: a + o / 2, horizontalAnchor: S, verticalAnchor: "middle" };
    return _ && (k.width = Math.max(_.x + _.width - k.x, 0), k.height = o), k;
  }
  var E = _ ? { width: d, height: o } : {};
  return r === "insideLeft" ? Se({ x: f + x, y: a + o / 2, horizontalAnchor: S, verticalAnchor: "middle" }, E) : r === "insideRight" ? Se({ x: f + d - x, y: a + o / 2, horizontalAnchor: P, verticalAnchor: "middle" }, E) : r === "insideTop" ? Se({ x: c + l / 2, y: a + p, horizontalAnchor: "middle", verticalAnchor: b }, E) : r === "insideBottom" ? Se({ x: h + u / 2, y: a + o - p, horizontalAnchor: "middle", verticalAnchor: y }, E) : r === "insideTopLeft" ? Se({ x: c + x, y: a + p, horizontalAnchor: S, verticalAnchor: b }, E) : r === "insideTopRight" ? Se({ x: c + l - x, y: a + p, horizontalAnchor: P, verticalAnchor: b }, E) : r === "insideBottomLeft" ? Se({ x: h + x, y: a + o - p, horizontalAnchor: S, verticalAnchor: y }, E) : r === "insideBottomRight" ? Se({ x: h + u - x, y: a + o - p, horizontalAnchor: P, verticalAnchor: y }, E) : r && typeof r == "object" && (L(r.x) || Dr(r.x)) && (L(r.y) || Dr(r.y)) ? Se({ x: s + hr(r.x, d), y: a + hr(r.y, o), horizontalAnchor: "end", verticalAnchor: "end" }, E) : Se({ x: v, y: a + o / 2, horizontalAnchor: "middle", verticalAnchor: "middle" }, E);
}, FN = ["labelRef"], WN = ["content"];
function om(e3, t) {
  if (e3 == null) return {};
  var r, n, i = qN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function qN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function lm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ei(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lm(Object(r), true).forEach(function(n) {
      KN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function KN(e3, t, r) {
  return (t = UN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function UN(e3) {
  var t = VN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, $e.apply(null, arguments);
}
var ox = g.createContext(null), YN = (e3) => {
  var { x: t, y: r, upperWidth: n, lowerWidth: i, width: s, height: a, children: o } = e3, l = g.useMemo(() => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: s, height: a }), [t, r, n, i, s, a]);
  return g.createElement(ox.Provider, { value: l }, o);
}, lx = () => {
  var e3 = g.useContext(ox), t = Ka();
  return e3 || (t ? jc(t) : void 0);
}, HN = g.createContext(null), GN = () => {
  var e3 = g.useContext(HN), t = z(nb);
  return e3 || t;
}, XN = (e3) => {
  var { value: t, formatter: r } = e3, n = gt(e3.children) ? t : e3.children;
  return typeof r == "function" ? r(n) : n;
}, $h = (e3) => e3 != null && typeof e3 == "function", JN = (e3, t) => {
  var r = oe(t - e3), n = Math.min(Math.abs(t - e3), 360);
  return r * n;
}, ZN = (e3, t, r, n, i) => {
  var { offset: s, className: a } = e3, { cx: o, cy: l, innerRadius: u, outerRadius: c, startAngle: h, endAngle: f, clockWise: d } = i, v = (u + c) / 2, m = JN(h, f), p = m >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = h + p * s, b = d;
      break;
    case "insideEnd":
      y = f - p * s, b = !d;
      break;
    case "end":
      y = f + p * s, b = d;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = m <= 0 ? b : !b;
  var w = At(o, l, v, y), x = At(o, l, v, y + (b ? 1 : -1) * 359), P = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), S = gt(e3.id) ? li("recharts-radial-line-") : e3.id;
  return g.createElement("text", $e({}, n, { dominantBaseline: "central", className: J("recharts-radial-bar-label", a) }), g.createElement("defs", null, g.createElement("path", { id: S, d: P })), g.createElement("textPath", { xlinkHref: "#".concat(S) }, r));
}, QN = (e3, t, r) => {
  var { cx: n, cy: i, innerRadius: s, outerRadius: a, startAngle: o, endAngle: l } = e3, u = (o + l) / 2;
  if (r === "outside") {
    var { x: c, y: h } = At(n, i, a + t, u);
    return { x: c, y: h, textAnchor: c >= n ? "start" : "end", verticalAnchor: "middle" };
  }
  if (r === "center") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
  if (r === "centerTop") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
  if (r === "centerBottom") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
  var f = (s + a) / 2, { x: d, y: v } = At(n, i, f, u);
  return { x: d, y: v, textAnchor: "middle", verticalAnchor: "middle" };
}, xs = (e3) => e3 != null && "cx" in e3 && L(e3.cx), tD = { angle: 0, offset: 5, zIndex: Tt.label, position: "middle", textBreakAll: false };
function eD(e3) {
  if (!xs(e3)) return e3;
  var { cx: t, cy: r, outerRadius: n } = e3, i = n * 2;
  return { x: t - n, y: r - n, width: i, upperWidth: i, lowerWidth: i, height: i };
}
function sr(e3) {
  var t = Ft(e3, tD), { viewBox: r, parentViewBox: n, position: i, value: s, children: a, content: o, className: l = "", textBreakAll: u, labelRef: c } = t, h = GN(), f = lx(), d = i === "center" ? f : h ?? f, v, m, p;
  r == null ? v = d : xs(r) ? v = r : v = jc(r);
  var y = eD(v);
  if (!v || gt(s) && gt(a) && !g.isValidElement(o) && typeof o != "function") return null;
  var b = ei(ei({}, t), {}, { viewBox: v });
  if (g.isValidElement(o)) {
    var { labelRef: w } = b, x = om(b, FN);
    return g.cloneElement(o, x);
  }
  if (typeof o == "function") {
    var { content: P } = b, S = om(b, WN);
    if (m = g.createElement(o, S), g.isValidElement(m)) return m;
  } else m = XN(t);
  var _ = Nt(t);
  if (xs(v)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end") return ZN(t, i, m, _, v);
    p = QN(v, t.offset, t.position);
  } else {
    if (!y) return null;
    var M = BN({ viewBox: y, position: i, offset: t.offset, parentViewBox: xs(n) ? void 0 : n });
    p = ei(ei({ x: M.x, y: M.y, textAnchor: M.horizontalAnchor, verticalAnchor: M.verticalAnchor }, M.width !== void 0 ? { width: M.width } : {}), M.height !== void 0 ? { height: M.height } : {});
  }
  return g.createElement(De, { zIndex: t.zIndex }, g.createElement(Rh, $e({ ref: c, className: J("recharts-label", l) }, _, p, { textAnchor: nx(_.textAnchor) ? _.textAnchor : p.textAnchor, breakAll: u }), m));
}
sr.displayName = "Label";
var rD = (e3, t, r) => {
  if (!e3) return null;
  var n = { viewBox: t, labelRef: r };
  return e3 === true ? g.createElement(sr, $e({ key: "label-implicit" }, n)) : Ie(e3) ? g.createElement(sr, $e({ key: "label-implicit", value: e3 }, n)) : g.isValidElement(e3) ? e3.type === sr ? g.cloneElement(e3, ei({ key: "label-implicit" }, n)) : g.createElement(sr, $e({ key: "label-implicit", content: e3 }, n)) : $h(e3) ? g.createElement(sr, $e({ key: "label-implicit", content: e3 }, n)) : e3 && typeof e3 == "object" ? g.createElement(sr, $e({}, e3, { key: "label-implicit" }, n)) : null;
};
function nD(e3) {
  var { label: t, labelRef: r } = e3, n = lx();
  return rD(t, n, r) || null;
}
var iD = ["valueAccessor"], sD = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, fa.apply(null, arguments);
}
function um(e3, t) {
  if (e3 == null) return {};
  var r, n, i = aD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function aD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var oD = (e3) => {
  var t = Array.isArray(e3.value) ? e3.value[e3.value.length - 1] : e3.value;
  if (jN(t)) return t;
}, ux = g.createContext(void 0), cx = ux.Provider, hx = g.createContext(void 0);
hx.Provider;
function lD() {
  return g.useContext(ux);
}
function uD() {
  return g.useContext(hx);
}
function Ps(e3) {
  var { valueAccessor: t = oD } = e3, r = um(e3, iD), { dataKey: n, clockWise: i, id: s, textBreakAll: a, zIndex: o } = r, l = um(r, sD), u = lD(), c = uD(), h = u || c;
  return !h || !h.length ? null : g.createElement(De, { zIndex: o ?? Tt.label }, g.createElement(ee, { className: "recharts-label-list" }, h.map((f, d) => {
    var v, m = gt(n) ? t(f, d) : ht(f.payload, n), p = gt(s) ? {} : { id: "".concat(s, "-").concat(d) };
    return g.createElement(sr, fa({ key: "label-".concat(d) }, Nt(f), l, p, { fill: (v = r.fill) !== null && v !== void 0 ? v : f.fill, parentViewBox: f.parentViewBox, value: m, textBreakAll: a, viewBox: f.viewBox, index: d, zIndex: 0 }));
  })));
}
Ps.displayName = "LabelList";
function fx(e3) {
  var { label: t } = e3;
  return t ? t === true ? g.createElement(Ps, { key: "labelList-implicit" }) : g.isValidElement(t) || $h(t) ? g.createElement(Ps, { key: "labelList-implicit", content: t }) : typeof t == "object" ? g.createElement(Ps, fa({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
}
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, nc.apply(null, arguments);
}
var dx = (e3) => {
  var { cx: t, cy: r, r: n, className: i } = e3, s = J("recharts-dot", i);
  return L(t) && L(r) && L(n) ? g.createElement("circle", nc({}, ce(e3), Pc(e3), { className: s, cx: t, cy: r, r: n })) : null;
}, cD = { radiusAxis: {}, angleAxis: {} }, vx = Dt({ name: "polarAxis", initialState: cD, reducers: { addRadiusAxis(e3, t) {
  e3.radiusAxis[t.payload.id] = t.payload;
}, removeRadiusAxis(e3, t) {
  delete e3.radiusAxis[t.payload.id];
}, addAngleAxis(e3, t) {
  e3.angleAxis[t.payload.id] = t.payload;
}, removeAngleAxis(e3, t) {
  delete e3.angleAxis[t.payload.id];
} } }), { addRadiusAxis: IF, removeRadiusAxis: jF, addAngleAxis: TF, removeAngleAxis: NF } = vx.actions, hD = vx.reducer;
function fD(e3) {
  return e3 && typeof e3 == "object" && "className" in e3 && typeof e3.className == "string" ? e3.className : "";
}
var zh = (e3) => e3 && typeof e3 == "object" && "clipDot" in e3 ? !!e3.clipDot : true, Yl = {}, cm;
function dD() {
  if (cm) return Yl;
  cm = 1;
  function e3(t) {
    var _a3;
    if (typeof t != "object" || t == null) return false;
    if (Object.getPrototypeOf(t) === null) return true;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
      const n = t[Symbol.toStringTag];
      return n == null || !((_a3 = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) == null ? void 0 : _a3.writable) ? false : t.toString() === `[object ${n}]`;
    }
    let r = t;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(t) === r;
  }
  return Yl.isPlainObject = e3, Yl;
}
var Hl, hm;
function vD() {
  return hm || (hm = 1, Hl = dD().isPlainObject), Hl;
}
var pD = vD();
const mD = dr(pD);
var fm, dm, vm, pm, mm;
function gm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ym(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), true).forEach(function(n) {
      gD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function gD(e3, t, r) {
  return (t = yD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function yD(e3) {
  var t = bD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function da() {
  return da = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, da.apply(null, arguments);
}
function Gn(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var bm = (e3, t, r, n, i) => {
  var s = r - n, a;
  return a = lt(fm || (fm = Gn(["M ", ",", ""])), e3, t), a += lt(dm || (dm = Gn(["L ", ",", ""])), e3 + r, t), a += lt(vm || (vm = Gn(["L ", ",", ""])), e3 + r - s / 2, t + i), a += lt(pm || (pm = Gn(["L ", ",", ""])), e3 + r - s / 2 - n, t + i), a += lt(mm || (mm = Gn(["L ", ",", " Z"])), e3, t), a;
}, wD = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, xD = (e3) => {
  var t = Ft(e3, wD), { x: r, y: n, upperWidth: i, lowerWidth: s, height: a, className: o } = t, { animationEasing: l, animationDuration: u, animationBegin: c, isUpdateAnimationActive: h } = t, f = g.useRef(null), [d, v] = g.useState(-1), m = g.useRef(i), p = g.useRef(s), y = g.useRef(a), b = g.useRef(r), w = g.useRef(n), x = Ga(e3, "trapezoid-");
  if (g.useEffect(() => {
    if (f.current && f.current.getTotalLength) try {
      var R = f.current.getTotalLength();
      R && v(R);
    } catch {
    }
  }, []), r !== +r || n !== +n || i !== +i || s !== +s || a !== +a || i === 0 && s === 0 || a === 0) return null;
  var P = J("recharts-trapezoid", o);
  if (!h) return g.createElement("g", null, g.createElement("path", da({}, Nt(t), { className: P, d: bm(r, n, i, s, a) })));
  var S = m.current, _ = p.current, M = y.current, A = b.current, j = w.current, k = "0px ".concat(d === -1 ? 1 : d, "px"), E = "".concat(d, "px ").concat(d, "px"), $ = I0(["strokeDasharray"], u, l);
  return g.createElement(Ha, { animationId: x, key: x, canBegin: d > 0, duration: u, easing: l, isActive: h, begin: c }, (R) => {
    var B = ct(S, i, R), H = ct(_, s, R), W = ct(M, a, R), G = ct(A, r, R), F = ct(j, n, R);
    f.current && (m.current = B, p.current = H, y.current = W, b.current = G, w.current = F);
    var U = R > 0 ? { transition: $, strokeDasharray: E } : { strokeDasharray: k };
    return g.createElement("path", da({}, Nt(t), { className: P, d: bm(G, F, B, H, W), ref: f, style: ym(ym({}, U), t.style) }));
  });
}, PD = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function SD(e3, t) {
  if (e3 == null) return {};
  var r, n, i = _D(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function _D(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function wm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function va(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), true).forEach(function(n) {
      OD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function OD(e3, t, r) {
  return (t = MD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function MD(e3) {
  var t = ED(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ED(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function AD(e3, t) {
  return va(va({}, t), e3);
}
function CD(e3, t) {
  return e3 === "symbols";
}
function xm(e3) {
  var { shapeType: t, elementProps: r } = e3;
  switch (t) {
    case "rectangle":
      return g.createElement(D0, r);
    case "trapezoid":
      return g.createElement(xD, r);
    case "sector":
      return g.createElement($0, r);
    case "symbols":
      if (CD(t)) return g.createElement(by, r);
      break;
    case "curve":
      return g.createElement(ri, r);
    default:
      return null;
  }
}
function kD(e3) {
  return g.isValidElement(e3) ? e3.props : e3;
}
function ID(e3) {
  var { option: t, shapeType: r, activeClassName: n = "recharts-active-shape", inActiveClassName: i = "recharts-shape" } = e3, s = SD(e3, PD), a;
  if (g.isValidElement(t)) a = g.cloneElement(t, va(va({}, s), kD(t)));
  else if (typeof t == "function") a = t(s, s.index);
  else if (mD(t) && typeof t != "boolean") {
    var o = AD(t, s);
    a = g.createElement(xm, { shapeType: r, elementProps: o });
  } else {
    var l = s;
    a = g.createElement(xm, { shapeType: r, elementProps: l });
  }
  return s.isActive ? g.createElement(ee, { className: n }, a) : g.createElement(ee, { className: i }, a);
}
function px(e3) {
  var { tooltipEntrySettings: t } = e3, r = dt(), n = Lt(), i = g.useRef(null);
  return g.useLayoutEffect(() => {
    n || (i.current === null ? r(YI(t)) : i.current !== t && r(HI({ prev: i.current, next: t })), i.current = t);
  }, [t, r, n]), g.useLayoutEffect(() => () => {
    i.current && (r(GI(i.current)), i.current = null);
  }, [r]), null;
}
function mx(e3) {
  var { legendPayload: t } = e3, r = dt(), n = Lt(), i = g.useRef(null);
  return g.useLayoutEffect(() => {
    n || (i.current === null ? r(YO(t)) : i.current !== t && r(HO({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), g.useLayoutEffect(() => () => {
    i.current && (r(GO(i.current)), i.current = null);
  }, [r]), null;
}
var Gl, jD = () => {
  var [e3] = g.useState(() => li("uid-"));
  return e3;
}, TD = (Gl = I1.useId) !== null && Gl !== void 0 ? Gl : jD;
function ND(e3, t) {
  var r = TD();
  return t || (e3 ? "".concat(e3, "-").concat(r) : r);
}
var DD = g.createContext(void 0), gx = (e3) => {
  var { id: t, type: r, children: n } = e3, i = ND("recharts-".concat(r), t);
  return g.createElement(DD.Provider, { value: i }, n(i));
}, LD = { cartesianItems: [], polarItems: [] }, yx = Dt({ name: "graphicalItems", initialState: LD, reducers: { addCartesianGraphicalItem: { reducer(e3, t) {
  e3.cartesianItems.push(t.payload);
}, prepare: nt() }, replaceCartesianGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = le(e3).cartesianItems.indexOf(r);
  i > -1 && (e3.cartesianItems[i] = n);
}, prepare: nt() }, removeCartesianGraphicalItem: { reducer(e3, t) {
  var r = le(e3).cartesianItems.indexOf(t.payload);
  r > -1 && e3.cartesianItems.splice(r, 1);
}, prepare: nt() }, addPolarGraphicalItem: { reducer(e3, t) {
  e3.polarItems.push(t.payload);
}, prepare: nt() }, removePolarGraphicalItem: { reducer(e3, t) {
  var r = le(e3).polarItems.indexOf(t.payload);
  r > -1 && e3.polarItems.splice(r, 1);
}, prepare: nt() }, replacePolarGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = le(e3).polarItems.indexOf(r);
  i > -1 && (e3.polarItems[i] = n);
}, prepare: nt() } } }), { addCartesianGraphicalItem: RD, replaceCartesianGraphicalItem: $D, removeCartesianGraphicalItem: zD, addPolarGraphicalItem: DF, removePolarGraphicalItem: LF, replacePolarGraphicalItem: RF } = yx.actions, BD = yx.reducer, FD = (e3) => {
  var t = dt(), r = g.useRef(null);
  return g.useLayoutEffect(() => {
    r.current === null ? t(RD(e3)) : r.current !== e3 && t($D({ prev: r.current, next: e3 })), r.current = e3;
  }, [t, e3]), g.useLayoutEffect(() => () => {
    r.current && (t(zD(r.current)), r.current = null);
  }, [t]), null;
}, bx = g.memo(FD), WD = ["points"];
function Pm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xl(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pm(Object(r), true).forEach(function(n) {
      qD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function qD(e3, t, r) {
  return (t = KD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function KD(e3) {
  var t = UD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, pa.apply(null, arguments);
}
function VD(e3, t) {
  if (e3 == null) return {};
  var r, n, i = YD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function YD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function HD(e3) {
  var { option: t, dotProps: r, className: n } = e3;
  if (g.isValidElement(t)) return g.cloneElement(t, r);
  if (typeof t == "function") return t(r);
  var i = J(n, typeof t != "boolean" ? t.className : ""), s = r ?? {}, { points: a } = s, o = VD(s, WD);
  return g.createElement(dx, pa({}, o, { className: i }));
}
function GD(e3, t) {
  return e3 == null ? false : t ? true : e3.length === 1;
}
function wx(e3) {
  var { points: t, dot: r, className: n, dotClassName: i, dataKey: s, baseProps: a, needClip: o, clipPathId: l, zIndex: u = Tt.scatter } = e3;
  if (!GD(t, r)) return null;
  var c = zh(r), h = z1(r), f = t.map((v, m) => {
    var p, y, b = Xl(Xl(Xl({ r: 3 }, a), h), {}, { index: m, cx: (p = v.x) !== null && p !== void 0 ? p : void 0, cy: (y = v.y) !== null && y !== void 0 ? y : void 0, dataKey: s, value: v.value, payload: v.payload, points: t });
    return g.createElement(HD, { key: "dot-".concat(m), option: r, dotProps: b, className: i });
  }), d = {};
  return o && l != null && (d.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(l, ")")), g.createElement(De, { zIndex: u }, g.createElement(ee, pa({ className: n }, d), f));
}
function Sm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _m(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), true).forEach(function(n) {
      XD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function XD(e3, t, r) {
  return (t = JD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function JD(e3) {
  var t = ZD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var xx = 0, QD = { xAxis: {}, yAxis: {}, zAxis: {} }, Px = Dt({ name: "cartesianAxis", initialState: QD, reducers: { addXAxis: { reducer(e3, t) {
  e3.xAxis[t.payload.id] = t.payload;
}, prepare: nt() }, replaceXAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.xAxis[r.id], e3.xAxis[n.id] = n);
}, prepare: nt() }, removeXAxis: { reducer(e3, t) {
  delete e3.xAxis[t.payload.id];
}, prepare: nt() }, addYAxis: { reducer(e3, t) {
  e3.yAxis[t.payload.id] = t.payload;
}, prepare: nt() }, replaceYAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.yAxis[r.id], e3.yAxis[n.id] = n);
}, prepare: nt() }, removeYAxis: { reducer(e3, t) {
  delete e3.yAxis[t.payload.id];
}, prepare: nt() }, addZAxis: { reducer(e3, t) {
  e3.zAxis[t.payload.id] = t.payload;
}, prepare: nt() }, replaceZAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.zAxis[r.id], e3.zAxis[n.id] = n);
}, prepare: nt() }, removeZAxis: { reducer(e3, t) {
  delete e3.zAxis[t.payload.id];
}, prepare: nt() }, updateYAxisWidth(e3, t) {
  var { id: r, width: n } = t.payload, i = e3.yAxis[r];
  if (i) {
    var s, a = i.widthHistory || [];
    if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - ((s = a[0]) !== null && s !== void 0 ? s : 0)) <= 1) return;
    var o = [...a, n].slice(-3);
    e3.yAxis[r] = _m(_m({}, i), {}, { width: n, widthHistory: o });
  }
} } }), { addXAxis: t2, replaceXAxis: e2, removeXAxis: r2, addYAxis: n2, replaceYAxis: i2, removeYAxis: s2, addZAxis: $F, replaceZAxis: zF, removeZAxis: BF, updateYAxisWidth: a2 } = Px.actions, o2 = Px.reducer, l2 = O([Ct], (e3) => ({ top: e3.top, bottom: e3.bottom, left: e3.left, right: e3.right })), u2 = O([l2, Ge, Xe], (e3, t, r) => {
  if (!(!e3 || t == null || r == null)) return { x: e3.left, y: e3.top, width: Math.max(0, t - e3.left - e3.right), height: Math.max(0, r - e3.top - e3.bottom) };
}), po = () => z(u2), c2 = () => z(Yj);
function Om(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jl(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), true).forEach(function(n) {
      h2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function h2(e3, t, r) {
  return (t = f2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function f2(e3) {
  var t = d2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function d2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var v2 = (e3) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: s, clipPath: a } = e3;
  if (i === false || t.x == null || t.y == null) return null;
  var o = { index: r, dataKey: s, cx: t.x, cy: t.y, r: 4, fill: n ?? "none", strokeWidth: 2, stroke: "#fff", payload: t.payload, value: t.value }, l = Jl(Jl(Jl({}, o), _a(i)), Pc(i)), u;
  return g.isValidElement(i) ? u = g.cloneElement(i, l) : typeof i == "function" ? u = i(l) : u = g.createElement(dx, l), g.createElement(ee, { className: "recharts-active-dot", clipPath: a }, u);
};
function ic(e3) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i, clipPath: s, zIndex: a = Tt.activeDot } = e3, o = z(xi), l = c2();
  if (t == null || l == null) return null;
  var u = t.find((c) => l.includes(c.payload));
  return gt(u) ? null : g.createElement(De, { zIndex: a }, g.createElement(v2, { point: u, childIndex: Number(o), mainColor: r, dataKey: i, activeDot: n, clipPath: s }));
}
var p2 = (e3) => {
  var { chartData: t } = e3, r = dt(), n = Lt();
  return g.useEffect(() => n ? () => {
  } : (r(Up(t)), () => {
    r(Up(void 0));
  }), [t, r, n]), null;
}, Mm = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }, Sx = Dt({ name: "brush", initialState: Mm, reducers: { setBrushSettings(e3, t) {
  return t.payload == null ? Mm : t.payload;
} } }), { setBrushSettings: FF } = Sx.actions, m2 = Sx.reducer;
function g2(e3) {
  return (e3 % 180 + 180) % 180;
}
var y2 = function(t) {
  var { width: r, height: n } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = g2(i), a = s * Math.PI / 180, o = Math.atan(n / r), l = a > o && a < Math.PI - o ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(l);
}, b2 = { dots: [], areas: [], lines: [] }, _x = Dt({ name: "referenceElements", initialState: b2, reducers: { addDot: (e3, t) => {
  e3.dots.push(t.payload);
}, removeDot: (e3, t) => {
  var r = le(e3).dots.findIndex((n) => n === t.payload);
  r !== -1 && e3.dots.splice(r, 1);
}, addArea: (e3, t) => {
  e3.areas.push(t.payload);
}, removeArea: (e3, t) => {
  var r = le(e3).areas.findIndex((n) => n === t.payload);
  r !== -1 && e3.areas.splice(r, 1);
}, addLine: (e3, t) => {
  e3.lines.push(t.payload);
}, removeLine: (e3, t) => {
  var r = le(e3).lines.findIndex((n) => n === t.payload);
  r !== -1 && e3.lines.splice(r, 1);
} } }), { addDot: WF, removeDot: qF, addArea: KF, removeArea: UF, addLine: VF, removeLine: YF } = _x.actions, w2 = _x.reducer, x2 = g.createContext(void 0), P2 = (e3) => {
  var { children: t } = e3, [r] = g.useState("".concat(li("recharts"), "-clip")), n = po();
  if (n == null) return null;
  var { x: i, y: s, width: a, height: o } = n;
  return g.createElement(x2.Provider, { value: r }, g.createElement("defs", null, g.createElement("clipPath", { id: r }, g.createElement("rect", { x: i, y: s, height: o, width: a }))), t);
};
function Ox(e3, t) {
  if (t < 1) return [];
  if (t === 1) return e3;
  for (var r = [], n = 0; n < e3.length; n += t) {
    var i = e3[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function S2(e3, t, r) {
  var n = { width: e3.width + t.width, height: e3.height + t.height };
  return y2(n, r);
}
function _2(e3, t, r) {
  var n = r === "width", { x: i, y: s, width: a, height: o } = e3;
  return t === 1 ? { start: n ? i : s, end: n ? i + a : s + o } : { start: n ? i + a : s + o, end: n ? i : s };
}
function Si(e3, t, r, n, i) {
  if (e3 * t < e3 * n || e3 * t > e3 * i) return false;
  var s = r();
  return e3 * (t - e3 * s / 2 - n) >= 0 && e3 * (t + e3 * s / 2 - i) <= 0;
}
function O2(e3, t) {
  return Ox(e3, t + 1);
}
function M2(e3, t, r, n, i) {
  for (var s = (n || []).slice(), { start: a, end: o } = t, l = 0, u = 1, c = a, h = function() {
    var v = n == null ? void 0 : n[l];
    if (v === void 0) return { v: Ox(n, u) };
    var m = l, p, y = () => (p === void 0 && (p = r(v, m)), p), b = v.coordinate, w = l === 0 || Si(e3, b, y, c, o);
    w || (l = 0, c = a, u += 1), w && (c = b + e3 * (y() / 2 + i), l += u);
  }, f; u <= s.length; ) if (f = h(), f) return f.v;
  return [];
}
function E2(e3, t, r, n, i) {
  var s = (n || []).slice(), a = s.length;
  if (a === 0) return [];
  for (var { start: o, end: l } = t, u = 1; u <= a; u++) {
    for (var c = (a - 1) % u, h = o, f = true, d = function() {
      var x = n[m];
      if (x == null) return 0;
      var P = m, S, _ = () => (S === void 0 && (S = r(x, P)), S), M = x.coordinate, A = m === c || Si(e3, M, _, h, l);
      if (!A) return f = false, 1;
      A && (h = M + e3 * (_() / 2 + i));
    }, v, m = c; m < a && (v = d(), !(v !== 0 && v === 1)); m += u) ;
    if (f) {
      for (var p = [], y = c; y < a; y += u) {
        var b = n[y];
        b != null && p.push(b);
      }
      return p;
    }
  }
  return [];
}
function Em(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Em(Object(r), true).forEach(function(n) {
      A2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function A2(e3, t, r) {
  return (t = C2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function C2(e3) {
  var t = k2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function k2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function I2(e3, t, r, n, i) {
  for (var s = (n || []).slice(), a = s.length, { start: o } = t, { end: l } = t, u = function(f) {
    var d = s[f];
    if (d == null) return 1;
    var v = d, m, p = () => (m === void 0 && (m = r(d, f)), m);
    if (f === a - 1) {
      var y = e3 * (v.coordinate + e3 * p() / 2 - l);
      s[f] = v = It(It({}, v), {}, { tickCoord: y > 0 ? v.coordinate - y * e3 : v.coordinate });
    } else s[f] = v = It(It({}, v), {}, { tickCoord: v.coordinate });
    if (v.tickCoord != null) {
      var b = Si(e3, v.tickCoord, p, o, l);
      b && (l = v.tickCoord - e3 * (p() / 2 + i), s[f] = It(It({}, v), {}, { isShow: true }));
    }
  }, c = a - 1; c >= 0; c--) u(c);
  return s;
}
function j2(e3, t, r, n, i, s) {
  var a = (n || []).slice(), o = a.length, { start: l, end: u } = t;
  if (s) {
    var c = n[o - 1];
    if (c != null) {
      var h = r(c, o - 1), f = e3 * (c.coordinate + e3 * h / 2 - u);
      if (a[o - 1] = c = It(It({}, c), {}, { tickCoord: f > 0 ? c.coordinate - f * e3 : c.coordinate }), c.tickCoord != null) {
        var d = Si(e3, c.tickCoord, () => h, l, u);
        d && (u = c.tickCoord - e3 * (h / 2 + i), a[o - 1] = It(It({}, c), {}, { isShow: true }));
      }
    }
  }
  for (var v = s ? o - 1 : o, m = function(b) {
    var w = a[b];
    if (w == null) return 1;
    var x = w, P, S = () => (P === void 0 && (P = r(w, b)), P);
    if (b === 0) {
      var _ = e3 * (x.coordinate - e3 * S() / 2 - l);
      a[b] = x = It(It({}, x), {}, { tickCoord: _ < 0 ? x.coordinate - _ * e3 : x.coordinate });
    } else a[b] = x = It(It({}, x), {}, { tickCoord: x.coordinate });
    if (x.tickCoord != null) {
      var M = Si(e3, x.tickCoord, S, l, u);
      M && (l = x.tickCoord + e3 * (S() / 2 + i), a[b] = It(It({}, x), {}, { isShow: true }));
    }
  }, p = 0; p < v; p++) m(p);
  return a;
}
function Bh(e3, t, r) {
  var { tick: n, ticks: i, viewBox: s, minTickGap: a, orientation: o, interval: l, tickFormatter: u, unit: c, angle: h } = e3;
  if (!i || !i.length || !n) return [];
  if (L(l) || Li.isSsr) {
    var f;
    return (f = O2(i, L(l) ? l : 0)) !== null && f !== void 0 ? f : [];
  }
  var d = [], v = o === "top" || o === "bottom" ? "width" : "height", m = c && v === "width" ? ii(c, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, p = (P, S) => {
    var _ = typeof u == "function" ? u(P.value, S) : P.value;
    return v === "width" ? S2(ii(_, { fontSize: t, letterSpacing: r }), m, h) : ii(_, { fontSize: t, letterSpacing: r })[v];
  }, y = i[0], b = i[1], w = i.length >= 2 && y != null && b != null ? oe(b.coordinate - y.coordinate) : 1, x = _2(s, w, v);
  return l === "equidistantPreserveStart" ? M2(w, x, p, i, a) : l === "equidistantPreserveEnd" ? E2(w, x, p, i, a) : (l === "preserveStart" || l === "preserveStartEnd" ? d = j2(w, x, p, i, a, l === "preserveStartEnd") : d = I2(w, x, p, i, a), d.filter((P) => P.isShow));
}
var T2 = (e3) => {
  var { ticks: t, label: r, labelGapWithTick: n = 5, tickSize: i = 0, tickMargin: s = 0 } = e3, a = 0;
  if (t) {
    Array.from(t).forEach((c) => {
      if (c) {
        var h = c.getBoundingClientRect();
        h.width > a && (a = h.width);
      }
    });
    var o = r ? r.getBoundingClientRect().width : 0, l = i + s, u = a + l + o + (r ? n : 0);
    return Math.round(u);
  }
  return 0;
}, N2 = { xAxis: {}, yAxis: {} }, Mx = Dt({ name: "renderedTicks", initialState: N2, reducers: { setRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n, ticks: i } = t.payload;
  e3[r][n] = i;
}, removeRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n } = t.payload;
  delete e3[r][n];
} } }), { setRenderedTicks: D2, removeRenderedTicks: L2 } = Mx.actions, R2 = Mx.reducer, $2 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function z2(e3, t) {
  if (e3 == null) return {};
  var r, n, i = B2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function B2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Fr.apply(null, arguments);
}
function Am(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), true).forEach(function(n) {
      F2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function F2(e3, t, r) {
  return (t = W2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function W2(e3) {
  var t = q2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Ke = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: Tt.axis };
function K2(e3) {
  var { x: t, y: r, width: n, height: i, orientation: s, mirror: a, axisLine: o, otherSvgProps: l } = e3;
  if (!o) return null;
  var u = ot(ot(ot({}, l), ce(o)), {}, { fill: "none" });
  if (s === "top" || s === "bottom") {
    var c = +(s === "top" && !a || s === "bottom" && a);
    u = ot(ot({}, u), {}, { x1: t, y1: r + c * i, x2: t + n, y2: r + c * i });
  } else {
    var h = +(s === "left" && !a || s === "right" && a);
    u = ot(ot({}, u), {}, { x1: t + h * n, y1: r, x2: t + h * n, y2: r + i });
  }
  return g.createElement("line", Fr({}, u, { className: J("recharts-cartesian-axis-line", Aa(o, "className")) }));
}
function U2(e3, t, r, n, i, s, a, o, l) {
  var u, c, h, f, d, v, m = o ? -1 : 1, p = e3.tickSize || a, y = L(e3.tickCoord) ? e3.tickCoord : e3.coordinate;
  switch (s) {
    case "top":
      u = c = e3.coordinate, f = r + +!o * i, h = f - m * p, v = h - m * l, d = y;
      break;
    case "left":
      h = f = e3.coordinate, c = t + +!o * n, u = c - m * p, d = u - m * l, v = y;
      break;
    case "right":
      h = f = e3.coordinate, c = t + +o * n, u = c + m * p, d = u + m * l, v = y;
      break;
    default:
      u = c = e3.coordinate, f = r + +o * i, h = f + m * p, v = h + m * l, d = y;
      break;
  }
  return { line: { x1: u, y1: h, x2: c, y2: f }, tick: { x: d, y: v } };
}
function V2(e3, t) {
  switch (e3) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function Y2(e3, t) {
  switch (e3) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function H2(e3) {
  var { option: t, tickProps: r, value: n } = e3, i, s = J(r.className, "recharts-cartesian-axis-tick-value");
  if (g.isValidElement(t)) i = g.cloneElement(t, ot(ot({}, r), {}, { className: s }));
  else if (typeof t == "function") i = t(ot(ot({}, r), {}, { className: s }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = J(a, fD(t))), i = g.createElement(Rh, Fr({}, r, { className: a }), n);
  }
  return i;
}
function G2(e3) {
  var { ticks: t, axisType: r, axisId: n } = e3, i = dt();
  return g.useEffect(() => {
    if (n == null || r == null) return Vr;
    var s = t.map((a) => ({ value: a.value, coordinate: a.coordinate, offset: a.offset, index: a.index }));
    return i(D2({ ticks: s, axisId: n, axisType: r })), () => {
      i(L2({ axisId: n, axisType: r }));
    };
  }, [i, t, n, r]), null;
}
var X2 = g.forwardRef((e3, t) => {
  var { ticks: r = [], tick: n, tickLine: i, stroke: s, tickFormatter: a, unit: o, padding: l, tickTextProps: u, orientation: c, mirror: h, x: f, y: d, width: v, height: m, tickSize: p, tickMargin: y, fontSize: b, letterSpacing: w, getTicksConfig: x, events: P, axisType: S, axisId: _ } = e3, M = Bh(ot(ot({}, x), {}, { ticks: r }), b, w), A = ce(x), j = _a(n), k = nx(A.textAnchor) ? A.textAnchor : V2(c, h), E = Y2(c, h), $ = {};
  typeof i == "object" && ($ = i);
  var R = ot(ot({}, A), {}, { fill: "none" }, $), B = M.map((G) => ot({ entry: G }, U2(G, f, d, v, m, c, p, h, y))), H = B.map((G) => {
    var { entry: F, line: U } = G;
    return g.createElement(ee, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(F.value, "-").concat(F.coordinate, "-").concat(F.tickCoord) }, i && g.createElement("line", Fr({}, R, U, { className: J("recharts-cartesian-axis-tick-line", Aa(i, "className")) })));
  }), W = B.map((G, F) => {
    var U, Rt, { entry: at, tick: de } = G, qt = ot(ot(ot(ot({ verticalAnchor: E }, A), {}, { textAnchor: k, stroke: "none", fill: s }, de), {}, { index: F, payload: at, visibleTicksCount: M.length, tickFormatter: a, padding: l }, u), {}, { angle: (U = (Rt = u == null ? void 0 : u.angle) !== null && Rt !== void 0 ? Rt : A.angle) !== null && U !== void 0 ? U : 0 }), Le = ot(ot({}, qt), j);
    return g.createElement(ee, Fr({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat(at.value, "-").concat(at.coordinate, "-").concat(at.tickCoord) }, qP(P, at, F)), n && g.createElement(H2, { option: n, tickProps: Le, value: "".concat(typeof a == "function" ? a(at.value, F) : at.value).concat(o || "") }));
  });
  return g.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(S, "-ticks") }, g.createElement(G2, { ticks: M, axisId: _, axisType: S }), W.length > 0 && g.createElement(De, { zIndex: Tt.label }, g.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(S, "-tick-labels"), ref: t }, W)), H.length > 0 && g.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(S, "-tick-lines") }, H));
}), J2 = g.forwardRef((e3, t) => {
  var { axisLine: r, width: n, height: i, className: s, hide: a, ticks: o, axisType: l, axisId: u } = e3, c = z2(e3, $2), [h, f] = g.useState(""), [d, v] = g.useState(""), m = g.useRef(null);
  g.useImperativeHandle(t, () => ({ getCalculatedWidth: () => {
    var y;
    return T2({ ticks: m.current, label: (y = e3.labelRef) === null || y === void 0 ? void 0 : y.current, labelGapWithTick: 5, tickSize: e3.tickSize, tickMargin: e3.tickMargin });
  } }));
  var p = g.useCallback((y) => {
    if (y) {
      var b = y.getElementsByClassName("recharts-cartesian-axis-tick-value");
      m.current = b;
      var w = b[0];
      if (w) {
        var x = window.getComputedStyle(w), P = x.fontSize, S = x.letterSpacing;
        (P !== h || S !== d) && (f(P), v(S));
      }
    }
  }, [h, d]);
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : g.createElement(De, { zIndex: e3.zIndex }, g.createElement(ee, { className: J("recharts-cartesian-axis", s) }, g.createElement(K2, { x: e3.x, y: e3.y, width: n, height: i, orientation: e3.orientation, mirror: e3.mirror, axisLine: r, otherSvgProps: ce(e3) }), g.createElement(X2, { ref: p, axisType: l, events: c, fontSize: h, getTicksConfig: e3, height: e3.height, letterSpacing: d, mirror: e3.mirror, orientation: e3.orientation, padding: e3.padding, stroke: e3.stroke, tick: e3.tick, tickFormatter: e3.tickFormatter, tickLine: e3.tickLine, tickMargin: e3.tickMargin, tickSize: e3.tickSize, tickTextProps: e3.tickTextProps, ticks: o, unit: e3.unit, width: e3.width, x: e3.x, y: e3.y, axisId: u }), g.createElement(YN, { x: e3.x, y: e3.y, width: e3.width, height: e3.height, lowerWidth: e3.width, upperWidth: e3.width }, g.createElement(nD, { label: e3.label, labelRef: e3.labelRef }), e3.children)));
}), Fh = g.forwardRef((e3, t) => {
  var r = Ft(e3, Ke);
  return g.createElement(J2, Fr({}, r, { ref: t }));
});
Fh.displayName = "CartesianAxis";
var Z2 = ["x1", "y1", "x2", "y2", "key"], Q2 = ["offset"], tL = ["xAxisId", "yAxisId"], eL = ["xAxisId", "yAxisId"];
function Cm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cm(Object(r), true).forEach(function(n) {
      rL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function rL(e3, t, r) {
  return (t = nL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function nL(e3) {
  var t = iL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ar.apply(null, arguments);
}
function ma(e3, t) {
  if (e3 == null) return {};
  var r, n, i = sL(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function sL(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var aL = (e3) => {
  var { fill: t } = e3;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: n, y: i, width: s, height: a, ry: o } = e3;
  return g.createElement("rect", { x: n, y: i, ry: o, width: s, height: a, stroke: "none", fill: t, fillOpacity: r, className: "recharts-cartesian-grid-bg" });
};
function Ex(e3) {
  var { option: t, lineItemProps: r } = e3, n;
  if (g.isValidElement(t)) n = g.cloneElement(t, r);
  else if (typeof t == "function") n = t(r);
  else {
    var i, { x1: s, y1: a, x2: o, y2: l, key: u } = r, c = ma(r, Z2), h = (i = ce(c)) !== null && i !== void 0 ? i : {}, { offset: f } = h, d = ma(h, Q2);
    n = g.createElement("line", Ar({}, d, { x1: s, y1: a, x2: o, y2: l, fill: "none", key: u }));
  }
  return n;
}
function oL(e3) {
  var { x: t, width: r, horizontal: n = true, horizontalPoints: i } = e3;
  if (!n || !i || !i.length) return null;
  var { xAxisId: s, yAxisId: a } = e3, o = ma(e3, tL), l = i.map((u, c) => {
    var h = jt(jt({}, o), {}, { x1: t, y1: u, x2: t + r, y2: u, key: "line-".concat(c), index: c });
    return g.createElement(Ex, { key: "line-".concat(c), option: n, lineItemProps: h });
  });
  return g.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, l);
}
function lL(e3) {
  var { y: t, height: r, vertical: n = true, verticalPoints: i } = e3;
  if (!n || !i || !i.length) return null;
  var { xAxisId: s, yAxisId: a } = e3, o = ma(e3, eL), l = i.map((u, c) => {
    var h = jt(jt({}, o), {}, { x1: u, y1: t, x2: u, y2: t + r, key: "line-".concat(c), index: c });
    return g.createElement(Ex, { option: n, lineItemProps: h, key: "line-".concat(c) });
  });
  return g.createElement("g", { className: "recharts-cartesian-grid-vertical" }, l);
}
function uL(e3) {
  var { horizontalFill: t, fillOpacity: r, x: n, y: i, width: s, height: a, horizontalPoints: o, horizontal: l = true } = e3;
  if (!l || !t || !t.length || o == null) return null;
  var u = o.map((h) => Math.round(h + i - i)).sort((h, f) => h - f);
  i !== u[0] && u.unshift(0);
  var c = u.map((h, f) => {
    var d = u[f + 1], v = d == null, m = v ? i + a - h : d - h;
    if (m <= 0) return null;
    var p = f % t.length;
    return g.createElement("rect", { key: "react-".concat(f), y: h, x: n, height: m, width: s, stroke: "none", fill: t[p], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return g.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, c);
}
function cL(e3) {
  var { vertical: t = true, verticalFill: r, fillOpacity: n, x: i, y: s, width: a, height: o, verticalPoints: l } = e3;
  if (!t || !r || !r.length) return null;
  var u = l.map((h) => Math.round(h + i - i)).sort((h, f) => h - f);
  i !== u[0] && u.unshift(0);
  var c = u.map((h, f) => {
    var d = u[f + 1], v = d == null, m = v ? i + a - h : d - h;
    if (m <= 0) return null;
    var p = f % r.length;
    return g.createElement("rect", { key: "react-".concat(f), x: h, y: s, width: m, height: o, stroke: "none", fill: r[p], fillOpacity: n, className: "recharts-cartesian-grid-bg" });
  });
  return g.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, c);
}
var hL = (e3, t) => {
  var { xAxis: r, width: n, height: i, offset: s } = e3;
  return h0(Bh(jt(jt(jt({}, Ke), r), {}, { ticks: f0(r), viewBox: { x: 0, y: 0, width: n, height: i } })), s.left, s.left + s.width, t);
}, fL = (e3, t) => {
  var { yAxis: r, width: n, height: i, offset: s } = e3;
  return h0(Bh(jt(jt(jt({}, Ke), r), {}, { ticks: f0(r), viewBox: { x: 0, y: 0, width: n, height: i } })), s.top, s.top + s.height, t);
}, dL = { horizontal: true, vertical: true, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [], xAxisId: 0, yAxisId: 0, syncWithTicks: false, zIndex: Tt.grid };
function vL(e3) {
  var t = b0(), r = w0(), n = y0(), i = jt(jt({}, Ft(e3, dL)), {}, { x: L(e3.x) ? e3.x : n.left, y: L(e3.y) ? e3.y : n.top, width: L(e3.width) ? e3.width : n.width, height: L(e3.height) ? e3.height : n.height }), { xAxisId: s, yAxisId: a, x: o, y: l, width: u, height: c, syncWithTicks: h, horizontalValues: f, verticalValues: d } = i, v = Lt(), m = z((A) => jp(A, "xAxis", s, v)), p = z((A) => jp(A, "yAxis", a, v));
  if (!je(u) || !je(c) || !L(o) || !L(l)) return null;
  var y = i.verticalCoordinatesGenerator || hL, b = i.horizontalCoordinatesGenerator || fL, { horizontalPoints: w, verticalPoints: x } = i;
  if ((!w || !w.length) && typeof b == "function") {
    var P = f && f.length, S = b({ yAxis: p ? jt(jt({}, p), {}, { ticks: P ? f : p.ticks }) : void 0, width: t ?? u, height: r ?? c, offset: n }, P ? true : h);
    Fs(Array.isArray(S), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof S, "]")), Array.isArray(S) && (w = S);
  }
  if ((!x || !x.length) && typeof y == "function") {
    var _ = d && d.length, M = y({ xAxis: m ? jt(jt({}, m), {}, { ticks: _ ? d : m.ticks }) : void 0, width: t ?? u, height: r ?? c, offset: n }, _ ? true : h);
    Fs(Array.isArray(M), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof M, "]")), Array.isArray(M) && (x = M);
  }
  return g.createElement(De, { zIndex: i.zIndex }, g.createElement("g", { className: "recharts-cartesian-grid" }, g.createElement(aL, { fill: i.fill, fillOpacity: i.fillOpacity, x: i.x, y: i.y, width: i.width, height: i.height, ry: i.ry }), g.createElement(uL, Ar({}, i, { horizontalPoints: w })), g.createElement(cL, Ar({}, i, { verticalPoints: x })), g.createElement(oL, Ar({}, i, { offset: n, horizontalPoints: w, xAxis: m, yAxis: p })), g.createElement(lL, Ar({}, i, { offset: n, verticalPoints: x, xAxis: m, yAxis: p }))));
}
vL.displayName = "CartesianGrid";
var pL = {}, Ax = Dt({ name: "errorBars", initialState: pL, reducers: { addErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] || (e3[r] = []), e3[r].push(n);
}, replaceErrorBar: (e3, t) => {
  var { itemId: r, prev: n, next: i } = t.payload;
  e3[r] && (e3[r] = e3[r].map((s) => s.dataKey === n.dataKey && s.direction === n.direction ? i : s));
}, removeErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] && (e3[r] = e3[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
} } }), { addErrorBar: HF, replaceErrorBar: GF, removeErrorBar: XF } = Ax.actions, mL = Ax.reducer, gL = ["children"];
function yL(e3, t) {
  if (e3 == null) return {};
  var r, n, i = bL(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function bL(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var wL = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 }, xL = g.createContext(wL);
function PL(e3) {
  var { children: t } = e3, r = yL(e3, gL);
  return g.createElement(xL.Provider, { value: r }, t);
}
function Wh(e3, t) {
  var r, n, i = z((u) => Ze(u, e3)), s = z((u) => Qe(u, t)), a = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : vt.allowDataOverflow, o = (n = s == null ? void 0 : s.allowDataOverflow) !== null && n !== void 0 ? n : pt.allowDataOverflow, l = a || o;
  return { needClip: l, needClipX: a, needClipY: o };
}
function Cx(e3) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e3, i = po(), { needClipX: s, needClipY: a, needClip: o } = Wh(t, r);
  if (!o || !i) return null;
  var { x: l, y: u, width: c, height: h } = i;
  return g.createElement("clipPath", { id: "clipPath-".concat(n) }, g.createElement("rect", { x: s ? l : l - c / 2, y: a ? u : u - h / 2, width: s ? c : c * 2, height: a ? h : h * 2 }));
}
var kx = (e3, t, r, n) => vo(e3, "xAxis", t, n), Ix = (e3, t, r, n) => fo(e3, "xAxis", t, n), jx = (e3, t, r, n) => vo(e3, "yAxis", r, n), Tx = (e3, t, r, n) => fo(e3, "yAxis", r, n), SL = O([rt, kx, jx, Ix, Tx], (e3, t, r, n, i) => be(e3, "xAxis") ? wn(t, n, false) : wn(r, i, false)), _L = (e3, t, r, n, i) => i;
function OL(e3) {
  return e3.type === "line";
}
var ML = O([wh, _L], (e3, t) => e3.filter(OL).find((r) => r.id === t)), EL = O([rt, kx, jx, Ix, Tx, ML, SL, Ri], (e3, t, r, n, i, s, a, o) => {
  var { chartData: l, dataStartIndex: u, dataEndIndex: c } = o;
  if (!(s == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || a == null || e3 !== "horizontal" && e3 !== "vertical")) {
    var { dataKey: h, data: f } = s, d;
    if (f != null && f.length > 0 ? d = f : d = l == null ? void 0 : l.slice(u, c + 1), d != null) return YL({ layout: e3, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataKey: h, bandSize: a, displayedData: d });
  }
});
function Nx(e3) {
  var t = _a(e3), r = 3, n = 2;
  if (t != null) {
    var { r: i, strokeWidth: s } = t, a = Number(i), o = Number(s);
    return (Number.isNaN(a) || a < 0) && (a = r), (Number.isNaN(o) || o < 0) && (o = n), { r: a, strokeWidth: o };
  }
  return { r, strokeWidth: n };
}
var AL = ["id"], CL = ["type", "layout", "connectNulls", "needClip", "shape"], kL = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function _i() {
  return _i = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, _i.apply(null, arguments);
}
function km(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oe(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? km(Object(r), true).forEach(function(n) {
      IL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : km(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function IL(e3, t, r) {
  return (t = jL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function jL(e3) {
  var t = TL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function qh(e3, t) {
  if (e3 == null) return {};
  var r, n, i = NL(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function NL(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var DL = (e3) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: s } = e3;
  return [{ inactive: s, dataKey: t, type: i, color: n, value: za(r, t), payload: e3 }];
}, LL = g.memo((e3) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: s, name: a, hide: o, unit: l, tooltipType: u, id: c } = e3, h = { dataDefinedOnItem: r, getPosition: Vr, settings: { stroke: n, strokeWidth: i, fill: s, dataKey: t, nameKey: void 0, name: za(a, t), hide: o, type: u, color: n, unit: l, graphicalItemId: c } };
  return g.createElement(px, { tooltipEntrySettings: h });
}), Dx = (e3, t) => "".concat(t, "px ").concat(e3, "px");
function RL(e3, t) {
  for (var r = e3.length % 2 !== 0 ? [...e3, 0] : e3, n = [], i = 0; i < t; ++i) n.push(...r);
  return n;
}
var $L = (e3, t, r) => {
  var n = r.reduce((f, d) => f + d, 0);
  if (!n) return Dx(t, e3);
  for (var i = Math.floor(e3 / n), s = e3 % n, a = [], o = 0, l = 0; o < r.length; l += (u = r[o]) !== null && u !== void 0 ? u : 0, ++o) {
    var u, c = r[o];
    if (c != null && l + c > s) {
      a = [...r.slice(0, o), s - l];
      break;
    }
  }
  var h = a.length % 2 === 0 ? [0, t] : [t];
  return [...RL(r, i), ...a, ...h].map((f) => "".concat(f, "px")).join(", ");
};
function zL(e3) {
  var { clipPathId: t, points: r, props: n } = e3, { dot: i, dataKey: s, needClip: a } = n, { id: o } = n, l = qh(n, AL), u = ce(l);
  return g.createElement(wx, { points: r, dot: i, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: s, baseProps: u, needClip: a, clipPathId: t });
}
function BL(e3) {
  var { showLabels: t, children: r, points: n } = e3, i = g.useMemo(() => n == null ? void 0 : n.map((s) => {
    var a, o, l = { x: (a = s.x) !== null && a !== void 0 ? a : 0, y: (o = s.y) !== null && o !== void 0 ? o : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return Oe(Oe({}, l), {}, { value: s.value, payload: s.payload, viewBox: l, parentViewBox: void 0, fill: void 0 });
  }), [n]);
  return g.createElement(cx, { value: t ? i : void 0 }, r);
}
function Im(e3) {
  var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: s } = e3, { type: a, layout: o, connectNulls: l, needClip: u, shape: c } = s, h = qh(s, CL), f = Oe(Oe({}, Nt(h)), {}, { fill: "none", className: "recharts-line-curve", clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0, points: n, type: a, layout: o, connectNulls: l, strokeDasharray: i ?? s.strokeDasharray });
  return g.createElement(g.Fragment, null, (n == null ? void 0 : n.length) > 1 && g.createElement(ID, _i({ shapeType: "curve", option: c }, f, { pathRef: r })), g.createElement(zL, { points: n, clipPathId: t, props: s }));
}
function FL(e3) {
  try {
    return e3 && e3.getTotalLength && e3.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function WL(e3) {
  var { clipPathId: t, props: r, pathRef: n, previousPointsRef: i, longestAnimatedLengthRef: s } = e3, { points: a, strokeDasharray: o, isAnimationActive: l, animationBegin: u, animationDuration: c, animationEasing: h, animateNewValues: f, width: d, height: v, onAnimationEnd: m, onAnimationStart: p } = r, y = i.current, b = Ga(a, "recharts-line-"), w = g.useRef(b), [x, P] = g.useState(false), S = !x, _ = g.useCallback(() => {
    typeof m == "function" && m(), P(false);
  }, [m]), M = g.useCallback(() => {
    typeof p == "function" && p(), P(true);
  }, [p]), A = FL(n.current), j = g.useRef(0);
  w.current !== b && (j.current = s.current, w.current = b);
  var k = j.current;
  return g.createElement(BL, { points: a, showLabels: S }, r.children, g.createElement(Ha, { animationId: b, begin: u, duration: c, isActive: l, easing: h, onAnimationEnd: _, onAnimationStart: M, key: b }, (E) => {
    var $ = ct(k, A + k, E), R = Math.min($, A), B;
    if (l) if (o) {
      var H = "".concat(o).split(/[,\s]+/gim).map((F) => parseFloat(F));
      B = $L(R, A, H);
    } else B = Dx(A, R);
    else B = o == null ? void 0 : String(o);
    if (E > 0 && A > 0 && (i.current = a, s.current = Math.max(s.current, R)), y) {
      var W = y.length / a.length, G = E === 1 ? a : a.map((F, U) => {
        var Rt = Math.floor(U * W);
        if (y[Rt]) {
          var at = y[Rt];
          return Oe(Oe({}, F), {}, { x: ct(at.x, F.x, E), y: ct(at.y, F.y, E) });
        }
        return f ? Oe(Oe({}, F), {}, { x: ct(d * 2, F.x, E), y: ct(v / 2, F.y, E) }) : Oe(Oe({}, F), {}, { x: F.x, y: F.y });
      });
      return i.current = G, g.createElement(Im, { props: r, points: G, clipPathId: t, pathRef: n, strokeDasharray: B });
    }
    return g.createElement(Im, { props: r, points: a, clipPathId: t, pathRef: n, strokeDasharray: B });
  }), g.createElement(fx, { label: r.label }));
}
function qL(e3) {
  var { clipPathId: t, props: r } = e3, n = g.useRef(null), i = g.useRef(0), s = g.useRef(null);
  return g.createElement(WL, { props: r, clipPathId: t, previousPointsRef: n, longestAnimatedLengthRef: i, pathRef: s });
}
var KL = (e3, t) => {
  var r, n;
  return { x: (r = e3.x) !== null && r !== void 0 ? r : void 0, y: (n = e3.y) !== null && n !== void 0 ? n : void 0, value: e3.value, errorVal: ht(e3.payload, t) };
};
class UL extends g.Component {
  render() {
    var { hide: t, dot: r, points: n, className: i, xAxisId: s, yAxisId: a, top: o, left: l, width: u, height: c, id: h, needClip: f, zIndex: d } = this.props;
    if (t) return null;
    var v = J("recharts-line", i), m = h, { r: p, strokeWidth: y } = Nx(r), b = zh(r), w = p * 2 + y, x = f ? "url(#clipPath-".concat(b ? "" : "dots-").concat(m, ")") : void 0;
    return g.createElement(De, { zIndex: d }, g.createElement(ee, { className: v }, f && g.createElement("defs", null, g.createElement(Cx, { clipPathId: m, xAxisId: s, yAxisId: a }), !b && g.createElement("clipPath", { id: "clipPath-dots-".concat(m) }, g.createElement("rect", { x: l - w / 2, y: o - w / 2, width: u + w, height: c + w }))), g.createElement(PL, { xAxisId: s, yAxisId: a, data: n, dataPointFormatter: KL, errorBarOffset: 0 }, g.createElement(qL, { props: this.props, clipPathId: m }))), g.createElement(ic, { activeDot: this.props.activeDot, points: n, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: x }));
  }
}
var Lx = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: Tt.line, type: "linear" };
function VL(e3) {
  var t = Ft(e3, Lx), { activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: s, animationEasing: a, connectNulls: o, dot: l, hide: u, isAnimationActive: c, label: h, legendType: f, xAxisId: d, yAxisId: v, id: m } = t, p = qh(t, kL), { needClip: y } = Wh(d, v), b = po(), w = Yr(), x = Lt(), P = z((j) => EL(j, d, v, x, m));
  if (w !== "horizontal" && w !== "vertical" || P == null || b == null) return null;
  var { height: S, width: _, x: M, y: A } = b;
  return g.createElement(UL, _i({}, p, { id: m, connectNulls: o, dot: l, activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: s, animationEasing: a, isAnimationActive: c, hide: u, label: h, legendType: f, xAxisId: d, yAxisId: v, points: P, layout: w, height: S, width: _, left: M, top: A, needClip: y }));
}
function YL(e3) {
  var { layout: t, xAxis: r, yAxis: n, xAxisTicks: i, yAxisTicks: s, dataKey: a, bandSize: o, displayedData: l } = e3;
  return l.map((u, c) => {
    var h = ht(u, a);
    if (t === "horizontal") {
      var f = Bs({ axis: r, ticks: i, bandSize: o, entry: u, index: c }), d = gt(h) ? null : n.scale.map(h);
      return { x: f, y: d ?? null, value: h, payload: u };
    }
    var v = gt(h) ? null : r.scale.map(h), m = Bs({ axis: n, ticks: s, bandSize: o, entry: u, index: c });
    return v == null || m == null ? null : { x: v, y: m, value: h, payload: u };
  }).filter(Boolean);
}
function HL(e3) {
  var t = Ft(e3, Lx), r = Lt();
  return g.createElement(gx, { id: t.id, type: "line" }, (n) => g.createElement(g.Fragment, null, g.createElement(mx, { legendPayload: DL(t) }), g.createElement(LL, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), g.createElement(bx, { type: "line", id: n, data: t.data, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, dataKey: t.dataKey, hide: t.hide, isPanorama: r }), g.createElement(VL, _i({}, t, { id: n }))));
}
var GL = g.memo(HL, Di);
GL.displayName = "Line";
function Kh(e3, t) {
  var r, n;
  return (r = (n = e3.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : xx;
}
function Uh(e3, t) {
  var r, n;
  return (r = (n = e3.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : xx;
}
var Rx = (e3, t, r) => vo(e3, "xAxis", Kh(e3, t), r), $x = (e3, t, r) => fo(e3, "xAxis", Kh(e3, t), r), zx = (e3, t, r) => vo(e3, "yAxis", Uh(e3, t), r), Bx = (e3, t, r) => fo(e3, "yAxis", Uh(e3, t), r), XL = O([rt, Rx, zx, $x, Bx], (e3, t, r, n, i) => be(e3, "xAxis") ? wn(t, n, false) : wn(r, i, false)), JL = (e3, t) => t, Fx = O([wh, JL], (e3, t) => e3.filter((r) => r.type === "area").find((r) => r.id === t)), Wx = (e3) => {
  var t = rt(e3), r = be(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, ZL = (e3, t) => {
  var r = Wx(e3);
  return r === "yAxis" ? Uh(e3, t) : Kh(e3, t);
}, QL = (e3, t, r) => tw(e3, Wx(e3), ZL(e3, t), r), tR = O([Fx, QL], (e3, t) => {
  var r;
  if (!(e3 == null || t == null)) {
    var { stackId: n } = e3, i = Vc(e3);
    if (!(n == null || i == null)) {
      var s = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = s == null ? void 0 : s.find((o) => o.key === i);
      if (a != null) return a.map((o) => [o[0], o[1]]);
    }
  }
}), eR = O([rt, Rx, zx, $x, Bx, tR, qE, XL, Fx, ZE], (e3, t, r, n, i, s, a, o, l, u) => {
  var { chartData: c, dataStartIndex: h, dataEndIndex: f } = a;
  if (!(l == null || e3 !== "horizontal" && e3 !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null)) {
    var { data: d } = l, v;
    if (d && d.length > 0 ? v = d : v = c == null ? void 0 : c.slice(h, f + 1), v != null) return xR({ layout: e3, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataStartIndex: h, areaSettings: l, stackedData: s, displayedData: v, chartBaseValue: u, bandSize: o });
  }
}), rR = ["id"], nR = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, jr.apply(null, arguments);
}
function qx(e3, t) {
  if (e3 == null) return {};
  var r, n, i = iR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function iR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function jm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jm(Object(r), true).forEach(function(n) {
      sR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function sR(e3, t, r) {
  return (t = aR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function aR(e3) {
  var t = oR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function ga(e3, t) {
  return e3 && e3 !== "none" ? e3 : t;
}
var lR = (e3) => {
  var { dataKey: t, name: r, stroke: n, fill: i, legendType: s, hide: a } = e3;
  return [{ inactive: a, dataKey: t, type: s, color: ga(n, i), value: za(r, t), payload: e3 }];
}, uR = g.memo((e3) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: s, name: a, hide: o, unit: l, tooltipType: u, id: c } = e3, h = { dataDefinedOnItem: r, getPosition: Vr, settings: { stroke: n, strokeWidth: i, fill: s, dataKey: t, nameKey: void 0, name: za(a, t), hide: o, type: u, color: ga(n, s), unit: l, graphicalItemId: c } };
  return g.createElement(px, { tooltipEntrySettings: h });
});
function cR(e3) {
  var { clipPathId: t, points: r, props: n } = e3, { needClip: i, dot: s, dataKey: a } = n, o = ce(n);
  return g.createElement(wx, { points: r, dot: s, className: "recharts-area-dots", dotClassName: "recharts-area-dot", dataKey: a, baseProps: o, needClip: i, clipPathId: t });
}
function hR(e3) {
  var { showLabels: t, children: r, points: n } = e3, i = n.map((s) => {
    var a, o, l = { x: (a = s.x) !== null && a !== void 0 ? a : 0, y: (o = s.y) !== null && o !== void 0 ? o : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return cn(cn({}, l), {}, { value: s.value, payload: s.payload, parentViewBox: void 0, viewBox: l, fill: void 0 });
  });
  return g.createElement(cx, { value: t ? i : void 0 }, r);
}
function Tm(e3) {
  var { points: t, baseLine: r, needClip: n, clipPathId: i, props: s } = e3, { layout: a, type: o, stroke: l, connectNulls: u, isRange: c } = s, { id: h } = s, f = qx(s, rR), d = ce(f), v = Nt(f);
  return g.createElement(g.Fragment, null, (t == null ? void 0 : t.length) > 1 && g.createElement(ee, { clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0 }, g.createElement(ri, jr({}, v, { id: h, points: t, connectNulls: u, type: o, baseLine: r, layout: a, stroke: "none", className: "recharts-area-area" })), l !== "none" && g.createElement(ri, jr({}, d, { className: "recharts-area-curve", layout: a, type: o, connectNulls: u, fill: "none", points: t })), l !== "none" && c && Array.isArray(r) && g.createElement(ri, jr({}, d, { className: "recharts-area-curve", layout: a, type: o, connectNulls: u, fill: "none", points: r }))), g.createElement(cR, { points: t, props: f, clipPathId: i }));
}
function fR(e3) {
  var t, r, { alpha: n, baseLine: i, points: s, strokeWidth: a } = e3, o = (t = s[0]) === null || t === void 0 ? void 0 : t.y, l = (r = s[s.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!q(o) || !q(l)) return null;
  var u = n * Math.abs(o - l), c = Math.max(...s.map((h) => h.x || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((h) => h.x || 0), c)), L(c) ? g.createElement("rect", { x: 0, y: o < l ? o : o - u, width: c + (a ? parseInt("".concat(a), 10) : 1), height: Math.floor(u) }) : null;
}
function dR(e3) {
  var t, r, { alpha: n, baseLine: i, points: s, strokeWidth: a } = e3, o = (t = s[0]) === null || t === void 0 ? void 0 : t.x, l = (r = s[s.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!q(o) || !q(l)) return null;
  var u = n * Math.abs(o - l), c = Math.max(...s.map((h) => h.y || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((h) => h.y || 0), c)), L(c) ? g.createElement("rect", { x: o < l ? o : o - u, y: 0, width: u, height: Math.floor(c + (a ? parseInt("".concat(a), 10) : 1)) }) : null;
}
function vR(e3) {
  var { alpha: t, layout: r, points: n, baseLine: i, strokeWidth: s } = e3;
  return r === "vertical" ? g.createElement(fR, { alpha: t, points: n, baseLine: i, strokeWidth: s }) : g.createElement(dR, { alpha: t, points: n, baseLine: i, strokeWidth: s });
}
function pR(e3) {
  var { needClip: t, clipPathId: r, props: n, previousPointsRef: i, previousBaselineRef: s } = e3, { points: a, baseLine: o, isAnimationActive: l, animationBegin: u, animationDuration: c, animationEasing: h, onAnimationStart: f, onAnimationEnd: d } = n, v = g.useMemo(() => ({ points: a, baseLine: o }), [a, o]), m = Ga(v, "recharts-area-"), p = Tc(), [y, b] = g.useState(false), w = !y, x = g.useCallback(() => {
    typeof d == "function" && d(), b(false);
  }, [d]), P = g.useCallback(() => {
    typeof f == "function" && f(), b(true);
  }, [f]);
  if (p == null) return null;
  var S = i.current, _ = s.current;
  return g.createElement(hR, { showLabels: w, points: a }, n.children, g.createElement(Ha, { animationId: m, begin: u, duration: c, isActive: l, easing: h, onAnimationEnd: x, onAnimationStart: P, key: m }, (M) => {
    if (S) {
      var A = S.length / a.length, j = M === 1 ? a : a.map((E, $) => {
        var R = Math.floor($ * A);
        if (S[R]) {
          var B = S[R];
          return cn(cn({}, E), {}, { x: ct(B.x, E.x, M), y: ct(B.y, E.y, M) });
        }
        return E;
      }), k;
      return L(o) ? k = ct(_, o, M) : gt(o) || ke(o) ? k = ct(_, 0, M) : k = o.map((E, $) => {
        var R = Math.floor($ * A);
        if (Array.isArray(_) && _[R]) {
          var B = _[R];
          return cn(cn({}, E), {}, { x: ct(B.x, E.x, M), y: ct(B.y, E.y, M) });
        }
        return E;
      }), M > 0 && (i.current = j, s.current = k), g.createElement(Tm, { points: j, baseLine: k, needClip: t, clipPathId: r, props: n });
    }
    return M > 0 && (i.current = a, s.current = o), g.createElement(ee, null, l && g.createElement("defs", null, g.createElement("clipPath", { id: "animationClipPath-".concat(r) }, g.createElement(vR, { alpha: M, points: a, baseLine: o, layout: p, strokeWidth: n.strokeWidth }))), g.createElement(ee, { clipPath: "url(#animationClipPath-".concat(r, ")") }, g.createElement(Tm, { points: a, baseLine: o, needClip: t, clipPathId: r, props: n })));
  }), g.createElement(fx, { label: n.label }));
}
function mR(e3) {
  var { needClip: t, clipPathId: r, props: n } = e3, i = g.useRef(null), s = g.useRef();
  return g.createElement(pR, { needClip: t, clipPathId: r, props: n, previousPointsRef: i, previousBaselineRef: s });
}
class gR extends g.PureComponent {
  render() {
    var { hide: t, dot: r, points: n, className: i, top: s, left: a, needClip: o, xAxisId: l, yAxisId: u, width: c, height: h, id: f, baseLine: d, zIndex: v } = this.props;
    if (t) return null;
    var m = J("recharts-area", i), p = f, { r: y, strokeWidth: b } = Nx(r), w = zh(r), x = y * 2 + b, P = o ? "url(#clipPath-".concat(w ? "" : "dots-").concat(p, ")") : void 0;
    return g.createElement(De, { zIndex: v }, g.createElement(ee, { className: m }, o && g.createElement("defs", null, g.createElement(Cx, { clipPathId: p, xAxisId: l, yAxisId: u }), !w && g.createElement("clipPath", { id: "clipPath-dots-".concat(p) }, g.createElement("rect", { x: a - x / 2, y: s - x / 2, width: c + x, height: h + x }))), g.createElement(mR, { needClip: o, clipPathId: p, props: this.props })), g.createElement(ic, { points: n, mainColor: ga(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P }), this.props.isRange && Array.isArray(d) && g.createElement(ic, { points: d, mainColor: ga(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P }));
  }
}
var yR = { activeDot: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: false, fill: "#3182bd", fillOpacity: 0.6, hide: false, isAnimationActive: "auto", legendType: "line", stroke: "#3182bd", strokeWidth: 1, type: "linear", label: false, xAxisId: 0, yAxisId: 0, zIndex: Tt.area };
function bR(e3) {
  var t, { activeDot: r, animationBegin: n, animationDuration: i, animationEasing: s, connectNulls: a, dot: o, fill: l, fillOpacity: u, hide: c, isAnimationActive: h, legendType: f, stroke: d, xAxisId: v, yAxisId: m } = e3, p = qx(e3, nR), y = Yr(), b = Kw(), { needClip: w } = Wh(v, m), x = Lt(), { points: P, isRange: S, baseLine: _ } = (t = z(($) => eR($, e3.id, x))) !== null && t !== void 0 ? t : {}, M = po();
  if (y !== "horizontal" && y !== "vertical" || M == null || b !== "AreaChart" && b !== "ComposedChart") return null;
  var { height: A, width: j, x: k, y: E } = M;
  return !P || !P.length ? null : g.createElement(gR, jr({}, p, { activeDot: r, animationBegin: n, animationDuration: i, animationEasing: s, baseLine: _, connectNulls: a, dot: o, fill: l, fillOpacity: u, height: A, hide: c, layout: y, isAnimationActive: h, isRange: S, legendType: f, needClip: w, points: P, stroke: d, width: j, left: k, top: E, xAxisId: v, yAxisId: m }));
}
var wR = (e3, t, r, n, i) => {
  var s = r ?? t;
  if (L(s)) return s;
  var a = e3 === "horizontal" ? i : n, o = a.scale.domain();
  if (a.type === "number") {
    var l = Math.max(o[0], o[1]), u = Math.min(o[0], o[1]);
    return s === "dataMin" ? u : s === "dataMax" || l < 0 ? l : Math.max(Math.min(o[0], o[1]), 0);
  }
  return s === "dataMin" ? o[0] : s === "dataMax" ? o[1] : o[0];
};
function xR(e3) {
  var { areaSettings: { connectNulls: t, baseValue: r, dataKey: n }, stackedData: i, layout: s, chartBaseValue: a, xAxis: o, yAxis: l, displayedData: u, dataStartIndex: c, xAxisTicks: h, yAxisTicks: f, bandSize: d } = e3, v = i && i.length, m = wR(s, a, r, o, l), p = s === "horizontal", y = false, b = u.map((x, P) => {
    var S, _, M, A;
    if (v) A = i[c + P];
    else {
      var j = ht(x, n);
      Array.isArray(j) ? (A = j, y = true) : A = [m, j];
    }
    var k = (S = (_ = A) === null || _ === void 0 ? void 0 : _[1]) !== null && S !== void 0 ? S : null, E = k == null || v && !t && ht(x, n) == null;
    if (p) {
      var $;
      return { x: Bs({ axis: o, ticks: h, bandSize: d, entry: x, index: P }), y: E ? null : ($ = l.scale.map(k)) !== null && $ !== void 0 ? $ : null, value: A, payload: x };
    }
    return { x: E ? null : (M = o.scale.map(k)) !== null && M !== void 0 ? M : null, y: Bs({ axis: l, ticks: f, bandSize: d, entry: x, index: P }), value: A, payload: x };
  }), w;
  return v || y ? w = b.map((x) => {
    var P, S = Array.isArray(x.value) ? x.value[0] : null;
    if (p) {
      var _;
      return { x: x.x, y: S != null && x.y != null && (_ = l.scale.map(S)) !== null && _ !== void 0 ? _ : null, payload: x.payload };
    }
    return { x: S != null && (P = o.scale.map(S)) !== null && P !== void 0 ? P : null, y: x.y, payload: x.payload };
  }) : w = p ? l.scale.map(m) : o.scale.map(m), { points: b, baseLine: w ?? 0, isRange: y };
}
function PR(e3) {
  var t = Ft(e3, yR), r = Lt();
  return g.createElement(gx, { id: t.id, type: "area" }, (n) => g.createElement(g.Fragment, null, g.createElement(mx, { legendPayload: lR(t) }), g.createElement(uR, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), g.createElement(bx, { type: "area", id: n, data: t.data, dataKey: t.dataKey, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, stackId: J_(t.stackId), hide: t.hide, barSize: void 0, baseValue: t.baseValue, isPanorama: r, connectNulls: t.connectNulls }), g.createElement(bR, jr({}, t, { id: n }))));
}
var SR = g.memo(PR, Di);
SR.displayName = "Area";
var _R = ["domain", "range"], OR = ["domain", "range"];
function Nm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = MR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function MR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Dm(e3, t) {
  return e3 === t ? true : Array.isArray(e3) && e3.length === 2 && Array.isArray(t) && t.length === 2 ? e3[0] === t[0] && e3[1] === t[1] : false;
}
function Kx(e3, t) {
  if (e3 === t) return true;
  var { domain: r, range: n } = e3, i = Nm(e3, _R), { domain: s, range: a } = t, o = Nm(t, OR);
  return !Dm(r, s) || !Dm(n, a) ? false : Di(i, o);
}
var ER = ["type"], AR = ["dangerouslySetInnerHTML", "ticks", "scale"], CR = ["id", "scale"];
function sc() {
  return sc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, sc.apply(null, arguments);
}
function Lm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lm(Object(r), true).forEach(function(n) {
      kR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function kR(e3, t, r) {
  return (t = IR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function IR(e3) {
  var t = jR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function ac(e3, t) {
  if (e3 == null) return {};
  var r, n, i = TR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function TR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function NR(e3) {
  var t = dt(), r = g.useRef(null), n = Tc(), { type: i } = e3, s = ac(e3, ER), a = Za(n, "xAxis", i), o = g.useMemo(() => {
    if (a != null) return Rm(Rm({}, s), {}, { type: a });
  }, [s, a]);
  return g.useLayoutEffect(() => {
    o != null && (r.current === null ? t(t2(o)) : r.current !== o && t(e2({ prev: r.current, next: o })), r.current = o);
  }, [o, t]), g.useLayoutEffect(() => () => {
    r.current && (t(r2(r.current)), r.current = null);
  }, [t]), null;
}
var DR = (e3) => {
  var { xAxisId: t, className: r } = e3, n = z(v0), i = Lt(), s = "xAxis", a = z((y) => xw(y, s, t, i)), o = z((y) => AI(y, t)), l = z((y) => NI(y, t)), u = z((y) => Fb(y, t));
  if (o == null || l == null || u == null) return null;
  var { dangerouslySetInnerHTML: c, ticks: h, scale: f } = e3, d = ac(e3, AR), { id: v, scale: m } = u, p = ac(u, CR);
  return g.createElement(Fh, sc({}, d, p, { x: l.x, y: l.y, width: o.width, height: o.height, className: J("recharts-".concat(s, " ").concat(s), r), viewBox: n, ticks: a, axisType: s, axisId: t }));
}, LR = { allowDataOverflow: vt.allowDataOverflow, allowDecimals: vt.allowDecimals, allowDuplicatedCategory: vt.allowDuplicatedCategory, angle: vt.angle, axisLine: Ke.axisLine, height: vt.height, hide: false, includeHidden: vt.includeHidden, interval: vt.interval, label: false, minTickGap: vt.minTickGap, mirror: vt.mirror, orientation: vt.orientation, padding: vt.padding, reversed: vt.reversed, scale: vt.scale, tick: vt.tick, tickCount: vt.tickCount, tickLine: Ke.tickLine, tickSize: Ke.tickSize, type: vt.type, niceTicks: vt.niceTicks, xAxisId: 0 }, RR = (e3) => {
  var t = Ft(e3, LR);
  return g.createElement(g.Fragment, null, g.createElement(NR, { allowDataOverflow: t.allowDataOverflow, allowDecimals: t.allowDecimals, allowDuplicatedCategory: t.allowDuplicatedCategory, angle: t.angle, dataKey: t.dataKey, domain: t.domain, height: t.height, hide: t.hide, id: t.xAxisId, includeHidden: t.includeHidden, interval: t.interval, minTickGap: t.minTickGap, mirror: t.mirror, name: t.name, orientation: t.orientation, padding: t.padding, reversed: t.reversed, scale: t.scale, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, niceTicks: t.niceTicks }), g.createElement(DR, t));
}, $R = g.memo(RR, Kx);
$R.displayName = "XAxis";
var zR = ["type"], BR = ["dangerouslySetInnerHTML", "ticks", "scale"], FR = ["id", "scale"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, oc.apply(null, arguments);
}
function $m(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), true).forEach(function(n) {
      WR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function WR(e3, t, r) {
  return (t = qR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function qR(e3) {
  var t = KR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function lc(e3, t) {
  if (e3 == null) return {};
  var r, n, i = UR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function UR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function VR(e3) {
  var t = dt(), r = g.useRef(null), n = Tc(), { type: i } = e3, s = lc(e3, zR), a = Za(n, "yAxis", i), o = g.useMemo(() => {
    if (a != null) return zm(zm({}, s), {}, { type: a });
  }, [a, s]);
  return g.useLayoutEffect(() => {
    o != null && (r.current === null ? t(n2(o)) : r.current !== o && t(i2({ prev: r.current, next: o })), r.current = o);
  }, [o, t]), g.useLayoutEffect(() => () => {
    r.current && (t(s2(r.current)), r.current = null);
  }, [t]), null;
}
function YR(e3) {
  var { yAxisId: t, className: r, width: n, label: i } = e3, s = g.useRef(null), a = g.useRef(null), o = z(v0), l = Lt(), u = dt(), c = "yAxis", h = z((S) => RI(S, t)), f = z((S) => LI(S, t)), d = z((S) => xw(S, c, t, l)), v = z((S) => Wb(S, t));
  if (g.useLayoutEffect(() => {
    if (!(n !== "auto" || !h || $h(i) || g.isValidElement(i) || v == null)) {
      var S = s.current;
      if (S) {
        var _ = S.getCalculatedWidth();
        Math.round(h.width) !== Math.round(_) && u(a2({ id: t, width: _ }));
      }
    }
  }, [d, h, u, i, t, n, v]), h == null || f == null || v == null) return null;
  var { dangerouslySetInnerHTML: m, ticks: p, scale: y } = e3, b = lc(e3, BR), { id: w, scale: x } = v, P = lc(v, FR);
  return g.createElement(Fh, oc({}, b, P, { ref: s, labelRef: a, x: f.x, y: f.y, tickTextProps: n === "auto" ? { width: void 0 } : { width: n }, width: h.width, height: h.height, className: J("recharts-".concat(c, " ").concat(c), r), viewBox: o, ticks: d, axisType: c, axisId: t }));
}
var HR = { allowDataOverflow: pt.allowDataOverflow, allowDecimals: pt.allowDecimals, allowDuplicatedCategory: pt.allowDuplicatedCategory, angle: pt.angle, axisLine: Ke.axisLine, hide: false, includeHidden: pt.includeHidden, interval: pt.interval, label: false, minTickGap: pt.minTickGap, mirror: pt.mirror, orientation: pt.orientation, padding: pt.padding, reversed: pt.reversed, scale: pt.scale, tick: pt.tick, tickCount: pt.tickCount, tickLine: Ke.tickLine, tickSize: Ke.tickSize, type: pt.type, niceTicks: pt.niceTicks, width: pt.width, yAxisId: 0 }, GR = (e3) => {
  var t = Ft(e3, HR);
  return g.createElement(g.Fragment, null, g.createElement(VR, { interval: t.interval, id: t.yAxisId, scale: t.scale, type: t.type, domain: t.domain, allowDataOverflow: t.allowDataOverflow, dataKey: t.dataKey, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDecimals: t.allowDecimals, tickCount: t.tickCount, padding: t.padding, includeHidden: t.includeHidden, reversed: t.reversed, ticks: t.ticks, width: t.width, orientation: t.orientation, mirror: t.mirror, hide: t.hide, unit: t.unit, name: t.name, angle: t.angle, minTickGap: t.minTickGap, tick: t.tick, tickFormatter: t.tickFormatter, niceTicks: t.niceTicks }), g.createElement(YR, t));
}, XR = g.memo(GR, Kx);
XR.displayName = "YAxis";
var JR = (e3, t) => t, Vh = O([JR, rt, nb, Pt, $w, tr, sT, Ct], fT);
function ZR(e3) {
  return "getBBox" in e3.currentTarget && typeof e3.currentTarget.getBBox == "function";
}
function Yh(e3) {
  var t = e3.currentTarget.getBoundingClientRect(), r, n;
  if (ZR(e3)) {
    var i = e3.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var s = e3.currentTarget;
    r = s.offsetWidth > 0 ? t.width / s.offsetWidth : 1, n = s.offsetHeight > 0 ? t.height / s.offsetHeight : 1;
  }
  var a = (o, l) => ({ relativeX: Math.round((o - t.left) / r), relativeY: Math.round((l - t.top) / n) });
  return "touches" in e3 ? Array.from(e3.touches).map((o) => a(o.clientX, o.clientY)) : a(e3.clientX, e3.clientY);
}
var Ux = re("mouseClick"), Vx = Ii();
Vx.startListening({ actionCreator: Ux, effect: (e3, t) => {
  var r = e3.payload, n = Vh(t.getState(), Yh(r));
  (n == null ? void 0 : n.activeIndex) != null && t.dispatch(ZI({ activeIndex: n.activeIndex, activeDataKey: void 0, activeCoordinate: n.activeCoordinate }));
} });
var uc = re("mouseMove"), Yx = Ii(), rn = null, yr = null, Zl = null;
Yx.startListening({ actionCreator: uc, effect: (e3, t) => {
  var r = e3.payload, n = t.getState(), { throttleDelay: i, throttledEvents: s } = n.eventSettings, a = s === "all" || (s == null ? void 0 : s.includes("mousemove"));
  rn !== null && (cancelAnimationFrame(rn), rn = null), yr !== null && (typeof i != "number" || !a) && (clearTimeout(yr), yr = null), Zl = Yh(r);
  var o = () => {
    var l = t.getState(), u = Ui(l, l.tooltip.settings.shared);
    if (!Zl) {
      rn = null, yr = null;
      return;
    }
    if (u === "axis") {
      var c = Vh(l, Zl);
      (c == null ? void 0 : c.activeIndex) != null ? t.dispatch(Aw({ activeIndex: c.activeIndex, activeDataKey: void 0, activeCoordinate: c.activeCoordinate })) : t.dispatch(Ew());
    }
    rn = null, yr = null;
  };
  if (!a) {
    o();
    return;
  }
  i === "raf" ? rn = requestAnimationFrame(o) : typeof i == "number" && yr === null && (yr = setTimeout(o, i));
} });
function QR(e3, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e3 === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Bm = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false }, Hx = Dt({ name: "rootProps", initialState: Bm, reducers: { updateOptions: (e3, t) => {
  var r;
  e3.accessibilityLayer = t.payload.accessibilityLayer, e3.barCategoryGap = t.payload.barCategoryGap, e3.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Bm.barGap, e3.barSize = t.payload.barSize, e3.maxBarSize = t.payload.maxBarSize, e3.stackOffset = t.payload.stackOffset, e3.syncId = t.payload.syncId, e3.syncMethod = t.payload.syncMethod, e3.className = t.payload.className, e3.baseValue = t.payload.baseValue, e3.reverseStackOrder = t.payload.reverseStackOrder;
} } }), t$ = Hx.reducer, { updateOptions: e$ } = Hx.actions, r$ = null, n$ = { updatePolarOptions: (e3, t) => e3 === null ? t.payload : (e3.startAngle = t.payload.startAngle, e3.endAngle = t.payload.endAngle, e3.cx = t.payload.cx, e3.cy = t.payload.cy, e3.innerRadius = t.payload.innerRadius, e3.outerRadius = t.payload.outerRadius, e3) }, Gx = Dt({ name: "polarOptions", initialState: r$, reducers: n$ }), { updatePolarOptions: JF } = Gx.actions, i$ = Gx.reducer, Xx = re("keyDown"), Jx = re("focus"), Zx = re("blur"), mo = Ii(), nn = null, br = null, ls = null;
mo.startListening({ actionCreator: Xx, effect: (e3, t) => {
  ls = e3.payload, nn !== null && (cancelAnimationFrame(nn), nn = null);
  var r = t.getState(), { throttleDelay: n, throttledEvents: i } = r.eventSettings, s = i === "all" || i.includes("keydown");
  br !== null && (typeof n != "number" || !s) && (clearTimeout(br), br = null);
  var a = () => {
    try {
      var o = t.getState(), l = o.rootProps.accessibilityLayer !== false;
      if (!l) return;
      var { keyboardInteraction: u } = o.tooltip, c = ls;
      if (c !== "ArrowRight" && c !== "ArrowLeft" && c !== "Enter") return;
      var h = ni(u, Br(o), On(o), Mn(o)), f = h == null ? -1 : Number(h), d = !Number.isFinite(f) || f < 0, v = tr(o), m = Br(o), p = Ui(o, o.tooltip.settings.shared);
      if (c === "Enter") {
        if (d) return;
        var y = ha(o, p, "hover", String(u.index));
        t.dispatch(ca({ active: !u.active, activeIndex: u.index, activeCoordinate: y }));
        return;
      }
      var b = WI(o), w = b === "left-to-right" ? 1 : -1, x = c === "ArrowRight" ? 1 : -1, P;
      if (d) {
        var S = On(o), _ = Mn(o), M = x * w, A = (R) => ({ active: false, index: String(R), dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 });
        if (P = -1, M > 0) {
          for (var j = 0; j < m.length; j++) if (ni(A(j), m, S, _) != null) {
            P = j;
            break;
          }
        } else for (var k = m.length - 1; k >= 0; k--) if (ni(A(k), m, S, _) != null) {
          P = k;
          break;
        }
        if (P < 0) return;
      } else {
        P = f + x * w;
        var E = (v == null ? void 0 : v.length) || m.length;
        if (E === 0 || P >= E || P < 0) return;
      }
      var $ = ha(o, p, "hover", String(P));
      t.dispatch(ca({ active: true, activeIndex: P.toString(), activeCoordinate: $ }));
    } finally {
      nn = null, br = null;
    }
  };
  if (!s) {
    a();
    return;
  }
  n === "raf" ? nn = requestAnimationFrame(a) : typeof n == "number" && br === null && (a(), ls = null, br = setTimeout(() => {
    ls ? a() : (br = null, nn = null);
  }, n));
} });
mo.startListening({ actionCreator: Jx, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    if (!i.active && i.index == null) {
      var s = "0", a = Ui(r, r.tooltip.settings.shared), o = ha(r, a, "hover", String(s));
      t.dispatch(ca({ active: true, activeIndex: s, activeCoordinate: o }));
    }
  }
} });
mo.startListening({ actionCreator: Zx, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    i.active && t.dispatch(ca({ active: false, activeIndex: i.index, activeCoordinate: i.coordinate }));
  }
} });
function Qx(e3) {
  e3.persist();
  var { currentTarget: t } = e3;
  return new Proxy(e3, { get: (r, n) => {
    if (n === "currentTarget") return t;
    var i = Reflect.get(r, n);
    return typeof i == "function" ? i.bind(r) : i;
  } });
}
var ae = re("externalEvent"), t1 = Ii(), us = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new Map();
t1.startListening({ actionCreator: ae, effect: (e3, t) => {
  var { handler: r, reactEvent: n } = e3.payload;
  if (r != null) {
    var i = n.type, s = Qx(n);
    Ql.set(i, { handler: r, reactEvent: s });
    var a = us.get(i);
    a !== void 0 && (cancelAnimationFrame(a), us.delete(i));
    var o = t.getState(), { throttleDelay: l, throttledEvents: u } = o.eventSettings, c = u, h = c === "all" || (c == null ? void 0 : c.includes(i)), f = Xn.get(i);
    f !== void 0 && (typeof l != "number" || !h) && (clearTimeout(f), Xn.delete(i));
    var d = () => {
      var p = Ql.get(i);
      try {
        if (!p) return;
        var { handler: y, reactEvent: b } = p, w = t.getState(), x = { activeCoordinate: Kj(w), activeDataKey: Fj(w), activeIndex: xi(w), activeLabel: Fw(w), activeTooltipIndex: xi(w), isTooltipActive: Uj(w) };
        y && y(x, b);
      } finally {
        us.delete(i), Xn.delete(i), Ql.delete(i);
      }
    };
    if (!h) {
      d();
      return;
    }
    if (l === "raf") {
      var v = requestAnimationFrame(d);
      us.set(i, v);
    } else if (typeof l == "number") {
      if (!Xn.has(i)) {
        d();
        var m = setTimeout(d, l);
        Xn.set(i, m);
      }
    } else d();
  }
} });
var s$ = O([Rn], (e3) => e3.tooltipItemPayloads), a$ = O([s$, (e3, t) => t, (e3, t, r) => r], (e3, t, r) => {
  if (t != null) {
    var n = e3.find((s) => s.settings.graphicalItemId === r);
    if (n != null) {
      var { getPosition: i } = n;
      if (i != null) return i(t);
    }
  }
}), e1 = re("touchMove"), r1 = Ii(), wr = null, rr = null, Fm = null, Jn = null;
r1.startListening({ actionCreator: e1, effect: (e3, t) => {
  var r = e3.payload;
  if (!(r.touches == null || r.touches.length === 0)) {
    Jn = Qx(r);
    var n = t.getState(), { throttleDelay: i, throttledEvents: s } = n.eventSettings, a = s === "all" || s.includes("touchmove");
    wr !== null && (cancelAnimationFrame(wr), wr = null), rr !== null && (typeof i != "number" || !a) && (clearTimeout(rr), rr = null), Fm = Array.from(r.touches).map((l) => Yh({ clientX: l.clientX, clientY: l.clientY, currentTarget: r.currentTarget }));
    var o = () => {
      if (Jn != null) {
        var l = t.getState(), u = Ui(l, l.tooltip.settings.shared);
        if (u === "axis") {
          var c, h = (c = Fm) === null || c === void 0 ? void 0 : c[0];
          if (h == null) {
            wr = null, rr = null;
            return;
          }
          var f = Vh(l, h);
          (f == null ? void 0 : f.activeIndex) != null && t.dispatch(Aw({ activeIndex: f.activeIndex, activeDataKey: void 0, activeCoordinate: f.activeCoordinate }));
        } else if (u === "item") {
          var d, v = Jn.touches[0];
          if (document.elementFromPoint == null || v == null) return;
          var m = document.elementFromPoint(v.clientX, v.clientY);
          if (!m || !m.getAttribute) return;
          var p = m.getAttribute(iO), y = (d = m.getAttribute(sO)) !== null && d !== void 0 ? d : void 0, b = Xr(l).find((P) => P.id === y);
          if (p == null || b == null || y == null) return;
          var { dataKey: w } = b, x = a$(l, p, y);
          t.dispatch(JI({ activeDataKey: w, activeIndex: p, activeCoordinate: x, activeGraphicalItemId: y }));
        }
        wr = null, rr = null;
      }
    };
    if (!a) {
      o();
      return;
    }
    i === "raf" ? wr = requestAnimationFrame(o) : typeof i == "number" && rr === null && (o(), Jn = null, rr = setTimeout(() => {
      Jn ? o() : (rr = null, wr = null);
    }, i));
  }
} });
var n1 = { throttleDelay: "raf", throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"] }, i1 = Dt({ name: "eventSettings", initialState: n1, reducers: { setEventSettings: (e3, t) => {
  t.payload.throttleDelay != null && (e3.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e3.throttledEvents = t.payload.throttledEvents);
} } }), { setEventSettings: o$ } = i1.actions, l$ = i1.reducer, u$ = Ly({ brush: m2, cartesianAxis: o2, chartData: qT, errorBars: mL, eventSettings: l$, graphicalItems: BD, layout: W_, legend: XO, options: $T, polarAxis: hD, polarOptions: i$, referenceElements: w2, renderedTicks: R2, rootProps: t$, tooltip: QI, zIndex: OT }), c$ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return d_({ reducer: u$, preloadedState: t, middleware: (n) => {
    var i;
    return n({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "") }).concat([Vx.middleware, Yx.middleware, mo.middleware, t1.middleware, r1.middleware]);
  }, enhancers: (n) => {
    var i = n;
    return typeof n == "function" && (i = n()), i.concat(Jy({ type: "raf" }));
  }, devTools: { serialize: { replacer: QR }, name: "recharts-".concat(r) } });
};
function h$(e3) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e3, i = Lt(), s = g.useRef(null);
  if (i) return r;
  s.current == null && (s.current = c$(t, n));
  var a = _c;
  return g.createElement(vM, { context: a, store: s.current }, r);
}
function f$(e3) {
  var { layout: t, margin: r } = e3, n = dt(), i = Lt();
  return g.useEffect(() => {
    i || (n(z_(t)), n($_(r)));
  }, [n, i, t, r]), null;
}
var d$ = g.memo(f$, Di);
function v$(e3) {
  var t = dt();
  return g.useEffect(() => {
    t(e$(e3));
  }, [t, e3]), null;
}
var p$ = (e3) => {
  var t = dt();
  return g.useEffect(() => {
    t(o$(e3));
  }, [t, e3]), null;
}, m$ = g.memo(p$, Di);
function Wm(e3) {
  var { zIndex: t, isPanorama: r } = e3, n = g.useRef(null), i = dt();
  return g.useLayoutEffect(() => (n.current && i(ST({ zIndex: t, element: n.current, isPanorama: r })), () => {
    i(_T({ zIndex: t, isPanorama: r }));
  }), [i, t, r]), g.createElement("g", { tabIndex: -1, ref: n, className: "recharts-zIndex-layer_".concat(t) });
}
function qm(e3) {
  var { children: t, isPanorama: r } = e3, n = z(vT);
  if (!n || n.length === 0) return t;
  var i = n.filter((a) => a < 0), s = n.filter((a) => a > 0);
  return g.createElement(g.Fragment, null, i.map((a) => g.createElement(Wm, { key: a, zIndex: a, isPanorama: r })), t, s.map((a) => g.createElement(Wm, { key: a, zIndex: a, isPanorama: r })));
}
var g$ = ["children"];
function y$(e3, t) {
  if (e3 == null) return {};
  var r, n, i = b$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function b$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function ya() {
  return ya = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, ya.apply(null, arguments);
}
var w$ = { width: "100%", height: "100%", display: "block" }, x$ = g.forwardRef((e3, t) => {
  var r = b0(), n = w0(), i = k0();
  if (!je(r) || !je(n)) return null;
  var { children: s, otherAttributes: a, title: o, desc: l } = e3, u, c;
  return a != null && (typeof a.tabIndex == "number" ? u = a.tabIndex : u = i ? 0 : void 0, typeof a.role == "string" ? c = a.role : c = i ? "application" : void 0), g.createElement(Zg, ya({}, a, { title: o, desc: l, role: c, tabIndex: u, width: r, height: n, style: w$, ref: t }), s);
}), P$ = (e3) => {
  var { children: t } = e3, r = z(qa);
  if (!r) return null;
  var { width: n, height: i, y: s, x: a } = r;
  return g.createElement(Zg, { width: n, height: i, x: a, y: s }, t);
}, Km = g.forwardRef((e3, t) => {
  var { children: r } = e3, n = y$(e3, g$), i = Lt();
  return i ? g.createElement(P$, null, g.createElement(qm, { isPanorama: true }, r)) : g.createElement(x$, ya({ ref: t }, n), g.createElement(qm, { isPanorama: false }, r));
});
function S$() {
  var e3 = dt(), [t, r] = g.useState(null), n = z(nO);
  return g.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), s = i.width / t.offsetWidth;
      q(s) && s !== n && e3(F_(s));
    }
  }, [t, e3, n]), r;
}
function Um(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _$(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), true).forEach(function(n) {
      O$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function O$(e3, t, r) {
  return (t = M$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function M$(e3) {
  var t = E$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, cr.apply(null, arguments);
}
var A$ = () => (ZT(), null);
function ba(e3) {
  if (typeof e3 == "number") return e3;
  if (typeof e3 == "string") {
    var t = parseFloat(e3);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var C$ = g.forwardRef((e3, t) => {
  var r, n, i = g.useRef(null), [s, a] = g.useState({ containerWidth: ba((r = e3.style) === null || r === void 0 ? void 0 : r.width), containerHeight: ba((n = e3.style) === null || n === void 0 ? void 0 : n.height) }), o = g.useCallback((u, c) => {
    a((h) => {
      var f = Math.round(u), d = Math.round(c);
      return h.containerWidth === f && h.containerHeight === d ? h : { containerWidth: f, containerHeight: d };
    });
  }, []), l = g.useCallback((u) => {
    if (typeof t == "function" && t(u), i.current != null && (i.current.disconnect(), i.current = null), u != null && typeof ResizeObserver < "u") {
      var { width: c, height: h } = u.getBoundingClientRect();
      o(c, h);
      var f = (v) => {
        var m = v[0];
        if (m != null) {
          var { width: p, height: y } = m.contentRect;
          o(p, y);
        }
      }, d = new ResizeObserver(f);
      d.observe(u), i.current = d;
    }
  }, [t, o]);
  return g.useEffect(() => () => {
    var u = i.current;
    u == null ? void 0 : u.disconnect();
  }, [o]), g.createElement(g.Fragment, null, g.createElement(Ti, { width: s.containerWidth, height: s.containerHeight }), g.createElement("div", cr({ ref: l }, e3)));
}), k$ = g.forwardRef((e3, t) => {
  var { width: r, height: n } = e3, [i, s] = g.useState({ containerWidth: ba(r), containerHeight: ba(n) }), a = g.useCallback((l, u) => {
    s((c) => {
      var h = Math.round(l), f = Math.round(u);
      return c.containerWidth === h && c.containerHeight === f ? c : { containerWidth: h, containerHeight: f };
    });
  }, []), o = g.useCallback((l) => {
    if (typeof t == "function" && t(l), l != null) {
      var { width: u, height: c } = l.getBoundingClientRect();
      a(u, c);
    }
  }, [t, a]);
  return g.createElement(g.Fragment, null, g.createElement(Ti, { width: i.containerWidth, height: i.containerHeight }), g.createElement("div", cr({ ref: o }, e3)));
}), I$ = g.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return g.createElement(g.Fragment, null, g.createElement(Ti, { width: r, height: n }), g.createElement("div", cr({ ref: t }, e3)));
}), j$ = g.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return typeof r == "string" || typeof n == "string" ? g.createElement(k$, cr({}, e3, { ref: t })) : typeof r == "number" && typeof n == "number" ? g.createElement(I$, cr({}, e3, { width: r, height: n, ref: t })) : g.createElement(g.Fragment, null, g.createElement(Ti, { width: r, height: n }), g.createElement("div", cr({ ref: t }, e3)));
});
function T$(e3) {
  return e3 ? C$ : j$;
}
var N$ = g.forwardRef((e3, t) => {
  var { children: r, className: n, height: i, onClick: s, onContextMenu: a, onDoubleClick: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onMouseMove: h, onMouseUp: f, onTouchEnd: d, onTouchMove: v, onTouchStart: m, style: p, width: y, responsive: b, dispatchTouchEvents: w = true } = e3, x = g.useRef(null), P = dt(), [S, _] = g.useState(null), [M, A] = g.useState(null), j = S$(), k = Ic(), E = (k == null ? void 0 : k.width) > 0 ? k.width : y, $ = (k == null ? void 0 : k.height) > 0 ? k.height : i, R = g.useCallback((T) => {
    j(T), typeof t == "function" && t(T), _(T), A(T), T != null && (x.current = T);
  }, [j, t, _, A]), B = g.useCallback((T) => {
    P(Ux(T)), P(ae({ handler: s, reactEvent: T }));
  }, [P, s]), H = g.useCallback((T) => {
    P(uc(T)), P(ae({ handler: u, reactEvent: T }));
  }, [P, u]), W = g.useCallback((T) => {
    P(Ew()), P(ae({ handler: c, reactEvent: T }));
  }, [P, c]), G = g.useCallback((T) => {
    P(uc(T)), P(ae({ handler: h, reactEvent: T }));
  }, [P, h]), F = g.useCallback(() => {
    P(Jx());
  }, [P]), U = g.useCallback(() => {
    P(Zx());
  }, [P]), Rt = g.useCallback((T) => {
    P(Xx(T.key));
  }, [P]), at = g.useCallback((T) => {
    P(ae({ handler: a, reactEvent: T }));
  }, [P, a]), de = g.useCallback((T) => {
    P(ae({ handler: o, reactEvent: T }));
  }, [P, o]), qt = g.useCallback((T) => {
    P(ae({ handler: l, reactEvent: T }));
  }, [P, l]), Le = g.useCallback((T) => {
    P(ae({ handler: f, reactEvent: T }));
  }, [P, f]), $n = g.useCallback((T) => {
    P(ae({ handler: m, reactEvent: T }));
  }, [P, m]), zn = g.useCallback((T) => {
    w && P(e1(T)), P(ae({ handler: v, reactEvent: T }));
  }, [P, w, v]), Kt = g.useCallback((T) => {
    P(ae({ handler: d, reactEvent: T }));
  }, [P, d]), D = T$(b);
  return g.createElement(Gw.Provider, { value: S }, g.createElement(V1.Provider, { value: M }, g.createElement(D, { width: E ?? (p == null ? void 0 : p.width), height: $ ?? (p == null ? void 0 : p.height), className: J("recharts-wrapper", n), style: _$({ position: "relative", cursor: "default", width: E, height: $ }, p), onClick: B, onContextMenu: at, onDoubleClick: de, onFocus: F, onBlur: U, onKeyDown: Rt, onMouseDown: qt, onMouseEnter: H, onMouseLeave: W, onMouseMove: G, onMouseUp: Le, onTouchEnd: Kt, onTouchMove: zn, onTouchStart: $n, ref: R }, g.createElement(A$, null), r)));
}), D$ = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function L$(e3, t) {
  if (e3 == null) return {};
  var r, n, i = R$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function R$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var $$ = g.forwardRef((e3, t) => {
  var { width: r, height: n, responsive: i, children: s, className: a, style: o, compact: l, title: u, desc: c } = e3, h = L$(e3, D$), f = ce(h);
  return l ? g.createElement(g.Fragment, null, g.createElement(Ti, { width: r, height: n }), g.createElement(Km, { otherAttributes: f, title: u, desc: c }, s)) : g.createElement(N$, { className: a, style: o, width: r, height: n, responsive: i ?? false, onClick: e3.onClick, onMouseLeave: e3.onMouseLeave, onMouseEnter: e3.onMouseEnter, onMouseMove: e3.onMouseMove, onMouseDown: e3.onMouseDown, onMouseUp: e3.onMouseUp, onContextMenu: e3.onContextMenu, onDoubleClick: e3.onDoubleClick, onTouchStart: e3.onTouchStart, onTouchMove: e3.onTouchMove, onTouchEnd: e3.onTouchEnd }, g.createElement(Km, { otherAttributes: f, title: u, desc: c, ref: t }, g.createElement(P2, null, s)));
});
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, cc.apply(null, arguments);
}
function Vm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function z$(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vm(Object(r), true).forEach(function(n) {
      B$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function B$(e3, t, r) {
  return (t = F$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function F$(e3) {
  var t = W$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function W$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var q$ = { top: 5, right: 5, bottom: 5, left: 5 }, K$ = z$({ accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: q$, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, n1), U$ = g.forwardRef(function(t, r) {
  var n, i = Ft(t.categoricalChartProps, K$), { chartName: s, defaultTooltipEventType: a, validateTooltipEventTypes: o, tooltipPayloadSearcher: l, categoricalChartProps: u } = t, c = { chartName: s, defaultTooltipEventType: a, validateTooltipEventTypes: o, tooltipPayloadSearcher: l, eventEmitter: void 0 };
  return g.createElement(h$, { preloadedState: { options: c }, reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : s }, g.createElement(p2, { chartData: u.data }), g.createElement(d$, { layout: i.layout, margin: i.margin }), g.createElement(m$, { throttleDelay: i.throttleDelay, throttledEvents: i.throttledEvents }), g.createElement(v$, { baseValue: i.baseValue, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), g.createElement($$, cc({}, i, { ref: r })));
}), V$ = ["axis"], ZF = g.forwardRef((e3, t) => g.createElement(U$, { chartName: "AreaChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: V$, tooltipPayloadSearcher: LT, categoricalChartProps: e3, ref: t }));
function Z(e3) {
  var t = e3.width, r = e3.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (r < 0) throw new Error("Negative height is not allowed for Size");
  return { width: t, height: r };
}
function Tr(e3, t) {
  return e3.width === t.width && e3.height === t.height;
}
var Y$ = (function() {
  function e3(t) {
    var r = this;
    this._resolutionListener = function() {
      return r._onResolutionChanged();
    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener();
  }
  return e3.prototype.dispose = function() {
    this._uninstallResolutionListener(), this._window = null;
  }, Object.defineProperty(e3.prototype, "value", { get: function() {
    return this._window.devicePixelRatio;
  }, enumerable: false, configurable: true }), e3.prototype.subscribe = function(t) {
    var r = this, n = { next: t };
    return this._observers.push(n), { unsubscribe: function() {
      r._observers = r._observers.filter(function(i) {
        return i !== n;
      });
    } };
  }, e3.prototype._installResolutionListener = function() {
    if (this._resolutionMediaQueryList !== null) throw new Error("Resolution listener is already installed");
    var t = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener);
  }, e3.prototype._uninstallResolutionListener = function() {
    this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null);
  }, e3.prototype._reinstallResolutionListener = function() {
    this._uninstallResolutionListener(), this._installResolutionListener();
  }, e3.prototype._onResolutionChanged = function() {
    var t = this;
    this._observers.forEach(function(r) {
      return r.next(t._window.devicePixelRatio);
    }), this._reinstallResolutionListener();
  }, e3;
})();
function H$(e3) {
  return new Y$(e3);
}
var G$ = (function() {
  function e3(t, r, n) {
    var i;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = Z({ width: this._canvasElement.clientWidth, height: this._canvasElement.clientHeight }), this._transformBitmapSize = r ?? (function(s) {
      return s;
    }), this._allowResizeObserver = (i = n == null ? void 0 : n.allowResizeObserver) !== null && i !== void 0 ? i : true, this._chooseAndInitObserver();
  }
  return e3.prototype.dispose = function() {
    var t, r;
    if (this._canvasElement === null) throw new Error("Object is disposed");
    (t = this._canvasElementResizeObserver) === null || t === void 0 || t.disconnect(), this._canvasElementResizeObserver = null, (r = this._devicePixelRatioObservable) === null || r === void 0 || r.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null;
  }, Object.defineProperty(e3.prototype, "canvasElement", { get: function() {
    if (this._canvasElement === null) throw new Error("Object is disposed");
    return this._canvasElement;
  }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "canvasElementClientSize", { get: function() {
    return this._canvasElementClientSize;
  }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "bitmapSize", { get: function() {
    return Z({ width: this.canvasElement.width, height: this.canvasElement.height });
  }, enumerable: false, configurable: true }), e3.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = Z(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize();
  }, e3.prototype.subscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners.push(t);
  }, e3.prototype.unsubscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(r) {
      return r !== t;
    });
  }, Object.defineProperty(e3.prototype, "suggestedBitmapSize", { get: function() {
    return this._suggestedBitmapSize;
  }, enumerable: false, configurable: true }), e3.prototype.subscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners.push(t);
  }, e3.prototype.unsubscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(r) {
      return r !== t;
    });
  }, e3.prototype.applySuggestedBitmapSize = function() {
    if (this._suggestedBitmapSize !== null) {
      var t = this._suggestedBitmapSize;
      this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize);
    }
  }, e3.prototype._resizeBitmap = function(t) {
    var r = this.bitmapSize;
    Tr(r, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(r, t));
  }, e3.prototype._emitBitmapSizeChanged = function(t, r) {
    var n = this;
    this._bitmapSizeChangedListeners.forEach(function(i) {
      return i.call(n, t, r);
    });
  }, e3.prototype._suggestNewBitmapSize = function(t) {
    var r = this._suggestedBitmapSize, n = Z(this._transformBitmapSize(t, this._canvasElementClientSize)), i = Tr(this.bitmapSize, n) ? null : n;
    r === null && i === null || r !== null && i !== null && Tr(r, i) || (this._suggestedBitmapSize = i, this._emitSuggestedBitmapSizeChanged(r, i));
  }, e3.prototype._emitSuggestedBitmapSizeChanged = function(t, r) {
    var n = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function(i) {
      return i.call(n, t, r);
    });
  }, e3.prototype._chooseAndInitObserver = function() {
    var t = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return;
    }
    J$().then(function(r) {
      return r ? t._initResizeObserver() : t._initDevicePixelRatioObservable();
    });
  }, e3.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var r = Ym(this._canvasElement);
      if (r === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = H$(r), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize();
      }), this._invalidateBitmapSize();
    }
  }, e3.prototype._invalidateBitmapSize = function() {
    var t, r;
    if (this._canvasElement !== null) {
      var n = Ym(this._canvasElement);
      if (n !== null) {
        var i = (r = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && r !== void 0 ? r : n.devicePixelRatio, s = this._canvasElement.getClientRects(), a = s[0] !== void 0 ? Z$(s[0], i) : Z({ width: this._canvasElementClientSize.width * i, height: this._canvasElementClientSize.height * i });
        this._suggestNewBitmapSize(a);
      }
    }
  }, e3.prototype._initResizeObserver = function() {
    var t = this;
    this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(r) {
      var n = r.find(function(a) {
        return a.target === t._canvasElement;
      });
      if (!(!n || !n.devicePixelContentBoxSize || !n.devicePixelContentBoxSize[0])) {
        var i = n.devicePixelContentBoxSize[0], s = Z({ width: i.inlineSize, height: i.blockSize });
        t._suggestNewBitmapSize(s);
      }
    }), this._canvasElementResizeObserver.observe(this._canvasElement, { box: "device-pixel-content-box" }));
  }, e3;
})();
function X$(e3, t) {
  return new G$(e3, t.transform, t.options);
}
function Ym(e3) {
  return e3.ownerDocument.defaultView;
}
function J$() {
  return new Promise(function(e3) {
    var t = new ResizeObserver(function(r) {
      e3(r.every(function(n) {
        return "devicePixelContentBoxSize" in n;
      })), t.disconnect();
    });
    t.observe(document.body, { box: "device-pixel-content-box" });
  }).catch(function() {
    return false;
  });
}
function Z$(e3, t) {
  return Z({ width: Math.round(e3.left * t + e3.width * t) - Math.round(e3.left * t), height: Math.round(e3.top * t + e3.height * t) - Math.round(e3.top * t) });
}
var Q$ = (function() {
  function e3(t, r, n) {
    if (r.width === 0 || r.height === 0) throw new TypeError("Rendering target could only be created on a media with positive width and height");
    if (this._mediaSize = r, n.width === 0 || n.height === 0) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
    this._bitmapSize = n, this._context = t;
  }
  return e3.prototype.useMediaCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({ context: this._context, mediaSize: this._mediaSize });
    } finally {
      this._context.restore();
    }
  }, e3.prototype.useBitmapCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({ context: this._context, mediaSize: this._mediaSize, bitmapSize: this._bitmapSize, horizontalPixelRatio: this._horizontalPixelRatio, verticalPixelRatio: this._verticalPixelRatio });
    } finally {
      this._context.restore();
    }
  }, Object.defineProperty(e3.prototype, "_horizontalPixelRatio", { get: function() {
    return this._bitmapSize.width / this._mediaSize.width;
  }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "_verticalPixelRatio", { get: function() {
    return this._bitmapSize.height / this._mediaSize.height;
  }, enumerable: false, configurable: true }), e3;
})();
function Wr(e3, t) {
  var r = e3.canvasElementClientSize;
  if (r.width === 0 || r.height === 0) return null;
  var n = e3.bitmapSize;
  if (n.width === 0 || n.height === 0) return null;
  var i = e3.canvasElement.getContext("2d", t);
  return i === null ? null : new Q$(i, r, n);
}
/*!
* @license
* TradingView Lightweight Charts™ v5.1.0
* Copyright (c) 2025 TradingView, Inc.
* Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
*/
const s1 = { title: "", visible: true, lastValueVisible: true, priceLineVisible: true, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: true, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: 0.01 } };
var Hm, Gm;
function fr(e3, t) {
  const r = { 0: [], 1: [e3.lineWidth, e3.lineWidth], 2: [2 * e3.lineWidth, 2 * e3.lineWidth], 3: [6 * e3.lineWidth, 6 * e3.lineWidth], 4: [e3.lineWidth, 4 * e3.lineWidth] }[t];
  e3.setLineDash(r);
}
function a1(e3, t, r, n) {
  e3.beginPath();
  const i = e3.lineWidth % 2 ? 0.5 : 0;
  e3.moveTo(r, t + i), e3.lineTo(n, t + i), e3.stroke();
}
function Et(e3, t) {
  if (!e3) throw new Error("Assertion failed" + (t ? ": " + t : ""));
}
function Ht(e3) {
  if (e3 === void 0) throw new Error("Value is undefined");
  return e3;
}
function C(e3) {
  if (e3 === null) throw new Error("Value is null");
  return e3;
}
function lr(e3) {
  return C(Ht(e3));
}
(function(e3) {
  e3[e3.Simple = 0] = "Simple", e3[e3.WithSteps = 1] = "WithSteps", e3[e3.Curved = 2] = "Curved";
})(Hm || (Hm = {})), (function(e3) {
  e3[e3.Solid = 0] = "Solid", e3[e3.Dotted = 1] = "Dotted", e3[e3.Dashed = 2] = "Dashed", e3[e3.LargeDashed = 3] = "LargeDashed", e3[e3.SparseDotted = 4] = "SparseDotted";
})(Gm || (Gm = {}));
class ut {
  constructor() {
    this.t = [];
  }
  i(t, r, n) {
    const i = { h: t, l: r, o: n === true };
    this.t.push(i);
  }
  _(t) {
    const r = this.t.findIndex(((n) => t === n.h));
    r > -1 && this.t.splice(r, 1);
  }
  u(t) {
    this.t = this.t.filter(((r) => r.l !== t));
  }
  p(t, r, n) {
    const i = [...this.t];
    this.t = this.t.filter(((s) => !s.o)), i.forEach(((s) => s.h(t, r, n)));
  }
  v() {
    return this.t.length > 0;
  }
  m() {
    this.t = [];
  }
}
function te(e3, ...t) {
  for (const r of t) for (const n in r) r[n] !== void 0 && Object.prototype.hasOwnProperty.call(r, n) && !["__proto__", "constructor", "prototype"].includes(n) && (typeof r[n] != "object" || e3[n] === void 0 || Array.isArray(r[n]) ? e3[n] = r[n] : te(e3[n], r[n]));
  return e3;
}
function qr(e3) {
  return typeof e3 == "number" && isFinite(e3);
}
function Oi(e3) {
  return typeof e3 == "number" && e3 % 1 == 0;
}
function Yi(e3) {
  return typeof e3 == "string";
}
function cs(e3) {
  return typeof e3 == "boolean";
}
function Fe(e3) {
  const t = e3;
  if (!t || typeof t != "object") return t;
  let r, n, i;
  for (n in r = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(n) && (i = t[n], r[n] = i && typeof i == "object" ? Fe(i) : i);
  return r;
}
function Xm(e3) {
  return e3 !== null;
}
function Mi(e3) {
  return e3 === null ? void 0 : e3;
}
const o1 = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function Ei(e3, t, r) {
  return t === void 0 && (t = o1), `${r = r !== void 0 ? `${r} ` : ""}${e3}px ${t}`;
}
class tz {
  constructor(t) {
    this.M = { S: 1, C: 5, k: NaN, P: "", T: "", R: "", D: "", I: 0, V: 0, B: 0, A: 0, L: 0 }, this.O = t;
  }
  N() {
    const t = this.M, r = this.F(), n = this.W();
    return t.k === r && t.T === n || (t.k = r, t.T = n, t.P = Ei(r, n), t.A = 2.5 / 12 * r, t.I = t.A, t.V = r / 12 * t.C, t.B = r / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
  }
  H() {
    return this.O.N().layout.textColor;
  }
  U() {
    return this.O.$();
  }
  F() {
    return this.O.N().layout.fontSize;
  }
  W() {
    return this.O.N().layout.fontFamily;
  }
}
function tu(e3) {
  return e3 < 0 ? 0 : e3 > 255 ? 255 : Math.round(e3) || 0;
}
function Jm(e3) {
  return 0.199 * e3[0] + 0.687 * e3[1] + 0.114 * e3[2];
}
class ez {
  constructor(t, r) {
    this.q = /* @__PURE__ */ new Map(), this.j = t, r && (this.q = r);
  }
  Y(t, r) {
    if (t === "transparent") return t;
    const n = this.K(t), i = n[3];
    return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${r * i})`;
  }
  Z(t) {
    const r = this.K(t);
    return { G: `rgb(${r[0]}, ${r[1]}, ${r[2]})`, X: Jm(r) > 160 ? "black" : "white" };
  }
  J(t) {
    return Jm(this.K(t));
  }
  tt(t, r, n) {
    const [i, s, a, o] = this.K(t), [l, u, c, h] = this.K(r), f = [tu(i + n * (l - i)), tu(s + n * (u - s)), tu(a + n * (c - a)), (d = o + n * (h - o), d <= 0 || d > 1 ? Math.min(Math.max(d, 0), 1) : Math.round(1e4 * d) / 1e4)];
    var d;
    return `rgba(${f[0]}, ${f[1]}, ${f[2]}, ${f[3]})`;
  }
  K(t) {
    const r = this.q.get(t);
    if (r) return r;
    const n = (function(a) {
      const o = document.createElement("div");
      o.style.display = "none", document.body.appendChild(o), o.style.color = a;
      const l = window.getComputedStyle(o).color;
      return document.body.removeChild(o), l;
    })(t), i = n.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
    if (!i) {
      if (this.j.length) for (const a of this.j) {
        const o = a(t);
        if (o) return this.q.set(t, o), o;
      }
      throw new Error(`Failed to parse color: ${t}`);
    }
    const s = [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), i[4] ? parseFloat(i[4]) : 1];
    return this.q.set(t, s), s;
  }
}
class l1 {
  constructor() {
    this.it = [];
  }
  st(t) {
    this.it = t;
  }
  nt(t, r, n) {
    this.it.forEach(((i) => {
      i.nt(t, r, n);
    }));
  }
}
class er {
  nt(t, r, n) {
    t.useBitmapCoordinateSpace(((i) => this.et(i, r, n)));
  }
}
class rz extends er {
  constructor() {
    super(...arguments), this.rt = null;
  }
  ht(t) {
    this.rt = t;
  }
  et({ context: t, horizontalPixelRatio: r, verticalPixelRatio: n }) {
    if (this.rt === null || this.rt.lt === null) return;
    const i = this.rt.lt, s = this.rt, a = Math.max(1, Math.floor(r)) % 2 / 2, o = (l) => {
      t.beginPath();
      for (let u = i.to - 1; u >= i.from; --u) {
        const c = s.ot[u], h = Math.round(c._t * r) + a, f = c.ut * n, d = l * n + a;
        t.moveTo(h, f), t.arc(h, f, d, 0, 2 * Math.PI);
      }
      t.fill();
    };
    s.ct > 0 && (t.fillStyle = s.dt, o(s.ft + s.ct)), t.fillStyle = s.vt, o(s.ft);
  }
}
function nz() {
  return { ot: [{ _t: 0, ut: 0, wt: 0, gt: 0 }], vt: "", dt: "", ft: 0, ct: 0, lt: null };
}
const iz = { from: 0, to: 1 };
class sz {
  constructor(t, r, n) {
    this.Mt = new l1(), this.bt = [], this.St = [], this.xt = true, this.O = t, this.Ct = r, this.yt = n, this.Mt.st(this.bt);
  }
  kt(t) {
    this.Pt(), this.xt = true;
  }
  Tt() {
    return this.xt && (this.Rt(), this.xt = false), this.Mt;
  }
  Pt() {
    const t = this.yt.Dt();
    t.length !== this.bt.length && (this.St = t.map(nz), this.bt = this.St.map(((r) => {
      const n = new rz();
      return n.ht(r), n;
    })), this.Mt.st(this.bt));
  }
  Rt() {
    const t = this.Ct.N().mode === 2 || !this.Ct.It(), r = this.yt.Vt(), n = this.Ct.Bt(), i = this.O.Et();
    this.Pt(), r.forEach(((s, a) => {
      const o = this.St[a], l = s.At(n), u = s.Lt();
      !t && l !== null && s.It() && u !== null ? (o.vt = l.zt, o.ft = l.ft, o.ct = l.Ot, o.ot[0].gt = l.gt, o.ot[0].ut = s.Ft().Nt(l.gt, u.Wt), o.dt = l.Ht ?? this.O.Ut(o.ot[0].ut / s.Ft().$t()), o.ot[0].wt = n, o.ot[0]._t = i.qt(n), o.lt = iz) : o.lt = null;
    }));
  }
}
class az extends er {
  constructor(t) {
    super(), this.jt = t;
  }
  et({ context: t, bitmapSize: r, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.jt === null) return;
    const s = this.jt.Yt.It, a = this.jt.Kt.It;
    if (!s && !a) return;
    const o = Math.round(this.jt._t * n), l = Math.round(this.jt.ut * i);
    t.lineCap = "butt", s && o >= 0 && (t.lineWidth = Math.floor(this.jt.Yt.ct * n), t.strokeStyle = this.jt.Yt.R, t.fillStyle = this.jt.Yt.R, fr(t, this.jt.Yt.Zt), (function(u, c, h, f) {
      u.beginPath();
      const d = u.lineWidth % 2 ? 0.5 : 0;
      u.moveTo(c + d, h), u.lineTo(c + d, f), u.stroke();
    })(t, o, 0, r.height)), a && l >= 0 && (t.lineWidth = Math.floor(this.jt.Kt.ct * i), t.strokeStyle = this.jt.Kt.R, t.fillStyle = this.jt.Kt.R, fr(t, this.jt.Kt.Zt), a1(t, l, 0, r.width));
  }
}
class oz {
  constructor(t, r) {
    this.xt = true, this.Gt = { Yt: { ct: 1, Zt: 0, R: "", It: false }, Kt: { ct: 1, Zt: 0, R: "", It: false }, _t: 0, ut: 0 }, this.Xt = new az(this.Gt), this.Jt = t, this.yt = r;
  }
  kt() {
    this.xt = true;
  }
  Tt(t) {
    return this.xt && (this.Rt(), this.xt = false), this.Xt;
  }
  Rt() {
    const t = this.Jt.It(), r = this.yt.Qt().N().crosshair, n = this.Gt;
    if (r.mode === 2) return n.Kt.It = false, void (n.Yt.It = false);
    n.Kt.It = t && this.Jt.ti(this.yt), n.Yt.It = t && this.Jt.ii(), n.Kt.ct = r.horzLine.width, n.Kt.Zt = r.horzLine.style, n.Kt.R = r.horzLine.color, n.Yt.ct = r.vertLine.width, n.Yt.Zt = r.vertLine.style, n.Yt.R = r.vertLine.color, n._t = this.Jt.si(), n.ut = this.Jt.ni();
  }
}
function lz(e3, t, r, n, i, s) {
  e3.fillRect(t + s, r, n - 2 * s, s), e3.fillRect(t + s, r + i - s, n - 2 * s, s), e3.fillRect(t, r, s, i), e3.fillRect(t + n - s, r, s, i);
}
function go(e3, t, r, n, i, s) {
  e3.save(), e3.globalCompositeOperation = "copy", e3.fillStyle = s, e3.fillRect(t, r, n, i), e3.restore();
}
function Zm(e3, t, r, n, i, s) {
  e3.beginPath(), e3.roundRect ? e3.roundRect(t, r, n, i, s) : (e3.lineTo(t + n - s[1], r), s[1] !== 0 && e3.arcTo(t + n, r, t + n, r + s[1], s[1]), e3.lineTo(t + n, r + i - s[2]), s[2] !== 0 && e3.arcTo(t + n, r + i, t + n - s[2], r + i, s[2]), e3.lineTo(t + s[3], r + i), s[3] !== 0 && e3.arcTo(t, r + i, t, r + i - s[3], s[3]), e3.lineTo(t, r + s[0]), s[0] !== 0 && e3.arcTo(t, r, t + s[0], r, s[0]));
}
function Qm(e3, t, r, n, i, s, a = 0, o = [0, 0, 0, 0], l = "") {
  if (e3.save(), !a || !l || l === s) return Zm(e3, t, r, n, i, o), e3.fillStyle = s, e3.fill(), void e3.restore();
  const u = a / 2;
  var c;
  Zm(e3, t + u, r + u, n - a, i - a, (c = -u, o.map(((h) => h === 0 ? h : h + c)))), s !== "transparent" && (e3.fillStyle = s, e3.fill()), l !== "transparent" && (e3.lineWidth = a, e3.strokeStyle = l, e3.closePath(), e3.stroke()), e3.restore();
}
function u1(e3, t, r, n, i, s, a) {
  e3.save(), e3.globalCompositeOperation = "copy";
  const o = e3.createLinearGradient(0, 0, 0, i);
  o.addColorStop(0, s), o.addColorStop(1, a), e3.fillStyle = o, e3.fillRect(t, r, n, i), e3.restore();
}
class tg {
  constructor(t, r) {
    this.ht(t, r);
  }
  ht(t, r) {
    this.jt = t, this.ei = r;
  }
  $t(t, r) {
    return this.jt.It ? t.k + t.A + t.I : 0;
  }
  nt(t, r, n, i) {
    if (!this.jt.It || this.jt.ri.length === 0) return;
    const s = this.jt.R, a = this.ei.G, o = t.useBitmapCoordinateSpace(((l) => {
      const u = l.context;
      u.font = r.P;
      const c = this.hi(l, r, n, i), h = c.ai;
      return c.li ? Qm(u, h.oi, h._i, h.ui, h.ci, a, h.di, [h.ft, 0, 0, h.ft], a) : Qm(u, h.fi, h._i, h.ui, h.ci, a, h.di, [0, h.ft, h.ft, 0], a), this.jt.pi && (u.fillStyle = s, u.fillRect(h.fi, h.mi, h.wi - h.fi, h.gi)), this.jt.Mi && (u.fillStyle = r.D, u.fillRect(c.li ? h.bi - h.di : 0, h._i, h.di, h.Si - h._i)), c;
    }));
    t.useMediaCoordinateSpace((({ context: l }) => {
      const u = o.xi;
      l.font = r.P, l.textAlign = o.li ? "right" : "left", l.textBaseline = "middle", l.fillStyle = s, l.fillText(this.jt.ri, u.Ci, (u._i + u.Si) / 2 + u.yi);
    }));
  }
  hi(t, r, n, i) {
    const { context: s, bitmapSize: a, mediaSize: o, horizontalPixelRatio: l, verticalPixelRatio: u } = t, c = this.jt.pi || !this.jt.ki ? r.C : 0, h = this.jt.Pi ? r.S : 0, f = r.A + this.ei.Ti, d = r.I + this.ei.Ri, v = r.V, m = r.B, p = this.jt.ri, y = r.k, b = n.Di(s, p), w = Math.ceil(n.Ii(s, p)), x = y + f + d, P = r.S + v + m + w + c, S = Math.max(1, Math.floor(u));
    let _ = Math.round(x * u);
    _ % 2 != S % 2 && (_ += 1);
    const M = h > 0 ? Math.max(1, Math.floor(h * l)) : 0, A = Math.round(P * l), j = Math.round(c * l), k = this.ei.Vi ?? this.ei.Bi ?? this.ei.Ei, E = Math.round(k * u) - Math.floor(0.5 * u), $ = Math.floor(E + S / 2 - _ / 2), R = $ + _, B = i === "right", H = B ? o.width - h : h, W = B ? a.width - M : M;
    let G, F, U;
    return B ? (G = W - A, F = W - j, U = H - c - v - h) : (G = W + A, F = W + j, U = H + c + v), { li: B, ai: { _i: $, mi: E, Si: R, ui: A, ci: _, ft: 2 * l, di: M, oi: G, fi: W, wi: F, gi: S, bi: a.width }, xi: { _i: $ / u, Si: R / u, Ci: U, yi: b } };
  }
}
class yo {
  constructor(t) {
    this.Ai = { Ei: 0, G: "#000", Ri: 0, Ti: 0 }, this.Li = { ri: "", It: false, pi: true, ki: false, Ht: "", R: "#FFF", Mi: false, Pi: false }, this.zi = { ri: "", It: false, pi: false, ki: true, Ht: "", R: "#FFF", Mi: true, Pi: true }, this.xt = true, this.Oi = new (t || tg)(this.Li, this.Ai), this.Ni = new (t || tg)(this.zi, this.Ai);
  }
  ri() {
    return this.Fi(), this.Li.ri;
  }
  Ei() {
    return this.Fi(), this.Ai.Ei;
  }
  kt() {
    this.xt = true;
  }
  $t(t, r = false) {
    return Math.max(this.Oi.$t(t, r), this.Ni.$t(t, r));
  }
  Wi() {
    return this.Ai.Vi ?? null;
  }
  Hi() {
    return this.Ai.Vi ?? this.Ai.Bi ?? this.Ei();
  }
  Ui(t) {
    this.Ai.Bi = t ?? void 0;
  }
  $i() {
    return this.Fi(), this.Li.It || this.zi.It;
  }
  qi() {
    return this.Fi(), this.Li.It;
  }
  Tt(t) {
    return this.Fi(), this.Li.pi = this.Li.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Oi;
  }
  ji() {
    return this.Fi(), this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Ni;
  }
  Fi() {
    this.xt && (this.Li.pi = true, this.zi.pi = false, this.Yi(this.Li, this.zi, this.Ai));
  }
}
class uz extends yo {
  constructor(t, r, n) {
    super(), this.Jt = t, this.Ki = r, this.Zi = n;
  }
  Yi(t, r, n) {
    if (t.It = false, this.Jt.N().mode === 2) return;
    const i = this.Jt.N().horzLine;
    if (!i.labelVisible) return;
    const s = this.Ki.Lt();
    if (!this.Jt.It() || this.Ki.Gi() || s === null) return;
    const a = this.Ki.Xi().Z(i.labelBackgroundColor);
    n.G = a.G, t.R = a.X;
    const o = 2 / 12 * this.Ki.k();
    n.Ti = o, n.Ri = o;
    const l = this.Zi(this.Ki);
    n.Ei = l.Ei, t.ri = this.Ki.Ji(l.gt, s), t.It = true;
  }
}
const cz = /[1-9]/g;
class c1 {
  constructor() {
    this.jt = null;
  }
  ht(t) {
    this.jt = t;
  }
  nt(t, r) {
    if (this.jt === null || this.jt.It === false || this.jt.ri.length === 0) return;
    const n = t.useMediaCoordinateSpace((({ context: f }) => (f.font = r.P, Math.round(r.Qi.Ii(f, C(this.jt).ri, cz)))));
    if (n <= 0) return;
    const i = r.ts, s = n + 2 * i, a = s / 2, o = this.jt.ss;
    let l = this.jt.Ei, u = Math.floor(l - a) + 0.5;
    u < 0 ? (l += Math.abs(0 - u), u = Math.floor(l - a) + 0.5) : u + s > o && (l -= Math.abs(o - (u + s)), u = Math.floor(l - a) + 0.5);
    const c = u + s, h = Math.ceil(0 + r.S + r.C + r.A + r.k + r.I);
    t.useBitmapCoordinateSpace((({ context: f, horizontalPixelRatio: d, verticalPixelRatio: v }) => {
      const m = C(this.jt);
      f.fillStyle = m.G;
      const p = Math.round(u * d), y = Math.round(0 * v), b = Math.round(c * d), w = Math.round(h * v), x = Math.round(2 * d);
      if (f.beginPath(), f.moveTo(p, y), f.lineTo(p, w - x), f.arcTo(p, w, p + x, w, x), f.lineTo(b - x, w), f.arcTo(b, w, b, w - x, x), f.lineTo(b, y), f.fill(), m.pi) {
        const P = Math.round(m.Ei * d), S = y, _ = Math.round((S + r.C) * v);
        f.fillStyle = m.R;
        const M = Math.max(1, Math.floor(d)), A = Math.floor(0.5 * d);
        f.fillRect(P - A, S, M, _ - S);
      }
    })), t.useMediaCoordinateSpace((({ context: f }) => {
      const d = C(this.jt), v = 0 + r.S + r.C + r.A + r.k / 2;
      f.font = r.P, f.textAlign = "left", f.textBaseline = "middle", f.fillStyle = d.R;
      const m = r.Qi.Di(f, "Apr0");
      f.translate(u + i, v + m), f.fillText(d.ri, 0, 0);
    }));
  }
}
class hz {
  constructor(t, r, n) {
    this.xt = true, this.Xt = new c1(), this.Gt = { It: false, G: "#4c525e", R: "white", ri: "", ss: 0, Ei: NaN, pi: true }, this.Ct = t, this.ns = r, this.Zi = n;
  }
  kt() {
    this.xt = true;
  }
  Tt() {
    return this.xt && (this.Rt(), this.xt = false), this.Xt.ht(this.Gt), this.Xt;
  }
  Rt() {
    const t = this.Gt;
    if (t.It = false, this.Ct.N().mode === 2) return;
    const r = this.Ct.N().vertLine;
    if (!r.labelVisible) return;
    const n = this.ns.Et();
    if (n.Gi()) return;
    t.ss = n.ss();
    const i = this.Zi();
    if (i === null) return;
    t.Ei = i.Ei;
    const s = n.es(this.Ct.Bt());
    t.ri = n.rs(C(s)), t.It = true;
    const a = this.ns.Xi().Z(r.labelBackgroundColor);
    t.G = a.G, t.R = a.X, t.pi = n.N().ticksVisible;
  }
}
class h1 {
  constructor() {
    this.hs = null, this.ls = 0;
  }
  _s() {
    return this.ls;
  }
  us(t) {
    this.ls = t;
  }
  Ft() {
    return this.hs;
  }
  cs(t) {
    this.hs = t;
  }
  ds(t) {
    return [];
  }
  fs() {
    return [];
  }
  It() {
    return true;
  }
}
var eg;
(function(e3) {
  e3[e3.Normal = 0] = "Normal", e3[e3.Magnet = 1] = "Magnet", e3[e3.Hidden = 2] = "Hidden", e3[e3.MagnetOHLC = 3] = "MagnetOHLC";
})(eg || (eg = {}));
class fz extends h1 {
  constructor(t, r) {
    super(), this.yt = null, this.ps = NaN, this.vs = 0, this.ws = false, this.gs = /* @__PURE__ */ new Map(), this.Ms = false, this.bs = /* @__PURE__ */ new WeakMap(), this.Ss = /* @__PURE__ */ new WeakMap(), this.xs = NaN, this.Cs = NaN, this.ys = NaN, this.ks = NaN, this.ns = t, this.Ps = r, this.Ts = /* @__PURE__ */ ((i, s) => (a) => {
      const o = s(), l = i();
      if (a === C(this.yt).Rs()) return { gt: l, Ei: o };
      {
        const u = C(a.Lt());
        return { gt: a.Ds(o, u), Ei: o };
      }
    })((() => this.ps), (() => this.Cs));
    const n = /* @__PURE__ */ ((i, s) => () => {
      const a = this.ns.Et().Is(i()), o = s();
      return a && Number.isFinite(o) ? { wt: a, Ei: o } : null;
    })((() => this.vs), (() => this.si()));
    this.Vs = new hz(this, t, n);
  }
  N() {
    return this.Ps;
  }
  Bs(t, r) {
    this.ys = t, this.ks = r;
  }
  Es() {
    this.ys = NaN, this.ks = NaN;
  }
  As() {
    return this.ys;
  }
  Ls() {
    return this.ks;
  }
  zs(t, r, n) {
    this.Ms || (this.Ms = true), this.ws = true, this.Os(t, r, n);
  }
  Bt() {
    return this.vs;
  }
  si() {
    return this.xs;
  }
  ni() {
    return this.Cs;
  }
  It() {
    return this.ws;
  }
  Ns() {
    this.ws = false, this.Fs(), this.ps = NaN, this.xs = NaN, this.Cs = NaN, this.yt = null, this.Es(), this.Ws();
  }
  Hs(t) {
    if (!this.Ps.doNotSnapToHiddenSeriesIndices) return t;
    const r = this.ns, n = r.Et();
    let i = null, s = null;
    for (const u of r.Us()) {
      const c = u.qs().$s(t, -1);
      if (c) {
        if (c.js === t) return t;
        (i === null || c.js > i) && (i = c.js);
      }
      const h = u.qs().$s(t, 1);
      if (h) {
        if (h.js === t) return t;
        (s === null || h.js < s) && (s = h.js);
      }
    }
    const a = [i, s].filter(Xm);
    if (a.length === 0) return t;
    const o = n.qt(t), l = a.map(((u) => Math.abs(o - n.qt(u))));
    return a[l.indexOf(Math.min(...l))];
  }
  Ys(t) {
    let r = this.bs.get(t);
    r || (r = new oz(this, t), this.bs.set(t, r));
    let n = this.Ss.get(t);
    return n || (n = new sz(this.ns, this, t), this.Ss.set(t, n)), [r, n];
  }
  ti(t) {
    return t === this.yt && this.Ps.horzLine.visible;
  }
  ii() {
    return this.Ps.vertLine.visible;
  }
  Ks(t, r) {
    this.ws && this.yt === t || this.gs.clear();
    const n = [];
    return this.yt === t && n.push(this.Zs(this.gs, r, this.Ts)), n;
  }
  fs() {
    return this.ws ? [this.Vs] : [];
  }
  Gs() {
    return this.yt;
  }
  Ws() {
    this.ns.Xs().forEach(((t) => {
      var _a3, _b2;
      (_a3 = this.bs.get(t)) == null ? void 0 : _a3.kt(), (_b2 = this.Ss.get(t)) == null ? void 0 : _b2.kt();
    })), this.gs.forEach(((t) => t.kt())), this.Vs.kt();
  }
  Js(t) {
    return t && !t.Rs().Gi() ? t.Rs() : null;
  }
  Os(t, r, n) {
    this.Qs(t, r, n) && this.Ws();
  }
  Qs(t, r, n) {
    const i = this.xs, s = this.Cs, a = this.ps, o = this.vs, l = this.yt, u = this.Js(n);
    this.vs = t, this.xs = isNaN(t) ? NaN : this.ns.Et().qt(t), this.yt = n;
    const c = u !== null ? u.Lt() : null;
    return u !== null && c !== null ? (this.ps = r, this.Cs = u.Nt(r, c)) : (this.ps = NaN, this.Cs = NaN), i !== this.xs || s !== this.Cs || o !== this.vs || a !== this.ps || l !== this.yt;
  }
  Fs() {
    const t = this.ns.tn().map(((n) => n.qs().sn())).filter(Xm), r = t.length === 0 ? null : Math.max(...t);
    this.vs = r !== null ? r : NaN;
  }
  Zs(t, r, n) {
    let i = t.get(r);
    return i === void 0 && (i = new uz(this, r, n), t.set(r, i)), i;
  }
}
function bo(e3) {
  return e3 === "left" || e3 === "right";
}
class Ot {
  constructor(t) {
    this.nn = /* @__PURE__ */ new Map(), this.en = [], this.rn = t;
  }
  hn(t, r) {
    const n = (function(i, s) {
      return i === void 0 ? s : { an: Math.max(i.an, s.an), ln: i.ln || s.ln };
    })(this.nn.get(t), r);
    this.nn.set(t, n);
  }
  _n() {
    return this.rn;
  }
  un(t) {
    const r = this.nn.get(t);
    return r === void 0 ? { an: this.rn } : { an: Math.max(this.rn, r.an), ln: r.ln };
  }
  cn() {
    this.dn(), this.en = [{ fn: 0 }];
  }
  pn(t) {
    this.dn(), this.en = [{ fn: 1, Wt: t }];
  }
  vn(t) {
    this.mn(), this.en.push({ fn: 5, Wt: t });
  }
  dn() {
    this.mn(), this.en.push({ fn: 6 });
  }
  wn() {
    this.dn(), this.en = [{ fn: 4 }];
  }
  gn(t) {
    this.dn(), this.en.push({ fn: 2, Wt: t });
  }
  Mn(t) {
    this.dn(), this.en.push({ fn: 3, Wt: t });
  }
  bn() {
    return this.en;
  }
  Sn(t) {
    for (const r of t.en) this.xn(r);
    this.rn = Math.max(this.rn, t.rn), t.nn.forEach(((r, n) => {
      this.hn(n, r);
    }));
  }
  static Cn() {
    return new Ot(2);
  }
  static yn() {
    return new Ot(3);
  }
  xn(t) {
    switch (t.fn) {
      case 0:
        this.cn();
        break;
      case 1:
        this.pn(t.Wt);
        break;
      case 2:
        this.gn(t.Wt);
        break;
      case 3:
        this.Mn(t.Wt);
        break;
      case 4:
        this.wn();
        break;
      case 5:
        this.vn(t.Wt);
        break;
      case 6:
        this.mn();
    }
  }
  mn() {
    const t = this.en.findIndex(((r) => r.fn === 5));
    t !== -1 && this.en.splice(t, 1);
  }
}
class f1 {
  formatTickmarks(t) {
    return t.map(((r) => this.format(r)));
  }
}
const rg = ".";
function We(e3, t) {
  if (!qr(e3)) return "n/a";
  if (!Oi(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? e3.toString() : ("0000000000000000" + e3.toString()).slice(-t);
}
class wo extends f1 {
  constructor(t, r) {
    if (super(), r || (r = 1), qr(t) && Oi(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Ki = t, this.kn = r, this.Pn();
  }
  format(t) {
    const r = t < 0 ? "\u2212" : "";
    return t = Math.abs(t), r + this.Tn(t);
  }
  Pn() {
    if (this.Rn = 0, this.Ki > 0 && this.kn > 0) {
      let t = this.Ki;
      for (; t > 1; ) t /= 10, this.Rn++;
    }
  }
  Tn(t) {
    const r = this.Ki / this.kn;
    let n = Math.floor(t), i = "";
    const s = this.Rn !== void 0 ? this.Rn : NaN;
    if (r > 1) {
      let a = +(Math.round(t * r) - n * r).toFixed(this.Rn);
      a >= r && (a -= r, n += 1), i = rg + We(+a.toFixed(this.Rn) * this.kn, s);
    } else n = Math.round(n * r) / r, s > 0 && (i = rg + We(0, s));
    return n.toFixed(0) + i;
  }
}
class d1 extends wo {
  constructor(t = 100) {
    super(t);
  }
  format(t) {
    return `${super.format(t)}%`;
  }
}
class dz extends f1 {
  constructor(t) {
    super(), this.Dn = t;
  }
  format(t) {
    let r = "";
    return t < 0 && (r = "-", t = -t), t < 995 ? r + this.In(t) : t < 999995 ? r + this.In(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), r + this.In(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), r + this.In(t / 1e9) + "B");
  }
  In(t) {
    let r;
    const n = Math.pow(10, this.Dn);
    return r = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this.Dn).replace(/\.?0+$/, "") : String(t), r.replace(/(\.[1-9]*)0+$/, ((i, s) => s));
  }
}
const vz = /[2-9]/g;
class Ai {
  constructor(t = 50) {
    this.Vn = 0, this.Bn = 1, this.En = 1, this.An = {}, this.Ln = /* @__PURE__ */ new Map(), this.zn = t;
  }
  On() {
    this.Vn = 0, this.Ln.clear(), this.Bn = 1, this.En = 1, this.An = {};
  }
  Ii(t, r, n) {
    return this.Nn(t, r, n).width;
  }
  Di(t, r, n) {
    const i = this.Nn(t, r, n);
    return ((i.actualBoundingBoxAscent || 0) - (i.actualBoundingBoxDescent || 0)) / 2;
  }
  Nn(t, r, n) {
    const i = n || vz, s = String(r).replace(i, "0");
    if (this.Ln.has(s)) return Ht(this.Ln.get(s)).Fn;
    if (this.Vn === this.zn) {
      const o = this.An[this.En];
      delete this.An[this.En], this.Ln.delete(o), this.En++, this.Vn--;
    }
    t.save(), t.textBaseline = "middle";
    const a = t.measureText(s);
    return t.restore(), a.width === 0 && r.length || (this.Ln.set(s, { Fn: a, Wn: this.Bn }), this.An[this.Bn] = s, this.Vn++, this.Bn++), a;
  }
}
class pz {
  constructor(t) {
    this.Hn = null, this.M = null, this.Un = "right", this.$n = t;
  }
  qn(t, r, n) {
    this.Hn = t, this.M = r, this.Un = n;
  }
  nt(t) {
    this.M !== null && this.Hn !== null && this.Hn.nt(t, this.M, this.$n, this.Un);
  }
}
class v1 {
  constructor(t, r, n) {
    this.jn = t, this.$n = new Ai(50), this.Yn = r, this.O = n, this.F = -1, this.Xt = new pz(this.$n);
  }
  Tt() {
    const t = this.O.Kn(this.Yn);
    if (t === null) return null;
    const r = t.Zn(this.Yn) ? t.Gn() : this.Yn.Ft();
    if (r === null) return null;
    const n = t.Xn(r);
    if (n === "overlay") return null;
    const i = this.O.Jn();
    return i.k !== this.F && (this.F = i.k, this.$n.On()), this.Xt.qn(this.jn.ji(), i, n), this.Xt;
  }
}
class mz extends er {
  constructor() {
    super(...arguments), this.jt = null;
  }
  ht(t) {
    this.jt = t;
  }
  Qn(t, r) {
    var _a3;
    if (!((_a3 = this.jt) == null ? void 0 : _a3.It)) return null;
    const { ut: n, ct: i, te: s } = this.jt;
    return r >= n - i - 7 && r <= n + i + 7 ? { ie: this.jt, te: s } : null;
  }
  et({ context: t, bitmapSize: r, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.jt === null || this.jt.It === false) return;
    const s = Math.round(this.jt.ut * i);
    s < 0 || s > r.height || (t.lineCap = "butt", t.strokeStyle = this.jt.R, t.lineWidth = Math.floor(this.jt.ct * n), fr(t, this.jt.Zt), a1(t, s, 0, r.width));
  }
}
class Hh {
  constructor(t) {
    this.se = { ut: 0, R: "rgba(0, 0, 0, 0)", ct: 1, Zt: 0, It: false }, this.ne = new mz(), this.xt = true, this.ee = t, this.re = t.Qt(), this.ne.ht(this.se);
  }
  kt() {
    this.xt = true;
  }
  Tt() {
    return this.ee.It() ? (this.xt && (this.he(), this.xt = false), this.ne) : null;
  }
}
class gz extends Hh {
  constructor(t) {
    super(t);
  }
  he() {
    this.se.It = false;
    const t = this.ee.Ft(), r = t.ae().ae;
    if (r !== 2 && r !== 3) return;
    const n = this.ee.N();
    if (!n.baseLineVisible || !this.ee.It()) return;
    const i = this.ee.Lt();
    i !== null && (this.se.It = true, this.se.ut = t.Nt(i.Wt, i.Wt), this.se.R = n.baseLineColor, this.se.ct = n.baseLineWidth, this.se.Zt = n.baseLineStyle);
  }
}
class yz extends er {
  constructor() {
    super(...arguments), this.jt = null;
  }
  ht(t) {
    this.jt = t;
  }
  le() {
    return this.jt;
  }
  et({ context: t, horizontalPixelRatio: r, verticalPixelRatio: n }) {
    const i = this.jt;
    if (i === null) return;
    const s = Math.max(1, Math.floor(r)), a = s % 2 / 2, o = Math.round(i.oe.x * r) + a, l = i.oe.y * n;
    t.fillStyle = i._e, t.beginPath();
    const u = Math.max(2, 1.5 * i.ue) * r;
    t.arc(o, l, u, 0, 2 * Math.PI, false), t.fill(), t.fillStyle = i.ce, t.beginPath(), t.arc(o, l, i.ft * r, 0, 2 * Math.PI, false), t.fill(), t.lineWidth = s, t.strokeStyle = i.de, t.beginPath(), t.arc(o, l, i.ft * r + s / 2, 0, 2 * Math.PI, false), t.stroke();
  }
}
const bz = [{ fe: 0, pe: 0.25, ve: 4, me: 10, we: 0.25, ge: 0, Me: 0.4, be: 0.8 }, { fe: 0.25, pe: 0.525, ve: 10, me: 14, we: 0, ge: 0, Me: 0.8, be: 0 }, { fe: 0.525, pe: 1, ve: 14, me: 14, we: 0, ge: 0, Me: 0, be: 0 }];
class wz {
  constructor(t) {
    this.Xt = new yz(), this.xt = true, this.Se = true, this.xe = performance.now(), this.Ce = this.xe - 1, this.ye = t;
  }
  ke() {
    this.Ce = this.xe - 1, this.kt();
  }
  Pe() {
    if (this.kt(), this.ye.N().lastPriceAnimation === 2) {
      const t = performance.now(), r = this.Ce - t;
      if (r > 0) return void (r < 650 && (this.Ce += 2600));
      this.xe = t, this.Ce = t + 2600;
    }
  }
  kt() {
    this.xt = true;
  }
  Te() {
    this.Se = true;
  }
  It() {
    return this.ye.N().lastPriceAnimation !== 0;
  }
  Re() {
    switch (this.ye.N().lastPriceAnimation) {
      case 0:
        return false;
      case 1:
        return true;
      case 2:
        return performance.now() <= this.Ce;
    }
  }
  Tt() {
    return this.xt ? (this.Rt(), this.xt = false, this.Se = false) : this.Se && (this.De(), this.Se = false), this.Xt;
  }
  Rt() {
    this.Xt.ht(null);
    const t = this.ye.Qt().Et(), r = t.Ie(), n = this.ye.Lt();
    if (r === null || n === null) return;
    const i = this.ye.Ve(true);
    if (i.Be || !r.Ee(i.js)) return;
    const s = { x: t.qt(i.js), y: this.ye.Ft().Nt(i.gt, n.Wt) }, a = i.R, o = this.ye.N().lineWidth, l = this.Ae(this.Le(), a);
    this.Xt.ht({ _e: a, ue: o, ce: l.ce, de: l.de, ft: l.ft, oe: s });
  }
  De() {
    const t = this.Xt.le();
    if (t !== null) {
      const r = this.Ae(this.Le(), t._e);
      t.ce = r.ce, t.de = r.de, t.ft = r.ft;
    }
  }
  Le() {
    return this.Re() ? performance.now() - this.xe : 2599;
  }
  ze(t, r, n, i) {
    const s = n + (i - n) * r;
    return this.ye.Qt().Xi().Y(t, s);
  }
  Ae(t, r) {
    const n = t % 2600 / 2600;
    let i;
    for (const u of bz) if (n >= u.fe && n <= u.pe) {
      i = u;
      break;
    }
    Et(i !== void 0, "Last price animation internal logic error");
    const s = (n - i.fe) / (i.pe - i.fe);
    return { ce: this.ze(r, s, i.we, i.ge), de: this.ze(r, s, i.Me, i.be), ft: (a = s, o = i.ve, l = i.me, o + (l - o) * a) };
    var a, o, l;
  }
}
class xz extends Hh {
  constructor(t) {
    super(t);
  }
  he() {
    const t = this.se;
    t.It = false;
    const r = this.ee.N();
    if (!r.priceLineVisible || !this.ee.It()) return;
    const n = this.ee.Ve(r.priceLineSource === 0);
    n.Be || (t.It = true, t.ut = n.Ei, t.R = this.ee.Oe(n.R), t.ct = r.priceLineWidth, t.Zt = r.priceLineStyle);
  }
}
class Pz extends yo {
  constructor(t) {
    super(), this.Jt = t;
  }
  Yi(t, r, n) {
    t.It = false, r.It = false;
    const i = this.Jt;
    if (!i.It()) return;
    const s = i.N(), a = s.lastValueVisible, o = i.Ne() !== "", l = s.seriesLastValueMode === 0, u = i.Ve(false);
    if (u.Be) return;
    a && (t.ri = this.Fe(u, a, l), t.It = t.ri.length !== 0), (o || l) && (r.ri = this.We(u, a, o, l), r.It = r.ri.length > 0);
    const c = i.Oe(u.R), h = this.Jt.Qt().Xi().Z(c);
    n.G = h.G, n.Ei = u.Ei, r.Ht = i.Qt().Ut(u.Ei / i.Ft().$t()), t.Ht = c, t.R = h.X, r.R = h.X;
  }
  We(t, r, n, i) {
    let s = "";
    const a = this.Jt.Ne();
    return n && a.length !== 0 && (s += `${a} `), r && i && (s += this.Jt.Ft().He() ? t.Ue : t.$e), s.trim();
  }
  Fe(t, r, n) {
    return r ? n ? this.Jt.Ft().He() ? t.$e : t.Ue : t.ri : "";
  }
}
function ng(e3, t, r, n) {
  const i = Number.isFinite(t), s = Number.isFinite(r);
  return i && s ? e3(t, r) : i || s ? i ? t : r : n;
}
class zt {
  constructor(t, r) {
    this.qe = t, this.je = r;
  }
  Ye(t) {
    return t !== null && this.qe === t.qe && this.je === t.je;
  }
  Ke() {
    return new zt(this.qe, this.je);
  }
  Ze() {
    return this.qe;
  }
  Ge() {
    return this.je;
  }
  Xe() {
    return this.je - this.qe;
  }
  Gi() {
    return this.je === this.qe || Number.isNaN(this.je) || Number.isNaN(this.qe);
  }
  Sn(t) {
    return t === null ? this : new zt(ng(Math.min, this.Ze(), t.Ze(), -1 / 0), ng(Math.max, this.Ge(), t.Ge(), 1 / 0));
  }
  Je(t) {
    if (!qr(t) || this.je - this.qe === 0) return;
    const r = 0.5 * (this.je + this.qe);
    let n = this.je - r, i = this.qe - r;
    n *= t, i *= t, this.je = r + n, this.qe = r + i;
  }
  Qe(t) {
    qr(t) && (this.je += t, this.qe += t);
  }
  tr() {
    return { minValue: this.qe, maxValue: this.je };
  }
  static ir(t) {
    return t === null ? null : new zt(t.minValue, t.maxValue);
  }
}
class wa {
  constructor(t, r) {
    this.sr = t, this.nr = r || null;
  }
  er() {
    return this.sr;
  }
  rr() {
    return this.nr;
  }
  tr() {
    return { priceRange: this.sr === null ? null : this.sr.tr(), margins: this.nr || void 0 };
  }
  static ir(t) {
    return t === null ? null : new wa(zt.ir(t.priceRange), t.margins);
  }
}
const Sz = [2, 4, 8, 16, 32, 64, 128, 256, 512], _z = "Custom series with conflation reducer must have a priceValueBuilder method";
class Oz extends Hh {
  constructor(t, r) {
    super(t), this.hr = r;
  }
  he() {
    const t = this.se;
    t.It = false;
    const r = this.hr.N();
    if (!this.ee.It() || !r.lineVisible) return;
    const n = this.hr.ar();
    n !== null && (t.It = true, t.ut = n, t.R = r.color, t.ct = r.lineWidth, t.Zt = r.lineStyle, t.te = this.hr.N().id);
  }
}
class Mz extends yo {
  constructor(t, r) {
    super(), this.ye = t, this.hr = r;
  }
  Yi(t, r, n) {
    t.It = false, r.It = false;
    const i = this.hr.N(), s = i.axisLabelVisible, a = i.title !== "", o = this.ye;
    if (!s || !o.It()) return;
    const l = this.hr.ar();
    if (l === null) return;
    a && (r.ri = i.title, r.It = true), r.Ht = o.Qt().Ut(l / o.Ft().$t()), t.ri = this.lr(i.price), t.It = true;
    const u = this.ye.Qt().Xi().Z(i.axisLabelColor || i.color);
    n.G = u.G;
    const c = i.axisLabelTextColor || u.X;
    t.R = c, r.R = c, n.Ei = l;
  }
  lr(t) {
    const r = this.ye.Lt();
    return r === null ? "" : this.ye.Ft().Ji(t, r.Wt);
  }
}
class Ez {
  constructor(t, r) {
    this.ye = t, this.Ps = r, this._r = new Oz(t, this), this.jn = new Mz(t, this), this.ur = new v1(this.jn, t, t.Qt());
  }
  cr(t) {
    te(this.Ps, t), this.kt(), this.ye.Qt().dr();
  }
  N() {
    return this.Ps;
  }
  pr() {
    return this._r;
  }
  vr() {
    return this.ur;
  }
  mr() {
    return this.jn;
  }
  kt() {
    this._r.kt(), this.jn.kt();
  }
  ar() {
    const t = this.ye, r = t.Ft();
    if (t.Qt().Et().Gi() || r.Gi()) return null;
    const n = t.Lt();
    return n === null ? null : r.Nt(this.Ps.price, n.Wt);
  }
}
class Az {
  constructor() {
    this.wr = /* @__PURE__ */ new WeakMap();
  }
  gr(t, r, n) {
    const i = 1 / r * n;
    if (t >= i) return 1;
    const s = i / t, a = Math.pow(2, Math.floor(Math.log2(s)));
    return Math.min(a, 512);
  }
  Mr(t, r, n, i = false, s) {
    if (t.length === 0 || r <= 1) return t;
    const a = this.br(r);
    if (a <= 1) return t;
    const o = this.Sr(t);
    let l = o.Cr.get(a);
    return l !== void 0 || (l = this.yr(t, a, n, i, s, o.Cr), o.Cr.set(a, l)), l;
  }
  kr(t, r, n, i, s = false, a) {
    if (n < 1 || t.length === 0) return t;
    const o = this.Sr(t), l = o.Cr.get(n);
    if (!l) return this.Mr(t, n, i, s, a);
    const u = this.Pr(t, r, n, l, s, i, a);
    return o.Cr.set(n, u), u;
  }
  br(t) {
    if (t <= 2) return 2;
    for (const r of Sz) if (t <= r) return r;
    return 512;
  }
  Tr(t) {
    if (t.length === 0) return 0;
    const r = t[0], n = t[t.length - 1];
    return 31 * t.length + 17 * r.js + 13 * n.js;
  }
  yr(t, r, n, i = false, s, a = /* @__PURE__ */ new Map()) {
    if (r === 2) return this.Rr(t, 2, n, i, s);
    const o = r / 2;
    let l = a.get(o);
    return l || (l = this.yr(t, o, n, i, s, a), a.set(o, l)), this.Dr(l, n, i, s);
  }
  Rr(t, r, n, i = false, s) {
    const a = this.Ir(t, r, n, i, s);
    return this.Vr(a, i);
  }
  Dr(t, r, n = false, i) {
    const s = this.Ir(t, 2, r, n, i);
    return this.Vr(s, n);
  }
  Ir(t, r, n, i = false, s) {
    const a = [];
    for (let o = 0; o < t.length; o += r) if (t.length - o >= r) {
      const l = this.Br(t[o], t[o + 1], n, i, s);
      l.Er = false, a.push(l);
    } else if (a.length === 0) a.push(this.Ar(t[o], true));
    else {
      const l = a[a.length - 1];
      a[a.length - 1] = this.Lr(l, t[o], n, i, s);
    }
    return a;
  }
  zr(t, r) {
    return (t ?? 1) + (r ?? 1);
  }
  Br(t, r, n, i = false, s) {
    if (!i || !n || !s) {
      const u = t.Wt[1] > r.Wt[1] ? t.Wt[1] : r.Wt[1], c = t.Wt[2] < r.Wt[2] ? t.Wt[2] : r.Wt[2];
      return { Or: t.js, Nr: r.js, Fr: t.wt, Wr: r.wt, Hr: t.Wt[0], Ur: u, $r: c, qr: r.Wt[3], jr: this.zr(t.jr, r.jr), Yr: void 0, Er: false };
    }
    const a = n(this.Kr(t, s), this.Kr(r, s)), o = s(a), l = o.length ? o[o.length - 1] : 0;
    return { Or: t.js, Nr: r.js, Fr: t.wt, Wr: r.wt, Hr: t.Wt[0], Ur: Math.max(t.Wt[1], l), $r: Math.min(t.Wt[2], l), qr: l, jr: this.zr(t.jr, r.jr), Yr: a, Er: false };
  }
  Lr(t, r, n, i = false, s) {
    if (!i || !n || !s) return { Or: t.Or, Nr: r.js, Fr: t.Fr, Wr: r.wt, Hr: t.Hr, Ur: t.Ur > r.Wt[1] ? t.Ur : r.Wt[1], $r: t.$r < r.Wt[2] ? t.$r : r.Wt[2], qr: r.Wt[3], jr: t.jr + (r.jr ?? 1), Yr: t.Yr, Er: false };
    const a = t.Yr, o = this.Kr(r, s), l = a ? { data: a, index: t.Or, originalTime: t.Fr, time: t.Fr, priceValues: s(a) } : null, u = l ? n(l, o) : o.data, c = l ? s(u) : o.priceValues, h = c.length ? c[c.length - 1] : 0;
    return { Or: t.Or, Nr: r.js, Fr: t.Fr, Wr: r.wt, Hr: t.Hr, Ur: Math.max(t.Ur, h), $r: Math.min(t.$r, h), qr: h, jr: t.jr + (r.jr ?? 1), Yr: u, Er: false };
  }
  Zr(t, r, n, i, s, a, o = false, l) {
    const u = r === i ? s : t[r];
    if (n - r == 1) return this.Ar(u, true);
    const c = r + 1 === i ? s : t[r + 1];
    let h = this.Br(u, c, a, o, l);
    for (let f = r + 2; f < n; f++) {
      const d = f === i ? s : t[f];
      h = this.Lr(h, d, a, o, l);
    }
    return h;
  }
  Kr(t, r) {
    const n = t.le ?? {};
    return { data: t.le, index: t.js, originalTime: t.Gr, time: t.wt, priceValues: r(n) };
  }
  Xr(t, r = false) {
    const n = r === true, i = !!t.Yr;
    return { js: t.Or, wt: t.Fr, Gr: t.Fr, Wt: [n ? t.qr : t.Hr, t.Ur, t.$r, t.qr], jr: t.jr, le: n ? i ? t.Yr : { wt: t.Fr } : void 0 };
  }
  Vr(t, r = false) {
    return t.map(((n) => this.Xr(n, r)));
  }
  Pr(t, r, n, i, s = false, a, o) {
    if (i.length === 0) return i;
    const l = t.length - 1, u = Math.floor(l / n) * n;
    if (Math.min(u + n, t.length) - u < n && t.length > n) {
      const c = t.slice();
      return c[c.length - 1] = r, this.Mr(c, n, a, s, o);
    }
    if (Math.floor((l - 1) / n) === Math.floor(l / n) || i.length === 1) {
      const c = Math.min(u + n, t.length), h = c - u;
      if (h <= 0) return i;
      const f = h === 1 ? this.Ar(u === l ? r : t[u], true) : this.Zr(t, u, c, l, r, a, s, o);
      return i[i.length - 1] = this.Xr(f, s), i;
    }
    {
      const c = t.slice();
      return c[c.length - 1] = r, this.Mr(c, n, a, s, o);
    }
  }
  Ar(t, r = false) {
    return { Or: t.js, Nr: t.js, Fr: t.wt, Wr: t.wt, Hr: t.Wt[0], Ur: t.Wt[1], $r: t.Wt[2], qr: t.Wt[3], jr: t.jr ?? 1, Yr: t.le, Er: r };
  }
  Sr(t) {
    const r = this.Jr(t), n = this.Tr(t);
    return r.Qr !== n && (r.Cr.clear(), r.Qr = n), r;
  }
  Jr(t) {
    let r = this.wr.get(t);
    return r === void 0 && (r = { Qr: this.Tr(t), Cr: /* @__PURE__ */ new Map() }, this.wr.set(t, r)), r;
  }
}
class Cz extends h1 {
  constructor(t) {
    super(), this.ns = t;
  }
  Qt() {
    return this.ns;
  }
}
const kz = { Bar: (e3, t, r, n) => {
  const i = t.upColor, s = t.downColor, a = C(e3(r, n)), o = lr(a.Wt[0]) <= lr(a.Wt[3]);
  return { th: a.R ?? (o ? i : s) };
}, Candlestick: (e3, t, r, n) => {
  const i = t.upColor, s = t.downColor, a = t.borderUpColor, o = t.borderDownColor, l = t.wickUpColor, u = t.wickDownColor, c = C(e3(r, n)), h = lr(c.Wt[0]) <= lr(c.Wt[3]);
  return { th: c.R ?? (h ? i : s), ih: c.Ht ?? (h ? a : o), sh: c.nh ?? (h ? l : u) };
}, Custom: (e3, t, r, n) => ({ th: C(e3(r, n)).R ?? t.color }), Area: (e3, t, r, n) => {
  const i = C(e3(r, n));
  return { th: i.vt ?? t.lineColor, vt: i.vt ?? t.lineColor, eh: i.eh ?? t.topColor, rh: i.rh ?? t.bottomColor };
}, Baseline: (e3, t, r, n) => {
  const i = C(e3(r, n));
  return { th: i.Wt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor, hh: i.hh ?? t.topLineColor, ah: i.ah ?? t.bottomLineColor, oh: i.oh ?? t.topFillColor1, _h: i._h ?? t.topFillColor2, uh: i.uh ?? t.bottomFillColor1, dh: i.dh ?? t.bottomFillColor2 };
}, Line: (e3, t, r, n) => {
  const i = C(e3(r, n));
  return { th: i.R ?? t.color, vt: i.R ?? t.color };
}, Histogram: (e3, t, r, n) => ({ th: C(e3(r, n)).R ?? t.color }) };
class Iz {
  constructor(t) {
    this.fh = (r, n) => n !== void 0 ? n.Wt : this.ye.qs().ph(r), this.ye = t, this.mh = kz[t.wh()];
  }
  gh(t, r) {
    return this.mh(this.fh, this.ye.N(), t, r);
  }
}
function p1(e3, t, r, n, i = 0, s = t.length) {
  let a = s - i;
  for (; 0 < a; ) {
    const o = a >> 1, l = i + o;
    n(t[l], r) === e3 ? (i = l + 1, a -= o + 1) : a = o;
  }
  return i;
}
const En = p1.bind(null, true), m1 = p1.bind(null, false);
var ig;
(function(e3) {
  e3[e3.NearestLeft = -1] = "NearestLeft", e3[e3.None = 0] = "None", e3[e3.NearestRight = 1] = "NearestRight";
})(ig || (ig = {}));
const nr = 30;
class jz {
  constructor() {
    this.Mh = [], this.bh = /* @__PURE__ */ new Map(), this.Sh = /* @__PURE__ */ new Map(), this.xh = [];
  }
  Ch() {
    return this.yh() > 0 ? this.Mh[this.Mh.length - 1] : null;
  }
  kh() {
    return this.yh() > 0 ? this.Ph(0) : null;
  }
  sn() {
    return this.yh() > 0 ? this.Ph(this.Mh.length - 1) : null;
  }
  yh() {
    return this.Mh.length;
  }
  Gi() {
    return this.yh() === 0;
  }
  Ee(t) {
    return this.Th(t, 0) !== null;
  }
  ph(t) {
    return this.$s(t);
  }
  $s(t, r = 0) {
    const n = this.Th(t, r);
    return n === null ? null : { ...this.Rh(n), js: this.Ph(n) };
  }
  Dh() {
    return this.Mh;
  }
  Ih(t, r, n) {
    if (this.Gi()) return null;
    let i = null;
    for (const s of n) i = hs(i, this.Vh(t, r, s));
    return i;
  }
  ht(t) {
    this.Sh.clear(), this.bh.clear(), this.Mh = t, this.xh = t.map(((r) => r.js));
  }
  Bh() {
    return this.xh;
  }
  Ph(t) {
    return this.Mh[t].js;
  }
  Rh(t) {
    return this.Mh[t];
  }
  Th(t, r) {
    const n = this.Eh(t);
    if (n === null && r !== 0) switch (r) {
      case -1:
        return this.Ah(t);
      case 1:
        return this.Lh(t);
      default:
        throw new TypeError("Unknown search mode");
    }
    return n;
  }
  Ah(t) {
    let r = this.zh(t);
    return r > 0 && (r -= 1), r !== this.Mh.length && this.Ph(r) < t ? r : null;
  }
  Lh(t) {
    const r = this.Oh(t);
    return r !== this.Mh.length && t < this.Ph(r) ? r : null;
  }
  Eh(t) {
    const r = this.zh(t);
    return r === this.Mh.length || t < this.Mh[r].js ? null : r;
  }
  zh(t) {
    return En(this.Mh, t, ((r, n) => r.js < n));
  }
  Oh(t) {
    return m1(this.Mh, t, ((r, n) => r.js > n));
  }
  Nh(t, r, n) {
    let i = null;
    for (let s = t; s < r; s++) {
      const a = this.Mh[s].Wt[n];
      Number.isNaN(a) || (i === null ? i = { Fh: a, Wh: a } : (a < i.Fh && (i.Fh = a), a > i.Wh && (i.Wh = a)));
    }
    return i;
  }
  Vh(t, r, n) {
    if (this.Gi()) return null;
    let i = null;
    const s = C(this.kh()), a = C(this.sn()), o = Math.max(t, s), l = Math.min(r, a), u = Math.ceil(o / nr) * nr, c = Math.max(u, Math.floor(l / nr) * nr);
    {
      const f = this.zh(o), d = this.Oh(Math.min(l, u, r));
      i = hs(i, this.Nh(f, d, n));
    }
    let h = this.bh.get(n);
    h === void 0 && (h = /* @__PURE__ */ new Map(), this.bh.set(n, h));
    for (let f = Math.max(u + 1, o); f < c; f += nr) {
      const d = Math.floor(f / nr);
      let v = h.get(d);
      if (v === void 0) {
        const m = this.zh(d * nr), p = this.Oh((d + 1) * nr - 1);
        v = this.Nh(m, p, n), h.set(d, v);
      }
      i = hs(i, v);
    }
    {
      const f = this.zh(c), d = this.Oh(l);
      i = hs(i, this.Nh(f, d, n));
    }
    return i;
  }
}
function hs(e3, t) {
  return e3 === null ? t : t === null ? e3 : { Fh: Math.min(e3.Fh, t.Fh), Wh: Math.max(e3.Wh, t.Wh) };
}
function eu() {
  return new jz();
}
const xa = { setLineStyle: fr };
class Tz {
  constructor(t) {
    this.Hh = t;
  }
  nt(t, r, n) {
    this.Hh.draw(t, xa);
  }
  Uh(t, r, n) {
    var _a3, _b2;
    (_b2 = (_a3 = this.Hh).drawBackground) == null ? void 0 : _b2.call(_a3, t, xa);
  }
}
class Nz {
  constructor(t) {
    this.Ln = null, this.$h = t;
  }
  Tt() {
    var _a3;
    const t = this.$h.renderer();
    if (t === null) return null;
    if (((_a3 = this.Ln) == null ? void 0 : _a3.qh) === t) return this.Ln.jh;
    const r = new Tz(t);
    return this.Ln = { qh: t, jh: r }, r;
  }
  Yh() {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.$h).zOrder) == null ? void 0 : _b2.call(_a3)) ?? "normal";
  }
}
class g1 {
  constructor(t) {
    this.Kh = null, this.Zh = t;
  }
  Gh() {
    return this.Zh;
  }
  Ws() {
    var _a3, _b2;
    (_b2 = (_a3 = this.Zh).updateAllViews) == null ? void 0 : _b2.call(_a3);
  }
  Ys() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).paneViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.Kh) == null ? void 0 : _c2.qh) === t) return this.Kh.jh;
    const r = t.map(((n) => new Nz(n)));
    return this.Kh = { qh: t, jh: r }, r;
  }
  Qn(t, r) {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.Zh).hitTest) == null ? void 0 : _b2.call(_a3, t, r)) ?? null;
  }
}
let Dz = class extends g1 {
  ds() {
    return [];
  }
};
class Lz {
  constructor(t) {
    this.Hh = t;
  }
  nt(t, r, n) {
    this.Hh.draw(t, xa);
  }
  Uh(t, r, n) {
    var _a3, _b2;
    (_b2 = (_a3 = this.Hh).drawBackground) == null ? void 0 : _b2.call(_a3, t, xa);
  }
}
class sg {
  constructor(t) {
    this.Ln = null, this.$h = t;
  }
  Tt() {
    var _a3;
    const t = this.$h.renderer();
    if (t === null) return null;
    if (((_a3 = this.Ln) == null ? void 0 : _a3.qh) === t) return this.Ln.jh;
    const r = new Lz(t);
    return this.Ln = { qh: t, jh: r }, r;
  }
  Yh() {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.$h).zOrder) == null ? void 0 : _b2.call(_a3)) ?? "normal";
  }
}
function y1(e3) {
  var _a3, _b2, _c2;
  return { ri: e3.text(), Ei: e3.coordinate(), Vi: (_a3 = e3.fixedCoordinate) == null ? void 0 : _a3.call(e3), R: e3.textColor(), G: e3.backColor(), It: ((_b2 = e3.visible) == null ? void 0 : _b2.call(e3)) ?? true, pi: ((_c2 = e3.tickVisible) == null ? void 0 : _c2.call(e3)) ?? true };
}
class Rz {
  constructor(t, r) {
    this.Xt = new c1(), this.Xh = t, this.Jh = r;
  }
  Tt() {
    return this.Xt.ht({ ss: this.Jh.ss(), ...y1(this.Xh) }), this.Xt;
  }
}
class $z extends yo {
  constructor(t, r) {
    super(), this.Xh = t, this.Ki = r;
  }
  Yi(t, r, n) {
    const i = y1(this.Xh);
    n.G = i.G, t.R = i.R;
    const s = 2 / 12 * this.Ki.k();
    n.Ti = s, n.Ri = s, n.Ei = i.Ei, n.Vi = i.Vi, t.ri = i.ri, t.It = i.It, t.pi = i.pi;
  }
}
class zz extends g1 {
  constructor(t, r) {
    super(t), this.Qh = null, this.ta = null, this.ia = null, this.sa = null, this.ye = r;
  }
  fs() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).timeAxisViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.Qh) == null ? void 0 : _c2.qh) === t) return this.Qh.jh;
    const r = this.ye.Qt().Et(), n = t.map(((i) => new Rz(i, r)));
    return this.Qh = { qh: t, jh: n }, n;
  }
  Ks() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).priceAxisViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.ta) == null ? void 0 : _c2.qh) === t) return this.ta.jh;
    const r = this.ye.Ft(), n = t.map(((i) => new $z(i, r)));
    return this.ta = { qh: t, jh: n }, n;
  }
  na() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).priceAxisPaneViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.ia) == null ? void 0 : _c2.qh) === t) return this.ia.jh;
    const r = t.map(((n) => new sg(n)));
    return this.ia = { qh: t, jh: r }, r;
  }
  ea() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).timeAxisPaneViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.sa) == null ? void 0 : _c2.qh) === t) return this.sa.jh;
    const r = t.map(((n) => new sg(n)));
    return this.sa = { qh: t, jh: r }, r;
  }
  ra(t, r) {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.Zh).autoscaleInfo) == null ? void 0 : _b2.call(_a3, t, r)) ?? null;
  }
}
function ru(e3, t, r, n) {
  e3.forEach(((i) => {
    t(i).forEach(((s) => {
      s.Yh() === r && n.push(s);
    }));
  }));
}
function nu(e3) {
  return e3.Ys();
}
function Bz(e3) {
  return e3.na();
}
function Fz(e3) {
  return e3.ea();
}
const Wz = ["Area", "Line", "Baseline"];
class xo extends Cz {
  constructor(t, r, n, i, s) {
    super(t), this.jt = eu(), this._r = new xz(this), this.ha = [], this.aa = new gz(this), this.la = null, this.oa = null, this._a = null, this.ua = [], this.ca = new Az(), this.da = /* @__PURE__ */ new Map(), this.fa = null, this.Ps = n, this.pa = r;
    const a = new Pz(this);
    if (this.gs = [a], this.ur = new v1(a, this, t), Wz.includes(this.pa) && (this.la = new wz(this)), this.va(), this.$h = i(this, this.Qt(), s), this.pa === "Custom") {
      const o = this.$h;
      o.ma && this.wa(o.ma);
    }
  }
  m() {
    this._a !== null && clearTimeout(this._a);
  }
  Oe(t) {
    return this.Ps.priceLineColor || t;
  }
  Ve(t) {
    const r = { Be: true }, n = this.Ft();
    if (this.Qt().Et().Gi() || n.Gi() || this.jt.Gi()) return r;
    const i = this.Qt().Et().Ie(), s = this.Lt();
    if (i === null || s === null) return r;
    let a, o;
    if (t) {
      const h = this.jt.Ch();
      if (h === null) return r;
      a = h, o = h.js;
    } else {
      const h = this.jt.$s(i.bi(), -1);
      if (h === null || (a = this.jt.ph(h.js), a === null)) return r;
      o = h.js;
    }
    const l = a.Wt[3], u = this.ga().gh(o, { Wt: a }), c = n.Nt(l, s.Wt);
    return { Be: false, gt: l, ri: n.Ji(l, s.Wt), Ue: n.Ma(l), $e: n.ba(l, s.Wt), R: u.th, Ei: c, js: o };
  }
  ga() {
    return this.oa !== null || (this.oa = new Iz(this)), this.oa;
  }
  N() {
    return this.Ps;
  }
  cr(t) {
    const r = this.Qt(), { priceScaleId: n, visible: i, priceFormat: s } = t;
    n !== void 0 && n !== this.Ps.priceScaleId && r.Sa(this, n), i !== void 0 && i !== this.Ps.visible && r.xa();
    const a = t.conflationThresholdFactor !== void 0;
    te(this.Ps, t), a && (this.da.clear(), this.Qt().dr()), s !== void 0 && (this.va(), r.Ca()), r.ya(this), r.ka(), this.$h.kt("options");
  }
  ht(t, r) {
    this.jt.ht(t), this.da.clear();
    const n = this.Qt().Et().N();
    n.enableConflation && n.precomputeConflationOnInit && this.Pa(n.precomputeConflationPriority), this.$h.kt("data"), this.la !== null && (r && r.Ta ? this.la.Pe() : t.length === 0 && this.la.ke());
    const i = this.Qt().Kn(this);
    this.Qt().Ra(i), this.Qt().ya(this), this.Qt().ka(), this.Qt().dr();
  }
  Da(t) {
    const r = new Ez(this, t);
    return this.ha.push(r), this.Qt().ya(this), r;
  }
  Ia(t) {
    const r = this.ha.indexOf(t);
    r !== -1 && this.ha.splice(r, 1), this.Qt().ya(this);
  }
  Va() {
    return this.ha;
  }
  wh() {
    return this.pa;
  }
  Lt() {
    const t = this.Ba();
    return t === null ? null : { Wt: t.Wt[3], Ea: t.wt };
  }
  Ba() {
    const t = this.Qt().Et().Ie();
    if (t === null) return null;
    const r = t.Aa();
    return this.jt.$s(r, 1);
  }
  qs() {
    return this.jt;
  }
  wa(t) {
    this.fa = t, this.da.clear();
  }
  La() {
    return !!this.Qt().Et().N().enableConflation && this.za() > 1;
  }
  kr(t) {
    if (!this.La()) return;
    const r = this.za();
    if (!this.da.has(r)) return;
    const n = this.pa === "Custom", i = n && this.fa || void 0, s = n && this.$h.Oa ? (l) => {
      const u = l, c = this.$h.Oa(u);
      return Array.isArray(c) ? c : [typeof c == "number" ? c : 0];
    } : void 0, a = this.ca.kr(this.jt.Dh(), t, r, i, n, s), o = eu();
    o.ht(a), this.da.set(r, o);
  }
  Na() {
    const t = this.Qt().Et().N().enableConflation;
    if (this.pa === "Custom" && this.fa === null) return this.jt;
    if (!t) return this.jt;
    const r = this.za(), n = this.da.get(r);
    return n || (this.Fa(r), this.da.get(r) ?? this.jt);
  }
  Wa(t) {
    const r = this.jt.ph(t);
    return r === null ? null : this.pa === "Bar" || this.pa === "Candlestick" || this.pa === "Custom" ? { Hr: r.Wt[0], Ur: r.Wt[1], $r: r.Wt[2], qr: r.Wt[3] } : r.Wt[3];
  }
  Ha(t) {
    const r = [];
    ru(this.ua, nu, "top", r);
    const n = this.la;
    return n !== null && n.It() && (this._a === null && n.Re() && (this._a = setTimeout((() => {
      this._a = null, this.Qt().Ua();
    }), 0)), n.Te(), r.unshift(n)), r;
  }
  Ys() {
    const t = [];
    this.$a() || t.push(this.aa), t.push(this.$h, this._r);
    const r = this.ha.map(((n) => n.pr()));
    return t.push(...r), ru(this.ua, nu, "normal", t), t;
  }
  qa() {
    return this.ja(nu, "bottom");
  }
  Ya(t) {
    return this.ja(Bz, t);
  }
  Ka(t) {
    return this.ja(Fz, t);
  }
  Za(t, r) {
    return this.ua.map(((n) => n.Qn(t, r))).filter(((n) => n !== null));
  }
  ds() {
    return [this.ur, ...this.ha.map(((t) => t.vr()))];
  }
  Ks(t, r) {
    if (r !== this.hs && !this.$a()) return [];
    const n = [...this.gs];
    for (const i of this.ha) n.push(i.mr());
    return this.ua.forEach(((i) => {
      n.push(...i.Ks());
    })), n;
  }
  fs() {
    const t = [];
    return this.ua.forEach(((r) => {
      t.push(...r.fs());
    })), t;
  }
  ra(t, r) {
    if (this.Ps.autoscaleInfoProvider !== void 0) {
      const n = this.Ps.autoscaleInfoProvider((() => {
        const i = this.Ga(t, r);
        return i === null ? null : i.tr();
      }));
      return wa.ir(n);
    }
    return this.Ga(t, r);
  }
  qh() {
    const t = this.Ps.priceFormat;
    return t.base ?? 1 / t.minMove;
  }
  Xa() {
    return this.Ja;
  }
  Ws() {
    var _a3;
    this.$h.kt();
    for (const t of this.gs) t.kt();
    for (const t of this.ha) t.kt();
    this._r.kt(), this.aa.kt(), (_a3 = this.la) == null ? void 0 : _a3.kt(), this.ua.forEach(((t) => t.Ws()));
  }
  Ft() {
    return C(super.Ft());
  }
  At(t) {
    if (!((this.pa === "Line" || this.pa === "Area" || this.pa === "Baseline") && this.Ps.crosshairMarkerVisible)) return null;
    const r = this.jt.ph(t);
    return r === null ? null : { gt: r.Wt[3], ft: this.Qa(), Ht: this.tl(), Ot: this.il(), zt: this.sl(t) };
  }
  Ne() {
    return this.Ps.title;
  }
  It() {
    return this.Ps.visible;
  }
  nl(t) {
    this.ua.push(new zz(t, this));
  }
  el(t) {
    this.ua = this.ua.filter(((r) => r.Gh() !== t));
  }
  rl() {
    if (this.pa === "Custom") return (t) => this.$h.Oa(t);
  }
  hl() {
    if (this.pa === "Custom") return (t) => this.$h.al(t);
  }
  ll() {
    return this.jt.Bh();
  }
  $a() {
    return !bo(this.Ft().ol());
  }
  Ga(t, r) {
    if (!Oi(t) || !Oi(r) || this.jt.Gi()) return null;
    const n = this.pa === "Line" || this.pa === "Area" || this.pa === "Baseline" || this.pa === "Histogram" ? [3] : [2, 1], i = this.jt.Ih(t, r, n);
    let s = i !== null ? new zt(i.Fh, i.Wh) : null, a = null;
    if (this.wh() === "Histogram") {
      const o = this.Ps.base, l = new zt(o, o);
      s = s !== null ? s.Sn(l) : l;
    }
    return this.ua.forEach(((o) => {
      const l = o.ra(t, r);
      if (l == null ? void 0 : l.priceRange) {
        const u = new zt(l.priceRange.minValue, l.priceRange.maxValue);
        s = s !== null ? s.Sn(u) : u;
      }
      (l == null ? void 0 : l.margins) && (a = l.margins);
    })), new wa(s, a);
  }
  Qa() {
    switch (this.pa) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.Ps.crosshairMarkerRadius;
    }
    return 0;
  }
  tl() {
    switch (this.pa) {
      case "Line":
      case "Area":
      case "Baseline": {
        const t = this.Ps.crosshairMarkerBorderColor;
        if (t.length !== 0) return t;
      }
    }
    return null;
  }
  il() {
    switch (this.pa) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.Ps.crosshairMarkerBorderWidth;
    }
    return 0;
  }
  sl(t) {
    switch (this.pa) {
      case "Line":
      case "Area":
      case "Baseline": {
        const r = this.Ps.crosshairMarkerBackgroundColor;
        if (r.length !== 0) return r;
      }
    }
    return this.ga().gh(t).th;
  }
  va() {
    switch (this.Ps.priceFormat.type) {
      case "custom": {
        const t = this.Ps.priceFormat.formatter;
        this.Ja = { format: t, formatTickmarks: this.Ps.priceFormat.tickmarksFormatter ?? ((r) => r.map(t)) };
        break;
      }
      case "volume":
        this.Ja = new dz(this.Ps.priceFormat.precision);
        break;
      case "percent":
        this.Ja = new d1(this.Ps.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.Ps.priceFormat.precision);
        this.Ja = new wo(t, this.Ps.priceFormat.minMove * t);
      }
    }
    this.hs !== null && this.hs._l();
  }
  ja(t, r) {
    const n = [];
    return ru(this.ua, t, r, n), n;
  }
  za() {
    const { ul: t, cl: r, dl: n } = this.fl();
    return this.ca.gr(t, r, n);
  }
  fl() {
    const t = this.Qt().Et(), r = t.ul(), n = window.devicePixelRatio || 1, i = t.N().conflationThresholdFactor;
    return { ul: r, cl: n, dl: this.Ps.conflationThresholdFactor ?? i ?? 1 };
  }
  pl(t) {
    const r = this.jt.Dh();
    let n;
    if (this.pa === "Custom" && this.fa !== null) {
      const s = this.rl();
      if (!s) throw new Error(_z);
      n = this.ca.Mr(r, t, this.fa, true, ((a) => s(a)));
    } else n = this.ca.Mr(r, t);
    const i = eu();
    return i.ht(n), i;
  }
  Fa(t) {
    const r = this.pl(t);
    this.da.set(t, r);
  }
  Pa(t) {
    var _a3;
    if (this.pa === "Custom" && (this.fa === null || !this.rl())) return;
    this.da.clear();
    const r = this.Qt().Et().vl();
    for (const n of r) {
      const i = () => {
        this.ml(n);
      }, s = typeof window == "object" && window || typeof self == "object" && self;
      ((_a3 = s == null ? void 0 : s.gl) == null ? void 0 : _a3.wl) ? s.gl.wl((() => {
        i();
      }), { Ml: t }) : Promise.resolve().then((() => i()));
    }
  }
  ml(t) {
    if (this.da.has(t) || this.jt.Dh().length === 0) return;
    const r = this.pl(t);
    this.da.set(t, r);
  }
}
const qz = [3], Kz = [0, 1, 2, 3];
class Uz {
  constructor(t) {
    this.Ps = t;
  }
  bl(t, r, n) {
    let i = t;
    if (this.Ps.mode === 0) return i;
    const s = n.Rs(), a = s.Lt();
    if (a === null) return i;
    const o = s.Nt(t, a), l = n.Sl().filter(((c) => c instanceof xo)).reduce(((c, h) => {
      if (n.Zn(h) || !h.It()) return c;
      const f = h.Ft(), d = h.qs();
      if (f.Gi() || !d.Ee(r)) return c;
      const v = d.ph(r);
      if (v === null) return c;
      const m = lr(h.Lt()), p = this.Ps.mode === 3 ? Kz : qz;
      return c.concat(p.map(((y) => f.Nt(v.Wt[y], m.Wt))));
    }), []);
    if (l.length === 0) return i;
    l.sort(((c, h) => Math.abs(c - o) - Math.abs(h - o)));
    const u = l[0];
    return i = s.Ds(u, a), i;
  }
}
function mn(e3, t, r) {
  return Math.min(Math.max(e3, t), r);
}
function fs(e3, t, r) {
  return t - e3 <= r;
}
function Gh(e3) {
  const t = Math.ceil(e3);
  return t % 2 == 0 ? t - 1 : t;
}
class Vz extends er {
  constructor() {
    super(...arguments), this.jt = null;
  }
  ht(t) {
    this.jt = t;
  }
  et({ context: t, bitmapSize: r, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.jt === null) return;
    const s = Math.max(1, Math.floor(n));
    t.lineWidth = s, (function(a, o) {
      a.save(), a.lineWidth % 2 && a.translate(0.5, 0.5), o(), a.restore();
    })(t, (() => {
      const a = C(this.jt);
      if (a.xl) {
        t.strokeStyle = a.Cl, fr(t, a.yl), t.beginPath();
        for (const o of a.kl) {
          const l = Math.round(o.Pl * n);
          t.moveTo(l, -s), t.lineTo(l, r.height + s);
        }
        t.stroke();
      }
      if (a.Tl) {
        t.strokeStyle = a.Rl, fr(t, a.Dl), t.beginPath();
        for (const o of a.Il) {
          const l = Math.round(o.Pl * i);
          t.moveTo(-s, l), t.lineTo(r.width + s, l);
        }
        t.stroke();
      }
    }));
  }
}
class Yz {
  constructor(t) {
    this.Xt = new Vz(), this.xt = true, this.yt = t;
  }
  kt() {
    this.xt = true;
  }
  Tt() {
    if (this.xt) {
      const t = this.yt.Qt().N().grid, r = { Tl: t.horzLines.visible, xl: t.vertLines.visible, Rl: t.horzLines.color, Cl: t.vertLines.color, Dl: t.horzLines.style, yl: t.vertLines.style, Il: this.yt.Rs().Vl(), kl: (this.yt.Qt().Et().Vl() || []).map(((n) => ({ Pl: n.coord }))) };
      this.Xt.ht(r), this.xt = false;
    }
    return this.Xt;
  }
}
class Hz {
  constructor(t) {
    this.$h = new Yz(t);
  }
  pr() {
    return this.$h;
  }
}
const iu = { Bl: 4, El: 1e-4 };
function hn(e3, t) {
  const r = 100 * (e3 - t) / t;
  return t < 0 ? -r : r;
}
function Gz(e3, t) {
  const r = hn(e3.Ze(), t), n = hn(e3.Ge(), t);
  return new zt(r, n);
}
function si(e3, t) {
  const r = 100 * (e3 - t) / t + 100;
  return t < 0 ? -r : r;
}
function Xz(e3, t) {
  const r = si(e3.Ze(), t), n = si(e3.Ge(), t);
  return new zt(r, n);
}
function Pa(e3, t) {
  const r = Math.abs(e3);
  if (r < 1e-15) return 0;
  const n = Math.log10(r + t.El) + t.Bl;
  return e3 < 0 ? -n : n;
}
function ai(e3, t) {
  const r = Math.abs(e3);
  if (r < 1e-15) return 0;
  const n = Math.pow(10, r - t.Bl) - t.El;
  return e3 < 0 ? -n : n;
}
function Zn(e3, t) {
  if (e3 === null) return null;
  const r = Pa(e3.Ze(), t), n = Pa(e3.Ge(), t);
  return new zt(r, n);
}
function fn(e3, t) {
  if (e3 === null) return null;
  const r = ai(e3.Ze(), t), n = ai(e3.Ge(), t);
  return new zt(r, n);
}
function su(e3) {
  if (e3 === null) return iu;
  const t = Math.abs(e3.Ge() - e3.Ze());
  if (t >= 1 || t < 1e-15) return iu;
  const r = Math.ceil(Math.abs(Math.log10(t))), n = iu.Bl + r;
  return { Bl: n, El: 1 / Math.pow(10, n) };
}
class au {
  constructor(t, r) {
    if (this.Al = t, this.Ll = r, (function(n) {
      if (n < 0) return false;
      if (n > 1e18) return true;
      for (let i = n; i > 1; i /= 10) if (i % 10 != 0) return false;
      return true;
    })(this.Al)) this.zl = [2, 2.5, 2];
    else {
      this.zl = [];
      for (let n = this.Al; n !== 1; ) {
        if (n % 2 == 0) this.zl.push(2), n /= 2;
        else {
          if (n % 5 != 0) throw new Error("unexpected base");
          this.zl.push(2, 2.5), n /= 5;
        }
        if (this.zl.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  Ol(t, r, n) {
    const i = this.Al === 0 ? 0 : 1 / this.Al;
    let s = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - r)))), a = 0, o = this.Ll[0];
    for (; ; ) {
      const h = fs(s, i, 1e-14) && s > i + 1e-14, f = fs(s, n * o, 1e-14), d = fs(s, 1, 1e-14);
      if (!(h && f && d)) break;
      s /= o, o = this.Ll[++a % this.Ll.length];
    }
    if (s <= i + 1e-14 && (s = i), s = Math.max(1, s), this.zl.length > 0 && (l = s, u = 1, c = 1e-14, Math.abs(l - u) < c)) for (a = 0, o = this.zl[0]; fs(s, n * o, 1e-14) && s > i + 1e-14; ) s /= o, o = this.zl[++a % this.zl.length];
    var l, u, c;
    return s;
  }
}
class ag {
  constructor(t, r, n, i) {
    this.Nl = [], this.Ki = t, this.Al = r, this.Fl = n, this.Wl = i;
  }
  Ol(t, r) {
    if (t < r) throw new Error("high < low");
    const n = this.Ki.$t(), i = (t - r) * this.Hl() / n, s = new au(this.Al, [2, 2.5, 2]), a = new au(this.Al, [2, 2, 2.5]), o = new au(this.Al, [2.5, 2, 2]), l = [];
    return l.push(s.Ol(t, r, i), a.Ol(t, r, i), o.Ol(t, r, i)), (function(u) {
      if (u.length < 1) throw Error("array is empty");
      let c = u[0];
      for (let h = 1; h < u.length; ++h) u[h] < c && (c = u[h]);
      return c;
    })(l);
  }
  Ul() {
    const t = this.Ki, r = t.Lt();
    if (r === null) return void (this.Nl = []);
    const n = t.$t(), i = this.Fl(n - 1, r), s = this.Fl(0, r), a = this.Ki.N().entireTextOnly ? this.$l() / 2 : 0, o = a, l = n - 1 - a, u = Math.max(i, s), c = Math.min(i, s);
    if (u === c) return void (this.Nl = []);
    const h = this.Ol(u, c);
    if (this.ql(r, h, u, c, o, l), t.jl() && this.Yl(h, c, u)) {
      const v = this.Ki.Kl();
      this.Zl(r, h, o, l, v, 2 * v);
    }
    const f = this.Nl.map(((v) => v.Gl)), d = this.Ki.Xl(f);
    for (let v = 0; v < this.Nl.length; v++) this.Nl[v].Jl = d[v];
  }
  Vl() {
    return this.Nl;
  }
  $l() {
    return this.Ki.k();
  }
  Hl() {
    return Math.ceil(2.5 * this.$l());
  }
  ql(t, r, n, i, s, a) {
    const o = this.Nl, l = this.Ki;
    let u = n % r;
    u += u < 0 ? r : 0;
    const c = n >= i ? 1 : -1;
    let h = null, f = 0;
    for (let d = n - u; d > i; d -= r) {
      const v = this.Wl(d, t, true);
      h !== null && Math.abs(v - h) < this.Hl() || v < s || v > a || (f < o.length ? (o[f].Pl = v, o[f].Jl = l.Ql(d), o[f].Gl = d) : o.push({ Pl: v, Jl: l.Ql(d), Gl: d }), f++, h = v, l.io() && (r = this.Ol(d * c, i)));
    }
    o.length = f;
  }
  Zl(t, r, n, i, s, a) {
    const o = this.Nl, l = this.so(t, n, s, a), u = this.so(t, i, -a, -s), c = this.Wl(0, t, true) - this.Wl(r, t, true);
    o.length > 0 && o[0].Pl - l.Pl < c / 2 && o.shift(), o.length > 0 && u.Pl - o[o.length - 1].Pl < c / 2 && o.pop(), o.unshift(l), o.push(u);
  }
  so(t, r, n, i) {
    const s = (n + i) / 2, a = this.Fl(r + n, t), o = this.Fl(r + i, t), l = Math.min(a, o), u = Math.max(a, o), c = Math.max(0.1, this.Ol(u, l)), h = this.Fl(r + s, t), f = h - h % c, d = this.Wl(f, t, true);
    return { Jl: this.Ki.Ql(f), Pl: d, Gl: f };
  }
  Yl(t, r, n) {
    let i = lr(this.Ki.er());
    return this.Ki.io() && (i = fn(i, this.Ki.no())), i.Ze() - r < t && n - i.Ge() < t;
  }
}
function b1(e3) {
  return e3.slice().sort(((t, r) => C(t._s()) - C(r._s())));
}
var og;
(function(e3) {
  e3[e3.Normal = 0] = "Normal", e3[e3.Logarithmic = 1] = "Logarithmic", e3[e3.Percentage = 2] = "Percentage", e3[e3.IndexedTo100 = 3] = "IndexedTo100";
})(og || (og = {}));
const lg = new d1(), ug = new wo(100, 1);
class Jz {
  constructor(t, r, n, i, s) {
    this.eo = 0, this.ro = null, this.sr = null, this.ho = null, this.ao = { lo: false, oo: null }, this._o = false, this.uo = 0, this.co = 0, this.do = new ut(), this.fo = new ut(), this.po = [], this.vo = null, this.mo = null, this.wo = null, this.Mo = null, this.bo = null, this.Ja = ug, this.So = su(null), this.xo = t, this.Ps = r, this.Co = n, this.yo = i, this.ko = s, this.Po = new ag(this, 100, this.To.bind(this), this.Ro.bind(this));
  }
  ol() {
    return this.xo;
  }
  N() {
    return this.Ps;
  }
  cr(t) {
    if (te(this.Ps, t), this._l(), t.mode !== void 0 && this.Do({ ae: t.mode }), t.scaleMargins !== void 0) {
      const r = Ht(t.scaleMargins.top), n = Ht(t.scaleMargins.bottom);
      if (r < 0 || r > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${r}`);
      if (n < 0 || n > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
      if (r + n > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${r + n}`);
      this.Io(), this.wo = null;
    }
  }
  Vo() {
    return this.Ps.autoScale;
  }
  Bo() {
    return this._o;
  }
  io() {
    return this.Ps.mode === 1;
  }
  He() {
    return this.Ps.mode === 2;
  }
  Eo() {
    return this.Ps.mode === 3;
  }
  no() {
    return this.So;
  }
  ae() {
    return { ln: this.Ps.autoScale, Ao: this.Ps.invertScale, ae: this.Ps.mode };
  }
  Do(t) {
    const r = this.ae();
    let n = null;
    t.ln !== void 0 && (this.Ps.autoScale = t.ln), t.ae !== void 0 && (this.Ps.mode = t.ae, t.ae !== 2 && t.ae !== 3 || (this.Ps.autoScale = true), this.ao.lo = false), r.ae === 1 && t.ae !== r.ae && ((function(s, a) {
      if (s === null) return false;
      const o = ai(s.Ze(), a), l = ai(s.Ge(), a);
      return isFinite(o) && isFinite(l);
    })(this.sr, this.So) ? (n = fn(this.sr, this.So), n !== null && this.Lo(n)) : this.Ps.autoScale = true), t.ae === 1 && t.ae !== r.ae && (n = Zn(this.sr, this.So), n !== null && this.Lo(n));
    const i = r.ae !== this.Ps.mode;
    i && (r.ae === 2 || this.He()) && this._l(), i && (r.ae === 3 || this.Eo()) && this._l(), t.Ao !== void 0 && r.Ao !== t.Ao && (this.Ps.invertScale = t.Ao, this.zo()), this.fo.p(r, this.ae());
  }
  Oo() {
    return this.fo;
  }
  k() {
    return this.Co.fontSize;
  }
  $t() {
    return this.eo;
  }
  No(t) {
    this.eo !== t && (this.eo = t, this.Io(), this.wo = null);
  }
  Fo() {
    if (this.ro) return this.ro;
    const t = this.$t() - this.Wo() - this.Ho();
    return this.ro = t, t;
  }
  er() {
    return this.Uo(), this.sr;
  }
  Lo(t, r) {
    const n = this.sr;
    (r || n === null && t !== null || n !== null && !n.Ye(t)) && (this.wo = null, this.sr = t);
  }
  $o(t) {
    this.Lo(t), this.qo(t !== null);
  }
  Gi() {
    return this.Uo(), this.eo === 0 || !this.sr || this.sr.Gi();
  }
  jo(t) {
    return this.Ao() ? t : this.$t() - 1 - t;
  }
  Nt(t, r) {
    return this.He() ? t = hn(t, r) : this.Eo() && (t = si(t, r)), this.Ro(t, r);
  }
  Yo(t, r, n) {
    this.Uo();
    const i = this.Ho(), s = C(this.er()), a = s.Ze(), o = s.Ge(), l = this.Fo() - 1, u = this.Ao(), c = l / (o - a), h = n === void 0 ? 0 : n.from, f = n === void 0 ? t.length : n.to, d = this.Ko();
    for (let v = h; v < f; v++) {
      const m = t[v], p = m.gt;
      if (isNaN(p)) continue;
      let y = p;
      d !== null && (y = d(m.gt, r));
      const b = i + c * (y - a), w = u ? b : this.eo - 1 - b;
      m.ut = w;
    }
  }
  Zo(t, r, n) {
    this.Uo();
    const i = this.Ho(), s = C(this.er()), a = s.Ze(), o = s.Ge(), l = this.Fo() - 1, u = this.Ao(), c = l / (o - a), h = n === void 0 ? 0 : n.from, f = n === void 0 ? t.length : n.to, d = this.Ko();
    for (let v = h; v < f; v++) {
      const m = t[v];
      let p = m.Hr, y = m.Ur, b = m.$r, w = m.qr;
      d !== null && (p = d(m.Hr, r), y = d(m.Ur, r), b = d(m.$r, r), w = d(m.qr, r));
      let x = i + c * (p - a), P = u ? x : this.eo - 1 - x;
      m.Go = P, x = i + c * (y - a), P = u ? x : this.eo - 1 - x, m.Xo = P, x = i + c * (b - a), P = u ? x : this.eo - 1 - x, m.Jo = P, x = i + c * (w - a), P = u ? x : this.eo - 1 - x, m.Qo = P;
    }
  }
  Ds(t, r) {
    const n = this.To(t, r);
    return this.t_(n, r);
  }
  t_(t, r) {
    let n = t;
    return this.He() ? n = (function(i, s) {
      return s < 0 && (i = -i), i / 100 * s + s;
    })(n, r) : this.Eo() && (n = (function(i, s) {
      return i -= 100, s < 0 && (i = -i), i / 100 * s + s;
    })(n, r)), n;
  }
  Sl() {
    return this.po;
  }
  Dt() {
    return this.mo || (this.mo = b1(this.po)), this.mo;
  }
  i_(t) {
    this.po.indexOf(t) === -1 && (this.po.push(t), this._l(), this.s_());
  }
  n_(t) {
    const r = this.po.indexOf(t);
    if (r === -1) throw new Error("source is not attached to scale");
    this.po.splice(r, 1), this.po.length === 0 && (this.Do({ ln: true }), this.Lo(null)), this._l(), this.s_();
  }
  Lt() {
    let t = null;
    for (const r of this.po) {
      const n = r.Lt();
      n !== null && (t === null || n.Ea < t.Ea) && (t = n);
    }
    return t === null ? null : t.Wt;
  }
  Ao() {
    return this.Ps.invertScale;
  }
  Vl() {
    const t = this.Lt() === null;
    if (this.wo !== null && (t || this.wo.e_ === t)) return this.wo.Vl;
    this.Po.Ul();
    const r = this.Po.Vl();
    return this.wo = { Vl: r, e_: t }, this.do.p(), r;
  }
  r_() {
    return this.do;
  }
  h_(t) {
    this.He() || this.Eo() || this.Mo === null && this.ho === null && (this.Gi() || (this.Mo = this.eo - t, this.ho = C(this.er()).Ke()));
  }
  a_(t) {
    if (this.He() || this.Eo() || this.Mo === null) return;
    this.Do({ ln: false }), (t = this.eo - t) < 0 && (t = 0);
    let r = (this.Mo + 0.2 * (this.eo - 1)) / (t + 0.2 * (this.eo - 1));
    const n = C(this.ho).Ke();
    r = Math.max(r, 0.1), n.Je(r), this.Lo(n);
  }
  l_() {
    this.He() || this.Eo() || (this.Mo = null, this.ho = null);
  }
  o_(t) {
    this.Vo() || this.bo === null && this.ho === null && (this.Gi() || (this.bo = t, this.ho = C(this.er()).Ke()));
  }
  __(t) {
    if (this.Vo() || this.bo === null) return;
    const r = C(this.er()).Xe() / (this.Fo() - 1);
    let n = t - this.bo;
    this.Ao() && (n *= -1);
    const i = n * r, s = C(this.ho).Ke();
    s.Qe(i), this.Lo(s, true), this.wo = null;
  }
  u_() {
    this.Vo() || this.bo !== null && (this.bo = null, this.ho = null);
  }
  Xa() {
    return this.Ja || this._l(), this.Ja;
  }
  Ji(t, r) {
    switch (this.Ps.mode) {
      case 2:
        return this.c_(hn(t, r));
      case 3:
        return this.Xa().format(si(t, r));
      default:
        return this.lr(t);
    }
  }
  Ql(t) {
    switch (this.Ps.mode) {
      case 2:
        return this.c_(t);
      case 3:
        return this.Xa().format(t);
      default:
        return this.lr(t);
    }
  }
  Xl(t) {
    switch (this.Ps.mode) {
      case 2:
        return this.d_(t);
      case 3:
        return this.Xa().formatTickmarks(t);
      default:
        return this.f_(t);
    }
  }
  Ma(t) {
    return this.lr(t, C(this.vo).Xa());
  }
  ba(t, r) {
    return t = hn(t, r), this.c_(t, lg);
  }
  p_() {
    return this.po;
  }
  v_(t) {
    this.ao = { oo: t, lo: false };
  }
  Ws() {
    this.po.forEach(((t) => t.Ws()));
  }
  jl() {
    return this.Ps.ensureEdgeTickMarksVisible && this.Vo();
  }
  Kl() {
    return this.k() / 2;
  }
  _l() {
    this.wo = null;
    let t = 1 / 0;
    this.vo = null;
    for (const n of this.po) n._s() < t && (t = n._s(), this.vo = n);
    let r = 100;
    this.vo !== null && (r = Math.round(this.vo.qh())), this.Ja = ug, this.He() ? (this.Ja = lg, r = 100) : this.Eo() ? (this.Ja = new wo(100, 1), r = 100) : this.vo !== null && (this.Ja = this.vo.Xa()), this.Po = new ag(this, r, this.To.bind(this), this.Ro.bind(this)), this.Po.Ul();
  }
  s_() {
    this.mo = null;
  }
  m_() {
    return this.vo === null || this.He() || this.Eo() ? 1 : 1 / this.vo.qh();
  }
  Xi() {
    return this.ko;
  }
  qo(t) {
    this._o = t;
  }
  Wo() {
    return this.Ao() ? this.Ps.scaleMargins.bottom * this.$t() + this.co : this.Ps.scaleMargins.top * this.$t() + this.uo;
  }
  Ho() {
    return this.Ao() ? this.Ps.scaleMargins.top * this.$t() + this.uo : this.Ps.scaleMargins.bottom * this.$t() + this.co;
  }
  Uo() {
    this.ao.lo || (this.ao.lo = true, this.w_());
  }
  Io() {
    this.ro = null;
  }
  Ro(t, r) {
    if (this.Uo(), this.Gi()) return 0;
    t = this.io() && t ? Pa(t, this.So) : t;
    const n = C(this.er()), i = this.Ho() + (this.Fo() - 1) * (t - n.Ze()) / n.Xe();
    return this.jo(i);
  }
  To(t, r) {
    if (this.Uo(), this.Gi()) return 0;
    const n = this.jo(t), i = C(this.er()), s = i.Ze() + i.Xe() * ((n - this.Ho()) / (this.Fo() - 1));
    return this.io() ? ai(s, this.So) : s;
  }
  zo() {
    this.wo = null, this.Po.Ul();
  }
  w_() {
    if (this.Bo() && !this.Vo()) return;
    const t = this.ao.oo;
    if (t === null) return;
    let r = null;
    const n = this.p_();
    let i = 0, s = 0;
    for (const l of n) {
      if (!l.It()) continue;
      const u = l.Lt();
      if (u === null) continue;
      const c = l.ra(t.Aa(), t.bi());
      let h = c && c.er();
      if (h !== null) {
        switch (this.Ps.mode) {
          case 1:
            h = Zn(h, this.So);
            break;
          case 2:
            h = Gz(h, u.Wt);
            break;
          case 3:
            h = Xz(h, u.Wt);
        }
        if (r = r === null ? h : r.Sn(C(h)), c !== null) {
          const f = c.rr();
          f !== null && (i = Math.max(i, f.above), s = Math.max(s, f.below));
        }
      }
    }
    if (this.jl() && (i = Math.max(i, this.Kl()), s = Math.max(s, this.Kl())), i === this.uo && s === this.co || (this.uo = i, this.co = s, this.wo = null, this.Io()), r !== null) {
      if (r.Ze() === r.Ge()) {
        const l = 5 * this.m_();
        this.io() && (r = fn(r, this.So)), r = new zt(r.Ze() - l, r.Ge() + l), this.io() && (r = Zn(r, this.So));
      }
      if (this.io()) {
        const l = fn(r, this.So), u = su(l);
        if (a = u, o = this.So, a.Bl !== o.Bl || a.El !== o.El) {
          const c = this.ho !== null ? fn(this.ho, this.So) : null;
          this.So = u, r = Zn(l, u), c !== null && (this.ho = Zn(c, u));
        }
      }
      this.Lo(r);
    } else this.sr === null && (this.Lo(new zt(-0.5, 0.5)), this.So = su(null));
    var a, o;
  }
  Ko() {
    return this.He() ? hn : this.Eo() ? si : this.io() ? (t) => Pa(t, this.So) : null;
  }
  g_(t, r, n) {
    return r === void 0 ? (n === void 0 && (n = this.Xa()), n.format(t)) : r(t);
  }
  M_(t, r, n) {
    return r === void 0 ? (n === void 0 && (n = this.Xa()), n.formatTickmarks(t)) : r(t);
  }
  lr(t, r) {
    return this.g_(t, this.yo.priceFormatter, r);
  }
  f_(t, r) {
    const n = this.yo.priceFormatter;
    return this.M_(t, this.yo.tickmarksPriceFormatter ?? (n ? (i) => i.map(n) : void 0), r);
  }
  c_(t, r) {
    return this.g_(t, this.yo.percentageFormatter, r);
  }
  d_(t, r) {
    const n = this.yo.percentageFormatter;
    return this.M_(t, this.yo.tickmarksPercentageFormatter ?? (n ? (i) => i.map(n) : void 0), r);
  }
}
function cg(e3) {
  return e3 instanceof xo;
}
class hg {
  constructor(t, r) {
    this.po = [], this.b_ = /* @__PURE__ */ new Map(), this.eo = 0, this.S_ = 0, this.x_ = 1, this.mo = null, this.C_ = false, this.y_ = new ut(), this.ua = [], this.Jh = t, this.ns = r, this.k_ = new Hz(this);
    const n = r.N();
    this.P_ = this.T_("left", n.leftPriceScale), this.R_ = this.T_("right", n.rightPriceScale), this.P_.Oo().i(this.D_.bind(this, this.P_), this), this.R_.Oo().i(this.D_.bind(this, this.R_), this), this.I_(n);
  }
  I_(t) {
    if (t.leftPriceScale && this.P_.cr(t.leftPriceScale), t.rightPriceScale && this.R_.cr(t.rightPriceScale), t.localization && (this.P_._l(), this.R_._l()), t.overlayPriceScales) {
      const r = Array.from(this.b_.values());
      for (const n of r) {
        const i = C(n[0].Ft());
        i.cr(t.overlayPriceScales), t.localization && i._l();
      }
    }
  }
  V_(t) {
    switch (t) {
      case "left":
        return this.P_;
      case "right":
        return this.R_;
    }
    return this.b_.has(t) ? Ht(this.b_.get(t))[0].Ft() : null;
  }
  m() {
    this.Qt().B_().u(this), this.P_.Oo().u(this), this.R_.Oo().u(this), this.po.forEach(((t) => {
      t.m && t.m();
    })), this.ua = this.ua.filter(((t) => {
      const r = t.Gh();
      return r.detached && r.detached(), false;
    })), this.y_.p();
  }
  E_() {
    return this.x_;
  }
  A_(t) {
    this.x_ = t;
  }
  Qt() {
    return this.ns;
  }
  ss() {
    return this.S_;
  }
  $t() {
    return this.eo;
  }
  L_(t) {
    this.S_ = t, this.z_();
  }
  No(t) {
    this.eo = t, this.P_.No(t), this.R_.No(t), this.po.forEach(((r) => {
      if (this.Zn(r)) {
        const n = r.Ft();
        n !== null && n.No(t);
      }
    })), this.z_();
  }
  O_(t) {
    this.C_ = t;
  }
  N_() {
    return this.C_;
  }
  F_() {
    return this.po.filter(cg);
  }
  Sl() {
    return this.po;
  }
  Zn(t) {
    const r = t.Ft();
    return r === null || this.P_ !== r && this.R_ !== r;
  }
  i_(t, r, n) {
    this.W_(t, r, n ? t._s() : this.po.length);
  }
  n_(t, r) {
    const n = this.po.indexOf(t);
    Et(n !== -1, "removeDataSource: invalid data source"), this.po.splice(n, 1), r || this.po.forEach(((a, o) => a.us(o)));
    const i = C(t.Ft()).ol();
    if (this.b_.has(i)) {
      const a = Ht(this.b_.get(i)), o = a.indexOf(t);
      o !== -1 && (a.splice(o, 1), a.length === 0 && this.b_.delete(i));
    }
    const s = t.Ft();
    s && s.Sl().indexOf(t) >= 0 && (s.n_(t), this.H_(s)), this.mo = null;
  }
  Xn(t) {
    return t === this.P_ ? "left" : t === this.R_ ? "right" : "overlay";
  }
  U_() {
    return this.P_;
  }
  q_() {
    return this.R_;
  }
  j_(t, r) {
    t.h_(r);
  }
  Y_(t, r) {
    t.a_(r), this.z_();
  }
  K_(t) {
    t.l_();
  }
  Z_(t, r) {
    t.o_(r);
  }
  G_(t, r) {
    t.__(r), this.z_();
  }
  X_(t) {
    t.u_();
  }
  z_() {
    this.po.forEach(((t) => {
      t.Ws();
    }));
  }
  Rs() {
    let t = null;
    return this.ns.N().rightPriceScale.visible && this.R_.Sl().length !== 0 ? t = this.R_ : this.ns.N().leftPriceScale.visible && this.P_.Sl().length !== 0 ? t = this.P_ : this.po.length !== 0 && (t = this.po[0].Ft()), t === null && (t = this.R_), t;
  }
  Gn() {
    let t = null;
    return this.ns.N().rightPriceScale.visible ? t = this.R_ : this.ns.N().leftPriceScale.visible && (t = this.P_), t;
  }
  H_(t) {
    t !== null && t.Vo() && this.J_(t);
  }
  Q_(t) {
    const r = this.Jh.Ie();
    t.Do({ ln: true }), r !== null && t.v_(r), this.z_();
  }
  tu() {
    this.J_(this.P_), this.J_(this.R_);
  }
  iu() {
    this.H_(this.P_), this.H_(this.R_), this.po.forEach(((t) => {
      this.Zn(t) && this.H_(t.Ft());
    })), this.z_(), this.ns.dr();
  }
  Dt() {
    return this.mo === null && (this.mo = b1(this.po)), this.mo;
  }
  su(t, r) {
    r = mn(r, 0, this.po.length - 1);
    const n = this.po.indexOf(t);
    Et(n !== -1, "setSeriesOrder: invalid data source"), this.po.splice(n, 1), this.po.splice(r, 0, t), this.po.forEach(((i, s) => i.us(s))), this.mo = null;
    for (const i of [this.P_, this.R_]) i.s_(), i._l();
    this.ns.dr();
  }
  Vt() {
    return this.Dt().filter(cg);
  }
  nu() {
    return this.y_;
  }
  eu() {
    return this.k_;
  }
  nl(t) {
    this.ua.push(new Dz(t));
  }
  el(t) {
    this.ua = this.ua.filter(((r) => r.Gh() !== t)), t.detached && t.detached(), this.ns.dr();
  }
  ru() {
    return this.ua;
  }
  Za(t, r) {
    return this.ua.map(((n) => n.Qn(t, r))).filter(((n) => n !== null));
  }
  J_(t) {
    const r = t.p_();
    if (r && r.length > 0 && !this.Jh.Gi()) {
      const n = this.Jh.Ie();
      n !== null && t.v_(n);
    }
    t.Ws();
  }
  W_(t, r, n) {
    let i = this.V_(r);
    if (i === null && (i = this.T_(r, this.ns.N().overlayPriceScales)), this.po.splice(n, 0, t), !bo(r)) {
      const s = this.b_.get(r) || [];
      s.push(t), this.b_.set(r, s);
    }
    t.us(n), i.i_(t), t.cs(i), this.H_(i), this.mo = null;
  }
  D_(t, r, n) {
    r.ae !== n.ae && this.J_(t);
  }
  T_(t, r) {
    const n = { visible: true, autoScale: true, ...Fe(r) }, i = new Jz(t, n, this.ns.N().layout, this.ns.N().localization, this.ns.Xi());
    return i.No(this.$t()), i;
  }
}
function ds(e3) {
  return { hu: e3.hu, au: { te: e3.lu.externalId }, ou: e3.lu.cursorStyle };
}
function Zz(e3, t, r, n) {
  for (const i of e3) {
    const s = i.Tt(n);
    if (s !== null && s.Qn) {
      const a = s.Qn(t, r);
      if (a !== null) return { _u: i, au: a };
    }
  }
  return null;
}
function Qz(e3) {
  return e3.Ys !== void 0;
}
function w1(e3, t, r) {
  const n = [e3, ...e3.Dt()], i = (function(s, a, o) {
    var _a3;
    let l, u;
    for (const f of s) {
      const d = ((_a3 = f.Za) == null ? void 0 : _a3.call(f, a, o)) ?? [];
      for (const v of d) c = v.zOrder, h = l == null ? void 0 : l.zOrder, (!h || c === "top" && h !== "top" || c === "normal" && h === "bottom") && (l = v, u = f);
    }
    var c, h;
    return l && u ? { lu: l, hu: u } : null;
  })(n, t, r);
  if ((i == null ? void 0 : i.lu.zOrder) === "top") return ds(i);
  for (const s of n) {
    if (i && i.hu === s && i.lu.zOrder !== "bottom" && !i.lu.isBackground) return ds(i);
    if (Qz(s)) {
      const a = Zz(s.Ys(e3), t, r, e3);
      if (a !== null) return { hu: s, _u: a._u, au: a.au };
    }
    if (i && i.hu === s && i.lu.zOrder !== "bottom" && i.lu.isBackground) return ds(i);
  }
  return (i == null ? void 0 : i.lu) ? ds(i) : null;
}
class tB {
  constructor(t, r, n = 50) {
    this.Vn = 0, this.Bn = 1, this.En = 1, this.Ln = /* @__PURE__ */ new Map(), this.An = /* @__PURE__ */ new Map(), this.uu = t, this.cu = r, this.zn = n;
  }
  du(t) {
    const r = t.time, n = this.cu.cacheKey(r), i = this.Ln.get(n);
    if (i !== void 0) return i.fu;
    if (this.Vn === this.zn) {
      const a = this.An.get(this.En);
      this.An.delete(this.En), this.Ln.delete(Ht(a)), this.En++, this.Vn--;
    }
    const s = this.uu(t);
    return this.Ln.set(n, { fu: s, Wn: this.Bn }), this.An.set(this.Bn, n), this.Vn++, this.Bn++, s;
  }
}
class gn {
  constructor(t, r) {
    Et(t <= r, "right should be >= left"), this.pu = t, this.vu = r;
  }
  Aa() {
    return this.pu;
  }
  bi() {
    return this.vu;
  }
  mu() {
    return this.vu - this.pu + 1;
  }
  Ee(t) {
    return this.pu <= t && t <= this.vu;
  }
  Ye(t) {
    return this.pu === t.Aa() && this.vu === t.bi();
  }
}
function fg(e3, t) {
  return e3 === null || t === null ? e3 === t : e3.Ye(t);
}
class eB {
  constructor() {
    this.wu = /* @__PURE__ */ new Map(), this.Ln = null, this.gu = false;
  }
  Mu(t) {
    this.gu = t, this.Ln = null;
  }
  bu(t, r) {
    this.Su(r), this.Ln = null;
    for (let n = r; n < t.length; ++n) {
      const i = t[n];
      let s = this.wu.get(i.timeWeight);
      s === void 0 && (s = [], this.wu.set(i.timeWeight, s)), s.push({ index: n, time: i.time, weight: i.timeWeight, originalTime: i.originalTime });
    }
  }
  xu(t, r, n, i, s) {
    const a = Math.ceil(r / t);
    return this.Ln !== null && this.Ln.Cu === a && s === this.Ln.yu && n === this.Ln.ku || (this.Ln = { yu: s, ku: n, Vl: this.Pu(a, n, i), Cu: a }), this.Ln.Vl;
  }
  Su(t) {
    if (t === 0) return void this.wu.clear();
    const r = [];
    this.wu.forEach(((n, i) => {
      t <= n[0].index ? r.push(i) : n.splice(En(n, t, ((s) => s.index < t)), 1 / 0);
    }));
    for (const n of r) this.wu.delete(n);
  }
  Pu(t, r, n) {
    let i = [];
    const s = (a) => !r || n.has(a.index);
    for (const a of Array.from(this.wu.keys()).sort(((o, l) => l - o))) {
      if (!this.wu.get(a)) continue;
      const o = i;
      i = [];
      const l = o.length;
      let u = 0;
      const c = Ht(this.wu.get(a)), h = c.length;
      let f = 1 / 0, d = -1 / 0;
      for (let v = 0; v < h; v++) {
        const m = c[v], p = m.index;
        for (; u < l; ) {
          const y = o[u], b = y.index;
          if (!(b < p && s(y))) {
            f = b;
            break;
          }
          u++, i.push(y), d = b, f = 1 / 0;
        }
        if (f - p >= t && p - d >= t && s(m)) i.push(m), d = p;
        else if (this.gu) return o;
      }
      for (; u < l; u++) s(o[u]) && i.push(o[u]);
    }
    return i;
  }
}
class yn {
  constructor(t) {
    this.Tu = t;
  }
  Ru() {
    return this.Tu === null ? null : new gn(Math.floor(this.Tu.Aa()), Math.ceil(this.Tu.bi()));
  }
  Du() {
    return this.Tu;
  }
  static Iu() {
    return new yn(null);
  }
}
function rB(e3, t) {
  return e3.weight > t.weight ? e3 : t;
}
class nB {
  constructor(t, r, n, i) {
    this.S_ = 0, this.Vu = null, this.Bu = [], this.bo = null, this.Mo = null, this.Eu = new eB(), this.Au = /* @__PURE__ */ new Map(), this.Lu = yn.Iu(), this.zu = true, this.Ou = new ut(), this.Nu = new ut(), this.Fu = new ut(), this.Wu = null, this.Hu = null, this.Uu = /* @__PURE__ */ new Map(), this.$u = -1, this.qu = [], this.ju = 1, this.Ps = r, this.yo = n, this.Yu = r.rightOffset, this.Ku = r.barSpacing, this.ns = t, this.Zu(r), this.cu = i, this.Gu(), this.Eu.Mu(r.uniformDistribution), this.Xu(), this.Ju();
  }
  N() {
    return this.Ps;
  }
  Qu(t) {
    te(this.yo, t), this.tc(), this.Gu();
  }
  cr(t, r) {
    te(this.Ps, t), this.Ps.fixLeftEdge && this.sc(), this.Ps.fixRightEdge && this.nc(), t.barSpacing !== void 0 && this.ns.gn(t.barSpacing), t.rightOffset !== void 0 && this.ns.Mn(t.rightOffset), this.Zu(t), t.minBarSpacing === void 0 && t.maxBarSpacing === void 0 || this.ns.gn(t.barSpacing ?? this.Ku), t.ignoreWhitespaceIndices !== void 0 && t.ignoreWhitespaceIndices !== this.Ps.ignoreWhitespaceIndices && this.Ju(), this.tc(), this.Gu(), t.enableConflation === void 0 && t.conflationThresholdFactor === void 0 || this.Xu(), this.Fu.p();
  }
  Is(t) {
    var _a3;
    return ((_a3 = this.Bu[t]) == null ? void 0 : _a3.time) ?? null;
  }
  es(t) {
    return this.Bu[t] ?? null;
  }
  ec(t, r) {
    if (this.Bu.length < 1) return null;
    if (this.cu.key(t) > this.cu.key(this.Bu[this.Bu.length - 1].time)) return r ? this.Bu.length - 1 : null;
    const n = En(this.Bu, this.cu.key(t), ((i, s) => this.cu.key(i.time) < s));
    return this.cu.key(t) < this.cu.key(this.Bu[n].time) ? r ? n : null : n;
  }
  Gi() {
    return this.S_ === 0 || this.Bu.length === 0 || this.Vu === null;
  }
  rc() {
    return this.Bu.length > 0;
  }
  Ie() {
    return this.hc(), this.Lu.Ru();
  }
  ac() {
    return this.hc(), this.Lu.Du();
  }
  lc() {
    const t = this.Ie();
    if (t === null) return null;
    const r = { from: t.Aa(), to: t.bi() };
    return this.oc(r);
  }
  oc(t) {
    const r = Math.round(t.from), n = Math.round(t.to), i = C(this._c()), s = C(this.uc());
    return { from: C(this.es(Math.max(i, r))), to: C(this.es(Math.min(s, n))) };
  }
  cc(t) {
    return { from: C(this.ec(t.from, true)), to: C(this.ec(t.to, true)) };
  }
  ss() {
    return this.S_;
  }
  L_(t) {
    if (!isFinite(t) || t <= 0 || this.S_ === t) return;
    const r = this.ac(), n = this.S_;
    if (this.S_ = t, this.zu = true, this.Ps.lockVisibleTimeRangeOnResize && n !== 0) {
      const i = this.Ku * t / n;
      this.Ku = i;
    }
    if (this.Ps.fixLeftEdge && r !== null && r.Aa() <= 0) {
      const i = n - t;
      this.Yu -= Math.round(i / this.Ku) + 1, this.zu = true;
    }
    this.dc(), this.fc();
  }
  qt(t) {
    if (this.Gi() || !Oi(t)) return 0;
    const r = this.vc() + this.Yu - t;
    return this.S_ - (r + 0.5) * this.Ku - 1;
  }
  mc(t, r) {
    const n = this.vc(), i = r === void 0 ? 0 : r.from, s = r === void 0 ? t.length : r.to;
    for (let a = i; a < s; a++) {
      const o = t[a].wt, l = n + this.Yu - o, u = this.S_ - (l + 0.5) * this.Ku - 1;
      t[a]._t = u;
    }
  }
  wc(t, r) {
    const n = Math.ceil(this.gc(t));
    return r && this.Ps.ignoreWhitespaceIndices && !this.Mc(n) ? this.bc(n) : n;
  }
  Mn(t) {
    this.zu = true, this.Yu = t, this.fc(), this.ns.Sc(), this.ns.dr();
  }
  ul() {
    return this.Ku;
  }
  gn(t) {
    const r = this.Ku;
    if (this.xc(t), this.Ps.rightOffsetPixels !== void 0 && r !== 0) {
      const n = this.Yu * r / this.Ku;
      this.Yu = n;
    }
    this.fc(), this.ns.Sc(), this.ns.dr();
  }
  Cc() {
    return this.Yu;
  }
  Vl() {
    if (this.Gi()) return null;
    if (this.Hu !== null) return this.Hu;
    const t = this.Ku, r = 5 * (this.ns.N().layout.fontSize + 4) / 8 * (this.Ps.tickMarkMaxCharacterLength || 8), n = Math.round(r / t), i = C(this.Ie()), s = Math.max(i.Aa(), i.Aa() - n), a = Math.max(i.bi(), i.bi() - n), o = this.Eu.xu(t, r, this.Ps.ignoreWhitespaceIndices, this.Uu, this.$u), l = this._c() + n, u = this.uc() - n, c = this.yc(), h = this.Ps.fixLeftEdge || c, f = this.Ps.fixRightEdge || c;
    let d = 0;
    for (const v of o) {
      if (!(s <= v.index && v.index <= a)) continue;
      let m;
      d < this.qu.length ? (m = this.qu[d], m.coord = this.qt(v.index), m.label = this.kc(v), m.weight = v.weight) : (m = { needAlignCoordinate: false, coord: this.qt(v.index), label: this.kc(v), weight: v.weight }, this.qu.push(m)), this.Ku > r / 2 && !c ? m.needAlignCoordinate = false : m.needAlignCoordinate = h && v.index <= l || f && v.index >= u, d++;
    }
    return this.qu.length = d, this.Hu = this.qu, this.qu;
  }
  Pc() {
    let t;
    this.zu = true, this.gn(this.Ps.barSpacing), t = this.Ps.rightOffsetPixels !== void 0 ? this.Ps.rightOffsetPixels / this.ul() : this.Ps.rightOffset, this.Mn(t);
  }
  Tc(t) {
    this.zu = true, this.Vu = t, this.fc(), this.sc();
  }
  Rc(t, r) {
    const n = this.gc(t), i = this.ul(), s = i + r * (i / 10);
    this.gn(s), this.Ps.rightBarStaysOnScroll || this.Mn(this.Cc() + (n - this.gc(t)));
  }
  h_(t) {
    this.bo && this.u_(), this.Mo === null && this.Wu === null && (this.Gi() || (this.Mo = t, this.Dc()));
  }
  a_(t) {
    if (this.Wu === null) return;
    const r = mn(this.S_ - t, 0, this.S_), n = mn(this.S_ - C(this.Mo), 0, this.S_);
    r !== 0 && n !== 0 && this.gn(this.Wu.ul * r / n);
  }
  l_() {
    this.Mo !== null && (this.Mo = null, this.Ic());
  }
  o_(t) {
    this.bo === null && this.Wu === null && (this.Gi() || (this.bo = t, this.Dc()));
  }
  __(t) {
    if (this.bo === null) return;
    const r = (this.bo - t) / this.ul();
    this.Yu = C(this.Wu).Cc + r, this.zu = true, this.fc();
  }
  u_() {
    this.bo !== null && (this.bo = null, this.Ic());
  }
  Vc() {
    this.Bc(this.Ps.rightOffset);
  }
  Bc(t, r = 400) {
    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(r) || r <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const n = this.Yu, i = performance.now();
    this.ns.vn({ Ec: (s) => (s - i) / r >= 1, Ac: (s) => {
      const a = (s - i) / r;
      return a >= 1 ? t : n + (t - n) * a;
    } });
  }
  kt(t, r) {
    this.zu = true, this.Bu = t, this.Eu.bu(t, r), this.fc();
  }
  Lc() {
    return this.Ou;
  }
  zc() {
    return this.Nu;
  }
  Oc() {
    return this.Fu;
  }
  vc() {
    return this.Vu || 0;
  }
  Nc(t, r) {
    const n = t.mu(), i = r && this.Ps.rightOffsetPixels || 0;
    this.xc((this.S_ - i) / n), this.Yu = t.bi() - this.vc(), r && (this.Yu = i ? i / this.ul() : this.Ps.rightOffset), this.fc(), this.zu = true, this.ns.Sc(), this.ns.dr();
  }
  Fc() {
    const t = this._c(), r = this.uc();
    if (t === null || r === null) return;
    const n = !this.Ps.rightOffsetPixels && this.Ps.rightOffset || 0;
    this.Nc(new gn(t, r + n), true);
  }
  Wc(t) {
    const r = new gn(t.from, t.to);
    this.Nc(r);
  }
  rs(t) {
    return this.yo.timeFormatter !== void 0 ? this.yo.timeFormatter(t.originalTime) : this.cu.formatHorzItem(t.time);
  }
  Ju() {
    if (!this.Ps.ignoreWhitespaceIndices) return;
    this.Uu.clear();
    const t = this.ns.tn();
    for (const r of t) for (const n of r.ll()) this.Uu.set(n, true);
    this.$u++;
  }
  Hc() {
    return this.ju;
  }
  vl() {
    const t = 1 / (window.devicePixelRatio || 1), r = this.Ps.minBarSpacing;
    if (r >= t) return [1];
    const n = [1];
    let i = 2;
    for (; i <= 512; ) r < t / i && n.push(i), i *= 2;
    return n;
  }
  yc() {
    const t = this.ns.N().handleScroll, r = this.ns.N().handleScale;
    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || r.axisDoubleClickReset.time || r.axisPressedMouseMove.time || r.mouseWheel || r.pinch);
  }
  _c() {
    return this.Bu.length === 0 ? null : 0;
  }
  uc() {
    return this.Bu.length === 0 ? null : this.Bu.length - 1;
  }
  Uc(t) {
    return (this.S_ - 1 - t) / this.Ku;
  }
  gc(t) {
    const r = this.Uc(t), n = this.vc() + this.Yu - r;
    return Math.round(1e6 * n) / 1e6;
  }
  xc(t) {
    const r = this.Ku;
    this.Ku = t, this.dc(), r !== this.Ku && (this.zu = true, this.$c(), this.Xu());
  }
  hc() {
    if (!this.zu) return;
    if (this.zu = false, this.Gi()) return void this.qc(yn.Iu());
    const t = this.vc(), r = this.S_ / this.Ku, n = this.Yu + t, i = new gn(n - r + 1, n);
    this.qc(new yn(i));
  }
  dc() {
    const t = mn(this.Ku, this.jc(), this.Yc());
    this.Ku !== t && (this.Ku = t, this.zu = true);
  }
  Yc() {
    return this.Ps.maxBarSpacing > 0 ? this.Ps.maxBarSpacing : 0.5 * this.S_;
  }
  jc() {
    return this.Ps.fixLeftEdge && this.Ps.fixRightEdge && this.Bu.length !== 0 ? this.S_ / this.Bu.length : this.Ps.minBarSpacing;
  }
  Xu() {
    if (!this.Ps.enableConflation) return void (this.ju = 1);
    const t = 1 / (window.devicePixelRatio || 1) * (this.Ps.conflationThresholdFactor ?? 1);
    if (this.Ku >= t) return void (this.ju = 1);
    const r = t / this.Ku, n = Math.pow(2, Math.floor(Math.log2(r)));
    this.ju = Math.min(n, 512);
  }
  fc() {
    const t = this.Kc();
    t !== null && this.Yu < t && (this.Yu = t, this.zu = true);
    const r = this.Zc();
    this.Yu > r && (this.Yu = r, this.zu = true);
  }
  Kc() {
    const t = this._c(), r = this.Vu;
    return t === null || r === null ? null : t - r - 1 + (this.Ps.fixLeftEdge ? this.S_ / this.Ku : Math.min(2, this.Bu.length));
  }
  Zc() {
    return this.Ps.fixRightEdge ? 0 : this.S_ / this.Ku - Math.min(2, this.Bu.length);
  }
  Dc() {
    this.Wu = { ul: this.ul(), Cc: this.Cc() };
  }
  Ic() {
    this.Wu = null;
  }
  kc(t) {
    let r = this.Au.get(t.weight);
    return r === void 0 && (r = new tB(((n) => this.Gc(n)), this.cu), this.Au.set(t.weight, r)), r.du(t);
  }
  Gc(t) {
    return this.cu.formatTickmark(t, this.yo);
  }
  qc(t) {
    const r = this.Lu;
    this.Lu = t, fg(r.Ru(), this.Lu.Ru()) || this.Ou.p(), fg(r.Du(), this.Lu.Du()) || this.Nu.p(), this.$c();
  }
  $c() {
    this.Hu = null;
  }
  tc() {
    this.$c(), this.Au.clear();
  }
  Gu() {
    this.cu.updateFormatter(this.yo);
  }
  sc() {
    if (!this.Ps.fixLeftEdge) return;
    const t = this._c();
    if (t === null) return;
    const r = this.Ie();
    if (r === null) return;
    const n = r.Aa() - t;
    if (n < 0) {
      const i = this.Yu - n - 1;
      this.Mn(i);
    }
    this.dc();
  }
  nc() {
    this.fc(), this.dc();
  }
  Mc(t) {
    return !this.Ps.ignoreWhitespaceIndices || this.Uu.get(t) || false;
  }
  bc(t) {
    const r = (function* (i) {
      const s = Math.round(i), a = s < i;
      let o = 1;
      for (; ; ) a ? (yield s + o, yield s - o) : (yield s - o, yield s + o), o++;
    })(t), n = this.uc();
    for (; n; ) {
      const i = r.next().value;
      if (this.Uu.get(i)) return i;
      if (i < 0 || i > n) break;
    }
    return t;
  }
  Zu(t) {
    if (t.rightOffsetPixels !== void 0) {
      const r = t.rightOffsetPixels / (t.barSpacing || this.Ku);
      this.ns.Mn(r);
    }
  }
}
var dg, vg, pg, mg, gg;
(function(e3) {
  e3[e3.OnTouchEnd = 0] = "OnTouchEnd", e3[e3.OnNextTap = 1] = "OnNextTap";
})(dg || (dg = {}));
class iB {
  constructor(t, r, n) {
    this.Xc = [], this.Jc = [], this.Qc = null, this.S_ = 0, this.td = null, this.sd = new ut(), this.nd = new ut(), this.ed = null, this.rd = t, this.Ps = r, this.cu = n, this.ko = new ez(this.Ps.layout.colorParsers), this.hd = new tz(this), this.Jh = new nB(this, r.timeScale, this.Ps.localization, n), this.Ct = new fz(this, r.crosshair), this.ad = new Uz(r.crosshair), r.addDefaultPane && (this.ld(0), this.Xc[0].A_(2)), this.od = this._d(0), this.ud = this._d(1);
  }
  Ca() {
    this.dd(Ot.yn());
  }
  dr() {
    this.dd(Ot.Cn());
  }
  Ua() {
    this.dd(new Ot(1));
  }
  ya(t) {
    const r = this.fd(t);
    this.dd(r);
  }
  pd() {
    return this.td;
  }
  vd(t) {
    var _a3, _b2, _c2, _d2;
    if (((_a3 = this.td) == null ? void 0 : _a3.hu) === (t == null ? void 0 : t.hu) && ((_c2 = (_b2 = this.td) == null ? void 0 : _b2.au) == null ? void 0 : _c2.te) === ((_d2 = t == null ? void 0 : t.au) == null ? void 0 : _d2.te)) return;
    const r = this.td;
    this.td = t, r !== null && this.ya(r.hu), t !== null && t.hu !== (r == null ? void 0 : r.hu) && this.ya(t.hu);
  }
  N() {
    return this.Ps;
  }
  cr(t) {
    te(this.Ps, t), this.Xc.forEach(((r) => r.I_(t))), t.timeScale !== void 0 && this.Jh.cr(t.timeScale), t.localization !== void 0 && this.Jh.Qu(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.sd.p(), this.od = this._d(0), this.ud = this._d(1), this.Ca();
  }
  md(t, r, n = 0) {
    const i = this.Xc[n];
    if (i === void 0) return;
    if (t === "left") return te(this.Ps, { leftPriceScale: r }), i.I_({ leftPriceScale: r }), this.sd.p(), void this.Ca();
    if (t === "right") return te(this.Ps, { rightPriceScale: r }), i.I_({ rightPriceScale: r }), this.sd.p(), void this.Ca();
    const s = this.wd(t, n);
    s !== null && (s.Ft.cr(r), this.sd.p());
  }
  wd(t, r) {
    const n = this.Xc[r];
    if (n === void 0) return null;
    const i = n.V_(t);
    return i !== null ? { Gs: n, Ft: i } : null;
  }
  Et() {
    return this.Jh;
  }
  Xs() {
    return this.Xc;
  }
  gd() {
    return this.Ct;
  }
  Md() {
    return this.nd;
  }
  bd(t, r) {
    t.No(r), this.Sc();
  }
  L_(t) {
    this.S_ = t, this.Jh.L_(this.S_), this.Xc.forEach(((r) => r.L_(t))), this.Sc();
  }
  Sd(t) {
    this.Xc.length !== 1 && (Et(t >= 0 && t < this.Xc.length, "Invalid pane index"), this.Xc.splice(t, 1), this.Ca());
  }
  xd(t, r) {
    if (this.Xc.length < 2) return;
    Et(t >= 0 && t < this.Xc.length, "Invalid pane index");
    const n = this.Xc[t], i = this.Xc.reduce(((h, f) => h + f.E_()), 0), s = this.Xc.reduce(((h, f) => h + f.$t()), 0), a = s - 30 * (this.Xc.length - 1);
    r = Math.min(a, Math.max(30, r));
    const o = i / s, l = n.$t();
    n.A_(r * o);
    let u = r - l, c = this.Xc.length - 1;
    for (const h of this.Xc) if (h !== n) {
      const f = Math.min(a, Math.max(30, h.$t() - u / c));
      u -= h.$t() - f, c -= 1;
      const d = f * o;
      h.A_(d);
    }
    this.Ca();
  }
  Cd(t, r) {
    Et(t >= 0 && t < this.Xc.length && r >= 0 && r < this.Xc.length, "Invalid pane index");
    const n = this.Xc[t], i = this.Xc[r];
    this.Xc[t] = i, this.Xc[r] = n, this.Ca();
  }
  yd(t, r) {
    if (Et(t >= 0 && t < this.Xc.length && r >= 0 && r < this.Xc.length, "Invalid pane index"), t === r) return;
    const [n] = this.Xc.splice(t, 1);
    this.Xc.splice(r, 0, n), this.Ca();
  }
  j_(t, r, n) {
    t.j_(r, n);
  }
  Y_(t, r, n) {
    t.Y_(r, n), this.ka(), this.dd(this.kd(t, 2));
  }
  K_(t, r) {
    t.K_(r), this.dd(this.kd(t, 2));
  }
  Z_(t, r, n) {
    r.Vo() || t.Z_(r, n);
  }
  G_(t, r, n) {
    r.Vo() || (t.G_(r, n), this.ka(), this.dd(this.kd(t, 2)));
  }
  X_(t, r) {
    r.Vo() || (t.X_(r), this.dd(this.kd(t, 2)));
  }
  Q_(t, r) {
    t.Q_(r), this.dd(this.kd(t, 2));
  }
  Pd(t) {
    this.Jh.h_(t);
  }
  Td(t, r) {
    const n = this.Et();
    if (n.Gi() || r === 0) return;
    const i = n.ss();
    t = Math.max(1, Math.min(t, i)), n.Rc(t, r), this.Sc();
  }
  Rd(t) {
    this.Dd(0), this.Id(t), this.Vd();
  }
  Bd(t) {
    this.Jh.a_(t), this.Sc();
  }
  Ed() {
    this.Jh.l_(), this.dr();
  }
  Dd(t) {
    this.Jh.o_(t);
  }
  Id(t) {
    this.Jh.__(t), this.Sc();
  }
  Vd() {
    this.Jh.u_(), this.dr();
  }
  tn() {
    return this.Jc;
  }
  Us() {
    return this.Qc === null && (this.Qc = this.Jc.filter(((t) => t.It()))), this.Qc;
  }
  xa() {
    this.Qc = null;
  }
  Ad(t, r, n, i, s) {
    this.Ct.Bs(t, r);
    let a = NaN, o = this.Jh.wc(t, true);
    const l = this.Jh.Ie();
    l !== null && (o = Math.min(Math.max(l.Aa(), o), l.bi())), o = this.Ct.Hs(o);
    const u = i.Rs(), c = u.Lt();
    if (c !== null && (a = u.Ds(r, c)), a = this.ad.bl(a, o, i), this.Ct.zs(o, a, i), this.Ua(), !s) {
      const h = w1(i, t, r);
      this.vd(h && { hu: h.hu, au: h.au, ou: h.ou || null }), this.nd.p(this.Ct.Bt(), { x: t, y: r }, n);
    }
  }
  Ld(t, r, n) {
    const i = n.Rs(), s = i.Lt(), a = i.Nt(t, C(s)), o = this.Jh.ec(r, true), l = this.Jh.qt(C(o));
    this.Ad(l, a, null, n, true);
  }
  zd(t) {
    this.gd().Ns(), this.Ua(), t || this.nd.p(null, null, null);
  }
  ka() {
    const t = this.Ct.Gs();
    if (t !== null) {
      const r = this.Ct.As(), n = this.Ct.Ls();
      this.Ad(r, n, null, t);
    }
    this.Ct.Ws();
  }
  Od(t, r, n) {
    const i = this.Jh.Is(0);
    r !== void 0 && n !== void 0 && this.Jh.kt(r, n);
    const s = this.Jh.Is(0), a = this.Jh.vc(), o = this.Jh.Ie();
    if (o !== null && i !== null && s !== null) {
      const l = o.Ee(a), u = this.cu.key(i) > this.cu.key(s), c = t !== null && t > a && !u, h = this.Jh.N().allowShiftVisibleRangeOnWhitespaceReplacement, f = l && (n !== void 0 || h) && this.Jh.N().shiftVisibleRangeOnNewBar;
      if (c && !f) {
        const d = t - a;
        this.Jh.Mn(this.Jh.Cc() - d);
      }
    }
    this.Jh.Tc(t);
  }
  Ra(t) {
    t !== null && t.iu();
  }
  Kn(t) {
    if ((function(n) {
      return n instanceof hg;
    })(t)) return t;
    const r = this.Xc.find(((n) => n.Dt().includes(t)));
    return r === void 0 ? null : r;
  }
  Sc() {
    this.Xc.forEach(((t) => t.iu())), this.ka();
  }
  m() {
    this.Xc.forEach(((t) => t.m())), this.Xc.length = 0, this.Ps.localization.priceFormatter = void 0, this.Ps.localization.percentageFormatter = void 0, this.Ps.localization.timeFormatter = void 0;
  }
  Nd() {
    return this.hd;
  }
  Jn() {
    return this.hd.N();
  }
  B_() {
    return this.sd;
  }
  Fd(t, r) {
    const n = this.ld(r);
    this.Wd(t, n), this.Jc.push(t), this.xa(), this.Jc.length === 1 ? this.Ca() : this.dr();
  }
  Hd(t) {
    const r = this.Kn(t), n = this.Jc.indexOf(t);
    Et(n !== -1, "Series not found");
    const i = C(r);
    this.Jc.splice(n, 1), i.n_(t), t.m && t.m(), this.xa(), this.Jh.Ju(), this.Ud(i);
  }
  Sa(t, r) {
    const n = C(this.Kn(t));
    n.n_(t, true), n.i_(t, r, true);
  }
  Fc() {
    const t = Ot.Cn();
    t.cn(), this.dd(t);
  }
  $d(t) {
    const r = Ot.Cn();
    r.pn(t), this.dd(r);
  }
  wn() {
    const t = Ot.Cn();
    t.wn(), this.dd(t);
  }
  gn(t) {
    const r = Ot.Cn();
    r.gn(t), this.dd(r);
  }
  Mn(t) {
    const r = Ot.Cn();
    r.Mn(t), this.dd(r);
  }
  vn(t) {
    const r = Ot.Cn();
    r.vn(t), this.dd(r);
  }
  dn() {
    const t = Ot.Cn();
    t.dn(), this.dd(t);
  }
  qd() {
    return this.Ps.rightPriceScale.visible ? "right" : "left";
  }
  jd(t, r) {
    if (Et(r >= 0, "Index should be greater or equal to 0"), r === this.Yd(t)) return;
    const n = C(this.Kn(t));
    n.n_(t);
    const i = this.ld(r);
    this.Wd(t, i), n.Sl().length === 0 && this.Ud(n), this.Ca();
  }
  Kd() {
    return this.ud;
  }
  $() {
    return this.od;
  }
  Ut(t) {
    const r = this.ud, n = this.od;
    if (r === n) return r;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), this.ed === null || this.ed.eh !== n || this.ed.rh !== r) this.ed = { eh: n, rh: r, Zd: /* @__PURE__ */ new Map() };
    else {
      const s = this.ed.Zd.get(t);
      if (s !== void 0) return s;
    }
    const i = this.ko.tt(n, r, t / 100);
    return this.ed.Zd.set(t, i), i;
  }
  Gd(t) {
    return this.Xc.indexOf(t);
  }
  Xi() {
    return this.ko;
  }
  Xd() {
    return this.Jd();
  }
  Jd(t) {
    const r = new hg(this.Jh, this);
    this.Xc.push(r);
    const n = t ?? this.Xc.length - 1, i = Ot.yn();
    return i.hn(n, { an: 0, ln: true }), this.dd(i), r;
  }
  ld(t) {
    return Et(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.Xc.length, t)) < this.Xc.length ? this.Xc[t] : this.Jd(t);
  }
  Yd(t) {
    return this.Xc.findIndex(((r) => r.F_().includes(t)));
  }
  kd(t, r) {
    const n = new Ot(r);
    if (t !== null) {
      const i = this.Xc.indexOf(t);
      n.hn(i, { an: r });
    }
    return n;
  }
  fd(t, r) {
    return r === void 0 && (r = 2), this.kd(this.Kn(t), r);
  }
  dd(t) {
    this.rd && this.rd(t), this.Xc.forEach(((r) => r.eu().pr().kt()));
  }
  Wd(t, r) {
    const n = t.N().priceScaleId, i = n !== void 0 ? n : this.qd();
    r.i_(t, i), bo(i) || t.cr(t.N());
  }
  _d(t) {
    const r = this.Ps.layout;
    return r.background.type === "gradient" ? t === 0 ? r.background.topColor : r.background.bottomColor : r.background.color;
  }
  Ud(t) {
    !t.N_() && t.Sl().length === 0 && this.Xc.length > 1 && this.Xc.splice(this.Gd(t), 1);
  }
}
function x1(e3) {
  if (e3 >= 1) return 0;
  let t = 0;
  for (; t < 8; t++) {
    const r = Math.round(e3);
    if (Math.abs(r - e3) < 1e-8) return t;
    e3 *= 10;
  }
  return t;
}
function hc(e3) {
  return !qr(e3) && !Yi(e3);
}
function P1(e3) {
  return qr(e3);
}
(function(e3) {
  e3[e3.Disabled = 0] = "Disabled", e3[e3.Continuous = 1] = "Continuous", e3[e3.OnDataUpdate = 2] = "OnDataUpdate";
})(vg || (vg = {})), (function(e3) {
  e3[e3.LastBar = 0] = "LastBar", e3[e3.LastVisible = 1] = "LastVisible";
})(pg || (pg = {})), (function(e3) {
  e3.Solid = "solid", e3.VerticalGradient = "gradient";
})(mg || (mg = {})), (function(e3) {
  e3[e3.Year = 0] = "Year", e3[e3.Month = 1] = "Month", e3[e3.DayOfMonth = 2] = "DayOfMonth", e3[e3.Time = 3] = "Time", e3[e3.TimeWithSeconds = 4] = "TimeWithSeconds";
})(gg || (gg = {}));
const yg = (e3) => e3.getUTCFullYear();
function sB(e3, t, r) {
  return t.replace(/yyyy/g, ((n) => We(yg(n), 4))(e3)).replace(/yy/g, ((n) => We(yg(n) % 100, 2))(e3)).replace(/MMMM/g, ((n, i) => new Date(n.getUTCFullYear(), n.getUTCMonth(), 1).toLocaleString(i, { month: "long" }))(e3, r)).replace(/MMM/g, ((n, i) => new Date(n.getUTCFullYear(), n.getUTCMonth(), 1).toLocaleString(i, { month: "short" }))(e3, r)).replace(/MM/g, ((n) => We(((i) => i.getUTCMonth() + 1)(n), 2))(e3)).replace(/dd/g, ((n) => We(((i) => i.getUTCDate())(n), 2))(e3));
}
class S1 {
  constructor(t = "yyyy-MM-dd", r = "default") {
    this.Qd = t, this.tf = r;
  }
  du(t) {
    return sB(t, this.Qd, this.tf);
  }
}
class aB {
  constructor(t) {
    this.if = t || "%h:%m:%s";
  }
  du(t) {
    return this.if.replace("%h", We(t.getUTCHours(), 2)).replace("%m", We(t.getUTCMinutes(), 2)).replace("%s", We(t.getUTCSeconds(), 2));
  }
}
const oB = { sf: "yyyy-MM-dd", nf: "%h:%m:%s", ef: " ", rf: "default" };
class lB {
  constructor(t = {}) {
    const r = { ...oB, ...t };
    this.hf = new S1(r.sf, r.rf), this.af = new aB(r.nf), this.lf = r.ef;
  }
  du(t) {
    return `${this.hf.du(t)}${this.lf}${this.af.du(t)}`;
  }
}
function vs(e3) {
  return 60 * e3 * 60 * 1e3;
}
function ou(e3) {
  return 60 * e3 * 1e3;
}
const ps = [{ _f: (bg = 1, 1e3 * bg), uf: 10 }, { _f: ou(1), uf: 20 }, { _f: ou(5), uf: 21 }, { _f: ou(30), uf: 22 }, { _f: vs(1), uf: 30 }, { _f: vs(3), uf: 31 }, { _f: vs(6), uf: 32 }, { _f: vs(12), uf: 33 }];
var bg;
function wg(e3, t) {
  if (e3.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (e3.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (e3.getUTCDate() !== t.getUTCDate()) return 50;
  for (let r = ps.length - 1; r >= 0; --r) if (Math.floor(t.getTime() / ps[r]._f) !== Math.floor(e3.getTime() / ps[r]._f)) return ps[r].uf;
  return 0;
}
function lu(e3) {
  let t = e3;
  if (Yi(e3) && (t = Xh(e3)), !hc(t)) throw new Error("time must be of type BusinessDay");
  const r = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return { cf: Math.round(r.getTime() / 1e3), df: t };
}
function xg(e3) {
  if (!P1(e3)) throw new Error("time must be of type isUTCTimestamp");
  return { cf: e3 };
}
function Xh(e3) {
  const t = new Date(e3);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${e3}, expected format=yyyy-mm-dd`);
  return { day: t.getUTCDate(), month: t.getUTCMonth() + 1, year: t.getUTCFullYear() };
}
function Pg(e3) {
  Yi(e3.time) && (e3.time = Xh(e3.time));
}
class Sg {
  options() {
    return this.Ps;
  }
  setOptions(t) {
    this.Ps = t, this.updateFormatter(t.localization);
  }
  preprocessData(t) {
    Array.isArray(t) ? (function(r) {
      r.forEach(Pg);
    })(t) : Pg(t);
  }
  createConverterToInternalObj(t) {
    return C((function(r) {
      return r.length === 0 ? null : hc(r[0].time) || Yi(r[0].time) ? lu : xg;
    })(t));
  }
  key(t) {
    return typeof t == "object" && "cf" in t ? t.cf : this.key(this.convertHorzItemToInternal(t));
  }
  cacheKey(t) {
    const r = t;
    return r.df === void 0 ? new Date(1e3 * r.cf).getTime() : new Date(Date.UTC(r.df.year, r.df.month - 1, r.df.day)).getTime();
  }
  convertHorzItemToInternal(t) {
    return P1(r = t) ? xg(r) : hc(r) ? lu(r) : lu(Xh(r));
    var r;
  }
  updateFormatter(t) {
    if (!this.Ps) return;
    const r = t.dateFormat;
    this.Ps.timeScale.timeVisible ? this.ff = new lB({ sf: r, nf: this.Ps.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m", ef: "   ", rf: t.locale }) : this.ff = new S1(r, t.locale);
  }
  formatHorzItem(t) {
    const r = t;
    return this.ff.du(new Date(1e3 * r.cf));
  }
  formatTickmark(t, r) {
    const n = (function(s, a, o) {
      switch (s) {
        case 0:
        case 10:
          return a ? o ? 4 : 3 : 2;
        case 20:
        case 21:
        case 22:
        case 30:
        case 31:
        case 32:
        case 33:
          return a ? 3 : 2;
        case 50:
          return 2;
        case 60:
          return 1;
        case 70:
          return 0;
      }
    })(t.weight, this.Ps.timeScale.timeVisible, this.Ps.timeScale.secondsVisible), i = this.Ps.timeScale;
    if (i.tickMarkFormatter !== void 0) {
      const s = i.tickMarkFormatter(t.originalTime, n, r.locale);
      if (s !== null) return s;
    }
    return (function(s, a, o) {
      const l = {};
      switch (a) {
        case 0:
          l.year = "numeric";
          break;
        case 1:
          l.month = "short";
          break;
        case 2:
          l.day = "numeric";
          break;
        case 3:
          l.hour12 = false, l.hour = "2-digit", l.minute = "2-digit";
          break;
        case 4:
          l.hour12 = false, l.hour = "2-digit", l.minute = "2-digit", l.second = "2-digit";
      }
      const u = s.df === void 0 ? new Date(1e3 * s.cf) : new Date(Date.UTC(s.df.year, s.df.month - 1, s.df.day));
      return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate(), u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()).toLocaleString(o, l);
    })(t.time, n, r.locale);
  }
  maxTickMarkWeight(t) {
    let r = t.reduce(rB, t[0]).weight;
    return r > 30 && r < 50 && (r = 30), r;
  }
  fillWeightsForPoints(t, r) {
    (function(n, i = 0) {
      if (n.length === 0) return;
      let s = i === 0 ? null : n[i - 1].time.cf, a = s !== null ? new Date(1e3 * s) : null, o = 0;
      for (let l = i; l < n.length; ++l) {
        const u = n[l], c = new Date(1e3 * u.time.cf);
        a !== null && (u.timeWeight = wg(c, a)), o += u.time.cf - (s || u.time.cf), s = u.time.cf, a = c;
      }
      if (i === 0 && n.length > 1) {
        const l = Math.ceil(o / (n.length - 1)), u = new Date(1e3 * (n[0].time.cf - l));
        n[0].timeWeight = wg(new Date(1e3 * n[0].time.cf), u);
      }
    })(t, r);
  }
  static pf(t) {
    return te({ localization: { dateFormat: "dd MMM 'yy" } }, t ?? {});
  }
}
const An = typeof window < "u";
function _g() {
  return !!An && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function uu() {
  return !!An && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function fc(e3) {
  return e3 + e3 % 2;
}
function uB(e3) {
  An && window.chrome !== void 0 && e3.addEventListener("mousedown", ((t) => {
    if (t.button === 1) return t.preventDefault(), false;
  }));
}
class Po {
  constructor(t, r, n) {
    this.vf = 0, this.mf = null, this.wf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.gf = 0, this.Mf = null, this.bf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.Sf = null, this.xf = false, this.Cf = null, this.yf = null, this.kf = false, this.Pf = false, this.Tf = false, this.Rf = null, this.Df = null, this.If = null, this.Vf = null, this.Bf = null, this.Ef = null, this.Af = null, this.Lf = 0, this.zf = false, this.Of = false, this.Nf = false, this.Ff = 0, this.Wf = null, this.Hf = !uu(), this.Uf = (i) => {
      this.$f(i);
    }, this.qf = (i) => {
      if (this.jf(i)) {
        const s = this.Yf(i);
        if (++this.gf, this.Mf && this.gf > 1) {
          const { Kf: a } = this.Zf(_e(i), this.bf);
          a < 30 && !this.Tf && this.Gf(s, this.Jf.Xf), this.Qf();
        }
      } else {
        const s = this.Yf(i);
        if (++this.vf, this.mf && this.vf > 1) {
          const { Kf: a } = this.Zf(_e(i), this.wf);
          a < 5 && !this.Pf && this.tp(s, this.Jf.ip), this.sp();
        }
      }
    }, this.np = t, this.Jf = r, this.Ps = n, this.ep();
  }
  m() {
    this.Rf !== null && (this.Rf(), this.Rf = null), this.Df !== null && (this.Df(), this.Df = null), this.Vf !== null && (this.Vf(), this.Vf = null), this.Bf !== null && (this.Bf(), this.Bf = null), this.Ef !== null && (this.Ef(), this.Ef = null), this.If !== null && (this.If(), this.If = null), this.rp(), this.sp();
  }
  hp(t) {
    this.Vf && this.Vf();
    const r = this.ap.bind(this);
    if (this.Vf = () => {
      this.np.removeEventListener("mousemove", r);
    }, this.np.addEventListener("mousemove", r), this.jf(t)) return;
    const n = this.Yf(t);
    this.tp(n, this.Jf.lp), this.Hf = true;
  }
  sp() {
    this.mf !== null && clearTimeout(this.mf), this.vf = 0, this.mf = null, this.wf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY };
  }
  Qf() {
    this.Mf !== null && clearTimeout(this.Mf), this.gf = 0, this.Mf = null, this.bf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY };
  }
  ap(t) {
    if (this.Nf || this.yf !== null || this.jf(t)) return;
    const r = this.Yf(t);
    this.tp(r, this.Jf.op), this.Hf = true;
  }
  _p(t) {
    const r = cu(t.changedTouches, C(this.Wf));
    if (r === null || (this.Ff = ms(t), this.Af !== null) || this.Of) return;
    this.zf = true;
    const n = this.Zf(_e(r), C(this.yf)), { up: i, cp: s, Kf: a } = n;
    if (this.kf || !(a < 5)) {
      if (!this.kf) {
        const o = 0.5 * i, l = s >= o && !this.Ps.dp(), u = o > s && !this.Ps.fp();
        l || u || (this.Of = true), this.kf = true, this.Tf = true, this.rp(), this.Qf();
      }
      if (!this.Of) {
        const o = this.Yf(t, r);
        this.Gf(o, this.Jf.pp), sn(t);
      }
    }
  }
  vp(t) {
    if (t.button !== 0) return;
    const r = this.Zf(_e(t), C(this.Cf)), { Kf: n } = r;
    if (n >= 5 && (this.Pf = true, this.sp()), this.Pf) {
      const i = this.Yf(t);
      this.tp(i, this.Jf.mp);
    }
  }
  Zf(t, r) {
    const n = Math.abs(r._t - t._t), i = Math.abs(r.ut - t.ut);
    return { up: n, cp: i, Kf: n + i };
  }
  wp(t) {
    let r = cu(t.changedTouches, C(this.Wf));
    if (r === null && t.touches.length === 0 && (r = t.changedTouches[0]), r === null) return;
    this.Wf = null, this.Ff = ms(t), this.rp(), this.yf = null, this.Ef && (this.Ef(), this.Ef = null);
    const n = this.Yf(t, r);
    if (this.Gf(n, this.Jf.gp), ++this.gf, this.Mf && this.gf > 1) {
      const { Kf: i } = this.Zf(_e(r), this.bf);
      i < 30 && !this.Tf && this.Gf(n, this.Jf.Xf), this.Qf();
    } else this.Tf || (this.Gf(n, this.Jf.Mp), this.Jf.Mp && sn(t));
    this.gf === 0 && sn(t), t.touches.length === 0 && this.xf && (this.xf = false, sn(t));
  }
  $f(t) {
    if (t.button !== 0) return;
    const r = this.Yf(t);
    if (this.Cf = null, this.Nf = false, this.Bf && (this.Bf(), this.Bf = null), _g() && this.np.ownerDocument.documentElement.removeEventListener("mouseleave", this.Uf), !this.jf(t)) if (this.tp(r, this.Jf.bp), ++this.vf, this.mf && this.vf > 1) {
      const { Kf: n } = this.Zf(_e(t), this.wf);
      n < 5 && !this.Pf && this.tp(r, this.Jf.ip), this.sp();
    } else this.Pf || this.tp(r, this.Jf.Sp);
  }
  rp() {
    this.Sf !== null && (clearTimeout(this.Sf), this.Sf = null);
  }
  xp(t) {
    if (this.Wf !== null) return;
    const r = t.changedTouches[0];
    this.Wf = r.identifier, this.Ff = ms(t);
    const n = this.np.ownerDocument.documentElement;
    this.Tf = false, this.kf = false, this.Of = false, this.yf = _e(r), this.Ef && (this.Ef(), this.Ef = null);
    {
      const s = this._p.bind(this), a = this.wp.bind(this);
      this.Ef = () => {
        n.removeEventListener("touchmove", s), n.removeEventListener("touchend", a);
      }, n.addEventListener("touchmove", s, { passive: false }), n.addEventListener("touchend", a, { passive: false }), this.rp(), this.Sf = setTimeout(this.Cp.bind(this, t), 240);
    }
    const i = this.Yf(t, r);
    this.Gf(i, this.Jf.yp), this.Mf || (this.gf = 0, this.Mf = setTimeout(this.Qf.bind(this), 500), this.bf = _e(r));
  }
  kp(t) {
    if (t.button !== 0) return;
    const r = this.np.ownerDocument.documentElement;
    _g() && r.addEventListener("mouseleave", this.Uf), this.Pf = false, this.Cf = _e(t), this.Bf && (this.Bf(), this.Bf = null);
    {
      const i = this.vp.bind(this), s = this.$f.bind(this);
      this.Bf = () => {
        r.removeEventListener("mousemove", i), r.removeEventListener("mouseup", s);
      }, r.addEventListener("mousemove", i), r.addEventListener("mouseup", s);
    }
    if (this.Nf = true, this.jf(t)) return;
    const n = this.Yf(t);
    this.tp(n, this.Jf.Pp), this.mf || (this.vf = 0, this.mf = setTimeout(this.sp.bind(this), 500), this.wf = _e(t));
  }
  ep() {
    this.np.addEventListener("mouseenter", this.hp.bind(this)), this.np.addEventListener("touchcancel", this.rp.bind(this));
    {
      const t = this.np.ownerDocument, r = (n) => {
        this.Jf.Tp && (n.composed && this.np.contains(n.composedPath()[0]) || n.target && this.np.contains(n.target) || this.Jf.Tp());
      };
      this.Df = () => {
        t.removeEventListener("touchstart", r);
      }, this.Rf = () => {
        t.removeEventListener("mousedown", r);
      }, t.addEventListener("mousedown", r), t.addEventListener("touchstart", r, { passive: true });
    }
    uu() && (this.If = () => {
      this.np.removeEventListener("dblclick", this.qf);
    }, this.np.addEventListener("dblclick", this.qf)), this.np.addEventListener("mouseleave", this.Rp.bind(this)), this.np.addEventListener("touchstart", this.xp.bind(this), { passive: true }), uB(this.np), this.np.addEventListener("mousedown", this.kp.bind(this)), this.Dp(), this.np.addEventListener("touchmove", (() => {
    }), { passive: false });
  }
  Dp() {
    this.Jf.Ip === void 0 && this.Jf.Vp === void 0 && this.Jf.Bp === void 0 || (this.np.addEventListener("touchstart", ((t) => this.Ep(t.touches)), { passive: true }), this.np.addEventListener("touchmove", ((t) => {
      if (t.touches.length === 2 && this.Af !== null && this.Jf.Vp !== void 0) {
        const r = Og(t.touches[0], t.touches[1]) / this.Lf;
        this.Jf.Vp(this.Af, r), sn(t);
      }
    }), { passive: false }), this.np.addEventListener("touchend", ((t) => {
      this.Ep(t.touches);
    })));
  }
  Ep(t) {
    t.length === 1 && (this.zf = false), t.length !== 2 || this.zf || this.xf ? this.Ap() : this.Lp(t);
  }
  Lp(t) {
    const r = this.np.getBoundingClientRect() || { left: 0, top: 0 };
    this.Af = { _t: (t[0].clientX - r.left + (t[1].clientX - r.left)) / 2, ut: (t[0].clientY - r.top + (t[1].clientY - r.top)) / 2 }, this.Lf = Og(t[0], t[1]), this.Jf.Ip !== void 0 && this.Jf.Ip(), this.rp();
  }
  Ap() {
    this.Af !== null && (this.Af = null, this.Jf.Bp !== void 0 && this.Jf.Bp());
  }
  Rp(t) {
    if (this.Vf && this.Vf(), this.jf(t) || !this.Hf) return;
    const r = this.Yf(t);
    this.tp(r, this.Jf.zp), this.Hf = !uu();
  }
  Cp(t) {
    const r = cu(t.touches, C(this.Wf));
    if (r === null) return;
    const n = this.Yf(t, r);
    this.Gf(n, this.Jf.Op), this.Tf = true, this.xf = true;
  }
  jf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : ms(t) < this.Ff + 500;
  }
  Gf(t, r) {
    r && r.call(this.Jf, t);
  }
  tp(t, r) {
    r && r.call(this.Jf, t);
  }
  Yf(t, r) {
    const n = r || t, i = this.np.getBoundingClientRect() || { left: 0, top: 0 };
    return { clientX: n.clientX, clientY: n.clientY, pageX: n.pageX, pageY: n.pageY, screenX: n.screenX, screenY: n.screenY, localX: n.clientX - i.left, localY: n.clientY - i.top, ctrlKey: t.ctrlKey, altKey: t.altKey, shiftKey: t.shiftKey, metaKey: t.metaKey, Np: !t.type.startsWith("mouse") && t.type !== "contextmenu" && t.type !== "click", Fp: t.type, Wp: n.target, _u: t.view, Hp: () => {
      t.type !== "touchstart" && sn(t);
    } };
  }
}
function Og(e3, t) {
  const r = e3.clientX - t.clientX, n = e3.clientY - t.clientY;
  return Math.sqrt(r * r + n * n);
}
function sn(e3) {
  e3.cancelable && e3.preventDefault();
}
function _e(e3) {
  return { _t: e3.pageX, ut: e3.pageY };
}
function ms(e3) {
  return e3.timeStamp || performance.now();
}
function cu(e3, t) {
  for (let r = 0; r < e3.length; ++r) if (e3[r].identifier === t) return e3[r];
  return null;
}
class cB {
  constructor(t, r, n) {
    this.Up = null, this.$p = null, this.qp = true, this.jp = null, this.Yp = t, this.Kp = t.Zp()[r], this.Gp = t.Zp()[n], this.Xp = document.createElement("tr"), this.Xp.style.height = "1px", this.Jp = document.createElement("td"), this.Jp.style.position = "relative", this.Jp.style.padding = "0", this.Jp.style.margin = "0", this.Jp.setAttribute("colspan", "3"), this.Qp(), this.Xp.appendChild(this.Jp), this.qp = this.Yp.N().layout.panes.enableResize, this.qp ? this.tv() : (this.Up = null, this.$p = null);
  }
  m() {
    this.$p !== null && this.$p.m();
  }
  iv() {
    return this.Xp;
  }
  sv() {
    return Z({ width: this.Kp.sv().width, height: 1 });
  }
  nv() {
    return Z({ width: this.Kp.nv().width, height: 1 * window.devicePixelRatio });
  }
  ev(t, r, n) {
    const i = this.nv();
    t.fillStyle = this.Yp.N().layout.panes.separatorColor, t.fillRect(r, n, i.width, i.height);
  }
  kt() {
    this.Qp(), this.Yp.N().layout.panes.enableResize !== this.qp && (this.qp = this.Yp.N().layout.panes.enableResize, this.qp ? this.tv() : (this.Up !== null && (this.Jp.removeChild(this.Up.rv), this.Jp.removeChild(this.Up.hv), this.Up = null), this.$p !== null && (this.$p.m(), this.$p = null)));
  }
  tv() {
    const t = document.createElement("div"), r = t.style;
    r.position = "fixed", r.display = "none", r.zIndex = "49", r.top = "0", r.left = "0", r.width = "100%", r.height = "100%", r.cursor = "row-resize", this.Jp.appendChild(t);
    const n = document.createElement("div"), i = n.style;
    i.position = "absolute", i.zIndex = "50", i.top = "-4px", i.height = "9px", i.width = "100%", i.backgroundColor = "", i.cursor = "row-resize", this.Jp.appendChild(n);
    const s = { lp: this.av.bind(this), zp: this.lv.bind(this), Pp: this.ov.bind(this), yp: this.ov.bind(this), mp: this._v.bind(this), pp: this._v.bind(this), bp: this.uv.bind(this), gp: this.uv.bind(this) };
    this.$p = new Po(n, s, { dp: () => false, fp: () => true }), this.Up = { hv: n, rv: t };
  }
  Qp() {
    this.Jp.style.background = this.Yp.N().layout.panes.separatorColor;
  }
  av(t) {
    this.Up !== null && (this.Up.hv.style.backgroundColor = this.Yp.N().layout.panes.separatorHoverColor);
  }
  lv(t) {
    this.Up !== null && this.jp === null && (this.Up.hv.style.backgroundColor = "");
  }
  ov(t) {
    if (this.Up === null) return;
    const r = this.Kp.cv().E_() + this.Gp.cv().E_(), n = r / (this.Kp.sv().height + this.Gp.sv().height), i = 30 * n;
    r <= 2 * i || (this.jp = { dv: t.pageY, fv: this.Kp.cv().E_(), pv: r - i, vv: r, mv: n, wv: i }, this.Up.rv.style.display = "block");
  }
  _v(t) {
    const r = this.jp;
    if (r === null) return;
    const n = (t.pageY - r.dv) * r.mv, i = mn(r.fv + n, r.wv, r.pv);
    this.Kp.cv().A_(i), this.Gp.cv().A_(r.vv - i), this.Yp.Qt().Ca();
  }
  uv(t) {
    this.jp !== null && this.Up !== null && (this.jp = null, this.Up.rv.style.display = "none");
  }
}
function hu(e3, t) {
  return e3.gv - t.gv;
}
function fu(e3, t, r) {
  const n = (e3.gv - t.gv) / (e3.wt - t.wt);
  return Math.sign(n) * Math.min(Math.abs(n), r);
}
class hB {
  constructor(t, r, n, i) {
    this.Mv = null, this.bv = null, this.Sv = null, this.xv = null, this.Cv = null, this.yv = 0, this.kv = 0, this.Pv = t, this.Tv = r, this.Rv = n, this.kn = i;
  }
  Dv(t, r) {
    if (this.Mv !== null) {
      if (this.Mv.wt === r) return void (this.Mv.gv = t);
      if (Math.abs(this.Mv.gv - t) < this.kn) return;
    }
    this.xv = this.Sv, this.Sv = this.bv, this.bv = this.Mv, this.Mv = { wt: r, gv: t };
  }
  fe(t, r) {
    if (this.Mv === null || this.bv === null || r - this.Mv.wt > 50) return;
    let n = 0;
    const i = fu(this.Mv, this.bv, this.Tv), s = hu(this.Mv, this.bv), a = [i], o = [s];
    if (n += s, this.Sv !== null) {
      const u = fu(this.bv, this.Sv, this.Tv);
      if (Math.sign(u) === Math.sign(i)) {
        const c = hu(this.bv, this.Sv);
        if (a.push(u), o.push(c), n += c, this.xv !== null) {
          const h = fu(this.Sv, this.xv, this.Tv);
          if (Math.sign(h) === Math.sign(i)) {
            const f = hu(this.Sv, this.xv);
            a.push(h), o.push(f), n += f;
          }
        }
      }
    }
    let l = 0;
    for (let u = 0; u < a.length; ++u) l += o[u] / n * a[u];
    Math.abs(l) < this.Pv || (this.Cv = { gv: t, wt: r }, this.kv = l, this.yv = (function(u, c) {
      const h = Math.log(c);
      return Math.log(1 * h / -u) / h;
    })(Math.abs(l), this.Rv));
  }
  Ac(t) {
    const r = C(this.Cv), n = t - r.wt;
    return r.gv + this.kv * (Math.pow(this.Rv, n) - 1) / Math.log(this.Rv);
  }
  Ec(t) {
    return this.Cv === null || this.Iv(t) === this.yv;
  }
  Iv(t) {
    const r = t - C(this.Cv).wt;
    return Math.min(r, this.yv);
  }
}
class fB {
  constructor(t, r) {
    this.Vv = void 0, this.Bv = void 0, this.Ev = void 0, this.ws = false, this.Av = t, this.Lv = r, this.zv();
  }
  kt() {
    this.zv();
  }
  Ov() {
    this.Vv && this.Av.removeChild(this.Vv), this.Bv && this.Av.removeChild(this.Bv), this.Vv = void 0, this.Bv = void 0;
  }
  Nv() {
    return this.ws !== this.Fv() || this.Ev !== this.Wv();
  }
  Wv() {
    return this.Lv.Qt().Xi().J(this.Lv.N().layout.textColor) > 160 ? "dark" : "light";
  }
  Fv() {
    return this.Lv.N().layout.attributionLogo;
  }
  Hv() {
    const t = new URL(location.href);
    return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
  }
  zv() {
    this.Nv() && (this.Ov(), this.ws = this.Fv(), this.ws && (this.Ev = this.Wv(), this.Bv = document.createElement("style"), this.Bv.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.Vv = document.createElement("a"), this.Vv.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.Hv()}`, this.Vv.title = "Charting by TradingView", this.Vv.id = "tv-attr-logo", this.Vv.target = "_blank", this.Vv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.Vv.toggleAttribute("data-dark", this.Ev === "dark"), this.Av.appendChild(this.Bv), this.Av.appendChild(this.Vv)));
  }
}
function Kr(e3, t) {
  const r = C(e3.ownerDocument).createElement("canvas");
  e3.appendChild(r);
  const n = X$(r, { options: { allowResizeObserver: true }, transform: (i, s) => ({ width: Math.max(i.width, s.width), height: Math.max(i.height, s.height) }) });
  return n.resizeCanvasElement(t), n;
}
function Ur(e3) {
  var _a3;
  e3.width = 1, e3.height = 1, (_a3 = e3.getContext("2d")) == null ? void 0 : _a3.clearRect(0, 0, 1, 1);
}
function dc(e3, t, r, n) {
  e3.Uh && e3.Uh(t, r, n);
}
function Ss(e3, t, r, n) {
  e3.nt(t, r, n);
}
function vc(e3, t, r, n) {
  const i = e3(r, n);
  for (const s of i) {
    const a = s.Tt(n);
    a !== null && t(a);
  }
}
function du(e3, t) {
  return (r) => {
    var _a3, _b2;
    return (function(n) {
      return n.Ft !== void 0;
    })(r) ? (((_a3 = r.Ft()) == null ? void 0 : _a3.ol()) ?? "") !== t ? [] : ((_b2 = r.Ya) == null ? void 0 : _b2.call(r, e3)) ?? [] : [];
  };
}
function Mg(e3, t, r, n) {
  if (!e3.length) return;
  let i = 0;
  const s = e3[0].$t(n, true);
  let a = t === 1 ? r / 2 - (e3[0].Hi() - s / 2) : e3[0].Hi() - s / 2 - r / 2;
  a = Math.max(0, a);
  for (let o = 1; o < e3.length; o++) {
    const l = e3[o], u = e3[o - 1], c = u.$t(n, false), h = l.Hi(), f = u.Hi();
    if (t === 1 ? h > f - c : h < f + c) {
      const d = f - c * t;
      l.Ui(d);
      const v = d - t * c / 2;
      if ((t === 1 ? v < 0 : v > r) && a > 0) {
        const m = t === 1 ? -1 - v : v - r, p = Math.min(m, a);
        for (let y = i; y < e3.length; y++) e3[y].Ui(e3[y].Hi() + t * p);
        a -= p;
      }
    } else i = o, a = t === 1 ? f - c - h : h - (f + c);
  }
}
class Eg {
  constructor(t, r, n, i) {
    this.Ki = null, this.Uv = null, this.$v = false, this.qv = new Ai(200), this.jv = null, this.Yv = 0, this.Kv = false, this.Zv = () => {
      this.Kv || this.yt.Gv().Qt().dr();
    }, this.Xv = () => {
      this.Kv || this.yt.Gv().Qt().dr();
    }, this.yt = t, this.Ps = r, this.Co = r.layout, this.hd = n, this.Jv = i === "left", this.Qv = du("normal", i), this.tm = du("top", i), this.im = du("bottom", i), this.Jp = document.createElement("div"), this.Jp.style.height = "100%", this.Jp.style.overflow = "hidden", this.Jp.style.width = "25px", this.Jp.style.left = "0", this.Jp.style.position = "relative", this.sm = Kr(this.Jp, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const s = this.sm.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.nm = Kr(this.Jp, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const a = this.nm.canvasElement;
    a.style.position = "absolute", a.style.zIndex = "2", a.style.left = "0", a.style.top = "0";
    const o = { Pp: this.ov.bind(this), yp: this.ov.bind(this), mp: this._v.bind(this), pp: this._v.bind(this), Tp: this.rm.bind(this), bp: this.uv.bind(this), gp: this.uv.bind(this), ip: this.hm.bind(this), Xf: this.hm.bind(this), lp: this.am.bind(this), zp: this.lv.bind(this) };
    this.$p = new Po(this.nm.canvasElement, o, { dp: () => !this.Ps.handleScroll.vertTouchDrag, fp: () => true });
  }
  m() {
    this.$p.m(), this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Ur(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Ur(this.sm.canvasElement), this.sm.dispose(), this.Ki !== null && this.Ki.r_().u(this), this.Ki = null;
  }
  iv() {
    return this.Jp;
  }
  k() {
    return this.Co.fontSize;
  }
  lm() {
    const t = this.hd.N();
    return this.jv !== t.P && (this.qv.On(), this.jv = t.P), t;
  }
  om() {
    if (this.Ki === null) return 0;
    let t = 0;
    const r = this.lm(), n = C(this.sm.canvasElement.getContext("2d", { colorSpace: this.yt.Gv().N().layout.colorSpace }));
    n.save();
    const i = this.Ki.Vl();
    n.font = this._m(), i.length > 0 && (t = Math.max(this.qv.Ii(n, i[0].Jl), this.qv.Ii(n, i[i.length - 1].Jl)));
    const s = this.um();
    for (let u = s.length; u--; ) {
      const c = this.qv.Ii(n, s[u].ri());
      c > t && (t = c);
    }
    const a = this.Ki.Lt();
    if (a !== null && this.Uv !== null && (o = this.Ps.crosshair).mode !== 2 && o.horzLine.visible && o.horzLine.labelVisible) {
      const u = this.Ki.Ds(1, a), c = this.Ki.Ds(this.Uv.height - 2, a);
      t = Math.max(t, this.qv.Ii(n, this.Ki.Ji(Math.floor(Math.min(u, c)) + 0.11111111111111, a)), this.qv.Ii(n, this.Ki.Ji(Math.ceil(Math.max(u, c)) - 0.11111111111111, a)));
    }
    var o;
    n.restore();
    const l = t || 34;
    return fc(Math.ceil(r.S + r.C + r.V + r.B + 5 + l));
  }
  dm(t) {
    this.Uv !== null && Tr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`);
  }
  fm() {
    return C(this.Uv).width;
  }
  cs(t) {
    this.Ki !== t && (this.Ki !== null && this.Ki.r_().u(this), this.Ki = t, t.r_().i(this.do.bind(this), this));
  }
  Ft() {
    return this.Ki;
  }
  On() {
    const t = this.yt.cv();
    this.yt.Gv().Qt().Q_(t, C(this.Ft()));
  }
  pm(t) {
    if (this.Uv === null) return;
    const r = { colorSpace: this.yt.Gv().N().layout.colorSpace };
    if (t !== 1) {
      this.vm(), this.sm.applySuggestedBitmapSize();
      const i = Wr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s), this.gm(s);
      })), this.yt.Mm(i, this.im), this.bm(i), this.yt.Mm(i, this.Qv), this.Sm(i));
    }
    this.nm.applySuggestedBitmapSize();
    const n = Wr(this.nm, r);
    n !== null && (n.useBitmapCoordinateSpace((({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    })), this.xm(n), this.yt.Mm(n, this.tm));
  }
  nv() {
    return this.sm.bitmapSize;
  }
  ev(t, r, n, i) {
    const s = this.nv();
    if (s.width > 0 && s.height > 0 && (t.drawImage(this.sm.canvasElement, r, n), i)) {
      const a = this.nm.canvasElement;
      t.drawImage(a, r, n);
    }
  }
  kt() {
    var _a3;
    (_a3 = this.Ki) == null ? void 0 : _a3.Vl();
  }
  ov(t) {
    if (this.Ki === null || this.Ki.Gi() || !this.Ps.handleScale.axisPressedMouseMove.price) return;
    const r = this.yt.Gv().Qt(), n = this.yt.cv();
    this.$v = true, r.j_(n, this.Ki, t.localY);
  }
  _v(t) {
    if (this.Ki === null || !this.Ps.handleScale.axisPressedMouseMove.price) return;
    const r = this.yt.Gv().Qt(), n = this.yt.cv(), i = this.Ki;
    r.Y_(n, i, t.localY);
  }
  rm() {
    if (this.Ki === null || !this.Ps.handleScale.axisPressedMouseMove.price) return;
    const t = this.yt.Gv().Qt(), r = this.yt.cv(), n = this.Ki;
    this.$v && (this.$v = false, t.K_(r, n));
  }
  uv(t) {
    if (this.Ki === null || !this.Ps.handleScale.axisPressedMouseMove.price) return;
    const r = this.yt.Gv().Qt(), n = this.yt.cv();
    this.$v = false, r.K_(n, this.Ki);
  }
  hm(t) {
    this.Ps.handleScale.axisDoubleClickReset.price && this.On();
  }
  am(t) {
    this.Ki !== null && (!this.yt.Gv().Qt().N().handleScale.axisPressedMouseMove.price || this.Ki.He() || this.Ki.Eo() || this.Cm(1));
  }
  lv(t) {
    this.Cm(0);
  }
  um() {
    const t = [], r = this.Ki === null ? void 0 : this.Ki;
    return ((n) => {
      for (let i = 0; i < n.length; ++i) {
        const s = n[i].Ks(this.yt.cv(), r);
        for (let a = 0; a < s.length; a++) t.push(s[a]);
      }
    })(this.yt.cv().Dt()), t;
  }
  wm({ context: t, bitmapSize: r }) {
    const { width: n, height: i } = r, s = this.yt.cv().Qt(), a = s.$(), o = s.Kd();
    a === o ? go(t, 0, 0, n, i, a) : u1(t, 0, 0, n, i, a, o);
  }
  gm({ context: t, bitmapSize: r, horizontalPixelRatio: n }) {
    if (this.Uv === null || this.Ki === null || !this.Ki.N().borderVisible) return;
    t.fillStyle = this.Ki.N().borderColor;
    const i = Math.max(1, Math.floor(this.lm().S * n));
    let s;
    s = this.Jv ? r.width - i : 0, t.fillRect(s, 0, i, r.height);
  }
  bm(t) {
    if (this.Uv === null || this.Ki === null) return;
    const r = this.Ki.Vl(), n = this.Ki.N(), i = this.lm(), s = this.Jv ? this.Uv.width - i.C : 0;
    n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace((({ context: a, horizontalPixelRatio: o, verticalPixelRatio: l }) => {
      a.fillStyle = n.borderColor;
      const u = Math.max(1, Math.floor(l)), c = Math.floor(0.5 * l), h = Math.round(i.C * o);
      a.beginPath();
      for (const f of r) a.rect(Math.floor(s * o), Math.round(f.Pl * l) - c, h, u);
      a.fill();
    })), t.useMediaCoordinateSpace((({ context: a }) => {
      a.font = this._m(), a.fillStyle = n.textColor ?? this.Co.textColor, a.textAlign = this.Jv ? "right" : "left", a.textBaseline = "middle";
      const o = this.Jv ? Math.round(s - i.V) : Math.round(s + i.C + i.V), l = r.map(((u) => this.qv.Di(a, u.Jl)));
      for (let u = r.length; u--; ) {
        const c = r[u];
        a.fillText(c.Jl, o, c.Pl + l[u]);
      }
    }));
  }
  vm() {
    if (this.Uv === null || this.Ki === null) return;
    let t = this.Uv.height / 2;
    const r = [], n = this.Ki.Dt().slice(), i = this.yt.cv(), s = this.lm();
    this.Ki === i.Gn() && this.yt.cv().Dt().forEach(((l) => {
      i.Zn(l) && n.push(l);
    }));
    const a = this.Ki.Sl()[0], o = this.Ki;
    n.forEach(((l) => {
      const u = l.Ks(i, o);
      u.forEach(((c) => {
        c.$i() && c.Wi() === null && (c.Ui(null), r.push(c));
      })), a === l && u.length > 0 && (t = u[0].Ei());
    })), this.Ki.N().alignLabels && this.ym(r, s, t);
  }
  ym(t, r, n) {
    if (this.Uv === null) return;
    const i = t.filter(((a) => a.Ei() <= n)), s = t.filter(((a) => a.Ei() > n));
    i.sort(((a, o) => o.Ei() - a.Ei())), i.length && s.length && s.push(i[0]), s.sort(((a, o) => a.Ei() - o.Ei()));
    for (const a of t) {
      const o = Math.floor(a.$t(r) / 2), l = a.Ei();
      l > -o && l < o && a.Ui(o), l > this.Uv.height - o && l < this.Uv.height + o && a.Ui(this.Uv.height - o);
    }
    Mg(i, 1, this.Uv.height, r), Mg(s, -1, this.Uv.height, r);
  }
  Sm(t) {
    if (this.Uv === null) return;
    const r = this.um(), n = this.lm(), i = this.Jv ? "right" : "left";
    r.forEach(((s) => {
      s.qi() && s.Tt(C(this.Ki)).nt(t, n, this.qv, i);
    }));
  }
  xm(t) {
    if (this.Uv === null || this.Ki === null) return;
    const r = this.yt.Gv().Qt(), n = [], i = this.yt.cv(), s = r.gd().Ks(i, this.Ki);
    s.length && n.push(s);
    const a = this.lm(), o = this.Jv ? "right" : "left";
    n.forEach(((l) => {
      l.forEach(((u) => {
        u.Tt(C(this.Ki)).nt(t, a, this.qv, o);
      }));
    }));
  }
  Cm(t) {
    this.Jp.style.cursor = t === 1 ? "ns-resize" : "default";
  }
  do() {
    const t = this.om();
    this.Yv < t && this.yt.Gv().Qt().Ca(), this.Yv = t;
  }
  _m() {
    return Ei(this.Co.fontSize, this.Co.fontFamily);
  }
}
function dB(e3, t) {
  var _a3;
  return ((_a3 = e3.qa) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function Ag(e3, t) {
  var _a3;
  return ((_a3 = e3.Ys) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function Cg(e3, t) {
  var _a3;
  return ((_a3 = e3.ds) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function vB(e3, t) {
  var _a3;
  return ((_a3 = e3.Ha) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
class Jh {
  constructor(t, r) {
    this.Uv = Z({ width: 0, height: 0 }), this.km = null, this.Pm = null, this.Tm = null, this.Rm = null, this.Dm = false, this.Im = new ut(), this.Vm = new ut(), this.Bm = 0, this.Em = false, this.Am = null, this.Lm = false, this.zm = null, this.Om = null, this.Kv = false, this.Zv = () => {
      this.Kv || this.Nm === null || this.ns().dr();
    }, this.Xv = () => {
      this.Kv || this.Nm === null || this.ns().dr();
    }, this.Lv = t, this.Nm = r, this.Nm.nu().i(this.Fm.bind(this), this, true), this.Wm = document.createElement("td"), this.Wm.style.padding = "0", this.Wm.style.position = "relative";
    const n = document.createElement("div");
    n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.Hm = document.createElement("td"), this.Hm.style.padding = "0", this.Um = document.createElement("td"), this.Um.style.padding = "0", this.Wm.appendChild(n), this.sm = Kr(n, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const i = this.sm.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.nm = Kr(n, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const s = this.nm.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.Xp = document.createElement("tr"), this.Xp.appendChild(this.Hm), this.Xp.appendChild(this.Wm), this.Xp.appendChild(this.Um), this.$m(), this.$p = new Po(this.nm.canvasElement, this, { dp: () => this.Am === null && !this.Lv.N().handleScroll.vertTouchDrag, fp: () => this.Am === null && !this.Lv.N().handleScroll.horzTouchDrag });
  }
  m() {
    this.km !== null && this.km.m(), this.Pm !== null && this.Pm.m(), this.Tm = null, this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Ur(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Ur(this.sm.canvasElement), this.sm.dispose(), this.Nm !== null && (this.Nm.nu().u(this), this.Nm.m()), this.$p.m();
  }
  cv() {
    return C(this.Nm);
  }
  qm(t) {
    var _a3;
    this.Nm !== null && this.Nm.nu().u(this), this.Nm = t, this.Nm !== null && this.Nm.nu().i(Jh.prototype.Fm.bind(this), this, true), this.$m(), this.Lv.Zp().indexOf(this) === this.Lv.Zp().length - 1 ? (this.Tm = this.Tm ?? new fB(this.Wm, this.Lv), this.Tm.kt()) : ((_a3 = this.Tm) == null ? void 0 : _a3.Ov(), this.Tm = null);
  }
  Gv() {
    return this.Lv;
  }
  iv() {
    return this.Xp;
  }
  $m() {
    if (this.Nm !== null && (this.jm(), this.ns().tn().length !== 0)) {
      if (this.km !== null) {
        const t = this.Nm.U_();
        this.km.cs(C(t));
      }
      if (this.Pm !== null) {
        const t = this.Nm.q_();
        this.Pm.cs(C(t));
      }
    }
  }
  Ym() {
    this.km !== null && this.km.kt(), this.Pm !== null && this.Pm.kt();
  }
  E_() {
    return this.Nm !== null ? this.Nm.E_() : 0;
  }
  A_(t) {
    this.Nm && this.Nm.A_(t);
  }
  lp(t) {
    if (!this.Nm) return;
    this.Km();
    const r = t.localX, n = t.localY;
    this.Zm(r, n, t);
  }
  Pp(t) {
    this.Km(), this.Gm(), this.Zm(t.localX, t.localY, t);
  }
  op(t) {
    if (!this.Nm) return;
    this.Km();
    const r = t.localX, n = t.localY;
    this.Zm(r, n, t);
  }
  Sp(t) {
    this.Nm !== null && (this.Km(), this.Xm(t));
  }
  ip(t) {
    this.Nm !== null && this.Jm(this.Vm, t);
  }
  Xf(t) {
    this.ip(t);
  }
  mp(t) {
    this.Km(), this.Qm(t), this.Zm(t.localX, t.localY, t);
  }
  bp(t) {
    this.Nm !== null && (this.Km(), this.Em = false, this.tw(t));
  }
  Mp(t) {
    this.Nm !== null && this.Xm(t);
  }
  Op(t) {
    if (this.Em = true, this.Am === null) {
      const r = { x: t.localX, y: t.localY };
      this.iw(r, r, t);
    }
  }
  zp(t) {
    this.Nm !== null && (this.Km(), this.Nm.Qt().vd(null), this.sw());
  }
  nw() {
    return this.Im;
  }
  ew() {
    return this.Vm;
  }
  Ip() {
    this.Bm = 1, this.ns().dn();
  }
  Vp(t, r) {
    if (!this.Lv.N().handleScale.pinch) return;
    const n = 5 * (r - this.Bm);
    this.Bm = r, this.ns().Td(t._t, n);
  }
  yp(t) {
    this.Em = false, this.Lm = this.Am !== null, this.Gm();
    const r = this.ns().gd();
    this.Am !== null && r.It() && (this.zm = { x: r.si(), y: r.ni() }, this.Am = { x: t.localX, y: t.localY });
  }
  pp(t) {
    if (this.Nm === null) return;
    const r = t.localX, n = t.localY;
    if (this.Am === null) this.Qm(t);
    else {
      this.Lm = false;
      const i = C(this.zm), s = i.x + (r - this.Am.x), a = i.y + (n - this.Am.y);
      this.Zm(s, a, t);
    }
  }
  gp(t) {
    this.Gv().N().trackingMode.exitMode === 0 && (this.Lm = true), this.rw(), this.tw(t);
  }
  Qn(t, r) {
    const n = this.Nm;
    return n === null ? null : w1(n, t, r);
  }
  hw(t, r) {
    C(r === "left" ? this.km : this.Pm).dm(Z({ width: t, height: this.Uv.height }));
  }
  sv() {
    return this.Uv;
  }
  dm(t) {
    Tr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Wm.style.width = t.width + "px", this.Wm.style.height = t.height + "px");
  }
  aw() {
    const t = C(this.Nm);
    t.H_(t.U_()), t.H_(t.q_());
    for (const r of t.Sl()) if (t.Zn(r)) {
      const n = r.Ft();
      n !== null && t.H_(n), r.Ws();
    }
    for (const r of t.ru()) r.Ws();
  }
  nv() {
    return this.sm.bitmapSize;
  }
  ev(t, r, n, i) {
    const s = this.nv();
    if (s.width > 0 && s.height > 0 && (t.drawImage(this.sm.canvasElement, r, n), i)) {
      const a = this.nm.canvasElement;
      t !== null && t.drawImage(a, r, n);
    }
  }
  pm(t) {
    if (t === 0 || this.Nm === null) return;
    t > 1 && this.aw(), this.km !== null && this.km.pm(t), this.Pm !== null && this.Pm.pm(t);
    const r = { colorSpace: this.Lv.N().layout.colorSpace };
    if (t !== 1) {
      this.sm.applySuggestedBitmapSize();
      const i = Wr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s);
      })), this.Nm && (this.lw(i, dB), this.ow(i), this.lw(i, Ag), this.lw(i, Cg)));
    }
    this.nm.applySuggestedBitmapSize();
    const n = Wr(this.nm, r);
    n !== null && (n.useBitmapCoordinateSpace((({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    })), this._w(n), this.lw(n, vB), this.lw(n, Cg));
  }
  uw() {
    return this.km;
  }
  cw() {
    return this.Pm;
  }
  Mm(t, r) {
    this.lw(t, r);
  }
  Fm() {
    this.Nm !== null && this.Nm.nu().u(this), this.Nm = null;
  }
  Xm(t) {
    this.Jm(this.Im, t);
  }
  Jm(t, r) {
    const n = r.localX, i = r.localY;
    t.v() && t.p(this.ns().Et().wc(n), { x: n, y: i }, r);
  }
  wm({ context: t, bitmapSize: r }) {
    const { width: n, height: i } = r, s = this.ns(), a = s.$(), o = s.Kd();
    a === o ? go(t, 0, 0, n, i, o) : u1(t, 0, 0, n, i, a, o);
  }
  ow(t) {
    const r = C(this.Nm), n = r.eu().pr().Tt(r);
    n !== null && n.nt(t, false);
  }
  _w(t) {
    this.dw(t, Ag, Ss, this.ns().gd());
  }
  lw(t, r) {
    const n = C(this.Nm), i = n.Dt(), s = n.ru();
    for (const a of s) this.dw(t, r, dc, a);
    for (const a of i) this.dw(t, r, dc, a);
    for (const a of s) this.dw(t, r, Ss, a);
    for (const a of i) this.dw(t, r, Ss, a);
  }
  dw(t, r, n, i) {
    const s = C(this.Nm), a = s.Qt().pd(), o = a !== null && a.hu === i, l = a !== null && o && a.au !== void 0 ? a.au.ie : void 0;
    vc(r, ((u) => n(u, t, o, l)), i, s);
  }
  jm() {
    if (this.Nm === null) return;
    const t = this.Lv, r = this.Nm.U_().N().visible, n = this.Nm.q_().N().visible;
    r || this.km === null || (this.Hm.removeChild(this.km.iv()), this.km.m(), this.km = null), n || this.Pm === null || (this.Um.removeChild(this.Pm.iv()), this.Pm.m(), this.Pm = null);
    const i = t.Qt().Nd();
    r && this.km === null && (this.km = new Eg(this, t.N(), i, "left"), this.Hm.appendChild(this.km.iv())), n && this.Pm === null && (this.Pm = new Eg(this, t.N(), i, "right"), this.Um.appendChild(this.Pm.iv()));
  }
  fw(t) {
    return t.Np && this.Em || this.Am !== null;
  }
  Zm(t, r, n) {
    t = Math.max(0, Math.min(t, this.Uv.width - 1)), r = Math.max(0, Math.min(r, this.Uv.height - 1)), this.ns().Ad(t, r, n, C(this.Nm));
  }
  sw() {
    this.ns().zd();
  }
  rw() {
    this.Lm && (this.Am = null, this.sw());
  }
  iw(t, r, n) {
    this.Am = t, this.Lm = false, this.Zm(r.x, r.y, n);
    const i = this.ns().gd();
    this.zm = { x: i.si(), y: i.ni() };
  }
  ns() {
    return this.Lv.Qt();
  }
  tw(t) {
    if (!this.Dm) return;
    const r = this.ns(), n = this.cv();
    if (r.X_(n, n.Rs()), this.Rm = null, this.Dm = false, r.Vd(), this.Om !== null) {
      const i = performance.now(), s = r.Et();
      this.Om.fe(s.Cc(), i), this.Om.Ec(i) || r.vn(this.Om);
    }
  }
  Km() {
    this.Am = null;
  }
  Gm() {
    if (this.Nm) {
      if (this.ns().dn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) C(document.activeElement).blur();
      else {
        const t = document.getSelection();
        t !== null && t.removeAllRanges();
      }
      !this.Nm.Rs().Gi() && this.ns().Et().Gi();
    }
  }
  Qm(t) {
    if (this.Nm === null) return;
    const r = this.ns(), n = r.Et();
    if (n.Gi()) return;
    const i = this.Lv.N(), s = i.handleScroll, a = i.kineticScroll;
    if ((!s.pressedMouseMove || t.Np) && (!s.horzTouchDrag && !s.vertTouchDrag || !t.Np)) return;
    const o = this.Nm.Rs(), l = performance.now();
    if (this.Rm !== null || this.fw(t) || (this.Rm = { x: t.clientX, y: t.clientY, cf: l, pw: t.localX, mw: t.localY }), this.Rm !== null && !this.Dm && (this.Rm.x !== t.clientX || this.Rm.y !== t.clientY)) {
      if (t.Np && a.touch || !t.Np && a.mouse) {
        const u = n.ul();
        this.Om = new hB(0.2 / u, 7 / u, 0.997, 15 / u), this.Om.Dv(n.Cc(), this.Rm.cf);
      } else this.Om = null;
      o.Gi() || r.Z_(this.Nm, o, t.localY), r.Dd(t.localX), this.Dm = true;
    }
    this.Dm && (o.Gi() || r.G_(this.Nm, o, t.localY), r.Id(t.localX), this.Om !== null && this.Om.Dv(n.Cc(), l));
  }
}
class kg {
  constructor(t, r, n, i, s) {
    this.xt = true, this.Uv = Z({ width: 0, height: 0 }), this.Zv = () => this.pm(3), this.Jv = t === "left", this.hd = n.Nd, this.Ps = r, this.ww = i, this.gw = s, this.Jp = document.createElement("div"), this.Jp.style.width = "25px", this.Jp.style.height = "100%", this.Jp.style.overflow = "hidden", this.sm = Kr(this.Jp, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
  }
  m() {
    this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Ur(this.sm.canvasElement), this.sm.dispose();
  }
  iv() {
    return this.Jp;
  }
  sv() {
    return this.Uv;
  }
  dm(t) {
    Tr(this.Uv, t) || (this.Uv = t, this.sm.resizeCanvasElement(t), this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`, this.xt = true);
  }
  pm(t) {
    if (t < 3 && !this.xt || this.Uv.width === 0 || this.Uv.height === 0) return;
    this.xt = false, this.sm.applySuggestedBitmapSize();
    const r = Wr(this.sm, { colorSpace: this.Ps.layout.colorSpace });
    r !== null && r.useBitmapCoordinateSpace(((n) => {
      this.wm(n), this.gm(n);
    }));
  }
  nv() {
    return this.sm.bitmapSize;
  }
  ev(t, r, n) {
    const i = this.nv();
    i.width > 0 && i.height > 0 && t.drawImage(this.sm.canvasElement, r, n);
  }
  gm({ context: t, bitmapSize: r, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (!this.ww()) return;
    t.fillStyle = this.Ps.timeScale.borderColor;
    const s = Math.floor(this.hd.N().S * n), a = Math.floor(this.hd.N().S * i), o = this.Jv ? r.width - s : 0;
    t.fillRect(o, 0, s, a);
  }
  wm({ context: t, bitmapSize: r }) {
    go(t, 0, 0, r.width, r.height, this.gw());
  }
}
function Zh(e3) {
  return (t) => {
    var _a3;
    return ((_a3 = t.Ka) == null ? void 0 : _a3.call(t, e3)) ?? [];
  };
}
const pB = Zh("normal"), mB = Zh("top"), gB = Zh("bottom");
class yB {
  constructor(t, r) {
    this.Mw = null, this.bw = null, this.M = null, this.Sw = false, this.Uv = Z({ width: 0, height: 0 }), this.xw = new ut(), this.qv = new Ai(5), this.Kv = false, this.Zv = () => {
      this.Kv || this.Lv.Qt().dr();
    }, this.Xv = () => {
      this.Kv || this.Lv.Qt().dr();
    }, this.Lv = t, this.cu = r, this.Ps = t.N().layout, this.Vv = document.createElement("tr"), this.Cw = document.createElement("td"), this.Cw.style.padding = "0", this.yw = document.createElement("td"), this.yw.style.padding = "0", this.Jp = document.createElement("td"), this.Jp.style.height = "25px", this.Jp.style.padding = "0", this.kw = document.createElement("div"), this.kw.style.width = "100%", this.kw.style.height = "100%", this.kw.style.position = "relative", this.kw.style.overflow = "hidden", this.Jp.appendChild(this.kw), this.sm = Kr(this.kw, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const n = this.sm.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.nm = Kr(this.kw, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const i = this.nm.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "2", i.style.left = "0", i.style.top = "0", this.Vv.appendChild(this.Cw), this.Vv.appendChild(this.Jp), this.Vv.appendChild(this.yw), this.Pw(), this.Lv.Qt().B_().i(this.Pw.bind(this), this), this.$p = new Po(this.nm.canvasElement, this, { dp: () => true, fp: () => !this.Lv.N().handleScroll.horzTouchDrag });
  }
  m() {
    this.$p.m(), this.Mw !== null && this.Mw.m(), this.bw !== null && this.bw.m(), this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Ur(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Ur(this.sm.canvasElement), this.sm.dispose();
  }
  iv() {
    return this.Vv;
  }
  Tw() {
    return this.Mw;
  }
  Rw() {
    return this.bw;
  }
  Pp(t) {
    if (this.Sw) return;
    this.Sw = true;
    const r = this.Lv.Qt();
    !r.Et().Gi() && this.Lv.N().handleScale.axisPressedMouseMove.time && r.Pd(t.localX);
  }
  yp(t) {
    this.Pp(t);
  }
  Tp() {
    const t = this.Lv.Qt();
    !t.Et().Gi() && this.Sw && (this.Sw = false, this.Lv.N().handleScale.axisPressedMouseMove.time && t.Ed());
  }
  mp(t) {
    const r = this.Lv.Qt();
    !r.Et().Gi() && this.Lv.N().handleScale.axisPressedMouseMove.time && r.Bd(t.localX);
  }
  pp(t) {
    this.mp(t);
  }
  bp() {
    this.Sw = false;
    const t = this.Lv.Qt();
    t.Et().Gi() && !this.Lv.N().handleScale.axisPressedMouseMove.time || t.Ed();
  }
  gp() {
    this.bp();
  }
  ip() {
    this.Lv.N().handleScale.axisDoubleClickReset.time && this.Lv.Qt().wn();
  }
  Xf() {
    this.ip();
  }
  lp() {
    this.Lv.Qt().N().handleScale.axisPressedMouseMove.time && this.Cm(1);
  }
  zp() {
    this.Cm(0);
  }
  sv() {
    return this.Uv;
  }
  Dw() {
    return this.xw;
  }
  Iw(t, r, n) {
    Tr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`, this.xw.p(t)), this.Mw !== null && this.Mw.dm(Z({ width: r, height: t.height })), this.bw !== null && this.bw.dm(Z({ width: n, height: t.height }));
  }
  Vw() {
    const t = this.Bw();
    return Math.ceil(t.S + t.C + t.k + t.A + t.I + t.Ew);
  }
  kt() {
    this.Lv.Qt().Et().Vl();
  }
  nv() {
    return this.sm.bitmapSize;
  }
  ev(t, r, n, i) {
    const s = this.nv();
    if (s.width > 0 && s.height > 0 && (t.drawImage(this.sm.canvasElement, r, n), i)) {
      const a = this.nm.canvasElement;
      t.drawImage(a, r, n);
    }
  }
  pm(t) {
    if (t === 0) return;
    const r = { colorSpace: this.Ps.colorSpace };
    if (t !== 1) {
      this.sm.applySuggestedBitmapSize();
      const i = Wr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s), this.gm(s), this.Aw(i, gB);
      })), this.bm(i), this.Aw(i, pB)), this.Mw !== null && this.Mw.pm(t), this.bw !== null && this.bw.pm(t);
    }
    this.nm.applySuggestedBitmapSize();
    const n = Wr(this.nm, r);
    n !== null && (n.useBitmapCoordinateSpace((({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    })), this.Lw([...this.Lv.Qt().tn(), this.Lv.Qt().gd()], n), this.Aw(n, mB));
  }
  Aw(t, r) {
    const n = this.Lv.Qt().tn();
    for (const i of n) vc(r, ((s) => dc(s, t, false, void 0)), i, void 0);
    for (const i of n) vc(r, ((s) => Ss(s, t, false, void 0)), i, void 0);
  }
  wm({ context: t, bitmapSize: r }) {
    go(t, 0, 0, r.width, r.height, this.Lv.Qt().Kd());
  }
  gm({ context: t, bitmapSize: r, verticalPixelRatio: n }) {
    if (this.Lv.N().timeScale.borderVisible) {
      t.fillStyle = this.zw();
      const i = Math.max(1, Math.floor(this.Bw().S * n));
      t.fillRect(0, 0, r.width, i);
    }
  }
  bm(t) {
    const r = this.Lv.Qt().Et(), n = r.Vl();
    if (!n || n.length === 0) return;
    const i = this.cu.maxTickMarkWeight(n), s = this.Bw(), a = r.N();
    a.borderVisible && a.ticksVisible && t.useBitmapCoordinateSpace((({ context: o, horizontalPixelRatio: l, verticalPixelRatio: u }) => {
      o.strokeStyle = this.zw(), o.fillStyle = this.zw();
      const c = Math.max(1, Math.floor(l)), h = Math.floor(0.5 * l);
      o.beginPath();
      const f = Math.round(s.C * u);
      for (let d = n.length; d--; ) {
        const v = Math.round(n[d].coord * l);
        o.rect(v - h, 0, c, f);
      }
      o.fill();
    })), t.useMediaCoordinateSpace((({ context: o }) => {
      const l = s.S + s.C + s.A + s.k / 2;
      o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = this.H(), o.font = this._m();
      for (const u of n) if (u.weight < i) {
        const c = u.needAlignCoordinate ? this.Ow(o, u.coord, u.label) : u.coord;
        o.fillText(u.label, c, l);
      }
      this.Lv.N().timeScale.allowBoldLabels && (o.font = this.Nw());
      for (const u of n) if (u.weight >= i) {
        const c = u.needAlignCoordinate ? this.Ow(o, u.coord, u.label) : u.coord;
        o.fillText(u.label, c, l);
      }
    }));
  }
  Ow(t, r, n) {
    const i = this.qv.Ii(t, n), s = i / 2, a = Math.floor(r - s) + 0.5;
    return a < 0 ? r += Math.abs(0 - a) : a + i > this.Uv.width && (r -= Math.abs(this.Uv.width - (a + i))), r;
  }
  Lw(t, r) {
    const n = this.Bw();
    for (const i of t) for (const s of i.fs()) s.Tt().nt(r, n);
  }
  zw() {
    return this.Lv.N().timeScale.borderColor;
  }
  H() {
    return this.Ps.textColor;
  }
  F() {
    return this.Ps.fontSize;
  }
  _m() {
    return Ei(this.F(), this.Ps.fontFamily);
  }
  Nw() {
    return Ei(this.F(), this.Ps.fontFamily, "bold");
  }
  Bw() {
    this.M === null && (this.M = { S: 1, L: NaN, A: NaN, I: NaN, ts: NaN, C: 5, k: NaN, P: "", Qi: new Ai(), Ew: 0 });
    const t = this.M, r = this._m();
    if (t.P !== r) {
      const n = this.F();
      t.k = n, t.P = r, t.A = 3 * n / 12, t.I = 3 * n / 12, t.ts = 9 * n / 12, t.L = 0, t.Ew = 4 * n / 12, t.Qi.On();
    }
    return this.M;
  }
  Cm(t) {
    this.Jp.style.cursor = t === 1 ? "ew-resize" : "default";
  }
  Pw() {
    const t = this.Lv.Qt(), r = t.N();
    r.leftPriceScale.visible || this.Mw === null || (this.Cw.removeChild(this.Mw.iv()), this.Mw.m(), this.Mw = null), r.rightPriceScale.visible || this.bw === null || (this.yw.removeChild(this.bw.iv()), this.bw.m(), this.bw = null);
    const n = { Nd: this.Lv.Qt().Nd() }, i = () => r.leftPriceScale.borderVisible && t.Et().N().borderVisible, s = () => t.Kd();
    r.leftPriceScale.visible && this.Mw === null && (this.Mw = new kg("left", r, n, i, s), this.Cw.appendChild(this.Mw.iv())), r.rightPriceScale.visible && this.bw === null && (this.bw = new kg("right", r, n, i, s), this.yw.appendChild(this.bw.iv()));
  }
}
const bB = !!An && !!navigator.userAgentData && navigator.userAgentData.brands.some(((e3) => e3.brand.includes("Chromium"))) && !!An && (((_a2 = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a2.platform) ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
class wB {
  constructor(t, r, n) {
    var i;
    this.Fw = [], this.Ww = [], this.Hw = 0, this.eo = 0, this.S_ = 0, this.Uw = 0, this.$w = 0, this.qw = null, this.jw = false, this.Im = new ut(), this.Vm = new ut(), this.nd = new ut(), this.Yw = null, this.Kw = null, this.Av = t, this.Ps = r, this.cu = n, this.Vv = document.createElement("div"), this.Vv.classList.add("tv-lightweight-charts"), this.Vv.style.overflow = "hidden", this.Vv.style.direction = "ltr", this.Vv.style.width = "100%", this.Vv.style.height = "100%", (i = this.Vv).style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.msUserSelect = "none", i.style.MozUserSelect = "none", i.style.webkitTapHighlightColor = "transparent", this.Zw = document.createElement("table"), this.Zw.setAttribute("cellspacing", "0"), this.Vv.appendChild(this.Zw), this.Gw = this.Xw.bind(this), vu(this.Ps) && this.Jw(true), this.ns = new iB(this.rd.bind(this), this.Ps, n), this.Qt().Md().i(this.Qw.bind(this), this), this.tg = new yB(this, this.cu), this.Zw.appendChild(this.tg.iv());
    const s = r.autoSize && this.ig();
    let a = this.Ps.width, o = this.Ps.height;
    if (s || a === 0 || o === 0) {
      const l = t.getBoundingClientRect();
      a = a || l.width, o = o || l.height;
    }
    this.sg(a, o), this.ng(), t.appendChild(this.Vv), this.eg(), this.ns.Et().Oc().i(this.ns.Ca.bind(this.ns), this), this.ns.B_().i(this.ns.Ca.bind(this.ns), this);
  }
  Qt() {
    return this.ns;
  }
  N() {
    return this.Ps;
  }
  Zp() {
    return this.Fw;
  }
  rg() {
    return this.tg;
  }
  m() {
    this.Jw(false), this.Hw !== 0 && window.cancelAnimationFrame(this.Hw), this.ns.Md().u(this), this.ns.Et().Oc().u(this), this.ns.B_().u(this), this.ns.m();
    for (const t of this.Fw) this.Zw.removeChild(t.iv()), t.nw().u(this), t.ew().u(this), t.m();
    this.Fw = [];
    for (const t of this.Ww) this.hg(t);
    this.Ww = [], C(this.tg).m(), this.Vv.parentElement !== null && this.Vv.parentElement.removeChild(this.Vv), this.nd.m(), this.Im.m(), this.Vm.m(), this.ag();
  }
  sg(t, r, n = false) {
    if (this.eo === r && this.S_ === t) return;
    const i = (function(o) {
      const l = Math.floor(o.width), u = Math.floor(o.height);
      return Z({ width: l - l % 2, height: u - u % 2 });
    })(Z({ width: t, height: r }));
    this.eo = i.height, this.S_ = i.width;
    const s = this.eo + "px", a = this.S_ + "px";
    C(this.Vv).style.height = s, C(this.Vv).style.width = a, this.Zw.style.height = s, this.Zw.style.width = a, n ? this.lg(Ot.yn(), performance.now()) : this.ns.Ca();
  }
  pm(t) {
    t === void 0 && (t = Ot.yn());
    for (let r = 0; r < this.Fw.length; r++) this.Fw[r].pm(t.un(r).an);
    this.Ps.timeScale.visible && this.tg.pm(t._n());
  }
  cr(t) {
    var _a3;
    const r = vu(this.Ps);
    this.ns.cr(t);
    const n = vu(this.Ps);
    n !== r && this.Jw(n), ((_a3 = t.layout) == null ? void 0 : _a3.panes) && this.og(), this.eg(), this._g(t);
  }
  nw() {
    return this.Im;
  }
  ew() {
    return this.Vm;
  }
  Md() {
    return this.nd;
  }
  ug(t = false) {
    this.qw !== null && (this.lg(this.qw, performance.now()), this.qw = null);
    const r = this.cg(null), n = document.createElement("canvas");
    n.width = r.width, n.height = r.height;
    const i = C(n.getContext("2d"));
    return this.cg(i, t), n;
  }
  dg(t) {
    return t === "left" && !this.fg() || t === "right" && !this.pg() || this.Fw.length === 0 ? 0 : C(t === "left" ? this.Fw[0].uw() : this.Fw[0].cw()).fm();
  }
  vg() {
    return this.Ps.autoSize && this.Yw !== null;
  }
  hv() {
    return this.Vv;
  }
  mg(t) {
    this.Kw = t, this.Kw ? this.hv().style.setProperty("cursor", t) : this.hv().style.removeProperty("cursor");
  }
  wg() {
    return this.Kw;
  }
  gg(t) {
    return Ht(this.Fw[t]).sv();
  }
  og() {
    this.Ww.forEach(((t) => {
      t.kt();
    }));
  }
  _g(t) {
    (t.autoSize !== void 0 || !this.Yw || t.width === void 0 && t.height === void 0) && (t.autoSize && !this.Yw && this.ig(), t.autoSize === false && this.Yw !== null && this.ag(), t.autoSize || t.width === void 0 && t.height === void 0 || this.sg(t.width || this.S_, t.height || this.eo));
  }
  cg(t, r) {
    let n = 0, i = 0;
    const s = this.Fw[0], a = (l, u) => {
      let c = 0;
      for (let h = 0; h < this.Fw.length; h++) {
        const f = this.Fw[h], d = C(l === "left" ? f.uw() : f.cw()), v = d.nv();
        if (t !== null && d.ev(t, u, c, r), c += v.height, h < this.Fw.length - 1) {
          const m = this.Ww[h], p = m.nv();
          t !== null && m.ev(t, u, c), c += p.height;
        }
      }
    };
    this.fg() && (a("left", 0), n += C(s.uw()).nv().width);
    for (let l = 0; l < this.Fw.length; l++) {
      const u = this.Fw[l], c = u.nv();
      if (t !== null && u.ev(t, n, i, r), i += c.height, l < this.Fw.length - 1) {
        const h = this.Ww[l], f = h.nv();
        t !== null && h.ev(t, n, i), i += f.height;
      }
    }
    n += s.nv().width, this.pg() && (a("right", n), n += C(s.cw()).nv().width);
    const o = (l, u, c) => {
      C(l === "left" ? this.tg.Tw() : this.tg.Rw()).ev(C(t), u, c);
    };
    if (this.Ps.timeScale.visible) {
      const l = this.tg.nv();
      if (t !== null) {
        let u = 0;
        this.fg() && (o("left", u, i), u = C(s.uw()).nv().width), this.tg.ev(t, u, i, r), u += l.width, this.pg() && o("right", u, i);
      }
      i += l.height;
    }
    return Z({ width: n, height: i });
  }
  Mg() {
    let t = 0, r = 0, n = 0;
    for (const p of this.Fw) this.fg() && (r = Math.max(r, C(p.uw()).om(), this.Ps.leftPriceScale.minimumWidth)), this.pg() && (n = Math.max(n, C(p.cw()).om(), this.Ps.rightPriceScale.minimumWidth)), t += p.E_();
    r = fc(r), n = fc(n);
    const i = this.S_, s = this.eo, a = Math.max(i - r - n, 0), o = 1 * this.Ww.length, l = this.Ps.timeScale.visible;
    let u = l ? Math.max(this.tg.Vw(), this.Ps.timeScale.minimumHeight) : 0;
    var c;
    u = (c = u) + c % 2;
    const h = o + u, f = s < h ? 0 : s - h, d = f / t;
    let v = 0;
    const m = window.devicePixelRatio || 1;
    for (let p = 0; p < this.Fw.length; ++p) {
      const y = this.Fw[p];
      y.qm(this.ns.Xs()[p]);
      let b = 0, w = 0;
      w = p === this.Fw.length - 1 ? Math.ceil((f - v) * m) / m : Math.round(y.E_() * d * m) / m, b = Math.max(w, 2), v += b, y.dm(Z({ width: a, height: b })), this.fg() && y.hw(r, "left"), this.pg() && y.hw(n, "right"), y.cv() && this.ns.bd(y.cv(), b);
    }
    this.tg.Iw(Z({ width: l ? a : 0, height: u }), l ? r : 0, l ? n : 0), this.ns.L_(a), this.Uw !== r && (this.Uw = r), this.$w !== n && (this.$w = n);
  }
  Jw(t) {
    t ? this.Vv.addEventListener("wheel", this.Gw, { passive: false }) : this.Vv.removeEventListener("wheel", this.Gw);
  }
  bg(t) {
    switch (t.deltaMode) {
      case t.DOM_DELTA_PAGE:
        return 120;
      case t.DOM_DELTA_LINE:
        return 32;
    }
    return bB ? 1 / window.devicePixelRatio : 1;
  }
  Xw(t) {
    if (!(t.deltaX !== 0 && this.Ps.handleScroll.mouseWheel || t.deltaY !== 0 && this.Ps.handleScale.mouseWheel)) return;
    const r = this.bg(t), n = r * t.deltaX / 100, i = -r * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), i !== 0 && this.Ps.handleScale.mouseWheel) {
      const s = Math.sign(i) * Math.min(1, Math.abs(i)), a = t.clientX - this.Vv.getBoundingClientRect().left;
      this.Qt().Td(a, s);
    }
    n !== 0 && this.Ps.handleScroll.mouseWheel && this.Qt().Rd(-80 * n);
  }
  lg(t, r) {
    var _a3;
    const n = t._n();
    n === 3 && this.Sg(), n !== 3 && n !== 2 || (this.xg(t), this.Cg(t, r), this.tg.kt(), this.Fw.forEach(((i) => {
      i.Ym();
    })), ((_a3 = this.qw) == null ? void 0 : _a3._n()) === 3 && (this.qw.Sn(t), this.Sg(), this.xg(this.qw), this.Cg(this.qw, r), t = this.qw, this.qw = null)), this.pm(t);
  }
  Cg(t, r) {
    for (const n of t.bn()) this.xn(n, r);
  }
  xg(t) {
    const r = this.ns.Xs();
    for (let n = 0; n < r.length; n++) t.un(n).ln && r[n].tu();
  }
  xn(t, r) {
    const n = this.ns.Et();
    switch (t.fn) {
      case 0:
        n.Fc();
        break;
      case 1:
        n.Wc(t.Wt);
        break;
      case 2:
        n.gn(t.Wt);
        break;
      case 3:
        n.Mn(t.Wt);
        break;
      case 4:
        n.Pc();
        break;
      case 5:
        t.Wt.Ec(r) || n.Mn(t.Wt.Ac(r));
    }
  }
  rd(t) {
    this.qw !== null ? this.qw.Sn(t) : this.qw = t, this.jw || (this.jw = true, this.Hw = window.requestAnimationFrame(((r) => {
      if (this.jw = false, this.Hw = 0, this.qw !== null) {
        const n = this.qw;
        this.qw = null, this.lg(n, r);
        for (const i of n.bn()) if (i.fn === 5 && !i.Wt.Ec(r)) {
          this.Qt().vn(i.Wt);
          break;
        }
      }
    })));
  }
  Sg() {
    this.ng();
  }
  hg(t) {
    this.Zw.removeChild(t.iv()), t.m();
  }
  ng() {
    const t = this.ns.Xs(), r = t.length, n = this.Fw.length;
    for (let i = r; i < n; i++) {
      const s = Ht(this.Fw.pop());
      this.Zw.removeChild(s.iv()), s.nw().u(this), s.ew().u(this), s.m();
      const a = this.Ww.pop();
      a !== void 0 && this.hg(a);
    }
    for (let i = n; i < r; i++) {
      const s = new Jh(this, t[i]);
      if (s.nw().i(this.yg.bind(this, s), this), s.ew().i(this.kg.bind(this, s), this), this.Fw.push(s), i > 0) {
        const a = new cB(this, i - 1, i);
        this.Ww.push(a), this.Zw.insertBefore(a.iv(), this.tg.iv());
      }
      this.Zw.insertBefore(s.iv(), this.tg.iv());
    }
    for (let i = 0; i < r; i++) {
      const s = t[i], a = this.Fw[i];
      a.cv() !== s ? a.qm(s) : a.$m();
    }
    this.eg(), this.Mg();
  }
  Pg(t, r, n, i) {
    var _a3;
    const s = /* @__PURE__ */ new Map();
    t !== null && this.ns.tn().forEach(((h) => {
      const f = h.qs().$s(t);
      f !== null && s.set(h, f);
    }));
    let a;
    if (t !== null) {
      const h = (_a3 = this.ns.Et().es(t)) == null ? void 0 : _a3.originalTime;
      h !== void 0 && (a = h);
    }
    const o = this.Qt().pd(), l = o !== null && o.hu instanceof xo ? o.hu : void 0, u = o !== null && o.au !== void 0 ? o.au.te : void 0, c = this.Tg(i);
    return { Gr: a, js: t ?? void 0, Rg: r ?? void 0, Dg: c !== -1 ? c : void 0, Ig: l, Vg: s, Bg: u, Eg: n ?? void 0 };
  }
  Tg(t) {
    let r = -1;
    if (t) r = this.Fw.indexOf(t);
    else {
      const n = this.Qt().gd().Gs();
      n !== null && (r = this.Qt().Xs().indexOf(n));
    }
    return r;
  }
  yg(t, r, n, i) {
    this.Im.p((() => this.Pg(r, n, i, t)));
  }
  kg(t, r, n, i) {
    this.Vm.p((() => this.Pg(r, n, i, t)));
  }
  Qw(t, r, n) {
    var _a3;
    this.mg(((_a3 = this.Qt().pd()) == null ? void 0 : _a3.ou) ?? null), this.nd.p((() => this.Pg(t, r, n)));
  }
  eg() {
    const t = this.Ps.timeScale.visible ? "" : "none";
    this.tg.iv().style.display = t;
  }
  fg() {
    return this.Fw[0].cv().U_().N().visible;
  }
  pg() {
    return this.Fw[0].cv().q_().N().visible;
  }
  ig() {
    return "ResizeObserver" in window && (this.Yw = new ResizeObserver(((t) => {
      const r = t[t.length - 1];
      r && this.sg(r.contentRect.width, r.contentRect.height);
    })), this.Yw.observe(this.Av, { box: "border-box" }), true);
  }
  ag() {
    this.Yw !== null && this.Yw.disconnect(), this.Yw = null;
  }
}
function vu(e3) {
  return !!(e3.handleScroll.mouseWheel || e3.handleScale.mouseWheel);
}
function xB(e3) {
  return e3.open === void 0 && e3.value === void 0;
}
function PB(e3) {
  return (function(t) {
    return t.open !== void 0;
  })(e3) || (function(t) {
    return t.value !== void 0;
  })(e3);
}
function Ig(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.color !== void 0 && (s.R = r.color), s;
}
function SB(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.lineColor !== void 0 && (s.vt = r.lineColor), r.topColor !== void 0 && (s.eh = r.topColor), r.bottomColor !== void 0 && (s.rh = r.bottomColor), s;
}
function _B(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.topLineColor !== void 0 && (s.hh = r.topLineColor), r.bottomLineColor !== void 0 && (s.ah = r.bottomLineColor), r.topFillColor1 !== void 0 && (s.oh = r.topFillColor1), r.topFillColor2 !== void 0 && (s._h = r.topFillColor2), r.bottomFillColor1 !== void 0 && (s.uh = r.bottomFillColor1), r.bottomFillColor2 !== void 0 && (s.dh = r.bottomFillColor2), s;
}
function OB(e3, t, r, n) {
  const i = { js: t, wt: e3, Wt: [r.open, r.high, r.low, r.close], Gr: n };
  return r.color !== void 0 && (i.R = r.color), i;
}
function MB(e3, t, r, n) {
  const i = { js: t, wt: e3, Wt: [r.open, r.high, r.low, r.close], Gr: n };
  return r.color !== void 0 && (i.R = r.color), r.borderColor !== void 0 && (i.Ht = r.borderColor), r.wickColor !== void 0 && (i.nh = r.wickColor), i;
}
function EB(e3, t, r, n, i) {
  const s = Ht(i)(r), a = Math.max(...s), o = Math.min(...s), l = s[s.length - 1], u = [l, a, o, l], { time: c, color: h, ...f } = r;
  return { js: t, wt: e3, Wt: u, Gr: n, le: f, R: h };
}
function an(e3) {
  return e3.Wt !== void 0;
}
function jg(e3, t) {
  return t.customValues !== void 0 && (e3.Ag = t.customValues), e3;
}
function xr(e3) {
  return (t, r, n, i, s, a) => (function(o, l) {
    return l ? l(o) : xB(o);
  })(n, a) ? jg({ wt: t, js: r, Gr: i }, n) : jg(e3(t, r, n, i, s), n);
}
function Tg(e3) {
  return { Candlestick: xr(MB), Bar: xr(OB), Area: xr(SB), Baseline: xr(_B), Histogram: xr(Ig), Line: xr(Ig), Custom: xr(EB) }[e3];
}
function Ng(e3) {
  return { js: 0, Lg: /* @__PURE__ */ new Map(), Ea: e3 };
}
function Dg(e3, t) {
  if (e3 !== void 0 && e3.length !== 0) return { zg: t.key(e3[0].wt), Og: t.key(e3[e3.length - 1].wt) };
}
function Lg(e3) {
  let t;
  return e3.forEach(((r) => {
    t === void 0 && (t = r.Gr);
  })), Ht(t);
}
class AB {
  constructor(t) {
    this.Ng = /* @__PURE__ */ new Map(), this.Fg = /* @__PURE__ */ new Map(), this.Wg = /* @__PURE__ */ new Map(), this.Hg = [], this.cu = t;
  }
  m() {
    this.Ng.clear(), this.Fg.clear(), this.Wg.clear(), this.Hg = [];
  }
  Ug(t, r) {
    let n = this.Ng.size !== 0, i = false;
    const s = this.Fg.get(t);
    if (s !== void 0) if (this.Fg.size === 1) n = false, i = true, this.Ng.clear();
    else for (const l of this.Hg) l.pointData.Lg.delete(t) && (i = true);
    let a = [];
    if (r.length !== 0) {
      const l = r.map(((d) => d.time)), u = this.cu.createConverterToInternalObj(r), c = Tg(t.wh()), h = t.rl(), f = t.hl();
      a = r.map(((d, v) => {
        const m = u(d.time), p = this.cu.key(m);
        let y = this.Ng.get(p);
        y === void 0 && (y = Ng(m), this.Ng.set(p, y), i = true);
        const b = c(m, y.js, d, l[v], h, f);
        return y.Lg.set(t, b), b;
      }));
    }
    n && this.$g(), this.qg(t, a);
    let o = -1;
    if (i) {
      const l = [];
      this.Ng.forEach(((u) => {
        l.push({ timeWeight: 0, time: u.Ea, pointData: u, originalTime: Lg(u.Lg) });
      })), l.sort(((u, c) => this.cu.key(u.time) - this.cu.key(c.time))), o = this.jg(l);
    }
    return this.Yg(t, o, (function(l, u, c) {
      const h = Dg(l, c), f = Dg(u, c);
      if (h !== void 0 && f !== void 0) return { Kg: false, Ta: h.Og >= f.Og && h.zg >= f.zg };
    })(this.Fg.get(t), s, this.cu));
  }
  Hd(t) {
    return this.Ug(t, []);
  }
  Zg(t, r, n) {
    if (n && t.La()) throw new Error("Historical updates are not supported when conflation is enabled. Conflation requires data to be processed in order.");
    const i = r;
    (function(y) {
      y.Gr === void 0 && (y.Gr = y.time);
    })(i), this.cu.preprocessData(r);
    const s = this.cu.createConverterToInternalObj([r])(r.time), a = this.Wg.get(t);
    if (!n && a !== void 0 && this.cu.key(s) < this.cu.key(a)) throw new Error(`Cannot update oldest data, last time=${a}, new time=${s}`);
    let o = this.Ng.get(this.cu.key(s));
    if (n && o === void 0) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
    const l = o === void 0;
    o === void 0 && (o = Ng(s), this.Ng.set(this.cu.key(s), o));
    const u = Tg(t.wh()), c = t.rl(), h = t.hl(), f = u(s, o.js, r, i.Gr, c, h), d = !n && !l && a !== void 0 && this.cu.key(s) === this.cu.key(a);
    o.Lg.set(t, f), n ? this.Gg(t, f, o.js) : d && t.La() && an(f) ? (t.kr(f), this.Xg(t, f)) : this.Xg(t, f);
    const v = { Ta: an(f), Kg: n };
    if (!l) return this.Yg(t, -1, v);
    const m = { timeWeight: 0, time: o.Ea, pointData: o, originalTime: Lg(o.Lg) }, p = En(this.Hg, this.cu.key(m.time), ((y, b) => this.cu.key(y.time) < b));
    this.Hg.splice(p, 0, m);
    for (let y = p; y < this.Hg.length; ++y) gs(this.Hg[y].pointData, y);
    return this.cu.fillWeightsForPoints(this.Hg, p), this.Yg(t, p, v);
  }
  Jg(t, r) {
    const n = this.Fg.get(t);
    if (n === void 0 || r <= 0) return [[], this.Qg()];
    r = Math.min(r, n.length);
    const i = n.splice(-r).reverse();
    n.length === 0 ? this.Wg.delete(t) : this.Wg.set(t, n[n.length - 1].wt);
    for (const s of i) {
      const a = this.Ng.get(this.cu.key(s.wt));
      if (a && (a.Lg.delete(t), a.Lg.size === 0)) {
        this.Ng.delete(this.cu.key(a.Ea)), this.Hg.splice(a.js, 1);
        for (let o = a.js; o < this.Hg.length; ++o) gs(this.Hg[o].pointData, o);
      }
    }
    return [i, this.Yg(t, this.Hg.length - 1, { Kg: false, Ta: false })];
  }
  Xg(t, r) {
    let n = this.Fg.get(t);
    n === void 0 && (n = [], this.Fg.set(t, n));
    const i = n.length !== 0 ? n[n.length - 1] : null;
    i === null || this.cu.key(r.wt) > this.cu.key(i.wt) ? an(r) && n.push(r) : an(r) ? n[n.length - 1] = r : n.splice(-1, 1), this.Wg.set(t, r.wt);
  }
  Gg(t, r, n) {
    const i = this.Fg.get(t);
    if (i === void 0) return;
    const s = En(i, n, ((a, o) => a.js < o));
    an(r) ? i[s] = r : i.splice(s, 1);
  }
  qg(t, r) {
    r.length !== 0 ? (this.Fg.set(t, r.filter(an)), this.Wg.set(t, r[r.length - 1].wt)) : (this.Fg.delete(t), this.Wg.delete(t));
  }
  $g() {
    for (const t of this.Hg) t.pointData.Lg.size === 0 && this.Ng.delete(this.cu.key(t.time));
  }
  jg(t) {
    let r = -1;
    for (let n = 0; n < this.Hg.length && n < t.length; ++n) {
      const i = this.Hg[n], s = t[n];
      if (this.cu.key(i.time) !== this.cu.key(s.time)) {
        r = n;
        break;
      }
      s.timeWeight = i.timeWeight, gs(s.pointData, n);
    }
    if (r === -1 && this.Hg.length !== t.length && (r = Math.min(this.Hg.length, t.length)), r === -1) return -1;
    for (let n = r; n < t.length; ++n) gs(t[n].pointData, n);
    return this.cu.fillWeightsForPoints(t, r), this.Hg = t, r;
  }
  tM() {
    if (this.Fg.size === 0) return null;
    let t = 0;
    return this.Fg.forEach(((r) => {
      r.length !== 0 && (t = Math.max(t, r[r.length - 1].js));
    })), t;
  }
  Yg(t, r, n) {
    const i = this.Qg();
    if (r !== -1) this.Fg.forEach(((s, a) => {
      i.F_.set(a, { le: s, iM: a === t ? n : void 0 });
    })), this.Fg.has(t) || i.F_.set(t, { le: [], iM: n }), i.Et.sM = this.Hg, i.Et.nM = r;
    else {
      const s = this.Fg.get(t);
      i.F_.set(t, { le: s || [], iM: n });
    }
    return i;
  }
  Qg() {
    return { F_: /* @__PURE__ */ new Map(), Et: { vc: this.tM() } };
  }
}
function gs(e3, t) {
  e3.js = t, e3.Lg.forEach(((r) => {
    r.js = t;
  }));
}
function CB(e3, t) {
  return e3.wt < t;
}
function kB(e3, t) {
  return t < e3.wt;
}
function _1(e3, t, r) {
  const n = t.Aa(), i = t.bi(), s = En(e3, n, CB), a = m1(e3, i, kB);
  if (!r) return { from: s, to: a };
  let o = s, l = a;
  return s > 0 && s < e3.length && e3[s].wt >= n && (o = s - 1), a > 0 && a < e3.length && e3[a - 1].wt <= i && (l = a + 1), { from: o, to: l };
}
class Qh {
  constructor(t, r, n) {
    this.eM = true, this.rM = true, this.hM = true, this.aM = [], this.lM = null, this.oM = -1, this.ee = t, this.re = r, this._M = n;
  }
  kt(t) {
    this.eM = true, t === "data" && (this.rM = true), t === "options" && (this.hM = true);
  }
  Tt() {
    return this.ee.It() ? (this.uM(), this.lM === null ? null : this.cM) : null;
  }
  dM() {
    this.aM = this.aM.map(((t) => ({ ...t, ...this.ee.ga().gh(t.wt) })));
  }
  fM() {
    this.lM = null;
  }
  uM() {
    const t = this.re.Et(), r = t.N().enableConflation ? t.Hc() : 0;
    r !== this.oM && (this.rM = true, this.oM = r), this.rM && (this.pM(), this.rM = false), this.hM && (this.dM(), this.hM = false), this.eM && (this.vM(), this.eM = false);
  }
  vM() {
    const t = this.ee.Ft(), r = this.re.Et();
    if (this.fM(), r.Gi() || t.Gi()) return;
    const n = r.Ie();
    if (n === null || this.ee.qs().yh() === 0) return;
    const i = this.ee.Lt();
    i !== null && (this.lM = _1(this.aM, n, this._M), this.mM(t, r, i.Wt), this.wM());
  }
}
class IB {
  constructor(t, r) {
    this.gM = t, this.Ki = r;
  }
  nt(t, r, n) {
    this.gM.draw(t, this.Ki, r, n);
  }
}
class jB extends Qh {
  constructor(t, r, n) {
    super(t, r, false), this.$h = n, this.cM = new IB(this.$h.renderer(), ((i) => {
      const s = t.Lt();
      return s === null ? null : t.Ft().Nt(i, s.Wt);
    }));
  }
  get ma() {
    return this.$h.conflationReducer;
  }
  Oa(t) {
    return this.$h.priceValueBuilder(t);
  }
  al(t) {
    return this.$h.isWhitespace(t);
  }
  pM() {
    const t = this.ee.ga();
    this.aM = this.ee.Na().Dh().map(((r) => ({ wt: r.js, _t: NaN, ...t.gh(r.js), MM: r.le })));
  }
  mM(t, r) {
    r.mc(this.aM, Mi(this.lM));
  }
  wM() {
    this.$h.update({ bars: this.aM.map(TB), barSpacing: this.re.Et().ul(), visibleRange: this.lM, conflationFactor: this.re.Et().Hc() }, this.ee.N());
  }
}
function TB(e3) {
  return { x: e3._t, time: e3.wt, originalData: e3.MM, barColor: e3.th };
}
const NB = { color: "#2196f3" }, DB = (e3, t, r) => {
  const n = lr(r);
  return new jB(e3, t, n);
};
function tf(e3) {
  const t = { value: e3.Wt[3], time: e3.Gr };
  return e3.Ag !== void 0 && (t.customValues = e3.Ag), t;
}
function Rg(e3) {
  const t = tf(e3);
  return e3.R !== void 0 && (t.color = e3.R), t;
}
function LB(e3) {
  const t = tf(e3);
  return e3.vt !== void 0 && (t.lineColor = e3.vt), e3.eh !== void 0 && (t.topColor = e3.eh), e3.rh !== void 0 && (t.bottomColor = e3.rh), t;
}
function RB(e3) {
  const t = tf(e3);
  return e3.hh !== void 0 && (t.topLineColor = e3.hh), e3.ah !== void 0 && (t.bottomLineColor = e3.ah), e3.oh !== void 0 && (t.topFillColor1 = e3.oh), e3._h !== void 0 && (t.topFillColor2 = e3._h), e3.uh !== void 0 && (t.bottomFillColor1 = e3.uh), e3.dh !== void 0 && (t.bottomFillColor2 = e3.dh), t;
}
function O1(e3) {
  const t = { open: e3.Wt[0], high: e3.Wt[1], low: e3.Wt[2], close: e3.Wt[3], time: e3.Gr };
  return e3.Ag !== void 0 && (t.customValues = e3.Ag), t;
}
function $B(e3) {
  const t = O1(e3);
  return e3.R !== void 0 && (t.color = e3.R), t;
}
function zB(e3) {
  const t = O1(e3), { R: r, Ht: n, nh: i } = e3;
  return r !== void 0 && (t.color = r), n !== void 0 && (t.borderColor = n), i !== void 0 && (t.wickColor = i), t;
}
function _s(e3) {
  return { Area: LB, Line: Rg, Baseline: RB, Histogram: Rg, Bar: $B, Candlestick: zB, Custom: BB }[e3];
}
function BB(e3) {
  const t = e3.Gr;
  return { ...e3.le, time: t };
}
const FB = { vertLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, horzLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, mode: 1, doNotSnapToHiddenSeriesIndices: false }, WB = { vertLines: { color: "#D6DCDE", style: 0, visible: true }, horzLines: { color: "#D6DCDE", style: 0, visible: true } }, qB = { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 12, fontFamily: o1, panes: { enableResize: true, separatorColor: "#E0E3EB", separatorHoverColor: "rgba(178, 181, 189, 0.2)" }, attributionLogo: true, colorSpace: "srgb", colorParsers: [] }, pu = { autoScale: true, mode: 0, invertScale: false, alignLabels: true, borderVisible: true, borderColor: "#2B2B43", entireTextOnly: false, visible: false, ticksVisible: false, scaleMargins: { bottom: 0.1, top: 0.2 }, minimumWidth: 0, ensureEdgeTickMarksVisible: false }, KB = { rightOffset: 0, barSpacing: 6, minBarSpacing: 0.5, maxBarSpacing: 0, fixLeftEdge: false, fixRightEdge: false, lockVisibleTimeRangeOnResize: false, rightBarStaysOnScroll: false, borderVisible: true, borderColor: "#2B2B43", visible: true, timeVisible: false, secondsVisible: true, shiftVisibleRangeOnNewBar: true, allowShiftVisibleRangeOnWhitespaceReplacement: false, ticksVisible: false, uniformDistribution: false, minimumHeight: 0, allowBoldLabels: true, ignoreWhitespaceIndices: false, enableConflation: false, conflationThresholdFactor: 1, precomputeConflationOnInit: false, precomputeConflationPriority: "background" };
function $g() {
  return { addDefaultPane: true, width: 0, height: 0, autoSize: false, layout: qB, crosshair: FB, grid: WB, overlayPriceScales: { ...pu }, leftPriceScale: { ...pu, visible: false }, rightPriceScale: { ...pu, visible: true }, timeScale: KB, localization: { locale: An ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: true }, handleScale: { axisPressedMouseMove: { time: true, price: true }, axisDoubleClickReset: { time: true, price: true }, mouseWheel: true, pinch: true }, kineticScroll: { mouse: false, touch: true }, trackingMode: { exitMode: 1 } };
}
class M1 {
  constructor(t, r, n) {
    this.Yp = t, this.bM = r, this.SM = n ?? 0;
  }
  applyOptions(t) {
    this.Yp.Qt().md(this.bM, t, this.SM);
  }
  options() {
    return this.Ki().N();
  }
  width() {
    return bo(this.bM) ? this.Yp.dg(this.bM) : 0;
  }
  setVisibleRange(t) {
    this.setAutoScale(false), this.Ki().$o(new zt(t.from, t.to));
  }
  getVisibleRange() {
    let t, r, n = this.Ki().er();
    if (n === null) return null;
    if (this.Ki().io()) {
      const i = this.Ki().m_(), s = x1(i);
      n = fn(n, this.Ki().no()), t = Number((Math.round(n.Ze() / i) * i).toFixed(s)), r = Number((Math.round(n.Ge() / i) * i).toFixed(s));
    } else t = n.Ze(), r = n.Ge();
    return { from: t, to: r };
  }
  setAutoScale(t) {
    this.applyOptions({ autoScale: t });
  }
  Ki() {
    return C(this.Yp.Qt().wd(this.bM, this.SM)).Ft;
  }
}
class UB {
  constructor(t, r, n, i) {
    this.Yp = t, this.yt = n, this.xM = r, this.CM = i;
  }
  getHeight() {
    return this.yt.$t();
  }
  setHeight(t) {
    const r = this.Yp.Qt(), n = r.Gd(this.yt);
    r.xd(n, t);
  }
  getStretchFactor() {
    return this.yt.E_();
  }
  setStretchFactor(t) {
    this.yt.A_(t), this.Yp.Qt().Ca();
  }
  paneIndex() {
    return this.Yp.Qt().Gd(this.yt);
  }
  moveTo(t) {
    const r = this.paneIndex();
    r !== t && (Et(t >= 0 && t < this.Yp.Zp().length, "Invalid pane index"), this.Yp.Qt().yd(r, t));
  }
  getSeries() {
    return this.yt.F_().map(((t) => this.xM(t))) ?? [];
  }
  getHTMLElement() {
    const t = this.Yp.Zp();
    return t && t.length !== 0 && t[this.paneIndex()] ? t[this.paneIndex()].iv() : null;
  }
  attachPrimitive(t) {
    this.yt.nl(t), t.attached && t.attached({ chart: this.CM, requestUpdate: () => this.yt.Qt().Ca() });
  }
  detachPrimitive(t) {
    this.yt.el(t);
  }
  priceScale(t) {
    if (this.yt.V_(t) === null) throw new Error(`Cannot find price scale with id: ${t}`);
    return new M1(this.Yp, t, this.paneIndex());
  }
  setPreserveEmptyPane(t) {
    this.yt.O_(t);
  }
  preserveEmptyPane() {
    return this.yt.N_();
  }
  addCustomSeries(t, r = {}, n = 0) {
    return this.CM.addCustomSeries(t, r, n);
  }
  addSeries(t, r = {}) {
    return this.CM.addSeries(t, r, this.paneIndex());
  }
}
const VB = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: true, axisLabelVisible: true, title: "", axisLabelColor: "", axisLabelTextColor: "" };
class zg {
  constructor(t) {
    this.hr = t;
  }
  applyOptions(t) {
    this.hr.cr(t);
  }
  options() {
    return this.hr.N();
  }
  yM() {
    return this.hr;
  }
}
class YB {
  constructor(t, r, n, i, s, a) {
    this.kM = new ut(), this.ee = t, this.PM = r, this.TM = n, this.cu = s, this.CM = i, this.RM = a;
  }
  m() {
    this.kM.m();
  }
  priceFormatter() {
    return this.ee.Xa();
  }
  priceToCoordinate(t) {
    const r = this.ee.Lt();
    return r === null ? null : this.ee.Ft().Nt(t, r.Wt);
  }
  coordinateToPrice(t) {
    const r = this.ee.Lt();
    return r === null ? null : this.ee.Ft().Ds(t, r.Wt);
  }
  barsInLogicalRange(t) {
    if (t === null) return null;
    const r = new yn(new gn(t.from, t.to)).Ru(), n = this.ee.qs();
    if (n.Gi()) return null;
    const i = n.$s(r.Aa(), 1), s = n.$s(r.bi(), -1), a = C(n.kh()), o = C(n.sn());
    if (i !== null && s !== null && i.js > s.js) return { barsBefore: t.from - a, barsAfter: o - t.to };
    const l = { barsBefore: i === null || i.js === a ? t.from - a : i.js - a, barsAfter: s === null || s.js === o ? o - t.to : o - s.js };
    return i !== null && s !== null && (l.from = i.Gr, l.to = s.Gr), l;
  }
  setData(t) {
    this.cu, this.ee.wh(), this.PM.DM(this.ee, t), this.IM("full");
  }
  update(t, r = false) {
    this.ee.wh(), this.PM.VM(this.ee, t, r), this.IM("update");
  }
  pop(t = 1) {
    const r = this.PM.BM(this.ee, t);
    r.length !== 0 && this.IM("update");
    const n = _s(this.seriesType());
    return r.map(((i) => n(i)));
  }
  dataByIndex(t, r) {
    const n = this.ee.qs().$s(t, r);
    return n === null ? null : _s(this.seriesType())(n);
  }
  data() {
    const t = _s(this.seriesType());
    return this.ee.qs().Dh().map(((r) => t(r)));
  }
  subscribeDataChanged(t) {
    this.kM.i(t);
  }
  unsubscribeDataChanged(t) {
    this.kM._(t);
  }
  applyOptions(t) {
    this.ee.cr(t);
  }
  options() {
    return Fe(this.ee.N());
  }
  priceScale() {
    return this.TM.priceScale(this.ee.Ft().ol(), this.getPane().paneIndex());
  }
  createPriceLine(t) {
    const r = te(Fe(VB), t), n = this.ee.Da(r);
    return new zg(n);
  }
  removePriceLine(t) {
    this.ee.Ia(t.yM());
  }
  priceLines() {
    return this.ee.Va().map(((t) => new zg(t)));
  }
  seriesType() {
    return this.ee.wh();
  }
  lastValueData(t) {
    const r = this.ee.Ve(t);
    return r.Be ? { noData: true } : { noData: false, price: r.gt, color: r.R };
  }
  attachPrimitive(t) {
    this.ee.nl(t), t.attached && t.attached({ chart: this.CM, series: this, requestUpdate: () => this.ee.Qt().Ca(), horzScaleBehavior: this.cu });
  }
  detachPrimitive(t) {
    this.ee.el(t), t.detached && t.detached(), this.ee.Qt().Ca();
  }
  getPane() {
    const t = this.ee, r = C(this.ee.Qt().Kn(t));
    return this.RM(r);
  }
  moveToPane(t) {
    this.ee.Qt().jd(this.ee, t);
  }
  seriesOrder() {
    const t = this.ee.Qt().Kn(this.ee);
    return t === null ? -1 : t.F_().indexOf(this.ee);
  }
  setSeriesOrder(t) {
    const r = this.ee.Qt().Kn(this.ee);
    r !== null && r.su(this.ee, t);
  }
  IM(t) {
    this.kM.v() && this.kM.p(t);
  }
}
class HB {
  constructor(t, r, n) {
    this.EM = new ut(), this.Nu = new ut(), this.xw = new ut(), this.ns = t, this.Jh = t.Et(), this.tg = r, this.Jh.Lc().i(this.AM.bind(this)), this.Jh.zc().i(this.LM.bind(this)), this.tg.Dw().i(this.zM.bind(this)), this.cu = n;
  }
  m() {
    this.Jh.Lc().u(this), this.Jh.zc().u(this), this.tg.Dw().u(this), this.EM.m(), this.Nu.m(), this.xw.m();
  }
  scrollPosition() {
    return this.Jh.Cc();
  }
  scrollToPosition(t, r) {
    r ? this.Jh.Bc(t, 1e3) : this.ns.Mn(t);
  }
  scrollToRealTime() {
    this.Jh.Vc();
  }
  getVisibleRange() {
    const t = this.Jh.lc();
    return t === null ? null : { from: t.from.originalTime, to: t.to.originalTime };
  }
  setVisibleRange(t) {
    const r = { from: this.cu.convertHorzItemToInternal(t.from), to: this.cu.convertHorzItemToInternal(t.to) }, n = this.Jh.cc(r);
    this.ns.$d(n);
  }
  getVisibleLogicalRange() {
    const t = this.Jh.ac();
    return t === null ? null : { from: t.Aa(), to: t.bi() };
  }
  setVisibleLogicalRange(t) {
    Et(t.from <= t.to, "The from index cannot be after the to index."), this.ns.$d(t);
  }
  resetTimeScale() {
    this.ns.wn();
  }
  fitContent() {
    this.ns.Fc();
  }
  logicalToCoordinate(t) {
    const r = this.ns.Et();
    return r.Gi() ? null : r.qt(t);
  }
  coordinateToLogical(t) {
    return this.Jh.Gi() ? null : this.Jh.wc(t);
  }
  timeToIndex(t, r) {
    const n = this.cu.convertHorzItemToInternal(t);
    return this.Jh.ec(n, r);
  }
  timeToCoordinate(t) {
    const r = this.timeToIndex(t, false);
    return r === null ? null : this.Jh.qt(r);
  }
  coordinateToTime(t) {
    const r = this.ns.Et(), n = r.wc(t), i = r.es(n);
    return i === null ? null : i.originalTime;
  }
  width() {
    return this.tg.sv().width;
  }
  height() {
    return this.tg.sv().height;
  }
  subscribeVisibleTimeRangeChange(t) {
    this.EM.i(t);
  }
  unsubscribeVisibleTimeRangeChange(t) {
    this.EM._(t);
  }
  subscribeVisibleLogicalRangeChange(t) {
    this.Nu.i(t);
  }
  unsubscribeVisibleLogicalRangeChange(t) {
    this.Nu._(t);
  }
  subscribeSizeChange(t) {
    this.xw.i(t);
  }
  unsubscribeSizeChange(t) {
    this.xw._(t);
  }
  applyOptions(t) {
    this.Jh.cr(t);
  }
  options() {
    return { ...Fe(this.Jh.N()), barSpacing: this.Jh.ul() };
  }
  AM() {
    this.EM.v() && this.EM.p(this.getVisibleRange());
  }
  LM() {
    this.Nu.v() && this.Nu.p(this.getVisibleLogicalRange());
  }
  zM(t) {
    this.xw.p(t.width, t.height);
  }
}
function Bg(e3) {
  return (function(t) {
    if (cs(t.handleScale)) {
      const n = t.handleScale;
      t.handleScale = { axisDoubleClickReset: { time: n, price: n }, axisPressedMouseMove: { time: n, price: n }, mouseWheel: n, pinch: n };
    } else if (t.handleScale !== void 0) {
      const { axisPressedMouseMove: n, axisDoubleClickReset: i } = t.handleScale;
      cs(n) && (t.handleScale.axisPressedMouseMove = { time: n, price: n }), cs(i) && (t.handleScale.axisDoubleClickReset = { time: i, price: i });
    }
    const r = t.handleScroll;
    cs(r) && (t.handleScroll = { horzTouchDrag: r, vertTouchDrag: r, mouseWheel: r, pressedMouseMove: r });
  })(e3), e3;
}
class GB {
  constructor(t, r, n) {
    this.OM = /* @__PURE__ */ new Map(), this.NM = /* @__PURE__ */ new Map(), this.FM = new ut(), this.WM = new ut(), this.HM = new ut(), this.Xc = /* @__PURE__ */ new WeakMap(), this.UM = new AB(r);
    const i = n === void 0 ? Fe($g()) : te(Fe($g()), Bg(n));
    this.$M = r, this.Yp = new wB(t, i, r), this.Yp.nw().i(((a) => {
      this.FM.v() && this.FM.p(this.qM(a()));
    }), this), this.Yp.ew().i(((a) => {
      this.WM.v() && this.WM.p(this.qM(a()));
    }), this), this.Yp.Md().i(((a) => {
      this.HM.v() && this.HM.p(this.qM(a()));
    }), this);
    const s = this.Yp.Qt();
    this.jM = new HB(s, this.Yp.rg(), this.$M);
  }
  remove() {
    this.Yp.nw().u(this), this.Yp.ew().u(this), this.Yp.Md().u(this), this.jM.m(), this.Yp.m(), this.OM.clear(), this.NM.clear(), this.FM.m(), this.WM.m(), this.HM.m(), this.UM.m();
  }
  resize(t, r, n) {
    this.autoSizeActive() || this.Yp.sg(t, r, n);
  }
  addCustomSeries(t, r = {}, n = 0) {
    const i = ((s) => ({ type: "Custom", isBuiltIn: false, defaultOptions: { ...NB, ...s.defaultOptions() }, YM: DB, KM: s }))(lr(t));
    return this.ZM(i, r, n);
  }
  addSeries(t, r = {}, n = 0) {
    return this.ZM(t, r, n);
  }
  removeSeries(t) {
    const r = Ht(this.OM.get(t)), n = this.UM.Hd(r);
    this.Yp.Qt().Hd(r), this.GM(n), this.OM.delete(t), this.NM.delete(r);
  }
  DM(t, r) {
    this.GM(this.UM.Ug(t, r));
  }
  VM(t, r, n) {
    this.GM(this.UM.Zg(t, r, n));
  }
  BM(t, r) {
    const [n, i] = this.UM.Jg(t, r);
    return n.length !== 0 && this.GM(i), n;
  }
  subscribeClick(t) {
    this.FM.i(t);
  }
  unsubscribeClick(t) {
    this.FM._(t);
  }
  subscribeCrosshairMove(t) {
    this.HM.i(t);
  }
  unsubscribeCrosshairMove(t) {
    this.HM._(t);
  }
  subscribeDblClick(t) {
    this.WM.i(t);
  }
  unsubscribeDblClick(t) {
    this.WM._(t);
  }
  priceScale(t, r = 0) {
    return new M1(this.Yp, t, r);
  }
  timeScale() {
    return this.jM;
  }
  applyOptions(t) {
    this.Yp.cr(Bg(t));
  }
  options() {
    return this.Yp.N();
  }
  takeScreenshot(t = false, r = false) {
    let n, i;
    try {
      r || (n = this.Yp.Qt().N().crosshair.mode, this.Yp.cr({ crosshair: { mode: 2 } })), i = this.Yp.ug(t);
    } finally {
      r || n === void 0 || this.Yp.Qt().cr({ crosshair: { mode: n } });
    }
    return i;
  }
  addPane(t = false) {
    const r = this.Yp.Qt().Xd();
    return r.O_(t), this.XM(r);
  }
  removePane(t) {
    this.Yp.Qt().Sd(t);
  }
  swapPanes(t, r) {
    this.Yp.Qt().Cd(t, r);
  }
  autoSizeActive() {
    return this.Yp.vg();
  }
  chartElement() {
    return this.Yp.hv();
  }
  panes() {
    return this.Yp.Qt().Xs().map(((t) => this.XM(t)));
  }
  paneSize(t = 0) {
    const r = this.Yp.gg(t);
    return { height: r.height, width: r.width };
  }
  setCrosshairPosition(t, r, n) {
    const i = this.OM.get(n);
    if (i === void 0) return;
    const s = this.Yp.Qt().Kn(i);
    s !== null && this.Yp.Qt().Ld(t, r, s);
  }
  clearCrosshairPosition() {
    this.Yp.Qt().zd(true);
  }
  horzBehaviour() {
    return this.$M;
  }
  ZM(t, r = {}, n = 0) {
    Et(t.YM !== void 0), (function(l) {
      if (l === void 0 || l.type === "custom") return;
      const u = l;
      u.minMove !== void 0 && u.precision === void 0 && (u.precision = x1(u.minMove));
    })(r.priceFormat), t.type === "Candlestick" && (function(l) {
      l.borderColor !== void 0 && (l.borderUpColor = l.borderColor, l.borderDownColor = l.borderColor), l.wickColor !== void 0 && (l.wickUpColor = l.wickColor, l.wickDownColor = l.wickColor);
    })(r);
    const i = te(Fe(s1), Fe(t.defaultOptions), r), s = t.YM, a = new xo(this.Yp.Qt(), t.type, i, s, t.KM);
    this.Yp.Qt().Fd(a, n);
    const o = new YB(a, this, this, this, this.$M, ((l) => this.XM(l)));
    return this.OM.set(o, a), this.NM.set(a, o), o;
  }
  GM(t) {
    const r = this.Yp.Qt();
    r.Od(t.Et.vc, t.Et.sM, t.Et.nM), t.F_.forEach(((n, i) => i.ht(n.le, n.iM))), r.Et().Ju(), r.Sc();
  }
  JM(t) {
    return Ht(this.NM.get(t));
  }
  qM(t) {
    const r = /* @__PURE__ */ new Map();
    t.Vg.forEach(((i, s) => {
      const a = s.wh(), o = _s(a)(i);
      if (a !== "Custom") Et(PB(o));
      else {
        const l = s.hl();
        Et(!l || l(o) === false);
      }
      r.set(this.JM(s), o);
    }));
    const n = t.Ig !== void 0 && this.NM.has(t.Ig) ? this.JM(t.Ig) : void 0;
    return { time: t.Gr, logical: t.js, point: t.Rg, paneIndex: t.Dg, hoveredSeries: n, hoveredObjectId: t.Bg, seriesData: r, sourceEvent: t.Eg };
  }
  XM(t) {
    let r = this.Xc.get(t);
    return r || (r = new UB(this.Yp, ((n) => this.JM(n)), t, this), this.Xc.set(t, r)), r;
  }
}
function XB(e3) {
  if (Yi(e3)) {
    const t = document.getElementById(e3);
    return Et(t !== null, `Cannot find element in DOM with id=${e3}`), t;
  }
  return e3;
}
function JB(e3, t, r) {
  const n = XB(e3), i = new GB(n, t, r);
  return t.setOptions(i.options()), i;
}
function QF(e3, t) {
  return JB(e3, new Sg(), Sg.pf(t));
}
class ef extends Qh {
  constructor(t, r) {
    super(t, r, true);
  }
  mM(t, r, n) {
    r.mc(this.aM, Mi(this.lM)), t.Yo(this.aM, n, Mi(this.lM));
  }
  QM(t, r) {
    return { wt: t, gt: r, _t: NaN, ut: NaN };
  }
  pM() {
    const t = this.ee.ga();
    this.aM = this.ee.Na().Dh().map(((r) => {
      let n;
      if ((r.jr ?? 1) > 1) {
        const i = r.Wt[1], s = r.Wt[2], a = r.Wt[3];
        n = Math.abs(i - a) > Math.abs(s - a) ? i : s;
      } else n = r.Wt[3];
      return this.tb(r.js, n, t);
    }));
  }
}
function E1(e3, t, r, n, i, s, a) {
  if (t.length === 0 || n.from >= t.length || n.to <= 0) return;
  const { context: o, horizontalPixelRatio: l, verticalPixelRatio: u } = e3, c = t[n.from];
  let h = s(e3, c), f = c;
  if (n.to - n.from < 2) {
    const d = i / 2;
    o.beginPath();
    const v = { _t: c._t - d, ut: c.ut }, m = { _t: c._t + d, ut: c.ut };
    o.moveTo(v._t * l, v.ut * u), o.lineTo(m._t * l, m.ut * u), a(e3, h, v, m);
  } else {
    const d = (m, p) => {
      a(e3, h, f, p), o.beginPath(), h = m, f = p;
    };
    let v = f;
    o.beginPath(), o.moveTo(c._t * l, c.ut * u);
    for (let m = n.from + 1; m < n.to; ++m) {
      v = t[m];
      const p = s(e3, v);
      switch (r) {
        case 0:
          o.lineTo(v._t * l, v.ut * u);
          break;
        case 1:
          o.lineTo(v._t * l, t[m - 1].ut * u), p !== h && (d(p, v), o.lineTo(v._t * l, t[m - 1].ut * u)), o.lineTo(v._t * l, v.ut * u);
          break;
        case 2: {
          const [y, b] = ZB(t, m - 1, m);
          o.bezierCurveTo(y._t * l, y.ut * u, b._t * l, b.ut * u, v._t * l, v.ut * u);
          break;
        }
      }
      r !== 1 && p !== h && (d(p, v), o.moveTo(v._t * l, v.ut * u));
    }
    (f !== v || f === v && r === 1) && a(e3, h, f, v);
  }
}
const Fg = 6;
function mu(e3, t) {
  return { _t: e3._t - t._t, ut: e3.ut - t.ut };
}
function Wg(e3, t) {
  return { _t: e3._t / t, ut: e3.ut / t };
}
function ZB(e3, t, r) {
  const n = Math.max(0, t - 1), i = Math.min(e3.length - 1, r + 1);
  var s, a;
  return [(s = e3[t], a = Wg(mu(e3[r], e3[n]), Fg), { _t: s._t + a._t, ut: s.ut + a.ut }), mu(e3[r], Wg(mu(e3[i], e3[t]), Fg))];
}
function QB(e3, t) {
  const r = e3.context;
  r.strokeStyle = t, r.stroke();
}
class tF extends er {
  constructor() {
    super(...arguments), this.rt = null;
  }
  ht(t) {
    this.rt = t;
  }
  et(t) {
    if (this.rt === null) return;
    const { ot: r, lt: n, ib: i, sb: s, ct: a, Zt: o, nb: l } = this.rt;
    if (n === null) return;
    const u = t.context;
    u.lineCap = "butt", u.lineWidth = a * t.verticalPixelRatio, fr(u, o), u.lineJoin = "round";
    const c = this.eb.bind(this);
    s !== void 0 && E1(t, r, s, n, i, c, QB), l && (function(h, f, d, v, m) {
      if (v.to - v.from <= 0) return;
      const { horizontalPixelRatio: p, verticalPixelRatio: y, context: b } = h;
      let w = null;
      const x = Math.max(1, Math.floor(p)) % 2 / 2, P = d * y + x;
      for (let S = v.to - 1; S >= v.from; --S) {
        const _ = f[S];
        if (_) {
          const M = m(h, _);
          M !== w && (b.beginPath(), w !== null && b.fill(), b.fillStyle = M, w = M);
          const A = Math.round(_._t * p) + x, j = _.ut * y;
          b.moveTo(A, j), b.arc(A, j, P, 0, 2 * Math.PI);
        }
      }
      b.fill();
    })(t, r, l, n, c);
  }
}
class A1 extends tF {
  eb(t, r) {
    return r.vt;
  }
}
class eF extends ef {
  constructor() {
    super(...arguments), this.cM = new A1();
  }
  tb(t, r, n) {
    return { ...this.QM(t, r), ...n.gh(t) };
  }
  wM() {
    const t = this.ee.N(), r = { ot: this.aM, Zt: t.lineStyle, sb: t.lineVisible ? t.lineType : void 0, ct: t.lineWidth, nb: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0, lt: this.lM, ib: this.re.Et().ul() };
    this.cM.ht(r);
  }
}
const tW = { type: "Line", isBuiltIn: true, defaultOptions: { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: true, crosshairMarkerVisible: true, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: false }, YM: (e3, t) => new eF(e3, t) };
function rF(e3, t, r, n, i) {
  const { context: s, horizontalPixelRatio: a, verticalPixelRatio: o } = t;
  s.lineTo(i._t * a, e3 * o), s.lineTo(n._t * a, e3 * o), s.closePath(), s.fillStyle = r, s.fill();
}
class nF extends er {
  constructor() {
    super(...arguments), this.rt = null;
  }
  ht(t) {
    this.rt = t;
  }
  et(t) {
    if (this.rt === null) return;
    const { ot: r, lt: n, ib: i, ct: s, Zt: a, sb: o } = this.rt, l = this.rt.ub ?? (this.rt.cb ? 0 : t.mediaSize.height);
    if (n === null) return;
    const u = t.context;
    u.lineCap = "butt", u.lineJoin = "round", u.lineWidth = s, fr(u, a), u.lineWidth = 1, E1(t, r, o, n, i, this.fb.bind(this), rF.bind(null, l));
  }
}
class iF {
  pb(t, r) {
    const n = this.mb, { wb: i, gb: s, Mb: a, bb: o, ub: l, Sb: u, xb: c } = r;
    if (this.Cb === void 0 || n === void 0 || n.wb !== i || n.gb !== s || n.Mb !== a || n.bb !== o || n.ub !== l || n.Sb !== u || n.xb !== c) {
      const { verticalPixelRatio: h } = t, f = l || u > 0 ? h : 1, d = u * f, v = c === t.bitmapSize.height ? c : c * f, m = (l ?? 0) * f, p = t.context.createLinearGradient(0, d, 0, v);
      if (p.addColorStop(0, i), l != null) {
        const y = mn((m - d) / (v - d), 0, 1);
        p.addColorStop(y, s), p.addColorStop(y, a);
      }
      p.addColorStop(1, o), this.Cb = p, this.mb = r;
    }
    return this.Cb;
  }
}
class sF extends nF {
  constructor() {
    super(...arguments), this.yb = new iF();
  }
  fb(t, r) {
    var _a3;
    return this.yb.pb(t, { wb: r.eh, gb: "", Mb: "", bb: r.rh, Sb: ((_a3 = this.rt) == null ? void 0 : _a3.Sb) ?? 0, xb: t.bitmapSize.height });
  }
}
class aF extends ef {
  constructor(t, r) {
    super(t, r), this.cM = new l1(), this.Rb = new sF(), this.Db = new A1(), this.cM.st([this.Rb, this.Db]);
  }
  tb(t, r, n) {
    return { ...this.QM(t, r), ...n.gh(t) };
  }
  wM() {
    const t = this.ee.N();
    if (this.lM === null || this.aM.length === 0) return;
    let r;
    if (t.relativeGradient) {
      r = this.aM[this.lM.from].ut;
      for (let n = this.lM.from; n < this.lM.to; n++) {
        const i = this.aM[n];
        i.ut < r && (r = i.ut);
      }
    }
    this.Rb.ht({ sb: t.lineType, ot: this.aM, Zt: t.lineStyle, ct: t.lineWidth, ub: null, Sb: r, cb: t.invertFilledArea, lt: this.lM, ib: this.re.Et().ul() }), this.Db.ht({ sb: t.lineVisible ? t.lineType : void 0, ot: this.aM, Zt: t.lineStyle, ct: t.lineWidth, lt: this.lM, ib: this.re.Et().ul(), nb: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0 });
  }
}
const eW = { type: "Area", isBuiltIn: true, defaultOptions: { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", invertFilledArea: false, relativeGradient: false, lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: true, crosshairMarkerVisible: true, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: false }, YM: (e3, t) => new aF(e3, t) };
class oF extends Qh {
  constructor(t, r) {
    super(t, r, false);
  }
  mM(t, r, n) {
    r.mc(this.aM, Mi(this.lM)), t.Zo(this.aM, n, Mi(this.lM));
  }
  Lb(t, r, n) {
    return { wt: t, Hr: r.Wt[0], Ur: r.Wt[1], $r: r.Wt[2], qr: r.Wt[3], _t: NaN, Go: NaN, Xo: NaN, Jo: NaN, Qo: NaN };
  }
  pM() {
    const t = this.ee.ga();
    this.aM = this.ee.Na().Dh().map(((r) => this.tb(r.js, r, t)));
  }
}
class lF extends er {
  constructor() {
    super(...arguments), this.jt = null, this.Ib = 0;
  }
  ht(t) {
    this.jt = t;
  }
  et(t) {
    if (this.jt === null || this.jt.qs.length === 0 || this.jt.lt === null) return;
    const { horizontalPixelRatio: r } = t;
    this.Ib = (function(s, a) {
      if (s >= 2.5 && s <= 4) return Math.floor(3 * a);
      const o = 1 - 0.2 * Math.atan(Math.max(4, s) - 4) / (0.5 * Math.PI), l = Math.floor(s * o * a), u = Math.floor(s * a), c = Math.min(l, u);
      return Math.max(Math.floor(a), c);
    })(this.jt.ul, r), this.Ib >= 2 && Math.floor(r) % 2 != this.Ib % 2 && this.Ib--;
    const n = this.jt.qs;
    this.jt.zb && this.Ob(t, n, this.jt.lt), this.jt.Mi && this.gm(t, n, this.jt.lt);
    const i = this.Nb(r);
    (!this.jt.Mi || this.Ib > 2 * i) && this.Fb(t, n, this.jt.lt);
  }
  Ob(t, r, n) {
    if (this.jt === null) return;
    const { context: i, horizontalPixelRatio: s, verticalPixelRatio: a } = t;
    let o = "", l = Math.min(Math.floor(s), Math.floor(this.jt.ul * s));
    l = Math.max(Math.floor(s), Math.min(l, this.Ib));
    const u = Math.floor(0.5 * l);
    let c = null;
    for (let h = n.from; h < n.to; h++) {
      const f = r[h];
      f.sh !== o && (i.fillStyle = f.sh, o = f.sh);
      const d = Math.round(Math.min(f.Go, f.Qo) * a), v = Math.round(Math.max(f.Go, f.Qo) * a), m = Math.round(f.Xo * a), p = Math.round(f.Jo * a);
      let y = Math.round(s * f._t) - u;
      const b = y + l - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, b));
      const w = b - y + 1;
      i.fillRect(y, m, w, d - m), i.fillRect(y, v + 1, w, p - v), c = b;
    }
  }
  Nb(t) {
    let r = Math.floor(1 * t);
    this.Ib <= 2 * r && (r = Math.floor(0.5 * (this.Ib - 1)));
    const n = Math.max(Math.floor(t), r);
    return this.Ib <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
  }
  gm(t, r, n) {
    if (this.jt === null) return;
    const { context: i, horizontalPixelRatio: s, verticalPixelRatio: a } = t;
    let o = "";
    const l = this.Nb(s);
    let u = null;
    for (let c = n.from; c < n.to; c++) {
      const h = r[c];
      h.ih !== o && (i.fillStyle = h.ih, o = h.ih);
      let f = Math.round(h._t * s) - Math.floor(0.5 * this.Ib);
      const d = f + this.Ib - 1, v = Math.round(Math.min(h.Go, h.Qo) * a), m = Math.round(Math.max(h.Go, h.Qo) * a);
      if (u !== null && (f = Math.max(u + 1, f), f = Math.min(f, d)), this.jt.ul * s > 2 * l) lz(i, f, v, d - f + 1, m - v + 1, l);
      else {
        const p = d - f + 1;
        i.fillRect(f, v, p, m - v + 1);
      }
      u = d;
    }
  }
  Fb(t, r, n) {
    if (this.jt === null) return;
    const { context: i, horizontalPixelRatio: s, verticalPixelRatio: a } = t;
    let o = "";
    const l = this.Nb(s);
    for (let u = n.from; u < n.to; u++) {
      const c = r[u];
      let h = Math.round(Math.min(c.Go, c.Qo) * a), f = Math.round(Math.max(c.Go, c.Qo) * a), d = Math.round(c._t * s) - Math.floor(0.5 * this.Ib), v = d + this.Ib - 1;
      if (c.th !== o) {
        const m = c.th;
        i.fillStyle = m, o = m;
      }
      this.jt.Mi && (d += l, h += l, v -= l, f -= l), h > f || i.fillRect(d, h, v - d + 1, f - h + 1);
    }
  }
}
class uF extends oF {
  constructor() {
    super(...arguments), this.cM = new lF();
  }
  tb(t, r, n) {
    return { ...this.Lb(t, r, n), ...n.gh(t) };
  }
  wM() {
    const t = this.ee.N();
    this.cM.ht({ qs: this.aM, ul: this.re.Et().ul(), zb: t.wickVisible, Mi: t.borderVisible, lt: this.lM });
  }
}
const rW = { type: "Candlestick", isBuiltIn: true, defaultOptions: { upColor: "#26a69a", downColor: "#ef5350", wickVisible: true, borderVisible: true, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" }, YM: (e3, t) => new uF(e3, t) };
class cF extends er {
  constructor() {
    super(...arguments), this.jt = null, this.Wb = [];
  }
  ht(t) {
    this.jt = t, this.Wb = [];
  }
  et({ context: t, horizontalPixelRatio: r, verticalPixelRatio: n }) {
    if (this.jt === null || this.jt.ot.length === 0 || this.jt.lt === null) return;
    this.Wb.length || this.Hb(r);
    const i = Math.max(1, Math.floor(n)), s = Math.round(this.jt.Ub * n) - Math.floor(i / 2), a = s + i;
    for (let o = this.jt.lt.from; o < this.jt.lt.to; o++) {
      const l = this.jt.ot[o], u = this.Wb[o - this.jt.lt.from], c = Math.round(l.ut * n);
      let h, f;
      t.fillStyle = l.th, c <= s ? (h = c, f = a) : (h = s, f = c - Math.floor(i / 2) + i), t.fillRect(u.Aa, h, u.bi - u.Aa + 1, f - h);
    }
  }
  Hb(t) {
    if (this.jt === null || this.jt.ot.length === 0 || this.jt.lt === null) return void (this.Wb = []);
    const r = Math.ceil(this.jt.ul * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), n = Math.round(this.jt.ul * t) - r;
    this.Wb = new Array(this.jt.lt.to - this.jt.lt.from);
    for (let s = this.jt.lt.from; s < this.jt.lt.to; s++) {
      const a = this.jt.ot[s], o = Math.round(a._t * t);
      let l, u;
      if (n % 2) {
        const c = (n - 1) / 2;
        l = o - c, u = o + c;
      } else {
        const c = n / 2;
        l = o - c, u = o + c - 1;
      }
      this.Wb[s - this.jt.lt.from] = { Aa: l, bi: u, $b: o, oe: a._t * t, wt: a.wt };
    }
    for (let s = this.jt.lt.from + 1; s < this.jt.lt.to; s++) {
      const a = this.Wb[s - this.jt.lt.from], o = this.Wb[s - this.jt.lt.from - 1];
      a.wt === o.wt + 1 && a.Aa - o.bi !== r + 1 && (o.$b > o.oe ? o.bi = a.Aa - r - 1 : a.Aa = o.bi + r + 1);
    }
    let i = Math.ceil(this.jt.ul * t);
    for (let s = this.jt.lt.from; s < this.jt.lt.to; s++) {
      const a = this.Wb[s - this.jt.lt.from];
      a.bi < a.Aa && (a.bi = a.Aa);
      const o = a.bi - a.Aa + 1;
      i = Math.min(o, i);
    }
    if (r > 0 && i < 4) for (let s = this.jt.lt.from; s < this.jt.lt.to; s++) {
      const a = this.Wb[s - this.jt.lt.from];
      a.bi - a.Aa + 1 > i && (a.$b > a.oe ? a.bi -= 1 : a.Aa += 1);
    }
  }
}
class hF extends ef {
  constructor() {
    super(...arguments), this.cM = new cF();
  }
  tb(t, r, n) {
    return { ...this.QM(t, r), ...n.gh(t) };
  }
  wM() {
    const t = { ot: this.aM, ul: this.re.Et().ul(), lt: this.lM, Ub: this.ee.Ft().Nt(this.ee.N().base, C(this.ee.Lt()).Wt) };
    this.cM.ht(t);
  }
}
const nW = { type: "Histogram", isBuiltIn: true, defaultOptions: { color: "#26a69a", base: 0 }, YM: (e3, t) => new hF(e3, t) };
class fF {
  constructor(t, r) {
    this.ee = t, this.Zh = r, this.jb();
  }
  detach() {
    this.ee.detachPrimitive(this.Zh);
  }
  getSeries() {
    return this.ee;
  }
  applyOptions(t) {
    this.Zh && this.Zh.cr && this.Zh.cr(t);
  }
  jb() {
    this.ee.attachPrimitive(this.Zh);
  }
}
const dF = { autoScale: true, zOrder: "normal" };
function oi(e3, t) {
  return Gh(Math.min(Math.max(e3, 12), 30) * t);
}
function Cn(e3, t) {
  switch (e3) {
    case "arrowDown":
    case "arrowUp":
      return oi(t, 1);
    case "circle":
      return oi(t, 0.8);
    case "square":
      return oi(t, 0.7);
  }
}
function C1(e3) {
  return (function(t) {
    const r = Math.ceil(t);
    return r % 2 != 0 ? r - 1 : r;
  })(oi(e3, 1));
}
function k1(e3) {
  return Math.max(oi(e3, 0.1), 3);
}
function qg(e3, t, r) {
  return t ? e3 : r ? Math.ceil(e3 / 2) : 0;
}
function Kg(e3, t, r, n) {
  const i = (Cn("arrowUp", n) - 1) / 2 * r.pS, s = (Gh(n / 2) - 1) / 2 * r.pS;
  t.beginPath(), e3 ? (t.moveTo(r._t - i, r.ut), t.lineTo(r._t, r.ut - i), t.lineTo(r._t + i, r.ut), t.lineTo(r._t + s, r.ut), t.lineTo(r._t + s, r.ut + i), t.lineTo(r._t - s, r.ut + i), t.lineTo(r._t - s, r.ut)) : (t.moveTo(r._t - i, r.ut), t.lineTo(r._t, r.ut + i), t.lineTo(r._t + i, r.ut), t.lineTo(r._t + s, r.ut), t.lineTo(r._t + s, r.ut - i), t.lineTo(r._t - s, r.ut - i), t.lineTo(r._t - s, r.ut)), t.fill();
}
function Ug(e3, t, r, n, i, s) {
  const a = (Cn("arrowUp", n) - 1) / 2, o = (Gh(n / 2) - 1) / 2;
  return i >= t - o - 2 && i <= t + o + 2 && s >= (e3 ? r : r - a) - 2 && s <= (e3 ? r + a : r) + 2 ? true : (() => {
    if (i < t - a - 3 || i > t + a + 3 || s < (e3 ? r - a - 3 : r) || s > (e3 ? r : r + a + 3)) return false;
    const l = Math.abs(i - t);
    return Math.abs(s - r) + 3 >= l / 2;
  })();
}
class vF {
  constructor() {
    this.jt = null, this.$n = new Ai(), this.F = -1, this.W = "", this.jv = "", this.vS = "normal";
  }
  ht(t) {
    this.jt = t;
  }
  qn(t, r, n) {
    this.F === t && this.W === r || (this.F = t, this.W = r, this.jv = Ei(t, r), this.$n.On()), this.vS = n;
  }
  Qn(t, r) {
    if (this.jt === null || this.jt.lt === null) return null;
    for (let n = this.jt.lt.from; n < this.jt.lt.to; n++) {
      const i = this.jt.ot[n];
      if (i && mF(i, t, r)) return { zOrder: "normal", externalId: i.te ?? "" };
    }
    return null;
  }
  draw(t) {
    this.vS !== "aboveSeries" && t.useBitmapCoordinateSpace(((r) => {
      this.et(r);
    }));
  }
  drawBackground(t) {
    this.vS === "aboveSeries" && t.useBitmapCoordinateSpace(((r) => {
      this.et(r);
    }));
  }
  et({ context: t, horizontalPixelRatio: r, verticalPixelRatio: n }) {
    if (this.jt !== null && this.jt.lt !== null) {
      t.textBaseline = "middle", t.font = this.jv;
      for (let i = this.jt.lt.from; i < this.jt.lt.to; i++) {
        const s = this.jt.ot[i];
        s.ri !== void 0 && (s.ri.ss = this.$n.Ii(t, s.ri.mS), s.ri.$t = this.F, s.ri._t = s._t - s.ri.ss / 2), pF(s, t, r, n);
      }
    }
  }
}
function pF(e3, t, r, n) {
  t.fillStyle = e3.R, e3.ri !== void 0 && (function(i, s, a, o, l, u) {
    i.save(), i.scale(l, u), i.fillText(s, a, o), i.restore();
  })(t, e3.ri.mS, e3.ri._t, e3.ri.ut, r, n), (function(i, s, a) {
    if (i.yh !== 0) {
      switch (i.wS) {
        case "arrowDown":
          return void Kg(false, s, a, i.yh);
        case "arrowUp":
          return void Kg(true, s, a, i.yh);
        case "circle":
          return void (function(o, l, u) {
            const c = (Cn("circle", u) - 1) / 2;
            o.beginPath(), o.arc(l._t, l.ut, c * l.pS, 0, 2 * Math.PI, false), o.fill();
          })(s, a, i.yh);
        case "square":
          return void (function(o, l, u) {
            const c = Cn("square", u), h = (c - 1) * l.pS / 2, f = l._t - h, d = l.ut - h;
            o.fillRect(f, d, c * l.pS, c * l.pS);
          })(s, a, i.yh);
      }
      i.wS;
    }
  })(e3, t, (function(i, s, a) {
    const o = Math.max(1, Math.floor(s)) % 2 / 2;
    return { _t: Math.round(i._t * s) + o, ut: i.ut * a, pS: s };
  })(e3, r, n));
}
function mF(e3, t, r) {
  return !(e3.ri === void 0 || !(function(n, i, s, a, o, l) {
    const u = a / 2;
    return o >= n && o <= n + s && l >= i - u && l <= i + u;
  })(e3.ri._t, e3.ri.ut, e3.ri.ss, e3.ri.$t, t, r)) || (function(n, i, s) {
    if (n.yh === 0) return false;
    switch (n.wS) {
      case "arrowDown":
        return Ug(true, n._t, n.ut, n.yh, i, s);
      case "arrowUp":
        return Ug(false, n._t, n.ut, n.yh, i, s);
      case "circle":
        return (function(a, o, l, u, c) {
          const h = 2 + Cn("circle", l) / 2, f = a - u, d = o - c;
          return Math.sqrt(f * f + d * d) <= h;
        })(n._t, n.ut, n.yh, i, s);
      case "square":
        return (function(a, o, l, u, c) {
          const h = Cn("square", l), f = (h - 1) / 2, d = a - f, v = o - f;
          return u >= d && u <= d + h && c >= v && c <= v + h;
        })(n._t, n.ut, n.yh, i, s);
    }
  })(e3, t, r);
}
function Vg(e3) {
  return e3 === "atPriceTop" || e3 === "atPriceBottom" || e3 === "atPriceMiddle";
}
function gF(e3, t, r, n, i, s, a, o) {
  const l = (function(v, m, p) {
    if (Vg(m.position) && m.price !== void 0) return m.price;
    if ("value" in (y = v) && typeof y.value == "number") return v.value;
    var y;
    if ((function(b) {
      return "open" in b && "high" in b && "low" in b && "close" in b;
    })(v)) {
      if (m.position === "inBar") return v.close;
      if (m.position === "aboveBar") return p ? v.low : v.high;
      if (m.position === "belowBar") return p ? v.high : v.low;
    }
  })(r, t, a.priceScale().options().invertScale);
  if (l === void 0) return;
  const u = Vg(t.position), c = o.timeScale(), h = qr(t.size) ? Math.max(t.size, 0) : 1, f = C1(c.options().barSpacing) * h, d = f / 2;
  switch (e3.yh = f, t.position) {
    case "inBar":
    case "atPriceMiddle":
      return e3.ut = C(a.priceToCoordinate(l)), void (e3.ri !== void 0 && (e3.ri.ut = e3.ut + d + s + 0.6 * i));
    case "aboveBar":
    case "atPriceTop": {
      const v = u ? 0 : n.gS;
      return e3.ut = C(a.priceToCoordinate(l)) - d - v, e3.ri !== void 0 && (e3.ri.ut = e3.ut - d - 0.6 * i, n.gS += 1.2 * i), void (u || (n.gS += f + s));
    }
    case "belowBar":
    case "atPriceBottom": {
      const v = u ? 0 : n.MS;
      return e3.ut = C(a.priceToCoordinate(l)) + d + v, e3.ri !== void 0 && (e3.ri.ut = e3.ut + d + s + 0.6 * i, n.MS += 1.2 * i), void (u || (n.MS += f + s));
    }
  }
}
class yF {
  constructor(t, r, n) {
    this.bS = [], this.xt = true, this.SS = true, this.Xt = new vF(), this.ye = t, this.Lv = r, this.jt = { ot: [], lt: null }, this.Ps = n;
  }
  renderer() {
    if (!this.ye.options().visible) return null;
    this.xt && this.xS();
    const t = this.Lv.options().layout;
    return this.Xt.qn(t.fontSize, t.fontFamily, this.Ps.zOrder), this.Xt.ht(this.jt), this.Xt;
  }
  CS(t) {
    this.bS = t, this.kt("data");
  }
  kt(t) {
    this.xt = true, t === "data" && (this.SS = true);
  }
  yS(t) {
    this.xt = true, this.Ps = t;
  }
  zOrder() {
    return this.Ps.zOrder === "aboveSeries" ? "top" : this.Ps.zOrder;
  }
  xS() {
    const t = this.Lv.timeScale(), r = this.bS;
    this.SS && (this.jt.ot = r.map(((u) => ({ wt: u.time, _t: 0, ut: 0, yh: 0, wS: u.shape, R: u.color, te: u.id, kS: u.kS, ri: void 0 }))), this.SS = false);
    const n = this.Lv.options().layout;
    this.jt.lt = null;
    const i = t.getVisibleLogicalRange();
    if (i === null) return;
    const s = new gn(Math.floor(i.from), Math.ceil(i.to));
    if (this.ye.data()[0] === null || this.jt.ot.length === 0) return;
    let a = NaN;
    const o = k1(t.options().barSpacing), l = { gS: o, MS: o };
    this.jt.lt = _1(this.jt.ot, s, true);
    for (let u = this.jt.lt.from; u < this.jt.lt.to; u++) {
      const c = r[u];
      c.time !== a && (l.gS = o, l.MS = o, a = c.time);
      const h = this.jt.ot[u];
      h._t = C(t.logicalToCoordinate(c.time)), c.text !== void 0 && c.text.length > 0 && (h.ri = { mS: c.text, _t: 0, ut: 0, ss: 0, $t: 0 });
      const f = this.ye.dataByIndex(c.time, 0);
      f !== null && gF(h, c, f, l, n.fontSize, o, this.ye, this.Lv);
    }
    this.xt = false;
  }
}
function Yg(e3) {
  return { ...dF, ...e3 };
}
class bF {
  constructor(t) {
    this.$h = null, this.bS = [], this.PS = [], this.TS = null, this.ye = null, this.Lv = null, this.RS = true, this.DS = null, this.IS = null, this.VS = null, this.BS = true, this.Ps = Yg(t);
  }
  attached(t) {
    this.ES(), this.Lv = t.chart, this.ye = t.series, this.$h = new yF(this.ye, C(this.Lv), this.Ps), this.dS = t.requestUpdate, this.ye.subscribeDataChanged(((r) => this.IM(r))), this.BS = true, this.Jb();
  }
  Jb() {
    this.dS && this.dS();
  }
  detached() {
    this.ye && this.TS && this.ye.unsubscribeDataChanged(this.TS), this.Lv = null, this.ye = null, this.$h = null, this.TS = null;
  }
  CS(t) {
    this.BS = true, this.bS = t, this.ES(), this.RS = true, this.IS = null, this.Jb();
  }
  AS() {
    return this.bS;
  }
  paneViews() {
    return this.$h ? [this.$h] : [];
  }
  updateAllViews() {
    this.LS();
  }
  hitTest(t, r) {
    var _a3;
    return this.$h ? ((_a3 = this.$h.renderer()) == null ? void 0 : _a3.Qn(t, r)) ?? null : null;
  }
  autoscaleInfo(t, r) {
    if (this.Ps.autoScale && this.$h) {
      const n = this.zS();
      if (n) return { priceRange: null, margins: n };
    }
    return null;
  }
  cr(t) {
    this.Ps = Yg({ ...this.Ps, ...t }), this.Jb && this.Jb();
  }
  zS() {
    const t = C(this.Lv).timeScale().options().barSpacing;
    if (this.RS || t !== this.VS) {
      if (this.VS = t, this.bS.length > 0) {
        const r = k1(t), n = 1.5 * C1(t) + 2 * r, i = this.OS();
        this.DS = { above: qg(n, i.aboveBar, i.inBar), below: qg(n, i.belowBar, i.inBar) };
      } else this.DS = null;
      this.RS = false;
    }
    return this.DS;
  }
  OS() {
    return this.IS === null && (this.IS = this.bS.reduce(((t, r) => (t[r.position] || (t[r.position] = true), t)), { inBar: false, aboveBar: false, belowBar: false, atPriceTop: false, atPriceBottom: false, atPriceMiddle: false })), this.IS;
  }
  ES() {
    var _a3;
    if (!this.BS || !this.Lv || !this.ye) return;
    const t = this.Lv.timeScale(), r = (_a3 = this.ye) == null ? void 0 : _a3.data();
    if (t.getVisibleLogicalRange() == null || !this.ye || r.length === 0) return void (this.PS = []);
    const n = t.timeToIndex(C(r[0].time), true);
    this.PS = this.bS.map(((i, s) => {
      const a = t.timeToIndex(i.time, true), o = a < n ? 1 : -1, l = C(this.ye).dataByIndex(a, o), u = { time: t.timeToIndex(C(l).time, false), position: i.position, shape: i.shape, color: i.color, id: i.id, kS: s, text: i.text, size: i.size, price: i.price, Gr: i.time };
      if (i.position === "atPriceTop" || i.position === "atPriceBottom" || i.position === "atPriceMiddle") {
        if (i.price === void 0) throw new Error(`Price is required for position ${i.position}`);
        return { ...u, position: i.position, price: i.price };
      }
      return { ...u, position: i.position, price: i.price };
    })), this.BS = false;
  }
  LS(t) {
    this.$h && (this.ES(), this.$h.CS(this.PS), this.$h.yS(this.Ps), this.$h.kt(t));
  }
  IM(t) {
    this.BS = true, this.Jb();
  }
}
class wF extends fF {
  constructor(t, r, n) {
    super(t, r), n && this.setMarkers(n);
  }
  setMarkers(t) {
    this.Zh.CS(t);
  }
  markers() {
    return this.Zh.AS();
  }
}
function iW(e3, t, r) {
  const n = new wF(e3, new bF({}));
  return t && n.setMarkers(t), n;
}
({ ...s1 });
export {
  ZF as A,
  vL as C,
  GL as L,
  _F as R,
  eW as S,
  kF as T,
  nW as V,
  mg as W,
  $R as X,
  XR as Y,
  Hg as a,
  SR as b,
  J as c,
  rW as d,
  Gm as h,
  tW as n,
  iW as p,
  QF as q,
  T1 as r,
  PF as u
};
