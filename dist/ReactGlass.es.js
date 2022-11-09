var hr = { exports: {} }, He = {}, Mr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Yt() {
  if (lt)
    return g;
  lt = 1;
  var O = Symbol.for("react.element"), v = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ae = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function te(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Ie = {};
  function oe(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = oe.prototype;
  function $(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  var me = $.prototype = new ie();
  me.constructor = $, fe(me, oe.prototype), me.isPureReactComponent = !0;
  var ue = Array.isArray, W = Object.prototype.hasOwnProperty, G = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, s, h) {
    var C, b = {}, P = null, x = null;
    if (s != null)
      for (C in s.ref !== void 0 && (x = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        W.call(s, C) && !de.hasOwnProperty(C) && (b[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      b.children = h;
    else if (1 < T) {
      for (var w = Array(T), V = 0; V < T; V++)
        w[V] = arguments[V + 2];
      b.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        b[C] === void 0 && (b[C] = T[C]);
    return { $$typeof: O, type: n, key: P, ref: x, props: b, _owner: G.current };
  }
  function Ce(n, s) {
    return { $$typeof: O, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === O;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Se = /\/+/g;
  function H(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function J(n, s, h, C, b) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var x = !1;
    if (n === null)
      x = !0;
    else
      switch (P) {
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case O:
            case v:
              x = !0;
          }
      }
    if (x)
      return x = n, b = b(x), n = C === "" ? "." + H(x, 0) : C, ue(b) ? (h = "", n != null && (h = n.replace(Se, "$&/") + "/"), J(b, s, h, "", function(V) {
        return V;
      })) : b != null && (we(b) && (b = Ce(b, h + (!b.key || x && x.key === b.key ? "" : ("" + b.key).replace(Se, "$&/") + "/") + n)), s.push(b)), 1;
    if (x = 0, C = C === "" ? "." : C + ":", ue(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + H(P, T);
        x += J(P, s, h, w, b);
      }
    else if (w = te(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + H(P, T++), x += J(P, s, h, w, b);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return x;
  }
  function B(n, s, h) {
    if (n == null)
      return n;
    var C = [], b = 0;
    return J(n, C, "", "", function(P) {
      return s.call(h, P, b++);
    }), C;
  }
  function se(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, pe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: pe, ReactCurrentOwner: G };
  return g.Children = { map: B, forEach: function(n, s, h) {
    B(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return B(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return B(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = oe, g.Fragment = Q, g.Profiler = Z, g.PureComponent = $, g.StrictMode = j, g.Suspense = N, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = fe({}, n.props), b = n.key, P = n.ref, x = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, x = G.current), s.key !== void 0 && (b = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        W.call(s, w) && !de.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var V = 0; V < w; V++)
        T[V] = arguments[V + 2];
      C.children = T;
    }
    return { $$typeof: O, type: n.type, key: b, ref: P, props: C, _owner: x };
  }, g.createContext = function(n) {
    return n = { $$typeof: ae, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ne, _context: n }, n.Consumer = n;
  }, g.createElement = ye, g.createFactory = function(n) {
    var s = ye.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: ee, render: n };
  }, g.isValidElement = we, g.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: se };
  }, g.memo = function(n, s) {
    return { $$typeof: re, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var yr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Bt() {
  return ft || (ft = 1, function(O, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Q = "18.2.0", j = Symbol.for("react.element"), Z = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), re = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), oe = Symbol.iterator, ie = "@@iterator";
      function $(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ie];
        return typeof r == "function" ? r : null;
      }
      var me = {
        current: null
      }, ue = {
        transition: null
      }, W = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        current: null
      }, de = {}, ye = null;
      function Ce(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Se = !1, H = !1, J = !1, B = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: G
      };
      B.ReactDebugCurrentFrame = de, B.ReactCurrentActQueue = W;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, u = o.getStackAddendum();
          u !== "" && (r += "%s", a = a.concat([u]));
          var p = a.map(function(f) {
            return String(f);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", u = o + "." + r;
          if (Te[u])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[u] = !0;
        }
      }
      var s = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, x = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in P)
          P.hasOwnProperty(T) && x(T, P[T]);
      }
      function w() {
      }
      w.prototype = b.prototype;
      function V(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var ge = V.prototype = new w();
      ge.constructor = V, h(ge, b.prototype), ge.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Je = Array.isArray;
      function $e(e) {
        return Je(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Le(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Oe(e);
      }
      function Xe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var u = r.displayName || r.name || "";
        return u !== "" ? a + "(" + u + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ne:
            return "Fragment";
          case Z:
            return "Portal";
          case ee:
            return "Profiler";
          case ae:
            return "StrictMode";
          case Y:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case re:
              var r = e;
              return Pe(r) + ".Consumer";
            case N:
              var a = e;
              return Pe(a._context) + ".Provider";
            case M:
              return Xe(e, e.render, "ForwardRef");
            case K:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var u = e, p = u._payload, f = u._init;
              try {
                return ve(f(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Qe, Ze, Me;
      Me = {};
      function Be(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function be(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          Qe || (Qe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function er(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function rr(e) {
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var r = ve(G.current.type);
          Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var je = function(e, r, a, o, u, p, f) {
        var y = {
          $$typeof: j,
          type: e,
          key: r,
          ref: a,
          props: f,
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function _r(e, r, a) {
        var o, u = {}, p = null, f = null, y = null, E = null;
        if (r != null) {
          Be(r) && (f = r.ref, rr(r)), be(r) && (ke(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var k = arguments.length - 2;
        if (k === 1)
          u.children = a;
        else if (k > 1) {
          for (var A = Array(k), D = 0; D < k; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), u.children = A;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            u[o] === void 0 && (u[o] = I[o]);
        }
        if (p || f) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && br(u, U), f && er(u, U);
        }
        return je(e, p, f, y, E, G.current, u);
      }
      function Er(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = h({}, e.props), p = e.key, f = e.ref, y = e._self, E = e._source, k = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, k = G.current), be(r) && (ke(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? u[o] = A[o] : u[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          u.children = a;
        else if (D > 1) {
          for (var I = Array(D), U = 0; U < D; U++)
            I[U] = arguments[U + 2];
          u.children = I;
        }
        return je(e.type, p, f, y, E, k, u);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      var tr = ".", Cr = ":";
      function wr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(u) {
          return a[u];
        });
        return "$" + o;
      }
      var We = !1, nr = /\/+/g;
      function he(e) {
        return e.replace(nr, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), wr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, u) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (p) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case j:
                case Z:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = u(y), k = o === "" ? tr + Ae(y, 0) : o;
          if ($e(E)) {
            var A = "";
            k != null && (A = he(k) + "/"), Ee(E, r, A, "", function(Vt) {
              return Vt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = Er(
              E,
              a + (E.key && (!y || y.key !== E.key) ? he("" + E.key) + "/" : "") + k
            )), r.push(E));
          return 1;
        }
        var D, I, U = 0, q = o === "" ? tr : o + Cr;
        if ($e(e))
          for (var vr = 0; vr < e.length; vr++)
            D = e[vr], I = q + Ae(D, vr), U += Ee(D, r, a, I, u);
        else {
          var Nr = $(e);
          if (typeof Nr == "function") {
            var ut = e;
            Nr === ut.entries && (We || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Wt = Nr.call(ut), st, Ut = 0; !(st = Wt.next()).done; )
              D = st.value, I = q + Ae(D, Ut++), U += Ee(D, r, a, I, u);
          } else if (p === "object") {
            var ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return U;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return Ee(e, o, "", "", function(p) {
          return r.call(a, p, u++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function ar(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function or(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: re,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: N,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var p = {
            $$typeof: re,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                u || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), u = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Or = 2;
      function kr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === ze || e._status === Fe) {
              var f = e;
              f._status = qe, f._result = p;
            }
          }, function(p) {
            if (e._status === ze || e._status === Fe) {
              var f = e;
              f._status = Or, f._result = p;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var u = e._result;
          return u === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function Pr(e) {
        var r = {
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: kr
        };
        {
          var o, u;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === K ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ne || e === ee || J || e === ae || e === Y || e === te || H || e === Ie || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === K || e.$$typeof === N || e.$$typeof === re || e.$$typeof === M || e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: K,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return a;
      }
      function l() {
        var e = me.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = l();
        return r.useState(e);
      }
      function _(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = l();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function F(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function L(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function ur(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function ce(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function mt() {
        var e = l();
        return e.useTransition();
      }
      function gt(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function bt() {
        var e = l();
        return e.useId();
      }
      function _t(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Ur, Vr, Yr, Br, zr, qr, Gr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Ge === 0) {
            Ur = console.log, Vr = console.info, Yr = console.warn, Br = console.error, zr = console.group, qr = console.groupCollapsed, Gr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ge++;
        }
      }
      function Rt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Ur
              }),
              info: h({}, e, {
                value: Vr
              }),
              warn: h({}, e, {
                value: Yr
              }),
              error: h({}, e, {
                value: Br
              }),
              group: h({}, e, {
                value: zr
              }),
              groupCollapsed: h({}, e, {
                value: qr
              }),
              groupEnd: h({}, e, {
                value: Gr
              })
            });
          }
          Ge < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var jr = B.ReactCurrentDispatcher, Ar;
      function sr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (u) {
              var o = u.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, cr;
      {
        var Ct = typeof WeakMap == "function" ? WeakMap : Map;
        cr = new Ct();
      }
      function Kr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = cr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = jr.current, jr.current = null, Et();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (q) {
                o = q;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var y = q.stack.split(`
`), E = o.stack.split(`
`), k = y.length - 1, A = E.length - 1; k >= 1 && A >= 0 && y[k] !== E[A]; )
              A--;
            for (; k >= 1 && A >= 0; k--, A--)
              if (y[k] !== E[A]) {
                if (k !== 1 || A !== 1)
                  do
                    if (k--, A--, A < 0 || y[k] !== E[A]) {
                      var D = `
` + y[k].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && cr.set(e, D), D;
                    }
                  while (k >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, jr.current = p, Rt(), Error.prepareStackTrace = u;
        }
        var I = e ? e.displayName || e.name : "", U = I ? sr(I) : "";
        return typeof e == "function" && cr.set(e, U), U;
      }
      function wt(e, r, a) {
        return Kr(e, !1);
      }
      function St(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, St(e));
        if (typeof e == "string")
          return sr(e);
        switch (e) {
          case Y:
            return sr("Suspense");
          case te:
            return sr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return wt(e.render);
            case K:
              return lr(e.type, r, a);
            case fe: {
              var o = e, u = o._payload, p = o._init;
              try {
                return lr(p(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Xr = B.ReactDebugCurrentFrame;
      function fr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Xr.setExtraStackFrame(a);
        } else
          Xr.setExtraStackFrame(null);
      }
      function Tt(e, r, a, o, u) {
        {
          var p = Function.call.bind(xe);
          for (var f in e)
            if (p(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                y = k;
              }
              y && !(y instanceof Error) && (fr(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), fr(null)), y instanceof Error && !(y.message in Jr) && (Jr[y.message] = !0, fr(u), d("Failed %s type: %s", a, y.message), fr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Qr() {
        if (G.current) {
          var e = ve(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ot(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Ot(e.__source) : "";
      }
      var Zr = {};
      function Pt(e) {
        var r = Qr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!Zr[a]) {
            Zr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== G.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), Ue(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function rt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && et(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = $(e);
            if (typeof u == "function" && u !== e.entries)
              for (var p = u.call(e), f; !(f = p.next()).done; )
                _e(f.value) && et(f.value, r);
          }
        }
      }
      function tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === M || r.$$typeof === K))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            Tt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var u = ve(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function xt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function nt(e, r, a) {
        var o = i(e);
        if (!o) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = kt(r);
          p ? u += p : u += Qr();
          var f;
          e === null ? f = "null" : $e(e) ? f = "array" : e !== void 0 && e.$$typeof === j ? (f = "<" + (ve(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, u);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            rt(arguments[E], e);
        return e === ne ? xt(y) : tt(y), y;
      }
      var at = !1;
      function jt(e) {
        var r = nt.bind(null, e);
        return r.type = e, at || (at = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function At(e, r, a) {
        for (var o = Rr.apply(this, arguments), u = 2; u < arguments.length; u++)
          rt(arguments[u], o.type);
        return tt(o), o;
      }
      function Dt(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ot = !1, dr = null;
      function Ft(e) {
        if (dr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = O && O[r];
            dr = a.call(O, "timers").setImmediate;
          } catch {
            dr = function(u) {
              ot === !1 && (ot = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = u, p.port2.postMessage(void 0);
            };
          }
        return dr(e);
      }
      var Ve = 0, it = !1;
      function It(e) {
        {
          var r = Ve;
          Ve++, W.current === null && (W.current = []);
          var a = W.isBatchingLegacy, o;
          try {
            if (W.isBatchingLegacy = !0, o = e(), !a && W.didScheduleLegacyUpdate) {
              var u = W.current;
              u !== null && (W.didScheduleLegacyUpdate = !1, Lr(u));
            }
          } catch (I) {
            throw pr(r), I;
          } finally {
            W.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, f = !1, y = {
              then: function(I, U) {
                f = !0, p.then(function(q) {
                  pr(r), Ve === 0 ? Ir(q, I, U) : I(q);
                }, function(q) {
                  pr(r), U(q);
                });
              }
            };
            return !it && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (it = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (pr(r), Ve === 0) {
              var k = W.current;
              k !== null && (Lr(k), W.current = null);
              var A = {
                then: function(I, U) {
                  W.current === null ? (W.current = [], Ir(E, I, U)) : I(E);
                }
              };
              return A;
            } else {
              var D = {
                then: function(I, U) {
                  I(E);
                }
              };
              return D;
            }
          }
        }
      }
      function pr(e) {
        e !== Ve - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Ir(e, r, a) {
        {
          var o = W.current;
          if (o !== null)
            try {
              Lr(o), Ft(function() {
                o.length === 0 ? (W.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Lr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var $t = nt, Lt = At, Nt = jt, Mt = {
        map: De,
        forEach: ar,
        count: Sr,
        toArray: Tr,
        only: or
      };
      v.Children = Mt, v.Component = b, v.Fragment = ne, v.Profiler = ee, v.PureComponent = V, v.StrictMode = ae, v.Suspense = Y, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, v.cloneElement = Lt, v.createContext = ir, v.createElement = $t, v.createFactory = Nt, v.createRef = mr, v.forwardRef = xr, v.isValidElement = _e, v.lazy = Pr, v.memo = c, v.startTransition = Dt, v.unstable_act = It, v.useCallback = X, v.useContext = R, v.useDebugValue = ce, v.useDeferredValue = gt, v.useEffect = z, v.useId = bt, v.useImperativeHandle = ur, v.useInsertionEffect = F, v.useLayoutEffect = L, v.useMemo = Re, v.useReducer = _, v.useRef = m, v.useState = S, v.useSyncExternalStore = _t, v.useTransition = mt, v.version = Q, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yr, yr.exports)), yr.exports;
}
var dt;
function ht() {
  return dt || (dt = 1, function(O) {
    process.env.NODE_ENV === "production" ? O.exports = Yt() : O.exports = Bt();
  }(Mr)), Mr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function zt() {
  if (pt)
    return He;
  pt = 1;
  var O = ht(), v = Symbol.for("react.element"), Q = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, Z = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ee, N, re) {
    var M, Y = {}, te = null, K = null;
    re !== void 0 && (te = "" + re), N.key !== void 0 && (te = "" + N.key), N.ref !== void 0 && (K = N.ref);
    for (M in N)
      j.call(N, M) && !ne.hasOwnProperty(M) && (Y[M] = N[M]);
    if (ee && ee.defaultProps)
      for (M in N = ee.defaultProps, N)
        Y[M] === void 0 && (Y[M] = N[M]);
    return { $$typeof: v, type: ee, key: te, ref: K, props: Y, _owner: Z.current };
  }
  return He.Fragment = Q, He.jsx = ae, He.jsxs = ae, He;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function qt() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var O = ht(), v = Symbol.for("react.element"), Q = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), ee = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[Ie];
      return typeof i == "function" ? i : null;
    }
    var ie = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          c[l - 1] = arguments[l];
        me("error", t, c);
      }
    }
    function me(t, i, c) {
      {
        var l = ie.ReactDebugCurrentFrame, R = l.getStackAddendum();
        R !== "" && (i += "%s", c = c.concat([R]));
        var S = c.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ue = !1, W = !1, G = !1, de = !1, ye = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === j || t === ne || ye || t === Z || t === re || t === M || de || t === K || ue || W || G || typeof t == "object" && t !== null && (t.$$typeof === te || t.$$typeof === Y || t.$$typeof === ae || t.$$typeof === ee || t.$$typeof === N || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ye(t, i, c) {
      var l = t.displayName;
      if (l)
        return l;
      var R = i.displayName || i.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case j:
          return "Fragment";
        case Q:
          return "Portal";
        case ne:
          return "Profiler";
        case Z:
          return "StrictMode";
        case re:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ee:
            var i = t;
            return Se(i) + ".Consumer";
          case ae:
            var c = t;
            return Se(c._context) + ".Provider";
          case N:
            return Ye(t, t.render, "ForwardRef");
          case Y:
            var l = t.displayName || null;
            return l !== null ? l : H(t.type) || "Memo";
          case te: {
            var R = t, S = R._payload, _ = R._init;
            try {
              return H(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, B = 0, se, d, pe, Te, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function b() {
      {
        if (B === 0) {
          se = console.log, d = console.info, pe = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function P() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: se
            }),
            info: J({}, t, {
              value: d
            }),
            warn: J({}, t, {
              value: pe
            }),
            error: J({}, t, {
              value: Te
            }),
            group: J({}, t, {
              value: n
            }),
            groupCollapsed: J({}, t, {
              value: s
            }),
            groupEnd: J({}, t, {
              value: h
            })
          });
        }
        B < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = ie.ReactCurrentDispatcher, T;
    function w(t, i, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var l = R.stack.trim().match(/\n( *(at )?)/);
            T = l && l[1] || "";
          }
        return `
` + T + t;
      }
    }
    var V = !1, ge;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new mr();
    }
    function Je(t, i) {
      if (!t || V)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      V = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = x.current, x.current = null, b();
      try {
        if (i) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (ce) {
              l = ce;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (ce) {
              l = ce;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            l = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && l && typeof ce.stack == "string") {
          for (var m = ce.stack.split(`
`), z = l.stack.split(`
`), F = m.length - 1, L = z.length - 1; F >= 1 && L >= 0 && m[F] !== z[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (m[F] !== z[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || m[F] !== z[L]) {
                    var X = `
` + m[F].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, X), X;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        V = !1, x.current = S, P(), Error.prepareStackTrace = R;
      }
      var Re = t ? t.displayName || t.name : "", ur = Re ? w(Re) : "";
      return typeof t == "function" && ge.set(t, ur), ur;
    }
    function $e(t, i, c) {
      return Je(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Le(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, gr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case re:
          return w("Suspense");
        case M:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case N:
            return $e(t.render);
          case Y:
            return Le(t.type, i, c);
          case te: {
            var l = t, R = l._payload, S = l._init;
            try {
              return Le(S(R), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ke = {}, Xe = ie.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        Xe.setExtraStackFrame(c);
      } else
        Xe.setExtraStackFrame(null);
    }
    function ve(t, i, c, l, R) {
      {
        var S = Function.call.bind(Oe);
        for (var _ in t)
          if (S(t, _)) {
            var m = void 0;
            try {
              if (typeof t[_] != "function") {
                var z = Error((l || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = t[_](i, _, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              m = F;
            }
            m && !(m instanceof Error) && (Pe(R), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, _, typeof m), Pe(null)), m instanceof Error && !(m.message in ke) && (ke[m.message] = !0, Pe(R), $("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ne(t) {
      return xe(t);
    }
    function Qe(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Ze(t) {
      try {
        return Me(t), !1;
      } catch {
        return !0;
      }
    }
    function Me(t) {
      return "" + t;
    }
    function Be(t) {
      if (Ze(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), Me(t);
    }
    var be = ie.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, je;
    je = {};
    function _r(t) {
      if (Oe.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Oe.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, i) {
      if (typeof t.ref == "string" && be.current && i && be.current.stateNode !== i) {
        var c = H(be.current.type);
        je[c] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(be.current.type), t.ref), je[c] = !0);
      }
    }
    function _e(t, i) {
      {
        var c = function() {
          er || (er = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function tr(t, i) {
      {
        var c = function() {
          rr || (rr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Cr = function(t, i, c, l, R, S, _) {
      var m = {
        $$typeof: v,
        type: t,
        key: i,
        ref: c,
        props: _,
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function wr(t, i, c, l, R) {
      {
        var S, _ = {}, m = null, z = null;
        c !== void 0 && (Be(c), m = "" + c), Er(i) && (Be(i.key), m = "" + i.key), _r(i) && (z = i.ref, Rr(i, R));
        for (S in i)
          Oe.call(i, S) && !br.hasOwnProperty(S) && (_[S] = i[S]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (S in F)
            _[S] === void 0 && (_[S] = F[S]);
        }
        if (m || z) {
          var L = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && _e(_, L), z && tr(_, L);
        }
        return Cr(t, m, z, R, l, be.current, _);
      }
    }
    var We = ie.ReactCurrentOwner, nr = ie.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        nr.setExtraStackFrame(c);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function De() {
      {
        if (We.current) {
          var t = H(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var ar = {};
    function Tr(t) {
      {
        var i = De();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function or(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(i);
        if (ar[c])
          return;
        ar[c] = !0;
        var l = "";
        t && t._owner && t._owner !== We.current && (l = " It was passed a child from " + H(t._owner.type) + "."), he(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), he(null);
      }
    }
    function ir(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            Ee(l) && or(l, i);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = oe(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), _; !(_ = S.next()).done; )
              Ee(_.value) && or(_.value, i);
        }
      }
    }
    function Fe(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === N || i.$$typeof === Y))
          c = i.propTypes;
        else
          return;
        if (c) {
          var l = H(i);
          ve(c, t.props, "prop", l, t);
        } else if (i.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = H(i);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var l = i[c];
          if (l !== "children" && l !== "key") {
            he(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function qe(t, i, c, l, R, S) {
      {
        var _ = we(t);
        if (!_) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Sr(R);
          z ? m += z : m += De();
          var F;
          t === null ? F = "null" : Ne(t) ? F = "array" : t !== void 0 && t.$$typeof === v ? (F = "<" + (H(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, m);
        }
        var L = wr(t, i, c, R, S);
        if (L == null)
          return L;
        if (_) {
          var X = i.children;
          if (X !== void 0)
            if (l)
              if (Ne(X)) {
                for (var Re = 0; Re < X.length; Re++)
                  ir(X[Re], t);
                Object.freeze && Object.freeze(X);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(X, t);
        }
        return t === j ? ze(L) : Fe(L), L;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function kr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var Pr = kr, xr = Or;
    Ke.Fragment = j, Ke.jsx = Pr, Ke.jsxs = xr;
  }()), Ke;
}
(function(O) {
  process.env.NODE_ENV === "production" ? O.exports = zt() : O.exports = qt();
})(hr);
const Wr = hr.exports.Fragment, le = hr.exports.jsx, yt = hr.exports.jsxs, Ht = ({
  style: O,
  icon: v,
  click: Q
}) => {
  const j = {
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20%",
    border: "none",
    boxShadow: "0 8px 32px 0 black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...O,
    cursor: "pointer"
  };
  return /* @__PURE__ */ le(Wr, {
    children: /* @__PURE__ */ le("button", {
      style: j,
      className: "glassGlassButton",
      onClick: () => {
        Q();
      },
      children: v
    })
  });
}, Gt = (O, v) => /* @__PURE__ */ le(Wr, {
  children: /* @__PURE__ */ le("input", {
    className: "GlassFormInput",
    onChange: (Q) => {
      O.changeFunction(Q);
    },
    placeholder: "...",
    type: "text",
    style: {
      width: "350px",
      height: "50px",
      backdropFilter: "blur(10px)",
      border: "none",
      backgroundColor: "rgba(255,255,255,0.02)",
      borderRadius: "10px",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      color: "white",
      marginTop: "15px",
      marginBottom: "15px",
      fontFamily: "sans-serif",
      fontSize: "20px",
      paddingLeft: "10px",
      outline: "none"
    }
  })
});
function Kt({
  setters: O,
  buttonText: v,
  click: Q = "Click"
}) {
  return /* @__PURE__ */ le(Wr, {
    children: /* @__PURE__ */ yt("form", {
      onSubmit: (j) => {
        j.preventDefault();
      },
      style: {
        minWidth: "400px",
        minHeight: "200px",
        backgroundColor: "linal-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(10px)",
        borderRadius: "2%",
        border: "none",
        boxShadow: "0 8px 32px 0 black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      action: "",
      children: [/* @__PURE__ */ yt("div", {
        style: {
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginTop: "15px"
        },
        children: [/* @__PURE__ */ le("h3", {
          style: {
            margin: "0px",
            marginBottom: "2px",
            fontSize: "28px"
          },
          children: "REACT.GLASS FORM"
        }), /* @__PURE__ */ le("div", {
          style: {
            backgroundColor: "white",
            width: "130px",
            height: "5px",
            marginBottom: "30px"
          }
        })]
      }), function() {
        let j = [];
        for (let Z = 0; Z < O.length; Z++)
          j.push(/* @__PURE__ */ le(Gt, {
            changeFunction: O[Z]
          }));
        return j;
      }(), /* @__PURE__ */ le("div", {
        style: {
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          marginTop: "20px",
          marginBottom: "20px"
        },
        children: /* @__PURE__ */ le("button", {
          onClick: () => {
            Q();
            for (let j = 0; j < O.length; j++)
              document.getElementsByClassName("GlassFormInput")[j].value = "";
          },
          style: {
            width: "120px",
            height: "40px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            cursor: "pointer"
          },
          type: "submit",
          children: /* @__PURE__ */ le("p", {
            style: {
              color: "#d2d2d2",
              margin: "0px",
              padding: "0px",
              fontSize: "18px",
              fontFamily: " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              letterSpacing: "1px",
              fontWeight: "bold"
            },
            children: v
          })
        })
      })]
    })
  });
}
export {
  Ht as GlassButton,
  Kt as GlassForm
};
