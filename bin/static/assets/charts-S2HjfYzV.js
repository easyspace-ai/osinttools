var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2;
import { r as ka, a as p, g as Xe, c as Lf, R as OP } from "./monaco-BqKDZJPO.js";
var Do = { exports: {} }, Nt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Rf;
function MP() {
  if (Rf) return Nt;
  Rf = 1;
  var e3 = ka();
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
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, Nt.createPortal = function(l, u) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11) throw Error(t(299));
    return s(l, u, null, c);
  }, Nt.flushSync = function(l) {
    var u = a.T, c = n.p;
    try {
      if (a.T = null, n.p = 2, l) return l();
    } finally {
      a.T = u, n.p = c, n.d.f();
    }
  }, Nt.preconnect = function(l, u) {
    typeof l == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, n.d.C(l, u));
  }, Nt.prefetchDNS = function(l) {
    typeof l == "string" && n.d.D(l);
  }, Nt.preinit = function(l, u) {
    if (typeof l == "string" && u && typeof u.as == "string") {
      var c = u.as, h = o(c, u.crossOrigin), f = typeof u.integrity == "string" ? u.integrity : void 0, d = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      c === "style" ? n.d.S(l, typeof u.precedence == "string" ? u.precedence : void 0, { crossOrigin: h, integrity: f, fetchPriority: d }) : c === "script" && n.d.X(l, { crossOrigin: h, integrity: f, fetchPriority: d, nonce: typeof u.nonce == "string" ? u.nonce : void 0 });
    }
  }, Nt.preinitModule = function(l, u) {
    if (typeof l == "string") if (typeof u == "object" && u !== null) {
      if (u.as == null || u.as === "script") {
        var c = o(u.as, u.crossOrigin);
        n.d.M(l, { crossOrigin: c, integrity: typeof u.integrity == "string" ? u.integrity : void 0, nonce: typeof u.nonce == "string" ? u.nonce : void 0 });
      }
    } else u == null && n.d.M(l);
  }, Nt.preload = function(l, u) {
    if (typeof l == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var c = u.as, h = o(c, u.crossOrigin);
      n.d.L(l, c, { crossOrigin: h, integrity: typeof u.integrity == "string" ? u.integrity : void 0, nonce: typeof u.nonce == "string" ? u.nonce : void 0, type: typeof u.type == "string" ? u.type : void 0, fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0, referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0, imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0, imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0, media: typeof u.media == "string" ? u.media : void 0 });
    }
  }, Nt.preloadModule = function(l, u) {
    if (typeof l == "string") if (u) {
      var c = o(u.as, u.crossOrigin);
      n.d.m(l, { as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0, crossOrigin: c, integrity: typeof u.integrity == "string" ? u.integrity : void 0 });
    } else n.d.m(l);
  }, Nt.requestFormReset = function(l) {
    n.d.r(l);
  }, Nt.unstable_batchedUpdates = function(l, u) {
    return l(u);
  }, Nt.useFormState = function(l, u, c) {
    return a.H.useFormState(l, u, c);
  }, Nt.useFormStatus = function() {
    return a.H.useHostTransitionStatus();
  }, Nt.version = "19.2.7", Nt;
}
var $f;
function EP() {
  if ($f) return Do.exports;
  $f = 1;
  function e3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e3);
    } catch (t) {
      console.error(t);
    }
  }
  return e3(), Do.exports = MP(), Do.exports;
}
var By = EP();
function Fy(e3) {
  var t, r, n = "";
  if (typeof e3 == "string" || typeof e3 == "number") n += e3;
  else if (typeof e3 == "object") if (Array.isArray(e3)) {
    var i = e3.length;
    for (t = 0; t < i; t++) e3[t] && (r = Fy(e3[t])) && (n && (n += " "), n += r);
  } else for (r in e3) e3[r] && (n && (n += " "), n += r);
  return n;
}
function X() {
  for (var e3, t, r = 0, n = "", i = arguments.length; r < i; r++) (e3 = arguments[r]) && (t = Fy(e3)) && (n && (n += " "), n += t);
  return n;
}
var Lo = { exports: {} }, Ro = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zf;
function AP() {
  if (zf) return Ro;
  zf = 1;
  var e3 = ka();
  function t(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useState, i = e3.useEffect, s = e3.useLayoutEffect, a = e3.useDebugValue;
  function o(h, f) {
    var d = f(), v = n({ inst: { value: d, getSnapshot: f } }), m = v[0].inst, g = v[1];
    return s(function() {
      m.value = d, m.getSnapshot = f, l(m) && g({ inst: m });
    }, [h, d, f]), i(function() {
      return l(m) && g({ inst: m }), h(function() {
        l(m) && g({ inst: m });
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
  return Ro.useSyncExternalStore = e3.useSyncExternalStore !== void 0 ? e3.useSyncExternalStore : c, Ro;
}
var Bf;
function CP() {
  return Bf || (Bf = 1, Lo.exports = AP()), Lo.exports;
}
var IP = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function $c(e3) {
  if (typeof e3 != "string") return false;
  var t = IP;
  return t.includes(e3);
}
var kP = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], jP = new Set(kP);
function Wy(e3) {
  return typeof e3 != "string" ? false : jP.has(e3);
}
function qy(e3) {
  return typeof e3 == "string" && e3.startsWith("data-");
}
function Xt(e3) {
  if (typeof e3 != "object" || e3 === null) return {};
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (Wy(r) || qy(r)) && (t[r] = e3[r]);
  return t;
}
function ja(e3) {
  if (e3 == null) return null;
  if (p.isValidElement(e3) && typeof e3.props == "object" && e3.props !== null) {
    var t = e3.props;
    return Xt(t);
  }
  return typeof e3 == "object" && !Array.isArray(e3) ? Xt(e3) : null;
}
function vt(e3) {
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (Wy(r) || qy(r) || $c(r)) && (t[r] = e3[r]);
  return t;
}
function TP(e3) {
  return e3 == null ? null : p.isValidElement(e3) ? vt(e3.props) : typeof e3 == "object" && !Array.isArray(e3) ? vt(e3) : null;
}
var NP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function zu() {
  return zu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, zu.apply(null, arguments);
}
function DP(e3, t) {
  if (e3 == null) return {};
  var r, n, i = LP(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function LP(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var zc = p.forwardRef((e3, t) => {
  var { children: r, width: n, height: i, viewBox: s, className: a, style: o, title: l, desc: u } = e3, c = DP(e3, NP), h = s || { width: n, height: i, x: 0, y: 0 }, f = X("recharts-surface", a);
  return p.createElement("svg", zu({}, vt(c), { className: f, width: n, height: i, style: o, viewBox: "".concat(h.x, " ").concat(h.y, " ").concat(h.width, " ").concat(h.height), ref: t }), p.createElement("title", null, l), p.createElement("desc", null, u), r);
}), RP = ["children", "className"];
function Bu() {
  return Bu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Bu.apply(null, arguments);
}
function $P(e3, t) {
  if (e3 == null) return {};
  var r, n, i = zP(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function zP(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var kt = p.forwardRef((e3, t) => {
  var { children: r, className: n } = e3, i = $P(e3, RP), s = X("recharts-layer", n);
  return p.createElement("g", Bu({ className: s }, vt(i), { ref: t }), r);
}), BP = p.createContext(null);
function et(e3) {
  return function() {
    return e3;
  };
}
const Ky = Math.cos, Ts = Math.sin, xe = Math.sqrt, Ns = Math.PI, Ta = 2 * Ns, Fu = Math.PI, Wu = 2 * Fu, _r = 1e-6, FP = Wu - _r;
function Uy(e3) {
  this._ += e3[0];
  for (let t = 1, r = e3.length; t < r; ++t) this._ += arguments[t] + e3[t];
}
function WP(e3) {
  let t = Math.floor(e3);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e3}`);
  if (t > 15) return Uy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, s = n.length; i < s; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class qP {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Uy : WP(t);
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
    else if (f > _r) if (!(Math.abs(h * l - u * c) > _r) || !s) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - a, v = i - o, m = l * l + u * u, g = d * d + v * v, y = Math.sqrt(m), b = Math.sqrt(f), w = s * Math.tan((Fu - Math.acos((m + f - g) / (2 * y * b))) / 2), x = w / b, P = w / y;
      Math.abs(x - 1) > _r && this._append`L${t + x * c},${r + x * h}`, this._append`A${s},${s},0,0,${+(h * d > c * v)},${this._x1 = t + P * l},${this._y1 = r + P * u}`;
    }
  }
  arc(t, r, n, i, s, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let o = n * Math.cos(i), l = n * Math.sin(i), u = t + o, c = r + l, h = 1 ^ a, f = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > _r || Math.abs(this._y1 - c) > _r) && this._append`L${u},${c}`, n && (f < 0 && (f = f % Wu + Wu), f > FP ? this._append`A${n},${n},0,1,${h},${t - o},${r - l}A${n},${n},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > _r && this._append`A${n},${n},0,${+(f >= Fu)},${h},${this._x1 = t + n * Math.cos(s)},${this._y1 = r + n * Math.sin(s)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Bc(e3) {
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
  }, () => new qP(t);
}
function Fc(e3) {
  return typeof e3 == "object" && "length" in e3 ? e3 : Array.from(e3);
}
function Vy(e3) {
  this._context = e3;
}
Vy.prototype = { areaStart: function() {
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
function Na(e3) {
  return new Vy(e3);
}
function Yy(e3) {
  return e3[0];
}
function Hy(e3) {
  return e3[1];
}
function Gy(e3, t) {
  var r = et(true), n = null, i = Na, s = null, a = Bc(o);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? Yy : et(e3), t = typeof t == "function" ? t : t === void 0 ? Hy : et(t);
  function o(l) {
    var u, c = (l = Fc(l)).length, h, f = false, d;
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
function ts(e3, t, r) {
  var n = null, i = et(true), s = null, a = Na, o = null, l = Bc(u);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? Yy : et(+e3), t = typeof t == "function" ? t : et(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Hy : et(+r);
  function u(h) {
    var f, d, v, m = (h = Fc(h)).length, g, y = false, b, w = new Array(m), x = new Array(m);
    for (s == null && (o = a(b = l())), f = 0; f <= m; ++f) {
      if (!(f < m && i(g = h[f], f, h)) === y) if (y = !y) d = f, o.areaStart(), o.lineStart();
      else {
        for (o.lineEnd(), o.lineStart(), v = f - 1; v >= d; --v) o.point(w[v], x[v]);
        o.lineEnd(), o.areaEnd();
      }
      y && (w[f] = +e3(g, f, h), x[f] = +t(g, f, h), o.point(n ? +n(g, f, h) : w[f], r ? +r(g, f, h) : x[f]));
    }
    if (b) return o = null, b + "" || null;
  }
  function c() {
    return Gy().defined(i).curve(a).context(s);
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
class Xy {
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
function KP(e3) {
  return new Xy(e3, true);
}
function UP(e3) {
  return new Xy(e3, false);
}
const Wc = { draw(e3, t) {
  const r = xe(t / Ns);
  e3.moveTo(r, 0), e3.arc(0, 0, r, 0, Ta);
} }, VP = { draw(e3, t) {
  const r = xe(t / 5) / 2;
  e3.moveTo(-3 * r, -r), e3.lineTo(-r, -r), e3.lineTo(-r, -3 * r), e3.lineTo(r, -3 * r), e3.lineTo(r, -r), e3.lineTo(3 * r, -r), e3.lineTo(3 * r, r), e3.lineTo(r, r), e3.lineTo(r, 3 * r), e3.lineTo(-r, 3 * r), e3.lineTo(-r, r), e3.lineTo(-3 * r, r), e3.closePath();
} }, Jy = xe(1 / 3), YP = Jy * 2, HP = { draw(e3, t) {
  const r = xe(t / YP), n = r * Jy;
  e3.moveTo(0, -r), e3.lineTo(n, 0), e3.lineTo(0, r), e3.lineTo(-n, 0), e3.closePath();
} }, GP = { draw(e3, t) {
  const r = xe(t), n = -r / 2;
  e3.rect(n, n, r, r);
} }, XP = 0.8908130915292852, Zy = Ts(Ns / 10) / Ts(7 * Ns / 10), JP = Ts(Ta / 10) * Zy, ZP = -Ky(Ta / 10) * Zy, QP = { draw(e3, t) {
  const r = xe(t * XP), n = JP * r, i = ZP * r;
  e3.moveTo(0, -r), e3.lineTo(n, i);
  for (let s = 1; s < 5; ++s) {
    const a = Ta * s / 5, o = Ky(a), l = Ts(a);
    e3.lineTo(l * r, -o * r), e3.lineTo(o * n - l * i, l * n + o * i);
  }
  e3.closePath();
} }, $o = xe(3), tS = { draw(e3, t) {
  const r = -xe(t / ($o * 3));
  e3.moveTo(0, r * 2), e3.lineTo(-$o * r, -r), e3.lineTo($o * r, -r), e3.closePath();
} }, ae = -0.5, oe = xe(3) / 2, qu = 1 / xe(12), eS = (qu / 2 + 1) * 3, rS = { draw(e3, t) {
  const r = xe(t / eS), n = r / 2, i = r * qu, s = n, a = r * qu + r, o = -s, l = a;
  e3.moveTo(n, i), e3.lineTo(s, a), e3.lineTo(o, l), e3.lineTo(ae * n - oe * i, oe * n + ae * i), e3.lineTo(ae * s - oe * a, oe * s + ae * a), e3.lineTo(ae * o - oe * l, oe * o + ae * l), e3.lineTo(ae * n + oe * i, ae * i - oe * n), e3.lineTo(ae * s + oe * a, ae * a - oe * s), e3.lineTo(ae * o + oe * l, ae * l - oe * o), e3.closePath();
} };
function nS(e3, t) {
  let r = null, n = Bc(i);
  e3 = typeof e3 == "function" ? e3 : et(e3 || Wc), t = typeof t == "function" ? t : et(t === void 0 ? 64 : +t);
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
function Ds() {
}
function Ls(e3, t, r) {
  e3._context.bezierCurveTo((2 * e3._x0 + e3._x1) / 3, (2 * e3._y0 + e3._y1) / 3, (e3._x0 + 2 * e3._x1) / 3, (e3._y0 + 2 * e3._y1) / 3, (e3._x0 + 4 * e3._x1 + t) / 6, (e3._y0 + 4 * e3._y1 + r) / 6);
}
function Qy(e3) {
  this._context = e3;
}
Qy.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      Ls(this, this._x1, this._y1);
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
      Ls(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function iS(e3) {
  return new Qy(e3);
}
function t0(e3) {
  this._context = e3;
}
t0.prototype = { areaStart: Ds, areaEnd: Ds, lineStart: function() {
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
      Ls(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function sS(e3) {
  return new t0(e3);
}
function e0(e3) {
  this._context = e3;
}
e0.prototype = { areaStart: function() {
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
      Ls(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function aS(e3) {
  return new e0(e3);
}
function r0(e3) {
  this._context = e3;
}
r0.prototype = { areaStart: Ds, areaEnd: Ds, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e3, t) {
  e3 = +e3, t = +t, this._point ? this._context.lineTo(e3, t) : (this._point = 1, this._context.moveTo(e3, t));
} };
function oS(e3) {
  return new r0(e3);
}
function Ff(e3) {
  return e3 < 0 ? -1 : 1;
}
function Wf(e3, t, r) {
  var n = e3._x1 - e3._x0, i = t - e3._x1, s = (e3._y1 - e3._y0) / (n || i < 0 && -0), a = (r - e3._y1) / (i || n < 0 && -0), o = (s * i + a * n) / (n + i);
  return (Ff(s) + Ff(a)) * Math.min(Math.abs(s), Math.abs(a), 0.5 * Math.abs(o)) || 0;
}
function qf(e3, t) {
  var r = e3._x1 - e3._x0;
  return r ? (3 * (e3._y1 - e3._y0) / r - t) / 2 : t;
}
function zo(e3, t, r) {
  var n = e3._x0, i = e3._y0, s = e3._x1, a = e3._y1, o = (s - n) / 3;
  e3._context.bezierCurveTo(n + o, i + o * t, s - o, a - o * r, s, a);
}
function Rs(e3) {
  this._context = e3;
}
Rs.prototype = { areaStart: function() {
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
      zo(this, this._t0, qf(this, this._t0));
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
        this._point = 3, zo(this, qf(this, r = Wf(this, e3, t)), r);
        break;
      default:
        zo(this, this._t0, r = Wf(this, e3, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function n0(e3) {
  this._context = new i0(e3);
}
(n0.prototype = Object.create(Rs.prototype)).point = function(e3, t) {
  Rs.prototype.point.call(this, t, e3);
};
function i0(e3) {
  this._context = e3;
}
i0.prototype = { moveTo: function(e3, t) {
  this._context.moveTo(t, e3);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e3, t) {
  this._context.lineTo(t, e3);
}, bezierCurveTo: function(e3, t, r, n, i, s) {
  this._context.bezierCurveTo(t, e3, n, r, s, i);
} };
function lS(e3) {
  return new Rs(e3);
}
function uS(e3) {
  return new n0(e3);
}
function s0(e3) {
  this._context = e3;
}
s0.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e3 = this._x, t = this._y, r = e3.length;
  if (r) if (this._line ? this._context.lineTo(e3[0], t[0]) : this._context.moveTo(e3[0], t[0]), r === 2) this._context.lineTo(e3[1], t[1]);
  else for (var n = Kf(e3), i = Kf(t), s = 0, a = 1; a < r; ++s, ++a) this._context.bezierCurveTo(n[0][s], i[0][s], n[1][s], i[1][s], e3[a], t[a]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e3, t) {
  this._x.push(+e3), this._y.push(+t);
} };
function Kf(e3) {
  var t, r = e3.length - 1, n, i = new Array(r), s = new Array(r), a = new Array(r);
  for (i[0] = 0, s[0] = 2, a[0] = e3[0] + 2 * e3[1], t = 1; t < r - 1; ++t) i[t] = 1, s[t] = 4, a[t] = 4 * e3[t] + 2 * e3[t + 1];
  for (i[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * e3[r - 1] + e3[r], t = 1; t < r; ++t) n = i[t] / s[t - 1], s[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / s[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / s[t];
  for (s[r - 1] = (e3[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) s[t] = 2 * e3[t + 1] - i[t + 1];
  return [i, s];
}
function cS(e3) {
  return new s0(e3);
}
function Da(e3, t) {
  this._context = e3, this._t = t;
}
Da.prototype = { areaStart: function() {
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
function hS(e3) {
  return new Da(e3, 0.5);
}
function fS(e3) {
  return new Da(e3, 0);
}
function dS(e3) {
  return new Da(e3, 1);
}
function Lr(e3, t) {
  if ((a = e3.length) > 1) for (var r = 1, n, i, s = e3[t[0]], a, o = s.length; r < a; ++r) for (i = s, s = e3[t[r]], n = 0; n < o; ++n) s[n][1] += s[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Ku(e3) {
  for (var t = e3.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function vS(e3, t) {
  return e3[t];
}
function pS(e3) {
  const t = [];
  return t.key = e3, t;
}
function mS() {
  var e3 = et([]), t = Ku, r = Lr, n = vS;
  function i(s) {
    var a = Array.from(e3.apply(this, arguments), pS), o, l = a.length, u = -1, c;
    for (const h of s) for (o = 0, ++u; o < l; ++o) (a[o][u] = [0, +n(h, a[o].key, u, s)]).data = h;
    for (o = 0, c = Fc(t(a)); o < l; ++o) a[c[o]].index = o;
    return r(a, c), a;
  }
  return i.keys = function(s) {
    return arguments.length ? (e3 = typeof s == "function" ? s : et(Array.from(s)), i) : e3;
  }, i.value = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : et(+s), i) : n;
  }, i.order = function(s) {
    return arguments.length ? (t = s == null ? Ku : typeof s == "function" ? s : et(Array.from(s)), i) : t;
  }, i.offset = function(s) {
    return arguments.length ? (r = s ?? Lr, i) : r;
  }, i;
}
function gS(e3, t) {
  if ((n = e3.length) > 0) {
    for (var r, n, i = 0, s = e3[0].length, a; i < s; ++i) {
      for (a = r = 0; r < n; ++r) a += e3[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e3[r][i][1] /= a;
    }
    Lr(e3, t);
  }
}
function yS(e3, t) {
  if ((i = e3.length) > 0) {
    for (var r = 0, n = e3[t[0]], i, s = n.length; r < s; ++r) {
      for (var a = 0, o = 0; a < i; ++a) o += e3[a][r][1] || 0;
      n[r][1] += n[r][0] = -o / 2;
    }
    Lr(e3, t);
  }
}
function bS(e3, t) {
  if (!(!((a = e3.length) > 0) || !((s = (i = e3[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, s, a; n < s; ++n) {
      for (var o = 0, l = 0, u = 0; o < a; ++o) {
        for (var c = e3[t[o]], h = c[n][1] || 0, f = c[n - 1][1] || 0, d = (h - f) / 2, v = 0; v < o; ++v) {
          var m = e3[t[v]], g = m[n][1] || 0, y = m[n - 1][1] || 0;
          d += g - y;
        }
        l += h, u += d * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= u / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Lr(e3, t);
  }
}
var Bo = {}, Fo = {}, Uf;
function a0() {
  if (Uf) return Fo;
  Uf = 1;
  function e3(t) {
    return t === "__proto__";
  }
  return Fo.isUnsafeProperty = e3, Fo;
}
var Wo = {}, Vf;
function La() {
  if (Vf) return Wo;
  Vf = 1;
  function e3(t) {
    switch (typeof t) {
      case "number":
      case "symbol":
        return false;
      case "string":
        return t.includes(".") || t.includes("[") || t.includes("]");
    }
  }
  return Wo.isDeepKey = e3, Wo;
}
var qo = {}, Yf;
function Ra() {
  if (Yf) return qo;
  Yf = 1;
  function e3(t) {
    var _a3;
    return typeof t == "string" || typeof t == "symbol" ? t : Object.is((_a3 = t == null ? void 0 : t.valueOf) == null ? void 0 : _a3.call(t), -0) ? "-0" : String(t);
  }
  return qo.toKey = e3, qo;
}
var Ko = {}, Uo = {}, Hf;
function wS() {
  if (Hf) return Uo;
  Hf = 1;
  function e3(t) {
    if (t == null) return "";
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return t.map(e3).join(",");
    const r = String(t);
    return r === "0" && Object.is(Number(t), -0) ? "-0" : r;
  }
  return Uo.toString = e3, Uo;
}
var Gf;
function $a() {
  if (Gf) return Ko;
  Gf = 1;
  const e3 = Ra(), t = wS();
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
  return Ko.toPath = r, Ko;
}
var Xf;
function za() {
  if (Xf) return Bo;
  Xf = 1;
  const e3 = a0(), t = La(), r = Ra(), n = $a();
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
  return Bo.get = i, Bo;
}
var Vo, Jf;
function xS() {
  return Jf || (Jf = 1, Vo = za().get), Vo;
}
var PS = xS();
const Dn = Xe(PS);
var SS = 4;
function cr(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SS, r = 10 ** t, n = Math.round(e3 * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function ot(e3) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return e3.reduce((i, s, a) => {
    var o = r[a - 1];
    return typeof o == "string" ? i + o + s : o !== void 0 ? i + cr(o) + s : i + s;
  }, "");
}
var ue = (e3) => e3 === 0 ? 0 : e3 > 0 ? 1 : -1, fe = (e3) => typeof e3 == "number" && e3 != +e3, Rr = (e3) => typeof e3 == "string" && e3.indexOf("%") === e3.length - 1, L = (e3) => (typeof e3 == "number" || e3 instanceof Number) && !fe(e3), Te = (e3) => L(e3) || typeof e3 == "string", _S = 0, Pn = (e3) => {
  var t = ++_S;
  return "".concat(e3 || "").concat(t);
}, vr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && typeof t != "string") return n;
  var s;
  if (Rr(t)) {
    if (r == null) return n;
    var a = t.indexOf("%");
    s = r * parseFloat(t.slice(0, a)) / 100;
  } else s = +t;
  return fe(s) && (s = n), i && r != null && s > r && (s = r), s;
}, o0 = (e3) => {
  if (!Array.isArray(e3)) return false;
  for (var t = e3.length, r = {}, n = 0; n < t; n++) if (!r[String(e3[n])]) r[String(e3[n])] = true;
  else return true;
  return false;
};
function dt(e3, t, r) {
  return L(e3) && L(t) ? cr(e3 + r * (t - e3)) : t;
}
function l0(e3, t, r) {
  if (!(!e3 || !e3.length)) return e3.find((n) => n && (typeof t == "function" ? t(n) : Dn(n, t)) === r);
}
var bt = (e3) => e3 === null || typeof e3 > "u", Li = (e3) => bt(e3) ? e3 : "".concat(e3.charAt(0).toUpperCase()).concat(e3.slice(1));
function Ht(e3) {
  return e3 != null;
}
function Je() {
}
var OS = ["type", "size", "sizeType"];
function Uu() {
  return Uu = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Uu.apply(null, arguments);
}
function Zf(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qf(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), true).forEach(function(n) {
      MS(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function MS(e3, t, r) {
  return (t = ES(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ES(e3) {
  var t = AS(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AS(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function CS(e3, t) {
  if (e3 == null) return {};
  var r, n, i = IS(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function IS(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var u0 = { symbolCircle: Wc, symbolCross: VP, symbolDiamond: HP, symbolSquare: GP, symbolStar: QP, symbolTriangle: tS, symbolWye: rS }, kS = Math.PI / 180, jS = (e3) => {
  var t = "symbol".concat(Li(e3));
  return u0[t] || Wc;
}, TS = (e3, t, r) => {
  if (t === "area") return e3;
  switch (r) {
    case "cross":
      return 5 * e3 * e3 / 9;
    case "diamond":
      return 0.5 * e3 * e3 / Math.sqrt(3);
    case "square":
      return e3 * e3;
    case "star": {
      var n = 18 * kS;
      return 1.25 * e3 * e3 * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e3 * e3 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e3 * e3 / 8;
    default:
      return Math.PI * e3 * e3 / 4;
  }
}, NS = (e3, t) => {
  u0["symbol".concat(Li(e3))] = t;
}, c0 = (e3) => {
  var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e3, i = CS(e3, OS), s = Qf(Qf({}, i), {}, { type: t, size: r, sizeType: n }), a = "circle";
  typeof t == "string" && (a = t);
  var o = () => {
    var f = jS(a), d = nS().type(f).size(TS(r, n, a)), v = d();
    if (v !== null) return v;
  }, { className: l, cx: u, cy: c } = s, h = vt(s);
  return L(u) && L(c) && L(r) ? p.createElement("path", Uu({}, h, { className: X("recharts-symbols", l), transform: "translate(".concat(u, ", ").concat(c, ")"), d: o() })) : null;
};
c0.registerSymbol = NS;
var h0 = (e3) => "radius" in e3 && "startAngle" in e3 && "endAngle" in e3, qc = (e3, t) => {
  if (!e3 || typeof e3 == "function" || typeof e3 == "boolean") return null;
  var r = e3;
  if (p.isValidElement(e3) && (r = e3.props), typeof r != "object" && typeof r != "function") return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    $c(i) && typeof r[i] == "function" && (n[i] = ((s) => r[i](r, s)));
  }), n;
}, DS = (e3, t, r) => (n) => (e3(t, r, n), null), LS = (e3, t, r) => {
  if (e3 === null || typeof e3 != "object" && typeof e3 != "function") return null;
  var n = null;
  return Object.keys(e3).forEach((i) => {
    var s = e3[i];
    $c(i) && typeof s == "function" && (n || (n = {}), n[i] = DS(s, t, r));
  }), n;
};
function td(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function RS(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? td(Object(r), true).forEach(function(n) {
      $S(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : td(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function $S(e3, t, r) {
  return (t = zS(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function zS(e3) {
  var t = BS(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BS(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function jt(e3, t) {
  var r = RS({}, e3), n = t, i = Object.keys(t), s = i.reduce((a, o) => (a[o] === void 0 && n[o] !== void 0 && (a[o] = n[o]), a), r);
  return s;
}
var Yo = {}, Ho = {}, ed;
function FS() {
  if (ed) return Ho;
  ed = 1;
  function e3(t, r) {
    const n = /* @__PURE__ */ new Map();
    for (let i = 0; i < t.length; i++) {
      const s = t[i], a = r(s, i, t);
      n.has(a) || n.set(a, s);
    }
    return Array.from(n.values());
  }
  return Ho.uniqBy = e3, Ho;
}
var Go = {}, rd;
function WS() {
  if (rd) return Go;
  rd = 1;
  function e3(t, r) {
    return function(...n) {
      return t.apply(this, n.slice(0, r));
    };
  }
  return Go.ary = e3, Go;
}
var Xo = {}, nd;
function f0() {
  if (nd) return Xo;
  nd = 1;
  function e3(t) {
    return t;
  }
  return Xo.identity = e3, Xo;
}
var Jo = {}, Zo = {}, id;
function qS() {
  if (id) return Zo;
  id = 1;
  const e3 = za();
  function t(r) {
    return function(n) {
      return e3.get(n, r);
    };
  }
  return Zo.property = t, Zo;
}
var Qo = {}, tl = {}, Yn = {}, el = {}, sd;
function d0() {
  if (sd) return el;
  sd = 1;
  function e3(t) {
    return t == null || typeof t != "object" && typeof t != "function";
  }
  return el.isPrimitive = e3, el;
}
var rl = {}, ad;
function v0() {
  if (ad) return rl;
  ad = 1;
  function e3(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  return rl.isTypedArray = e3, rl;
}
var nl = {}, od;
function p0() {
  if (od) return nl;
  od = 1;
  function e3(t) {
    return Object.getOwnPropertySymbols(t).filter((r) => Object.prototype.propertyIsEnumerable.call(t, r));
  }
  return nl.getSymbols = e3, nl;
}
var il = {}, ld;
function Kc() {
  if (ld) return il;
  ld = 1;
  function e3(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
  }
  return il.getTag = e3, il;
}
var J = {}, ud;
function m0() {
  if (ud) return J;
  ud = 1;
  const e3 = "[object RegExp]", t = "[object String]", r = "[object Number]", n = "[object Boolean]", i = "[object Arguments]", s = "[object Symbol]", a = "[object Date]", o = "[object Map]", l = "[object Set]", u = "[object Array]", c = "[object Function]", h = "[object ArrayBuffer]", f = "[object Object]", d = "[object Error]", v = "[object DataView]", m = "[object Uint8Array]", g = "[object Uint8ClampedArray]", y = "[object Uint16Array]", b = "[object Uint32Array]", w = "[object BigUint64Array]", x = "[object Int8Array]", P = "[object Int16Array]", S = "[object Int32Array]", _ = "[object BigInt64Array]", M = "[object Float32Array]", A = "[object Float64Array]";
  return J.argumentsTag = i, J.arrayBufferTag = h, J.arrayTag = u, J.bigInt64ArrayTag = _, J.bigUint64ArrayTag = w, J.booleanTag = n, J.dataViewTag = v, J.dateTag = a, J.errorTag = d, J.float32ArrayTag = M, J.float64ArrayTag = A, J.functionTag = c, J.int16ArrayTag = P, J.int32ArrayTag = S, J.int8ArrayTag = x, J.mapTag = o, J.numberTag = r, J.objectTag = f, J.regexpTag = e3, J.setTag = l, J.stringTag = t, J.symbolTag = s, J.uint16ArrayTag = y, J.uint32ArrayTag = b, J.uint8ArrayTag = m, J.uint8ClampedArrayTag = g, J;
}
var sl = {}, al = {}, cd;
function KS() {
  if (cd) return al;
  cd = 1;
  const e3 = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof Lf == "object" && Lf || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
  return al.globalThis_ = e3, al;
}
var hd;
function g0() {
  if (hd) return sl;
  hd = 1;
  const e3 = KS();
  function t(r) {
    return typeof e3.globalThis_.Buffer < "u" && e3.globalThis_.Buffer.isBuffer(r);
  }
  return sl.isBuffer = t, sl;
}
var fd;
function y0() {
  if (fd) return Yn;
  fd = 1;
  const e3 = d0(), t = v0(), r = p0(), n = Kc(), i = m0(), s = g0();
  function a(c, h) {
    return o(c, void 0, c, /* @__PURE__ */ new Map(), h);
  }
  function o(c, h, f, d = /* @__PURE__ */ new Map(), v = void 0) {
    const m = v == null ? void 0 : v(c, h, f, d);
    if (m !== void 0) return m;
    if (e3.isPrimitive(c)) return c;
    if (d.has(c)) return d.get(c);
    if (Array.isArray(c)) {
      const g = new Array(c.length);
      d.set(c, g);
      for (let y = 0; y < c.length; y++) g[y] = o(c[y], y, f, d, v);
      return Object.hasOwn(c, "index") && (g.index = c.index), Object.hasOwn(c, "input") && (g.input = c.input), g;
    }
    if (c instanceof Date) return new Date(c.getTime());
    if (c instanceof RegExp) {
      const g = new RegExp(c.source, c.flags);
      return g.lastIndex = c.lastIndex, g;
    }
    if (c instanceof Map) {
      const g = /* @__PURE__ */ new Map();
      d.set(c, g);
      for (const [y, b] of c) g.set(y, o(b, y, f, d, v));
      return g;
    }
    if (c instanceof Set) {
      const g = /* @__PURE__ */ new Set();
      d.set(c, g);
      for (const y of c) g.add(o(y, void 0, f, d, v));
      return g;
    }
    if (s.isBuffer(c)) return c.subarray();
    if (t.isTypedArray(c)) {
      const g = new (Object.getPrototypeOf(c)).constructor(c.length);
      d.set(c, g);
      for (let y = 0; y < c.length; y++) g[y] = o(c[y], y, f, d, v);
      return g;
    }
    if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer) return c.slice(0);
    if (c instanceof DataView) {
      const g = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (typeof File < "u" && c instanceof File) {
      const g = new File([c], c.name, { type: c.type });
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (typeof Blob < "u" && c instanceof Blob) {
      const g = new Blob([c], { type: c.type });
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (c instanceof Error) {
      const g = structuredClone(c);
      return d.set(c, g), g.message = c.message, g.name = c.name, g.stack = c.stack, g.cause = c.cause, g.constructor = c.constructor, l(g, c, f, d, v), g;
    }
    if (c instanceof Boolean) {
      const g = new Boolean(c.valueOf());
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (c instanceof Number) {
      const g = new Number(c.valueOf());
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (c instanceof String) {
      const g = new String(c.valueOf());
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    if (typeof c == "object" && u(c)) {
      const g = Object.create(Object.getPrototypeOf(c));
      return d.set(c, g), l(g, c, f, d, v), g;
    }
    return c;
  }
  function l(c, h, f = c, d, v) {
    const m = [...Object.keys(h), ...r.getSymbols(h)];
    for (let g = 0; g < m.length; g++) {
      const y = m[g], b = Object.getOwnPropertyDescriptor(c, y);
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
  return Yn.cloneDeepWith = a, Yn.cloneDeepWithImpl = o, Yn.copyProperties = l, Yn;
}
var dd;
function US() {
  if (dd) return tl;
  dd = 1;
  const e3 = y0();
  function t(r) {
    return e3.cloneDeepWithImpl(r, void 0, r, /* @__PURE__ */ new Map(), void 0);
  }
  return tl.cloneDeep = t, tl;
}
var ol = {}, ll = {}, ul = {}, vd;
function b0() {
  if (vd) return ul;
  vd = 1;
  function e3(t, r) {
    return t === r || Number.isNaN(t) && Number.isNaN(r);
  }
  return ul.isEqualsSameValueZero = e3, ul;
}
var cl = {}, pd;
function w0() {
  if (pd) return cl;
  pd = 1;
  function e3(t) {
    return t !== null && (typeof t == "object" || typeof t == "function");
  }
  return cl.isObject = e3, cl;
}
var md;
function VS() {
  if (md) return ll;
  md = 1;
  const e3 = d0(), t = b0(), r = w0();
  function n(u, c, h) {
    return typeof h != "function" ? n(u, c, () => {
    }) : i(u, c, function f(d, v, m, g, y, b) {
      const w = h(d, v, m, g, y, b);
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
      let g = false;
      for (let y = 0; y < u.length; y++) {
        if (d.has(y)) continue;
        const b = u[y];
        let w = false;
        if (h(b, m, v, u, c, f) && (w = true), w) {
          d.add(y), g = true;
          break;
        }
      }
      if (!g) return false;
    }
    return true;
  }
  function l(u, c, h, f) {
    return c.size === 0 ? true : u instanceof Set ? o([...u], [...c], h, f) : false;
  }
  return ll.isMatchWith = n, ll;
}
var gd;
function x0() {
  if (gd) return ol;
  gd = 1;
  const e3 = VS();
  function t(r, n) {
    return e3.isMatchWith(r, n, () => {
    });
  }
  return ol.isMatch = t, ol;
}
var yd;
function YS() {
  if (yd) return Qo;
  yd = 1;
  const e3 = US(), t = x0();
  function r(n) {
    return n = e3.cloneDeep(n), (i) => t.isMatch(i, n);
  }
  return Qo.matches = r, Qo;
}
var hl = {}, fl = {}, dl = {}, bd;
function P0() {
  if (bd) return dl;
  bd = 1;
  const e3 = Kc(), t = m0(), r = y0();
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
  return dl.cloneDeepWith = n, dl;
}
var wd;
function HS() {
  if (wd) return fl;
  wd = 1;
  const e3 = P0();
  function t(r) {
    return e3.cloneDeepWith(r);
  }
  return fl.cloneDeep = t, fl;
}
var vl = {}, pl = {}, xd;
function S0() {
  if (xd) return pl;
  xd = 1;
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
  return pl.isIndex = t, pl;
}
var ml = {}, Pd;
function GS() {
  if (Pd) return ml;
  Pd = 1;
  const e3 = Kc();
  function t(r) {
    return r !== null && typeof r == "object" && e3.getTag(r) === "[object Arguments]";
  }
  return ml.isArguments = t, ml;
}
var Sd;
function XS() {
  if (Sd) return vl;
  Sd = 1;
  const e3 = La(), t = $a(), r = S0(), n = GS();
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
  return vl.has = i, vl;
}
var _d;
function JS() {
  if (_d) return hl;
  _d = 1;
  const e3 = Ra(), t = za(), r = x0(), n = HS(), i = XS();
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
  return hl.matchesProperty = s, hl;
}
var Od;
function ZS() {
  if (Od) return Jo;
  Od = 1;
  const e3 = f0(), t = qS(), r = YS(), n = JS();
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
  return Jo.iteratee = i, Jo;
}
var gl = {}, yl = {}, bl = {}, Md;
function QS() {
  if (Md) return bl;
  Md = 1;
  function e3(t) {
    return Number.isSafeInteger(t) && t >= 0;
  }
  return bl.isLength = e3, bl;
}
var Ed;
function Ba() {
  if (Ed) return yl;
  Ed = 1;
  const e3 = QS();
  function t(r) {
    return r != null && typeof r != "function" && e3.isLength(r.length);
  }
  return yl.isArrayLike = t, yl;
}
var wl = {}, Ad;
function t_() {
  if (Ad) return wl;
  Ad = 1;
  function e3(t) {
    return typeof t == "object" && t !== null;
  }
  return wl.isObjectLike = e3, wl;
}
var Cd;
function e_() {
  if (Cd) return gl;
  Cd = 1;
  const e3 = Ba(), t = t_();
  function r(n) {
    return t.isObjectLike(n) && e3.isArrayLike(n);
  }
  return gl.isArrayLikeObject = r, gl;
}
var Id;
function r_() {
  if (Id) return Yo;
  Id = 1;
  const e3 = FS(), t = WS(), r = f0(), n = ZS(), i = e_();
  function s(a, o = r.identity) {
    return i.isArrayLikeObject(a) ? e3.uniqBy(Array.from(a), t.ary(n.iteratee(o), 1)) : [];
  }
  return Yo.uniqBy = s, Yo;
}
var xl, kd;
function n_() {
  return kd || (kd = 1, xl = r_().uniqBy), xl;
}
var i_ = n_();
const jd = Xe(i_);
function s_(e3, t, r) {
  return t === true ? jd(e3, r) : typeof t == "function" ? jd(e3, t) : e3;
}
var Pl = { exports: {} }, Sl = {};
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Td;
function a_() {
  if (Td) return Sl;
  Td = 1;
  var e3 = ka(), t = CP();
  function r(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e3.useRef, a = e3.useEffect, o = e3.useMemo, l = e3.useDebugValue;
  return Sl.useSyncExternalStoreWithSelector = function(u, c, h, f, d) {
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
    var g = i(u, v[0], v[1]);
    return a(function() {
      m.hasValue = true, m.value = g;
    }, [g]), l(g), g;
  }, Sl;
}
var Nd;
function o_() {
  return Nd || (Nd = 1, Pl.exports = a_()), Pl.exports;
}
var _0 = o_();
const YW = Xe(_0);
var Uc = p.createContext(null), l_ = (e3) => e3, lt = () => {
  var e3 = p.useContext(Uc);
  return e3 ? e3.store.dispatch : l_;
}, _s = () => {
}, u_ = () => _s, c_ = (e3, t) => e3 === t;
function B(e3) {
  var t = p.useContext(Uc), r = p.useMemo(() => t ? (n) => {
    if (n != null) return e3(n);
  } : _s, [t, e3]);
  return _0.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : u_, t ? t.store.getState : _s, t ? t.store.getState : _s, r, c_);
}
function h_(e3, t = `expected a function, instead received ${typeof e3}`) {
  if (typeof e3 != "function") throw new TypeError(t);
}
function f_(e3, t = `expected an object, instead received ${typeof e3}`) {
  if (typeof e3 != "object") throw new TypeError(t);
}
function d_(e3, t = "expected all items to be functions, instead received the following types: ") {
  if (!e3.every((r) => typeof r == "function")) {
    const r = e3.map((n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Dd = (e3) => Array.isArray(e3) ? e3 : [e3];
function v_(e3) {
  const t = Array.isArray(e3[0]) ? e3[0] : e3;
  return d_(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function p_(e3, t) {
  const r = [], { length: n } = e3;
  for (let i = 0; i < n; i++) r.push(e3[i].apply(null, t));
  return r;
}
var m_ = class {
  constructor(e3) {
    this.value = e3;
  }
  deref() {
    return this.value;
  }
}, g_ = typeof WeakRef < "u" ? WeakRef : m_, y_ = 0, Ld = 1;
function es() {
  return { s: y_, v: void 0, o: null, p: null };
}
function O0(e3, t = {}) {
  let r = es();
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
        m === void 0 ? (o = es(), v.set(d, o)) : o = m;
      } else {
        let v = o.p;
        v === null && (o.p = v = /* @__PURE__ */ new Map());
        const m = v.get(d);
        m === void 0 ? (o = es(), v.set(d, o)) : o = m;
      }
    }
    const u = o;
    let c;
    if (o.s === Ld) c = o.v;
    else if (c = e3.apply(null, arguments), s++, n) {
      const h = ((_a3 = i == null ? void 0 : i.deref) == null ? void 0 : _a3.call(i)) ?? i;
      h != null && n(h, c) && (c = h, s !== 0 && s--), i = typeof c == "object" && c !== null || typeof c == "function" ? new g_(c) : c;
    }
    return u.s = Ld, u.v = c, c;
  }
  return a.clearCache = () => {
    r = es(), a.resetResultsCount();
  }, a.resultsCount = () => s, a.resetResultsCount = () => {
    s = 0;
  }, a;
}
function b_(e3, ...t) {
  const r = typeof e3 == "function" ? { memoize: e3, memoizeOptions: t } : e3, n = (...i) => {
    let s = 0, a = 0, o, l = {}, u = i.pop();
    typeof u == "object" && (l = u, u = i.pop()), h_(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
    const c = { ...r, ...l }, { memoize: h, memoizeOptions: f = [], argsMemoize: d = O0, argsMemoizeOptions: v = [] } = c, m = Dd(f), g = Dd(v), y = v_(i), b = h(function() {
      return s++, u.apply(null, arguments);
    }, ...m), w = d(function() {
      a++;
      const P = p_(y, arguments);
      return o = b.apply(null, P), o;
    }, ...g);
    return Object.assign(w, { resultFunc: u, memoizedResultFunc: b, dependencies: y, dependencyRecomputations: () => a, resetDependencyRecomputations: () => {
      a = 0;
    }, lastResult: () => o, recomputations: () => s, resetRecomputations: () => {
      s = 0;
    }, memoize: h, argsMemoize: d });
  };
  return Object.assign(n, { withTypes: () => n }), n;
}
var O = b_(O0), w_ = Object.assign((e3, t = O) => {
  f_(e3, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e3}`);
  const r = Object.keys(e3), n = r.map((s) => e3[s]);
  return t(n, (...s) => s.reduce((a, o, l) => (a[r[l]] = o, a), {}));
}, { withTypes: () => w_ }), _l = {}, Ol = {}, Rd;
function x_() {
  if (Rd) return Ol;
  Rd = 1;
  function e3(t, r = 1) {
    const n = [], i = Math.floor(r), s = (a, o) => {
      for (let l = 0; l < a.length; l++) {
        const u = a[l];
        Array.isArray(u) && o < i ? s(u, o + 1) : n.push(u);
      }
    };
    return s(t, 0), n;
  }
  return Ol.flatten = e3, Ol;
}
var Ml = {}, $d;
function M0() {
  if ($d) return Ml;
  $d = 1;
  const e3 = b0(), t = Ba(), r = w0(), n = S0();
  function i(s, a, o) {
    return r.isObject(o) && (typeof a == "number" && t.isArrayLike(o) && n.isIndex(a) && a < o.length || typeof a == "string" && a in o) ? e3.isEqualsSameValueZero(o[a], s) : false;
  }
  return Ml.isIterateeCall = i, Ml;
}
var El = {}, Al = {}, zd;
function P_() {
  if (zd) return Al;
  zd = 1;
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
  return Al.compareValues = t, Al;
}
var Cl = {}, Il = {}, Bd;
function E0() {
  if (Bd) return Il;
  Bd = 1;
  function e3(t) {
    return typeof t == "symbol" || t instanceof Symbol;
  }
  return Il.isSymbol = e3, Il;
}
var Fd;
function S_() {
  if (Fd) return Cl;
  Fd = 1;
  const e3 = E0(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function n(i, s) {
    return Array.isArray(i) ? false : typeof i == "number" || typeof i == "boolean" || i == null || e3.isSymbol(i) ? true : typeof i == "string" && (r.test(i) || !t.test(i)) || s != null && Object.hasOwn(s, i);
  }
  return Cl.isKey = n, Cl;
}
var Wd;
function __() {
  if (Wd) return El;
  Wd = 1;
  const e3 = $a(), t = P_(), r = S_();
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
  return El.orderBy = n, El;
}
var qd;
function O_() {
  if (qd) return _l;
  qd = 1;
  const e3 = x_(), t = M0(), r = __();
  function n(i, ...s) {
    const a = s.length;
    return a > 1 && t.isIterateeCall(i, s[0], s[1]) ? s = [] : a > 2 && t.isIterateeCall(s[0], s[1], s[2]) && (s = [s[0]]), r.orderBy(i, e3.flatten(s), ["asc"]);
  }
  return _l.sortBy = n, _l;
}
var kl, Kd;
function M_() {
  return Kd || (Kd = 1, kl = O_().sortBy), kl;
}
var E_ = M_();
const Fa = Xe(E_);
var A0 = (e3) => e3.legend.settings, A_ = (e3) => e3.legend.size, C_ = (e3) => e3.legend.payload;
O([C_, A0], (e3, t) => {
  var { itemSorter: r } = t, n = e3.flat(1);
  return r ? Fa(n, r) : n;
});
var rs = 1;
function I_() {
  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = p.useState({ height: 0, left: 0, top: 0, width: 0 }), n = p.useCallback((i) => {
    if (i != null) {
      var s = i.getBoundingClientRect(), a = { height: s.height, left: s.left, top: s.top, width: s.width };
      (Math.abs(a.height - t.height) > rs || Math.abs(a.left - t.left) > rs || Math.abs(a.top - t.top) > rs || Math.abs(a.width - t.width) > rs) && r({ height: a.height, left: a.left, top: a.top, width: a.width });
    }
  }, [t.width, t.height, t.top, t.left, ...e3]);
  return [t, n];
}
function Mt(e3) {
  return `Minified Redux error #${e3}; visit https://redux.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var k_ = typeof Symbol == "function" && Symbol.observable || "@@observable", Ud = k_, jl = () => Math.random().toString(36).substring(7).split("").join("."), j_ = { INIT: `@@redux/INIT${jl()}`, REPLACE: `@@redux/REPLACE${jl()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${jl()}` }, $s = j_;
function Vc(e3) {
  if (typeof e3 != "object" || e3 === null) return false;
  let t = e3;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e3) === t || Object.getPrototypeOf(e3) === null;
}
function C0(e3, t, r) {
  if (typeof e3 != "function") throw new Error(Mt(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(Mt(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(Mt(1));
    return r(C0)(e3, t);
  }
  let n = e3, i = t, s = /* @__PURE__ */ new Map(), a = s, o = 0, l = false;
  function u() {
    a === s && (a = /* @__PURE__ */ new Map(), s.forEach((g, y) => {
      a.set(y, g);
    }));
  }
  function c() {
    if (l) throw new Error(Mt(3));
    return i;
  }
  function h(g) {
    if (typeof g != "function") throw new Error(Mt(4));
    if (l) throw new Error(Mt(5));
    let y = true;
    u();
    const b = o++;
    return a.set(b, g), function() {
      if (y) {
        if (l) throw new Error(Mt(6));
        y = false, u(), a.delete(b), s = null;
      }
    };
  }
  function f(g) {
    if (!Vc(g)) throw new Error(Mt(7));
    if (typeof g.type > "u") throw new Error(Mt(8));
    if (typeof g.type != "string") throw new Error(Mt(17));
    if (l) throw new Error(Mt(9));
    try {
      l = true, i = n(i, g);
    } finally {
      l = false;
    }
    return (s = a).forEach((b) => {
      b();
    }), g;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(Mt(10));
    n = g, f({ type: $s.REPLACE });
  }
  function v() {
    const g = h;
    return { subscribe(y) {
      if (typeof y != "object" || y === null) throw new Error(Mt(11));
      function b() {
        const x = y;
        x.next && x.next(c());
      }
      return b(), { unsubscribe: g(b) };
    }, [Ud]() {
      return this;
    } };
  }
  return f({ type: $s.INIT }), { dispatch: f, subscribe: h, getState: c, replaceReducer: d, [Ud]: v };
}
function T_(e3) {
  Object.keys(e3).forEach((t) => {
    const r = e3[t];
    if (typeof r(void 0, { type: $s.INIT }) > "u") throw new Error(Mt(12));
    if (typeof r(void 0, { type: $s.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(Mt(13));
  });
}
function I0(e3) {
  const t = Object.keys(e3), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    typeof e3[a] == "function" && (r[a] = e3[a]);
  }
  const n = Object.keys(r);
  let i;
  try {
    T_(r);
  } catch (s) {
    i = s;
  }
  return function(a = {}, o) {
    if (i) throw i;
    let l = false;
    const u = {};
    for (let c = 0; c < n.length; c++) {
      const h = n[c], f = r[h], d = a[h], v = f(d, o);
      if (typeof v > "u") throw o && o.type, new Error(Mt(14));
      u[h] = v, l = l || v !== d;
    }
    return l = l || n.length !== Object.keys(a).length, l ? u : a;
  };
}
function zs(...e3) {
  return e3.length === 0 ? (t) => t : e3.length === 1 ? e3[0] : e3.reduce((t, r) => (...n) => t(r(...n)));
}
function N_(...e3) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let s = () => {
      throw new Error(Mt(15));
    };
    const a = { getState: i.getState, dispatch: (l, ...u) => s(l, ...u) }, o = e3.map((l) => l(a));
    return s = zs(...o)(i.dispatch), { ...i, dispatch: s };
  };
}
function k0(e3) {
  return Vc(e3) && "type" in e3 && typeof e3.type == "string";
}
var j0 = Symbol.for("immer-nothing"), Vd = Symbol.for("immer-draftable"), qt = Symbol.for("immer-state");
function ge(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var ee = Object, Sn = ee.getPrototypeOf, Bs = "constructor", Wa = "prototype", Vu = "configurable", Fs = "enumerable", Os = "writable", mi = "value", Ve = (e3) => !!e3 && !!e3[qt];
function we(e3) {
  var _a3;
  return e3 ? T0(e3) || Ka(e3) || !!e3[Vd] || !!((_a3 = e3[Bs]) == null ? void 0 : _a3[Vd]) || Ua(e3) || Va(e3) : false;
}
var D_ = ee[Wa][Bs].toString(), Yd = /* @__PURE__ */ new WeakMap();
function T0(e3) {
  if (!e3 || !Yc(e3)) return false;
  const t = Sn(e3);
  if (t === null || t === ee[Wa]) return true;
  const r = ee.hasOwnProperty.call(t, Bs) && t[Bs];
  if (r === Object) return true;
  if (!ln(r)) return false;
  let n = Yd.get(r);
  return n === void 0 && (n = Function.toString.call(r), Yd.set(r, n)), n === D_;
}
function qa(e3, t, r = true) {
  Ri(e3) === 0 ? (r ? Reflect.ownKeys(e3) : ee.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function Ri(e3) {
  const t = e3[qt];
  return t ? t.type_ : Ka(e3) ? 1 : Ua(e3) ? 2 : Va(e3) ? 3 : 0;
}
var Hd = (e3, t, r = Ri(e3)) => r === 2 ? e3.has(t) : ee[Wa].hasOwnProperty.call(e3, t), Yu = (e3, t, r = Ri(e3)) => r === 2 ? e3.get(t) : e3[t], Ws = (e3, t, r, n = Ri(e3)) => {
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
};
function L_(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
var Ka = Array.isArray, Ua = (e3) => e3 instanceof Map, Va = (e3) => e3 instanceof Set, Yc = (e3) => typeof e3 == "object", ln = (e3) => typeof e3 == "function", Tl = (e3) => typeof e3 == "boolean";
function R_(e3) {
  const t = +e3;
  return Number.isInteger(t) && String(t) === e3;
}
var $e = (e3) => e3.copy_ || e3.base_, Hc = (e3) => e3.modified_ ? e3.copy_ : e3.base_;
function Hu(e3, t) {
  if (Ua(e3)) return new Map(e3);
  if (Va(e3)) return new Set(e3);
  if (Ka(e3)) return Array[Wa].slice.call(e3);
  const r = T0(e3);
  if (t === true || t === "class_only" && !r) {
    const n = ee.getOwnPropertyDescriptors(e3);
    delete n[qt];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], o = n[a];
      o[Os] === false && (o[Os] = true, o[Vu] = true), (o.get || o.set) && (n[a] = { [Vu]: true, [Os]: true, [Fs]: o[Fs], [mi]: e3[a] });
    }
    return ee.create(Sn(e3), n);
  } else {
    const n = Sn(e3);
    if (n !== null && r) return { ...e3 };
    const i = ee.create(n);
    return ee.assign(i, e3);
  }
}
function Gc(e3, t = false) {
  return Ya(e3) || Ve(e3) || !we(e3) || (Ri(e3) > 1 && ee.defineProperties(e3, { set: ns, add: ns, clear: ns, delete: ns }), ee.freeze(e3), t && qa(e3, (r, n) => {
    Gc(n, true);
  }, false)), e3;
}
function $_() {
  ge(2);
}
var ns = { [mi]: $_ };
function Ya(e3) {
  return e3 === null || !Yc(e3) ? true : ee.isFrozen(e3);
}
var qs = "MapSet", Gu = "Patches", Gd = "ArrayMethods", N0 = {};
function $r(e3) {
  const t = N0[e3];
  return t || ge(0, e3), t;
}
var Xd = (e3) => !!N0[e3], gi, D0 = () => gi, z_ = (e3, t) => ({ drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: Xd(qs) ? $r(qs) : void 0, arrayMethodsPlugin_: Xd(Gd) ? $r(Gd) : void 0 });
function Jd(e3, t) {
  t && (e3.patchPlugin_ = $r(Gu), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function Xu(e3) {
  Ju(e3), e3.drafts_.forEach(B_), e3.drafts_ = null;
}
function Ju(e3) {
  e3 === gi && (gi = e3.parent_);
}
var Zd = (e3) => gi = z_(gi, e3);
function B_(e3) {
  const t = e3[qt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function Qd(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e3 !== void 0 && e3 !== r) {
    r[qt].modified_ && (Xu(t), ge(4)), we(e3) && (e3 = tv(t, e3));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(r[qt].base_, e3, t);
  } else e3 = tv(t, r);
  return F_(t, e3, true), Xu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== j0 ? e3 : void 0;
}
function tv(e3, t) {
  if (Ya(t)) return t;
  const r = t[qt];
  if (!r) return Ks(t, e3.handledSet_, e3);
  if (!Ha(r, e3)) return t;
  if (!r.modified_) return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n) for (; n.length > 0; ) n.pop()(e3);
    $0(r, e3);
  }
  return r.copy_;
}
function F_(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && Gc(t, r);
}
function L0(e3) {
  e3.finalized_ = true, e3.scope_.unfinalizedDrafts_--;
}
var Ha = (e3, t) => e3.scope_ === t, W_ = [];
function R0(e3, t, r, n) {
  const i = $e(e3), s = e3.type_;
  if (n !== void 0 && Yu(i, n, s) === t) {
    Ws(i, n, r, s);
    return;
  }
  if (!e3.draftLocations_) {
    const o = e3.draftLocations_ = /* @__PURE__ */ new Map();
    qa(i, (l, u) => {
      if (Ve(u)) {
        const c = o.get(u) || [];
        c.push(l), o.set(u, c);
      }
    });
  }
  const a = e3.draftLocations_.get(t) ?? W_;
  for (const o of a) Ws(i, o, r, s);
}
function q_(e3, t, r) {
  e3.callbacks_.push(function(i) {
    var _a3;
    const s = t;
    if (!s || !Ha(s, i)) return;
    (_a3 = i.mapSetPlugin_) == null ? void 0 : _a3.fixSetContents(s);
    const a = Hc(s);
    R0(e3, s.draft_ ?? s, a, r), $0(s, i);
  });
}
function $0(e3, t) {
  var _a3;
  if (e3.modified_ && !e3.finalized_ && (e3.type_ === 3 || e3.type_ === 1 && e3.allIndicesReassigned_ || (((_a3 = e3.assigned_) == null ? void 0 : _a3.size) ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e3);
      i && n.generatePatches_(e3, i, t);
    }
    L0(e3);
  }
}
function K_(e3, t, r) {
  const { scope_: n } = e3;
  if (Ve(r)) {
    const i = r[qt];
    Ha(i, n) && i.callbacks_.push(function() {
      Ms(e3);
      const a = Hc(i);
      R0(e3, r, a, t);
    });
  } else we(r) && e3.callbacks_.push(function() {
    const s = $e(e3);
    e3.type_ === 3 ? s.has(r) && Ks(r, n.handledSet_, n) : Yu(s, t, e3.type_) === r && n.drafts_.length > 1 && (e3.assigned_.get(t) ?? false) === true && e3.copy_ && Ks(Yu(e3.copy_, t, e3.type_), n.handledSet_, n);
  });
}
function Ks(e3, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Ve(e3) || t.has(e3) || !we(e3) || Ya(e3) || (t.add(e3), qa(e3, (n, i) => {
    if (Ve(i)) {
      const s = i[qt];
      if (Ha(s, r)) {
        const a = Hc(s);
        Ws(e3, n, a, e3.type_), L0(s);
      }
    } else we(i) && Ks(i, t, r);
  })), e3;
}
function U_(e3, t) {
  const r = Ka(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : D0(), modified_: false, finalized_: false, assigned_: void 0, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 };
  let i = n, s = Us;
  r && (i = [n], s = yi);
  const { revoke: a, proxy: o } = Proxy.revocable(i, s);
  return n.draft_ = o, n.revoke_ = a, [o, n];
}
var Us = { get(e3, t) {
  if (t === qt) return e3;
  let r = e3.scope_.arrayMethodsPlugin_;
  const n = e3.type_ === 1 && typeof t == "string";
  if (n && (r == null ? void 0 : r.isArrayOperationMethod(t))) return r.createMethodInterceptor(e3, t);
  const i = $e(e3);
  if (!Hd(i, t, e3.type_)) return V_(e3, i, t);
  const s = i[t];
  if (e3.finalized_ || !we(s) || n && e3.operationMethod && (r == null ? void 0 : r.isMutatingArrayMethod(e3.operationMethod)) && R_(t)) return s;
  if (s === Nl(e3.base_, t)) {
    Ms(e3);
    const a = e3.type_ === 1 ? +t : t, o = Qu(e3.scope_, s, e3, a);
    return e3.copy_[a] = o;
  }
  return s;
}, has(e3, t) {
  return t in $e(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys($e(e3));
}, set(e3, t, r) {
  const n = z0($e(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = Nl($e(e3), t), s = i == null ? void 0 : i[qt];
    if (s && s.base_ === r) return e3.copy_[t] = r, e3.assigned_.set(t, false), true;
    if (L_(r, i) && (r !== void 0 || Hd(e3.base_, t, e3.type_))) return true;
    Ms(e3), Zu(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_.set(t, true), K_(e3, t, r)), true;
}, deleteProperty(e3, t) {
  return Ms(e3), Nl(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_.set(t, false), Zu(e3)) : e3.assigned_.delete(t), e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = $e(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { [Os]: true, [Vu]: e3.type_ !== 1 || t !== "length", [Fs]: n[Fs], [mi]: r[t] };
}, defineProperty() {
  ge(11);
}, getPrototypeOf(e3) {
  return Sn(e3.base_);
}, setPrototypeOf() {
  ge(12);
} }, yi = {};
for (let e3 in Us) {
  let t = Us[e3];
  yi[e3] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
yi.deleteProperty = function(e3, t) {
  return yi.set.call(this, e3, t, void 0);
};
yi.set = function(e3, t, r) {
  return Us.set.call(this, e3[0], t, r, e3[0]);
};
function Nl(e3, t) {
  const r = e3[qt];
  return (r ? $e(r) : e3)[t];
}
function V_(e3, t, r) {
  var _a3;
  const n = z0(t, r);
  return n ? mi in n ? n[mi] : (_a3 = n.get) == null ? void 0 : _a3.call(e3.draft_) : void 0;
}
function z0(e3, t) {
  if (!(t in e3)) return;
  let r = Sn(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Sn(r);
  }
}
function Zu(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && Zu(e3.parent_));
}
function Ms(e3) {
  e3.copy_ || (e3.assigned_ = /* @__PURE__ */ new Map(), e3.copy_ = Hu(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var Y_ = class {
  constructor(t) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (r, n, i) => {
      if (ln(r) && !ln(n)) {
        const a = n;
        n = r;
        const o = this;
        return function(u = a, ...c) {
          return o.produce(u, (h) => n.call(this, h, ...c));
        };
      }
      ln(n) || ge(6), i !== void 0 && !ln(i) && ge(7);
      let s;
      if (we(r)) {
        const a = Zd(this), o = Qu(a, r, void 0);
        let l = true;
        try {
          s = n(o), l = false;
        } finally {
          l ? Xu(a) : Ju(a);
        }
        return Jd(a, i), Qd(s, a);
      } else if (!r || !Yc(r)) {
        if (s = n(r), s === void 0 && (s = r), s === j0 && (s = void 0), this.autoFreeze_ && Gc(s, true), i) {
          const a = [], o = [];
          $r(Gu).generateReplacementPatches_(r, s, { patches_: a, inversePatches_: o }), i(a, o);
        }
        return s;
      } else ge(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (ln(r)) return (o, ...l) => this.produceWithPatches(o, (u) => r(u, ...l));
      let i, s;
      return [this.produce(r, n, (o, l) => {
        i = o, s = l;
      }), i, s];
    }, Tl(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Tl(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Tl(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    we(t) || ge(8), Ve(t) && (t = ce(t));
    const r = Zd(this), n = Qu(r, t, void 0);
    return n[qt].isManual_ = true, Ju(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[qt];
    (!n || !n.isManual_) && ge(9);
    const { scope_: i } = n;
    return Jd(i, r), Qd(void 0, i);
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
    const i = $r(Gu).applyPatches_;
    return Ve(t) ? i(t, r) : this.produce(t, (s) => i(s, r));
  }
};
function Qu(e3, t, r, n) {
  const [i, s] = Ua(t) ? $r(qs).proxyMap_(t, r) : Va(t) ? $r(qs).proxySet_(t, r) : U_(t, r);
  return ((r == null ? void 0 : r.scope_) ?? D0()).drafts_.push(i), s.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], s.key_ = n, r && n !== void 0 ? q_(r, s, n) : s.callbacks_.push(function(l) {
    var _a3;
    (_a3 = l.mapSetPlugin_) == null ? void 0 : _a3.fixSetContents(s);
    const { patchPlugin_: u } = l;
    s.modified_ && u && u.generatePatches_(s, [], l);
  }), i;
}
function ce(e3) {
  return Ve(e3) || ge(10, e3), B0(e3);
}
function B0(e3) {
  if (!we(e3) || Ya(e3)) return e3;
  const t = e3[qt];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = Hu(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = Hu(e3, true);
  return qa(r, (i, s) => {
    Ws(r, i, B0(s));
  }, n), t && (t.finalized_ = false), r;
}
var H_ = new Y_(), F0 = H_.produce;
function W0(e3) {
  return ({ dispatch: r, getState: n }) => (i) => (s) => typeof s == "function" ? s(r, n, e3) : i(s);
}
var G_ = W0(), X_ = W0, J_ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? zs : zs.apply(null, arguments);
};
function ie(e3, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(re(0));
      return { type: e3, payload: i.payload, ..."meta" in i && { meta: i.meta }, ..."error" in i && { error: i.error } };
    }
    return { type: e3, payload: n[0] };
  }
  return r.toString = () => `${e3}`, r.type = e3, r.match = (n) => k0(n) && n.type === e3, r;
}
var q0 = class ai extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ai.prototype);
  }
  static get [Symbol.species]() {
    return ai;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ai(...t[0].concat(this)) : new ai(...t.concat(this));
  }
};
function ev(e3) {
  return we(e3) ? F0(e3, () => {
  }) : e3;
}
function is(e3, t, r) {
  return e3.has(t) ? e3.get(t) : e3.set(t, r(t)).get(t);
}
function Z_(e3) {
  return typeof e3 == "boolean";
}
var Q_ = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: i = true, actionCreatorCheck: s = true } = t ?? {};
  let a = new q0();
  return r && (Z_(r) ? a.push(G_) : a.push(X_(r.extraArgument))), a;
}, K0 = "RTK_autoBatch", it = () => (e3) => ({ payload: e3, meta: { [K0]: true } }), rv = (e3) => (t) => {
  setTimeout(t, e3);
}, tO = (e3, t) => (r) => {
  let n = false;
  const i = () => {
    n || (n = true, cancelAnimationFrame(s), clearTimeout(a), r());
  }, s = e3(i), a = setTimeout(i, t);
}, U0 = (e3 = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let i = true, s = false, a = false;
  const o = /* @__PURE__ */ new Set(), l = e3.type === "tick" ? queueMicrotask : e3.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? tO(window.requestAnimationFrame, 100) : rv(10) : e3.type === "callback" ? e3.queueNotification : rv(e3.timeout), u = () => {
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
      return i = !((_a3 = c == null ? void 0 : c.meta) == null ? void 0 : _a3[K0]), s = !i, s && (a || (a = true, l(u))), n.dispatch(c);
    } finally {
      i = true;
    }
  } });
}, eO = (e3) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let i = new q0(e3);
  return n && i.push(U0(typeof n == "object" ? n : void 0)), i;
};
function rO(e3) {
  const t = Q_(), { reducer: r = void 0, middleware: n, devTools: i = true, preloadedState: s = void 0, enhancers: a = void 0 } = e3 || {};
  let o;
  if (typeof r == "function") o = r;
  else if (Vc(r)) o = I0(r);
  else throw new Error(re(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let u = zs;
  i && (u = J_({ trace: false, ...typeof i == "object" && i }));
  const c = N_(...l), h = eO(c);
  let f = typeof a == "function" ? a(h) : h();
  const d = u(...f);
  return C0(o, s, d);
}
function V0(e3) {
  const t = {}, r = [];
  let n;
  const i = { addCase(s, a) {
    const o = typeof s == "string" ? s : s.type;
    if (!o) throw new Error(re(28));
    if (o in t) throw new Error(re(29));
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
function nO(e3) {
  return typeof e3 == "function";
}
function iO(e3, t) {
  let [r, n, i] = V0(t), s;
  if (nO(e3)) s = () => ev(e3());
  else {
    const o = ev(e3);
    s = () => o;
  }
  function a(o = s(), l) {
    let u = [r[l.type], ...n.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)];
    return u.filter((c) => !!c).length === 0 && (u = [i]), u.reduce((c, h) => {
      if (h) if (Ve(c)) {
        const d = h(c, l);
        return d === void 0 ? c : d;
      } else {
        if (we(c)) return F0(c, (f) => h(f, l));
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
var sO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", aO = (e3 = 21) => {
  let t = "", r = e3;
  for (; r--; ) t += sO[Math.random() * 64 | 0];
  return t;
}, oO = Symbol.for("rtk-slice-createasyncthunk");
function lO(e3, t) {
  return `${e3}/${t}`;
}
function uO({ creators: e3 } = {}) {
  var _a3;
  const t = (_a3 = e3 == null ? void 0 : e3.asyncThunk) == null ? void 0 : _a3[oO];
  return function(n) {
    const { name: i, reducerPath: s = i } = n;
    if (!i) throw new Error(re(11));
    const a = (typeof n.reducers == "function" ? n.reducers(hO()) : n.reducers) || {}, o = Object.keys(a), l = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, u = { addCase(w, x) {
      const P = typeof w == "string" ? w : w.type;
      if (!P) throw new Error(re(12));
      if (P in l.sliceCaseReducersByType) throw new Error(re(13));
      return l.sliceCaseReducersByType[P] = x, u;
    }, addMatcher(w, x) {
      return l.sliceMatchers.push({ matcher: w, reducer: x }), u;
    }, exposeAction(w, x) {
      return l.actionCreators[w] = x, u;
    }, exposeCaseReducer(w, x) {
      return l.sliceCaseReducersByName[w] = x, u;
    } };
    o.forEach((w) => {
      const x = a[w], P = { reducerName: w, type: lO(i, w), createNotation: typeof n.reducers == "function" };
      dO(x) ? pO(P, x, u, t) : fO(P, x, u);
    });
    function c() {
      const [w = {}, x = [], P = void 0] = typeof n.extraReducers == "function" ? V0(n.extraReducers) : [n.extraReducers], S = { ...w, ...l.sliceCaseReducersByType };
      return iO(n.initialState, (_) => {
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
    function g() {
      return v || (v = c()), v.getInitialState();
    }
    function y(w, x = false) {
      function P(_) {
        let M = _[w];
        return typeof M > "u" && x && (M = is(d, P, g)), M;
      }
      function S(_ = h) {
        const M = is(f, x, () => /* @__PURE__ */ new WeakMap());
        return is(M, _, () => {
          const A = {};
          for (const [k, I] of Object.entries(n.selectors ?? {})) A[k] = cO(I, _, () => is(d, _, g), x);
          return A;
        });
      }
      return { reducerPath: w, getSelectors: S, get selectors() {
        return S(P);
      }, selectSlice: P };
    }
    const b = { name: i, reducer: m, actions: l.actionCreators, caseReducers: l.sliceCaseReducersByName, getInitialState: g, ...y(s), injectInto(w, { reducerPath: x, ...P } = {}) {
      const S = x ?? s;
      return w.inject({ reducerPath: S, reducer: m }, P), { ...b, ...y(S, true) };
    } };
    return b;
  };
}
function cO(e3, t, r, n) {
  function i(s, ...a) {
    let o = t(s);
    return typeof o > "u" && n && (o = r()), e3(o, ...a);
  }
  return i.unwrapped = e3, i;
}
var $t = uO();
function hO() {
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
function fO({ type: e3, reducerName: t, createNotation: r }, n, i) {
  let s, a;
  if ("reducer" in n) {
    if (r && !vO(n)) throw new Error(re(17));
    s = n.reducer, a = n.prepare;
  } else s = n;
  i.addCase(e3, s).exposeCaseReducer(t, s).exposeAction(t, a ? ie(e3, a) : ie(e3));
}
function dO(e3) {
  return e3._reducerDefinitionType === "asyncThunk";
}
function vO(e3) {
  return e3._reducerDefinitionType === "reducerWithPrepare";
}
function pO({ type: e3, reducerName: t }, r, n, i) {
  if (!i) throw new Error(re(18));
  const { payloadCreator: s, fulfilled: a, pending: o, rejected: l, settled: u, options: c } = r, h = i(e3, s, c);
  n.exposeAction(t, h), a && n.addCase(h.fulfilled, a), o && n.addCase(h.pending, o), l && n.addCase(h.rejected, l), u && n.addMatcher(h.settled, u), n.exposeCaseReducer(t, { fulfilled: a || ss, pending: o || ss, rejected: l || ss, settled: u || ss });
}
function ss() {
}
var mO = "task", Y0 = "listener", H0 = "completed", Xc = "cancelled", gO = `task-${Xc}`, yO = `task-${H0}`, tc = `${Y0}-${Xc}`, bO = `${Y0}-${H0}`, Ga = class {
  constructor(e3) {
    __publicField(this, "code");
    __publicField(this, "name", "TaskAbortError");
    __publicField(this, "message");
    this.code = e3, this.message = `${mO} ${Xc} (reason: ${e3})`;
  }
}, Jc = (e3, t) => {
  if (typeof e3 != "function") throw new TypeError(re(32));
}, Vs = () => {
}, G0 = (e3, t = Vs) => (e3.catch(t), e3), X0 = (e3, t) => (e3.addEventListener("abort", t, { once: true }), () => e3.removeEventListener("abort", t)), kr = (e3) => {
  if (e3.aborted) throw new Ga(e3.reason);
};
function J0(e3, t) {
  let r = Vs;
  return new Promise((n, i) => {
    const s = () => i(new Ga(e3.reason));
    if (e3.aborted) {
      s();
      return;
    }
    r = X0(e3, s), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = Vs;
  });
}
var wO = async (e3, t) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e3() };
  } catch (r) {
    return { status: r instanceof Ga ? "cancelled" : "rejected", error: r };
  } finally {
    t == null ? void 0 : t();
  }
}, Ys = (e3) => (t) => G0(J0(e3, t).then((r) => (kr(e3), r))), Z0 = (e3) => {
  const t = Ys(e3);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, { assign: pn } = Object, nv = {}, Xa = "listenerMiddleware", xO = (e3, t) => {
  const r = (n) => X0(e3, () => n.abort(e3.reason));
  return (n, i) => {
    Jc(n);
    const s = new AbortController();
    r(s);
    const a = wO(async () => {
      kr(e3), kr(s.signal);
      const o = await n({ pause: Ys(s.signal), delay: Z0(s.signal), signal: s.signal });
      return kr(s.signal), o;
    }, () => s.abort(yO));
    return (i == null ? void 0 : i.autoJoin) && t.push(a.catch(Vs)), { result: Ys(e3)(a), cancel() {
      s.abort(gO);
    } };
  };
}, PO = (e3, t) => {
  const r = async (n, i) => {
    kr(t);
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
      const l = await J0(t, Promise.race(o));
      return kr(t), l;
    } finally {
      s();
    }
  };
  return ((n, i) => G0(r(n, i)));
}, Q0 = (e3) => {
  let { type: t, actionCreator: r, matcher: n, predicate: i, effect: s } = e3;
  if (t) i = ie(t).match;
  else if (r) t = r.type, i = r.match;
  else if (n) i = n;
  else if (!i) throw new Error(re(21));
  return Jc(s), { predicate: i, type: t, effect: s };
}, tb = pn((e3) => {
  const { type: t, predicate: r, effect: n } = Q0(e3);
  return { id: aO(), effect: n, type: t, predicate: r, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(re(22));
  } };
}, { withTypes: () => tb }), iv = (e3, t) => {
  const { type: r, effect: n, predicate: i } = Q0(t);
  return Array.from(e3.values()).find((s) => (typeof r == "string" ? s.type === r : s.predicate === i) && s.effect === n);
}, ec = (e3) => {
  e3.pending.forEach((t) => {
    t.abort(tc);
  });
}, SO = (e3, t) => () => {
  for (const r of t.keys()) ec(r);
  e3.clear();
}, sv = (e3, t, r) => {
  try {
    e3(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, eb = pn(ie(`${Xa}/add`), { withTypes: () => eb }), _O = ie(`${Xa}/removeAll`), rb = pn(ie(`${Xa}/remove`), { withTypes: () => rb }), OO = (...e3) => {
  console.error(`${Xa}/error`, ...e3);
}, $i = (e3 = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (d) => {
    const v = r.get(d) ?? 0;
    r.set(d, v + 1);
  }, i = (d) => {
    const v = r.get(d) ?? 1;
    v === 1 ? r.delete(d) : r.set(d, v - 1);
  }, { extra: s, onError: a = OO } = e3;
  Jc(a);
  const o = (d) => (d.unsubscribe = () => t.delete(d.id), t.set(d.id, d), (v) => {
    d.unsubscribe(), (v == null ? void 0 : v.cancelActive) && ec(d);
  }), l = ((d) => {
    const v = iv(t, d) ?? tb(d);
    return o(v);
  });
  pn(l, { withTypes: () => l });
  const u = (d) => {
    const v = iv(t, d);
    return v && (v.unsubscribe(), d.cancelActive && ec(v)), !!v;
  };
  pn(u, { withTypes: () => u });
  const c = async (d, v, m, g) => {
    const y = new AbortController(), b = PO(l, y.signal), w = [];
    try {
      d.pending.add(y), n(d), await Promise.resolve(d.effect(v, pn({}, m, { getOriginalState: g, condition: (x, P) => b(x, P).then(Boolean), take: b, delay: Z0(y.signal), pause: Ys(y.signal), extra: s, signal: y.signal, fork: xO(y.signal, w), unsubscribe: d.unsubscribe, subscribe: () => {
        t.set(d.id, d);
      }, cancelActiveListeners: () => {
        d.pending.forEach((x, P, S) => {
          x !== y && (x.abort(tc), S.delete(x));
        });
      }, cancel: () => {
        y.abort(tc), d.pending.delete(y);
      }, throwIfCancelled: () => {
        kr(y.signal);
      } })));
    } catch (x) {
      x instanceof Ga || sv(a, x, { raisedBy: "effect" });
    } finally {
      await Promise.all(w), y.abort(bO), i(d), d.pending.delete(y);
    }
  }, h = SO(t, r);
  return { middleware: (d) => (v) => (m) => {
    if (!k0(m)) return v(m);
    if (eb.match(m)) return l(m.payload);
    if (_O.match(m)) {
      h();
      return;
    }
    if (rb.match(m)) return u(m.payload);
    let g = d.getState();
    const y = () => {
      if (g === nv) throw new Error(re(23));
      return g;
    };
    let b;
    try {
      if (b = v(m), t.size > 0) {
        const w = d.getState(), x = Array.from(t.values());
        for (const P of x) {
          let S = false;
          try {
            S = P.predicate(m, w, g);
          } catch (_) {
            S = false, sv(a, _, { raisedBy: "predicate" });
          }
          S && c(P, m, d, y);
        }
      }
    } finally {
      g = nv;
    }
    return b;
  }, startListening: l, stopListening: u, clearListeners: h };
};
function re(e3) {
  return `Minified Redux Toolkit error #${e3}; visit https://redux-toolkit.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var MO = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 }, nb = $t({ name: "chartLayout", initialState: MO, reducers: { setLayout(e3, t) {
  e3.layoutType = t.payload;
}, setChartSize(e3, t) {
  e3.width = t.payload.width, e3.height = t.payload.height;
}, setMargin(e3, t) {
  var r, n, i, s;
  e3.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e3.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e3.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e3.margin.left = (s = t.payload.left) !== null && s !== void 0 ? s : 0;
}, setScale(e3, t) {
  e3.scale = t.payload;
} } }), { setMargin: ib, setLayout: EO, setChartSize: AO, setScale: CO } = nb.actions, IO = nb.reducer;
function sb(e3, t, r) {
  return Array.isArray(e3) && e3 && t + r !== 0 ? e3.slice(t, r + 1) : e3;
}
function q(e3) {
  return Number.isFinite(e3);
}
function de(e3) {
  return typeof e3 == "number" && e3 > 0 && Number.isFinite(e3);
}
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
function un(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(r), true).forEach(function(n) {
      kO(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : av(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function kO(e3, t, r) {
  return (t = jO(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function jO(e3) {
  var t = TO(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TO(e3, t) {
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
  return bt(e3) || bt(t) ? r : Te(t) ? Dn(e3, t, r) : typeof t == "function" ? t(e3) : r;
}
var NO = (e3, t, r) => {
  if (t && r) {
    var { width: n, height: i } = r, { align: s, verticalAlign: a, layout: o } = t;
    if ((o === "vertical" || o === "horizontal" && a === "middle") && s !== "center" && L(e3[s])) return un(un({}, e3), {}, { [s]: e3[s] + (n || 0) });
    if ((o === "horizontal" || o === "vertical" && s === "center") && a !== "middle" && L(e3[a])) return un(un({}, e3), {}, { [a]: e3[a] + (i || 0) });
  }
  return e3;
}, Pe = (e3, t) => e3 === "horizontal" && t === "xAxis" || e3 === "vertical" && t === "yAxis" || e3 === "centric" && t === "angleAxis" || e3 === "radial" && t === "radiusAxis", ab = (e3, t, r, n) => {
  if (n) return e3.map((o) => o.coordinate);
  var i, s, a = e3.map((o) => (o.coordinate === t && (i = true), o.coordinate === r && (s = true), o.coordinate));
  return i || a.push(t), s || a.push(r), a;
}, ob = (e3, t, r) => {
  if (!e3) return null;
  var { duplicateDomain: n, type: i, range: s, scale: a, realScaleType: o, isCategorical: l, categoricalDomain: u, tickCount: c, ticks: h, niceTicks: f, axisType: d } = e3;
  if (!a) return null;
  var v = o === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, m = i === "category" && a.bandwidth ? a.bandwidth() / v : 0;
  if (m = d === "angleAxis" && s && s.length >= 2 ? ue(s[0] - s[1]) * 2 * m : m, h || f) {
    var g = (h || f || []).map((y, b) => {
      var w = n ? n.indexOf(y) : y, x = a.map(w);
      return q(x) ? { coordinate: x + m, value: y, offset: m, index: b } : null;
    }).filter(Ht);
    return g;
  }
  return l && u ? u.map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: y, index: b, offset: m } : null;
  }).filter(Ht) : a.ticks && c != null ? a.ticks(c).map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: y, index: b, offset: m } : null;
  }).filter(Ht) : a.domain().map((y, b) => {
    var w = a.map(y);
    return q(w) ? { coordinate: w + m, value: n ? n[y] : y, index: b, offset: m } : null;
  }).filter(Ht);
}, DO = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var s = 0, a = 0, o = 0; o < r; ++o) {
      var l = e3[o], u = l == null ? void 0 : l[i];
      if (u != null) {
        var c = u[1], h = u[0], f = fe(c) ? h : c;
        f >= 0 ? (u[0] = s, s += f, u[1] = s) : (u[0] = a, a += f, u[1] = a);
      }
    }
  }
}, LO = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var s = 0, a = 0; a < r; ++a) {
      var o = e3[a], l = o == null ? void 0 : o[i];
      if (l != null) {
        var u = fe(l[1]) ? l[0] : l[1];
        u >= 0 ? (l[0] = s, s += u, l[1] = s) : (l[0] = 0, l[1] = 0);
      }
    }
  }
}, RO = { sign: DO, expand: gS, none: Lr, silhouette: yS, wiggle: bS, positive: LO }, $O = (e3, t, r) => {
  var n, i = (n = RO[r]) !== null && n !== void 0 ? n : Lr, s = mS().keys(t).value((o, l) => Number(ht(o, l, 0))).order(Ku).offset(i), a = s(e3);
  return a.forEach((o, l) => {
    o.forEach((u, c) => {
      var h = ht(e3[c], t[l], 0);
      Array.isArray(h) && h.length === 2 && L(h[0]) && L(h[1]) && (u[0] = h[0], u[1] = h[1]);
    });
  }), a;
};
function zO(e3) {
  return e3 == null ? void 0 : String(e3);
}
function Hs(e3) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: s, dataKey: a } = e3;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !bt(i[t.dataKey])) {
      var o = l0(r, "value", i[t.dataKey]);
      if (o) return o.coordinate + n / 2;
    }
    return r != null && r[s] ? r[s].coordinate + n / 2 : null;
  }
  var l = ht(i, bt(a) ? t.dataKey : a), u = t.scale.map(l);
  return L(u) ? u : null;
}
var BO = (e3) => {
  var t = e3.flat(2).filter(L);
  return [Math.min(...t), Math.max(...t)];
}, FO = (e3) => [e3[0] === 1 / 0 ? 0 : e3[0], e3[1] === -1 / 0 ? 0 : e3[1]], WO = (e3, t, r) => {
  if (e3 != null) return FO(Object.keys(e3).reduce((n, i) => {
    var s = e3[i];
    if (!s) return n;
    var { stackedData: a } = s, o = a.reduce((l, u) => {
      var c = sb(u, t, r), h = BO(c);
      return !q(h[0]) || !q(h[1]) ? l : [Math.min(l[0], h[0]), Math.max(l[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
  }, [1 / 0, -1 / 0]));
}, ov = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, lv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, _n = (e3, t, r) => {
  if (e3 && e3.scale && e3.scale.bandwidth) {
    var n = e3.scale.bandwidth();
    if (!r || n > 0) return n;
  }
  if (e3 && t && t.length >= 2) {
    for (var i = Fa(t, (c) => c.coordinate), s = 1 / 0, a = 1, o = i.length; a < o; a++) {
      var l = i[a], u = i[a - 1];
      s = Math.min(((l == null ? void 0 : l.coordinate) || 0) - ((u == null ? void 0 : u.coordinate) || 0), s);
    }
    return s === 1 / 0 ? 0 : s;
  }
  return r ? void 0 : 0;
};
function uv(e3) {
  var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: s } = e3;
  return un(un({}, t), {}, { dataKey: r, payload: n, value: i, name: s });
}
function Ja(e3, t) {
  if (e3) return String(e3);
  if (typeof t == "string") return t;
}
var qO = (e3, t) => {
  if (t === "horizontal") return e3.relativeX;
  if (t === "vertical") return e3.relativeY;
}, KO = (e3, t) => t === "centric" ? e3.angle : e3.radius, Ze = (e3) => e3.layout.width, Qe = (e3) => e3.layout.height, UO = (e3) => e3.layout.scale, lb = (e3) => e3.layout.margin, Za = O((e3) => e3.cartesianAxis.xAxis, (e3) => Object.values(e3)), Qa = O((e3) => e3.cartesianAxis.yAxis, (e3) => Object.values(e3)), VO = ["#1890FF", "#66B5FF", "#41D9C7", "#2FC25B", "#6EDB8F", "#9AE65C", "#FACC14", "#E6965C", "#57AD71", "#223273", "#738AE6", "#7564CC", "#8543E0", "#A877ED", "#5C8EE6", "#13C2C2", "#70E0E0", "#5CA3E6", "#3436C7", "#8082FF", "#DD81E6", "#F04864", "#FA7D92", "#D598D9"], YO = "data-recharts-item-index", HO = "data-recharts-item-id", zi = 60;
function cv(e3, t) {
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
    t % 2 ? cv(Object(r), true).forEach(function(n) {
      GO(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function GO(e3, t, r) {
  return (t = XO(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function XO(e3) {
  var t = JO(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JO(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var ZO = (e3) => e3.brush.height;
function QO(e3) {
  var t = Qa(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : zi;
      return r + i;
    }
    return r;
  }, 0);
}
function tM(e3) {
  var t = Qa(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : zi;
      return r + i;
    }
    return r;
  }, 0);
}
function eM(e3) {
  var t = Za(e3);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function rM(e3) {
  var t = Za(e3);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Tt = O([Ze, Qe, lb, ZO, QO, tM, eM, rM, A0, A_], (e3, t, r, n, i, s, a, o, l, u) => {
  var c = { left: (r.left || 0) + i, right: (r.right || 0) + s }, h = { top: (r.top || 0) + a, bottom: (r.bottom || 0) + o }, f = as(as({}, h), c), d = f.bottom;
  f.bottom += n, f = NO(f, l, u);
  var v = e3 - f.left - f.right, m = t - f.top - f.bottom;
  return as(as({ brushBottom: d }, f), {}, { width: Math.max(v, 0), height: Math.max(m, 0) });
}), nM = O(Tt, (e3) => ({ x: e3.left, y: e3.top, width: e3.width, height: e3.height })), ub = O(Ze, Qe, (e3, t) => ({ x: 0, y: 0, width: e3, height: t })), iM = p.createContext(null), zt = () => p.useContext(iM) != null, to = (e3) => e3.brush, eo = O([to, Tt, lb], (e3, t, r) => ({ height: e3.height, x: L(e3.x) ? e3.x : t.left, y: L(e3.y) ? e3.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0), width: L(e3.width) ? e3.width : t.width })), Dl = {}, Ll = {}, Rl = {}, hv;
function sM() {
  if (hv) return Rl;
  hv = 1;
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
    }, g = function(...y) {
      if (n == null ? void 0 : n.aborted) return;
      s = this, a = y;
      const b = h == null;
      f(), o && b && u();
    };
    return g.schedule = f, g.cancel = v, g.flush = m, n == null ? void 0 : n.addEventListener("abort", v, { once: true }), g;
  }
  return Rl.debounce = e3, Rl;
}
var fv;
function aM() {
  if (fv) return Ll;
  fv = 1;
  const e3 = sM();
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
  return Ll.debounce = t, Ll;
}
var dv;
function oM() {
  if (dv) return Dl;
  dv = 1;
  const e3 = aM();
  function t(r, n = 0, i = {}) {
    const { leading: s = true, trailing: a = true } = i;
    return e3.debounce(r, n, { leading: s, maxWait: n, trailing: a });
  }
  return Dl.throttle = t, Dl;
}
var $l, vv;
function lM() {
  return vv || (vv = 1, $l = oM().throttle), $l;
}
var uM = lM();
const cM = Xe(uM);
var Gs = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) i[s - 2] = arguments[s];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t)) if (r === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var a = 0;
    console.warn(r.replace(/%s/g, () => i[a++]));
  }
}, Ce = { width: "100%", height: "100%", debounce: 0, minWidth: 0, initialDimension: { width: -1, height: -1 } }, cb = (e3, t, r) => {
  var { width: n = Ce.width, height: i = Ce.height, aspect: s, maxHeight: a } = r, o = Rr(n) ? e3 : Number(n), l = Rr(i) ? t : Number(i);
  return s && s > 0 && (o ? l = o / s : l && (o = l * s), a && l != null && l > a && (l = a)), { calculatedWidth: o, calculatedHeight: l };
}, hM = { width: 0, height: 0, overflow: "visible" }, fM = { width: 0, overflowX: "visible" }, dM = { height: 0, overflowY: "visible" }, vM = {}, pM = (e3) => {
  var { width: t, height: r } = e3, n = Rr(t), i = Rr(r);
  return n && i ? hM : n ? fM : i ? dM : vM;
};
function mM(e3) {
  var { width: t, height: r, aspect: n } = e3, i = t, s = r;
  return i === void 0 && s === void 0 ? (i = Ce.width, s = Ce.height) : i === void 0 ? i = n && n > 0 ? void 0 : Ce.width : s === void 0 && (s = n && n > 0 ? void 0 : Ce.height), { width: i, height: s };
}
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, rc.apply(null, arguments);
}
function pv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(r), true).forEach(function(n) {
      gM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : pv(Object(r)).forEach(function(n) {
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
var hb = p.createContext(Ce.initialDimension);
function wM(e3) {
  return de(e3.width) && de(e3.height);
}
function fb(e3) {
  var { children: t, width: r, height: n } = e3, i = p.useMemo(() => ({ width: r, height: n }), [r, n]);
  return wM(i) ? p.createElement(hb.Provider, { value: i }, t) : null;
}
var Zc = () => p.useContext(hb), xM = p.forwardRef((e3, t) => {
  var { aspect: r, initialDimension: n = Ce.initialDimension, width: i, height: s, minWidth: a = Ce.minWidth, minHeight: o, maxHeight: l, children: u, debounce: c = Ce.debounce, id: h, className: f, onResize: d, style: v = {} } = e3, m = p.useRef(null), g = p.useRef();
  g.current = d, p.useImperativeHandle(t, () => m.current);
  var [y, b] = p.useState({ containerWidth: n.width, containerHeight: n.height }), w = p.useCallback((M, A) => {
    b((k) => {
      var I = Math.round(M), E = Math.round(A);
      return k.containerWidth === I && k.containerHeight === E ? k : { containerWidth: I, containerHeight: E };
    });
  }, []);
  p.useEffect(() => {
    if (m.current == null || typeof ResizeObserver > "u") return Je;
    var M = (E) => {
      var $, R = E[0];
      if (R != null) {
        var { width: z, height: H } = R.contentRect;
        w(z, H), ($ = g.current) === null || $ === void 0 || $.call(g, z, H);
      }
    };
    c > 0 && (M = cM(M, c, { trailing: true, leading: false }));
    var A = new ResizeObserver(M), { width: k, height: I } = m.current.getBoundingClientRect();
    return w(k, I), A.observe(m.current), () => {
      A.disconnect();
    };
  }, [w, c]);
  var { containerWidth: x, containerHeight: P } = y;
  Gs(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var { calculatedWidth: S, calculatedHeight: _ } = cb(x, P, { width: i, height: s, aspect: r, maxHeight: l });
  return Gs(S != null && S > 0 || _ != null && _ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, S, _, i, s, a, o, r), p.createElement("div", { id: h ? "".concat(h) : void 0, className: X("recharts-responsive-container", f), style: mv(mv({}, v), {}, { width: i, height: s, minWidth: a, minHeight: o, maxHeight: l }), ref: m }, p.createElement("div", { style: pM({ width: i, height: s }) }, p.createElement(fb, { width: S, height: _ }, u)));
}), GW = p.forwardRef((e3, t) => {
  var r = Zc();
  if (de(r.width) && de(r.height)) return e3.children;
  var { width: n, height: i } = mM({ width: e3.width, height: e3.height, aspect: e3.aspect }), { calculatedWidth: s, calculatedHeight: a } = cb(void 0, void 0, { width: n, height: i, aspect: e3.aspect, maxHeight: e3.maxHeight });
  return L(s) && L(a) ? p.createElement(fb, { width: s, height: a }, e3.children) : p.createElement(xM, rc({}, e3, { width: n, height: i, ref: t }));
});
function Qc(e3) {
  if (e3) return { x: e3.x, y: e3.y, upperWidth: "upperWidth" in e3 ? e3.upperWidth : e3.width, lowerWidth: "lowerWidth" in e3 ? e3.lowerWidth : e3.width, width: e3.width, height: e3.height };
}
var ro = () => {
  var e3, t = zt(), r = B(nM), n = B(eo), i = (e3 = B(to)) === null || e3 === void 0 ? void 0 : e3.padding;
  return !t || !n || !i ? r : { width: n.width - i.left - i.right, height: n.height - i.top - i.bottom, x: i.left, y: i.top };
}, PM = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 }, db = () => {
  var e3;
  return (e3 = B(Tt)) !== null && e3 !== void 0 ? e3 : PM;
}, th = () => B(Ze), eh = () => B(Qe), rt = (e3) => e3.layout.layoutType, Hr = () => B(rt), rh = () => {
  var e3 = Hr();
  if (e3 === "horizontal" || e3 === "vertical") return e3;
}, vb = (e3) => {
  var t = e3.layout.layoutType;
  if (t === "centric" || t === "radial") return t;
}, SM = () => {
  var e3 = Hr();
  return e3 !== void 0;
}, Bi = (e3) => {
  var t = lt(), r = zt(), { width: n, height: i } = e3, s = Zc(), a = n, o = i;
  return s && (a = s.width > 0 ? s.width : n, o = s.height > 0 ? s.height : i), p.useEffect(() => {
    !r && de(a) && de(o) && t(AO({ width: a, height: o }));
  }, [t, r, a, o]), null;
}, _M = (e3) => {
  var { margin: t } = e3, r = lt();
  return p.useEffect(() => {
    r(ib(t));
  }, [r, t]), null;
}, pb = Symbol.for("immer-nothing"), gv = Symbol.for("immer-draftable"), se = Symbol.for("immer-state");
function ye(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var bi = Object.getPrototypeOf;
function On(e3) {
  return !!e3 && !!e3[se];
}
function zr(e3) {
  var _a3;
  return e3 ? mb(e3) || Array.isArray(e3) || !!e3[gv] || !!((_a3 = e3.constructor) == null ? void 0 : _a3[gv]) || Fi(e3) || io(e3) : false;
}
var OM = Object.prototype.constructor.toString(), yv = /* @__PURE__ */ new WeakMap();
function mb(e3) {
  if (!e3 || typeof e3 != "object") return false;
  const t = Object.getPrototypeOf(e3);
  if (t === null || t === Object.prototype) return true;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object) return true;
  if (typeof r != "function") return false;
  let n = yv.get(r);
  return n === void 0 && (n = Function.toString.call(r), yv.set(r, n)), n === OM;
}
function Xs(e3, t, r = true) {
  no(e3) === 0 ? (r ? Reflect.ownKeys(e3) : Object.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function no(e3) {
  const t = e3[se];
  return t ? t.type_ : Array.isArray(e3) ? 1 : Fi(e3) ? 2 : io(e3) ? 3 : 0;
}
function nc(e3, t) {
  return no(e3) === 2 ? e3.has(t) : Object.prototype.hasOwnProperty.call(e3, t);
}
function gb(e3, t, r) {
  const n = no(e3);
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
}
function MM(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function Fi(e3) {
  return e3 instanceof Map;
}
function io(e3) {
  return e3 instanceof Set;
}
function Or(e3) {
  return e3.copy_ || e3.base_;
}
function ic(e3, t) {
  if (Fi(e3)) return new Map(e3);
  if (io(e3)) return new Set(e3);
  if (Array.isArray(e3)) return Array.prototype.slice.call(e3);
  const r = mb(e3);
  if (t === true || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e3);
    delete n[se];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], o = n[a];
      o.writable === false && (o.writable = true, o.configurable = true), (o.get || o.set) && (n[a] = { configurable: true, writable: true, enumerable: o.enumerable, value: e3[a] });
    }
    return Object.create(bi(e3), n);
  } else {
    const n = bi(e3);
    if (n !== null && r) return { ...e3 };
    const i = Object.create(n);
    return Object.assign(i, e3);
  }
}
function nh(e3, t = false) {
  return so(e3) || On(e3) || !zr(e3) || (no(e3) > 1 && Object.defineProperties(e3, { set: os, add: os, clear: os, delete: os }), Object.freeze(e3), t && Object.values(e3).forEach((r) => nh(r, true))), e3;
}
function EM() {
  ye(2);
}
var os = { value: EM };
function so(e3) {
  return e3 === null || typeof e3 != "object" ? true : Object.isFrozen(e3);
}
var AM = {};
function Br(e3) {
  const t = AM[e3];
  return t || ye(0, e3), t;
}
var wi;
function yb() {
  return wi;
}
function CM(e3, t) {
  return { drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function bv(e3, t) {
  t && (Br("Patches"), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function sc(e3) {
  ac(e3), e3.drafts_.forEach(IM), e3.drafts_ = null;
}
function ac(e3) {
  e3 === wi && (wi = e3.parent_);
}
function wv(e3) {
  return wi = CM(wi, e3);
}
function IM(e3) {
  const t = e3[se];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function xv(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e3 !== void 0 && e3 !== r ? (r[se].modified_ && (sc(t), ye(4)), zr(e3) && (e3 = Js(t, e3), t.parent_ || Zs(t, e3)), t.patches_ && Br("Patches").generateReplacementPatches_(r[se].base_, e3, t.patches_, t.inversePatches_)) : e3 = Js(t, r, []), sc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== pb ? e3 : void 0;
}
function Js(e3, t, r) {
  if (so(t)) return t;
  const n = e3.immer_.shouldUseStrictIteration(), i = t[se];
  if (!i) return Xs(t, (s, a) => Pv(e3, i, t, s, a, r), n), t;
  if (i.scope_ !== e3) return t;
  if (!i.modified_) return Zs(e3, i.base_, true), i.base_;
  if (!i.finalized_) {
    i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
    const s = i.copy_;
    let a = s, o = false;
    i.type_ === 3 && (a = new Set(s), s.clear(), o = true), Xs(a, (l, u) => Pv(e3, i, s, l, u, r, o), n), Zs(e3, s, false), r && e3.patches_ && Br("Patches").generatePatches_(i, r, e3.patches_, e3.inversePatches_);
  }
  return i.copy_;
}
function Pv(e3, t, r, n, i, s, a) {
  if (i == null || typeof i != "object" && !a) return;
  const o = so(i);
  if (!(o && !a)) {
    if (On(i)) {
      const l = s && t && t.type_ !== 3 && !nc(t.assigned_, n) ? s.concat(n) : void 0, u = Js(e3, i, l);
      if (gb(r, n, u), On(u)) e3.canAutoFreeze_ = false;
      else return;
    } else a && r.add(i);
    if (zr(i) && !o) {
      if (!e3.immer_.autoFreeze_ && e3.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && o) return;
      Js(e3, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Fi(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Zs(e3, i);
    }
  }
}
function Zs(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && nh(t, r);
}
function kM(e3, t) {
  const r = Array.isArray(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : yb(), modified_: false, finalized_: false, assigned_: {}, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false };
  let i = n, s = ih;
  r && (i = [n], s = xi);
  const { revoke: a, proxy: o } = Proxy.revocable(i, s);
  return n.draft_ = o, n.revoke_ = a, o;
}
var ih = { get(e3, t) {
  if (t === se) return e3;
  const r = Or(e3);
  if (!nc(r, t)) return jM(e3, r, t);
  const n = r[t];
  return e3.finalized_ || !zr(n) ? n : n === zl(e3.base_, t) ? (Bl(e3), e3.copy_[t] = lc(n, e3)) : n;
}, has(e3, t) {
  return t in Or(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys(Or(e3));
}, set(e3, t, r) {
  const n = bb(Or(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = zl(Or(e3), t), s = i == null ? void 0 : i[se];
    if (s && s.base_ === r) return e3.copy_[t] = r, e3.assigned_[t] = false, true;
    if (MM(r, i) && (r !== void 0 || nc(e3.base_, t))) return true;
    Bl(e3), oc(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_[t] = true), true;
}, deleteProperty(e3, t) {
  return zl(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_[t] = false, Bl(e3), oc(e3)) : delete e3.assigned_[t], e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = Or(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e3.type_ !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty() {
  ye(11);
}, getPrototypeOf(e3) {
  return bi(e3.base_);
}, setPrototypeOf() {
  ye(12);
} }, xi = {};
Xs(ih, (e3, t) => {
  xi[e3] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
xi.deleteProperty = function(e3, t) {
  return xi.set.call(this, e3, t, void 0);
};
xi.set = function(e3, t, r) {
  return ih.set.call(this, e3[0], t, r, e3[0]);
};
function zl(e3, t) {
  const r = e3[se];
  return (r ? Or(r) : e3)[t];
}
function jM(e3, t, r) {
  var _a3;
  const n = bb(t, r);
  return n ? "value" in n ? n.value : (_a3 = n.get) == null ? void 0 : _a3.call(e3.draft_) : void 0;
}
function bb(e3, t) {
  if (!(t in e3)) return;
  let r = bi(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = bi(r);
  }
}
function oc(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && oc(e3.parent_));
}
function Bl(e3) {
  e3.copy_ || (e3.copy_ = ic(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var TM = class {
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
      typeof r != "function" && ye(6), n !== void 0 && typeof n != "function" && ye(7);
      let i;
      if (zr(t)) {
        const s = wv(this), a = lc(t, void 0);
        let o = true;
        try {
          i = r(a), o = false;
        } finally {
          o ? sc(s) : ac(s);
        }
        return bv(s, n), xv(i, s);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === pb && (i = void 0), this.autoFreeze_ && nh(i, true), n) {
          const s = [], a = [];
          Br("Patches").generateReplacementPatches_(t, i, s, a), n(s, a);
        }
        return i;
      } else ye(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function") return (a, ...o) => this.produceWithPatches(a, (l) => t(l, ...o));
      let n, i;
      return [this.produce(t, r, (a, o) => {
        n = a, i = o;
      }), n, i];
    }, typeof (e3 == null ? void 0 : e3.autoFreeze) == "boolean" && this.setAutoFreeze(e3.autoFreeze), typeof (e3 == null ? void 0 : e3.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e3.useStrictShallowCopy), typeof (e3 == null ? void 0 : e3.useStrictIteration) == "boolean" && this.setUseStrictIteration(e3.useStrictIteration);
  }
  createDraft(e3) {
    zr(e3) || ye(8), On(e3) && (e3 = NM(e3));
    const t = wv(this), r = lc(e3, void 0);
    return r[se].isManual_ = true, ac(t), r;
  }
  finishDraft(e3, t) {
    const r = e3 && e3[se];
    (!r || !r.isManual_) && ye(9);
    const { scope_: n } = r;
    return bv(n, t), xv(void 0, n);
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
    const n = Br("Patches").applyPatches_;
    return On(e3) ? n(e3, t) : this.produce(e3, (i) => n(i, t));
  }
};
function lc(e3, t) {
  const r = Fi(e3) ? Br("MapSet").proxyMap_(e3, t) : io(e3) ? Br("MapSet").proxySet_(e3, t) : kM(e3, t);
  return (t ? t.scope_ : yb()).drafts_.push(r), r;
}
function NM(e3) {
  return On(e3) || ye(10, e3), wb(e3);
}
function wb(e3) {
  if (!zr(e3) || so(e3)) return e3;
  const t = e3[se];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = ic(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = ic(e3, true);
  return Xs(r, (i, s) => {
    gb(r, i, wb(s));
  }, n), t && (t.finalized_ = false), r;
}
var DM = new TM();
DM.produce;
var LM = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] }, xb = $t({ name: "legend", initialState: LM, reducers: { setLegendSize(e3, t) {
  e3.size.width = t.payload.width, e3.size.height = t.payload.height;
}, setLegendSettings(e3, t) {
  e3.settings.align = t.payload.align, e3.settings.layout = t.payload.layout, e3.settings.verticalAlign = t.payload.verticalAlign, e3.settings.itemSorter = t.payload.itemSorter;
}, addLegendPayload: { reducer(e3, t) {
  e3.payload.push(t.payload);
}, prepare: it() }, replaceLegendPayload: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = ce(e3).payload.indexOf(r);
  i > -1 && (e3.payload[i] = n);
}, prepare: it() }, removeLegendPayload: { reducer(e3, t) {
  var r = ce(e3).payload.indexOf(t.payload);
  r > -1 && e3.payload.splice(r, 1);
}, prepare: it() } } }), { setLegendSize: XW, setLegendSettings: JW, addLegendPayload: RM, replaceLegendPayload: $M, removeLegendPayload: zM } = xb.actions, BM = xb.reducer, Fl = { exports: {} }, Wl = {};
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sv;
function FM() {
  if (Sv) return Wl;
  Sv = 1;
  var e3 = ka();
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useSyncExternalStore, i = e3.useRef, s = e3.useEffect, a = e3.useMemo, o = e3.useDebugValue;
  return Wl.useSyncExternalStoreWithSelector = function(l, u, c, h, f) {
    var d = i(null);
    if (d.current === null) {
      var v = { hasValue: false, value: null };
      d.current = v;
    } else v = d.current;
    d = a(function() {
      function g(P) {
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
        return g(u());
      }, x === null ? void 0 : function() {
        return g(x());
      }];
    }, [u, c, h, f]);
    var m = n(l, d[0], d[1]);
    return s(function() {
      v.hasValue = true, v.value = m;
    }, [m]), o(m), m;
  }, Wl;
}
var _v;
function WM() {
  return _v || (_v = 1, Fl.exports = FM()), Fl.exports;
}
WM();
function qM(e3) {
  e3();
}
function KM() {
  let e3 = null, t = null;
  return { clear() {
    e3 = null, t = null;
  }, notify() {
    qM(() => {
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
var Ov = { notify() {
}, get: () => [] };
function UM(e3, t) {
  let r, n = Ov, i = 0, s = false;
  function a(m) {
    c();
    const g = n.subscribe(m);
    let y = false;
    return () => {
      y || (y = true, g(), h());
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
    i++, r || (r = e3.subscribe(l), n = KM());
  }
  function h() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Ov);
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
var VM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", YM = VM(), HM = () => typeof navigator < "u" && navigator.product === "ReactNative", GM = HM(), XM = () => YM || GM ? p.useLayoutEffect : p.useEffect, JM = XM();
function Mv(e3, t) {
  return e3 === t ? e3 !== 0 || t !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function ZM(e3, t) {
  if (Mv(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  const r = Object.keys(e3), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (let i = 0; i < r.length; i++) if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Mv(e3[r[i]], t[r[i]])) return false;
  return true;
}
var QM = Symbol.for("react-redux-context"), tE = typeof globalThis < "u" ? globalThis : {};
function eE() {
  if (!p.createContext) return {};
  const e3 = tE[QM] ?? (tE[QM] = /* @__PURE__ */ new Map());
  let t = e3.get(p.createContext);
  return t || (t = p.createContext(null), e3.set(p.createContext, t)), t;
}
var rE = eE();
function nE(e3) {
  const { children: t, context: r, serverState: n, store: i } = e3, s = p.useMemo(() => {
    const l = UM(i);
    return { store: i, subscription: l, getServerState: n ? () => n : void 0 };
  }, [i, n]), a = p.useMemo(() => i.getState(), [i]);
  JM(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const o = r || rE;
  return p.createElement(o.Provider, { value: s }, t);
}
var iE = nE, sE = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
function aE(e3, t) {
  return e3 == null && t == null ? true : typeof e3 == "number" && typeof t == "number" ? e3 === t || e3 !== e3 && t !== t : e3 === t;
}
function Wi(e3, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e3), ...Object.keys(t)]);
  for (var n of r) if (sE.has(n)) {
    if (e3[n] == null && t[n] == null) continue;
    if (!ZM(e3[n], t[n])) return false;
  } else if (!aE(e3[n], t[n])) return false;
  return true;
}
function uc() {
  return uc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, uc.apply(null, arguments);
}
function Ev(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), true).forEach(function(n) {
      oE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function oE(e3, t, r) {
  return (t = lE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function lE(e3) {
  var t = uE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function cE(e3) {
  return Array.isArray(e3) && Te(e3[0]) && Te(e3[1]) ? e3.join(" ~ ") : e3;
}
var Zr = { separator: " : ", contentStyle: { margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, itemStyle: { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" }, labelStyle: {}, accessibilityLayer: false };
function hE(e3, t) {
  return t == null ? e3 : Fa(e3, t);
}
var fE = (e3) => {
  var { separator: t = Zr.separator, contentStyle: r, itemStyle: n, labelStyle: i = Zr.labelStyle, payload: s, formatter: a, itemSorter: o, wrapperClassName: l, labelClassName: u, label: c, labelFormatter: h, accessibilityLayer: f = Zr.accessibilityLayer } = e3, d = () => {
    if (s && s.length) {
      var P = { padding: 0, margin: 0 }, S = hE(s, o), _ = S.map((M, A) => {
        if (!M || M.type === "none") return null;
        var k = M.formatter || a || cE, { value: I, name: E } = M, $ = I, R = E;
        if (k) {
          var z = k(I, E, M, A, s);
          if (Array.isArray(z)) [$, R] = z;
          else if (z != null) $ = z;
          else return null;
        }
        var H = Hn(Hn({}, Zr.itemStyle), {}, { color: M.color || Zr.itemStyle.color }, n);
        return p.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(A), style: H }, Te(R) ? p.createElement("span", { className: "recharts-tooltip-item-name" }, R) : null, Te(R) ? p.createElement("span", { className: "recharts-tooltip-item-separator" }, t) : null, p.createElement("span", { className: "recharts-tooltip-item-value" }, $), p.createElement("span", { className: "recharts-tooltip-item-unit" }, M.unit || ""));
      });
      return p.createElement("ul", { className: "recharts-tooltip-item-list", style: P }, _);
    }
    return null;
  }, v = Hn(Hn({}, Zr.contentStyle), r), m = Hn({ margin: 0 }, i), g = !bt(c), y = g ? c : "", b = X("recharts-default-tooltip", l), w = X("recharts-tooltip-label", u);
  g && h && s !== void 0 && s !== null && (y = h(c, s));
  var x = f ? { role: "status", "aria-live": "assertive" } : {};
  return p.createElement("div", uc({ className: b, style: v }, x), p.createElement("p", { className: w, style: m }, p.isValidElement(y) ? y : "".concat(y)), d());
}, Gn = "recharts-tooltip-wrapper", dE = { visibility: "hidden" };
function vE(e3) {
  var { coordinate: t, translateX: r, translateY: n } = e3;
  return X(Gn, { ["".concat(Gn, "-right")]: L(r) && t && L(t.x) && r >= t.x, ["".concat(Gn, "-left")]: L(r) && t && L(t.x) && r < t.x, ["".concat(Gn, "-bottom")]: L(n) && t && L(t.y) && n >= t.y, ["".concat(Gn, "-top")]: L(n) && t && L(t.y) && n < t.y });
}
function Av(e3) {
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
  var m = h + o, g = f + u;
  return m > g ? Math.max(c, f) : Math.max(h, f);
}
function pE(e3) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e3;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function mE(e3) {
  var { allowEscapeViewBox: t, coordinate: r, offsetTop: n, offsetLeft: i, position: s, reverseDirection: a, tooltipBox: o, useTranslate3d: l, viewBox: u } = e3, c, h, f;
  return o.height > 0 && o.width > 0 && r ? (h = Av({ allowEscapeViewBox: t, coordinate: r, key: "x", offset: i, position: s, reverseDirection: a, tooltipDimension: o.width, viewBox: u, viewBoxDimension: u.width }), f = Av({ allowEscapeViewBox: t, coordinate: r, key: "y", offset: n, position: s, reverseDirection: a, tooltipDimension: o.height, viewBox: u, viewBoxDimension: u.height }), c = pE({ translateX: h, translateY: f, useTranslate3d: l })) : c = dE, { cssProperties: c, cssClasses: vE({ translateX: h, translateY: f, coordinate: r }) };
}
var gE = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Ln = { isSsr: gE() };
function sh() {
  var [e3, t] = p.useState(() => Ln.isSsr || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return p.useEffect(() => {
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
function Cv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qr(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cv(Object(r), true).forEach(function(n) {
      yE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function yE(e3, t, r) {
  return (t = bE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function bE(e3) {
  var t = wE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function xE(e3) {
  if (!(e3.prefersReducedMotion && e3.isAnimationActive === "auto") && e3.isAnimationActive && e3.active) return "transform ".concat(e3.animationDuration, "ms ").concat(e3.animationEasing);
}
function PE(e3) {
  var t, r, n, i, s, a, o = sh(), [l, u] = p.useState(() => ({ dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }));
  p.useEffect(() => {
    var v = (m) => {
      if (m.key === "Escape") {
        var g, y, b, w;
        u({ dismissed: true, dismissedAtCoordinate: { x: (g = (y = e3.coordinate) === null || y === void 0 ? void 0 : y.x) !== null && g !== void 0 ? g : 0, y: (b = (w = e3.coordinate) === null || w === void 0 ? void 0 : w.y) !== null && b !== void 0 ? b : 0 } });
      }
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [(t = e3.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e3.coordinate) === null || r === void 0 ? void 0 : r.y]), l.dismissed && (((n = (i = e3.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== l.dismissedAtCoordinate.x || ((s = (a = e3.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && s !== void 0 ? s : 0) !== l.dismissedAtCoordinate.y) && u(Qr(Qr({}, l), {}, { dismissed: false }));
  var { cssClasses: c, cssProperties: h } = mE({ allowEscapeViewBox: e3.allowEscapeViewBox, coordinate: e3.coordinate, offsetLeft: typeof e3.offset == "number" ? e3.offset : e3.offset.x, offsetTop: typeof e3.offset == "number" ? e3.offset : e3.offset.y, position: e3.position, reverseDirection: e3.reverseDirection, tooltipBox: { height: e3.lastBoundingBox.height, width: e3.lastBoundingBox.width }, useTranslate3d: e3.useTranslate3d, viewBox: e3.viewBox }), f = e3.hasPortalFromProps ? {} : Qr(Qr({ transition: xE({ prefersReducedMotion: o, isAnimationActive: e3.isAnimationActive, active: e3.active, animationDuration: e3.animationDuration, animationEasing: e3.animationEasing }) }, h), {}, { pointerEvents: "none", position: "absolute", top: 0, left: 0 }), d = Qr(Qr({}, f), {}, { visibility: !l.dismissed && e3.active && e3.hasPayload ? "visible" : "hidden" }, e3.wrapperStyle);
  return p.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: c, style: d, ref: e3.innerRef }, e3.children);
}
var SE = p.memo(PE), Pb = () => {
  var e3;
  return (e3 = B((t) => t.rootProps.accessibilityLayer)) !== null && e3 !== void 0 ? e3 : true;
};
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, cc.apply(null, arguments);
}
function Iv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iv(Object(r), true).forEach(function(n) {
      _E(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(n) {
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
var jv = { curveBasisClosed: sS, curveBasisOpen: aS, curveBasis: iS, curveBumpX: KP, curveBumpY: UP, curveLinearClosed: oS, curveLinear: Na, curveMonotoneX: lS, curveMonotoneY: uS, curveNatural: cS, curveStep: hS, curveStepAfter: dS, curveStepBefore: fS }, Qs = (e3) => q(e3.x) && q(e3.y), Tv = (e3) => e3.base != null && Qs(e3.base) && Qs(e3), Xn = (e3) => e3.x, Jn = (e3) => e3.y, EE = (e3, t) => {
  if (typeof e3 == "function") return e3;
  var r = "curve".concat(Li(e3));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = jv["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n) return n;
  }
  return jv[r] || Na;
}, Nv = { connectNulls: false, type: "linear" }, AE = (e3) => {
  var { type: t = Nv.type, points: r = [], baseLine: n, layout: i, connectNulls: s = Nv.connectNulls } = e3, a = EE(t, i), o = s ? r.filter(Qs) : r;
  if (Array.isArray(n)) {
    var l, u = r.map((v, m) => kv(kv({}, v), {}, { base: n[m] }));
    i === "vertical" ? l = ts().y(Jn).x1(Xn).x0((v) => v.base.x) : l = ts().x(Xn).y1(Jn).y0((v) => v.base.y);
    var c = l.defined(Tv).curve(a), h = s ? u.filter(Tv) : u;
    return c(h);
  }
  var f;
  i === "vertical" && L(n) ? f = ts().y(Jn).x1(Xn).x0(n) : L(n) ? f = ts().x(Xn).y1(Jn).y0(n) : f = Gy().x(Xn).y(Jn);
  var d = f.defined(Qs).curve(a);
  return d(o);
}, ui = (e3) => {
  var { className: t, points: r, path: n, pathRef: i } = e3, s = Hr();
  if ((!r || !r.length) && !n) return null;
  var a = { type: e3.type, points: e3.points, baseLine: e3.baseLine, layout: e3.layout || s, connectNulls: e3.connectNulls }, o = r && r.length ? AE(a) : n;
  return p.createElement("path", cc({}, Xt(e3), qc(e3), { className: X("recharts-curve", t), d: o === null ? void 0 : o, ref: i }));
}, CE = ["x", "y", "top", "left", "width", "height", "className"];
function hc() {
  return hc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, hc.apply(null, arguments);
}
function Dv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function IE(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(r), true).forEach(function(n) {
      kE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function kE(e3, t, r) {
  return (t = jE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function jE(e3) {
  var t = TE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function NE(e3, t) {
  if (e3 == null) return {};
  var r, n, i = DE(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function DE(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var LE = (e3, t, r, n, i, s) => "M".concat(e3, ",").concat(i, "v").concat(n, "M").concat(s, ",").concat(t, "h").concat(r), RE = (e3) => {
  var { x: t = 0, y: r = 0, top: n = 0, left: i = 0, width: s = 0, height: a = 0, className: o } = e3, l = NE(e3, CE), u = IE({ x: t, y: r, top: n, left: i, width: s, height: a }, l);
  return !L(t) || !L(r) || !L(s) || !L(a) || !L(n) || !L(i) ? null : p.createElement("path", hc({}, vt(u), { className: X("recharts-cross", o), d: LE(t, r, s, a, n, i) }));
};
function $E(e3, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e3 === "horizontal" ? t.x - i : r.left + 0.5, y: e3 === "horizontal" ? r.top + 0.5 : t.y - i, width: e3 === "horizontal" ? n : r.width - 1, height: e3 === "horizontal" ? r.height - 1 : n };
}
function Lv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lv(Object(r), true).forEach(function(n) {
      zE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function zE(e3, t, r) {
  return (t = BE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function BE(e3) {
  var t = FE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var WE = (e3) => e3.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), ah = (e3, t, r) => e3.map((n) => "".concat(WE(n), " ").concat(t, "ms ").concat(r)).join(","), qE = (e3, t) => [Object.keys(e3), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Pi = (e3, t) => Object.keys(t).reduce((r, n) => Rv(Rv({}, r), {}, { [n]: e3(n, t[n]) }), {});
function $v(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(r), true).forEach(function(n) {
      KE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function KE(e3, t, r) {
  return (t = UE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function UE(e3) {
  var t = VE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var ta = (e3, t, r) => e3 + (t - e3) * r, fc = (e3) => {
  var { from: t, to: r } = e3;
  return t !== r;
}, Sb = (e3, t, r) => {
  var n = Pi((i, s) => {
    if (fc(s)) {
      var [a, o] = e3(s.from, s.to, s.velocity);
      return yt(yt({}, s), {}, { from: a, velocity: o });
    }
    return s;
  }, t);
  return r < 1 ? Pi((i, s) => fc(s) && n[i] != null ? yt(yt({}, s), {}, { velocity: ta(s.velocity, n[i].velocity, r), from: ta(s.from, n[i].from, r) }) : s, t) : Sb(e3, n, r - 1);
};
function YE(e3, t, r, n, i, s) {
  var a, o = n.reduce((f, d) => yt(yt({}, f), {}, { [d]: { from: e3[d], velocity: 0, to: t[d] } }), {}), l = () => Pi((f, d) => d.from, o), u = () => !Object.values(o).filter(fc).length, c = null, h = (f) => {
    a || (a = f);
    var d = f - a, v = d / r.dt;
    o = Sb(r, o, v), i(yt(yt(yt({}, e3), t), l())), a = f, u() || (c = s.setTimeout(h));
  };
  return () => (c = s.setTimeout(h), () => {
    var f;
    (f = c) === null || f === void 0 || f();
  });
}
function HE(e3, t, r, n, i, s, a) {
  var o = null, l = i.reduce((h, f) => {
    var d = e3[f], v = t[f];
    return d == null || v == null ? h : yt(yt({}, h), {}, { [f]: [d, v] });
  }, {}), u, c = (h) => {
    u || (u = h);
    var f = (h - u) / n, d = Pi((m, g) => ta(...g, r(f)), l);
    if (s(yt(yt(yt({}, e3), t), d)), f < 1) o = a.setTimeout(c);
    else {
      var v = Pi((m, g) => ta(...g, r(1)), l);
      s(yt(yt(yt({}, e3), t), v));
    }
  };
  return () => (o = a.setTimeout(c), () => {
    var h;
    (h = o) === null || h === void 0 || h();
  });
}
const GE = (e3, t, r, n, i, s) => {
  var a = qE(e3, t);
  return r == null ? () => (i(yt(yt({}, e3), t)), () => {
  }) : r.isStepper === true ? YE(e3, t, r, a, i, s) : HE(e3, t, r, n, a, i, s);
};
var ea = 1e-4, _b = (e3, t) => [0, 3 * e3, 3 * t - 6 * e3, 3 * e3 - 3 * t + 1], Ob = (e3, t) => e3.map((r, n) => r * t ** n).reduce((r, n) => r + n), zv = (e3, t) => (r) => {
  var n = _b(e3, t);
  return Ob(n, r);
}, XE = (e3, t) => (r) => {
  var n = _b(e3, t), i = [...n.map((s, a) => s * a).slice(1), 0];
  return Ob(i, r);
}, JE = (e3) => {
  var t, r = e3.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier") return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4) return null;
  var i = n.map((s) => parseFloat(s));
  return [i[0], i[1], i[2], i[3]];
}, ZE = function() {
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
      var i = JE(r[0]);
      if (i) return i;
    }
  }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, QE = (e3, t, r, n) => {
  var i = zv(e3, r), s = zv(t, n), a = XE(e3, r), o = (u) => u > 1 ? 1 : u < 0 ? 0 : u, l = (u) => {
    for (var c = u > 1 ? 1 : u, h = c, f = 0; f < 8; ++f) {
      var d = i(h) - c, v = a(h);
      if (Math.abs(d - c) < ea || v < ea) return s(h);
      h = o(h - d / v);
    }
    return s(h);
  };
  return l.isStepper = false, l;
}, Bv = function() {
  return QE(...ZE(...arguments));
}, tA = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: r = 100, damping: n = 8, dt: i = 17 } = t, s = (a, o, l) => {
    var u = -(a - o) * r, c = l * n, h = l + (u - c) * i / 1e3, f = l * i / 1e3 + a;
    return Math.abs(f - o) < ea && Math.abs(h) < ea ? [o, 0] : [f, h];
  };
  return s.isStepper = true, s.dt = i, s;
}, eA = (e3) => {
  if (typeof e3 == "string") switch (e3) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Bv(e3);
    case "spring":
      return tA();
    default:
      if (e3.split("(")[0] === "cubic-bezier") return Bv(e3);
  }
  return typeof e3 == "function" ? e3 : null;
};
function rA(e3) {
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
class nA {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, s = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(s));
    };
    return i = requestAnimationFrame(s), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function iA() {
  return rA(new nA());
}
var sA = p.createContext(iA);
function Mb(e3, t) {
  var r = p.useContext(sA);
  return p.useMemo(() => t ?? r(e3), [e3, t, r]);
}
var aA = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} }, Fv = { t: 0 }, ql = { t: 1 };
function ao(e3) {
  var t = jt(e3, aA), { isActive: r, canBegin: n, duration: i, easing: s, begin: a, onAnimationEnd: o, onAnimationStart: l, children: u } = t, c = sh(), h = r === "auto" ? !Ln.isSsr && !c : r, f = Mb(t.animationId, t.animationManager), [d, v] = p.useState(h ? Fv : ql), m = p.useRef(null);
  return p.useEffect(() => {
    h || v(ql);
  }, [h]), p.useEffect(() => {
    if (!h || !n) return Je;
    var g = GE(Fv, ql, eA(s), i, v, f.getTimeoutController()), y = () => {
      m.current = g();
    };
    return f.start([l, a, y, i, o]), () => {
      f.stop(), m.current && m.current(), o();
    };
  }, [h, n, i, s, a, l, o, f]), u(d.t);
}
function oo(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = p.useRef(Pn(t)), n = p.useRef(e3);
  return n.current !== e3 && (r.current = Pn(t), n.current = e3), r.current;
}
var oA = ["radius"], lA = ["radius"], Wv, qv, Kv, Uv, Vv, Yv, Hv, Gv, Xv, Jv;
function Zv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zv(Object(r), true).forEach(function(n) {
      uA(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function uA(e3, t, r) {
  return (t = cA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function cA(e3) {
  var t = hA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, ra.apply(null, arguments);
}
function tp(e3, t) {
  if (e3 == null) return {};
  var r, n, i = fA(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function fA(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function _e(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var ep = (e3, t, r, n, i) => {
  var s = cr(r), a = cr(n), o = Math.min(Math.abs(s) / 2, Math.abs(a) / 2), l = a >= 0 ? 1 : -1, u = s >= 0 ? 1 : -1, c = a >= 0 && s >= 0 || a < 0 && s < 0 ? 1 : 0, h;
  if (o > 0 && Array.isArray(i)) {
    for (var f = [0, 0, 0, 0], d = 0, v = 4; d < v; d++) {
      var m, g = (m = i[d]) !== null && m !== void 0 ? m : 0;
      f[d] = g > o ? o : g;
    }
    h = ot(Wv || (Wv = _e(["M", ",", ""])), e3, t + l * f[0]), f[0] > 0 && (h += ot(qv || (qv = _e(["A ", ",", ",0,0,", ",", ",", ""])), f[0], f[0], c, e3 + u * f[0], t)), h += ot(Kv || (Kv = _e(["L ", ",", ""])), e3 + r - u * f[1], t), f[1] > 0 && (h += ot(Uv || (Uv = _e(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[1], f[1], c, e3 + r, t + l * f[1])), h += ot(Vv || (Vv = _e(["L ", ",", ""])), e3 + r, t + n - l * f[2]), f[2] > 0 && (h += ot(Yv || (Yv = _e(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[2], f[2], c, e3 + r - u * f[2], t + n)), h += ot(Hv || (Hv = _e(["L ", ",", ""])), e3 + u * f[3], t + n), f[3] > 0 && (h += ot(Gv || (Gv = _e(["A ", ",", ",0,0,", `,
        `, ",", ""])), f[3], f[3], c, e3, t + n - l * f[3])), h += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var y = Math.min(o, i);
    h = ot(Xv || (Xv = _e(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e3, t + l * y, y, y, c, e3 + u * y, t, e3 + r - u * y, t, y, y, c, e3 + r, t + l * y, e3 + r, t + n - l * y, y, y, c, e3 + r - u * y, t + n, e3 + u * y, t + n, y, y, c, e3, t + n - l * y);
  } else h = ot(Jv || (Jv = _e(["M ", ",", " h ", " v ", " h ", " Z"])), e3, t, r, n, -r);
  return h;
}, rp = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, oh = (e3) => {
  var t = jt(e3, rp), r = p.useRef(null), [n, i] = p.useState(-1);
  p.useEffect(() => {
    if (r.current && r.current.getTotalLength) try {
      var W = r.current.getTotalLength();
      W && i(W);
    } catch {
    }
  }, []);
  var { x: s, y: a, width: o, height: l, radius: u, className: c } = t, { animationEasing: h, animationDuration: f, animationBegin: d, isAnimationActive: v, isUpdateAnimationActive: m } = t, g = p.useRef(o), y = p.useRef(l), b = p.useRef(s), w = p.useRef(a), x = p.useMemo(() => ({ x: s, y: a, width: o, height: l, radius: u }), [s, a, o, l, u]), P = oo(x, "rectangle-");
  if (s !== +s || a !== +a || o !== +o || l !== +l || o === 0 || l === 0) return null;
  var S = X("recharts-rectangle", c);
  if (!m) {
    var _ = vt(t), { radius: M } = _, A = tp(_, oA);
    return p.createElement("path", ra({}, A, { x: cr(s), y: cr(a), width: cr(o), height: cr(l), radius: typeof u == "number" ? u : void 0, className: S, d: ep(s, a, o, l, u) }));
  }
  var k = g.current, I = y.current, E = b.current, $ = w.current, R = "0px ".concat(n === -1 ? 1 : n, "px"), z = "".concat(n, "px ").concat(n, "px"), H = ah(["strokeDasharray"], f, typeof h == "string" ? h : rp.animationEasing);
  return p.createElement(ao, { animationId: P, key: P, canBegin: n > 0, duration: f, easing: h, isActive: m, begin: d }, (W) => {
    var G = dt(k, o, W), F = dt(I, l, W), U = dt(E, s, W), Bt = dt($, a, W);
    r.current && (g.current = G, y.current = F, b.current = U, w.current = Bt);
    var ut;
    v ? W > 0 ? ut = { transition: H, strokeDasharray: z } : ut = { strokeDasharray: R } : ut = { strokeDasharray: z };
    var me = vt(t), { radius: Ut } = me, Re = tp(me, lA);
    return p.createElement("path", ra({}, Re, { radius: typeof u == "number" ? u : void 0, className: S, d: ep(U, Bt, G, F, u), ref: r, style: Qv(Qv({}, ut), t.style) }));
  });
};
function np(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ip(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? np(Object(r), true).forEach(function(n) {
      dA(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function dA(e3, t, r) {
  return (t = vA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function vA(e3) {
  var t = pA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var na = Math.PI / 180, mA = (e3) => e3 * 180 / Math.PI, It = (e3, t, r, n) => ({ x: e3 + Math.cos(-na * n) * r, y: t + Math.sin(-na * n) * r }), gA = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, yA = (e3, t) => {
  var { x: r, y: n } = e3, { x: i, y: s } = t;
  return Math.sqrt((r - i) ** 2 + (n - s) ** 2);
}, bA = (e3, t) => {
  var { x: r, y: n } = e3, { cx: i, cy: s } = t, a = yA({ x: r, y: n }, { x: i, y: s });
  if (a <= 0) return { radius: a, angle: 0 };
  var o = (r - i) / a, l = Math.acos(o);
  return n > s && (l = 2 * Math.PI - l), { radius: a, angle: mA(l), angleInRadian: l };
}, wA = (e3) => {
  var { startAngle: t, endAngle: r } = e3, n = Math.floor(t / 360), i = Math.floor(r / 360), s = Math.min(n, i);
  return { startAngle: t - s * 360, endAngle: r - s * 360 };
}, xA = (e3, t) => {
  var { startAngle: r, endAngle: n } = t, i = Math.floor(r / 360), s = Math.floor(n / 360), a = Math.min(i, s);
  return e3 + a * 360;
}, PA = (e3, t) => {
  var { relativeX: r, relativeY: n } = e3, { radius: i, angle: s } = bA({ x: r, y: n }, t), { innerRadius: a, outerRadius: o } = t;
  if (i < a || i > o || i === 0) return null;
  var { startAngle: l, endAngle: u } = wA(t), c = s, h;
  if (l <= u) {
    for (; c > u; ) c -= 360;
    for (; c < l; ) c += 360;
    h = c >= l && c <= u;
  } else {
    for (; c > l; ) c -= 360;
    for (; c < u; ) c += 360;
    h = c >= u && c <= l;
  }
  return h ? ip(ip({}, t), {}, { radius: i, angle: xA(c, t) }) : null;
};
function Eb(e3) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: s } = e3, a = It(t, r, n, i), o = It(t, r, n, s);
  return { points: [a, o], cx: t, cy: r, radius: n, startAngle: i, endAngle: s };
}
var sp, ap, op, lp, up, cp, hp;
function dc() {
  return dc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, dc.apply(null, arguments);
}
function Er(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var SA = (e3, t) => {
  var r = ue(t - e3), n = Math.min(Math.abs(t - e3), 359.999);
  return r * n;
}, ls = (e3) => {
  var { cx: t, cy: r, radius: n, angle: i, sign: s, isExternal: a, cornerRadius: o, cornerIsExternal: l } = e3, u = o * (a ? 1 : -1) + n, c = Math.asin(o / u) / na, h = l ? i : i + s * c, f = It(t, r, u, h), d = It(t, r, n, h), v = l ? i - s * c : i, m = It(t, r, u * Math.cos(c * na), v);
  return { center: f, circleTangency: d, lineTangency: m, theta: c };
}, Ab = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: s, endAngle: a } = e3, o = SA(s, a), l = s + o, u = It(t, r, i, s), c = It(t, r, i, l), h = ot(sp || (sp = Er(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), u.x, u.y, i, i, +(Math.abs(o) > 180), +(s > l), c.x, c.y);
  if (n > 0) {
    var f = It(t, r, n, s), d = It(t, r, n, l);
    h += ot(ap || (ap = Er(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), d.x, d.y, n, n, +(Math.abs(o) > 180), +(s <= l), f.x, f.y);
  } else h += ot(op || (op = Er(["L ", ",", " Z"])), t, r);
  return h;
}, _A = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, cornerRadius: s, forceCornerRadius: a, cornerIsExternal: o, startAngle: l, endAngle: u } = e3, c = ue(u - l), { circleTangency: h, lineTangency: f, theta: d } = ls({ cx: t, cy: r, radius: i, angle: l, sign: c, cornerRadius: s, cornerIsExternal: o }), { circleTangency: v, lineTangency: m, theta: g } = ls({ cx: t, cy: r, radius: i, angle: u, sign: -c, cornerRadius: s, cornerIsExternal: o }), y = o ? Math.abs(l - u) : Math.abs(l - u) - d - g;
  if (y < 0) return a ? ot(lp || (lp = Er(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), f.x, f.y, s, s, s * 2, s, s, -s * 2) : Ab({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: l, endAngle: u });
  var b = ot(up || (up = Er(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), f.x, f.y, s, s, +(c < 0), h.x, h.y, i, i, +(y > 180), +(c < 0), v.x, v.y, s, s, +(c < 0), m.x, m.y);
  if (n > 0) {
    var { circleTangency: w, lineTangency: x, theta: P } = ls({ cx: t, cy: r, radius: n, angle: l, sign: c, isExternal: true, cornerRadius: s, cornerIsExternal: o }), { circleTangency: S, lineTangency: _, theta: M } = ls({ cx: t, cy: r, radius: n, angle: u, sign: -c, isExternal: true, cornerRadius: s, cornerIsExternal: o }), A = o ? Math.abs(l - u) : Math.abs(l - u) - P - M;
    if (A < 0 && s === 0) return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += ot(cp || (cp = Er(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), _.x, _.y, s, s, +(c < 0), S.x, S.y, n, n, +(A > 180), +(c > 0), w.x, w.y, s, s, +(c < 0), x.x, x.y);
  } else b += ot(hp || (hp = Er(["L", ",", "Z"])), t, r);
  return b;
}, OA = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, Cb = (e3) => {
  var t = jt(e3, OA), { cx: r, cy: n, innerRadius: i, outerRadius: s, cornerRadius: a, forceCornerRadius: o, cornerIsExternal: l, startAngle: u, endAngle: c, className: h } = t;
  if (s < i || u === c) return null;
  var f = X("recharts-sector", h), d = s - i, v = vr(a, d, 0, true), m;
  return v > 0 && Math.abs(u - c) < 360 ? m = _A({ cx: r, cy: n, innerRadius: i, outerRadius: s, cornerRadius: Math.min(v, d / 2), forceCornerRadius: o, cornerIsExternal: l, startAngle: u, endAngle: c }) : m = Ab({ cx: r, cy: n, innerRadius: i, outerRadius: s, startAngle: u, endAngle: c }), p.createElement("path", dc({}, vt(t), { className: f, d: m }));
};
function MA(e3, t, r) {
  if (e3 === "horizontal") return [{ x: t.x, y: r.top }, { x: t.x, y: r.top + r.height }];
  if (e3 === "vertical") return [{ x: r.left, y: t.y }, { x: r.left + r.width, y: t.y }];
  if (h0(t)) {
    if (e3 === "centric") {
      var { cx: n, cy: i, innerRadius: s, outerRadius: a, angle: o } = t, l = It(n, i, s, o), u = It(n, i, a, o);
      return [{ x: l.x, y: l.y }, { x: u.x, y: u.y }];
    }
    return Eb(t);
  }
}
var Kl = {}, Ul = {}, Vl = {}, fp;
function EA() {
  if (fp) return Vl;
  fp = 1;
  const e3 = E0();
  function t(r) {
    return e3.isSymbol(r) ? NaN : Number(r);
  }
  return Vl.toNumber = t, Vl;
}
var dp;
function Ib() {
  if (dp) return Ul;
  dp = 1;
  const e3 = EA();
  function t(r) {
    return r ? (r = e3.toNumber(r), r === 1 / 0 || r === -1 / 0 ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r === r ? r : 0) : r === 0 ? r : 0;
  }
  return Ul.toFinite = t, Ul;
}
var vp;
function AA() {
  if (vp) return Kl;
  vp = 1;
  const e3 = Ib(), t = M0();
  function r(n, i, s) {
    s && typeof s != "number" && t.isIterateeCall(n, i, s) && (i = s = void 0), n = e3.toFinite(n), i === void 0 ? (i = n, n = 0) : i = e3.toFinite(i), s = s === void 0 ? n < i ? 1 : -1 : e3.toFinite(s);
    const a = Math.max(Math.ceil((i - n) / (s || 1)), 0), o = new Array(a);
    for (let l = 0; l < a; l++) o[l] = n, n += s;
    return o;
  }
  return Kl.range = r, Kl;
}
var Yl, pp;
function CA() {
  return pp || (pp = 1, Yl = AA().range), Yl;
}
var IA = CA();
const kb = Xe(IA);
var Se = (e3) => e3.chartData, lh = O([Se], (e3) => {
  var t = e3.chartData != null ? e3.chartData.length - 1 : 0;
  return { chartData: e3.chartData, computedData: e3.computedData, dataEndIndex: t, dataStartIndex: 0 };
}), qi = (e3, t, r, n) => n ? lh(e3) : Se(e3), kA = (e3, t, r) => r ? lh(e3) : Se(e3), jA = O([qi], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
O([lh], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
var TA = O([Se], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
function ke(e3) {
  if (Array.isArray(e3) && e3.length === 2) {
    var [t, r] = e3;
    if (q(t) && q(r)) return true;
  }
  return false;
}
function mp(e3, t, r) {
  return r ? e3 : [Math.min(e3[0], t[0]), Math.max(e3[1], t[1])];
}
function jb(e3, t) {
  if (t && typeof e3 != "function" && Array.isArray(e3) && e3.length === 2) {
    var [r, n] = e3, i, s;
    if (q(r)) i = r;
    else if (typeof r == "function") return;
    if (q(n)) s = n;
    else if (typeof n == "function") return;
    var a = [i, s];
    if (ke(a)) return a;
  }
}
function NA(e3, t, r) {
  if (!(!r && t == null)) {
    if (typeof e3 == "function" && t != null) try {
      var n = e3(t, r);
      if (ke(n)) return mp(n, t, r);
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
      else if (typeof i == "string" && ov.test(i)) {
        var l = ov.exec(i);
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
      else if (typeof s == "string" && lv.test(s)) {
        var c = lv.exec(s);
        if (c == null || c[1] == null || t == null) o = void 0;
        else {
          var h = +c[1];
          o = t[1] + h;
        }
      } else o = t == null ? void 0 : t[1];
      var f = [a, o];
      if (ke(f)) return t == null ? f : mp(f, t, r);
    }
  }
}
var Rn = 1e9, DA = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, ch, at = true, ve = "[DecimalError] ", jr = ve + "Invalid argument: ", uh = ve + "Exponent out of range: ", $n = Math.floor, Mr = Math.pow, LA = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, te, Pt = 1e7, st = 7, Tb = 9007199254740991, ia = $n(Tb / st), N = {};
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
  var e3 = this, t = e3.d.length - 1, r = (t - e3.e) * st;
  if (t = e3.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
N.dividedBy = N.div = function(e3) {
  return Ke(this, new this.constructor(e3));
};
N.dividedToIntegerBy = N.idiv = function(e3) {
  var t = this, r = t.constructor;
  return Q(Ke(t, new r(e3), 0, 1), r.precision);
};
N.equals = N.eq = function(e3) {
  return !this.cmp(e3);
};
N.exponent = function() {
  return pt(this);
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
  else if (e3 = new n(e3), e3.s < 1 || e3.eq(te)) throw Error(ve + "NaN");
  if (r.s < 1) throw Error(ve + (r.s ? "NaN" : "-Infinity"));
  return r.eq(te) ? new n(0) : (at = false, t = Ke(Si(r, s), Si(e3, s), s), at = true, Q(t, i));
};
N.minus = N.sub = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? Lb(t, e3) : Nb(t, (e3.s = -e3.s, e3));
};
N.modulo = N.mod = function(e3) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e3 = new n(e3), !e3.s) throw Error(ve + "NaN");
  return r.s ? (at = false, t = Ke(r, e3, 0, 1).times(e3), at = true, r.minus(t)) : Q(new n(r), i);
};
N.naturalExponential = N.exp = function() {
  return Db(this);
};
N.naturalLogarithm = N.ln = function() {
  return Si(this);
};
N.negated = N.neg = function() {
  var e3 = new this.constructor(this);
  return e3.s = -e3.s || 0, e3;
};
N.plus = N.add = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? Nb(t, e3) : Lb(t, (e3.s = -e3.s, e3));
};
N.precision = N.sd = function(e3) {
  var t, r, n, i = this;
  if (e3 !== void 0 && e3 !== !!e3 && e3 !== 1 && e3 !== 0) throw Error(jr + e3);
  if (t = pt(i) + 1, n = i.d.length - 1, r = n * st + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e3 && t > r ? t : r;
};
N.squareRoot = N.sqrt = function() {
  var e3, t, r, n, i, s, a, o = this, l = o.constructor;
  if (o.s < 1) {
    if (!o.s) return new l(0);
    throw Error(ve + "NaN");
  }
  for (e3 = pt(o), at = false, i = Math.sqrt(+o), i == 0 || i == 1 / 0 ? (t = Ie(o.d), (t.length + e3) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e3 = $n((e3 + 1) / 2) - (e3 < 0 || e3 % 2), i == 1 / 0 ? t = "5e" + e3 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e3), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = a = r + 3; ; ) if (s = n, n = s.plus(Ke(o, s, a + 2)).times(0.5), Ie(s.d).slice(0, a) === (t = Ie(n.d)).slice(0, a)) {
    if (t = t.slice(a - 3, a + 1), i == a && t == "4999") {
      if (Q(s, r + 1, 0), s.times(s).eq(o)) {
        n = s;
        break;
      }
    } else if (t != "9999") break;
    a += 4;
  }
  return at = true, Q(n, r);
};
N.times = N.mul = function(e3) {
  var t, r, n, i, s, a, o, l, u, c = this, h = c.constructor, f = c.d, d = (e3 = new h(e3)).d;
  if (!c.s || !e3.s) return new h(0);
  for (e3.s *= c.s, r = c.e + e3.e, l = f.length, u = d.length, l < u && (s = f, f = d, d = s, a = l, l = u, u = a), s = [], a = l + u, n = a; n--; ) s.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) o = s[i] + d[n] * f[i - n - 1] + t, s[i--] = o % Pt | 0, t = o / Pt | 0;
    s[i] = (s[i] + t) % Pt | 0;
  }
  for (; !s[--a]; ) s.pop();
  return t ? ++r : s.shift(), e3.d = s, e3.e = r, at ? Q(e3, h.precision) : e3;
};
N.toDecimalPlaces = N.todp = function(e3, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e3 === void 0 ? r : (Ne(e3, 0, Rn), t === void 0 ? t = n.rounding : Ne(t, 0, 8), Q(r, e3 + pt(r) + 1, t));
};
N.toExponential = function(e3, t) {
  var r, n = this, i = n.constructor;
  return e3 === void 0 ? r = Fr(n, true) : (Ne(e3, 0, Rn), t === void 0 ? t = i.rounding : Ne(t, 0, 8), n = Q(new i(n), e3 + 1, t), r = Fr(n, true, e3 + 1)), r;
};
N.toFixed = function(e3, t) {
  var r, n, i = this, s = i.constructor;
  return e3 === void 0 ? Fr(i) : (Ne(e3, 0, Rn), t === void 0 ? t = s.rounding : Ne(t, 0, 8), n = Q(new s(i), e3 + pt(i) + 1, t), r = Fr(n.abs(), false, e3 + pt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
N.toInteger = N.toint = function() {
  var e3 = this, t = e3.constructor;
  return Q(new t(e3), pt(e3) + 1, t.rounding);
};
N.toNumber = function() {
  return +this;
};
N.toPower = N.pow = function(e3) {
  var t, r, n, i, s, a, o = this, l = o.constructor, u = 12, c = +(e3 = new l(e3));
  if (!e3.s) return new l(te);
  if (o = new l(o), !o.s) {
    if (e3.s < 1) throw Error(ve + "Infinity");
    return o;
  }
  if (o.eq(te)) return o;
  if (n = l.precision, e3.eq(te)) return Q(o, n);
  if (t = e3.e, r = e3.d.length - 1, a = t >= r, s = o.s, a) {
    if ((r = c < 0 ? -c : c) <= Tb) {
      for (i = new l(te), t = Math.ceil(n / st + 4), at = false; r % 2 && (i = i.times(o), yp(i.d, t)), r = $n(r / 2), r !== 0; ) o = o.times(o), yp(o.d, t);
      return at = true, e3.s < 0 ? new l(te).div(i) : Q(i, n);
    }
  } else if (s < 0) throw Error(ve + "NaN");
  return s = s < 0 && e3.d[Math.max(t, r)] & 1 ? -1 : 1, o.s = 1, at = false, i = e3.times(Si(o, n + u)), at = true, i = Db(i), i.s = s, i;
};
N.toPrecision = function(e3, t) {
  var r, n, i = this, s = i.constructor;
  return e3 === void 0 ? (r = pt(i), n = Fr(i, r <= s.toExpNeg || r >= s.toExpPos)) : (Ne(e3, 1, Rn), t === void 0 ? t = s.rounding : Ne(t, 0, 8), i = Q(new s(i), e3, t), r = pt(i), n = Fr(i, e3 <= r || r <= s.toExpNeg, e3)), n;
};
N.toSignificantDigits = N.tosd = function(e3, t) {
  var r = this, n = r.constructor;
  return e3 === void 0 ? (e3 = n.precision, t = n.rounding) : (Ne(e3, 1, Rn), t === void 0 ? t = n.rounding : Ne(t, 0, 8)), Q(new n(r), e3, t);
};
N.toString = N.valueOf = N.val = N.toJSON = N[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e3 = this, t = pt(e3), r = e3.constructor;
  return Fr(e3, t <= r.toExpNeg || t >= r.toExpPos);
};
function Nb(e3, t) {
  var r, n, i, s, a, o, l, u, c = e3.constructor, h = c.precision;
  if (!e3.s || !t.s) return t.s || (t = new c(e3)), at ? Q(t, h) : t;
  if (l = e3.d, u = t.d, a = e3.e, i = t.e, l = l.slice(), s = a - i, s) {
    for (s < 0 ? (n = l, s = -s, o = u.length) : (n = u, i = a, o = l.length), a = Math.ceil(h / st), o = a > o ? a + 1 : o + 1, s > o && (s = o, n.length = 1), n.reverse(); s--; ) n.push(0);
    n.reverse();
  }
  for (o = l.length, s = u.length, o - s < 0 && (s = o, n = u, u = l, l = n), r = 0; s; ) r = (l[--s] = l[s] + u[s] + r) / Pt | 0, l[s] %= Pt;
  for (r && (l.unshift(r), ++i), o = l.length; l[--o] == 0; ) l.pop();
  return t.d = l, t.e = i, at ? Q(t, h) : t;
}
function Ne(e3, t, r) {
  if (e3 !== ~~e3 || e3 < t || e3 > r) throw Error(jr + e3);
}
function Ie(e3) {
  var t, r, n, i = e3.length - 1, s = "", a = e3[0];
  if (i > 0) {
    for (s += a, t = 1; t < i; t++) n = e3[t] + "", r = st - n.length, r && (s += or(r)), s += n;
    a = e3[t], n = a + "", r = st - n.length, r && (s += or(r));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return s + a;
}
var Ke = /* @__PURE__ */ (function() {
  function e3(n, i) {
    var s, a = 0, o = n.length;
    for (n = n.slice(); o--; ) s = n[o] * i + a, n[o] = s % Pt | 0, a = s / Pt | 0;
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
    for (var a = 0; s--; ) n[s] -= a, a = n[s] < i[s] ? 1 : 0, n[s] = a * Pt + n[s] - i[s];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, s, a) {
    var o, l, u, c, h, f, d, v, m, g, y, b, w, x, P, S, _, M, A = n.constructor, k = n.s == i.s ? 1 : -1, I = n.d, E = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(ve + "Division by zero");
    for (l = n.e - i.e, _ = E.length, P = I.length, d = new A(k), v = d.d = [], u = 0; E[u] == (I[u] || 0); ) ++u;
    if (E[u] > (I[u] || 0) && --l, s == null ? b = s = A.precision : a ? b = s + (pt(n) - pt(i)) + 1 : b = s, b < 0) return new A(0);
    if (b = b / st + 2 | 0, u = 0, _ == 1) for (c = 0, E = E[0], b++; (u < P || c) && b--; u++) w = c * Pt + (I[u] || 0), v[u] = w / E | 0, c = w % E | 0;
    else {
      for (c = Pt / (E[0] + 1) | 0, c > 1 && (E = e3(E, c), I = e3(I, c), _ = E.length, P = I.length), x = _, m = I.slice(0, _), g = m.length; g < _; ) m[g++] = 0;
      M = E.slice(), M.unshift(0), S = E[0], E[1] >= Pt / 2 && ++S;
      do
        c = 0, o = t(E, m, _, g), o < 0 ? (y = m[0], _ != g && (y = y * Pt + (m[1] || 0)), c = y / S | 0, c > 1 ? (c >= Pt && (c = Pt - 1), h = e3(E, c), f = h.length, g = m.length, o = t(h, m, f, g), o == 1 && (c--, r(h, _ < f ? M : E, f))) : (c == 0 && (o = c = 1), h = E.slice()), f = h.length, f < g && h.unshift(0), r(m, h, g), o == -1 && (g = m.length, o = t(E, m, _, g), o < 1 && (c++, r(m, _ < g ? M : E, g))), g = m.length) : o === 0 && (c++, m = [0]), v[u++] = c, o && m[0] ? m[g++] = I[x] || 0 : (m = [I[x]], g = 1);
      while ((x++ < P || m[0] !== void 0) && b--);
    }
    return v[0] || v.shift(), d.e = l, Q(d, a ? s + pt(d) + 1 : s);
  };
})();
function Db(e3, t) {
  var r, n, i, s, a, o, l = 0, u = 0, c = e3.constructor, h = c.precision;
  if (pt(e3) > 16) throw Error(uh + pt(e3));
  if (!e3.s) return new c(te);
  for (at = false, o = h, a = new c(0.03125); e3.abs().gte(0.1); ) e3 = e3.times(a), u += 5;
  for (n = Math.log(Mr(2, u)) / Math.LN10 * 2 + 5 | 0, o += n, r = i = s = new c(te), c.precision = o; ; ) {
    if (i = Q(i.times(e3), o), r = r.times(++l), a = s.plus(Ke(i, r, o)), Ie(a.d).slice(0, o) === Ie(s.d).slice(0, o)) {
      for (; u--; ) s = Q(s.times(s), o);
      return c.precision = h, t == null ? (at = true, Q(s, h)) : s;
    }
    s = a;
  }
}
function pt(e3) {
  for (var t = e3.e * st, r = e3.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Hl(e3, t, r) {
  if (t > e3.LN10.sd()) throw at = true, r && (e3.precision = r), Error(ve + "LN10 precision limit exceeded");
  return Q(new e3(e3.LN10), t);
}
function or(e3) {
  for (var t = ""; e3--; ) t += "0";
  return t;
}
function Si(e3, t) {
  var r, n, i, s, a, o, l, u, c, h = 1, f = 10, d = e3, v = d.d, m = d.constructor, g = m.precision;
  if (d.s < 1) throw Error(ve + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(te)) return new m(0);
  if (t == null ? (at = false, u = g) : u = t, d.eq(10)) return t == null && (at = true), Hl(m, u);
  if (u += f, m.precision = u, r = Ie(v), n = r.charAt(0), s = pt(d), Math.abs(s) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e3), r = Ie(d.d), n = r.charAt(0), h++;
    s = pt(d), n > 1 ? (d = new m("0." + r), s++) : d = new m(n + "." + r.slice(1));
  } else return l = Hl(m, u + 2, g).times(s + ""), d = Si(new m(n + "." + r.slice(1)), u - f).plus(l), m.precision = g, t == null ? (at = true, Q(d, g)) : d;
  for (o = a = d = Ke(d.minus(te), d.plus(te), u), c = Q(d.times(d), u), i = 3; ; ) {
    if (a = Q(a.times(c), u), l = o.plus(Ke(a, new m(i), u)), Ie(l.d).slice(0, u) === Ie(o.d).slice(0, u)) return o = o.times(2), s !== 0 && (o = o.plus(Hl(m, u + 2, g).times(s + ""))), o = Ke(o, new m(h), u), m.precision = g, t == null ? (at = true, Q(o, g)) : o;
    o = l, i += 2;
  }
}
function gp(e3, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e3.e = $n(r / st), e3.d = [], n = (r + 1) % st, r < 0 && (n += st), n < i) {
      for (n && e3.d.push(+t.slice(0, n)), i -= st; n < i; ) e3.d.push(+t.slice(n, n += st));
      t = t.slice(n), n = st - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e3.d.push(+t), at && (e3.e > ia || e3.e < -ia)) throw Error(uh + r);
  } else e3.s = 0, e3.e = 0, e3.d = [0];
  return e3;
}
function Q(e3, t, r) {
  var n, i, s, a, o, l, u, c, h = e3.d;
  for (a = 1, s = h[0]; s >= 10; s /= 10) a++;
  if (n = t - a, n < 0) n += st, i = t, u = h[c = 0];
  else {
    if (c = Math.ceil((n + 1) / st), s = h.length, c >= s) return e3;
    for (u = s = h[c], a = 1; s >= 10; s /= 10) a++;
    n %= st, i = n - st + a;
  }
  if (r !== void 0 && (s = Mr(10, a - i - 1), o = u / s % 10 | 0, l = t < 0 || h[c + 1] !== void 0 || u % s, l = r < 4 ? (o || l) && (r == 0 || r == (e3.s < 0 ? 3 : 2)) : o > 5 || o == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? u / Mr(10, a - i) : 0 : h[c - 1]) % 10 & 1 || r == (e3.s < 0 ? 8 : 7))), t < 1 || !h[0]) return l ? (s = pt(e3), h.length = 1, t = t - s - 1, h[0] = Mr(10, (st - t % st) % st), e3.e = $n(-t / st) || 0) : (h.length = 1, h[0] = e3.e = e3.s = 0), e3;
  if (n == 0 ? (h.length = c, s = 1, c--) : (h.length = c + 1, s = Mr(10, st - n), h[c] = i > 0 ? (u / Mr(10, a - i) % Mr(10, i) | 0) * s : 0), l) for (; ; ) if (c == 0) {
    (h[0] += s) == Pt && (h[0] = 1, ++e3.e);
    break;
  } else {
    if (h[c] += s, h[c] != Pt) break;
    h[c--] = 0, s = 1;
  }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (at && (e3.e > ia || e3.e < -ia)) throw Error(uh + pt(e3));
  return e3;
}
function Lb(e3, t) {
  var r, n, i, s, a, o, l, u, c, h, f = e3.constructor, d = f.precision;
  if (!e3.s || !t.s) return t.s ? t.s = -t.s : t = new f(e3), at ? Q(t, d) : t;
  if (l = e3.d, h = t.d, n = t.e, u = e3.e, l = l.slice(), a = u - n, a) {
    for (c = a < 0, c ? (r = l, a = -a, o = h.length) : (r = h, n = u, o = l.length), i = Math.max(Math.ceil(d / st), o) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
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
      for (s = i; s && l[--s] === 0; ) l[s] = Pt - 1;
      --l[s], l[i] += Pt;
    }
    l[i] -= h[i];
  }
  for (; l[--o] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, at ? Q(t, d) : t) : new f(0);
}
function Fr(e3, t, r) {
  var n, i = pt(e3), s = Ie(e3.d), a = s.length;
  return t ? (r && (n = r - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + or(n) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (i < 0 ? "e" : "e+") + i) : i < 0 ? (s = "0." + or(-i - 1) + s, r && (n = r - a) > 0 && (s += or(n))) : i >= a ? (s += or(i + 1 - a), r && (n = r - i - 1) > 0 && (s = s + "." + or(n))) : ((n = i + 1) < a && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (s += "."), s += or(n))), e3.s < 0 ? "-" + s : s;
}
function yp(e3, t) {
  if (e3.length > t) return e3.length = t, true;
}
function Rb(e3) {
  var t, r, n;
  function i(s) {
    var a = this;
    if (!(a instanceof i)) return new i(s);
    if (a.constructor = i, s instanceof i) {
      a.s = s.s, a.e = s.e, a.d = (s = s.d) ? s.slice() : s;
      return;
    }
    if (typeof s == "number") {
      if (s * 0 !== 0) throw Error(jr + s);
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
      return gp(a, s.toString());
    } else if (typeof s != "string") throw Error(jr + s);
    if (s.charCodeAt(0) === 45 ? (s = s.slice(1), a.s = -1) : a.s = 1, LA.test(s)) gp(a, s);
    else throw Error(jr + s);
  }
  if (i.prototype = N, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Rb, i.config = i.set = RA, e3 === void 0 && (e3 = {}), e3) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e3.hasOwnProperty(r = n[t++]) || (e3[r] = this[r]);
  return i.config(e3), i;
}
function RA(e3) {
  if (!e3 || typeof e3 != "object") throw Error(ve + "Object expected");
  var t, r, n, i = ["precision", 1, Rn, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e3[r = i[t]]) !== void 0) if ($n(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(jr + r + ": " + n);
  if ((n = e3[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(jr + r + ": " + n);
  return this;
}
var ch = Rb(DA);
te = new ch(1);
const K = ch;
function $b(e3) {
  var t;
  return e3 === 0 ? t = 1 : t = Math.floor(new K(e3).abs().log(10).toNumber()) + 1, t;
}
function zb(e3, t, r) {
  for (var n = new K(e3), i = 0, s = []; n.lt(t) && i < 1e5; ) s.push(n.toNumber()), n = n.add(r), i++;
  return s;
}
var Bb = (e3) => {
  var [t, r] = e3, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, hh = (e3, t, r) => {
  if (e3.lte(0)) return new K(0);
  var n = $b(e3.toNumber()), i = new K(10).pow(n), s = e3.div(i), a = n !== 1 ? 0.05 : 0.1, o = new K(Math.ceil(s.div(a).toNumber())).add(r).mul(a), l = o.mul(i);
  return t ? new K(l.toNumber()) : new K(Math.ceil(l.toNumber()));
}, Fb = (e3, t, r) => {
  var n;
  if (e3.lte(0)) return new K(0);
  var i = [1, 2, 2.5, 5], s = e3.toNumber(), a = Math.floor(new K(s).abs().log(10).toNumber()), o = new K(10).pow(a), l = e3.div(o).toNumber(), u = i.findIndex((d) => d >= l - 1e-10);
  if (u === -1 && (o = o.mul(10), u = 0), u += r, u >= i.length) {
    var c = Math.floor(u / i.length);
    u %= i.length, o = o.mul(new K(10).pow(c));
  }
  var h = (n = i[u]) !== null && n !== void 0 ? n : 1, f = new K(h).mul(o);
  return t ? f : new K(Math.ceil(f.toNumber()));
}, $A = (e3, t, r) => {
  var n = new K(1), i = new K(e3);
  if (!i.isint() && r) {
    var s = Math.abs(e3);
    s < 1 ? (n = new K(10).pow($b(e3) - 1), i = new K(Math.floor(i.div(n).toNumber())).mul(n)) : s > 1 && (i = new K(Math.floor(e3)));
  } else e3 === 0 ? i = new K(Math.floor((t - 1) / 2)) : r || (i = new K(Math.floor(e3)));
  for (var a = Math.floor((t - 1) / 2), o = [], l = 0; l < t; l++) o.push(i.add(new K(l - a).mul(n)).toNumber());
  return o;
}, Wb = function(t, r, n, i) {
  var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : hh;
  if (!Number.isFinite((r - t) / (n - 1))) return { step: new K(0), tickMin: new K(0), tickMax: new K(0) };
  var o = a(new K(r).sub(t).div(n - 1), i, s), l;
  t <= 0 && r >= 0 ? l = new K(0) : (l = new K(t).add(r).div(2), l = l.sub(new K(l).mod(o)));
  var u = Math.ceil(l.sub(t).div(o).toNumber()), c = Math.ceil(new K(r).sub(l).div(o).toNumber()), h = u + c + 1;
  return h > n ? Wb(t, r, n, i, s + 1, a) : (h < n && (c = r > 0 ? c + (n - h) : c, u = r > 0 ? u : u + (n - h)), { step: o, tickMin: l.sub(new K(u).mul(o)), tickMax: l.add(new K(c).mul(o)) });
}, bp = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", o = Math.max(i, 2), [l, u] = Bb([r, n]);
  if (l === -1 / 0 || u === 1 / 0) {
    var c = u === 1 / 0 ? [l, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), u];
    return r > n ? c.reverse() : c;
  }
  if (l === u) return $A(l, i, s);
  var h = a === "snap125" ? Fb : hh, { step: f, tickMin: d, tickMax: v } = Wb(l, u, o, s, 0, h), m = zb(d, v.add(new K(0.1).mul(f)), f);
  return r > n ? m.reverse() : m;
}, wp = function(t, r) {
  var [n, i] = t, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [o, l] = Bb([n, i]);
  if (o === -1 / 0 || l === 1 / 0) return [n, i];
  if (o === l) return [o];
  var u = a === "snap125" ? Fb : hh, c = Math.max(r, 2), h = u(new K(l).sub(o).div(c - 1), s, 0), f = [...zb(new K(o), new K(l), h), l];
  return s === false && (f = f.map((d) => Math.round(d))), n > i ? f.reverse() : f;
}, zA = (e3) => e3.rootProps.barCategoryGap, lo = (e3) => e3.rootProps.stackOffset, qb = (e3) => e3.rootProps.reverseStackOrder, fh = (e3) => e3.options.chartName, dh = (e3) => e3.rootProps.syncId, Kb = (e3) => e3.rootProps.syncMethod, vh = (e3) => e3.options.eventEmitter, BA = (e3) => e3.rootProps.baseValue, Rt = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 }, br = { allowDecimals: false, allowDataOverflow: false, angleAxisId: 0, reversed: false, scale: "auto", tick: true, type: "auto" }, Oe = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, includeHidden: false, radiusAxisId: 0, reversed: false, scale: "auto", tick: true, tickCount: 5, type: "auto" }, uo = (e3, t) => {
  if (!(!e3 || !t)) return e3 != null && e3.reversed ? [t[1], t[0]] : t;
};
function co(e3, t, r) {
  if (r !== "auto") return r;
  if (e3 != null) return Pe(e3, t) ? "category" : "number";
}
function xp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sa(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xp(Object(r), true).forEach(function(n) {
      FA(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function FA(e3, t, r) {
  return (t = WA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function WA(e3) {
  var t = qA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Pp = { allowDataOverflow: br.allowDataOverflow, allowDecimals: br.allowDecimals, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: br.angleAxisId, includeHidden: false, name: void 0, reversed: br.reversed, scale: br.scale, tick: br.tick, tickCount: void 0, ticks: void 0, type: br.type, unit: void 0, niceTicks: "auto" }, Sp = { allowDataOverflow: Oe.allowDataOverflow, allowDecimals: Oe.allowDecimals, allowDuplicatedCategory: Oe.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Oe.radiusAxisId, includeHidden: Oe.includeHidden, name: void 0, reversed: Oe.reversed, scale: Oe.scale, tick: Oe.tick, tickCount: Oe.tickCount, ticks: void 0, type: Oe.type, unit: void 0, niceTicks: "auto" }, KA = (e3, t) => {
  if (t != null) return e3.polarAxis.angleAxis[t];
}, ph = O([KA, vb], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = co(t, "angleAxis", Pp.type)) !== null && r !== void 0 ? r : "category";
  return sa(sa({}, Pp), {}, { type: n });
}), UA = (e3, t) => e3.polarAxis.radiusAxis[t], mh = O([UA, vb], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = co(t, "radiusAxis", Sp.type)) !== null && r !== void 0 ? r : "category";
  return sa(sa({}, Sp), {}, { type: n });
}), ho = (e3) => e3.polarOptions, gh = O([Ze, Qe, Tt], gA), Ub = O([ho, gh], (e3, t) => {
  if (e3 != null) return vr(e3.innerRadius, t, 0);
}), Vb = O([ho, gh], (e3, t) => {
  if (e3 != null) return vr(e3.outerRadius, t, t * 0.8);
}), VA = (e3) => {
  if (e3 == null) return [0, 0];
  var { startAngle: t, endAngle: r } = e3;
  return [t, r];
}, Yb = O([ho], VA);
O([ph, Yb], uo);
var Hb = O([gh, Ub, Vb], (e3, t, r) => {
  if (!(e3 == null || t == null || r == null)) return [t, r];
});
O([mh, Hb], uo);
var Gb = O([rt, ho, Ub, Vb, Ze, Qe], (e3, t, r, n, i, s) => {
  if (!(e3 !== "centric" && e3 !== "radial" || t == null || r == null || n == null)) {
    var { cx: a, cy: o, startAngle: l, endAngle: u } = t;
    return { cx: vr(a, i, i / 2), cy: vr(o, s, s / 2), innerRadius: r, outerRadius: n, startAngle: l, endAngle: u, clockWise: false };
  }
}), St = (e3, t) => t, fo = (e3, t, r) => r;
function yh(e3) {
  return e3 == null ? void 0 : e3.id;
}
function Xb(e3, t, r) {
  var { chartData: n = [] } = t, { allowDuplicatedCategory: i, dataKey: s } = r, a = /* @__PURE__ */ new Map();
  return e3.forEach((o) => {
    var l, u = (l = o.data) !== null && l !== void 0 ? l : n;
    if (!(u == null || u.length === 0)) {
      var c = yh(o);
      u.forEach((h, f) => {
        var d = s == null || i ? f : String(ht(h, s, null)), v = ht(h, o.dataKey, 0), m;
        a.has(d) ? m = a.get(d) : m = {}, Object.assign(m, { [c]: v }), a.set(d, m);
      });
    }
  }), Array.from(a.values());
}
function bh(e3) {
  return "stackId" in e3 && e3.stackId != null && e3.dataKey != null;
}
var vo = (e3, t) => e3 === t ? true : e3 == null || t == null ? false : e3[0] === t[0] && e3[1] === t[1];
function po(e3, t) {
  return Array.isArray(e3) && Array.isArray(t) && e3.length === 0 && t.length === 0 ? true : e3 === t;
}
function YA(e3, t) {
  if (e3.length === t.length) {
    for (var r = 0; r < e3.length; r++) if (e3[r] !== t[r]) return false;
    return true;
  }
  return false;
}
var _t = (e3) => {
  var t = rt(e3);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, zn = (e3) => e3.tooltip.settings.axisId;
function wh(e3) {
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
var HA = (e3, t) => {
  if (t != null) switch (e3) {
    case "linear": {
      if (!ke(t)) {
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
function fr(e3, t) {
  return e3 == null || t == null ? NaN : e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
}
function GA(e3, t) {
  return e3 == null || t == null ? NaN : t < e3 ? -1 : t > e3 ? 1 : t >= e3 ? 0 : NaN;
}
function xh(e3) {
  let t, r, n;
  e3.length !== 2 ? (t = fr, r = (o, l) => fr(e3(o), l), n = (o, l) => e3(o) - l) : (t = e3 === fr || e3 === GA ? e3 : XA, r = e3, n = e3);
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
function XA() {
  return 0;
}
function Jb(e3) {
  return e3 === null ? NaN : +e3;
}
function* JA(e3, t) {
  for (let r of e3) r != null && (r = +r) >= r && (yield r);
}
const ZA = xh(fr), Ki = ZA.right;
xh(Jb).center;
class _p extends Map {
  constructor(t, r = eC) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Op(this, t));
  }
  has(t) {
    return super.has(Op(this, t));
  }
  set(t, r) {
    return super.set(QA(this, t), r);
  }
  delete(t) {
    return super.delete(tC(this, t));
  }
}
function Op({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : r;
}
function QA({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : (e3.set(n, r), r);
}
function tC({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) && (r = e3.get(n), e3.delete(n)), r;
}
function eC(e3) {
  return e3 !== null && typeof e3 == "object" ? e3.valueOf() : e3;
}
function rC(e3 = fr) {
  if (e3 === fr) return Zb;
  if (typeof e3 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e3(t, r);
    return n || n === 0 ? n : (e3(r, r) === 0) - (e3(t, t) === 0);
  };
}
function Zb(e3, t) {
  return (e3 == null || !(e3 >= e3)) - (t == null || !(t >= t)) || (e3 < t ? -1 : e3 > t ? 1 : 0);
}
const nC = Math.sqrt(50), iC = Math.sqrt(10), sC = Math.sqrt(2);
function aa(e3, t, r) {
  const n = (t - e3) / Math.max(0, r), i = Math.floor(Math.log10(n)), s = n / Math.pow(10, i), a = s >= nC ? 10 : s >= iC ? 5 : s >= sC ? 2 : 1;
  let o, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, o = Math.round(e3 * u), l = Math.round(t * u), o / u < e3 && ++o, l / u > t && --l, u = -u) : (u = Math.pow(10, i) * a, o = Math.round(e3 / u), l = Math.round(t / u), o * u < e3 && ++o, l * u > t && --l), l < o && 0.5 <= r && r < 2 ? aa(e3, t, r * 2) : [o, l, u];
}
function vc(e3, t, r) {
  if (t = +t, e3 = +e3, r = +r, !(r > 0)) return [];
  if (e3 === t) return [e3];
  const n = t < e3, [i, s, a] = n ? aa(t, e3, r) : aa(e3, t, r);
  if (!(s >= i)) return [];
  const o = s - i + 1, l = new Array(o);
  if (n) if (a < 0) for (let u = 0; u < o; ++u) l[u] = (s - u) / -a;
  else for (let u = 0; u < o; ++u) l[u] = (s - u) * a;
  else if (a < 0) for (let u = 0; u < o; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < o; ++u) l[u] = (i + u) * a;
  return l;
}
function pc(e3, t, r) {
  return t = +t, e3 = +e3, r = +r, aa(e3, t, r)[2];
}
function mc(e3, t, r) {
  t = +t, e3 = +e3, r = +r;
  const n = t < e3, i = n ? pc(t, e3, r) : pc(e3, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Mp(e3, t) {
  let r;
  for (const n of e3) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ep(e3, t) {
  let r;
  for (const n of e3) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Qb(e3, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e3.length - 1, n)), !(r <= t && t <= n)) return e3;
  for (i = i === void 0 ? Zb : rC(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, u = t - r + 1, c = Math.log(l), h = 0.5 * Math.exp(2 * c / 3), f = 0.5 * Math.sqrt(c * h * (l - h) / l) * (u - l / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * h / l + f)), v = Math.min(n, Math.floor(t + (l - u) * h / l + f));
      Qb(e3, t, d, v, i);
    }
    const s = e3[t];
    let a = r, o = n;
    for (Zn(e3, r, t), i(e3[n], s) > 0 && Zn(e3, r, n); a < o; ) {
      for (Zn(e3, a, o), ++a, --o; i(e3[a], s) < 0; ) ++a;
      for (; i(e3[o], s) > 0; ) --o;
    }
    i(e3[r], s) === 0 ? Zn(e3, r, o) : (++o, Zn(e3, o, n)), o <= t && (r = o + 1), t <= o && (n = o - 1);
  }
  return e3;
}
function Zn(e3, t, r) {
  const n = e3[t];
  e3[t] = e3[r], e3[r] = n;
}
function aC(e3, t, r) {
  if (e3 = Float64Array.from(JA(e3)), !(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Ep(e3);
    if (t >= 1) return Mp(e3);
    var n, i = (n - 1) * t, s = Math.floor(i), a = Mp(Qb(e3, s).subarray(0, s + 1)), o = Ep(e3.subarray(s + 1));
    return a + (o - a) * (i - s);
  }
}
function oC(e3, t, r = Jb) {
  if (!(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e3[0], 0, e3);
    if (t >= 1) return +r(e3[n - 1], n - 1, e3);
    var n, i = (n - 1) * t, s = Math.floor(i), a = +r(e3[s], s, e3), o = +r(e3[s + 1], s + 1, e3);
    return a + (o - a) * (i - s);
  }
}
function lC(e3, t, r) {
  e3 = +e3, t = +t, r = (i = arguments.length) < 2 ? (t = e3, e3 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e3) / r)) | 0, s = new Array(i); ++n < i; ) s[n] = e3 + n * r;
  return s;
}
function pe(e3, t) {
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
function tr(e3, t) {
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
const gc = Symbol("implicit");
function Ph() {
  var e3 = new _p(), t = [], r = [], n = gc;
  function i(s) {
    let a = e3.get(s);
    if (a === void 0) {
      if (n !== gc) return n;
      e3.set(s, a = t.push(s) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e3 = new _p();
    for (const a of s) e3.has(a) || e3.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(s) {
    return arguments.length ? (r = Array.from(s), i) : r.slice();
  }, i.unknown = function(s) {
    return arguments.length ? (n = s, i) : n;
  }, i.copy = function() {
    return Ph(t, r).unknown(n);
  }, pe.apply(i, arguments), i;
}
function Sh() {
  var e3 = Ph().unknown(void 0), t = e3.domain, r = e3.range, n = 0, i = 1, s, a, o = false, l = 0, u = 0, c = 0.5;
  delete e3.unknown;
  function h() {
    var f = t().length, d = i < n, v = d ? i : n, m = d ? n : i;
    s = (m - v) / Math.max(1, f - l + u * 2), o && (s = Math.floor(s)), v += (m - v - s * (f - l)) * c, a = s * (1 - l), o && (v = Math.round(v), a = Math.round(a));
    var g = lC(f).map(function(y) {
      return v + s * y;
    });
    return r(d ? g.reverse() : g);
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
    return Sh(t(), [n, i]).round(o).paddingInner(l).paddingOuter(u).align(c);
  }, pe.apply(h(), arguments);
}
function tw(e3) {
  var t = e3.copy;
  return e3.padding = e3.paddingOuter, delete e3.paddingInner, delete e3.paddingOuter, e3.copy = function() {
    return tw(t());
  }, e3;
}
function uC() {
  return tw(Sh.apply(null, arguments).paddingInner(1));
}
function _h(e3, t, r) {
  e3.prototype = t.prototype = r, r.constructor = e3;
}
function ew(e3, t) {
  var r = Object.create(e3.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ui() {
}
var _i = 0.7, oa = 1 / _i, mn = "\\s*([+-]?\\d+)\\s*", Oi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cC = /^#([0-9a-f]{3,8})$/, hC = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), fC = new RegExp(`^rgb\\(${je},${je},${je}\\)$`), dC = new RegExp(`^rgba\\(${mn},${mn},${mn},${Oi}\\)$`), vC = new RegExp(`^rgba\\(${je},${je},${je},${Oi}\\)$`), pC = new RegExp(`^hsl\\(${Oi},${je},${je}\\)$`), mC = new RegExp(`^hsla\\(${Oi},${je},${je},${Oi}\\)$`), Ap = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
_h(Ui, Mi, { copy(e3) {
  return Object.assign(new this.constructor(), this, e3);
}, displayable() {
  return this.rgb().displayable();
}, hex: Cp, formatHex: Cp, formatHex8: gC, formatHsl: yC, formatRgb: Ip, toString: Ip });
function Cp() {
  return this.rgb().formatHex();
}
function gC() {
  return this.rgb().formatHex8();
}
function yC() {
  return rw(this).formatHsl();
}
function Ip() {
  return this.rgb().formatRgb();
}
function Mi(e3) {
  var t, r;
  return e3 = (e3 + "").trim().toLowerCase(), (t = cC.exec(e3)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? kp(t) : r === 3 ? new Gt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? us(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? us(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = hC.exec(e3)) ? new Gt(t[1], t[2], t[3], 1) : (t = fC.exec(e3)) ? new Gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = dC.exec(e3)) ? us(t[1], t[2], t[3], t[4]) : (t = vC.exec(e3)) ? us(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = pC.exec(e3)) ? Np(t[1], t[2] / 100, t[3] / 100, 1) : (t = mC.exec(e3)) ? Np(t[1], t[2] / 100, t[3] / 100, t[4]) : Ap.hasOwnProperty(e3) ? kp(Ap[e3]) : e3 === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function kp(e3) {
  return new Gt(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
}
function us(e3, t, r, n) {
  return n <= 0 && (e3 = t = r = NaN), new Gt(e3, t, r, n);
}
function bC(e3) {
  return e3 instanceof Ui || (e3 = Mi(e3)), e3 ? (e3 = e3.rgb(), new Gt(e3.r, e3.g, e3.b, e3.opacity)) : new Gt();
}
function yc(e3, t, r, n) {
  return arguments.length === 1 ? bC(e3) : new Gt(e3, t, r, n ?? 1);
}
function Gt(e3, t, r, n) {
  this.r = +e3, this.g = +t, this.b = +r, this.opacity = +n;
}
_h(Gt, yc, ew(Ui, { brighter(e3) {
  return e3 = e3 == null ? oa : Math.pow(oa, e3), new Gt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? _i : Math.pow(_i, e3), new Gt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Gt(Tr(this.r), Tr(this.g), Tr(this.b), la(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: jp, formatHex: jp, formatHex8: wC, formatRgb: Tp, toString: Tp }));
function jp() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}`;
}
function wC() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}${Ar((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Tp() {
  const e3 = la(this.opacity);
  return `${e3 === 1 ? "rgb(" : "rgba("}${Tr(this.r)}, ${Tr(this.g)}, ${Tr(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
}
function la(e3) {
  return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
}
function Tr(e3) {
  return Math.max(0, Math.min(255, Math.round(e3) || 0));
}
function Ar(e3) {
  return e3 = Tr(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
}
function Np(e3, t, r, n) {
  return n <= 0 ? e3 = t = r = NaN : r <= 0 || r >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new be(e3, t, r, n);
}
function rw(e3) {
  if (e3 instanceof be) return new be(e3.h, e3.s, e3.l, e3.opacity);
  if (e3 instanceof Ui || (e3 = Mi(e3)), !e3) return new be();
  if (e3 instanceof be) return e3;
  e3 = e3.rgb();
  var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, i = Math.min(t, r, n), s = Math.max(t, r, n), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (r - n) / o + (r < n) * 6 : r === s ? a = (n - t) / o + 2 : a = (t - r) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new be(a, o, l, e3.opacity);
}
function xC(e3, t, r, n) {
  return arguments.length === 1 ? rw(e3) : new be(e3, t, r, n ?? 1);
}
function be(e3, t, r, n) {
  this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
}
_h(be, xC, ew(Ui, { brighter(e3) {
  return e3 = e3 == null ? oa : Math.pow(oa, e3), new be(this.h, this.s, this.l * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? _i : Math.pow(_i, e3), new be(this.h, this.s, this.l * e3, this.opacity);
}, rgb() {
  var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Gt(Gl(e3 >= 240 ? e3 - 240 : e3 + 120, i, n), Gl(e3, i, n), Gl(e3 < 120 ? e3 + 240 : e3 - 120, i, n), this.opacity);
}, clamp() {
  return new be(Dp(this.h), cs(this.s), cs(this.l), la(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e3 = la(this.opacity);
  return `${e3 === 1 ? "hsl(" : "hsla("}${Dp(this.h)}, ${cs(this.s) * 100}%, ${cs(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
} }));
function Dp(e3) {
  return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
}
function cs(e3) {
  return Math.max(0, Math.min(1, e3 || 0));
}
function Gl(e3, t, r) {
  return (e3 < 60 ? t + (r - t) * e3 / 60 : e3 < 180 ? r : e3 < 240 ? t + (r - t) * (240 - e3) / 60 : t) * 255;
}
const Oh = (e3) => () => e3;
function PC(e3, t) {
  return function(r) {
    return e3 + r * t;
  };
}
function SC(e3, t, r) {
  return e3 = Math.pow(e3, r), t = Math.pow(t, r) - e3, r = 1 / r, function(n) {
    return Math.pow(e3 + n * t, r);
  };
}
function _C(e3) {
  return (e3 = +e3) == 1 ? nw : function(t, r) {
    return r - t ? SC(t, r, e3) : Oh(isNaN(t) ? r : t);
  };
}
function nw(e3, t) {
  var r = t - e3;
  return r ? PC(e3, r) : Oh(isNaN(e3) ? t : e3);
}
const Lp = (function e(t) {
  var r = _C(t);
  function n(i, s) {
    var a = r((i = yc(i)).r, (s = yc(s)).r), o = r(i.g, s.g), l = r(i.b, s.b), u = nw(i.opacity, s.opacity);
    return function(c) {
      return i.r = a(c), i.g = o(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function OC(e3, t) {
  t || (t = []);
  var r = e3 ? Math.min(t.length, e3.length) : 0, n = t.slice(), i;
  return function(s) {
    for (i = 0; i < r; ++i) n[i] = e3[i] * (1 - s) + t[i] * s;
    return n;
  };
}
function MC(e3) {
  return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
}
function EC(e3, t) {
  var r = t ? t.length : 0, n = e3 ? Math.min(r, e3.length) : 0, i = new Array(n), s = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = Bn(e3[a], t[a]);
  for (; a < r; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < n; ++a) s[a] = i[a](o);
    return s;
  };
}
function AC(e3, t) {
  var r = /* @__PURE__ */ new Date();
  return e3 = +e3, t = +t, function(n) {
    return r.setTime(e3 * (1 - n) + t * n), r;
  };
}
function ua(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return e3 * (1 - r) + t * r;
  };
}
function CC(e3, t) {
  var r = {}, n = {}, i;
  (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e3 ? r[i] = Bn(e3[i], t[i]) : n[i] = t[i];
  return function(s) {
    for (i in r) n[i] = r[i](s);
    return n;
  };
}
var bc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xl = new RegExp(bc.source, "g");
function IC(e3) {
  return function() {
    return e3;
  };
}
function kC(e3) {
  return function(t) {
    return e3(t) + "";
  };
}
function jC(e3, t) {
  var r = bc.lastIndex = Xl.lastIndex = 0, n, i, s, a = -1, o = [], l = [];
  for (e3 = e3 + "", t = t + ""; (n = bc.exec(e3)) && (i = Xl.exec(t)); ) (s = i.index) > r && (s = t.slice(r, s), o[a] ? o[a] += s : o[++a] = s), (n = n[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: ua(n, i) })), r = Xl.lastIndex;
  return r < t.length && (s = t.slice(r), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? kC(l[0].x) : IC(t) : (t = l.length, function(u) {
    for (var c = 0, h; c < t; ++c) o[(h = l[c]).i] = h.x(u);
    return o.join("");
  });
}
function Bn(e3, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Oh(t) : (r === "number" ? ua : r === "string" ? (n = Mi(t)) ? (t = n, Lp) : jC : t instanceof Mi ? Lp : t instanceof Date ? AC : MC(t) ? OC : Array.isArray(t) ? EC : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? CC : ua)(e3, t);
}
function Mh(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return Math.round(e3 * (1 - r) + t * r);
  };
}
function TC(e3, t) {
  t === void 0 && (t = e3, e3 = Bn);
  for (var r = 0, n = t.length - 1, i = t[0], s = new Array(n < 0 ? 0 : n); r < n; ) s[r] = e3(i, i = t[++r]);
  return function(a) {
    var o = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return s[o](a - o);
  };
}
function NC(e3) {
  return function() {
    return e3;
  };
}
function ca(e3) {
  return +e3;
}
var Rp = [0, 1];
function Ft(e3) {
  return e3;
}
function wc(e3, t) {
  return (t -= e3 = +e3) ? function(r) {
    return (r - e3) / t;
  } : NC(isNaN(t) ? NaN : 0.5);
}
function DC(e3, t) {
  var r;
  return e3 > t && (r = e3, e3 = t, t = r), function(n) {
    return Math.max(e3, Math.min(t, n));
  };
}
function LC(e3, t, r) {
  var n = e3[0], i = e3[1], s = t[0], a = t[1];
  return i < n ? (n = wc(i, n), s = r(a, s)) : (n = wc(n, i), s = r(s, a)), function(o) {
    return s(n(o));
  };
}
function RC(e3, t, r) {
  var n = Math.min(e3.length, t.length) - 1, i = new Array(n), s = new Array(n), a = -1;
  for (e3[n] < e3[0] && (e3 = e3.slice().reverse(), t = t.slice().reverse()); ++a < n; ) i[a] = wc(e3[a], e3[a + 1]), s[a] = r(t[a], t[a + 1]);
  return function(o) {
    var l = Ki(e3, o, 1, n) - 1;
    return s[l](i[l](o));
  };
}
function Vi(e3, t) {
  return t.domain(e3.domain()).range(e3.range()).interpolate(e3.interpolate()).clamp(e3.clamp()).unknown(e3.unknown());
}
function mo() {
  var e3 = Rp, t = Rp, r = Bn, n, i, s, a = Ft, o, l, u;
  function c() {
    var f = Math.min(e3.length, t.length);
    return a !== Ft && (a = DC(e3[0], e3[f - 1])), o = f > 2 ? RC : LC, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? s : (l || (l = o(e3.map(n), t, r)))(n(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = o(t, e3.map(n), ua)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (e3 = Array.from(f, ca), c()) : e3.slice();
  }, h.range = function(f) {
    return arguments.length ? (t = Array.from(f), c()) : t.slice();
  }, h.rangeRound = function(f) {
    return t = Array.from(f), r = Mh, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? true : Ft, c()) : a !== Ft;
  }, h.interpolate = function(f) {
    return arguments.length ? (r = f, c()) : r;
  }, h.unknown = function(f) {
    return arguments.length ? (s = f, h) : s;
  }, function(f, d) {
    return n = f, i = d, c();
  };
}
function Eh() {
  return mo()(Ft, Ft);
}
function $C(e3) {
  return Math.abs(e3 = Math.round(e3)) >= 1e21 ? e3.toLocaleString("en").replace(/,/g, "") : e3.toString(10);
}
function ha(e3, t) {
  if (!isFinite(e3) || e3 === 0) return null;
  var r = (e3 = t ? e3.toExponential(t - 1) : e3.toExponential()).indexOf("e"), n = e3.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e3.slice(r + 1)];
}
function Mn(e3) {
  return e3 = ha(Math.abs(e3)), e3 ? e3[1] : NaN;
}
function zC(e3, t) {
  return function(r, n) {
    for (var i = r.length, s = [], a = 0, o = e3[0], l = 0; i > 0 && o > 0 && (l + o + 1 > n && (o = Math.max(1, n - l)), s.push(r.substring(i -= o, i + o)), !((l += o + 1) > n)); ) o = e3[a = (a + 1) % e3.length];
    return s.reverse().join(t);
  };
}
function BC(e3) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e3[+r];
    });
  };
}
var FC = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ei(e3) {
  if (!(t = FC.exec(e3))) throw new Error("invalid format: " + e3);
  var t;
  return new Ah({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
Ei.prototype = Ah.prototype;
function Ah(e3) {
  this.fill = e3.fill === void 0 ? " " : e3.fill + "", this.align = e3.align === void 0 ? ">" : e3.align + "", this.sign = e3.sign === void 0 ? "-" : e3.sign + "", this.symbol = e3.symbol === void 0 ? "" : e3.symbol + "", this.zero = !!e3.zero, this.width = e3.width === void 0 ? void 0 : +e3.width, this.comma = !!e3.comma, this.precision = e3.precision === void 0 ? void 0 : +e3.precision, this.trim = !!e3.trim, this.type = e3.type === void 0 ? "" : e3.type + "";
}
Ah.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function WC(e3) {
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
var fa;
function qC(e3, t) {
  var r = ha(e3, t);
  if (!r) return fa = void 0, e3.toPrecision(t);
  var n = r[0], i = r[1], s = i - (fa = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return s === a ? n : s > a ? n + new Array(s - a + 1).join("0") : s > 0 ? n.slice(0, s) + "." + n.slice(s) : "0." + new Array(1 - s).join("0") + ha(e3, Math.max(0, t + s - 1))[0];
}
function $p(e3, t) {
  var r = ha(e3, t);
  if (!r) return e3 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const zp = { "%": (e3, t) => (e3 * 100).toFixed(t), b: (e3) => Math.round(e3).toString(2), c: (e3) => e3 + "", d: $C, e: (e3, t) => e3.toExponential(t), f: (e3, t) => e3.toFixed(t), g: (e3, t) => e3.toPrecision(t), o: (e3) => Math.round(e3).toString(8), p: (e3, t) => $p(e3 * 100, t), r: $p, s: qC, X: (e3) => Math.round(e3).toString(16).toUpperCase(), x: (e3) => Math.round(e3).toString(16) };
function Bp(e3) {
  return e3;
}
var Fp = Array.prototype.map, Wp = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function KC(e3) {
  var t = e3.grouping === void 0 || e3.thousands === void 0 ? Bp : zC(Fp.call(e3.grouping, Number), e3.thousands + ""), r = e3.currency === void 0 ? "" : e3.currency[0] + "", n = e3.currency === void 0 ? "" : e3.currency[1] + "", i = e3.decimal === void 0 ? "." : e3.decimal + "", s = e3.numerals === void 0 ? Bp : BC(Fp.call(e3.numerals, String)), a = e3.percent === void 0 ? "%" : e3.percent + "", o = e3.minus === void 0 ? "\u2212" : e3.minus + "", l = e3.nan === void 0 ? "NaN" : e3.nan + "";
  function u(h, f) {
    h = Ei(h);
    var d = h.fill, v = h.align, m = h.sign, g = h.symbol, y = h.zero, b = h.width, w = h.comma, x = h.precision, P = h.trim, S = h.type;
    S === "n" ? (w = true, S = "g") : zp[S] || (x === void 0 && (x = 12), P = true, S = "g"), (y || d === "0" && v === "=") && (y = true, d = "0", v = "=");
    var _ = (f && f.prefix !== void 0 ? f.prefix : "") + (g === "$" ? r : g === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""), M = (g === "$" ? n : /[%p]/.test(S) ? a : "") + (f && f.suffix !== void 0 ? f.suffix : ""), A = zp[S], k = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function I(E) {
      var $ = _, R = M, z, H, W;
      if (S === "c") R = A(E) + R, E = "";
      else {
        E = +E;
        var G = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? l : A(Math.abs(E), x), P && (E = WC(E)), G && +E == 0 && m !== "+" && (G = false), $ = (G ? m === "(" ? m : o : m === "-" || m === "(" ? "" : m) + $, R = (S === "s" && !isNaN(E) && fa !== void 0 ? Wp[8 + fa / 3] : "") + R + (G && m === "(" ? ")" : ""), k) {
          for (z = -1, H = E.length; ++z < H; ) if (W = E.charCodeAt(z), 48 > W || W > 57) {
            R = (W === 46 ? i + E.slice(z + 1) : E.slice(z)) + R, E = E.slice(0, z);
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
    return I.toString = function() {
      return h + "";
    }, I;
  }
  function c(h, f) {
    var d = Math.max(-8, Math.min(8, Math.floor(Mn(f) / 3))) * 3, v = Math.pow(10, -d), m = u((h = Ei(h), h.type = "f", h), { suffix: Wp[8 + d / 3] });
    return function(g) {
      return m(v * g);
    };
  }
  return { format: u, formatPrefix: c };
}
var hs, Ch, iw;
UC({ thousands: ",", grouping: [3], currency: ["$", ""] });
function UC(e3) {
  return hs = KC(e3), Ch = hs.format, iw = hs.formatPrefix, hs;
}
function VC(e3) {
  return Math.max(0, -Mn(Math.abs(e3)));
}
function YC(e3, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mn(t) / 3))) * 3 - Mn(Math.abs(e3)));
}
function HC(e3, t) {
  return e3 = Math.abs(e3), t = Math.abs(t) - e3, Math.max(0, Mn(t) - Mn(e3)) + 1;
}
function sw(e3, t, r, n) {
  var i = mc(e3, t, r), s;
  switch (n = Ei(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e3), Math.abs(t));
      return n.precision == null && !isNaN(s = YC(i, a)) && (n.precision = s), iw(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(s = HC(i, Math.max(Math.abs(e3), Math.abs(t)))) && (n.precision = s - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(s = VC(i)) && (n.precision = s - (n.type === "%") * 2);
      break;
    }
  }
  return Ch(n);
}
function mr(e3) {
  var t = e3.domain;
  return e3.ticks = function(r) {
    var n = t();
    return vc(n[0], n[n.length - 1], r ?? 10);
  }, e3.tickFormat = function(r, n) {
    var i = t();
    return sw(i[0], i[i.length - 1], r ?? 10, n);
  }, e3.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, s = n.length - 1, a = n[i], o = n[s], l, u, c = 10;
    for (o < a && (u = a, a = o, o = u, u = i, i = s, s = u); c-- > 0; ) {
      if (u = pc(a, o, r), u === l) return n[i] = a, n[s] = o, t(n);
      if (u > 0) a = Math.floor(a / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0) a = Math.ceil(a * u) / u, o = Math.floor(o * u) / u;
      else break;
      l = u;
    }
    return e3;
  }, e3;
}
function aw() {
  var e3 = Eh();
  return e3.copy = function() {
    return Vi(e3, aw());
  }, pe.apply(e3, arguments), mr(e3);
}
function ow(e3) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e3 = Array.from(n, ca), r) : e3.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return ow(e3).unknown(t);
  }, e3 = arguments.length ? Array.from(e3, ca) : [0, 1], mr(r);
}
function lw(e3, t) {
  e3 = e3.slice();
  var r = 0, n = e3.length - 1, i = e3[r], s = e3[n], a;
  return s < i && (a = r, r = n, n = a, a = i, i = s, s = a), e3[r] = t.floor(i), e3[n] = t.ceil(s), e3;
}
function qp(e3) {
  return Math.log(e3);
}
function Kp(e3) {
  return Math.exp(e3);
}
function GC(e3) {
  return -Math.log(-e3);
}
function XC(e3) {
  return -Math.exp(-e3);
}
function JC(e3) {
  return isFinite(e3) ? +("1e" + e3) : e3 < 0 ? 0 : e3;
}
function ZC(e3) {
  return e3 === 10 ? JC : e3 === Math.E ? Math.exp : (t) => Math.pow(e3, t);
}
function QC(e3) {
  return e3 === Math.E ? Math.log : e3 === 10 && Math.log10 || e3 === 2 && Math.log2 || (e3 = Math.log(e3), (t) => Math.log(t) / e3);
}
function Up(e3) {
  return (t, r) => -e3(-t, r);
}
function Ih(e3) {
  const t = e3(qp, Kp), r = t.domain;
  let n = 10, i, s;
  function a() {
    return i = QC(n), s = ZC(n), r()[0] < 0 ? (i = Up(i), s = Up(s), e3(GC, XC)) : e3(qp, Kp), t;
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
    const g = o == null ? 10 : +o;
    let y = [];
    if (!(n % 1) && d - f < g) {
      if (f = Math.floor(f), d = Math.ceil(d), u > 0) {
        for (; f <= d; ++f) for (v = 1; v < n; ++v) if (m = f < 0 ? v / s(-f) : v * s(f), !(m < u)) {
          if (m > c) break;
          y.push(m);
        }
      } else for (; f <= d; ++f) for (v = n - 1; v >= 1; --v) if (m = f > 0 ? v / s(-f) : v * s(f), !(m < u)) {
        if (m > c) break;
        y.push(m);
      }
      y.length * 2 < g && (y = vc(u, c, g));
    } else y = vc(f, d, Math.min(d - f, g)).map(s);
    return h ? y.reverse() : y;
  }, t.tickFormat = (o, l) => {
    if (o == null && (o = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Ei(l)).precision == null && (l.trim = true), l = Ch(l)), o === 1 / 0) return l;
    const u = Math.max(1, n * o / t.ticks().length);
    return (c) => {
      let h = c / s(Math.round(i(c)));
      return h * n < n - 0.5 && (h *= n), h <= u ? l(c) : "";
    };
  }, t.nice = () => r(lw(r(), { floor: (o) => s(Math.floor(i(o))), ceil: (o) => s(Math.ceil(i(o))) })), t;
}
function uw() {
  const e3 = Ih(mo()).domain([1, 10]);
  return e3.copy = () => Vi(e3, uw()).base(e3.base()), pe.apply(e3, arguments), e3;
}
function Vp(e3) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e3));
  };
}
function Yp(e3) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e3;
  };
}
function kh(e3) {
  var t = 1, r = e3(Vp(t), Yp(t));
  return r.constant = function(n) {
    return arguments.length ? e3(Vp(t = +n), Yp(t)) : t;
  }, mr(r);
}
function cw() {
  var e3 = kh(mo());
  return e3.copy = function() {
    return Vi(e3, cw()).constant(e3.constant());
  }, pe.apply(e3, arguments);
}
function Hp(e3) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e3) : Math.pow(t, e3);
  };
}
function tI(e3) {
  return e3 < 0 ? -Math.sqrt(-e3) : Math.sqrt(e3);
}
function eI(e3) {
  return e3 < 0 ? -e3 * e3 : e3 * e3;
}
function jh(e3) {
  var t = e3(Ft, Ft), r = 1;
  function n() {
    return r === 1 ? e3(Ft, Ft) : r === 0.5 ? e3(tI, eI) : e3(Hp(r), Hp(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, mr(t);
}
function Th() {
  var e3 = jh(mo());
  return e3.copy = function() {
    return Vi(e3, Th()).exponent(e3.exponent());
  }, pe.apply(e3, arguments), e3;
}
function rI() {
  return Th.apply(null, arguments).exponent(0.5);
}
function Gp(e3) {
  return Math.sign(e3) * e3 * e3;
}
function nI(e3) {
  return Math.sign(e3) * Math.sqrt(Math.abs(e3));
}
function hw() {
  var e3 = Eh(), t = [0, 1], r = false, n;
  function i(s) {
    var a = nI(e3(s));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(s) {
    return e3.invert(Gp(s));
  }, i.domain = function(s) {
    return arguments.length ? (e3.domain(s), i) : e3.domain();
  }, i.range = function(s) {
    return arguments.length ? (e3.range((t = Array.from(s, ca)).map(Gp)), i) : t.slice();
  }, i.rangeRound = function(s) {
    return i.range(s).round(true);
  }, i.round = function(s) {
    return arguments.length ? (r = !!s, i) : r;
  }, i.clamp = function(s) {
    return arguments.length ? (e3.clamp(s), i) : e3.clamp();
  }, i.unknown = function(s) {
    return arguments.length ? (n = s, i) : n;
  }, i.copy = function() {
    return hw(e3.domain(), t).round(r).clamp(e3.clamp()).unknown(n);
  }, pe.apply(i, arguments), mr(i);
}
function fw() {
  var e3 = [], t = [], r = [], n;
  function i() {
    var a = 0, o = Math.max(1, t.length);
    for (r = new Array(o - 1); ++a < o; ) r[a - 1] = oC(e3, a / o);
    return s;
  }
  function s(a) {
    return a == null || isNaN(a = +a) ? n : t[Ki(r, a)];
  }
  return s.invertExtent = function(a) {
    var o = t.indexOf(a);
    return o < 0 ? [NaN, NaN] : [o > 0 ? r[o - 1] : e3[0], o < r.length ? r[o] : e3[e3.length - 1]];
  }, s.domain = function(a) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let o of a) o != null && !isNaN(o = +o) && e3.push(o);
    return e3.sort(fr), i();
  }, s.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, s.unknown = function(a) {
    return arguments.length ? (n = a, s) : n;
  }, s.quantiles = function() {
    return r.slice();
  }, s.copy = function() {
    return fw().domain(e3).range(t).unknown(n);
  }, pe.apply(s, arguments);
}
function dw() {
  var e3 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], s;
  function a(l) {
    return l != null && l <= l ? i[Ki(n, l, 0, r)] : s;
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
    return dw().domain([e3, t]).range(i).unknown(s);
  }, pe.apply(mr(a), arguments);
}
function vw() {
  var e3 = [0.5], t = [0, 1], r, n = 1;
  function i(s) {
    return s != null && s <= s ? t[Ki(e3, s, 0, n)] : r;
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
    return vw().domain(e3).range(t).unknown(r);
  }, pe.apply(i, arguments);
}
const Jl = /* @__PURE__ */ new Date(), Zl = /* @__PURE__ */ new Date();
function wt(e3, t, r, n) {
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
  }, i.filter = (s) => wt((a) => {
    if (a >= a) for (; e3(a), !s(a); ) a.setTime(a - 1);
  }, (a, o) => {
    if (a >= a) if (o < 0) for (; ++o <= 0; ) for (; t(a, -1), !s(a); ) ;
    else for (; --o >= 0; ) for (; t(a, 1), !s(a); ) ;
  }), r && (i.count = (s, a) => (Jl.setTime(+s), Zl.setTime(+a), e3(Jl), e3(Zl), Math.floor(r(Jl, Zl))), i.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(n ? (a) => n(a) % s === 0 : (a) => i.count(0, a) % s === 0) : i)), i;
}
const da = wt(() => {
}, (e3, t) => {
  e3.setTime(+e3 + t);
}, (e3, t) => t - e3);
da.every = (e3) => (e3 = Math.floor(e3), !isFinite(e3) || !(e3 > 0) ? null : e3 > 1 ? wt((t) => {
  t.setTime(Math.floor(t / e3) * e3);
}, (t, r) => {
  t.setTime(+t + r * e3);
}, (t, r) => (r - t) / e3) : da);
da.range;
const Be = 1e3, he = Be * 60, Fe = he * 60, Ye = Fe * 24, Nh = Ye * 7, Xp = Ye * 30, Ql = Ye * 365, Cr = wt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds());
}, (e3, t) => {
  e3.setTime(+e3 + t * Be);
}, (e3, t) => (t - e3) / Be, (e3) => e3.getUTCSeconds());
Cr.range;
const Dh = wt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * Be);
}, (e3, t) => {
  e3.setTime(+e3 + t * he);
}, (e3, t) => (t - e3) / he, (e3) => e3.getMinutes());
Dh.range;
const Lh = wt((e3) => {
  e3.setUTCSeconds(0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * he);
}, (e3, t) => (t - e3) / he, (e3) => e3.getUTCMinutes());
Lh.range;
const Rh = wt((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * Be - e3.getMinutes() * he);
}, (e3, t) => {
  e3.setTime(+e3 + t * Fe);
}, (e3, t) => (t - e3) / Fe, (e3) => e3.getHours());
Rh.range;
const $h = wt((e3) => {
  e3.setUTCMinutes(0, 0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * Fe);
}, (e3, t) => (t - e3) / Fe, (e3) => e3.getUTCHours());
$h.range;
const Yi = wt((e3) => e3.setHours(0, 0, 0, 0), (e3, t) => e3.setDate(e3.getDate() + t), (e3, t) => (t - e3 - (t.getTimezoneOffset() - e3.getTimezoneOffset()) * he) / Ye, (e3) => e3.getDate() - 1);
Yi.range;
const go = wt((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Ye, (e3) => e3.getUTCDate() - 1);
go.range;
const pw = wt((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Ye, (e3) => Math.floor(e3 / Ye));
pw.range;
function Gr(e3) {
  return wt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e3) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * he) / Nh);
}
const yo = Gr(0), va = Gr(1), iI = Gr(2), sI = Gr(3), En = Gr(4), aI = Gr(5), oI = Gr(6);
yo.range;
va.range;
iI.range;
sI.range;
En.range;
aI.range;
oI.range;
function Xr(e3) {
  return wt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e3) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Nh);
}
const bo = Xr(0), pa = Xr(1), lI = Xr(2), uI = Xr(3), An = Xr(4), cI = Xr(5), hI = Xr(6);
bo.range;
pa.range;
lI.range;
uI.range;
An.range;
cI.range;
hI.range;
const zh = wt((e3) => {
  e3.setDate(1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setMonth(e3.getMonth() + t);
}, (e3, t) => t.getMonth() - e3.getMonth() + (t.getFullYear() - e3.getFullYear()) * 12, (e3) => e3.getMonth());
zh.range;
const Bh = wt((e3) => {
  e3.setUTCDate(1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCMonth(e3.getUTCMonth() + t);
}, (e3, t) => t.getUTCMonth() - e3.getUTCMonth() + (t.getUTCFullYear() - e3.getUTCFullYear()) * 12, (e3) => e3.getUTCMonth());
Bh.range;
const He = wt((e3) => {
  e3.setMonth(0, 1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setFullYear(e3.getFullYear() + t);
}, (e3, t) => t.getFullYear() - e3.getFullYear(), (e3) => e3.getFullYear());
He.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : wt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e3) * e3), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e3);
});
He.range;
const Ge = wt((e3) => {
  e3.setUTCMonth(0, 1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCFullYear(e3.getUTCFullYear() + t);
}, (e3, t) => t.getUTCFullYear() - e3.getUTCFullYear(), (e3) => e3.getUTCFullYear());
Ge.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : wt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e3) * e3), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e3);
});
Ge.range;
function mw(e3, t, r, n, i, s) {
  const a = [[Cr, 1, Be], [Cr, 5, 5 * Be], [Cr, 15, 15 * Be], [Cr, 30, 30 * Be], [s, 1, he], [s, 5, 5 * he], [s, 15, 15 * he], [s, 30, 30 * he], [i, 1, Fe], [i, 3, 3 * Fe], [i, 6, 6 * Fe], [i, 12, 12 * Fe], [n, 1, Ye], [n, 2, 2 * Ye], [r, 1, Nh], [t, 1, Xp], [t, 3, 3 * Xp], [e3, 1, Ql]];
  function o(u, c, h) {
    const f = c < u;
    f && ([u, c] = [c, u]);
    const d = h && typeof h.range == "function" ? h : l(u, c, h), v = d ? d.range(u, +c + 1) : [];
    return f ? v.reverse() : v;
  }
  function l(u, c, h) {
    const f = Math.abs(c - u) / h, d = xh(([, , g]) => g).right(a, f);
    if (d === a.length) return e3.every(mc(u / Ql, c / Ql, h));
    if (d === 0) return da.every(Math.max(mc(u, c, h), 1));
    const [v, m] = a[f / a[d - 1][2] < a[d][2] / f ? d - 1 : d];
    return v.every(m);
  }
  return [o, l];
}
const [fI, dI] = mw(Ge, Bh, bo, pw, $h, Lh), [vI, pI] = mw(He, zh, yo, Yi, Rh, Dh);
function tu(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
    return t.setFullYear(e3.y), t;
  }
  return new Date(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
}
function eu(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(Date.UTC(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
    return t.setUTCFullYear(e3.y), t;
  }
  return new Date(Date.UTC(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
}
function Qn(e3, t, r) {
  return { y: e3, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mI(e3) {
  var t = e3.dateTime, r = e3.date, n = e3.time, i = e3.periods, s = e3.days, a = e3.shortDays, o = e3.months, l = e3.shortMonths, u = ti(i), c = ei(i), h = ti(s), f = ei(s), d = ti(a), v = ei(a), m = ti(o), g = ei(o), y = ti(l), b = ei(l), w = { a: W, A: G, b: F, B: U, c: null, d: rm, e: rm, f: zI, g: GI, G: JI, H: LI, I: RI, j: $I, L: gw, m: BI, M: FI, p: Bt, q: ut, Q: sm, s: am, S: WI, u: qI, U: KI, V: UI, w: VI, W: YI, x: null, X: null, y: HI, Y: XI, Z: ZI, "%": im }, x = { a: me, A: Ut, b: Re, B: Un, c: null, d: nm, e: nm, f: rk, g: fk, G: vk, H: QI, I: tk, j: ek, L: bw, m: nk, M: ik, p: Vn, q: Vt, Q: sm, s: am, S: sk, u: ak, U: ok, V: lk, w: uk, W: ck, x: null, X: null, y: hk, Y: dk, Z: pk, "%": im }, P = { a: k, A: I, b: E, B: $, c: R, d: tm, e: tm, f: jI, g: Qp, G: Zp, H: em, I: em, j: AI, L: kI, m: EI, M: CI, p: A, q: MI, Q: NI, s: DI, S: II, u: xI, U: PI, V: SI, w: wI, W: _I, x: z, X: H, y: Qp, Y: Zp, Z: OI, "%": TI };
  w.x = S(r, w), w.X = S(n, w), w.c = S(t, w), x.x = S(r, x), x.X = S(n, x), x.c = S(t, x);
  function S(D, T) {
    return function(V) {
      var j = [], Yt = -1, tt = 0, Zt = D.length, Qt, yr, Df;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++Yt < Zt; ) D.charCodeAt(Yt) === 37 && (j.push(D.slice(tt, Yt)), (yr = Jp[Qt = D.charAt(++Yt)]) != null ? Qt = D.charAt(++Yt) : yr = Qt === "e" ? " " : "0", (Df = T[Qt]) && (Qt = Df(V, yr)), j.push(Qt), tt = Yt + 1);
      return j.push(D.slice(tt, Yt)), j.join("");
    };
  }
  function _(D, T) {
    return function(V) {
      var j = Qn(1900, void 0, 1), Yt = M(j, D, V += "", 0), tt, Zt;
      if (Yt != V.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (T && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (tt = eu(Qn(j.y, 0, 1)), Zt = tt.getUTCDay(), tt = Zt > 4 || Zt === 0 ? pa.ceil(tt) : pa(tt), tt = go.offset(tt, (j.V - 1) * 7), j.y = tt.getUTCFullYear(), j.m = tt.getUTCMonth(), j.d = tt.getUTCDate() + (j.w + 6) % 7) : (tt = tu(Qn(j.y, 0, 1)), Zt = tt.getDay(), tt = Zt > 4 || Zt === 0 ? va.ceil(tt) : va(tt), tt = Yi.offset(tt, (j.V - 1) * 7), j.y = tt.getFullYear(), j.m = tt.getMonth(), j.d = tt.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), Zt = "Z" in j ? eu(Qn(j.y, 0, 1)).getUTCDay() : tu(Qn(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (Zt + 5) % 7 : j.w + j.U * 7 - (Zt + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, eu(j)) : tu(j);
    };
  }
  function M(D, T, V, j) {
    for (var Yt = 0, tt = T.length, Zt = V.length, Qt, yr; Yt < tt; ) {
      if (j >= Zt) return -1;
      if (Qt = T.charCodeAt(Yt++), Qt === 37) {
        if (Qt = T.charAt(Yt++), yr = P[Qt in Jp ? T.charAt(Yt++) : Qt], !yr || (j = yr(D, V, j)) < 0) return -1;
      } else if (Qt != V.charCodeAt(j++)) return -1;
    }
    return j;
  }
  function A(D, T, V) {
    var j = u.exec(T.slice(V));
    return j ? (D.p = c.get(j[0].toLowerCase()), V + j[0].length) : -1;
  }
  function k(D, T, V) {
    var j = d.exec(T.slice(V));
    return j ? (D.w = v.get(j[0].toLowerCase()), V + j[0].length) : -1;
  }
  function I(D, T, V) {
    var j = h.exec(T.slice(V));
    return j ? (D.w = f.get(j[0].toLowerCase()), V + j[0].length) : -1;
  }
  function E(D, T, V) {
    var j = y.exec(T.slice(V));
    return j ? (D.m = b.get(j[0].toLowerCase()), V + j[0].length) : -1;
  }
  function $(D, T, V) {
    var j = m.exec(T.slice(V));
    return j ? (D.m = g.get(j[0].toLowerCase()), V + j[0].length) : -1;
  }
  function R(D, T, V) {
    return M(D, t, T, V);
  }
  function z(D, T, V) {
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
  function Bt(D) {
    return i[+(D.getHours() >= 12)];
  }
  function ut(D) {
    return 1 + ~~(D.getMonth() / 3);
  }
  function me(D) {
    return a[D.getUTCDay()];
  }
  function Ut(D) {
    return s[D.getUTCDay()];
  }
  function Re(D) {
    return l[D.getUTCMonth()];
  }
  function Un(D) {
    return o[D.getUTCMonth()];
  }
  function Vn(D) {
    return i[+(D.getUTCHours() >= 12)];
  }
  function Vt(D) {
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
var Jp = { "-": "", _: " ", 0: "0" }, Ot = /^\s*\d+/, gI = /^%/, yI = /[\\^$*+?|[\]().{}]/g;
function Y(e3, t, r) {
  var n = e3 < 0 ? "-" : "", i = (n ? -e3 : e3) + "", s = i.length;
  return n + (s < r ? new Array(r - s + 1).join(t) + i : i);
}
function bI(e3) {
  return e3.replace(yI, "\\$&");
}
function ti(e3) {
  return new RegExp("^(?:" + e3.map(bI).join("|") + ")", "i");
}
function ei(e3) {
  return new Map(e3.map((t, r) => [t.toLowerCase(), r]));
}
function wI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e3.w = +n[0], r + n[0].length) : -1;
}
function xI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e3.u = +n[0], r + n[0].length) : -1;
}
function PI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.U = +n[0], r + n[0].length) : -1;
}
function SI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.V = +n[0], r + n[0].length) : -1;
}
function _I(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.W = +n[0], r + n[0].length) : -1;
}
function Zp(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 4));
  return n ? (e3.y = +n[0], r + n[0].length) : -1;
}
function Qp(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function OI(e3, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e3.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function MI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e3.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function EI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.m = n[0] - 1, r + n[0].length) : -1;
}
function tm(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.d = +n[0], r + n[0].length) : -1;
}
function AI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 3));
  return n ? (e3.m = 0, e3.d = +n[0], r + n[0].length) : -1;
}
function em(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.H = +n[0], r + n[0].length) : -1;
}
function CI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.M = +n[0], r + n[0].length) : -1;
}
function II(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e3.S = +n[0], r + n[0].length) : -1;
}
function kI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 3));
  return n ? (e3.L = +n[0], r + n[0].length) : -1;
}
function jI(e3, t, r) {
  var n = Ot.exec(t.slice(r, r + 6));
  return n ? (e3.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function TI(e3, t, r) {
  var n = gI.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function NI(e3, t, r) {
  var n = Ot.exec(t.slice(r));
  return n ? (e3.Q = +n[0], r + n[0].length) : -1;
}
function DI(e3, t, r) {
  var n = Ot.exec(t.slice(r));
  return n ? (e3.s = +n[0], r + n[0].length) : -1;
}
function rm(e3, t) {
  return Y(e3.getDate(), t, 2);
}
function LI(e3, t) {
  return Y(e3.getHours(), t, 2);
}
function RI(e3, t) {
  return Y(e3.getHours() % 12 || 12, t, 2);
}
function $I(e3, t) {
  return Y(1 + Yi.count(He(e3), e3), t, 3);
}
function gw(e3, t) {
  return Y(e3.getMilliseconds(), t, 3);
}
function zI(e3, t) {
  return gw(e3, t) + "000";
}
function BI(e3, t) {
  return Y(e3.getMonth() + 1, t, 2);
}
function FI(e3, t) {
  return Y(e3.getMinutes(), t, 2);
}
function WI(e3, t) {
  return Y(e3.getSeconds(), t, 2);
}
function qI(e3) {
  var t = e3.getDay();
  return t === 0 ? 7 : t;
}
function KI(e3, t) {
  return Y(yo.count(He(e3) - 1, e3), t, 2);
}
function yw(e3) {
  var t = e3.getDay();
  return t >= 4 || t === 0 ? En(e3) : En.ceil(e3);
}
function UI(e3, t) {
  return e3 = yw(e3), Y(En.count(He(e3), e3) + (He(e3).getDay() === 4), t, 2);
}
function VI(e3) {
  return e3.getDay();
}
function YI(e3, t) {
  return Y(va.count(He(e3) - 1, e3), t, 2);
}
function HI(e3, t) {
  return Y(e3.getFullYear() % 100, t, 2);
}
function GI(e3, t) {
  return e3 = yw(e3), Y(e3.getFullYear() % 100, t, 2);
}
function XI(e3, t) {
  return Y(e3.getFullYear() % 1e4, t, 4);
}
function JI(e3, t) {
  var r = e3.getDay();
  return e3 = r >= 4 || r === 0 ? En(e3) : En.ceil(e3), Y(e3.getFullYear() % 1e4, t, 4);
}
function ZI(e3) {
  var t = e3.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Y(t / 60 | 0, "0", 2) + Y(t % 60, "0", 2);
}
function nm(e3, t) {
  return Y(e3.getUTCDate(), t, 2);
}
function QI(e3, t) {
  return Y(e3.getUTCHours(), t, 2);
}
function tk(e3, t) {
  return Y(e3.getUTCHours() % 12 || 12, t, 2);
}
function ek(e3, t) {
  return Y(1 + go.count(Ge(e3), e3), t, 3);
}
function bw(e3, t) {
  return Y(e3.getUTCMilliseconds(), t, 3);
}
function rk(e3, t) {
  return bw(e3, t) + "000";
}
function nk(e3, t) {
  return Y(e3.getUTCMonth() + 1, t, 2);
}
function ik(e3, t) {
  return Y(e3.getUTCMinutes(), t, 2);
}
function sk(e3, t) {
  return Y(e3.getUTCSeconds(), t, 2);
}
function ak(e3) {
  var t = e3.getUTCDay();
  return t === 0 ? 7 : t;
}
function ok(e3, t) {
  return Y(bo.count(Ge(e3) - 1, e3), t, 2);
}
function ww(e3) {
  var t = e3.getUTCDay();
  return t >= 4 || t === 0 ? An(e3) : An.ceil(e3);
}
function lk(e3, t) {
  return e3 = ww(e3), Y(An.count(Ge(e3), e3) + (Ge(e3).getUTCDay() === 4), t, 2);
}
function uk(e3) {
  return e3.getUTCDay();
}
function ck(e3, t) {
  return Y(pa.count(Ge(e3) - 1, e3), t, 2);
}
function hk(e3, t) {
  return Y(e3.getUTCFullYear() % 100, t, 2);
}
function fk(e3, t) {
  return e3 = ww(e3), Y(e3.getUTCFullYear() % 100, t, 2);
}
function dk(e3, t) {
  return Y(e3.getUTCFullYear() % 1e4, t, 4);
}
function vk(e3, t) {
  var r = e3.getUTCDay();
  return e3 = r >= 4 || r === 0 ? An(e3) : An.ceil(e3), Y(e3.getUTCFullYear() % 1e4, t, 4);
}
function pk() {
  return "+0000";
}
function im() {
  return "%";
}
function sm(e3) {
  return +e3;
}
function am(e3) {
  return Math.floor(+e3 / 1e3);
}
var tn, xw, Pw;
mk({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function mk(e3) {
  return tn = mI(e3), xw = tn.format, tn.parse, Pw = tn.utcFormat, tn.utcParse, tn;
}
function gk(e3) {
  return new Date(e3);
}
function yk(e3) {
  return e3 instanceof Date ? +e3 : +/* @__PURE__ */ new Date(+e3);
}
function Fh(e3, t, r, n, i, s, a, o, l, u) {
  var c = Eh(), h = c.invert, f = c.domain, d = u(".%L"), v = u(":%S"), m = u("%I:%M"), g = u("%I %p"), y = u("%a %d"), b = u("%b %d"), w = u("%B"), x = u("%Y");
  function P(S) {
    return (l(S) < S ? d : o(S) < S ? v : a(S) < S ? m : s(S) < S ? g : n(S) < S ? i(S) < S ? y : b : r(S) < S ? w : x)(S);
  }
  return c.invert = function(S) {
    return new Date(h(S));
  }, c.domain = function(S) {
    return arguments.length ? f(Array.from(S, yk)) : f().map(gk);
  }, c.ticks = function(S) {
    var _ = f();
    return e3(_[0], _[_.length - 1], S ?? 10);
  }, c.tickFormat = function(S, _) {
    return _ == null ? P : u(_);
  }, c.nice = function(S) {
    var _ = f();
    return (!S || typeof S.range != "function") && (S = t(_[0], _[_.length - 1], S ?? 10)), S ? f(lw(_, S)) : c;
  }, c.copy = function() {
    return Vi(c, Fh(e3, t, r, n, i, s, a, o, l, u));
  }, c;
}
function bk() {
  return pe.apply(Fh(vI, pI, He, zh, yo, Yi, Rh, Dh, Cr, xw).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function wk() {
  return pe.apply(Fh(fI, dI, Ge, Bh, bo, go, $h, Lh, Cr, Pw).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function wo() {
  var e3 = 0, t = 1, r, n, i, s, a = Ft, o = false, l;
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
  return u.range = c(Bn), u.rangeRound = c(Mh), u.unknown = function(h) {
    return arguments.length ? (l = h, u) : l;
  }, function(h) {
    return s = h, r = h(e3), n = h(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function gr(e3, t) {
  return t.domain(e3.domain()).interpolator(e3.interpolator()).clamp(e3.clamp()).unknown(e3.unknown());
}
function Sw() {
  var e3 = mr(wo()(Ft));
  return e3.copy = function() {
    return gr(e3, Sw());
  }, tr.apply(e3, arguments);
}
function _w() {
  var e3 = Ih(wo()).domain([1, 10]);
  return e3.copy = function() {
    return gr(e3, _w()).base(e3.base());
  }, tr.apply(e3, arguments);
}
function Ow() {
  var e3 = kh(wo());
  return e3.copy = function() {
    return gr(e3, Ow()).constant(e3.constant());
  }, tr.apply(e3, arguments);
}
function Wh() {
  var e3 = jh(wo());
  return e3.copy = function() {
    return gr(e3, Wh()).exponent(e3.exponent());
  }, tr.apply(e3, arguments);
}
function xk() {
  return Wh.apply(null, arguments).exponent(0.5);
}
function Mw() {
  var e3 = [], t = Ft;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Ki(e3, n, 1) - 1) / (e3.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e3.push(i);
    return e3.sort(fr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e3.map((n, i) => t(i / (e3.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, s) => aC(e3, s / n));
  }, r.copy = function() {
    return Mw(t).domain(e3);
  }, tr.apply(r, arguments);
}
function xo() {
  var e3 = 0, t = 0.5, r = 1, n = 1, i, s, a, o, l, u = Ft, c, h = false, f;
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
    return function(g) {
      var y, b, w;
      return arguments.length ? ([y, b, w] = g, u = TC(m, [y, b, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = v(Bn), d.rangeRound = v(Mh), d.unknown = function(m) {
    return arguments.length ? (f = m, d) : f;
  }, function(m) {
    return c = m, i = m(e3), s = m(t), a = m(r), o = i === s ? 0 : 0.5 / (s - i), l = s === a ? 0 : 0.5 / (a - s), n = s < i ? -1 : 1, d;
  };
}
function Ew() {
  var e3 = mr(xo()(Ft));
  return e3.copy = function() {
    return gr(e3, Ew());
  }, tr.apply(e3, arguments);
}
function Aw() {
  var e3 = Ih(xo()).domain([0.1, 1, 10]);
  return e3.copy = function() {
    return gr(e3, Aw()).base(e3.base());
  }, tr.apply(e3, arguments);
}
function Cw() {
  var e3 = kh(xo());
  return e3.copy = function() {
    return gr(e3, Cw()).constant(e3.constant());
  }, tr.apply(e3, arguments);
}
function qh() {
  var e3 = jh(xo());
  return e3.copy = function() {
    return gr(e3, qh()).exponent(e3.exponent());
  }, tr.apply(e3, arguments);
}
function Pk() {
  return qh.apply(null, arguments).exponent(0.5);
}
const Iw = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: Sh, scaleDiverging: Ew, scaleDivergingLog: Aw, scaleDivergingPow: qh, scaleDivergingSqrt: Pk, scaleDivergingSymlog: Cw, scaleIdentity: ow, scaleImplicit: gc, scaleLinear: aw, scaleLog: uw, scaleOrdinal: Ph, scalePoint: uC, scalePow: Th, scaleQuantile: fw, scaleQuantize: dw, scaleRadial: hw, scaleSequential: Sw, scaleSequentialLog: _w, scaleSequentialPow: Wh, scaleSequentialQuantile: Mw, scaleSequentialSqrt: xk, scaleSequentialSymlog: Ow, scaleSqrt: rI, scaleSymlog: cw, scaleThreshold: vw, scaleTime: bk, scaleUtc: wk, tickFormat: sw }, Symbol.toStringTag, { value: "Module" }));
function Sk(e3) {
  var t = Iw;
  if (e3 in t && typeof t[e3] == "function") return t[e3]();
  var r = "scale".concat(Li(e3));
  if (r in t && typeof t[r] == "function") return t[r]();
}
function om(e3, t, r) {
  if (typeof e3 == "function") return e3.copy().domain(t).range(r);
  if (e3 != null) {
    var n = Sk(e3);
    if (n != null) return n.domain(t).range(r), n;
  }
}
function Kh(e3, t, r, n) {
  if (!(r == null || n == null)) return typeof e3.scale == "function" ? om(e3.scale, r, n) : om(t, r, n);
}
function _k(e3) {
  return "scale".concat(Li(e3));
}
function Ok(e3) {
  return _k(e3) in Iw;
}
var kw = (e3, t, r) => {
  if (e3 != null) {
    var { scale: n, type: i } = e3;
    if (n === "auto") return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string") return Ok(n) ? n : "point";
  }
};
function Mk(e3, t) {
  for (var r = 0, n = e3.length, i = e3[0] < e3[e3.length - 1]; r < n; ) {
    var s = Math.floor((r + n) / 2);
    (i ? e3[s] < t : e3[s] > t) ? r = s + 1 : n = s;
  }
  return r;
}
function jw(e3, t) {
  if (e3) {
    var r = t ?? e3.domain(), n = r.map((s) => {
      var a;
      return (a = e3(s)) !== null && a !== void 0 ? a : 0;
    }), i = e3.range();
    if (!(r.length === 0 || i.length < 2)) return (s) => {
      var a, o, l = Mk(n, s);
      if (l <= 0) return r[0];
      if (l >= r.length) return r[r.length - 1];
      var u = (a = n[l - 1]) !== null && a !== void 0 ? a : 0, c = (o = n[l]) !== null && o !== void 0 ? o : 0;
      return Math.abs(s - u) <= Math.abs(s - c) ? r[l - 1] : r[l];
    };
  }
}
function Ek(e3) {
  if (e3 != null) return "invert" in e3 && typeof e3.invert == "function" ? e3.invert.bind(e3) : jw(e3, void 0);
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
function ma(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lm(Object(r), true).forEach(function(n) {
      Ak(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Ak(e3, t, r) {
  return (t = Ck(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Ck(e3) {
  var t = Ik(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ik(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var xc = [0, "auto"], mt = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0, niceTicks: "auto" }, Tw = (e3, t) => e3.cartesianAxis.xAxis[t], er = (e3, t) => {
  var r = Tw(e3, t);
  return r ?? mt;
}, gt = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: xc, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, niceTicks: "auto", width: zi }, Nw = (e3, t) => e3.cartesianAxis.yAxis[t], rr = (e3, t) => {
  var r = Nw(e3, t);
  return r ?? gt;
}, kk = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" }, Uh = (e3, t) => {
  var r = e3.cartesianAxis.zAxis[t];
  return r ?? kk;
}, Kt = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return er(e3, r);
    case "yAxis":
      return rr(e3, r);
    case "zAxis":
      return Uh(e3, r);
    case "angleAxis":
      return ph(e3, r);
    case "radiusAxis":
      return mh(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, jk = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return er(e3, r);
    case "yAxis":
      return rr(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Hi = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return er(e3, r);
    case "yAxis":
      return rr(e3, r);
    case "angleAxis":
      return ph(e3, r);
    case "radiusAxis":
      return mh(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Dw = (e3) => e3.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e3.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Lw(e3, t) {
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
var Vh = (e3) => e3.graphicalItems.cartesianItems, Tk = O([St, fo], Lw), Rw = (e3, t, r) => e3.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === true ? true : !n.hide), Fn = O([Vh, Kt, Tk], Rw, { memoizeOptions: { resultEqualityCheck: po } }), $w = O([Fn], (e3) => e3.filter((t) => t.type === "area" || t.type === "bar").filter(bh)), zw = (e3) => e3.filter((t) => !("stackId" in t) || t.stackId === void 0), Nk = O([Fn], zw), Bw = (e3) => e3.map((t) => t.data).filter(Boolean).flat(1), Dk = O([Fn], (e3) => e3.some((t) => !t.data)), Fw = O([Fn], Bw, { memoizeOptions: { resultEqualityCheck: po } }), Ww = (e3, t) => {
  var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
  return e3.length > 0 ? e3 : r.slice(n, i + 1);
}, Yh = O([Fw, qi], Ww), Lk = (e3, t, r) => (t == null ? void 0 : t.dataKey) != null ? e3.map((n) => ({ value: ht(n, t.dataKey) })) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e3.map((i) => ({ value: ht(i, n) }))) : e3.map((n) => ({ value: n })), qw = (e3, t, r, n, i, s) => {
  var { chartData: a = [], dataStartIndex: o, dataEndIndex: l } = n, u = Lk(e3, t, r);
  if (i && (t == null ? void 0 : t.dataKey) != null && s.length > 0) {
    var c = a.slice(o, l + 1), h = c.map((f) => ({ value: ht(f, t.dataKey) })).filter((f) => f.value != null);
    return [...h, ...u];
  }
  return u;
}, Gi = O([Yh, Kt, Fn, qi, Dk, Fw], qw);
function gn(e3) {
  if (Te(e3) || e3 instanceof Date) {
    var t = Number(e3);
    if (q(t)) return t;
  }
}
function um(e3) {
  if (Array.isArray(e3)) {
    var t = [gn(e3[0]), gn(e3[1])];
    return ke(t) ? t : void 0;
  }
  var r = gn(e3);
  if (r != null) return [r, r];
}
function De(e3) {
  return e3.map(gn).filter(Ht);
}
function Rk(e3, t) {
  var r = gn(e3), n = gn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var $k = O([Gi], (e3) => e3 == null ? void 0 : e3.map((t) => t.value).sort(Rk));
function Kw(e3, t) {
  switch (e3) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return false;
  }
}
function zk(e3, t, r) {
  if (!r) return [];
  if (!r.length) return [];
  var n;
  if (typeof t == "number" && !fe(t)) n = t;
  else if (Array.isArray(t)) {
    var i = De(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : De(r.flatMap((s) => {
    var a = ht(e3, s.dataKey), o, l;
    if (Array.isArray(a) ? [o, l] = a : o = l = a, !(!q(o) || !q(l))) return [n - o, n + l];
  }));
}
var xt = (e3) => {
  var t = _t(e3), r = zn(e3);
  return Hi(e3, t, r);
}, Cn = O([xt], (e3) => e3 == null ? void 0 : e3.dataKey), Bk = O([$w, qi, xt], Xb), Uw = (e3, t, r, n) => {
  var i = {}, s = t.reduce((a, o) => {
    if (o.stackId == null) return a;
    var l = a[o.stackId];
    return l == null && (l = []), l.push(o), a[o.stackId] = l, a;
  }, i);
  return Object.fromEntries(Object.entries(s).map((a) => {
    var [o, l] = a, u = n ? [...l].reverse() : l, c = u.map(yh);
    return [o, { stackedData: $O(e3, c, r), graphicalItems: u }];
  }));
}, Vw = O([Bk, $w, lo, qb], Uw), Yw = (e3, t, r, n) => {
  var { dataStartIndex: i, dataEndIndex: s } = t;
  if (n == null && r !== "zAxis") {
    var a = WO(e3, i, s);
    if (!(a != null && a[0] === 0 && a[1] === 0)) return a;
  }
}, Fk = O([Kt], (e3) => e3.allowDataOverflow), Hh = (e3) => {
  var t;
  if (e3 == null || !("domain" in e3)) return xc;
  if (e3.domain != null) return e3.domain;
  if ("ticks" in e3 && e3.ticks != null) {
    if (e3.type === "number") {
      var r = De(e3.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e3.type === "category") return e3.ticks.map(String);
  }
  return (t = e3 == null ? void 0 : e3.domain) !== null && t !== void 0 ? t : xc;
}, Hw = O([Kt], Hh), Gw = O([Hw, Fk], jb), Wk = O([Vw, Se, St, Gw], Yw, { memoizeOptions: { resultEqualityCheck: vo } }), Gh = (e3) => e3.errorBars, qk = (e3, t, r) => e3.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Kw(r, n)), ga = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var s = i.flat(), a = Math.min(...s), o = Math.max(...s);
    return [a, o];
  }
}, Xw = function(t, r, n, i, s) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], o, l;
  if (n.length > 0 && n.forEach((u) => {
    var c, h = u.data != null ? [...u.data] : a, f = (c = i[u.id]) === null || c === void 0 ? void 0 : c.filter((d) => Kw(s, d));
    h.forEach((d) => {
      var v, m = ht(d, (v = r.dataKey) !== null && v !== void 0 ? v : u.dataKey), g = zk(d, m, f);
      if (g.length >= 2) {
        var y = Math.min(...g), b = Math.max(...g);
        (o == null || y < o) && (o = y), (l == null || b > l) && (l = b);
      }
      var w = um(m);
      w != null && (o = o == null ? w[0] : Math.min(o, w[0]), l = l == null ? w[1] : Math.max(l, w[1]));
    });
  }), (r == null ? void 0 : r.dataKey) != null && n.length === 0 && t.forEach((u) => {
    var c = um(ht(u, r.dataKey));
    c != null && (o = o == null ? c[0] : Math.min(o, c[0]), l = l == null ? c[1] : Math.max(l, c[1]));
  }), q(o) && q(l)) return [o, l];
}, Kk = O([Yh, Kt, Nk, Gh, St, jA], Xw, { memoizeOptions: { resultEqualityCheck: vo } });
function Uk(e3) {
  var { value: t } = e3;
  if (Te(t) || t instanceof Date) return t;
}
var Vk = (e3, t, r) => {
  var n = e3.map(Uk).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && o0(n)) ? kb(0, e3.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Jw = (e3) => e3.referenceElements.dots, Wn = (e3, t, r) => e3.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), Yk = O([Jw, St, fo], Wn), Zw = (e3) => e3.referenceElements.areas, Hk = O([Zw, St, fo], Wn), Qw = (e3) => e3.referenceElements.lines, Gk = O([Qw, St, fo], Wn), tx = (e3, t) => {
  if (e3 != null) {
    var r = De(e3.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, Xk = O(Yk, St, tx), ex = (e3, t) => {
  if (e3 != null) {
    var r = De(e3.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, Jk = O([Hk, St], ex);
function Zk(e3) {
  var t;
  if (e3.x != null) return De([e3.x]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : De(r);
}
function Qk(e3) {
  var t;
  if (e3.y != null) return De([e3.y]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : De(r);
}
var rx = (e3, t) => {
  if (e3 != null) {
    var r = e3.flatMap((n) => t === "xAxis" ? Zk(n) : Qk(n));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, tj = O([Gk, St], rx), ej = O(Xk, tj, Jk, (e3, t, r) => ga(e3, r, t)), nx = (e3, t, r, n, i, s, a, o) => {
  if (r != null) return r;
  var l = a === "vertical" && o === "xAxis" || a === "horizontal" && o === "yAxis", u = l ? ga(n, s, i) : ga(s, i);
  return NA(t, u, e3.allowDataOverflow);
}, rj = O([Kt, Hw, Gw, Wk, Kk, ej, rt, St], nx, { memoizeOptions: { resultEqualityCheck: vo } }), nj = [0, 1], ix = (e3, t, r, n, i, s, a) => {
  if (!((e3 == null || r == null || r.length === 0) && a === void 0)) {
    var { dataKey: o, type: l } = e3, u = Pe(t, s);
    if (u && o == null) {
      var c;
      return kb(0, (c = r == null ? void 0 : r.length) !== null && c !== void 0 ? c : 0);
    }
    return l === "category" ? Vk(n, e3, u) : i === "expand" && !u ? nj : a;
  }
}, Xh = O([Kt, rt, Yh, Gi, lo, St, rj], ix), qn = O([Kt, Dw, fh], kw), sx = (e3, t, r) => {
  var { niceTicks: n } = t;
  if (n !== "none") {
    var i = Hh(t), s = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && ke(e3)) {
      if (s) return bp(e3, t.tickCount, t.allowDecimals, n);
      if (t.type === "number") return wp(e3, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (s && ke(e3)) return bp(e3, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && ke(e3)) return wp(e3, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Jh = O([Xh, Hi, qn], sx), ax = (e3, t, r, n) => {
  if (n !== "angleAxis" && (e3 == null ? void 0 : e3.type) === "number" && ke(t) && Array.isArray(r) && r.length > 0) {
    var i, s, a = t[0], o = (i = r[0]) !== null && i !== void 0 ? i : 0, l = t[1], u = (s = r[r.length - 1]) !== null && s !== void 0 ? s : 0;
    return [Math.min(a, o), Math.max(l, u)];
  }
  return t;
}, ij = O([Kt, Xh, Jh, St], ax), sj = O(Gi, Kt, (e3, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(De(e3.map((h) => h.value))).sort((h, f) => h - f), i = n[0], s = n[n.length - 1];
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
}), ox = O(sj, rt, zA, Tt, (e3, t, r, n, i) => i, (e3, t, r, n, i) => {
  if (!q(e3)) return 0;
  var s = t === "vertical" ? n.height : n.width;
  if (i === "gap") return e3 * s / 2;
  if (i === "no-gap") {
    var a = vr(r, e3 * s), o = e3 * s / 2;
    return o - a - (o - a) / s * a;
  }
  return 0;
}), aj = (e3, t, r) => {
  var n = er(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : ox(e3, "xAxis", t, r, n.padding);
}, oj = (e3, t, r) => {
  var n = rr(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : ox(e3, "yAxis", t, r, n.padding);
}, lj = O(er, aj, (e3, t) => {
  var r, n;
  if (e3 == null) return { left: 0, right: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { left: t, right: t } : { left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t, right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t };
}), uj = O(rr, oj, (e3, t) => {
  var r, n;
  if (e3 == null) return { top: 0, bottom: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { top: t, bottom: t } : { top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t, bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t };
}), cj = O([Tt, lj, eo, to, (e3, t, r) => r], (e3, t, r, n, i) => {
  var { padding: s } = n;
  return i ? [s.left, r.width - s.right] : [e3.left + t.left, e3.left + e3.width - t.right];
}), hj = O([Tt, rt, uj, eo, to, (e3, t, r) => r], (e3, t, r, n, i, s) => {
  var { padding: a } = i;
  return s ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e3.top + e3.height - r.bottom, e3.top + r.top] : [e3.top + r.top, e3.top + e3.height - r.bottom];
}), Xi = (e3, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return cj(e3, r, n);
    case "yAxis":
      return hj(e3, r, n);
    case "zAxis":
      return (i = Uh(e3, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Yb(e3);
    case "radiusAxis":
      return Hb(e3, r);
    default:
      return;
  }
}, lx = O([Kt, Xi], uo), fj = O([qn, ij], HA), Zh = O([Kt, qn, fj, lx], Kh), ux = (e3, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var { type: i, scale: s } = r, a = Pe(e3, n);
    if (a && (i === "number" || s !== "auto")) return t.map((o) => o.value);
  }
}, Qh = O([rt, Gi, Hi, St], ux), Po = O([Zh], wh);
O([Zh], Ek);
O([Zh, $k], jw);
O([Fn, Gh, St], qk);
function cx(e3, t) {
  return e3.id < t.id ? -1 : e3.id > t.id ? 1 : 0;
}
var So = (e3, t) => t, _o = (e3, t, r) => r, dj = O(Za, So, _o, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(cx)), vj = O(Qa, So, _o, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(cx)), hx = (e3, t) => ({ width: e3.width, height: t.height }), pj = (e3, t) => {
  var r = typeof t.width == "number" ? t.width : zi;
  return { width: r, height: e3.height };
}, mj = O(Tt, er, hx), gj = (e3, t, r) => {
  switch (t) {
    case "top":
      return e3.top;
    case "bottom":
      return r - e3.bottom;
    default:
      return 0;
  }
}, yj = (e3, t, r) => {
  switch (t) {
    case "left":
      return e3.left;
    case "right":
      return r - e3.right;
    default:
      return 0;
  }
}, bj = O(Qe, Tt, dj, So, _o, (e3, t, r, n, i) => {
  var s = {}, a;
  return r.forEach((o) => {
    var l = hx(t, o);
    a == null && (a = gj(t, n, e3));
    var u = n === "top" && !i || n === "bottom" && i;
    s[o.id] = a - Number(u) * l.height, a += (u ? -1 : 1) * l.height;
  }), s;
}), wj = O(Ze, Tt, vj, So, _o, (e3, t, r, n, i) => {
  var s = {}, a;
  return r.forEach((o) => {
    var l = pj(t, o);
    a == null && (a = yj(t, n, e3));
    var u = n === "left" && !i || n === "right" && i;
    s[o.id] = a - Number(u) * l.width, a += (u ? -1 : 1) * l.width;
  }), s;
}), xj = (e3, t) => {
  var r = er(e3, t);
  if (r != null) return bj(e3, r.orientation, r.mirror);
}, Pj = O([Tt, er, xj, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: e3.left, y: 0 } : { x: e3.left, y: i };
  }
}), Sj = (e3, t) => {
  var r = rr(e3, t);
  if (r != null) return wj(e3, r.orientation, r.mirror);
}, _j = O([Tt, rr, Sj, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: 0, y: e3.top } : { x: i, y: e3.top };
  }
}), Oj = O(Tt, rr, (e3, t) => {
  var r = typeof t.width == "number" ? t.width : zi;
  return { width: r, height: e3.height };
}), fx = (e3, t, r, n) => {
  if (r != null) {
    var { allowDuplicatedCategory: i, type: s, dataKey: a } = r, o = Pe(e3, n), l = t.map((c) => c.value), u = l.filter((c) => c != null);
    if (a && o && s === "category" && i && o0(u)) return l;
  }
}, tf = O([rt, Gi, Kt, St], fx), cm = O([rt, jk, qn, Po, tf, Qh, Xi, Jh, St], (e3, t, r, n, i, s, a, o, l) => {
  if (t != null) {
    var u = Pe(e3, l);
    return { angle: t.angle, interval: t.interval, minTickGap: t.minTickGap, orientation: t.orientation, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, axisType: l, categoricalDomain: s, duplicateDomain: i, isCategorical: u, niceTicks: o, range: a, realScaleType: r, scale: n };
  }
}), Mj = (e3, t, r, n, i, s, a, o, l) => {
  if (!(t == null || n == null)) {
    var u = Pe(e3, l), { type: c, ticks: h, tickCount: f } = t, d = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = c === "category" && n.bandwidth ? n.bandwidth() / d : 0;
    v = l === "angleAxis" && s != null && s.length >= 2 ? ue(s[0] - s[1]) * 2 * v : v;
    var m = h || i;
    return m ? m.map((g, y) => {
      var b = a ? a.indexOf(g) : g, w = n.map(b);
      return q(w) ? { index: y, coordinate: w + v, value: g, offset: v } : null;
    }).filter(Ht) : u && o ? o.map((g, y) => {
      var b = n.map(g);
      return q(b) ? { coordinate: b + v, value: g, index: y, offset: v } : null;
    }).filter(Ht) : n.ticks ? n.ticks(f).map((g, y) => {
      var b = n.map(g);
      return q(b) ? { coordinate: b + v, value: g, index: y, offset: v } : null;
    }).filter(Ht) : n.domain().map((g, y) => {
      var b = n.map(g);
      return q(b) ? { coordinate: b + v, value: a ? a[g] : g, index: y, offset: v } : null;
    }).filter(Ht);
  }
}, dx = O([rt, Hi, qn, Po, Jh, Xi, tf, Qh, St], Mj), Ej = (e3, t, r, n, i, s, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var o = Pe(e3, a), { tickCount: l } = t, u = 0;
    return u = a === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? ue(n[0] - n[1]) * 2 * u : u, o && s ? s.map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: c, index: h, offset: u } : null;
    }).filter(Ht) : r.ticks ? r.ticks(l).map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: c, index: h, offset: u } : null;
    }).filter(Ht) : r.domain().map((c, h) => {
      var f = r.map(c);
      return q(f) ? { coordinate: f + u, value: i ? i[c] : c, index: h, offset: u } : null;
    }).filter(Ht);
  }
}, Oo = O([rt, Hi, Po, Xi, tf, Qh, St], Ej), Mo = O(Kt, Po, (e3, t) => {
  if (!(e3 == null || t == null)) return ma(ma({}, e3), {}, { scale: t });
}), Aj = O([Kt, qn, Xh, lx], Kh), Cj = O([Aj], wh);
O((e3, t, r) => Uh(e3, r), Cj, (e3, t) => {
  if (!(e3 == null || t == null)) return ma(ma({}, e3), {}, { scale: t });
});
var Ij = O([rt, Za, Qa], (e3, t, r) => {
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
}), kj = (e3, t, r) => {
  var n;
  return (n = e3.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
O([kj], (e3) => {
  if (!(!e3 || e3.length === 0)) return (t) => {
    var r, n = 1 / 0, i = e3[0];
    for (var s of e3) {
      var a = Math.abs(s.coordinate - t);
      a < n && (n = a, i = s);
    }
    return (r = i) === null || r === void 0 ? void 0 : r.value;
  };
});
var vx = (e3) => e3.options.defaultTooltipEventType, px = (e3) => e3.options.validateTooltipEventTypes;
function mx(e3, t, r) {
  if (e3 == null) return t;
  var n = e3 ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Ji(e3, t) {
  var r = vx(e3), n = px(e3);
  return mx(t, r, n);
}
function jj(e3) {
  return B((t) => Ji(t, e3));
}
var gx = (e3, t) => {
  var r, n = Number(t);
  if (!(fe(n) || t == null)) return n >= 0 ? e3 == null || (r = e3[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, Tj = (e3) => e3.tooltip.settings, ur = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 }, Nj = { itemInteraction: { click: ur, hover: ur }, axisInteraction: { click: ur, hover: ur }, keyboardInteraction: ur, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } }, yx = $t({ name: "tooltip", initialState: Nj, reducers: { addTooltipEntrySettings: { reducer(e3, t) {
  e3.tooltipItemPayloads.push(t.payload);
}, prepare: it() }, replaceTooltipEntrySettings: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = ce(e3).tooltipItemPayloads.indexOf(r);
  i > -1 && (e3.tooltipItemPayloads[i] = n);
}, prepare: it() }, removeTooltipEntrySettings: { reducer(e3, t) {
  var r = ce(e3).tooltipItemPayloads.indexOf(t.payload);
  r > -1 && e3.tooltipItemPayloads.splice(r, 1);
}, prepare: it() }, setTooltipSettingsState(e3, t) {
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
} } }), { addTooltipEntrySettings: Dj, replaceTooltipEntrySettings: Lj, removeTooltipEntrySettings: Rj, setTooltipSettingsState: $j, setActiveMouseOverItemIndex: ef, mouseLeaveItem: ZW, mouseLeaveChart: bx, setActiveClickItemIndex: zj, setMouseOverAxisIndex: wx, setMouseClickAxisIndex: Bj, setSyncInteraction: oi, setKeyboardInteraction: ya } = yx.actions, Fj = yx.reducer;
function hm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fs(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), true).forEach(function(n) {
      Wj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Wj(e3, t, r) {
  return (t = qj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function qj(e3) {
  var t = Kj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Kj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Uj(e3, t, r) {
  return t === "axis" ? r === "click" ? e3.axisInteraction.click : e3.axisInteraction.hover : r === "click" ? e3.itemInteraction.click : e3.itemInteraction.hover;
}
function Vj(e3) {
  return e3.index != null;
}
var xx = (e3, t, r, n) => {
  if (t == null) return ur;
  var i = Uj(e3, t, r);
  if (i == null) return ur;
  if (i.active) return i;
  if (e3.keyboardInteraction.active) return e3.keyboardInteraction;
  if (e3.syncInteraction.active && e3.syncInteraction.index != null) return e3.syncInteraction;
  var s = e3.settings.active === true;
  if (Vj(i)) {
    if (s) return fs(fs({}, i), {}, { active: true });
  } else if (n != null) return { active: true, coordinate: void 0, dataKey: void 0, index: n, graphicalItemId: void 0 };
  return fs(fs({}, ur), {}, { coordinate: i.coordinate });
};
function Yj(e3) {
  if (typeof e3 == "number") return Number.isFinite(e3) ? e3 : void 0;
  if (e3 instanceof Date) {
    var t = e3.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e3);
  return Number.isFinite(r) ? r : void 0;
}
function Hj(e3, t) {
  var r = Yj(e3), n = t[0], i = t[1];
  if (r === void 0) return false;
  var s = Math.min(n, i), a = Math.max(n, i);
  return r >= s && r <= a;
}
function Gj(e3, t, r) {
  if (r == null || t == null) return true;
  var n = ht(e3, t);
  return n == null || !ke(r) ? true : Hj(n, r);
}
var ci = (e3, t, r, n) => {
  var i = e3 == null ? void 0 : e3.index;
  if (i == null) return null;
  var s = Number(i);
  if (!q(s)) return i;
  var a = 0, o = 1 / 0;
  t.length > 0 && (o = t.length - 1);
  var l = Math.max(a, Math.min(s, o)), u = t[l];
  return u == null || Gj(u, r, n) ? String(l) : null;
}, Px = (e3, t, r, n, i, s, a) => {
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
}, Sx = (e3, t, r, n) => {
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
}, _x = (e3) => e3.options.tooltipPayloadSearcher, Kn = (e3) => e3.tooltip;
function fm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fm(Object(r), true).forEach(function(n) {
      Xj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Xj(e3, t, r) {
  return (t = Jj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Jj(e3) {
  var t = Zj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Zj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Qj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
}
function tT(e3) {
  if (typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean") return e3;
}
function eT(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
  if (typeof e3 == "function") return (t) => e3(t);
}
function vm(e3) {
  if (typeof e3 == "string") return e3;
}
function rT(e3) {
  if (!(e3 == null || typeof e3 != "object")) {
    var t = "name" in e3 ? Qj(e3.name) : void 0, r = "unit" in e3 ? tT(e3.unit) : void 0, n = "dataKey" in e3 ? eT(e3.dataKey) : void 0, i = "payload" in e3 ? e3.payload : void 0, s = "color" in e3 ? vm(e3.color) : void 0, a = "fill" in e3 ? vm(e3.fill) : void 0;
    return { name: t, unit: r, dataKey: n, payload: i, color: s, fill: a };
  }
}
function nT(e3, t) {
  return e3 ?? t;
}
var Ox = (e3, t, r, n, i, s, a) => {
  if (!(t == null || s == null)) {
    var { chartData: o, computedData: l, dataStartIndex: u, dataEndIndex: c } = r, h = [];
    return e3.reduce((f, d) => {
      var v, { dataDefinedOnItem: m, settings: g } = d, y = nT(m, o), b = Array.isArray(y) ? sb(y, u, c) : y, w = (v = g == null ? void 0 : g.dataKey) !== null && v !== void 0 ? v : n, x = g == null ? void 0 : g.nameKey, P;
      if (n && Array.isArray(b) && !Array.isArray(b[0]) && a === "axis" ? P = l0(b, n, i) : P = s(b, t, l, x), Array.isArray(P)) P.forEach((_) => {
        var M, A, k = rT(_), I = k == null ? void 0 : k.name, E = k == null ? void 0 : k.dataKey, $ = k == null ? void 0 : k.payload, R = dm(dm({}, g), {}, { name: I, unit: k == null ? void 0 : k.unit, color: (M = k == null ? void 0 : k.color) !== null && M !== void 0 ? M : g == null ? void 0 : g.color, fill: (A = k == null ? void 0 : k.fill) !== null && A !== void 0 ? A : g == null ? void 0 : g.fill });
        f.push(uv({ tooltipEntrySettings: R, dataKey: E, payload: $, value: ht($, E), name: I == null ? void 0 : String(I) }));
      });
      else {
        var S;
        f.push(uv({ tooltipEntrySettings: g, dataKey: w, payload: P, value: ht(P, w), name: (S = ht(P, x)) !== null && S !== void 0 ? S : g == null ? void 0 : g.name }));
      }
      return f;
    }, h);
  }
}, rf = O([xt, Dw, fh], kw), iT = O([(e3) => e3.graphicalItems.cartesianItems, (e3) => e3.graphicalItems.polarItems], (e3, t) => [...e3, ...t]), sT = O([_t, zn], Lw), Jr = O([iT, xt, sT], Rw, { memoizeOptions: { resultEqualityCheck: po } }), aT = O([Jr], (e3) => e3.filter(bh)), Mx = O([Jr], Bw, { memoizeOptions: { resultEqualityCheck: po } }), oT = O([Jr], (e3) => e3.some((t) => !t.data)), Wr = O([Mx, Se], Ww), lT = O([aT, Se, xt], Xb), nf = O([Wr, xt, Jr, Se, oT, Mx], qw), Ex = O([xt], Hh), uT = O([xt], (e3) => e3.allowDataOverflow), Ax = O([Ex, uT], jb), cT = O([Jr], (e3) => e3.filter(bh)), hT = O([lT, cT, lo, qb], Uw), fT = O([hT, Se, _t, Ax], Yw), dT = O([Jr], zw), vT = O([Wr, xt, dT, Gh, _t, TA], Xw, { memoizeOptions: { resultEqualityCheck: vo } }), pT = O([Jw, _t, zn], Wn), mT = O([pT, _t], tx), gT = O([Zw, _t, zn], Wn), yT = O([gT, _t], ex), bT = O([Qw, _t, zn], Wn), wT = O([bT, _t], rx), xT = O([mT, wT, yT], ga), PT = O([xt, Ex, Ax, fT, vT, xT, rt, _t], nx), In = O([xt, rt, Wr, nf, lo, _t, PT], ix), ST = O([In, xt, rf], sx), _T = O([xt, In, ST, _t], ax), Cx = (e3) => {
  var t = _t(e3), r = zn(e3), n = false;
  return Xi(e3, t, r, n);
}, Ix = O([xt, Cx], uo), OT = O([xt, rf, _T, Ix], Kh), kx = O([OT], wh), MT = O([rt, nf, xt, _t], fx), ET = O([rt, nf, xt, _t], ux), AT = (e3, t, r, n, i, s, a, o) => {
  if (t) {
    var { type: l } = t, u = Pe(e3, o);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, h = l === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return h = o === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? ue(i[0] - i[1]) * 2 * h : h, u && a ? a.map((f, d) => {
        var v = n.map(f);
        return q(v) ? { coordinate: v + h, value: f, index: d, offset: h } : null;
      }).filter(Ht) : n.domain().map((f, d) => {
        var v = n.map(f);
        return q(v) ? { coordinate: v + h, value: s ? s[f] : f, index: d, offset: h } : null;
      }).filter(Ht);
    }
  }
}, nr = O([rt, xt, rf, kx, Cx, MT, ET, _t], AT), sf = O([vx, px, Tj], (e3, t, r) => mx(r.shared, e3, t)), jx = (e3) => e3.tooltip.settings.trigger, af = (e3) => e3.tooltip.settings.defaultIndex, Zi = O([Kn, sf, jx, af], xx), Ai = O([Zi, Wr, Cn, In], ci), Tx = O([nr, Ai], gx), CT = O([Zi], (e3) => {
  if (e3) return e3.dataKey;
}), IT = O([Zi], (e3) => {
  if (e3) return e3.graphicalItemId;
}), Nx = O([Kn, sf, jx, af], Sx), kT = O([Ze, Qe, rt, Tt, nr, af, Nx], Px), jT = O([Zi, kT], (e3, t) => e3 != null && e3.coordinate ? e3.coordinate : t), TT = O([Zi], (e3) => {
  var t;
  return (t = e3 == null ? void 0 : e3.active) !== null && t !== void 0 ? t : false;
}), NT = O([Nx, Ai, Se, Cn, Tx, _x, sf], Ox), DT = O([NT], (e3) => {
  if (e3 != null) {
    var t = e3.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function pm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), true).forEach(function(n) {
      LT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function LT(e3, t, r) {
  return (t = RT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function RT(e3) {
  var t = $T(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $T(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var zT = () => B(xt), BT = () => {
  var e3 = zT(), t = B(nr), r = B(kx);
  return _n(!e3 || !r ? void 0 : mm(mm({}, e3), {}, { scale: r }), t);
};
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
function en(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), true).forEach(function(n) {
      FT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function FT(e3, t, r) {
  return (t = WT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function WT(e3) {
  var t = qT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var KT = (e3, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e3 === "horizontal") return { x: i.coordinate, y: n.relativeY };
    if (e3 === "vertical") return { x: n.relativeX, y: i.coordinate };
  }
  return { x: 0, y: 0 };
}, UT = (e3, t, r, n) => {
  var i = t.find((u) => u && u.index === r);
  if (i) {
    if (e3 === "centric") {
      var s = i.coordinate, { radius: a } = n;
      return en(en(en({}, n), It(n.cx, n.cy, a, s)), {}, { angle: s, radius: a });
    }
    var o = i.coordinate, { angle: l } = n;
    return en(en(en({}, n), It(n.cx, n.cy, o, l)), {}, { angle: l, radius: o });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function VT(e3, t) {
  var { relativeX: r, relativeY: n } = e3;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var Dx = (e3, t, r, n, i) => {
  var s, a = (s = t == null ? void 0 : t.length) !== null && s !== void 0 ? s : 0;
  if (a <= 1 || e3 == null) return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var o = 0; o < a; o++) {
    var l, u, c, h, f, d = o > 0 ? (l = r[o - 1]) === null || l === void 0 ? void 0 : l.coordinate : (u = r[a - 1]) === null || u === void 0 ? void 0 : u.coordinate, v = (c = r[o]) === null || c === void 0 ? void 0 : c.coordinate, m = o >= a - 1 ? (h = r[0]) === null || h === void 0 ? void 0 : h.coordinate : (f = r[o + 1]) === null || f === void 0 ? void 0 : f.coordinate, g = void 0;
    if (!(d == null || v == null || m == null)) if (ue(v - d) !== ue(m - v)) {
      var y = [];
      if (ue(m - v) === ue(i[1] - i[0])) {
        g = m;
        var b = v + i[1] - i[0];
        y[0] = Math.min(b, (b + d) / 2), y[1] = Math.max(b, (b + d) / 2);
      } else {
        g = d;
        var w = m + i[1] - i[0];
        y[0] = Math.min(v, (w + v) / 2), y[1] = Math.max(v, (w + v) / 2);
      }
      var x = [Math.min(v, (g + v) / 2), Math.max(v, (g + v) / 2)];
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
    var k = t[A];
    if (k != null) {
      var I = t[A + 1], E = t[A - 1];
      if (A === 0 && I != null && e3 <= (k.coordinate + I.coordinate) / 2 || A === a - 1 && E != null && e3 > (k.coordinate + E.coordinate) / 2 || A > 0 && A < a - 1 && E != null && I != null && e3 > (k.coordinate + E.coordinate) / 2 && e3 <= (k.coordinate + I.coordinate) / 2) return k.index;
    }
  }
  return -1;
}, Lx = () => B(fh), of = (e3, t) => t, Rx = (e3, t, r) => r, lf = (e3, t, r, n) => n, YT = O(nr, (e3) => Fa(e3, (t) => t.coordinate)), uf = O([Kn, of, Rx, lf], xx), cf = O([uf, Wr, Cn, In], ci), HT = (e3, t, r) => {
  if (t != null) {
    var n = Kn(e3);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, $x = O([Kn, of, Rx, lf], Sx), ba = O([Ze, Qe, rt, Tt, nr, lf, $x], Px), GT = O([uf, ba], (e3, t) => {
  var r;
  return (r = e3.coordinate) !== null && r !== void 0 ? r : t;
}), zx = O([nr, cf], gx), XT = O([$x, cf, Se, Cn, zx, _x, of], Ox), JT = O([uf, cf], (e3, t) => ({ isActive: e3.active && t != null, activeIndex: t })), ZT = (e3, t, r, n, i, s, a) => {
  if (!(!e3 || !r || !n || !i) && VT(e3, a)) {
    var o = qO(e3, t), l = Dx(o, s, i, r, n), u = KT(t, i, l, e3);
    return { activeIndex: String(l), activeCoordinate: u };
  }
}, QT = (e3, t, r, n, i, s, a) => {
  if (!(!e3 || !n || !i || !s || !r)) {
    var o = PA(e3, r);
    if (o) {
      var l = KO(o, t), u = Dx(l, a, s, n, i), c = UT(t, s, u, o);
      return { activeIndex: String(u), activeCoordinate: c };
    }
  }
}, tN = (e3, t, r, n, i, s, a, o) => {
  if (!(!e3 || !t || !n || !i || !s)) return t === "horizontal" || t === "vertical" ? ZT(e3, t, n, i, s, a, o) : QT(e3, t, r, n, i, s, a);
}, eN = O((e3) => e3.zIndex.zIndexMap, (e3, t) => t, (e3, t, r) => r, (e3, t, r) => {
  if (t != null) {
    var n = e3[t];
    if (n != null) return r ? n.panoramaElement : n.element;
  }
}), rN = O((e3) => e3.zIndex.zIndexMap, (e3) => {
  var t = Object.keys(e3).map((n) => parseInt(n, 10)).concat(Object.values(Rt)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, { memoizeOptions: { resultEqualityCheck: YA } });
function ym(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), true).forEach(function(n) {
      nN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function nN(e3, t, r) {
  return (t = iN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function iN(e3) {
  var t = sN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var aN = {}, oN = { zIndexMap: Object.values(Rt).reduce((e3, t) => bm(bm({}, e3), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), aN) }, lN = new Set(Object.values(Rt));
function uN(e3) {
  return lN.has(e3);
}
var Bx = $t({ name: "zIndex", initialState: oN, reducers: { registerZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] ? e3.zIndexMap[r].consumers += 1 : e3.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: it() }, unregisterZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (e3.zIndexMap[r].consumers -= 1, e3.zIndexMap[r].consumers <= 0 && !uN(r) && delete e3.zIndexMap[r]);
}, prepare: it() }, registerZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r, element: n, isPanorama: i } = t.payload;
  e3.zIndexMap[r] ? i ? e3.zIndexMap[r].panoramaElement = n : e3.zIndexMap[r].element = n : e3.zIndexMap[r] = { consumers: 0, element: i ? void 0 : n, panoramaElement: i ? n : void 0 };
}, prepare: it() }, unregisterZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (t.payload.isPanorama ? e3.zIndexMap[r].panoramaElement = void 0 : e3.zIndexMap[r].element = void 0);
}, prepare: it() } } }), { registerZIndexPortal: cN, unregisterZIndexPortal: ru, registerZIndexPortalElement: hN, unregisterZIndexPortalElement: fN } = Bx.actions, dN = Bx.reducer;
function Le(e3) {
  var { zIndex: t, children: r } = e3, n = SM(), i = n && t !== void 0 && t !== 0, s = zt(), a = p.useRef(void 0), o = p.useRef(/* @__PURE__ */ new Set()), l = lt(), u = B((h) => eN(h, t, s));
  if (p.useLayoutEffect(() => {
    if (!i) {
      var h = o.current;
      h.forEach((d) => {
        l(ru({ zIndex: d }));
      }), h.clear(), a.current = void 0;
      return;
    }
    if (o.current.has(t) || (l(cN({ zIndex: t })), o.current.add(t)), u) {
      a.current = u;
      var f = o.current;
      f.forEach((d) => {
        d !== t && (l(ru({ zIndex: d })), f.delete(d));
      });
    }
  }, [l, t, i, u]), p.useLayoutEffect(() => {
    var h = o.current;
    return () => {
      h.forEach((f) => {
        l(ru({ zIndex: f }));
      }), h.clear();
    };
  }, [l]), !i) return r;
  var c = u ?? a.current;
  return c ? By.createPortal(r, c) : null;
}
function Pc() {
  return Pc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Pc.apply(null, arguments);
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
function ds(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), true).forEach(function(n) {
      vN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function vN(e3, t, r) {
  return (t = pN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function pN(e3) {
  var t = mN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function gN(e3) {
  var { cursor: t, cursorComp: r, cursorProps: n } = e3;
  return p.isValidElement(t) ? p.cloneElement(t, n) : p.createElement(r, n);
}
function yN(e3) {
  var t, { coordinate: r, payload: n, index: i, offset: s, tooltipAxisBandSize: a, layout: o, cursor: l, tooltipEventType: u, chartName: c } = e3, h = r, f = n, d = i;
  if (!l || !h || c !== "ScatterChart" && u !== "axis") return null;
  var v, m, g;
  if (c === "ScatterChart") v = h, m = RE, g = Rt.cursorLine;
  else if (c === "BarChart") v = $E(o, h, s, a), m = oh, g = Rt.cursorRectangle;
  else if (o === "radial" && h0(h)) {
    var { cx: y, cy: b, radius: w, startAngle: x, endAngle: P } = Eb(h);
    v = { cx: y, cy: b, startAngle: x, endAngle: P, innerRadius: w, outerRadius: w }, m = Cb, g = Rt.cursorLine;
  } else v = { points: MA(o, h, s) }, m = ui, g = Rt.cursorLine;
  var S = typeof l == "object" && "className" in l ? l.className : void 0, _ = ds(ds(ds(ds({ stroke: "#ccc", pointerEvents: "none" }, s), v), ja(l)), {}, { payload: f, payloadIndex: d, className: X("recharts-tooltip-cursor", S) });
  return p.createElement(Le, { zIndex: (t = e3.zIndex) !== null && t !== void 0 ? t : g }, p.createElement(gN, { cursor: l, cursorComp: m, cursorProps: _ }));
}
function bN(e3) {
  var t = BT(), r = db(), n = Hr(), i = Lx();
  return t == null || r == null || n == null || i == null ? null : p.createElement(yN, Pc({}, e3, { offset: r, layout: n, tooltipAxisBandSize: t, chartName: i }));
}
var hf = p.createContext(null), wN = () => p.useContext(hf), nu = { exports: {} }, xm;
function xN() {
  return xm || (xm = 1, (function(e3) {
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
      var g = this._events[m], y = arguments.length, b, w;
      if (g.fn) {
        switch (g.once && this.removeListener(u, g.fn, void 0, true), y) {
          case 1:
            return g.fn.call(g.context), true;
          case 2:
            return g.fn.call(g.context, c), true;
          case 3:
            return g.fn.call(g.context, c, h), true;
          case 4:
            return g.fn.call(g.context, c, h, f), true;
          case 5:
            return g.fn.call(g.context, c, h, f, d), true;
          case 6:
            return g.fn.call(g.context, c, h, f, d, v), true;
        }
        for (w = 1, b = new Array(y - 1); w < y; w++) b[w - 1] = arguments[w];
        g.fn.apply(g.context, b);
      } else {
        var x = g.length, P;
        for (w = 0; w < x; w++) switch (g[w].once && this.removeListener(u, g[w].fn, void 0, true), y) {
          case 1:
            g[w].fn.call(g[w].context);
            break;
          case 2:
            g[w].fn.call(g[w].context, c);
            break;
          case 3:
            g[w].fn.call(g[w].context, c, h);
            break;
          case 4:
            g[w].fn.call(g[w].context, c, h, f);
            break;
          default:
            if (!b) for (P = 1, b = new Array(y - 1); P < y; P++) b[P - 1] = arguments[P];
            g[w].fn.apply(g[w].context, b);
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
        for (var m = 0, g = [], y = v.length; m < y; m++) (v[m].fn !== c || f && !v[m].once || h && v[m].context !== h) && g.push(v[m]);
        g.length ? this._events[d] = g.length === 1 ? g[0] : g : a(this, d);
      }
      return this;
    }, o.prototype.removeAllListeners = function(u) {
      var c;
      return u ? (c = r ? r + u : u, this._events[c] && a(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, e3.exports = o;
  })(nu)), nu.exports;
}
var PN = xN();
const SN = Xe(PN);
var Ci = new SN(), Sc = "recharts.syncEvent.tooltip", Pm = "recharts.syncEvent.brush", _N = (e3, t) => {
  if (t && Array.isArray(e3)) {
    var r = Number.parseInt(t, 10);
    if (!fe(r)) return e3[r];
  }
}, ON = { chartName: "", tooltipPayloadSearcher: () => {
}, eventEmitter: void 0, defaultTooltipEventType: "axis" }, Fx = $t({ name: "options", initialState: ON, reducers: { createEventEmitter: (e3) => {
  e3.eventEmitter == null && (e3.eventEmitter = Symbol("rechartsEventEmitter"));
} } }), MN = Fx.reducer, { createEventEmitter: EN } = Fx.actions;
function AN(e3) {
  return e3.tooltip.syncInteraction;
}
var CN = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 }, Wx = $t({ name: "chartData", initialState: CN, reducers: { setChartData(e3, t) {
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
} } }), { setChartData: Sm, setDataStartEndIndexes: IN, setComputedData: QW } = Wx.actions, kN = Wx.reducer, jN = ["x", "y"];
function _m(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), true).forEach(function(n) {
      TN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function TN(e3, t, r) {
  return (t = NN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function NN(e3) {
  var t = DN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function DN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function LN(e3, t) {
  if (e3 == null) return {};
  var r, n, i = RN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function RN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function $N() {
  var e3 = B(dh), t = B(vh), r = lt(), n = B(Kb), i = B(nr), s = Hr(), a = ro(), o = B((l) => l.rootProps.className);
  p.useEffect(() => {
    if (e3 == null) return Je;
    var l = (u, c, h) => {
      if (t !== h && e3 === u) {
        if (c.payload.active === false) {
          r(oi({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
          return;
        }
        if (n === "index") {
          var f;
          if (a && c !== null && c !== void 0 && (f = c.payload) !== null && f !== void 0 && f.coordinate && c.payload.sourceViewBox) {
            var d = c.payload.coordinate, { x: v, y: m } = d, g = LN(d, jN), { x: y, y: b, width: w, height: x } = c.payload.sourceViewBox, P = rn(rn({}, g), {}, { x: a.x + (w ? (v - y) / w : 0) * a.width, y: a.y + (x ? (m - b) / x : 0) * a.height });
            r(rn(rn({}, c), {}, { payload: rn(rn({}, c.payload), {}, { coordinate: P }) }));
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
            r(oi({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          if (S == null) {
            r(oi({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: void 0 }));
            return;
          }
          var { x: k, y: I } = A, E = Math.min(k, a.x + a.width), $ = Math.min(I, a.y + a.height), R = { x: s === "horizontal" ? S.coordinate : E, y: s === "horizontal" ? $ : S.coordinate }, z = oi({ active: c.payload.active, coordinate: R, dataKey: c.payload.dataKey, index: String(S.index), label: c.payload.label, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: c.payload.graphicalItemId });
          r(z);
        }
      }
    };
    return Ci.on(Sc, l), () => {
      Ci.off(Sc, l);
    };
  }, [o, r, t, e3, n, i, s, a]);
}
function zN() {
  var e3 = B(dh), t = B(vh), r = lt();
  p.useEffect(() => {
    if (e3 == null) return Je;
    var n = (i, s, a) => {
      t !== a && e3 === i && r(IN(s));
    };
    return Ci.on(Pm, n), () => {
      Ci.off(Pm, n);
    };
  }, [r, t, e3]);
}
function BN() {
  var e3 = lt();
  p.useEffect(() => {
    e3(EN());
  }, [e3]), $N(), zN();
}
function FN(e3, t, r, n, i, s) {
  var a = B((v) => HT(v, e3, t)), o = B(IT), l = B(vh), u = B(dh), c = B(Kb), h = B(AN), f = (h == null ? void 0 : h.sourceViewBox) != null, d = ro();
  p.useEffect(() => {
    if (!f && u != null && l != null) {
      var v = oi({ active: s, coordinate: r, dataKey: a, index: i, label: typeof n == "number" ? String(n) : n, sourceViewBox: d, graphicalItemId: o });
      Ci.emit(Sc, u, v, l);
    }
  }, [f, r, a, o, i, n, l, u, c, s, d]);
}
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
function Mm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), true).forEach(function(n) {
      WN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function WN(e3, t, r) {
  return (t = qN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function qN(e3) {
  var t = KN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function UN(e3) {
  return e3.dataKey;
}
function VN(e3, t) {
  return p.isValidElement(e3) ? p.cloneElement(e3, t) : typeof e3 == "function" ? p.createElement(e3, t) : p.createElement(fE, t);
}
var Em = [], YN = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function tq(e3) {
  var t, r, n = jt(e3, YN), { active: i, allowEscapeViewBox: s, animationDuration: a, animationEasing: o, content: l, filterNull: u, isAnimationActive: c, offset: h, payloadUniqBy: f, position: d, reverseDirection: v, useTranslate3d: m, wrapperStyle: g, cursor: y, shared: b, trigger: w, defaultIndex: x, portal: P, axisId: S } = n, _ = lt(), M = typeof x == "number" ? String(x) : x;
  p.useEffect(() => {
    _($j({ shared: b, trigger: w, axisId: S, active: i, defaultIndex: M }));
  }, [_, b, w, S, i, M]);
  var A = ro(), k = Pb(), I = jj(b), { activeIndex: E, isActive: $ } = (t = B((Vt) => JT(Vt, I, w, M))) !== null && t !== void 0 ? t : {}, R = B((Vt) => XT(Vt, I, w, M)), z = B((Vt) => zx(Vt, I, w, M)), H = B((Vt) => GT(Vt, I, w, M)), W = R, G = wN(), F = (r = i ?? $) !== null && r !== void 0 ? r : false, [U, Bt] = I_([W, F]), ut = I === "axis" ? z : void 0;
  FN(I, w, H, ut, E, F);
  var me = P ?? G;
  if (me == null || A == null || I == null) return null;
  var Ut = W ?? Em;
  F || (Ut = Em), u && Ut.length && (Ut = s_(Ut.filter((Vt) => Vt.value != null && (Vt.hide !== true || n.includeHidden)), f, UN));
  var Re = Ut.length > 0, Un = Mm(Mm({}, n), {}, { payload: Ut, label: ut, active: F, activeIndex: E, coordinate: H, accessibilityLayer: k }), Vn = p.createElement(SE, { allowEscapeViewBox: s, animationDuration: a, animationEasing: o, isAnimationActive: c, active: F, coordinate: H, hasPayload: Re, offset: h, position: d, reverseDirection: v, useTranslate3d: m, viewBox: A, wrapperStyle: g, lastBoundingBox: U, innerRef: Bt, hasPortalFromProps: !!P }, VN(l, Un));
  return p.createElement(p.Fragment, null, By.createPortal(Vn, me), F && p.createElement(bN, { cursor: y, tooltipEventType: I, coordinate: H, payload: Ut, index: E }));
}
function HN(e3, t, r) {
  return (t = GN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function GN(e3) {
  var t = XN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
class JN {
  constructor(t) {
    HN(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function ZN(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), true).forEach(function(n) {
      QN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function QN(e3, t, r) {
  return (t = tD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function tD(e3) {
  var t = eD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var rD = { cacheSize: 2e3, enableCache: true }, qx = ZN({}, rD), Cm = new JN(qx.cacheSize), nD = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Im = "recharts_measurement_span";
function iD(e3, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", s = t.fontStyle || "", a = t.letterSpacing || "", o = t.textTransform || "";
  return "".concat(e3, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(s, "|").concat(a, "|").concat(o);
}
var km = (e3, t) => {
  try {
    var r = document.getElementById(Im);
    r || (r = document.createElement("span"), r.setAttribute("id", Im), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, nD, t), r.textContent = "".concat(e3);
    var n = r.getBoundingClientRect();
    return { width: n.width, height: n.height };
  } catch {
    return { width: 0, height: 0 };
  }
}, yn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Ln.isSsr) return { width: 0, height: 0 };
  if (!qx.enableCache) return km(t, r);
  var n = iD(t, r), i = Cm.get(n);
  if (i) return i;
  var s = km(t, r);
  return Cm.set(n, s), s;
}, Kx;
function sD(e3, t, r) {
  return (t = aD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function aD(e3) {
  var t = oD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var jm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Tm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, lD = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, uD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, cD = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, hD = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function fD(e3) {
  return hD.includes(e3);
}
var cn = "NaN";
function dD(e3, t) {
  return e3 * cD[t];
}
class At {
  static parse(t) {
    var r, [, n, i] = (r = uD.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? At.NaN : new At(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, fe(t) && (this.unit = ""), r !== "" && !lD.test(r) && (this.num = NaN, this.unit = ""), fD(r) && (this.num = dD(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new At(NaN, "") : new At(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new At(NaN, "") : new At(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new At(NaN, "") : new At(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new At(NaN, "") : new At(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return fe(this.num);
  }
}
Kx = At;
sD(At, "NaN", new Kx(NaN, ""));
function Ux(e3) {
  if (e3 == null || e3.includes(cn)) return cn;
  for (var t = e3; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, s] = (r = jm.exec(t)) !== null && r !== void 0 ? r : [], a = At.parse(n ?? ""), o = At.parse(s ?? ""), l = i === "*" ? a.multiply(o) : a.divide(o);
    if (l.isNaN()) return cn;
    t = t.replace(jm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u, [, c, h, f] = (u = Tm.exec(t)) !== null && u !== void 0 ? u : [], d = At.parse(c ?? ""), v = At.parse(f ?? ""), m = h === "+" ? d.add(v) : d.subtract(v);
    if (m.isNaN()) return cn;
    t = t.replace(Tm, m.toString());
  }
  return t;
}
var Nm = /\(([^()]*)\)/;
function vD(e3) {
  for (var t = e3, r; (r = Nm.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Nm, Ux(n));
  }
  return t;
}
function pD(e3) {
  var t = e3.replace(/\s+/g, "");
  return t = vD(t), t = Ux(t), t;
}
function mD(e3) {
  try {
    return pD(e3);
  } catch {
    return cn;
  }
}
function iu(e3) {
  var t = mD(e3.slice(5, -1));
  return t === cn ? "" : t;
}
var gD = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], yD = ["dx", "dy", "angle", "className", "breakAll"];
function _c() {
  return _c = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, _c.apply(null, arguments);
}
function Dm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = bD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function bD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var Vx = /[ \f\n\r\t\v\u2028\u2029]+/, Yx = (e3) => {
  var { children: t, breakAll: r, style: n } = e3;
  try {
    var i = [];
    bt(t) || (r ? i = t.toString().split("") : i = t.toString().split(Vx));
    var s = i.map((o) => ({ word: o, width: yn(o, n).width })), a = r ? 0 : yn("\xA0", n).width;
    return { wordsWithComputedWidth: s, spaceWidth: a };
  } catch {
    return null;
  }
};
function Hx(e3) {
  return e3 === "start" || e3 === "middle" || e3 === "end" || e3 === "inherit";
}
function wD(e3) {
  return bt(e3) || typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean";
}
var Gx = (e3, t, r, n) => e3.reduce((i, s) => {
  var { word: a, width: o } = s, l = i[i.length - 1];
  if (l && o != null && (t == null || n || l.width + o + r < Number(t))) l.words.push(a), l.width += o + r;
  else {
    var u = { words: [a], width: o };
    i.push(u);
  }
  return i;
}, []), Xx = (e3) => e3.reduce((t, r) => t.width > r.width ? t : r), xD = "\u2026", Lm = (e3, t, r, n, i, s, a, o) => {
  var l = e3.slice(0, t), u = Yx({ breakAll: r, style: n, children: l + xD });
  if (!u) return [false, []];
  var c = Gx(u.wordsWithComputedWidth, s, a, o), h = c.length > i || Xx(c).width > Number(s);
  return [h, c];
}, PD = (e3, t, r, n, i) => {
  var { maxLines: s, children: a, style: o, breakAll: l } = e3, u = L(s), c = String(a), h = Gx(t, n, r, i);
  if (!u || i) return h;
  var f = h.length > s || Xx(h).width > Number(n);
  if (!f) return h;
  for (var d = 0, v = c.length - 1, m = 0, g; d <= v && m <= c.length - 1; ) {
    var y = Math.floor((d + v) / 2), b = y - 1, [w, x] = Lm(c, b, l, o, s, n, r, i), [P] = Lm(c, y, l, o, s, n, r, i);
    if (!w && !P && (d = y + 1), w && P && (v = y - 1), !w && P) {
      g = x;
      break;
    }
    m++;
  }
  return g || h;
}, Rm = (e3) => {
  var t = bt(e3) ? [] : e3.toString().split(Vx);
  return [{ words: t, width: void 0 }];
}, SD = (e3) => {
  var { width: t, scaleToFit: r, children: n, style: i, breakAll: s, maxLines: a } = e3;
  if ((t || r) && !Ln.isSsr) {
    var o, l, u = Yx({ breakAll: s, children: n, style: i });
    if (u) {
      var { wordsWithComputedWidth: c, spaceWidth: h } = u;
      o = c, l = h;
    } else return Rm(n);
    return PD({ breakAll: s, children: n, maxLines: a, style: i }, o, l, t, !!r);
  }
  return Rm(n);
}, Jx = "#808080", _D = { angle: 0, breakAll: false, capHeight: "0.71em", fill: Jx, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 }, ff = p.forwardRef((e3, t) => {
  var r = jt(e3, _D), { x: n, y: i, lineHeight: s, capHeight: a, fill: o, scaleToFit: l, textAnchor: u, verticalAnchor: c } = r, h = Dm(r, gD), f = p.useMemo(() => SD({ breakAll: h.breakAll, children: h.children, maxLines: h.maxLines, scaleToFit: l, style: h.style, width: h.width }), [h.breakAll, h.children, h.maxLines, l, h.style, h.width]), { dx: d, dy: v, angle: m, className: g, breakAll: y } = h, b = Dm(h, yD);
  if (!Te(n) || !Te(i) || f.length === 0) return null;
  var w = Number(n) + (L(d) ? d : 0), x = Number(i) + (L(v) ? v : 0);
  if (!q(w) || !q(x)) return null;
  var P;
  switch (c) {
    case "start":
      P = iu("calc(".concat(a, ")"));
      break;
    case "middle":
      P = iu("calc(".concat((f.length - 1) / 2, " * -").concat(s, " + (").concat(a, " / 2))"));
      break;
    default:
      P = iu("calc(".concat(f.length - 1, " * -").concat(s, ")"));
      break;
  }
  var S = [], _ = f[0];
  if (l && _ != null) {
    var M = _.width, { width: A } = h;
    S.push("scale(".concat(L(A) && L(M) ? A / M : 1, ")"));
  }
  return m && S.push("rotate(".concat(m, ", ").concat(w, ", ").concat(x, ")")), S.length && (b.transform = S.join(" ")), p.createElement("text", _c({}, vt(b), { ref: t, x: w, y: x, className: X("recharts-text", g), textAnchor: u, fill: o.includes("url") ? Jx : o }), f.map((k, I) => {
    var E = k.words.join(y ? "" : " ");
    return p.createElement("tspan", { x: w, dy: I === 0 ? P : s, key: "".concat(E, "-").concat(I) }, E);
  }));
});
ff.displayName = "Text";
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
function Me(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), true).forEach(function(n) {
      OD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
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
var AD = (e3) => {
  var { viewBox: t, position: r, offset: n = 0, parentViewBox: i } = e3, { x: s, y: a, height: o, upperWidth: l, lowerWidth: u } = Qc(t), c = s, h = s + (l - u) / 2, f = (c + h) / 2, d = (l + u) / 2, v = c + l / 2, m = o >= 0 ? 1 : -1, g = m * n, y = m > 0 ? "end" : "start", b = m > 0 ? "start" : "end", w = l >= 0 ? 1 : -1, x = w * n, P = w > 0 ? "end" : "start", S = w > 0 ? "start" : "end", _ = i;
  if (r === "top") {
    var M = { x: c + l / 2, y: a - g, horizontalAnchor: "middle", verticalAnchor: y };
    return _ && (M.height = Math.max(a - _.y, 0), M.width = l), M;
  }
  if (r === "bottom") {
    var A = { x: h + u / 2, y: a + o + g, horizontalAnchor: "middle", verticalAnchor: b };
    return _ && (A.height = Math.max(_.y + _.height - (a + o), 0), A.width = u), A;
  }
  if (r === "left") {
    var k = { x: f - x, y: a + o / 2, horizontalAnchor: P, verticalAnchor: "middle" };
    return _ && (k.width = Math.max(k.x - _.x, 0), k.height = o), k;
  }
  if (r === "right") {
    var I = { x: f + d + x, y: a + o / 2, horizontalAnchor: S, verticalAnchor: "middle" };
    return _ && (I.width = Math.max(_.x + _.width - I.x, 0), I.height = o), I;
  }
  var E = _ ? { width: d, height: o } : {};
  return r === "insideLeft" ? Me({ x: f + x, y: a + o / 2, horizontalAnchor: S, verticalAnchor: "middle" }, E) : r === "insideRight" ? Me({ x: f + d - x, y: a + o / 2, horizontalAnchor: P, verticalAnchor: "middle" }, E) : r === "insideTop" ? Me({ x: c + l / 2, y: a + g, horizontalAnchor: "middle", verticalAnchor: b }, E) : r === "insideBottom" ? Me({ x: h + u / 2, y: a + o - g, horizontalAnchor: "middle", verticalAnchor: y }, E) : r === "insideTopLeft" ? Me({ x: c + x, y: a + g, horizontalAnchor: S, verticalAnchor: b }, E) : r === "insideTopRight" ? Me({ x: c + l - x, y: a + g, horizontalAnchor: P, verticalAnchor: b }, E) : r === "insideBottomLeft" ? Me({ x: h + x, y: a + o - g, horizontalAnchor: S, verticalAnchor: y }, E) : r === "insideBottomRight" ? Me({ x: h + u - x, y: a + o - g, horizontalAnchor: P, verticalAnchor: y }, E) : r && typeof r == "object" && (L(r.x) || Rr(r.x)) && (L(r.y) || Rr(r.y)) ? Me({ x: s + vr(r.x, d), y: a + vr(r.y, o), horizontalAnchor: "end", verticalAnchor: "end" }, E) : Me({ x: v, y: a + o / 2, horizontalAnchor: "middle", verticalAnchor: "middle" }, E);
}, CD = ["labelRef"], ID = ["content"];
function zm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = kD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function kD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Bm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function li(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bm(Object(r), true).forEach(function(n) {
      jD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function jD(e3, t, r) {
  return (t = TD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function TD(e3) {
  var t = ND(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ND(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, ze.apply(null, arguments);
}
var Zx = p.createContext(null), DD = (e3) => {
  var { x: t, y: r, upperWidth: n, lowerWidth: i, width: s, height: a, children: o } = e3, l = p.useMemo(() => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: s, height: a }), [t, r, n, i, s, a]);
  return p.createElement(Zx.Provider, { value: l }, o);
}, Qx = () => {
  var e3 = p.useContext(Zx), t = ro();
  return e3 || (t ? Qc(t) : void 0);
}, LD = p.createContext(null), RD = () => {
  var e3 = p.useContext(LD), t = B(Gb);
  return e3 || t;
}, $D = (e3) => {
  var { value: t, formatter: r } = e3, n = bt(e3.children) ? t : e3.children;
  return typeof r == "function" ? r(n) : n;
}, df = (e3) => e3 != null && typeof e3 == "function", zD = (e3, t) => {
  var r = ue(t - e3), n = Math.min(Math.abs(t - e3), 360);
  return r * n;
}, BD = (e3, t, r, n, i) => {
  var { offset: s, className: a } = e3, { cx: o, cy: l, innerRadius: u, outerRadius: c, startAngle: h, endAngle: f, clockWise: d } = i, v = (u + c) / 2, m = zD(h, f), g = m >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = h + g * s, b = d;
      break;
    case "insideEnd":
      y = f - g * s, b = !d;
      break;
    case "end":
      y = f + g * s, b = d;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = m <= 0 ? b : !b;
  var w = It(o, l, v, y), x = It(o, l, v, y + (b ? 1 : -1) * 359), P = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), S = bt(e3.id) ? Pn("recharts-radial-line-") : e3.id;
  return p.createElement("text", ze({}, n, { dominantBaseline: "central", className: X("recharts-radial-bar-label", a) }), p.createElement("defs", null, p.createElement("path", { id: S, d: P })), p.createElement("textPath", { xlinkHref: "#".concat(S) }, r));
}, FD = (e3, t, r) => {
  var { cx: n, cy: i, innerRadius: s, outerRadius: a, startAngle: o, endAngle: l } = e3, u = (o + l) / 2;
  if (r === "outside") {
    var { x: c, y: h } = It(n, i, a + t, u);
    return { x: c, y: h, textAnchor: c >= n ? "start" : "end", verticalAnchor: "middle" };
  }
  if (r === "center") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
  if (r === "centerTop") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
  if (r === "centerBottom") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
  var f = (s + a) / 2, { x: d, y: v } = It(n, i, f, u);
  return { x: d, y: v, textAnchor: "middle", verticalAnchor: "middle" };
}, Es = (e3) => e3 != null && "cx" in e3 && L(e3.cx), WD = { angle: 0, offset: 5, zIndex: Rt.label, position: "middle", textBreakAll: false };
function qD(e3) {
  if (!Es(e3)) return e3;
  var { cx: t, cy: r, outerRadius: n } = e3, i = n * 2;
  return { x: t - n, y: r - n, width: i, upperWidth: i, lowerWidth: i, height: i };
}
function lr(e3) {
  var t = jt(e3, WD), { viewBox: r, parentViewBox: n, position: i, value: s, children: a, content: o, className: l = "", textBreakAll: u, labelRef: c } = t, h = RD(), f = Qx(), d = i === "center" ? f : h ?? f, v, m, g;
  r == null ? v = d : Es(r) ? v = r : v = Qc(r);
  var y = qD(v);
  if (!v || bt(s) && bt(a) && !p.isValidElement(o) && typeof o != "function") return null;
  var b = li(li({}, t), {}, { viewBox: v });
  if (p.isValidElement(o)) {
    var { labelRef: w } = b, x = zm(b, CD);
    return p.cloneElement(o, x);
  }
  if (typeof o == "function") {
    var { content: P } = b, S = zm(b, ID);
    if (m = p.createElement(o, S), p.isValidElement(m)) return m;
  } else m = $D(t);
  var _ = vt(t);
  if (Es(v)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end") return BD(t, i, m, _, v);
    g = FD(v, t.offset, t.position);
  } else {
    if (!y) return null;
    var M = AD({ viewBox: y, position: i, offset: t.offset, parentViewBox: Es(n) ? void 0 : n });
    g = li(li({ x: M.x, y: M.y, textAnchor: M.horizontalAnchor, verticalAnchor: M.verticalAnchor }, M.width !== void 0 ? { width: M.width } : {}), M.height !== void 0 ? { height: M.height } : {});
  }
  return p.createElement(Le, { zIndex: t.zIndex }, p.createElement(ff, ze({ ref: c, className: X("recharts-label", l) }, _, g, { textAnchor: Hx(_.textAnchor) ? _.textAnchor : g.textAnchor, breakAll: u }), m));
}
lr.displayName = "Label";
var KD = (e3, t, r) => {
  if (!e3) return null;
  var n = { viewBox: t, labelRef: r };
  return e3 === true ? p.createElement(lr, ze({ key: "label-implicit" }, n)) : Te(e3) ? p.createElement(lr, ze({ key: "label-implicit", value: e3 }, n)) : p.isValidElement(e3) ? e3.type === lr ? p.cloneElement(e3, li({ key: "label-implicit" }, n)) : p.createElement(lr, ze({ key: "label-implicit", content: e3 }, n)) : df(e3) ? p.createElement(lr, ze({ key: "label-implicit", content: e3 }, n)) : e3 && typeof e3 == "object" ? p.createElement(lr, ze({}, e3, { key: "label-implicit" }, n)) : null;
};
function UD(e3) {
  var { label: t, labelRef: r } = e3, n = Qx();
  return KD(t, n, r) || null;
}
var VD = ["valueAccessor"], YD = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, wa.apply(null, arguments);
}
function Fm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = HD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function HD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var GD = (e3) => {
  var t = Array.isArray(e3.value) ? e3.value[e3.value.length - 1] : e3.value;
  if (wD(t)) return t;
}, t1 = p.createContext(void 0), e1 = t1.Provider, r1 = p.createContext(void 0);
r1.Provider;
function XD() {
  return p.useContext(t1);
}
function JD() {
  return p.useContext(r1);
}
function As(e3) {
  var { valueAccessor: t = GD } = e3, r = Fm(e3, VD), { dataKey: n, clockWise: i, id: s, textBreakAll: a, zIndex: o } = r, l = Fm(r, YD), u = XD(), c = JD(), h = u || c;
  return !h || !h.length ? null : p.createElement(Le, { zIndex: o ?? Rt.label }, p.createElement(kt, { className: "recharts-label-list" }, h.map((f, d) => {
    var v, m = bt(n) ? t(f, d) : ht(f.payload, n), g = bt(s) ? {} : { id: "".concat(s, "-").concat(d) };
    return p.createElement(lr, wa({ key: "label-".concat(d) }, vt(f), l, g, { fill: (v = r.fill) !== null && v !== void 0 ? v : f.fill, parentViewBox: f.parentViewBox, value: m, textBreakAll: a, viewBox: f.viewBox, index: d, zIndex: 0 }));
  })));
}
As.displayName = "LabelList";
function n1(e3) {
  var { label: t } = e3;
  return t ? t === true ? p.createElement(As, { key: "labelList-implicit" }) : p.isValidElement(t) || df(t) ? p.createElement(As, { key: "labelList-implicit", content: t }) : typeof t == "object" ? p.createElement(As, wa({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
}
var ZD = ["points", "className", "baseLinePoints", "connectNulls"], Wm;
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, hn.apply(null, arguments);
}
function QD(e3, t) {
  if (e3 == null) return {};
  var r, n, i = t2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function t2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function e2(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var qm = (e3) => e3 != null && e3.x === +e3.x && e3.y === +e3.y, r2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  t.forEach((a) => {
    var o = r[r.length - 1];
    qm(a) ? o && o.push(a) : o && o.length > 0 && r.push([]);
  });
  var n = t[0], i = r[r.length - 1];
  qm(n) && i && i.push(n);
  var s = r[r.length - 1];
  return s && s.length <= 0 && (r = r.slice(0, -1)), r;
}, hi = (e3, t) => {
  var r = r2(e3);
  t && (r = [r.reduce((i, s) => [...i, ...s], [])]);
  var n = r.map((i) => i.reduce((s, a, o) => ot(Wm || (Wm = e2(["", "", "", ",", ""])), s, o === 0 ? "M" : "L", a.x, a.y), "")).join("");
  return r.length === 1 ? "".concat(n, "Z") : n;
}, n2 = (e3, t, r) => {
  var n = hi(e3, r);
  return "".concat(n.slice(-1) === "Z" ? n.slice(0, -1) : n, "L").concat(hi(Array.from(t).reverse(), r).slice(1));
}, i2 = (e3) => {
  var { points: t, className: r, baseLinePoints: n, connectNulls: i } = e3, s = QD(e3, ZD);
  if (!t || !t.length) return null;
  var a = X("recharts-polygon", r);
  if (n && n.length) {
    var o = s.stroke && s.stroke !== "none", l = n2(t, n, i);
    return p.createElement("g", { className: a }, p.createElement("path", hn({}, vt(s), { fill: l.slice(-1) === "Z" ? s.fill : "none", stroke: "none", d: l })), o ? p.createElement("path", hn({}, vt(s), { fill: "none", d: hi(t, i) })) : null, o ? p.createElement("path", hn({}, vt(s), { fill: "none", d: hi(n, i) })) : null);
  }
  var u = hi(t, i);
  return p.createElement("path", hn({}, vt(s), { fill: u.slice(-1) === "Z" ? s.fill : "none", className: a, d: u }));
};
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Oc.apply(null, arguments);
}
var i1 = (e3) => {
  var { cx: t, cy: r, r: n, className: i } = e3, s = X("recharts-dot", i);
  return L(t) && L(r) && L(n) ? p.createElement("circle", Oc({}, Xt(e3), qc(e3), { className: s, cx: t, cy: r, r: n })) : null;
}, s2 = { radiusAxis: {}, angleAxis: {} }, s1 = $t({ name: "polarAxis", initialState: s2, reducers: { addRadiusAxis(e3, t) {
  e3.radiusAxis[t.payload.id] = t.payload;
}, removeRadiusAxis(e3, t) {
  delete e3.radiusAxis[t.payload.id];
}, addAngleAxis(e3, t) {
  e3.angleAxis[t.payload.id] = t.payload;
}, removeAngleAxis(e3, t) {
  delete e3.angleAxis[t.payload.id];
} } }), { addRadiusAxis: eq, removeRadiusAxis: rq, addAngleAxis: nq, removeAngleAxis: iq } = s1.actions, a2 = s1.reducer;
function o2(e3) {
  return e3 && typeof e3 == "object" && "className" in e3 && typeof e3.className == "string" ? e3.className : "";
}
var vf = (e3) => e3 && typeof e3 == "object" && "clipDot" in e3 ? !!e3.clipDot : true, su = {}, Km;
function a1() {
  if (Km) return su;
  Km = 1;
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
  return su.isPlainObject = e3, su;
}
var au, Um;
function l2() {
  return Um || (Um = 1, au = a1().isPlainObject), au;
}
var u2 = l2();
const c2 = Xe(u2);
var Vm, Ym, Hm, Gm, Xm;
function Jm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jm(Object(r), true).forEach(function(n) {
      h2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function(n) {
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
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, xa.apply(null, arguments);
}
function ri(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var Qm = (e3, t, r, n, i) => {
  var s = r - n, a;
  return a = ot(Vm || (Vm = ri(["M ", ",", ""])), e3, t), a += ot(Ym || (Ym = ri(["L ", ",", ""])), e3 + r, t), a += ot(Hm || (Hm = ri(["L ", ",", ""])), e3 + r - s / 2, t + i), a += ot(Gm || (Gm = ri(["L ", ",", ""])), e3 + r - s / 2 - n, t + i), a += ot(Xm || (Xm = ri(["L ", ",", " Z"])), e3, t), a;
}, v2 = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, p2 = (e3) => {
  var t = jt(e3, v2), { x: r, y: n, upperWidth: i, lowerWidth: s, height: a, className: o } = t, { animationEasing: l, animationDuration: u, animationBegin: c, isUpdateAnimationActive: h } = t, f = p.useRef(null), [d, v] = p.useState(-1), m = p.useRef(i), g = p.useRef(s), y = p.useRef(a), b = p.useRef(r), w = p.useRef(n), x = oo(e3, "trapezoid-");
  if (p.useEffect(() => {
    if (f.current && f.current.getTotalLength) try {
      var R = f.current.getTotalLength();
      R && v(R);
    } catch {
    }
  }, []), r !== +r || n !== +n || i !== +i || s !== +s || a !== +a || i === 0 && s === 0 || a === 0) return null;
  var P = X("recharts-trapezoid", o);
  if (!h) return p.createElement("g", null, p.createElement("path", xa({}, vt(t), { className: P, d: Qm(r, n, i, s, a) })));
  var S = m.current, _ = g.current, M = y.current, A = b.current, k = w.current, I = "0px ".concat(d === -1 ? 1 : d, "px"), E = "".concat(d, "px ").concat(d, "px"), $ = ah(["strokeDasharray"], u, l);
  return p.createElement(ao, { animationId: x, key: x, canBegin: d > 0, duration: u, easing: l, isActive: h, begin: c }, (R) => {
    var z = dt(S, i, R), H = dt(_, s, R), W = dt(M, a, R), G = dt(A, r, R), F = dt(k, n, R);
    f.current && (m.current = z, g.current = H, y.current = W, b.current = G, w.current = F);
    var U = R > 0 ? { transition: $, strokeDasharray: E } : { strokeDasharray: I };
    return p.createElement("path", xa({}, vt(t), { className: P, d: Qm(G, F, z, H, W), ref: f, style: Zm(Zm({}, U), t.style) }));
  });
}, m2 = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function g2(e3, t) {
  if (e3 == null) return {};
  var r, n, i = y2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function y2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function tg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pa(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tg(Object(r), true).forEach(function(n) {
      b2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function b2(e3, t, r) {
  return (t = w2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function w2(e3) {
  var t = x2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function P2(e3, t) {
  return Pa(Pa({}, t), e3);
}
function S2(e3, t) {
  return e3 === "symbols";
}
function eg(e3) {
  var { shapeType: t, elementProps: r } = e3;
  switch (t) {
    case "rectangle":
      return p.createElement(oh, r);
    case "trapezoid":
      return p.createElement(p2, r);
    case "sector":
      return p.createElement(Cb, r);
    case "symbols":
      if (S2(t)) return p.createElement(c0, r);
      break;
    case "curve":
      return p.createElement(ui, r);
    default:
      return null;
  }
}
function _2(e3) {
  return p.isValidElement(e3) ? e3.props : e3;
}
function O2(e3) {
  var { option: t, shapeType: r, activeClassName: n = "recharts-active-shape", inActiveClassName: i = "recharts-shape" } = e3, s = g2(e3, m2), a;
  if (p.isValidElement(t)) a = p.cloneElement(t, Pa(Pa({}, s), _2(t)));
  else if (typeof t == "function") a = t(s, s.index);
  else if (c2(t) && typeof t != "boolean") {
    var o = P2(t, s);
    a = p.createElement(eg, { shapeType: r, elementProps: o });
  } else {
    var l = s;
    a = p.createElement(eg, { shapeType: r, elementProps: l });
  }
  return s.isActive ? p.createElement(kt, { className: n }, a) : p.createElement(kt, { className: i }, a);
}
function pf(e3) {
  var { tooltipEntrySettings: t } = e3, r = lt(), n = zt(), i = p.useRef(null);
  return p.useLayoutEffect(() => {
    n || (i.current === null ? r(Dj(t)) : i.current !== t && r(Lj({ prev: i.current, next: t })), i.current = t);
  }, [t, r, n]), p.useLayoutEffect(() => () => {
    i.current && (r(Rj(i.current)), i.current = null);
  }, [r]), null;
}
function o1(e3) {
  var { legendPayload: t } = e3, r = lt(), n = zt(), i = p.useRef(null);
  return p.useLayoutEffect(() => {
    n || (i.current === null ? r(RM(t)) : i.current !== t && r($M({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), p.useLayoutEffect(() => () => {
    i.current && (r(zM(i.current)), i.current = null);
  }, [r]), null;
}
var ou, M2 = () => {
  var [e3] = p.useState(() => Pn("uid-"));
  return e3;
}, E2 = (ou = OP.useId) !== null && ou !== void 0 ? ou : M2;
function A2(e3, t) {
  var r = E2();
  return t || (e3 ? "".concat(e3, "-").concat(r) : r);
}
var C2 = p.createContext(void 0), mf = (e3) => {
  var { id: t, type: r, children: n } = e3, i = A2("recharts-".concat(r), t);
  return p.createElement(C2.Provider, { value: i }, n(i));
}, I2 = { cartesianItems: [], polarItems: [] }, l1 = $t({ name: "graphicalItems", initialState: I2, reducers: { addCartesianGraphicalItem: { reducer(e3, t) {
  e3.cartesianItems.push(t.payload);
}, prepare: it() }, replaceCartesianGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = ce(e3).cartesianItems.indexOf(r);
  i > -1 && (e3.cartesianItems[i] = n);
}, prepare: it() }, removeCartesianGraphicalItem: { reducer(e3, t) {
  var r = ce(e3).cartesianItems.indexOf(t.payload);
  r > -1 && e3.cartesianItems.splice(r, 1);
}, prepare: it() }, addPolarGraphicalItem: { reducer(e3, t) {
  e3.polarItems.push(t.payload);
}, prepare: it() }, removePolarGraphicalItem: { reducer(e3, t) {
  var r = ce(e3).polarItems.indexOf(t.payload);
  r > -1 && e3.polarItems.splice(r, 1);
}, prepare: it() }, replacePolarGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = ce(e3).polarItems.indexOf(r);
  i > -1 && (e3.polarItems[i] = n);
}, prepare: it() } } }), { addCartesianGraphicalItem: k2, replaceCartesianGraphicalItem: j2, removeCartesianGraphicalItem: T2, addPolarGraphicalItem: sq, removePolarGraphicalItem: aq, replacePolarGraphicalItem: oq } = l1.actions, N2 = l1.reducer, D2 = (e3) => {
  var t = lt(), r = p.useRef(null);
  return p.useLayoutEffect(() => {
    r.current === null ? t(k2(e3)) : r.current !== e3 && t(j2({ prev: r.current, next: e3 })), r.current = e3;
  }, [t, e3]), p.useLayoutEffect(() => () => {
    r.current && (t(T2(r.current)), r.current = null);
  }, [t]), null;
}, u1 = p.memo(D2), L2 = ["points"];
function rg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lu(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(r), true).forEach(function(n) {
      R2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function R2(e3, t, r) {
  return (t = $2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function $2(e3) {
  var t = z2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Sa() {
  return Sa = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Sa.apply(null, arguments);
}
function B2(e3, t) {
  if (e3 == null) return {};
  var r, n, i = F2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function F2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function W2(e3) {
  var { option: t, dotProps: r, className: n } = e3;
  if (p.isValidElement(t)) return p.cloneElement(t, r);
  if (typeof t == "function") return t(r);
  var i = X(n, typeof t != "boolean" ? t.className : ""), s = r ?? {}, { points: a } = s, o = B2(s, L2);
  return p.createElement(i1, Sa({}, o, { className: i }));
}
function q2(e3, t) {
  return e3 == null ? false : t ? true : e3.length === 1;
}
function c1(e3) {
  var { points: t, dot: r, className: n, dotClassName: i, dataKey: s, baseProps: a, needClip: o, clipPathId: l, zIndex: u = Rt.scatter } = e3;
  if (!q2(t, r)) return null;
  var c = vf(r), h = TP(r), f = t.map((v, m) => {
    var g, y, b = lu(lu(lu({ r: 3 }, a), h), {}, { index: m, cx: (g = v.x) !== null && g !== void 0 ? g : void 0, cy: (y = v.y) !== null && y !== void 0 ? y : void 0, dataKey: s, value: v.value, payload: v.payload, points: t });
    return p.createElement(W2, { key: "dot-".concat(m), option: r, dotProps: b, className: i });
  }), d = {};
  return o && l != null && (d.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(l, ")")), p.createElement(Le, { zIndex: u }, p.createElement(kt, Sa({ className: n }, d), f));
}
function ng(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ig(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ng(Object(r), true).forEach(function(n) {
      K2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function K2(e3, t, r) {
  return (t = U2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function U2(e3) {
  var t = V2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var h1 = 0, Y2 = { xAxis: {}, yAxis: {}, zAxis: {} }, f1 = $t({ name: "cartesianAxis", initialState: Y2, reducers: { addXAxis: { reducer(e3, t) {
  e3.xAxis[t.payload.id] = t.payload;
}, prepare: it() }, replaceXAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.xAxis[r.id], e3.xAxis[n.id] = n);
}, prepare: it() }, removeXAxis: { reducer(e3, t) {
  delete e3.xAxis[t.payload.id];
}, prepare: it() }, addYAxis: { reducer(e3, t) {
  e3.yAxis[t.payload.id] = t.payload;
}, prepare: it() }, replaceYAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.yAxis[r.id], e3.yAxis[n.id] = n);
}, prepare: it() }, removeYAxis: { reducer(e3, t) {
  delete e3.yAxis[t.payload.id];
}, prepare: it() }, addZAxis: { reducer(e3, t) {
  e3.zAxis[t.payload.id] = t.payload;
}, prepare: it() }, replaceZAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.zAxis[r.id], e3.zAxis[n.id] = n);
}, prepare: it() }, removeZAxis: { reducer(e3, t) {
  delete e3.zAxis[t.payload.id];
}, prepare: it() }, updateYAxisWidth(e3, t) {
  var { id: r, width: n } = t.payload, i = e3.yAxis[r];
  if (i) {
    var s, a = i.widthHistory || [];
    if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - ((s = a[0]) !== null && s !== void 0 ? s : 0)) <= 1) return;
    var o = [...a, n].slice(-3);
    e3.yAxis[r] = ig(ig({}, i), {}, { width: n, widthHistory: o });
  }
} } }), { addXAxis: H2, replaceXAxis: G2, removeXAxis: X2, addYAxis: J2, replaceYAxis: Z2, removeYAxis: Q2, addZAxis: lq, replaceZAxis: uq, removeZAxis: cq, updateYAxisWidth: tL } = f1.actions, eL = f1.reducer, rL = O([Tt], (e3) => ({ top: e3.top, bottom: e3.bottom, left: e3.left, right: e3.right })), nL = O([rL, Ze, Qe], (e3, t, r) => {
  if (!(!e3 || t == null || r == null)) return { x: e3.left, y: e3.top, width: Math.max(0, t - e3.left - e3.right), height: Math.max(0, r - e3.top - e3.bottom) };
}), Eo = () => B(nL), iL = () => B(DT);
function sg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uu(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), true).forEach(function(n) {
      sL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function sL(e3, t, r) {
  return (t = aL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function aL(e3) {
  var t = oL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var lL = (e3) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: s, clipPath: a } = e3;
  if (i === false || t.x == null || t.y == null) return null;
  var o = { index: r, dataKey: s, cx: t.x, cy: t.y, r: 4, fill: n ?? "none", strokeWidth: 2, stroke: "#fff", payload: t.payload, value: t.value }, l = uu(uu(uu({}, o), ja(i)), qc(i)), u;
  return p.isValidElement(i) ? u = p.cloneElement(i, l) : typeof i == "function" ? u = i(l) : u = p.createElement(i1, l), p.createElement(kt, { className: "recharts-active-dot", clipPath: a }, u);
};
function Mc(e3) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i, clipPath: s, zIndex: a = Rt.activeDot } = e3, o = B(Ai), l = iL();
  if (t == null || l == null) return null;
  var u = t.find((c) => l.includes(c.payload));
  return bt(u) ? null : p.createElement(Le, { zIndex: a }, p.createElement(lL, { point: u, childIndex: Number(o), mainColor: r, dataKey: i, activeDot: n, clipPath: s }));
}
var uL = (e3) => {
  var { chartData: t } = e3, r = lt(), n = zt();
  return p.useEffect(() => n ? () => {
  } : (r(Sm(t)), () => {
    r(Sm(void 0));
  }), [t, r, n]), null;
}, ag = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }, d1 = $t({ name: "brush", initialState: ag, reducers: { setBrushSettings(e3, t) {
  return t.payload == null ? ag : t.payload;
} } }), { setBrushSettings: hq } = d1.actions, cL = d1.reducer;
function hL(e3) {
  return (e3 % 180 + 180) % 180;
}
var fL = function(t) {
  var { width: r, height: n } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = hL(i), a = s * Math.PI / 180, o = Math.atan(n / r), l = a > o && a < Math.PI - o ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(l);
}, dL = { dots: [], areas: [], lines: [] }, v1 = $t({ name: "referenceElements", initialState: dL, reducers: { addDot: (e3, t) => {
  e3.dots.push(t.payload);
}, removeDot: (e3, t) => {
  var r = ce(e3).dots.findIndex((n) => n === t.payload);
  r !== -1 && e3.dots.splice(r, 1);
}, addArea: (e3, t) => {
  e3.areas.push(t.payload);
}, removeArea: (e3, t) => {
  var r = ce(e3).areas.findIndex((n) => n === t.payload);
  r !== -1 && e3.areas.splice(r, 1);
}, addLine: (e3, t) => {
  e3.lines.push(t.payload);
}, removeLine: (e3, t) => {
  var r = ce(e3).lines.findIndex((n) => n === t.payload);
  r !== -1 && e3.lines.splice(r, 1);
} } }), { addDot: fq, removeDot: dq, addArea: vq, removeArea: pq, addLine: mq, removeLine: gq } = v1.actions, vL = v1.reducer, pL = p.createContext(void 0), mL = (e3) => {
  var { children: t } = e3, [r] = p.useState("".concat(Pn("recharts"), "-clip")), n = Eo();
  if (n == null) return null;
  var { x: i, y: s, width: a, height: o } = n;
  return p.createElement(pL.Provider, { value: r }, p.createElement("defs", null, p.createElement("clipPath", { id: r }, p.createElement("rect", { x: i, y: s, height: o, width: a }))), t);
};
function p1(e3, t) {
  if (t < 1) return [];
  if (t === 1) return e3;
  for (var r = [], n = 0; n < e3.length; n += t) {
    var i = e3[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function gL(e3, t, r) {
  var n = { width: e3.width + t.width, height: e3.height + t.height };
  return fL(n, r);
}
function yL(e3, t, r) {
  var n = r === "width", { x: i, y: s, width: a, height: o } = e3;
  return t === 1 ? { start: n ? i : s, end: n ? i + a : s + o } : { start: n ? i + a : s + o, end: n ? i : s };
}
function Ii(e3, t, r, n, i) {
  if (e3 * t < e3 * n || e3 * t > e3 * i) return false;
  var s = r();
  return e3 * (t - e3 * s / 2 - n) >= 0 && e3 * (t + e3 * s / 2 - i) <= 0;
}
function bL(e3, t) {
  return p1(e3, t + 1);
}
function wL(e3, t, r, n, i) {
  for (var s = (n || []).slice(), { start: a, end: o } = t, l = 0, u = 1, c = a, h = function() {
    var v = n == null ? void 0 : n[l];
    if (v === void 0) return { v: p1(n, u) };
    var m = l, g, y = () => (g === void 0 && (g = r(v, m)), g), b = v.coordinate, w = l === 0 || Ii(e3, b, y, c, o);
    w || (l = 0, c = a, u += 1), w && (c = b + e3 * (y() / 2 + i), l += u);
  }, f; u <= s.length; ) if (f = h(), f) return f.v;
  return [];
}
function xL(e3, t, r, n, i) {
  var s = (n || []).slice(), a = s.length;
  if (a === 0) return [];
  for (var { start: o, end: l } = t, u = 1; u <= a; u++) {
    for (var c = (a - 1) % u, h = o, f = true, d = function() {
      var x = n[m];
      if (x == null) return 0;
      var P = m, S, _ = () => (S === void 0 && (S = r(x, P)), S), M = x.coordinate, A = m === c || Ii(e3, M, _, h, l);
      if (!A) return f = false, 1;
      A && (h = M + e3 * (_() / 2 + i));
    }, v, m = c; m < a && (v = d(), !(v !== 0 && v === 1)); m += u) ;
    if (f) {
      for (var g = [], y = c; y < a; y += u) {
        var b = n[y];
        b != null && g.push(b);
      }
      return g;
    }
  }
  return [];
}
function og(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), true).forEach(function(n) {
      PL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function PL(e3, t, r) {
  return (t = SL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function SL(e3) {
  var t = _L(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _L(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function OL(e3, t, r, n, i) {
  for (var s = (n || []).slice(), a = s.length, { start: o } = t, { end: l } = t, u = function(f) {
    var d = s[f];
    if (d == null) return 1;
    var v = d, m, g = () => (m === void 0 && (m = r(d, f)), m);
    if (f === a - 1) {
      var y = e3 * (v.coordinate + e3 * g() / 2 - l);
      s[f] = v = Dt(Dt({}, v), {}, { tickCoord: y > 0 ? v.coordinate - y * e3 : v.coordinate });
    } else s[f] = v = Dt(Dt({}, v), {}, { tickCoord: v.coordinate });
    if (v.tickCoord != null) {
      var b = Ii(e3, v.tickCoord, g, o, l);
      b && (l = v.tickCoord - e3 * (g() / 2 + i), s[f] = Dt(Dt({}, v), {}, { isShow: true }));
    }
  }, c = a - 1; c >= 0; c--) u(c);
  return s;
}
function ML(e3, t, r, n, i, s) {
  var a = (n || []).slice(), o = a.length, { start: l, end: u } = t;
  if (s) {
    var c = n[o - 1];
    if (c != null) {
      var h = r(c, o - 1), f = e3 * (c.coordinate + e3 * h / 2 - u);
      if (a[o - 1] = c = Dt(Dt({}, c), {}, { tickCoord: f > 0 ? c.coordinate - f * e3 : c.coordinate }), c.tickCoord != null) {
        var d = Ii(e3, c.tickCoord, () => h, l, u);
        d && (u = c.tickCoord - e3 * (h / 2 + i), a[o - 1] = Dt(Dt({}, c), {}, { isShow: true }));
      }
    }
  }
  for (var v = s ? o - 1 : o, m = function(b) {
    var w = a[b];
    if (w == null) return 1;
    var x = w, P, S = () => (P === void 0 && (P = r(w, b)), P);
    if (b === 0) {
      var _ = e3 * (x.coordinate - e3 * S() / 2 - l);
      a[b] = x = Dt(Dt({}, x), {}, { tickCoord: _ < 0 ? x.coordinate - _ * e3 : x.coordinate });
    } else a[b] = x = Dt(Dt({}, x), {}, { tickCoord: x.coordinate });
    if (x.tickCoord != null) {
      var M = Ii(e3, x.tickCoord, S, l, u);
      M && (l = x.tickCoord + e3 * (S() / 2 + i), a[b] = Dt(Dt({}, x), {}, { isShow: true }));
    }
  }, g = 0; g < v; g++) m(g);
  return a;
}
function gf(e3, t, r) {
  var { tick: n, ticks: i, viewBox: s, minTickGap: a, orientation: o, interval: l, tickFormatter: u, unit: c, angle: h } = e3;
  if (!i || !i.length || !n) return [];
  if (L(l) || Ln.isSsr) {
    var f;
    return (f = bL(i, L(l) ? l : 0)) !== null && f !== void 0 ? f : [];
  }
  var d = [], v = o === "top" || o === "bottom" ? "width" : "height", m = c && v === "width" ? yn(c, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, g = (P, S) => {
    var _ = typeof u == "function" ? u(P.value, S) : P.value;
    return v === "width" ? gL(yn(_, { fontSize: t, letterSpacing: r }), m, h) : yn(_, { fontSize: t, letterSpacing: r })[v];
  }, y = i[0], b = i[1], w = i.length >= 2 && y != null && b != null ? ue(b.coordinate - y.coordinate) : 1, x = yL(s, w, v);
  return l === "equidistantPreserveStart" ? wL(w, x, g, i, a) : l === "equidistantPreserveEnd" ? xL(w, x, g, i, a) : (l === "preserveStart" || l === "preserveStartEnd" ? d = ML(w, x, g, i, a, l === "preserveStartEnd") : d = OL(w, x, g, i, a), d.filter((P) => P.isShow));
}
var EL = (e3) => {
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
}, AL = { xAxis: {}, yAxis: {} }, m1 = $t({ name: "renderedTicks", initialState: AL, reducers: { setRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n, ticks: i } = t.payload;
  e3[r][n] = i;
}, removeRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n } = t.payload;
  delete e3[r][n];
} } }), { setRenderedTicks: CL, removeRenderedTicks: IL } = m1.actions, kL = m1.reducer, jL = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function TL(e3, t) {
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
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, qr.apply(null, arguments);
}
function lg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), true).forEach(function(n) {
      DL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function DL(e3, t, r) {
  return (t = LL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function LL(e3) {
  var t = RL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function RL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Ue = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: Rt.axis };
function $L(e3) {
  var { x: t, y: r, width: n, height: i, orientation: s, mirror: a, axisLine: o, otherSvgProps: l } = e3;
  if (!o) return null;
  var u = ct(ct(ct({}, l), Xt(o)), {}, { fill: "none" });
  if (s === "top" || s === "bottom") {
    var c = +(s === "top" && !a || s === "bottom" && a);
    u = ct(ct({}, u), {}, { x1: t, y1: r + c * i, x2: t + n, y2: r + c * i });
  } else {
    var h = +(s === "left" && !a || s === "right" && a);
    u = ct(ct({}, u), {}, { x1: t + h * n, y1: r, x2: t + h * n, y2: r + i });
  }
  return p.createElement("line", qr({}, u, { className: X("recharts-cartesian-axis-line", Dn(o, "className")) }));
}
function zL(e3, t, r, n, i, s, a, o, l) {
  var u, c, h, f, d, v, m = o ? -1 : 1, g = e3.tickSize || a, y = L(e3.tickCoord) ? e3.tickCoord : e3.coordinate;
  switch (s) {
    case "top":
      u = c = e3.coordinate, f = r + +!o * i, h = f - m * g, v = h - m * l, d = y;
      break;
    case "left":
      h = f = e3.coordinate, c = t + +!o * n, u = c - m * g, d = u - m * l, v = y;
      break;
    case "right":
      h = f = e3.coordinate, c = t + +o * n, u = c + m * g, d = u + m * l, v = y;
      break;
    default:
      u = c = e3.coordinate, f = r + +o * i, h = f + m * g, v = h + m * l, d = y;
      break;
  }
  return { line: { x1: u, y1: h, x2: c, y2: f }, tick: { x: d, y: v } };
}
function BL(e3, t) {
  switch (e3) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function FL(e3, t) {
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
function WL(e3) {
  var { option: t, tickProps: r, value: n } = e3, i, s = X(r.className, "recharts-cartesian-axis-tick-value");
  if (p.isValidElement(t)) i = p.cloneElement(t, ct(ct({}, r), {}, { className: s }));
  else if (typeof t == "function") i = t(ct(ct({}, r), {}, { className: s }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = X(a, o2(t))), i = p.createElement(ff, qr({}, r, { className: a }), n);
  }
  return i;
}
function qL(e3) {
  var { ticks: t, axisType: r, axisId: n } = e3, i = lt();
  return p.useEffect(() => {
    if (n == null || r == null) return Je;
    var s = t.map((a) => ({ value: a.value, coordinate: a.coordinate, offset: a.offset, index: a.index }));
    return i(CL({ ticks: s, axisId: n, axisType: r })), () => {
      i(IL({ axisId: n, axisType: r }));
    };
  }, [i, t, n, r]), null;
}
var KL = p.forwardRef((e3, t) => {
  var { ticks: r = [], tick: n, tickLine: i, stroke: s, tickFormatter: a, unit: o, padding: l, tickTextProps: u, orientation: c, mirror: h, x: f, y: d, width: v, height: m, tickSize: g, tickMargin: y, fontSize: b, letterSpacing: w, getTicksConfig: x, events: P, axisType: S, axisId: _ } = e3, M = gf(ct(ct({}, x), {}, { ticks: r }), b, w), A = Xt(x), k = ja(n), I = Hx(A.textAnchor) ? A.textAnchor : BL(c, h), E = FL(c, h), $ = {};
  typeof i == "object" && ($ = i);
  var R = ct(ct({}, A), {}, { fill: "none" }, $), z = M.map((G) => ct({ entry: G }, zL(G, f, d, v, m, c, g, h, y))), H = z.map((G) => {
    var { entry: F, line: U } = G;
    return p.createElement(kt, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(F.value, "-").concat(F.coordinate, "-").concat(F.tickCoord) }, i && p.createElement("line", qr({}, R, U, { className: X("recharts-cartesian-axis-tick-line", Dn(i, "className")) })));
  }), W = z.map((G, F) => {
    var U, Bt, { entry: ut, tick: me } = G, Ut = ct(ct(ct(ct({ verticalAnchor: E }, A), {}, { textAnchor: I, stroke: "none", fill: s }, me), {}, { index: F, payload: ut, visibleTicksCount: M.length, tickFormatter: a, padding: l }, u), {}, { angle: (U = (Bt = u == null ? void 0 : u.angle) !== null && Bt !== void 0 ? Bt : A.angle) !== null && U !== void 0 ? U : 0 }), Re = ct(ct({}, Ut), k);
    return p.createElement(kt, qr({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat(ut.value, "-").concat(ut.coordinate, "-").concat(ut.tickCoord) }, LS(P, ut, F)), n && p.createElement(WL, { option: n, tickProps: Re, value: "".concat(typeof a == "function" ? a(ut.value, F) : ut.value).concat(o || "") }));
  });
  return p.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(S, "-ticks") }, p.createElement(qL, { ticks: M, axisId: _, axisType: S }), W.length > 0 && p.createElement(Le, { zIndex: Rt.label }, p.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(S, "-tick-labels"), ref: t }, W)), H.length > 0 && p.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(S, "-tick-lines") }, H));
}), UL = p.forwardRef((e3, t) => {
  var { axisLine: r, width: n, height: i, className: s, hide: a, ticks: o, axisType: l, axisId: u } = e3, c = TL(e3, jL), [h, f] = p.useState(""), [d, v] = p.useState(""), m = p.useRef(null);
  p.useImperativeHandle(t, () => ({ getCalculatedWidth: () => {
    var y;
    return EL({ ticks: m.current, label: (y = e3.labelRef) === null || y === void 0 ? void 0 : y.current, labelGapWithTick: 5, tickSize: e3.tickSize, tickMargin: e3.tickMargin });
  } }));
  var g = p.useCallback((y) => {
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
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : p.createElement(Le, { zIndex: e3.zIndex }, p.createElement(kt, { className: X("recharts-cartesian-axis", s) }, p.createElement($L, { x: e3.x, y: e3.y, width: n, height: i, orientation: e3.orientation, mirror: e3.mirror, axisLine: r, otherSvgProps: Xt(e3) }), p.createElement(KL, { ref: g, axisType: l, events: c, fontSize: h, getTicksConfig: e3, height: e3.height, letterSpacing: d, mirror: e3.mirror, orientation: e3.orientation, padding: e3.padding, stroke: e3.stroke, tick: e3.tick, tickFormatter: e3.tickFormatter, tickLine: e3.tickLine, tickMargin: e3.tickMargin, tickSize: e3.tickSize, tickTextProps: e3.tickTextProps, ticks: o, unit: e3.unit, width: e3.width, x: e3.x, y: e3.y, axisId: u }), p.createElement(DD, { x: e3.x, y: e3.y, width: e3.width, height: e3.height, lowerWidth: e3.width, upperWidth: e3.width }, p.createElement(UD, { label: e3.label, labelRef: e3.labelRef }), e3.children)));
}), yf = p.forwardRef((e3, t) => {
  var r = jt(e3, Ue);
  return p.createElement(UL, qr({}, r, { ref: t }));
});
yf.displayName = "CartesianAxis";
var VL = ["x1", "y1", "x2", "y2", "key"], YL = ["offset"], HL = ["xAxisId", "yAxisId"], GL = ["xAxisId", "yAxisId"];
function ug(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), true).forEach(function(n) {
      XL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function XL(e3, t, r) {
  return (t = JL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function JL(e3) {
  var t = ZL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ir.apply(null, arguments);
}
function _a(e3, t) {
  if (e3 == null) return {};
  var r, n, i = QL(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function QL(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var tR = (e3) => {
  var { fill: t } = e3;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: n, y: i, width: s, height: a, ry: o } = e3;
  return p.createElement("rect", { x: n, y: i, ry: o, width: s, height: a, stroke: "none", fill: t, fillOpacity: r, className: "recharts-cartesian-grid-bg" });
};
function g1(e3) {
  var { option: t, lineItemProps: r } = e3, n;
  if (p.isValidElement(t)) n = p.cloneElement(t, r);
  else if (typeof t == "function") n = t(r);
  else {
    var i, { x1: s, y1: a, x2: o, y2: l, key: u } = r, c = _a(r, VL), h = (i = Xt(c)) !== null && i !== void 0 ? i : {}, { offset: f } = h, d = _a(h, YL);
    n = p.createElement("line", Ir({}, d, { x1: s, y1: a, x2: o, y2: l, fill: "none", key: u }));
  }
  return n;
}
function eR(e3) {
  var { x: t, width: r, horizontal: n = true, horizontalPoints: i } = e3;
  if (!n || !i || !i.length) return null;
  var { xAxisId: s, yAxisId: a } = e3, o = _a(e3, HL), l = i.map((u, c) => {
    var h = Lt(Lt({}, o), {}, { x1: t, y1: u, x2: t + r, y2: u, key: "line-".concat(c), index: c });
    return p.createElement(g1, { key: "line-".concat(c), option: n, lineItemProps: h });
  });
  return p.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, l);
}
function rR(e3) {
  var { y: t, height: r, vertical: n = true, verticalPoints: i } = e3;
  if (!n || !i || !i.length) return null;
  var { xAxisId: s, yAxisId: a } = e3, o = _a(e3, GL), l = i.map((u, c) => {
    var h = Lt(Lt({}, o), {}, { x1: u, y1: t, x2: u, y2: t + r, key: "line-".concat(c), index: c });
    return p.createElement(g1, { option: n, lineItemProps: h, key: "line-".concat(c) });
  });
  return p.createElement("g", { className: "recharts-cartesian-grid-vertical" }, l);
}
function nR(e3) {
  var { horizontalFill: t, fillOpacity: r, x: n, y: i, width: s, height: a, horizontalPoints: o, horizontal: l = true } = e3;
  if (!l || !t || !t.length || o == null) return null;
  var u = o.map((h) => Math.round(h + i - i)).sort((h, f) => h - f);
  i !== u[0] && u.unshift(0);
  var c = u.map((h, f) => {
    var d = u[f + 1], v = d == null, m = v ? i + a - h : d - h;
    if (m <= 0) return null;
    var g = f % t.length;
    return p.createElement("rect", { key: "react-".concat(f), y: h, x: n, height: m, width: s, stroke: "none", fill: t[g], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return p.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, c);
}
function iR(e3) {
  var { vertical: t = true, verticalFill: r, fillOpacity: n, x: i, y: s, width: a, height: o, verticalPoints: l } = e3;
  if (!t || !r || !r.length) return null;
  var u = l.map((h) => Math.round(h + i - i)).sort((h, f) => h - f);
  i !== u[0] && u.unshift(0);
  var c = u.map((h, f) => {
    var d = u[f + 1], v = d == null, m = v ? i + a - h : d - h;
    if (m <= 0) return null;
    var g = f % r.length;
    return p.createElement("rect", { key: "react-".concat(f), x: h, y: s, width: m, height: o, stroke: "none", fill: r[g], fillOpacity: n, className: "recharts-cartesian-grid-bg" });
  });
  return p.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, c);
}
var sR = (e3, t) => {
  var { xAxis: r, width: n, height: i, offset: s } = e3;
  return ab(gf(Lt(Lt(Lt({}, Ue), r), {}, { ticks: ob(r), viewBox: { x: 0, y: 0, width: n, height: i } })), s.left, s.left + s.width, t);
}, aR = (e3, t) => {
  var { yAxis: r, width: n, height: i, offset: s } = e3;
  return ab(gf(Lt(Lt(Lt({}, Ue), r), {}, { ticks: ob(r), viewBox: { x: 0, y: 0, width: n, height: i } })), s.top, s.top + s.height, t);
}, oR = { horizontal: true, vertical: true, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [], xAxisId: 0, yAxisId: 0, syncWithTicks: false, zIndex: Rt.grid };
function lR(e3) {
  var t = th(), r = eh(), n = db(), i = Lt(Lt({}, jt(e3, oR)), {}, { x: L(e3.x) ? e3.x : n.left, y: L(e3.y) ? e3.y : n.top, width: L(e3.width) ? e3.width : n.width, height: L(e3.height) ? e3.height : n.height }), { xAxisId: s, yAxisId: a, x: o, y: l, width: u, height: c, syncWithTicks: h, horizontalValues: f, verticalValues: d } = i, v = zt(), m = B((A) => cm(A, "xAxis", s, v)), g = B((A) => cm(A, "yAxis", a, v));
  if (!de(u) || !de(c) || !L(o) || !L(l)) return null;
  var y = i.verticalCoordinatesGenerator || sR, b = i.horizontalCoordinatesGenerator || aR, { horizontalPoints: w, verticalPoints: x } = i;
  if ((!w || !w.length) && typeof b == "function") {
    var P = f && f.length, S = b({ yAxis: g ? Lt(Lt({}, g), {}, { ticks: P ? f : g.ticks }) : void 0, width: t ?? u, height: r ?? c, offset: n }, P ? true : h);
    Gs(Array.isArray(S), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof S, "]")), Array.isArray(S) && (w = S);
  }
  if ((!x || !x.length) && typeof y == "function") {
    var _ = d && d.length, M = y({ xAxis: m ? Lt(Lt({}, m), {}, { ticks: _ ? d : m.ticks }) : void 0, width: t ?? u, height: r ?? c, offset: n }, _ ? true : h);
    Gs(Array.isArray(M), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof M, "]")), Array.isArray(M) && (x = M);
  }
  return p.createElement(Le, { zIndex: i.zIndex }, p.createElement("g", { className: "recharts-cartesian-grid" }, p.createElement(tR, { fill: i.fill, fillOpacity: i.fillOpacity, x: i.x, y: i.y, width: i.width, height: i.height, ry: i.ry }), p.createElement(nR, Ir({}, i, { horizontalPoints: w })), p.createElement(iR, Ir({}, i, { verticalPoints: x })), p.createElement(eR, Ir({}, i, { offset: n, horizontalPoints: w, xAxis: m, yAxis: g })), p.createElement(rR, Ir({}, i, { offset: n, verticalPoints: x, xAxis: m, yAxis: g }))));
}
lR.displayName = "CartesianGrid";
var uR = {}, y1 = $t({ name: "errorBars", initialState: uR, reducers: { addErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] || (e3[r] = []), e3[r].push(n);
}, replaceErrorBar: (e3, t) => {
  var { itemId: r, prev: n, next: i } = t.payload;
  e3[r] && (e3[r] = e3[r].map((s) => s.dataKey === n.dataKey && s.direction === n.direction ? i : s));
}, removeErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] && (e3[r] = e3[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
} } }), { addErrorBar: yq, replaceErrorBar: bq, removeErrorBar: wq } = y1.actions, cR = y1.reducer, hR = ["children"];
function fR(e3, t) {
  if (e3 == null) return {};
  var r, n, i = dR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function dR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var vR = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 }, pR = p.createContext(vR);
function mR(e3) {
  var { children: t } = e3, r = fR(e3, hR);
  return p.createElement(pR.Provider, { value: r }, t);
}
function bf(e3, t) {
  var r, n, i = B((u) => er(u, e3)), s = B((u) => rr(u, t)), a = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : mt.allowDataOverflow, o = (n = s == null ? void 0 : s.allowDataOverflow) !== null && n !== void 0 ? n : gt.allowDataOverflow, l = a || o;
  return { needClip: l, needClipX: a, needClipY: o };
}
function b1(e3) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e3, i = Eo(), { needClipX: s, needClipY: a, needClip: o } = bf(t, r);
  if (!o || !i) return null;
  var { x: l, y: u, width: c, height: h } = i;
  return p.createElement("clipPath", { id: "clipPath-".concat(n) }, p.createElement("rect", { x: s ? l : l - c / 2, y: a ? u : u - h / 2, width: s ? c : c * 2, height: a ? h : h * 2 }));
}
var w1 = (e3, t, r, n) => Mo(e3, "xAxis", t, n), x1 = (e3, t, r, n) => Oo(e3, "xAxis", t, n), P1 = (e3, t, r, n) => Mo(e3, "yAxis", r, n), S1 = (e3, t, r, n) => Oo(e3, "yAxis", r, n), gR = O([rt, w1, P1, x1, S1], (e3, t, r, n, i) => Pe(e3, "xAxis") ? _n(t, n, false) : _n(r, i, false)), yR = (e3, t, r, n, i) => i;
function bR(e3) {
  return e3.type === "line";
}
var wR = O([Vh, yR], (e3, t) => e3.filter(bR).find((r) => r.id === t)), xR = O([rt, w1, P1, x1, S1, wR, gR, qi], (e3, t, r, n, i, s, a, o) => {
  var { chartData: l, dataStartIndex: u, dataEndIndex: c } = o;
  if (!(s == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || a == null || e3 !== "horizontal" && e3 !== "vertical")) {
    var { dataKey: h, data: f } = s, d;
    if (f != null && f.length > 0 ? d = f : d = l == null ? void 0 : l.slice(u, c + 1), d != null) return FR({ layout: e3, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataKey: h, bandSize: a, displayedData: d });
  }
});
function _1(e3) {
  var t = ja(e3), r = 3, n = 2;
  if (t != null) {
    var { r: i, strokeWidth: s } = t, a = Number(i), o = Number(s);
    return (Number.isNaN(a) || a < 0) && (a = r), (Number.isNaN(o) || o < 0) && (o = n), { r: a, strokeWidth: o };
  }
  return { r, strokeWidth: n };
}
var PR = ["id"], SR = ["type", "layout", "connectNulls", "needClip", "shape"], _R = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, ki.apply(null, arguments);
}
function cg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), true).forEach(function(n) {
      OR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function OR(e3, t, r) {
  return (t = MR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function MR(e3) {
  var t = ER(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ER(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function wf(e3, t) {
  if (e3 == null) return {};
  var r, n, i = AR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function AR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var CR = (e3) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: s } = e3;
  return [{ inactive: s, dataKey: t, type: i, color: n, value: Ja(r, t), payload: e3 }];
}, IR = p.memo((e3) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: s, name: a, hide: o, unit: l, tooltipType: u, id: c } = e3, h = { dataDefinedOnItem: r, getPosition: Je, settings: { stroke: n, strokeWidth: i, fill: s, dataKey: t, nameKey: void 0, name: Ja(a, t), hide: o, type: u, color: n, unit: l, graphicalItemId: c } };
  return p.createElement(pf, { tooltipEntrySettings: h });
}), O1 = (e3, t) => "".concat(t, "px ").concat(e3, "px");
function kR(e3, t) {
  for (var r = e3.length % 2 !== 0 ? [...e3, 0] : e3, n = [], i = 0; i < t; ++i) n.push(...r);
  return n;
}
var jR = (e3, t, r) => {
  var n = r.reduce((f, d) => f + d, 0);
  if (!n) return O1(t, e3);
  for (var i = Math.floor(e3 / n), s = e3 % n, a = [], o = 0, l = 0; o < r.length; l += (u = r[o]) !== null && u !== void 0 ? u : 0, ++o) {
    var u, c = r[o];
    if (c != null && l + c > s) {
      a = [...r.slice(0, o), s - l];
      break;
    }
  }
  var h = a.length % 2 === 0 ? [0, t] : [t];
  return [...kR(r, i), ...a, ...h].map((f) => "".concat(f, "px")).join(", ");
};
function TR(e3) {
  var { clipPathId: t, points: r, props: n } = e3, { dot: i, dataKey: s, needClip: a } = n, { id: o } = n, l = wf(n, PR), u = Xt(l);
  return p.createElement(c1, { points: r, dot: i, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: s, baseProps: u, needClip: a, clipPathId: t });
}
function NR(e3) {
  var { showLabels: t, children: r, points: n } = e3, i = p.useMemo(() => n == null ? void 0 : n.map((s) => {
    var a, o, l = { x: (a = s.x) !== null && a !== void 0 ? a : 0, y: (o = s.y) !== null && o !== void 0 ? o : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return Ae(Ae({}, l), {}, { value: s.value, payload: s.payload, viewBox: l, parentViewBox: void 0, fill: void 0 });
  }), [n]);
  return p.createElement(e1, { value: t ? i : void 0 }, r);
}
function hg(e3) {
  var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: s } = e3, { type: a, layout: o, connectNulls: l, needClip: u, shape: c } = s, h = wf(s, SR), f = Ae(Ae({}, vt(h)), {}, { fill: "none", className: "recharts-line-curve", clipPath: u ? "url(#clipPath-".concat(t, ")") : void 0, points: n, type: a, layout: o, connectNulls: l, strokeDasharray: i ?? s.strokeDasharray });
  return p.createElement(p.Fragment, null, (n == null ? void 0 : n.length) > 1 && p.createElement(O2, ki({ shapeType: "curve", option: c }, f, { pathRef: r })), p.createElement(TR, { points: n, clipPathId: t, props: s }));
}
function DR(e3) {
  try {
    return e3 && e3.getTotalLength && e3.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function LR(e3) {
  var { clipPathId: t, props: r, pathRef: n, previousPointsRef: i, longestAnimatedLengthRef: s } = e3, { points: a, strokeDasharray: o, isAnimationActive: l, animationBegin: u, animationDuration: c, animationEasing: h, animateNewValues: f, width: d, height: v, onAnimationEnd: m, onAnimationStart: g } = r, y = i.current, b = oo(a, "recharts-line-"), w = p.useRef(b), [x, P] = p.useState(false), S = !x, _ = p.useCallback(() => {
    typeof m == "function" && m(), P(false);
  }, [m]), M = p.useCallback(() => {
    typeof g == "function" && g(), P(true);
  }, [g]), A = DR(n.current), k = p.useRef(0);
  w.current !== b && (k.current = s.current, w.current = b);
  var I = k.current;
  return p.createElement(NR, { points: a, showLabels: S }, r.children, p.createElement(ao, { animationId: b, begin: u, duration: c, isActive: l, easing: h, onAnimationEnd: _, onAnimationStart: M, key: b }, (E) => {
    var $ = dt(I, A + I, E), R = Math.min($, A), z;
    if (l) if (o) {
      var H = "".concat(o).split(/[,\s]+/gim).map((F) => parseFloat(F));
      z = jR(R, A, H);
    } else z = O1(A, R);
    else z = o == null ? void 0 : String(o);
    if (E > 0 && A > 0 && (i.current = a, s.current = Math.max(s.current, R)), y) {
      var W = y.length / a.length, G = E === 1 ? a : a.map((F, U) => {
        var Bt = Math.floor(U * W);
        if (y[Bt]) {
          var ut = y[Bt];
          return Ae(Ae({}, F), {}, { x: dt(ut.x, F.x, E), y: dt(ut.y, F.y, E) });
        }
        return f ? Ae(Ae({}, F), {}, { x: dt(d * 2, F.x, E), y: dt(v / 2, F.y, E) }) : Ae(Ae({}, F), {}, { x: F.x, y: F.y });
      });
      return i.current = G, p.createElement(hg, { props: r, points: G, clipPathId: t, pathRef: n, strokeDasharray: z });
    }
    return p.createElement(hg, { props: r, points: a, clipPathId: t, pathRef: n, strokeDasharray: z });
  }), p.createElement(n1, { label: r.label }));
}
function RR(e3) {
  var { clipPathId: t, props: r } = e3, n = p.useRef(null), i = p.useRef(0), s = p.useRef(null);
  return p.createElement(LR, { props: r, clipPathId: t, previousPointsRef: n, longestAnimatedLengthRef: i, pathRef: s });
}
var $R = (e3, t) => {
  var r, n;
  return { x: (r = e3.x) !== null && r !== void 0 ? r : void 0, y: (n = e3.y) !== null && n !== void 0 ? n : void 0, value: e3.value, errorVal: ht(e3.payload, t) };
};
class zR extends p.Component {
  render() {
    var { hide: t, dot: r, points: n, className: i, xAxisId: s, yAxisId: a, top: o, left: l, width: u, height: c, id: h, needClip: f, zIndex: d } = this.props;
    if (t) return null;
    var v = X("recharts-line", i), m = h, { r: g, strokeWidth: y } = _1(r), b = vf(r), w = g * 2 + y, x = f ? "url(#clipPath-".concat(b ? "" : "dots-").concat(m, ")") : void 0;
    return p.createElement(Le, { zIndex: d }, p.createElement(kt, { className: v }, f && p.createElement("defs", null, p.createElement(b1, { clipPathId: m, xAxisId: s, yAxisId: a }), !b && p.createElement("clipPath", { id: "clipPath-dots-".concat(m) }, p.createElement("rect", { x: l - w / 2, y: o - w / 2, width: u + w, height: c + w }))), p.createElement(mR, { xAxisId: s, yAxisId: a, data: n, dataPointFormatter: $R, errorBarOffset: 0 }, p.createElement(RR, { props: this.props, clipPathId: m }))), p.createElement(Mc, { activeDot: this.props.activeDot, points: n, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: x }));
  }
}
var M1 = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: Rt.line, type: "linear" };
function BR(e3) {
  var t = jt(e3, M1), { activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: s, animationEasing: a, connectNulls: o, dot: l, hide: u, isAnimationActive: c, label: h, legendType: f, xAxisId: d, yAxisId: v, id: m } = t, g = wf(t, _R), { needClip: y } = bf(d, v), b = Eo(), w = Hr(), x = zt(), P = B((k) => xR(k, d, v, x, m));
  if (w !== "horizontal" && w !== "vertical" || P == null || b == null) return null;
  var { height: S, width: _, x: M, y: A } = b;
  return p.createElement(zR, ki({}, g, { id: m, connectNulls: o, dot: l, activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: s, animationEasing: a, isAnimationActive: c, hide: u, label: h, legendType: f, xAxisId: d, yAxisId: v, points: P, layout: w, height: S, width: _, left: M, top: A, needClip: y }));
}
function FR(e3) {
  var { layout: t, xAxis: r, yAxis: n, xAxisTicks: i, yAxisTicks: s, dataKey: a, bandSize: o, displayedData: l } = e3;
  return l.map((u, c) => {
    var h = ht(u, a);
    if (t === "horizontal") {
      var f = Hs({ axis: r, ticks: i, bandSize: o, entry: u, index: c }), d = bt(h) ? null : n.scale.map(h);
      return { x: f, y: d ?? null, value: h, payload: u };
    }
    var v = bt(h) ? null : r.scale.map(h), m = Hs({ axis: n, ticks: s, bandSize: o, entry: u, index: c });
    return v == null || m == null ? null : { x: v, y: m, value: h, payload: u };
  }).filter(Boolean);
}
function WR(e3) {
  var t = jt(e3, M1), r = zt();
  return p.createElement(mf, { id: t.id, type: "line" }, (n) => p.createElement(p.Fragment, null, p.createElement(o1, { legendPayload: CR(t) }), p.createElement(IR, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), p.createElement(u1, { type: "line", id: n, data: t.data, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, dataKey: t.dataKey, hide: t.hide, isPanorama: r }), p.createElement(BR, ki({}, t, { id: n }))));
}
var qR = p.memo(WR, Wi);
qR.displayName = "Line";
function xf(e3, t) {
  var r, n;
  return (r = (n = e3.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : h1;
}
function Pf(e3, t) {
  var r, n;
  return (r = (n = e3.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : h1;
}
var E1 = (e3, t, r) => Mo(e3, "xAxis", xf(e3, t), r), A1 = (e3, t, r) => Oo(e3, "xAxis", xf(e3, t), r), C1 = (e3, t, r) => Mo(e3, "yAxis", Pf(e3, t), r), I1 = (e3, t, r) => Oo(e3, "yAxis", Pf(e3, t), r), KR = O([rt, E1, C1, A1, I1], (e3, t, r, n, i) => Pe(e3, "xAxis") ? _n(t, n, false) : _n(r, i, false)), UR = (e3, t) => t, k1 = O([Vh, UR], (e3, t) => e3.filter((r) => r.type === "area").find((r) => r.id === t)), j1 = (e3) => {
  var t = rt(e3), r = Pe(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, VR = (e3, t) => {
  var r = j1(e3);
  return r === "yAxis" ? Pf(e3, t) : xf(e3, t);
}, YR = (e3, t, r) => Vw(e3, j1(e3), VR(e3, t), r), HR = O([k1, YR], (e3, t) => {
  var r;
  if (!(e3 == null || t == null)) {
    var { stackId: n } = e3, i = yh(e3);
    if (!(n == null || i == null)) {
      var s = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = s == null ? void 0 : s.find((o) => o.key === i);
      if (a != null) return a.map((o) => [o[0], o[1]]);
    }
  }
}), GR = O([rt, E1, C1, A1, I1, HR, kA, KR, k1, BA], (e3, t, r, n, i, s, a, o, l, u) => {
  var { chartData: c, dataStartIndex: h, dataEndIndex: f } = a;
  if (!(l == null || e3 !== "horizontal" && e3 !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null)) {
    var { data: d } = l, v;
    if (d && d.length > 0 ? v = d : v = c == null ? void 0 : c.slice(h, f + 1), v != null) return p$({ layout: e3, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataStartIndex: h, areaSettings: l, stackedData: s, displayedData: v, chartBaseValue: u, bandSize: o });
  }
}), XR = ["id"], JR = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Nr.apply(null, arguments);
}
function T1(e3, t) {
  if (e3 == null) return {};
  var r, n, i = ZR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function ZR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function fg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), true).forEach(function(n) {
      QR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function QR(e3, t, r) {
  return (t = t$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function t$(e3) {
  var t = e$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Oa(e3, t) {
  return e3 && e3 !== "none" ? e3 : t;
}
var r$ = (e3) => {
  var { dataKey: t, name: r, stroke: n, fill: i, legendType: s, hide: a } = e3;
  return [{ inactive: a, dataKey: t, type: s, color: Oa(n, i), value: Ja(r, t), payload: e3 }];
}, n$ = p.memo((e3) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: s, name: a, hide: o, unit: l, tooltipType: u, id: c } = e3, h = { dataDefinedOnItem: r, getPosition: Je, settings: { stroke: n, strokeWidth: i, fill: s, dataKey: t, nameKey: void 0, name: Ja(a, t), hide: o, type: u, color: Oa(n, s), unit: l, graphicalItemId: c } };
  return p.createElement(pf, { tooltipEntrySettings: h });
});
function i$(e3) {
  var { clipPathId: t, points: r, props: n } = e3, { needClip: i, dot: s, dataKey: a } = n, o = Xt(n);
  return p.createElement(c1, { points: r, dot: s, className: "recharts-area-dots", dotClassName: "recharts-area-dot", dataKey: a, baseProps: o, needClip: i, clipPathId: t });
}
function s$(e3) {
  var { showLabels: t, children: r, points: n } = e3, i = n.map((s) => {
    var a, o, l = { x: (a = s.x) !== null && a !== void 0 ? a : 0, y: (o = s.y) !== null && o !== void 0 ? o : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return fn(fn({}, l), {}, { value: s.value, payload: s.payload, parentViewBox: void 0, viewBox: l, fill: void 0 });
  });
  return p.createElement(e1, { value: t ? i : void 0 }, r);
}
function dg(e3) {
  var { points: t, baseLine: r, needClip: n, clipPathId: i, props: s } = e3, { layout: a, type: o, stroke: l, connectNulls: u, isRange: c } = s, { id: h } = s, f = T1(s, XR), d = Xt(f), v = vt(f);
  return p.createElement(p.Fragment, null, (t == null ? void 0 : t.length) > 1 && p.createElement(kt, { clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0 }, p.createElement(ui, Nr({}, v, { id: h, points: t, connectNulls: u, type: o, baseLine: r, layout: a, stroke: "none", className: "recharts-area-area" })), l !== "none" && p.createElement(ui, Nr({}, d, { className: "recharts-area-curve", layout: a, type: o, connectNulls: u, fill: "none", points: t })), l !== "none" && c && Array.isArray(r) && p.createElement(ui, Nr({}, d, { className: "recharts-area-curve", layout: a, type: o, connectNulls: u, fill: "none", points: r }))), p.createElement(i$, { points: t, props: f, clipPathId: i }));
}
function a$(e3) {
  var t, r, { alpha: n, baseLine: i, points: s, strokeWidth: a } = e3, o = (t = s[0]) === null || t === void 0 ? void 0 : t.y, l = (r = s[s.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!q(o) || !q(l)) return null;
  var u = n * Math.abs(o - l), c = Math.max(...s.map((h) => h.x || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((h) => h.x || 0), c)), L(c) ? p.createElement("rect", { x: 0, y: o < l ? o : o - u, width: c + (a ? parseInt("".concat(a), 10) : 1), height: Math.floor(u) }) : null;
}
function o$(e3) {
  var t, r, { alpha: n, baseLine: i, points: s, strokeWidth: a } = e3, o = (t = s[0]) === null || t === void 0 ? void 0 : t.x, l = (r = s[s.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!q(o) || !q(l)) return null;
  var u = n * Math.abs(o - l), c = Math.max(...s.map((h) => h.y || 0));
  return L(i) ? c = Math.max(i, c) : i && Array.isArray(i) && i.length && (c = Math.max(...i.map((h) => h.y || 0), c)), L(c) ? p.createElement("rect", { x: o < l ? o : o - u, y: 0, width: u, height: Math.floor(c + (a ? parseInt("".concat(a), 10) : 1)) }) : null;
}
function l$(e3) {
  var { alpha: t, layout: r, points: n, baseLine: i, strokeWidth: s } = e3;
  return r === "vertical" ? p.createElement(a$, { alpha: t, points: n, baseLine: i, strokeWidth: s }) : p.createElement(o$, { alpha: t, points: n, baseLine: i, strokeWidth: s });
}
function u$(e3) {
  var { needClip: t, clipPathId: r, props: n, previousPointsRef: i, previousBaselineRef: s } = e3, { points: a, baseLine: o, isAnimationActive: l, animationBegin: u, animationDuration: c, animationEasing: h, onAnimationStart: f, onAnimationEnd: d } = n, v = p.useMemo(() => ({ points: a, baseLine: o }), [a, o]), m = oo(v, "recharts-area-"), g = rh(), [y, b] = p.useState(false), w = !y, x = p.useCallback(() => {
    typeof d == "function" && d(), b(false);
  }, [d]), P = p.useCallback(() => {
    typeof f == "function" && f(), b(true);
  }, [f]);
  if (g == null) return null;
  var S = i.current, _ = s.current;
  return p.createElement(s$, { showLabels: w, points: a }, n.children, p.createElement(ao, { animationId: m, begin: u, duration: c, isActive: l, easing: h, onAnimationEnd: x, onAnimationStart: P, key: m }, (M) => {
    if (S) {
      var A = S.length / a.length, k = M === 1 ? a : a.map((E, $) => {
        var R = Math.floor($ * A);
        if (S[R]) {
          var z = S[R];
          return fn(fn({}, E), {}, { x: dt(z.x, E.x, M), y: dt(z.y, E.y, M) });
        }
        return E;
      }), I;
      return L(o) ? I = dt(_, o, M) : bt(o) || fe(o) ? I = dt(_, 0, M) : I = o.map((E, $) => {
        var R = Math.floor($ * A);
        if (Array.isArray(_) && _[R]) {
          var z = _[R];
          return fn(fn({}, E), {}, { x: dt(z.x, E.x, M), y: dt(z.y, E.y, M) });
        }
        return E;
      }), M > 0 && (i.current = k, s.current = I), p.createElement(dg, { points: k, baseLine: I, needClip: t, clipPathId: r, props: n });
    }
    return M > 0 && (i.current = a, s.current = o), p.createElement(kt, null, l && p.createElement("defs", null, p.createElement("clipPath", { id: "animationClipPath-".concat(r) }, p.createElement(l$, { alpha: M, points: a, baseLine: o, layout: g, strokeWidth: n.strokeWidth }))), p.createElement(kt, { clipPath: "url(#animationClipPath-".concat(r, ")") }, p.createElement(dg, { points: a, baseLine: o, needClip: t, clipPathId: r, props: n })));
  }), p.createElement(n1, { label: n.label }));
}
function c$(e3) {
  var { needClip: t, clipPathId: r, props: n } = e3, i = p.useRef(null), s = p.useRef();
  return p.createElement(u$, { needClip: t, clipPathId: r, props: n, previousPointsRef: i, previousBaselineRef: s });
}
class h$ extends p.PureComponent {
  render() {
    var { hide: t, dot: r, points: n, className: i, top: s, left: a, needClip: o, xAxisId: l, yAxisId: u, width: c, height: h, id: f, baseLine: d, zIndex: v } = this.props;
    if (t) return null;
    var m = X("recharts-area", i), g = f, { r: y, strokeWidth: b } = _1(r), w = vf(r), x = y * 2 + b, P = o ? "url(#clipPath-".concat(w ? "" : "dots-").concat(g, ")") : void 0;
    return p.createElement(Le, { zIndex: v }, p.createElement(kt, { className: m }, o && p.createElement("defs", null, p.createElement(b1, { clipPathId: g, xAxisId: l, yAxisId: u }), !w && p.createElement("clipPath", { id: "clipPath-dots-".concat(g) }, p.createElement("rect", { x: a - x / 2, y: s - x / 2, width: c + x, height: h + x }))), p.createElement(c$, { needClip: o, clipPathId: g, props: this.props })), p.createElement(Mc, { points: n, mainColor: Oa(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P }), this.props.isRange && Array.isArray(d) && p.createElement(Mc, { points: d, mainColor: Oa(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P }));
  }
}
var f$ = { activeDot: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: false, fill: "#3182bd", fillOpacity: 0.6, hide: false, isAnimationActive: "auto", legendType: "line", stroke: "#3182bd", strokeWidth: 1, type: "linear", label: false, xAxisId: 0, yAxisId: 0, zIndex: Rt.area };
function d$(e3) {
  var t, { activeDot: r, animationBegin: n, animationDuration: i, animationEasing: s, connectNulls: a, dot: o, fill: l, fillOpacity: u, hide: c, isAnimationActive: h, legendType: f, stroke: d, xAxisId: v, yAxisId: m } = e3, g = T1(e3, JR), y = Hr(), b = Lx(), { needClip: w } = bf(v, m), x = zt(), { points: P, isRange: S, baseLine: _ } = (t = B(($) => GR($, e3.id, x))) !== null && t !== void 0 ? t : {}, M = Eo();
  if (y !== "horizontal" && y !== "vertical" || M == null || b !== "AreaChart" && b !== "ComposedChart") return null;
  var { height: A, width: k, x: I, y: E } = M;
  return !P || !P.length ? null : p.createElement(h$, Nr({}, g, { activeDot: r, animationBegin: n, animationDuration: i, animationEasing: s, baseLine: _, connectNulls: a, dot: o, fill: l, fillOpacity: u, height: A, hide: c, layout: y, isAnimationActive: h, isRange: S, legendType: f, needClip: w, points: P, stroke: d, width: k, left: I, top: E, xAxisId: v, yAxisId: m }));
}
var v$ = (e3, t, r, n, i) => {
  var s = r ?? t;
  if (L(s)) return s;
  var a = e3 === "horizontal" ? i : n, o = a.scale.domain();
  if (a.type === "number") {
    var l = Math.max(o[0], o[1]), u = Math.min(o[0], o[1]);
    return s === "dataMin" ? u : s === "dataMax" || l < 0 ? l : Math.max(Math.min(o[0], o[1]), 0);
  }
  return s === "dataMin" ? o[0] : s === "dataMax" ? o[1] : o[0];
};
function p$(e3) {
  var { areaSettings: { connectNulls: t, baseValue: r, dataKey: n }, stackedData: i, layout: s, chartBaseValue: a, xAxis: o, yAxis: l, displayedData: u, dataStartIndex: c, xAxisTicks: h, yAxisTicks: f, bandSize: d } = e3, v = i && i.length, m = v$(s, a, r, o, l), g = s === "horizontal", y = false, b = u.map((x, P) => {
    var S, _, M, A;
    if (v) A = i[c + P];
    else {
      var k = ht(x, n);
      Array.isArray(k) ? (A = k, y = true) : A = [m, k];
    }
    var I = (S = (_ = A) === null || _ === void 0 ? void 0 : _[1]) !== null && S !== void 0 ? S : null, E = I == null || v && !t && ht(x, n) == null;
    if (g) {
      var $;
      return { x: Hs({ axis: o, ticks: h, bandSize: d, entry: x, index: P }), y: E ? null : ($ = l.scale.map(I)) !== null && $ !== void 0 ? $ : null, value: A, payload: x };
    }
    return { x: E ? null : (M = o.scale.map(I)) !== null && M !== void 0 ? M : null, y: Hs({ axis: l, ticks: f, bandSize: d, entry: x, index: P }), value: A, payload: x };
  }), w;
  return v || y ? w = b.map((x) => {
    var P, S = Array.isArray(x.value) ? x.value[0] : null;
    if (g) {
      var _;
      return { x: x.x, y: S != null && x.y != null && (_ = l.scale.map(S)) !== null && _ !== void 0 ? _ : null, payload: x.payload };
    }
    return { x: S != null && (P = o.scale.map(S)) !== null && P !== void 0 ? P : null, y: x.y, payload: x.payload };
  }) : w = g ? l.scale.map(m) : o.scale.map(m), { points: b, baseLine: w ?? 0, isRange: y };
}
function m$(e3) {
  var t = jt(e3, f$), r = zt();
  return p.createElement(mf, { id: t.id, type: "area" }, (n) => p.createElement(p.Fragment, null, p.createElement(o1, { legendPayload: r$(t) }), p.createElement(n$, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), p.createElement(u1, { type: "area", id: n, data: t.data, dataKey: t.dataKey, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, stackId: zO(t.stackId), hide: t.hide, barSize: void 0, baseValue: t.baseValue, isPanorama: r, connectNulls: t.connectNulls }), p.createElement(d$, Nr({}, t, { id: n }))));
}
var g$ = p.memo(m$, Wi);
g$.displayName = "Area";
var y$ = ["domain", "range"], b$ = ["domain", "range"];
function vg(e3, t) {
  if (e3 == null) return {};
  var r, n, i = w$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function w$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function pg(e3, t) {
  return e3 === t ? true : Array.isArray(e3) && e3.length === 2 && Array.isArray(t) && t.length === 2 ? e3[0] === t[0] && e3[1] === t[1] : false;
}
function N1(e3, t) {
  if (e3 === t) return true;
  var { domain: r, range: n } = e3, i = vg(e3, y$), { domain: s, range: a } = t, o = vg(t, b$);
  return !pg(r, s) || !pg(n, a) ? false : Wi(i, o);
}
var x$ = ["type"], P$ = ["dangerouslySetInnerHTML", "ticks", "scale"], S$ = ["id", "scale"];
function Ec() {
  return Ec = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ec.apply(null, arguments);
}
function mg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gg(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), true).forEach(function(n) {
      _$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function _$(e3, t, r) {
  return (t = O$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function O$(e3) {
  var t = M$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function M$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ac(e3, t) {
  if (e3 == null) return {};
  var r, n, i = E$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function E$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function A$(e3) {
  var t = lt(), r = p.useRef(null), n = rh(), { type: i } = e3, s = Ac(e3, x$), a = co(n, "xAxis", i), o = p.useMemo(() => {
    if (a != null) return gg(gg({}, s), {}, { type: a });
  }, [s, a]);
  return p.useLayoutEffect(() => {
    o != null && (r.current === null ? t(H2(o)) : r.current !== o && t(G2({ prev: r.current, next: o })), r.current = o);
  }, [o, t]), p.useLayoutEffect(() => () => {
    r.current && (t(X2(r.current)), r.current = null);
  }, [t]), null;
}
var C$ = (e3) => {
  var { xAxisId: t, className: r } = e3, n = B(ub), i = zt(), s = "xAxis", a = B((y) => dx(y, s, t, i)), o = B((y) => mj(y, t)), l = B((y) => Pj(y, t)), u = B((y) => Tw(y, t));
  if (o == null || l == null || u == null) return null;
  var { dangerouslySetInnerHTML: c, ticks: h, scale: f } = e3, d = Ac(e3, P$), { id: v, scale: m } = u, g = Ac(u, S$);
  return p.createElement(yf, Ec({}, d, g, { x: l.x, y: l.y, width: o.width, height: o.height, className: X("recharts-".concat(s, " ").concat(s), r), viewBox: n, ticks: a, axisType: s, axisId: t }));
}, I$ = { allowDataOverflow: mt.allowDataOverflow, allowDecimals: mt.allowDecimals, allowDuplicatedCategory: mt.allowDuplicatedCategory, angle: mt.angle, axisLine: Ue.axisLine, height: mt.height, hide: false, includeHidden: mt.includeHidden, interval: mt.interval, label: false, minTickGap: mt.minTickGap, mirror: mt.mirror, orientation: mt.orientation, padding: mt.padding, reversed: mt.reversed, scale: mt.scale, tick: mt.tick, tickCount: mt.tickCount, tickLine: Ue.tickLine, tickSize: Ue.tickSize, type: mt.type, niceTicks: mt.niceTicks, xAxisId: 0 }, k$ = (e3) => {
  var t = jt(e3, I$);
  return p.createElement(p.Fragment, null, p.createElement(A$, { allowDataOverflow: t.allowDataOverflow, allowDecimals: t.allowDecimals, allowDuplicatedCategory: t.allowDuplicatedCategory, angle: t.angle, dataKey: t.dataKey, domain: t.domain, height: t.height, hide: t.hide, id: t.xAxisId, includeHidden: t.includeHidden, interval: t.interval, minTickGap: t.minTickGap, mirror: t.mirror, name: t.name, orientation: t.orientation, padding: t.padding, reversed: t.reversed, scale: t.scale, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, niceTicks: t.niceTicks }), p.createElement(C$, t));
}, j$ = p.memo(k$, N1);
j$.displayName = "XAxis";
var T$ = ["type"], N$ = ["dangerouslySetInnerHTML", "ticks", "scale"], D$ = ["id", "scale"];
function Cc() {
  return Cc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Cc.apply(null, arguments);
}
function yg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bg(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), true).forEach(function(n) {
      L$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function L$(e3, t, r) {
  return (t = R$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function R$(e3) {
  var t = $$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ic(e3, t) {
  if (e3 == null) return {};
  var r, n, i = z$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function z$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function B$(e3) {
  var t = lt(), r = p.useRef(null), n = rh(), { type: i } = e3, s = Ic(e3, T$), a = co(n, "yAxis", i), o = p.useMemo(() => {
    if (a != null) return bg(bg({}, s), {}, { type: a });
  }, [a, s]);
  return p.useLayoutEffect(() => {
    o != null && (r.current === null ? t(J2(o)) : r.current !== o && t(Z2({ prev: r.current, next: o })), r.current = o);
  }, [o, t]), p.useLayoutEffect(() => () => {
    r.current && (t(Q2(r.current)), r.current = null);
  }, [t]), null;
}
function F$(e3) {
  var { yAxisId: t, className: r, width: n, label: i } = e3, s = p.useRef(null), a = p.useRef(null), o = B(ub), l = zt(), u = lt(), c = "yAxis", h = B((S) => Oj(S, t)), f = B((S) => _j(S, t)), d = B((S) => dx(S, c, t, l)), v = B((S) => Nw(S, t));
  if (p.useLayoutEffect(() => {
    if (!(n !== "auto" || !h || df(i) || p.isValidElement(i) || v == null)) {
      var S = s.current;
      if (S) {
        var _ = S.getCalculatedWidth();
        Math.round(h.width) !== Math.round(_) && u(tL({ id: t, width: _ }));
      }
    }
  }, [d, h, u, i, t, n, v]), h == null || f == null || v == null) return null;
  var { dangerouslySetInnerHTML: m, ticks: g, scale: y } = e3, b = Ic(e3, N$), { id: w, scale: x } = v, P = Ic(v, D$);
  return p.createElement(yf, Cc({}, b, P, { ref: s, labelRef: a, x: f.x, y: f.y, tickTextProps: n === "auto" ? { width: void 0 } : { width: n }, width: h.width, height: h.height, className: X("recharts-".concat(c, " ").concat(c), r), viewBox: o, ticks: d, axisType: c, axisId: t }));
}
var W$ = { allowDataOverflow: gt.allowDataOverflow, allowDecimals: gt.allowDecimals, allowDuplicatedCategory: gt.allowDuplicatedCategory, angle: gt.angle, axisLine: Ue.axisLine, hide: false, includeHidden: gt.includeHidden, interval: gt.interval, label: false, minTickGap: gt.minTickGap, mirror: gt.mirror, orientation: gt.orientation, padding: gt.padding, reversed: gt.reversed, scale: gt.scale, tick: gt.tick, tickCount: gt.tickCount, tickLine: Ue.tickLine, tickSize: Ue.tickSize, type: gt.type, niceTicks: gt.niceTicks, width: gt.width, yAxisId: 0 }, q$ = (e3) => {
  var t = jt(e3, W$);
  return p.createElement(p.Fragment, null, p.createElement(B$, { interval: t.interval, id: t.yAxisId, scale: t.scale, type: t.type, domain: t.domain, allowDataOverflow: t.allowDataOverflow, dataKey: t.dataKey, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDecimals: t.allowDecimals, tickCount: t.tickCount, padding: t.padding, includeHidden: t.includeHidden, reversed: t.reversed, ticks: t.ticks, width: t.width, orientation: t.orientation, mirror: t.mirror, hide: t.hide, unit: t.unit, name: t.name, angle: t.angle, minTickGap: t.minTickGap, tick: t.tick, tickFormatter: t.tickFormatter, niceTicks: t.niceTicks }), p.createElement(F$, t));
}, K$ = p.memo(q$, N1);
K$.displayName = "YAxis";
var U$ = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} };
function V$(e3) {
  var t = jt(e3, U$), { animationId: r, from: n, to: i, attributeName: s, isActive: a, canBegin: o, duration: l, easing: u, begin: c, onAnimationEnd: h, onAnimationStart: f, children: d } = t, v = sh(), m = a === "auto" ? !Ln.isSsr && !v : a, g = Mb(r + s, t.animationManager), [y, b] = p.useState(() => m ? n : i), w = p.useRef(false), x = p.useCallback(() => {
    b(n), f();
  }, [n, f]);
  if (p.useEffect(() => {
    if (!m || !o) return Je;
    w.current = true;
    var S = g.subscribe(b);
    return g.start([x, c, i, l, h]), () => {
      g.stop(), S && S(), h();
    };
  }, [m, o, l, u, c, x, h, g, i, n]), !m) return d({ [s]: i });
  if (!o) return d({ [s]: n });
  if (w.current) {
    var P = ah([s], l, u);
    return d({ transition: P, [s]: y });
  }
  return d({ [s]: n });
}
var Y$ = (e3, t) => t, Sf = O([Y$, rt, Gb, _t, Ix, nr, YT, Tt], tN);
function H$(e3) {
  return "getBBox" in e3.currentTarget && typeof e3.currentTarget.getBBox == "function";
}
function _f(e3) {
  var t = e3.currentTarget.getBoundingClientRect(), r, n;
  if (H$(e3)) {
    var i = e3.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var s = e3.currentTarget;
    r = s.offsetWidth > 0 ? t.width / s.offsetWidth : 1, n = s.offsetHeight > 0 ? t.height / s.offsetHeight : 1;
  }
  var a = (o, l) => ({ relativeX: Math.round((o - t.left) / r), relativeY: Math.round((l - t.top) / n) });
  return "touches" in e3 ? Array.from(e3.touches).map((o) => a(o.clientX, o.clientY)) : a(e3.clientX, e3.clientY);
}
var D1 = ie("mouseClick"), L1 = $i();
L1.startListening({ actionCreator: D1, effect: (e3, t) => {
  var r = e3.payload, n = Sf(t.getState(), _f(r));
  (n == null ? void 0 : n.activeIndex) != null && t.dispatch(Bj({ activeIndex: n.activeIndex, activeDataKey: void 0, activeCoordinate: n.activeCoordinate }));
} });
var kc = ie("mouseMove"), R1 = $i(), nn = null, wr = null, cu = null;
R1.startListening({ actionCreator: kc, effect: (e3, t) => {
  var r = e3.payload, n = t.getState(), { throttleDelay: i, throttledEvents: s } = n.eventSettings, a = s === "all" || (s == null ? void 0 : s.includes("mousemove"));
  nn !== null && (cancelAnimationFrame(nn), nn = null), wr !== null && (typeof i != "number" || !a) && (clearTimeout(wr), wr = null), cu = _f(r);
  var o = () => {
    var l = t.getState(), u = Ji(l, l.tooltip.settings.shared);
    if (!cu) {
      nn = null, wr = null;
      return;
    }
    if (u === "axis") {
      var c = Sf(l, cu);
      (c == null ? void 0 : c.activeIndex) != null ? t.dispatch(wx({ activeIndex: c.activeIndex, activeDataKey: void 0, activeCoordinate: c.activeCoordinate })) : t.dispatch(bx());
    }
    nn = null, wr = null;
  };
  if (!a) {
    o();
    return;
  }
  i === "raf" ? nn = requestAnimationFrame(o) : typeof i == "number" && wr === null && (wr = setTimeout(o, i));
} });
function G$(e3, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e3 === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var wg = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false }, $1 = $t({ name: "rootProps", initialState: wg, reducers: { updateOptions: (e3, t) => {
  var r;
  e3.accessibilityLayer = t.payload.accessibilityLayer, e3.barCategoryGap = t.payload.barCategoryGap, e3.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : wg.barGap, e3.barSize = t.payload.barSize, e3.maxBarSize = t.payload.maxBarSize, e3.stackOffset = t.payload.stackOffset, e3.syncId = t.payload.syncId, e3.syncMethod = t.payload.syncMethod, e3.className = t.payload.className, e3.baseValue = t.payload.baseValue, e3.reverseStackOrder = t.payload.reverseStackOrder;
} } }), X$ = $1.reducer, { updateOptions: J$ } = $1.actions, Z$ = null, Q$ = { updatePolarOptions: (e3, t) => e3 === null ? t.payload : (e3.startAngle = t.payload.startAngle, e3.endAngle = t.payload.endAngle, e3.cx = t.payload.cx, e3.cy = t.payload.cy, e3.innerRadius = t.payload.innerRadius, e3.outerRadius = t.payload.outerRadius, e3) }, z1 = $t({ name: "polarOptions", initialState: Z$, reducers: Q$ }), { updatePolarOptions: xq } = z1.actions, tz = z1.reducer, B1 = ie("keyDown"), F1 = ie("focus"), W1 = ie("blur"), Ao = $i(), sn = null, xr = null, vs = null;
Ao.startListening({ actionCreator: B1, effect: (e3, t) => {
  vs = e3.payload, sn !== null && (cancelAnimationFrame(sn), sn = null);
  var r = t.getState(), { throttleDelay: n, throttledEvents: i } = r.eventSettings, s = i === "all" || i.includes("keydown");
  xr !== null && (typeof n != "number" || !s) && (clearTimeout(xr), xr = null);
  var a = () => {
    try {
      var o = t.getState(), l = o.rootProps.accessibilityLayer !== false;
      if (!l) return;
      var { keyboardInteraction: u } = o.tooltip, c = vs;
      if (c !== "ArrowRight" && c !== "ArrowLeft" && c !== "Enter") return;
      var h = ci(u, Wr(o), Cn(o), In(o)), f = h == null ? -1 : Number(h), d = !Number.isFinite(f) || f < 0, v = nr(o), m = Wr(o), g = Ji(o, o.tooltip.settings.shared);
      if (c === "Enter") {
        if (d) return;
        var y = ba(o, g, "hover", String(u.index));
        t.dispatch(ya({ active: !u.active, activeIndex: u.index, activeCoordinate: y }));
        return;
      }
      var b = Ij(o), w = b === "left-to-right" ? 1 : -1, x = c === "ArrowRight" ? 1 : -1, P;
      if (d) {
        var S = Cn(o), _ = In(o), M = x * w, A = (R) => ({ active: false, index: String(R), dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 });
        if (P = -1, M > 0) {
          for (var k = 0; k < m.length; k++) if (ci(A(k), m, S, _) != null) {
            P = k;
            break;
          }
        } else for (var I = m.length - 1; I >= 0; I--) if (ci(A(I), m, S, _) != null) {
          P = I;
          break;
        }
        if (P < 0) return;
      } else {
        P = f + x * w;
        var E = (v == null ? void 0 : v.length) || m.length;
        if (E === 0 || P >= E || P < 0) return;
      }
      var $ = ba(o, g, "hover", String(P));
      t.dispatch(ya({ active: true, activeIndex: P.toString(), activeCoordinate: $ }));
    } finally {
      sn = null, xr = null;
    }
  };
  if (!s) {
    a();
    return;
  }
  n === "raf" ? sn = requestAnimationFrame(a) : typeof n == "number" && xr === null && (a(), vs = null, xr = setTimeout(() => {
    vs ? a() : (xr = null, sn = null);
  }, n));
} });
Ao.startListening({ actionCreator: F1, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    if (!i.active && i.index == null) {
      var s = "0", a = Ji(r, r.tooltip.settings.shared), o = ba(r, a, "hover", String(s));
      t.dispatch(ya({ active: true, activeIndex: s, activeCoordinate: o }));
    }
  }
} });
Ao.startListening({ actionCreator: W1, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    i.active && t.dispatch(ya({ active: false, activeIndex: i.index, activeCoordinate: i.coordinate }));
  }
} });
function q1(e3) {
  e3.persist();
  var { currentTarget: t } = e3;
  return new Proxy(e3, { get: (r, n) => {
    if (n === "currentTarget") return t;
    var i = Reflect.get(r, n);
    return typeof i == "function" ? i.bind(r) : i;
  } });
}
var le = ie("externalEvent"), K1 = $i(), ps = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), hu = /* @__PURE__ */ new Map();
K1.startListening({ actionCreator: le, effect: (e3, t) => {
  var { handler: r, reactEvent: n } = e3.payload;
  if (r != null) {
    var i = n.type, s = q1(n);
    hu.set(i, { handler: r, reactEvent: s });
    var a = ps.get(i);
    a !== void 0 && (cancelAnimationFrame(a), ps.delete(i));
    var o = t.getState(), { throttleDelay: l, throttledEvents: u } = o.eventSettings, c = u, h = c === "all" || (c == null ? void 0 : c.includes(i)), f = ni.get(i);
    f !== void 0 && (typeof l != "number" || !h) && (clearTimeout(f), ni.delete(i));
    var d = () => {
      var g = hu.get(i);
      try {
        if (!g) return;
        var { handler: y, reactEvent: b } = g, w = t.getState(), x = { activeCoordinate: jT(w), activeDataKey: CT(w), activeIndex: Ai(w), activeLabel: Tx(w), activeTooltipIndex: Ai(w), isTooltipActive: TT(w) };
        y && y(x, b);
      } finally {
        ps.delete(i), ni.delete(i), hu.delete(i);
      }
    };
    if (!h) {
      d();
      return;
    }
    if (l === "raf") {
      var v = requestAnimationFrame(d);
      ps.set(i, v);
    } else if (typeof l == "number") {
      if (!ni.has(i)) {
        d();
        var m = setTimeout(d, l);
        ni.set(i, m);
      }
    } else d();
  }
} });
var ez = O([Kn], (e3) => e3.tooltipItemPayloads), rz = O([ez, (e3, t) => t, (e3, t, r) => r], (e3, t, r) => {
  if (t != null) {
    var n = e3.find((s) => s.settings.graphicalItemId === r);
    if (n != null) {
      var { getPosition: i } = n;
      if (i != null) return i(t);
    }
  }
}), U1 = ie("touchMove"), V1 = $i(), Pr = null, sr = null, xg = null, ii = null;
V1.startListening({ actionCreator: U1, effect: (e3, t) => {
  var r = e3.payload;
  if (!(r.touches == null || r.touches.length === 0)) {
    ii = q1(r);
    var n = t.getState(), { throttleDelay: i, throttledEvents: s } = n.eventSettings, a = s === "all" || s.includes("touchmove");
    Pr !== null && (cancelAnimationFrame(Pr), Pr = null), sr !== null && (typeof i != "number" || !a) && (clearTimeout(sr), sr = null), xg = Array.from(r.touches).map((l) => _f({ clientX: l.clientX, clientY: l.clientY, currentTarget: r.currentTarget }));
    var o = () => {
      if (ii != null) {
        var l = t.getState(), u = Ji(l, l.tooltip.settings.shared);
        if (u === "axis") {
          var c, h = (c = xg) === null || c === void 0 ? void 0 : c[0];
          if (h == null) {
            Pr = null, sr = null;
            return;
          }
          var f = Sf(l, h);
          (f == null ? void 0 : f.activeIndex) != null && t.dispatch(wx({ activeIndex: f.activeIndex, activeDataKey: void 0, activeCoordinate: f.activeCoordinate }));
        } else if (u === "item") {
          var d, v = ii.touches[0];
          if (document.elementFromPoint == null || v == null) return;
          var m = document.elementFromPoint(v.clientX, v.clientY);
          if (!m || !m.getAttribute) return;
          var g = m.getAttribute(YO), y = (d = m.getAttribute(HO)) !== null && d !== void 0 ? d : void 0, b = Jr(l).find((P) => P.id === y);
          if (g == null || b == null || y == null) return;
          var { dataKey: w } = b, x = rz(l, g, y);
          t.dispatch(ef({ activeDataKey: w, activeIndex: g, activeCoordinate: x, activeGraphicalItemId: y }));
        }
        Pr = null, sr = null;
      }
    };
    if (!a) {
      o();
      return;
    }
    i === "raf" ? Pr = requestAnimationFrame(o) : typeof i == "number" && sr === null && (o(), ii = null, sr = setTimeout(() => {
      ii ? o() : (sr = null, Pr = null);
    }, i));
  }
} });
var Of = { throttleDelay: "raf", throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"] }, Y1 = $t({ name: "eventSettings", initialState: Of, reducers: { setEventSettings: (e3, t) => {
  t.payload.throttleDelay != null && (e3.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e3.throttledEvents = t.payload.throttledEvents);
} } }), { setEventSettings: nz } = Y1.actions, iz = Y1.reducer, sz = I0({ brush: cL, cartesianAxis: eL, chartData: kN, errorBars: cR, eventSettings: iz, graphicalItems: N2, layout: IO, legend: BM, options: MN, polarAxis: a2, polarOptions: tz, referenceElements: vL, renderedTicks: kL, rootProps: X$, tooltip: Fj, zIndex: dN }), az = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return rO({ reducer: sz, preloadedState: t, middleware: (n) => {
    var i;
    return n({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "") }).concat([L1.middleware, R1.middleware, Ao.middleware, K1.middleware, V1.middleware]);
  }, enhancers: (n) => {
    var i = n;
    return typeof n == "function" && (i = n()), i.concat(U0({ type: "raf" }));
  }, devTools: { serialize: { replacer: G$ }, name: "recharts-".concat(r) } });
};
function H1(e3) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e3, i = zt(), s = p.useRef(null);
  if (i) return r;
  s.current == null && (s.current = az(t, n));
  var a = Uc;
  return p.createElement(iE, { context: a, store: s.current }, r);
}
function oz(e3) {
  var { layout: t, margin: r } = e3, n = lt(), i = zt();
  return p.useEffect(() => {
    i || (n(EO(t)), n(ib(r)));
  }, [n, i, t, r]), null;
}
var lz = p.memo(oz, Wi);
function uz(e3) {
  var t = lt();
  return p.useEffect(() => {
    t(J$(e3));
  }, [t, e3]), null;
}
var cz = (e3) => {
  var t = lt();
  return p.useEffect(() => {
    t(nz(e3));
  }, [t, e3]), null;
}, G1 = p.memo(cz, Wi);
function Pg(e3) {
  var { zIndex: t, isPanorama: r } = e3, n = p.useRef(null), i = lt();
  return p.useLayoutEffect(() => (n.current && i(hN({ zIndex: t, element: n.current, isPanorama: r })), () => {
    i(fN({ zIndex: t, isPanorama: r }));
  }), [i, t, r]), p.createElement("g", { tabIndex: -1, ref: n, className: "recharts-zIndex-layer_".concat(t) });
}
function Sg(e3) {
  var { children: t, isPanorama: r } = e3, n = B(rN);
  if (!n || n.length === 0) return t;
  var i = n.filter((a) => a < 0), s = n.filter((a) => a > 0);
  return p.createElement(p.Fragment, null, i.map((a) => p.createElement(Pg, { key: a, zIndex: a, isPanorama: r })), t, s.map((a) => p.createElement(Pg, { key: a, zIndex: a, isPanorama: r })));
}
var hz = ["children"];
function fz(e3, t) {
  if (e3 == null) return {};
  var r, n, i = dz(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function dz(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ma.apply(null, arguments);
}
var vz = { width: "100%", height: "100%", display: "block" }, pz = p.forwardRef((e3, t) => {
  var r = th(), n = eh(), i = Pb();
  if (!de(r) || !de(n)) return null;
  var { children: s, otherAttributes: a, title: o, desc: l } = e3, u, c;
  return a != null && (typeof a.tabIndex == "number" ? u = a.tabIndex : u = i ? 0 : void 0, typeof a.role == "string" ? c = a.role : c = i ? "application" : void 0), p.createElement(zc, Ma({}, a, { title: o, desc: l, role: c, tabIndex: u, width: r, height: n, style: vz, ref: t }), s);
}), mz = (e3) => {
  var { children: t } = e3, r = B(eo);
  if (!r) return null;
  var { width: n, height: i, y: s, x: a } = r;
  return p.createElement(zc, { width: n, height: i, x: a, y: s }, t);
}, _g = p.forwardRef((e3, t) => {
  var { children: r } = e3, n = fz(e3, hz), i = zt();
  return i ? p.createElement(mz, null, p.createElement(Sg, { isPanorama: true }, r)) : p.createElement(pz, Ma({ ref: t }, n), p.createElement(Sg, { isPanorama: false }, r));
});
function gz() {
  var e3 = lt(), [t, r] = p.useState(null), n = B(UO);
  return p.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), s = i.width / t.offsetWidth;
      q(s) && s !== n && e3(CO(s));
    }
  }, [t, e3, n]), r;
}
function Og(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yz(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Og(Object(r), true).forEach(function(n) {
      bz(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function bz(e3, t, r) {
  return (t = wz(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function wz(e3) {
  var t = xz(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xz(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function dr() {
  return dr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, dr.apply(null, arguments);
}
var Pz = () => (BN(), null);
function Ea(e3) {
  if (typeof e3 == "number") return e3;
  if (typeof e3 == "string") {
    var t = parseFloat(e3);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var Sz = p.forwardRef((e3, t) => {
  var r, n, i = p.useRef(null), [s, a] = p.useState({ containerWidth: Ea((r = e3.style) === null || r === void 0 ? void 0 : r.width), containerHeight: Ea((n = e3.style) === null || n === void 0 ? void 0 : n.height) }), o = p.useCallback((u, c) => {
    a((h) => {
      var f = Math.round(u), d = Math.round(c);
      return h.containerWidth === f && h.containerHeight === d ? h : { containerWidth: f, containerHeight: d };
    });
  }, []), l = p.useCallback((u) => {
    if (typeof t == "function" && t(u), i.current != null && (i.current.disconnect(), i.current = null), u != null && typeof ResizeObserver < "u") {
      var { width: c, height: h } = u.getBoundingClientRect();
      o(c, h);
      var f = (v) => {
        var m = v[0];
        if (m != null) {
          var { width: g, height: y } = m.contentRect;
          o(g, y);
        }
      }, d = new ResizeObserver(f);
      d.observe(u), i.current = d;
    }
  }, [t, o]);
  return p.useEffect(() => () => {
    var u = i.current;
    u == null ? void 0 : u.disconnect();
  }, [o]), p.createElement(p.Fragment, null, p.createElement(Bi, { width: s.containerWidth, height: s.containerHeight }), p.createElement("div", dr({ ref: l }, e3)));
}), _z = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3, [i, s] = p.useState({ containerWidth: Ea(r), containerHeight: Ea(n) }), a = p.useCallback((l, u) => {
    s((c) => {
      var h = Math.round(l), f = Math.round(u);
      return c.containerWidth === h && c.containerHeight === f ? c : { containerWidth: h, containerHeight: f };
    });
  }, []), o = p.useCallback((l) => {
    if (typeof t == "function" && t(l), l != null) {
      var { width: u, height: c } = l.getBoundingClientRect();
      a(u, c);
    }
  }, [t, a]);
  return p.createElement(p.Fragment, null, p.createElement(Bi, { width: i.containerWidth, height: i.containerHeight }), p.createElement("div", dr({ ref: o }, e3)));
}), Oz = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return p.createElement(p.Fragment, null, p.createElement(Bi, { width: r, height: n }), p.createElement("div", dr({ ref: t }, e3)));
}), Mz = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return typeof r == "string" || typeof n == "string" ? p.createElement(_z, dr({}, e3, { ref: t })) : typeof r == "number" && typeof n == "number" ? p.createElement(Oz, dr({}, e3, { width: r, height: n, ref: t })) : p.createElement(p.Fragment, null, p.createElement(Bi, { width: r, height: n }), p.createElement("div", dr({ ref: t }, e3)));
});
function Ez(e3) {
  return e3 ? Sz : Mz;
}
var X1 = p.forwardRef((e3, t) => {
  var { children: r, className: n, height: i, onClick: s, onContextMenu: a, onDoubleClick: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onMouseMove: h, onMouseUp: f, onTouchEnd: d, onTouchMove: v, onTouchStart: m, style: g, width: y, responsive: b, dispatchTouchEvents: w = true } = e3, x = p.useRef(null), P = lt(), [S, _] = p.useState(null), [M, A] = p.useState(null), k = gz(), I = Zc(), E = (I == null ? void 0 : I.width) > 0 ? I.width : y, $ = (I == null ? void 0 : I.height) > 0 ? I.height : i, R = p.useCallback((T) => {
    k(T), typeof t == "function" && t(T), _(T), A(T), T != null && (x.current = T);
  }, [k, t, _, A]), z = p.useCallback((T) => {
    P(D1(T)), P(le({ handler: s, reactEvent: T }));
  }, [P, s]), H = p.useCallback((T) => {
    P(kc(T)), P(le({ handler: u, reactEvent: T }));
  }, [P, u]), W = p.useCallback((T) => {
    P(bx()), P(le({ handler: c, reactEvent: T }));
  }, [P, c]), G = p.useCallback((T) => {
    P(kc(T)), P(le({ handler: h, reactEvent: T }));
  }, [P, h]), F = p.useCallback(() => {
    P(F1());
  }, [P]), U = p.useCallback(() => {
    P(W1());
  }, [P]), Bt = p.useCallback((T) => {
    P(B1(T.key));
  }, [P]), ut = p.useCallback((T) => {
    P(le({ handler: a, reactEvent: T }));
  }, [P, a]), me = p.useCallback((T) => {
    P(le({ handler: o, reactEvent: T }));
  }, [P, o]), Ut = p.useCallback((T) => {
    P(le({ handler: l, reactEvent: T }));
  }, [P, l]), Re = p.useCallback((T) => {
    P(le({ handler: f, reactEvent: T }));
  }, [P, f]), Un = p.useCallback((T) => {
    P(le({ handler: m, reactEvent: T }));
  }, [P, m]), Vn = p.useCallback((T) => {
    w && P(U1(T)), P(le({ handler: v, reactEvent: T }));
  }, [P, w, v]), Vt = p.useCallback((T) => {
    P(le({ handler: d, reactEvent: T }));
  }, [P, d]), D = Ez(b);
  return p.createElement(hf.Provider, { value: S }, p.createElement(BP.Provider, { value: M }, p.createElement(D, { width: E ?? (g == null ? void 0 : g.width), height: $ ?? (g == null ? void 0 : g.height), className: X("recharts-wrapper", n), style: yz({ position: "relative", cursor: "default", width: E, height: $ }, g), onClick: z, onContextMenu: ut, onDoubleClick: me, onFocus: F, onBlur: U, onKeyDown: Bt, onMouseDown: Ut, onMouseEnter: H, onMouseLeave: W, onMouseMove: G, onMouseUp: Re, onTouchEnd: Vt, onTouchMove: Vn, onTouchStart: Un, ref: R }, p.createElement(Pz, null), r)));
}), Az = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function Cz(e3, t) {
  if (e3 == null) return {};
  var r, n, i = Iz(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function Iz(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var kz = p.forwardRef((e3, t) => {
  var { width: r, height: n, responsive: i, children: s, className: a, style: o, compact: l, title: u, desc: c } = e3, h = Cz(e3, Az), f = Xt(h);
  return l ? p.createElement(p.Fragment, null, p.createElement(Bi, { width: r, height: n }), p.createElement(_g, { otherAttributes: f, title: u, desc: c }, s)) : p.createElement(X1, { className: a, style: o, width: r, height: n, responsive: i ?? false, onClick: e3.onClick, onMouseLeave: e3.onMouseLeave, onMouseEnter: e3.onMouseEnter, onMouseMove: e3.onMouseMove, onMouseDown: e3.onMouseDown, onMouseUp: e3.onMouseUp, onContextMenu: e3.onContextMenu, onDoubleClick: e3.onDoubleClick, onTouchStart: e3.onTouchStart, onTouchMove: e3.onTouchMove, onTouchEnd: e3.onTouchEnd }, p.createElement(_g, { otherAttributes: f, title: u, desc: c, ref: t }, p.createElement(mL, null, s)));
});
function jc() {
  return jc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, jc.apply(null, arguments);
}
function Mg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jz(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), true).forEach(function(n) {
      Tz(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Tz(e3, t, r) {
  return (t = Nz(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Nz(e3) {
  var t = Dz(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Dz(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Lz = { top: 5, right: 5, bottom: 5, left: 5 }, Rz = jz({ accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: Lz, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, Of), $z = p.forwardRef(function(t, r) {
  var n, i = jt(t.categoricalChartProps, Rz), { chartName: s, defaultTooltipEventType: a, validateTooltipEventTypes: o, tooltipPayloadSearcher: l, categoricalChartProps: u } = t, c = { chartName: s, defaultTooltipEventType: a, validateTooltipEventTypes: o, tooltipPayloadSearcher: l, eventEmitter: void 0 };
  return p.createElement(H1, { preloadedState: { options: c }, reduxStoreName: (n = u.id) !== null && n !== void 0 ? n : s }, p.createElement(uL, { chartData: u.data }), p.createElement(lz, { layout: i.layout, margin: i.margin }), p.createElement(G1, { throttleDelay: i.throttleDelay, throttledEvents: i.throttledEvents }), p.createElement(uz, { baseValue: i.baseValue, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), p.createElement(kz, jc({}, i, { ref: r })));
}), fu = {}, du = {}, Eg;
function zz() {
  if (Eg) return du;
  Eg = 1;
  const e3 = Ba();
  function t(r, n = 1) {
    const i = [], s = Math.floor(n);
    if (!e3.isArrayLike(r)) return i;
    const a = (o, l) => {
      for (let u = 0; u < o.length; u++) {
        const c = o[u];
        l < s && (Array.isArray(c) || (c == null ? void 0 : c[Symbol.isConcatSpreadable]) || c !== null && typeof c == "object" && Object.prototype.toString.call(c) === "[object Arguments]") ? Array.isArray(c) ? a(c, l + 1) : a(Array.from(c), l + 1) : i.push(c);
      }
    };
    return a(Array.from(r), 0), i;
  }
  return du.flatten = t, du;
}
var vu = {}, Ag;
function Bz() {
  if (Ag) return vu;
  Ag = 1;
  const e3 = a0(), t = La(), r = Ra(), n = $a(), i = za();
  function s(o, l) {
    if (o == null) return true;
    switch (typeof l) {
      case "symbol":
      case "number":
      case "object":
        if (Array.isArray(l)) return a(o, l);
        if (typeof l == "number" ? l = r.toKey(l) : typeof l == "object" && (Object.is(l == null ? void 0 : l.valueOf(), -0) ? l = "-0" : l = String(l)), e3.isUnsafeProperty(l)) return false;
        if ((o == null ? void 0 : o[l]) === void 0) return true;
        try {
          return delete o[l], true;
        } catch {
          return false;
        }
      case "string":
        if ((o == null ? void 0 : o[l]) === void 0 && t.isDeepKey(l)) return a(o, n.toPath(l));
        if (e3.isUnsafeProperty(l)) return false;
        try {
          return delete o[l], true;
        } catch {
          return false;
        }
    }
  }
  function a(o, l) {
    const u = l.length === 1 ? o : i.get(o, l.slice(0, -1)), c = l[l.length - 1];
    if ((u == null ? void 0 : u[c]) === void 0) return true;
    if (e3.isUnsafeProperty(c)) return false;
    try {
      return delete u[c], true;
    } catch {
      return false;
    }
  }
  return vu.unset = s, vu;
}
var pu = {}, mu = {}, Cg;
function Fz() {
  if (Cg) return mu;
  Cg = 1;
  function e3(t) {
    const r = t == null ? void 0 : t.constructor;
    return t === (typeof r == "function" ? r.prototype : Object.prototype);
  }
  return mu.isPrototype = e3, mu;
}
var gu = {}, Ig;
function Wz() {
  if (Ig) return gu;
  Ig = 1;
  const e3 = v0();
  function t(r) {
    return e3.isTypedArray(r);
  }
  return gu.isTypedArray = t, gu;
}
var yu = {}, bu = {}, kg;
function qz() {
  if (kg) return bu;
  kg = 1;
  const e3 = Ib();
  function t(r) {
    const n = e3.toFinite(r), i = n % 1;
    return i ? n - i : n;
  }
  return bu.toInteger = t, bu;
}
var jg;
function Kz() {
  if (jg) return yu;
  jg = 1;
  const e3 = qz();
  function t(r, n) {
    if (r = e3.toInteger(r), r < 1 || !Number.isSafeInteger(r)) return [];
    const i = new Array(r);
    for (let s = 0; s < r; s++) i[s] = typeof n == "function" ? n(s) : s;
    return i;
  }
  return yu.times = t, yu;
}
var Tg;
function Uz() {
  if (Tg) return pu;
  Tg = 1;
  const e3 = g0(), t = Ba(), r = Fz(), n = Wz(), i = Kz();
  function s(u) {
    if (u == null) return [];
    switch (typeof u) {
      case "object":
      case "function":
        return t.isArrayLike(u) ? l(u) : r.isPrototype(u) ? o(u) : a(u);
      default:
        return a(Object(u));
    }
  }
  function a(u) {
    const c = [];
    for (const h in u) c.push(h);
    return c;
  }
  function o(u) {
    return a(u).filter((c) => c !== "constructor");
  }
  function l(u) {
    const c = i.times(u.length, (d) => `${d}`), h = new Set(c);
    e3.isBuffer(u) && (h.add("offset"), h.add("parent")), n.isTypedArray(u) && (h.add("buffer"), h.add("byteLength"), h.add("byteOffset"));
    const f = a(u).filter((d) => !h.has(d));
    return Array.isArray(u) ? [...c, ...f] : [...c.filter((d) => Object.hasOwn(u, d)), ...f];
  }
  return pu.keysIn = s, pu;
}
var wu = {}, Ng;
function Vz() {
  if (Ng) return wu;
  Ng = 1;
  const e3 = p0();
  function t(r) {
    const n = [];
    for (; r; ) n.push(...e3.getSymbols(r)), r = Object.getPrototypeOf(r);
    return n;
  }
  return wu.getSymbolsIn = t, wu;
}
var Dg;
function Yz() {
  if (Dg) return fu;
  Dg = 1;
  const e3 = a1(), t = La(), r = P0(), n = zz(), i = Bz(), s = Uz(), a = Vz();
  function o(h, ...f) {
    if (h == null) return {};
    f = n.flatten(f);
    const d = l(h, f);
    for (let v = 0; v < f.length; v++) {
      let m = f[v];
      switch (typeof m) {
        case "object":
          Array.isArray(m) || (m = Array.from(m));
          for (let g = 0; g < m.length; g++) {
            const y = m[g];
            i.unset(d, y);
          }
          break;
        case "string":
        case "symbol":
        case "number":
          i.unset(d, m);
          break;
      }
    }
    return d;
  }
  function l(h, f) {
    return f.some((d) => Array.isArray(d) || t.isDeepKey(d)) ? c(h) : u(h);
  }
  function u(h) {
    const f = {}, d = [...s.keysIn(h), ...a.getSymbolsIn(h)];
    for (let v = 0; v < d.length; v++) {
      const m = d[v];
      f[m] = h[m];
    }
    return f;
  }
  function c(h) {
    const f = {}, d = [...s.keysIn(h), ...a.getSymbolsIn(h)];
    for (let v = 0; v < d.length; v++) {
      const m = d[v];
      f[m] = r.cloneDeepWith(h[m], (g) => {
        if (!e3.isPlainObject(g)) return g;
      });
    }
    return f;
  }
  return fu.omit = o, fu;
}
var xu, Lg;
function Hz() {
  return Lg || (Lg = 1, xu = Yz().omit), xu;
}
var Gz = Hz();
const Xz = Xe(Gz);
var Jz = ["width", "height", "className", "style", "children", "type"];
function Zz(e3, t) {
  if (e3 == null) return {};
  var r, n, i = Qz(e3, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function Qz(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, kn.apply(null, arguments);
}
function Rg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(r), true).forEach(function(n) {
      fi(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function fi(e3, t, r) {
  return (t = tB(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function tB(e3) {
  var t = eB(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eB(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Mf = "value";
function rB(e3) {
  return e3 != null && typeof e3 == "object" && "x" in e3 && "y" in e3 && "width" in e3 && "height" in e3 && typeof e3.x == "number" && typeof e3.y == "number" && typeof e3.width == "number" && typeof e3.height == "number";
}
var J1 = (e3, t) => {
  if (!(!e3 || !t)) return Dn(e3, t);
}, nB = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "".concat(r, "children[").concat(t, "]");
}, iB = { chartName: "Treemap", defaultTooltipEventType: "item", validateTooltipEventTypes: ["item"], tooltipPayloadSearcher: J1, eventEmitter: void 0 }, Cs = (e3) => {
  var { depth: t, node: r, index: n, dataKey: i, nameKey: s, nestedActiveTooltipIndex: a } = e3, o = t === 0 ? "" : nB(n, a), { children: l } = r, u = t + 1, c = l && l.length ? l.map((v, m) => Cs({ depth: u, node: v, index: m, dataKey: i, nameKey: s, nestedActiveTooltipIndex: o })) : null, h;
  if (c && c.length) h = c.reduce((v, m) => v + m.value, 0);
  else {
    var f = r[i], d = typeof f == "number" ? f : 0;
    h = fe(d) || d <= 0 ? 0 : d;
  }
  return nt(nt({}, r), {}, { children: c, name: ht(r, s, ""), [Mf]: h, depth: t, index: n, tooltipIndex: o });
}, sB = (e3) => ({ x: e3.x, y: e3.y, width: e3.width, height: e3.height }), aB = (e3, t) => {
  var r = t < 0 ? 0 : t;
  return e3.map((n) => {
    var i = n[Mf] * r;
    return nt(nt({}, n), {}, { area: fe(i) || i <= 0 ? 0 : i });
  });
}, oB = (e3, t, r) => {
  var n = t * t, i = e3.area * e3.area, { min: s, max: a } = e3.reduce((o, l) => ({ min: Math.min(o.min, l.area), max: Math.max(o.max, l.area) }), { min: 1 / 0, max: 0 });
  return i ? Math.max(n * a * r / i, i / (n * s * r)) : 1 / 0;
}, lB = (e3, t, r, n) => {
  var i = t ? Math.round(e3.area / t) : 0;
  (n || i > r.height) && (i = r.height);
  for (var s = r.x, a, o = 0, l = e3.length; o < l; o++) a = e3[o], a != null && (a.x = s, a.y = r.y, a.height = i, a.width = Math.min(i ? Math.round(a.area / i) : 0, r.x + r.width - s), s += a.width);
  return a != null && (a.width += r.x + r.width - s), nt(nt({}, r), {}, { y: r.y + i, height: r.height - i });
}, uB = (e3, t, r, n) => {
  var i = t ? Math.round(e3.area / t) : 0;
  (n || i > r.width) && (i = r.width);
  for (var s = r.y, a, o = 0, l = e3.length; o < l; o++) a = e3[o], a != null && (a.x = r.x, a.y = s, a.width = i, a.height = Math.min(i ? Math.round(a.area / i) : 0, r.y + r.height - s), s += a.height);
  return a && (a.height += r.y + r.height - s), nt(nt({}, r), {}, { x: r.x + i, width: r.width - i });
}, $g = (e3, t, r, n) => t === r.width ? lB(e3, t, r, n) : uB(e3, t, r, n), Is = (e3, t) => {
  var { children: r } = e3;
  if (r && r.length) {
    var n = sB(e3), i = [], s = 1 / 0, a, o, l = Math.min(n.width, n.height), u = aB(r, n.width * n.height / e3[Mf]), c = u.slice();
    for (i.area = 0; c.length > 0; ) if ([a] = c, a != null) if (i.push(a), i.area += a.area, o = oB(i, l, t), o <= s) c.shift(), s = o;
    else {
      var h, f;
      i.area -= (h = (f = i.pop()) === null || f === void 0 ? void 0 : f.area) !== null && h !== void 0 ? h : 0, n = $g(i, l, n, false), l = Math.min(n.width, n.height), i.length = i.area = 0, s = 1 / 0;
    }
    return i.length && (n = $g(i, l, n, true), i.length = i.area = 0), nt(nt({}, e3), {}, { children: u.map((d) => Is(d, t)) });
  }
  return e3;
}, Tc = nt({ aspectRatio: 0.5 * (1 + Math.sqrt(5)), dataKey: "value", nameKey: "name", type: "flat", isAnimationActive: "auto", isUpdateAnimationActive: "auto", animationBegin: 0, animationDuration: 1500, animationEasing: "linear" }, Of), cB = { isAnimationFinished: false, formatRoot: null, currentRoot: void 0, nestIndex: [], prevAspectRatio: Tc.aspectRatio, prevDataKey: Tc.dataKey };
function hB(e3) {
  var { content: t, nodeProps: r, type: n, colorPanel: i, onMouseEnter: s, onMouseLeave: a, onClick: o } = e3;
  if (p.isValidElement(t)) return p.createElement(kt, { onMouseEnter: s, onMouseLeave: a, onClick: o }, p.cloneElement(t, r));
  if (typeof t == "function") return p.createElement(kt, { onMouseEnter: s, onMouseLeave: a, onClick: o }, t(r));
  var { x: l, y: u, width: c, height: h, index: f } = r, d = null;
  c > 10 && h > 10 && r.children && n === "nest" && (d = p.createElement(i2, { points: [{ x: l + 2, y: u + h / 2 }, { x: l + 6, y: u + h / 2 + 3 }, { x: l + 2, y: u + h / 2 + 6 }] }));
  var v = null, m = yn(r.name);
  c > 20 && h > 20 && m.width < c && m.height < h && (v = p.createElement("text", { x: l + 8, y: u + h / 2 + 7, fontSize: 14 }, r.name));
  var g = i || VO;
  return p.createElement("g", null, p.createElement(oh, kn({ fill: r.depth < 2 ? g[f % g.length] : "rgba(255,255,255,0)", stroke: "#fff" }, Xz(r, ["children"]), { onMouseEnter: s, onMouseLeave: a, onClick: o, "data-recharts-item-index": r.tooltipIndex })), d, v);
}
function fB(e3) {
  var t = lt(), r = { x: e3.nodeProps.x + e3.nodeProps.width / 2, y: e3.nodeProps.y + e3.nodeProps.height / 2 }, n = () => {
    t(ef({ activeIndex: e3.nodeProps.tooltipIndex, activeDataKey: e3.dataKey, activeCoordinate: r, activeGraphicalItemId: e3.id }));
  }, i = () => {
  }, s = () => {
    t(zj({ activeIndex: e3.nodeProps.tooltipIndex, activeDataKey: e3.dataKey, activeCoordinate: r, activeGraphicalItemId: e3.id }));
  };
  return p.createElement(hB, kn({}, e3, { onMouseEnter: n, onMouseLeave: i, onClick: s }));
}
var dB = p.memo((e3) => {
  var { dataKey: t, nameKey: r, stroke: n, fill: i, currentRoot: s, id: a } = e3, o = { dataDefinedOnItem: s, getPosition: Je, settings: { stroke: n, strokeWidth: void 0, fill: i, dataKey: t, nameKey: r, name: void 0, hide: false, type: void 0, color: i, unit: "", graphicalItemId: a } };
  return p.createElement(pf, { tooltipEntrySettings: o });
}), vB = { top: 0, right: 0, bottom: 0, left: 0 };
function pB(e3) {
  var { content: t, nodeProps: r, isLeaf: n, treemapProps: i, onNestClick: s } = e3, { id: a, isAnimationActive: o, animationBegin: l, animationDuration: u, animationEasing: c, isUpdateAnimationActive: h, type: f, colorPanel: d, dataKey: v, onAnimationStart: m, onAnimationEnd: g, onMouseEnter: y, onClick: b, onMouseLeave: w } = i, { width: x, height: P, x: S, y: _ } = r, M = -S - x, A = 0, k = (z) => {
    (n || f === "nest") && typeof y == "function" && y(r, z);
  }, I = (z) => {
    (n || f === "nest") && typeof w == "function" && w(r, z);
  }, E = () => {
    f === "nest" && s(r), (n || f === "nest") && typeof b == "function" && b(r);
  }, $ = p.useCallback(() => {
    typeof g == "function" && g();
  }, [g]), R = p.useCallback(() => {
    typeof m == "function" && m();
  }, [m]);
  return p.createElement(V$, { animationId: "treemap-".concat(r.tooltipIndex), from: "translate(".concat(M, "px, ").concat(A, "px)"), to: "translate(0, 0)", attributeName: "transform", begin: l, easing: c, isActive: o, duration: u, onAnimationStart: R, onAnimationEnd: $ }, (z) => p.createElement(kt, { onMouseEnter: k, onMouseLeave: I, onClick: E, style: nt(nt({}, z), {}, { transformOrigin: "".concat(S, " ").concat(_) }) }, p.createElement(fB, { id: a, content: t, dataKey: v, nodeProps: nt(nt({}, r), {}, { isAnimationActive: o, isUpdateAnimationActive: !h, width: x, height: P, x: S, y: _ }), type: f, colorPanel: d })));
}
class Z1 extends p.PureComponent {
  constructor() {
    super(...arguments), fi(this, "state", nt({}, cB)), fi(this, "handleClick", (t) => {
      var { onClick: r, type: n } = this.props;
      if (n === "nest" && t.children) {
        var { width: i, height: s, dataKey: a, nameKey: o, aspectRatio: l } = this.props, u = Cs({ depth: 0, node: nt(nt({}, t), {}, { x: 0, y: 0, width: i, height: s }), index: 0, dataKey: a, nameKey: o, nestedActiveTooltipIndex: t.tooltipIndex }), c = Is(u, l), { nestIndex: h } = this.state;
        h.push(t), this.setState({ formatRoot: c, currentRoot: u, nestIndex: h });
      }
      r && r(t);
    }), fi(this, "handleTouchMove", (t) => {
      var r = t.touches[0];
      if (r != null) {
        var n = document.elementFromPoint(r.clientX, r.clientY);
        if (!(!n || !n.getAttribute || this.state.formatRoot == null)) {
          var i = n.getAttribute("data-recharts-item-index"), s = J1(this.state.formatRoot, i);
          if (rB(s)) {
            var { dataKey: a, dispatch: o } = this.props, l = { x: s.x + s.width / 2, y: s.y + s.height / 2 };
            o(ef({ activeIndex: i, activeDataKey: a, activeCoordinate: l, activeGraphicalItemId: this.props.id }));
          }
        }
      }
    });
  }
  static getDerivedStateFromProps(t, r) {
    if (t.data !== r.prevData || t.type !== r.prevType || t.width !== r.prevWidth || t.height !== r.prevHeight || t.dataKey !== r.prevDataKey || t.aspectRatio !== r.prevAspectRatio) {
      var n = Cs({ depth: 0, node: { children: t.data, x: 0, y: 0, width: t.width, height: t.height }, index: 0, dataKey: t.dataKey, nameKey: t.nameKey }), i = Is(n, t.aspectRatio);
      return nt(nt({}, r), {}, { formatRoot: i, currentRoot: n, nestIndex: [n], prevAspectRatio: t.aspectRatio, prevData: t.data, prevWidth: t.width, prevHeight: t.height, prevDataKey: t.dataKey, prevType: t.type });
    }
    return null;
  }
  handleNestIndex(t, r) {
    var { nestIndex: n } = this.state, { width: i, height: s, dataKey: a, nameKey: o, aspectRatio: l } = this.props, u = Cs({ depth: 0, node: nt(nt({}, t), {}, { x: 0, y: 0, width: i, height: s }), index: 0, dataKey: a, nameKey: o, nestedActiveTooltipIndex: t.tooltipIndex }), c = Is(u, l);
    n = n.slice(0, r + 1), this.setState({ formatRoot: c, currentRoot: t, nestIndex: n });
  }
  renderNode(t, r) {
    var { content: n, type: i } = this.props, s = nt(nt(nt({}, Xt(this.props)), r), {}, { root: t }), a = !r.children || !r.children.length, { currentRoot: o } = this.state, l = ((o == null ? void 0 : o.children) || []).filter((u) => u.depth === r.depth && u.name === r.name);
    return !l.length && t.depth && i === "nest" ? null : p.createElement(kt, { key: "recharts-treemap-node-".concat(s.x, "-").concat(s.y, "-").concat(s.name), className: "recharts-treemap-depth-".concat(r.depth) }, p.createElement(pB, { isLeaf: a, content: n, nodeProps: s, treemapProps: this.props, onNestClick: this.handleClick }), r.children && r.children.length ? r.children.map((u) => this.renderNode(r, u)) : null);
  }
  renderAllNodes() {
    var { formatRoot: t } = this.state;
    return t ? this.renderNode(t, t) : null;
  }
  renderNestIndex() {
    var { nameKey: t, nestIndexContent: r } = this.props, { nestIndex: n } = this.state;
    return p.createElement("div", { className: "recharts-treemap-nest-index-wrapper", style: { marginTop: "8px", textAlign: "center" } }, n.map((i, s) => {
      var a = Dn(i, t, "root"), o = typeof a == "string" ? a : "root", l;
      return p.isValidElement(r) && (l = p.cloneElement(r, i, s)), typeof r == "function" ? l = r(i, s) : l = o, p.createElement("div", { onClick: this.handleNestIndex.bind(this, i, s), key: "nest-index-".concat(Pn()), className: "recharts-treemap-nest-index-box", style: { cursor: "pointer", display: "inline-block", padding: "0 7px", background: "#000", color: "#fff", marginRight: "3px" } }, l);
    }));
  }
  render() {
    var t = this.props, { width: r, height: n, className: i, style: s, children: a, type: o } = t, l = Zz(t, Jz), u = Xt(l);
    return p.createElement(p.Fragment, null, p.createElement(dB, { dataKey: this.props.dataKey, nameKey: this.props.nameKey, stroke: this.props.stroke, fill: this.props.fill, currentRoot: this.state.currentRoot, id: this.props.id }), p.createElement(zc, kn({}, u, { width: r, height: o === "nest" ? n - 30 : n, onTouchMove: this.handleTouchMove }), this.renderAllNodes(), a), o === "nest" && this.renderNestIndex());
  }
}
fi(Z1, "displayName", "Treemap");
function mB(e3) {
  var t = lt(), r = th(), n = eh();
  if (!de(r) || !de(n)) return null;
  var { id: i } = e3;
  return p.createElement(mf, { id: i, type: "treemap" }, (s) => p.createElement(Z1, kn({}, e3, { id: s, width: r, height: n, dispatch: t })));
}
function Pq(e3) {
  var t, r = jt(e3, Tc), { className: n, style: i, width: s, height: a, throttleDelay: o, throttledEvents: l } = r, [u, c] = p.useState(null);
  return p.createElement(H1, { preloadedState: { options: iB }, reduxStoreName: (t = r.className) !== null && t !== void 0 ? t : "Treemap" }, p.createElement(_M, { margin: vB }), p.createElement(G1, { throttleDelay: o, throttledEvents: l }), p.createElement(X1, { dispatchTouchEvents: false, className: n, style: i, width: s, height: a, responsive: false, ref: (h) => {
    u == null && h != null && c(h);
  }, onMouseEnter: void 0, onMouseLeave: void 0, onClick: void 0, onMouseMove: void 0, onMouseDown: void 0, onMouseUp: void 0, onContextMenu: void 0, onDoubleClick: void 0, onTouchStart: void 0, onTouchMove: void 0, onTouchEnd: void 0 }, p.createElement(hf.Provider, { value: u }, p.createElement(mB, r))));
}
var gB = ["axis"], Sq = p.forwardRef((e3, t) => p.createElement($z, { chartName: "AreaChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: gB, tooltipPayloadSearcher: _N, categoricalChartProps: e3, ref: t }));
function Z(e3) {
  var t = e3.width, r = e3.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (r < 0) throw new Error("Negative height is not allowed for Size");
  return { width: t, height: r };
}
function Dr(e3, t) {
  return e3.width === t.width && e3.height === t.height;
}
var yB = (function() {
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
function bB(e3) {
  return new yB(e3);
}
var wB = (function() {
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
    Dr(r, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(r, t));
  }, e3.prototype._emitBitmapSizeChanged = function(t, r) {
    var n = this;
    this._bitmapSizeChangedListeners.forEach(function(i) {
      return i.call(n, t, r);
    });
  }, e3.prototype._suggestNewBitmapSize = function(t) {
    var r = this._suggestedBitmapSize, n = Z(this._transformBitmapSize(t, this._canvasElementClientSize)), i = Dr(this.bitmapSize, n) ? null : n;
    r === null && i === null || r !== null && i !== null && Dr(r, i) || (this._suggestedBitmapSize = i, this._emitSuggestedBitmapSizeChanged(r, i));
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
    PB().then(function(r) {
      return r ? t._initResizeObserver() : t._initDevicePixelRatioObservable();
    });
  }, e3.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var r = zg(this._canvasElement);
      if (r === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = bB(r), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize();
      }), this._invalidateBitmapSize();
    }
  }, e3.prototype._invalidateBitmapSize = function() {
    var t, r;
    if (this._canvasElement !== null) {
      var n = zg(this._canvasElement);
      if (n !== null) {
        var i = (r = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && r !== void 0 ? r : n.devicePixelRatio, s = this._canvasElement.getClientRects(), a = s[0] !== void 0 ? SB(s[0], i) : Z({ width: this._canvasElementClientSize.width * i, height: this._canvasElementClientSize.height * i });
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
function xB(e3, t) {
  return new wB(e3, t.transform, t.options);
}
function zg(e3) {
  return e3.ownerDocument.defaultView;
}
function PB() {
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
function SB(e3, t) {
  return Z({ width: Math.round(e3.left * t + e3.width * t) - Math.round(e3.left * t), height: Math.round(e3.top * t + e3.height * t) - Math.round(e3.top * t) });
}
var _B = (function() {
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
function Kr(e3, t) {
  var r = e3.canvasElementClientSize;
  if (r.width === 0 || r.height === 0) return null;
  var n = e3.bitmapSize;
  if (n.width === 0 || n.height === 0) return null;
  var i = e3.canvasElement.getContext("2d", t);
  return i === null ? null : new _B(i, r, n);
}
/*!
* @license
* TradingView Lightweight Charts™ v5.1.0
* Copyright (c) 2025 TradingView, Inc.
* Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
*/
const Q1 = { title: "", visible: true, lastValueVisible: true, priceLineVisible: true, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: true, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: 0.01 } };
var Bg, Fg;
function pr(e3, t) {
  const r = { 0: [], 1: [e3.lineWidth, e3.lineWidth], 2: [2 * e3.lineWidth, 2 * e3.lineWidth], 3: [6 * e3.lineWidth, 6 * e3.lineWidth], 4: [e3.lineWidth, 4 * e3.lineWidth] }[t];
  e3.setLineDash(r);
}
function tP(e3, t, r, n) {
  e3.beginPath();
  const i = e3.lineWidth % 2 ? 0.5 : 0;
  e3.moveTo(r, t + i), e3.lineTo(n, t + i), e3.stroke();
}
function Ct(e3, t) {
  if (!e3) throw new Error("Assertion failed" + (t ? ": " + t : ""));
}
function Jt(e3) {
  if (e3 === void 0) throw new Error("Value is undefined");
  return e3;
}
function C(e3) {
  if (e3 === null) throw new Error("Value is null");
  return e3;
}
function hr(e3) {
  return C(Jt(e3));
}
(function(e3) {
  e3[e3.Simple = 0] = "Simple", e3[e3.WithSteps = 1] = "WithSteps", e3[e3.Curved = 2] = "Curved";
})(Bg || (Bg = {})), (function(e3) {
  e3[e3.Solid = 0] = "Solid", e3[e3.Dotted = 1] = "Dotted", e3[e3.Dashed = 2] = "Dashed", e3[e3.LargeDashed = 3] = "LargeDashed", e3[e3.SparseDotted = 4] = "SparseDotted";
})(Fg || (Fg = {}));
class ft {
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
function ne(e3, ...t) {
  for (const r of t) for (const n in r) r[n] !== void 0 && Object.prototype.hasOwnProperty.call(r, n) && !["__proto__", "constructor", "prototype"].includes(n) && (typeof r[n] != "object" || e3[n] === void 0 || Array.isArray(r[n]) ? e3[n] = r[n] : ne(e3[n], r[n]));
  return e3;
}
function Ur(e3) {
  return typeof e3 == "number" && isFinite(e3);
}
function ji(e3) {
  return typeof e3 == "number" && e3 % 1 == 0;
}
function Qi(e3) {
  return typeof e3 == "string";
}
function ms(e3) {
  return typeof e3 == "boolean";
}
function We(e3) {
  const t = e3;
  if (!t || typeof t != "object") return t;
  let r, n, i;
  for (n in r = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(n) && (i = t[n], r[n] = i && typeof i == "object" ? We(i) : i);
  return r;
}
function Wg(e3) {
  return e3 !== null;
}
function Ti(e3) {
  return e3 === null ? void 0 : e3;
}
const eP = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function Ni(e3, t, r) {
  return t === void 0 && (t = eP), `${r = r !== void 0 ? `${r} ` : ""}${e3}px ${t}`;
}
class OB {
  constructor(t) {
    this.M = { S: 1, C: 5, k: NaN, P: "", T: "", R: "", D: "", I: 0, V: 0, B: 0, A: 0, L: 0 }, this.O = t;
  }
  N() {
    const t = this.M, r = this.F(), n = this.W();
    return t.k === r && t.T === n || (t.k = r, t.T = n, t.P = Ni(r, n), t.A = 2.5 / 12 * r, t.I = t.A, t.V = r / 12 * t.C, t.B = r / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
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
function Pu(e3) {
  return e3 < 0 ? 0 : e3 > 255 ? 255 : Math.round(e3) || 0;
}
function qg(e3) {
  return 0.199 * e3[0] + 0.687 * e3[1] + 0.114 * e3[2];
}
class MB {
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
    return { G: `rgb(${r[0]}, ${r[1]}, ${r[2]})`, X: qg(r) > 160 ? "black" : "white" };
  }
  J(t) {
    return qg(this.K(t));
  }
  tt(t, r, n) {
    const [i, s, a, o] = this.K(t), [l, u, c, h] = this.K(r), f = [Pu(i + n * (l - i)), Pu(s + n * (u - s)), Pu(a + n * (c - a)), (d = o + n * (h - o), d <= 0 || d > 1 ? Math.min(Math.max(d, 0), 1) : Math.round(1e4 * d) / 1e4)];
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
class rP {
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
class ir {
  nt(t, r, n) {
    t.useBitmapCoordinateSpace(((i) => this.et(i, r, n)));
  }
}
class EB extends ir {
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
function AB() {
  return { ot: [{ _t: 0, ut: 0, wt: 0, gt: 0 }], vt: "", dt: "", ft: 0, ct: 0, lt: null };
}
const CB = { from: 0, to: 1 };
class IB {
  constructor(t, r, n) {
    this.Mt = new rP(), this.bt = [], this.St = [], this.xt = true, this.O = t, this.Ct = r, this.yt = n, this.Mt.st(this.bt);
  }
  kt(t) {
    this.Pt(), this.xt = true;
  }
  Tt() {
    return this.xt && (this.Rt(), this.xt = false), this.Mt;
  }
  Pt() {
    const t = this.yt.Dt();
    t.length !== this.bt.length && (this.St = t.map(AB), this.bt = this.St.map(((r) => {
      const n = new EB();
      return n.ht(r), n;
    })), this.Mt.st(this.bt));
  }
  Rt() {
    const t = this.Ct.N().mode === 2 || !this.Ct.It(), r = this.yt.Vt(), n = this.Ct.Bt(), i = this.O.Et();
    this.Pt(), r.forEach(((s, a) => {
      const o = this.St[a], l = s.At(n), u = s.Lt();
      !t && l !== null && s.It() && u !== null ? (o.vt = l.zt, o.ft = l.ft, o.ct = l.Ot, o.ot[0].gt = l.gt, o.ot[0].ut = s.Ft().Nt(l.gt, u.Wt), o.dt = l.Ht ?? this.O.Ut(o.ot[0].ut / s.Ft().$t()), o.ot[0].wt = n, o.ot[0]._t = i.qt(n), o.lt = CB) : o.lt = null;
    }));
  }
}
class kB extends ir {
  constructor(t) {
    super(), this.jt = t;
  }
  et({ context: t, bitmapSize: r, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.jt === null) return;
    const s = this.jt.Yt.It, a = this.jt.Kt.It;
    if (!s && !a) return;
    const o = Math.round(this.jt._t * n), l = Math.round(this.jt.ut * i);
    t.lineCap = "butt", s && o >= 0 && (t.lineWidth = Math.floor(this.jt.Yt.ct * n), t.strokeStyle = this.jt.Yt.R, t.fillStyle = this.jt.Yt.R, pr(t, this.jt.Yt.Zt), (function(u, c, h, f) {
      u.beginPath();
      const d = u.lineWidth % 2 ? 0.5 : 0;
      u.moveTo(c + d, h), u.lineTo(c + d, f), u.stroke();
    })(t, o, 0, r.height)), a && l >= 0 && (t.lineWidth = Math.floor(this.jt.Kt.ct * i), t.strokeStyle = this.jt.Kt.R, t.fillStyle = this.jt.Kt.R, pr(t, this.jt.Kt.Zt), tP(t, l, 0, r.width));
  }
}
class jB {
  constructor(t, r) {
    this.xt = true, this.Gt = { Yt: { ct: 1, Zt: 0, R: "", It: false }, Kt: { ct: 1, Zt: 0, R: "", It: false }, _t: 0, ut: 0 }, this.Xt = new kB(this.Gt), this.Jt = t, this.yt = r;
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
function TB(e3, t, r, n, i, s) {
  e3.fillRect(t + s, r, n - 2 * s, s), e3.fillRect(t + s, r + i - s, n - 2 * s, s), e3.fillRect(t, r, s, i), e3.fillRect(t + n - s, r, s, i);
}
function Co(e3, t, r, n, i, s) {
  e3.save(), e3.globalCompositeOperation = "copy", e3.fillStyle = s, e3.fillRect(t, r, n, i), e3.restore();
}
function Kg(e3, t, r, n, i, s) {
  e3.beginPath(), e3.roundRect ? e3.roundRect(t, r, n, i, s) : (e3.lineTo(t + n - s[1], r), s[1] !== 0 && e3.arcTo(t + n, r, t + n, r + s[1], s[1]), e3.lineTo(t + n, r + i - s[2]), s[2] !== 0 && e3.arcTo(t + n, r + i, t + n - s[2], r + i, s[2]), e3.lineTo(t + s[3], r + i), s[3] !== 0 && e3.arcTo(t, r + i, t, r + i - s[3], s[3]), e3.lineTo(t, r + s[0]), s[0] !== 0 && e3.arcTo(t, r, t + s[0], r, s[0]));
}
function Ug(e3, t, r, n, i, s, a = 0, o = [0, 0, 0, 0], l = "") {
  if (e3.save(), !a || !l || l === s) return Kg(e3, t, r, n, i, o), e3.fillStyle = s, e3.fill(), void e3.restore();
  const u = a / 2;
  var c;
  Kg(e3, t + u, r + u, n - a, i - a, (c = -u, o.map(((h) => h === 0 ? h : h + c)))), s !== "transparent" && (e3.fillStyle = s, e3.fill()), l !== "transparent" && (e3.lineWidth = a, e3.strokeStyle = l, e3.closePath(), e3.stroke()), e3.restore();
}
function nP(e3, t, r, n, i, s, a) {
  e3.save(), e3.globalCompositeOperation = "copy";
  const o = e3.createLinearGradient(0, 0, 0, i);
  o.addColorStop(0, s), o.addColorStop(1, a), e3.fillStyle = o, e3.fillRect(t, r, n, i), e3.restore();
}
class Vg {
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
      return c.li ? Ug(u, h.oi, h._i, h.ui, h.ci, a, h.di, [h.ft, 0, 0, h.ft], a) : Ug(u, h.fi, h._i, h.ui, h.ci, a, h.di, [0, h.ft, h.ft, 0], a), this.jt.pi && (u.fillStyle = s, u.fillRect(h.fi, h.mi, h.wi - h.fi, h.gi)), this.jt.Mi && (u.fillStyle = r.D, u.fillRect(c.li ? h.bi - h.di : 0, h._i, h.di, h.Si - h._i)), c;
    }));
    t.useMediaCoordinateSpace((({ context: l }) => {
      const u = o.xi;
      l.font = r.P, l.textAlign = o.li ? "right" : "left", l.textBaseline = "middle", l.fillStyle = s, l.fillText(this.jt.ri, u.Ci, (u._i + u.Si) / 2 + u.yi);
    }));
  }
  hi(t, r, n, i) {
    const { context: s, bitmapSize: a, mediaSize: o, horizontalPixelRatio: l, verticalPixelRatio: u } = t, c = this.jt.pi || !this.jt.ki ? r.C : 0, h = this.jt.Pi ? r.S : 0, f = r.A + this.ei.Ti, d = r.I + this.ei.Ri, v = r.V, m = r.B, g = this.jt.ri, y = r.k, b = n.Di(s, g), w = Math.ceil(n.Ii(s, g)), x = y + f + d, P = r.S + v + m + w + c, S = Math.max(1, Math.floor(u));
    let _ = Math.round(x * u);
    _ % 2 != S % 2 && (_ += 1);
    const M = h > 0 ? Math.max(1, Math.floor(h * l)) : 0, A = Math.round(P * l), k = Math.round(c * l), I = this.ei.Vi ?? this.ei.Bi ?? this.ei.Ei, E = Math.round(I * u) - Math.floor(0.5 * u), $ = Math.floor(E + S / 2 - _ / 2), R = $ + _, z = i === "right", H = z ? o.width - h : h, W = z ? a.width - M : M;
    let G, F, U;
    return z ? (G = W - A, F = W - k, U = H - c - v - h) : (G = W + A, F = W + k, U = H + c + v), { li: z, ai: { _i: $, mi: E, Si: R, ui: A, ci: _, ft: 2 * l, di: M, oi: G, fi: W, wi: F, gi: S, bi: a.width }, xi: { _i: $ / u, Si: R / u, Ci: U, yi: b } };
  }
}
class Io {
  constructor(t) {
    this.Ai = { Ei: 0, G: "#000", Ri: 0, Ti: 0 }, this.Li = { ri: "", It: false, pi: true, ki: false, Ht: "", R: "#FFF", Mi: false, Pi: false }, this.zi = { ri: "", It: false, pi: false, ki: true, Ht: "", R: "#FFF", Mi: true, Pi: true }, this.xt = true, this.Oi = new (t || Vg)(this.Li, this.Ai), this.Ni = new (t || Vg)(this.zi, this.Ai);
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
class NB extends Io {
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
const DB = /[1-9]/g;
class iP {
  constructor() {
    this.jt = null;
  }
  ht(t) {
    this.jt = t;
  }
  nt(t, r) {
    if (this.jt === null || this.jt.It === false || this.jt.ri.length === 0) return;
    const n = t.useMediaCoordinateSpace((({ context: f }) => (f.font = r.P, Math.round(r.Qi.Ii(f, C(this.jt).ri, DB)))));
    if (n <= 0) return;
    const i = r.ts, s = n + 2 * i, a = s / 2, o = this.jt.ss;
    let l = this.jt.Ei, u = Math.floor(l - a) + 0.5;
    u < 0 ? (l += Math.abs(0 - u), u = Math.floor(l - a) + 0.5) : u + s > o && (l -= Math.abs(o - (u + s)), u = Math.floor(l - a) + 0.5);
    const c = u + s, h = Math.ceil(0 + r.S + r.C + r.A + r.k + r.I);
    t.useBitmapCoordinateSpace((({ context: f, horizontalPixelRatio: d, verticalPixelRatio: v }) => {
      const m = C(this.jt);
      f.fillStyle = m.G;
      const g = Math.round(u * d), y = Math.round(0 * v), b = Math.round(c * d), w = Math.round(h * v), x = Math.round(2 * d);
      if (f.beginPath(), f.moveTo(g, y), f.lineTo(g, w - x), f.arcTo(g, w, g + x, w, x), f.lineTo(b - x, w), f.arcTo(b, w, b, w - x, x), f.lineTo(b, y), f.fill(), m.pi) {
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
class LB {
  constructor(t, r, n) {
    this.xt = true, this.Xt = new iP(), this.Gt = { It: false, G: "#4c525e", R: "white", ri: "", ss: 0, Ei: NaN, pi: true }, this.Ct = t, this.ns = r, this.Zi = n;
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
class sP {
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
var Yg;
(function(e3) {
  e3[e3.Normal = 0] = "Normal", e3[e3.Magnet = 1] = "Magnet", e3[e3.Hidden = 2] = "Hidden", e3[e3.MagnetOHLC = 3] = "MagnetOHLC";
})(Yg || (Yg = {}));
class RB extends sP {
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
    this.Vs = new LB(this, t, n);
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
    const a = [i, s].filter(Wg);
    if (a.length === 0) return t;
    const o = n.qt(t), l = a.map(((u) => Math.abs(o - n.qt(u))));
    return a[l.indexOf(Math.min(...l))];
  }
  Ys(t) {
    let r = this.bs.get(t);
    r || (r = new jB(this, t), this.bs.set(t, r));
    let n = this.Ss.get(t);
    return n || (n = new IB(this.ns, this, t), this.Ss.set(t, n)), [r, n];
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
    const t = this.ns.tn().map(((n) => n.qs().sn())).filter(Wg), r = t.length === 0 ? null : Math.max(...t);
    this.vs = r !== null ? r : NaN;
  }
  Zs(t, r, n) {
    let i = t.get(r);
    return i === void 0 && (i = new NB(this, r, n), t.set(r, i)), i;
  }
}
function ko(e3) {
  return e3 === "left" || e3 === "right";
}
class Et {
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
    return new Et(2);
  }
  static yn() {
    return new Et(3);
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
class aP {
  formatTickmarks(t) {
    return t.map(((r) => this.format(r)));
  }
}
const Hg = ".";
function qe(e3, t) {
  if (!Ur(e3)) return "n/a";
  if (!ji(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? e3.toString() : ("0000000000000000" + e3.toString()).slice(-t);
}
class jo extends aP {
  constructor(t, r) {
    if (super(), r || (r = 1), Ur(t) && ji(t) || (t = 100), t < 0) throw new TypeError("invalid base");
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
      a >= r && (a -= r, n += 1), i = Hg + qe(+a.toFixed(this.Rn) * this.kn, s);
    } else n = Math.round(n * r) / r, s > 0 && (i = Hg + qe(0, s));
    return n.toFixed(0) + i;
  }
}
class oP extends jo {
  constructor(t = 100) {
    super(t);
  }
  format(t) {
    return `${super.format(t)}%`;
  }
}
class $B extends aP {
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
const zB = /[2-9]/g;
class Di {
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
    const i = n || zB, s = String(r).replace(i, "0");
    if (this.Ln.has(s)) return Jt(this.Ln.get(s)).Fn;
    if (this.Vn === this.zn) {
      const o = this.An[this.En];
      delete this.An[this.En], this.Ln.delete(o), this.En++, this.Vn--;
    }
    t.save(), t.textBaseline = "middle";
    const a = t.measureText(s);
    return t.restore(), a.width === 0 && r.length || (this.Ln.set(s, { Fn: a, Wn: this.Bn }), this.An[this.Bn] = s, this.Vn++, this.Bn++), a;
  }
}
class BB {
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
class lP {
  constructor(t, r, n) {
    this.jn = t, this.$n = new Di(50), this.Yn = r, this.O = n, this.F = -1, this.Xt = new BB(this.$n);
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
class FB extends ir {
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
    s < 0 || s > r.height || (t.lineCap = "butt", t.strokeStyle = this.jt.R, t.lineWidth = Math.floor(this.jt.ct * n), pr(t, this.jt.Zt), tP(t, s, 0, r.width));
  }
}
class Ef {
  constructor(t) {
    this.se = { ut: 0, R: "rgba(0, 0, 0, 0)", ct: 1, Zt: 0, It: false }, this.ne = new FB(), this.xt = true, this.ee = t, this.re = t.Qt(), this.ne.ht(this.se);
  }
  kt() {
    this.xt = true;
  }
  Tt() {
    return this.ee.It() ? (this.xt && (this.he(), this.xt = false), this.ne) : null;
  }
}
class WB extends Ef {
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
class qB extends ir {
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
const KB = [{ fe: 0, pe: 0.25, ve: 4, me: 10, we: 0.25, ge: 0, Me: 0.4, be: 0.8 }, { fe: 0.25, pe: 0.525, ve: 10, me: 14, we: 0, ge: 0, Me: 0.8, be: 0 }, { fe: 0.525, pe: 1, ve: 14, me: 14, we: 0, ge: 0, Me: 0, be: 0 }];
class UB {
  constructor(t) {
    this.Xt = new qB(), this.xt = true, this.Se = true, this.xe = performance.now(), this.Ce = this.xe - 1, this.ye = t;
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
    for (const u of KB) if (n >= u.fe && n <= u.pe) {
      i = u;
      break;
    }
    Ct(i !== void 0, "Last price animation internal logic error");
    const s = (n - i.fe) / (i.pe - i.fe);
    return { ce: this.ze(r, s, i.we, i.ge), de: this.ze(r, s, i.Me, i.be), ft: (a = s, o = i.ve, l = i.me, o + (l - o) * a) };
    var a, o, l;
  }
}
class VB extends Ef {
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
class YB extends Io {
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
function Gg(e3, t, r, n) {
  const i = Number.isFinite(t), s = Number.isFinite(r);
  return i && s ? e3(t, r) : i || s ? i ? t : r : n;
}
class Wt {
  constructor(t, r) {
    this.qe = t, this.je = r;
  }
  Ye(t) {
    return t !== null && this.qe === t.qe && this.je === t.je;
  }
  Ke() {
    return new Wt(this.qe, this.je);
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
    return t === null ? this : new Wt(Gg(Math.min, this.Ze(), t.Ze(), -1 / 0), Gg(Math.max, this.Ge(), t.Ge(), 1 / 0));
  }
  Je(t) {
    if (!Ur(t) || this.je - this.qe === 0) return;
    const r = 0.5 * (this.je + this.qe);
    let n = this.je - r, i = this.qe - r;
    n *= t, i *= t, this.je = r + n, this.qe = r + i;
  }
  Qe(t) {
    Ur(t) && (this.je += t, this.qe += t);
  }
  tr() {
    return { minValue: this.qe, maxValue: this.je };
  }
  static ir(t) {
    return t === null ? null : new Wt(t.minValue, t.maxValue);
  }
}
class Aa {
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
    return t === null ? null : new Aa(Wt.ir(t.priceRange), t.margins);
  }
}
const HB = [2, 4, 8, 16, 32, 64, 128, 256, 512], GB = "Custom series with conflation reducer must have a priceValueBuilder method";
class XB extends Ef {
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
class JB extends Io {
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
class ZB {
  constructor(t, r) {
    this.ye = t, this.Ps = r, this._r = new XB(t, this), this.jn = new JB(t, this), this.ur = new lP(this.jn, t, t.Qt());
  }
  cr(t) {
    ne(this.Ps, t), this.kt(), this.ye.Qt().dr();
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
class QB {
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
    for (const r of HB) if (t <= r) return r;
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
class tF extends sP {
  constructor(t) {
    super(), this.ns = t;
  }
  Qt() {
    return this.ns;
  }
}
const eF = { Bar: (e3, t, r, n) => {
  const i = t.upColor, s = t.downColor, a = C(e3(r, n)), o = hr(a.Wt[0]) <= hr(a.Wt[3]);
  return { th: a.R ?? (o ? i : s) };
}, Candlestick: (e3, t, r, n) => {
  const i = t.upColor, s = t.downColor, a = t.borderUpColor, o = t.borderDownColor, l = t.wickUpColor, u = t.wickDownColor, c = C(e3(r, n)), h = hr(c.Wt[0]) <= hr(c.Wt[3]);
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
class rF {
  constructor(t) {
    this.fh = (r, n) => n !== void 0 ? n.Wt : this.ye.qs().ph(r), this.ye = t, this.mh = eF[t.wh()];
  }
  gh(t, r) {
    return this.mh(this.fh, this.ye.N(), t, r);
  }
}
function uP(e3, t, r, n, i = 0, s = t.length) {
  let a = s - i;
  for (; 0 < a; ) {
    const o = a >> 1, l = i + o;
    n(t[l], r) === e3 ? (i = l + 1, a -= o + 1) : a = o;
  }
  return i;
}
const jn = uP.bind(null, true), cP = uP.bind(null, false);
var Xg;
(function(e3) {
  e3[e3.NearestLeft = -1] = "NearestLeft", e3[e3.None = 0] = "None", e3[e3.NearestRight = 1] = "NearestRight";
})(Xg || (Xg = {}));
const ar = 30;
class nF {
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
    for (const s of n) i = gs(i, this.Vh(t, r, s));
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
    return jn(this.Mh, t, ((r, n) => r.js < n));
  }
  Oh(t) {
    return cP(this.Mh, t, ((r, n) => r.js > n));
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
    const s = C(this.kh()), a = C(this.sn()), o = Math.max(t, s), l = Math.min(r, a), u = Math.ceil(o / ar) * ar, c = Math.max(u, Math.floor(l / ar) * ar);
    {
      const f = this.zh(o), d = this.Oh(Math.min(l, u, r));
      i = gs(i, this.Nh(f, d, n));
    }
    let h = this.bh.get(n);
    h === void 0 && (h = /* @__PURE__ */ new Map(), this.bh.set(n, h));
    for (let f = Math.max(u + 1, o); f < c; f += ar) {
      const d = Math.floor(f / ar);
      let v = h.get(d);
      if (v === void 0) {
        const m = this.zh(d * ar), g = this.Oh((d + 1) * ar - 1);
        v = this.Nh(m, g, n), h.set(d, v);
      }
      i = gs(i, v);
    }
    {
      const f = this.zh(c), d = this.Oh(l);
      i = gs(i, this.Nh(f, d, n));
    }
    return i;
  }
}
function gs(e3, t) {
  return e3 === null ? t : t === null ? e3 : { Fh: Math.min(e3.Fh, t.Fh), Wh: Math.max(e3.Wh, t.Wh) };
}
function Su() {
  return new nF();
}
const Ca = { setLineStyle: pr };
class iF {
  constructor(t) {
    this.Hh = t;
  }
  nt(t, r, n) {
    this.Hh.draw(t, Ca);
  }
  Uh(t, r, n) {
    var _a3, _b2;
    (_b2 = (_a3 = this.Hh).drawBackground) == null ? void 0 : _b2.call(_a3, t, Ca);
  }
}
class sF {
  constructor(t) {
    this.Ln = null, this.$h = t;
  }
  Tt() {
    var _a3;
    const t = this.$h.renderer();
    if (t === null) return null;
    if (((_a3 = this.Ln) == null ? void 0 : _a3.qh) === t) return this.Ln.jh;
    const r = new iF(t);
    return this.Ln = { qh: t, jh: r }, r;
  }
  Yh() {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.$h).zOrder) == null ? void 0 : _b2.call(_a3)) ?? "normal";
  }
}
class hP {
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
    const r = t.map(((n) => new sF(n)));
    return this.Kh = { qh: t, jh: r }, r;
  }
  Qn(t, r) {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.Zh).hitTest) == null ? void 0 : _b2.call(_a3, t, r)) ?? null;
  }
}
let aF = class extends hP {
  ds() {
    return [];
  }
};
class oF {
  constructor(t) {
    this.Hh = t;
  }
  nt(t, r, n) {
    this.Hh.draw(t, Ca);
  }
  Uh(t, r, n) {
    var _a3, _b2;
    (_b2 = (_a3 = this.Hh).drawBackground) == null ? void 0 : _b2.call(_a3, t, Ca);
  }
}
class Jg {
  constructor(t) {
    this.Ln = null, this.$h = t;
  }
  Tt() {
    var _a3;
    const t = this.$h.renderer();
    if (t === null) return null;
    if (((_a3 = this.Ln) == null ? void 0 : _a3.qh) === t) return this.Ln.jh;
    const r = new oF(t);
    return this.Ln = { qh: t, jh: r }, r;
  }
  Yh() {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.$h).zOrder) == null ? void 0 : _b2.call(_a3)) ?? "normal";
  }
}
function fP(e3) {
  var _a3, _b2, _c2;
  return { ri: e3.text(), Ei: e3.coordinate(), Vi: (_a3 = e3.fixedCoordinate) == null ? void 0 : _a3.call(e3), R: e3.textColor(), G: e3.backColor(), It: ((_b2 = e3.visible) == null ? void 0 : _b2.call(e3)) ?? true, pi: ((_c2 = e3.tickVisible) == null ? void 0 : _c2.call(e3)) ?? true };
}
class lF {
  constructor(t, r) {
    this.Xt = new iP(), this.Xh = t, this.Jh = r;
  }
  Tt() {
    return this.Xt.ht({ ss: this.Jh.ss(), ...fP(this.Xh) }), this.Xt;
  }
}
class uF extends Io {
  constructor(t, r) {
    super(), this.Xh = t, this.Ki = r;
  }
  Yi(t, r, n) {
    const i = fP(this.Xh);
    n.G = i.G, t.R = i.R;
    const s = 2 / 12 * this.Ki.k();
    n.Ti = s, n.Ri = s, n.Ei = i.Ei, n.Vi = i.Vi, t.ri = i.ri, t.It = i.It, t.pi = i.pi;
  }
}
class cF extends hP {
  constructor(t, r) {
    super(t), this.Qh = null, this.ta = null, this.ia = null, this.sa = null, this.ye = r;
  }
  fs() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).timeAxisViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.Qh) == null ? void 0 : _c2.qh) === t) return this.Qh.jh;
    const r = this.ye.Qt().Et(), n = t.map(((i) => new lF(i, r)));
    return this.Qh = { qh: t, jh: n }, n;
  }
  Ks() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).priceAxisViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.ta) == null ? void 0 : _c2.qh) === t) return this.ta.jh;
    const r = this.ye.Ft(), n = t.map(((i) => new uF(i, r)));
    return this.ta = { qh: t, jh: n }, n;
  }
  na() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).priceAxisPaneViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.ia) == null ? void 0 : _c2.qh) === t) return this.ia.jh;
    const r = t.map(((n) => new Jg(n)));
    return this.ia = { qh: t, jh: r }, r;
  }
  ea() {
    var _a3, _b2, _c2;
    const t = ((_b2 = (_a3 = this.Zh).timeAxisPaneViews) == null ? void 0 : _b2.call(_a3)) ?? [];
    if (((_c2 = this.sa) == null ? void 0 : _c2.qh) === t) return this.sa.jh;
    const r = t.map(((n) => new Jg(n)));
    return this.sa = { qh: t, jh: r }, r;
  }
  ra(t, r) {
    var _a3, _b2;
    return ((_b2 = (_a3 = this.Zh).autoscaleInfo) == null ? void 0 : _b2.call(_a3, t, r)) ?? null;
  }
}
function _u(e3, t, r, n) {
  e3.forEach(((i) => {
    t(i).forEach(((s) => {
      s.Yh() === r && n.push(s);
    }));
  }));
}
function Ou(e3) {
  return e3.Ys();
}
function hF(e3) {
  return e3.na();
}
function fF(e3) {
  return e3.ea();
}
const dF = ["Area", "Line", "Baseline"];
class To extends tF {
  constructor(t, r, n, i, s) {
    super(t), this.jt = Su(), this._r = new VB(this), this.ha = [], this.aa = new WB(this), this.la = null, this.oa = null, this._a = null, this.ua = [], this.ca = new QB(), this.da = /* @__PURE__ */ new Map(), this.fa = null, this.Ps = n, this.pa = r;
    const a = new YB(this);
    if (this.gs = [a], this.ur = new lP(a, this, t), dF.includes(this.pa) && (this.la = new UB(this)), this.va(), this.$h = i(this, this.Qt(), s), this.pa === "Custom") {
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
    return this.oa !== null || (this.oa = new rF(this)), this.oa;
  }
  N() {
    return this.Ps;
  }
  cr(t) {
    const r = this.Qt(), { priceScaleId: n, visible: i, priceFormat: s } = t;
    n !== void 0 && n !== this.Ps.priceScaleId && r.Sa(this, n), i !== void 0 && i !== this.Ps.visible && r.xa();
    const a = t.conflationThresholdFactor !== void 0;
    ne(this.Ps, t), a && (this.da.clear(), this.Qt().dr()), s !== void 0 && (this.va(), r.Ca()), r.ya(this), r.ka(), this.$h.kt("options");
  }
  ht(t, r) {
    this.jt.ht(t), this.da.clear();
    const n = this.Qt().Et().N();
    n.enableConflation && n.precomputeConflationOnInit && this.Pa(n.precomputeConflationPriority), this.$h.kt("data"), this.la !== null && (r && r.Ta ? this.la.Pe() : t.length === 0 && this.la.ke());
    const i = this.Qt().Kn(this);
    this.Qt().Ra(i), this.Qt().ya(this), this.Qt().ka(), this.Qt().dr();
  }
  Da(t) {
    const r = new ZB(this, t);
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
    } : void 0, a = this.ca.kr(this.jt.Dh(), t, r, i, n, s), o = Su();
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
    _u(this.ua, Ou, "top", r);
    const n = this.la;
    return n !== null && n.It() && (this._a === null && n.Re() && (this._a = setTimeout((() => {
      this._a = null, this.Qt().Ua();
    }), 0)), n.Te(), r.unshift(n)), r;
  }
  Ys() {
    const t = [];
    this.$a() || t.push(this.aa), t.push(this.$h, this._r);
    const r = this.ha.map(((n) => n.pr()));
    return t.push(...r), _u(this.ua, Ou, "normal", t), t;
  }
  qa() {
    return this.ja(Ou, "bottom");
  }
  Ya(t) {
    return this.ja(hF, t);
  }
  Ka(t) {
    return this.ja(fF, t);
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
      return Aa.ir(n);
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
    this.ua.push(new cF(t, this));
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
    return !ko(this.Ft().ol());
  }
  Ga(t, r) {
    if (!ji(t) || !ji(r) || this.jt.Gi()) return null;
    const n = this.pa === "Line" || this.pa === "Area" || this.pa === "Baseline" || this.pa === "Histogram" ? [3] : [2, 1], i = this.jt.Ih(t, r, n);
    let s = i !== null ? new Wt(i.Fh, i.Wh) : null, a = null;
    if (this.wh() === "Histogram") {
      const o = this.Ps.base, l = new Wt(o, o);
      s = s !== null ? s.Sn(l) : l;
    }
    return this.ua.forEach(((o) => {
      const l = o.ra(t, r);
      if (l == null ? void 0 : l.priceRange) {
        const u = new Wt(l.priceRange.minValue, l.priceRange.maxValue);
        s = s !== null ? s.Sn(u) : u;
      }
      (l == null ? void 0 : l.margins) && (a = l.margins);
    })), new Aa(s, a);
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
        this.Ja = new $B(this.Ps.priceFormat.precision);
        break;
      case "percent":
        this.Ja = new oP(this.Ps.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.Ps.priceFormat.precision);
        this.Ja = new jo(t, this.Ps.priceFormat.minMove * t);
      }
    }
    this.hs !== null && this.hs._l();
  }
  ja(t, r) {
    const n = [];
    return _u(this.ua, t, r, n), n;
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
      if (!s) throw new Error(GB);
      n = this.ca.Mr(r, t, this.fa, true, ((a) => s(a)));
    } else n = this.ca.Mr(r, t);
    const i = Su();
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
const vF = [3], pF = [0, 1, 2, 3];
class mF {
  constructor(t) {
    this.Ps = t;
  }
  bl(t, r, n) {
    let i = t;
    if (this.Ps.mode === 0) return i;
    const s = n.Rs(), a = s.Lt();
    if (a === null) return i;
    const o = s.Nt(t, a), l = n.Sl().filter(((c) => c instanceof To)).reduce(((c, h) => {
      if (n.Zn(h) || !h.It()) return c;
      const f = h.Ft(), d = h.qs();
      if (f.Gi() || !d.Ee(r)) return c;
      const v = d.ph(r);
      if (v === null) return c;
      const m = hr(h.Lt()), g = this.Ps.mode === 3 ? pF : vF;
      return c.concat(g.map(((y) => f.Nt(v.Wt[y], m.Wt))));
    }), []);
    if (l.length === 0) return i;
    l.sort(((c, h) => Math.abs(c - o) - Math.abs(h - o)));
    const u = l[0];
    return i = s.Ds(u, a), i;
  }
}
function bn(e3, t, r) {
  return Math.min(Math.max(e3, t), r);
}
function ys(e3, t, r) {
  return t - e3 <= r;
}
function Af(e3) {
  const t = Math.ceil(e3);
  return t % 2 == 0 ? t - 1 : t;
}
class gF extends ir {
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
        t.strokeStyle = a.Cl, pr(t, a.yl), t.beginPath();
        for (const o of a.kl) {
          const l = Math.round(o.Pl * n);
          t.moveTo(l, -s), t.lineTo(l, r.height + s);
        }
        t.stroke();
      }
      if (a.Tl) {
        t.strokeStyle = a.Rl, pr(t, a.Dl), t.beginPath();
        for (const o of a.Il) {
          const l = Math.round(o.Pl * i);
          t.moveTo(-s, l), t.lineTo(r.width + s, l);
        }
        t.stroke();
      }
    }));
  }
}
class yF {
  constructor(t) {
    this.Xt = new gF(), this.xt = true, this.yt = t;
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
class bF {
  constructor(t) {
    this.$h = new yF(t);
  }
  pr() {
    return this.$h;
  }
}
const Mu = { Bl: 4, El: 1e-4 };
function dn(e3, t) {
  const r = 100 * (e3 - t) / t;
  return t < 0 ? -r : r;
}
function wF(e3, t) {
  const r = dn(e3.Ze(), t), n = dn(e3.Ge(), t);
  return new Wt(r, n);
}
function di(e3, t) {
  const r = 100 * (e3 - t) / t + 100;
  return t < 0 ? -r : r;
}
function xF(e3, t) {
  const r = di(e3.Ze(), t), n = di(e3.Ge(), t);
  return new Wt(r, n);
}
function Ia(e3, t) {
  const r = Math.abs(e3);
  if (r < 1e-15) return 0;
  const n = Math.log10(r + t.El) + t.Bl;
  return e3 < 0 ? -n : n;
}
function vi(e3, t) {
  const r = Math.abs(e3);
  if (r < 1e-15) return 0;
  const n = Math.pow(10, r - t.Bl) - t.El;
  return e3 < 0 ? -n : n;
}
function si(e3, t) {
  if (e3 === null) return null;
  const r = Ia(e3.Ze(), t), n = Ia(e3.Ge(), t);
  return new Wt(r, n);
}
function vn(e3, t) {
  if (e3 === null) return null;
  const r = vi(e3.Ze(), t), n = vi(e3.Ge(), t);
  return new Wt(r, n);
}
function Eu(e3) {
  if (e3 === null) return Mu;
  const t = Math.abs(e3.Ge() - e3.Ze());
  if (t >= 1 || t < 1e-15) return Mu;
  const r = Math.ceil(Math.abs(Math.log10(t))), n = Mu.Bl + r;
  return { Bl: n, El: 1 / Math.pow(10, n) };
}
class Au {
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
      const h = ys(s, i, 1e-14) && s > i + 1e-14, f = ys(s, n * o, 1e-14), d = ys(s, 1, 1e-14);
      if (!(h && f && d)) break;
      s /= o, o = this.Ll[++a % this.Ll.length];
    }
    if (s <= i + 1e-14 && (s = i), s = Math.max(1, s), this.zl.length > 0 && (l = s, u = 1, c = 1e-14, Math.abs(l - u) < c)) for (a = 0, o = this.zl[0]; ys(s, n * o, 1e-14) && s > i + 1e-14; ) s /= o, o = this.zl[++a % this.zl.length];
    var l, u, c;
    return s;
  }
}
class Zg {
  constructor(t, r, n, i) {
    this.Nl = [], this.Ki = t, this.Al = r, this.Fl = n, this.Wl = i;
  }
  Ol(t, r) {
    if (t < r) throw new Error("high < low");
    const n = this.Ki.$t(), i = (t - r) * this.Hl() / n, s = new Au(this.Al, [2, 2.5, 2]), a = new Au(this.Al, [2, 2, 2.5]), o = new Au(this.Al, [2.5, 2, 2]), l = [];
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
    let i = hr(this.Ki.er());
    return this.Ki.io() && (i = vn(i, this.Ki.no())), i.Ze() - r < t && n - i.Ge() < t;
  }
}
function dP(e3) {
  return e3.slice().sort(((t, r) => C(t._s()) - C(r._s())));
}
var Qg;
(function(e3) {
  e3[e3.Normal = 0] = "Normal", e3[e3.Logarithmic = 1] = "Logarithmic", e3[e3.Percentage = 2] = "Percentage", e3[e3.IndexedTo100 = 3] = "IndexedTo100";
})(Qg || (Qg = {}));
const ty = new oP(), ey = new jo(100, 1);
class PF {
  constructor(t, r, n, i, s) {
    this.eo = 0, this.ro = null, this.sr = null, this.ho = null, this.ao = { lo: false, oo: null }, this._o = false, this.uo = 0, this.co = 0, this.do = new ft(), this.fo = new ft(), this.po = [], this.vo = null, this.mo = null, this.wo = null, this.Mo = null, this.bo = null, this.Ja = ey, this.So = Eu(null), this.xo = t, this.Ps = r, this.Co = n, this.yo = i, this.ko = s, this.Po = new Zg(this, 100, this.To.bind(this), this.Ro.bind(this));
  }
  ol() {
    return this.xo;
  }
  N() {
    return this.Ps;
  }
  cr(t) {
    if (ne(this.Ps, t), this._l(), t.mode !== void 0 && this.Do({ ae: t.mode }), t.scaleMargins !== void 0) {
      const r = Jt(t.scaleMargins.top), n = Jt(t.scaleMargins.bottom);
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
      const o = vi(s.Ze(), a), l = vi(s.Ge(), a);
      return isFinite(o) && isFinite(l);
    })(this.sr, this.So) ? (n = vn(this.sr, this.So), n !== null && this.Lo(n)) : this.Ps.autoScale = true), t.ae === 1 && t.ae !== r.ae && (n = si(this.sr, this.So), n !== null && this.Lo(n));
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
    return this.He() ? t = dn(t, r) : this.Eo() && (t = di(t, r)), this.Ro(t, r);
  }
  Yo(t, r, n) {
    this.Uo();
    const i = this.Ho(), s = C(this.er()), a = s.Ze(), o = s.Ge(), l = this.Fo() - 1, u = this.Ao(), c = l / (o - a), h = n === void 0 ? 0 : n.from, f = n === void 0 ? t.length : n.to, d = this.Ko();
    for (let v = h; v < f; v++) {
      const m = t[v], g = m.gt;
      if (isNaN(g)) continue;
      let y = g;
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
      let g = m.Hr, y = m.Ur, b = m.$r, w = m.qr;
      d !== null && (g = d(m.Hr, r), y = d(m.Ur, r), b = d(m.$r, r), w = d(m.qr, r));
      let x = i + c * (g - a), P = u ? x : this.eo - 1 - x;
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
    return this.mo || (this.mo = dP(this.po)), this.mo;
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
        return this.c_(dn(t, r));
      case 3:
        return this.Xa().format(di(t, r));
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
    return t = dn(t, r), this.c_(t, ty);
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
    this.vo !== null && (r = Math.round(this.vo.qh())), this.Ja = ey, this.He() ? (this.Ja = ty, r = 100) : this.Eo() ? (this.Ja = new jo(100, 1), r = 100) : this.vo !== null && (this.Ja = this.vo.Xa()), this.Po = new Zg(this, r, this.To.bind(this), this.Ro.bind(this)), this.Po.Ul();
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
    t = this.io() && t ? Ia(t, this.So) : t;
    const n = C(this.er()), i = this.Ho() + (this.Fo() - 1) * (t - n.Ze()) / n.Xe();
    return this.jo(i);
  }
  To(t, r) {
    if (this.Uo(), this.Gi()) return 0;
    const n = this.jo(t), i = C(this.er()), s = i.Ze() + i.Xe() * ((n - this.Ho()) / (this.Fo() - 1));
    return this.io() ? vi(s, this.So) : s;
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
            h = si(h, this.So);
            break;
          case 2:
            h = wF(h, u.Wt);
            break;
          case 3:
            h = xF(h, u.Wt);
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
        this.io() && (r = vn(r, this.So)), r = new Wt(r.Ze() - l, r.Ge() + l), this.io() && (r = si(r, this.So));
      }
      if (this.io()) {
        const l = vn(r, this.So), u = Eu(l);
        if (a = u, o = this.So, a.Bl !== o.Bl || a.El !== o.El) {
          const c = this.ho !== null ? vn(this.ho, this.So) : null;
          this.So = u, r = si(l, u), c !== null && (this.ho = si(c, u));
        }
      }
      this.Lo(r);
    } else this.sr === null && (this.Lo(new Wt(-0.5, 0.5)), this.So = Eu(null));
    var a, o;
  }
  Ko() {
    return this.He() ? dn : this.Eo() ? di : this.io() ? (t) => Ia(t, this.So) : null;
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
function ry(e3) {
  return e3 instanceof To;
}
class ny {
  constructor(t, r) {
    this.po = [], this.b_ = /* @__PURE__ */ new Map(), this.eo = 0, this.S_ = 0, this.x_ = 1, this.mo = null, this.C_ = false, this.y_ = new ft(), this.ua = [], this.Jh = t, this.ns = r, this.k_ = new bF(this);
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
    return this.b_.has(t) ? Jt(this.b_.get(t))[0].Ft() : null;
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
    return this.po.filter(ry);
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
    Ct(n !== -1, "removeDataSource: invalid data source"), this.po.splice(n, 1), r || this.po.forEach(((a, o) => a.us(o)));
    const i = C(t.Ft()).ol();
    if (this.b_.has(i)) {
      const a = Jt(this.b_.get(i)), o = a.indexOf(t);
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
    return this.mo === null && (this.mo = dP(this.po)), this.mo;
  }
  su(t, r) {
    r = bn(r, 0, this.po.length - 1);
    const n = this.po.indexOf(t);
    Ct(n !== -1, "setSeriesOrder: invalid data source"), this.po.splice(n, 1), this.po.splice(r, 0, t), this.po.forEach(((i, s) => i.us(s))), this.mo = null;
    for (const i of [this.P_, this.R_]) i.s_(), i._l();
    this.ns.dr();
  }
  Vt() {
    return this.Dt().filter(ry);
  }
  nu() {
    return this.y_;
  }
  eu() {
    return this.k_;
  }
  nl(t) {
    this.ua.push(new aF(t));
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
    if (i === null && (i = this.T_(r, this.ns.N().overlayPriceScales)), this.po.splice(n, 0, t), !ko(r)) {
      const s = this.b_.get(r) || [];
      s.push(t), this.b_.set(r, s);
    }
    t.us(n), i.i_(t), t.cs(i), this.H_(i), this.mo = null;
  }
  D_(t, r, n) {
    r.ae !== n.ae && this.J_(t);
  }
  T_(t, r) {
    const n = { visible: true, autoScale: true, ...We(r) }, i = new PF(t, n, this.ns.N().layout, this.ns.N().localization, this.ns.Xi());
    return i.No(this.$t()), i;
  }
}
function bs(e3) {
  return { hu: e3.hu, au: { te: e3.lu.externalId }, ou: e3.lu.cursorStyle };
}
function SF(e3, t, r, n) {
  for (const i of e3) {
    const s = i.Tt(n);
    if (s !== null && s.Qn) {
      const a = s.Qn(t, r);
      if (a !== null) return { _u: i, au: a };
    }
  }
  return null;
}
function _F(e3) {
  return e3.Ys !== void 0;
}
function vP(e3, t, r) {
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
  if ((i == null ? void 0 : i.lu.zOrder) === "top") return bs(i);
  for (const s of n) {
    if (i && i.hu === s && i.lu.zOrder !== "bottom" && !i.lu.isBackground) return bs(i);
    if (_F(s)) {
      const a = SF(s.Ys(e3), t, r, e3);
      if (a !== null) return { hu: s, _u: a._u, au: a.au };
    }
    if (i && i.hu === s && i.lu.zOrder !== "bottom" && i.lu.isBackground) return bs(i);
  }
  return (i == null ? void 0 : i.lu) ? bs(i) : null;
}
class OF {
  constructor(t, r, n = 50) {
    this.Vn = 0, this.Bn = 1, this.En = 1, this.Ln = /* @__PURE__ */ new Map(), this.An = /* @__PURE__ */ new Map(), this.uu = t, this.cu = r, this.zn = n;
  }
  du(t) {
    const r = t.time, n = this.cu.cacheKey(r), i = this.Ln.get(n);
    if (i !== void 0) return i.fu;
    if (this.Vn === this.zn) {
      const a = this.An.get(this.En);
      this.An.delete(this.En), this.Ln.delete(Jt(a)), this.En++, this.Vn--;
    }
    const s = this.uu(t);
    return this.Ln.set(n, { fu: s, Wn: this.Bn }), this.An.set(this.Bn, n), this.Vn++, this.Bn++, s;
  }
}
class wn {
  constructor(t, r) {
    Ct(t <= r, "right should be >= left"), this.pu = t, this.vu = r;
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
function iy(e3, t) {
  return e3 === null || t === null ? e3 === t : e3.Ye(t);
}
class MF {
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
      t <= n[0].index ? r.push(i) : n.splice(jn(n, t, ((s) => s.index < t)), 1 / 0);
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
      const c = Jt(this.wu.get(a)), h = c.length;
      let f = 1 / 0, d = -1 / 0;
      for (let v = 0; v < h; v++) {
        const m = c[v], g = m.index;
        for (; u < l; ) {
          const y = o[u], b = y.index;
          if (!(b < g && s(y))) {
            f = b;
            break;
          }
          u++, i.push(y), d = b, f = 1 / 0;
        }
        if (f - g >= t && g - d >= t && s(m)) i.push(m), d = g;
        else if (this.gu) return o;
      }
      for (; u < l; u++) s(o[u]) && i.push(o[u]);
    }
    return i;
  }
}
class xn {
  constructor(t) {
    this.Tu = t;
  }
  Ru() {
    return this.Tu === null ? null : new wn(Math.floor(this.Tu.Aa()), Math.ceil(this.Tu.bi()));
  }
  Du() {
    return this.Tu;
  }
  static Iu() {
    return new xn(null);
  }
}
function EF(e3, t) {
  return e3.weight > t.weight ? e3 : t;
}
class AF {
  constructor(t, r, n, i) {
    this.S_ = 0, this.Vu = null, this.Bu = [], this.bo = null, this.Mo = null, this.Eu = new MF(), this.Au = /* @__PURE__ */ new Map(), this.Lu = xn.Iu(), this.zu = true, this.Ou = new ft(), this.Nu = new ft(), this.Fu = new ft(), this.Wu = null, this.Hu = null, this.Uu = /* @__PURE__ */ new Map(), this.$u = -1, this.qu = [], this.ju = 1, this.Ps = r, this.yo = n, this.Yu = r.rightOffset, this.Ku = r.barSpacing, this.ns = t, this.Zu(r), this.cu = i, this.Gu(), this.Eu.Mu(r.uniformDistribution), this.Xu(), this.Ju();
  }
  N() {
    return this.Ps;
  }
  Qu(t) {
    ne(this.yo, t), this.tc(), this.Gu();
  }
  cr(t, r) {
    ne(this.Ps, t), this.Ps.fixLeftEdge && this.sc(), this.Ps.fixRightEdge && this.nc(), t.barSpacing !== void 0 && this.ns.gn(t.barSpacing), t.rightOffset !== void 0 && this.ns.Mn(t.rightOffset), this.Zu(t), t.minBarSpacing === void 0 && t.maxBarSpacing === void 0 || this.ns.gn(t.barSpacing ?? this.Ku), t.ignoreWhitespaceIndices !== void 0 && t.ignoreWhitespaceIndices !== this.Ps.ignoreWhitespaceIndices && this.Ju(), this.tc(), this.Gu(), t.enableConflation === void 0 && t.conflationThresholdFactor === void 0 || this.Xu(), this.Fu.p();
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
    const n = jn(this.Bu, this.cu.key(t), ((i, s) => this.cu.key(i.time) < s));
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
    if (this.Gi() || !ji(t)) return 0;
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
    const r = bn(this.S_ - t, 0, this.S_), n = bn(this.S_ - C(this.Mo), 0, this.S_);
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
    this.Nc(new wn(t, r + n), true);
  }
  Wc(t) {
    const r = new wn(t.from, t.to);
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
    if (this.zu = false, this.Gi()) return void this.qc(xn.Iu());
    const t = this.vc(), r = this.S_ / this.Ku, n = this.Yu + t, i = new wn(n - r + 1, n);
    this.qc(new xn(i));
  }
  dc() {
    const t = bn(this.Ku, this.jc(), this.Yc());
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
    return r === void 0 && (r = new OF(((n) => this.Gc(n)), this.cu), this.Au.set(t.weight, r)), r.du(t);
  }
  Gc(t) {
    return this.cu.formatTickmark(t, this.yo);
  }
  qc(t) {
    const r = this.Lu;
    this.Lu = t, iy(r.Ru(), this.Lu.Ru()) || this.Ou.p(), iy(r.Du(), this.Lu.Du()) || this.Nu.p(), this.$c();
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
var sy, ay, oy, ly, uy;
(function(e3) {
  e3[e3.OnTouchEnd = 0] = "OnTouchEnd", e3[e3.OnNextTap = 1] = "OnNextTap";
})(sy || (sy = {}));
class CF {
  constructor(t, r, n) {
    this.Xc = [], this.Jc = [], this.Qc = null, this.S_ = 0, this.td = null, this.sd = new ft(), this.nd = new ft(), this.ed = null, this.rd = t, this.Ps = r, this.cu = n, this.ko = new MB(this.Ps.layout.colorParsers), this.hd = new OB(this), this.Jh = new AF(this, r.timeScale, this.Ps.localization, n), this.Ct = new RB(this, r.crosshair), this.ad = new mF(r.crosshair), r.addDefaultPane && (this.ld(0), this.Xc[0].A_(2)), this.od = this._d(0), this.ud = this._d(1);
  }
  Ca() {
    this.dd(Et.yn());
  }
  dr() {
    this.dd(Et.Cn());
  }
  Ua() {
    this.dd(new Et(1));
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
    ne(this.Ps, t), this.Xc.forEach(((r) => r.I_(t))), t.timeScale !== void 0 && this.Jh.cr(t.timeScale), t.localization !== void 0 && this.Jh.Qu(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.sd.p(), this.od = this._d(0), this.ud = this._d(1), this.Ca();
  }
  md(t, r, n = 0) {
    const i = this.Xc[n];
    if (i === void 0) return;
    if (t === "left") return ne(this.Ps, { leftPriceScale: r }), i.I_({ leftPriceScale: r }), this.sd.p(), void this.Ca();
    if (t === "right") return ne(this.Ps, { rightPriceScale: r }), i.I_({ rightPriceScale: r }), this.sd.p(), void this.Ca();
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
    this.Xc.length !== 1 && (Ct(t >= 0 && t < this.Xc.length, "Invalid pane index"), this.Xc.splice(t, 1), this.Ca());
  }
  xd(t, r) {
    if (this.Xc.length < 2) return;
    Ct(t >= 0 && t < this.Xc.length, "Invalid pane index");
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
    Ct(t >= 0 && t < this.Xc.length && r >= 0 && r < this.Xc.length, "Invalid pane index");
    const n = this.Xc[t], i = this.Xc[r];
    this.Xc[t] = i, this.Xc[r] = n, this.Ca();
  }
  yd(t, r) {
    if (Ct(t >= 0 && t < this.Xc.length && r >= 0 && r < this.Xc.length, "Invalid pane index"), t === r) return;
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
      const h = vP(i, t, r);
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
      return n instanceof ny;
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
    Ct(n !== -1, "Series not found");
    const i = C(r);
    this.Jc.splice(n, 1), i.n_(t), t.m && t.m(), this.xa(), this.Jh.Ju(), this.Ud(i);
  }
  Sa(t, r) {
    const n = C(this.Kn(t));
    n.n_(t, true), n.i_(t, r, true);
  }
  Fc() {
    const t = Et.Cn();
    t.cn(), this.dd(t);
  }
  $d(t) {
    const r = Et.Cn();
    r.pn(t), this.dd(r);
  }
  wn() {
    const t = Et.Cn();
    t.wn(), this.dd(t);
  }
  gn(t) {
    const r = Et.Cn();
    r.gn(t), this.dd(r);
  }
  Mn(t) {
    const r = Et.Cn();
    r.Mn(t), this.dd(r);
  }
  vn(t) {
    const r = Et.Cn();
    r.vn(t), this.dd(r);
  }
  dn() {
    const t = Et.Cn();
    t.dn(), this.dd(t);
  }
  qd() {
    return this.Ps.rightPriceScale.visible ? "right" : "left";
  }
  jd(t, r) {
    if (Ct(r >= 0, "Index should be greater or equal to 0"), r === this.Yd(t)) return;
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
    const r = new ny(this.Jh, this);
    this.Xc.push(r);
    const n = t ?? this.Xc.length - 1, i = Et.yn();
    return i.hn(n, { an: 0, ln: true }), this.dd(i), r;
  }
  ld(t) {
    return Ct(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.Xc.length, t)) < this.Xc.length ? this.Xc[t] : this.Jd(t);
  }
  Yd(t) {
    return this.Xc.findIndex(((r) => r.F_().includes(t)));
  }
  kd(t, r) {
    const n = new Et(r);
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
    r.i_(t, i), ko(i) || t.cr(t.N());
  }
  _d(t) {
    const r = this.Ps.layout;
    return r.background.type === "gradient" ? t === 0 ? r.background.topColor : r.background.bottomColor : r.background.color;
  }
  Ud(t) {
    !t.N_() && t.Sl().length === 0 && this.Xc.length > 1 && this.Xc.splice(this.Gd(t), 1);
  }
}
function pP(e3) {
  if (e3 >= 1) return 0;
  let t = 0;
  for (; t < 8; t++) {
    const r = Math.round(e3);
    if (Math.abs(r - e3) < 1e-8) return t;
    e3 *= 10;
  }
  return t;
}
function Nc(e3) {
  return !Ur(e3) && !Qi(e3);
}
function mP(e3) {
  return Ur(e3);
}
(function(e3) {
  e3[e3.Disabled = 0] = "Disabled", e3[e3.Continuous = 1] = "Continuous", e3[e3.OnDataUpdate = 2] = "OnDataUpdate";
})(ay || (ay = {})), (function(e3) {
  e3[e3.LastBar = 0] = "LastBar", e3[e3.LastVisible = 1] = "LastVisible";
})(oy || (oy = {})), (function(e3) {
  e3.Solid = "solid", e3.VerticalGradient = "gradient";
})(ly || (ly = {})), (function(e3) {
  e3[e3.Year = 0] = "Year", e3[e3.Month = 1] = "Month", e3[e3.DayOfMonth = 2] = "DayOfMonth", e3[e3.Time = 3] = "Time", e3[e3.TimeWithSeconds = 4] = "TimeWithSeconds";
})(uy || (uy = {}));
const cy = (e3) => e3.getUTCFullYear();
function IF(e3, t, r) {
  return t.replace(/yyyy/g, ((n) => qe(cy(n), 4))(e3)).replace(/yy/g, ((n) => qe(cy(n) % 100, 2))(e3)).replace(/MMMM/g, ((n, i) => new Date(n.getUTCFullYear(), n.getUTCMonth(), 1).toLocaleString(i, { month: "long" }))(e3, r)).replace(/MMM/g, ((n, i) => new Date(n.getUTCFullYear(), n.getUTCMonth(), 1).toLocaleString(i, { month: "short" }))(e3, r)).replace(/MM/g, ((n) => qe(((i) => i.getUTCMonth() + 1)(n), 2))(e3)).replace(/dd/g, ((n) => qe(((i) => i.getUTCDate())(n), 2))(e3));
}
class gP {
  constructor(t = "yyyy-MM-dd", r = "default") {
    this.Qd = t, this.tf = r;
  }
  du(t) {
    return IF(t, this.Qd, this.tf);
  }
}
class kF {
  constructor(t) {
    this.if = t || "%h:%m:%s";
  }
  du(t) {
    return this.if.replace("%h", qe(t.getUTCHours(), 2)).replace("%m", qe(t.getUTCMinutes(), 2)).replace("%s", qe(t.getUTCSeconds(), 2));
  }
}
const jF = { sf: "yyyy-MM-dd", nf: "%h:%m:%s", ef: " ", rf: "default" };
class TF {
  constructor(t = {}) {
    const r = { ...jF, ...t };
    this.hf = new gP(r.sf, r.rf), this.af = new kF(r.nf), this.lf = r.ef;
  }
  du(t) {
    return `${this.hf.du(t)}${this.lf}${this.af.du(t)}`;
  }
}
function ws(e3) {
  return 60 * e3 * 60 * 1e3;
}
function Cu(e3) {
  return 60 * e3 * 1e3;
}
const xs = [{ _f: (hy = 1, 1e3 * hy), uf: 10 }, { _f: Cu(1), uf: 20 }, { _f: Cu(5), uf: 21 }, { _f: Cu(30), uf: 22 }, { _f: ws(1), uf: 30 }, { _f: ws(3), uf: 31 }, { _f: ws(6), uf: 32 }, { _f: ws(12), uf: 33 }];
var hy;
function fy(e3, t) {
  if (e3.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (e3.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (e3.getUTCDate() !== t.getUTCDate()) return 50;
  for (let r = xs.length - 1; r >= 0; --r) if (Math.floor(t.getTime() / xs[r]._f) !== Math.floor(e3.getTime() / xs[r]._f)) return xs[r].uf;
  return 0;
}
function Iu(e3) {
  let t = e3;
  if (Qi(e3) && (t = Cf(e3)), !Nc(t)) throw new Error("time must be of type BusinessDay");
  const r = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return { cf: Math.round(r.getTime() / 1e3), df: t };
}
function dy(e3) {
  if (!mP(e3)) throw new Error("time must be of type isUTCTimestamp");
  return { cf: e3 };
}
function Cf(e3) {
  const t = new Date(e3);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${e3}, expected format=yyyy-mm-dd`);
  return { day: t.getUTCDate(), month: t.getUTCMonth() + 1, year: t.getUTCFullYear() };
}
function vy(e3) {
  Qi(e3.time) && (e3.time = Cf(e3.time));
}
class py {
  options() {
    return this.Ps;
  }
  setOptions(t) {
    this.Ps = t, this.updateFormatter(t.localization);
  }
  preprocessData(t) {
    Array.isArray(t) ? (function(r) {
      r.forEach(vy);
    })(t) : vy(t);
  }
  createConverterToInternalObj(t) {
    return C((function(r) {
      return r.length === 0 ? null : Nc(r[0].time) || Qi(r[0].time) ? Iu : dy;
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
    return mP(r = t) ? dy(r) : Nc(r) ? Iu(r) : Iu(Cf(r));
    var r;
  }
  updateFormatter(t) {
    if (!this.Ps) return;
    const r = t.dateFormat;
    this.Ps.timeScale.timeVisible ? this.ff = new TF({ sf: r, nf: this.Ps.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m", ef: "   ", rf: t.locale }) : this.ff = new gP(r, t.locale);
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
    let r = t.reduce(EF, t[0]).weight;
    return r > 30 && r < 50 && (r = 30), r;
  }
  fillWeightsForPoints(t, r) {
    (function(n, i = 0) {
      if (n.length === 0) return;
      let s = i === 0 ? null : n[i - 1].time.cf, a = s !== null ? new Date(1e3 * s) : null, o = 0;
      for (let l = i; l < n.length; ++l) {
        const u = n[l], c = new Date(1e3 * u.time.cf);
        a !== null && (u.timeWeight = fy(c, a)), o += u.time.cf - (s || u.time.cf), s = u.time.cf, a = c;
      }
      if (i === 0 && n.length > 1) {
        const l = Math.ceil(o / (n.length - 1)), u = new Date(1e3 * (n[0].time.cf - l));
        n[0].timeWeight = fy(new Date(1e3 * n[0].time.cf), u);
      }
    })(t, r);
  }
  static pf(t) {
    return ne({ localization: { dateFormat: "dd MMM 'yy" } }, t ?? {});
  }
}
const Tn = typeof window < "u";
function my() {
  return !!Tn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function ku() {
  return !!Tn && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function Dc(e3) {
  return e3 + e3 % 2;
}
function NF(e3) {
  Tn && window.chrome !== void 0 && e3.addEventListener("mousedown", ((t) => {
    if (t.button === 1) return t.preventDefault(), false;
  }));
}
class No {
  constructor(t, r, n) {
    this.vf = 0, this.mf = null, this.wf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.gf = 0, this.Mf = null, this.bf = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.Sf = null, this.xf = false, this.Cf = null, this.yf = null, this.kf = false, this.Pf = false, this.Tf = false, this.Rf = null, this.Df = null, this.If = null, this.Vf = null, this.Bf = null, this.Ef = null, this.Af = null, this.Lf = 0, this.zf = false, this.Of = false, this.Nf = false, this.Ff = 0, this.Wf = null, this.Hf = !ku(), this.Uf = (i) => {
      this.$f(i);
    }, this.qf = (i) => {
      if (this.jf(i)) {
        const s = this.Yf(i);
        if (++this.gf, this.Mf && this.gf > 1) {
          const { Kf: a } = this.Zf(Ee(i), this.bf);
          a < 30 && !this.Tf && this.Gf(s, this.Jf.Xf), this.Qf();
        }
      } else {
        const s = this.Yf(i);
        if (++this.vf, this.mf && this.vf > 1) {
          const { Kf: a } = this.Zf(Ee(i), this.wf);
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
    const r = ju(t.changedTouches, C(this.Wf));
    if (r === null || (this.Ff = Ps(t), this.Af !== null) || this.Of) return;
    this.zf = true;
    const n = this.Zf(Ee(r), C(this.yf)), { up: i, cp: s, Kf: a } = n;
    if (this.kf || !(a < 5)) {
      if (!this.kf) {
        const o = 0.5 * i, l = s >= o && !this.Ps.dp(), u = o > s && !this.Ps.fp();
        l || u || (this.Of = true), this.kf = true, this.Tf = true, this.rp(), this.Qf();
      }
      if (!this.Of) {
        const o = this.Yf(t, r);
        this.Gf(o, this.Jf.pp), an(t);
      }
    }
  }
  vp(t) {
    if (t.button !== 0) return;
    const r = this.Zf(Ee(t), C(this.Cf)), { Kf: n } = r;
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
    let r = ju(t.changedTouches, C(this.Wf));
    if (r === null && t.touches.length === 0 && (r = t.changedTouches[0]), r === null) return;
    this.Wf = null, this.Ff = Ps(t), this.rp(), this.yf = null, this.Ef && (this.Ef(), this.Ef = null);
    const n = this.Yf(t, r);
    if (this.Gf(n, this.Jf.gp), ++this.gf, this.Mf && this.gf > 1) {
      const { Kf: i } = this.Zf(Ee(r), this.bf);
      i < 30 && !this.Tf && this.Gf(n, this.Jf.Xf), this.Qf();
    } else this.Tf || (this.Gf(n, this.Jf.Mp), this.Jf.Mp && an(t));
    this.gf === 0 && an(t), t.touches.length === 0 && this.xf && (this.xf = false, an(t));
  }
  $f(t) {
    if (t.button !== 0) return;
    const r = this.Yf(t);
    if (this.Cf = null, this.Nf = false, this.Bf && (this.Bf(), this.Bf = null), my() && this.np.ownerDocument.documentElement.removeEventListener("mouseleave", this.Uf), !this.jf(t)) if (this.tp(r, this.Jf.bp), ++this.vf, this.mf && this.vf > 1) {
      const { Kf: n } = this.Zf(Ee(t), this.wf);
      n < 5 && !this.Pf && this.tp(r, this.Jf.ip), this.sp();
    } else this.Pf || this.tp(r, this.Jf.Sp);
  }
  rp() {
    this.Sf !== null && (clearTimeout(this.Sf), this.Sf = null);
  }
  xp(t) {
    if (this.Wf !== null) return;
    const r = t.changedTouches[0];
    this.Wf = r.identifier, this.Ff = Ps(t);
    const n = this.np.ownerDocument.documentElement;
    this.Tf = false, this.kf = false, this.Of = false, this.yf = Ee(r), this.Ef && (this.Ef(), this.Ef = null);
    {
      const s = this._p.bind(this), a = this.wp.bind(this);
      this.Ef = () => {
        n.removeEventListener("touchmove", s), n.removeEventListener("touchend", a);
      }, n.addEventListener("touchmove", s, { passive: false }), n.addEventListener("touchend", a, { passive: false }), this.rp(), this.Sf = setTimeout(this.Cp.bind(this, t), 240);
    }
    const i = this.Yf(t, r);
    this.Gf(i, this.Jf.yp), this.Mf || (this.gf = 0, this.Mf = setTimeout(this.Qf.bind(this), 500), this.bf = Ee(r));
  }
  kp(t) {
    if (t.button !== 0) return;
    const r = this.np.ownerDocument.documentElement;
    my() && r.addEventListener("mouseleave", this.Uf), this.Pf = false, this.Cf = Ee(t), this.Bf && (this.Bf(), this.Bf = null);
    {
      const i = this.vp.bind(this), s = this.$f.bind(this);
      this.Bf = () => {
        r.removeEventListener("mousemove", i), r.removeEventListener("mouseup", s);
      }, r.addEventListener("mousemove", i), r.addEventListener("mouseup", s);
    }
    if (this.Nf = true, this.jf(t)) return;
    const n = this.Yf(t);
    this.tp(n, this.Jf.Pp), this.mf || (this.vf = 0, this.mf = setTimeout(this.sp.bind(this), 500), this.wf = Ee(t));
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
    ku() && (this.If = () => {
      this.np.removeEventListener("dblclick", this.qf);
    }, this.np.addEventListener("dblclick", this.qf)), this.np.addEventListener("mouseleave", this.Rp.bind(this)), this.np.addEventListener("touchstart", this.xp.bind(this), { passive: true }), NF(this.np), this.np.addEventListener("mousedown", this.kp.bind(this)), this.Dp(), this.np.addEventListener("touchmove", (() => {
    }), { passive: false });
  }
  Dp() {
    this.Jf.Ip === void 0 && this.Jf.Vp === void 0 && this.Jf.Bp === void 0 || (this.np.addEventListener("touchstart", ((t) => this.Ep(t.touches)), { passive: true }), this.np.addEventListener("touchmove", ((t) => {
      if (t.touches.length === 2 && this.Af !== null && this.Jf.Vp !== void 0) {
        const r = gy(t.touches[0], t.touches[1]) / this.Lf;
        this.Jf.Vp(this.Af, r), an(t);
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
    this.Af = { _t: (t[0].clientX - r.left + (t[1].clientX - r.left)) / 2, ut: (t[0].clientY - r.top + (t[1].clientY - r.top)) / 2 }, this.Lf = gy(t[0], t[1]), this.Jf.Ip !== void 0 && this.Jf.Ip(), this.rp();
  }
  Ap() {
    this.Af !== null && (this.Af = null, this.Jf.Bp !== void 0 && this.Jf.Bp());
  }
  Rp(t) {
    if (this.Vf && this.Vf(), this.jf(t) || !this.Hf) return;
    const r = this.Yf(t);
    this.tp(r, this.Jf.zp), this.Hf = !ku();
  }
  Cp(t) {
    const r = ju(t.touches, C(this.Wf));
    if (r === null) return;
    const n = this.Yf(t, r);
    this.Gf(n, this.Jf.Op), this.Tf = true, this.xf = true;
  }
  jf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : Ps(t) < this.Ff + 500;
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
      t.type !== "touchstart" && an(t);
    } };
  }
}
function gy(e3, t) {
  const r = e3.clientX - t.clientX, n = e3.clientY - t.clientY;
  return Math.sqrt(r * r + n * n);
}
function an(e3) {
  e3.cancelable && e3.preventDefault();
}
function Ee(e3) {
  return { _t: e3.pageX, ut: e3.pageY };
}
function Ps(e3) {
  return e3.timeStamp || performance.now();
}
function ju(e3, t) {
  for (let r = 0; r < e3.length; ++r) if (e3[r].identifier === t) return e3[r];
  return null;
}
class DF {
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
    this.$p = new No(n, s, { dp: () => false, fp: () => true }), this.Up = { hv: n, rv: t };
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
    const n = (t.pageY - r.dv) * r.mv, i = bn(r.fv + n, r.wv, r.pv);
    this.Kp.cv().A_(i), this.Gp.cv().A_(r.vv - i), this.Yp.Qt().Ca();
  }
  uv(t) {
    this.jp !== null && this.Up !== null && (this.jp = null, this.Up.rv.style.display = "none");
  }
}
function Tu(e3, t) {
  return e3.gv - t.gv;
}
function Nu(e3, t, r) {
  const n = (e3.gv - t.gv) / (e3.wt - t.wt);
  return Math.sign(n) * Math.min(Math.abs(n), r);
}
class LF {
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
    const i = Nu(this.Mv, this.bv, this.Tv), s = Tu(this.Mv, this.bv), a = [i], o = [s];
    if (n += s, this.Sv !== null) {
      const u = Nu(this.bv, this.Sv, this.Tv);
      if (Math.sign(u) === Math.sign(i)) {
        const c = Tu(this.bv, this.Sv);
        if (a.push(u), o.push(c), n += c, this.xv !== null) {
          const h = Nu(this.Sv, this.xv, this.Tv);
          if (Math.sign(h) === Math.sign(i)) {
            const f = Tu(this.Sv, this.xv);
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
class RF {
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
function Vr(e3, t) {
  const r = C(e3.ownerDocument).createElement("canvas");
  e3.appendChild(r);
  const n = xB(r, { options: { allowResizeObserver: true }, transform: (i, s) => ({ width: Math.max(i.width, s.width), height: Math.max(i.height, s.height) }) });
  return n.resizeCanvasElement(t), n;
}
function Yr(e3) {
  var _a3;
  e3.width = 1, e3.height = 1, (_a3 = e3.getContext("2d")) == null ? void 0 : _a3.clearRect(0, 0, 1, 1);
}
function Lc(e3, t, r, n) {
  e3.Uh && e3.Uh(t, r, n);
}
function ks(e3, t, r, n) {
  e3.nt(t, r, n);
}
function Rc(e3, t, r, n) {
  const i = e3(r, n);
  for (const s of i) {
    const a = s.Tt(n);
    a !== null && t(a);
  }
}
function Du(e3, t) {
  return (r) => {
    var _a3, _b2;
    return (function(n) {
      return n.Ft !== void 0;
    })(r) ? (((_a3 = r.Ft()) == null ? void 0 : _a3.ol()) ?? "") !== t ? [] : ((_b2 = r.Ya) == null ? void 0 : _b2.call(r, e3)) ?? [] : [];
  };
}
function yy(e3, t, r, n) {
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
        const m = t === 1 ? -1 - v : v - r, g = Math.min(m, a);
        for (let y = i; y < e3.length; y++) e3[y].Ui(e3[y].Hi() + t * g);
        a -= g;
      }
    } else i = o, a = t === 1 ? f - c - h : h - (f + c);
  }
}
class by {
  constructor(t, r, n, i) {
    this.Ki = null, this.Uv = null, this.$v = false, this.qv = new Di(200), this.jv = null, this.Yv = 0, this.Kv = false, this.Zv = () => {
      this.Kv || this.yt.Gv().Qt().dr();
    }, this.Xv = () => {
      this.Kv || this.yt.Gv().Qt().dr();
    }, this.yt = t, this.Ps = r, this.Co = r.layout, this.hd = n, this.Jv = i === "left", this.Qv = Du("normal", i), this.tm = Du("top", i), this.im = Du("bottom", i), this.Jp = document.createElement("div"), this.Jp.style.height = "100%", this.Jp.style.overflow = "hidden", this.Jp.style.width = "25px", this.Jp.style.left = "0", this.Jp.style.position = "relative", this.sm = Vr(this.Jp, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const s = this.sm.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.nm = Vr(this.Jp, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const a = this.nm.canvasElement;
    a.style.position = "absolute", a.style.zIndex = "2", a.style.left = "0", a.style.top = "0";
    const o = { Pp: this.ov.bind(this), yp: this.ov.bind(this), mp: this._v.bind(this), pp: this._v.bind(this), Tp: this.rm.bind(this), bp: this.uv.bind(this), gp: this.uv.bind(this), ip: this.hm.bind(this), Xf: this.hm.bind(this), lp: this.am.bind(this), zp: this.lv.bind(this) };
    this.$p = new No(this.nm.canvasElement, o, { dp: () => !this.Ps.handleScroll.vertTouchDrag, fp: () => true });
  }
  m() {
    this.$p.m(), this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Yr(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Yr(this.sm.canvasElement), this.sm.dispose(), this.Ki !== null && this.Ki.r_().u(this), this.Ki = null;
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
    return Dc(Math.ceil(r.S + r.C + r.V + r.B + 5 + l));
  }
  dm(t) {
    this.Uv !== null && Dr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`);
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
      const i = Kr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s), this.gm(s);
      })), this.yt.Mm(i, this.im), this.bm(i), this.yt.Mm(i, this.Qv), this.Sm(i));
    }
    this.nm.applySuggestedBitmapSize();
    const n = Kr(this.nm, r);
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
    a === o ? Co(t, 0, 0, n, i, a) : nP(t, 0, 0, n, i, a, o);
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
    yy(i, 1, this.Uv.height, r), yy(s, -1, this.Uv.height, r);
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
    return Ni(this.Co.fontSize, this.Co.fontFamily);
  }
}
function $F(e3, t) {
  var _a3;
  return ((_a3 = e3.qa) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function wy(e3, t) {
  var _a3;
  return ((_a3 = e3.Ys) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function xy(e3, t) {
  var _a3;
  return ((_a3 = e3.ds) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
function zF(e3, t) {
  var _a3;
  return ((_a3 = e3.Ha) == null ? void 0 : _a3.call(e3, t)) ?? [];
}
class If {
  constructor(t, r) {
    this.Uv = Z({ width: 0, height: 0 }), this.km = null, this.Pm = null, this.Tm = null, this.Rm = null, this.Dm = false, this.Im = new ft(), this.Vm = new ft(), this.Bm = 0, this.Em = false, this.Am = null, this.Lm = false, this.zm = null, this.Om = null, this.Kv = false, this.Zv = () => {
      this.Kv || this.Nm === null || this.ns().dr();
    }, this.Xv = () => {
      this.Kv || this.Nm === null || this.ns().dr();
    }, this.Lv = t, this.Nm = r, this.Nm.nu().i(this.Fm.bind(this), this, true), this.Wm = document.createElement("td"), this.Wm.style.padding = "0", this.Wm.style.position = "relative";
    const n = document.createElement("div");
    n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.Hm = document.createElement("td"), this.Hm.style.padding = "0", this.Um = document.createElement("td"), this.Um.style.padding = "0", this.Wm.appendChild(n), this.sm = Vr(n, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const i = this.sm.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.nm = Vr(n, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const s = this.nm.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.Xp = document.createElement("tr"), this.Xp.appendChild(this.Hm), this.Xp.appendChild(this.Wm), this.Xp.appendChild(this.Um), this.$m(), this.$p = new No(this.nm.canvasElement, this, { dp: () => this.Am === null && !this.Lv.N().handleScroll.vertTouchDrag, fp: () => this.Am === null && !this.Lv.N().handleScroll.horzTouchDrag });
  }
  m() {
    this.km !== null && this.km.m(), this.Pm !== null && this.Pm.m(), this.Tm = null, this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Yr(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Yr(this.sm.canvasElement), this.sm.dispose(), this.Nm !== null && (this.Nm.nu().u(this), this.Nm.m()), this.$p.m();
  }
  cv() {
    return C(this.Nm);
  }
  qm(t) {
    var _a3;
    this.Nm !== null && this.Nm.nu().u(this), this.Nm = t, this.Nm !== null && this.Nm.nu().i(If.prototype.Fm.bind(this), this, true), this.$m(), this.Lv.Zp().indexOf(this) === this.Lv.Zp().length - 1 ? (this.Tm = this.Tm ?? new RF(this.Wm, this.Lv), this.Tm.kt()) : ((_a3 = this.Tm) == null ? void 0 : _a3.Ov(), this.Tm = null);
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
    return n === null ? null : vP(n, t, r);
  }
  hw(t, r) {
    C(r === "left" ? this.km : this.Pm).dm(Z({ width: t, height: this.Uv.height }));
  }
  sv() {
    return this.Uv;
  }
  dm(t) {
    Dr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Wm.style.width = t.width + "px", this.Wm.style.height = t.height + "px");
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
      const i = Kr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s);
      })), this.Nm && (this.lw(i, $F), this.ow(i), this.lw(i, wy), this.lw(i, xy)));
    }
    this.nm.applySuggestedBitmapSize();
    const n = Kr(this.nm, r);
    n !== null && (n.useBitmapCoordinateSpace((({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    })), this._w(n), this.lw(n, zF), this.lw(n, xy));
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
    a === o ? Co(t, 0, 0, n, i, o) : nP(t, 0, 0, n, i, a, o);
  }
  ow(t) {
    const r = C(this.Nm), n = r.eu().pr().Tt(r);
    n !== null && n.nt(t, false);
  }
  _w(t) {
    this.dw(t, wy, ks, this.ns().gd());
  }
  lw(t, r) {
    const n = C(this.Nm), i = n.Dt(), s = n.ru();
    for (const a of s) this.dw(t, r, Lc, a);
    for (const a of i) this.dw(t, r, Lc, a);
    for (const a of s) this.dw(t, r, ks, a);
    for (const a of i) this.dw(t, r, ks, a);
  }
  dw(t, r, n, i) {
    const s = C(this.Nm), a = s.Qt().pd(), o = a !== null && a.hu === i, l = a !== null && o && a.au !== void 0 ? a.au.ie : void 0;
    Rc(r, ((u) => n(u, t, o, l)), i, s);
  }
  jm() {
    if (this.Nm === null) return;
    const t = this.Lv, r = this.Nm.U_().N().visible, n = this.Nm.q_().N().visible;
    r || this.km === null || (this.Hm.removeChild(this.km.iv()), this.km.m(), this.km = null), n || this.Pm === null || (this.Um.removeChild(this.Pm.iv()), this.Pm.m(), this.Pm = null);
    const i = t.Qt().Nd();
    r && this.km === null && (this.km = new by(this, t.N(), i, "left"), this.Hm.appendChild(this.km.iv())), n && this.Pm === null && (this.Pm = new by(this, t.N(), i, "right"), this.Um.appendChild(this.Pm.iv()));
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
        this.Om = new LF(0.2 / u, 7 / u, 0.997, 15 / u), this.Om.Dv(n.Cc(), this.Rm.cf);
      } else this.Om = null;
      o.Gi() || r.Z_(this.Nm, o, t.localY), r.Dd(t.localX), this.Dm = true;
    }
    this.Dm && (o.Gi() || r.G_(this.Nm, o, t.localY), r.Id(t.localX), this.Om !== null && this.Om.Dv(n.Cc(), l));
  }
}
class Py {
  constructor(t, r, n, i, s) {
    this.xt = true, this.Uv = Z({ width: 0, height: 0 }), this.Zv = () => this.pm(3), this.Jv = t === "left", this.hd = n.Nd, this.Ps = r, this.ww = i, this.gw = s, this.Jp = document.createElement("div"), this.Jp.style.width = "25px", this.Jp.style.height = "100%", this.Jp.style.overflow = "hidden", this.sm = Vr(this.Jp, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
  }
  m() {
    this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Yr(this.sm.canvasElement), this.sm.dispose();
  }
  iv() {
    return this.Jp;
  }
  sv() {
    return this.Uv;
  }
  dm(t) {
    Dr(this.Uv, t) || (this.Uv = t, this.sm.resizeCanvasElement(t), this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`, this.xt = true);
  }
  pm(t) {
    if (t < 3 && !this.xt || this.Uv.width === 0 || this.Uv.height === 0) return;
    this.xt = false, this.sm.applySuggestedBitmapSize();
    const r = Kr(this.sm, { colorSpace: this.Ps.layout.colorSpace });
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
    Co(t, 0, 0, r.width, r.height, this.gw());
  }
}
function kf(e3) {
  return (t) => {
    var _a3;
    return ((_a3 = t.Ka) == null ? void 0 : _a3.call(t, e3)) ?? [];
  };
}
const BF = kf("normal"), FF = kf("top"), WF = kf("bottom");
class qF {
  constructor(t, r) {
    this.Mw = null, this.bw = null, this.M = null, this.Sw = false, this.Uv = Z({ width: 0, height: 0 }), this.xw = new ft(), this.qv = new Di(5), this.Kv = false, this.Zv = () => {
      this.Kv || this.Lv.Qt().dr();
    }, this.Xv = () => {
      this.Kv || this.Lv.Qt().dr();
    }, this.Lv = t, this.cu = r, this.Ps = t.N().layout, this.Vv = document.createElement("tr"), this.Cw = document.createElement("td"), this.Cw.style.padding = "0", this.yw = document.createElement("td"), this.yw.style.padding = "0", this.Jp = document.createElement("td"), this.Jp.style.height = "25px", this.Jp.style.padding = "0", this.kw = document.createElement("div"), this.kw.style.width = "100%", this.kw.style.height = "100%", this.kw.style.position = "relative", this.kw.style.overflow = "hidden", this.Jp.appendChild(this.kw), this.sm = Vr(this.kw, Z({ width: 16, height: 16 })), this.sm.subscribeSuggestedBitmapSizeChanged(this.Zv);
    const n = this.sm.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.nm = Vr(this.kw, Z({ width: 16, height: 16 })), this.nm.subscribeSuggestedBitmapSizeChanged(this.Xv);
    const i = this.nm.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "2", i.style.left = "0", i.style.top = "0", this.Vv.appendChild(this.Cw), this.Vv.appendChild(this.Jp), this.Vv.appendChild(this.yw), this.Pw(), this.Lv.Qt().B_().i(this.Pw.bind(this), this), this.$p = new No(this.nm.canvasElement, this, { dp: () => true, fp: () => !this.Lv.N().handleScroll.horzTouchDrag });
  }
  m() {
    this.$p.m(), this.Mw !== null && this.Mw.m(), this.bw !== null && this.bw.m(), this.nm.unsubscribeSuggestedBitmapSizeChanged(this.Xv), Yr(this.nm.canvasElement), this.nm.dispose(), this.sm.unsubscribeSuggestedBitmapSizeChanged(this.Zv), Yr(this.sm.canvasElement), this.sm.dispose();
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
    Dr(this.Uv, t) || (this.Uv = t, this.Kv = true, this.sm.resizeCanvasElement(t), this.nm.resizeCanvasElement(t), this.Kv = false, this.Jp.style.width = `${t.width}px`, this.Jp.style.height = `${t.height}px`, this.xw.p(t)), this.Mw !== null && this.Mw.dm(Z({ width: r, height: t.height })), this.bw !== null && this.bw.dm(Z({ width: n, height: t.height }));
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
      const i = Kr(this.sm, r);
      i !== null && (i.useBitmapCoordinateSpace(((s) => {
        this.wm(s), this.gm(s), this.Aw(i, WF);
      })), this.bm(i), this.Aw(i, BF)), this.Mw !== null && this.Mw.pm(t), this.bw !== null && this.bw.pm(t);
    }
    this.nm.applySuggestedBitmapSize();
    const n = Kr(this.nm, r);
    n !== null && (n.useBitmapCoordinateSpace((({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    })), this.Lw([...this.Lv.Qt().tn(), this.Lv.Qt().gd()], n), this.Aw(n, FF));
  }
  Aw(t, r) {
    const n = this.Lv.Qt().tn();
    for (const i of n) Rc(r, ((s) => Lc(s, t, false, void 0)), i, void 0);
    for (const i of n) Rc(r, ((s) => ks(s, t, false, void 0)), i, void 0);
  }
  wm({ context: t, bitmapSize: r }) {
    Co(t, 0, 0, r.width, r.height, this.Lv.Qt().Kd());
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
    return Ni(this.F(), this.Ps.fontFamily);
  }
  Nw() {
    return Ni(this.F(), this.Ps.fontFamily, "bold");
  }
  Bw() {
    this.M === null && (this.M = { S: 1, L: NaN, A: NaN, I: NaN, ts: NaN, C: 5, k: NaN, P: "", Qi: new Di(), Ew: 0 });
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
    r.leftPriceScale.visible && this.Mw === null && (this.Mw = new Py("left", r, n, i, s), this.Cw.appendChild(this.Mw.iv())), r.rightPriceScale.visible && this.bw === null && (this.bw = new Py("right", r, n, i, s), this.yw.appendChild(this.bw.iv()));
  }
}
const KF = !!Tn && !!navigator.userAgentData && navigator.userAgentData.brands.some(((e3) => e3.brand.includes("Chromium"))) && !!Tn && (((_a2 = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a2.platform) ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
class UF {
  constructor(t, r, n) {
    var i;
    this.Fw = [], this.Ww = [], this.Hw = 0, this.eo = 0, this.S_ = 0, this.Uw = 0, this.$w = 0, this.qw = null, this.jw = false, this.Im = new ft(), this.Vm = new ft(), this.nd = new ft(), this.Yw = null, this.Kw = null, this.Av = t, this.Ps = r, this.cu = n, this.Vv = document.createElement("div"), this.Vv.classList.add("tv-lightweight-charts"), this.Vv.style.overflow = "hidden", this.Vv.style.direction = "ltr", this.Vv.style.width = "100%", this.Vv.style.height = "100%", (i = this.Vv).style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.msUserSelect = "none", i.style.MozUserSelect = "none", i.style.webkitTapHighlightColor = "transparent", this.Zw = document.createElement("table"), this.Zw.setAttribute("cellspacing", "0"), this.Vv.appendChild(this.Zw), this.Gw = this.Xw.bind(this), Lu(this.Ps) && this.Jw(true), this.ns = new CF(this.rd.bind(this), this.Ps, n), this.Qt().Md().i(this.Qw.bind(this), this), this.tg = new qF(this, this.cu), this.Zw.appendChild(this.tg.iv());
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
    C(this.Vv).style.height = s, C(this.Vv).style.width = a, this.Zw.style.height = s, this.Zw.style.width = a, n ? this.lg(Et.yn(), performance.now()) : this.ns.Ca();
  }
  pm(t) {
    t === void 0 && (t = Et.yn());
    for (let r = 0; r < this.Fw.length; r++) this.Fw[r].pm(t.un(r).an);
    this.Ps.timeScale.visible && this.tg.pm(t._n());
  }
  cr(t) {
    var _a3;
    const r = Lu(this.Ps);
    this.ns.cr(t);
    const n = Lu(this.Ps);
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
    return Jt(this.Fw[t]).sv();
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
          const m = this.Ww[h], g = m.nv();
          t !== null && m.ev(t, u, c), c += g.height;
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
    for (const g of this.Fw) this.fg() && (r = Math.max(r, C(g.uw()).om(), this.Ps.leftPriceScale.minimumWidth)), this.pg() && (n = Math.max(n, C(g.cw()).om(), this.Ps.rightPriceScale.minimumWidth)), t += g.E_();
    r = Dc(r), n = Dc(n);
    const i = this.S_, s = this.eo, a = Math.max(i - r - n, 0), o = 1 * this.Ww.length, l = this.Ps.timeScale.visible;
    let u = l ? Math.max(this.tg.Vw(), this.Ps.timeScale.minimumHeight) : 0;
    var c;
    u = (c = u) + c % 2;
    const h = o + u, f = s < h ? 0 : s - h, d = f / t;
    let v = 0;
    const m = window.devicePixelRatio || 1;
    for (let g = 0; g < this.Fw.length; ++g) {
      const y = this.Fw[g];
      y.qm(this.ns.Xs()[g]);
      let b = 0, w = 0;
      w = g === this.Fw.length - 1 ? Math.ceil((f - v) * m) / m : Math.round(y.E_() * d * m) / m, b = Math.max(w, 2), v += b, y.dm(Z({ width: a, height: b })), this.fg() && y.hw(r, "left"), this.pg() && y.hw(n, "right"), y.cv() && this.ns.bd(y.cv(), b);
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
    return KF ? 1 / window.devicePixelRatio : 1;
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
      const s = Jt(this.Fw.pop());
      this.Zw.removeChild(s.iv()), s.nw().u(this), s.ew().u(this), s.m();
      const a = this.Ww.pop();
      a !== void 0 && this.hg(a);
    }
    for (let i = n; i < r; i++) {
      const s = new If(this, t[i]);
      if (s.nw().i(this.yg.bind(this, s), this), s.ew().i(this.kg.bind(this, s), this), this.Fw.push(s), i > 0) {
        const a = new DF(this, i - 1, i);
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
    const o = this.Qt().pd(), l = o !== null && o.hu instanceof To ? o.hu : void 0, u = o !== null && o.au !== void 0 ? o.au.te : void 0, c = this.Tg(i);
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
function Lu(e3) {
  return !!(e3.handleScroll.mouseWheel || e3.handleScale.mouseWheel);
}
function VF(e3) {
  return e3.open === void 0 && e3.value === void 0;
}
function YF(e3) {
  return (function(t) {
    return t.open !== void 0;
  })(e3) || (function(t) {
    return t.value !== void 0;
  })(e3);
}
function Sy(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.color !== void 0 && (s.R = r.color), s;
}
function HF(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.lineColor !== void 0 && (s.vt = r.lineColor), r.topColor !== void 0 && (s.eh = r.topColor), r.bottomColor !== void 0 && (s.rh = r.bottomColor), s;
}
function GF(e3, t, r, n) {
  const i = r.value, s = { js: t, wt: e3, Wt: [i, i, i, i], Gr: n };
  return r.topLineColor !== void 0 && (s.hh = r.topLineColor), r.bottomLineColor !== void 0 && (s.ah = r.bottomLineColor), r.topFillColor1 !== void 0 && (s.oh = r.topFillColor1), r.topFillColor2 !== void 0 && (s._h = r.topFillColor2), r.bottomFillColor1 !== void 0 && (s.uh = r.bottomFillColor1), r.bottomFillColor2 !== void 0 && (s.dh = r.bottomFillColor2), s;
}
function XF(e3, t, r, n) {
  const i = { js: t, wt: e3, Wt: [r.open, r.high, r.low, r.close], Gr: n };
  return r.color !== void 0 && (i.R = r.color), i;
}
function JF(e3, t, r, n) {
  const i = { js: t, wt: e3, Wt: [r.open, r.high, r.low, r.close], Gr: n };
  return r.color !== void 0 && (i.R = r.color), r.borderColor !== void 0 && (i.Ht = r.borderColor), r.wickColor !== void 0 && (i.nh = r.wickColor), i;
}
function ZF(e3, t, r, n, i) {
  const s = Jt(i)(r), a = Math.max(...s), o = Math.min(...s), l = s[s.length - 1], u = [l, a, o, l], { time: c, color: h, ...f } = r;
  return { js: t, wt: e3, Wt: u, Gr: n, le: f, R: h };
}
function on(e3) {
  return e3.Wt !== void 0;
}
function _y(e3, t) {
  return t.customValues !== void 0 && (e3.Ag = t.customValues), e3;
}
function Sr(e3) {
  return (t, r, n, i, s, a) => (function(o, l) {
    return l ? l(o) : VF(o);
  })(n, a) ? _y({ wt: t, js: r, Gr: i }, n) : _y(e3(t, r, n, i, s), n);
}
function Oy(e3) {
  return { Candlestick: Sr(JF), Bar: Sr(XF), Area: Sr(HF), Baseline: Sr(GF), Histogram: Sr(Sy), Line: Sr(Sy), Custom: Sr(ZF) }[e3];
}
function My(e3) {
  return { js: 0, Lg: /* @__PURE__ */ new Map(), Ea: e3 };
}
function Ey(e3, t) {
  if (e3 !== void 0 && e3.length !== 0) return { zg: t.key(e3[0].wt), Og: t.key(e3[e3.length - 1].wt) };
}
function Ay(e3) {
  let t;
  return e3.forEach(((r) => {
    t === void 0 && (t = r.Gr);
  })), Jt(t);
}
class QF {
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
      const l = r.map(((d) => d.time)), u = this.cu.createConverterToInternalObj(r), c = Oy(t.wh()), h = t.rl(), f = t.hl();
      a = r.map(((d, v) => {
        const m = u(d.time), g = this.cu.key(m);
        let y = this.Ng.get(g);
        y === void 0 && (y = My(m), this.Ng.set(g, y), i = true);
        const b = c(m, y.js, d, l[v], h, f);
        return y.Lg.set(t, b), b;
      }));
    }
    n && this.$g(), this.qg(t, a);
    let o = -1;
    if (i) {
      const l = [];
      this.Ng.forEach(((u) => {
        l.push({ timeWeight: 0, time: u.Ea, pointData: u, originalTime: Ay(u.Lg) });
      })), l.sort(((u, c) => this.cu.key(u.time) - this.cu.key(c.time))), o = this.jg(l);
    }
    return this.Yg(t, o, (function(l, u, c) {
      const h = Ey(l, c), f = Ey(u, c);
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
    o === void 0 && (o = My(s), this.Ng.set(this.cu.key(s), o));
    const u = Oy(t.wh()), c = t.rl(), h = t.hl(), f = u(s, o.js, r, i.Gr, c, h), d = !n && !l && a !== void 0 && this.cu.key(s) === this.cu.key(a);
    o.Lg.set(t, f), n ? this.Gg(t, f, o.js) : d && t.La() && on(f) ? (t.kr(f), this.Xg(t, f)) : this.Xg(t, f);
    const v = { Ta: on(f), Kg: n };
    if (!l) return this.Yg(t, -1, v);
    const m = { timeWeight: 0, time: o.Ea, pointData: o, originalTime: Ay(o.Lg) }, g = jn(this.Hg, this.cu.key(m.time), ((y, b) => this.cu.key(y.time) < b));
    this.Hg.splice(g, 0, m);
    for (let y = g; y < this.Hg.length; ++y) Ss(this.Hg[y].pointData, y);
    return this.cu.fillWeightsForPoints(this.Hg, g), this.Yg(t, g, v);
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
        for (let o = a.js; o < this.Hg.length; ++o) Ss(this.Hg[o].pointData, o);
      }
    }
    return [i, this.Yg(t, this.Hg.length - 1, { Kg: false, Ta: false })];
  }
  Xg(t, r) {
    let n = this.Fg.get(t);
    n === void 0 && (n = [], this.Fg.set(t, n));
    const i = n.length !== 0 ? n[n.length - 1] : null;
    i === null || this.cu.key(r.wt) > this.cu.key(i.wt) ? on(r) && n.push(r) : on(r) ? n[n.length - 1] = r : n.splice(-1, 1), this.Wg.set(t, r.wt);
  }
  Gg(t, r, n) {
    const i = this.Fg.get(t);
    if (i === void 0) return;
    const s = jn(i, n, ((a, o) => a.js < o));
    on(r) ? i[s] = r : i.splice(s, 1);
  }
  qg(t, r) {
    r.length !== 0 ? (this.Fg.set(t, r.filter(on)), this.Wg.set(t, r[r.length - 1].wt)) : (this.Fg.delete(t), this.Wg.delete(t));
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
      s.timeWeight = i.timeWeight, Ss(s.pointData, n);
    }
    if (r === -1 && this.Hg.length !== t.length && (r = Math.min(this.Hg.length, t.length)), r === -1) return -1;
    for (let n = r; n < t.length; ++n) Ss(t[n].pointData, n);
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
function Ss(e3, t) {
  e3.js = t, e3.Lg.forEach(((r) => {
    r.js = t;
  }));
}
function tW(e3, t) {
  return e3.wt < t;
}
function eW(e3, t) {
  return t < e3.wt;
}
function yP(e3, t, r) {
  const n = t.Aa(), i = t.bi(), s = jn(e3, n, tW), a = cP(e3, i, eW);
  if (!r) return { from: s, to: a };
  let o = s, l = a;
  return s > 0 && s < e3.length && e3[s].wt >= n && (o = s - 1), a > 0 && a < e3.length && e3[a - 1].wt <= i && (l = a + 1), { from: o, to: l };
}
class jf {
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
    i !== null && (this.lM = yP(this.aM, n, this._M), this.mM(t, r, i.Wt), this.wM());
  }
}
class rW {
  constructor(t, r) {
    this.gM = t, this.Ki = r;
  }
  nt(t, r, n) {
    this.gM.draw(t, this.Ki, r, n);
  }
}
class nW extends jf {
  constructor(t, r, n) {
    super(t, r, false), this.$h = n, this.cM = new rW(this.$h.renderer(), ((i) => {
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
    r.mc(this.aM, Ti(this.lM));
  }
  wM() {
    this.$h.update({ bars: this.aM.map(iW), barSpacing: this.re.Et().ul(), visibleRange: this.lM, conflationFactor: this.re.Et().Hc() }, this.ee.N());
  }
}
function iW(e3) {
  return { x: e3._t, time: e3.wt, originalData: e3.MM, barColor: e3.th };
}
const sW = { color: "#2196f3" }, aW = (e3, t, r) => {
  const n = hr(r);
  return new nW(e3, t, n);
};
function Tf(e3) {
  const t = { value: e3.Wt[3], time: e3.Gr };
  return e3.Ag !== void 0 && (t.customValues = e3.Ag), t;
}
function Cy(e3) {
  const t = Tf(e3);
  return e3.R !== void 0 && (t.color = e3.R), t;
}
function oW(e3) {
  const t = Tf(e3);
  return e3.vt !== void 0 && (t.lineColor = e3.vt), e3.eh !== void 0 && (t.topColor = e3.eh), e3.rh !== void 0 && (t.bottomColor = e3.rh), t;
}
function lW(e3) {
  const t = Tf(e3);
  return e3.hh !== void 0 && (t.topLineColor = e3.hh), e3.ah !== void 0 && (t.bottomLineColor = e3.ah), e3.oh !== void 0 && (t.topFillColor1 = e3.oh), e3._h !== void 0 && (t.topFillColor2 = e3._h), e3.uh !== void 0 && (t.bottomFillColor1 = e3.uh), e3.dh !== void 0 && (t.bottomFillColor2 = e3.dh), t;
}
function bP(e3) {
  const t = { open: e3.Wt[0], high: e3.Wt[1], low: e3.Wt[2], close: e3.Wt[3], time: e3.Gr };
  return e3.Ag !== void 0 && (t.customValues = e3.Ag), t;
}
function uW(e3) {
  const t = bP(e3);
  return e3.R !== void 0 && (t.color = e3.R), t;
}
function cW(e3) {
  const t = bP(e3), { R: r, Ht: n, nh: i } = e3;
  return r !== void 0 && (t.color = r), n !== void 0 && (t.borderColor = n), i !== void 0 && (t.wickColor = i), t;
}
function js(e3) {
  return { Area: oW, Line: Cy, Baseline: lW, Histogram: Cy, Bar: uW, Candlestick: cW, Custom: hW }[e3];
}
function hW(e3) {
  const t = e3.Gr;
  return { ...e3.le, time: t };
}
const fW = { vertLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, horzLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, mode: 1, doNotSnapToHiddenSeriesIndices: false }, dW = { vertLines: { color: "#D6DCDE", style: 0, visible: true }, horzLines: { color: "#D6DCDE", style: 0, visible: true } }, vW = { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 12, fontFamily: eP, panes: { enableResize: true, separatorColor: "#E0E3EB", separatorHoverColor: "rgba(178, 181, 189, 0.2)" }, attributionLogo: true, colorSpace: "srgb", colorParsers: [] }, Ru = { autoScale: true, mode: 0, invertScale: false, alignLabels: true, borderVisible: true, borderColor: "#2B2B43", entireTextOnly: false, visible: false, ticksVisible: false, scaleMargins: { bottom: 0.1, top: 0.2 }, minimumWidth: 0, ensureEdgeTickMarksVisible: false }, pW = { rightOffset: 0, barSpacing: 6, minBarSpacing: 0.5, maxBarSpacing: 0, fixLeftEdge: false, fixRightEdge: false, lockVisibleTimeRangeOnResize: false, rightBarStaysOnScroll: false, borderVisible: true, borderColor: "#2B2B43", visible: true, timeVisible: false, secondsVisible: true, shiftVisibleRangeOnNewBar: true, allowShiftVisibleRangeOnWhitespaceReplacement: false, ticksVisible: false, uniformDistribution: false, minimumHeight: 0, allowBoldLabels: true, ignoreWhitespaceIndices: false, enableConflation: false, conflationThresholdFactor: 1, precomputeConflationOnInit: false, precomputeConflationPriority: "background" };
function Iy() {
  return { addDefaultPane: true, width: 0, height: 0, autoSize: false, layout: vW, crosshair: fW, grid: dW, overlayPriceScales: { ...Ru }, leftPriceScale: { ...Ru, visible: false }, rightPriceScale: { ...Ru, visible: true }, timeScale: pW, localization: { locale: Tn ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: true }, handleScale: { axisPressedMouseMove: { time: true, price: true }, axisDoubleClickReset: { time: true, price: true }, mouseWheel: true, pinch: true }, kineticScroll: { mouse: false, touch: true }, trackingMode: { exitMode: 1 } };
}
class wP {
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
    return ko(this.bM) ? this.Yp.dg(this.bM) : 0;
  }
  setVisibleRange(t) {
    this.setAutoScale(false), this.Ki().$o(new Wt(t.from, t.to));
  }
  getVisibleRange() {
    let t, r, n = this.Ki().er();
    if (n === null) return null;
    if (this.Ki().io()) {
      const i = this.Ki().m_(), s = pP(i);
      n = vn(n, this.Ki().no()), t = Number((Math.round(n.Ze() / i) * i).toFixed(s)), r = Number((Math.round(n.Ge() / i) * i).toFixed(s));
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
class mW {
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
    r !== t && (Ct(t >= 0 && t < this.Yp.Zp().length, "Invalid pane index"), this.Yp.Qt().yd(r, t));
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
    return new wP(this.Yp, t, this.paneIndex());
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
const gW = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: true, axisLabelVisible: true, title: "", axisLabelColor: "", axisLabelTextColor: "" };
class ky {
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
class yW {
  constructor(t, r, n, i, s, a) {
    this.kM = new ft(), this.ee = t, this.PM = r, this.TM = n, this.cu = s, this.CM = i, this.RM = a;
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
    const r = new xn(new wn(t.from, t.to)).Ru(), n = this.ee.qs();
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
    const n = js(this.seriesType());
    return r.map(((i) => n(i)));
  }
  dataByIndex(t, r) {
    const n = this.ee.qs().$s(t, r);
    return n === null ? null : js(this.seriesType())(n);
  }
  data() {
    const t = js(this.seriesType());
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
    return We(this.ee.N());
  }
  priceScale() {
    return this.TM.priceScale(this.ee.Ft().ol(), this.getPane().paneIndex());
  }
  createPriceLine(t) {
    const r = ne(We(gW), t), n = this.ee.Da(r);
    return new ky(n);
  }
  removePriceLine(t) {
    this.ee.Ia(t.yM());
  }
  priceLines() {
    return this.ee.Va().map(((t) => new ky(t)));
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
class bW {
  constructor(t, r, n) {
    this.EM = new ft(), this.Nu = new ft(), this.xw = new ft(), this.ns = t, this.Jh = t.Et(), this.tg = r, this.Jh.Lc().i(this.AM.bind(this)), this.Jh.zc().i(this.LM.bind(this)), this.tg.Dw().i(this.zM.bind(this)), this.cu = n;
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
    Ct(t.from <= t.to, "The from index cannot be after the to index."), this.ns.$d(t);
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
    return { ...We(this.Jh.N()), barSpacing: this.Jh.ul() };
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
function jy(e3) {
  return (function(t) {
    if (ms(t.handleScale)) {
      const n = t.handleScale;
      t.handleScale = { axisDoubleClickReset: { time: n, price: n }, axisPressedMouseMove: { time: n, price: n }, mouseWheel: n, pinch: n };
    } else if (t.handleScale !== void 0) {
      const { axisPressedMouseMove: n, axisDoubleClickReset: i } = t.handleScale;
      ms(n) && (t.handleScale.axisPressedMouseMove = { time: n, price: n }), ms(i) && (t.handleScale.axisDoubleClickReset = { time: i, price: i });
    }
    const r = t.handleScroll;
    ms(r) && (t.handleScroll = { horzTouchDrag: r, vertTouchDrag: r, mouseWheel: r, pressedMouseMove: r });
  })(e3), e3;
}
class wW {
  constructor(t, r, n) {
    this.OM = /* @__PURE__ */ new Map(), this.NM = /* @__PURE__ */ new Map(), this.FM = new ft(), this.WM = new ft(), this.HM = new ft(), this.Xc = /* @__PURE__ */ new WeakMap(), this.UM = new QF(r);
    const i = n === void 0 ? We(Iy()) : ne(We(Iy()), jy(n));
    this.$M = r, this.Yp = new UF(t, i, r), this.Yp.nw().i(((a) => {
      this.FM.v() && this.FM.p(this.qM(a()));
    }), this), this.Yp.ew().i(((a) => {
      this.WM.v() && this.WM.p(this.qM(a()));
    }), this), this.Yp.Md().i(((a) => {
      this.HM.v() && this.HM.p(this.qM(a()));
    }), this);
    const s = this.Yp.Qt();
    this.jM = new bW(s, this.Yp.rg(), this.$M);
  }
  remove() {
    this.Yp.nw().u(this), this.Yp.ew().u(this), this.Yp.Md().u(this), this.jM.m(), this.Yp.m(), this.OM.clear(), this.NM.clear(), this.FM.m(), this.WM.m(), this.HM.m(), this.UM.m();
  }
  resize(t, r, n) {
    this.autoSizeActive() || this.Yp.sg(t, r, n);
  }
  addCustomSeries(t, r = {}, n = 0) {
    const i = ((s) => ({ type: "Custom", isBuiltIn: false, defaultOptions: { ...sW, ...s.defaultOptions() }, YM: aW, KM: s }))(hr(t));
    return this.ZM(i, r, n);
  }
  addSeries(t, r = {}, n = 0) {
    return this.ZM(t, r, n);
  }
  removeSeries(t) {
    const r = Jt(this.OM.get(t)), n = this.UM.Hd(r);
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
    return new wP(this.Yp, t, r);
  }
  timeScale() {
    return this.jM;
  }
  applyOptions(t) {
    this.Yp.cr(jy(t));
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
    Ct(t.YM !== void 0), (function(l) {
      if (l === void 0 || l.type === "custom") return;
      const u = l;
      u.minMove !== void 0 && u.precision === void 0 && (u.precision = pP(u.minMove));
    })(r.priceFormat), t.type === "Candlestick" && (function(l) {
      l.borderColor !== void 0 && (l.borderUpColor = l.borderColor, l.borderDownColor = l.borderColor), l.wickColor !== void 0 && (l.wickUpColor = l.wickColor, l.wickDownColor = l.wickColor);
    })(r);
    const i = ne(We(Q1), We(t.defaultOptions), r), s = t.YM, a = new To(this.Yp.Qt(), t.type, i, s, t.KM);
    this.Yp.Qt().Fd(a, n);
    const o = new yW(a, this, this, this, this.$M, ((l) => this.XM(l)));
    return this.OM.set(o, a), this.NM.set(a, o), o;
  }
  GM(t) {
    const r = this.Yp.Qt();
    r.Od(t.Et.vc, t.Et.sM, t.Et.nM), t.F_.forEach(((n, i) => i.ht(n.le, n.iM))), r.Et().Ju(), r.Sc();
  }
  JM(t) {
    return Jt(this.NM.get(t));
  }
  qM(t) {
    const r = /* @__PURE__ */ new Map();
    t.Vg.forEach(((i, s) => {
      const a = s.wh(), o = js(a)(i);
      if (a !== "Custom") Ct(YF(o));
      else {
        const l = s.hl();
        Ct(!l || l(o) === false);
      }
      r.set(this.JM(s), o);
    }));
    const n = t.Ig !== void 0 && this.NM.has(t.Ig) ? this.JM(t.Ig) : void 0;
    return { time: t.Gr, logical: t.js, point: t.Rg, paneIndex: t.Dg, hoveredSeries: n, hoveredObjectId: t.Bg, seriesData: r, sourceEvent: t.Eg };
  }
  XM(t) {
    let r = this.Xc.get(t);
    return r || (r = new mW(this.Yp, ((n) => this.JM(n)), t, this), this.Xc.set(t, r)), r;
  }
}
function xW(e3) {
  if (Qi(e3)) {
    const t = document.getElementById(e3);
    return Ct(t !== null, `Cannot find element in DOM with id=${e3}`), t;
  }
  return e3;
}
function PW(e3, t, r) {
  const n = xW(e3), i = new wW(n, t, r);
  return t.setOptions(i.options()), i;
}
function _q(e3, t) {
  return PW(e3, new py(), py.pf(t));
}
class Nf extends jf {
  constructor(t, r) {
    super(t, r, true);
  }
  mM(t, r, n) {
    r.mc(this.aM, Ti(this.lM)), t.Yo(this.aM, n, Ti(this.lM));
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
function xP(e3, t, r, n, i, s, a) {
  if (t.length === 0 || n.from >= t.length || n.to <= 0) return;
  const { context: o, horizontalPixelRatio: l, verticalPixelRatio: u } = e3, c = t[n.from];
  let h = s(e3, c), f = c;
  if (n.to - n.from < 2) {
    const d = i / 2;
    o.beginPath();
    const v = { _t: c._t - d, ut: c.ut }, m = { _t: c._t + d, ut: c.ut };
    o.moveTo(v._t * l, v.ut * u), o.lineTo(m._t * l, m.ut * u), a(e3, h, v, m);
  } else {
    const d = (m, g) => {
      a(e3, h, f, g), o.beginPath(), h = m, f = g;
    };
    let v = f;
    o.beginPath(), o.moveTo(c._t * l, c.ut * u);
    for (let m = n.from + 1; m < n.to; ++m) {
      v = t[m];
      const g = s(e3, v);
      switch (r) {
        case 0:
          o.lineTo(v._t * l, v.ut * u);
          break;
        case 1:
          o.lineTo(v._t * l, t[m - 1].ut * u), g !== h && (d(g, v), o.lineTo(v._t * l, t[m - 1].ut * u)), o.lineTo(v._t * l, v.ut * u);
          break;
        case 2: {
          const [y, b] = SW(t, m - 1, m);
          o.bezierCurveTo(y._t * l, y.ut * u, b._t * l, b.ut * u, v._t * l, v.ut * u);
          break;
        }
      }
      r !== 1 && g !== h && (d(g, v), o.moveTo(v._t * l, v.ut * u));
    }
    (f !== v || f === v && r === 1) && a(e3, h, f, v);
  }
}
const Ty = 6;
function $u(e3, t) {
  return { _t: e3._t - t._t, ut: e3.ut - t.ut };
}
function Ny(e3, t) {
  return { _t: e3._t / t, ut: e3.ut / t };
}
function SW(e3, t, r) {
  const n = Math.max(0, t - 1), i = Math.min(e3.length - 1, r + 1);
  var s, a;
  return [(s = e3[t], a = Ny($u(e3[r], e3[n]), Ty), { _t: s._t + a._t, ut: s.ut + a.ut }), $u(e3[r], Ny($u(e3[i], e3[t]), Ty))];
}
function _W(e3, t) {
  const r = e3.context;
  r.strokeStyle = t, r.stroke();
}
class OW extends ir {
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
    u.lineCap = "butt", u.lineWidth = a * t.verticalPixelRatio, pr(u, o), u.lineJoin = "round";
    const c = this.eb.bind(this);
    s !== void 0 && xP(t, r, s, n, i, c, _W), l && (function(h, f, d, v, m) {
      if (v.to - v.from <= 0) return;
      const { horizontalPixelRatio: g, verticalPixelRatio: y, context: b } = h;
      let w = null;
      const x = Math.max(1, Math.floor(g)) % 2 / 2, P = d * y + x;
      for (let S = v.to - 1; S >= v.from; --S) {
        const _ = f[S];
        if (_) {
          const M = m(h, _);
          M !== w && (b.beginPath(), w !== null && b.fill(), b.fillStyle = M, w = M);
          const A = Math.round(_._t * g) + x, k = _.ut * y;
          b.moveTo(A, k), b.arc(A, k, P, 0, 2 * Math.PI);
        }
      }
      b.fill();
    })(t, r, l, n, c);
  }
}
class PP extends OW {
  eb(t, r) {
    return r.vt;
  }
}
class MW extends Nf {
  constructor() {
    super(...arguments), this.cM = new PP();
  }
  tb(t, r, n) {
    return { ...this.QM(t, r), ...n.gh(t) };
  }
  wM() {
    const t = this.ee.N(), r = { ot: this.aM, Zt: t.lineStyle, sb: t.lineVisible ? t.lineType : void 0, ct: t.lineWidth, nb: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0, lt: this.lM, ib: this.re.Et().ul() };
    this.cM.ht(r);
  }
}
const Oq = { type: "Line", isBuiltIn: true, defaultOptions: { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: true, crosshairMarkerVisible: true, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: false }, YM: (e3, t) => new MW(e3, t) };
function EW(e3, t, r, n, i) {
  const { context: s, horizontalPixelRatio: a, verticalPixelRatio: o } = t;
  s.lineTo(i._t * a, e3 * o), s.lineTo(n._t * a, e3 * o), s.closePath(), s.fillStyle = r, s.fill();
}
class AW extends ir {
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
    u.lineCap = "butt", u.lineJoin = "round", u.lineWidth = s, pr(u, a), u.lineWidth = 1, xP(t, r, o, n, i, this.fb.bind(this), EW.bind(null, l));
  }
}
class CW {
  pb(t, r) {
    const n = this.mb, { wb: i, gb: s, Mb: a, bb: o, ub: l, Sb: u, xb: c } = r;
    if (this.Cb === void 0 || n === void 0 || n.wb !== i || n.gb !== s || n.Mb !== a || n.bb !== o || n.ub !== l || n.Sb !== u || n.xb !== c) {
      const { verticalPixelRatio: h } = t, f = l || u > 0 ? h : 1, d = u * f, v = c === t.bitmapSize.height ? c : c * f, m = (l ?? 0) * f, g = t.context.createLinearGradient(0, d, 0, v);
      if (g.addColorStop(0, i), l != null) {
        const y = bn((m - d) / (v - d), 0, 1);
        g.addColorStop(y, s), g.addColorStop(y, a);
      }
      g.addColorStop(1, o), this.Cb = g, this.mb = r;
    }
    return this.Cb;
  }
}
class IW extends AW {
  constructor() {
    super(...arguments), this.yb = new CW();
  }
  fb(t, r) {
    var _a3;
    return this.yb.pb(t, { wb: r.eh, gb: "", Mb: "", bb: r.rh, Sb: ((_a3 = this.rt) == null ? void 0 : _a3.Sb) ?? 0, xb: t.bitmapSize.height });
  }
}
class kW extends Nf {
  constructor(t, r) {
    super(t, r), this.cM = new rP(), this.Rb = new IW(), this.Db = new PP(), this.cM.st([this.Rb, this.Db]);
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
const Mq = { type: "Area", isBuiltIn: true, defaultOptions: { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", invertFilledArea: false, relativeGradient: false, lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: true, crosshairMarkerVisible: true, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: false }, YM: (e3, t) => new kW(e3, t) };
class jW extends jf {
  constructor(t, r) {
    super(t, r, false);
  }
  mM(t, r, n) {
    r.mc(this.aM, Ti(this.lM)), t.Zo(this.aM, n, Ti(this.lM));
  }
  Lb(t, r, n) {
    return { wt: t, Hr: r.Wt[0], Ur: r.Wt[1], $r: r.Wt[2], qr: r.Wt[3], _t: NaN, Go: NaN, Xo: NaN, Jo: NaN, Qo: NaN };
  }
  pM() {
    const t = this.ee.ga();
    this.aM = this.ee.Na().Dh().map(((r) => this.tb(r.js, r, t)));
  }
}
class TW extends ir {
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
      const d = Math.round(Math.min(f.Go, f.Qo) * a), v = Math.round(Math.max(f.Go, f.Qo) * a), m = Math.round(f.Xo * a), g = Math.round(f.Jo * a);
      let y = Math.round(s * f._t) - u;
      const b = y + l - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, b));
      const w = b - y + 1;
      i.fillRect(y, m, w, d - m), i.fillRect(y, v + 1, w, g - v), c = b;
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
      if (u !== null && (f = Math.max(u + 1, f), f = Math.min(f, d)), this.jt.ul * s > 2 * l) TB(i, f, v, d - f + 1, m - v + 1, l);
      else {
        const g = d - f + 1;
        i.fillRect(f, v, g, m - v + 1);
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
class NW extends jW {
  constructor() {
    super(...arguments), this.cM = new TW();
  }
  tb(t, r, n) {
    return { ...this.Lb(t, r, n), ...n.gh(t) };
  }
  wM() {
    const t = this.ee.N();
    this.cM.ht({ qs: this.aM, ul: this.re.Et().ul(), zb: t.wickVisible, Mi: t.borderVisible, lt: this.lM });
  }
}
const Eq = { type: "Candlestick", isBuiltIn: true, defaultOptions: { upColor: "#26a69a", downColor: "#ef5350", wickVisible: true, borderVisible: true, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" }, YM: (e3, t) => new NW(e3, t) };
class DW extends ir {
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
class LW extends Nf {
  constructor() {
    super(...arguments), this.cM = new DW();
  }
  tb(t, r, n) {
    return { ...this.QM(t, r), ...n.gh(t) };
  }
  wM() {
    const t = { ot: this.aM, ul: this.re.Et().ul(), lt: this.lM, Ub: this.ee.Ft().Nt(this.ee.N().base, C(this.ee.Lt()).Wt) };
    this.cM.ht(t);
  }
}
const Aq = { type: "Histogram", isBuiltIn: true, defaultOptions: { color: "#26a69a", base: 0 }, YM: (e3, t) => new LW(e3, t) };
class RW {
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
const $W = { autoScale: true, zOrder: "normal" };
function pi(e3, t) {
  return Af(Math.min(Math.max(e3, 12), 30) * t);
}
function Nn(e3, t) {
  switch (e3) {
    case "arrowDown":
    case "arrowUp":
      return pi(t, 1);
    case "circle":
      return pi(t, 0.8);
    case "square":
      return pi(t, 0.7);
  }
}
function SP(e3) {
  return (function(t) {
    const r = Math.ceil(t);
    return r % 2 != 0 ? r - 1 : r;
  })(pi(e3, 1));
}
function _P(e3) {
  return Math.max(pi(e3, 0.1), 3);
}
function Dy(e3, t, r) {
  return t ? e3 : r ? Math.ceil(e3 / 2) : 0;
}
function Ly(e3, t, r, n) {
  const i = (Nn("arrowUp", n) - 1) / 2 * r.pS, s = (Af(n / 2) - 1) / 2 * r.pS;
  t.beginPath(), e3 ? (t.moveTo(r._t - i, r.ut), t.lineTo(r._t, r.ut - i), t.lineTo(r._t + i, r.ut), t.lineTo(r._t + s, r.ut), t.lineTo(r._t + s, r.ut + i), t.lineTo(r._t - s, r.ut + i), t.lineTo(r._t - s, r.ut)) : (t.moveTo(r._t - i, r.ut), t.lineTo(r._t, r.ut + i), t.lineTo(r._t + i, r.ut), t.lineTo(r._t + s, r.ut), t.lineTo(r._t + s, r.ut - i), t.lineTo(r._t - s, r.ut - i), t.lineTo(r._t - s, r.ut)), t.fill();
}
function Ry(e3, t, r, n, i, s) {
  const a = (Nn("arrowUp", n) - 1) / 2, o = (Af(n / 2) - 1) / 2;
  return i >= t - o - 2 && i <= t + o + 2 && s >= (e3 ? r : r - a) - 2 && s <= (e3 ? r + a : r) + 2 ? true : (() => {
    if (i < t - a - 3 || i > t + a + 3 || s < (e3 ? r - a - 3 : r) || s > (e3 ? r : r + a + 3)) return false;
    const l = Math.abs(i - t);
    return Math.abs(s - r) + 3 >= l / 2;
  })();
}
class zW {
  constructor() {
    this.jt = null, this.$n = new Di(), this.F = -1, this.W = "", this.jv = "", this.vS = "normal";
  }
  ht(t) {
    this.jt = t;
  }
  qn(t, r, n) {
    this.F === t && this.W === r || (this.F = t, this.W = r, this.jv = Ni(t, r), this.$n.On()), this.vS = n;
  }
  Qn(t, r) {
    if (this.jt === null || this.jt.lt === null) return null;
    for (let n = this.jt.lt.from; n < this.jt.lt.to; n++) {
      const i = this.jt.ot[n];
      if (i && FW(i, t, r)) return { zOrder: "normal", externalId: i.te ?? "" };
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
        s.ri !== void 0 && (s.ri.ss = this.$n.Ii(t, s.ri.mS), s.ri.$t = this.F, s.ri._t = s._t - s.ri.ss / 2), BW(s, t, r, n);
      }
    }
  }
}
function BW(e3, t, r, n) {
  t.fillStyle = e3.R, e3.ri !== void 0 && (function(i, s, a, o, l, u) {
    i.save(), i.scale(l, u), i.fillText(s, a, o), i.restore();
  })(t, e3.ri.mS, e3.ri._t, e3.ri.ut, r, n), (function(i, s, a) {
    if (i.yh !== 0) {
      switch (i.wS) {
        case "arrowDown":
          return void Ly(false, s, a, i.yh);
        case "arrowUp":
          return void Ly(true, s, a, i.yh);
        case "circle":
          return void (function(o, l, u) {
            const c = (Nn("circle", u) - 1) / 2;
            o.beginPath(), o.arc(l._t, l.ut, c * l.pS, 0, 2 * Math.PI, false), o.fill();
          })(s, a, i.yh);
        case "square":
          return void (function(o, l, u) {
            const c = Nn("square", u), h = (c - 1) * l.pS / 2, f = l._t - h, d = l.ut - h;
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
function FW(e3, t, r) {
  return !(e3.ri === void 0 || !(function(n, i, s, a, o, l) {
    const u = a / 2;
    return o >= n && o <= n + s && l >= i - u && l <= i + u;
  })(e3.ri._t, e3.ri.ut, e3.ri.ss, e3.ri.$t, t, r)) || (function(n, i, s) {
    if (n.yh === 0) return false;
    switch (n.wS) {
      case "arrowDown":
        return Ry(true, n._t, n.ut, n.yh, i, s);
      case "arrowUp":
        return Ry(false, n._t, n.ut, n.yh, i, s);
      case "circle":
        return (function(a, o, l, u, c) {
          const h = 2 + Nn("circle", l) / 2, f = a - u, d = o - c;
          return Math.sqrt(f * f + d * d) <= h;
        })(n._t, n.ut, n.yh, i, s);
      case "square":
        return (function(a, o, l, u, c) {
          const h = Nn("square", l), f = (h - 1) / 2, d = a - f, v = o - f;
          return u >= d && u <= d + h && c >= v && c <= v + h;
        })(n._t, n.ut, n.yh, i, s);
    }
  })(e3, t, r);
}
function $y(e3) {
  return e3 === "atPriceTop" || e3 === "atPriceBottom" || e3 === "atPriceMiddle";
}
function WW(e3, t, r, n, i, s, a, o) {
  const l = (function(v, m, g) {
    if ($y(m.position) && m.price !== void 0) return m.price;
    if ("value" in (y = v) && typeof y.value == "number") return v.value;
    var y;
    if ((function(b) {
      return "open" in b && "high" in b && "low" in b && "close" in b;
    })(v)) {
      if (m.position === "inBar") return v.close;
      if (m.position === "aboveBar") return g ? v.low : v.high;
      if (m.position === "belowBar") return g ? v.high : v.low;
    }
  })(r, t, a.priceScale().options().invertScale);
  if (l === void 0) return;
  const u = $y(t.position), c = o.timeScale(), h = Ur(t.size) ? Math.max(t.size, 0) : 1, f = SP(c.options().barSpacing) * h, d = f / 2;
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
class qW {
  constructor(t, r, n) {
    this.bS = [], this.xt = true, this.SS = true, this.Xt = new zW(), this.ye = t, this.Lv = r, this.jt = { ot: [], lt: null }, this.Ps = n;
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
    const s = new wn(Math.floor(i.from), Math.ceil(i.to));
    if (this.ye.data()[0] === null || this.jt.ot.length === 0) return;
    let a = NaN;
    const o = _P(t.options().barSpacing), l = { gS: o, MS: o };
    this.jt.lt = yP(this.jt.ot, s, true);
    for (let u = this.jt.lt.from; u < this.jt.lt.to; u++) {
      const c = r[u];
      c.time !== a && (l.gS = o, l.MS = o, a = c.time);
      const h = this.jt.ot[u];
      h._t = C(t.logicalToCoordinate(c.time)), c.text !== void 0 && c.text.length > 0 && (h.ri = { mS: c.text, _t: 0, ut: 0, ss: 0, $t: 0 });
      const f = this.ye.dataByIndex(c.time, 0);
      f !== null && WW(h, c, f, l, n.fontSize, o, this.ye, this.Lv);
    }
    this.xt = false;
  }
}
function zy(e3) {
  return { ...$W, ...e3 };
}
class KW {
  constructor(t) {
    this.$h = null, this.bS = [], this.PS = [], this.TS = null, this.ye = null, this.Lv = null, this.RS = true, this.DS = null, this.IS = null, this.VS = null, this.BS = true, this.Ps = zy(t);
  }
  attached(t) {
    this.ES(), this.Lv = t.chart, this.ye = t.series, this.$h = new qW(this.ye, C(this.Lv), this.Ps), this.dS = t.requestUpdate, this.ye.subscribeDataChanged(((r) => this.IM(r))), this.BS = true, this.Jb();
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
    this.Ps = zy({ ...this.Ps, ...t }), this.Jb && this.Jb();
  }
  zS() {
    const t = C(this.Lv).timeScale().options().barSpacing;
    if (this.RS || t !== this.VS) {
      if (this.VS = t, this.bS.length > 0) {
        const r = _P(t), n = 1.5 * SP(t) + 2 * r, i = this.OS();
        this.DS = { above: Dy(n, i.aboveBar, i.inBar), below: Dy(n, i.belowBar, i.inBar) };
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
class UW extends RW {
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
function Cq(e3, t, r) {
  const n = new UW(e3, new KW({}));
  return t && n.setMarkers(t), n;
}
({ ...Q1 });
export {
  Sq as A,
  lR as C,
  qR as L,
  GW as R,
  Mq as S,
  tq as T,
  Aq as V,
  ly as W,
  j$ as X,
  K$ as Y,
  By as a,
  g$ as b,
  X as c,
  Eq as d,
  Pq as e,
  Fg as h,
  Oq as n,
  Cq as p,
  _q as q,
  EP as r,
  YW as u
};
