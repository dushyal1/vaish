var yh = (e) => {
  throw TypeError(e);
};
var Wl = (e, t, n) => t.has(e) || yh("Cannot " + n);
var R = (e, t, n) => (
    Wl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? yh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  Y = (e, t, n, r) => (
    Wl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Oe = (e, t, n) => (Wl(e, t, "access private method"), n);
var bo = (e, t, n, r) => ({
  set _(s) {
    Y(e, t, s, n);
  },
  get _() {
    return R(e, t, r);
  },
});
function P1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function z0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var B0 = { exports: {} },
  ol = {},
  $0 = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oo = Symbol.for("react.element"),
  R1 = Symbol.for("react.portal"),
  A1 = Symbol.for("react.fragment"),
  N1 = Symbol.for("react.strict_mode"),
  j1 = Symbol.for("react.profiler"),
  M1 = Symbol.for("react.provider"),
  D1 = Symbol.for("react.context"),
  L1 = Symbol.for("react.forward_ref"),
  O1 = Symbol.for("react.suspense"),
  I1 = Symbol.for("react.memo"),
  F1 = Symbol.for("react.lazy"),
  gh = Symbol.iterator;
function V1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gh && e[gh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var U0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  W0 = Object.assign,
  H0 = {};
function Hs(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = H0),
    (this.updater = n || U0));
}
Hs.prototype.isReactComponent = {};
Hs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function K0() {}
K0.prototype = Hs.prototype;
function xd(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = H0),
    (this.updater = n || U0));
}
var wd = (xd.prototype = new K0());
wd.constructor = xd;
W0(wd, Hs.prototype);
wd.isPureReactComponent = !0;
var vh = Array.isArray,
  Y0 = Object.prototype.hasOwnProperty,
  Sd = { current: null },
  G0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Q0(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Y0.call(t, r) && !G0.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: oo,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Sd.current,
  };
}
function _1(e, t) {
  return {
    $$typeof: oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oo;
}
function z1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xh = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? z1("" + e.key)
    : t.toString(36);
}
function ea(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oo:
          case R1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + Hl(o, 0) : r),
      vh(s)
        ? ((n = ""),
          e != null && (n = e.replace(xh, "$&/") + "/"),
          ea(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (bd(s) &&
            (s = _1(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(xh, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), vh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Hl(i, a);
      o += ea(i, t, n, l, s);
    }
  else if (((l = V1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + Hl(i, a++)), (o += ea(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Co(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    ea(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function B1(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  ta = { transition: null },
  $1 = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: ta,
    ReactCurrentOwner: Sd,
  };
function X0() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Co,
  forEach: function (e, t, n) {
    Co(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = Hs;
J.Fragment = A1;
J.Profiler = j1;
J.PureComponent = xd;
J.StrictMode = N1;
J.Suspense = O1;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
J.act = X0;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = W0({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Sd.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Y0.call(t, l) &&
        !G0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: oo, type: e.type, key: s, ref: i, props: r, _owner: o };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: D1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M1, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Q0;
J.createFactory = function (e) {
  var t = Q0.bind(null, e);
  return ((t.type = e), t);
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: L1, render: e };
};
J.isValidElement = bd;
J.lazy = function (e) {
  return { $$typeof: F1, _payload: { _status: -1, _result: e }, _init: B1 };
};
J.memo = function (e, t) {
  return { $$typeof: I1, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = ta.transition;
  ta.transition = {};
  try {
    e();
  } finally {
    ta.transition = t;
  }
};
J.unstable_act = X0;
J.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ge.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
J.useId = function () {
  return Ge.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ge.current.useRef(e);
};
J.useState = function (e) {
  return Ge.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ge.current.useTransition();
};
J.version = "18.3.1";
$0.exports = J;
var w = $0.exports;
const L = z0(w),
  q0 = P1({ __proto__: null, default: L }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U1 = w,
  W1 = Symbol.for("react.element"),
  H1 = Symbol.for("react.fragment"),
  K1 = Object.prototype.hasOwnProperty,
  Y1 = U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Z0(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) K1.call(t, r) && !G1.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: W1,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Y1.current,
  };
}
ol.Fragment = H1;
ol.jsx = Z0;
ol.jsxs = Z0;
B0.exports = ol;
var p = B0.exports,
  J0 = { exports: {} },
  dt = {},
  ey = { exports: {} },
  ty = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, A) {
    var I = P.length;
    P.push(A);
    e: for (; 0 < I; ) {
      var H = (I - 1) >>> 1,
        U = P[H];
      if (0 < s(U, A)) ((P[H] = A), (P[I] = U), (I = H));
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var A = P[0],
      I = P.pop();
    if (I !== A) {
      P[0] = I;
      e: for (var H = 0, U = P.length, Z = U >>> 1; H < Z; ) {
        var ee = 2 * (H + 1) - 1,
          Se = P[ee],
          Le = ee + 1,
          re = P[Le];
        if (0 > s(Se, I))
          Le < U && 0 > s(re, Se)
            ? ((P[H] = re), (P[Le] = I), (H = Le))
            : ((P[H] = Se), (P[ee] = I), (H = ee));
        else if (Le < U && 0 > s(re, I)) ((P[H] = re), (P[Le] = I), (H = Le));
        else break e;
      }
    }
    return A;
  }
  function s(P, A) {
    var I = P.sortIndex - A.sortIndex;
    return I !== 0 ? I : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= P)
        (r(u), (A.sortIndex = A.expirationTime), t(l, A));
      else break;
      A = n(u);
    }
  }
  function b(P) {
    if (((g = !1), x(P), !v))
      if (n(l) !== null) ((v = !0), W(C));
      else {
        var A = n(u);
        A !== null && z(b, A.startTime - P);
      }
  }
  function C(P, A) {
    ((v = !1), g && ((g = !1), m(k), (k = -1)), (h = !0));
    var I = f;
    try {
      for (
        x(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (P && !B()));
      ) {
        var H = d.callback;
        if (typeof H == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var U = H(d.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(l) && r(l),
            x(A));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Z = !0;
      else {
        var ee = n(u);
        (ee !== null && z(b, ee.startTime - A), (Z = !1));
      }
      return Z;
    } finally {
      ((d = null), (f = I), (h = !1));
    }
  }
  var T = !1,
    E = null,
    k = -1,
    N = 5,
    j = -1;
  function B() {
    return !(e.unstable_now() - j < N);
  }
  function F() {
    if (E !== null) {
      var P = e.unstable_now();
      j = P;
      var A = !0;
      try {
        A = E(!0, P);
      } finally {
        A ? Q() : ((T = !1), (E = null));
      }
    } else T = !1;
  }
  var Q;
  if (typeof y == "function")
    Q = function () {
      y(F);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      q = O.port2;
    ((O.port1.onmessage = F),
      (Q = function () {
        q.postMessage(null);
      }));
  } else
    Q = function () {
      S(F, 0);
    };
  function W(P) {
    ((E = P), T || ((T = !0), Q()));
  }
  function z(P, A) {
    k = S(function () {
      P(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), W(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (N = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var I = f;
      f = A;
      try {
        return P();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var I = f;
      f = P;
      try {
        return A();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (P, A, I) {
      var H = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? H + I : H))
          : (I = H),
        P)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = I + U),
        (P = {
          id: c++,
          callback: A,
          priorityLevel: P,
          startTime: I,
          expirationTime: U,
          sortIndex: -1,
        }),
        I > H
          ? ((P.sortIndex = I),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (g ? (m(k), (k = -1)) : (g = !0), z(b, I - H)))
          : ((P.sortIndex = U), t(l, P), v || h || ((v = !0), W(C))),
        P
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (P) {
      var A = f;
      return function () {
        var I = f;
        f = A;
        try {
          return P.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    }));
})(ty);
ey.exports = ty;
var Q1 = ey.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X1 = w,
  ct = Q1;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ny = new Set(),
  Mi = {};
function $r(e, t) {
  (Ls(e, t), Ls(e + "Capture", t));
}
function Ls(e, t) {
  for (Mi[e] = t, e = 0; e < t.length; e++) ny.add(t[e]);
}
var pn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bu = Object.prototype.hasOwnProperty,
  q1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wh = {},
  Sh = {};
function Z1(e) {
  return Bu.call(Sh, e)
    ? !0
    : Bu.call(wh, e)
      ? !1
      : q1.test(e)
        ? (Sh[e] = !0)
        : ((wh[e] = !0), !1);
}
function J1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function eS(e, t, n, r) {
  if (t === null || typeof t > "u" || J1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qe(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cd = /[\-:]([a-z])/g;
function Td(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cd, Td);
    De[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cd, Td);
    De[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cd, Td);
  De[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new Qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var s = De.hasOwnProperty(t) ? De[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (eS(t, n, s, r) && (n = null),
    r || s === null
      ? Z1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  To = Symbol.for("react.element"),
  Jr = Symbol.for("react.portal"),
  es = Symbol.for("react.fragment"),
  kd = Symbol.for("react.strict_mode"),
  $u = Symbol.for("react.profiler"),
  ry = Symbol.for("react.provider"),
  sy = Symbol.for("react.context"),
  Pd = Symbol.for("react.forward_ref"),
  Uu = Symbol.for("react.suspense"),
  Wu = Symbol.for("react.suspense_list"),
  Rd = Symbol.for("react.memo"),
  Ln = Symbol.for("react.lazy"),
  iy = Symbol.for("react.offscreen"),
  bh = Symbol.iterator;
function ni(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bh && e[bh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Kl;
function hi(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Yl = !1;
function Gl(e, t) {
  if (!e || Yl) return "";
  Yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Yl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? hi(e) : "";
}
function tS(e) {
  switch (e.tag) {
    case 5:
      return hi(e.type);
    case 16:
      return hi("Lazy");
    case 13:
      return hi("Suspense");
    case 19:
      return hi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Gl(e.type, !1)), e);
    case 11:
      return ((e = Gl(e.type.render, !1)), e);
    case 1:
      return ((e = Gl(e.type, !0)), e);
    default:
      return "";
  }
}
function Hu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case es:
      return "Fragment";
    case Jr:
      return "Portal";
    case $u:
      return "Profiler";
    case kd:
      return "StrictMode";
    case Uu:
      return "Suspense";
    case Wu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sy:
        return (e.displayName || "Context") + ".Consumer";
      case ry:
        return (e._context.displayName || "Context") + ".Provider";
      case Pd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Hu(e.type) || "Memo"
        );
      case Ln:
        ((t = e._payload), (e = e._init));
        try {
          return Hu(e(t));
        } catch {}
    }
  return null;
}
function nS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Hu(t);
    case 8:
      return t === kd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function tr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function oy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rS(e) {
  var t = oy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Eo(e) {
  e._valueTracker || (e._valueTracker = rS(e));
}
function ay(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = oy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Sa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ku(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ch(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = tr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ly(e, t) {
  ((t = t.checked), t != null && Ed(e, "checked", t, !1));
}
function Yu(e, t) {
  ly(e, t);
  var n = tr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Gu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Gu(e, t.type, tr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Th(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Gu(e, t, n) {
  (t !== "number" || Sa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pi = Array.isArray;
function ys(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + tr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Eh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (pi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: tr(n) };
}
function uy(e, t) {
  var n = tr(t.value),
    r = tr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function kh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ko,
  dy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ko = ko || document.createElement("div"),
          ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ko.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Di(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sS = ["Webkit", "ms", "Moz", "O"];
Object.keys(vi).forEach(function (e) {
  sS.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vi[t] = vi[e]));
  });
});
function fy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vi.hasOwnProperty(e) && vi[e])
      ? ("" + t).trim()
      : t + "px";
}
function hy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = fy(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var iS = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function qu(e, t) {
  if (t) {
    if (iS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Zu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ju = null;
function Ad(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ec = null,
  gs = null,
  vs = null;
function Ph(e) {
  if ((e = uo(e))) {
    if (typeof ec != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = dl(t)), ec(e.stateNode, e.type, t));
  }
}
function py(e) {
  gs ? (vs ? vs.push(e) : (vs = [e])) : (gs = e);
}
function my() {
  if (gs) {
    var e = gs,
      t = vs;
    if (((vs = gs = null), Ph(e), t)) for (e = 0; e < t.length; e++) Ph(t[e]);
  }
}
function yy(e, t) {
  return e(t);
}
function gy() {}
var Ql = !1;
function vy(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return yy(e, t, n);
  } finally {
    ((Ql = !1), (gs !== null || vs !== null) && (gy(), my()));
  }
}
function Li(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var tc = !1;
if (pn)
  try {
    var ri = {};
    (Object.defineProperty(ri, "passive", {
      get: function () {
        tc = !0;
      },
    }),
      window.addEventListener("test", ri, ri),
      window.removeEventListener("test", ri, ri));
  } catch {
    tc = !1;
  }
function oS(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xi = !1,
  ba = null,
  Ca = !1,
  nc = null,
  aS = {
    onError: function (e) {
      ((xi = !0), (ba = e));
    },
  };
function lS(e, t, n, r, s, i, o, a, l) {
  ((xi = !1), (ba = null), oS.apply(aS, arguments));
}
function uS(e, t, n, r, s, i, o, a, l) {
  if ((lS.apply(this, arguments), xi)) {
    if (xi) {
      var u = ba;
      ((xi = !1), (ba = null));
    } else throw Error(M(198));
    Ca || ((Ca = !0), (nc = u));
  }
}
function Ur(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rh(e) {
  if (Ur(e) !== e) throw Error(M(188));
}
function cS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ur(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (Rh(s), e);
        if (i === r) return (Rh(s), t);
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function wy(e) {
  return ((e = cS(e)), e !== null ? Sy(e) : null);
}
function Sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var by = ct.unstable_scheduleCallback,
  Ah = ct.unstable_cancelCallback,
  dS = ct.unstable_shouldYield,
  fS = ct.unstable_requestPaint,
  we = ct.unstable_now,
  hS = ct.unstable_getCurrentPriorityLevel,
  Nd = ct.unstable_ImmediatePriority,
  Cy = ct.unstable_UserBlockingPriority,
  Ta = ct.unstable_NormalPriority,
  pS = ct.unstable_LowPriority,
  Ty = ct.unstable_IdlePriority,
  al = null,
  qt = null;
function mS(e) {
  if (qt && typeof qt.onCommitFiberRoot == "function")
    try {
      qt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : vS,
  yS = Math.log,
  gS = Math.LN2;
function vS(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((yS(e) / gS) | 0)) | 0);
}
var Po = 64,
  Ro = 4194304;
function mi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ea(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = mi(a)) : ((i &= o), i !== 0 && (r = mi(i)));
  } else ((o = n & ~s), o !== 0 ? (r = mi(o)) : i !== 0 && (r = mi(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ft(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function xS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Ft(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = xS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function rc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ey() {
  var e = Po;
  return ((Po <<= 1), !(Po & 4194240) && (Po = 64), e);
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
    (e[t] = n));
}
function SS(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Ft(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function jd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var se = 0;
function ky(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Py,
  Md,
  Ry,
  Ay,
  Ny,
  sc = !1,
  Ao = [],
  Yn = null,
  Gn = null,
  Qn = null,
  Oi = new Map(),
  Ii = new Map(),
  In = [],
  bS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Nh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Qn = null;
      break;
    case "pointerover":
    case "pointerout":
      Oi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ii.delete(t.pointerId);
  }
}
function si(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = uo(t)), t !== null && Md(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function CS(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Yn = si(Yn, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Gn = si(Gn, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Qn = si(Qn, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Oi.set(i, si(Oi.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Ii.set(i, si(Ii.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function jy(e) {
  var t = br(e.target);
  if (t !== null) {
    var n = Ur(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xy(n)), t !== null)) {
          ((e.blockedOn = t),
            Ny(e.priority, function () {
              Ry(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function na(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ic(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ju = r), n.target.dispatchEvent(r), (Ju = null));
    } else return ((t = uo(n)), t !== null && Md(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function jh(e, t, n) {
  na(e) && n.delete(t);
}
function TS() {
  ((sc = !1),
    Yn !== null && na(Yn) && (Yn = null),
    Gn !== null && na(Gn) && (Gn = null),
    Qn !== null && na(Qn) && (Qn = null),
    Oi.forEach(jh),
    Ii.forEach(jh));
}
function ii(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sc ||
      ((sc = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, TS)));
}
function Fi(e) {
  function t(s) {
    return ii(s, e);
  }
  if (0 < Ao.length) {
    ii(Ao[0], e);
    for (var n = 1; n < Ao.length; n++) {
      var r = Ao[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && ii(Yn, e),
      Gn !== null && ii(Gn, e),
      Qn !== null && ii(Qn, e),
      Oi.forEach(t),
      Ii.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    ((r = In[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    (jy(n), n.blockedOn === null && In.shift());
}
var xs = Sn.ReactCurrentBatchConfig,
  ka = !0;
function ES(e, t, n, r) {
  var s = se,
    i = xs.transition;
  xs.transition = null;
  try {
    ((se = 1), Dd(e, t, n, r));
  } finally {
    ((se = s), (xs.transition = i));
  }
}
function kS(e, t, n, r) {
  var s = se,
    i = xs.transition;
  xs.transition = null;
  try {
    ((se = 4), Dd(e, t, n, r));
  } finally {
    ((se = s), (xs.transition = i));
  }
}
function Dd(e, t, n, r) {
  if (ka) {
    var s = ic(e, t, n, r);
    if (s === null) (ou(e, t, r, Pa, n), Nh(e, r));
    else if (CS(s, e, t, n, r)) r.stopPropagation();
    else if ((Nh(e, r), t & 4 && -1 < bS.indexOf(e))) {
      for (; s !== null; ) {
        var i = uo(s);
        if (
          (i !== null && Py(i),
          (i = ic(e, t, n, r)),
          i === null && ou(e, t, r, Pa, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else ou(e, t, r, null, n);
  }
}
var Pa = null;
function ic(e, t, n, r) {
  if (((Pa = null), (e = Ad(r)), (e = br(e)), e !== null))
    if (((t = Ur(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Pa = e), null);
}
function My(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hS()) {
        case Nd:
          return 1;
        case Cy:
          return 4;
        case Ta:
        case pS:
          return 16;
        case Ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Un = null,
  Ld = null,
  ra = null;
function Dy() {
  if (ra) return ra;
  var e,
    t = Ld,
    n = t.length,
    r,
    s = "value" in Un ? Un.value : Un.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (ra = s.slice(e, 1 < r ? 1 - r : void 0));
}
function sa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function No() {
  return !0;
}
function Mh() {
  return !1;
}
function ft(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? No
        : Mh),
      (this.isPropagationStopped = Mh),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = No));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = No));
      },
      persist: function () {},
      isPersistent: No,
    }),
    t
  );
}
var Ks = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Od = ft(Ks),
  lo = ge({}, Ks, { view: 0, detail: 0 }),
  PS = ft(lo),
  ql,
  Zl,
  oi,
  ll = ge({}, lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Id,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== oi &&
            (oi && e.type === "mousemove"
              ? ((ql = e.screenX - oi.screenX), (Zl = e.screenY - oi.screenY))
              : (Zl = ql = 0),
            (oi = e)),
          ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zl;
    },
  }),
  Dh = ft(ll),
  RS = ge({}, ll, { dataTransfer: 0 }),
  AS = ft(RS),
  NS = ge({}, lo, { relatedTarget: 0 }),
  Jl = ft(NS),
  jS = ge({}, Ks, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  MS = ft(jS),
  DS = ge({}, Ks, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  LS = ft(DS),
  OS = ge({}, Ks, { data: 0 }),
  Lh = ft(OS),
  IS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  FS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  VS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _S(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = VS[e]) ? !!t[e] : !1;
}
function Id() {
  return _S;
}
var zS = ge({}, lo, {
    key: function (e) {
      if (e.key) {
        var t = IS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = sa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? FS[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Id,
    charCode: function (e) {
      return e.type === "keypress" ? sa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? sa(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  BS = ft(zS),
  $S = ge({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oh = ft($S),
  US = ge({}, lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Id,
  }),
  WS = ft(US),
  HS = ge({}, Ks, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  KS = ft(HS),
  YS = ge({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  GS = ft(YS),
  QS = [9, 13, 27, 32],
  Fd = pn && "CompositionEvent" in window,
  wi = null;
pn && "documentMode" in document && (wi = document.documentMode);
var XS = pn && "TextEvent" in window && !wi,
  Ly = pn && (!Fd || (wi && 8 < wi && 11 >= wi)),
  Ih = " ",
  Fh = !1;
function Oy(e, t) {
  switch (e) {
    case "keyup":
      return QS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Iy(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ts = !1;
function qS(e, t) {
  switch (e) {
    case "compositionend":
      return Iy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fh = !0), Ih);
    case "textInput":
      return ((e = t.data), e === Ih && Fh ? null : e);
    default:
      return null;
  }
}
function ZS(e, t) {
  if (ts)
    return e === "compositionend" || (!Fd && Oy(e, t))
      ? ((e = Dy()), (ra = Ld = Un = null), (ts = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ly && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var JS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!JS[e.type] : t === "textarea";
}
function Fy(e, t, n, r) {
  (py(r),
    (t = Ra(t, "onChange")),
    0 < t.length &&
      ((n = new Od("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Si = null,
  Vi = null;
function eb(e) {
  Gy(e, 0);
}
function ul(e) {
  var t = ss(e);
  if (ay(t)) return e;
}
function tb(e, t) {
  if (e === "change") return t;
}
var Vy = !1;
if (pn) {
  var eu;
  if (pn) {
    var tu = "oninput" in document;
    if (!tu) {
      var _h = document.createElement("div");
      (_h.setAttribute("oninput", "return;"),
        (tu = typeof _h.oninput == "function"));
    }
    eu = tu;
  } else eu = !1;
  Vy = eu && (!document.documentMode || 9 < document.documentMode);
}
function zh() {
  Si && (Si.detachEvent("onpropertychange", _y), (Vi = Si = null));
}
function _y(e) {
  if (e.propertyName === "value" && ul(Vi)) {
    var t = [];
    (Fy(t, Vi, e, Ad(e)), vy(eb, t));
  }
}
function nb(e, t, n) {
  e === "focusin"
    ? (zh(), (Si = t), (Vi = n), Si.attachEvent("onpropertychange", _y))
    : e === "focusout" && zh();
}
function rb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Vi);
}
function sb(e, t) {
  if (e === "click") return ul(t);
}
function ib(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function ob(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : ob;
function _i(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Bu.call(t, s) || !_t(e[s], t[s])) return !1;
  }
  return !0;
}
function Bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $h(e, t) {
  var n = Bh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bh(n);
  }
}
function zy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? zy(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function By() {
  for (var e = window, t = Sa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sa(e.document);
  }
  return t;
}
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ab(e) {
  var t = By(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = $h(n, i)));
        var o = $h(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var lb = pn && "documentMode" in document && 11 >= document.documentMode,
  ns = null,
  oc = null,
  bi = null,
  ac = !1;
function Uh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ac ||
    ns == null ||
    ns !== Sa(r) ||
    ((r = ns),
    "selectionStart" in r && Vd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bi && _i(bi, r)) ||
      ((bi = r),
      (r = Ra(oc, "onSelect")),
      0 < r.length &&
        ((t = new Od("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ns))));
}
function jo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var rs = {
    animationend: jo("Animation", "AnimationEnd"),
    animationiteration: jo("Animation", "AnimationIteration"),
    animationstart: jo("Animation", "AnimationStart"),
    transitionend: jo("Transition", "TransitionEnd"),
  },
  nu = {},
  $y = {};
pn &&
  (($y = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete rs.animationend.animation,
    delete rs.animationiteration.animation,
    delete rs.animationstart.animation),
  "TransitionEvent" in window || delete rs.transitionend.transition);
function cl(e) {
  if (nu[e]) return nu[e];
  if (!rs[e]) return e;
  var t = rs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $y) return (nu[e] = t[n]);
  return e;
}
var Uy = cl("animationend"),
  Wy = cl("animationiteration"),
  Hy = cl("animationstart"),
  Ky = cl("transitionend"),
  Yy = new Map(),
  Wh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ur(e, t) {
  (Yy.set(e, t), $r(t, [e]));
}
for (var ru = 0; ru < Wh.length; ru++) {
  var su = Wh[ru],
    ub = su.toLowerCase(),
    cb = su[0].toUpperCase() + su.slice(1);
  ur(ub, "on" + cb);
}
ur(Uy, "onAnimationEnd");
ur(Wy, "onAnimationIteration");
ur(Hy, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(Ky, "onTransitionEnd");
Ls("onMouseEnter", ["mouseout", "mouseover"]);
Ls("onMouseLeave", ["mouseout", "mouseover"]);
Ls("onPointerEnter", ["pointerout", "pointerover"]);
Ls("onPointerLeave", ["pointerout", "pointerover"]);
$r(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
$r(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
$r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$r(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
$r(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
$r(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var yi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  db = new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));
function Hh(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), uS(r, t, void 0, e), (e.currentTarget = null));
}
function Gy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (Hh(s, a, u), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Hh(s, a, u), (i = l));
        }
    }
  }
  if (Ca) throw ((e = nc), (Ca = !1), (nc = null), e);
}
function ue(e, t) {
  var n = t[fc];
  n === void 0 && (n = t[fc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qy(t, e, 2, !1), n.add(r));
}
function iu(e, t, n) {
  var r = 0;
  (t && (r |= 4), Qy(n, e, r, t));
}
var Mo = "_reactListening" + Math.random().toString(36).slice(2);
function zi(e) {
  if (!e[Mo]) {
    ((e[Mo] = !0),
      ny.forEach(function (n) {
        n !== "selectionchange" && (db.has(n) || iu(n, !1, e), iu(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mo] || ((t[Mo] = !0), iu("selectionchange", !1, t));
  }
}
function Qy(e, t, n, r) {
  switch (My(t)) {
    case 1:
      var s = ES;
      break;
    case 4:
      s = kS;
      break;
    default:
      s = Dd;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !tc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function ou(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = br(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  vy(function () {
    var u = i,
      c = Ad(n),
      d = [];
    e: {
      var f = Yy.get(e);
      if (f !== void 0) {
        var h = Od,
          v = e;
        switch (e) {
          case "keypress":
            if (sa(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = BS;
            break;
          case "focusin":
            ((v = "focus"), (h = Jl));
            break;
          case "focusout":
            ((v = "blur"), (h = Jl));
            break;
          case "beforeblur":
          case "afterblur":
            h = Jl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Dh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = AS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = WS;
            break;
          case Uy:
          case Wy:
          case Hy:
            h = MS;
            break;
          case Ky:
            h = KS;
            break;
          case "scroll":
            h = PS;
            break;
          case "wheel":
            h = GS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = LS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Oh;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var b = x.stateNode;
          if (
            (x.tag === 5 &&
              b !== null &&
              ((x = b),
              m !== null && ((b = Li(y, m)), b != null && g.push(Bi(y, b, x)))),
            S)
          )
            break;
          y = y.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ju &&
            (v = n.relatedTarget || n.fromElement) &&
            (br(v) || v[mn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? br(v) : null),
              v !== null &&
                ((S = Ur(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((g = Dh),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Oh),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (y = "pointer")),
            (S = h == null ? f : ss(h)),
            (x = v == null ? f : ss(v)),
            (f = new g(b, y + "leave", h, n, c)),
            (f.target = S),
            (f.relatedTarget = x),
            (b = null),
            br(c) === u &&
              ((g = new g(m, y + "enter", v, n, c)),
              (g.target = x),
              (g.relatedTarget = S),
              (b = g)),
            (S = b),
            h && v)
          )
            t: {
              for (g = h, m = v, y = 0, x = g; x; x = qr(x)) y++;
              for (x = 0, b = m; b; b = qr(b)) x++;
              for (; 0 < y - x; ) ((g = qr(g)), y--);
              for (; 0 < x - y; ) ((m = qr(m)), x--);
              for (; y--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                ((g = qr(g)), (m = qr(m)));
              }
              g = null;
            }
          else g = null;
          (h !== null && Kh(d, f, h, g, !1),
            v !== null && S !== null && Kh(d, S, v, g, !0));
        }
      }
      e: {
        if (
          ((f = u ? ss(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = tb;
        else if (Vh(f))
          if (Vy) C = ib;
          else {
            C = rb;
            var T = nb;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = sb);
        if (C && (C = C(e, u))) {
          Fy(d, C, n, c);
          break e;
        }
        (T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Gu(f, "number", f.value));
      }
      switch (((T = u ? ss(u) : window), e)) {
        case "focusin":
          (Vh(T) || T.contentEditable === "true") &&
            ((ns = T), (oc = u), (bi = null));
          break;
        case "focusout":
          bi = oc = ns = null;
          break;
        case "mousedown":
          ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ac = !1), Uh(d, n, c));
          break;
        case "selectionchange":
          if (lb) break;
        case "keydown":
        case "keyup":
          Uh(d, n, c);
      }
      var E;
      if (Fd)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        ts
          ? Oy(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (Ly &&
          n.locale !== "ko" &&
          (ts || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && ts && (E = Dy())
            : ((Un = c),
              (Ld = "value" in Un ? Un.value : Un.textContent),
              (ts = !0))),
        (T = Ra(u, k)),
        0 < T.length &&
          ((k = new Lh(k, e, null, n, c)),
          d.push({ event: k, listeners: T }),
          E ? (k.data = E) : ((E = Iy(n)), E !== null && (k.data = E)))),
        (E = XS ? qS(e, n) : ZS(e, n)) &&
          ((u = Ra(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Lh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E))));
    }
    Gy(d, t);
  });
}
function Bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ra(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Li(e, n)),
      i != null && r.unshift(Bi(e, i, s)),
      (i = Li(e, t)),
      i != null && r.push(Bi(e, i, s))),
      (e = e.return));
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kh(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Li(n, i)), l != null && o.unshift(Bi(n, l, a)))
        : s || ((l = Li(n, i)), l != null && o.push(Bi(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var fb = /\r\n?/g,
  hb = /\u0000|\uFFFD/g;
function Yh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fb,
      `
`,
    )
    .replace(hb, "");
}
function Do(e, t, n) {
  if (((t = Yh(t)), Yh(e) !== t && n)) throw Error(M(425));
}
function Aa() {}
var lc = null,
  uc = null;
function cc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var dc = typeof setTimeout == "function" ? setTimeout : void 0,
  pb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gh = typeof Promise == "function" ? Promise : void 0,
  mb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gh < "u"
        ? function (e) {
            return Gh.resolve(null).then(e).catch(yb);
          }
        : dc;
function yb(e) {
  setTimeout(function () {
    throw e;
  });
}
function au(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Fi(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Fi(t);
}
function Xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ys = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + Ys,
  $i = "__reactProps$" + Ys,
  mn = "__reactContainer$" + Ys,
  fc = "__reactEvents$" + Ys,
  gb = "__reactListeners$" + Ys,
  vb = "__reactHandles$" + Ys;
function br(e) {
  var t = e[Qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mn] || n[Qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qh(e); e !== null; ) {
          if ((n = e[Qt])) return n;
          e = Qh(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function uo(e) {
  return (
    (e = e[Qt] || e[mn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ss(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function dl(e) {
  return e[$i] || null;
}
var hc = [],
  is = -1;
function cr(e) {
  return { current: e };
}
function ce(e) {
  0 > is || ((e.current = hc[is]), (hc[is] = null), is--);
}
function oe(e, t) {
  (is++, (hc[is] = e.current), (e.current = t));
}
var nr = {},
  Be = cr(nr),
  Je = cr(!1),
  Ir = nr;
function Os(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function et(e) {
  return ((e = e.childContextTypes), e != null);
}
function Na() {
  (ce(Je), ce(Be));
}
function Xh(e, t, n) {
  if (Be.current !== nr) throw Error(M(168));
  (oe(Be, t), oe(Je, n));
}
function Xy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(M(108, nS(e) || "Unknown", s));
  return ge({}, n, r);
}
function ja(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nr),
    (Ir = Be.current),
    oe(Be, e),
    oe(Je, Je.current),
    !0
  );
}
function qh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  (n
    ? ((e = Xy(e, t, Ir)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Je),
      ce(Be),
      oe(Be, e))
    : ce(Je),
    oe(Je, n));
}
var un = null,
  fl = !1,
  lu = !1;
function qy(e) {
  un === null ? (un = [e]) : un.push(e);
}
function xb(e) {
  ((fl = !0), qy(e));
}
function dr() {
  if (!lu && un !== null) {
    lu = !0;
    var e = 0,
      t = se;
    try {
      var n = un;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((un = null), (fl = !1));
    } catch (s) {
      throw (un !== null && (un = un.slice(e + 1)), by(Nd, dr), s);
    } finally {
      ((se = t), (lu = !1));
    }
  }
  return null;
}
var os = [],
  as = 0,
  Ma = null,
  Da = 0,
  mt = [],
  yt = 0,
  Fr = null,
  dn = 1,
  fn = "";
function xr(e, t) {
  ((os[as++] = Da), (os[as++] = Ma), (Ma = e), (Da = t));
}
function Zy(e, t, n) {
  ((mt[yt++] = dn), (mt[yt++] = fn), (mt[yt++] = Fr), (Fr = e));
  var r = dn;
  e = fn;
  var s = 32 - Ft(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Ft(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (dn = (1 << (32 - Ft(t) + s)) | (n << s) | r),
      (fn = i + e));
  } else ((dn = (1 << i) | (n << s) | r), (fn = e));
}
function _d(e) {
  e.return !== null && (xr(e, 1), Zy(e, 1, 0));
}
function zd(e) {
  for (; e === Ma; )
    ((Ma = os[--as]), (os[as] = null), (Da = os[--as]), (os[as] = null));
  for (; e === Fr; )
    ((Fr = mt[--yt]),
      (mt[yt] = null),
      (fn = mt[--yt]),
      (mt[yt] = null),
      (dn = mt[--yt]),
      (mt[yt] = null));
}
var lt = null,
  at = null,
  fe = !1,
  It = null;
function Jy(e, t) {
  var n = gt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Zh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (at = Xn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fr !== null ? { id: dn, overflow: fn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mc(e) {
  if (fe) {
    var t = at;
    if (t) {
      var n = t;
      if (!Zh(e, t)) {
        if (pc(e)) throw Error(M(418));
        t = Xn(n.nextSibling);
        var r = lt;
        t && Zh(e, t)
          ? Jy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (lt = e));
      }
    } else {
      if (pc(e)) throw Error(M(418));
      ((e.flags = (e.flags & -4097) | 2), (fe = !1), (lt = e));
    }
  }
}
function Jh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Lo(e) {
  if (e !== lt) return !1;
  if (!fe) return (Jh(e), (fe = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !cc(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (pc(e)) throw (eg(), Error(M(418)));
    for (; t; ) (Jy(e, t), (t = Xn(t.nextSibling)));
  }
  if ((Jh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = Xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = lt ? Xn(e.stateNode.nextSibling) : null;
  return !0;
}
function eg() {
  for (var e = at; e; ) e = Xn(e.nextSibling);
}
function Is() {
  ((at = lt = null), (fe = !1));
}
function Bd(e) {
  It === null ? (It = [e]) : It.push(e);
}
var wb = Sn.ReactCurrentBatchConfig;
function ai(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Oo(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ep(e) {
  var t = e._init;
  return t(e._payload);
}
function tg(e) {
  function t(m, y) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [y]), (m.flags |= 16)) : x.push(y);
    }
  }
  function n(m, y) {
    if (!e) return null;
    for (; y !== null; ) (t(m, y), (y = y.sibling));
    return null;
  }
  function r(m, y) {
    for (m = new Map(); y !== null; )
      (y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling));
    return m;
  }
  function s(m, y) {
    return ((m = er(m, y)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, y, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < y ? ((m.flags |= 2), y) : x)
            : ((m.flags |= 2), y))
        : ((m.flags |= 1048576), y)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, y, x, b) {
    return y === null || y.tag !== 6
      ? ((y = mu(x, m.mode, b)), (y.return = m), y)
      : ((y = s(y, x)), (y.return = m), y);
  }
  function l(m, y, x, b) {
    var C = x.type;
    return C === es
      ? c(m, y, x.props.children, b, x.key)
      : y !== null &&
          (y.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Ln &&
              ep(C) === y.type))
        ? ((b = s(y, x.props)), (b.ref = ai(m, y, x)), (b.return = m), b)
        : ((b = da(x.type, x.key, x.props, null, m.mode, b)),
          (b.ref = ai(m, y, x)),
          (b.return = m),
          b);
  }
  function u(m, y, x, b) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== x.containerInfo ||
      y.stateNode.implementation !== x.implementation
      ? ((y = yu(x, m.mode, b)), (y.return = m), y)
      : ((y = s(y, x.children || [])), (y.return = m), y);
  }
  function c(m, y, x, b, C) {
    return y === null || y.tag !== 7
      ? ((y = Lr(x, m.mode, b, C)), (y.return = m), y)
      : ((y = s(y, x)), (y.return = m), y);
  }
  function d(m, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((y = mu("" + y, m.mode, x)), (y.return = m), y);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case To:
          return (
            (x = da(y.type, y.key, y.props, null, m.mode, x)),
            (x.ref = ai(m, null, y)),
            (x.return = m),
            x
          );
        case Jr:
          return ((y = yu(y, m.mode, x)), (y.return = m), y);
        case Ln:
          var b = y._init;
          return d(m, b(y._payload), x);
      }
      if (pi(y) || ni(y))
        return ((y = Lr(y, m.mode, x, null)), (y.return = m), y);
      Oo(m, y);
    }
    return null;
  }
  function f(m, y, x, b) {
    var C = y !== null ? y.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : a(m, y, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case To:
          return x.key === C ? l(m, y, x, b) : null;
        case Jr:
          return x.key === C ? u(m, y, x, b) : null;
        case Ln:
          return ((C = x._init), f(m, y, C(x._payload), b));
      }
      if (pi(x) || ni(x)) return C !== null ? null : c(m, y, x, b, null);
      Oo(m, x);
    }
    return null;
  }
  function h(m, y, x, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return ((m = m.get(x) || null), a(y, m, "" + b, C));
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case To:
          return (
            (m = m.get(b.key === null ? x : b.key) || null),
            l(y, m, b, C)
          );
        case Jr:
          return (
            (m = m.get(b.key === null ? x : b.key) || null),
            u(y, m, b, C)
          );
        case Ln:
          var T = b._init;
          return h(m, y, x, T(b._payload), C);
      }
      if (pi(b) || ni(b)) return ((m = m.get(x) || null), c(y, m, b, C, null));
      Oo(y, b);
    }
    return null;
  }
  function v(m, y, x, b) {
    for (
      var C = null, T = null, E = y, k = (y = 0), N = null;
      E !== null && k < x.length;
      k++
    ) {
      E.index > k ? ((N = E), (E = null)) : (N = E.sibling);
      var j = f(m, E, x[k], b);
      if (j === null) {
        E === null && (E = N);
        break;
      }
      (e && E && j.alternate === null && t(m, E),
        (y = i(j, y, k)),
        T === null ? (C = j) : (T.sibling = j),
        (T = j),
        (E = N));
    }
    if (k === x.length) return (n(m, E), fe && xr(m, k), C);
    if (E === null) {
      for (; k < x.length; k++)
        ((E = d(m, x[k], b)),
          E !== null &&
            ((y = i(E, y, k)),
            T === null ? (C = E) : (T.sibling = E),
            (T = E)));
      return (fe && xr(m, k), C);
    }
    for (E = r(m, E); k < x.length; k++)
      ((N = h(E, m, k, x[k], b)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? k : N.key),
          (y = i(N, y, k)),
          T === null ? (C = N) : (T.sibling = N),
          (T = N)));
    return (
      e &&
        E.forEach(function (B) {
          return t(m, B);
        }),
      fe && xr(m, k),
      C
    );
  }
  function g(m, y, x, b) {
    var C = ni(x);
    if (typeof C != "function") throw Error(M(150));
    if (((x = C.call(x)), x == null)) throw Error(M(151));
    for (
      var T = (C = null), E = y, k = (y = 0), N = null, j = x.next();
      E !== null && !j.done;
      k++, j = x.next()
    ) {
      E.index > k ? ((N = E), (E = null)) : (N = E.sibling);
      var B = f(m, E, j.value, b);
      if (B === null) {
        E === null && (E = N);
        break;
      }
      (e && E && B.alternate === null && t(m, E),
        (y = i(B, y, k)),
        T === null ? (C = B) : (T.sibling = B),
        (T = B),
        (E = N));
    }
    if (j.done) return (n(m, E), fe && xr(m, k), C);
    if (E === null) {
      for (; !j.done; k++, j = x.next())
        ((j = d(m, j.value, b)),
          j !== null &&
            ((y = i(j, y, k)),
            T === null ? (C = j) : (T.sibling = j),
            (T = j)));
      return (fe && xr(m, k), C);
    }
    for (E = r(m, E); !j.done; k++, j = x.next())
      ((j = h(E, m, k, j.value, b)),
        j !== null &&
          (e && j.alternate !== null && E.delete(j.key === null ? k : j.key),
          (y = i(j, y, k)),
          T === null ? (C = j) : (T.sibling = j),
          (T = j)));
    return (
      e &&
        E.forEach(function (F) {
          return t(m, F);
        }),
      fe && xr(m, k),
      C
    );
  }
  function S(m, y, x, b) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === es &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case To:
          e: {
            for (var C = x.key, T = y; T !== null; ) {
              if (T.key === C) {
                if (((C = x.type), C === es)) {
                  if (T.tag === 7) {
                    (n(m, T.sibling),
                      (y = s(T, x.props.children)),
                      (y.return = m),
                      (m = y));
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ln &&
                    ep(C) === T.type)
                ) {
                  (n(m, T.sibling),
                    (y = s(T, x.props)),
                    (y.ref = ai(m, T, x)),
                    (y.return = m),
                    (m = y));
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            x.type === es
              ? ((y = Lr(x.props.children, m.mode, b, x.key)),
                (y.return = m),
                (m = y))
              : ((b = da(x.type, x.key, x.props, null, m.mode, b)),
                (b.ref = ai(m, y, x)),
                (b.return = m),
                (m = b));
          }
          return o(m);
        case Jr:
          e: {
            for (T = x.key; y !== null; ) {
              if (y.key === T)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === x.containerInfo &&
                  y.stateNode.implementation === x.implementation
                ) {
                  (n(m, y.sibling),
                    (y = s(y, x.children || [])),
                    (y.return = m),
                    (m = y));
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else t(m, y);
              y = y.sibling;
            }
            ((y = yu(x, m.mode, b)), (y.return = m), (m = y));
          }
          return o(m);
        case Ln:
          return ((T = x._init), S(m, y, T(x._payload), b));
      }
      if (pi(x)) return v(m, y, x, b);
      if (ni(x)) return g(m, y, x, b);
      Oo(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        y !== null && y.tag === 6
          ? (n(m, y.sibling), (y = s(y, x)), (y.return = m), (m = y))
          : (n(m, y), (y = mu(x, m.mode, b)), (y.return = m), (m = y)),
        o(m))
      : n(m, y);
  }
  return S;
}
var Fs = tg(!0),
  ng = tg(!1),
  La = cr(null),
  Oa = null,
  ls = null,
  $d = null;
function Ud() {
  $d = ls = Oa = null;
}
function Wd(e) {
  var t = La.current;
  (ce(La), (e._currentValue = t));
}
function yc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ws(e, t) {
  ((Oa = e),
    ($d = ls = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null)));
}
function bt(e) {
  var t = e._currentValue;
  if ($d !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ls === null)) {
      if (Oa === null) throw Error(M(308));
      ((ls = e), (Oa.dependencies = { lanes: 0, firstContext: e }));
    } else ls = ls.next = e;
  return t;
}
var Cr = null;
function Hd(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function rg(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Hd(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function Kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sg(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Hd(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function ia(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jd(e, n));
  }
}
function tp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ia(e, t, n, r) {
  var s = e.updateQueue;
  On = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (i = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = s.baseState;
    ((o = 0), (c = u = l = null), (a = i));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = ge({}, d, f);
              break e;
            case 2:
              On = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((_r |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function np(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(M(191, s));
        s.call(r);
      }
    }
}
var co = {},
  Zt = cr(co),
  Ui = cr(co),
  Wi = cr(co);
function Tr(e) {
  if (e === co) throw Error(M(174));
  return e;
}
function Yd(e, t) {
  switch ((oe(Wi, t), oe(Ui, e), oe(Zt, co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xu(t, e)));
  }
  (ce(Zt), oe(Zt, t));
}
function Vs() {
  (ce(Zt), ce(Ui), ce(Wi));
}
function ig(e) {
  Tr(Wi.current);
  var t = Tr(Zt.current),
    n = Xu(t, e.type);
  t !== n && (oe(Ui, e), oe(Zt, n));
}
function Gd(e) {
  Ui.current === e && (ce(Zt), ce(Ui));
}
var pe = cr(0);
function Fa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var uu = [];
function Qd() {
  for (var e = 0; e < uu.length; e++)
    uu[e]._workInProgressVersionPrimary = null;
  uu.length = 0;
}
var oa = Sn.ReactCurrentDispatcher,
  cu = Sn.ReactCurrentBatchConfig,
  Vr = 0,
  ye = null,
  Ee = null,
  Re = null,
  Va = !1,
  Ci = !1,
  Hi = 0,
  Sb = 0;
function Ie() {
  throw Error(M(321));
}
function Xd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function qd(e, t, n, r, s, i) {
  if (
    ((Vr = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oa.current = e === null || e.memoizedState === null ? Eb : kb),
    (e = n(r, s)),
    Ci)
  ) {
    i = 0;
    do {
      if (((Ci = !1), (Hi = 0), 25 <= i)) throw Error(M(301));
      ((i += 1),
        (Re = Ee = null),
        (t.updateQueue = null),
        (oa.current = Pb),
        (e = n(r, s)));
    } while (Ci);
  }
  if (
    ((oa.current = _a),
    (t = Ee !== null && Ee.next !== null),
    (Vr = 0),
    (Re = Ee = ye = null),
    (Va = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Zd() {
  var e = Hi !== 0;
  return ((Hi = 0), e);
}
function Wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e), Re);
}
function Ct() {
  if (Ee === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Re === null ? ye.memoizedState : Re.next;
  if (t !== null) ((Re = t), (Ee = e));
  else {
    if (e === null) throw Error(M(310));
    ((Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e));
  }
  return Re;
}
function Ki(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function du(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Vr & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (ye.lanes |= c),
          (_r |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (o = r) : (l.next = a),
      _t(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ye.lanes |= i), (_r |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fu(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (_t(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function og() {}
function ag(e, t) {
  var n = ye,
    r = Ct(),
    s = t(),
    i = !_t(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ze = !0)),
    (r = r.queue),
    Jd(cg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yi(9, ug.bind(null, n, r, s, t), void 0, null),
      Ae === null)
    )
      throw Error(M(349));
    Vr & 30 || lg(n, t, s);
  }
  return s;
}
function lg(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ug(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), dg(t) && fg(e));
}
function cg(e, t, n) {
  return n(function () {
    dg(t) && fg(e);
  });
}
function dg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function fg(e) {
  var t = yn(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function rp(e) {
  var t = Wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tb.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Yi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hg() {
  return Ct().memoizedState;
}
function aa(e, t, n, r) {
  var s = Wt();
  ((ye.flags |= e),
    (s.memoizedState = Yi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function hl(e, t, n, r) {
  var s = Ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((i = o.destroy), r !== null && Xd(r, o.deps))) {
      s.memoizedState = Yi(t, n, i, r);
      return;
    }
  }
  ((ye.flags |= e), (s.memoizedState = Yi(1 | t, n, i, r)));
}
function sp(e, t) {
  return aa(8390656, 8, e, t);
}
function Jd(e, t) {
  return hl(2048, 8, e, t);
}
function pg(e, t) {
  return hl(4, 2, e, t);
}
function mg(e, t) {
  return hl(4, 4, e, t);
}
function yg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    hl(4, 4, yg.bind(null, t, e), n)
  );
}
function ef() {}
function vg(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xg(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wg(e, t, n) {
  return Vr & 21
    ? (_t(n, t) || ((n = Ey()), (ye.lanes |= n), (_r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function bb(e, t) {
  var n = se;
  ((se = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = cu.transition;
  cu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((se = n), (cu.transition = r));
  }
}
function Sg() {
  return Ct().memoizedState;
}
function Cb(e, t, n) {
  var r = Jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bg(e))
  )
    Cg(t, n);
  else if (((n = rg(e, t, n, r)), n !== null)) {
    var s = Ye();
    (Vt(n, e, r, s), Tg(n, t, r));
  }
}
function Tb(e, t, n) {
  var r = Jn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bg(e)) Cg(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), _t(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Hd(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = rg(e, t, s, r)),
      n !== null && ((s = Ye()), Vt(n, e, r, s), Tg(n, t, r)));
  }
}
function bg(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Cg(e, t) {
  Ci = Va = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Tg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jd(e, n));
  }
}
var _a = {
    readContext: bt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1,
  },
  Eb = {
    readContext: bt,
    useCallback: function (e, t) {
      return ((Wt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: bt,
    useEffect: sp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        aa(4194308, 4, yg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return aa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return aa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Wt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Cb.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: rp,
    useDebugValue: ef,
    useDeferredValue: function (e) {
      return (Wt().memoizedState = e);
    },
    useTransition: function () {
      var e = rp(!1),
        t = e[0];
      return ((e = bb.bind(null, e[1])), (Wt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        s = Wt();
      if (fe) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Ae === null)) throw Error(M(349));
        Vr & 30 || lg(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        sp(cg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yi(9, ug.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Wt(),
        t = Ae.identifierPrefix;
      if (fe) {
        var n = fn,
          r = dn;
        ((n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Sb++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kb = {
    readContext: bt,
    useCallback: vg,
    useContext: bt,
    useEffect: Jd,
    useImperativeHandle: gg,
    useInsertionEffect: pg,
    useLayoutEffect: mg,
    useMemo: xg,
    useReducer: du,
    useRef: hg,
    useState: function () {
      return du(Ki);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Ct();
      return wg(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = du(Ki)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: og,
    useSyncExternalStore: ag,
    useId: Sg,
    unstable_isNewReconciler: !1,
  },
  Pb = {
    readContext: bt,
    useCallback: vg,
    useContext: bt,
    useEffect: Jd,
    useImperativeHandle: gg,
    useInsertionEffect: pg,
    useLayoutEffect: mg,
    useMemo: xg,
    useReducer: fu,
    useRef: hg,
    useState: function () {
      return fu(Ki);
    },
    useDebugValue: ef,
    useDeferredValue: function (e) {
      var t = Ct();
      return Ee === null ? (t.memoizedState = e) : wg(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = fu(Ki)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: og,
    useSyncExternalStore: ag,
    useId: Sg,
    unstable_isNewReconciler: !1,
  };
function jt(e, t) {
  if (e && e.defaultProps) {
    ((t = ge({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ur(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      s = Jn(e),
      i = hn(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = qn(e, i, s)),
      t !== null && (Vt(t, e, s, r), ia(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      s = Jn(e),
      i = hn(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = qn(e, i, s)),
      t !== null && (Vt(t, e, s, r), ia(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ye(),
      r = Jn(e),
      s = hn(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = qn(e, s, r)),
      t !== null && (Vt(t, e, r, n), ia(t, e, r)));
  },
};
function ip(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !_i(n, r) || !_i(s, i)
        : !0
  );
}
function Eg(e, t, n) {
  var r = !1,
    s = nr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = bt(i))
      : ((s = et(t) ? Ir : Be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Os(e, s) : nr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function op(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null));
}
function vc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Kd(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = bt(i))
    : ((i = et(t) ? Ir : Be.current), (s.context = Os(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (gc(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && pl.enqueueReplaceState(s, s.state, null),
      Ia(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function _s(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += tS(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rb = typeof WeakMap == "function" ? WeakMap : Map;
function kg(e, t, n) {
  ((n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ba || ((Ba = !0), (Ac = r)), xc(e, t));
    }),
    n
  );
}
function Pg(e, t, n) {
  ((n = hn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        xc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (xc(e, t),
          typeof r != "function" &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ap(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rb();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = $b.bind(null, e, t, n)), t.then(e, e));
}
function lp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function up(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ab = Sn.ReactCurrentOwner,
  Ze = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? ng(t, null, n, r) : Fs(t, e.child, n, r);
}
function cp(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    ws(t, s),
    (r = qd(e, t, n, r, i, s)),
    (n = Zd()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        gn(e, t, s))
      : (fe && n && _d(t), (t.flags |= 1), Ue(e, t, r, s), t.child)
  );
}
function dp(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !uf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Rg(e, t, i, r, s))
      : ((e = da(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _i), n(o, r) && e.ref === t.ref)
    )
      return gn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = er(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Rg(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (_i(i, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return ((t.lanes = e.lanes), gn(e, t, s));
  }
  return wc(e, t, n, r, s);
}
function Ag(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(cs, it),
        (it |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(cs, it),
          (it |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(cs, it),
        (it |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(cs, it),
      (it |= r));
  return (Ue(e, t, s, n), t.child);
}
function Ng(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wc(e, t, n, r, s) {
  var i = et(n) ? Ir : Be.current;
  return (
    (i = Os(t, i)),
    ws(t, s),
    (n = qd(e, t, n, r, i, s)),
    (r = Zd()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        gn(e, t, s))
      : (fe && r && _d(t), (t.flags |= 1), Ue(e, t, n, s), t.child)
  );
}
function fp(e, t, n, r, s) {
  if (et(n)) {
    var i = !0;
    ja(t);
  } else i = !1;
  if ((ws(t, s), t.stateNode === null))
    (la(e, t), Eg(t, n, r), vc(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = bt(u))
      : ((u = et(n) ? Ir : Be.current), (u = Os(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && op(t, o, r, u)),
      (On = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Ia(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || Je.current || On
        ? (typeof c == "function" && (gc(t, n, c, r), (l = t.memoizedState)),
          (a = On || ip(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      sg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : jt(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = bt(l))
        : ((l = et(n) ? Ir : Be.current), (l = Os(t, l))));
    var h = n.getDerivedStateFromProps;
    ((c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && op(t, o, r, l)),
      (On = !1),
      (f = t.memoizedState),
      (o.state = f),
      Ia(t, r, o, s));
    var v = t.memoizedState;
    a !== d || f !== v || Je.current || On
      ? (typeof h == "function" && (gc(t, n, h, r), (v = t.memoizedState)),
        (u = On || ip(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sc(e, t, n, r, i, s);
}
function Sc(e, t, n, r, s, i) {
  Ng(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && qh(t, n, !1), gn(e, t, i));
  ((r = t.stateNode), (Ab.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Fs(t, e.child, null, i)), (t.child = Fs(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = r.state),
    s && qh(t, n, !0),
    t.child
  );
}
function jg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Xh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xh(e, t.context, !1),
    Yd(e, t.containerInfo));
}
function hp(e, t, n, r, s) {
  return (Is(), Bd(s), (t.flags |= 256), Ue(e, t, n, r), t.child);
}
var bc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mg(e, t, n) {
  var r = t.pendingProps,
    s = pe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    oe(pe, s & 1),
    e === null)
  )
    return (
      mc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = gl(o, r, 0, null)),
              (e = Lr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Cc(n)),
              (t.memoizedState = bc),
              e)
            : tf(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Nb(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = er(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = er(a, i)) : ((i = Lr(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Cc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = er(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function tf(e, t) {
  return (
    (t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Io(e, t, n, r) {
  return (
    r !== null && Bd(r),
    Fs(t, e.child, null, n),
    (e = tf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nb(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hu(Error(M(422)))), Io(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = gl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Lr(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Fs(t, e.child, null, o),
          (t.child.memoizedState = Cc(o)),
          (t.memoizedState = bc),
          i);
  if (!(t.mode & 1)) return Io(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(M(419))),
      (r = hu(i, r, void 0)),
      Io(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ze || a)) {
    if (((r = Ae), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), yn(e, s), Vt(r, e, s, -1)));
    }
    return (lf(), (r = hu(Error(M(421)))), Io(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ub.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (at = Xn(s.nextSibling)),
      (lt = t),
      (fe = !0),
      (It = null),
      e !== null &&
        ((mt[yt++] = dn),
        (mt[yt++] = fn),
        (mt[yt++] = Fr),
        (dn = e.id),
        (fn = e.overflow),
        (Fr = t)),
      (t = tf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), yc(e.return, t, n));
}
function pu(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Dg(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ue(e, t, r.children, n), (r = pe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pp(e, n, t);
        else if (e.tag === 19) pp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((oe(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && Fa(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          pu(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Fa(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        pu(t, !0, n, null, i);
        break;
      case "together":
        pu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function la(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = er(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = er(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function jb(e, t, n) {
  switch (t.tag) {
    case 3:
      (jg(t), Is());
      break;
    case 5:
      ig(t);
      break;
    case 1:
      et(t.type) && ja(t);
      break;
    case 4:
      Yd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (oe(La, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Mg(e, t, n)
            : (oe(pe, pe.current & 1),
              (e = gn(e, t, n)),
              e !== null ? e.sibling : null);
      oe(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        oe(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Ag(e, t, n));
  }
  return gn(e, t, n);
}
var Lg, Tc, Og, Ig;
Lg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Tc = function () {};
Og = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Tr(Zt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Ku(e, s)), (r = Ku(e, r)), (i = []));
        break;
      case "select":
        ((s = ge({}, s, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Qu(e, s)), (r = Qu(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Aa);
    }
    qu(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Mi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && ue("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ig = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function li(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Mb(e, t, n) {
  var r = t.pendingProps;
  switch ((zd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Fe(t), null);
    case 1:
      return (et(t.type) && Na(), Fe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Vs(),
        ce(Je),
        ce(Be),
        Qd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (Mc(It), (It = null)))),
        Tc(e, t),
        Fe(t),
        null
      );
    case 5:
      Gd(t);
      var s = Tr(Wi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Og(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return (Fe(t), null);
        }
        if (((e = Tr(Zt.current)), Lo(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Qt] = t), (r[$i] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ue("cancel", r), ue("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < yi.length; s++) ue(yi[s], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ue("error", r), ue("load", r));
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              (Ch(r, i), ue("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", r));
              break;
            case "textarea":
              (Eh(r, i), ue("invalid", r));
          }
          (qu(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Mi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              (Eo(r), Th(r, i, !0));
              break;
            case "textarea":
              (Eo(r), kh(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Aa);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Qt] = t),
            (e[$i] = r),
            Lg(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Zu(n, r)), n)) {
              case "dialog":
                (ue("cancel", e), ue("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ue("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < yi.length; s++) ue(yi[s], e);
                s = r;
                break;
              case "source":
                (ue("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (ue("error", e), ue("load", e), (s = r));
                break;
              case "details":
                (ue("toggle", e), (s = r));
                break;
              case "input":
                (Ch(e, r), (s = Ku(e, r)), ue("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ge({}, r, { value: void 0 })),
                  ue("invalid", e));
                break;
              case "textarea":
                (Eh(e, r), (s = Qu(e, r)), ue("invalid", e));
                break;
              default:
                s = r;
            }
            (qu(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? hy(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && dy(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Di(e, l)
                        : typeof l == "number" && Di(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Mi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && ue("scroll", e)
                          : l != null && Ed(e, i, l, o));
              }
            switch (n) {
              case "input":
                (Eo(e), Th(e, r, !1));
                break;
              case "textarea":
                (Eo(e), kh(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ys(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ys(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Aa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Fe(t), null);
    case 6:
      if (e && t.stateNode != null) Ig(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Tr(Wi.current)), Tr(Zt.current), Lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qt] = t),
            (i = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qt] = t),
            (t.stateNode = r));
      }
      return (Fe(t), null);
    case 13:
      if (
        (ce(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && at !== null && t.mode & 1 && !(t.flags & 128))
          (eg(), Is(), (t.flags |= 98560), (i = !1));
        else if (((i = Lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Qt] = t;
          } else
            (Is(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Fe(t), (i = !1));
        } else (It !== null && (Mc(It), (It = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Pe === 0 && (Pe = 3) : lf())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        Vs(),
        Tc(e, t),
        e === null && zi(t.stateNode.containerInfo),
        Fe(t),
        null
      );
    case 10:
      return (Wd(t.type._context), Fe(t), null);
    case 17:
      return (et(t.type) && Na(), Fe(t), null);
    case 19:
      if ((ce(pe), (i = t.memoizedState), i === null)) return (Fe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) li(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    li(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (oe(pe, (pe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > zs &&
            ((t.flags |= 128), (r = !0), li(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              li(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !fe)
            )
              return (Fe(t), null);
          } else
            2 * we() - i.renderingStartTime > zs &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), li(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (n = pe.current),
          oe(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        af(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? it & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Db(e, t) {
  switch ((zd(t), t.tag)) {
    case 1:
      return (
        et(t.type) && Na(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vs(),
        ce(Je),
        ce(Be),
        Qd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Gd(t), null);
    case 13:
      if (
        (ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Is();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ce(pe), null);
    case 4:
      return (Vs(), null);
    case 10:
      return (Wd(t.type._context), null);
    case 22:
    case 23:
      return (af(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Fo = !1,
  _e = !1,
  Lb = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function us(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function Ec(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var mp = !1;
function Ob(e, t) {
  if (((lc = ka), (e = By()), Vd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;
            )
              ((f = d), (d = h));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === s && (a = o),
                f === i && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (uc = { focusedElem: e, selectionRange: n }, ka = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (V = e));
    else
      for (; V !== null; ) {
        t = V;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    S = v.memoizedState,
                    m = t.stateNode,
                    y = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : jt(t.type, g),
                      S,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (b) {
          xe(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (V = e));
          break;
        }
        V = t.return;
      }
  return ((v = mp), (mp = !1), v);
}
function Ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Ec(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function kc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fg(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Fg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[$i], delete t[fc], delete t[gb], delete t[vb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Vg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Aa)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null; )
      (Pc(e, t, n), (e = e.sibling));
}
function Rc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rc(e, t, n), e = e.sibling; e !== null; )
      (Rc(e, t, n), (e = e.sibling));
}
var Ne = null,
  Ot = !1;
function Rn(e, t, n) {
  for (n = n.child; n !== null; ) (_g(e, t, n), (n = n.sibling));
}
function _g(e, t, n) {
  if (qt && typeof qt.onCommitFiberUnmount == "function")
    try {
      qt.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || us(n, t);
    case 6:
      var r = Ne,
        s = Ot;
      ((Ne = null),
        Rn(e, t, n),
        (Ne = r),
        (Ot = s),
        Ne !== null &&
          (Ot
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode)));
      break;
    case 18:
      Ne !== null &&
        (Ot
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? au(e.parentNode, n)
              : e.nodeType === 1 && au(e, n),
            Fi(e))
          : au(Ne, n.stateNode));
      break;
    case 4:
      ((r = Ne),
        (s = Ot),
        (Ne = n.stateNode.containerInfo),
        (Ot = !0),
        Rn(e, t, n),
        (Ne = r),
        (Ot = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ec(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      Rn(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (us(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          xe(n, t, a);
        }
      Rn(e, t, n);
      break;
    case 21:
      Rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Rn(e, t, n), (_e = r))
        : Rn(e, t, n);
      break;
    default:
      Rn(e, t, n);
  }
}
function gp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Lb()),
      t.forEach(function (r) {
        var s = Wb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Ne = a.stateNode), (Ot = !1));
              break e;
            case 3:
              ((Ne = a.stateNode.containerInfo), (Ot = !0));
              break e;
            case 4:
              ((Ne = a.stateNode.containerInfo), (Ot = !0));
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(M(160));
        (_g(i, o, s), (Ne = null), (Ot = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        xe(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (zg(t, e), (t = t.sibling));
}
function zg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pt(t, e), Ut(e), r & 4)) {
        try {
          (Ti(3, e, e.return), ml(3, e));
        } catch (g) {
          xe(e, e.return, g);
        }
        try {
          Ti(5, e, e.return);
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 1:
      (Pt(t, e), Ut(e), r & 512 && n !== null && us(n, n.return));
      break;
    case 5:
      if (
        (Pt(t, e),
        Ut(e),
        r & 512 && n !== null && us(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Di(s, "");
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && ly(s, i),
              Zu(a, o));
            var u = Zu(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? hy(s, d)
                : c === "dangerouslySetInnerHTML"
                  ? dy(s, d)
                  : c === "children"
                    ? Di(s, d)
                    : Ed(s, c, d, u);
            }
            switch (a) {
              case "input":
                Yu(s, i);
                break;
              case "textarea":
                uy(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? ys(s, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ys(s, !!i.multiple, i.defaultValue, !0)
                      : ys(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[$i] = i;
          } catch (g) {
            xe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Pt(t, e), Ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Pt(t, e), Ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fi(t.containerInfo);
        } catch (g) {
          xe(e, e.return, g);
        }
      break;
    case 4:
      (Pt(t, e), Ut(e));
      break;
    case 13:
      (Pt(t, e),
        Ut(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (sf = we())),
        r & 4 && gp(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || c), Pt(t, e), (_e = u)) : Pt(t, e),
        Ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ti(4, f, f.return);
                  break;
                case 1:
                  us(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (g) {
                      xe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  us(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    xp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (V = h)) : xp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((s = d.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = fy("display", o))));
              } catch (g) {
                xe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                xe(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Pt(t, e), Ut(e), r & 4 && gp(e));
      break;
    case 21:
      break;
    default:
      (Pt(t, e), Ut(e));
  }
}
function Ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Di(s, ""), (r.flags &= -33));
          var i = yp(e);
          Rc(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = yp(e);
          Pc(e, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      xe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ib(e, t, n) {
  ((V = e), Bg(e));
}
function Bg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var s = V,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Fo;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || _e;
        a = Fo;
        var u = _e;
        if (((Fo = o), (_e = l) && !u))
          for (V = s; V !== null; )
            ((o = V),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wp(s)
                : l !== null
                  ? ((l.return = o), (V = l))
                  : wp(s));
        for (; i !== null; ) ((V = i), Bg(i), (i = i.sibling));
        ((V = s), (Fo = a), (_e = u));
      }
      vp(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : vp(e);
  }
}
function vp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && np(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                np(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Fi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        _e || (t.flags & 512 && kc(t));
      } catch (f) {
        xe(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function xp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function wp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (l) {
            xe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              xe(t, s, l);
            }
          }
          var i = t.return;
          try {
            kc(t);
          } catch (l) {
            xe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            kc(t);
          } catch (l) {
            xe(t, o, l);
          }
      }
    } catch (l) {
      xe(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (V = a));
      break;
    }
    V = t.return;
  }
}
var Fb = Math.ceil,
  za = Sn.ReactCurrentDispatcher,
  nf = Sn.ReactCurrentOwner,
  xt = Sn.ReactCurrentBatchConfig,
  te = 0,
  Ae = null,
  Ce = null,
  Me = 0,
  it = 0,
  cs = cr(0),
  Pe = 0,
  Gi = null,
  _r = 0,
  yl = 0,
  rf = 0,
  Ei = null,
  qe = null,
  sf = 0,
  zs = 1 / 0,
  ln = null,
  Ba = !1,
  Ac = null,
  Zn = null,
  Vo = !1,
  Wn = null,
  $a = 0,
  ki = 0,
  Nc = null,
  ua = -1,
  ca = 0;
function Ye() {
  return te & 6 ? we() : ua !== -1 ? ua : (ua = we());
}
function Jn(e) {
  return e.mode & 1
    ? te & 2 && Me !== 0
      ? Me & -Me
      : wb.transition !== null
        ? (ca === 0 && (ca = Ey()), ca)
        : ((e = se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : My(e.type))),
          e)
    : 1;
}
function Vt(e, t, n, r) {
  if (50 < ki) throw ((ki = 0), (Nc = null), Error(M(185)));
  (ao(e, n, r),
    (!(te & 2) || e !== Ae) &&
      (e === Ae && (!(te & 2) && (yl |= n), Pe === 4 && Fn(e, Me)),
      tt(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((zs = we() + 500), fl && dr())));
}
function tt(e, t) {
  var n = e.callbackNode;
  wS(e, t);
  var r = Ea(e, e === Ae ? Me : 0);
  if (r === 0)
    (n !== null && Ah(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ah(n), t === 1))
      (e.tag === 0 ? xb(Sp.bind(null, e)) : qy(Sp.bind(null, e)),
        mb(function () {
          !(te & 6) && dr();
        }),
        (n = null));
    else {
      switch (ky(r)) {
        case 1:
          n = Nd;
          break;
        case 4:
          n = Cy;
          break;
        case 16:
          n = Ta;
          break;
        case 536870912:
          n = Ty;
          break;
        default:
          n = Ta;
      }
      n = Qg(n, $g.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function $g(e, t) {
  if (((ua = -1), (ca = 0), te & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Ss() && e.callbackNode !== n) return null;
  var r = Ea(e, e === Ae ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ua(e, r);
  else {
    t = r;
    var s = te;
    te |= 2;
    var i = Wg();
    (Ae !== e || Me !== t) && ((ln = null), (zs = we() + 500), Dr(e, t));
    do
      try {
        zb();
        break;
      } catch (a) {
        Ug(e, a);
      }
    while (!0);
    (Ud(),
      (za.current = i),
      (te = s),
      Ce !== null ? (t = 0) : ((Ae = null), (Me = 0), (t = Pe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = rc(e)), s !== 0 && ((r = s), (t = jc(e, s)))), t === 1)
    )
      throw ((n = Gi), Dr(e, 0), Fn(e, r), tt(e, we()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Vb(s) &&
          ((t = Ua(e, r)),
          t === 2 && ((i = rc(e)), i !== 0 && ((r = i), (t = jc(e, i)))),
          t === 1))
      )
        throw ((n = Gi), Dr(e, 0), Fn(e, r), tt(e, we()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          wr(e, qe, ln);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = sf + 500 - we()), 10 < t))
          ) {
            if (Ea(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ye(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = dc(wr.bind(null, e, qe, ln), t);
            break;
          }
          wr(e, qe, ln);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Ft(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Fb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = dc(wr.bind(null, e, qe, ln), r);
            break;
          }
          wr(e, qe, ln);
          break;
        case 5:
          wr(e, qe, ln);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return (tt(e, we()), e.callbackNode === n ? $g.bind(null, e) : null);
}
function jc(e, t) {
  var n = Ei;
  return (
    e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256),
    (e = Ua(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Mc(t)),
    e
  );
}
function Mc(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function Vb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!_t(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Fn(e, t) {
  for (
    t &= ~rf,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Sp(e) {
  if (te & 6) throw Error(M(327));
  Ss();
  var t = Ea(e, 0);
  if (!(t & 1)) return (tt(e, we()), null);
  var n = Ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rc(e);
    r !== 0 && ((t = r), (n = jc(e, r)));
  }
  if (n === 1) throw ((n = Gi), Dr(e, 0), Fn(e, t), tt(e, we()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wr(e, qe, ln),
    tt(e, we()),
    null
  );
}
function of(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    ((te = n), te === 0 && ((zs = we() + 500), fl && dr()));
  }
}
function zr(e) {
  Wn !== null && Wn.tag === 0 && !(te & 6) && Ss();
  var t = te;
  te |= 1;
  var n = xt.transition,
    r = se;
  try {
    if (((xt.transition = null), (se = 1), e)) return e();
  } finally {
    ((se = r), (xt.transition = n), (te = t), !(te & 6) && dr());
  }
}
function af() {
  ((it = cs.current), ce(cs));
}
function Dr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pb(n)), Ce !== null))
    for (n = Ce.return; n !== null; ) {
      var r = n;
      switch ((zd(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Na());
          break;
        case 3:
          (Vs(), ce(Je), ce(Be), Qd());
          break;
        case 5:
          Gd(r);
          break;
        case 4:
          Vs();
          break;
        case 13:
          ce(pe);
          break;
        case 19:
          ce(pe);
          break;
        case 10:
          Wd(r.type._context);
          break;
        case 22:
        case 23:
          af();
      }
      n = n.return;
    }
  if (
    ((Ae = e),
    (Ce = e = er(e.current, null)),
    (Me = it = t),
    (Pe = 0),
    (Gi = null),
    (rf = yl = _r = 0),
    (qe = Ei = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function Ug(e, t) {
  do {
    var n = Ce;
    try {
      if ((Ud(), (oa.current = _a), Va)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Va = !1;
      }
      if (
        ((Vr = 0),
        (Re = Ee = ye = null),
        (Ci = !1),
        (Hi = 0),
        (nf.current = null),
        n === null || n.return === null)
      ) {
        ((Pe = 1), (Gi = t), (Ce = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = lp(o);
          if (h !== null) {
            ((h.flags &= -257),
              up(h, o, a, i, t),
              h.mode & 1 && ap(i, u, t),
              (t = h),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (ap(i, u, t), lf());
              break e;
            }
            l = Error(M(426));
          }
        } else if (fe && a.mode & 1) {
          var S = lp(o);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              up(S, o, a, i, t),
              Bd(_s(l, a)));
            break e;
          }
        }
        ((i = l = _s(l, a)),
          Pe !== 4 && (Pe = 2),
          Ei === null ? (Ei = [i]) : Ei.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = kg(i, l, t);
              tp(i, m);
              break e;
            case 1:
              a = l;
              var y = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Zn === null || !Zn.has(x))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var b = Pg(i, a, t);
                tp(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Kg(n);
    } catch (C) {
      ((t = C), Ce === n && n !== null && (Ce = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Wg() {
  var e = za.current;
  return ((za.current = _a), e === null ? _a : e);
}
function lf() {
  ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Ae === null || (!(_r & 268435455) && !(yl & 268435455)) || Fn(Ae, Me));
}
function Ua(e, t) {
  var n = te;
  te |= 2;
  var r = Wg();
  (Ae !== e || Me !== t) && ((ln = null), Dr(e, t));
  do
    try {
      _b();
      break;
    } catch (s) {
      Ug(e, s);
    }
  while (!0);
  if ((Ud(), (te = n), (za.current = r), Ce !== null)) throw Error(M(261));
  return ((Ae = null), (Me = 0), Pe);
}
function _b() {
  for (; Ce !== null; ) Hg(Ce);
}
function zb() {
  for (; Ce !== null && !dS(); ) Hg(Ce);
}
function Hg(e) {
  var t = Gg(e.alternate, e, it);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Kg(e) : (Ce = t),
    (nf.current = null));
}
function Kg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Db(n, t)), n !== null)) {
        ((n.flags &= 32767), (Ce = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Pe = 6), (Ce = null));
        return;
      }
    } else if (((n = Mb(n, t, it)), n !== null)) {
      Ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function wr(e, t, n) {
  var r = se,
    s = xt.transition;
  try {
    ((xt.transition = null), (se = 1), Bb(e, t, n, r));
  } finally {
    ((xt.transition = s), (se = r));
  }
  return null;
}
function Bb(e, t, n, r) {
  do Ss();
  while (Wn !== null);
  if (te & 6) throw Error(M(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (SS(e, i),
    e === Ae && ((Ce = Ae = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vo ||
      ((Vo = !0),
      Qg(Ta, function () {
        return (Ss(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = xt.transition), (xt.transition = null));
    var o = se;
    se = 1;
    var a = te;
    ((te |= 4),
      (nf.current = null),
      Ob(e, n),
      zg(n, e),
      ab(uc),
      (ka = !!lc),
      (uc = lc = null),
      (e.current = n),
      Ib(n),
      fS(),
      (te = a),
      (se = o),
      (xt.transition = i));
  } else e.current = n;
  if (
    (Vo && ((Vo = !1), (Wn = e), ($a = s)),
    (i = e.pendingLanes),
    i === 0 && (Zn = null),
    mS(n.stateNode),
    tt(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ba) throw ((Ba = !1), (e = Ac), (Ac = null), e);
  return (
    $a & 1 && e.tag !== 0 && Ss(),
    (i = e.pendingLanes),
    i & 1 ? (e === Nc ? ki++ : ((ki = 0), (Nc = e))) : (ki = 0),
    dr(),
    null
  );
}
function Ss() {
  if (Wn !== null) {
    var e = ky($a),
      t = xt.transition,
      n = se;
    try {
      if (((xt.transition = null), (se = 16 > e ? 16 : e), Wn === null))
        var r = !1;
      else {
        if (((e = Wn), (Wn = null), ($a = 0), te & 6)) throw Error(M(331));
        var s = te;
        for (te |= 4, V = e.current; V !== null; ) {
          var i = V,
            o = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (V = d));
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        h = c.return;
                      if ((Fg(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (V = f));
                        break;
                      }
                      V = h;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    ((g.sibling = null), (g = S));
                  } while (g !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (V = o));
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ti(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (V = m));
                break e;
              }
              V = i.return;
            }
        }
        var y = e.current;
        for (V = y; V !== null; ) {
          o = V;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) ((x.return = o), (V = x));
          else
            e: for (o = y; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, a);
                  }
                } catch (C) {
                  xe(a, a.return, C);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                ((b.return = a.return), (V = b));
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((te = s), dr(), qt && typeof qt.onPostCommitFiberRoot == "function")
        )
          try {
            qt.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((se = n), (xt.transition = t));
    }
  }
  return !1;
}
function bp(e, t, n) {
  ((t = _s(n, t)),
    (t = kg(e, t, 1)),
    (e = qn(e, t, 1)),
    (t = Ye()),
    e !== null && (ao(e, 1, t), tt(e, t)));
}
function xe(e, t, n) {
  if (e.tag === 3) bp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zn === null || !Zn.has(r)))
        ) {
          ((e = _s(n, e)),
            (e = Pg(t, e, 1)),
            (t = qn(t, e, 1)),
            (e = Ye()),
            t !== null && (ao(t, 1, e), tt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function $b(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ae === e &&
      (Me & n) === n &&
      (Pe === 4 || (Pe === 3 && (Me & 130023424) === Me && 500 > we() - sf)
        ? Dr(e, 0)
        : (rf |= n)),
    tt(e, t));
}
function Yg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ro), (Ro <<= 1), !(Ro & 130023424) && (Ro = 4194304))
      : (t = 1));
  var n = Ye();
  ((e = yn(e, t)), e !== null && (ao(e, t, n), tt(e, n)));
}
function Ub(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Yg(e, n));
}
function Wb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  (r !== null && r.delete(t), Yg(e, n));
}
var Gg;
Gg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ze = !1), jb(e, t, n));
      Ze = !!(e.flags & 131072);
    }
  else ((Ze = !1), fe && t.flags & 1048576 && Zy(t, Da, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (la(e, t), (e = t.pendingProps));
      var s = Os(t, Be.current);
      (ws(t, n), (s = qd(null, t, r, e, s, n)));
      var i = Zd();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((i = !0), ja(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Kd(t),
            (s.updater = pl),
            (t.stateNode = s),
            (s._reactInternals = t),
            vc(t, r, e, n),
            (t = Sc(null, t, r, !0, i, n)))
          : ((t.tag = 0), fe && i && _d(t), Ue(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (la(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Kb(r)),
          (e = jt(r, e)),
          s)
        ) {
          case 0:
            t = wc(null, t, r, e, n);
            break e;
          case 1:
            t = fp(null, t, r, e, n);
            break e;
          case 11:
            t = cp(null, t, r, e, n);
            break e;
          case 14:
            t = dp(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        wc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        fp(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((jg(t), e === null)) throw Error(M(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          sg(e, t),
          Ia(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = _s(Error(M(423)), t)), (t = hp(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = _s(Error(M(424)), t)), (t = hp(e, t, r, n, s)));
            break e;
          } else
            for (
              at = Xn(t.stateNode.containerInfo.firstChild),
                lt = t,
                fe = !0,
                It = null,
                n = ng(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Is(), r === s)) {
            t = gn(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ig(t),
        e === null && mc(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        cc(r, s) ? (o = null) : i !== null && cc(r, i) && (t.flags |= 32),
        Ng(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && mc(t), null);
    case 13:
      return Mg(e, t, n);
    case 4:
      return (
        Yd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fs(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        cp(e, t, r, s, n)
      );
    case 7:
      return (Ue(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ue(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ue(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          oe(La, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (_t(i.value, o)) {
            if (i.children === s.children && !Je.current) {
              t = gn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = hn(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      yc(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(M(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  yc(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Ue(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        ws(t, n),
        (s = bt(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = jt(r, t.pendingProps)),
        (s = jt(r.type, s)),
        dp(e, t, r, s, n)
      );
    case 15:
      return Rg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        la(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), ja(t)) : (e = !1),
        ws(t, n),
        Eg(t, r, s),
        vc(t, r, s, n),
        Sc(null, t, r, !0, e, n)
      );
    case 19:
      return Dg(e, t, n);
    case 22:
      return Ag(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Qg(e, t) {
  return by(e, t);
}
function Hb(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function gt(e, t, n, r) {
  return new Hb(e, t, n, r);
}
function uf(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Kb(e) {
  if (typeof e == "function") return uf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pd)) return 11;
    if (e === Rd) return 14;
  }
  return 2;
}
function er(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function da(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) uf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case es:
        return Lr(n.children, s, i, t);
      case kd:
        ((o = 8), (s |= 8));
        break;
      case $u:
        return (
          (e = gt(12, n, t, s | 2)),
          (e.elementType = $u),
          (e.lanes = i),
          e
        );
      case Uu:
        return ((e = gt(13, n, t, s)), (e.elementType = Uu), (e.lanes = i), e);
      case Wu:
        return ((e = gt(19, n, t, s)), (e.elementType = Wu), (e.lanes = i), e);
      case iy:
        return gl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ry:
              o = 10;
              break e;
            case sy:
              o = 9;
              break e;
            case Pd:
              o = 11;
              break e;
            case Rd:
              o = 14;
              break e;
            case Ln:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Lr(e, t, n, r) {
  return ((e = gt(7, e, r, t)), (e.lanes = n), e);
}
function gl(e, t, n, r) {
  return (
    (e = gt(22, e, r, t)),
    (e.elementType = iy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mu(e, t, n) {
  return ((e = gt(6, e, null, t)), (e.lanes = n), e);
}
function yu(e, t, n) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Yb(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function cf(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new Yb(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Kd(i),
    e
  );
}
function Gb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xg(e) {
  if (!e) return nr;
  e = e._reactInternals;
  e: {
    if (Ur(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return Xy(e, n, t);
  }
  return t;
}
function qg(e, t, n, r, s, i, o, a, l) {
  return (
    (e = cf(n, r, !0, e, s, i, o, a, l)),
    (e.context = Xg(null)),
    (n = e.current),
    (r = Ye()),
    (s = Jn(n)),
    (i = hn(r, s)),
    (i.callback = t ?? null),
    qn(n, i, s),
    (e.current.lanes = s),
    ao(e, s, r),
    tt(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var s = t.current,
    i = Ye(),
    o = Jn(s);
  return (
    (n = Xg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qn(s, t, o)),
    e !== null && (Vt(e, s, o, i), ia(e, s, o)),
    o
  );
}
function Wa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function df(e, t) {
  (Cp(e, t), (e = e.alternate) && Cp(e, t));
}
function Qb() {
  return null;
}
var Zg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ff(e) {
  this._internalRoot = e;
}
xl.prototype.render = ff.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  vl(e, t, null, null);
};
xl.prototype.unmount = ff.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (zr(function () {
      vl(null, e, null, null);
    }),
      (t[mn] = null));
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ay();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    (In.splice(n, 0, e), n === 0 && jy(e));
  }
};
function hf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tp() {}
function Xb(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Wa(o);
        i.call(u);
      };
    }
    var o = qg(t, r, e, 0, null, !1, !1, "", Tp);
    return (
      (e._reactRootContainer = o),
      (e[mn] = o.current),
      zi(e.nodeType === 8 ? e.parentNode : e),
      zr(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Wa(l);
      a.call(u);
    };
  }
  var l = cf(e, 0, !1, null, null, !1, !1, "", Tp);
  return (
    (e._reactRootContainer = l),
    (e[mn] = l.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      vl(t, l, n, r);
    }),
    l
  );
}
function Sl(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Wa(o);
        a.call(l);
      };
    }
    vl(t, o, e, s);
  } else o = Xb(n, t, e, s, r);
  return Wa(o);
}
Py = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mi(t.pendingLanes);
        n !== 0 &&
          (jd(t, n | 1), tt(t, we()), !(te & 6) && ((zs = we() + 500), dr()));
      }
      break;
    case 13:
      (zr(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var s = Ye();
          Vt(r, e, 1, s);
        }
      }),
        df(e, 1));
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = Ye();
      Vt(t, e, 134217728, n);
    }
    df(e, 134217728);
  }
};
Ry = function (e) {
  if (e.tag === 13) {
    var t = Jn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = Ye();
      Vt(n, e, t, r);
    }
    df(e, t);
  }
};
Ay = function () {
  return se;
};
Ny = function (e, t) {
  var n = se;
  try {
    return ((se = e), t());
  } finally {
    se = n;
  }
};
ec = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = dl(r);
            if (!s) throw Error(M(90));
            (ay(r), Yu(r, s));
          }
        }
      }
      break;
    case "textarea":
      uy(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ys(e, !!n.multiple, t, !1));
  }
};
yy = of;
gy = zr;
var qb = { usingClientEntryPoint: !1, Events: [uo, ss, dl, py, my, of] },
  ui = {
    findFiberByHostInstance: br,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Zb = {
    bundleType: ui.bundleType,
    version: ui.version,
    rendererPackageName: ui.rendererPackageName,
    rendererConfig: ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = wy(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ui.findFiberByHostInstance || Qb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_o.isDisabled && _o.supportsFiber)
    try {
      ((al = _o.inject(Zb)), (qt = _o));
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qb;
dt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hf(t)) throw Error(M(200));
  return Gb(e, t, null, n);
};
dt.createRoot = function (e, t) {
  if (!hf(e)) throw Error(M(299));
  var n = !1,
    r = "",
    s = Zg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = cf(e, 1, !1, null, null, n, !1, r, s)),
    (e[mn] = t.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    new ff(t)
  );
};
dt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return ((e = wy(t)), (e = e === null ? null : e.stateNode), e);
};
dt.flushSync = function (e) {
  return zr(e);
};
dt.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(M(200));
  return Sl(null, e, t, !0, n);
};
dt.hydrateRoot = function (e, t, n) {
  if (!hf(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Zg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = qg(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[mn] = t.current),
    zi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new xl(t);
};
dt.render = function (e, t, n) {
  if (!wl(t)) throw Error(M(200));
  return Sl(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (zr(function () {
        Sl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[mn] = null));
        });
      }),
      !0)
    : !1;
};
dt.unstable_batchedUpdates = of;
dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Sl(e, t, n, !1, r);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function Jg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg);
    } catch (e) {
      console.error(e);
    }
}
(Jg(), (J0.exports = dt));
var fo = J0.exports;
const ev = z0(fo);
var tv,
  Ep = fo;
((tv = Ep.createRoot), Ep.hydrateRoot);
const Jb = 1,
  e5 = 1e6;
let gu = 0;
function t5() {
  return ((gu = (gu + 1) % Number.MAX_SAFE_INTEGER), gu.toString());
}
const vu = new Map(),
  kp = (e) => {
    if (vu.has(e)) return;
    const t = setTimeout(() => {
      (vu.delete(e), Pi({ type: "REMOVE_TOAST", toastId: e }));
    }, e5);
    vu.set(e, t);
  },
  n5 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Jb) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? kp(n)
            : e.toasts.forEach((r) => {
                kp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  fa = [];
let ha = { toasts: [] };
function Pi(e) {
  ((ha = n5(ha, e)),
    fa.forEach((t) => {
      t(ha);
    }));
}
function r5({ ...e }) {
  const t = t5(),
    n = (s) => Pi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    r = () => Pi({ type: "DISMISS_TOAST", toastId: t });
  return (
    Pi({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function s5() {
  const [e, t] = w.useState(ha);
  return (
    w.useEffect(
      () => (
        fa.push(t),
        () => {
          const n = fa.indexOf(t);
          n > -1 && fa.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: r5,
      dismiss: (n) => Pi({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Pp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function nv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Pp(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Pp(e[s], null);
        }
      };
  };
}
function zt(...e) {
  return w.useCallback(nv(...e), e);
}
function bl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = w.createContext(o),
      l = n.length;
    n = [...n, o];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...v } = d,
        g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        S = w.useMemo(() => v, Object.values(v));
      return p.jsx(g.Provider, { value: S, children: h });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = w.useContext(h);
      if (v) return v;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = n.map((o) => w.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [r, i5(s, ...t)]);
}
function i5(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Dc(e) {
  const t = o5(e),
    n = w.forwardRef((r, s) => {
      const { children: i, ...o } = r,
        a = w.Children.toArray(i),
        l = a.find(l5);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return p.jsx(t, {
          ...o,
          ref: s,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return p.jsx(t, { ...o, ref: s, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function o5(e) {
  const t = w.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (w.isValidElement(s)) {
      const o = c5(s),
        a = u5(i, s.props);
      return (
        s.type !== w.Fragment && (a.ref = r ? nv(r, o) : o),
        w.cloneElement(s, a)
      );
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var rv = Symbol("radix.slottable");
function a5(e) {
  const t = ({ children: n }) => p.jsx(p.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = rv), t);
}
function l5(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === rv
  );
}
function u5(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (s(...a), l);
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...i })
        : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function c5(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function d5(e) {
  const t = e + "CollectionProvider",
    [n, r] = bl(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (g) => {
      const { scope: S, children: m } = g,
        y = L.useRef(null),
        x = L.useRef(new Map()).current;
      return p.jsx(s, { scope: S, itemMap: x, collectionRef: y, children: m });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Dc(a),
    u = L.forwardRef((g, S) => {
      const { scope: m, children: y } = g,
        x = i(a, m),
        b = zt(S, x.collectionRef);
      return p.jsx(l, { ref: b, children: y });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Dc(c),
    h = L.forwardRef((g, S) => {
      const { scope: m, children: y, ...x } = g,
        b = L.useRef(null),
        C = zt(S, b),
        T = i(c, m);
      return (
        L.useEffect(
          () => (
            T.itemMap.set(b, { ref: b, ...x }),
            () => void T.itemMap.delete(b)
          ),
        ),
        p.jsx(f, { [d]: "", ref: C, children: y })
      );
    });
  h.displayName = c;
  function v(g) {
    const S = i(e + "CollectionConsumer", g);
    return L.useCallback(() => {
      const y = S.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (T, E) => x.indexOf(T.ref.current) - x.indexOf(E.ref.current),
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: h }, v, r];
}
var f5 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  st = f5.reduce((e, t) => {
    const n = Dc(`Primitive.${t}`),
      r = w.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function sv(e, t) {
  e && fo.flushSync(() => e.dispatchEvent(t));
}
function rr(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function h5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e);
  w.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var p5 = "DismissableLayer",
  Lc = "dismissableLayer.update",
  m5 = "dismissableLayer.pointerDownOutside",
  y5 = "dismissableLayer.focusOutside",
  Rp,
  iv = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  pf = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      u = w.useContext(iv),
      [c, d] = w.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = w.useState({}),
      v = zt(t, (E) => d(E)),
      g = Array.from(u.layers),
      [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(S),
      y = c ? g.indexOf(c) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = y >= m,
      C = v5((E) => {
        const k = E.target,
          N = [...u.branches].some((j) => j.contains(k));
        !b ||
          N ||
          (s == null || s(E),
          o == null || o(E),
          E.defaultPrevented || a == null || a());
      }, f),
      T = x5((E) => {
        const k = E.target;
        [...u.branches].some((j) => j.contains(k)) ||
          (i == null || i(E),
          o == null || o(E),
          E.defaultPrevented || a == null || a());
      }, f);
    return (
      h5((E) => {
        y === u.layers.size - 1 &&
          (r == null || r(E),
          !E.defaultPrevented && a && (E.preventDefault(), a()));
      }, f),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ap(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Rp);
            }
          );
      }, [c, f, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Ap());
        },
        [c, u],
      ),
      w.useEffect(() => {
        const E = () => h({});
        return (
          document.addEventListener(Lc, E),
          () => document.removeEventListener(Lc, E)
        );
      }, []),
      p.jsx(st.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ke(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: ke(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: ke(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
pf.displayName = p5;
var g5 = "DismissableLayerBranch",
  ov = w.forwardRef((e, t) => {
    const n = w.useContext(iv),
      r = w.useRef(null),
      s = zt(t, r);
    return (
      w.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(st.div, { ...e, ref: s })
    );
  });
ov.displayName = g5;
function v5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e),
    r = w.useRef(!1),
    s = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              av(m5, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function x5(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          av(y5, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ap() {
  const e = new CustomEvent(Lc);
  document.dispatchEvent(e);
}
function av(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? sv(s, i) : s.dispatchEvent(i));
}
var w5 = pf,
  S5 = ov,
  sr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  b5 = "Portal",
  lv = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = w.useState(!1);
    sr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? ev.createPortal(p.jsx(st.div, { ...r, ref: t }), o) : null;
  });
lv.displayName = b5;
function C5(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var mf = (e) => {
  const { present: t, children: n } = e,
    r = T5(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    i = zt(r.ref, E5(s));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(s, { ref: i })
    : null;
};
mf.displayName = "Presence";
function T5(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    s = w.useRef(e),
    i = w.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = C5(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = zo(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    sr(() => {
      const u = r.current,
        c = s.current;
      if (c !== e) {
        const f = i.current,
          h = zo(u);
        (e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    sr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const g = zo(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !s.current)) {
              const S = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = S);
                })));
            }
          },
          f = (h) => {
            h.target === t && (i.current = zo(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function zo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function E5(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var k5 = q0[" useInsertionEffect ".trim().toString()] || sr;
function P5({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [s, i, o] = R5({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const c = w.useRef(e !== void 0);
    w.useEffect(() => {
      const d = c.current;
      (d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = w.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = A5(c) ? c(e) : c;
        f !== e && ((d = o.current) == null || d.call(o, f));
      } else i(c);
    },
    [a, e, i, o],
  );
  return [l, u];
}
function R5({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    s = w.useRef(n),
    i = w.useRef(t);
  return (
    k5(() => {
      i.current = t;
    }, [t]),
    w.useEffect(() => {
      var o;
      s.current !== n &&
        ((o = i.current) == null || o.call(i, n), (s.current = n));
    }, [n, s]),
    [n, r, i]
  );
}
function A5(e) {
  return typeof e == "function";
}
var N5 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  j5 = "VisuallyHidden",
  Cl = w.forwardRef((e, t) =>
    p.jsx(st.span, { ...e, ref: t, style: { ...N5, ...e.style } }),
  );
Cl.displayName = j5;
var M5 = Cl,
  yf = "ToastProvider",
  [gf, D5, L5] = d5("Toast"),
  [uv, ON] = bl("Toast", [L5]),
  [O5, Tl] = uv(yf),
  cv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = w.useState(null),
      [u, c] = w.useState(0),
      d = w.useRef(!1),
      f = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${yf}\`. Expected non-empty \`string\`.`,
        ),
      p.jsx(gf.Provider, {
        scope: t,
        children: p.jsx(O5, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => c((h) => h + 1), []),
          onToastRemove: w.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
cv.displayName = yf;
var dv = "ToastViewport",
  I5 = ["F8"],
  Oc = "toast.viewportPause",
  Ic = "toast.viewportResume",
  fv = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = I5,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = Tl(dv, n),
      a = D5(n),
      l = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(null),
      d = w.useRef(null),
      f = zt(t, d, o.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = o.toastCount > 0;
    (w.useEffect(() => {
      const S = (m) => {
        var x;
        r.length !== 0 &&
          r.every((b) => m[b] || m.code === b) &&
          ((x = d.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
      );
    }, [r]),
      w.useEffect(() => {
        const S = l.current,
          m = d.current;
        if (v && S && m) {
          const y = () => {
              if (!o.isClosePausedRef.current) {
                const T = new CustomEvent(Oc);
                (m.dispatchEvent(T), (o.isClosePausedRef.current = !0));
              }
            },
            x = () => {
              if (o.isClosePausedRef.current) {
                const T = new CustomEvent(Ic);
                (m.dispatchEvent(T), (o.isClosePausedRef.current = !1));
              }
            },
            b = (T) => {
              !S.contains(T.relatedTarget) && x();
            },
            C = () => {
              S.contains(document.activeElement) || x();
            };
          return (
            S.addEventListener("focusin", y),
            S.addEventListener("focusout", b),
            S.addEventListener("pointermove", y),
            S.addEventListener("pointerleave", C),
            window.addEventListener("blur", y),
            window.addEventListener("focus", x),
            () => {
              (S.removeEventListener("focusin", y),
                S.removeEventListener("focusout", b),
                S.removeEventListener("pointermove", y),
                S.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", y),
                window.removeEventListener("focus", x));
            }
          );
        }
      }, [v, o.isClosePausedRef]));
    const g = w.useCallback(
      ({ tabbingDirection: S }) => {
        const y = a().map((x) => {
          const b = x.ref.current,
            C = [b, ...Q5(b)];
          return S === "forwards" ? C : C.reverse();
        });
        return (S === "forwards" ? y.reverse() : y).flat();
      },
      [a],
    );
    return (
      w.useEffect(() => {
        const S = d.current;
        if (S) {
          const m = (y) => {
            var C, T, E;
            const x = y.altKey || y.ctrlKey || y.metaKey;
            if (y.key === "Tab" && !x) {
              const k = document.activeElement,
                N = y.shiftKey;
              if (y.target === S && N) {
                (C = u.current) == null || C.focus();
                return;
              }
              const F = g({ tabbingDirection: N ? "backwards" : "forwards" }),
                Q = F.findIndex((O) => O === k);
              xu(F.slice(Q + 1))
                ? y.preventDefault()
                : N
                  ? (T = u.current) == null || T.focus()
                  : (E = c.current) == null || E.focus();
            }
          };
          return (
            S.addEventListener("keydown", m),
            () => S.removeEventListener("keydown", m)
          );
        }
      }, [a, g]),
      p.jsxs(S5, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            p.jsx(Fc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "forwards" });
                xu(S);
              },
            }),
          p.jsx(gf.Slot, {
            scope: n,
            children: p.jsx(st.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          v &&
            p.jsx(Fc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const S = g({ tabbingDirection: "backwards" });
                xu(S);
              },
            }),
        ],
      })
    );
  });
fv.displayName = dv;
var hv = "ToastFocusProxy",
  Fc = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
      i = Tl(hv, n);
    return p.jsx(Cl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Fc.displayName = hv;
var ho = "Toast",
  F5 = "toast.swipeStart",
  V5 = "toast.swipeMove",
  _5 = "toast.swipeCancel",
  z5 = "toast.swipeEnd",
  pv = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = P5({ prop: r, defaultProp: s ?? !0, onChange: i, caller: ho });
    return p.jsx(mf, {
      present: n || a,
      children: p.jsx(U5, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: rr(e.onPause),
        onResume: rr(e.onResume),
        onSwipeStart: ke(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ke(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: ke(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: ke(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
pv.displayName = ho;
var [B5, $5] = uv(ho, { onClose() {} }),
  U5 = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = Tl(ho, n),
      [S, m] = w.useState(null),
      y = zt(t, (O) => m(O)),
      x = w.useRef(null),
      b = w.useRef(null),
      C = s || g.duration,
      T = w.useRef(0),
      E = w.useRef(C),
      k = w.useRef(0),
      { onToastAdd: N, onToastRemove: j } = g,
      B = rr(() => {
        var q;
        ((S == null ? void 0 : S.contains(document.activeElement)) &&
          ((q = g.viewport) == null || q.focus()),
          o());
      }),
      F = w.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(k.current),
            (T.current = new Date().getTime()),
            (k.current = window.setTimeout(B, O)));
        },
        [B],
      );
    (w.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const q = () => {
            (F(E.current), u == null || u());
          },
          W = () => {
            const z = new Date().getTime() - T.current;
            ((E.current = E.current - z),
              window.clearTimeout(k.current),
              l == null || l());
          };
        return (
          O.addEventListener(Oc, W),
          O.addEventListener(Ic, q),
          () => {
            (O.removeEventListener(Oc, W), O.removeEventListener(Ic, q));
          }
        );
      }
    }, [g.viewport, C, l, u, F]),
      w.useEffect(() => {
        i && !g.isClosePausedRef.current && F(C);
      }, [i, C, g.isClosePausedRef, F]),
      w.useEffect(() => (N(), () => j()), [N, j]));
    const Q = w.useMemo(() => (S ? Sv(S) : null), [S]);
    return g.viewport
      ? p.jsxs(p.Fragment, {
          children: [
            Q &&
              p.jsx(W5, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            p.jsx(B5, {
              scope: n,
              onClose: B,
              children: fo.createPortal(
                p.jsx(gf.ItemSlot, {
                  scope: n,
                  children: p.jsx(w5, {
                    asChild: !0,
                    onEscapeKeyDown: ke(a, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || B(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: p.jsx(st.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: y,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ke(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            B()));
                      }),
                      onPointerDown: ke(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (x.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: ke(e.onPointerMove, (O) => {
                        if (!x.current) return;
                        const q = O.clientX - x.current.x,
                          W = O.clientY - x.current.y,
                          z = !!b.current,
                          P = ["left", "right"].includes(g.swipeDirection),
                          A = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = P ? A(0, q) : 0,
                          H = P ? 0 : A(0, W),
                          U = O.pointerType === "touch" ? 10 : 2,
                          Z = { x: I, y: H },
                          ee = { originalEvent: O, delta: Z };
                        z
                          ? ((b.current = Z), Bo(V5, d, ee, { discrete: !1 }))
                          : Np(Z, g.swipeDirection, U)
                            ? ((b.current = Z),
                              Bo(F5, c, ee, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(q) > U || Math.abs(W) > U) &&
                              (x.current = null);
                      }),
                      onPointerUp: ke(e.onPointerUp, (O) => {
                        const q = b.current,
                          W = O.target;
                        if (
                          (W.hasPointerCapture(O.pointerId) &&
                            W.releasePointerCapture(O.pointerId),
                          (b.current = null),
                          (x.current = null),
                          q)
                        ) {
                          const z = O.currentTarget,
                            P = { originalEvent: O, delta: q };
                          (Np(q, g.swipeDirection, g.swipeThreshold)
                            ? Bo(z5, h, P, { discrete: !0 })
                            : Bo(_5, f, P, { discrete: !0 }),
                            z.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  W5 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      s = Tl(ho, t),
      [i, o] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      Y5(() => o(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : p.jsx(lv, {
            asChild: !0,
            children: p.jsx(Cl, {
              ...r,
              children:
                i && p.jsxs(p.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  H5 = "ToastTitle",
  mv = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(st.div, { ...r, ref: t });
  });
mv.displayName = H5;
var K5 = "ToastDescription",
  yv = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(st.div, { ...r, ref: t });
  });
yv.displayName = K5;
var gv = "ToastAction",
  vv = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? p.jsx(wv, {
          altText: n,
          asChild: !0,
          children: p.jsx(vf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${gv}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
vv.displayName = gv;
var xv = "ToastClose",
  vf = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      s = $5(xv, n);
    return p.jsx(wv, {
      asChild: !0,
      children: p.jsx(st.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ke(e.onClick, s.onClose),
      }),
    });
  });
vf.displayName = xv;
var wv = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return p.jsx(st.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t,
  });
});
function Sv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        G5(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...Sv(r));
      }
    }),
    t
  );
}
function Bo(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? sv(s, i) : s.dispatchEvent(i));
}
var Np = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    i = r > s;
  return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function Y5(e = () => {}) {
  const t = rr(e);
  sr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function G5(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Q5(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var X5 = cv,
  bv = fv,
  Cv = pv,
  Tv = mv,
  Ev = yv,
  kv = vv,
  Pv = vf;
function Rv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Rv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Av() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Rv(e)) && (r && (r += " "), (r += t));
  return r;
}
const jp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Mp = Av,
  q5 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Mp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = jp(c) || jp(d);
        return s[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return (f === void 0 || (u[d] = f), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((v) => {
                let [g, S] = v;
                return Array.isArray(S)
                  ? S.includes({ ...i, ...a }[g])
                  : { ...i, ...a }[g] === S;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Mp(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z5 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Nv = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e2 = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...J5,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Nv("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, c]) => w.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t2 = (e, t) => {
  const n = w.forwardRef(({ className: r, ...s }, i) =>
    w.createElement(e2, {
      ref: i,
      iconNode: t,
      className: Nv(`lucide-${Z5(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n2 = t2("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  xf = "-",
  r2 = (e) => {
    const t = i2(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(xf);
        return (a[0] === "" && a.length !== 1 && a.shift(), jv(a, t) || s2(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  jv = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? jv(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(xf);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Dp = /^\[(.+)\]$/,
  s2 = (e) => {
    if (Dp.test(e)) {
      const t = Dp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  i2 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      a2(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        Vc(o, r, i, t);
      }),
      r
    );
  },
  Vc = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Lp(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (o2(s)) {
          Vc(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Vc(o, Lp(t, i), n, r);
      });
    });
  },
  Lp = (e, t) => {
    let n = e;
    return (
      t.split(xf).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  o2 = (e) => e.isThemeGetter,
  a2 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [n, s];
        })
      : e,
  l2 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  Mv = "!",
  u2 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let S = 0; S < a.length; S++) {
          let m = a[S];
          if (u === 0) {
            if (m === s && (r || a.slice(S, S + i) === t)) {
              (l.push(a.slice(c, S)), (c = S + i));
              continue;
            }
            if (m === "/") {
              d = S;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(Mv),
          v = h ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  c2 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  d2 = (e) => ({ cache: l2(e.cacheSize), parseClassName: u2(e), ...r2(e) }),
  f2 = /\s+/,
  h2 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(f2);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const S = c2(c).join(":"),
        m = d ? S + Mv : S,
        y = m + g;
      if (i.includes(y)) continue;
      i.push(y);
      const x = s(g, v);
      for (let b = 0; b < x.length; ++b) {
        const C = x[b];
        i.push(m + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function p2() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Dv(t)) && (r && (r += " "), (r += n));
  return r;
}
const Dv = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Dv(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function m2(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const u = t.reduce((c, d) => d(c), e());
    return ((n = d2(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = h2(l, n);
    return (s(l, c), c);
  }
  return function () {
    return i(p2.apply(null, arguments));
  };
}
const le = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Lv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  y2 = /^\d+\/\d+$/,
  g2 = new Set(["px", "full", "screen"]),
  v2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  x2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  w2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  S2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  b2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  on = (e) => bs(e) || g2.has(e) || y2.test(e),
  An = (e) => Gs(e, "length", N2),
  bs = (e) => !!e && !Number.isNaN(Number(e)),
  wu = (e) => Gs(e, "number", bs),
  ci = (e) => !!e && Number.isInteger(Number(e)),
  C2 = (e) => e.endsWith("%") && bs(e.slice(0, -1)),
  X = (e) => Lv.test(e),
  Nn = (e) => v2.test(e),
  T2 = new Set(["length", "size", "percentage"]),
  E2 = (e) => Gs(e, T2, Ov),
  k2 = (e) => Gs(e, "position", Ov),
  P2 = new Set(["image", "url"]),
  R2 = (e) => Gs(e, P2, M2),
  A2 = (e) => Gs(e, "", j2),
  di = () => !0,
  Gs = (e, t, n) => {
    const r = Lv.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  N2 = (e) => x2.test(e) && !w2.test(e),
  Ov = () => !1,
  j2 = (e) => S2.test(e),
  M2 = (e) => b2.test(e),
  D2 = () => {
    const e = le("colors"),
      t = le("spacing"),
      n = le("blur"),
      r = le("brightness"),
      s = le("borderColor"),
      i = le("borderRadius"),
      o = le("borderSpacing"),
      a = le("borderWidth"),
      l = le("contrast"),
      u = le("grayscale"),
      c = le("hueRotate"),
      d = le("invert"),
      f = le("gap"),
      h = le("gradientColorStops"),
      v = le("gradientColorStopPositions"),
      g = le("inset"),
      S = le("margin"),
      m = le("opacity"),
      y = le("padding"),
      x = le("saturate"),
      b = le("scale"),
      C = le("sepia"),
      T = le("skew"),
      E = le("space"),
      k = le("translate"),
      N = () => ["auto", "contain", "none"],
      j = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", X, t],
      F = () => [X, t],
      Q = () => ["", on, An],
      O = () => ["auto", bs, X],
      q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      W = () => ["solid", "dashed", "dotted", "double", "none"],
      z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", X],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      H = () => [bs, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [di],
        spacing: [on, An],
        blur: ["none", "", Nn, X],
        brightness: H(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Nn, X],
        borderSpacing: F(),
        borderWidth: Q(),
        contrast: H(),
        grayscale: A(),
        hueRotate: H(),
        invert: A(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [C2, An],
        inset: B(),
        margin: B(),
        opacity: H(),
        padding: F(),
        saturate: H(),
        scale: H(),
        sepia: A(),
        skew: H(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [Nn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...q(), X] }],
        overflow: [{ overflow: j() }],
        "overflow-x": [{ "overflow-x": j() }],
        "overflow-y": [{ "overflow-y": j() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ci, X] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", ci, X] }],
        "grid-cols": [{ "grid-cols": [di] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ci, X] }, X] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [di] }],
        "row-start-end": [{ row: ["auto", { span: [ci, X] }, X] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [y] }],
        px: [{ px: [y] }],
        py: [{ py: [y] }],
        ps: [{ ps: [y] }],
        pe: [{ pe: [y] }],
        pt: [{ pt: [y] }],
        pr: [{ pr: [y] }],
        pb: [{ pb: [y] }],
        pl: [{ pl: [y] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Nn] },
              Nn,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Nn, An] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              wu,
            ],
          },
        ],
        "font-family": [{ font: [di] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", bs, wu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              on,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", on, An] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", on, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...q(), k2] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", E2] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              R2,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...W(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: W() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...W()] }],
        "outline-offset": [{ "outline-offset": [on, X] }],
        "outline-w": [{ outline: [on, An] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [on, An] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Nn, A2] }],
        "shadow-color": [{ shadow: [di] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Nn, X] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: H() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: H() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [ci, X] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [on, An, wu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  L2 = m2(D2);
function Wr(...e) {
  return L2(Av(e));
}
const O2 = X5,
  Iv = w.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(bv, {
      ref: n,
      className: Wr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
Iv.displayName = bv.displayName;
const I2 = q5(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Fv = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    p.jsx(Cv, { ref: r, className: Wr(I2({ variant: t }), e), ...n }),
  );
Fv.displayName = Cv.displayName;
const F2 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(kv, {
    ref: n,
    className: Wr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
F2.displayName = kv.displayName;
const Vv = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Pv, {
    ref: n,
    className: Wr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: p.jsx(n2, { className: "h-4 w-4" }),
  }),
);
Vv.displayName = Pv.displayName;
const _v = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Tv, { ref: n, className: Wr("text-sm font-semibold", e), ...t }),
);
_v.displayName = Tv.displayName;
const zv = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ev, { ref: n, className: Wr("text-sm opacity-90", e), ...t }),
);
zv.displayName = Ev.displayName;
function V2() {
  const { toasts: e } = s5();
  return p.jsxs(O2, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
        return p.jsxs(
          Fv,
          {
            ...i,
            children: [
              p.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && p.jsx(_v, { children: n }),
                  r && p.jsx(zv, { children: r }),
                ],
              }),
              s,
              p.jsx(Vv, {}),
            ],
          },
          t,
        );
      }),
      p.jsx(Iv, {}),
    ],
  });
}
var Op = ["light", "dark"],
  _2 = "(prefers-color-scheme: dark)",
  z2 = w.createContext(void 0),
  B2 = { setTheme: (e) => {}, themes: [] },
  $2 = () => {
    var e;
    return (e = w.useContext(z2)) != null ? e : B2;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((v) => `'${v}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = s
        ? Op.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, S = !0) => {
        let m = o ? o[v] : v,
          y = g ? v + "|| ''" : `'${m}'`,
          x = "";
        return (
          s &&
            S &&
            !g &&
            Op.includes(v) &&
            (x += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || m
              ? (x += `c.add(${y})`)
              : (x += "null")
            : m && (x += `d[s](n,${y})`),
          x
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${_2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  },
);
var U2 = (e) => {
    switch (e) {
      case "success":
        return K2;
      case "info":
        return G2;
      case "warning":
        return Y2;
      case "error":
        return Q2;
      default:
        return null;
    }
  },
  W2 = Array(12).fill(0),
  H2 = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        W2.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  K2 = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Y2 = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  G2 = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Q2 = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  X2 = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  q2 = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  _c = 1,
  Z2 = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : _c++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: n }),
                      { ...a, ...e, id: s, dismissible: o, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            s = n !== void 0,
            i,
            o = r
              .then(async (l) => {
                if (((i = ["resolve", l]), L.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (eC(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || _c++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Xe = new Z2(),
  J2 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || _c++;
    return (Xe.addToast({ title: e, ...t, id: n }), n);
  },
  eC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  tC = J2,
  nC = () => Xe.toasts,
  rC = () => Xe.getActiveToasts();
Object.assign(
  tC,
  {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading,
  },
  { getHistory: nC, getToasts: rC },
);
function sC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
sC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function $o(e) {
  return e.label !== void 0;
}
var iC = 3,
  oC = "32px",
  aC = "16px",
  Ip = 4e3,
  lC = 356,
  uC = 14,
  cC = 20,
  dC = 200;
function Rt(...e) {
  return e.filter(Boolean).join(" ");
}
function fC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var hC = (e) => {
  var t, n, r, s, i, o, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: S,
      visibleToasts: m,
      heights: y,
      index: x,
      toasts: b,
      expanded: C,
      removeToast: T,
      defaultRichColors: E,
      closeButton: k,
      style: N,
      cancelButtonStyle: j,
      actionButtonStyle: B,
      className: F = "",
      descriptionClassName: Q = "",
      duration: O,
      position: q,
      gap: W,
      loadingIcon: z,
      expandByDefault: P,
      classNames: A,
      icons: I,
      closeButtonAriaLabel: H = "Close toast",
      pauseWhenPageIsHidden: U,
    } = e,
    [Z, ee] = L.useState(null),
    [Se, Le] = L.useState(null),
    [re, Hr] = L.useState(!1),
    [bn, pr] = L.useState(!1),
    [Cn, Kr] = L.useState(!1),
    [Tn, xo] = L.useState(!1),
    [zl, wo] = L.useState(!1),
    [Bl, ei] = L.useState(0),
    [Yr, ch] = L.useState(0),
    ti = L.useRef(h.duration || O || Ip),
    dh = L.useRef(null),
    mr = L.useRef(null),
    v1 = x === 0,
    x1 = x + 1 <= m,
    ht = h.type,
    Gr = h.dismissible !== !1,
    w1 = h.className || "",
    S1 = h.descriptionClassName || "",
    So = L.useMemo(
      () => y.findIndex((K) => K.toastId === h.id) || 0,
      [y, h.id],
    ),
    b1 = L.useMemo(() => {
      var K;
      return (K = h.closeButton) != null ? K : k;
    }, [h.closeButton, k]),
    fh = L.useMemo(() => h.duration || O || Ip, [h.duration, O]),
    $l = L.useRef(0),
    Qr = L.useRef(0),
    hh = L.useRef(0),
    Xr = L.useRef(null),
    [C1, T1] = q.split("-"),
    ph = L.useMemo(
      () => y.reduce((K, ie, de) => (de >= So ? K : K + ie.height), 0),
      [y, So],
    ),
    mh = q2(),
    E1 = h.invert || f,
    Ul = ht === "loading";
  ((Qr.current = L.useMemo(() => So * W + ph, [So, ph])),
    L.useEffect(() => {
      ti.current = fh;
    }, [fh]),
    L.useEffect(() => {
      Hr(!0);
    }, []),
    L.useEffect(() => {
      let K = mr.current;
      if (K) {
        let ie = K.getBoundingClientRect().height;
        return (
          ch(ie),
          S((de) => [
            { toastId: h.id, height: ie, position: h.position },
            ...de,
          ]),
          () => S((de) => de.filter((Tt) => Tt.toastId !== h.id))
        );
      }
    }, [S, h.id]),
    L.useLayoutEffect(() => {
      if (!re) return;
      let K = mr.current,
        ie = K.style.height;
      K.style.height = "auto";
      let de = K.getBoundingClientRect().height;
      ((K.style.height = ie),
        ch(de),
        S((Tt) =>
          Tt.find((Et) => Et.toastId === h.id)
            ? Tt.map((Et) => (Et.toastId === h.id ? { ...Et, height: de } : Et))
            : [{ toastId: h.id, height: de, position: h.position }, ...Tt],
        ));
    }, [re, h.title, h.description, S, h.id]));
  let En = L.useCallback(() => {
    (pr(!0),
      ei(Qr.current),
      S((K) => K.filter((ie) => ie.toastId !== h.id)),
      setTimeout(() => {
        T(h);
      }, dC));
  }, [h, T, S, Qr]);
  (L.useEffect(() => {
    if (
      (h.promise && ht === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let K;
    return (
      C || g || (U && mh)
        ? (() => {
            if (hh.current < $l.current) {
              let ie = new Date().getTime() - $l.current;
              ti.current = ti.current - ie;
            }
            hh.current = new Date().getTime();
          })()
        : ti.current !== 1 / 0 &&
          (($l.current = new Date().getTime()),
          (K = setTimeout(() => {
            var ie;
            ((ie = h.onAutoClose) == null || ie.call(h, h), En());
          }, ti.current))),
      () => clearTimeout(K)
    );
  }, [C, g, h, ht, U, mh, En]),
    L.useEffect(() => {
      h.delete && En();
    }, [En, h.delete]));
  function k1() {
    var K, ie, de;
    return I != null && I.loading
      ? L.createElement(
          "div",
          {
            className: Rt(
              A == null ? void 0 : A.loader,
              (K = h == null ? void 0 : h.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader",
            ),
            "data-visible": ht === "loading",
          },
          I.loading,
        )
      : z
        ? L.createElement(
            "div",
            {
              className: Rt(
                A == null ? void 0 : A.loader,
                (ie = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : ie.loader,
                "sonner-loader",
              ),
              "data-visible": ht === "loading",
            },
            z,
          )
        : L.createElement(H2, {
            className: Rt(
              A == null ? void 0 : A.loader,
              (de = h == null ? void 0 : h.classNames) == null
                ? void 0
                : de.loader,
            ),
            visible: ht === "loading",
          });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: mr,
      className: Rt(
        F,
        w1,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[ht],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ht],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : E,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": re,
      "data-promise": !!h.promise,
      "data-swiped": zl,
      "data-removed": bn,
      "data-visible": x1,
      "data-y-position": C1,
      "data-x-position": T1,
      "data-index": x,
      "data-front": v1,
      "data-swiping": Cn,
      "data-dismissible": Gr,
      "data-type": ht,
      "data-invert": E1,
      "data-swipe-out": Tn,
      "data-swipe-direction": Se,
      "data-expanded": !!(C || (P && re)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": b.length - x,
        "--offset": `${bn ? Bl : Qr.current}px`,
        "--initial-height": P ? "auto" : `${Yr}px`,
        ...N,
        ...h.style,
      },
      onDragEnd: () => {
        (Kr(!1), ee(null), (Xr.current = null));
      },
      onPointerDown: (K) => {
        Ul ||
          !Gr ||
          ((dh.current = new Date()),
          ei(Qr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (Kr(!0), (Xr.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, ie, de, Tt;
        if (Tn || !Gr) return;
        Xr.current = null;
        let Et = Number(
            ((K = mr.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          kn = Number(
            ((ie = mr.current) == null
              ? void 0
              : ie.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          yr =
            new Date().getTime() -
            ((de = dh.current) == null ? void 0 : de.getTime()),
          kt = Z === "x" ? Et : kn,
          Pn = Math.abs(kt) / yr;
        if (Math.abs(kt) >= cC || Pn > 0.11) {
          (ei(Qr.current),
            (Tt = h.onDismiss) == null || Tt.call(h, h),
            Le(
              Z === "x" ? (Et > 0 ? "right" : "left") : kn > 0 ? "down" : "up",
            ),
            En(),
            xo(!0),
            wo(!1));
          return;
        }
        (Kr(!1), ee(null));
      },
      onPointerMove: (K) => {
        var ie, de, Tt, Et;
        if (
          !Xr.current ||
          !Gr ||
          ((ie = window.getSelection()) == null
            ? void 0
            : ie.toString().length) > 0
        )
          return;
        let kn = K.clientY - Xr.current.y,
          yr = K.clientX - Xr.current.x,
          kt = (de = e.swipeDirections) != null ? de : fC(q);
        !Z &&
          (Math.abs(yr) > 1 || Math.abs(kn) > 1) &&
          ee(Math.abs(yr) > Math.abs(kn) ? "x" : "y");
        let Pn = { x: 0, y: 0 };
        (Z === "y"
          ? (kt.includes("top") || kt.includes("bottom")) &&
            ((kt.includes("top") && kn < 0) ||
              (kt.includes("bottom") && kn > 0)) &&
            (Pn.y = kn)
          : Z === "x" &&
            (kt.includes("left") || kt.includes("right")) &&
            ((kt.includes("left") && yr < 0) ||
              (kt.includes("right") && yr > 0)) &&
            (Pn.x = yr),
          (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && wo(!0),
          (Tt = mr.current) == null ||
            Tt.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
          (Et = mr.current) == null ||
            Et.style.setProperty("--swipe-amount-y", `${Pn.y}px`));
      },
    },
    b1 && !h.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": H,
            "data-disabled": Ul,
            "data-close-button": !0,
            onClick:
              Ul || !Gr
                ? () => {}
                : () => {
                    var K;
                    (En(), (K = h.onDismiss) == null || K.call(h, h));
                  },
            className: Rt(
              A == null ? void 0 : A.closeButton,
              (s = h == null ? void 0 : h.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (i = I == null ? void 0 : I.close) != null ? i : X2,
        )
      : null,
    h.jsx || w.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
          ? h.title()
          : h.title
      : L.createElement(
          L.Fragment,
          null,
          ht || h.icon || h.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Rt(
                    A == null ? void 0 : A.icon,
                    (o = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : o.icon,
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || k1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (I == null ? void 0 : I[ht]) || U2(ht)
                  : null,
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: Rt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: Rt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof h.title == "function" ? h.title() : h.title,
            ),
            h.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Rt(
                      Q,
                      S1,
                      A == null ? void 0 : A.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description,
                )
              : null,
          ),
          w.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && $o(h.cancel)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: h.cancelButtonStyle || j,
                    onClick: (K) => {
                      var ie, de;
                      $o(h.cancel) &&
                        Gr &&
                        ((de = (ie = h.cancel).onClick) == null ||
                          de.call(ie, K),
                        En());
                    },
                    className: Rt(
                      A == null ? void 0 : A.cancelButton,
                      (c = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  h.cancel.label,
                )
              : null,
          w.isValidElement(h.action)
            ? h.action
            : h.action && $o(h.action)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: h.actionButtonStyle || B,
                    onClick: (K) => {
                      var ie, de;
                      $o(h.action) &&
                        ((de = (ie = h.action).onClick) == null ||
                          de.call(ie, K),
                        !K.defaultPrevented && En());
                    },
                    className: Rt(
                      A == null ? void 0 : A.actionButton,
                      (d = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  h.action.label,
                )
              : null,
        ),
  );
};
function Fp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function pC(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? aC : oC;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${o}-${u}`] = a)
                : (n[`${o}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : l(a);
    }),
    n
  );
}
var mC = w.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: v = iC,
      toastOptions: g,
      dir: S = Fp(),
      gap: m = uC,
      loadingIcon: y,
      icons: x,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [T, E] = L.useState([]),
    k = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(T.filter((U) => U.position).map((U) => U.position)),
          ),
        ),
      [T, r],
    ),
    [N, j] = L.useState([]),
    [B, F] = L.useState(!1),
    [Q, O] = L.useState(!1),
    [q, W] = L.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    z = L.useRef(null),
    P = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = L.useRef(null),
    I = L.useRef(!1),
    H = L.useCallback((U) => {
      E((Z) => {
        var ee;
        return (
          ((ee = Z.find((Se) => Se.id === U.id)) != null && ee.delete) ||
            Xe.dismiss(U.id),
          Z.filter(({ id: Se }) => Se !== U.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        Xe.subscribe((U) => {
          if (U.dismiss) {
            E((Z) =>
              Z.map((ee) => (ee.id === U.id ? { ...ee, delete: !0 } : ee)),
            );
            return;
          }
          setTimeout(() => {
            ev.flushSync(() => {
              E((Z) => {
                let ee = Z.findIndex((Se) => Se.id === U.id);
                return ee !== -1
                  ? [...Z.slice(0, ee), { ...Z[ee], ...U }, ...Z.slice(ee + 1)]
                  : [U, ...Z];
              });
            });
          });
        }),
      [],
    ),
    L.useEffect(() => {
      if (c !== "system") {
        W(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? W("dark")
            : W("light")),
        typeof window > "u")
      )
        return;
      let U = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        U.addEventListener("change", ({ matches: Z }) => {
          W(Z ? "dark" : "light");
        });
      } catch {
        U.addListener(({ matches: ee }) => {
          try {
            W(ee ? "dark" : "light");
          } catch (Se) {
            console.error(Se);
          }
        });
      }
    }, [c]),
    L.useEffect(() => {
      T.length <= 1 && F(!1);
    }, [T]),
    L.useEffect(() => {
      let U = (Z) => {
        var ee, Se;
        (s.every((Le) => Z[Le] || Z.code === Le) &&
          (F(!0), (ee = z.current) == null || ee.focus()),
          Z.code === "Escape" &&
            (document.activeElement === z.current ||
              ((Se = z.current) != null &&
                Se.contains(document.activeElement))) &&
            F(!1));
      };
      return (
        document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
      );
    }, [s]),
    L.useEffect(() => {
      if (z.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (I.current = !1));
        };
    }, [z.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      k.map((U, Z) => {
        var ee;
        let [Se, Le] = U.split("-");
        return T.length
          ? L.createElement(
              "ol",
              {
                key: U,
                dir: S === "auto" ? Fp() : S,
                tabIndex: -1,
                ref: z,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": q,
                "data-y-position": Se,
                "data-lifted": B && T.length > 1 && !i,
                "data-x-position": Le,
                style: {
                  "--front-toast-height": `${((ee = N[0]) == null ? void 0 : ee.height) || 0}px`,
                  "--width": `${lC}px`,
                  "--gap": `${m}px`,
                  ...h,
                  ...pC(l, u),
                },
                onBlur: (re) => {
                  I.current &&
                    !re.currentTarget.contains(re.relatedTarget) &&
                    ((I.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (A.current = re.relatedTarget));
                },
                onMouseEnter: () => F(!0),
                onMouseMove: () => F(!0),
                onMouseLeave: () => {
                  Q || F(!1);
                },
                onDragEnd: () => F(!1),
                onPointerDown: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              T.filter(
                (re) => (!re.position && Z === 0) || re.position === U,
              ).map((re, Hr) => {
                var bn, pr;
                return L.createElement(hC, {
                  key: re.id,
                  icons: x,
                  index: Hr,
                  toast: re,
                  defaultRichColors: d,
                  duration:
                    (bn = g == null ? void 0 : g.duration) != null ? bn : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: n,
                  visibleToasts: v,
                  closeButton:
                    (pr = g == null ? void 0 : g.closeButton) != null ? pr : o,
                  interacting: Q,
                  position: U,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: H,
                  toasts: T.filter((Cn) => Cn.position == re.position),
                  heights: N.filter((Cn) => Cn.position == re.position),
                  setHeights: j,
                  expandByDefault: i,
                  gap: m,
                  loadingIcon: y,
                  expanded: B,
                  pauseWhenPageIsHidden: C,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const yC = ({ ...e }) => {
    const { theme: t = "system" } = $2();
    return p.jsx(mC, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  gC = ["top", "right", "bottom", "left"],
  ir = Math.min,
  ot = Math.max,
  Ha = Math.round,
  Uo = Math.floor,
  Jt = (e) => ({ x: e, y: e }),
  vC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  xC = { start: "end", end: "start" };
function zc(e, t, n) {
  return ot(e, ir(t, n));
}
function vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xn(e) {
  return e.split("-")[0];
}
function Qs(e) {
  return e.split("-")[1];
}
function wf(e) {
  return e === "x" ? "y" : "x";
}
function Sf(e) {
  return e === "y" ? "height" : "width";
}
const wC = new Set(["top", "bottom"]);
function Xt(e) {
  return wC.has(xn(e)) ? "y" : "x";
}
function bf(e) {
  return wf(Xt(e));
}
function SC(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qs(e),
    s = bf(e),
    i = Sf(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = Ka(o)), [o, Ka(o)]);
}
function bC(e) {
  const t = Ka(e);
  return [Bc(e), t, Bc(t)];
}
function Bc(e) {
  return e.replace(/start|end/g, (t) => xC[t]);
}
const Vp = ["left", "right"],
  _p = ["right", "left"],
  CC = ["top", "bottom"],
  TC = ["bottom", "top"];
function EC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? _p : Vp) : t ? Vp : _p;
    case "left":
    case "right":
      return t ? CC : TC;
    default:
      return [];
  }
}
function kC(e, t, n, r) {
  const s = Qs(e);
  let i = EC(xn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(Bc)))),
    i
  );
}
function Ka(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vC[t]);
}
function PC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Bv(e) {
  return typeof e != "number"
    ? PC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ya(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function zp(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = Xt(t),
    o = bf(t),
    a = Sf(o),
    l = xn(t),
    u = i === "y",
    c = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - s.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - s.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Qs(t)) {
    case "start":
      h[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const RC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: c, y: d } = zp(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: S, fn: m } = a[g],
      {
        x: y,
        y: x,
        data: b,
        reset: C,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: h,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((c = y ?? c),
      (d = x ?? d),
      (h = { ...h, [S]: { ...h[S], ...b } }),
      C &&
        v <= 50 &&
        (v++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : C.rects),
          ({ x: c, y: d } = zp(u, f, l))),
        (g = -1)));
  }
  return { x: c, y: d, placement: f, strategy: s, middlewareData: h };
};
async function Qi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = vn(t, e),
    v = Bv(h),
    S = a[f ? (d === "floating" ? "reference" : "floating") : d],
    m = Ya(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    y =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Ya(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: x,
            strategy: l,
          })
        : y,
    );
  return {
    top: (m.top - C.top + v.top) / b.y,
    bottom: (C.bottom - m.bottom + v.bottom) / b.y,
    left: (m.left - C.left + v.left) / b.x,
    right: (C.right - m.right + v.right) / b.x,
  };
}
const AC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = vn(e, t) || {};
      if (u == null) return {};
      const d = Bv(c),
        f = { x: n, y: r },
        h = bf(s),
        v = Sf(h),
        g = await o.getDimensions(u),
        S = h === "y",
        m = S ? "top" : "left",
        y = S ? "bottom" : "right",
        x = S ? "clientHeight" : "clientWidth",
        b = i.reference[v] + i.reference[h] - f[h] - i.floating[v],
        C = f[h] - i.reference[h],
        T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let E = T ? T[x] : 0;
      (!E || !(await (o.isElement == null ? void 0 : o.isElement(T)))) &&
        (E = a.floating[x] || i.floating[v]);
      const k = b / 2 - C / 2,
        N = E / 2 - g[v] / 2 - 1,
        j = ir(d[m], N),
        B = ir(d[y], N),
        F = j,
        Q = E - g[v] - B,
        O = E / 2 - g[v] / 2 + k,
        q = zc(F, O, Q),
        W =
          !l.arrow &&
          Qs(s) != null &&
          O !== q &&
          i.reference[v] / 2 - (O < F ? j : B) - g[v] / 2 < 0,
        z = W ? (O < F ? O - F : O - Q) : 0;
      return {
        [h]: f[h] + z,
        data: {
          [h]: q,
          centerOffset: O - q - z,
          ...(W && { alignmentOffset: z }),
        },
        reset: W,
      };
    },
  }),
  NC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...S
            } = vn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = xn(s),
            y = Xt(a),
            x = xn(a) === a,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = f || (x || !g ? [Ka(a)] : bC(a)),
            T = v !== "none";
          !f && T && C.push(...kC(a, g, v, b));
          const E = [a, ...C],
            k = await Qi(t, S),
            N = [];
          let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && N.push(k[m]), d)) {
            const O = SC(s, o, b);
            N.push(k[O[0]], k[O[1]]);
          }
          if (
            ((j = [...j, { placement: s, overflows: N }]),
            !N.every((O) => O <= 0))
          ) {
            var B, F;
            const O = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1,
              q = E[O];
            if (
              q &&
              (!(d === "alignment" ? y !== Xt(q) : !1) ||
                j.every((P) => P.overflows[0] > 0 && Xt(P.placement) === y))
            )
              return {
                data: { index: O, overflows: j },
                reset: { placement: q },
              };
            let W =
              (F = j
                .filter((z) => z.overflows[0] <= 0)
                .sort((z, P) => z.overflows[1] - P.overflows[1])[0]) == null
                ? void 0
                : F.placement;
            if (!W)
              switch (h) {
                case "bestFit": {
                  var Q;
                  const z =
                    (Q = j
                      .filter((P) => {
                        if (T) {
                          const A = Xt(P.placement);
                          return A === y || A === "y";
                        }
                        return !0;
                      })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((A) => A > 0)
                          .reduce((A, I) => A + I, 0),
                      ])
                      .sort((P, A) => P[1] - A[1])[0]) == null
                      ? void 0
                      : Q[0];
                  z && (W = z);
                  break;
                }
                case "initialPlacement":
                  W = a;
                  break;
              }
            if (s !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function Bp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function $p(e) {
  return gC.some((t) => e[t] >= 0);
}
const jC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...s } = vn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Qi(t, { ...s, elementContext: "reference" }),
                o = Bp(i, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: $p(o) },
              };
            }
            case "escaped": {
              const i = await Qi(t, { ...s, altBoundary: !0 }),
                o = Bp(i, n.floating);
              return { data: { escapedOffsets: o, escaped: $p(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  $v = new Set(["left", "top"]);
async function MC(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = xn(n),
    a = Qs(n),
    l = Xt(n) === "y",
    u = $v.has(o) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = vn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const DC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await MC(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  LC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (S) => {
                  let { x: m, y } = S;
                  return { x: m, y };
                },
              },
              ...l
            } = vn(e, t),
            u = { x: n, y: r },
            c = await Qi(t, l),
            d = Xt(xn(s)),
            f = wf(d);
          let h = u[f],
            v = u[d];
          if (i) {
            const S = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              y = h + c[S],
              x = h - c[m];
            h = zc(y, h, x);
          }
          if (o) {
            const S = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              y = v + c[S],
              x = v - c[m];
            v = zc(y, v, x);
          }
          const g = a.fn({ ...t, [f]: h, [d]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  OC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = vn(e, t),
            c = { x: n, y: r },
            d = Xt(s),
            f = wf(d);
          let h = c[f],
            v = c[d];
          const g = vn(a, t),
            S =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const x = f === "y" ? "height" : "width",
              b = i.reference[f] - i.floating[x] + S.mainAxis,
              C = i.reference[f] + i.reference[x] - S.mainAxis;
            h < b ? (h = b) : h > C && (h = C);
          }
          if (u) {
            var m, y;
            const x = f === "y" ? "width" : "height",
              b = $v.has(xn(s)),
              C =
                i.reference[d] -
                i.floating[x] +
                ((b && ((m = o.offset) == null ? void 0 : m[d])) || 0) +
                (b ? 0 : S.crossAxis),
              T =
                i.reference[d] +
                i.reference[x] +
                (b ? 0 : ((y = o.offset) == null ? void 0 : y[d]) || 0) -
                (b ? S.crossAxis : 0);
            v < C ? (v = C) : v > T && (v = T);
          }
          return { [f]: h, [d]: v };
        },
      }
    );
  },
  IC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...u } = vn(e, t),
            c = await Qi(t, u),
            d = xn(s),
            f = Qs(s),
            h = Xt(s) === "y",
            { width: v, height: g } = i.floating;
          let S, m;
          d === "top" || d === "bottom"
            ? ((S = d),
              (m =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (S = f === "end" ? "top" : "bottom"));
          const y = g - c.top - c.bottom,
            x = v - c.left - c.right,
            b = ir(g - c[S], y),
            C = ir(v - c[m], x),
            T = !t.middlewareData.shift;
          let E = b,
            k = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = y),
            T && !f)
          ) {
            const j = ot(c.left, 0),
              B = ot(c.right, 0),
              F = ot(c.top, 0),
              Q = ot(c.bottom, 0);
            h
              ? (k = v - 2 * (j !== 0 || B !== 0 ? j + B : ot(c.left, c.right)))
              : (E =
                  g - 2 * (F !== 0 || Q !== 0 ? F + Q : ot(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: k, availableHeight: E });
          const N = await o.getDimensions(a.floating);
          return v !== N.width || g !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function El() {
  return typeof window < "u";
}
function Xs(e) {
  return Uv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function rn(e) {
  var t;
  return (t = (Uv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Uv(e) {
  return El() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Bt(e) {
  return El() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function tn(e) {
  return El() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function Up(e) {
  return !El() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const FC = new Set(["inline", "contents"]);
function po(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !FC.has(s);
}
const VC = new Set(["table", "td", "th"]);
function _C(e) {
  return VC.has(Xs(e));
}
const zC = [":popover-open", ":modal"];
function kl(e) {
  return zC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const BC = ["transform", "translate", "scale", "rotate", "perspective"],
  $C = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  UC = ["paint", "layout", "strict", "content"];
function Cf(e) {
  const t = Tf(),
    n = Bt(e) ? $t(e) : e;
  return (
    BC.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    $C.some((r) => (n.willChange || "").includes(r)) ||
    UC.some((r) => (n.contain || "").includes(r))
  );
}
function WC(e) {
  let t = or(e);
  for (; tn(t) && !Bs(t); ) {
    if (Cf(t)) return t;
    if (kl(t)) return null;
    t = or(t);
  }
  return null;
}
function Tf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const HC = new Set(["html", "body", "#document"]);
function Bs(e) {
  return HC.has(Xs(e));
}
function $t(e) {
  return ut(e).getComputedStyle(e);
}
function Pl(e) {
  return Bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function or(e) {
  if (Xs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Up(e) && e.host) || rn(e);
  return Up(t) ? t.host : t;
}
function Wv(e) {
  const t = or(e);
  return Bs(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : tn(t) && po(t)
      ? t
      : Wv(t);
}
function Xi(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const s = Wv(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = ut(s);
  if (i) {
    const a = $c(o);
    return t.concat(
      o,
      o.visualViewport || [],
      po(s) ? s : [],
      a && n ? Xi(a) : [],
    );
  }
  return t.concat(s, Xi(s, [], n));
}
function $c(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hv(e) {
  const t = $t(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = tn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = Ha(n) !== i || Ha(r) !== o;
  return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
}
function Ef(e) {
  return Bt(e) ? e : e.contextElement;
}
function Cs(e) {
  const t = Ef(e);
  if (!tn(t)) return Jt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Hv(t);
  let o = (i ? Ha(n.width) : n.width) / r,
    a = (i ? Ha(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const KC = Jt(0);
function Kv(e) {
  const t = ut(e);
  return !Tf() || !t.visualViewport
    ? KC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function YC(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t);
}
function Br(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const s = e.getBoundingClientRect(),
    i = Ef(e);
  let o = Jt(1);
  t && (r ? Bt(r) && (o = Cs(r)) : (o = Cs(e)));
  const a = YC(i, n, r) ? Kv(i) : Jt(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    c = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = ut(i),
      h = r && Bt(r) ? ut(r) : r;
    let v = f,
      g = $c(v);
    for (; g && r && h !== v; ) {
      const S = Cs(g),
        m = g.getBoundingClientRect(),
        y = $t(g),
        x = m.left + (g.clientLeft + parseFloat(y.paddingLeft)) * S.x,
        b = m.top + (g.clientTop + parseFloat(y.paddingTop)) * S.y;
      ((l *= S.x),
        (u *= S.y),
        (c *= S.x),
        (d *= S.y),
        (l += x),
        (u += b),
        (v = ut(g)),
        (g = $c(v)));
    }
  }
  return Ya({ width: c, height: d, x: l, y: u });
}
function kf(e, t) {
  const n = Pl(e).scrollLeft;
  return t ? t.left + n : Br(rn(e)).left + n;
}
function Yv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : kf(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function GC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = rn(r),
    a = t ? kl(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Jt(1);
  const c = Jt(0),
    d = tn(r);
  if (
    (d || (!d && !i)) &&
    ((Xs(r) !== "body" || po(o)) && (l = Pl(r)), tn(r))
  ) {
    const h = Br(r);
    ((u = Cs(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop));
  }
  const f = o && !d && !i ? Yv(o, l, !0) : Jt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function QC(e) {
  return Array.from(e.getClientRects());
}
function XC(e) {
  const t = rn(e),
    n = Pl(e),
    r = e.ownerDocument.body,
    s = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + kf(e);
  const a = -n.scrollTop;
  return (
    $t(r).direction === "rtl" && (o += ot(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function qC(e, t) {
  const n = ut(e),
    r = rn(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const u = Tf();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const ZC = new Set(["absolute", "fixed"]);
function JC(e, t) {
  const n = Br(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = tn(e) ? Cs(e) : Jt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    u = r * i.y;
  return { width: o, height: a, x: l, y: u };
}
function Wp(e, t, n) {
  let r;
  if (t === "viewport") r = qC(e, n);
  else if (t === "document") r = XC(rn(e));
  else if (Bt(t)) r = JC(t, n);
  else {
    const s = Kv(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Ya(r);
}
function Gv(e, t) {
  const n = or(e);
  return n === t || !Bt(n) || Bs(n)
    ? !1
    : $t(n).position === "fixed" || Gv(n, t);
}
function eT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Xi(e, [], !1).filter((a) => Bt(a) && Xs(a) !== "body"),
    s = null;
  const i = $t(e).position === "fixed";
  let o = i ? or(e) : e;
  for (; Bt(o) && !Bs(o); ) {
    const a = $t(o),
      l = Cf(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && ZC.has(s.position)) ||
            (po(o) && !l && Gv(e, o))
      )
        ? (r = r.filter((c) => c !== o))
        : (s = a),
      (o = or(o)));
  }
  return (t.set(e, r), r);
}
function tT(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? kl(t)
          ? []
          : eT(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (u, c) => {
        const d = Wp(t, c, s);
        return (
          (u.top = ot(d.top, u.top)),
          (u.right = ir(d.right, u.right)),
          (u.bottom = ir(d.bottom, u.bottom)),
          (u.left = ot(d.left, u.left)),
          u
        );
      },
      Wp(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function nT(e) {
  const { width: t, height: n } = Hv(e);
  return { width: t, height: n };
}
function rT(e, t, n) {
  const r = tn(t),
    s = rn(t),
    i = n === "fixed",
    o = Br(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Jt(0);
  function u() {
    l.x = kf(s);
  }
  if (r || (!r && !i))
    if (((Xs(t) !== "body" || po(s)) && (a = Pl(t)), r)) {
      const h = Br(t, !0, i, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? Yv(s, a) : Jt(0),
    d = o.left + a.scrollLeft - l.x - c.x,
    f = o.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function Su(e) {
  return $t(e).position === "static";
}
function Hp(e, t) {
  if (!tn(e) || $t(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (rn(e) === n && (n = n.ownerDocument.body), n);
}
function Qv(e, t) {
  const n = ut(e);
  if (kl(e)) return n;
  if (!tn(e)) {
    let s = or(e);
    for (; s && !Bs(s); ) {
      if (Bt(s) && !Su(s)) return s;
      s = or(s);
    }
    return n;
  }
  let r = Hp(e, t);
  for (; r && _C(r) && Su(r); ) r = Hp(r, t);
  return r && Bs(r) && Su(r) && !Cf(r) ? n : r || WC(e) || n;
}
const sT = async function (e) {
  const t = this.getOffsetParent || Qv,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: rT(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function iT(e) {
  return $t(e).direction === "rtl";
}
const oT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: GC,
  getDocumentElement: rn,
  getClippingRect: tT,
  getOffsetParent: Qv,
  getElementRects: sT,
  getClientRects: QC,
  getDimensions: nT,
  getScale: Cs,
  isElement: Bt,
  isRTL: iT,
};
function Xv(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function aT(e, t) {
  let n = null,
    r;
  const s = rn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const v = Uo(d),
      g = Uo(s.clientWidth - (c + f)),
      S = Uo(s.clientHeight - (d + h)),
      m = Uo(c),
      x = {
        rootMargin: -v + "px " + -g + "px " + -S + "px " + -m + "px",
        threshold: ot(0, ir(1, l)) || 1,
      };
    let b = !0;
    function C(T) {
      const E = T[0].intersectionRatio;
      if (E !== l) {
        if (!b) return o();
        E
          ? o(!1, E)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (E === 1 && !Xv(u, e.getBoundingClientRect()) && o(), (b = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return (o(!0), i);
}
function lT(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Ef(e),
    c = s || i ? [...(u ? Xi(u) : []), ...Xi(t)] : [];
  c.forEach((m) => {
    (s && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n));
  });
  const d = u && a ? aT(u, n) : null;
  let f = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((m) => {
      let [y] = m;
      (y &&
        y.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var x;
          (x = h) == null || x.observe(t);
        }))),
        n());
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    g = l ? Br(e) : null;
  l && S();
  function S() {
    const m = Br(e);
    (g && !Xv(g, m) && n(), (g = m), (v = requestAnimationFrame(S)));
  }
  return (
    n(),
    () => {
      var m;
      (c.forEach((y) => {
        (s && y.removeEventListener("scroll", n),
          i && y.removeEventListener("resize", n));
      }),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v));
    }
  );
}
const uT = DC,
  cT = LC,
  dT = NC,
  fT = IC,
  hT = jC,
  Kp = AC,
  pT = OC,
  mT = (e, t, n) => {
    const r = new Map(),
      s = { platform: oT, ...n },
      i = { ...s.platform, _c: r };
    return RC(e, t, { ...s, platform: i });
  };
var yT = typeof document < "u",
  gT = function () {},
  pa = yT ? w.useLayoutEffect : gT;
function Ga(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ga(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Ga(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yp(e, t) {
  const n = qv(e);
  return Math.round(t * n) / n;
}
function bu(e) {
  const t = w.useRef(e);
  return (
    pa(() => {
      t.current = e;
    }),
    t
  );
}
function vT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = w.useState(r);
  Ga(f, r) || h(r);
  const [v, g] = w.useState(null),
    [S, m] = w.useState(null),
    y = w.useCallback((P) => {
      P !== T.current && ((T.current = P), g(P));
    }, []),
    x = w.useCallback((P) => {
      P !== E.current && ((E.current = P), m(P));
    }, []),
    b = i || v,
    C = o || S,
    T = w.useRef(null),
    E = w.useRef(null),
    k = w.useRef(c),
    N = l != null,
    j = bu(l),
    B = bu(s),
    F = bu(u),
    Q = w.useCallback(() => {
      if (!T.current || !E.current) return;
      const P = { placement: t, strategy: n, middleware: f };
      (B.current && (P.platform = B.current),
        mT(T.current, E.current, P).then((A) => {
          const I = { ...A, isPositioned: F.current !== !1 };
          O.current &&
            !Ga(k.current, I) &&
            ((k.current = I),
            fo.flushSync(() => {
              d(I);
            }));
        }));
    }, [f, t, n, B, F]);
  pa(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), d((P) => ({ ...P, isPositioned: !1 })));
  }, [u]);
  const O = w.useRef(!1);
  (pa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    pa(() => {
      if ((b && (T.current = b), C && (E.current = C), b && C)) {
        if (j.current) return j.current(b, C, Q);
        Q();
      }
    }, [b, C, Q, j, N]));
  const q = w.useMemo(
      () => ({ reference: T, floating: E, setReference: y, setFloating: x }),
      [y, x],
    ),
    W = w.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    z = w.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!W.floating) return P;
      const A = Yp(W.floating, c.x),
        I = Yp(W.floating, c.y);
      return a
        ? {
            ...P,
            transform: "translate(" + A + "px, " + I + "px)",
            ...(qv(W.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: I };
    }, [n, a, W.floating, c.x, c.y]);
  return w.useMemo(
    () => ({ ...c, update: Q, refs: q, elements: W, floatingStyles: z }),
    [c, Q, q, W, z],
  );
}
const xT = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Kp({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? Kp({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  wT = (e, t) => ({ ...uT(e), options: [e, t] }),
  ST = (e, t) => ({ ...cT(e), options: [e, t] }),
  bT = (e, t) => ({ ...pT(e), options: [e, t] }),
  CT = (e, t) => ({ ...dT(e), options: [e, t] }),
  TT = (e, t) => ({ ...fT(e), options: [e, t] }),
  ET = (e, t) => ({ ...hT(e), options: [e, t] }),
  kT = (e, t) => ({ ...xT(e), options: [e, t] });
var PT = "Arrow",
  Zv = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return p.jsx(st.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Zv.displayName = PT;
var RT = Zv;
function AT(e) {
  const [t, n] = w.useState(void 0);
  return (
    sr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((o = u.inlineSize), (a = u.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          n({ width: o, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Jv = "Popper",
  [ex, tx] = bl(Jv),
  [IN, nx] = ex(Jv),
  rx = "PopperAnchor",
  sx = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = nx(rx, n),
      o = w.useRef(null),
      a = zt(t, o);
    return (
      w.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : p.jsx(st.div, { ...s, ref: a })
    );
  });
sx.displayName = rx;
var Pf = "PopperContent",
  [NT, jT] = ex(Pf),
  ix = w.forwardRef((e, t) => {
    var re, Hr, bn, pr, Cn, Kr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      S = nx(Pf, n),
      [m, y] = w.useState(null),
      x = zt(t, (Tn) => y(Tn)),
      [b, C] = w.useState(null),
      T = AT(b),
      E = (T == null ? void 0 : T.width) ?? 0,
      k = (T == null ? void 0 : T.height) ?? 0,
      N = r + (i !== "center" ? "-" + i : ""),
      j =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      B = Array.isArray(u) ? u : [u],
      F = B.length > 0,
      Q = { padding: j, boundary: B.filter(DT), altBoundary: F },
      {
        refs: O,
        floatingStyles: q,
        placement: W,
        isPositioned: z,
        middlewareData: P,
      } = vT({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Tn) =>
          lT(...Tn, { animationFrame: h === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          wT({ mainAxis: s + k, alignmentAxis: o }),
          l &&
            ST({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? bT() : void 0,
              ...Q,
            }),
          l && CT({ ...Q }),
          TT({
            ...Q,
            apply: ({
              elements: Tn,
              rects: xo,
              availableWidth: zl,
              availableHeight: wo,
            }) => {
              const { width: Bl, height: ei } = xo.reference,
                Yr = Tn.floating.style;
              (Yr.setProperty("--radix-popper-available-width", `${zl}px`),
                Yr.setProperty("--radix-popper-available-height", `${wo}px`),
                Yr.setProperty("--radix-popper-anchor-width", `${Bl}px`),
                Yr.setProperty("--radix-popper-anchor-height", `${ei}px`));
            },
          }),
          b && kT({ element: b, padding: a }),
          LT({ arrowWidth: E, arrowHeight: k }),
          f && ET({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [A, I] = lx(W),
      H = rr(v);
    sr(() => {
      z && (H == null || H());
    }, [z, H]);
    const U = (re = P.arrow) == null ? void 0 : re.x,
      Z = (Hr = P.arrow) == null ? void 0 : Hr.y,
      ee = ((bn = P.arrow) == null ? void 0 : bn.centerOffset) !== 0,
      [Se, Le] = w.useState();
    return (
      sr(() => {
        m && Le(window.getComputedStyle(m).zIndex);
      }, [m]),
      p.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: z ? q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Se,
          "--radix-popper-transform-origin": [
            (pr = P.transformOrigin) == null ? void 0 : pr.x,
            (Cn = P.transformOrigin) == null ? void 0 : Cn.y,
          ].join(" "),
          ...(((Kr = P.hide) == null ? void 0 : Kr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(NT, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: U,
          arrowY: Z,
          shouldHideArrow: ee,
          children: p.jsx(st.div, {
            "data-side": A,
            "data-align": I,
            ...g,
            ref: x,
            style: { ...g.style, animation: z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ix.displayName = Pf;
var ox = "PopperArrow",
  MT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ax = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = jT(ox, r),
      o = MT[i.placedSide];
    return p.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(RT, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
ax.displayName = ox;
function DT(e) {
  return e !== null;
}
var LT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, y;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((S = s.arrow) == null ? void 0 : S.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [u, c] = lx(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((m = s.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((y = s.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      u === "bottom"
        ? ((v = o ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
          ? ((v = o ? d : `${f}px`), (g = `${r.floating.height + l}px`))
          : u === "right"
            ? ((v = `${-l}px`), (g = o ? d : `${h}px`))
            : u === "left" &&
              ((v = `${r.floating.width + l}px`), (g = o ? d : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function lx(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var OT = sx,
  IT = ix,
  FT = ax,
  [Rl, FN] = bl("Tooltip", [tx]),
  Rf = tx(),
  ux = "TooltipProvider",
  VT = 700,
  Gp = "tooltip.open",
  [_T, cx] = Rl(ux),
  dx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = VT,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = w.useRef(!0),
      a = w.useRef(!1),
      l = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      p.jsx(_T, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: w.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
dx.displayName = ux;
var fx = "Tooltip",
  [VN, Al] = Rl(fx),
  Uc = "TooltipTrigger",
  zT = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = Al(Uc, n),
      i = cx(Uc, n),
      o = Rf(n),
      a = w.useRef(null),
      l = zt(t, a, s.onTriggerChange),
      u = w.useRef(!1),
      c = w.useRef(!1),
      d = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      p.jsx(OT, {
        asChild: !0,
        ...o,
        children: p.jsx(st.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: ke(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ke(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: ke(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: ke(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: ke(e.onBlur, s.onClose),
          onClick: ke(e.onClick, s.onClose),
        }),
      })
    );
  });
zT.displayName = Uc;
var BT = "TooltipPortal",
  [_N, $T] = Rl(BT, { forceMount: void 0 }),
  $s = "TooltipContent",
  hx = w.forwardRef((e, t) => {
    const n = $T($s, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
      o = Al($s, e.__scopeTooltip);
    return p.jsx(mf, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? p.jsx(px, { side: s, ...i, ref: t })
        : p.jsx(UT, { side: s, ...i, ref: t }),
    });
  }),
  UT = w.forwardRef((e, t) => {
    const n = Al($s, e.__scopeTooltip),
      r = cx($s, e.__scopeTooltip),
      s = w.useRef(null),
      i = zt(t, s),
      [o, a] = w.useState(null),
      { trigger: l, onClose: u } = n,
      c = s.current,
      { onPointerInTransitChange: d } = r,
      f = w.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      h = w.useCallback(
        (v, g) => {
          const S = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            y = GT(m, S.getBoundingClientRect()),
            x = QT(m, y),
            b = XT(g.getBoundingClientRect()),
            C = ZT([...x, ...b]);
          (a(C), d(!0));
        },
        [d],
      );
    return (
      w.useEffect(() => () => f(), [f]),
      w.useEffect(() => {
        if (l && c) {
          const v = (S) => h(S, c),
            g = (S) => h(S, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
              (l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g));
            }
          );
        }
      }, [l, c, h, f]),
      w.useEffect(() => {
        if (o) {
          const v = (g) => {
            const S = g.target,
              m = { x: g.clientX, y: g.clientY },
              y =
                (l == null ? void 0 : l.contains(S)) ||
                (c == null ? void 0 : c.contains(S)),
              x = !qT(m, o);
            y ? f() : x && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, o, u, f]),
      p.jsx(px, { ...e, ref: i })
    );
  }),
  [WT, HT] = Rl(fx, { isInside: !1 }),
  KT = a5("TooltipContent"),
  px = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = Al($s, n),
      u = Rf(n),
      { onClose: c } = l;
    return (
      w.useEffect(
        () => (
          document.addEventListener(Gp, c),
          () => document.removeEventListener(Gp, c)
        ),
        [c],
      ),
      w.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      p.jsx(pf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: p.jsxs(IT, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            p.jsx(KT, { children: r }),
            p.jsx(WT, {
              scope: n,
              isInside: !0,
              children: p.jsx(M5, {
                id: l.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
hx.displayName = $s;
var mx = "TooltipArrow",
  YT = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = Rf(n);
    return HT(mx, n).isInside ? null : p.jsx(FT, { ...s, ...r, ref: t });
  });
YT.displayName = mx;
function GT(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function QT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function XT(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function qT(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (s = !s);
  }
  return s;
}
function ZT(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    JT(t)
  );
}
function JT(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var eE = dx,
  yx = hx;
const tE = eE,
  nE = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    p.jsx(yx, {
      ref: r,
      sideOffset: t,
      className: Wr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
nE.displayName = yx.displayName;
var Nl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  jl = typeof window > "u" || "Deno" in globalThis;
function Mt() {}
function rE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sE(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function iE(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Wc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Af(o, t.options)) return !1;
    } else if (!Zi(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Xp(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (qi(t.options.mutationKey) !== qi(i)) return !1;
    } else if (!Zi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function Af(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qi)(e);
}
function qi(e) {
  return JSON.stringify(e, (t, n) =>
    Hc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function Zi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Zi(e[n], t[n]))
        : !1;
}
function gx(e, t) {
  if (e === t) return e;
  const n = qp(e) && qp(t);
  if (n || (Hc(e) && Hc(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const d = n ? c : i[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = gx(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return s === o && u === s ? e : a;
  }
  return t;
}
function qp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Hc(e) {
  if (!Zp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Zp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Zp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function aE(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function lE(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? gx(e, t)
      : t;
}
function uE(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function cE(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Nf = Symbol();
function vx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Nf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Pr,
  Vn,
  ks,
  M0,
  dE =
    ((M0 = class extends Nl {
      constructor() {
        super();
        ne(this, Pr);
        ne(this, Vn);
        ne(this, ks);
        Y(this, ks, (t) => {
          if (!jl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Vn) || this.setEventListener(R(this, ks));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, Vn)) == null || t.call(this), Y(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        (Y(this, ks, t),
          (n = R(this, Vn)) == null || n.call(this),
          Y(
            this,
            Vn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        R(this, Pr) !== t && (Y(this, Pr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, Pr) == "boolean"
          ? R(this, Pr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Pr = new WeakMap()),
    (Vn = new WeakMap()),
    (ks = new WeakMap()),
    M0),
  xx = new dE(),
  Ps,
  _n,
  Rs,
  D0,
  fE =
    ((D0 = class extends Nl {
      constructor() {
        super();
        ne(this, Ps, !0);
        ne(this, _n);
        ne(this, Rs);
        Y(this, Rs, (t) => {
          if (!jl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, _n) || this.setEventListener(R(this, Rs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, _n)) == null || t.call(this), Y(this, _n, void 0));
      }
      setEventListener(t) {
        var n;
        (Y(this, Rs, t),
          (n = R(this, _n)) == null || n.call(this),
          Y(this, _n, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        R(this, Ps) !== t &&
          (Y(this, Ps, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, Ps);
      }
    }),
    (Ps = new WeakMap()),
    (_n = new WeakMap()),
    (Rs = new WeakMap()),
    D0),
  Qa = new fE();
function hE() {
  let e, t;
  const n = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), e(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), t(s));
    }),
    n
  );
}
function pE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function wx(e) {
  return (e ?? "online") === "online" ? Qa.isOnline() : !0;
}
var Sx = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Cu(e) {
  return e instanceof Sx;
}
function bx(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = hE(),
    o = (g) => {
      var S;
      r || (f(new Sx(g)), (S = e.abort) == null || S.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      xx.isFocused() &&
      (e.networkMode === "always" || Qa.isOnline()) &&
      e.canRun(),
    c = () => wx(e.networkMode) && e.canRun(),
    d = (g) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onSuccess) == null || S.call(e, g),
        s == null || s(),
        i.resolve(g));
    },
    f = (g) => {
      var S;
      r ||
        ((r = !0),
        (S = e.onError) == null || S.call(e, g),
        s == null || s(),
        i.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var S;
        ((s = (m) => {
          (r || u()) && g(m);
        }),
          (S = e.onPause) == null || S.call(e));
      }).then(() => {
        var g;
        ((s = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    v = () => {
      if (r) return;
      let g;
      const S = n === 0 ? e.initialPromise : void 0;
      try {
        g = S ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(d)
        .catch((m) => {
          var T;
          if (r) return;
          const y = e.retry ?? (jl ? 0 : 3),
            x = e.retryDelay ?? pE,
            b = typeof x == "function" ? x(n, m) : x,
            C =
              y === !0 ||
              (typeof y == "number" && n < y) ||
              (typeof y == "function" && y(n, m));
          if (t || !C) {
            f(m);
            return;
          }
          (n++,
            (T = e.onFail) == null || T.call(e, n, m),
            aE(b)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(m) : v();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : h().then(v), i),
  };
}
var mE = (e) => setTimeout(e, 0);
function yE() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = mE;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var We = yE(),
  Rr,
  L0,
  Cx =
    ((L0 = class {
      constructor() {
        ne(this, Rr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          sE(this.gcTime) &&
            Y(
              this,
              Rr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (jl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        R(this, Rr) && (clearTimeout(R(this, Rr)), Y(this, Rr, void 0));
      }
    }),
    (Rr = new WeakMap()),
    L0),
  As,
  Ar,
  pt,
  Nr,
  Ve,
  so,
  jr,
  Dt,
  an,
  O0,
  gE =
    ((O0 = class extends Cx {
      constructor(t) {
        super();
        ne(this, Dt);
        ne(this, As);
        ne(this, Ar);
        ne(this, pt);
        ne(this, Nr);
        ne(this, Ve);
        ne(this, so);
        ne(this, jr);
        (Y(this, jr, !1),
          Y(this, so, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Y(this, Nr, t.client),
          Y(this, pt, R(this, Nr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Y(this, As, xE(this.options)),
          (this.state = t.state ?? R(this, As)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = R(this, Ve)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...R(this, so), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, pt).remove(this);
      }
      setData(t, n) {
        const r = lE(this.state.data, t, this.options);
        return (
          Oe(this, Dt, an).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Oe(this, Dt, an).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = R(this, Ve)) == null ? void 0 : r.promise;
        return (
          (s = R(this, Ve)) == null || s.cancel(t),
          n ? n.then(Mt).catch(Mt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(R(this, As)));
      }
      isActive() {
        return this.observers.some((t) => oE(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Nf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Wc(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !iE(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ve)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ve)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Ve) &&
              (R(this, jr)
                ? R(this, Ve).cancel({ revert: !0 })
                : R(this, Ve).cancelRetry()),
            this.scheduleGc()),
          R(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Oe(this, Dt, an).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Ve))
            return (R(this, Ve).continueRetry(), R(this, Ve).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (Y(this, jr, !0), r.signal),
            });
          },
          i = () => {
            const f = vx(this.options, n),
              v = (() => {
                const g = {
                  client: R(this, Nr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(g), g);
              })();
            return (
              Y(this, jr, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: R(this, Nr),
              state: this.state,
              fetchFn: i,
            };
            return (s(f), f);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          Y(this, Ar, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Oe(this, Dt, an).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const l = (f) => {
          var h, v, g, S;
          ((Cu(f) && f.silent) ||
            Oe(this, Dt, an).call(this, { type: "error", error: f }),
            Cu(f) ||
              ((v = (h = R(this, pt).config).onError) == null ||
                v.call(h, f, this),
              (S = (g = R(this, pt).config).onSettled) == null ||
                S.call(g, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          Y(
            this,
            Ve,
            bx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, S;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (m) {
                  l(m);
                  return;
                }
                ((v = (h = R(this, pt).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (S = (g = R(this, pt).config).onSettled) == null ||
                    S.call(g, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, h) => {
                Oe(this, Dt, an).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Oe(this, Dt, an).call(this, { type: "pause" });
              },
              onContinue: () => {
                Oe(this, Dt, an).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          R(this, Ve).start()
        );
      }
    }),
    (As = new WeakMap()),
    (Ar = new WeakMap()),
    (pt = new WeakMap()),
    (Nr = new WeakMap()),
    (Ve = new WeakMap()),
    (so = new WeakMap()),
    (jr = new WeakMap()),
    (Dt = new WeakSet()),
    (an = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...vE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              Y(this, Ar, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return Cu(s) && s.revert && R(this, Ar)
              ? { ...R(this, Ar), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        We.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, pt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    O0);
function vE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: wx(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function xE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Kt,
  I0,
  wE =
    ((I0 = class extends Nl {
      constructor(t = {}) {
        super();
        ne(this, Kt);
        ((this.config = t), Y(this, Kt, new Map()));
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? Af(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new gE({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        R(this, Kt).has(t.queryHash) ||
          (R(this, Kt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Kt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Kt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Kt).get(t);
      }
      getAll() {
        return [...R(this, Kt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Qp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Qp(t, r)) : n;
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Kt = new WeakMap()),
    I0),
  Yt,
  $e,
  Mr,
  Gt,
  jn,
  F0,
  SE =
    ((F0 = class extends Cx {
      constructor(t) {
        super();
        ne(this, Gt);
        ne(this, Yt);
        ne(this, $e);
        ne(this, Mr);
        ((this.mutationId = t.mutationId),
          Y(this, $e, t.mutationCache),
          Y(this, Yt, []),
          (this.state = t.state || bE()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Yt).includes(t) ||
          (R(this, Yt).push(t),
          this.clearGcTimeout(),
          R(this, $e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (Y(
          this,
          Yt,
          R(this, Yt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          R(this, $e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        R(this, Yt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, $e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, Mr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, u, c, d, f, h, v, g, S, m, y, x, b, C, T, E, k;
        const n = () => {
          Oe(this, Gt, jn).call(this, { type: "continue" });
        };
        Y(
          this,
          Mr,
          bx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, j) => {
              Oe(this, Gt, jn).call(this, {
                type: "failed",
                failureCount: N,
                error: j,
              });
            },
            onPause: () => {
              Oe(this, Gt, jn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, $e).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          s = !R(this, Mr).canStart();
        try {
          if (r) n();
          else {
            (Oe(this, Gt, jn).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = R(this, $e).config).onMutate) == null
                ? void 0
                : o.call(i, t, this)));
            const j = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            j !== this.state.context &&
              Oe(this, Gt, jn).call(this, {
                type: "pending",
                context: j,
                variables: t,
                isPaused: s,
              });
          }
          const N = await R(this, Mr).start();
          return (
            await ((c = (u = R(this, $e).config).onSuccess) == null
              ? void 0
              : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, N, t, this.state.context)),
            await ((v = (h = R(this, $e).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  N,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((S = (g = this.options).onSettled) == null
              ? void 0
              : S.call(g, N, null, t, this.state.context)),
            Oe(this, Gt, jn).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              await ((y = (m = R(this, $e).config).onError) == null
                ? void 0
                : y.call(m, N, t, this.state.context, this)),
              await ((b = (x = this.options).onError) == null
                ? void 0
                : b.call(x, N, t, this.state.context)),
              await ((T = (C = R(this, $e).config).onSettled) == null
                ? void 0
                : T.call(
                    C,
                    void 0,
                    N,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((k = (E = this.options).onSettled) == null
                ? void 0
                : k.call(E, void 0, N, t, this.state.context)),
              N
            );
          } finally {
            Oe(this, Gt, jn).call(this, { type: "error", error: N });
          }
        } finally {
          R(this, $e).runNext(this);
        }
      }
    }),
    (Yt = new WeakMap()),
    ($e = new WeakMap()),
    (Mr = new WeakMap()),
    (Gt = new WeakSet()),
    (jn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        We.batch(() => {
          (R(this, Yt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, $e).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    F0);
function bE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var cn,
  Lt,
  io,
  V0,
  CE =
    ((V0 = class extends Nl {
      constructor(t = {}) {
        super();
        ne(this, cn);
        ne(this, Lt);
        ne(this, io);
        ((this.config = t),
          Y(this, cn, new Set()),
          Y(this, Lt, new Map()),
          Y(this, io, 0));
      }
      build(t, n, r) {
        const s = new SE({
          mutationCache: this,
          mutationId: ++bo(this, io)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(t) {
        R(this, cn).add(t);
        const n = Wo(t);
        if (typeof n == "string") {
          const r = R(this, Lt).get(n);
          r ? r.push(t) : R(this, Lt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (R(this, cn).delete(t)) {
          const n = Wo(t);
          if (typeof n == "string") {
            const r = R(this, Lt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && R(this, Lt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Wo(t);
        if (typeof n == "string") {
          const r = R(this, Lt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Wo(t);
        if (typeof n == "string") {
          const s =
            (r = R(this, Lt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        We.batch(() => {
          (R(this, cn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            R(this, cn).clear(),
            R(this, Lt).clear());
        });
      }
      getAll() {
        return Array.from(R(this, cn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Xp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Xp(t, n));
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return We.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Mt))),
        );
      }
    }),
    (cn = new WeakMap()),
    (Lt = new WeakMap()),
    (io = new WeakMap()),
    V0);
function Wo(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Jp(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, v;
      const r = t.options,
        s =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        o = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const S = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = vx(t.options, t.fetchOptions),
          y = async (x, b, C) => {
            if (g) return Promise.reject();
            if (b == null && x.pages.length) return Promise.resolve(x);
            const E = (() => {
                const B = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (S(B), B);
              })(),
              k = await m(E),
              { maxPages: N } = t.options,
              j = C ? cE : uE;
            return {
              pages: j(x.pages, k, N),
              pageParams: j(x.pageParams, b, N),
            };
          };
        if (s && i.length) {
          const x = s === "backward",
            b = x ? TE : em,
            C = { pages: i, pageParams: o },
            T = b(r, C);
          a = await y(C, T, x);
        } else {
          const x = e ?? i.length;
          do {
            const b = l === 0 ? (o[0] ?? r.initialPageParam) : em(r, a);
            if (l > 0 && b == null) break;
            ((a = await y(a, b)), l++);
          } while (l < x);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, S;
            return (S = (g = t.options).persister) == null
              ? void 0
              : S.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function em(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function TE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ve,
  zn,
  Bn,
  Ns,
  js,
  $n,
  Ms,
  Ds,
  _0,
  EE =
    ((_0 = class {
      constructor(e = {}) {
        ne(this, ve);
        ne(this, zn);
        ne(this, Bn);
        ne(this, Ns);
        ne(this, js);
        ne(this, $n);
        ne(this, Ms);
        ne(this, Ds);
        (Y(this, ve, e.queryCache || new wE()),
          Y(this, zn, e.mutationCache || new CE()),
          Y(this, Bn, e.defaultOptions || {}),
          Y(this, Ns, new Map()),
          Y(this, js, new Map()),
          Y(this, $n, 0));
      }
      mount() {
        (bo(this, $n)._++,
          R(this, $n) === 1 &&
            (Y(
              this,
              Ms,
              xx.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ve).onFocus());
              }),
            ),
            Y(
              this,
              Ds,
              Qa.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ve).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (bo(this, $n)._--,
          R(this, $n) === 0 &&
            ((e = R(this, Ms)) == null || e.call(this),
            Y(this, Ms, void 0),
            (t = R(this, Ds)) == null || t.call(this),
            Y(this, Ds, void 0)));
      }
      isFetching(e) {
        return R(this, ve).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, zn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ve).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = R(this, ve).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Wc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return R(this, ve)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = R(this, ve).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = rE(t, i);
        if (o !== void 0)
          return R(this, ve)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return We.batch(() =>
          R(this, ve)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ve).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, ve);
        We.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, ve);
        return We.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = We.batch(() =>
            R(this, ve)
              .findAll(e)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(Mt).catch(Mt);
      }
      invalidateQueries(e, t = {}) {
        return We.batch(
          () => (
            R(this, ve)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = We.batch(() =>
            R(this, ve)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Mt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(Mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ve).build(this, t);
        return n.isStaleByTime(Wc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Mt).catch(Mt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Jp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Mt).catch(Mt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Jp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Qa.isOnline()
          ? R(this, zn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, ve);
      }
      getMutationCache() {
        return R(this, zn);
      }
      getDefaultOptions() {
        return R(this, Bn);
      }
      setDefaultOptions(e) {
        Y(this, Bn, e);
      }
      setQueryDefaults(e, t) {
        R(this, Ns).set(qi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, Ns).values()],
          n = {};
        return (
          t.forEach((r) => {
            Zi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, js).set(qi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, js).values()],
          n = {};
        return (
          t.forEach((r) => {
            Zi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, Bn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Af(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Nf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, Bn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (R(this, ve).clear(), R(this, zn).clear());
      }
    }),
    (ve = new WeakMap()),
    (zn = new WeakMap()),
    (Bn = new WeakMap()),
    (Ns = new WeakMap()),
    (js = new WeakMap()),
    ($n = new WeakMap()),
    (Ms = new WeakMap()),
    (Ds = new WeakMap()),
    _0),
  kE = w.createContext(void 0),
  PE = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    p.jsx(kE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xa.apply(this, arguments)
  );
}
var Hn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Hn || (Hn = {}));
const tm = "popstate";
function RE(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Kc(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Ex(s);
  }
  return NE(t, n, null, e);
}
function nt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tx(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function AE() {
  return Math.random().toString(36).substr(2, 8);
}
function nm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Kc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xa(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ml(t) : t,
      { state: n, key: (t && t.key) || r || AE() },
    )
  );
}
function Ex(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ml(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function NE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = Hn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Xa({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Hn.Pop;
    let S = c(),
      m = S == null ? null : S - u;
    ((u = S), l && l({ action: a, location: g.location, delta: m }));
  }
  function f(S, m) {
    a = Hn.Push;
    let y = Kc(g.location, S, m);
    u = c() + 1;
    let x = nm(y, u),
      b = g.createHref(y);
    try {
      o.pushState(x, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      s.location.assign(b);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(S, m) {
    a = Hn.Replace;
    let y = Kc(g.location, S, m);
    u = c();
    let x = nm(y, u),
      b = g.createHref(y);
    (o.replaceState(x, "", b),
      i && l && l({ action: a, location: g.location, delta: 0 }));
  }
  function v(S) {
    let m = s.location.origin !== "null" ? s.location.origin : s.location.href,
      y = typeof S == "string" ? S : Ex(S);
    return (
      (y = y.replace(/ $/, "%20")),
      nt(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          y,
      ),
      new URL(y, m)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(tm, d),
        (l = S),
        () => {
          (s.removeEventListener(tm, d), (l = null));
        }
      );
    },
    createHref(S) {
      return t(s, S);
    },
    createURL: v,
    encodeLocation(S) {
      let m = v(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(S) {
      return o.go(S);
    },
  };
  return g;
}
var rm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(rm || (rm = {}));
function jE(e, t, n) {
  return (n === void 0 && (n = "/"), ME(e, t, n, !1));
}
function ME(e, t, n, r) {
  let s = typeof t == "string" ? Ml(t) : t,
    i = Rx(s.pathname || "/", n);
  if (i == null) return null;
  let o = kx(e);
  DE(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = WE(i);
    a = $E(o[l], u, r);
  }
  return a;
}
function kx(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (nt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Ts([r, l.relativePath]),
      c = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (nt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      kx(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: zE(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of Px(i.path)) s(i, o, l);
    }),
    t
  );
}
function Px(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = Px(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function DE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : BE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const LE = /^:[\w-]+$/,
  OE = 3,
  IE = 2,
  FE = 1,
  VE = 10,
  _E = -2,
  sm = (e) => e === "*";
function zE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(sm) && (r += _E),
    t && (r += IE),
    n
      .filter((s) => !sm(s))
      .reduce((s, i) => s + (LE.test(i) ? OE : i === "" ? FE : VE), r)
  );
}
function BE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $E(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = im(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = im(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(s, d.params),
      o.push({
        params: s,
        pathname: Ts([i, d.pathname]),
        pathnameBase: HE(Ts([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = Ts([i, d.pathnameBase])));
  }
  return o;
}
function im(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = UE(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = a[d] || "";
        o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function UE(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tx(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function WE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Tx(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Rx(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Ts = (e) => e.join("/").replace(/\/\/+/g, "/"),
  HE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function KE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ax = ["post", "put", "patch", "delete"];
new Set(Ax);
const YE = ["get", ...Ax];
new Set(YE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qa() {
  return (
    (qa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qa.apply(this, arguments)
  );
}
const GE = w.createContext(null),
  QE = w.createContext(null),
  Nx = w.createContext(null),
  Dl = w.createContext(null),
  Ll = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  jx = w.createContext(null);
function jf() {
  return w.useContext(Dl) != null;
}
function Mx() {
  return (jf() || nt(!1), w.useContext(Dl).location);
}
function XE(e, t) {
  return qE(e, t);
}
function qE(e, t, n, r) {
  jf() || nt(!1);
  let { navigator: s } = w.useContext(Nx),
    { matches: i } = w.useContext(Ll),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Mx(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? Ml(t) : t;
    (l === "/" || ((d = S.pathname) != null && d.startsWith(l)) || nt(!1),
      (c = S));
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let v = jE(e, { pathname: h }),
    g = nk(
      v &&
        v.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Ts([
              l,
              s.encodeLocation
                ? s.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? l
                : Ts([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? w.createElement(
        Dl.Provider,
        {
          value: {
            location: qa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Hn.Pop,
          },
        },
        g,
      )
    : g;
}
function ZE() {
  let e = ok(),
    t = KE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const JE = w.createElement(ZE, null);
class ek extends w.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Ll.Provider,
          { value: this.props.routeContext },
          w.createElement(jx.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function tk(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = w.useContext(GE);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Ll.Provider, { value: t }, r)
  );
}
function nk(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (c >= 0 || nt(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let h,
      v = !1,
      g = null,
      S = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || JE),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (S = null))
          : u === f &&
            ((v = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, f + 1)),
      y = () => {
        let x;
        return (
          h
            ? (x = g)
            : v
              ? (x = S)
              : d.route.Component
                ? (x = w.createElement(d.route.Component, null))
                : d.route.element
                  ? (x = d.route.element)
                  : (x = c),
          w.createElement(tk, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(ek, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Yc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Yc || {});
function rk(e) {
  let t = w.useContext(QE);
  return (t || nt(!1), t);
}
function sk(e) {
  let t = w.useContext(Ll);
  return (t || nt(!1), t);
}
function ik(e) {
  let t = sk(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || nt(!1), n.route.id);
}
function ok() {
  var e;
  let t = w.useContext(jx),
    n = rk(Yc.UseRouteError),
    r = ik(Yc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ak(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Gc(e) {
  nt(!1);
}
function lk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = Hn.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  jf() && nt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: qa({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o],
    );
  typeof r == "string" && (r = Ml(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = w.useMemo(() => {
      let S = Rx(c, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: h, key: v },
            navigationType: s,
          };
    }, [l, c, d, f, h, v, s]);
  return g == null
    ? null
    : w.createElement(
        Nx.Provider,
        { value: u },
        w.createElement(Dl.Provider, { children: n, value: g }),
      );
}
function uk(e) {
  let { children: t, location: n } = e;
  return XE(Qc(t), n);
}
new Promise(() => {});
function Qc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, s) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === w.Fragment) {
        n.push.apply(n, Qc(r.props.children, i));
        return;
      }
      (r.type !== Gc && nt(!1), !r.props.index || !r.props.children || nt(!1));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = Qc(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ck = "6";
try {
  window.__reactRouterVersion = ck;
} catch {}
const dk = "startTransition",
  om = q0[dk];
function fk(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = w.useRef();
  i.current == null && (i.current = RE({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = w.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (d) => {
        u && om ? om(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    w.useLayoutEffect(() => o.listen(c), [o, c]),
    w.useEffect(() => ak(r), [r]),
    w.createElement(lk, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var am;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(am || (am = {}));
var lm;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(lm || (lm = {}));
const Mf = w.createContext({});
function Df(e) {
  const t = w.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Dx = typeof window < "u",
  Lx = Dx ? w.useLayoutEffect : w.useEffect,
  Ol = w.createContext(null);
function Lf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Za(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const nn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Il = () => {},
  Us = () => {};
const wn = {},
  Ox = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Ix(e) {
  return typeof e == "object" && e !== null;
}
const Fx = (e) => /^0[^.\s]+$/u.test(e);
function Of(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const wt = (e) => e,
  hk = (e, t) => (n) => t(e(n)),
  mo = (...e) => e.reduce(hk),
  Ji = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class If {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Lf(this.subscriptions, t), () => Za(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const St = (e) => e * 1e3,
  vt = (e) => e / 1e3;
function Vx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const _x = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  pk = 1e-7,
  mk = 12;
function yk(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = _x(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > pk && ++a < mk);
  return o;
}
function yo(e, t, n, r) {
  if (e === t && n === r) return wt;
  const s = (i) => yk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : _x(s(i), t, r));
}
const zx = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Bx = (e) => (t) => 1 - e(1 - t),
  $x = yo(0.33, 1.53, 0.69, 0.99),
  Ff = Bx($x),
  Ux = zx(Ff),
  Wx = (e) =>
    (e *= 2) < 1 ? 0.5 * Ff(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Vf = (e) => 1 - Math.sin(Math.acos(e)),
  Hx = Bx(Vf),
  Kx = zx(Vf),
  gk = yo(0.42, 0, 1, 1),
  vk = yo(0, 0, 0.58, 1),
  Yx = yo(0.42, 0, 0.58, 1),
  xk = (e) => Array.isArray(e) && typeof e[0] != "number",
  Gx = (e) => Array.isArray(e) && typeof e[0] == "number",
  um = {
    linear: wt,
    easeIn: gk,
    easeInOut: Yx,
    easeOut: vk,
    circIn: Vf,
    circInOut: Kx,
    circOut: Hx,
    backIn: Ff,
    backInOut: Ux,
    backOut: $x,
    anticipate: Wx,
  },
  wk = (e) => typeof e == "string",
  cm = (e) => {
    if (Gx(e)) {
      Us(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, s] = e;
      return yo(t, n, r, s);
    } else if (wk(e))
      return (
        Us(
          um[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        um[e]
      );
    return e;
  },
  Ho = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  dm = { value: null, addProjectionMetrics: null };
function Sk(e, t) {
  let n = new Set(),
    r = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    (o.has(d) && (c.schedule(d), e()), l++, d(a));
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const g = h && s ? n : r;
      return (f && o.add(d), g.has(d) || g.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), o.delete(d));
    },
    process: (d) => {
      if (((a = d), s)) {
        i = !0;
        return;
      }
      ((s = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && dm.value && dm.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (s = !1),
        i && ((i = !1), c.process(d)));
    },
  };
  return c;
}
const bk = 40;
function Qx(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Ho.reduce((x, b) => ((x[b] = Sk(i, t ? b : void 0)), x), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = o,
    g = () => {
      const x = wn.useManualTiming ? s.timestamp : performance.now();
      ((n = !1),
        wn.useManualTiming ||
          (s.delta = r ? 1e3 / 60 : Math.max(Math.min(x - s.timestamp, bk), 1)),
        (s.timestamp = x),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        u.process(s),
        c.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        v.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    S = () => {
      ((n = !0), (r = !0), s.isProcessing || e(g));
    };
  return {
    schedule: Ho.reduce((x, b) => {
      const C = o[b];
      return (
        (x[b] = (T, E = !1, k = !1) => (n || S(), C.schedule(T, E, k))),
        x
      );
    }, {}),
    cancel: (x) => {
      for (let b = 0; b < Ho.length; b++) o[Ho[b]].cancel(x);
    },
    state: s,
    steps: o,
  };
}
const {
  schedule: ae,
  cancel: ar,
  state: je,
  steps: Tu,
} = Qx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wt, !0);
let ma;
function Ck() {
  ma = void 0;
}
const He = {
    now: () => (
      ma === void 0 &&
        He.set(
          je.isProcessing || wn.useManualTiming
            ? je.timestamp
            : performance.now(),
        ),
      ma
    ),
    set: (e) => {
      ((ma = e), queueMicrotask(Ck));
    },
  },
  Xx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  qx = Xx("--"),
  Tk = Xx("var(--"),
  _f = (e) => (Tk(e) ? Ek.test(e.split("/*")[0].trim()) : !1),
  Ek =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function fm(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const qs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  eo = { ...qs, transform: (e) => nn(0, 1, e) },
  Ko = { ...qs, default: 1 },
  Ri = (e) => Math.round(e * 1e5) / 1e5,
  zf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kk(e) {
  return e == null;
}
const Pk =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Bf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Pk.test(n) && n.startsWith(e)) ||
      (t && !kk(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Zx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(zf);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Rk = (e) => nn(0, 255, e),
  Eu = { ...qs, transform: (e) => Math.round(Rk(e)) },
  Er = {
    test: Bf("rgb", "red"),
    parse: Zx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Eu.transform(e) +
      ", " +
      Eu.transform(t) +
      ", " +
      Eu.transform(n) +
      ", " +
      Ri(eo.transform(r)) +
      ")",
  };
function Ak(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Xc = { test: Bf("#"), parse: Ak, transform: Er.transform },
  go = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mn = go("deg"),
  en = go("%"),
  _ = go("px"),
  Nk = go("vh"),
  jk = go("vw"),
  hm = {
    ...en,
    parse: (e) => en.parse(e) / 100,
    transform: (e) => en.transform(e * 100),
  },
  ds = {
    test: Bf("hsl", "hue"),
    parse: Zx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      en.transform(Ri(t)) +
      ", " +
      en.transform(Ri(n)) +
      ", " +
      Ri(eo.transform(r)) +
      ")",
  },
  be = {
    test: (e) => Er.test(e) || Xc.test(e) || ds.test(e),
    parse: (e) =>
      Er.test(e) ? Er.parse(e) : ds.test(e) ? ds.parse(e) : Xc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Er.transform(e)
          : ds.transform(e),
    getAnimatableNone: (e) => {
      const t = be.parse(e);
      return ((t.alpha = 0), be.transform(t));
    },
  },
  Mk =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Dk(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(zf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(Mk)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Jx = "number",
  ew = "color",
  Lk = "var",
  Ok = "var(",
  pm = "${}",
  Ik =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function to(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      Ik,
      (l) => (
        be.test(l)
          ? (r.color.push(i), s.push(ew), n.push(be.parse(l)))
          : l.startsWith(Ok)
            ? (r.var.push(i), s.push(Lk), n.push(l))
            : (r.number.push(i), s.push(Jx), n.push(parseFloat(l))),
        ++i,
        pm
      ),
    )
    .split(pm);
  return { values: n, split: a, indexes: r, types: s };
}
function tw(e) {
  return to(e).values;
}
function nw(e) {
  const { split: t, types: n } = to(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === Jx
          ? (i += Ri(s[o]))
          : a === ew
            ? (i += be.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const Fk = (e) =>
  typeof e == "number" ? 0 : be.test(e) ? be.getAnimatableNone(e) : e;
function Vk(e) {
  const t = tw(e);
  return nw(e)(t.map(Fk));
}
const lr = {
  test: Dk,
  parse: tw,
  createTransformer: nw,
  getAnimatableNone: Vk,
};
function ku(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function _k({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((s = ku(l, a, e + 1 / 3)), (i = ku(l, a, e)), (o = ku(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ja(e, t) {
  return (n) => (n > 0 ? t : e);
}
const me = (e, t, n) => e + (t - e) * n,
  Pu = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  zk = [Xc, Er, ds],
  Bk = (e) => zk.find((t) => t.test(e));
function mm(e) {
  const t = Bk(e);
  if (
    (Il(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === ds && (n = _k(n)), n);
}
const ym = (e, t) => {
    const n = mm(e),
      r = mm(t);
    if (!n || !r) return Ja(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Pu(n.red, r.red, i)),
      (s.green = Pu(n.green, r.green, i)),
      (s.blue = Pu(n.blue, r.blue, i)),
      (s.alpha = me(n.alpha, r.alpha, i)),
      Er.transform(s)
    );
  },
  qc = new Set(["none", "hidden"]);
function $k(e, t) {
  return qc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Uk(e, t) {
  return (n) => me(e, t, n);
}
function $f(e) {
  return typeof e == "number"
    ? Uk
    : typeof e == "string"
      ? _f(e)
        ? Ja
        : be.test(e)
          ? ym
          : Kk
      : Array.isArray(e)
        ? rw
        : typeof e == "object"
          ? be.test(e)
            ? ym
            : Wk
          : Ja;
}
function rw(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => $f(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Wk(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = $f(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Hk(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s],
      o = e.indexes[i][r[i]],
      a = e.values[o] ?? 0;
    ((n[s] = a), r[i]++);
  }
  return n;
}
const Kk = (e, t) => {
  const n = lr.createTransformer(t),
    r = to(e),
    s = to(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (qc.has(e) && !s.values.length) || (qc.has(t) && !r.values.length)
      ? $k(e, t)
      : mo(rw(Hk(r, s), s.values), n)
    : (Il(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      Ja(e, t));
};
function sw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? me(e, t, n)
    : $f(e)(e, t);
}
const Yk = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => ae.update(t, n),
      stop: () => ar(t),
      now: () => (je.isProcessing ? je.timestamp : He.now()),
    };
  },
  iw = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++)
      r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  el = 2e4;
function Uf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < el; ) ((t += n), (r = e.next(t)));
  return t >= el ? 1 / 0 : t;
}
function Gk(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    s = Math.min(Uf(r), el);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: vt(s),
  };
}
const Qk = 5;
function ow(e, t, n) {
  const r = Math.max(t - Qk, 0);
  return Vx(n - e(r), t - r);
}
const he = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Ru = 0.001;
function Xk({
  duration: e = he.duration,
  bounce: t = he.bounce,
  velocity: n = he.velocity,
  mass: r = he.mass,
}) {
  let s, i;
  Il(
    e <= St(he.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let o = 1 - t;
  ((o = nn(he.minDamping, he.maxDamping, o)),
    (e = nn(he.minDuration, he.maxDuration, vt(e))),
    o < 1
      ? ((s = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            h = Zc(u, o),
            v = Math.exp(-d);
          return Ru - (f / h) * v;
        }),
        (i = (u) => {
          const d = u * o * e,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = Zc(Math.pow(u, 2), o);
          return ((-s(u) + Ru > 0 ? -1 : 1) * ((f - h) * v)) / g;
        }))
      : ((s = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Ru + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = Zk(s, i, a);
  if (((e = St(e)), isNaN(l)))
    return { stiffness: he.stiffness, damping: he.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const qk = 12;
function Zk(e, t, n) {
  let r = n;
  for (let s = 1; s < qk; s++) r = r - e(r) / t(r);
  return r;
}
function Zc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Jk = ["duration", "bounce"],
  eP = ["stiffness", "damping", "mass"];
function gm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function tP(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!gm(e, eP) && gm(e, Jk))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * nn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: he.mass, stiffness: s, damping: i };
    } else {
      const n = Xk(e);
      ((t = { ...t, ...n, mass: he.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function tl(e = he.visualDuration, t = he.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = tP({ ...n, velocity: -vt(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    S = o - i,
    m = vt(Math.sqrt(l / c)),
    y = Math.abs(S) < 5;
  (r || (r = y ? he.restSpeed.granular : he.restSpeed.default),
    s || (s = y ? he.restDelta.granular : he.restDelta.default));
  let x;
  if (g < 1) {
    const C = Zc(m, g);
    x = (T) => {
      const E = Math.exp(-g * m * T);
      return (
        o - E * (((v + g * m * S) / C) * Math.sin(C * T) + S * Math.cos(C * T))
      );
    };
  } else if (g === 1) x = (C) => o - Math.exp(-m * C) * (S + (v + m * S) * C);
  else {
    const C = m * Math.sqrt(g * g - 1);
    x = (T) => {
      const E = Math.exp(-g * m * T),
        k = Math.min(C * T, 300);
      return (
        o - (E * ((v + g * m * S) * Math.sinh(k) + C * S * Math.cosh(k))) / C
      );
    };
  }
  const b = {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const T = x(C);
      if (h) a.done = C >= d;
      else {
        let E = C === 0 ? v : 0;
        g < 1 && (E = C === 0 ? St(v) : ow(x, C, T));
        const k = Math.abs(E) <= r,
          N = Math.abs(o - T) <= s;
        a.done = k && N;
      }
      return ((a.value = a.done ? o : T), a);
    },
    toString: () => {
      const C = Math.min(Uf(b), el),
        T = iw((E) => b.next(C * E).value, C, 30);
      return C + "ms " + T;
    },
    toTransition: () => {},
  };
  return b;
}
tl.applyToOptions = (e) => {
  const t = Gk(e, 100, tl);
  return (
    (e.ease = t.ease),
    (e.duration = St(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Jc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    v = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
          ? a
          : l;
  let g = n * t;
  const S = d + g,
    m = o === void 0 ? S : o(S);
  m !== S && (g = m - d);
  const y = (k) => -g * Math.exp(-k / r),
    x = (k) => m + y(k),
    b = (k) => {
      const N = y(k),
        j = x(k);
      ((f.done = Math.abs(N) <= u), (f.value = f.done ? m : j));
    };
  let C, T;
  const E = (k) => {
    h(f.value) &&
      ((C = k),
      (T = tl({
        keyframes: [f.value, v(f.value)],
        velocity: ow(x, k, f.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let N = !1;
        return (
          !T && C === void 0 && ((N = !0), b(k), E(k)),
          C !== void 0 && k >= C ? T.next(k - C) : (!N && b(k), f)
        );
      },
    }
  );
}
function nP(e, t, n) {
  const r = [],
    s = n || wn.mix || sw,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || wt : t;
      a = mo(l, a);
    }
    r.push(a);
  }
  return r;
}
function rP(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (
    (Us(
      i === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    i === 1)
  )
    return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = nP(t, r, s),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Ji(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(nn(e[0], e[i - 1], c)) : u;
}
function sP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Ji(0, t, r);
    e.push(me(n, 1, s));
  }
}
function iP(e) {
  const t = [0];
  return (sP(t, e.length - 1), t);
}
function oP(e, t) {
  return e.map((n) => n * t);
}
function aP(e, t) {
  return e.map(() => t || Yx).splice(0, e.length - 1);
}
function Ai({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = xk(r) ? r.map(cm) : cm(r),
    i = { done: !1, value: t[0] },
    o = oP(n && n.length === t.length ? n : iP(t), e),
    a = rP(o, t, { ease: Array.isArray(s) ? s : aP(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const lP = (e) => e !== null;
function Wf(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(lP),
    a = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const uP = { decay: Jc, inertia: Jc, tween: Ai, keyframes: Ai, spring: tl };
function aw(e) {
  typeof e.type == "string" && (e.type = uP[e.type]);
}
class Hf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const cP = (e) => e / 100;
class Kf extends Hf {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, s;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== He.now() && this.tick(He.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (s = (r = this.options).onStop) == null || s.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    aw(t);
    const {
      type: n = Ai,
      repeat: r = 0,
      repeatDelay: s = 0,
      repeatType: i,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ai;
    l !== Ai &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = mo(cP, sw(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Uf(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + s),
      (this.totalDuration = this.resolvedDuration * (r + 1) - s),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: s,
      mixKeyframes: i,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: g,
      finalKeyframe: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - s / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      y = this.playbackSpeed >= 0 ? m < 0 : m > s;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = s));
    let x = this.currentTime,
      b = r;
    if (d) {
      const k = Math.min(this.currentTime, s) / a;
      let N = Math.floor(k),
        j = k % 1;
      (!j && k >= 1 && (j = 1),
        j === 1 && N--,
        (N = Math.min(N, d + 1)),
        !!(N % 2) &&
          (f === "reverse"
            ? ((j = 1 - j), h && (j -= h / a))
            : f === "mirror" && (b = o)),
        (x = nn(0, 1, j) * a));
    }
    const C = y ? { done: !1, value: c[0] } : b.next(x);
    i && (C.value = i(C.value));
    let { done: T } = C;
    !y &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= s
          : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      E && v !== Jc && (C.value = Wf(c, this.options, S, this.speed)),
      g && g(C.value),
      E && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return vt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + vt(t);
  }
  get time() {
    return vt(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = St(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(He.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = vt(this.currentTime)));
  }
  play() {
    var s, i;
    if (this.isStopped) return;
    const { driver: t = Yk, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (i = (s = this.options).onPlay) == null || i.call(s));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(He.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function dP(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const kr = (e) => (e * 180) / Math.PI,
  ed = (e) => {
    const t = kr(Math.atan2(e[1], e[0]));
    return td(t);
  },
  fP = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ed,
    rotateZ: ed,
    skewX: (e) => kr(Math.atan(e[1])),
    skewY: (e) => kr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  td = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  vm = ed,
  xm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  wm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  hP = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: xm,
    scaleY: wm,
    scale: (e) => (xm(e) + wm(e)) / 2,
    rotateX: (e) => td(kr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => td(kr(Math.atan2(-e[2], e[0]))),
    rotateZ: vm,
    rotate: vm,
    skewX: (e) => kr(Math.atan(e[4])),
    skewY: (e) => kr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function nd(e) {
  return e.includes("scale") ? 1 : 0;
}
function rd(e, t) {
  if (!e || e === "none") return nd(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n) ((r = hP), (s = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = fP), (s = a));
  }
  if (!s) return nd(t);
  const i = r[t],
    o = s[1].split(",").map(mP);
  return typeof i == "function" ? i(o) : o[i];
}
const pP = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return rd(n, t);
};
function mP(e) {
  return parseFloat(e.trim());
}
const Zs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Js = new Set(Zs),
  Sm = (e) => e === qs || e === _,
  yP = new Set(["x", "y", "z"]),
  gP = Zs.filter((e) => !yP.has(e));
function vP(e) {
  const t = [];
  return (
    gP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Kn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => rd(t, "x"),
  y: (e, { transform: t }) => rd(t, "y"),
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Or = new Set();
let sd = !1,
  id = !1,
  od = !1;
function lw() {
  if (id) {
    const e = Array.from(Or).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = vP(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((id = !1), (sd = !1), Or.forEach((e) => e.complete(od)), Or.clear());
}
function uw() {
  Or.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (id = !0));
  });
}
function xP() {
  ((od = !0), uw(), lw(), (od = !1));
}
class Yf {
  constructor(t, n, r, s, i, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Or.add(this),
          sd || ((sd = !0), ae.read(uw), ae.resolveKeyframes(lw)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    if (t[0] === null) {
      const i = s == null ? void 0 : s.get(),
        o = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]));
    }
    dP(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Or.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Or.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const wP = (e) => e.startsWith("--");
function SP(e, t, n) {
  wP(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const bP = Of(() => window.ScrollTimeline !== void 0),
  CP = {};
function TP(e, t) {
  const n = Of(e);
  return () => CP[t] ?? n();
}
const cw = TP(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  gi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  bm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gi([0, 0.65, 0.55, 1]),
    circOut: gi([0.55, 0, 1, 0.45]),
    backIn: gi([0.31, 0.01, 0.66, -0.59]),
    backOut: gi([0.33, 1.53, 0.69, 0.99]),
  };
function dw(e, t) {
  if (e)
    return typeof e == "function"
      ? cw()
        ? iw(e, t)
        : "ease-out"
      : Gx(e)
        ? gi(e)
        : Array.isArray(e)
          ? e.map((n) => dw(n, t) || bm.easeOut)
          : bm[e];
}
function EP(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = dw(a, s);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (f.pseudoElement = u), e.animate(c, f));
}
function fw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function kP({ type: e, ...t }) {
  return fw(e) && cw()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class hw extends Hf {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: s,
      pseudoElement: i,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!i),
      (this.allowFlatten = o),
      (this.options = t),
      Us(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const u = kP(t);
    ((this.animation = EP(n, r, s, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const c = Wf(s, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : SP(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, s;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((s = (r = this.animation).commitStyles) == null || s.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return vt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + vt(t);
  }
  get time() {
    return vt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = St(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && bP() ? ((this.animation.timeline = t), wt) : n(this)
    );
  }
}
const pw = { anticipate: Wx, backInOut: Ux, circInOut: Kx };
function PP(e) {
  return e in pw;
}
function RP(e) {
  typeof e.ease == "string" && PP(e.ease) && (e.ease = pw[e.ease]);
}
const Au = 10;
class AP extends hw {
  constructor(t) {
    (RP(t),
      aw(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: s,
      element: i,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Kf({ ...o, autoplay: !1 }),
      l = Math.max(Au, He.now() - this.startTime),
      u = nn(0, Au, l - Au);
    (n.setWithVelocity(
      a.sample(Math.max(0, l - u)).value,
      a.sample(l).value,
      u,
    ),
      a.stop());
  }
}
const Cm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (lr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function NP(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function jP(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Cm(s, t),
    a = Cm(i, t);
  return (
    Il(
      o === a,
      `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !o || !a ? !1 : NP(e) || ((n === "spring" || fw(n)) && r)
  );
}
function ad(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const MP = new Set(["opacity", "clipPath", "filter", "transform"]),
  DP = Of(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function LP(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: s,
    damping: i,
    type: o,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    DP() &&
    n &&
    MP.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    s !== "mirror" &&
    i !== 0 &&
    o !== "inertia"
  );
}
const OP = 40;
class IP extends Hf {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var g, S;
        (this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (S = this.keyframeResolver) == null || S.cancel());
      }),
      (this.createdAt = He.now()));
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Yf;
    ((this.keyframeResolver = new h(
      a,
      (g, S, m) => this.onKeyframesResolved(g, S, f, !m),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, s) {
    var S, m;
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = He.now()),
      jP(t, i, o, a) ||
        ((wn.instantAnimations || !l) && (c == null || c(Wf(t, r, n))),
        (t[0] = t[t.length - 1]),
        ad(r),
        (r.repeat = 0)));
    const f = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > OP
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      h = !u && LP(f),
      v =
        (m = (S = f.motionValue) == null ? void 0 : S.owner) == null
          ? void 0
          : m.current,
      g = h ? new AP({ ...f, element: v }) : new Kf(f);
    (g.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(wt),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), xP()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function mw(e, t, n, r = 0, s = 1) {
  const i = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
const FP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function VP(e) {
  const t = FP.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
const _P = 4;
function yw(e, t, n = 1) {
  Us(
    n <= _P,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, s] = VP(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Ox(o) ? parseFloat(o) : o;
  }
  return _f(s) ? yw(s, t, n + 1) : s;
}
const zP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  BP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $P = { type: "keyframes", duration: 0.8 },
  UP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  WP = (e, { keyframes: t }) =>
    t.length > 2
      ? $P
      : Js.has(e)
        ? e.startsWith("scale")
          ? BP(t[1])
          : zP
        : UP,
  HP = (e) => e !== null;
function KP(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(HP),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
function gw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Gf(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? gw(n, e) : n;
}
function YP({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Qf =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Gf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - St(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    (YP(a) || Object.assign(c, WP(e, c)),
      c.duration && (c.duration = St(c.duration)),
      c.repeatDelay && (c.repeatDelay = St(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (ad(c), c.delay === 0 && (d = !0)),
      (wn.instantAnimations ||
        wn.skipAnimations ||
        (s != null && s.shouldSkipAnimations)) &&
        ((d = !0), ad(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !i && t.get() !== void 0)
    ) {
      const f = KP(c.keyframes, a);
      if (f !== void 0) {
        ae.update(() => {
          (c.onUpdate(f), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new Kf(c) : new IP(c);
  };
function Tm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Xf(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Tm(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Tm(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function Es(e, t, n) {
  const r = e.getProps();
  return Xf(r, t, n !== void 0 ? n : r.custom, e);
}
const vw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Zs,
  ]),
  Em = 30,
  GP = (e) => !isNaN(parseFloat(e));
class QP {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var i;
        const s = He.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = He.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = GP(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new If());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            ae.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = He.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Em
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Em);
    return Vx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ws(e, t) {
  return new QP(e, t);
}
const ld = (e) => Array.isArray(e);
function XP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ws(n));
}
function qP(e) {
  return ld(e) ? e[e.length - 1] || 0 : e;
}
function ZP(e, t) {
  const n = Es(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = qP(i[o]);
    XP(e, o, a);
  }
}
const ze = (e) => !!(e && e.getVelocity);
function JP(e) {
  return !!(ze(e) && e.add);
}
function ud(e, t) {
  const n = e.getValue("willChange");
  if (JP(n)) return n.add(t);
  if (!n && wn.WillChange) {
    const r = new wn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function qf(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const e3 = "framerAppearId",
  xw = "data-" + qf(e3);
function ww(e) {
  return e.props[xw];
}
function t3({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Sw(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let { transition: i, transitionEnd: o, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? gw(i, l) : l;
  const u = i == null ? void 0 : i.reduceMotion;
  r && (i = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      v = a[f];
    if (v === void 0 || (d && t3(d, f))) continue;
    const g = { delay: n, ...Gf(i || {}, f) },
      S = h.get();
    if (
      S !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(v) &&
      v === S &&
      !g.velocity
    )
      continue;
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const b = ww(e);
      if (b) {
        const C = window.MotionHandoffAnimation(b, f, ae);
        C !== null && ((g.startTime = C), (m = !0));
      }
    }
    ud(e, f);
    const y = u ?? e.shouldReduceMotion;
    h.start(Qf(f, h, v, y && vw.has(f) ? { type: !1 } : g, e, m));
    const x = h.animation;
    x && c.push(x);
  }
  if (o) {
    const f = () =>
      ae.update(() => {
        o && ZP(e, o);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function cd(e, t, n = {}) {
  var l;
  const r = Es(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(Sw(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return n3(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else return Promise.all([i(), o(n.delay)]);
}
function n3(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        cd(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            mw(e.variantChildren, l, r, s, i),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function r3(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => cd(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = cd(e, t, n);
  else {
    const s = typeof t == "function" ? Es(e, t, n.custom) : t;
    r = Promise.all(Sw(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const s3 = { test: (e) => e === "auto", parse: (e) => e },
  bw = (e) => (t) => t.test(e),
  Cw = [qs, _, en, Mn, jk, Nk, s3],
  km = (e) => Cw.find(bw(e));
function i3(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Fx(e)
      : !0;
}
const o3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function a3(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(zf) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = o3.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const l3 = /\b([a-z-]*)\(.*?\)/gu,
  dd = {
    ...lr,
    getAnimatableNone: (e) => {
      const t = e.match(l3);
      return t ? t.map(a3).join(" ") : e;
    },
  },
  Pm = { ...qs, transform: Math.round },
  u3 = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: Ko,
    scaleX: Ko,
    scaleY: Ko,
    scaleZ: Ko,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: eo,
    originX: hm,
    originY: hm,
    originZ: _,
  },
  Zf = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...u3,
    zIndex: Pm,
    fillOpacity: eo,
    strokeOpacity: eo,
    numOctaves: Pm,
  },
  c3 = {
    ...Zf,
    color: be,
    backgroundColor: be,
    outlineColor: be,
    fill: be,
    stroke: be,
    borderColor: be,
    borderTopColor: be,
    borderRightColor: be,
    borderBottomColor: be,
    borderLeftColor: be,
    filter: dd,
    WebkitFilter: dd,
  },
  Tw = (e) => c3[e];
function Ew(e, t) {
  let n = Tw(e);
  return (
    n !== dd && (n = lr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const d3 = new Set(["auto", "none", "0"]);
function f3(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    (typeof i == "string" && !d3.has(i) && to(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = Ew(n, s);
}
class h3 extends Yf {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), _f(d))) {
        const f = yw(d, n.current);
        (f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !vw.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = km(s),
      a = km(i),
      l = fm(s),
      u = fm(i);
    if (l !== u && Kn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (Sm(o) && Sm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Kn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || i3(t[s])) && r.push(s);
    r.length && f3(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Kn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      o = r[i];
    ((r[i] = Kn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const p3 = new Set(["opacity", "clipPath", "filter", "transform"]);
function kw(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const s = document.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const Pw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function fd(e) {
  return Ix(e) && "offsetHeight" in e;
}
const { schedule: Jf, cancel: zN } = Qx(queueMicrotask, !1),
  Nt = { x: !1, y: !1 };
function Rw() {
  return Nt.x || Nt.y;
}
function m3(e) {
  return e === "x" || e === "y"
    ? Nt[e]
      ? null
      : ((Nt[e] = !0),
        () => {
          Nt[e] = !1;
        })
    : Nt.x || Nt.y
      ? null
      : ((Nt.x = Nt.y = !0),
        () => {
          Nt.x = Nt.y = !1;
        });
}
function Aw(e, t) {
  const n = kw(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function y3(e) {
  return !(e.pointerType === "touch" || Rw());
}
function g3(e, t, n = {}) {
  const [r, s, i] = Aw(e, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", v);
        },
        d = (S) => {
          (u && (u(S), (u = void 0)), c());
        },
        f = (S) => {
          ((a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(S)));
        },
        h = () => {
          ((a = !0),
            window.addEventListener("pointerup", f, s),
            window.addEventListener("pointercancel", f, s));
        },
        v = (S) => {
          if (S.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(S);
          }
        },
        g = (S) => {
          if (!y3(S)) return;
          l = !1;
          const m = t(o, S);
          typeof m == "function" &&
            ((u = m), o.addEventListener("pointerleave", v, s));
        };
      (o.addEventListener("pointerenter", g, s),
        o.addEventListener("pointerdown", h, s));
    }),
    i
  );
}
const Nw = (e, t) => (t ? (e === t ? !0 : Nw(e, t.parentElement)) : !1),
  eh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  v3 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function x3(e) {
  return v3.has(e.tagName) || e.isContentEditable === !0;
}
const w3 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function S3(e) {
  return w3.has(e.tagName) || e.isContentEditable === !0;
}
const ya = new WeakSet();
function Rm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Nu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const b3 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Rm(() => {
    if (ya.has(n)) return;
    Nu(n, "down");
    const s = Rm(() => {
        Nu(n, "up");
      }),
      i = () => Nu(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Am(e) {
  return eh(e) && !Rw();
}
const Nm = new WeakSet();
function C3(e, t, n = {}) {
  const [r, s, i] = Aw(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Am(a) || Nm.has(a)) return;
      (ya.add(l), n.stopPropagation && Nm.add(a));
      const u = t(l, a),
        c = (h, v) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ya.has(l) && ya.delete(l),
            Am(h) && typeof u == "function" && u(h, { success: v }));
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Nw(l, h.target),
          );
        },
        f = (h) => {
          c(h, !1);
        };
      (window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        fd(a) &&
          (a.addEventListener("focus", (u) => b3(u, s)),
          !x3(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    i
  );
}
function th(e) {
  return Ix(e) && "ownerSVGElement" in e;
}
const ga = new WeakMap();
let Dn;
const jw = (e, t, n) => (r, s) =>
    s && s[0]
      ? s[0][e + "Size"]
      : th(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  T3 = jw("inline", "width", "offsetWidth"),
  E3 = jw("block", "height", "offsetHeight");
function k3({ target: e, borderBoxSize: t }) {
  var n;
  (n = ga.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return T3(e, t);
        },
        get height() {
          return E3(e, t);
        },
      });
    });
}
function P3(e) {
  e.forEach(k3);
}
function R3() {
  typeof ResizeObserver > "u" || (Dn = new ResizeObserver(P3));
}
function A3(e, t) {
  Dn || R3();
  const n = kw(e);
  return (
    n.forEach((r) => {
      let s = ga.get(r);
      (s || ((s = new Set()), ga.set(r, s)),
        s.add(t),
        Dn == null || Dn.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const s = ga.get(r);
        (s == null || s.delete(t),
          (s != null && s.size) || Dn == null || Dn.unobserve(r));
      });
    }
  );
}
const va = new Set();
let fs;
function N3() {
  ((fs = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    va.forEach((t) => t(e));
  }),
    window.addEventListener("resize", fs));
}
function j3(e) {
  return (
    va.add(e),
    fs || N3(),
    () => {
      (va.delete(e),
        !va.size &&
          typeof fs == "function" &&
          (window.removeEventListener("resize", fs), (fs = void 0)));
    }
  );
}
function jm(e, t) {
  return typeof e == "function" ? j3(e) : A3(e, t);
}
function M3(e) {
  return th(e) && e.tagName === "svg";
}
const D3 = [...Cw, be, lr],
  L3 = (e) => D3.find(bw(e)),
  Mm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  hs = () => ({ x: Mm(), y: Mm() }),
  Dm = () => ({ min: 0, max: 0 }),
  Te = () => ({ x: Dm(), y: Dm() }),
  O3 = new WeakMap();
function Fl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function no(e) {
  return typeof e == "string" || Array.isArray(e);
}
const nh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  rh = ["initial", ...nh];
function Vl(e) {
  return Fl(e.animate) || rh.some((t) => no(e[t]));
}
function Mw(e) {
  return !!(Vl(e) || e.variants);
}
function I3(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (ze(s)) e.addValue(r, s);
    else if (ze(i)) e.addValue(r, Ws(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ws(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const hd = { current: null },
  Dw = { current: !1 },
  F3 = typeof window < "u";
function V3() {
  if (((Dw.current = !0), !!F3))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (hd.current = e.matches);
      (e.addEventListener("change", t), t());
    } else hd.current = !1;
}
const Lm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let nl = {};
function Lw(e) {
  nl = e;
}
function _3() {
  return nl;
}
class z3 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      skipAnimations: i,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Yf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = He.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), ae.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.skipAnimationsConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Vl(n)),
      (this.isVariantNode = Mw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in f) {
      const v = f[h];
      u[h] !== void 0 && ze(v) && v.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        ((n = this.values.get(s)) == null || n.jump(this.initialValues[s]),
          (this.latestValues[s] = this.initialValues[s]));
    ((this.current = t),
      O3.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, i) => this.bindToMotionValue(i, s)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Dw.current || V3(), (this.shouldReduceMotion = hd.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      ar(this.notifyUpdate),
      ar(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && p3.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        d = new hw({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: St(c),
        }),
        f = o(d);
      this.valueSubscriptions.set(t, () => {
        (f(), d.cancel());
      });
      return;
    }
    const r = Js.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && ae.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let i;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i && i(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in nl) {
      const n = nl[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Lm.length; r++) {
      const s = Lm[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = I3(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ws(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Ox(r) || Fx(r))
          ? (r = parseFloat(r))
          : !L3(r) && lr.test(n) && (r = Ew(t, n)),
        this.setBaseTarget(t, ze(r) ? r.get() : r)),
      ze(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Xf(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ze(s)
      ? s
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new If()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Jf.render(this.render);
  }
}
class Ow extends z3 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = h3));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ze(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class fr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Iw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function B3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $3(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ju(e) {
  return e === void 0 || e === 1;
}
function pd({ scale: e, scaleX: t, scaleY: n }) {
  return !ju(e) || !ju(t) || !ju(n);
}
function Sr(e) {
  return (
    pd(e) ||
    Fw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Fw(e) {
  return Om(e.x) || Om(e.y);
}
function Om(e) {
  return e && e !== "0%";
}
function rl(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Im(e, t, n, r, s) {
  return (s !== void 0 && (e = rl(e, s, r)), rl(e, n, r) + t);
}
function md(e, t = 0, n = 1, r, s) {
  ((e.min = Im(e.min, t, n, r, s)), (e.max = Im(e.max, t, n, r, s)));
}
function Vw(e, { x: t, y: n }) {
  (md(e.x, t.translate, t.scale, t.originPoint),
    md(e.y, n.translate, n.scale, n.originPoint));
}
const Fm = 0.999999999999,
  Vm = 1.0000000000001;
function U3(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ms(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Vw(e, o)),
      r && Sr(i.latestValues) && ms(e, i.latestValues));
  }
  (t.x < Vm && t.x > Fm && (t.x = 1), t.y < Vm && t.y > Fm && (t.y = 1));
}
function ps(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function _m(e, t, n, r, s = 0.5) {
  const i = me(e.min, e.max, s);
  md(e, t, n, i, r);
}
function ms(e, t) {
  (_m(e.x, t.x, t.scaleX, t.scale, t.originX),
    _m(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function _w(e, t) {
  return Iw($3(e.getBoundingClientRect(), t));
}
function W3(e, t, n) {
  const r = _w(e, n),
    { scroll: s } = t;
  return (s && (ps(r.x, s.offset.x), ps(r.y, s.offset.y)), r);
}
const H3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  K3 = Zs.length;
function Y3(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < K3; i++) {
    const o = Zs[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = o.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = Pw(a, Zf[o]);
      if (!l) {
        s = !1;
        const c = H3[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function sh(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Js.has(l)) {
      o = !0;
      continue;
    } else if (qx(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Pw(u, Zf[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Y3(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function zw(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t) i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n) i.setProperty(o, n[o]);
}
function zm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = zm(e, t.target.x),
        r = zm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  G3 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = lr.parse(e);
      if (s.length > 5) return r;
      const i = lr.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const u = me(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  },
  yd = {
    borderRadius: {
      ...fi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fi,
    borderTopRightRadius: fi,
    borderBottomLeftRadius: fi,
    borderBottomRightRadius: fi,
    boxShadow: G3,
  };
function Bw(e, { layout: t, layoutId: n }) {
  return (
    Js.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!yd[e] || e === "opacity"))
  );
}
function ih(e, t, n) {
  var o;
  const r = e.style,
    s = t == null ? void 0 : t.style,
    i = {};
  if (!r) return i;
  for (const a in r)
    (ze(r[a]) ||
      (s && ze(s[a])) ||
      Bw(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function Q3(e) {
  return window.getComputedStyle(e);
}
class X3 extends Ow {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = zw));
  }
  readValueFromInstance(t, n) {
    var r;
    if (Js.has(n))
      return (r = this.projection) != null && r.isProjecting ? nd(n) : pP(t, n);
    {
      const s = Q3(t),
        i = (qx(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _w(t, n);
  }
  build(t, n, r) {
    sh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ih(t, n, r);
  }
}
const q3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Z3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function J3(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? q3 : Z3;
  ((e[i.offset] = `${-r}`), (e[i.array] = `${t} ${n}`));
}
const eR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function $w(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: s,
    pathSpacing: i = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((sh(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox));
  for (const h of eR) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && J3(d, s, i, o, !1));
}
const Uw = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Ww = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function tR(e, t, n, r) {
  zw(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Uw.has(s) ? s : qf(s), t.attrs[s]);
}
function Hw(e, t, n) {
  const r = ih(e, t, n);
  for (const s in e)
    if (ze(e[s]) || ze(t[s])) {
      const i =
        Zs.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
class nR extends Ow {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Te));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Js.has(n)) {
      const r = Tw(n);
      return (r && r.default) || 0;
    }
    return ((n = Uw.has(n) ? n : qf(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hw(t, n, r);
  }
  build(t, n, r) {
    $w(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    tR(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = Ww(t.tagName)), super.mount(t));
  }
}
const rR = rh.length;
function Kw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Kw(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < rR; n++) {
    const r = rh[n],
      s = e.props[r];
    (no(s) || s === !1) && (t[r] = s);
  }
  return t;
}
function Yw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const sR = [...nh].reverse(),
  iR = nh.length;
function oR(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => r3(e, n, r)));
}
function aR(e) {
  let t = oR(e),
    n = Bm(),
    r = !0;
  const s = (l) => (u, c) => {
    var f;
    const d = Es(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: h, transitionEnd: v, ...g } = d;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = Kw(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      v = 1 / 0;
    for (let S = 0; S < iR; S++) {
      const m = sR[S],
        y = n[m],
        x = u[m] !== void 0 ? u[m] : c[m],
        b = no(x),
        C = m === l ? y.isActive : null;
      C === !1 && (v = S);
      let T = x === c[m] && x !== u[m] && b;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (y.protectedKeys = { ...h }),
        (!y.isActive && C === null) ||
          (!x && !y.prevProp) ||
          Fl(x) ||
          typeof x == "boolean")
      )
        continue;
      if (m === "exit" && y.isActive && C !== !0) {
        y.prevResolvedValues && (h = { ...h, ...y.prevResolvedValues });
        continue;
      }
      const E = lR(y.prevProp, x);
      let k = E || (m === l && y.isActive && !T && b) || (S > v && b),
        N = !1;
      const j = Array.isArray(x) ? x : [x];
      let B = j.reduce(s(m), {});
      C === !1 && (B = {});
      const { prevResolvedValues: F = {} } = y,
        Q = { ...F, ...B },
        O = (z) => {
          ((k = !0),
            f.has(z) && ((N = !0), f.delete(z)),
            (y.needsAnimating[z] = !0));
          const P = e.getValue(z);
          P && (P.liveStyle = !1);
        };
      for (const z in Q) {
        const P = B[z],
          A = F[z];
        if (h.hasOwnProperty(z)) continue;
        let I = !1;
        (ld(P) && ld(A) ? (I = !Yw(P, A)) : (I = P !== A),
          I
            ? P != null
              ? O(z)
              : f.add(z)
            : P !== void 0 && f.has(z)
              ? O(z)
              : (y.protectedKeys[z] = !0));
      }
      ((y.prevProp = x),
        (y.prevResolvedValues = B),
        y.isActive && (h = { ...h, ...B }),
        r && e.blockInitialAnimation && (k = !1));
      const q = T && E;
      k &&
        (!q || N) &&
        d.push(
          ...j.map((z) => {
            const P = { type: m };
            if (
              typeof z == "string" &&
              r &&
              !q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                I = Es(A, z);
              if (A.enteringChildren && I) {
                const { delayChildren: H } = I.transition || {};
                P.delay = mw(A.enteringChildren, e, H);
              }
            }
            return { animation: z, options: P };
          }),
        );
    }
    if (f.size) {
      const S = {};
      if (typeof u.initial != "boolean") {
        const m = Es(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        m && m.transition && (S.transition = m.transition);
      }
      (f.forEach((m) => {
        const y = e.getBaseTarget(m),
          x = e.getValue(m);
        (x && (x.liveStyle = !0), (S[m] = y ?? null));
      }),
        d.push({ animation: S }));
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((f) => {
        var h;
        return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Bm();
    },
  };
}
function lR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Yw(t, e) : !1;
}
function gr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Bm() {
  return {
    animate: gr(!0),
    whileInView: gr(),
    whileHover: gr(),
    whileTap: gr(),
    whileDrag: gr(),
    whileFocus: gr(),
    exit: gr(),
  };
}
function $m(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function At(e, t) {
  ($m(e.x, t.x), $m(e.y, t.y));
}
function Um(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const Gw = 1e-4,
  uR = 1 - Gw,
  cR = 1 + Gw,
  Qw = 0.01,
  dR = 0 - Qw,
  fR = 0 + Qw;
function Ke(e) {
  return e.max - e.min;
}
function hR(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Wm(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = me(t.min, t.max, e.origin)),
    (e.scale = Ke(n) / Ke(t)),
    (e.translate = me(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= uR && e.scale <= cR) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= dR && e.translate <= fR) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Ni(e, t, n, r) {
  (Wm(e.x, t.x, n.x, r ? r.originX : void 0),
    Wm(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Hm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Ke(t)));
}
function pR(e, t, n) {
  (Hm(e.x, t.x, n.x), Hm(e.y, t.y, n.y));
}
function Km(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Ke(t)));
}
function sl(e, t, n) {
  (Km(e.x, t.x, n.x), Km(e.y, t.y, n.y));
}
function Ym(e, t, n, r, s) {
  return (
    (e -= t),
    (e = rl(e, 1 / n, r)),
    s !== void 0 && (e = rl(e, 1 / s, r)),
    e
  );
}
function mR(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (en.test(t) &&
      ((t = parseFloat(t)), (t = me(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = me(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Ym(e.min, t, n, a, s)),
    (e.max = Ym(e.max, t, n, a, s)));
}
function Gm(e, t, [n, r, s], i, o) {
  mR(e, t[n], t[r], t[s], t.scale, i, o);
}
const yR = ["x", "scaleX", "originX"],
  gR = ["y", "scaleY", "originY"];
function Qm(e, t, n, r) {
  (Gm(e.x, t, yR, n ? n.x : void 0, r ? r.x : void 0),
    Gm(e.y, t, gR, n ? n.y : void 0, r ? r.y : void 0));
}
function Xm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Xw(e) {
  return Xm(e.x) && Xm(e.y);
}
function qm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function vR(e, t) {
  return qm(e.x, t.x) && qm(e.y, t.y);
}
function Zm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function qw(e, t) {
  return Zm(e.x, t.x) && Zm(e.y, t.y);
}
function Jm(e) {
  return Ke(e.x) / Ke(e.y);
}
function e0(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Ht(e) {
  return [e("x"), e("y")];
}
function xR(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const Zw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  wR = Zw.length,
  t0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  n0 = (e) => typeof e == "number" || _.test(e);
function SR(e, t, n, r, s, i) {
  s
    ? ((e.opacity = me(0, n.opacity ?? 1, bR(r))),
      (e.opacityExit = me(t.opacity ?? 1, 0, CR(r))))
    : i && (e.opacity = me(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < wR; o++) {
    const a = `border${Zw[o]}Radius`;
    let l = r0(t, a),
      u = r0(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || n0(l) === n0(u)
        ? ((e[a] = Math.max(me(t0(l), t0(u), r), 0)),
          (en.test(u) || en.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = me(t.rotate || 0, n.rotate || 0, r));
}
function r0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const bR = Jw(0, 0.5, Hx),
  CR = Jw(0.5, 0.95, wt);
function Jw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ji(e, t, r)));
}
function TR(e, t, n) {
  const r = ze(e) ? e : Ws(e);
  return (r.start(Qf("", r, t, n)), r.animation);
}
function ro(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const ER = (e, t) => e.depth - t.depth;
class kR {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Lf(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Za(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(ER),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function PR(e, t) {
  const n = He.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (ar(r), e(i - t));
    };
  return (ae.setup(r, !0), () => ar(r));
}
function xa(e) {
  return ze(e) ? e.get() : e;
}
class RR {
  constructor() {
    this.members = [];
  }
  add(t) {
    Lf(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const s = r.instance;
      s &&
        s.isConnected === !1 &&
        r.isPresent !== !1 &&
        !r.snapshot &&
        Za(this.members, r);
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (Za(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s],
        o = i.instance;
      if (i.isPresent !== !1 && (!o || o.isConnected !== !1)) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(), t.scheduleRender());
      const s = r.options.layoutDependency,
        i = t.options.layoutDependency;
      if (!(s !== void 0 && i !== void 0 && s === i)) {
        const l = r.instance;
        (l && l.isConnected === !1 && !r.snapshot) ||
          ((t.resumeFrom = r),
          n && (t.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((t.snapshot = r.snapshot),
            (t.snapshot.latestValues = r.animationValues || r.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      }
      const { crossfade: a } = t.options;
      a === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Mu = ["", "X", "Y", "Z"],
  AR = 1e3;
let NR = 0;
function Du(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function e1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = ww(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ae, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && e1(r);
}
function t1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = NR++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(DR),
            this.nodes.forEach(FR),
            this.nodes.forEach(VR),
            this.nodes.forEach(LR));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new kR());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new If()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = th(o) && !M3(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (ae.read(() => {
          d = window.innerWidth;
        }),
          e(o, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = PR(f, 250)),
              wa.hasAnimatedSinceResize &&
                ((wa.hasAnimatedSinceResize = !1), this.nodes.forEach(o0)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || UR,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: S } =
                  u.getProps(),
                m = !this.targetLayout || !qw(this.targetLayout, h),
                y = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                y ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const x = { ...Gf(v, "layout"), onPlay: g, onComplete: S };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(c, y));
              } else
                (d || o0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = h;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ar(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(_R),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          e1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(s0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(i0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(IR),
            this.nodes.forEach(jR),
            this.nodes.forEach(MR))
          : this.nodes.forEach(i0),
        this.clearAllSnapshots());
      const a = He.now();
      ((je.delta = nn(0, 1e3 / 60, a - je.timestamp)),
        (je.timestamp = a),
        (je.isProcessing = !0),
        Tu.update.process(je),
        Tu.preRender.process(je),
        Tu.render.process(je),
        (je.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Jf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(OR), this.sharedNodes.forEach(zR));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ke(this.snapshot.measuredBox.x) &&
          !Ke(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Xw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || Sr(this.latestValues) || c) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        WR(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return Te();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(HR)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ps(a.x, c.offset.x), ps(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Te();
      if ((At(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && At(a, o), ps(a.x, d.offset.x), ps(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Te();
      At(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ms(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Sr(c.latestValues) && ms(l, c.latestValues));
      }
      return (Sr(this.latestValues) && ms(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = Te();
      At(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Sr(u.latestValues)) continue;
        pd(u.latestValues) && u.updateSnapshot();
        const c = Te(),
          d = u.measurePageBox();
        (At(c, d),
          Qm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (Sr(this.latestValues) && Qm(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== je.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = je.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Te()), (this.targetWithTransforms = Te())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              pR(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : At(this.target, this.layout.layoutBox),
                Vw(this.target, this.targetDelta))
              : At(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pd(this.parent.latestValues) ||
          Fw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Te()),
        (this.relativeTargetOrigin = Te()),
        sl(this.relativeTargetOrigin, a, l),
        At(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === je.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      (U3(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Te())));
      const { target: h } = o;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Um(this.prevProjectionDelta.x, this.projectionDelta.x),
          Um(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ni(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !e0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !e0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = hs()),
        (this.projectionDelta = hs()),
        (this.projectionDeltaWithTransform = hs()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = hs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = Te(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = h !== v,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        y = !!(g && !m && this.options.crossfade === !0 && !this.path.some($R));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        (a0(d.x, o.x, C),
          a0(d.y, o.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (sl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            BR(this.relativeTarget, this.relativeTargetOrigin, f, C),
            x && vR(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = Te()),
            At(x, this.relativeTarget)),
          g &&
            ((this.animationValues = c), SR(c, u, this.latestValues, C, y, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (ar(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ae.update(() => {
          ((wa.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ws(0)),
            (this.currentAnimation = TR(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(AR),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          n1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Te();
          const d = Ke(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + d));
          const f = Ke(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + f));
        }
        (At(a, l),
          ms(a, c),
          Ni(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new RR()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Du("z", o, u, this.animationValues);
      for (let c = 0; c < Mu.length; c++)
        (Du(`rotate${Mu[c]}`, o, u, this.animationValues),
          Du(`skew${Mu[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = xa(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = xa(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Sr(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = xR(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (o.transform = d));
      const { x: f, y: h } = this.projectionDelta;
      ((o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in yd) {
        if (c[v] === void 0) continue;
        const { correct: g, applyTo: S, isCSSVariable: m } = yd[v],
          y = d === "none" ? c[v] : g(c[v], u);
        if (S) {
          const x = S.length;
          for (let b = 0; b < x; b++) o[S[b]] = y;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = y) : (o[v] = y);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? xa(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(s0),
        this.root.sharedNodes.clear());
    }
  };
}
function jR(e) {
  e.updateLayout();
}
function MR(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = t.source !== e.layout.source;
    i === "size"
      ? Ht((d) => {
          const f = o ? t.measuredBox[d] : t.layoutBox[d],
            h = Ke(f);
          ((f.min = r[d].min), (f.max = f.min + h));
        })
      : n1(i, t.layoutBox, r) &&
        Ht((d) => {
          const f = o ? t.measuredBox[d] : t.layoutBox[d],
            h = Ke(r[d]);
          ((f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h)));
        });
    const a = hs();
    Ni(a, r, t.layoutBox);
    const l = hs();
    o ? Ni(l, e.applyTransform(s, !0), t.measuredBox) : Ni(l, r, t.layoutBox);
    const u = !Xw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = Te();
          sl(v, t.layoutBox, f.layoutBox);
          const g = Te();
          (sl(g, r, h.layoutBox),
            qw(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function DR(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function LR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function OR(e) {
  e.clearSnapshot();
}
function s0(e) {
  e.clearMeasurements();
}
function i0(e) {
  e.isLayoutDirty = !1;
}
function IR(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function o0(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function FR(e) {
  e.resolveTargetDelta();
}
function VR(e) {
  e.calcProjection();
}
function _R(e) {
  e.resetSkewAndRotation();
}
function zR(e) {
  e.removeLeadSnapshot();
}
function a0(e, t, n) {
  ((e.translate = me(t.translate, 0, n)),
    (e.scale = me(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function l0(e, t, n, r) {
  ((e.min = me(t.min, n.min, r)), (e.max = me(t.max, n.max, r)));
}
function BR(e, t, n, r) {
  (l0(e.x, t.x, n.x, r), l0(e.y, t.y, n.y, r));
}
function $R(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const UR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  u0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  c0 = u0("applewebkit/") && !u0("chrome/") ? Math.round : wt;
function d0(e) {
  ((e.min = c0(e.min)), (e.max = c0(e.max)));
}
function WR(e) {
  (d0(e.x), d0(e.y));
}
function n1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !hR(Jm(t), Jm(n), 0.2))
  );
}
function HR(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const KR = t1({
    attachResizeListener: (e, t) => ro(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Lu = { current: void 0 },
  r1 = t1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Lu.current) {
        const e = new KR({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Lu.current = e));
      }
      return Lu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  oh = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function f0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function YR(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = f0(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : f0(e[s], null);
        }
      };
  };
}
function GR(...e) {
  return w.useCallback(YR(...e), e);
}
class QR extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = n.offsetParent,
        s = (fd(r) && r.offsetWidth) || 0,
        i = (fd(r) && r.offsetHeight) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = s - o.width - o.left),
        (o.bottom = i - o.height - o.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function XR({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: s,
  pop: i,
}) {
  var f;
  const o = w.useId(),
    a = w.useRef(null),
    l = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = w.useContext(oh),
    c =
      ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref),
    d = GR(a, c);
  return (
    w.useInsertionEffect(() => {
      const {
        width: h,
        height: v,
        top: g,
        left: S,
        right: m,
        bottom: y,
      } = l.current;
      if (t || i === !1 || !a.current || !h || !v) return;
      const x = n === "left" ? `left: ${S}` : `right: ${m}`,
        b = r === "bottom" ? `bottom: ${y}` : `top: ${g}`;
      a.current.dataset.motionPopId = o;
      const C = document.createElement("style");
      u && (C.nonce = u);
      const T = s ?? document.head;
      return (
        T.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${x}px !important;
            ${b}px !important;
          }
        `),
        () => {
          T.contains(C) && T.removeChild(C);
        }
      );
    }, [t]),
    p.jsx(QR, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: i,
      children: i === !1 ? e : w.cloneElement(e, { ref: d }),
    })
  );
}
const qR = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = Df(ZR),
    d = w.useId();
  let f = !0,
    h = w.useMemo(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: s,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const g of c.values()) if (!g) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r],
    );
  return (
    i && f && (h = { ...h }),
    w.useMemo(() => {
      c.forEach((v, g) => c.set(g, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = p.jsx(XR, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    p.jsx(Ol.Provider, { value: h, children: e })
  );
};
function ZR() {
  return new Map();
}
function s1(e = !0) {
  const t = w.useContext(Ol);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = w.useId();
  w.useEffect(() => {
    if (e) return s(i);
  }, [e]);
  const o = w.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Yo = (e) => e.key || "";
function h0(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const rt = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, d] = s1(o),
      f = w.useMemo(() => h0(e), [e]),
      h = o && !c ? [] : f.map(Yo),
      v = w.useRef(!0),
      g = w.useRef(f),
      S = Df(() => new Map()),
      m = w.useRef(new Set()),
      [y, x] = w.useState(f),
      [b, C] = w.useState(f);
    Lx(() => {
      ((v.current = !1), (g.current = f));
      for (let k = 0; k < b.length; k++) {
        const N = Yo(b[k]);
        h.includes(N)
          ? (S.delete(N), m.current.delete(N))
          : S.get(N) !== !0 && S.set(N, !1);
      }
    }, [b, h.length, h.join("-")]);
    const T = [];
    if (f !== y) {
      let k = [...f];
      for (let N = 0; N < b.length; N++) {
        const j = b[N],
          B = Yo(j);
        h.includes(B) || (k.splice(N, 0, j), T.push(j));
      }
      return (i === "wait" && T.length && (k = T), C(h0(k)), x(f), null);
    }
    const { forceRender: E } = w.useContext(Mf);
    return p.jsx(p.Fragment, {
      children: b.map((k) => {
        const N = Yo(k),
          j = o && !c ? !1 : f === b || h.includes(N),
          B = () => {
            if (m.current.has(N)) return;
            if ((m.current.add(N), S.has(N))) S.set(N, !0);
            else return;
            let F = !0;
            (S.forEach((Q) => {
              Q || (F = !1);
            }),
              F &&
                (E == null || E(),
                C(g.current),
                o && (d == null || d()),
                r && r()));
          };
        return p.jsx(
          qR,
          {
            isPresent: j,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: s,
            mode: i,
            root: u,
            onExitComplete: j ? void 0 : B,
            anchorX: a,
            anchorY: l,
            children: k,
          },
          N,
        );
      }),
    });
  },
  i1 = w.createContext({ strict: !1 }),
  p0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let m0 = !1;
function JR() {
  if (m0) return;
  const e = {};
  for (const t in p0) e[t] = { isEnabled: (n) => p0[t].some((r) => !!n[r]) };
  (Lw(e), (m0 = !0));
}
function o1() {
  return (JR(), _3());
}
function eA(e) {
  const t = o1();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Lw(t);
}
const tA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function il(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    tA.has(e)
  );
}
let a1 = (e) => !il(e);
function nA(e) {
  typeof e == "function" && (a1 = (t) => (t.startsWith("on") ? !il(t) : e(t)));
}
try {
  nA(require("@emotion/is-prop-valid").default);
} catch {}
function rA(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((a1(s) ||
        (n === !0 && il(s)) ||
        (!t && !il(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
const _l = w.createContext({});
function sA(e, t) {
  if (Vl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || no(n) ? n : void 0,
      animate: no(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function iA(e) {
  const { initial: t, animate: n } = sA(e, w.useContext(_l));
  return w.useMemo(() => ({ initial: t, animate: n }), [y0(t), y0(n)]);
}
function y0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ah = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function l1(e, t, n) {
  for (const r in t) !ze(t[r]) && !Bw(r, n) && (e[r] = t[r]);
}
function oA({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = ah();
    return (sh(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function aA(e, t) {
  const n = e.style || {},
    r = {};
  return (l1(r, n, e), Object.assign(r, oA(e, t)), r);
}
function lA(e, t) {
  const n = {},
    r = aA(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const u1 = () => ({ ...ah(), attrs: {} });
function uA(e, t, n, r) {
  const s = w.useMemo(() => {
    const i = u1();
    return (
      $w(i, t, Ww(r), e.transformTemplate, e.style),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (l1(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
const cA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function lh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(cA.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function dA(e, t, n, { latestValues: r }, s, i = !1, o) {
  const l = ((o ?? lh(e)) ? uA : lA)(t, r, s, e),
    u = rA(t, typeof e == "string", i),
    c = e !== w.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = w.useMemo(() => (ze(d) ? d.get() : d), [d]);
  return w.createElement(e, { ...c, children: f });
}
function fA({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return { latestValues: hA(n, r, s, e), renderState: t() };
}
function hA(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = xa(i[f]);
  let { initial: o, animate: a } = e;
  const l = Vl(e),
    u = Mw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Fl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Xf(e, f[h]);
      if (v) {
        const { transitionEnd: g, transition: S, ...m } = v;
        for (const y in m) {
          let x = m[y];
          if (Array.isArray(x)) {
            const b = c ? x.length - 1 : 0;
            x = x[b];
          }
          x !== null && (s[y] = x);
        }
        for (const y in g) s[y] = g[y];
      }
    }
  }
  return s;
}
const c1 = (e) => (t, n) => {
    const r = w.useContext(_l),
      s = w.useContext(Ol),
      i = () => fA(e, t, r, s);
    return n ? i() : Df(i);
  },
  pA = c1({ scrapeMotionValuesFromProps: ih, createRenderState: ah }),
  mA = c1({ scrapeMotionValuesFromProps: Hw, createRenderState: u1 }),
  yA = Symbol.for("motionComponentSymbol");
function gA(e, t, n) {
  const r = w.useRef(n);
  w.useInsertionEffect(() => {
    r.current = n;
  });
  const s = w.useRef(null);
  return w.useCallback(
    (i) => {
      var a;
      (i && ((a = e.onMount) == null || a.call(e, i)),
        t && (i ? t.mount(i) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (i) {
          const l = o(i);
          typeof l == "function" && (s.current = l);
        } else s.current ? (s.current(), (s.current = null)) : o(i);
      else o && (o.current = i);
    },
    [t],
  );
}
const d1 = w.createContext({});
function Zr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function vA(e, t, n, r, s, i) {
  var x, b;
  const { visualElement: o } = w.useContext(_l),
    a = w.useContext(i1),
    l = w.useContext(Ol),
    u = w.useContext(oh),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = w.useRef(null),
    h = w.useRef(!1);
  ((r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: i,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  const v = f.current,
    g = w.useContext(d1);
  v &&
    !v.projection &&
    s &&
    (v.type === "html" || v.type === "svg") &&
    xA(f.current, n, s, g);
  const S = w.useRef(!1);
  w.useInsertionEffect(() => {
    v && S.current && v.update(n, l);
  });
  const m = n[xw],
    y = w.useRef(
      !!m &&
        !((x = window.MotionHandoffIsComplete) != null && x.call(window, m)) &&
        ((b = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : b.call(window, m)),
    );
  return (
    Lx(() => {
      ((h.current = !0),
        v &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          y.current && v.animationState && v.animationState.animateChanges()));
    }),
    w.useEffect(() => {
      v &&
        (!y.current && v.animationState && v.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null ||
              C.call(window, m);
          }),
          (y.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function xA(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : f1(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Zr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function f1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : f1(e.parent);
}
function Ou(e, { forwardMotionProps: t = !1, type: n } = {}, r, s) {
  r && eA(r);
  const i = n ? n === "svg" : lh(e),
    o = i ? mA : pA;
  function a(u, c) {
    let d;
    const f = { ...w.useContext(oh), ...u, layoutId: wA(u) },
      { isStatic: h } = f,
      v = iA(u),
      g = o(u, h);
    if (!h && Dx) {
      SA();
      const S = bA(f);
      ((d = S.MeasureLayout),
        (v.visualElement = vA(e, g, f, s, S.ProjectionNode, i)));
    }
    return p.jsxs(_l.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? p.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        dA(e, u, gA(g, v.visualElement, c), g, h, t, i),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = w.forwardRef(a);
  return ((l[yA] = e), l);
}
function wA({ layoutId: e }) {
  const t = w.useContext(Mf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function SA(e, t) {
  w.useContext(i1).strict;
}
function bA(e) {
  const t = o1(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const s = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function CA(e, t) {
  if (typeof Proxy > "u") return Ou;
  const n = new Map(),
    r = (i, o) => Ou(i, o, e, t),
    s = (i, o) => r(i, o);
  return new Proxy(s, {
    get: (i, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Ou(o, void 0, e, t)), n.get(o)),
  });
}
const TA = (e, t) =>
  (t.isSVG ?? lh(e))
    ? new nR(t)
    : new X3(t, { allowProjection: e !== w.Fragment });
class EA extends fr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = aR(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Fl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let kA = 0;
class PA extends fr {
  constructor() {
    (super(...arguments), (this.id = kA++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      s.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const RA = { animation: { Feature: EA }, exit: { Feature: PA } };
function vo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const AA = (e) => (t) => eh(t) && e(t, vo(t));
function ji(e, t, n, r) {
  return ro(e, t, AA(n), r);
}
const h1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  g0 = (e, t) => Math.abs(e - t);
function NA(e, t) {
  const n = g0(e.x, t.x),
    r = g0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const v0 = new Set(["auto", "scroll"]);
class p1 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: s = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Fu(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          g = NA(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !g) return;
        const { point: S } = h,
          { timestamp: m } = je;
        this.history.push({ ...S, timestamp: m });
        const { onStart: y, onMove: x } = this.handlers;
        (v ||
          (y && y(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, v) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Iu(v, this.transformPagePoint)),
          ae.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, v) => {
        this.end();
        const { onEnd: g, onSessionEnd: S, resumeAnimation: m } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = Fu(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Iu(v, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(h, y), S && S(h, y));
      }),
      !eh(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = s || window));
    const l = vo(t),
      u = Iu(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = je;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    (f && f(t, Fu(u, this.history)),
      (this.removeListeners = mo(
        ji(this.contextWindow, "pointermove", this.handlePointerMove),
        ji(this.contextWindow, "pointerup", this.handlePointerUp),
        ji(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((v0.has(r.overflowX) || v0.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, {
        capture: !0,
        passive: !0,
      }),
      window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      s = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      i = { x: s.x - n.x, y: s.y - n.y };
    (i.x === 0 && i.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += i.x),
          (this.lastMoveEventInfo.point.y += i.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
      this.scrollPositions.set(t, s),
      ae.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      ar(this.updatePoint));
  }
}
function Iu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function x0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Fu({ point: e }, t) {
  return {
    point: e,
    delta: x0(e, m1(t)),
    offset: x0(e, jA(t)),
    velocity: MA(t, 0.1),
  };
}
function jA(e) {
  return e[0];
}
function m1(e) {
  return e[e.length - 1];
}
function MA(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = m1(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > St(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    s.timestamp - r.timestamp > St(t) * 2 &&
    (r = e[1]);
  const i = vt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function DA(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? me(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? me(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function w0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function LA(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: w0(e.x, n, s), y: w0(e.y, t, r) };
}
function S0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function OA(e, t) {
  return { x: S0(e.x, t.x), y: S0(e.y, t.y) };
}
function IA(e, t) {
  let n = 0.5;
  const r = Ke(e),
    s = Ke(t);
  return (
    s > r
      ? (n = Ji(t.min, t.max - r, e.min))
      : r > s && (n = Ji(e.min, e.max - s, t.min)),
    nn(0, 1, n)
  );
}
function FA(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const gd = 0.35;
function VA(e = gd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = gd),
    { x: b0(e, "left", "right"), y: b0(e, "top", "bottom") }
  );
}
function b0(e, t, n) {
  return { min: C0(e, t), max: C0(e, n) };
}
function C0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _A = new WeakMap();
class zA {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Te()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (d) => {
        (n && this.snapToCursor(vo(d).point), this.stopAnimation());
      },
      o = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = m3(h)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ht((m) => {
            let y = this.getAxisMotionValue(m).get() || 0;
            if (en.test(y)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const b = x.layout.layoutBox[m];
                b && (y = Ke(b) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[m] = y;
          }),
          g && ae.update(() => g(d, f), !1, !0),
          ud(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: g,
          onDrag: S,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: m } = f;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = $A(m)),
            this.currentDirection !== null && g && g(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, m),
          this.updateAxis("y", f.point, m),
          this.visualElement.render(),
          S && ae.update(() => S(d, f), !1, !0));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new p1(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: h1(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      s = n || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !s || !r)) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && ae.postRender(() => a(r, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Go(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = DA(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
            ? void 0
            : i.layout,
      s = this.constraints;
    (t && Zr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = LA(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = VA(n)),
      s !== this.constraints &&
        !Zr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ht((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = FA(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zr(t)) return !1;
    const r = t.current;
    Us(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = W3(r, s.root, this.visualElement.getTransformPagePoint());
    let o = OA(s.layout.layoutBox, i);
    if (n) {
      const a = n(B3(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Iw(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ht((c) => {
        if (!Go(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          h = s ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ud(this.visualElement, t),
      r.start(Qf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ht((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ht((n) => {
      const { drag: r } = this.getProps();
      if (!Go(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n],
          l = i.get() || 0;
        i.set(t[n] - me(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Ht((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = IA({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ht((o) => {
        if (!Go(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(me(l, u, s[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    _A.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ji(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && S3(f);
        c && d && !h && this.start(u);
      });
    let r;
    const s = () => {
        const { dragConstraints: u } = this.getProps();
        Zr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = BA(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", s);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      ae.read(s));
    const a = ro(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ht((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = gd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function T0(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function BA(e, t, n) {
  const r = jm(e, T0(n)),
    s = jm(t, T0(n));
  return () => {
    (r(), s());
  };
}
function Go(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $A(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class UA extends fr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = wt),
      (this.removeListeners = wt),
      (this.controls = new zA(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || wt));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Vu = (e) => (t, n) => {
  e && ae.update(() => e(t, n), !1, !0);
};
class WA extends fr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = wt));
  }
  onPointerDown(t) {
    this.session = new p1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: h1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: Vu(t),
      onStart: Vu(n),
      onMove: Vu(r),
      onEnd: (i, o) => {
        (delete this.session, s && ae.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ji(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let _u = !1;
class HA extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (i &&
      (n.group && n.group.add(i),
      r && r.register && s && r.register(i),
      _u && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (wa.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = i),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (_u = !0),
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              ae.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Jf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    ((_u = !0),
      s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function y1(e) {
  const [t, n] = s1(),
    r = w.useContext(Mf);
  return p.jsx(HA, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(d1),
    isPresent: t,
    safeToRemove: n,
  });
}
const KA = {
  pan: { Feature: WA },
  drag: { Feature: UA, ProjectionNode: r1, MeasureLayout: y1 },
};
function E0(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && ae.postRender(() => i(t, vo(t)));
}
class YA extends fr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = g3(
        t,
        (n, r) => (E0(this.node, r, "Start"), (s) => E0(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class GA extends fr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = mo(
      ro(this.node.current, "focus", () => this.onFocus()),
      ro(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function k0(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && ae.postRender(() => i(t, vo(t)));
}
class QA extends fr {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = C3(
      t,
      (s, i) => (
        k0(this.node, i, "Start"),
        (o, { success: a }) => k0(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const vd = new WeakMap(),
  zu = new WeakMap(),
  XA = (e) => {
    const t = vd.get(e.target);
    t && t(e);
  },
  qA = (e) => {
    e.forEach(XA);
  };
function ZA({ root: e, ...t }) {
  const n = e || document;
  zu.has(n) || zu.set(n, {});
  const r = zu.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(qA, { root: e, ...t })),
    r[s]
  );
}
function JA(e, t, n) {
  const r = ZA(t);
  return (
    vd.set(e, n),
    r.observe(e),
    () => {
      (vd.delete(e), r.unobserve(e));
    }
  );
}
const eN = { some: 0, all: 1 };
class tN extends fr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : eN[s],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return JA(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(nN(t, n)) && this.startObserver();
  }
  unmount() {}
}
function nN({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const rN = {
    inView: { Feature: tN },
    tap: { Feature: QA },
    focus: { Feature: GA },
    hover: { Feature: YA },
  },
  sN = { layout: { ProjectionNode: r1, MeasureLayout: y1 } },
  iN = { ...RA, ...rN, ...KA, ...sN },
  D = CA(iN, TA),
  oN = ({ count: e = 20, types: t = ["heart", "petal", "sparkle"] }) => {
    const n = w.useMemo(
        () =>
          Array.from({ length: e }, (s, i) => ({
            id: i,
            x: Math.random() * 100,
            size: 10 + Math.random() * 20,
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 12,
            type: t[Math.floor(Math.random() * t.length)],
            opacity: 0.2 + Math.random() * 0.3,
          })),
        [e, t],
      ),
      r = (s) =>
        s.type === "heart"
          ? p.jsx("span", {
              style: { fontSize: s.size, color: "hsl(350, 50%, 60%)" },
              children: "❤",
            })
          : s.type === "petal"
            ? p.jsx("span", {
                style: { fontSize: s.size, color: "hsl(350, 40%, 72%)" },
                children: "✿",
              })
            : p.jsx("span", {
                style: { fontSize: s.size * 0.8, color: "hsl(38, 65%, 55%)" },
                children: "✦",
              });
    return p.jsx("div", {
      className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
      children: n.map((s) =>
        p.jsx(
          "div",
          {
            className: "absolute",
            style: {
              left: `${s.x}%`,
              bottom: "-5%",
              opacity: s.opacity,
              animation: `float-up ${s.duration}s ${s.delay}s linear infinite, sway ${s.duration * 0.6}s ${s.delay}s ease-in-out infinite`,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            },
            children: r(s),
          },
          s.id,
        ),
      ),
    });
  },
  sn = L.memo(oN),
  aN = "/assets/moment-1.jpeg",
  lN = "/assets/moment-2.jpeg",
  uN = "/assets/moment-3.jpeg",
  cN = "/assets/moment-4.jpeg",
  dN = "/assets/moment-5.jpeg",
  fN = "/assets/moment-6.jpeg",
  hN = "/assets/moment-7.jpeg",
  pN = "/assets/moment-8.jpeg",
  $ = {
    recipientName: "Beautiful",
    siteTitle: "Happy Birthday Vaishnavi ❤️",
    countdown: {
      badge: "✨ A Special Day Is Here ✨",
      intro: "Something magical is coming...",
      startFrom: 5,
      goText: "Happy Birthday Vaishnavi! 🎂",
    },
    envelope: { title: "For You, {name} 💕", hint: "Tap the seal to open ♡" },
    blast: {
      headline: "Happy Birthday Vaishnavi",
      subline: "to the most amazing person",
      name: "{name} 💗",
      button: "Tap to Continue",
    },
    balloons: {
      title: "Pop the Balloons! 🎈",
      subtitle: "A little surprise hides in each one",
      messages: [
        { emoji: "💖", text: "You light up my whole world, every single day." },
        { emoji: "🌟", text: "The kindest, most beautiful soul I know." },
        { emoji: "👑", text: "You are my queen — today and always." },
        { emoji: "✨", text: "Nobody in this world compares to you." },
        {
          emoji: "🎁",
          text: "Having you in my life is the best gift I ever got.",
        },
        { emoji: "💕", text: "I love you endlessly, and I always will." },
      ],
    },
    teasing: {
      greeting: "Hey {name},",
      title: "Your birthday gift is ready! 🎁",
      button: "Tap here for your gift 🎀",
      finalButton: "Open Your Gift 💝",
      messages: [
        "Are you sure, {name}? 😏",
        "Really really sure? 🤭",
        "Think about it one more time! 😜",
        "Just one more tap… 🥺",
        "Okay okay… last one, {name}! 💕",
      ],
    },
    letter: {
      title: "A Letter For You, {name} 💌",
      button: "More surprises waiting… 💝",
      skipButton: "Skip Typing ⏭️",
      text: `Happy Birthday Vaishnavi, my love ❤️

I sat down to write this and honestly, I didn't know where to start. There's just so much I want to say to you, and somehow words always feel too small when it comes to you.

Do you even realise how special you are? Like, really. The way you laugh, the way you talk, the way you get all dramatic over little things, the way you care without even trying — all of it makes my whole world softer.

On my worst days, just thinking of you fixes something inside me. And on my good days, I want to share every little thing with you first. That's what you do to me.

I hope today feels as warm as you make me feel every single day. I hope you eat your favourite food, laugh till your cheeks hurt, and feel deeply, properly loved — because you are. So loved.

Thank you for being you. For your kindness, your patience, your craziness, your softness. For every late night talk, every silly fight, every "I miss you" that came at the perfect time.

Promise me one thing — never doubt how precious you are. Not for a single second. You are rare. The kind of rare people spend their whole life looking for.

Happiest birthday. May this year give you everything your heart secretly wishes for, and may I always be standing right next to you while it happens.

I love you. So much. Always. 🤍

— Yours Dushyal, forever`,
    },
    reasons: {
      title: "Reasons I Love You 💖",
      list: [
        "Your trust in me and the way you put up with me 🥺",
        "Your smile — it literally makes my whole day 🌞",
        "Even when you're mad, you're the cutest ever 💗",
        "You're my biggest strength and my most heartfelt prayer 🤲",
        "Your eyes — the most beautiful thing in this world 👀✨",
        "When you laugh, it feels like heaven is right here 😍",
        "You're my favourite person — always have been, always will be 💕",
        "Your attitude, your style — nobody can match it 🔥",
        "You're in my every prayer, in my every breath ❤️",
        "I don't just love you — I love only you 🩷",
      ],
    },
    moments: {
      title: "Moments 🤍",
      subtitle: "Tap any picture to see it full size",
      footnote: "Every one of these is a memory I keep close.",
      photos: [aN, lN, uN, cN, dN, fN, hN, pN],
      button: "Now… the cake! 🎂",
    },
    cake: {
      celebrateTitle: "Time to celebrate! 🥳",
      celebrateSubtitle: "First, let's light the candles!",
      litTitle: "Candles are glowing! ✨",
      litSubtitle: "Now make a wish and blow them out!",
      wishTitle: "Make your wish! 🤞",
      wishSubtitle: "Now blow out the candles!",
      blownTitle: "Yaaay! 🎉",
      blownSubtitle: "The candles are out! Time to cut the cake!",
      cuttingTitle: "Cake cutting time! 🎂",
      cuttingSubtitle: "Tap to cut your birthday cake!",
      doneTitle: "Happy Birthday Vaishnavi! 🎂💕",
      doneSubtitle: "The teddies are dancing for you!",
    },
    final: {
      title: "Forever Yours Dushyal 💕",
      message:
        "You are my light, my moon, and every star in my sky. No words can ever express how important you are to me. I promise — I will love you, take care of you, and celebrate you — not just today, but every single day, forever. 🩷",
      highlight: "Happy Birthday Vaishnavi. You're my whole world. 🎂",
      signature: "Made with love, only for you 💗",
    },
    music: {
      file: "/song.mp3",
      startAtSeconds: 0,
      defaultVolume: 0.5,
      notification: "Turn on music for a better experience",
    },
  },
  G = (e) => {
    const t = $.recipientName.trim();
    return t
      ? e.replace(/\{name\}/g, t)
      : e
          .replace(/,?\s*\{name\}/g, "")
          .replace(/\s{2,}/g, " ")
          .replace(/\s+([,.!?])/g, "$1")
          .trim();
  },
  mN = ({ onComplete: e }) => {
    const [t, n] = w.useState($.countdown.startFrom),
      [r, s] = w.useState(!1);
    return (
      w.useEffect(() => {
        if (t > 0) {
          const i = setTimeout(() => n(t - 1), 1800);
          return () => clearTimeout(i);
        } else {
          s(!0);
          const i = setTimeout(() => e(), 2500);
          return () => clearTimeout(i);
        }
      }, [t, e]),
      p.jsxs(D.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, scale: 1.1 },
        transition: { duration: 0.5 },
        className:
          "fixed inset-0 flex flex-col items-center justify-center overflow-hidden",
        style: {
          background:
            "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
        },
        children: [
          p.jsx(sn, { count: 20, types: ["heart", "sparkle"] }),
          p.jsx("div", {
            className: "absolute w-[400px] h-[400px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, hsl(350, 50%, 55%, 0.15), transparent 70%)",
            },
          }),
          p.jsx(D.div, {
            className: "absolute w-64 h-64 rounded-full border-2",
            style: { borderColor: "hsl(350, 45%, 65%, 0.25)" },
            animate: { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] },
            transition: { duration: 2, repeat: 1 / 0 },
          }),
          p.jsx(D.div, {
            className: "absolute w-48 h-48 rounded-full border",
            style: { borderColor: "hsl(38, 60%, 60%, 0.2)" },
            animate: { scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] },
            transition: { duration: 2, repeat: 1 / 0, delay: 0.5 },
          }),
          p.jsx(D.div, {
            initial: { opacity: 0, y: -40 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.6 },
            className: "z-10 mb-3",
            children: p.jsx("span", {
              className:
                "inline-block px-6 py-2 rounded-full font-display text-sm sm:text-base tracking-[0.2em] uppercase font-bold",
              style: {
                background:
                  "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                color: "hsl(0, 0%, 100%)",
                boxShadow: "0 4px 20px hsl(350, 50%, 50%, 0.35)",
              },
              children: G($.countdown.badge),
            }),
          }),
          p.jsx(D.p, {
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.6 },
            className: "font-cursive text-3xl sm:text-5xl mb-8 z-10",
            style: {
              color: "hsl(25, 30%, 22%)",
              textShadow: "0 2px 20px hsl(350, 50%, 55%, 0.25)",
            },
            children: G($.countdown.intro),
          }),
          p.jsx(rt, {
            mode: "wait",
            children: r
              ? p.jsx(
                  D.div,
                  {
                    initial: { scale: 0, opacity: 0 },
                    animate: { scale: [0, 1.3, 1], opacity: 1 },
                    transition: { duration: 0.6, type: "spring" },
                    className: "relative z-10",
                    children: p.jsx("span", {
                      className: "font-cursive text-7xl sm:text-9xl",
                      style: {
                        color: "hsl(25, 30%, 20%)",
                        textShadow:
                          "0 0 40px hsl(350, 50%, 55%, 0.3), 0 0 80px hsl(38, 70%, 55%, 0.15)",
                      },
                      children: G($.countdown.goText),
                    }),
                  },
                  "go",
                )
              : p.jsx(
                  D.div,
                  {
                    initial: { scale: 0.3, opacity: 0, rotateY: -90 },
                    animate: { scale: 1, opacity: 1, rotateY: 0 },
                    exit: { scale: 1.8, opacity: 0, rotateY: 90 },
                    transition: {
                      duration: 0.7,
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    },
                    className: "relative z-10",
                    children: p.jsx("span", {
                      className:
                        "font-display text-[120px] sm:text-[180px] md:text-[220px] font-bold leading-none",
                      style: {
                        color: "transparent",
                        background:
                          "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(38, 70%, 55%), hsl(345, 40%, 48%))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(0 4px 30px hsl(350, 50%, 50%, 0.35))",
                      },
                      children: t,
                    }),
                  },
                  t,
                ),
          }),
          p.jsx("div", {
            className: "absolute bottom-10 flex gap-3 z-10",
            children: [...Array($.countdown.startFrom)].map((i, o) =>
              p.jsx(
                D.div,
                {
                  className: "w-2 h-2 rounded-full",
                  style: { background: "hsl(350, 50%, 55%)" },
                  animate: {
                    opacity:
                      t === $.countdown.startFrom - o ? [0.3, 1, 0.3] : 0.15,
                    scale: t === $.countdown.startFrom - o ? [1, 1.5, 1] : 1,
                  },
                  transition: { duration: 0.8, repeat: 1 / 0 },
                },
                o,
              ),
            ),
          }),
        ],
      })
    );
  },
  yN = ({ onOpen: e }) => {
    const [t, n] = w.useState(!1),
      r = () => {
        (n(!0), setTimeout(() => e(), 1200));
      };
    return p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-4",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(sn, { count: 14, types: ["heart", "petal", "sparkle"] }),
        p.jsx("div", {
          className: "absolute w-[600px] h-[600px] rounded-full blur-3xl",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), hsl(38, 70%, 55%, 0.05), transparent 70%)",
          },
        }),
        p.jsxs(D.div, {
          initial: { scale: 0.6, opacity: 0, y: 40 },
          animate: { scale: 1, opacity: 1, y: 0 },
          transition: {
            duration: 1.4,
            type: "spring",
            stiffness: 40,
            damping: 14,
          },
          className: "relative z-10 flex flex-col items-center",
          children: [
            p.jsxs(D.div, {
              className: "relative cursor-pointer",
              onClick: t ? void 0 : r,
              whileHover: t ? {} : { scale: 1.03, y: -8, rotateZ: -0.5 },
              whileTap: t ? {} : { scale: 0.97 },
              style: { width: "min(92vw, 540px)", aspectRatio: "5/3.2" },
              children: [
                p.jsx("div", {
                  className: "absolute -inset-2 rounded-xl",
                  style: {
                    background: "transparent",
                    boxShadow:
                      "0 25px 60px hsl(25, 20%, 30%, 0.25), 0 10px 24px hsl(350, 40%, 50%, 0.12), 0 2px 8px hsl(25, 20%, 40%, 0.1)",
                  },
                }),
                p.jsxs("div", {
                  className: "absolute inset-0 rounded-xl overflow-hidden",
                  style: {
                    background:
                      "linear-gradient(175deg, hsl(35, 38%, 88%), hsl(32, 32%, 82%), hsl(30, 28%, 76%))",
                    boxShadow:
                      "inset 0 2px 0 hsl(35, 40%, 92%), inset 0 -4px 0 hsl(30, 22%, 68%)",
                  },
                  children: [
                    p.jsx("div", {
                      className: "absolute inset-0 opacity-[0.03]",
                      style: {
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      },
                    }),
                    p.jsxs("svg", {
                      className: "absolute inset-0 w-full h-full",
                      viewBox: "0 0 460 295",
                      preserveAspectRatio: "none",
                      children: [
                        p.jsx("polygon", {
                          points: "0,295 230,140 0,0",
                          fill: "hsl(32, 30%, 80%)",
                          opacity: "0.5",
                        }),
                        p.jsx("polygon", {
                          points: "460,295 230,140 460,0",
                          fill: "hsl(32, 30%, 80%)",
                          opacity: "0.5",
                        }),
                        p.jsx("polygon", {
                          points: "0,295 230,140 460,295",
                          fill: "hsl(30, 28%, 77%)",
                          opacity: "0.6",
                        }),
                        p.jsx("line", {
                          x1: "0",
                          y1: "0",
                          x2: "230",
                          y2: "140",
                          stroke: "hsl(30, 18%, 70%)",
                          strokeWidth: "0.8",
                          opacity: "0.4",
                        }),
                        p.jsx("line", {
                          x1: "460",
                          y1: "0",
                          x2: "230",
                          y2: "140",
                          stroke: "hsl(30, 18%, 70%)",
                          strokeWidth: "0.8",
                          opacity: "0.4",
                        }),
                        p.jsx("line", {
                          x1: "0",
                          y1: "295",
                          x2: "230",
                          y2: "140",
                          stroke: "hsl(30, 18%, 70%)",
                          strokeWidth: "0.8",
                          opacity: "0.4",
                        }),
                        p.jsx("line", {
                          x1: "460",
                          y1: "295",
                          x2: "230",
                          y2: "140",
                          stroke: "hsl(30, 18%, 70%)",
                          strokeWidth: "0.8",
                          opacity: "0.4",
                        }),
                      ],
                    }),
                    p.jsx("div", {
                      className: "absolute inset-0 rounded-xl",
                      style: {
                        boxShadow:
                          "inset 0 12px 30px hsl(25, 20%, 40%, 0.12), inset 0 -12px 30px hsl(25, 20%, 40%, 0.1), inset 4px 0 12px hsl(25, 20%, 40%, 0.05), inset -4px 0 12px hsl(25, 20%, 40%, 0.05)",
                      },
                    }),
                    p.jsx(D.div, {
                      animate: t ? { y: -60, opacity: 1 } : { y: 0 },
                      transition: {
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      className:
                        "absolute left-[12%] right-[12%] top-[8%] bottom-[25%] rounded-lg",
                      style: {
                        background:
                          "linear-gradient(180deg, hsl(35, 35%, 90%), hsl(32, 30%, 86%))",
                        boxShadow: "0 2px 8px hsl(25, 20%, 40%, 0.1)",
                      },
                      children: p.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center",
                        children: p.jsx(D.div, {
                          animate: t
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0.4, scale: 0.9 },
                          className: "text-center",
                          children: p.jsx("span", {
                            className: "font-cursive text-xl sm:text-2xl",
                            style: { color: "hsl(350, 50%, 55%)" },
                            children: "Happy Birthday Vaishnavi",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                p.jsx(D.div, {
                  className: "absolute inset-x-0 top-0 origin-top z-20",
                  animate: t ? { rotateX: -180, opacity: 0 } : { rotateX: 0 },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  style: {
                    perspective: "900px",
                    transformStyle: "preserve-3d",
                  },
                  children: p.jsxs("svg", {
                    viewBox: "0 0 460 200",
                    className: "w-full drop-shadow-sm",
                    preserveAspectRatio: "none",
                    children: [
                      p.jsxs("defs", {
                        children: [
                          p.jsxs("linearGradient", {
                            id: "flapMain",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                              p.jsx("stop", {
                                offset: "0%",
                                stopColor: "hsl(35, 38%, 86%)",
                              }),
                              p.jsx("stop", {
                                offset: "40%",
                                stopColor: "hsl(33, 34%, 83%)",
                              }),
                              p.jsx("stop", {
                                offset: "100%",
                                stopColor: "hsl(30, 30%, 79%)",
                              }),
                            ],
                          }),
                          p.jsxs("linearGradient", {
                            id: "flapHighlight",
                            x1: "50%",
                            y1: "0%",
                            x2: "50%",
                            y2: "100%",
                            children: [
                              p.jsx("stop", {
                                offset: "0%",
                                stopColor: "hsl(350, 45%, 60%)",
                                stopOpacity: "0.08",
                              }),
                              p.jsx("stop", {
                                offset: "100%",
                                stopColor: "hsl(30, 25%, 75%)",
                                stopOpacity: "0.05",
                              }),
                            ],
                          }),
                          p.jsx("filter", {
                            id: "flapShadow",
                            children: p.jsx("feDropShadow", {
                              dx: "0",
                              dy: "3",
                              stdDeviation: "3",
                              floodColor: "hsl(25, 20%, 30%)",
                              floodOpacity: "0.15",
                            }),
                          }),
                        ],
                      }),
                      p.jsx("polygon", {
                        points: "0,0 460,0 230,195",
                        fill: "url(#flapMain)",
                        stroke: "none",
                        filter: "url(#flapShadow)",
                      }),
                      p.jsx("polygon", {
                        points: "0,0 460,0 230,195",
                        fill: "url(#flapHighlight)",
                      }),
                      p.jsx("line", {
                        x1: "0",
                        y1: "0",
                        x2: "230",
                        y2: "195",
                        stroke: "hsl(30, 18%, 74%)",
                        strokeWidth: "0.5",
                        opacity: "0.3",
                      }),
                      p.jsx("line", {
                        x1: "460",
                        y1: "0",
                        x2: "230",
                        y2: "195",
                        stroke: "hsl(30, 18%, 74%)",
                        strokeWidth: "0.5",
                        opacity: "0.3",
                      }),
                    ],
                  }),
                }),
                p.jsx("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center z-30",
                  children: p.jsxs(D.div, {
                    animate: t
                      ? { scale: 0, opacity: 0, rotate: 180 }
                      : { scale: [1, 1.06, 1] },
                    transition: t
                      ? { duration: 0.5 }
                      : { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
                    children: [
                      p.jsxs("div", {
                        className:
                          "relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full flex items-center justify-center",
                        style: {
                          background:
                            "radial-gradient(circle at 35% 30%, hsl(350, 55%, 60%), hsl(348, 48%, 48%), hsl(345, 42%, 38%))",
                          boxShadow:
                            "0 8px 28px hsl(350, 50%, 40%, 0.5), 0 3px 8px hsl(350, 40%, 30%, 0.3), inset 0 2px 4px hsl(350, 50%, 72%), inset 0 -3px 6px hsl(345, 40%, 30%, 0.4), 0 0 0 3px hsl(350, 40%, 50%, 0.15)",
                        },
                        children: [
                          p.jsx("div", {
                            className: "absolute inset-[-3px] rounded-full",
                            style: {
                              background: "transparent",
                              border: "2px dashed hsl(350, 40%, 55%, 0.25)",
                            },
                          }),
                          p.jsx("div", {
                            className: "absolute inset-0 rounded-full",
                            style: {
                              background:
                                "radial-gradient(ellipse at 30% 25%, hsl(350, 50%, 70%, 0.3), transparent 50%)",
                            },
                          }),
                          p.jsx("svg", {
                            viewBox: "0 0 24 24",
                            className:
                              "w-8 h-8 sm:w-10 sm:h-10 relative z-10 drop-shadow-sm",
                            fill: "hsl(0, 0%, 100%, 0.95)",
                            children: p.jsx("path", {
                              d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                            }),
                          }),
                        ],
                      }),
                      [
                        { top: "-14px", right: "-18px", delay: 0 },
                        { bottom: "-4px", left: "-20px", delay: 0.4 },
                        { top: "2px", right: "-24px", delay: 0.8 },
                      ].map((s, i) =>
                        p.jsx(
                          D.span,
                          {
                            className: "absolute text-sm",
                            style: {
                              top: s.top,
                              bottom: s.bottom,
                              left: s.left,
                              right: s.right,
                              color: "hsl(38, 70%, 55%)",
                            },
                            animate: {
                              opacity: [0.2, 1, 0.2],
                              scale: [0.6, 1.3, 0.6],
                              rotate: [0, 180, 360],
                            },
                            transition: {
                              duration: 2.2,
                              repeat: 1 / 0,
                              delay: s.delay,
                            },
                            children: "✦",
                          },
                          i,
                        ),
                      ),
                    ],
                  }),
                }),
              ],
            }),
            p.jsx(D.p, {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.9, duration: 1 },
              className: "mt-12 font-cursive text-4xl sm:text-6xl text-center",
              style: {
                color: "hsl(25, 30%, 22%)",
                textShadow:
                  "0 2px 15px hsl(350, 50%, 55%, 0.2), 0 4px 30px hsl(38, 60%, 50%, 0.1)",
              },
              children: G($.envelope.title),
            }),
            p.jsx(D.p, {
              initial: { opacity: 0 },
              animate: { opacity: [0, 0.8, 0] },
              transition: { delay: 1.6, duration: 2.8, repeat: 1 / 0 },
              className:
                "mt-5 font-display text-sm sm:text-base tracking-wider font-semibold uppercase",
              style: { color: "hsl(25, 20%, 50%)", letterSpacing: "0.25em" },
              children: G($.envelope.hint),
            }),
          ],
        }),
      ],
    });
  },
  P0 = [
    "hsl(350, 50%, 55%)",
    "hsl(38, 70%, 55%)",
    "hsl(345, 40%, 48%)",
    "hsl(350, 40%, 72%)",
    "hsl(35, 55%, 65%)",
    "hsl(30, 45%, 60%)",
    "hsl(350, 35%, 65%)",
    "hsl(38, 50%, 75%)",
    "hsl(345, 45%, 58%)",
    "hsl(25, 30%, 70%)",
  ],
  R0 = ["rect", "circle", "star", "streamer"],
  uh = ({ active: e, burst: t = !1 }) => {
    const [n, r] = w.useState(0);
    w.useEffect(() => {
      if (!e || !t) return;
      const o = setInterval(() => r((a) => a + 1), 2e3);
      return () => clearInterval(o);
    }, [e, t]);
    const s = w.useMemo(
      () =>
        Array.from({ length: t ? 40 : 30 }, (o, a) => ({
          id: a,
          x: Math.random() * 100,
          color: P0[Math.floor(Math.random() * P0.length)],
          delay: Math.random() * (t ? 0.5 : 1.5),
          duration: 2 + Math.random() * 2.5,
          size: 6 + Math.random() * 10,
          shape: R0[Math.floor(Math.random() * R0.length)],
          rotate: Math.random() * 360,
        })),
      [t, n],
    );
    if (!e) return null;
    const i = (o) =>
      o.shape === "circle"
        ? p.jsx("div", {
            className: "rounded-full",
            style: { width: o.size, height: o.size, backgroundColor: o.color },
          })
        : o.shape === "star"
          ? p.jsx("div", {
              style: { fontSize: o.size, color: o.color, lineHeight: 1 },
              children: "★",
            })
          : o.shape === "streamer"
            ? p.jsx("div", {
                className: "rounded-full",
                style: {
                  width: o.size * 0.3,
                  height: o.size * 2,
                  backgroundColor: o.color,
                },
              })
            : p.jsx("div", {
                className: "rounded-sm",
                style: {
                  width: o.size,
                  height: o.size * 0.6,
                  backgroundColor: o.color,
                },
              });
    return p.jsx("div", {
      className: "fixed inset-0 pointer-events-none z-50 overflow-hidden",
      children: s.map((o) =>
        p.jsx(
          "div",
          {
            className: "absolute",
            style: {
              left: `${o.x}%`,
              top: "-3%",
              transform: `rotate(${o.rotate}deg)`,
              animation: `confetti-fall ${o.duration}s ${o.delay}s ease-in forwards`,
            },
            children: i(o),
          },
          `${o.id}-${n}`,
        ),
      ),
    });
  },
  hr = ({ onClick: e }) =>
    p.jsx(D.button, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 0.5 },
      onClick: e,
      className:
        "fixed top-4 left-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300",
      style: {
        background: "hsl(35, 30%, 92%)",
        border: "1px solid hsl(30, 15%, 82%)",
        color: "hsl(25, 20%, 45%)",
      },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      children: p.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: p.jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
      }),
    }),
  gN = ({ onContinue: e, onBack: t }) => {
    const [n, r] = w.useState("dark");
    return (
      w.useEffect(() => {
        const s = setTimeout(() => r("burst"), 600),
          i = setTimeout(() => r("reveal"), 1200);
        return () => {
          (clearTimeout(s), clearTimeout(i));
        };
      }, []),
      p.jsxs("div", {
        className:
          "fixed inset-0 flex items-center justify-center overflow-hidden",
        style: {
          background:
            "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
        },
        children: [
          n === "reveal" && p.jsx(hr, { onClick: t }),
          p.jsx(sn, { count: 25, types: ["heart", "petal", "sparkle"] }),
          p.jsx(uh, { active: n !== "dark", burst: !0 }),
          p.jsx(D.div, {
            className: "absolute inset-0 z-20",
            initial: { opacity: 1 },
            animate: { opacity: n === "dark" ? 1 : 0 },
            transition: { duration: 0.6 },
            style: {
              pointerEvents: "none",
              background: "hsl(35, 30%, 92%)",
              willChange: "opacity",
            },
          }),
          p.jsx("div", {
            className:
              "absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full z-0",
            style: {
              background:
                "radial-gradient(circle, hsl(350, 50%, 55%, 0.1), transparent 65%)",
            },
          }),
          p.jsx(rt, {
            children:
              n === "burst" &&
              p.jsxs(p.Fragment, {
                children: [
                  p.jsx(D.div, {
                    className: "absolute rounded-full border-4 z-30",
                    style: { borderColor: "hsl(350, 50%, 55%)" },
                    initial: { width: 0, height: 0, opacity: 1 },
                    animate: { width: 900, height: 900, opacity: 0 },
                    transition: { duration: 1.5, ease: "easeOut" },
                  }),
                  p.jsx(D.div, {
                    className: "absolute rounded-full border-2 z-30",
                    style: { borderColor: "hsl(38, 70%, 55%)" },
                    initial: { width: 0, height: 0, opacity: 0.8 },
                    animate: { width: 700, height: 700, opacity: 0 },
                    transition: { duration: 1.3, ease: "easeOut", delay: 0.15 },
                  }),
                ],
              }),
          }),
          p.jsx(rt, {
            children:
              n === "reveal" &&
              p.jsx(D.div, {
                initial: { scale: 0.5, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                },
                className:
                  "relative z-10 w-full max-w-xl mx-auto px-5 sm:px-8 flex flex-col items-center",
                children: p.jsxs("div", {
                  className:
                    "w-full rounded-3xl px-6 py-8 sm:px-10 sm:py-12 flex flex-col items-center",
                  style: {
                    background: "hsl(38, 30%, 96%)",
                    boxShadow:
                      "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 6px 20px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
                  },
                  children: [
                    p.jsx(D.div, {
                      initial: { y: -20, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.1, duration: 0.4 },
                      className: "mb-6",
                      children: p.jsx("span", {
                        className:
                          "inline-block px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-xs sm:text-sm font-display tracking-[0.25em] uppercase font-bold",
                        style: {
                          background:
                            "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                          color: "hsl(0, 0%, 100%)",
                          boxShadow: "0 4px 16px hsl(350, 50%, 50%, 0.35)",
                        },
                        children: "✨ It's Your Special Day ✨",
                      }),
                    }),
                    p.jsx(D.h1, {
                      initial: { y: 30, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.2, duration: 0.4 },
                      className:
                        "font-cursive text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-center",
                      style: {
                        color: "hsl(25, 30%, 20%)",
                        textShadow: "0 3px 20px hsl(350, 50%, 55%, 0.2)",
                      },
                      children: G($.blast.headline),
                    }),
                    p.jsxs(D.div, {
                      initial: { scaleX: 0 },
                      animate: { scaleX: 1 },
                      transition: { delay: 0.35, duration: 0.3 },
                      className:
                        "flex items-center justify-center gap-3 my-4 sm:my-5 w-full max-w-xs",
                      children: [
                        p.jsx("div", {
                          className: "h-[2px] flex-1",
                          style: {
                            background:
                              "linear-gradient(90deg, transparent, hsl(350, 50%, 55%))",
                          },
                        }),
                        p.jsx("span", {
                          style: {
                            color: "hsl(350, 50%, 55%)",
                            fontSize: "1.5rem",
                          },
                          children: "♥",
                        }),
                        p.jsx("div", {
                          className: "h-[2px] flex-1",
                          style: {
                            background:
                              "linear-gradient(90deg, hsl(350, 50%, 55%), transparent)",
                          },
                        }),
                      ],
                    }),
                    p.jsx(D.p, {
                      initial: { y: 15, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.4, duration: 0.35 },
                      className:
                        "font-display text-lg sm:text-2xl md:text-3xl text-center tracking-wide",
                      style: { color: "hsl(25, 20%, 45%)" },
                      children: G($.blast.subline),
                    }),
                    p.jsx(D.h2, {
                      initial: { y: 20, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.5, duration: 0.4 },
                      className:
                        "font-cursive text-5xl sm:text-7xl md:text-8xl leading-[1] mt-1 text-center",
                      style: {
                        color: "hsl(25, 30%, 20%)",
                        textShadow: "0 3px 20px hsl(350, 50%, 55%, 0.2)",
                      },
                      children: G($.blast.name),
                    }),
                    p.jsx(D.button, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.65, duration: 0.4 },
                      onClick: e,
                      className:
                        "mt-8 px-8 py-3 sm:px-12 sm:py-4 rounded-full font-display text-base sm:text-lg tracking-widest uppercase font-bold transition-all duration-300",
                      style: {
                        background:
                          "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                        color: "hsl(0, 0%, 100%)",
                        boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                      },
                      whileHover: { scale: 1.06, y: -2 },
                      whileTap: { scale: 0.95 },
                      children: G($.blast.button),
                    }),
                  ],
                }),
              }),
          }),
        ],
      })
    );
  },
  Qo = [
    "linear-gradient(180deg, hsl(350, 50%, 58%), hsl(345, 40%, 42%))",
    "linear-gradient(180deg, hsl(38, 70%, 58%), hsl(35, 60%, 45%))",
    "linear-gradient(180deg, hsl(350, 40%, 70%), hsl(345, 35%, 55%))",
    "linear-gradient(180deg, hsl(30, 50%, 60%), hsl(25, 40%, 48%))",
    "linear-gradient(180deg, hsl(345, 45%, 55%), hsl(340, 38%, 40%))",
    "linear-gradient(180deg, hsl(35, 55%, 55%), hsl(30, 45%, 42%))",
  ],
  A0 = $.balloons.messages,
  vN = 6e3,
  xN = ({ onContinue: e, onBack: t }) => {
    const [n, r] = w.useState([]),
      [s, i] = w.useState(null),
      [o, a] = w.useState(!1),
      l = w.useRef(null),
      u = w.useRef(null);
    w.useEffect(
      () => () => {
        (l.current && clearTimeout(l.current),
          u.current && clearTimeout(u.current));
      },
      [],
    );
    const c = n.length === Qo.length,
      d = (h) => {
        n.includes(h) ||
          (r((v) => [...v, h]),
          i(h),
          a(!0),
          u.current && clearTimeout(u.current),
          (u.current = setTimeout(() => a(!1), 1500)),
          l.current && clearTimeout(l.current),
          (l.current = setTimeout(() => i(null), vN)));
      },
      f = [
        { left: "12%", top: "18%" },
        { left: "72%", top: "12%" },
        { left: "38%", top: "8%" },
        { left: "58%", top: "22%" },
        { left: "22%", top: "35%" },
        { left: "68%", top: "38%" },
      ];
    return p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex flex-col items-center justify-center overflow-hidden",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(hr, { onClick: t }),
        p.jsx(sn, { count: 12, types: ["sparkle", "heart"] }),
        p.jsx(uh, { active: o, burst: !0 }),
        p.jsx("div", {
          className: "absolute w-[600px] h-[600px] rounded-full",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 70%)",
          },
        }),
        p.jsxs(D.div, {
          initial: { y: -30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.2 },
          className: "absolute top-6 sm:top-10 z-30 text-center px-4",
          children: [
            p.jsx("h2", {
              className: "font-cursive text-3xl sm:text-5xl mb-1",
              style: {
                color: "hsl(25, 30%, 22%)",
                textShadow: "0 2px 20px hsl(350, 50%, 55%, 0.2)",
              },
              children: G($.balloons.title),
            }),
            p.jsx("p", {
              className:
                "font-display text-xs sm:text-sm tracking-widest uppercase",
              style: { color: "hsl(25, 20%, 50%)" },
              children: G($.balloons.subtitle),
            }),
          ],
        }),
        p.jsx("div", {
          className: "relative w-full max-w-md mx-auto h-[60vh] z-10",
          children: Qo.map((h, v) =>
            p.jsx(
              D.div,
              {
                className: "absolute cursor-pointer",
                style: { left: f[v].left, top: f[v].top },
                initial: { y: 100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: {
                  delay: 0.3 + v * 0.15,
                  duration: 0.6,
                  type: "spring",
                },
                children: p.jsx(rt, {
                  children: n.includes(v)
                    ? p.jsx(
                        D.div,
                        {
                          initial: { scale: 0 },
                          animate: { scale: [0, 1.4, 1] },
                          transition: { duration: 0.5, type: "spring" },
                          className:
                            "w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center",
                          children: p.jsx("span", {
                            className: "text-4xl sm:text-5xl",
                            children: A0[v].emoji,
                          }),
                        },
                        `popped-${v}`,
                      )
                    : p.jsx(
                        D.div,
                        {
                          exit: {
                            scale: [1.3, 0],
                            opacity: 0,
                            rotate: [0, 15, -15, 0],
                          },
                          transition: { duration: 0.4 },
                          onClick: () => d(v),
                          className: "relative",
                          whileHover: { scale: 1.12, y: -5 },
                          whileTap: { scale: 0.85 },
                          children: p.jsxs(D.div, {
                            animate: { y: [0, -8, 0] },
                            transition: {
                              duration: 2 + v * 0.3,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                            },
                            children: [
                              p.jsxs("div", {
                                className:
                                  "w-16 h-20 sm:w-20 sm:h-24 rounded-full relative",
                                style: {
                                  background: h,
                                  boxShadow:
                                    "0 8px 30px hsl(350, 40%, 45%, 0.25), inset 0 -4px 12px hsl(25, 20%, 30%, 0.2), inset 4px 4px 8px hsl(0, 0%, 100%, 0.25)",
                                },
                                children: [
                                  p.jsx("div", {
                                    className:
                                      "absolute top-2 left-3 w-4 h-6 sm:w-5 sm:h-8 rounded-full rotate-[-20deg]",
                                    style: {
                                      background:
                                        "linear-gradient(180deg, hsla(0, 0%, 100%, 0.4), transparent)",
                                    },
                                  }),
                                  p.jsx("div", {
                                    className:
                                      "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45",
                                    style: { background: "hsl(25, 25%, 35%)" },
                                  }),
                                ],
                              }),
                              p.jsx("div", {
                                className:
                                  "absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-10",
                                style: {
                                  background:
                                    "linear-gradient(180deg, hsl(25, 20%, 55%), transparent)",
                                },
                              }),
                            ],
                          }),
                        },
                        `balloon-${v}`,
                      ),
                }),
              },
              v,
            ),
          ),
        }),
        p.jsx(rt, {
          children:
            s !== null &&
            p.jsx(D.div, {
              initial: { y: 30, opacity: 0, scale: 0.8 },
              animate: { y: 0, opacity: 1, scale: 1 },
              exit: { y: -20, opacity: 0, scale: 0.9 },
              transition: { type: "spring", stiffness: 150 },
              className:
                "absolute bottom-32 sm:bottom-36 z-30 px-6 py-3 rounded-2xl text-center",
              style: {
                background: "hsl(38, 30%, 96%)",
                boxShadow:
                  "0 10px 40px hsl(25, 20%, 40%, 0.15), 0 0 0 1px hsl(30, 15%, 88%)",
              },
              children: p.jsx("p", {
                className: "font-cursive text-xl sm:text-2xl",
                style: { color: "hsl(25, 30%, 22%)" },
                children: G(A0[s].text),
              }),
            }),
        }),
        p.jsxs("div", {
          className:
            "absolute bottom-8 sm:bottom-12 z-20 flex flex-col items-center gap-3",
          children: [
            p.jsx("div", {
              className: "flex gap-2",
              children: Qo.map((h, v) =>
                p.jsx(
                  "div",
                  {
                    className:
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    style: {
                      background: n.includes(v)
                        ? "hsl(350, 50%, 55%)"
                        : "hsl(30, 15%, 82%)",
                      boxShadow: n.includes(v)
                        ? "0 0 8px hsl(350, 50%, 55%, 0.4)"
                        : "none",
                    },
                  },
                  v,
                ),
              ),
            }),
            p.jsxs("p", {
              className: "font-display text-xs tracking-widest uppercase",
              style: { color: "hsl(25, 20%, 50%)" },
              children: [n.length, " / ", Qo.length, " popped"],
            }),
            c &&
              p.jsx(D.button, {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                onClick: e,
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className:
                  "px-8 py-3 rounded-full font-display text-base tracking-wide font-bold",
                style: {
                  background:
                    "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                  color: "hsl(0, 0%, 100%)",
                  boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                },
                children: "Continue the magic… ✨",
              }),
          ],
        }),
      ],
    });
  },
  Xo = $.teasing.messages,
  wN = 3500,
  SN = ({ onComplete: e, onBack: t }) => {
    const [n, r] = w.useState(0),
      [s, i] = w.useState({ x: 0, y: 0 }),
      [o, a] = w.useState(!1),
      l = w.useRef(null);
    w.useEffect(
      () => () => {
        l.current && clearTimeout(l.current);
      },
      [],
    );
    const u = () => {
        if (n >= Xo.length) {
          e();
          return;
        }
        (a(!0),
          l.current && clearTimeout(l.current),
          (l.current = setTimeout(() => a(!1), wN)),
          i({ x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 60 }),
          r((d) => d + 1));
      },
      c = n >= Xo.length;
    return p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-4",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(hr, { onClick: t }),
        p.jsx(sn, { count: 12, types: ["heart", "sparkle"] }),
        p.jsx("div", {
          className: "absolute w-[400px] h-[400px] rounded-full",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
          },
        }),
        p.jsx(D.div, {
          initial: { y: 30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.3, duration: 0.8 },
          className: "relative z-10 text-center px-4 w-full max-w-lg",
          children: p.jsxs("div", {
            className: "rounded-3xl p-6 sm:p-10",
            style: {
              background: "hsl(38, 30%, 96%)",
              boxShadow:
                "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 4px 16px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
            },
            children: [
              p.jsx(D.p, {
                className: "font-cursive text-3xl sm:text-5xl mb-2",
                style: { color: "hsl(25, 30%, 22%)" },
                children: G($.teasing.greeting),
              }),
              p.jsx(D.p, {
                className: "font-cursive text-3xl sm:text-5xl mb-8",
                style: {
                  color: "hsl(25, 30%, 22%)",
                  textShadow: "0 2px 15px hsl(350, 50%, 55%, 0.2)",
                },
                children: G($.teasing.title),
              }),
              p.jsxs("div", {
                className:
                  "relative min-h-[80px] flex items-center justify-center",
                children: [
                  p.jsx(rt, {
                    children:
                      o &&
                      n <= Xo.length &&
                      p.jsx(D.div, {
                        initial: { scale: 0.5, opacity: 0, y: 10 },
                        animate: { scale: 1, opacity: 1, y: 0 },
                        exit: { scale: 0.5, opacity: 0, y: -10 },
                        className:
                          "absolute -top-16 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl",
                        style: {
                          background: "hsl(35, 35%, 93%)",
                          boxShadow: "0 4px 16px hsl(25, 20%, 40%, 0.15)",
                          border: "1px solid hsl(30, 15%, 85%)",
                        },
                        children: p.jsx("p", {
                          className:
                            "font-display text-base sm:text-lg whitespace-nowrap font-semibold",
                          style: { color: "hsl(350, 45%, 50%)" },
                          children: G(Xo[n - 1]),
                        }),
                      }),
                  }),
                  p.jsx(D.button, {
                    animate: c ? { x: 0, y: 0 } : { x: s.x, y: s.y },
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                    onClick: u,
                    className:
                      "px-6 py-3 sm:px-8 sm:py-4 rounded-full font-display text-base sm:text-lg tracking-wide font-bold transition-shadow duration-300",
                    style: {
                      background:
                        "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                      color: "hsl(0, 0%, 100%)",
                      boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                      ...(c
                        ? { animation: "pulse-glow 1.5s ease-in-out infinite" }
                        : {}),
                    },
                    whileHover: { scale: 1.06 },
                    whileTap: { scale: 0.9 },
                    children: G(c ? $.teasing.finalButton : $.teasing.button),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  qo = G($.letter.text),
  bN = ({ onContinue: e, onBack: t }) => {
    const [n, r] = w.useState(""),
      [s, i] = w.useState(!1),
      o = () => {
        (r(qo), i(!0));
      };
    return (
      w.useEffect(() => {
        if (s) return;
        let a = 0;
        const l = setInterval(() => {
          ((a = Math.min(a + 5, qo.length)),
            r(qo.slice(0, a)),
            a >= qo.length && (i(!0), clearInterval(l)));
        }, 5);
        return () => clearInterval(l);
      }, [s]),
      p.jsxs(D.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        className:
          "fixed inset-0 flex items-center justify-center overflow-hidden px-4",
        style: {
          background:
            "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
        },
        children: [
          p.jsx(hr, { onClick: t }),
          p.jsx(sn, { count: 18, types: ["petal", "sparkle"] }),
          p.jsx("div", {
            className: "absolute w-[500px] h-[500px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
            },
          }),
          p.jsx("div", {
            className:
              "relative z-10 w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto py-6",
            children: p.jsxs("div", {
              className: "rounded-3xl p-5 sm:p-8",
              style: {
                background: "hsl(38, 30%, 96%)",
                boxShadow:
                  "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 4px 16px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
              },
              children: [
                p.jsx(D.div, {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { delay: 0.1, duration: 0.4 },
                  className: "text-center mb-6",
                  children: p.jsx("h2", {
                    className: "font-cursive text-3xl sm:text-5xl",
                    style: {
                      color: "hsl(25, 30%, 22%)",
                      textShadow: "0 2px 15px hsl(350, 50%, 55%, 0.2)",
                    },
                    children: G($.letter.title),
                  }),
                }),
                p.jsx(D.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.25, duration: 0.3 },
                  className: "p-4 sm:p-6 rounded-2xl",
                  style: {
                    background: "hsl(35, 35%, 93%)",
                    border: "1px solid hsl(30, 15%, 85%)",
                  },
                  children: p.jsxs("p", {
                    className:
                      "font-elegant text-base sm:text-xl leading-relaxed whitespace-pre-line",
                    style: { color: "hsl(25, 25%, 32%)" },
                    children: [
                      n,
                      !s &&
                        p.jsx(D.span, {
                          animate: { opacity: [1, 0] },
                          transition: { duration: 0.5, repeat: 1 / 0 },
                          className: "inline-block w-0.5 h-5 ml-1 align-middle",
                          style: { background: "hsl(350, 50%, 55%)" },
                        }),
                    ],
                  }),
                }),
                !s &&
                  p.jsx("div", {
                    className: "text-center mt-4",
                    children: p.jsx("button", {
                      onClick: o,
                      className:
                        "px-5 py-2 rounded-full font-display text-sm tracking-wide font-semibold transition-all duration-300",
                      style: {
                        background: "hsl(35, 35%, 90%)",
                        color: "hsl(25, 20%, 45%)",
                        border: "1px solid hsl(30, 15%, 82%)",
                      },
                      children: G($.letter.skipButton),
                    }),
                  }),
                s &&
                  p.jsx(D.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5, duration: 0.8 },
                    className: "text-center mt-6",
                    children: p.jsx("button", {
                      onClick: e,
                      className:
                        "px-6 py-3 sm:px-8 sm:py-3 rounded-full font-display text-base sm:text-lg tracking-wide font-bold transition-all duration-300",
                      style: {
                        background:
                          "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                        color: "hsl(0, 0%, 100%)",
                        boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                      },
                      children: G($.letter.button),
                    }),
                  }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Zo = $.reasons.list,
  CN = ({ onContinue: e, onBack: t }) => {
    const [n, r] = w.useState(0),
      [s, i] = w.useState([0]),
      o = () => {
        if (n < Zo.length - 1) {
          const l = n + 1;
          (r(l), s.includes(l) || i((u) => [...u, l]));
        }
      },
      a = s.length === Zo.length;
    return p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex items-center justify-center overflow-hidden px-4",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(hr, { onClick: t }),
        p.jsx(sn, { count: 15, types: ["heart", "sparkle"] }),
        p.jsx("div", {
          className: "absolute w-[500px] h-[500px] rounded-full",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
          },
        }),
        p.jsx("div", {
          className: "relative z-10 w-full max-w-lg mx-auto",
          children: p.jsxs("div", {
            className: "rounded-3xl p-5 sm:p-8 text-center",
            style: {
              background: "hsl(38, 30%, 96%)",
              boxShadow:
                "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 4px 16px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
            },
            children: [
              p.jsx(D.h2, {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.1, duration: 0.4 },
                className: "font-cursive text-3xl sm:text-5xl mb-2",
                style: {
                  color: "hsl(25, 30%, 22%)",
                  textShadow: "0 2px 15px hsl(350, 50%, 55%, 0.2)",
                },
                children: G($.reasons.title),
              }),
              p.jsx(D.p, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.2 },
                className: "font-display text-sm mb-6",
                style: { color: "hsl(25, 20%, 50%)" },
                children: "Tap through to discover each one",
              }),
              p.jsx("div", {
                className:
                  "min-h-[140px] flex items-center justify-center mb-6",
                children: p.jsx(rt, {
                  mode: "wait",
                  children: p.jsxs(
                    D.div,
                    {
                      initial: { opacity: 0, y: 30, scale: 0.9 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                      exit: { opacity: 0, y: -20, scale: 0.95 },
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      className: "p-5 rounded-2xl",
                      style: {
                        background: "hsl(35, 35%, 93%)",
                        border: "1px solid hsl(30, 15%, 85%)",
                      },
                      children: [
                        p.jsx("span", {
                          className:
                            "font-display text-3xl sm:text-4xl block mb-3",
                          children: "💗",
                        }),
                        p.jsx("p", {
                          className:
                            "font-elegant text-lg sm:text-xl leading-relaxed",
                          style: { color: "hsl(25, 25%, 30%)" },
                          children: G(Zo[n]),
                        }),
                      ],
                    },
                    n,
                  ),
                }),
              }),
              p.jsx("div", {
                className: "flex justify-center gap-1.5 mb-5 flex-wrap",
                children: Zo.map((l, u) =>
                  p.jsx(
                    D.div,
                    {
                      className: "w-2.5 h-2.5 rounded-full cursor-pointer",
                      style: {
                        background:
                          u === n
                            ? "hsl(350, 50%, 55%)"
                            : s.includes(u)
                              ? "hsl(350, 40%, 78%)"
                              : "hsl(30, 15%, 82%)",
                        boxShadow:
                          u === n ? "0 0 8px hsl(350, 50%, 55%, 0.4)" : "none",
                      },
                      whileHover: { scale: 1.3 },
                      onClick: () => {
                        s.includes(u) && r(u);
                      },
                    },
                    u,
                  ),
                ),
              }),
              a
                ? p.jsx(D.button, {
                    onClick: e,
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className:
                      "px-6 py-3 rounded-full font-display text-base tracking-wide font-bold",
                    style: {
                      background:
                        "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                      color: "hsl(0, 0%, 100%)",
                      boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                    },
                    children: "One Last Surprise 💝",
                  })
                : p.jsx(D.button, {
                    onClick: o,
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className:
                      "px-6 py-3 rounded-full font-display text-base tracking-wide font-bold",
                    style: {
                      background:
                        "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                      color: "hsl(0, 0%, 100%)",
                      boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                    },
                    children: "Next Reason 💗",
                  }),
            ],
          }),
        }),
      ],
    });
  },
  TN = ({ onContinue: e, onBack: t }) => {
    const n = $.moments.photos,
      [r, s] = w.useState(null);
    return (
      w.useEffect(() => {
        const i = (o) => {
          r !== null &&
            (o.key === "Escape" && s(null),
            o.key === "ArrowRight" && s((a) => ((a ?? 0) + 1) % n.length),
            o.key === "ArrowLeft" &&
              s((a) => ((a ?? 0) - 1 + n.length) % n.length));
        };
        return (
          window.addEventListener("keydown", i),
          () => window.removeEventListener("keydown", i)
        );
      }, [r, n.length]),
      p.jsxs(D.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        className: "fixed inset-0 overflow-hidden",
        style: {
          background:
            "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
        },
        children: [
          p.jsx(hr, { onClick: t }),
          p.jsx(sn, { count: 14, types: ["sparkle", "heart"] }),
          p.jsx("div", {
            className:
              "absolute left-1/2 top-1/3 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none",
            style: {
              background:
                "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
            },
          }),
          p.jsx("div", {
            className: "relative z-10 h-full overflow-y-auto px-4 py-10",
            children: p.jsxs("div", {
              className: "mx-auto w-full max-w-5xl",
              children: [
                p.jsx(D.div, {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { delay: 0.1, duration: 0.5 },
                  className: "text-center mb-2",
                  children: p.jsx("h2", {
                    className: "font-cursive text-4xl sm:text-6xl",
                    style: {
                      color: "hsl(25, 30%, 22%)",
                      textShadow: "0 2px 18px hsl(350, 50%, 55%, 0.2)",
                    },
                    children: G($.moments.title),
                  }),
                }),
                p.jsxs(D.div, {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { delay: 0.25, duration: 0.4 },
                  className:
                    "flex items-center justify-center gap-3 mb-3 mx-auto w-full max-w-xs",
                  children: [
                    p.jsx("div", {
                      className: "h-[2px] flex-1",
                      style: {
                        background:
                          "linear-gradient(90deg, transparent, hsl(350, 50%, 55%))",
                      },
                    }),
                    p.jsx("span", {
                      style: { color: "hsl(350, 50%, 55%)" },
                      children: "♥",
                    }),
                    p.jsx("div", {
                      className: "h-[2px] flex-1",
                      style: {
                        background:
                          "linear-gradient(90deg, hsl(350, 50%, 55%), transparent)",
                      },
                    }),
                  ],
                }),
                p.jsx(D.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.3 },
                  className:
                    "text-center font-display text-sm sm:text-base tracking-wide mb-8",
                  style: { color: "hsl(25, 20%, 50%)" },
                  children: G($.moments.subtitle),
                }),
                p.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                  children: n.map((i, o) =>
                    p.jsxs(
                      D.button,
                      {
                        onClick: () => s(o),
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          delay: 0.35 + o * 0.12,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        whileHover: { scale: 1.03, y: -4 },
                        whileTap: { scale: 0.98 },
                        className:
                          "relative group rounded-[14px] p-3 sm:p-4 cursor-pointer",
                        style: {
                          background:
                            "linear-gradient(160deg, hsl(38, 34%, 97%), hsl(35, 28%, 93%))",
                          boxShadow:
                            "0 18px 40px hsl(25, 20%, 40%, 0.18), 0 2px 6px hsl(25, 20%, 40%, 0.10), 0 0 0 1px hsl(30, 15%, 87%)",
                        },
                        "aria-label": `Open picture ${o + 1}`,
                        children: [
                          p.jsx("div", {
                            className: "overflow-hidden rounded-[8px]",
                            style: {
                              background: "hsl(30, 18%, 88%)",
                              boxShadow: "inset 0 0 0 1px hsl(30, 18%, 82%)",
                            },
                            children: p.jsx("img", {
                              src: i,
                              alt: `Picture ${o + 1}`,
                              loading: "lazy",
                              className:
                                "w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.05]",
                            }),
                          }),
                          p.jsx("span", {
                            className:
                              "pointer-events-none absolute inset-3 sm:inset-4 rounded-[8px]",
                            style: {
                              boxShadow:
                                "inset 0 0 0 3px hsl(38, 40%, 99%, 0.65)",
                            },
                          }),
                        ],
                      },
                      o,
                    ),
                  ),
                }),
                p.jsx(D.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.9, duration: 0.6 },
                  className:
                    "text-center font-elegant italic text-lg sm:text-xl mt-10",
                  style: { color: "hsl(25, 22%, 40%)" },
                  children: G($.moments.footnote),
                }),
                p.jsx("div", {
                  className: "text-center mt-6 mb-4",
                  children: p.jsx(D.button, {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1, duration: 0.5 },
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    onClick: e,
                    className:
                      "px-7 py-3 sm:px-9 sm:py-4 rounded-full font-display text-base sm:text-lg tracking-wide font-bold",
                    style: {
                      background:
                        "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                      color: "hsl(0, 0%, 100%)",
                      boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
                    },
                    children: G($.moments.button),
                  }),
                }),
              ],
            }),
          }),
          p.jsx(rt, {
            children:
              r !== null &&
              p.jsx(D.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 z-[70] flex items-center justify-center px-4 py-8",
                style: {
                  background: "hsl(25, 20%, 15%, 0.72)",
                  backdropFilter: "blur(6px)",
                },
                onClick: () => s(null),
                children: p.jsxs(D.div, {
                  initial: { scale: 0.9, opacity: 0, y: 20 },
                  animate: { scale: 1, opacity: 1, y: 0 },
                  exit: { scale: 0.94, opacity: 0 },
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  onClick: (i) => i.stopPropagation(),
                  className: "relative rounded-2xl p-3 sm:p-4 max-w-lg w-full",
                  style: {
                    background: "hsl(38, 32%, 97%)",
                    boxShadow: "0 30px 80px hsl(25, 20%, 10%, 0.45)",
                  },
                  children: [
                    p.jsx("img", {
                      src: n[r],
                      alt: `Picture ${r + 1}`,
                      className:
                        "w-full max-h-[72vh] object-contain rounded-lg",
                      style: { background: "hsl(30, 18%, 90%)" },
                    }),
                    p.jsx("button", {
                      onClick: () => s(null),
                      "aria-label": "Close picture",
                      className:
                        "absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-display text-lg",
                      style: {
                        background: "hsl(38, 30%, 96%)",
                        color: "hsl(25, 25%, 32%)",
                        boxShadow: "0 6px 18px hsl(25, 20%, 20%, 0.35)",
                      },
                      children: "✕",
                    }),
                    n.length > 1 &&
                      p.jsxs(p.Fragment, {
                        children: [
                          p.jsx("button", {
                            "aria-label": "Previous picture",
                            onClick: () =>
                              s((i) => ((i ?? 0) - 1 + n.length) % n.length),
                            className:
                              "absolute left-[-14px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center",
                            style: {
                              background: "hsl(38, 30%, 96%)",
                              color: "hsl(25, 25%, 32%)",
                              boxShadow: "0 6px 18px hsl(25, 20%, 20%, 0.3)",
                            },
                            children: "‹",
                          }),
                          p.jsx("button", {
                            "aria-label": "Next picture",
                            onClick: () => s((i) => ((i ?? 0) + 1) % n.length),
                            className:
                              "absolute right-[-14px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center",
                            style: {
                              background: "hsl(38, 30%, 96%)",
                              color: "hsl(25, 25%, 32%)",
                              boxShadow: "0 6px 18px hsl(25, 20%, 20%, 0.3)",
                            },
                            children: "›",
                          }),
                        ],
                      }),
                  ],
                }),
              }),
          }),
        ],
      })
    );
  },
  EN = ({ onComplete: e, onBack: t }) => {
    const [n, r] = w.useState("celebrate"),
      [s, i] = w.useState(!1),
      [o, a] = w.useState(-120),
      l = () => r("light");
    kN(n === "light", () => r("lit"), 1500);
    const u = () => {
        (r("blown"), i(!0), setTimeout(() => r("cutting"), 2e3));
      },
      c = () => {
        r("cut");
        let h = -120;
        const v = setInterval(() => {
          ((h += 3),
            a(h),
            h >= 40 &&
              (clearInterval(v),
              setTimeout(() => {
                (r("done"), setTimeout(() => e(), 3e3));
              }, 800)));
        }, 25);
      },
      d = n === "lit" || n === "blow",
      f = n !== "blown" && n !== "cutting" && n !== "cut" && n !== "done";
    return p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex items-center justify-center overflow-hidden px-4",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(hr, { onClick: t }),
        p.jsx(sn, { count: 10, types: ["heart", "sparkle"] }),
        p.jsx(uh, { active: s, burst: !0 }),
        p.jsx("div", {
          className: "absolute w-[450px] h-[450px] rounded-full",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
          },
        }),
        p.jsx("div", {
          className: "relative z-10 text-center w-full max-w-xl mx-auto",
          children: p.jsxs("div", {
            className: "rounded-3xl p-6 sm:p-10",
            style: {
              background: "hsl(38, 30%, 96%)",
              boxShadow:
                "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 6px 20px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
            },
            children: [
              p.jsxs(D.div, {
                className: "flex justify-center items-end gap-3 sm:gap-6 mb-6",
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 1 },
                children: [
                  p.jsx(D.div, {
                    animate:
                      n === "done"
                        ? { rotate: [0, -10, 10, -10, 10, 0], y: [0, -15, 0] }
                        : { y: [0, -5, 0] },
                    transition:
                      n === "done"
                        ? { duration: 1.5, repeat: 1 / 0 }
                        : { duration: 2, repeat: 1 / 0 },
                    className: "text-6xl sm:text-8xl select-none",
                    children: "🧸",
                  }),
                  p.jsxs("div", {
                    className: "relative flex flex-col items-center",
                    children: [
                      n === "cut" &&
                        p.jsx(D.div, {
                          className: "absolute z-20",
                          style: {
                            top: o,
                            left: "50%",
                            transform: "translateX(-50%)",
                          },
                          children: p.jsx("div", {
                            className: "text-4xl sm:text-5xl",
                            style: {
                              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.3))",
                            },
                            children: "🔪",
                          }),
                        }),
                      p.jsx(rt, {
                        children:
                          f &&
                          p.jsx(D.div, {
                            exit: { opacity: 0, scale: 0, y: -20 },
                            transition: { duration: 0.5 },
                            className:
                              "flex gap-4 sm:gap-6 mb-1.5 relative z-10",
                            children: [0, 1, 2].map((h) =>
                              p.jsxs(
                                "div",
                                {
                                  className: "flex flex-col items-center",
                                  children: [
                                    d &&
                                      p.jsx(D.div, {
                                        initial: { scale: 0, opacity: 0 },
                                        animate: {
                                          scale: [1, 1.3, 1],
                                          opacity: [1, 0.7, 1],
                                        },
                                        transition: {
                                          duration: 0.5,
                                          repeat: 1 / 0,
                                          delay: h * 0.15,
                                        },
                                        className:
                                          "text-base sm:text-xl mb-0.5",
                                        children: "🔥",
                                      }),
                                    p.jsx("div", {
                                      className: "w-2 sm:w-2.5 rounded-full",
                                      style: {
                                        height: h === 1 ? "2.2rem" : "1.8rem",
                                        background:
                                          h === 1
                                            ? "linear-gradient(180deg, hsl(350, 50%, 58%), hsl(345, 40%, 45%))"
                                            : h === 0
                                              ? "linear-gradient(180deg, hsl(38, 65%, 65%), hsl(35, 55%, 50%))"
                                              : "linear-gradient(180deg, hsl(350, 40%, 72%), hsl(345, 35%, 58%))",
                                        boxShadow:
                                          "0 2px 6px hsl(25, 20%, 40%, 0.3)",
                                      },
                                    }),
                                  ],
                                },
                                h,
                              ),
                            ),
                          }),
                      }),
                      p.jsxs("div", {
                        className: "relative rounded-xl overflow-hidden",
                        style: {
                          width: "5rem",
                          height: "2.5rem",
                          background:
                            "linear-gradient(180deg, hsl(350, 45%, 58%), hsl(345, 38%, 48%))",
                          boxShadow:
                            "0 4px 14px hsl(25, 20%, 40%, 0.3), inset 0 1px 0 hsl(350, 40%, 72%)",
                        },
                        children: [
                          p.jsx("div", {
                            className:
                              "absolute top-0 inset-x-0 h-2 rounded-b-lg",
                            style: {
                              background: "hsl(38, 50%, 80%)",
                              opacity: 0.9,
                            },
                          }),
                          p.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-around px-2",
                            children: [
                              "hsl(38, 65%, 55%)",
                              "hsl(0, 0%, 100%)",
                              "hsl(350, 45%, 60%)",
                            ].map((h, v) =>
                              p.jsx(
                                "div",
                                {
                                  className: "w-1.5 h-1.5 rounded-full",
                                  style: {
                                    background: h,
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                                  },
                                },
                                v,
                              ),
                            ),
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        style: {
                          width: "6.5rem",
                          height: "0.4rem",
                          background: "hsl(35, 30%, 80%)",
                          borderRadius: "0 0 4px 4px",
                          marginTop: "-1px",
                        },
                      }),
                      p.jsxs("div", {
                        className: "relative rounded-xl overflow-hidden -mt-px",
                        style: {
                          width: "8rem",
                          height: "3rem",
                          background:
                            "linear-gradient(180deg, hsl(38, 50%, 80%), hsl(35, 40%, 72%))",
                          boxShadow:
                            "0 4px 14px hsl(25, 20%, 40%, 0.2), inset 0 1px 0 hsl(38, 50%, 88%)",
                        },
                        children: [
                          p.jsx("div", {
                            className: "absolute top-0 inset-x-0 h-2",
                            style: {
                              background: "hsl(350, 45%, 55%)",
                              borderRadius: "0 0 6px 6px",
                            },
                          }),
                          p.jsx("div", {
                            className:
                              "absolute bottom-1 inset-x-2 flex justify-between items-center",
                            children: [0, 1, 2, 3, 4].map((h) =>
                              p.jsx(
                                "div",
                                {
                                  className: "w-2 h-2 rounded-full",
                                  style: { background: "hsl(350, 40%, 52%)" },
                                },
                                h,
                              ),
                            ),
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        style: {
                          width: "10rem",
                          height: "0.4rem",
                          background: "hsl(35, 30%, 80%)",
                          borderRadius: "0 0 4px 4px",
                          marginTop: "-1px",
                        },
                      }),
                      p.jsxs("div", {
                        className: "relative rounded-xl overflow-hidden -mt-px",
                        style: {
                          width: "12rem",
                          height: "3.5rem",
                          background:
                            "linear-gradient(180deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                          boxShadow:
                            "0 8px 30px hsl(25, 20%, 40%, 0.3), inset 0 1px 0 hsl(350, 40%, 68%)",
                        },
                        children: [
                          p.jsx("div", {
                            className: "absolute top-0 inset-x-0 h-2.5",
                            style: {
                              background: "hsl(38, 50%, 80%)",
                              borderRadius: "0 0 8px 8px",
                              opacity: 0.95,
                            },
                          }),
                          p.jsx("div", {
                            className:
                              "absolute bottom-1 inset-x-3 flex justify-around",
                            children: [0, 1, 2, 3, 4].map((h) =>
                              p.jsx(
                                "span",
                                {
                                  className: "text-sm sm:text-base",
                                  children: "⭐",
                                },
                                h,
                              ),
                            ),
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        className: "rounded-full -mt-px",
                        style: {
                          width: "14rem",
                          height: "0.6rem",
                          background:
                            "linear-gradient(180deg, hsl(30, 20%, 70%), hsl(25, 18%, 60%))",
                        },
                      }),
                    ],
                  }),
                  p.jsx(D.div, {
                    animate:
                      n === "done"
                        ? { rotate: [0, 10, -10, 10, -10, 0], y: [0, -15, 0] }
                        : { y: [0, -5, 0] },
                    transition:
                      n === "done"
                        ? { duration: 1.5, repeat: 1 / 0, delay: 0.2 }
                        : { duration: 2, repeat: 1 / 0, delay: 0.5 },
                    className: "text-6xl sm:text-8xl select-none",
                    children: "🧸",
                  }),
                ],
              }),
              p.jsxs(rt, {
                mode: "wait",
                children: [
                  n === "celebrate" &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.celebrateTitle),
                        subtitle: G($.cake.celebrateSubtitle),
                        children: p.jsx(Jo, {
                          onClick: l,
                          children: "Light the Candles 🕯️",
                        }),
                      },
                      "celebrate",
                    ),
                  (n === "light" || n === "lit") &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.litTitle),
                        subtitle: G($.cake.litSubtitle),
                        children:
                          n === "lit" &&
                          p.jsx(Jo, {
                            onClick: () => r("blow"),
                            pulse: !0,
                            children: "Make a Wish 🌟",
                          }),
                      },
                      "light",
                    ),
                  n === "blow" &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.wishTitle),
                        subtitle: G($.cake.wishSubtitle),
                        children: p.jsx(Jo, {
                          onClick: u,
                          pulse: !0,
                          children: "Blow the Candles 💨",
                        }),
                      },
                      "blow",
                    ),
                  n === "blown" &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.blownTitle),
                        subtitle: G($.cake.blownSubtitle),
                      },
                      "blown",
                    ),
                  n === "cutting" &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.cuttingTitle),
                        subtitle: G($.cake.cuttingSubtitle),
                        children: p.jsx(Jo, {
                          onClick: c,
                          pulse: !0,
                          children: "Cut the Cake 🔪",
                        }),
                      },
                      "cutting",
                    ),
                  n === "cut" &&
                    p.jsx(
                      vr,
                      {
                        title: "Cutting… 🍰",
                        subtitle: "The knife is slicing through!",
                      },
                      "cut",
                    ),
                  n === "done" &&
                    p.jsx(
                      vr,
                      {
                        title: G($.cake.doneTitle),
                        subtitle: G($.cake.doneSubtitle),
                      },
                      "done",
                    ),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function kN(e, t, n) {
  L.useEffect(() => {
    if (!e) return;
    const r = setTimeout(t, n);
    return () => clearTimeout(r);
  }, [e, t, n]);
}
const vr = ({ title: e, subtitle: t, children: n }) =>
    p.jsxs(D.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6 },
      className: "mt-3",
      children: [
        p.jsx("p", {
          className: "font-cursive text-2xl sm:text-4xl mb-2",
          style: { color: "hsl(25, 30%, 22%)" },
          children: e,
        }),
        p.jsx("p", {
          className: "font-display text-sm sm:text-lg mb-4 font-medium",
          style: { color: "hsl(25, 20%, 50%)" },
          children: t,
        }),
        n,
      ],
    }),
  Jo = ({ onClick: e, pulse: t, children: n }) =>
    p.jsx(D.button, {
      onClick: e,
      className:
        "px-6 py-3 sm:px-8 sm:py-3 rounded-full font-display text-base sm:text-lg tracking-wide font-bold transition-all duration-300",
      style: {
        background:
          "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
        color: "hsl(0, 0%, 100%)",
        boxShadow: "0 6px 24px hsl(350, 50%, 50%, 0.35)",
      },
      whileHover: { scale: 1.06, y: -2 },
      whileTap: { scale: 0.95 },
      children: n,
    }),
  g1 = "/assets/cat-BVMD14VM.png",
  PN = ({ onBack: e }) =>
    p.jsxs(D.div, {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className:
        "fixed inset-0 flex items-center justify-center overflow-hidden px-4",
      style: {
        background:
          "linear-gradient(180deg, hsl(35, 30%, 94%), hsl(32, 28%, 91%), hsl(35, 30%, 95%))",
      },
      children: [
        p.jsx(hr, { onClick: e }),
        p.jsx(sn, { count: 25, types: ["heart", "petal", "sparkle"] }),
        p.jsx("div", {
          className: "absolute w-[600px] h-[600px] rounded-full",
          style: {
            background:
              "radial-gradient(circle, hsl(350, 50%, 55%, 0.08), transparent 60%)",
          },
        }),
        p.jsx("div", {
          className:
            "relative z-10 w-full max-w-xl mx-auto max-h-[90vh] overflow-y-auto py-6",
          children: p.jsxs("div", {
            className: "rounded-3xl p-5 sm:p-8 text-center",
            style: {
              background: "hsl(38, 30%, 96%)",
              boxShadow:
                "0 20px 60px hsl(25, 20%, 40%, 0.15), 0 4px 16px hsl(350, 40%, 50%, 0.08), 0 0 0 1px hsl(30, 15%, 88%)",
            },
            children: [
              p.jsx(D.img, {
                src: g1,
                alt: "Birthday cat with cake and flowers",
                className:
                  "w-36 h-36 sm:w-52 sm:h-52 object-contain mx-auto mb-4",
                style: {
                  filter: "drop-shadow(0 8px 20px hsl(25, 20%, 40%, 0.3))",
                },
                initial: { scale: 0, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.15, duration: 0.5, type: "spring" },
              }),
              p.jsx(D.h2, {
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.3, duration: 0.5 },
                className: "font-cursive text-3xl sm:text-5xl mb-3",
                style: {
                  color: "hsl(25, 30%, 22%)",
                  textShadow: "0 2px 18px hsl(350, 50%, 55%, 0.2)",
                },
                children: G($.final.title),
              }),
              p.jsx(D.p, {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.5, duration: 0.5 },
                className:
                  "font-elegant text-lg sm:text-2xl leading-relaxed mb-5",
                style: { color: "hsl(25, 22%, 38%)" },
                children: G($.final.message),
              }),
              p.jsx(D.p, {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.7, duration: 0.5 },
                className:
                  "font-display italic text-lg sm:text-xl mb-6 font-semibold",
                style: { color: "hsl(350, 45%, 50%)" },
                children: G($.final.highlight),
              }),
              p.jsx(D.p, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.9, duration: 0.6 },
                className: "font-cursive text-2xl sm:text-4xl",
                style: {
                  color: "hsl(25, 30%, 22%)",
                  textShadow: "0 2px 15px hsl(350, 50%, 55%, 0.2)",
                },
                children: G($.final.signature),
              }),
            ],
          }),
        }),
      ],
    }),
  RN = () => {
    const [e, t] = w.useState(!0),
      [n, r] = w.useState($.music.defaultVolume),
      [s, i] = w.useState(!0),
      [o, a] = w.useState(!1),
      l = w.useRef(null),
      u = w.useRef(null);
    w.useEffect(() => {
      const h = new Audio($.music.file),
        v = $.music.startAtSeconds;
      ((h.loop = v <= 0),
        (h.volume = 0),
        (h.preload = "auto"),
        (l.current = h));
      const g = setTimeout(() => i(!1), 6e3);
      return () => {
        (clearTimeout(g),
          u.current && cancelAnimationFrame(u.current),
          h.pause(),
          (h.src = ""));
      };
    }, []);
    const c = w.useCallback((h, v = 400) => {
      const g = l.current;
      if (!g) return;
      u.current && cancelAnimationFrame(u.current);
      const S = g.volume,
        m = performance.now(),
        y = (x) => {
          const b = x - m,
            C = Math.min(b / v, 1),
            T = 1 - Math.pow(1 - C, 3);
          ((g.volume = Math.max(0, Math.min(1, S + (h - S) * T))),
            C < 1 && (u.current = requestAnimationFrame(y)));
        };
      u.current = requestAnimationFrame(y);
    }, []);
    w.useEffect(() => {
      l.current && !e && c(n);
    }, [n, e, c]);
    const d = () => {
        l.current &&
          (e
            ? ((l.current.volume = 0),
              l.current.play().catch(() => {}),
              c(n, 600),
              t(!1),
              i(!1))
            : (c(0, 400),
              setTimeout(() => {
                var h;
                return (h = l.current) == null ? void 0 : h.pause();
              }, 420),
              t(!0)));
      },
      f = () => {
        l.current &&
          ((l.current.volume = 0),
          l.current.play().catch(() => {}),
          c(n, 800),
          t(!1),
          i(!1));
      };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(rt, {
          children:
            s &&
            p.jsxs(D.div, {
              initial: { opacity: 0, y: 10, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 10, scale: 0.95 },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              className:
                "fixed bottom-[4.5rem] right-4 z-[60] px-4 py-2.5 rounded-2xl flex items-center gap-2.5 cursor-pointer",
              style: {
                background: "hsl(38, 30%, 96%)",
                border: "2px solid hsl(30, 15%, 85%)",
                boxShadow: "0 8px 28px hsl(25, 20%, 40%, 0.15)",
              },
              onClick: f,
              children: [
                p.jsx(D.span, {
                  animate: { rotate: [0, 10, -10, 10, 0] },
                  transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
                  className: "text-lg",
                  children: "🎵",
                }),
                p.jsx("span", {
                  className:
                    "font-display text-sm sm:text-base tracking-wide font-semibold",
                  style: { color: "hsl(25, 25%, 32%)" },
                  children: $.music.notification,
                }),
                p.jsx(D.span, {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className:
                    "px-3 py-1 rounded-full text-xs font-display tracking-wider uppercase font-bold",
                  style: {
                    background:
                      "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                    color: "hsl(0, 0%, 100%)",
                    boxShadow: "0 2px 8px hsl(350, 50%, 50%, 0.3)",
                  },
                  children: "Play",
                }),
              ],
            }),
        }),
        p.jsxs("div", {
          className: "fixed bottom-4 right-4 z-[60] flex items-center gap-2",
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: [
            p.jsx(rt, {
              children:
                o &&
                !e &&
                p.jsx(D.div, {
                  initial: { opacity: 0, width: 0 },
                  animate: { opacity: 1, width: "auto" },
                  exit: { opacity: 0, width: 0 },
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  className:
                    "overflow-hidden flex items-center px-3 py-2 rounded-full",
                  style: {
                    background: "hsl(38, 30%, 96%)",
                    border: "2px solid hsl(30, 15%, 85%)",
                    boxShadow: "0 4px 12px hsl(25, 20%, 40%, 0.12)",
                  },
                  children: p.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.05",
                    value: n,
                    onChange: (h) => r(parseFloat(h.target.value)),
                    className:
                      "w-20 sm:w-24 h-1 appearance-none rounded-full cursor-pointer",
                    style: {
                      background: `linear-gradient(90deg, hsl(350, 50%, 55%) ${n * 100}%, hsl(30, 15%, 82%) ${n * 100}%)`,
                      accentColor: "hsl(350, 50%, 55%)",
                    },
                  }),
                }),
            }),
            p.jsx(D.button, {
              onClick: d,
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 },
              transition: { type: "spring", stiffness: 400, damping: 17 },
              className:
                "w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center",
              style: {
                background: e
                  ? "hsl(38, 30%, 96%)"
                  : "linear-gradient(135deg, hsl(350, 50%, 55%), hsl(345, 40%, 42%))",
                border: `2px solid ${e ? "hsl(30, 15%, 85%)" : "hsl(350, 40%, 50%)"}`,
                boxShadow: e
                  ? "0 4px 14px hsl(25, 20%, 40%, 0.12)"
                  : "0 4px 18px hsl(350, 50%, 50%, 0.3)",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
              },
              children: e
                ? p.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "hsl(25, 20%, 50%)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      p.jsx("polygon", {
                        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                      }),
                      p.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
                      p.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" }),
                    ],
                  })
                : p.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "hsl(0, 0%, 100%)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      p.jsx("polygon", {
                        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
                      }),
                      p.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }),
                      p.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }),
                    ],
                  }),
            }),
          ],
        }),
      ],
    });
  },
  N0 = [
    "hsl(350, 50%, 55%)",
    "hsl(38, 70%, 55%)",
    "hsl(345, 40%, 48%)",
    "hsl(350, 40%, 72%)",
    "hsl(35, 55%, 65%)",
    "hsl(30, 45%, 60%)",
  ],
  AN = ({ trigger: e }) => {
    const [t, n] = w.useState(!1);
    w.useEffect(() => {
      if (e === 0) return;
      n(!0);
      const s = setTimeout(() => n(!1), 600);
      return () => clearTimeout(s);
    }, [e]);
    const r = w.useMemo(
      () =>
        Array.from({ length: 32 }, (s, i) => ({
          id: i,
          x: 50 + (Math.random() - 0.5) * 20,
          y: 50 + (Math.random() - 0.5) * 20,
          size: 4 + Math.random() * 10,
          angle: (i / 32) * 360 + Math.random() * 20,
          distance: 80 + Math.random() * 200,
          delay: Math.random() * 0.1,
          color: N0[Math.floor(Math.random() * N0.length)],
          type: ["star", "dot", "ring"][Math.floor(Math.random() * 3)],
        })),
      [e],
    );
    return p.jsx(rt, {
      children:
        t &&
        p.jsxs(D.div, {
          className: "fixed inset-0 pointer-events-none z-[100]",
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          children: [
            p.jsx(D.div, {
              className:
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
              style: {
                width: 60,
                height: 60,
                background:
                  "radial-gradient(circle, hsl(350, 50%, 55%, 0.4), transparent 70%)",
              },
              initial: { scale: 0, opacity: 1 },
              animate: { scale: 8, opacity: 0 },
              transition: { duration: 0.5, ease: "easeOut" },
            }),
            r.map((s) => {
              const i = (s.angle * Math.PI) / 180,
                o = Math.cos(i) * s.distance,
                a = Math.sin(i) * s.distance;
              return p.jsxs(
                D.div,
                {
                  className: "absolute",
                  style: { left: `${s.x}%`, top: `${s.y}%` },
                  initial: { x: 0, y: 0, scale: 0, opacity: 1 },
                  animate: {
                    x: o,
                    y: a,
                    scale: [0, 1.5, 0],
                    opacity: [1, 1, 0],
                  },
                  transition: {
                    duration: 0.5,
                    delay: s.delay,
                    ease: "easeOut",
                  },
                  children: [
                    s.type === "star" &&
                      p.jsx("span", {
                        style: { fontSize: s.size, color: s.color },
                        children: "✦",
                      }),
                    s.type === "dot" &&
                      p.jsx("div", {
                        className: "rounded-full",
                        style: {
                          width: s.size,
                          height: s.size,
                          background: s.color,
                        },
                      }),
                    s.type === "ring" &&
                      p.jsx("div", {
                        className: "rounded-full",
                        style: {
                          width: s.size,
                          height: s.size,
                          border: `2px solid ${s.color}`,
                        },
                      }),
                  ],
                },
                s.id,
              );
            }),
          ],
        }),
    });
  },
  j0 = [
    "countdown",
    "envelope",
    "blast",
    "balloons",
    "teasing",
    "message",
    "reasons",
    "moments",
    "cake",
    "final",
  ],
  NN = () => {
    const [e, t] = w.useState("countdown"),
      [n, r] = w.useState(0);
    w.useEffect(() => {
      const a = new Audio($.music.file);
      a.preload = "auto";
      const l = new Image();
      l.src = g1;
    }, []);
    const s = w.useCallback(() => {
        r((a) => a + 1);
      }, []),
      i = () => {
        const a = j0.indexOf(e);
        a > 0 && (s(), t(j0[a - 1]));
      },
      o = (a) => {
        (s(), t(a));
      };
    return p.jsxs("div", {
      className: "min-h-screen bg-background overflow-hidden",
      children: [
        p.jsx(AN, { trigger: n }),
        p.jsxs(rt, {
          mode: "wait",
          children: [
            e === "countdown" &&
              p.jsx(mN, { onComplete: () => o("envelope") }, "countdown"),
            e === "envelope" &&
              p.jsx(yN, { onOpen: () => o("blast") }, "envelope"),
            e === "blast" &&
              p.jsx(
                gN,
                { onContinue: () => o("balloons"), onBack: i },
                "blast",
              ),
            e === "balloons" &&
              p.jsx(
                xN,
                { onContinue: () => o("teasing"), onBack: i },
                "balloons",
              ),
            e === "teasing" &&
              p.jsx(
                SN,
                { onComplete: () => o("message"), onBack: i },
                "teasing",
              ),
            e === "message" &&
              p.jsx(
                bN,
                { onContinue: () => o("reasons"), onBack: i },
                "message",
              ),
            e === "reasons" &&
              p.jsx(
                CN,
                { onContinue: () => o("moments"), onBack: i },
                "reasons",
              ),
            e === "moments" &&
              p.jsx(TN, { onContinue: () => o("cake"), onBack: i }, "moments"),
            e === "cake" &&
              p.jsx(EN, { onComplete: () => o("final"), onBack: i }, "cake"),
            e === "final" && p.jsx(PN, { onBack: i }, "final"),
          ],
        }),
        p.jsx(RN, {}),
      ],
    });
  },
  jN = () => {
    const e = Mx();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      p.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: p.jsxs("div", {
          className: "text-center",
          children: [
            p.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            p.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            p.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  MN = new EE(),
  DN = () =>
    p.jsx(PE, {
      client: MN,
      children: p.jsxs(tE, {
        children: [
          p.jsx(V2, {}),
          p.jsx(yC, {}),
          p.jsx(fk, {
            children: p.jsxs(uk, {
              children: [
                p.jsx(Gc, { path: "/", element: p.jsx(NN, {}) }),
                p.jsx(Gc, { path: "*", element: p.jsx(jN, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
tv(document.getElementById("root")).render(p.jsx(DN, {}));
