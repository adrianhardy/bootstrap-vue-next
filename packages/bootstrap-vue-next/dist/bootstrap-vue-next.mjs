var Sn = Object.defineProperty;
var Vn = (t, o, e) => o in t ? Sn(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var Me = (t, o, e) => (Vn(t, typeof o != "symbol" ? o + "" : o, e), e);
import { computed as _, toValue as Se, unref as n, ref as L, shallowRef as bt, watch as fe, getCurrentScope as Dl, onScopeDispose as jl, shallowReadonly as Tt, isRef as An, toRef as k, readonly as Ke, customRef as On, onMounted as Ue, nextTick as Ne, getCurrentInstance as Bt, reactive as fl, defineComponent as z, watchEffect as Pt, mergeModels as ge, useModel as _e, onBeforeUnmount as Ma, openBlock as m, createElementBlock as A, Fragment as pe, createElementVNode as J, renderSlot as T, createBlock as O, Teleport as _t, mergeProps as K, normalizeClass as D, normalizeStyle as Le, createTextVNode as ue, toDisplayString as Z, createCommentVNode as ee, render as ql, h as Ie, inject as Ve, provide as Qe, onActivated as In, Transition as Pn, withCtx as I, useAttrs as jt, resolveDynamicComponent as de, createVNode as be, useSlots as He, normalizeProps as Be, guardReactiveProps as Ce, withDirectives as ct, vShow as qt, renderList as ke, TransitionGroup as Gl, withModifiers as pt, vModelCheckbox as Nn, vModelRadio as En, vModelSelect as Fn, createSlots as Ra, onUnmounted as Ln, withKeys as Ut } from "vue";
const Gt = (t) => _(() => {
  const o = Se(t);
  return o ? `justify-content-${o}` : "";
}), ma = (t, o) => _(() => {
  const e = Se(t), l = Se(o);
  return e === !0 ? "true" : typeof e == "string" ? e : l === !1 ? "true" : e === !1 ? "false" : void 0;
});
class rt {
  constructor(o, e = {}) {
    Me(this, "cancelable", !0);
    Me(this, "componentId", null);
    Me(this, "_defaultPrevented", !1);
    Me(this, "eventType", "");
    Me(this, "nativeEvent", null);
    Me(this, "_preventDefault");
    Me(this, "relatedTarget", null);
    Me(this, "target", null);
    if (!o)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, rt.Defaults, e, { eventType: o }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = !0);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(o) {
    this._defaultPrevented = o;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(o) {
    this._preventDefault = o;
  }
  static get Defaults() {
    return {
      cancelable: !0,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class wt extends rt {
  constructor(e, l = {}) {
    super(e, l);
    Me(this, "trigger", null);
    Object.assign(this, rt.Defaults, l, { eventType: e });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null
    };
  }
}
class Wl extends rt {
  constructor(e, l) {
    super(e, l);
    Me(this, "from");
    Me(this, "to");
    Me(this, "direction");
    Object.assign(this, rt.Defaults, l, { eventType: e });
    const { from: a, direction: s, to: r } = l;
    this.from = a, this.to = r, this.direction = s;
  }
  static get Defaults() {
    return {
      ...super.Defaults
    };
  }
}
const zn = (t, o = {}) => {
  const e = (a = []) => {
    const { activeElement: s } = document;
    return s && !a.some((r) => r === s) ? s : null;
  }, l = (a) => a === e();
  try {
    t.focus(o);
  } catch (a) {
    console.error(a);
  }
  return l(t);
}, Ae = (t) => ((t == null ? void 0 : t()) ?? []).length === 0, Hn = (t) => {
  if (t.getAttribute("display") === "none")
    return !1;
  const o = t.getBoundingClientRect();
  return !!(o && o.height > 0 && o.width > 0);
}, $a = (t) => {
  const o = window.getComputedStyle(t), e = o.transitionDelay.split(",")[0] || "", l = o.transitionDuration.split(",")[0] || "", a = Number(e.slice(0, -1)) * 1e3, s = Number(l.slice(0, -1)) * 1e3;
  return a + s;
}, Da = typeof window < "u" && typeof document < "u" && typeof navigator < "u", Mn = (t) => (() => {
  let e = !1;
  if (Da)
    try {
      const l = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          e = !0;
        }
      };
      WINDOW.addEventListener("test", l, l), WINDOW.removeEventListener("test", l, l);
    } catch {
      e = !1;
    }
  return e;
})() ? typeof t == "object" ? t : { capture: !!t || !1 } : typeof t == "object" ? t.capture : t, Rn = (t, o, e, l) => {
  t && t.addEventListener && t.addEventListener(o, e, Mn(l));
}, Dn = (t, o, e, l) => {
  t && t.removeEventListener && t.removeEventListener(o, e, l);
}, vl = (t, o) => {
  (t ? Rn : Dn)(...o);
}, jn = ["TD", "TH", "TR"], qn = [
  "a",
  "a *",
  // Include content inside links
  "button",
  "button *",
  // Include content inside buttons
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(","), Xt = (t) => {
  if (!t || !t.target)
    return !1;
  const o = t.target;
  if ("disabled" in o && o.disabled || jn.indexOf(o.tagName) !== -1)
    return !1;
  if (o.closest(".dropdown-menu"))
    return !0;
  const e = o.tagName === "LABEL" ? o : o.closest("label");
  if (e) {
    const l = e.getAttribute("for"), a = l ? document.getElementById(l) : e.querySelector("input, select, textarea");
    if (a && !a.disabled)
      return !0;
  }
  return o.matches(qn);
}, Ul = ["top", "right", "bottom", "left"], pl = ["start", "end"], ml = /* @__PURE__ */ Ul.reduce((t, o) => t.concat(o, o + "-" + pl[0], o + "-" + pl[1]), []), je = Math.min, Pe = Math.max, na = Math.round, Kt = Math.floor, yt = (t) => ({
  x: t,
  y: t
}), Gn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wn = {
  start: "end",
  end: "start"
};
function xa(t, o, e) {
  return Pe(t, je(o, e));
}
function ft(t, o) {
  return typeof t == "function" ? t(o) : t;
}
function Ze(t) {
  return t.split("-")[0];
}
function lt(t) {
  return t.split("-")[1];
}
function Xl(t) {
  return t === "x" ? "y" : "x";
}
function ja(t) {
  return t === "y" ? "height" : "width";
}
function Nt(t) {
  return ["top", "bottom"].includes(Ze(t)) ? "y" : "x";
}
function qa(t) {
  return Xl(Nt(t));
}
function Kl(t, o, e) {
  e === void 0 && (e = !1);
  const l = lt(t), a = qa(t), s = ja(a);
  let r = a === "x" ? l === (e ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return o.reference[s] > o.floating[s] && (r = ra(r)), [r, ra(r)];
}
function Un(t) {
  const o = ra(t);
  return [sa(t), o, sa(o)];
}
function sa(t) {
  return t.replace(/start|end/g, (o) => Wn[o]);
}
function Xn(t, o, e) {
  const l = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? o ? a : l : o ? l : a;
    case "left":
    case "right":
      return o ? s : r;
    default:
      return [];
  }
}
function Kn(t, o, e, l) {
  const a = lt(t);
  let s = Xn(Ze(t), e === "start", l);
  return a && (s = s.map((r) => r + "-" + a), o && (s = s.concat(s.map(sa)))), s;
}
function ra(t) {
  return t.replace(/left|right|bottom|top/g, (o) => Gn[o]);
}
function Yn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ga(t) {
  return typeof t != "number" ? Yn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function At(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function bl(t, o, e) {
  let {
    reference: l,
    floating: a
  } = t;
  const s = Nt(o), r = qa(o), u = ja(r), i = Ze(o), d = s === "y", c = l.x + l.width / 2 - a.width / 2, f = l.y + l.height / 2 - a.height / 2, g = l[u] / 2 - a[u] / 2;
  let v;
  switch (i) {
    case "top":
      v = {
        x: c,
        y: l.y - a.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: l.y + l.height
      };
      break;
    case "right":
      v = {
        x: l.x + l.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: l.x - a.width,
        y: f
      };
      break;
    default:
      v = {
        x: l.x,
        y: l.y
      };
  }
  switch (lt(o)) {
    case "start":
      v[r] -= g * (e && d ? -1 : 1);
      break;
    case "end":
      v[r] += g * (e && d ? -1 : 1);
      break;
  }
  return v;
}
const Zn = async (t, o, e) => {
  const {
    placement: l = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: r
  } = e, u = s.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(o));
  let d = await r.getElementRects({
    reference: t,
    floating: o,
    strategy: a
  }), {
    x: c,
    y: f
  } = bl(d, l, i), g = l, v = {}, y = 0;
  for (let B = 0; B < u.length; B++) {
    const {
      name: C,
      fn: p
    } = u[B], {
      x: h,
      y: b,
      data: S,
      reset: w
    } = await p({
      x: c,
      y: f,
      initialPlacement: l,
      placement: g,
      strategy: a,
      middlewareData: v,
      rects: d,
      platform: r,
      elements: {
        reference: t,
        floating: o
      }
    });
    c = h ?? c, f = b ?? f, v = {
      ...v,
      [C]: {
        ...v[C],
        ...S
      }
    }, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (g = w.placement), w.rects && (d = w.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: o,
      strategy: a
    }) : w.rects), {
      x: c,
      y: f
    } = bl(d, g, i)), B = -1);
  }
  return {
    x: c,
    y: f,
    placement: g,
    strategy: a,
    middlewareData: v
  };
};
async function Ot(t, o) {
  var e;
  o === void 0 && (o = {});
  const {
    x: l,
    y: a,
    platform: s,
    rects: r,
    elements: u,
    strategy: i
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = ft(o, t), y = Ga(v), C = u[g ? f === "floating" ? "reference" : "floating" : f], p = At(await s.getClippingRect({
    element: (e = await (s.isElement == null ? void 0 : s.isElement(C))) == null || e ? C : C.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: i
  })), h = f === "floating" ? {
    x: l,
    y: a,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u.floating)), S = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = At(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: h,
    offsetParent: b,
    strategy: i
  }) : h);
  return {
    top: (p.top - w.top + y.top) / S.y,
    bottom: (w.bottom - p.bottom + y.bottom) / S.y,
    left: (p.left - w.left + y.left) / S.x,
    right: (w.right - p.right + y.right) / S.x
  };
}
const Jn = (t) => ({
  name: "arrow",
  options: t,
  async fn(o) {
    const {
      x: e,
      y: l,
      placement: a,
      rects: s,
      platform: r,
      elements: u,
      middlewareData: i
    } = o, {
      element: d,
      padding: c = 0
    } = ft(t, o) || {};
    if (d == null)
      return {};
    const f = Ga(c), g = {
      x: e,
      y: l
    }, v = qa(a), y = ja(v), B = await r.getDimensions(d), C = v === "y", p = C ? "top" : "left", h = C ? "bottom" : "right", b = C ? "clientHeight" : "clientWidth", S = s.reference[y] + s.reference[v] - g[v] - s.floating[y], w = g[v] - s.reference[v], x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(d));
    let V = x ? x[b] : 0;
    (!V || !await (r.isElement == null ? void 0 : r.isElement(x))) && (V = u.floating[b] || s.floating[y]);
    const W = S / 2 - w / 2, q = V / 2 - B[y] / 2 - 1, P = je(f[p], q), Y = je(f[h], q), te = P, ie = V - B[y] - Y, G = V / 2 - B[y] / 2 + W, F = xa(te, G, ie), $ = !i.arrow && lt(a) != null && G !== F && s.reference[y] / 2 - (G < te ? P : Y) - B[y] / 2 < 0, N = $ ? G < te ? G - te : G - ie : 0;
    return {
      [v]: g[v] + N,
      data: {
        [v]: F,
        centerOffset: G - F - N,
        ...$ && {
          alignmentOffset: N
        }
      },
      reset: $
    };
  }
});
function Qn(t, o, e) {
  return (t ? [...e.filter((a) => lt(a) === t), ...e.filter((a) => lt(a) !== t)] : e.filter((a) => Ze(a) === a)).filter((a) => t ? lt(a) === t || (o ? sa(a) !== a : !1) : !0);
}
const es = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(o) {
      var e, l, a;
      const {
        rects: s,
        middlewareData: r,
        placement: u,
        platform: i,
        elements: d
      } = o, {
        crossAxis: c = !1,
        alignment: f,
        allowedPlacements: g = ml,
        autoAlignment: v = !0,
        ...y
      } = ft(t, o), B = f !== void 0 || g === ml ? Qn(f || null, v, g) : g, C = await Ot(o, y), p = ((e = r.autoPlacement) == null ? void 0 : e.index) || 0, h = B[p];
      if (h == null)
        return {};
      const b = Kl(h, s, await (i.isRTL == null ? void 0 : i.isRTL(d.floating)));
      if (u !== h)
        return {
          reset: {
            placement: B[0]
          }
        };
      const S = [C[Ze(h)], C[b[0]], C[b[1]]], w = [...((l = r.autoPlacement) == null ? void 0 : l.overflows) || [], {
        placement: h,
        overflows: S
      }], x = B[p + 1];
      if (x)
        return {
          data: {
            index: p + 1,
            overflows: w
          },
          reset: {
            placement: x
          }
        };
      const V = w.map((P) => {
        const Y = lt(P.placement);
        return [P.placement, Y && c ? (
          // Check along the mainAxis and main crossAxis side.
          P.overflows.slice(0, 2).reduce((te, ie) => te + ie, 0)
        ) : (
          // Check only the mainAxis.
          P.overflows[0]
        ), P.overflows];
      }).sort((P, Y) => P[1] - Y[1]), q = ((a = V.filter((P) => P[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        lt(P[0]) ? 2 : 3
      ).every((Y) => Y <= 0))[0]) == null ? void 0 : a[0]) || V[0][0];
      return q !== u ? {
        data: {
          index: p + 1,
          overflows: w
        },
        reset: {
          placement: q
        }
      } : {};
    }
  };
}, ts = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(o) {
      var e, l;
      const {
        placement: a,
        middlewareData: s,
        rects: r,
        initialPlacement: u,
        platform: i,
        elements: d
      } = o, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: B = !0,
        ...C
      } = ft(t, o);
      if ((e = s.arrow) != null && e.alignmentOffset)
        return {};
      const p = Ze(a), h = Ze(u) === u, b = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), S = g || (h || !B ? [ra(u)] : Un(u));
      !g && y !== "none" && S.push(...Kn(u, B, y, b));
      const w = [u, ...S], x = await Ot(o, C), V = [];
      let W = ((l = s.flip) == null ? void 0 : l.overflows) || [];
      if (c && V.push(x[p]), f) {
        const te = Kl(a, r, b);
        V.push(x[te[0]], x[te[1]]);
      }
      if (W = [...W, {
        placement: a,
        overflows: V
      }], !V.every((te) => te <= 0)) {
        var q, P;
        const te = (((q = s.flip) == null ? void 0 : q.index) || 0) + 1, ie = w[te];
        if (ie)
          return {
            data: {
              index: te,
              overflows: W
            },
            reset: {
              placement: ie
            }
          };
        let G = (P = W.filter((F) => F.overflows[0] <= 0).sort((F, $) => F.overflows[1] - $.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!G)
          switch (v) {
            case "bestFit": {
              var Y;
              const F = (Y = W.map(($) => [$.placement, $.overflows.filter((N) => N > 0).reduce((N, R) => N + R, 0)]).sort(($, N) => $[1] - N[1])[0]) == null ? void 0 : Y[0];
              F && (G = F);
              break;
            }
            case "initialPlacement":
              G = u;
              break;
          }
        if (a !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function yl(t, o) {
  return {
    top: t.top - o.height,
    right: t.right - o.width,
    bottom: t.bottom - o.height,
    left: t.left - o.width
  };
}
function gl(t) {
  return Ul.some((o) => t[o] >= 0);
}
const as = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(o) {
      const {
        rects: e
      } = o, {
        strategy: l = "referenceHidden",
        ...a
      } = ft(t, o);
      switch (l) {
        case "referenceHidden": {
          const s = await Ot(o, {
            ...a,
            elementContext: "reference"
          }), r = yl(s, e.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: gl(r)
            }
          };
        }
        case "escaped": {
          const s = await Ot(o, {
            ...a,
            altBoundary: !0
          }), r = yl(s, e.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: gl(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function Yl(t) {
  const o = je(...t.map((s) => s.left)), e = je(...t.map((s) => s.top)), l = Pe(...t.map((s) => s.right)), a = Pe(...t.map((s) => s.bottom));
  return {
    x: o,
    y: e,
    width: l - o,
    height: a - e
  };
}
function ls(t) {
  const o = t.slice().sort((a, s) => a.y - s.y), e = [];
  let l = null;
  for (let a = 0; a < o.length; a++) {
    const s = o[a];
    !l || s.y - l.y > l.height / 2 ? e.push([s]) : e[e.length - 1].push(s), l = s;
  }
  return e.map((a) => At(Yl(a)));
}
const os = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(o) {
      const {
        placement: e,
        elements: l,
        rects: a,
        platform: s,
        strategy: r
      } = o, {
        padding: u = 2,
        x: i,
        y: d
      } = ft(t, o), c = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(l.reference)) || []), f = ls(c), g = At(Yl(c)), v = Ga(u);
      function y() {
        if (f.length === 2 && f[0].left > f[1].right && i != null && d != null)
          return f.find((C) => i > C.left - v.left && i < C.right + v.right && d > C.top - v.top && d < C.bottom + v.bottom) || g;
        if (f.length >= 2) {
          if (Nt(e) === "y") {
            const P = f[0], Y = f[f.length - 1], te = Ze(e) === "top", ie = P.top, G = Y.bottom, F = te ? P.left : Y.left, $ = te ? P.right : Y.right, N = $ - F, R = G - ie;
            return {
              top: ie,
              bottom: G,
              left: F,
              right: $,
              width: N,
              height: R,
              x: F,
              y: ie
            };
          }
          const C = Ze(e) === "left", p = Pe(...f.map((P) => P.right)), h = je(...f.map((P) => P.left)), b = f.filter((P) => C ? P.left === h : P.right === p), S = b[0].top, w = b[b.length - 1].bottom, x = h, V = p, W = V - x, q = w - S;
          return {
            top: S,
            bottom: w,
            left: x,
            right: V,
            width: W,
            height: q,
            x,
            y: S
          };
        }
        return g;
      }
      const B = await s.getElementRects({
        reference: {
          getBoundingClientRect: y
        },
        floating: l.floating,
        strategy: r
      });
      return a.reference.x !== B.reference.x || a.reference.y !== B.reference.y || a.reference.width !== B.reference.width || a.reference.height !== B.reference.height ? {
        reset: {
          rects: B
        }
      } : {};
    }
  };
};
async function ns(t, o) {
  const {
    placement: e,
    platform: l,
    elements: a
  } = t, s = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), r = Ze(e), u = lt(e), i = Nt(e) === "y", d = ["left", "top"].includes(r) ? -1 : 1, c = s && i ? -1 : 1, f = ft(o, t);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return u && typeof y == "number" && (v = u === "end" ? y * -1 : y), i ? {
    x: v * c,
    y: g * d
  } : {
    x: g * d,
    y: v * c
  };
}
const Zl = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(o) {
      var e, l;
      const {
        x: a,
        y: s,
        placement: r,
        middlewareData: u
      } = o, i = await ns(o, t);
      return r === ((e = u.offset) == null ? void 0 : e.placement) && (l = u.arrow) != null && l.alignmentOffset ? {} : {
        x: a + i.x,
        y: s + i.y,
        data: {
          ...i,
          placement: r
        }
      };
    }
  };
}, ss = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: l,
        placement: a
      } = o, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: u = {
          fn: (C) => {
            let {
              x: p,
              y: h
            } = C;
            return {
              x: p,
              y: h
            };
          }
        },
        ...i
      } = ft(t, o), d = {
        x: e,
        y: l
      }, c = await Ot(o, i), f = Nt(Ze(a)), g = Xl(f);
      let v = d[g], y = d[f];
      if (s) {
        const C = g === "y" ? "top" : "left", p = g === "y" ? "bottom" : "right", h = v + c[C], b = v - c[p];
        v = xa(h, v, b);
      }
      if (r) {
        const C = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", h = y + c[C], b = y - c[p];
        y = xa(h, y, b);
      }
      const B = u.fn({
        ...o,
        [g]: v,
        [f]: y
      });
      return {
        ...B,
        data: {
          x: B.x - e,
          y: B.y - l
        }
      };
    }
  };
}, rs = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(o) {
      const {
        placement: e,
        rects: l,
        platform: a,
        elements: s
      } = o, {
        apply: r = () => {
        },
        ...u
      } = ft(t, o), i = await Ot(o, u), d = Ze(e), c = lt(e), f = Nt(e) === "y", {
        width: g,
        height: v
      } = l.floating;
      let y, B;
      d === "top" || d === "bottom" ? (y = d, B = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (B = d, y = c === "end" ? "top" : "bottom");
      const C = v - i.top - i.bottom, p = g - i.left - i.right, h = je(v - i[y], C), b = je(g - i[B], p), S = !o.middlewareData.shift;
      let w = h, x = b;
      if (f ? x = c || S ? je(b, p) : p : w = c || S ? je(h, C) : C, S && !c) {
        const W = Pe(i.left, 0), q = Pe(i.right, 0), P = Pe(i.top, 0), Y = Pe(i.bottom, 0);
        f ? x = g - 2 * (W !== 0 || q !== 0 ? W + q : Pe(i.left, i.right)) : w = v - 2 * (P !== 0 || Y !== 0 ? P + Y : Pe(i.top, i.bottom));
      }
      await r({
        ...o,
        availableWidth: x,
        availableHeight: w
      });
      const V = await a.getDimensions(s.floating);
      return g !== V.width || v !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function it(t) {
  return Wa(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ge(t) {
  var o;
  return (t == null || (o = t.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function vt(t) {
  var o;
  return (o = (Wa(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : o.documentElement;
}
function Wa(t) {
  return t instanceof Node || t instanceof Ge(t).Node;
}
function ut(t) {
  return t instanceof Element || t instanceof Ge(t).Element;
}
function nt(t) {
  return t instanceof HTMLElement || t instanceof Ge(t).HTMLElement;
}
function hl(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ge(t).ShadowRoot;
}
function Wt(t) {
  const {
    overflow: o,
    overflowX: e,
    overflowY: l,
    display: a
  } = Je(t);
  return /auto|scroll|overlay|hidden|clip/.test(o + l + e) && !["inline", "contents"].includes(a);
}
function is(t) {
  return ["table", "td", "th"].includes(it(t));
}
function Ua(t) {
  const o = Xa(), e = Je(t);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !o && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !o && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((l) => (e.willChange || "").includes(l)) || ["paint", "layout", "strict", "content"].some((l) => (e.contain || "").includes(l));
}
function us(t) {
  let o = It(t);
  for (; nt(o) && !ba(o); ) {
    if (Ua(o))
      return o;
    o = It(o);
  }
  return null;
}
function Xa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ba(t) {
  return ["html", "body", "#document"].includes(it(t));
}
function Je(t) {
  return Ge(t).getComputedStyle(t);
}
function ya(t) {
  return ut(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function It(t) {
  if (it(t) === "html")
    return t;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    hl(t) && t.host || // Fallback.
    vt(t)
  );
  return hl(o) ? o.host : o;
}
function Jl(t) {
  const o = It(t);
  return ba(o) ? t.ownerDocument ? t.ownerDocument.body : t.body : nt(o) && Wt(o) ? o : Jl(o);
}
function Mt(t, o, e) {
  var l;
  o === void 0 && (o = []), e === void 0 && (e = !0);
  const a = Jl(t), s = a === ((l = t.ownerDocument) == null ? void 0 : l.body), r = Ge(a);
  return s ? o.concat(r, r.visualViewport || [], Wt(a) ? a : [], r.frameElement && e ? Mt(r.frameElement) : []) : o.concat(a, Mt(a, [], e));
}
function Ql(t) {
  const o = Je(t);
  let e = parseFloat(o.width) || 0, l = parseFloat(o.height) || 0;
  const a = nt(t), s = a ? t.offsetWidth : e, r = a ? t.offsetHeight : l, u = na(e) !== s || na(l) !== r;
  return u && (e = s, l = r), {
    width: e,
    height: l,
    $: u
  };
}
function Ka(t) {
  return ut(t) ? t : t.contextElement;
}
function Vt(t) {
  const o = Ka(t);
  if (!nt(o))
    return yt(1);
  const e = o.getBoundingClientRect(), {
    width: l,
    height: a,
    $: s
  } = Ql(o);
  let r = (s ? na(e.width) : e.width) / l, u = (s ? na(e.height) : e.height) / a;
  return (!r || !Number.isFinite(r)) && (r = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: r,
    y: u
  };
}
const ds = /* @__PURE__ */ yt(0);
function eo(t) {
  const o = Ge(t);
  return !Xa() || !o.visualViewport ? ds : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function cs(t, o, e) {
  return o === void 0 && (o = !1), !e || o && e !== Ge(t) ? !1 : o;
}
function ht(t, o, e, l) {
  o === void 0 && (o = !1), e === void 0 && (e = !1);
  const a = t.getBoundingClientRect(), s = Ka(t);
  let r = yt(1);
  o && (l ? ut(l) && (r = Vt(l)) : r = Vt(t));
  const u = cs(s, e, l) ? eo(s) : yt(0);
  let i = (a.left + u.x) / r.x, d = (a.top + u.y) / r.y, c = a.width / r.x, f = a.height / r.y;
  if (s) {
    const g = Ge(s), v = l && ut(l) ? Ge(l) : l;
    let y = g, B = y.frameElement;
    for (; B && l && v !== y; ) {
      const C = Vt(B), p = B.getBoundingClientRect(), h = Je(B), b = p.left + (B.clientLeft + parseFloat(h.paddingLeft)) * C.x, S = p.top + (B.clientTop + parseFloat(h.paddingTop)) * C.y;
      i *= C.x, d *= C.y, c *= C.x, f *= C.y, i += b, d += S, y = Ge(B), B = y.frameElement;
    }
  }
  return At({
    width: c,
    height: f,
    x: i,
    y: d
  });
}
const fs = [":popover-open", ":modal"];
function to(t) {
  return fs.some((o) => {
    try {
      return t.matches(o);
    } catch {
      return !1;
    }
  });
}
function vs(t) {
  let {
    elements: o,
    rect: e,
    offsetParent: l,
    strategy: a
  } = t;
  const s = a === "fixed", r = vt(l), u = o ? to(o.floating) : !1;
  if (l === r || u && s)
    return e;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = yt(1);
  const c = yt(0), f = nt(l);
  if ((f || !f && !s) && ((it(l) !== "body" || Wt(r)) && (i = ya(l)), nt(l))) {
    const g = ht(l);
    d = Vt(l), c.x = g.x + l.clientLeft, c.y = g.y + l.clientTop;
  }
  return {
    width: e.width * d.x,
    height: e.height * d.y,
    x: e.x * d.x - i.scrollLeft * d.x + c.x,
    y: e.y * d.y - i.scrollTop * d.y + c.y
  };
}
function ps(t) {
  return Array.from(t.getClientRects());
}
function ao(t) {
  return ht(vt(t)).left + ya(t).scrollLeft;
}
function ms(t) {
  const o = vt(t), e = ya(t), l = t.ownerDocument.body, a = Pe(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), s = Pe(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
  let r = -e.scrollLeft + ao(t);
  const u = -e.scrollTop;
  return Je(l).direction === "rtl" && (r += Pe(o.clientWidth, l.clientWidth) - a), {
    width: a,
    height: s,
    x: r,
    y: u
  };
}
function bs(t, o) {
  const e = Ge(t), l = vt(t), a = e.visualViewport;
  let s = l.clientWidth, r = l.clientHeight, u = 0, i = 0;
  if (a) {
    s = a.width, r = a.height;
    const d = Xa();
    (!d || d && o === "fixed") && (u = a.offsetLeft, i = a.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: u,
    y: i
  };
}
function ys(t, o) {
  const e = ht(t, !0, o === "fixed"), l = e.top + t.clientTop, a = e.left + t.clientLeft, s = nt(t) ? Vt(t) : yt(1), r = t.clientWidth * s.x, u = t.clientHeight * s.y, i = a * s.x, d = l * s.y;
  return {
    width: r,
    height: u,
    x: i,
    y: d
  };
}
function Bl(t, o, e) {
  let l;
  if (o === "viewport")
    l = bs(t, e);
  else if (o === "document")
    l = ms(vt(t));
  else if (ut(o))
    l = ys(o, e);
  else {
    const a = eo(t);
    l = {
      ...o,
      x: o.x - a.x,
      y: o.y - a.y
    };
  }
  return At(l);
}
function lo(t, o) {
  const e = It(t);
  return e === o || !ut(e) || ba(e) ? !1 : Je(e).position === "fixed" || lo(e, o);
}
function gs(t, o) {
  const e = o.get(t);
  if (e)
    return e;
  let l = Mt(t, [], !1).filter((u) => ut(u) && it(u) !== "body"), a = null;
  const s = Je(t).position === "fixed";
  let r = s ? It(t) : t;
  for (; ut(r) && !ba(r); ) {
    const u = Je(r), i = Ua(r);
    !i && u.position === "fixed" && (a = null), (s ? !i && !a : !i && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Wt(r) && !i && lo(t, r)) ? l = l.filter((c) => c !== r) : a = u, r = It(r);
  }
  return o.set(t, l), l;
}
function hs(t) {
  let {
    element: o,
    boundary: e,
    rootBoundary: l,
    strategy: a
  } = t;
  const r = [...e === "clippingAncestors" ? gs(o, this._c) : [].concat(e), l], u = r[0], i = r.reduce((d, c) => {
    const f = Bl(o, c, a);
    return d.top = Pe(f.top, d.top), d.right = je(f.right, d.right), d.bottom = je(f.bottom, d.bottom), d.left = Pe(f.left, d.left), d;
  }, Bl(o, u, a));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Bs(t) {
  const {
    width: o,
    height: e
  } = Ql(t);
  return {
    width: o,
    height: e
  };
}
function _s(t, o, e) {
  const l = nt(o), a = vt(o), s = e === "fixed", r = ht(t, !0, s, o);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = yt(0);
  if (l || !l && !s)
    if ((it(o) !== "body" || Wt(a)) && (u = ya(o)), l) {
      const f = ht(o, !0, s, o);
      i.x = f.x + o.clientLeft, i.y = f.y + o.clientTop;
    } else
      a && (i.x = ao(a));
  const d = r.left + u.scrollLeft - i.x, c = r.top + u.scrollTop - i.y;
  return {
    x: d,
    y: c,
    width: r.width,
    height: r.height
  };
}
function _l(t, o) {
  return !nt(t) || Je(t).position === "fixed" ? null : o ? o(t) : t.offsetParent;
}
function oo(t, o) {
  const e = Ge(t);
  if (!nt(t) || to(t))
    return e;
  let l = _l(t, o);
  for (; l && is(l) && Je(l).position === "static"; )
    l = _l(l, o);
  return l && (it(l) === "html" || it(l) === "body" && Je(l).position === "static" && !Ua(l)) ? e : l || us(t) || e;
}
const ws = async function(t) {
  const o = this.getOffsetParent || oo, e = this.getDimensions;
  return {
    reference: _s(t.reference, await o(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await e(t.floating)
    }
  };
};
function Cs(t) {
  return Je(t).direction === "rtl";
}
const ks = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vs,
  getDocumentElement: vt,
  getClippingRect: hs,
  getOffsetParent: oo,
  getElementRects: ws,
  getClientRects: ps,
  getDimensions: Bs,
  getScale: Vt,
  isElement: ut,
  isRTL: Cs
};
function Ts(t, o) {
  let e = null, l;
  const a = vt(t);
  function s() {
    var u;
    clearTimeout(l), (u = e) == null || u.disconnect(), e = null;
  }
  function r(u, i) {
    u === void 0 && (u = !1), i === void 0 && (i = 1), s();
    const {
      left: d,
      top: c,
      width: f,
      height: g
    } = t.getBoundingClientRect();
    if (u || o(), !f || !g)
      return;
    const v = Kt(c), y = Kt(a.clientWidth - (d + f)), B = Kt(a.clientHeight - (c + g)), C = Kt(d), h = {
      rootMargin: -v + "px " + -y + "px " + -B + "px " + -C + "px",
      threshold: Pe(0, je(1, i)) || 1
    };
    let b = !0;
    function S(w) {
      const x = w[0].intersectionRatio;
      if (x !== i) {
        if (!b)
          return r();
        x ? r(!1, x) : l = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      e = new IntersectionObserver(S, {
        ...h,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(S, h);
    }
    e.observe(t);
  }
  return r(!0), s;
}
function no(t, o, e, l) {
  l === void 0 && (l = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = l, d = Ka(t), c = a || s ? [...d ? Mt(d) : [], ...Mt(o)] : [];
  c.forEach((p) => {
    a && p.addEventListener("scroll", e, {
      passive: !0
    }), s && p.addEventListener("resize", e);
  });
  const f = d && u ? Ts(d, e) : null;
  let g = -1, v = null;
  r && (v = new ResizeObserver((p) => {
    let [h] = p;
    h && h.target === d && v && (v.unobserve(o), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(o);
    })), e();
  }), d && !i && v.observe(d), v.observe(o));
  let y, B = i ? ht(t) : null;
  i && C();
  function C() {
    const p = ht(t);
    B && (p.x !== B.x || p.y !== B.y || p.width !== B.width || p.height !== B.height) && e(), B = p, y = requestAnimationFrame(C);
  }
  return e(), () => {
    var p;
    c.forEach((h) => {
      a && h.removeEventListener("scroll", e), s && h.removeEventListener("resize", e);
    }), f == null || f(), (p = v) == null || p.disconnect(), v = null, i && cancelAnimationFrame(y);
  };
}
const $s = es, so = ss, ro = ts, io = rs, xs = as, Ss = Jn, Vs = os, As = (t, o, e) => {
  const l = /* @__PURE__ */ new Map(), a = {
    platform: ks,
    ...e
  }, s = {
    ...a.platform,
    _c: l
  };
  return Zn(t, o, {
    ...a,
    platform: s
  });
};
function Os(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function Sa(t) {
  if (Os(t)) {
    const o = t.$el;
    return Wa(o) && it(o) === "#comment" ? null : o;
  }
  return t;
}
function Is(t) {
  return {
    name: "arrow",
    options: t,
    fn(o) {
      const e = Sa(n(t.element));
      return e == null ? {} : Ss({
        element: e,
        padding: t.padding
      }).fn(o);
    }
  };
}
function uo(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wl(t, o) {
  const e = uo(t);
  return Math.round(o * e) / e;
}
function co(t, o, e) {
  e === void 0 && (e = {});
  const l = e.whileElementsMounted, a = _(() => {
    var V;
    return (V = n(e.open)) != null ? V : !0;
  }), s = _(() => n(e.middleware)), r = _(() => {
    var V;
    return (V = n(e.placement)) != null ? V : "bottom";
  }), u = _(() => {
    var V;
    return (V = n(e.strategy)) != null ? V : "absolute";
  }), i = _(() => {
    var V;
    return (V = n(e.transform)) != null ? V : !0;
  }), d = _(() => Sa(t.value)), c = _(() => Sa(o.value)), f = L(0), g = L(0), v = L(u.value), y = L(r.value), B = bt({}), C = L(!1), p = _(() => {
    const V = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return V;
    const W = wl(c.value, f.value), q = wl(c.value, g.value);
    return i.value ? {
      ...V,
      transform: "translate(" + W + "px, " + q + "px)",
      ...uo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: W + "px",
      top: q + "px"
    };
  });
  let h;
  function b() {
    d.value == null || c.value == null || As(d.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: u.value
    }).then((V) => {
      f.value = V.x, g.value = V.y, v.value = V.strategy, y.value = V.placement, B.value = V.middlewareData, C.value = !0;
    });
  }
  function S() {
    typeof h == "function" && (h(), h = void 0);
  }
  function w() {
    if (S(), l === void 0) {
      b();
      return;
    }
    if (d.value != null && c.value != null) {
      h = l(d.value, c.value, b);
      return;
    }
  }
  function x() {
    a.value || (C.value = !1);
  }
  return fe([s, r, u], b, {
    flush: "sync"
  }), fe([d, c], w, {
    flush: "sync"
  }), fe(a, x, {
    flush: "sync"
  }), Dl() && jl(S), {
    x: Tt(f),
    y: Tt(g),
    strategy: Tt(v),
    placement: Tt(y),
    middlewareData: Tt(B),
    isPositioned: Tt(C),
    floatingStyles: p,
    update: b
  };
}
const Ps = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), Ns = /^aria-[\w-]*$/i, Es = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Fs = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ls = (t, o) => {
  const e = t.nodeName.toLowerCase();
  return o.includes(e) ? Ps.has(e) ? !!(Es.test(t.nodeValue || "") || Fs.test(t.nodeValue || "")) : !0 : o.filter((l) => l instanceof RegExp).some((l) => l.test(e));
}, $t = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Ns],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, xt = (t, o, e) => {
  if (!t.length)
    return t;
  if (e && typeof e == "function")
    return e(t);
  const a = new window.DOMParser().parseFromString(t, "text/html"), s = a.body.querySelectorAll("*");
  for (const r of s) {
    const u = r.nodeName.toLowerCase();
    if (!Object.keys(o).includes(u)) {
      r.remove();
      continue;
    }
    const i = r.attributes, d = [...o["*"] || [], ...o[u] || []];
    for (const c of i)
      Ls(c, d) || r.removeAttribute(c.nodeName);
  }
  return a.body.innerHTML;
};
function dt(t) {
  return Dl() ? (jl(t), !0) : !1;
}
function zs(t, o) {
  if (typeof Symbol < "u") {
    const e = { ...t };
    return Object.defineProperty(e, Symbol.iterator, {
      enumerable: !1,
      value() {
        let l = 0;
        return {
          next: () => ({
            value: o[l++],
            done: l > o.length
          })
        };
      }
    }), e;
  } else
    return Object.assign([...o], t);
}
function ze(t) {
  return typeof t == "function" ? t() : n(t);
}
const ia = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fo = (t) => t != null, Hs = Object.prototype.toString, Ms = (t) => Hs.call(t) === "[object Object]", Ye = () => {
}, Va = /* @__PURE__ */ Rs();
function Rs() {
  var t, o;
  return ia && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vo(t, o) {
  function e(...l) {
    return new Promise((a, s) => {
      Promise.resolve(t(() => o.apply(this, l), { fn: o, thisArg: this, args: l })).then(a).catch(s);
    });
  }
  return e;
}
const po = (t) => t();
function Ds(t, o = {}) {
  let e, l, a = Ye;
  const s = (u) => {
    clearTimeout(u), a(), a = Ye;
  };
  return (u) => {
    const i = ze(t), d = ze(o.maxWait);
    return e && s(e), i <= 0 || d !== void 0 && d <= 0 ? (l && (s(l), l = null), Promise.resolve(u())) : new Promise((c, f) => {
      a = o.rejectOnCancel ? f : c, d && !l && (l = setTimeout(() => {
        e && s(e), l = null, c(u());
      }, d)), e = setTimeout(() => {
        l && s(l), l = null, c(u());
      }, i);
    });
  };
}
function js(t = po) {
  const o = L(!0);
  function e() {
    o.value = !1;
  }
  function l() {
    o.value = !0;
  }
  const a = (...s) => {
    o.value && t(...s);
  };
  return { isActive: Ke(o), pause: e, resume: l, eventFilter: a };
}
function qs(t) {
  const o = /* @__PURE__ */ Object.create(null);
  return (e) => o[e] || (o[e] = t(e));
}
const Gs = /-(\w)/g, Ws = qs((t) => t.replace(Gs, (o, e) => e ? e.toUpperCase() : ""));
function Us(t) {
  return t || Bt();
}
function mo(...t) {
  if (t.length !== 1)
    return k(...t);
  const o = t[0];
  return typeof o == "function" ? Ke(On(() => ({ get: o, set: Ye }))) : L(o);
}
function Xs(t, o = 200, e = {}) {
  return vo(
    Ds(o, e),
    t
  );
}
function Ks(t, o, e = {}) {
  const {
    eventFilter: l = po,
    ...a
  } = e;
  return fe(
    t,
    vo(
      l,
      o
    ),
    a
  );
}
function Aa(t, o, e = {}) {
  const {
    eventFilter: l,
    ...a
  } = e, { eventFilter: s, pause: r, resume: u, isActive: i } = js(l);
  return { stop: Ks(
    t,
    o,
    {
      ...a,
      eventFilter: s
    }
  ), pause: r, resume: u, isActive: i };
}
function Oa(t, o, ...[e]) {
  const {
    flush: l = "sync",
    deep: a = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: u = {}
  } = e || {}, i = [], d = "ltr" in u && u.ltr || ((g) => g), c = "rtl" in u && u.rtl || ((g) => g);
  return (r === "both" || r === "ltr") && i.push(Aa(
    t,
    (g) => {
      i.forEach((v) => v.pause()), o.value = d(g), i.forEach((v) => v.resume());
    },
    { flush: l, deep: a, immediate: s }
  )), (r === "both" || r === "rtl") && i.push(Aa(
    o,
    (g) => {
      i.forEach((v) => v.pause()), t.value = c(g), i.forEach((v) => v.resume());
    },
    { flush: l, deep: a, immediate: s }
  )), () => {
    i.forEach((g) => g.stop());
  };
}
function bo(t, o = !0, e) {
  Us() ? Ue(t, e) : o ? t() : Ne(t);
}
function yo(t, o = 1e3, e = {}) {
  const {
    immediate: l = !0,
    immediateCallback: a = !1
  } = e;
  let s = null;
  const r = L(!1);
  function u() {
    s && (clearInterval(s), s = null);
  }
  function i() {
    r.value = !1, u();
  }
  function d() {
    const c = ze(o);
    c <= 0 || (r.value = !0, a && t(), u(), s = setInterval(t, c));
  }
  if (l && ia && d(), An(o) || typeof o == "function") {
    const c = fe(o, () => {
      r.value && ia && d();
    });
    dt(c);
  }
  return dt(i), {
    isActive: r,
    pause: i,
    resume: d
  };
}
function he(t, o = {}) {
  const {
    method: e = "parseFloat",
    radix: l,
    nanToZero: a
  } = o;
  return _(() => {
    let s = ze(t);
    return typeof s == "string" && (s = Number[e](s, l)), a && Number.isNaN(s) && (s = 0), s;
  });
}
function Rt(t = {}) {
  const {
    inheritAttrs: o = !0
  } = t, e = bt(), l = /* @__PURE__ */ z({
    setup(s, { slots: r }) {
      return () => {
        e.value = r.default;
      };
    }
  }), a = /* @__PURE__ */ z({
    inheritAttrs: o,
    setup(s, { attrs: r, slots: u }) {
      return () => {
        var i;
        if (!e.value && process.env.NODE_ENV !== "production")
          throw new Error("[VueUse] Failed to find the definition of reusable template");
        const d = (i = e.value) == null ? void 0 : i.call(e, { ...Ys(r), $slots: u });
        return o && (d == null ? void 0 : d.length) === 1 ? d[0] : d;
      };
    }
  });
  return zs(
    { define: l, reuse: a },
    [l, a]
  );
}
function Ys(t) {
  const o = {};
  for (const e in t)
    o[Ws(e)] = t[e];
  return o;
}
function qe(t) {
  var o;
  const e = ze(t);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
const We = ia ? window : void 0;
function Te(...t) {
  let o, e, l, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([e, l, a] = t, o = We) : [o, e, l, a] = t, !o)
    return Ye;
  Array.isArray(e) || (e = [e]), Array.isArray(l) || (l = [l]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, u = (c, f, g, v) => (c.addEventListener(f, g, v), () => c.removeEventListener(f, g, v)), i = fe(
    () => [qe(o), ze(a)],
    ([c, f]) => {
      if (r(), !c)
        return;
      const g = Ms(f) ? { ...f } : f;
      s.push(
        ...e.flatMap((v) => l.map((y) => u(c, v, y, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return dt(d), d;
}
let Cl = !1;
function go(t, o, e = {}) {
  const { window: l = We, ignore: a = [], capture: s = !0, detectIframe: r = !1 } = e;
  if (!l)
    return Ye;
  Va && !Cl && (Cl = !0, Array.from(l.document.body.children).forEach((g) => g.addEventListener("click", Ye)), l.document.documentElement.addEventListener("click", Ye));
  let u = !0;
  const i = (g) => a.some((v) => {
    if (typeof v == "string")
      return Array.from(l.document.querySelectorAll(v)).some((y) => y === g.target || g.composedPath().includes(y));
    {
      const y = qe(v);
      return y && (g.target === y || g.composedPath().includes(y));
    }
  }), c = [
    Te(l, "click", (g) => {
      const v = qe(t);
      if (!(!v || v === g.target || g.composedPath().includes(v))) {
        if (g.detail === 0 && (u = !i(g)), !u) {
          u = !0;
          return;
        }
        o(g);
      }
    }, { passive: !0, capture: s }),
    Te(l, "pointerdown", (g) => {
      const v = qe(t);
      u = !i(g) && !!(v && !g.composedPath().includes(v));
    }, { passive: !0 }),
    r && Te(l, "blur", (g) => {
      setTimeout(() => {
        var v;
        const y = qe(t);
        ((v = l.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(y != null && y.contains(l.document.activeElement)) && o(g);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((g) => g());
}
function Zs(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (o) => o.key === t : Array.isArray(t) ? (o) => t.includes(o.key) : () => !0;
}
function De(...t) {
  let o, e, l = {};
  t.length === 3 ? (o = t[0], e = t[1], l = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (o = !0, e = t[0], l = t[1]) : (o = t[0], e = t[1]) : (o = !0, e = t[0]);
  const {
    target: a = We,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: u = !1
  } = l, i = Zs(o);
  return Te(a, s, (c) => {
    c.repeat && ze(u) || i(c) && e(c);
  }, r);
}
function Js() {
  const t = L(!1), o = Bt();
  return o && Ue(() => {
    t.value = !0;
  }, o), t;
}
function Ya(t) {
  const o = Js();
  return _(() => (o.value, !!t()));
}
function Qs(t, o = {}) {
  const { window: e = We } = o, l = Ya(() => e && "matchMedia" in e && typeof e.matchMedia == "function");
  let a;
  const s = L(!1), r = (d) => {
    s.value = d.matches;
  }, u = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", r) : a.removeListener(r));
  }, i = Pt(() => {
    l.value && (u(), a = e.matchMedia(ze(t)), "addEventListener" in a ? a.addEventListener("change", r) : a.addListener(r), s.value = a.matches);
  });
  return dt(() => {
    i(), u(), a = void 0;
  }), s;
}
const Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zt = "__vueuse_ssr_handlers__", er = /* @__PURE__ */ tr();
function tr() {
  return Zt in Yt || (Yt[Zt] = Yt[Zt] || {}), Yt[Zt];
}
function Za(t, o) {
  return er[t] || o;
}
function ar(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const lr = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, kl = "vueuse-storage";
function or(t, o, e, l = {}) {
  var a;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: u = !0,
    writeDefaults: i = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: f = We,
    eventFilter: g,
    onError: v = (P) => {
      console.error(P);
    },
    initOnMounted: y
  } = l, B = (c ? bt : L)(typeof o == "function" ? o() : o);
  if (!e)
    try {
      e = Za("getDefaultStorage", () => {
        var P;
        return (P = We) == null ? void 0 : P.localStorage;
      })();
    } catch (P) {
      v(P);
    }
  if (!e)
    return B;
  const C = ze(o), p = ar(C), h = (a = l.serializer) != null ? a : lr[p], { pause: b, resume: S } = Aa(
    B,
    () => x(B.value),
    { flush: s, deep: r, eventFilter: g }
  );
  f && u && bo(() => {
    Te(f, "storage", W), Te(f, kl, q), y && W();
  }), y || W();
  function w(P, Y) {
    f && f.dispatchEvent(new CustomEvent(kl, {
      detail: {
        key: t,
        oldValue: P,
        newValue: Y,
        storageArea: e
      }
    }));
  }
  function x(P) {
    try {
      const Y = e.getItem(t);
      if (P == null)
        w(Y, null), e.removeItem(t);
      else {
        const te = h.write(P);
        Y !== te && (e.setItem(t, te), w(Y, te));
      }
    } catch (Y) {
      v(Y);
    }
  }
  function V(P) {
    const Y = P ? P.newValue : e.getItem(t);
    if (Y == null)
      return i && C != null && e.setItem(t, h.write(C)), C;
    if (!P && d) {
      const te = h.read(Y);
      return typeof d == "function" ? d(te, C) : p === "object" && !Array.isArray(te) ? { ...C, ...te } : te;
    } else
      return typeof Y != "string" ? Y : h.read(Y);
  }
  function W(P) {
    if (!(P && P.storageArea !== e)) {
      if (P && P.key == null) {
        B.value = C;
        return;
      }
      if (!(P && P.key !== t)) {
        b();
        try {
          (P == null ? void 0 : P.newValue) !== h.write(B.value) && (B.value = V(P));
        } catch (Y) {
          v(Y);
        } finally {
          P ? Ne(S) : S();
        }
      }
    }
  }
  function q(P) {
    W(P.detail);
  }
  return B;
}
function nr(t) {
  return Qs("(prefers-color-scheme: dark)", t);
}
function sr(t = {}) {
  const {
    selector: o = "html",
    attribute: e = "class",
    initialValue: l = "auto",
    window: a = We,
    storage: s,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: u = !0,
    storageRef: i,
    emitAuto: d,
    disableTransition: c = !0
  } = t, f = {
    auto: "",
    light: "light",
    dark: "dark",
    ...t.modes || {}
  }, g = nr({ window: a }), v = _(() => g.value ? "dark" : "light"), y = i || (r == null ? mo(l) : or(r, l, s, { window: a, listenToStorageChanges: u })), B = _(() => y.value === "auto" ? v.value : y.value), C = Za(
    "updateHTMLAttrs",
    (S, w, x) => {
      const V = typeof S == "string" ? a == null ? void 0 : a.document.querySelector(S) : qe(S);
      if (!V)
        return;
      let W;
      if (c && (W = a.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), a.document.head.appendChild(W)), w === "class") {
        const q = x.split(/\s/g);
        Object.values(f).flatMap((P) => (P || "").split(/\s/g)).filter(Boolean).forEach((P) => {
          q.includes(P) ? V.classList.add(P) : V.classList.remove(P);
        });
      } else
        V.setAttribute(w, x);
      c && (a.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function p(S) {
    var w;
    C(o, e, (w = f[S]) != null ? w : S);
  }
  function h(S) {
    t.onChanged ? t.onChanged(S, p) : p(S);
  }
  fe(B, h, { flush: "post", immediate: !0 }), bo(() => h(B.value));
  const b = _({
    get() {
      return d ? y.value : B.value;
    },
    set(S) {
      y.value = S;
    }
  });
  try {
    return Object.assign(b, { store: y, system: v, state: B });
  } catch {
    return b;
  }
}
function rr(t, o, e = {}) {
  const { window: l = We, ...a } = e;
  let s;
  const r = Ya(() => l && "MutationObserver" in l), u = () => {
    s && (s.disconnect(), s = void 0);
  }, i = _(() => {
    const g = ze(t), v = (Array.isArray(g) ? g : [g]).map(qe).filter(fo);
    return new Set(v);
  }), d = fe(
    () => i.value,
    (g) => {
      u(), r.value && l && g.size && (s = new MutationObserver(o), g.forEach((v) => s.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), f = () => {
    u(), d();
  };
  return dt(f), {
    isSupported: r,
    stop: f,
    takeRecords: c
  };
}
function Ja(t, o = {}) {
  const {
    delayEnter: e = 0,
    delayLeave: l = 0,
    window: a = We
  } = o, s = L(!1);
  let r;
  const u = (i) => {
    const d = i ? e : l;
    r && (clearTimeout(r), r = void 0), d ? r = setTimeout(() => s.value = i, d) : s.value = i;
  };
  return a && (Te(t, "mouseenter", () => u(!0), { passive: !0 }), Te(t, "mouseleave", () => u(!1), { passive: !0 })), s;
}
function ir(t, o, e = {}) {
  const {
    root: l,
    rootMargin: a = "0px",
    threshold: s = 0.1,
    window: r = We,
    immediate: u = !0
  } = e, i = Ya(() => r && "IntersectionObserver" in r), d = _(() => {
    const y = ze(t);
    return (Array.isArray(y) ? y : [y]).map(qe).filter(fo);
  });
  let c = Ye;
  const f = L(u), g = i.value ? fe(
    () => [d.value, qe(l), f.value],
    ([y, B]) => {
      if (c(), !f.value || !y.length)
        return;
      const C = new IntersectionObserver(
        o,
        {
          root: qe(B),
          rootMargin: a,
          threshold: s
        }
      );
      y.forEach((p) => p && C.observe(p)), c = () => {
        C.disconnect(), c = Ye;
      };
    },
    { immediate: u, flush: "post" }
  ) : Ye, v = () => {
    c(), g(), f.value = !1;
  };
  return dt(v), {
    isSupported: i,
    isActive: f,
    pause() {
      c(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: v
  };
}
function Fe(t, o = {}) {
  const { initialValue: e = !1, focusVisible: l = !1 } = o, a = L(!1), s = _(() => qe(t));
  Te(s, "focus", (u) => {
    var i, d;
    (!l || (d = (i = u.target).matches) != null && d.call(i, ":focus-visible")) && (a.value = !0);
  }), Te(s, "blur", () => a.value = !1);
  const r = _({
    get: () => a.value,
    set(u) {
      var i, d;
      !u && a.value ? (i = s.value) == null || i.blur() : u && !a.value && ((d = s.value) == null || d.focus());
    }
  });
  return fe(
    s,
    () => {
      r.value = e;
    },
    { immediate: !0, flush: "post" }
  ), { focused: r };
}
function _a(t) {
  return typeof Window < "u" && t instanceof Window ? t.document.documentElement : typeof Document < "u" && t instanceof Document ? t.documentElement : t;
}
const ur = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function dr(t = {}) {
  const {
    type: o = "page",
    touch: e = !0,
    resetOnTouchEnds: l = !1,
    initialValue: a = { x: 0, y: 0 },
    window: s = We,
    target: r = s,
    scroll: u = !0,
    eventFilter: i
  } = t;
  let d = null;
  const c = L(a.x), f = L(a.y), g = L(null), v = typeof o == "function" ? o : ur[o], y = (w) => {
    const x = v(w);
    d = w, x && ([c.value, f.value] = x, g.value = "mouse");
  }, B = (w) => {
    if (w.touches.length > 0) {
      const x = v(w.touches[0]);
      x && ([c.value, f.value] = x, g.value = "touch");
    }
  }, C = () => {
    if (!d || !s)
      return;
    const w = v(d);
    d instanceof MouseEvent && w && (c.value = w[0] + s.scrollX, f.value = w[1] + s.scrollY);
  }, p = () => {
    c.value = a.x, f.value = a.y;
  }, h = i ? (w) => i(() => y(w), {}) : (w) => y(w), b = i ? (w) => i(() => B(w), {}) : (w) => B(w), S = i ? () => i(() => C(), {}) : () => C();
  if (r) {
    const w = { passive: !0 };
    Te(r, ["mousemove", "dragover"], h, w), e && o !== "movement" && (Te(r, ["touchstart", "touchmove"], b, w), l && Te(r, "touchend", p, w)), u && o === "page" && Te(s, "scroll", S, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: g
  };
}
function Tl(t, o = {}) {
  const {
    handleOutside: e = !0,
    window: l = We
  } = o, a = o.type || "page", { x: s, y: r, sourceType: u } = dr(o), i = L(t ?? (l == null ? void 0 : l.document.body)), d = L(0), c = L(0), f = L(0), g = L(0), v = L(0), y = L(0), B = L(!0);
  let C = () => {
  };
  return l && (C = fe(
    [i, s, r],
    () => {
      const p = qe(i);
      if (!p)
        return;
      const {
        left: h,
        top: b,
        width: S,
        height: w
      } = p.getBoundingClientRect();
      f.value = h + (a === "page" ? l.pageXOffset : 0), g.value = b + (a === "page" ? l.pageYOffset : 0), v.value = w, y.value = S;
      const x = s.value - f.value, V = r.value - g.value;
      B.value = S === 0 || w === 0 || x < 0 || V < 0 || x > S || V > w, (e || !B.value) && (d.value = x, c.value = V);
    },
    { immediate: !0 }
  ), Te(document, "mouseleave", () => {
    B.value = !0;
  })), {
    x: s,
    y: r,
    sourceType: u,
    elementX: d,
    elementY: c,
    elementPositionX: f,
    elementPositionY: g,
    elementHeight: v,
    elementWidth: y,
    isOutside: B,
    stop: C
  };
}
function ho(t) {
  const o = window.getComputedStyle(t);
  if (o.overflowX === "scroll" || o.overflowY === "scroll" || o.overflowX === "auto" && t.clientWidth < t.scrollWidth || o.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const e = t.parentNode;
    return !e || e.tagName === "BODY" ? !1 : ho(e);
  }
}
function cr(t) {
  const o = t || window.event, e = o.target;
  return ho(e) ? !1 : o.touches.length > 1 ? !0 : (o.preventDefault && o.preventDefault(), !1);
}
const Jt = /* @__PURE__ */ new WeakMap();
function fr(t, o = !1) {
  const e = L(o);
  let l = null;
  fe(mo(t), (r) => {
    const u = _a(ze(r));
    if (u) {
      const i = u;
      Jt.get(i) || Jt.set(i, i.style.overflow), e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const a = () => {
    const r = _a(ze(t));
    !r || e.value || (Va && (l = Te(
      r,
      "touchmove",
      (u) => {
        cr(u);
      },
      { passive: !1 }
    )), r.style.overflow = "hidden", e.value = !0);
  }, s = () => {
    var r;
    const u = _a(ze(t));
    !u || !e.value || (Va && (l == null || l()), u.style.overflow = (r = Jt.get(u)) != null ? r : "", Jt.delete(u), e.value = !1);
  };
  return dt(s), _({
    get() {
      return e.value;
    },
    set(r) {
      r ? a() : s();
    }
  });
}
function vr(t, o = {}) {
  const {
    threshold: e = 50,
    onSwipe: l,
    onSwipeEnd: a,
    onSwipeStart: s,
    passive: r = !0,
    window: u = We
  } = o, i = fl({ x: 0, y: 0 }), d = fl({ x: 0, y: 0 }), c = _(() => i.x - d.x), f = _(() => i.y - d.y), { max: g, abs: v } = Math, y = _(() => g(v(c.value), v(f.value)) >= e), B = L(!1), C = _(() => y.value ? v(c.value) > v(f.value) ? c.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), p = (q) => [q.touches[0].clientX, q.touches[0].clientY], h = (q, P) => {
    i.x = q, i.y = P;
  }, b = (q, P) => {
    d.x = q, d.y = P;
  };
  let S;
  const w = pr(u == null ? void 0 : u.document);
  r ? S = w ? { passive: !0 } : { capture: !1 } : S = w ? { passive: !1, capture: !0 } : { capture: !0 };
  const x = (q) => {
    B.value && (a == null || a(q, C.value)), B.value = !1;
  }, V = [
    Te(t, "touchstart", (q) => {
      if (q.touches.length !== 1)
        return;
      S.capture && !S.passive && q.preventDefault();
      const [P, Y] = p(q);
      h(P, Y), b(P, Y), s == null || s(q);
    }, S),
    Te(t, "touchmove", (q) => {
      if (q.touches.length !== 1)
        return;
      const [P, Y] = p(q);
      b(P, Y), !B.value && y.value && (B.value = !0), B.value && (l == null || l(q));
    }, S),
    Te(t, ["touchend", "touchcancel"], x, S)
  ];
  return {
    isPassiveEventSupported: w,
    isSwiping: B,
    direction: C,
    coordsStart: i,
    coordsEnd: d,
    lengthX: c,
    lengthY: f,
    stop: () => V.forEach((q) => q())
  };
}
function pr(t) {
  if (!t)
    return !1;
  let o = !1;
  const e = {
    get passive() {
      return o = !0, !1;
    }
  };
  return t.addEventListener("x", Ye, e), t.removeEventListener("x", Ye), o;
}
const mr = ["id"], br = ["id"], yr = ["innerHTML"], gr = ["innerHTML"], Qa = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BPopover",
  props: /* @__PURE__ */ ge({
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    click: { type: Boolean, default: !1 },
    content: { default: void 0 },
    customClass: { default: "" },
    delay: { default: () => ({ show: 100, hide: 300 }) },
    floatingMiddleware: { default: void 0 },
    html: { type: Boolean, default: !1 },
    id: { default: void 0 },
    inline: { type: Boolean, default: !1 },
    manual: { type: Boolean, default: !1 },
    modelValue: { type: Boolean },
    noAutoClose: { type: Boolean, default: !1 },
    noFade: { type: Boolean, default: !1 },
    noFlip: { type: Boolean, default: !1 },
    noHide: { type: Boolean, default: !1 },
    noShift: { type: Boolean, default: !1 },
    noSize: { type: Boolean, default: !1 },
    noninteractive: { type: Boolean, default: !1 },
    offset: { default: null },
    placement: { default: "top" },
    persistent: { type: Boolean, default: !1 },
    realtime: { type: Boolean, default: !1 },
    reference: { default: null },
    strategy: { default: "absolute" },
    target: { default: null },
    title: { default: void 0 },
    tooltip: { type: Boolean, default: !1 },
    variant: { default: null },
    teleportDisabled: { default: !1 },
    teleportTo: { default: void 0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BPopover"), s = e, r = _e(t, "modelValue"), u = L(r.value), i = L(r.value);
    Pt(() => {
      r.value = u.value;
    }), fe(r, (U) => {
      U !== u.value && (U ? E() : j(new Event("update:modelValue")));
    });
    const d = we(() => a.id, "popover"), c = L(!1), f = L(null), g = L(null), v = L(null), y = L(null), B = L(null), C = _(
      () => a.title ? xt(a.title, $t) : ""
    ), p = _(
      () => a.content ? xt(a.content, $t) : ""
    ), h = k(() => a.placement.startsWith("auto")), b = he(() => a.offset ?? NaN), S = _(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), w = _(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), x = L({}), V = _(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const U = a.offset !== null ? b.value : a.tooltip ? 6 : 8, ne = [Zl(U)];
      return a.noFlip === !1 && !h.value && ne.push(
        ro({
          boundary: S.value,
          rootBoundary: w.value,
          padding: a.boundaryPadding
        })
      ), h.value && ne.push(
        $s({
          alignment: a.placement.split("-")[1] || void 0,
          boundary: S.value,
          rootBoundary: w.value,
          padding: a.boundaryPadding
        })
      ), a.noShift === !1 && ne.push(
        so({
          boundary: S.value,
          rootBoundary: w.value,
          padding: a.boundaryPadding
        })
      ), a.noHide === !1 && ne.push(
        xs({
          boundary: S.value,
          rootBoundary: w.value,
          padding: a.boundaryPadding
        })
      ), a.inline === !0 && ne.push(Vs()), ne.push(Is({ element: v, padding: 10 })), a.noSize === !1 && ne.push(
        io({
          boundary: S.value,
          rootBoundary: w.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: ve, availableHeight: Q }) {
            x.value = {
              maxHeight: Q ? `${Q}px` : void 0,
              maxWidth: ve ? `${ve}px` : void 0
            };
          }
        })
      ), ne;
    }), W = k(
      () => h.value ? void 0 : a.placement
    ), { floatingStyles: q, middlewareData: P, placement: Y, update: te } = co(g, f, {
      placement: W,
      middleware: V,
      strategy: k(() => a.strategy),
      whileElementsMounted: (...U) => no(...U, { animationFrame: a.realtime })
    }), ie = L({ position: "absolute" });
    fe(P, () => {
      var U;
      if (a.noHide === !1 && ((U = P.value.hide) != null && U.referenceHidden ? c.value = !0 : c.value = !1), P.value.arrow) {
        const { x: ne, y: ve } = P.value.arrow;
        ie.value = {
          position: "absolute",
          top: ve ? `${ve}px` : "",
          left: ne ? `${ne}px` : ""
        };
      }
    });
    const G = _(() => {
      const U = a.tooltip ? "tooltip" : "popover";
      return [
        U,
        `b-${U}`,
        {
          [`b-${U}-${a.variant}`]: a.variant !== null,
          show: u.value && !c.value,
          "pe-none": !u.value,
          fade: !a.noFade,
          "d-none": !u.value && a.noFade,
          [`${a.customClass}`]: a.customClass !== void 0,
          [`bs-${U}-${Br(Y.value)}`]: Y.value !== void 0
        }
      ];
    }), { isOutside: F } = Tl(f), { isOutside: $ } = Tl(y), N = (U) => {
      const ne = U ?? new Event("click");
      u.value ? j(ne) : E();
    }, R = (U, ne = {}) => new wt(U, {
      cancelable: !1,
      target: f.value || null,
      relatedTarget: null,
      trigger: null,
      ...ne,
      componentId: d.value
    });
    let X;
    const E = () => {
      const U = R("show", { cancelable: !0 });
      if (s("show", U), U.defaultPrevented) {
        s("show-prevented");
        return;
      }
      i.value = !0, Ne(() => {
        var ne;
        te(), X = setTimeout(
          () => {
            te(), u.value = !0, Ne(() => {
              s("shown", R("shown"));
            });
          },
          typeof a.delay == "number" ? a.delay : ((ne = a.delay) == null ? void 0 : ne.show) || 0
        );
      });
    }, j = (U) => {
      var Q;
      const ne = R("hide", { cancelable: !0 });
      if (s("hide", ne), ne.defaultPrevented) {
        s("hide-prevented");
        return;
      }
      X && (clearTimeout(X), X = void 0);
      const ve = typeof a.delay == "number" ? a.delay : ((Q = a.delay) == null ? void 0 : Q.hide) || 0;
      setTimeout(() => {
        var ce, oe;
        (U == null ? void 0 : U.type) === "click" || (U == null ? void 0 : U.type) === "forceHide" || (U == null ? void 0 : U.type) === "update:modelValue" && a.manual || !a.noninteractive && F.value && $.value && !((ce = f.value) != null && ce.contains(document == null ? void 0 : document.activeElement)) && !((oe = y.value) != null && oe.contains(document == null ? void 0 : document.activeElement)) || a.noninteractive && $.value ? (u.value = !1, Ne(() => {
          setTimeout(
            () => {
              i.value = !1;
            },
            f.value ? $a(f.value) : 150
          ), s("hidden", R("hidden"));
        })) : setTimeout(
          () => {
            j(U);
          },
          ve < 50 ? 50 : ve
        );
      }, ve);
    };
    o({
      hide: j,
      show: E,
      toggle: N
    });
    const ae = () => {
      var U;
      if (a.target) {
        const ne = gt(a.target);
        ne ? y.value = ne : console.warn("Target element not found", a.target);
      } else
        y.value = (U = B.value) == null ? void 0 : U.nextElementSibling;
      if (a.reference) {
        const ne = gt(a.reference);
        ne ? g.value = ne : console.warn("Reference element not found", a.reference);
      } else
        g.value = y.value;
      if (!(!y.value || a.manual) && Da) {
        if (y.value.addEventListener("forceHide", j), a.click) {
          y.value.addEventListener("click", N);
          return;
        }
        y.value.addEventListener("pointerenter", E), y.value.addEventListener("pointerleave", j), y.value.addEventListener("focus", E), y.value.addEventListener("blur", j);
      }
    }, re = () => {
      y.value && (y.value.removeEventListener("forceHide", j), y.value.removeEventListener("click", N), y.value.removeEventListener("pointerenter", E), y.value.removeEventListener("pointerleave", j), y.value.removeEventListener("focus", E), y.value.removeEventListener("blur", j));
    };
    return go(
      f,
      () => {
        u.value && a.click && !a.noAutoClose && !a.manual && j(new Event("clickOutside"));
      },
      { ignore: [y] }
    ), fe([() => a.click, () => a.target, () => a.reference], () => {
      re(), ae();
    }), Ue(ae), Ma(re), (U, ne) => (m(), A(pe, null, [
      J("span", {
        id: n(d) + "_placeholder",
        ref_key: "placeholder",
        ref: B
      }, null, 8, mr),
      T(U.$slots, "target", {
        show: E,
        hide: j,
        toggle: N,
        showState: u.value
      }),
      (m(), O(_t, {
        to: n(a).teleportTo,
        disabled: !n(a).teleportTo || n(a).teleportDisabled
      }, [
        i.value || n(a).persistent ? (m(), A("div", K({
          key: 0,
          id: n(d)
        }, U.$attrs, {
          ref_key: "element",
          ref: f,
          class: G.value,
          role: "tooltip",
          tabindex: "-1",
          style: n(q)
        }), [
          J("div", {
            ref_key: "arrow",
            ref: v,
            class: D(`${n(a).tooltip ? "tooltip" : "popover"}-arrow`),
            style: Le(ie.value),
            "data-popper-arrow": ""
          }, null, 6),
          J("div", {
            class: "overflow-auto",
            style: Le(x.value)
          }, [
            n(a).title || U.$slots.title ? (m(), A(pe, { key: 0 }, [
              n(a).html ? (m(), A("div", {
                key: 1,
                class: D(["position-sticky top-0", n(a).tooltip ? "tooltip-inner" : "popover-header"]),
                innerHTML: C.value
              }, null, 10, yr)) : (m(), A("div", {
                key: 0,
                class: D(["position-sticky top-0", n(a).tooltip ? "tooltip-inner" : "popover-header"])
              }, [
                T(U.$slots, "title", {}, () => [
                  ue(Z(n(a).title), 1)
                ])
              ], 2))
            ], 64)) : ee("", !0),
            n(a).tooltip && !U.$slots.title && !n(a).title || !n(a).tooltip ? (m(), A(pe, { key: 1 }, [
              n(a).html ? (m(), A("div", {
                key: 1,
                class: D(n(a).tooltip ? "tooltip-inner" : "popover-body"),
                innerHTML: p.value
              }, null, 10, gr)) : (m(), A("div", {
                key: 0,
                class: D(n(a).tooltip ? "tooltip-inner" : "popover-body")
              }, [
                T(U.$slots, "default", {}, () => [
                  ue(Z(n(a).content), 1)
                ])
              ], 2))
            ], 64)) : ee("", !0)
          ], 4)
        ], 16, br)) : ee("", !0)
      ], 8, ["to", "disabled"]))
    ], 64));
  }
}), hr = ({
  top: t,
  end: o,
  start: e,
  alignCenter: l,
  alignEnd: a
}) => {
  const s = t ? "top" : e ? "left" : o ? "right" : "bottom", r = a ? "end" : l ? null : "start";
  return `${s}${r ? `-${r}` : ""}`;
}, Br = (t) => {
  const [o] = t.split("-");
  switch (o) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return o;
  }
}, Dt = (t) => typeof t != "object" || t.active !== !1, ua = (t, o) => {
  if (!Dt(t))
    return {};
  const l = typeof t > "u" || typeof t == "object" && !t.title && !t.content, a = o.getAttribute("title") || o.getAttribute("data-original-title");
  return l ? a ? (o.removeAttribute("title"), o.setAttribute("data-original-title", a), {
    content: xt(a, $t)
  }) : {} : typeof t == "string" ? {
    content: xt(t, $t)
  } : {
    title: t != null && t.title ? xt(t == null ? void 0 : t.title, $t) : void 0,
    content: t != null && t.content ? xt(t == null ? void 0 : t.content, $t) : void 0
  };
}, da = (t, o) => ({
  target: o,
  modelValue: t.modifiers.show,
  inline: t.modifiers.inline,
  click: t.modifiers.click,
  realtime: t.modifiers.realtime,
  persistent: t.modifiers.persistent,
  placement: t.modifiers.left ? "left" : t.modifiers.right ? "right" : t.modifiers.bottom ? "bottom" : t.modifiers.top ? "top" : void 0,
  html: !0,
  ...typeof t.value == "object" ? t.value : {},
  ...t.modifiers.interactive ? { noninteractive: !1 } : {},
  title: null,
  content: null
}), ca = (t, o, e) => {
  var a;
  const l = document.createElement("span");
  o.modifiers.body ? document.body.appendChild(l) : o.modifiers.child ? t.appendChild(l) : (a = t.parentNode) == null || a.insertBefore(l, t.nextSibling), ql(Ie(Qa, e), l), t.$__element = l;
}, fa = (t) => {
  const o = t.$__element;
  o && ql(null, o), setTimeout(() => {
    o == null || o.remove();
  }, 0), delete t.$__element;
}, Bo = (t, o, e) => {
  const l = Ee(t, o);
  return e && typeof e == "function" ? e(l, o, t) : l;
}, Qt = (t, o, e, l = e) => o.reduce((a, s) => (t[s] && a.push(
  [l, s.replace(e, ""), t[s]].filter((r) => r && typeof r != "boolean").join("-").toLowerCase()
), a), []), gt = (t) => {
  if (t)
    return typeof t == "string" ? typeof document > "u" ? void 0 : document.getElementById(t) ?? document.querySelector(t) ?? void 0 : t.$el ?? t;
}, _r = (t, o) => ((t == null ? void 0 : t()) ?? []).reduce((e, l) => (typeof l.type == "symbol" ? e = e.concat(l.children) : e.push(l), e), []).filter((e) => {
  var l;
  return ((l = e.type) == null ? void 0 : l.__name) === o;
}), _o = /_/g, wo = /([a-z])([A-Z])/g, wr = /^[0-9]*\.?[0-9]+$/, Cr = /(\s|^)(\w)/g, kr = /(\s|^)(\w)/, ea = /\s+/, Tr = /^#/, $r = /^#[A-Za-z]+[\w\-:.]*$/, xr = /[-/\\^$*+?.()|[\]{}]/g, Sr = /[\s\uFEFF\xA0]+/g, wa = (t) => t.replace(_o, " ").replace(wo, (o, e, l) => `${e} ${l}`).replace(kr, (o, e, l) => e + l.toUpperCase()), $l = (t) => t.replace(_o, " ").replace(wo, (o, e, l) => `${e} ${l}`).replace(Cr, (o, e, l) => e + l.toUpperCase()), Vr = (t) => {
  const o = t.trim();
  return o.charAt(0).toUpperCase() + o.slice(1);
}, Ar = (t) => t.replace(xr, "\\$&"), Or = (t) => Ar(t).replace(Sr, "\\s"), ta = (t) => typeof t == "string" ? $l(t) : t.label !== void 0 ? t.label : typeof t.key == "string" ? $l(t.key) : t.key, Ir = (t) => !!(t.href || t.to), Co = Symbol("bvn::carousel"), ko = Symbol("bvn::tabs"), To = Symbol("bvn::progress"), $o = Symbol("bvn::listGroup"), xo = Symbol("bvn::avatarGroup"), So = Symbol("bvn::accordion"), Vo = Symbol("bvn::checkboxGroup"), Ao = Symbol("bvn::radioGroup"), el = Symbol("bvn::collapse"), Oo = Symbol("bvn::collapse"), tl = Symbol("bvn::navbar"), Io = Symbol("bvn::toastPlugin"), Po = Symbol("bvn::rtlPlugin"), No = Symbol("bvn::breadcrumbPlugin"), Eo = Symbol("bvn::modalControllerPlugin"), Fo = Symbol("bvn::modalManagerPlugin"), Lo = Symbol("bvn::idPluginKey"), aa = Symbol("bvn::defaults"), Lt = (t, o = {}, e = {}) => {
  const l = [t];
  let a;
  for (let s = 0; s < l.length && !a; s++) {
    const r = l[s];
    a = e[r];
  }
  return a && typeof a == "function" ? a(o) : a;
}, ga = (t, o) => Object.keys(t).filter((e) => !o.map((l) => l.toString()).includes(e)).reduce((e, l) => ({ ...e, [l]: t[l] }), {}), al = (t, o) => [...o].reduce(
  (e, l) => (e[l] = t[l], e),
  {}
), Ee = (t, o, e) => {
  const l = o.split(/[.[\]]/g);
  let a = t;
  for (const s of l) {
    if (a === null || a === void 0)
      return e;
    s.trim() !== "" && (a = a[s]);
  }
  return a === void 0 ? e : a;
}, Pr = (t, o, e) => {
  const l = (i) => {
    if (((f) => f == null || typeof f != "object" && typeof f != "function")(i))
      return i;
    if (typeof i == "function")
      return i.bind({});
    const c = new i.constructor();
    return Object.getOwnPropertyNames(i).forEach((f) => {
      c[f] = i[f];
    }), c;
  }, a = (i, d) => {
    const c = d === void 0 ? 0 : d;
    if (i == null)
      return c;
    const f = Number.parseInt(i);
    return Number.isNaN(f) ? c : f;
  };
  if (!t)
    return {};
  if (!o || e === void 0)
    return t;
  const s = o.split(/[.[\]]/g).filter((i) => !!i.trim()), r = (i) => {
    if (s.length > 1) {
      const d = s.shift(), c = a(s[0], null) !== null;
      i[d] = i[d] === void 0 ? c ? [] : {} : i[d], r(i[d]);
    } else
      i[s[0]] = e;
  }, u = l(t);
  return r(u), u;
}, va = (t, o) => {
  const { all: e, ...l } = t, a = {};
  e && o.forEach((r) => {
    a[r] = e;
  });
  const s = { ...a, ...l };
  return Object.entries(s).filter(([r, u]) => !!u && o.includes(r)).map(([r]) => r);
}, xl = (t, o) => o + (t ? Vr(t) : ""), Ct = (t, o) => {
  const e = k(o), l = k(t), a = k(() => Ir(l.value)), s = _(
    () => a.value ? al(
      l.value,
      e.value ?? [
        "active",
        "activeClass",
        "append",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover"
      ]
    ) : {}
  );
  return { computedLink: a, computedLinkProps: s };
}, zo = () => ({ ...Ve(No) }), Nr = (t = {}) => {
  const o = t.persist ?? !1, e = "data-bs-theme", l = "body";
  return sr({
    attribute: e,
    selector: l,
    storageKey: o === !0 ? `bv-color-${t.attribute ?? e}-${t.selector ?? l}` : null,
    ...t
  });
}, ot = (t) => _(() => {
  let o = Se(t);
  return o = {
    ...o,
    variant: o.variant ?? null,
    bgVariant: o.bgVariant ?? null,
    textVariant: o.textVariant ?? null
  }, {
    [`text-bg-${o.variant}`]: o.variant !== null,
    [`text-${o.textVariant}`]: o.textVariant !== null && o.variant === null,
    [`bg-${o.bgVariant}`]: o.bgVariant !== null && o.variant === null
  };
}), Er = (t) => _(() => {
  const o = Se(t);
  return {
    container: o === !0,
    [`container-${o}`]: typeof o == "string"
  };
}), Ho = (t, o = L(1e3), e = {}) => {
  const l = Ke(k(t)), a = Ke(k(o)), s = L(!1), r = L(0), u = k(() => Math.ceil(l.value / a.value)), i = k(
    () => f.value || s.value ? Math.round(l.value - r.value * a.value) : 0
  ), { pause: d, resume: c, isActive: f } = yo(
    () => {
      r.value = r.value + 1;
    },
    o,
    e
  ), g = () => {
    s.value = !1, r.value = 0, c();
  }, v = () => {
    s.value = !1, r.value = u.value;
  };
  Pt(() => {
    r.value > u.value && (r.value = u.value), r.value === u.value && d();
  }), fe([a, l], () => {
    v(), g();
  });
  const y = () => {
    f.value !== !1 && (s.value = !0, d());
  }, B = () => {
    r.value !== u.value && (s.value = !1, c());
  };
  return {
    isActive: Ke(f),
    isPaused: Ke(s),
    restart: g,
    stop: v,
    pause: y,
    resume: B,
    value: i
  };
};
function Fr(t, o = Mo("injectSelf")) {
  const { provides: e } = o;
  if (e && t in e)
    return e[t];
}
function Mo(t, o) {
  const e = Bt();
  if (!e)
    throw new Error(`[Bvn] ${t} ${o || "must be called from inside a setup function"}`);
  return e;
}
const Lr = (t = "") => t.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase(), Sl = (t) => t !== null && typeof t == "object" && !Array.isArray(t);
function Ro(t = {}, o = {}, e) {
  const l = {};
  for (const a in t)
    l[a] = t[a];
  for (const a in o) {
    const s = t[a], r = o[a];
    if (Sl(s) && Sl(r)) {
      l[a] = Ro(s, r, e);
      continue;
    }
    if (Array.isArray(s) && Array.isArray(r) && e) {
      l[a] = e(s, r);
      continue;
    }
    l[a] = r;
  }
  return l;
}
const zr = (t, o) => {
  var e, l;
  return typeof ((e = t.props) == null ? void 0 : e[o]) < "u" || typeof ((l = t.props) == null ? void 0 : l[Lr(o)]) < "u";
};
function Hr(t = {}, o) {
  const e = Ve(aa, L({})), l = Mo("useDefaults");
  if (o = o ?? l.type.name ?? l.type.__name, !o)
    throw new Error("[Bvn] Could not determine component name");
  const a = _(() => {
    var i;
    return (i = e.value) == null ? void 0 : i[t._as ?? o];
  }), s = new Proxy(t, {
    get(i, d) {
      var f, g, v, y;
      const c = Reflect.get(i, d);
      return d === "class" || d === "style" ? [(f = a.value) == null ? void 0 : f[d], c].filter((B) => B != null) : typeof d == "string" && !zr(l.vnode, d) ? ((g = a.value) == null ? void 0 : g[d]) ?? ((y = (v = e.value) == null ? void 0 : v.global) == null ? void 0 : y[d]) ?? c : c;
    }
  }), r = bt();
  Pt(() => {
    if (a.value) {
      const i = Object.entries(a.value).filter(
        ([d]) => d.startsWith(d[0].toUpperCase())
      );
      r.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      r.value = void 0;
  });
  function u() {
    const i = Fr(aa, l);
    Qe(
      aa,
      _(
        () => r.value ? Ro((i == null ? void 0 : i.value) ?? {}, r.value) : i == null ? void 0 : i.value
      )
    );
  }
  return { props: s, provideSubDefaults: u };
}
function M(t, o) {
  const { props: e, provideSubDefaults: l } = Hr(t, o);
  return l(), e;
}
const kt = (t) => _(() => {
  const o = Se(t);
  return o === !0 ? "is-valid" : o === !1 ? "is-invalid" : null;
}), Do = (t) => _(() => {
  const o = Se(t);
  return {
    "form-check": o.plain === !1 && o.button === !1 && o.hasDefaultSlot,
    "form-check-reverse": o.reverse === !0,
    "form-check-inline": o.inline === !0,
    "form-switch": o.switch === !0,
    [`form-control-${o.size}`]: o.size !== void 0 && o.size !== "md" && o.button === !1
  };
}), jo = (t) => {
  const o = k(t), e = kt(() => o.value.state ?? null);
  return _(() => [
    e.value,
    {
      "form-check-input": o.value.plain === !1 && o.value.button === !1,
      "btn-check": o.value.button === !0
    }
  ]);
}, qo = (t) => _(() => {
  const o = Se(t);
  return {
    "form-check-label": o.plain === !1 && o.button === !1,
    btn: o.button === !0,
    [`btn-${o.buttonVariant}`]: o.button === !0 && o.buttonVariant !== void 0 && o.buttonVariant !== null,
    [`btn-${o.size}`]: o.button && o.size && o.size !== "md"
  };
}), Go = (t) => {
  const o = k(t), e = ma(
    () => o.value.ariaInvalid,
    () => o.value.state
  );
  return _(() => ({
    "aria-invalid": e.value,
    "aria-required": o.value.required === !0 ? !0 : void 0
  }));
}, Wo = (t) => _(() => {
  const o = Se(t);
  return {
    "was-validated": o.validated === !0,
    "btn-group": o.buttons === !0 && o.stacked === !1,
    "btn-group-vertical": o.stacked === !0 && o.buttons === !0,
    [`btn-group-${o.size}`]: o.size !== void 0
  };
}), we = (t, o) => _(() => Se(t) || Mr(o)), Mr = (t = "") => `__BVID__${Ve(Lo, () => Math.random().toString().slice(2, 8))()}___BV_${t}__`, Uo = (t, o, e) => {
  const l = L(null), a = we(() => t.id, "input"), s = he(() => t.debounce ?? 0), r = he(() => t.debounceMaxWait ?? NaN), u = Xs(
    (p) => {
      o.value = p;
    },
    () => e.lazy === !0 ? 0 : s.value,
    { maxWait: () => e.lazy === !0 ? NaN : r.value }
  ), i = (p, h = !1) => {
    e.lazy === !0 && h === !1 || u(p);
  }, { focused: d } = Fe(l, {
    initialValue: t.autofocus
  }), c = (p, h, b = !1) => t.formatter !== void 0 && (!t.lazyFormatter || b) ? t.formatter(p, h) : p;
  Ue(() => {
    var p;
    l.value && (l.value.value = ((p = o.value) == null ? void 0 : p.toString()) ?? "");
  }), In(() => {
    Ne(() => {
      t.autofocus && (d.value = !0);
    });
  });
  const f = ma(
    () => t.ariaInvalid,
    () => t.state
  );
  return {
    input: l,
    computedId: a,
    computedAriaInvalid: f,
    onInput: (p) => {
      const { value: h } = p.target, b = c(h, p);
      if (p.defaultPrevented) {
        p.preventDefault();
        return;
      }
      i(b);
    },
    onChange: (p) => {
      const { value: h } = p.target, b = c(h, p);
      if (p.defaultPrevented) {
        p.preventDefault();
        return;
      }
      const S = b;
      o.value !== S && i(b, !0);
    },
    onBlur: (p) => {
      if (!e.lazy && !t.lazyFormatter)
        return;
      const { value: h } = p.target, b = c(h, p, !0), S = b;
      o.value !== S && i(b, !0);
    },
    focus: () => {
      t.disabled || (d.value = !0);
    },
    blur: () => {
      t.disabled || (d.value = !1);
    }
  };
}, Xo = (t, o) => {
  const e = (r) => typeof r == "object" && r !== null && "label" in r, l = (r) => {
    if (typeof r == "string")
      return { value: r, text: r };
    if (typeof r == "number")
      return { value: r, text: `${r}` };
    if (r instanceof Date)
      return { value: r, text: r.toLocaleString() };
    const u = Ee(r, o.valueField), i = Ee(r, o.textField), d = Ee(r, o.htmlField), c = Ee(r, o.disabledField), f = o.optionsField ? Ee(r, o.optionsField) : void 0;
    return f !== void 0 ? {
      label: Ee(r, o.labelField) || i,
      options: f
    } : {
      value: u,
      text: i,
      html: d,
      disabled: c
    };
  }, a = (r) => r.map((u) => l(u));
  return { normalizedOptions: _(() => a(Se(t))), isComplex: e };
}, Ca = "modal-open", ll = () => {
  const t = Ve(Fo), o = (l) => {
    t == null || t.removeStack(l), t == null || t.removeRegistry(l);
  }, e = Za("updateHTMLAttrs", (l, a, s) => {
    const r = typeof l == "string" ? window == null ? void 0 : window.document.querySelector(l) : qe(l);
    r && (a === "class" ? r.classList.toggle(Ca, s === Ca) : r.setAttribute(a, s));
  });
  return dt(() => {
    e("body", "class", "");
  }), fe(
    () => t == null ? void 0 : t.countStack.value,
    (l) => {
      l !== void 0 && e("body", "class", l > 0 ? Ca : "");
    }
  ), {
    ...t,
    dispose: o
  };
}, Rr = (t) => {
  const { pushRegistry: o, pushStack: e, removeStack: l, stack: a, dispose: s, countStack: r } = ll(), u = Bt();
  if (!u || u.type.__name !== "BModal")
    throw new Error("useModalManager must only use in BModal component");
  return o == null || o(u), dt(() => {
    s(u);
  }), fe(
    t,
    (i, d) => {
      i ? e == null || e(u) : d && !i && (l == null || l(u));
    },
    { immediate: !0 }
  ), {
    activePosition: _(
      () => a == null ? void 0 : a.value.findIndex((i) => {
        var d, c;
        return ((d = i.exposed) == null ? void 0 : d.id) === ((c = u.exposed) == null ? void 0 : c.id);
      })
    ),
    activeModalCount: r
  };
}, Dr = (t = void 0) => {
  const { registry: o } = ll(), e = Bt(), l = (r) => r.parent ? r.parent.type.__name === "BModal" ? r.parent : l(r.parent) : null, a = _(() => {
    const r = Se(t);
    return r ? (o == null ? void 0 : o.value.find((u) => {
      var i;
      return ((i = u.exposed) == null ? void 0 : i.id.value) === r;
    })) || null : e ? l(e) : null;
  }), s = k(() => {
    var r;
    return (r = a.value) == null ? void 0 : r.proxy;
  });
  return {
    show() {
      var r, u;
      (u = (r = a.value) == null ? void 0 : r.exposed) == null || u.show();
    },
    hide(r = "") {
      var u, i;
      (i = (u = a.value) == null ? void 0 : u.exposed) == null || i.hide(r);
    },
    modal: s
  };
}, Ko = () => {
  const { lastStack: t, stack: o } = ll();
  return {
    ...Ve(Eo),
    hide: (s = "") => {
      var r;
      t != null && t.value && ((r = t == null ? void 0 : t.value.exposed) == null || r.hide(s));
    },
    hideAll: (s = "") => {
      o == null || o.value.forEach((r) => {
        var u;
        (u = r.exposed) == null || u.hide(s);
      });
    }
    // Todo: Supports listening events globally in the future
  };
}, pa = (t, o = "px") => _(() => {
  const e = Se(t), l = Se(o);
  return wr.test(String(e)) ? `${Number(e)}${l}` : e;
}), ol = (t) => {
  const o = (e, l) => {
    const a = l === null ? "" : `${l}-`;
    return e === "circle" ? `${a}rounded-circle` : e === "pill" ? `${a}rounded-pill` : typeof e == "number" || e === "0" || e === "1" || e === "2" || e === "3" || e === "4" || e === "5" ? `${a}rounded-${e}` : e === "none" ? `${a}rounded-0` : e === "sm" ? `${a}rounded-1` : e === "lg" ? `${a}rounded-5` : `${a}rounded`;
  };
  return _(() => {
    const e = Se(t);
    return {
      [`${o(e.rounded, null)}`]: !!e.rounded,
      [`${o(e.roundedTop, "top")}`]: !!e.roundedTop,
      [`${o(e.roundedBottom, "bottom")}`]: !!e.roundedBottom,
      [`${o(e.roundedStart, "start")}`]: !!e.roundedStart,
      [`${o(e.roundedEnd, "end")}`]: !!e.roundedEnd
    };
  });
}, jr = () => {
  const t = Ve(Po);
  return Ue(() => {
    fe(
      [() => t == null ? void 0 : t.isRtl.value, () => t == null ? void 0 : t.locale.value],
      ([o, e]) => {
        const l = document.documentElement;
        l.setAttribute("dir", o ?? !1 ? "rtl" : "ltr"), l.setAttribute("lang", e ?? "");
      },
      { immediate: !0 }
    );
  }), { ...t };
}, Yo = (t, o) => {
  const e = Ke(k(t)), l = Ke(k(o)), a = k(() => !l.value);
  Ue(() => {
    const s = fr(
      document.body,
      e.value && a.value
    );
    fe([e, a], ([r, u]) => {
      s.value = r && u;
    });
  });
}, Zo = (t, o, e = {}) => {
  const l = k(t), a = k(o), s = L(gt(l.value)), r = L(gt(a.value));
  fe([l, a], () => {
    h();
  });
  const {
    contentQuery: u = ":scope > [id]",
    targetQuery: i = "[href]",
    manual: d = !1,
    root: c,
    rootMargin: f = "0px 0px -25%",
    threshold: g = [0.1, 0.5, 1],
    watchChanges: v = !0
  } = e, y = L(null), B = L([]), C = L([]);
  Bt() ? Ue(() => {
    Oa(l, s, {
      transform: {
        ltr: (P) => gt(P)
      },
      direction: "ltr",
      immediate: !0
    }), Oa(a, r, {
      transform: {
        ltr: (P) => gt(P)
      },
      direction: "ltr",
      immediate: !0
    }), h();
  }) : Ne(() => {
    h();
  });
  const h = () => {
    C.value = s.value ? Array.from(s.value.querySelectorAll(u)) : [], B.value = C.value.map((P) => ({
      id: P.id,
      el: P,
      visible: !1,
      text: P.textContent
    }));
  };
  let b = !0, S = 0;
  const w = _(
    () => s.value && getComputedStyle(s.value).overflowY === "visible" ? null : s.value
  ), x = ir(
    C,
    (P) => {
      var ie, G, F, $;
      const Y = (ie = w.value || (document == null ? void 0 : document.documentElement)) == null ? void 0 : ie.scrollTop;
      b = Y > S, S = Y, P.forEach((N) => {
        if (N.isIntersecting) {
          B.value.forEach((R) => {
            R.el === N.target && (R.visible = !0);
          });
          return;
        }
        B.value.forEach((R) => {
          R.el === N.target && (R.visible = !1);
        });
      });
      let te = null;
      b ? te = ((G = [...B.value].reverse().find((N) => N.visible)) == null ? void 0 : G.id) || null : te = ((F = B.value.find((N) => N.visible)) == null ? void 0 : F.id) || null, te !== null && (y.value = te), y.value || (y.value = (($ = B.value[0]) == null ? void 0 : $.id) || null);
    },
    {
      root: c ? gt(c) : w,
      rootMargin: f,
      threshold: g
    }
  );
  fe(y, (P) => {
    var G;
    if (d)
      return;
    const Y = (G = r.value) == null ? void 0 : G.querySelectorAll(i);
    if (Y === void 0)
      return;
    let te = !1, ie = null;
    Y.forEach((F) => {
      var N, R, X, E, j, ae, re, U, ne, ve, Q;
      const $ = F.closest(".dropdown");
      if ((N = F.getAttribute("href")) != null && N.includes(`#${P}`)) {
        ie = F, F.classList.add("active"), $ && ((R = $ == null ? void 0 : $.querySelector(".dropdown-toggle")) == null || R.classList.add("active"), te = !0);
        let ce = (X = F.closest(".nav")) == null ? void 0 : X.previousSibling;
        for (; (E = ce == null ? void 0 : ce.classList) != null && E.contains("nav-item"); )
          te = !0, (j = ce.querySelector(".nav-link")) == null || j.classList.add("active"), ce = (ae = ce.closest(".nav")) == null ? void 0 : ae.previousSibling;
      } else if (F.classList.remove("active"), $ && !te && ((re = $ == null ? void 0 : $.querySelector(".dropdown-toggle")) == null || re.classList.remove("active")), !te) {
        let ce = (U = F.closest(".nav")) == null ? void 0 : U.previousSibling;
        for (; (ne = ce == null ? void 0 : ce.classList) != null && ne.contains("nav-item"); )
          te = !0, ce.querySelector(".nav-link") !== ie && ((ve = ce.querySelector(".nav-link")) == null || ve.classList.remove("active")), ce = (Q = ce.closest(".nav")) == null ? void 0 : Q.previousSibling;
      }
    });
  });
  const V = v ? rr(
    s,
    () => {
      h();
    },
    {
      childList: !0
    }
  ) : { stop: () => {
  } }, W = (P, Y = !1) => {
    var G, F;
    P.preventDefault();
    const te = (F = (G = P.target) == null ? void 0 : G.getAttribute) == null ? void 0 : F.call(G, "href"), ie = te ? document == null ? void 0 : document.querySelector(te) : null;
    ie && s.value && (s.value.scrollTo ? s.value.scrollTo({ top: ie.offsetTop, behavior: Y ? "smooth" : "auto" }) : s.value.scrollTop = ie.offsetTop);
  }, q = () => {
    x.stop(), V.stop();
  };
  return {
    current: Ke(y),
    list: B,
    content: s,
    target: r,
    scrollIntoView: W,
    updateList: h,
    cleanup: q
  };
}, Jo = () => ({ ...Ve(Io) }), Et = /* @__PURE__ */ z({
  __name: "BTransition",
  props: {
    appear: { type: Boolean, default: !1 },
    mode: { default: void 0 },
    noFade: { type: Boolean, default: !1 },
    transProps: { default: void 0 }
  },
  emits: ["after-appear", "after-enter", "after-leave", "appear", "before-appear", "before-enter", "before-leave", "enter", "appear-cancelled", "enter-cancelled", "leave", "leave-cancelled"],
  setup(t, { emit: o }) {
    const l = M(t, "BTransition"), a = o, s = _(() => {
      const u = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, i = {
        ...u,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return l.noFade ? u : i;
    }), r = _(() => ({ mode: l.mode, css: !0, ...s.value }));
    return (u, i) => (m(), O(Pn, K({ ...r.value, ...n(l).transProps }, {
      appear: n(l).appear,
      onAfterAppear: i[0] || (i[0] = (d) => a("after-appear", d)),
      onAfterEnter: i[1] || (i[1] = (d) => a("after-enter", d)),
      onAfterLeave: i[2] || (i[2] = (d) => a("after-leave", d)),
      onAppear: i[3] || (i[3] = (d) => a("appear", d)),
      onBeforeAppear: i[4] || (i[4] = (d) => a("before-appear", d)),
      onBeforeEnter: i[5] || (i[5] = (d) => a("before-enter", d)),
      onBeforeLeave: i[6] || (i[6] = (d) => a("before-leave", d)),
      onEnter: i[7] || (i[7] = (d) => a("enter", d)),
      onAppearCancelled: i[8] || (i[8] = (d) => a("appear-cancelled", d)),
      onEnterCancelled: i[9] || (i[9] = (d) => a("enter-cancelled", d)),
      onLeave: i[10] || (i[10] = (d) => a("leave", d)),
      onLeaveCancelled: i[11] || (i[11] = (d) => a("leave-cancelled", d))
    }), {
      default: I(() => [
        T(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["appear"]));
  }
}), qr = ["type", "disabled", "aria-label"], Ft = /* @__PURE__ */ z({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BCloseButton"), a = o;
    return (s, r) => (m(), A("button", {
      type: n(l).type,
      class: "btn-close",
      disabled: n(l).disabled,
      "aria-label": n(l).ariaLabel,
      onClick: r[0] || (r[0] = (u) => a("click", u))
    }, null, 8, qr));
  }
}), Vl = "active", st = /* @__PURE__ */ z({
  __name: "BLink",
  props: {
    active: { type: Boolean, default: void 0 },
    activeClass: { default: "router-link-active" },
    disabled: { type: Boolean, default: !1 },
    exactActiveClass: { default: "router-link-exact-active" },
    href: { default: void 0 },
    icon: { type: Boolean, default: !1 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: !1 },
    routerComponentName: { default: "router-link" },
    routerTag: { default: "a" },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null },
    variant: { default: null }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BLink"), a = o, s = jt(), r = Ve(el, null), u = Ve(tl, null), i = Bt(), d = _(() => {
      const B = l.routerComponentName.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
      return !((i == null ? void 0 : i.appContext.app.component(B)) !== void 0) || l.disabled || !l.to ? "a" : l.routerComponentName;
    }), c = _(() => {
      const B = "#";
      if (l.href)
        return l.href;
      if (typeof l.to == "string")
        return l.to || B;
      const { to: C } = l;
      if (C !== void 0 && "path" in C) {
        const p = C.path || "", h = C.query ? `?${Object.keys(C.query).map((S) => {
          var w;
          return `${S}=${(w = C.query) == null ? void 0 : w[S]}`;
        }).join("=")}` : "", b = !C.hash || C.hash.charAt(0) === "#" ? C.hash || "" : `#${C.hash}`;
        return `${p}${h}${b}` || B;
      }
      return B;
    }), f = _(() => ({
      [`link-${l.variant}`]: l.variant !== null,
      [`link-opacity-${l.opacity}`]: l.opacity !== void 0,
      [`link-opacity-${l.opacityHover}-hover`]: l.opacityHover !== void 0,
      [`link-underline-${l.underlineVariant}`]: l.underlineVariant !== null,
      [`link-offset-${l.underlineOffset}`]: l.underlineOffset !== void 0,
      [`link-offset-${l.underlineOffsetHover}-hover`]: l.underlineOffsetHover !== void 0,
      [`link-underline-opacity-${l.underlineOpacity}`]: l.underlineOpacity !== void 0,
      [`link-underline-opacity-${l.underlineOpacityHover}-hover`]: l.underlineOpacityHover !== void 0,
      "icon-link": l.icon === !0,
      "stretched-link": l.stretched === !0
    })), g = _(() => ({
      class: f.value,
      to: l.to,
      replace: l.replace,
      href: c.value,
      target: l.target,
      rel: l.target === "_blank" ? l.rel ?? "noopener" : void 0,
      tabindex: l.disabled ? "-1" : typeof s.tabindex > "u" ? null : s.tabindex,
      "aria-disabled": l.disabled ? !0 : null
    })), v = _(() => ({
      [Vl]: l.active,
      disabled: l.disabled
    })), y = (B) => {
      var C, p, h;
      if (l.disabled) {
        B.preventDefault(), B.stopImmediatePropagation();
        return;
      }
      (((C = r == null ? void 0 : r.isNav) == null ? void 0 : C.value) === !0 && u === null || u !== null && ((p = u.autoClose) == null ? void 0 : p.value) === !0) && ((h = r == null ? void 0 : r.hide) == null || h.call(r)), a("click", B);
    };
    return (B, C) => d.value === "router-link" ? (m(), O(de(d.value), K({ key: 0 }, g.value, { custom: "" }), {
      default: I(({ href: p, navigate: h, isActive: b, isExactActive: S }) => [
        (m(), O(de(n(l).routerTag), K({
          href: p,
          class: {
            [Vl]: n(l).active,
            [n(l).activeClass]: b,
            [n(l).exactActiveClass]: S
          }
        }, B.$attrs, {
          onClick: (w) => {
            h(w), y(w);
          }
        }), {
          default: I(() => [
            T(B.$slots, "default")
          ]),
          _: 2
        }, 1040, ["href", "class", "onClick"]))
      ]),
      _: 3
    }, 16)) : (m(), O(de(d.value), K({
      key: 1,
      class: v.value
    }, g.value, { onClick: y }), {
      default: I(() => [
        T(B.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gr = ["aria-valuenow", "aria-valuemax"], Qo = /* @__PURE__ */ z({
  __name: "BProgressBar",
  props: {
    animated: { type: Boolean, default: !1 },
    label: { default: void 0 },
    labelHtml: { default: void 0 },
    max: { default: void 0 },
    precision: { default: 0 },
    showProgress: { type: Boolean, default: !1 },
    showValue: { type: Boolean, default: !1 },
    striped: { type: Boolean, default: !1 },
    value: { default: 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(t) {
    const e = M(t, "BProgressBar"), l = Ve(To, null), a = ot(e), s = _(() => [
      a.value,
      {
        "progress-bar-animated": e.animated || (l == null ? void 0 : l.animated.value),
        "progress-bar-striped": e.striped || (l == null ? void 0 : l.striped.value) || e.animated || (l == null ? void 0 : l.animated.value)
      }
    ]), r = he(() => e.precision), u = he(() => e.value), i = he(() => e.max ?? NaN), d = he(() => (l == null ? void 0 : l.max.value) ?? NaN), c = _(
      () => e.labelHtml !== void 0 ? e.labelHtml : e.showValue || l != null && l.showValue.value ? u.value.toFixed(r.value) : e.showProgress || l != null && l.showProgress.value ? (u.value * 100 / (i.value || 100)).toFixed(r.value) : e.label !== void 0 ? e.label : ""
    ), f = _(
      () => d.value ? `${u.value * 100 / d.value}%` : i.value ? `${u.value * 100 / i.value}%` : typeof e.value == "string" ? e.value : `${e.value}%`
    );
    return (g, v) => (m(), A("div", {
      class: D(["progress-bar", s.value]),
      role: "progressbar",
      "aria-valuenow": n(e).value,
      "aria-valuemin": "0",
      "aria-valuemax": n(e).max,
      style: Le({ width: f.value })
    }, [
      T(g.$slots, "default", {}, () => [
        ue(Z(c.value), 1)
      ])
    ], 14, Gr));
  }
}), en = /* @__PURE__ */ z({
  __name: "BProgress",
  props: {
    height: { default: void 0 },
    animated: { type: Boolean, default: void 0 },
    max: { default: 100 },
    precision: { default: void 0 },
    showProgress: { type: Boolean, default: void 0 },
    showValue: { type: Boolean, default: void 0 },
    striped: { type: Boolean, default: void 0 },
    value: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BProgress");
    return Qe(To, {
      animated: k(() => e.animated),
      max: k(() => e.max),
      showProgress: k(() => e.showProgress),
      showValue: k(() => e.showValue),
      striped: k(() => e.striped)
    }), (l, a) => (m(), A("div", {
      class: "progress",
      style: Le({ height: n(e).height })
    }, [
      T(l.$slots, "default", {}, () => [
        be(Qo, {
          animated: n(e).animated,
          max: n(e).max,
          precision: n(e).precision,
          "show-progress": n(e).showProgress,
          "show-value": n(e).showValue,
          striped: n(e).striped,
          value: n(e).value,
          variant: n(e).variant,
          "text-variant": n(e).textVariant,
          "bg-variant": n(e).bgVariant
        }, null, 8, ["animated", "max", "precision", "show-progress", "show-value", "striped", "value", "variant", "text-variant", "bg-variant"])
      ])
    ], 4));
  }
}), Wr = ["id", "role", "aria-live", "aria-atomic"], Ur = { class: "me-auto" }, tn = /* @__PURE__ */ z({
  __name: "BToast",
  props: /* @__PURE__ */ ge({
    body: { default: void 0 },
    bodyClass: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "div" },
    id: { default: void 0 },
    interval: { default: 1e3 },
    isStatus: { type: Boolean, default: !1 },
    modelValue: { type: [Boolean, Number] },
    noCloseButton: { type: Boolean, default: !1 },
    noFade: { type: Boolean, default: !1 },
    noHoverPause: { type: Boolean, default: !1 },
    progressProps: { default: void 0 },
    showOnPause: { type: Boolean, default: !0 },
    solid: { type: Boolean, default: !1 },
    title: { default: void 0 },
    toastClass: { default: void 0 },
    transProps: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: null },
    textVariant: { default: null },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  }, {
    modelValue: { type: [Boolean, Number], default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["close", "close-countdown", "hide", "hidden", "show", "shown", "show-prevented", "hide-prevented"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BToast"), s = e, r = L(null), u = Ja(r), i = _e(t, "modelValue"), { computedLink: d, computedLinkProps: c } = Ct(a), f = he(() => a.interval), g = ot(a), v = k(() => typeof i.value == "boolean" ? 0 : i.value), {
      isActive: y,
      pause: B,
      restart: C,
      resume: p,
      stop: h,
      isPaused: b,
      value: S
    } = Ho(v, f, {
      immediate: typeof i.value == "number"
    });
    Pt(() => {
      s("close-countdown", S.value);
    });
    const w = k(() => d.value ? st : "div"), x = k(
      () => typeof i.value == "boolean" ? i.value : y.value || a.showOnPause && b.value
    ), V = _(() => [
      g.value,
      {
        show: x.value
      }
    ]), W = () => {
      a.noHoverPause || B();
    };
    fe(u, (F) => {
      if (F) {
        W();
        return;
      }
      p();
    });
    const q = (F, $ = {}) => new wt(F, {
      cancelable: !1,
      target: r.value || null,
      relatedTarget: null,
      trigger: null,
      ...$,
      componentId: a.id
    }), P = () => {
      const F = q("show", { cancelable: !0 });
      if (s("show", F), F.defaultPrevented) {
        i.value && (i.value = !1), s("show-prevented");
        return;
      }
      i.value || (i.value = !0);
    }, Y = (F = "") => {
      const $ = q("hide", { cancelable: F !== "", trigger: F });
      if (s("hide", $), F === "close" && s("close", $), $.defaultPrevented) {
        s("hide-prevented"), i.value || (i.value = !0);
        return;
      }
      typeof i.value == "boolean" ? i.value = !1 : (i.value = 0, h());
    }, te = () => {
      P();
    }, ie = () => {
      s("shown", q("shown"));
    }, G = () => {
      s("hidden", q("hidden"));
    };
    return fe(y, (F) => {
      F === !1 && b.value === !1 && i.value && Y();
    }), Ma(h), o({
      pause: B,
      restart: C,
      resume: p,
      stop: h
    }), (F, $) => (m(), O(Et, K({
      "no-fade": n(a).noFade
    }, n(a).transProps, {
      onBeforeEnter: te,
      onAfterEnter: ie,
      onAfterLeave: G
    }), {
      default: I(() => [
        x.value ? (m(), A("div", {
          key: 0,
          id: n(a).id,
          ref_key: "element",
          ref: r,
          class: D(["toast", [n(a).toastClass, V.value]]),
          tabindex: "0",
          role: x.value ? n(a).isStatus ? "status" : "alert" : void 0,
          "aria-live": x.value ? n(a).isStatus ? "polite" : "assertive" : void 0,
          "aria-atomic": x.value ? !0 : void 0
        }, [
          F.$slots.title || n(a).title ? (m(), O(de(n(a).headerTag), {
            key: 0,
            class: "toast-header"
          }, {
            default: I(() => [
              T(F.$slots, "title", { hide: Y }, () => [
                J("strong", Ur, Z(n(a).title), 1)
              ]),
              n(a).noCloseButton ? ee("", !0) : (m(), O(Ft, {
                key: 0,
                onClick: $[0] || ($[0] = (N) => Y("close"))
              }))
            ]),
            _: 3
          })) : ee("", !0),
          F.$slots.default || n(a).body ? (m(), O(de(w.value), K({
            key: 1,
            class: ["toast-body", n(a).bodyClass],
            style: { display: "block" }
          }, n(c), {
            onClick: $[1] || ($[1] = (N) => n(d) ? Y() : () => {
            })
          }), {
            default: I(() => [
              T(F.$slots, "default", { hide: Y }, () => [
                ue(Z(n(a).body), 1)
              ])
            ]),
            _: 3
          }, 16, ["class"])) : ee("", !0),
          typeof i.value == "number" && n(a).progressProps !== void 0 ? (m(), O(en, {
            key: 2,
            animated: n(a).progressProps.animated,
            precision: n(a).progressProps.precision,
            "show-progress": n(a).progressProps.showProgress,
            "show-value": n(a).progressProps.showValue,
            striped: n(a).progressProps.striped,
            variant: n(a).progressProps.variant,
            max: i.value,
            value: n(S),
            height: "4px"
          }, null, 8, ["animated", "precision", "show-progress", "show-value", "striped", "variant", "max", "value"])) : ee("", !0)
        ], 10, Wr)) : ee("", !0)
      ]),
      _: 3
    }, 16, ["no-fade"]));
  }
}), Xr = "top-right", Kr = {
  install(t) {
    const o = bt([]), e = L(!1), l = (r) => {
      e.value = r;
    }, a = (r) => {
      const u = Symbol(), i = _(() => {
        const d = Se(r.props);
        return {
          component: Se(r.component) ?? tn,
          props: {
            ...d,
            pos: (d == null ? void 0 : d.pos) || Xr,
            _modelValue: (d == null ? void 0 : d.value) || 5e3,
            _self: u
          }
        };
      });
      return (i.value.props.appendToast !== void 0 ? i.value.props.appendToast : e.value) ? o.value = [...o.value, i] : o.value = [i, ...o.value], u;
    }, s = (r) => {
      o.value = o.value.filter((u) => u.value.props._self !== r);
    };
    t.provide(Io, {
      _setIsAppend: l,
      toasts: o,
      show: a,
      remove: s
    });
  }
}, Yr = {
  install(t) {
    const o = L([]), e = () => {
      o.value.splice(0, o.value.length);
    };
    t.provide(No, { items: o, reset: e });
  }
}, Zr = {
  install(t, o) {
    (o == null ? void 0 : o.id) instanceof Object && typeof o.id.getId == "function" && t.provide(Lo, o.id.getId);
  }
}, Jr = {
  key: 0,
  class: "visually-hidden"
}, ha = /* @__PURE__ */ z({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: Boolean, default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BSpinner"), l = He(), a = _(() => [
      `spinner-${e.type}`,
      {
        [`spinner-${e.type}-sm`]: e.small,
        [`text-${e.variant}`]: e.variant !== null
      }
    ]), s = k(() => !Ae(l.label));
    return (r, u) => (m(), O(de(n(e).tag), {
      class: D(a.value),
      role: n(e).label || s.value ? n(e).role : null,
      "aria-hidden": n(e).label || s.value ? null : !0
    }, {
      default: I(() => [
        n(e).label || s.value ? (m(), A("span", Jr, [
          T(r.$slots, "label", {}, () => [
            ue(Z(n(e).label), 1)
          ])
        ])) : ee("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), mt = /* @__PURE__ */ z({
  __name: "BButton",
  props: /* @__PURE__ */ ge({
    loading: { type: Boolean, default: !1 },
    loadingFill: { type: Boolean, default: !1 },
    loadingText: { default: "Loading..." },
    pill: { type: Boolean, default: !1 },
    pressed: { type: Boolean },
    size: { default: "md" },
    squared: { type: Boolean, default: !1 },
    tag: { default: "button" },
    type: { default: "button" },
    variant: { default: "secondary" },
    active: { type: Boolean, default: !1 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    routerTag: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  }, {
    pressed: { type: Boolean, default: void 0 },
    pressedModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["click"], ["update:pressed"]),
  setup(t, { emit: o }) {
    const l = M(t, "BButton"), a = o, s = _e(t, "pressed"), { computedLink: r, computedLinkProps: u } = Ct(l, [
      "active-class",
      "exact-active-class",
      "replace",
      "routerComponentName",
      "routerTag"
    ]), i = k(() => typeof l.pressed == "boolean"), d = k(
      () => l.tag === "button" && l.href === void 0 && l.to === void 0
    ), c = k(() => l.to !== void 0), f = k(() => l.href !== void 0 ? !1 : !d.value), g = _(() => c.value ? u.value : []), v = _(() => [
      [`btn-${l.size}`],
      {
        [`btn-${l.variant}`]: l.variant !== null,
        active: l.active || l.pressed,
        "rounded-pill": l.pill,
        "rounded-0": l.squared,
        disabled: l.disabled
      }
    ]), y = k(() => c.value ? st : l.href ? "a" : l.tag), B = (C) => {
      if (l.disabled) {
        C.preventDefault(), C.stopPropagation();
        return;
      }
      a("click", C), i.value && (s.value = !l.pressed);
    };
    return (C, p) => (m(), O(de(y.value), K({ class: "btn" }, g.value, {
      class: v.value,
      "aria-disabled": f.value ? n(l).disabled : null,
      "aria-pressed": i.value ? n(l).pressed : null,
      autocomplete: i.value ? "off" : null,
      disabled: d.value ? n(l).disabled : null,
      href: n(l).href,
      rel: n(r) ? n(l).rel : null,
      role: f.value || n(r) ? "button" : null,
      target: n(r) ? n(l).target : null,
      type: d.value ? n(l).type : null,
      to: d.value ? null : n(l).to,
      onClick: B
    }), {
      default: I(() => [
        n(l).loading ? T(C.$slots, "loading", { key: 0 }, () => [
          n(l).loadingFill ? ee("", !0) : (m(), A(pe, { key: 0 }, [
            ue(Z(n(l).loadingText), 1)
          ], 64)),
          T(C.$slots, "loading-spinner", {}, () => [
            be(ha, {
              small: n(l).size !== "lg",
              label: n(l).loadingFill ? n(l).loadingText : void 0
            }, null, 8, ["small", "label"])
          ])
        ]) : T(C.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to"]));
  }
}), Ba = /* @__PURE__ */ z({
  __name: "BOverlay",
  props: {
    bgColor: { default: void 0 },
    blur: { default: "2px" },
    fixed: { type: Boolean, default: !1 },
    noCenter: { type: Boolean, default: !1 },
    noFade: { type: Boolean, default: !1 },
    noSpinner: { type: Boolean, default: !1 },
    noWrap: { type: Boolean, default: !1 },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    show: { type: Boolean, default: !1 },
    spinnerSmall: { type: Boolean, default: !1 },
    spinnerType: { default: "border" },
    spinnerVariant: { default: void 0 },
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 },
    rounded: { type: [Boolean, String, Number], default: !1 },
    roundedTop: { type: [Boolean, String, Number], default: void 0 },
    roundedBottom: { type: [Boolean, String, Number], default: void 0 },
    roundedStart: { type: [Boolean, String, Number], default: void 0 },
    roundedEnd: { type: [Boolean, String, Number], default: void 0 }
  },
  emits: ["click", "hidden", "shown"],
  setup(t, { emit: o }) {
    const l = M(t, "BOverlay"), a = o, s = { top: 0, left: 0, bottom: 0, right: 0 }, r = ol(() => ({
      rounded: l.rounded,
      roundedTop: l.roundedTop,
      roundedBottom: l.roundedBottom,
      roundedStart: l.roundedStart,
      roundedEnd: l.roundedEnd
    })), u = k(
      () => l.variant !== null && !l.bgColor ? `bg-${l.variant}` : ""
    ), i = k(() => l.show ? !0 : null), d = _(() => ({
      type: l.spinnerType,
      variant: l.spinnerVariant,
      small: l.spinnerSmall
    })), c = _(() => ({
      ...s,
      zIndex: l.zIndex || 10
    })), f = _(() => ({
      "position-absolute": !l.noWrap || !l.fixed,
      "position-fixed": l.noWrap && l.fixed
    })), g = _(() => [u.value, r.value]), v = _(() => ({
      ...s,
      opacity: l.opacity,
      backgroundColor: l.bgColor || void 0,
      backdropFilter: l.blur ? `blur(${l.blur})` : void 0
    })), y = _(
      () => l.noCenter ? s : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (B, C) => (m(), O(de(n(l).wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": i.value
    }, {
      default: I(() => [
        T(B.$slots, "default"),
        be(Et, {
          "no-fade": n(l).noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onAfterEnter: C[1] || (C[1] = (p) => a("shown")),
          onAfterLeave: C[2] || (C[2] = (p) => a("hidden"))
        }, {
          default: I(() => [
            n(l).show ? (m(), O(de(n(l).overlayTag), {
              key: 0,
              class: D(["b-overlay", f.value]),
              style: Le(c.value),
              onClick: C[0] || (C[0] = (p) => a("click", p))
            }, {
              default: I(() => [
                J("div", {
                  class: D(["position-absolute", g.value]),
                  style: Le(v.value)
                }, null, 6),
                J("div", {
                  class: "position-absolute",
                  style: Le(y.value)
                }, [
                  T(B.$slots, "overlay", Be(Ce(d.value)), () => [
                    n(l).noSpinner ? ee("", !0) : (m(), O(ha, Be(K({ key: 0 }, d.value)), null, 16))
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : ee("", !0)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), Qr = ["id", "aria-labelledby", "aria-describedby"], ei = ["id"], Al = 1056, ti = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BModal",
  props: /* @__PURE__ */ ge({
    autoFocus: { type: Boolean, default: !0 },
    autoFocusButton: { default: void 0 },
    body: { default: void 0 },
    backdropVariant: { default: void 0 },
    bodyAttrs: { default: void 0 },
    bodyBgVariant: { default: null },
    bodyClass: { default: null },
    bodyScrolling: { type: Boolean, default: !1 },
    bodyTextVariant: { default: null },
    bodyVariant: { default: null },
    busy: { type: Boolean, default: !1 },
    buttonSize: { default: "md" },
    cancelDisabled: { type: Boolean, default: !1 },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { type: Boolean, default: !1 },
    contentClass: { default: void 0 },
    dialogClass: { default: void 0 },
    footerBgVariant: { default: null },
    footerBorderVariant: { default: null },
    footerClass: { default: void 0 },
    footerTextVariant: { default: null },
    footerVariant: { default: null },
    fullscreen: { type: [Boolean, String], default: !1 },
    headerBgVariant: { default: null },
    headerBorderVariant: { default: null },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    headerTextVariant: { default: null },
    headerVariant: { default: null },
    hideBackdrop: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    hideHeader: { type: Boolean, default: !1 },
    hideHeaderClose: { type: Boolean, default: !1 },
    id: { default: void 0 },
    lazy: { type: Boolean, default: !1 },
    modalClass: { default: void 0 },
    modelValue: { type: Boolean },
    noCloseOnBackdrop: { type: Boolean, default: !1 },
    noCloseOnEsc: { type: Boolean, default: !1 },
    noFade: { type: Boolean, default: !1 },
    okDisabled: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { type: Boolean, default: !1 },
    size: { default: "md" },
    title: { default: void 0 },
    titleClass: { default: void 0 },
    titleSrOnly: { type: Boolean, default: !1 },
    titleTag: { default: "h5" },
    transProps: { default: void 0 },
    teleportDisabled: { default: !1 },
    teleportTo: { default: "body" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["cancel", "close", "hidden", "hide", "hide-prevented", "ok", "show", "show-prevented", "shown"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BModal"), s = e, r = He(), u = we(() => a.id, "modal"), i = _e(t, "modelValue"), d = L(null), c = L(null), f = L(null), g = L(null), v = L(i.value), y = L(!1);
    De(
      "Escape",
      () => {
        X("esc");
      },
      { target: d }
    ), Yo(i, () => a.bodyScrolling);
    const { focused: B } = Fe(d, {
      initialValue: i.value && a.autoFocusButton === void 0
    }), { focused: C } = Fe(c, {
      initialValue: i.value && a.autoFocusButton === "ok"
    }), { focused: p } = Fe(f, {
      initialValue: i.value && a.autoFocusButton === "cancel"
    }), { focused: h } = Fe(g, {
      initialValue: i.value && a.autoFocusButton === "close"
    }), b = _(() => [
      a.modalClass,
      {
        fade: !a.noFade,
        show: v.value
      }
    ]), S = k(
      () => a.lazy === !1 || a.lazy === !0 && y.value === !0 || a.lazy === !0 && i.value === !0
    ), w = k(
      () => a.backdropVariant !== void 0 ? a.backdropVariant : a.hideBackdrop ? "transparent" : "dark"
    ), x = k(() => !Ae(r["header-close"])), V = _(() => [
      a.dialogClass,
      {
        "modal-fullscreen": a.fullscreen === !0,
        [`modal-fullscreen-${a.fullscreen}-down`]: typeof a.fullscreen == "string",
        [`modal-${a.size}`]: a.size !== "md",
        "modal-dialog-centered": a.centered,
        "modal-dialog-scrollable": a.scrollable
      }
    ]), W = ot(() => ({
      bgVariant: a.bodyBgVariant,
      textVariant: a.bodyTextVariant,
      variant: a.bodyVariant
    })), q = _(() => [a.bodyClass, W.value]), P = ot(() => ({
      bgVariant: a.headerBgVariant,
      textVariant: a.headerTextVariant,
      variant: a.headerVariant
    })), Y = _(() => [
      a.headerClass,
      P.value,
      {
        [`border-${a.headerBorderVariant}`]: a.headerBorderVariant !== null
      }
    ]), te = _(() => ({
      variant: x.value ? a.headerCloseVariant : void 0,
      class: a.headerCloseClass
    })), ie = ot(() => ({
      bgVariant: a.footerBgVariant,
      textVariant: a.footerTextVariant,
      variant: a.footerVariant
    })), G = _(() => [
      a.footerClass,
      ie.value,
      {
        [`border-${a.footerBorderVariant}`]: a.footerBorderVariant !== null
      }
    ]), F = _(() => [
      a.titleClass,
      {
        "visually-hidden": a.titleSrOnly
      }
    ]), $ = k(() => a.cancelDisabled || a.busy), N = k(() => a.okDisabled || a.busy), R = (le, H = {}) => new wt(le, {
      cancelable: !1,
      target: d.value || null,
      relatedTarget: null,
      trigger: null,
      ...H,
      componentId: u.value
    });
    fe(i, (le, H) => {
      le !== H && (le === !0 ? E() : X());
    });
    const X = (le = "") => {
      if (le === "backdrop" && a.noCloseOnBackdrop || le === "esc" && a.noCloseOnEsc) {
        s("hide-prevented");
        return;
      }
      const H = R("hide", { cancelable: le !== "", trigger: le });
      if (le === "ok" && s(le, H), le === "cancel" && s(le, H), le === "close" && s(le, H), s("hide", H), H.defaultPrevented) {
        s("hide-prevented"), i.value || (i.value = !0);
        return;
      }
      i.value && (i.value = !1);
    }, E = () => {
      if (v.value)
        return;
      const le = R("show", { cancelable: !0 });
      if (s("show", le), le.defaultPrevented) {
        i.value && (i.value = !1), s("show-prevented");
        return;
      }
      i.value || (i.value = !0);
    }, j = () => {
      a.autoFocus !== !1 && (a.autoFocusButton === "ok" ? C.value = !0 : a.autoFocusButton === "close" ? h.value = !0 : a.autoFocusButton === "cancel" ? p.value = !0 : B.value = !0);
    }, ae = () => {
      E();
    }, re = () => {
      v.value = !0, j(), s("shown", R("shown")), a.lazy === !0 && (y.value = !0);
    }, U = () => {
      v.value = !1;
    }, ne = () => {
      s("hidden", R("hidden")), a.lazy === !0 && (y.value = !1);
    }, { activePosition: ve, activeModalCount: Q } = Rr(v), ce = _(() => ({
      // Make sure that newly opened modals have a higher z-index than currently active ones.
      // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
      //
      // This means inactive modals will already be higher than active ones when opened.
      "z-index": v.value ? Al - (((Q == null ? void 0 : Q.value) ?? 0) - ((ve == null ? void 0 : ve.value) ?? 0)) : Al
    }));
    Te(d, "bv-toggle", () => {
      i.value ? X() : E();
    });
    const oe = _(() => ({
      cancel: () => {
        X("cancel");
      },
      close: () => {
        X("close");
      },
      hide: X,
      ok: () => {
        X("ok");
      },
      visible: i.value
    }));
    return o({
      hide: X,
      id: u,
      show: E
    }), (le, H) => {
      var se;
      return m(), O(_t, {
        to: n(a).teleportTo,
        disabled: n(a).teleportDisabled
      }, [
        be(Et, K({ "no-fade": !0 }, n(a).transProps, {
          "trans-props": { enterToClass: "show", ...(se = n(a).transProps) == null ? void 0 : se.transProps },
          onBeforeEnter: ae,
          onAfterEnter: re,
          onLeave: U,
          onAfterLeave: ne
        }), {
          default: I(() => [
            ct(J("div", K({
              id: n(u),
              ref_key: "element",
              ref: d,
              class: ["modal", b.value],
              role: "dialog",
              "aria-labelledby": n(a).hideHeader ? void 0 : `${n(u)}-label`,
              "aria-describedby": `${n(u)}-body`,
              tabindex: "-1"
            }, le.$attrs, { style: ce.value }), [
              J("div", {
                class: D(["modal-dialog", V.value])
              }, [
                S.value ? (m(), A("div", {
                  key: 0,
                  class: D(["modal-content", n(a).contentClass])
                }, [
                  n(a).hideHeader ? ee("", !0) : (m(), A("div", {
                    key: 0,
                    class: D(["modal-header", Y.value])
                  }, [
                    T(le.$slots, "header", Be(Ce(oe.value)), () => [
                      (m(), O(de(n(a).titleTag), {
                        id: `${n(u)}-label`,
                        class: D(["modal-title", F.value])
                      }, {
                        default: I(() => [
                          T(le.$slots, "title", Be(Ce(oe.value)), () => [
                            ue(Z(n(a).title), 1)
                          ], !0)
                        ]),
                        _: 3
                      }, 8, ["id", "class"])),
                      n(a).hideHeaderClose ? ee("", !0) : (m(), A(pe, { key: 0 }, [
                        x.value ? (m(), O(mt, K({ key: 0 }, te.value, {
                          onClick: H[0] || (H[0] = (ye) => X("close"))
                        }), {
                          default: I(() => [
                            T(le.$slots, "header-close", {}, void 0, !0)
                          ]),
                          _: 3
                        }, 16)) : (m(), O(Ft, K({
                          key: 1,
                          "aria-label": n(a).headerCloseLabel
                        }, te.value, {
                          onClick: H[1] || (H[1] = (ye) => X("close"))
                        }), null, 16, ["aria-label"]))
                      ], 64))
                    ], !0)
                  ], 2)),
                  J("div", K({
                    id: `${n(u)}-body`,
                    class: ["modal-body", q.value]
                  }, n(a).bodyAttrs), [
                    T(le.$slots, "default", Be(Ce(oe.value)), () => [
                      ue(Z(n(a).body), 1)
                    ], !0)
                  ], 16, ei),
                  n(a).hideFooter ? ee("", !0) : (m(), A("div", {
                    key: 1,
                    class: D(["modal-footer", G.value])
                  }, [
                    T(le.$slots, "footer", Be(Ce(oe.value)), () => [
                      T(le.$slots, "cancel", Be(Ce(oe.value)), () => [
                        n(a).okOnly ? ee("", !0) : (m(), O(mt, {
                          key: 0,
                          ref_key: "cancelButton",
                          ref: f,
                          disabled: $.value,
                          size: n(a).buttonSize,
                          variant: n(a).cancelVariant,
                          onClick: H[2] || (H[2] = (ye) => X("cancel"))
                        }, {
                          default: I(() => [
                            ue(Z(n(a).cancelTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant"]))
                      ], !0),
                      T(le.$slots, "ok", Be(Ce(oe.value)), () => [
                        be(mt, {
                          ref_key: "okButton",
                          ref: c,
                          disabled: N.value,
                          size: n(a).buttonSize,
                          variant: n(a).okVariant,
                          onClick: H[3] || (H[3] = (ye) => X("ok"))
                        }, {
                          default: I(() => [
                            ue(Z(n(a).okTitle), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "size", "variant"])
                      ], !0)
                    ], !0)
                  ], 2))
                ], 2)) : ee("", !0)
              ], 2),
              T(le.$slots, "backdrop", {}, () => [
                be(Ba, {
                  variant: w.value,
                  show: i.value,
                  "no-spinner": "",
                  fixed: "",
                  "no-wrap": "",
                  blur: null,
                  onClick: H[4] || (H[4] = (ye) => X("backdrop"))
                }, null, 8, ["variant", "show"])
              ], !0)
            ], 16, Qr), [
              [qt, i.value]
            ])
          ]),
          _: 3
        }, 16, ["trans-props"])
      ], 8, ["to", "disabled"]);
    };
  }
}), nl = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [l, a] of o)
    e[l] = a;
  return e;
}, Ia = /* @__PURE__ */ nl(ti, [["__scopeId", "data-v-d3e62049"]]), ai = {
  install(t) {
    const o = bt([]), e = () => {
      let r = () => {
      };
      return {
        value: new Promise((i) => {
          r = i;
        }),
        resolve: r
      };
    }, l = (r) => {
      const u = e(), i = Symbol();
      return o.value = [
        ...o.value,
        _(() => ({
          component: Se(r.component) ?? Ia,
          props: L({ ...Se(r.props), _isConfirm: !1, _promise: u, _self: i, _modelValue: !0 }).value
        }))
      ], u.value;
    }, a = (r) => {
      const u = e(), i = Symbol();
      return o.value = [
        ...o.value,
        _(() => ({
          component: Se(r.component) ?? Ia,
          props: L({ ...Se(r.props), _isConfirm: !0, _promise: u, _self: i, _modelValue: !0 }).value
        }))
      ], u.value;
    }, s = (r) => {
      o.value = o.value.filter((u) => u.value.props._self !== r);
    };
    t.provide(Eo, {
      modals: o,
      remove: s,
      show: l,
      confirm: a
    });
  }
}, li = {
  install(t) {
    const o = bt([]), e = k(() => o.value.length), l = k(() => o.value[o.value.length - 1]), a = (d) => {
      o.value = [...o.value, d];
    }, s = (d) => {
      o.value = o.value.filter((c) => c.uid !== d.uid);
    }, r = bt([]), u = (d) => {
      r.value = [...r.value, d];
    }, i = (d) => {
      r.value = r.value.filter((c) => c.uid !== d.uid);
    };
    t.provide(Fo, {
      stack: o,
      countStack: e,
      lastStack: l,
      registry: r,
      pushStack: a,
      removeStack: s,
      pushRegistry: u,
      removeRegistry: i
    });
  }
}, oi = {
  install(t, o) {
    var i, d;
    const a = typeof (o == null ? void 0 : o.rtl) == "boolean" ? !1 : ((i = o == null ? void 0 : o.rtl) == null ? void 0 : i.rtlInitial) ?? !1, s = typeof (o == null ? void 0 : o.rtl) == "boolean" ? void 0 : ((d = o == null ? void 0 : o.rtl) == null ? void 0 : d.localeInitial) ?? void 0, r = L(a), u = L(s);
    t.provide(Po, { isRtl: r, locale: u });
  }
}, ni = {
  install(t, o) {
    const e = (o == null ? void 0 : o.components) ?? {};
    t.provide(aa, L(e));
  }
}, si = ["id"], ri = /* @__PURE__ */ z({
  __name: "BAccordion",
  props: /* @__PURE__ */ ge({
    flush: { type: Boolean, default: !1 },
    free: { type: Boolean, default: !1 },
    id: { default: void 0 },
    modelValue: {}
  }, {
    modelValue: {
      default: void 0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = M(t, "BAccordion"), l = _e(t, "modelValue"), a = we(() => e.id, "accordion"), s = _(() => ({
      "accordion-flush": e.flush
    }));
    return Qe(So, {
      openItem: Ke(l),
      free: k(() => e.free),
      setOpenItem: (r) => {
        l.value = r;
      }
    }), (r, u) => (m(), A("div", {
      id: n(a),
      class: D(["accordion", s.value])
    }, [
      T(r.$slots, "default")
    ], 10, si));
  }
}), an = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BCollapse",
  props: /* @__PURE__ */ ge({
    horizontal: { type: Boolean, default: !1 },
    id: { default: void 0 },
    isNav: { type: Boolean, default: !1 },
    modelValue: { type: Boolean },
    skipAnimation: { type: Boolean, default: !1 },
    tag: { default: "div" },
    toggle: { type: Boolean, default: !1 },
    visible: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BCollapse"), s = e, r = (x, V = {}) => new wt(x, {
      cancelable: !1,
      target: d.value || null,
      relatedTarget: null,
      trigger: null,
      ...V,
      componentId: i.value
    }), u = _e(t, "modelValue"), i = we(() => a.id, "collapse"), d = L(null), c = L(!1), f = L(u.value), g = _(() => ({
      show: f.value,
      "navbar-collapse": a.isNav,
      collapsing: c.value,
      closing: f.value && !u.value,
      "collapse-horizontal": a.horizontal
    })), v = () => {
      u.value = !1;
    }, y = () => {
      u.value = !0;
    }, B = () => {
      u.value = !u.value;
    }, C = _(() => ({
      toggle: B,
      show: y,
      hide: v,
      id: i.value,
      visible: u.value
    }));
    let p, h, b = a.skipAnimation;
    const S = () => {
      const x = r("show", { cancelable: !0 });
      if (s("show", x), x.defaultPrevented) {
        s("show-prevented");
        return;
      }
      clearTimeout(h), clearTimeout(p), f.value = !0, !b && (c.value = !0, Ne(() => {
        d.value !== null && (a.horizontal ? d.value.style.width = `${d.value.scrollWidth}px` : d.value.style.height = `${d.value.scrollHeight}px`, p = setTimeout(() => {
          c.value = !1, s("shown"), d.value !== null && (d.value.style.height = "", d.value.style.width = "");
        }, $a(d.value)));
      }));
    }, w = () => {
      const x = r("hide", { cancelable: !0 });
      if (s("hide", x), x.defaultPrevented) {
        s("hide-prevented");
        return;
      }
      if (clearTimeout(p), clearTimeout(h), d.value !== null) {
        if (b) {
          f.value = !1;
          return;
        }
        c.value ? (d.value.style.height = "", d.value.style.width = "") : a.horizontal ? d.value.style.width = `${d.value.scrollWidth}px` : d.value.style.height = `${d.value.scrollHeight}px`, d.value.offsetHeight, c.value = !0, Ne(() => {
          d.value !== null && (d.value.style.height = "", d.value.style.width = "", h = setTimeout(() => {
            f.value = !1, c.value = !1, s("hidden");
          }, $a(d.value)));
        });
      }
    };
    return fe(u, () => {
      u.value ? S() : w();
    }), Ue(() => {
      d.value !== null && !u.value && a.toggle && Ne(() => {
        u.value = !0;
      });
    }), fe(
      () => a.skipAnimation,
      (x) => {
        b = x;
      }
    ), a.visible && (b = !0, u.value = !0, Ne(() => {
      b = a.skipAnimation;
    })), fe(
      () => a.visible,
      (x) => {
        b = !0, x ? y() : v(), Ne(() => {
          b = a.skipAnimation;
        });
      }
    ), Te(d, "bv-toggle", () => {
      u.value = !u.value;
    }), o({
      hide: v,
      isNav: a.isNav,
      show: y,
      toggle: B,
      visible: Ke(f)
    }), Qe(el, {
      id: i,
      hide: v,
      show: y,
      toggle: B,
      visible: Ke(f),
      isNav: k(() => a.isNav)
    }), (x, V) => (m(), A(pe, null, [
      T(x.$slots, "header", Be(Ce(C.value))),
      (m(), O(de(n(a).tag), K({
        id: n(i),
        ref_key: "element",
        ref: d,
        class: ["collapse", g.value],
        "is-nav": n(a).isNav
      }, x.$attrs), {
        default: I(() => [
          T(x.$slots, "default", Be(Ce(C.value)))
        ]),
        _: 3
      }, 16, ["id", "class", "is-nav"])),
      T(x.$slots, "footer", Be(Ce(C.value)))
    ], 64));
  }
}), ii = ["aria-expanded", "aria-controls", "onClick"], ui = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BAccordionItem",
  props: /* @__PURE__ */ ge({
    bodyAttrs: { default: void 0 },
    bodyClass: { default: void 0 },
    buttonAttrs: { default: void 0 },
    buttonClass: { default: void 0 },
    collapseClass: { default: void 0 },
    headerAttrs: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "h2" },
    horizontal: { type: Boolean, default: void 0 },
    id: { default: void 0 },
    isNav: { type: Boolean, default: void 0 },
    modelValue: { type: Boolean },
    tag: { default: void 0 },
    title: { default: void 0 },
    toggle: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: !1 },
    wrapperAttrs: { default: void 0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
  setup(t, { emit: o }) {
    const { class: e, ...l } = jt(), s = M(t, "BAccordionItem"), r = o, u = _e(t, "modelValue"), i = Ve(So, null), d = we(() => s.id, "accordion_item");
    return Ue(() => {
      u.value && !(i != null && i.free.value) && (i == null || i.setOpenItem(d.value)), !u.value && (i == null ? void 0 : i.openItem.value) === d.value && (u.value = !0);
    }), fe(
      () => i == null ? void 0 : i.openItem.value,
      () => u.value = (i == null ? void 0 : i.openItem.value) === d.value && !(i != null && i.free.value)
    ), fe(u, () => {
      u.value && !(i != null && i.free.value) && (i == null || i.setOpenItem(d.value));
    }), (c, f) => (m(), A("div", K({ class: "accordion-item" }, n(s).wrapperAttrs, { class: n(e) }), [
      be(an, K({
        id: n(d),
        modelValue: u.value,
        "onUpdate:modelValue": f[0] || (f[0] = (g) => u.value = g),
        class: ["accordion-collapse", n(s).collapseClass],
        "aria-labelledby": `${n(d)}-heading`
      }, l, {
        tag: n(s).tag,
        toggle: n(s).toggle,
        horizontal: n(s).horizontal,
        visible: n(s).visible,
        "is-nav": n(s).isNav,
        onShow: f[1] || (f[1] = (g) => r("show", g)),
        onShown: f[2] || (f[2] = (g) => r("shown")),
        onHide: f[3] || (f[3] = (g) => r("hide", g)),
        onHidden: f[4] || (f[4] = (g) => r("hidden")),
        onHidePrevented: f[5] || (f[5] = (g) => r("hide-prevented")),
        onShowPrevented: f[6] || (f[6] = (g) => r("show-prevented"))
      }), {
        header: I(({ visible: g, toggle: v }) => [
          (m(), O(de(n(s).headerTag), K({
            id: `${n(d)}-heading`,
            class: ["accordion-header", n(s).headerClass]
          }, n(s).headerAttrs), {
            default: I(() => [
              J("button", K({ class: "accordion-button" }, n(s).buttonAttrs, {
                class: [{ collapsed: !g }, n(s).buttonClass],
                type: "button",
                "aria-expanded": g ? "true" : "false",
                "aria-controls": n(d),
                onClick: v
              }), [
                T(c.$slots, "title", {}, () => [
                  ue(Z(n(s).title), 1)
                ])
              ], 16, ii)
            ]),
            _: 2
          }, 1040, ["id", "class"]))
        ]),
        default: I(() => [
          J("div", K({ class: "accordion-body" }, n(s).bodyAttrs, {
            class: n(s).bodyClass
          }), [
            T(c.$slots, "default")
          ], 16)
        ]),
        _: 3
      }, 16, ["id", "modelValue", "class", "aria-labelledby", "tag", "toggle", "horizontal", "visible", "is-nav"])
    ], 16));
  }
}), di = /* @__PURE__ */ z({
  __name: "BAlert",
  props: /* @__PURE__ */ ge({
    closeClass: { default: void 0 },
    closeContent: { default: void 0 },
    closeLabel: { default: "Close" },
    closeVariant: { default: "secondary" },
    dismissible: { type: Boolean, default: !1 },
    fade: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !0 },
    interval: { default: 1e3 },
    modelValue: { type: [Boolean, Number] },
    noHoverPause: { type: Boolean, default: !1 },
    showOnPause: { type: Boolean, default: !0 },
    variant: { default: "info" }
  }, {
    modelValue: { type: [Boolean, Number], default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["close", "close-countdown", "closed"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BAlert"), s = e, r = He(), u = L(null), i = _e(t, "modelValue"), d = Ja(u), c = he(() => a.interval), f = k(() => !Ae(r.close)), g = k(() => typeof i.value == "boolean" ? 0 : i.value), v = _(() => ({
      [`alert-${a.variant}`]: a.variant !== null,
      "alert-dismissible": a.dismissible
    })), y = _(() => [a.closeClass, { "btn-close-custom": f.value }]), {
      isActive: B,
      pause: C,
      restart: p,
      resume: h,
      stop: b,
      isPaused: S,
      value: w
    } = Ho(g, c, {
      immediate: typeof i.value == "number" && a.immediate
    }), x = k(
      () => typeof i.value == "boolean" ? i.value : B.value || a.showOnPause && S.value
    ), V = _(() => ({
      variant: f.value ? a.closeVariant : void 0,
      class: y.value
    }));
    Pt(() => {
      s("close-countdown", w.value);
    });
    const W = () => {
      s("close"), typeof i.value == "boolean" ? i.value = !1 : (i.value = 0, b()), s("closed");
    }, q = () => {
      a.noHoverPause || C();
    };
    return fe(d, (P) => {
      if (P) {
        q();
        return;
      }
      h();
    }), Ma(b), o({
      pause: C,
      restart: p,
      resume: h,
      stop: b
    }), (P, Y) => (m(), O(Et, {
      "no-fade": !n(a).fade,
      "trans-props": { enterToClass: "show" }
    }, {
      default: I(() => [
        x.value ? (m(), A("div", {
          key: 0,
          ref_key: "element",
          ref: u,
          class: D(["alert", v.value]),
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true"
        }, [
          T(P.$slots, "default", {}, void 0, !0),
          n(a).dismissible ? (m(), A(pe, { key: 0 }, [
            f.value || n(a).closeContent ? (m(), O(mt, K({ key: 0 }, V.value, { onClick: W }), {
              default: I(() => [
                T(P.$slots, "close", {}, () => [
                  ue(Z(n(a).closeContent), 1)
                ], !0)
              ]),
              _: 3
            }, 16)) : (m(), O(Ft, K({
              key: 1,
              "aria-label": n(a).closeLabel
            }, V.value, { onClick: W }), null, 16, ["aria-label"]))
          ], 64)) : ee("", !0)
        ], 2)) : ee("", !0)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
}), ci = /* @__PURE__ */ nl(di, [["__scopeId", "data-v-96a91b13"]]), sl = z({
  name: "ComponentOrEmpty",
  slots: Object,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    to: {
      type: [String, Object],
      default: null
    },
    skip: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, { slots: o, attrs: e }) {
    return () => {
      var l, a, s;
      return t.skip ? (l = o.default) == null ? void 0 : l.call(o) : t.tag === "Teleport" ? Ie(_t, { to: t.to }, [(a = o.default) == null ? void 0 : a.call(o)]) : Ie(t.tag, { ...e }, [(s = o.default) == null ? void 0 : s.call(o)]);
    };
  }
}), ln = /* @__PURE__ */ z({
  __name: "BBadge",
  props: {
    dotIndicator: { type: Boolean, default: !1 },
    pill: { type: Boolean, default: !1 },
    tag: { default: "span" },
    textIndicator: { type: Boolean },
    placement: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(t) {
    const e = M(t, "BBadge"), l = ot(e), { computedLink: a, computedLinkProps: s } = Ct(e, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), r = k(() => a.value ? st : e.tag), u = _(() => {
      const d = e.placement ?? (e.dotIndicator ? "top-end" : void 0);
      return [
        "position-absolute",
        "translate-middle",
        {
          "start-0 top-0": d === "top-start",
          "start-0 top-50": d === "start",
          "start-0 top-100": d === "bottom-start",
          "start-50 top-0": d === "top",
          "start-50 top-100": d === "bottom",
          "start-100 top-0": d === "top-end",
          "start-100 top-50": d === "end",
          "start-100 top-100": d === "bottom-end"
        }
      ];
    }), i = _(() => [
      l.value,
      e.placement !== void 0 || e.dotIndicator === !0 ? u.value : void 0,
      {
        active: e.active,
        disabled: e.disabled,
        "rounded-pill": e.pill,
        "p-2 border border-light rounded-circle": e.dotIndicator,
        "text-decoration-none": a.value
      }
    ]);
    return (d, c) => (m(), O(de(r.value), K({
      class: ["badge", i.value]
    }, n(s)), {
      default: I(() => [
        be(sl, K({
          skip: n(e).dotIndicator !== !0,
          tag: "span"
        }, n(e).dotIndicator ? { class: "visually-hidden" } : {}), {
          default: I(() => [
            T(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["skip"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fi = {
  key: 0,
  class: "b-avatar-custom"
}, vi = {
  key: 1,
  class: "b-avatar-img"
}, pi = ["src", "alt"], Ol = 0.4, mi = /* @__PURE__ */ z({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    badge: { type: [Boolean, String], default: !1 },
    badgeBgVariant: { default: null },
    badgePlacement: { default: "top-end" },
    badgeTextVariant: { default: null },
    badgeVariant: { default: "primary" },
    badgePill: { type: Boolean, default: !1 },
    badgeDotIndicator: { type: Boolean, default: !1 },
    button: { type: Boolean, default: !1 },
    buttonType: { default: "button" },
    size: { default: void 0 },
    square: { type: Boolean, default: !1 },
    src: { default: void 0 },
    text: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [Boolean, String, Number], default: !1 },
    roundedTop: { type: [Boolean, String, Number], default: void 0 },
    roundedBottom: { type: [Boolean, String, Number], default: void 0 },
    roundedStart: { type: [Boolean, String, Number], default: void 0 },
    roundedEnd: { type: [Boolean, String, Number], default: void 0 }
  },
  emits: ["click", "img-error"],
  setup(t, { emit: o }) {
    const e = t, l = o, a = He(), { computedLink: s, computedLinkProps: r } = Ct(e), u = Ve(xo, null), i = ["sm", null, "lg"], d = Ol * 0.7, c = k(() => !Ae(a.default)), f = k(() => !Ae(a.badge)), g = k(() => !!e.badge || e.badge === "" || f.value), v = k(() => (u == null ? void 0 : u.size.value) ?? e.square), y = pa(() => e.size), B = pa(() => u == null ? void 0 : u.size.value), C = _(() => B.value ?? y.value), p = k(() => (u == null ? void 0 : u.variant.value) ?? e.variant), h = k(() => (u == null ? void 0 : u.rounded.value) ?? e.rounded), b = k(() => (u == null ? void 0 : u.roundedTop.value) ?? e.roundedTop), S = k(() => (u == null ? void 0 : u.roundedBottom.value) ?? e.roundedBottom), w = k(() => (u == null ? void 0 : u.roundedStart.value) ?? e.roundedStart), x = k(() => (u == null ? void 0 : u.roundedEnd.value) ?? e.roundedEnd), V = ol(() => ({
      rounded: h.value,
      roundedTop: b.value,
      roundedBottom: S.value,
      roundedStart: w.value,
      roundedEnd: x.value
    })), W = k(() => e.badge === !0 ? "" : e.badge), q = _(() => !W.value && !f.value), P = k(() => (u == null ? void 0 : u.textVariant.value) ?? e.textVariant), Y = k(() => (u == null ? void 0 : u.bgVariant.value) ?? e.bgVariant), te = ot(() => ({
      bgVariant: Y.value,
      textVariant: P.value,
      variant: p.value
    })), ie = _(() => [
      te.value,
      // Square overwrites all else
      v.value === !0 ? void 0 : V.value,
      {
        [`b-avatar-${e.size}`]: !!e.size && i.indexOf(y.value) !== -1,
        [`btn-${p.value}`]: e.button ? p.value !== null : !1,
        badge: !e.button && p.value !== null && c.value,
        btn: e.button,
        // Square is the same as rounded-0 class
        "rounded-0": v.value === !0
      }
    ]), G = _(() => ({
      fontSize: i.indexOf(C.value || null) === -1 ? `calc(${C.value} * ${d})` : ""
    })), F = _(() => {
      const j = i.indexOf(C.value || null) === -1 ? `calc(${C.value} * ${Ol})` : null;
      return j ? { fontSize: j } : {};
    }), $ = _(() => {
      var re;
      const j = ((re = u == null ? void 0 : u.overlapScale) == null ? void 0 : re.value) || 0, ae = C.value && j ? `calc(${C.value} * -${j})` : null;
      return ae ? { marginLeft: ae, marginRight: ae } : {};
    }), N = k(() => s.value ? st : e.button ? "button" : "span"), R = _(() => ({
      ...$.value,
      width: C.value ?? void 0,
      height: C.value ?? void 0
    })), X = (j) => {
      !e.disabled && (s.value || e.button) && l("click", j);
    }, E = (j) => {
      l("img-error", j);
    };
    return (j, ae) => (m(), O(de(N.value), K({
      class: ["b-avatar", ie.value],
      style: R.value
    }, n(r), {
      type: e.button && !n(s) ? e.buttonType : void 0,
      disabled: e.disabled || null,
      onClick: X
    }), {
      default: I(() => [
        c.value ? (m(), A("span", fi, [
          T(j.$slots, "default")
        ])) : e.src ? (m(), A("span", vi, [
          J("img", {
            src: e.src,
            alt: e.alt,
            onError: E
          }, null, 40, pi)
        ])) : e.text ? (m(), A("span", {
          key: 2,
          class: "b-avatar-text",
          style: Le(F.value)
        }, Z(e.text), 5)) : ee("", !0),
        g.value ? (m(), O(ln, {
          key: 3,
          pill: e.badgePill,
          "dot-indicator": e.badgeDotIndicator || q.value,
          variant: e.badgeVariant,
          "bg-variant": e.badgeBgVariant,
          "text-variant": e.badgeTextVariant,
          style: Le(G.value),
          placement: e.badgePlacement
        }, {
          default: I(() => [
            T(j.$slots, "badge", {}, () => [
              ue(Z(W.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["pill", "dot-indicator", "variant", "bg-variant", "text-variant", "style", "placement"])) : ee("", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "type", "disabled"]));
  }
}), bi = /* @__PURE__ */ z({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    size: { default: void 0 },
    square: { type: Boolean, default: !1 },
    tag: { default: "div" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [Boolean, String, Number], default: !1 },
    roundedTop: { type: [Boolean, String, Number], default: void 0 },
    roundedBottom: { type: [Boolean, String, Number], default: void 0 },
    roundedStart: { type: [Boolean, String, Number], default: void 0 },
    roundedEnd: { type: [Boolean, String, Number], default: void 0 }
  },
  setup(t) {
    const e = M(t, "BAvatarGroup"), l = he(() => e.overlap), a = pa(() => e.size), s = k(() => Math.min(Math.max(l.value, 0), 1) / 2), r = _(() => {
      const u = a.value ? `calc(${a.value} * ${s.value})` : null;
      return u ? { paddingLeft: u, paddingRight: u } : {};
    });
    return Qe(xo, {
      overlapScale: s,
      size: k(() => e.size),
      square: k(() => e.square),
      rounded: k(() => e.rounded),
      roundedTop: k(() => e.roundedTop),
      roundedBottom: k(() => e.roundedBottom),
      roundedStart: k(() => e.roundedStart),
      roundedEnd: k(() => e.roundedEnd),
      variant: k(() => e.variant),
      bgVariant: k(() => e.bgVariant),
      textVariant: k(() => e.textVariant)
    }), (u, i) => (m(), O(de(n(e).tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: I(() => [
        J("div", {
          class: "b-avatar-group-inner",
          style: Le(r.value)
        }, [
          T(u.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), on = /* @__PURE__ */ z({
  __name: "BBreadcrumbItem",
  props: {
    ariaCurrent: { default: "location" },
    text: { default: void 0 },
    active: { type: Boolean, default: !1 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BBreadcrumbItem"), a = o, s = _(() => ({
      active: l.active
    })), r = k(() => l.active ? "span" : st), u = k(() => l.active ? l.ariaCurrent : void 0), i = _(
      () => r.value !== "span" ? al(l, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "icon"
      ]) : {}
    ), d = (c) => {
      if (l.disabled || l.active) {
        c.preventDefault(), c.stopImmediatePropagation();
        return;
      }
      l.disabled || a("click", c);
    };
    return (c, f) => (m(), A("li", {
      class: D(["breadcrumb-item", s.value])
    }, [
      (m(), O(de(r.value), K({ "aria-current": u.value }, i.value, { onClick: d }), {
        default: I(() => [
          T(c.$slots, "default", {}, () => [
            ue(Z(n(l).text), 1)
          ])
        ]),
        _: 3
      }, 16, ["aria-current"]))
    ], 2));
  }
}), yi = { "aria-label": "breadcrumb" }, gi = { class: "breadcrumb" }, hi = /* @__PURE__ */ z({
  __name: "BBreadcrumb",
  props: {
    items: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BBreadcrumb"), l = zo(), a = _(() => {
      var i;
      const s = e.items || ((i = l.items) == null ? void 0 : i.value) || [];
      let r = !1;
      return s.map((d, c) => (typeof d == "string" && (d = { text: d }, c < s.length - 1 && (d.href = "#")), d.active && (r = !0), !d.active && !r && (d.active = c + 1 === s.length), d));
    });
    return (s, r) => (m(), A("nav", yi, [
      J("ol", gi, [
        T(s.$slots, "prepend"),
        (m(!0), A(pe, null, ke(a.value, (u, i) => (m(), O(on, K({
          key: i,
          ref_for: !0
        }, u), {
          default: I(() => [
            ue(Z(u.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        T(s.$slots, "default"),
        T(s.$slots, "append")
      ])
    ]));
  }
}), Bi = /* @__PURE__ */ z({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: { default: "md" },
    tag: { default: "div" },
    vertical: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BButtonGroup"), l = _(() => ({
      "btn-group": !e.vertical,
      [`btn-group-${e.size}`]: e.size !== "md",
      "btn-group-vertical": e.vertical
    }));
    return (a, s) => (m(), O(de(n(e).tag), {
      class: D(l.value),
      role: "group",
      "aria-label": n(e).ariaLabel
    }, {
      default: I(() => [
        T(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), _i = ["role", "aria-label"], wi = /* @__PURE__ */ z({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { type: Boolean, default: !1 },
    role: { default: "toolbar" }
  },
  setup(t) {
    const e = M(t, "BButtonToolbar"), l = _(() => ({
      "justify-content-between": e.justify
    }));
    return (a, s) => (m(), A("div", {
      class: D([l.value, "btn-toolbar"]),
      role: n(e).role,
      "aria-label": n(e).ariaLabel
    }, [
      T(a.$slots, "default")
    ], 10, _i));
  }
}), Ci = ["src", "width", "height", "srcset", "sizes", "loading"], rl = /* @__PURE__ */ z({
  __name: "BImg",
  props: {
    blank: { type: Boolean, default: !1 },
    blankColor: { default: "transparent" },
    block: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    fluidGrow: { type: Boolean, default: !1 },
    height: { default: void 0 },
    lazy: { type: Boolean, default: !1 },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    thumbnail: { type: Boolean, default: !1 },
    width: { default: void 0 },
    placement: { default: void 0 },
    rounded: { type: [Boolean, String, Number], default: !1 },
    roundedTop: { type: [Boolean, String, Number], default: void 0 },
    roundedBottom: { type: [Boolean, String, Number], default: void 0 },
    roundedStart: { type: [Boolean, String, Number], default: void 0 },
    roundedEnd: { type: [Boolean, String, Number], default: void 0 }
  },
  setup(t) {
    const e = M(t, "BImg"), l = he(() => e.height ?? NaN), a = he(() => e.width ?? NaN), s = ol(() => ({
      rounded: e.rounded,
      roundedTop: e.roundedTop,
      roundedBottom: e.roundedBottom,
      roundedStart: e.roundedStart,
      roundedEnd: e.roundedEnd
    })), r = _(
      () => typeof e.srcset == "string" ? e.srcset.split(",").filter((v) => v).join(",") : Array.isArray(e.srcset) ? e.srcset.filter((v) => v).join(",") : void 0
    ), u = _(
      () => typeof e.sizes == "string" ? e.sizes.split(",").filter((v) => v).join(",") : Array.isArray(e.sizes) ? e.sizes.filter((v) => v).join(",") : void 0
    ), i = _(() => {
      const v = Number.isNaN(a.value) ? void 0 : a.value, y = Number.isNaN(l.value) ? void 0 : l.value;
      if (e.blank) {
        if (v !== void 0 && y === void 0)
          return { height: v, width: v };
        if (v === void 0 && y !== void 0)
          return { height: y, width: y };
        if (v === void 0 && y === void 0)
          return { height: 1, width: 1 };
      }
      return {
        width: v,
        height: y
      };
    }), d = k(
      () => g(i.value.width, i.value.height, e.blankColor)
    ), c = _(() => ({
      "float-start": e.placement === "start",
      "float-end": e.placement === "end",
      "mx-auto": e.placement === "center"
    })), f = _(() => [
      s.value,
      c.value,
      {
        "img-thumbnail": e.thumbnail,
        "img-fluid": e.fluid || e.fluidGrow,
        "w-100": e.fluidGrow,
        "d-block": e.block || e.placement === "center"
      }
    ]), g = (v, y, B) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${v}" height="${y}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${v} ${y}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${B};"></rect>
    </svg>`)}`;
    return (v, y) => (m(), A("img", {
      class: D(f.value),
      src: n(e).blank ? d.value : n(e).src,
      width: i.value.width || void 0,
      height: i.value.height || void 0,
      srcset: n(e).blank ? void 0 : r.value,
      sizes: n(e).blank ? void 0 : u.value,
      loading: n(e).lazy ? "lazy" : "eager"
    }, null, 10, Ci));
  }
}), il = /* @__PURE__ */ z({
  __name: "BCardImg",
  props: {
    placement: { default: "top" },
    blank: { type: Boolean, default: void 0 },
    blankColor: { default: void 0 },
    block: { type: Boolean, default: void 0 },
    fluid: { type: Boolean, default: void 0 },
    fluidGrow: { type: Boolean, default: void 0 },
    height: { default: void 0 },
    lazy: { type: Boolean, default: void 0 },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    thumbnail: { type: Boolean, default: void 0 },
    width: { default: void 0 },
    rounded: { type: [Boolean, String, Number], default: void 0 },
    roundedTop: { type: [Boolean, String, Number], default: void 0 },
    roundedBottom: { type: [Boolean, String, Number], default: void 0 },
    roundedStart: { type: [Boolean, String, Number], default: void 0 },
    roundedEnd: { type: [Boolean, String, Number], default: void 0 }
  },
  setup(t) {
    const e = M(t, "BCardImg"), l = _(() => ({
      "card-img-top": e.placement === "top",
      // TODO implement this class
      "card-img-end": e.placement === "end",
      "card-img-bottom": e.placement === "bottom",
      // TODO implement this class
      "card-img-start": e.placement === "start",
      "card-img": e.placement === "overlay"
    })), a = _(() => ga(e, ["placement"]));
    return (s, r) => (m(), O(rl, K(a.value, { class: l.value }), null, 16, ["class"]));
  }
}), ki = ["innerHTML"], nn = /* @__PURE__ */ z({
  __name: "BCardHeadFoot",
  props: {
    borderVariant: { default: null },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(t) {
    const o = t, e = ot(o), l = _(() => [
      e.value,
      {
        [`border-${o.borderVariant}`]: o.borderVariant !== null
      }
    ]);
    return (a, s) => (m(), O(de(a.tag), {
      class: D(l.value)
    }, {
      default: I(() => [
        a.html ? (m(), A("div", {
          key: 0,
          innerHTML: a.html
        }, null, 8, ki)) : T(a.$slots, "default", { key: 1 }, () => [
          ue(Z(a.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sn = /* @__PURE__ */ z({
  __name: "BCardHeader",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BCardHeader");
    return (l, a) => (m(), O(nn, K({ class: "card-header" }, n(e)), {
      default: I(() => [
        T(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rn = /* @__PURE__ */ z({
  __name: "BCardTitle",
  props: {
    tag: { default: "h4" },
    text: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BCardTitle");
    return (l, a) => (m(), O(de(n(e).tag), { class: "card-title" }, {
      default: I(() => [
        T(l.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), un = /* @__PURE__ */ z({
  __name: "BCardSubtitle",
  props: {
    text: { default: void 0 },
    tag: { default: "h6" },
    textVariant: { default: "body-secondary" }
  },
  setup(t) {
    const e = M(t, "BCardSubtitle"), l = _(() => ({
      [`text-${e.textVariant}`]: e.textVariant !== null
    }));
    return (a, s) => (m(), O(de(n(e).tag), {
      class: D(["card-subtitle mb-2", l.value])
    }, {
      default: I(() => [
        T(a.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dn = /* @__PURE__ */ z({
  __name: "BCardBody",
  props: {
    overlay: { type: Boolean, default: !1 },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h4" },
    subtitleTextVariant: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(t) {
    const e = M(t, "BCardBody"), l = He(), a = ot(e), s = k(() => !Ae(l.title)), r = k(() => !Ae(l.subtitle)), u = _(() => [
      a.value,
      e.overlay ? "card-img-overlay" : "card-body"
    ]);
    return (i, d) => (m(), O(de(n(e).tag), {
      class: D(u.value)
    }, {
      default: I(() => [
        n(e).title || s.value ? (m(), O(rn, {
          key: 0,
          tag: n(e).titleTag
        }, {
          default: I(() => [
            T(i.$slots, "title", {}, () => [
              ue(Z(n(e).title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : ee("", !0),
        n(e).subtitle || r.value ? (m(), O(un, {
          key: 1,
          tag: n(e).subtitleTag,
          "text-variant": n(e).subtitleTextVariant
        }, {
          default: I(() => [
            T(i.$slots, "subtitle", {}, () => [
              ue(Z(n(e).subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : ee("", !0),
        T(i.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cn = /* @__PURE__ */ z({
  __name: "BCardFooter",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BCardFooter");
    return (l, a) => (m(), O(nn, K({ class: "card-footer" }, n(e)), {
      default: I(() => [
        T(l.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), fn = /* @__PURE__ */ z({
  __name: "BCard",
  props: {
    align: { default: void 0 },
    bodyBgVariant: { default: void 0 },
    bodyClass: { default: void 0 },
    bodyTag: { default: "div" },
    bodyText: { default: "" },
    bodyTextVariant: { default: void 0 },
    borderVariant: { default: null },
    footer: { default: void 0 },
    footerBgVariant: { default: void 0 },
    footerBorderVariant: { default: void 0 },
    footerClass: { default: void 0 },
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: { default: void 0 },
    footerVariant: { default: null },
    header: { default: void 0 },
    headerBgVariant: { default: void 0 },
    headerBorderVariant: { default: void 0 },
    headerClass: { default: void 0 },
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: { default: void 0 },
    headerVariant: { default: null },
    imgAlt: { default: void 0 },
    imgPlacement: { default: "top" },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgWidth: { default: void 0 },
    noBody: { type: Boolean, default: !1 },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "body-secondary" },
    tag: { default: "div" },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(t) {
    const e = M(t, "BCard"), l = He(), a = k(() => !Ae(l.header)), s = k(() => !Ae(l.footer)), r = ot(e), u = _(() => [
      r.value,
      {
        [`text-${e.align}`]: e.align !== void 0,
        [`border-${e.borderVariant}`]: e.borderVariant !== null,
        "flex-row": e.imgPlacement === "start",
        "flex-row-reverse": e.imgPlacement === "end"
      }
    ]), i = _(() => ({
      src: e.imgSrc,
      alt: e.imgAlt,
      height: e.imgHeight,
      width: e.imgWidth,
      placement: e.imgPlacement
    })), d = Rt();
    return (c, f) => (m(), O(de(n(e).tag), {
      class: D(["card", u.value])
    }, {
      default: I(() => [
        be(n(d).define, null, {
          default: I(() => [
            T(c.$slots, "img", {}, () => [
              n(e).imgSrc ? (m(), O(il, Be(K({ key: 0 }, i.value)), null, 16)) : ee("", !0)
            ])
          ]),
          _: 3
        }),
        n(e).imgPlacement !== "bottom" ? (m(), O(n(d).reuse, { key: 0 })) : ee("", !0),
        n(e).header || a.value || n(e).headerHtml ? (m(), O(sn, {
          key: 1,
          "bg-variant": n(e).headerBgVariant,
          variant: n(e).headerVariant,
          "border-variant": n(e).headerBorderVariant,
          html: n(e).headerHtml,
          tag: n(e).headerTag,
          "text-variant": n(e).headerTextVariant,
          class: D(n(e).headerClass)
        }, {
          default: I(() => [
            T(c.$slots, "header", {}, () => [
              ue(Z(n(e).header), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "variant", "border-variant", "html", "tag", "text-variant", "class"])) : ee("", !0),
        n(e).noBody ? T(c.$slots, "default", { key: 3 }, () => [
          ue(Z(n(e).bodyText), 1)
        ]) : (m(), O(dn, {
          key: 2,
          overlay: n(e).imgPlacement === "overlay",
          "bg-variant": n(e).bodyBgVariant,
          tag: n(e).bodyTag,
          "text-variant": n(e).bodyTextVariant,
          subtitle: n(e).subtitle,
          "subtitle-tag": n(e).subtitleTag,
          "subtitle-text-variant": n(e).subtitleTextVariant,
          title: n(e).title,
          "title-tag": n(e).titleTag,
          class: D(n(e).bodyClass)
        }, {
          default: I(() => [
            T(c.$slots, "default", {}, () => [
              ue(Z(n(e).bodyText), 1)
            ])
          ]),
          _: 3
        }, 8, ["overlay", "bg-variant", "tag", "text-variant", "subtitle", "subtitle-tag", "subtitle-text-variant", "title", "title-tag", "class"])),
        n(e).footer || s.value || n(e).footerHtml ? (m(), O(cn, {
          key: 4,
          "bg-variant": n(e).footerBgVariant,
          "border-variant": n(e).footerBorderVariant,
          variant: n(e).footerVariant,
          html: n(e).footerHtml,
          tag: n(e).footerTag,
          "text-variant": n(e).footerTextVariant,
          class: D(n(e).footerClass)
        }, {
          default: I(() => [
            T(c.$slots, "footer", {}, () => [
              ue(Z(n(e).footer), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "border-variant", "variant", "html", "tag", "text-variant", "class"])) : ee("", !0),
        n(e).imgPlacement === "bottom" ? (m(), O(n(d).reuse, { key: 5 })) : ee("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ti = /* @__PURE__ */ z({
  __name: "BCardGroup",
  props: {
    columns: { type: Boolean, default: !1 },
    deck: { type: Boolean, default: !1 },
    tag: { default: "div" }
  },
  setup(t) {
    const e = M(t, "BCardGroup"), l = k(
      () => e.deck ? "card-deck" : e.columns ? "card-columns" : "card-group"
    );
    return (a, s) => (m(), O(de(n(e).tag), {
      class: D(l.value)
    }, {
      default: I(() => [
        T(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $i = /* @__PURE__ */ z({
  __name: "BCardText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BCardText");
    return (l, a) => (m(), O(de(n(e).tag), { class: "card-text" }, {
      default: I(() => [
        T(l.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), xi = ["id"], Si = {
  key: 0,
  class: "carousel-indicators"
}, Vi = ["aria-current", "aria-label", "onClick"], Ai = /* @__PURE__ */ J("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), Oi = { class: "visually-hidden" }, Ii = /* @__PURE__ */ J("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), Pi = { class: "visually-hidden" }, Ni = /* @__PURE__ */ z({
  __name: "BCarousel",
  props: /* @__PURE__ */ ge({
    background: { default: void 0 },
    controls: { type: Boolean, default: !1 },
    controlsNextText: { default: "Next" },
    controlsPrevText: { default: "Previous" },
    fade: { type: Boolean, default: !1 },
    id: { default: void 0 },
    imgHeight: { default: void 0 },
    imgWidth: { default: void 0 },
    indicators: { type: Boolean, default: !1 },
    indicatorsButtonLabel: { default: "Slide" },
    interval: { default: 5e3 },
    keyboard: { type: Boolean, default: !0 },
    modelValue: {},
    noHoverPause: { type: Boolean, default: !1 },
    noTouch: { type: Boolean, default: !1 },
    noWrap: { type: Boolean, default: !1 },
    ride: { type: [Boolean, String], default: !1 },
    rideReverse: { type: Boolean, default: !1 },
    touchThreshold: { default: 50 }
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["slide", "slid"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BCarousel"), s = e, r = He(), u = we(() => a.id, "carousel"), i = _e(t, "modelValue"), d = L(null), c = he(() => a.touchThreshold), f = L(null);
    Ue(() => {
      var re, U;
      f.value = ((U = (re = d.value) == null ? void 0 : re.find((ne) => ne.$el.style.display !== "none")) == null ? void 0 : U.$props.interval) ?? null;
    });
    const g = he(() => f.value ?? a.interval), v = L(!1), y = L(!1), B = L(!0), C = L(null), p = L(null), h = L(i.value), b = Ja(p), S = k(
      () => `carousel-item carousel-item-${B.value ? "prev" : "next"} carousel-item-${B.value ? "end" : "start"}`
    ), w = k(
      () => `carousel-item active carousel-item-${B.value ? "start" : "end"}`
    ), { pause: x, resume: V } = yo(
      () => {
        a.rideReverse ? ie() : G();
      },
      g,
      { immediate: a.ride === "carousel" }
    ), W = k(
      () => a.ride === !0 && y.value === !0 || a.ride === "carousel"
    ), q = _(() => _r(r.default, "BCarouselSlide")), P = _(() => ({ "carousel-fade": a.fade })), Y = (re) => {
      var U;
      return new Wl(re, {
        componentId: u.value,
        cancelable: !1,
        target: p.value,
        direction: B.value ? "right" : "left",
        from: h.value,
        to: i.value,
        relatedTarget: ((U = C.value) == null ? void 0 : U.children[i.value]) ?? null
      });
    }, te = (re) => {
      if (v.value !== !0) {
        if (a.ride === !0 && (y.value = !0), W.value === !0 && V(), B.value = !(re < i.value), re >= q.value.length) {
          if (a.noWrap)
            return;
          i.value = 0;
          return;
        }
        if (re < 0) {
          if (a.noWrap)
            return;
          i.value = q.value.length - 1;
          return;
        }
        h.value = i.value, i.value = re;
      }
    }, ie = () => {
      te(i.value - 1);
    }, G = () => {
      te(i.value + 1);
    }, F = (re) => {
      a.keyboard !== !1 && re();
    }, $ = () => {
      a.noHoverPause || x();
    }, N = () => {
      W.value && V();
    }, { lengthX: R } = vr(p, {
      passive: !0,
      onSwipeStart() {
        a.noTouch !== !0 && x();
      },
      onSwipeEnd() {
        if (a.noTouch === !0)
          return;
        const re = () => {
          W.value !== !1 && V();
        };
        if (R.value >= c.value) {
          G(), re();
          return;
        }
        R.value <= -c.value && (ie(), re());
      }
    }), X = () => {
      s("slide", Y("slide")), v.value = !0;
    }, E = () => {
      s("slid", Y("slid")), v.value = !1;
    }, j = (re) => {
      i.value !== 0 && re.classList.add("carousel-item");
    }, ae = (re) => {
      var U, ne;
      f.value = ((ne = (U = d.value) == null ? void 0 : U.find((ve) => ve.$el === re)) == null ? void 0 : ne.$props.interval) ?? null;
    };
    return De(
      "ArrowLeft",
      () => {
        F(ie);
      },
      { target: p }
    ), De(
      "ArrowRight",
      () => {
        F(G);
      },
      { target: p }
    ), fe(
      () => a.ride,
      () => {
        y.value = !1;
      }
    ), fe(b, (re) => {
      if (re) {
        $();
        return;
      }
      N();
    }), o({
      next: G,
      pause: x,
      prev: ie,
      resume: V
    }), Qe(Co, {
      background: k(() => a.background),
      width: k(() => a.imgWidth),
      height: k(() => a.imgHeight)
    }), (re, U) => (m(), A("div", {
      id: n(u),
      ref_key: "element",
      ref: p,
      class: D(["carousel slide pointer-event", P.value])
    }, [
      n(a).indicators ? (m(), A("div", Si, [
        (m(!0), A(pe, null, ke(q.value.length, (ne, ve) => (m(), A("button", {
          key: ve,
          type: "button",
          "data-bs-target": "",
          class: D(ve === i.value ? "active" : ""),
          "aria-current": ve === i.value ? !0 : void 0,
          "aria-label": `${n(a).indicatorsButtonLabel} ${ve}`,
          onClick: (Q) => te(ve)
        }, null, 10, Vi))), 128))
      ])) : ee("", !0),
      J("div", {
        ref_key: "relatedTarget",
        ref: C,
        class: "carousel-inner"
      }, [
        be(Gl, {
          "enter-from-class": S.value,
          "enter-active-class": S.value,
          "enter-to-class": S.value,
          "leave-from-class": w.value,
          "leave-active-class": w.value,
          "leave-to-class": w.value,
          onBeforeLeave: X,
          onAfterLeave: E,
          onAfterEnter: j,
          onEnter: ae
        }, {
          default: I(() => [
            (m(!0), A(pe, null, ke(q.value, (ne, ve) => ct((m(), O(de(ne), {
              key: ve,
              ref_for: !0,
              ref_key: "slideValues",
              ref: d,
              class: D({ active: ve === i.value && v.value === !1 })
            }, null, 8, ["class"])), [
              [qt, ve === i.value]
            ])), 128))
          ]),
          _: 1
        }, 8, ["enter-from-class", "enter-active-class", "enter-to-class", "leave-from-class", "leave-active-class", "leave-to-class"])
      ], 512),
      n(a).controls ? (m(), A(pe, { key: 1 }, [
        J("button", {
          class: "carousel-control-prev",
          type: "button",
          onClick: ie
        }, [
          Ai,
          J("span", Oi, Z(n(a).controlsPrevText), 1)
        ]),
        J("button", {
          class: "carousel-control-next",
          type: "button",
          onClick: G
        }, [
          Ii,
          J("span", Pi, Z(n(a).controlsNextText), 1)
        ])
      ], 64)) : ee("", !0)
    ], 10, xi));
  }
}), Ei = ["innerHTML"], Fi = { key: 1 }, Li = ["innerHTML"], zi = { key: 1 }, Hi = /* @__PURE__ */ z({
  __name: "BCarouselSlide",
  props: {
    background: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: { default: void 0 },
    id: { default: void 0 },
    imgAlt: { default: void 0 },
    imgBlank: { type: Boolean, default: !1 },
    imgBlankColor: { default: "transparent" },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgSrcset: { default: void 0 },
    imgWidth: { default: void 0 },
    interval: { default: void 0 },
    text: { default: void 0 },
    textHtml: { default: void 0 },
    textTag: { default: "p" }
  },
  setup(t) {
    const e = M(t, "BCarouselSlide"), l = He(), a = Ve(Co, null), s = k(() => e.text || e.textHtml || !Ae(l.text)), r = k(() => e.caption || e.captionHtml || !Ae(l.caption)), u = k(() => s.value || r.value || !Ae(l.default)), i = _(() => ({
      background: `${e.background || (a == null ? void 0 : a.background.value) || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), d = _(() => ({
      "d-none": e.contentVisibleUp !== void 0,
      [`d-${e.contentVisibleUp}-block`]: e.contentVisibleUp !== void 0
    }));
    return (c, f) => (m(), A("div", {
      class: "carousel-item",
      style: Le(i.value)
    }, [
      T(c.$slots, "img", {}, () => {
        var g, v;
        return [
          be(rl, {
            class: "d-block w-100",
            alt: n(e).imgAlt,
            srcset: n(e).imgSrcset,
            src: n(e).imgSrc,
            width: n(e).imgWidth || ((g = n(a)) == null ? void 0 : g.width.value),
            height: n(e).imgHeight || ((v = n(a)) == null ? void 0 : v.height.value),
            blank: n(e).imgBlank,
            "blank-color": n(e).imgBlankColor
          }, null, 8, ["alt", "srcset", "src", "width", "height", "blank", "blank-color"])
        ];
      }),
      u.value ? (m(), O(de(n(e).contentTag), {
        key: 0,
        class: D(["carousel-caption", d.value])
      }, {
        default: I(() => [
          r.value ? (m(), O(de(n(e).captionTag), { key: 0 }, {
            default: I(() => [
              T(c.$slots, "caption", {}, () => [
                n(e).captionHtml ? (m(), A("span", {
                  key: 0,
                  innerHTML: n(e).captionHtml
                }, null, 8, Ei)) : (m(), A("span", Fi, Z(n(e).caption), 1))
              ])
            ]),
            _: 3
          })) : ee("", !0),
          s.value ? (m(), O(de(n(e).textTag), { key: 1 }, {
            default: I(() => [
              T(c.$slots, "text", {}, () => [
                n(e).textHtml ? (m(), A("span", {
                  key: 0,
                  innerHTML: n(e).textHtml
                }, null, 8, Li)) : (m(), A("span", zi, Z(n(e).text), 1))
              ])
            ]),
            _: 3
          })) : ee("", !0),
          T(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : ee("", !0)
    ], 4));
  }
}), zt = /* @__PURE__ */ z({
  __name: "BCol",
  props: {
    alignSelf: { default: void 0 },
    tag: { default: "div" },
    order: { default: void 0 },
    offset: { default: void 0 },
    cols: { default: void 0 },
    col: { type: Boolean, default: !1 },
    offsetSm: { default: void 0 },
    offsetMd: { default: void 0 },
    offsetLg: { default: void 0 },
    offsetXl: { default: void 0 },
    offsetXxl: { default: void 0 },
    orderSm: { default: void 0 },
    orderMd: { default: void 0 },
    orderLg: { default: void 0 },
    orderXl: { default: void 0 },
    orderXxl: { default: void 0 },
    sm: { type: [Boolean, Number, String], default: !1 },
    md: { type: [Boolean, Number, String], default: !1 },
    lg: { type: [Boolean, Number, String], default: !1 },
    xl: { type: [Boolean, Number, String], default: !1 },
    xxl: { type: [Boolean, Number, String], default: !1 }
  },
  setup(t) {
    const e = M(t, "BCol"), l = _(() => [
      ...Qt(
        {
          sm: e.sm,
          md: e.md,
          lg: e.lg,
          xl: e.xl,
          xxl: e.xxl
        },
        ["sm", "md", "lg", "xl", "xxl"],
        "col"
      ),
      ...Qt(
        {
          order: e.order,
          orderLg: e.orderLg,
          orderMd: e.orderMd,
          orderSm: e.orderSm,
          orderXl: e.orderXl,
          orderXxl: e.orderXxl
        },
        ["order", "orderLg", "orderMd", "orderSm", "orderXl", "orderXxl"],
        "order"
      ),
      ...Qt(
        {
          offset: e.offset,
          offsetLg: e.offsetLg,
          offsetMd: e.offsetMd,
          offsetSm: e.offsetSm,
          offsetXl: e.offsetXl,
          offsetXxl: e.offsetXxl
        },
        ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXxl"],
        "offset"
      )
    ]), a = _(() => [
      l.value,
      {
        col: e.col || !l.value.some((s) => s.startsWith("col-")) && !e.cols,
        [`col-${e.cols}`]: e.cols !== void 0,
        [`offset-${e.offset}`]: e.offset !== void 0,
        [`order-${e.order}`]: e.order !== void 0,
        [`align-self-${e.alignSelf}`]: e.alignSelf !== void 0
      }
    ]);
    return (s, r) => (m(), O(de(n(e).tag), {
      class: D(a.value)
    }, {
      default: I(() => [
        T(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mi = /* @__PURE__ */ z({
  __name: "BContainer",
  props: {
    fluid: { type: [Boolean, String], default: !1 },
    gutterX: { default: void 0 },
    gutterY: { default: void 0 },
    tag: { default: "div" }
  },
  setup(t) {
    const e = M(t, "BContainer"), l = _(() => ({
      container: e.fluid === !1,
      "container-fluid": e.fluid === !0,
      [`container-${e.fluid}`]: typeof e.fluid == "string",
      [`gx-${e.gutterX}`]: e.gutterX !== void 0,
      [`gy-${e.gutterY}`]: e.gutterY !== void 0
    }));
    return (a, s) => (m(), O(de(n(e).tag), {
      class: D(l.value)
    }, {
      default: I(() => [
        T(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ri = { class: "visually-hidden" }, Di = ["aria-labelledby", "role"], vn = /* @__PURE__ */ z({
  __name: "BDropdown",
  props: /* @__PURE__ */ ge({
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: !0 },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dropend: { type: Boolean, default: !1 },
    dropstart: { type: Boolean, default: !1 },
    dropup: { type: Boolean, default: !1 },
    end: { type: Boolean, default: !1 },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 },
    menuClass: { default: void 0 },
    modelValue: { type: Boolean },
    noCaret: { type: Boolean, default: !1 },
    noFlip: { type: Boolean, default: !1 },
    noShift: { type: Boolean, default: !1 },
    noSize: { type: Boolean, default: !1 },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: Boolean, default: !1 },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: Boolean, default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" },
    teleportDisabled: { default: !1 },
    teleportTo: { default: void 0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BDropdown"), s = e, r = we(() => a.id, "dropdown"), u = _e(t, "modelValue"), i = k(
      () => typeof a.offset == "string" || typeof a.offset == "number" ? a.offset : NaN
    ), d = he(i), c = L(null), f = L(null), g = L(null), v = L(null), y = _(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), B = _(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), C = k(() => a.split ? f.value : g.value);
    De(
      "Escape",
      () => {
        u.value = !u.value;
      },
      { target: C }
    ), De(
      "Escape",
      () => {
        u.value = !u.value;
      },
      { target: c }
    );
    const p = (F, $) => {
      var R, X, E, j, ae, re, U;
      if ((X = c.value) != null && X.contains((R = F.target) == null ? void 0 : R.closest("form")) || /input|select|option|textarea|form/i.test((E = F.target) == null ? void 0 : E.tagName))
        return;
      if (F.preventDefault(), !u.value) {
        open(), Ne(() => p(F, $));
        return;
      }
      const N = (j = c.value) == null ? void 0 : j.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)");
      if (N)
        if ((ae = c.value) != null && ae.contains(document.activeElement)) {
          const ne = c.value.querySelector(".dropdown-item:focus"), ve = Array.prototype.indexOf.call(N, ne) + $;
          ve >= 0 && ve < (N == null ? void 0 : N.length) && ((re = N[ve]) == null || re.focus());
        } else
          (U = N[$ === -1 ? N.length - 1 : 0]) == null || U.focus();
    };
    De("ArrowUp", (F) => p(F, -1), { target: C }), De("ArrowDown", (F) => p(F, 1), { target: C }), De("ArrowUp", (F) => p(F, -1), { target: c }), De("ArrowDown", (F) => p(F, 1), { target: c });
    const h = _(
      () => hr({
        top: a.dropup,
        start: a.dropstart,
        end: a.dropend,
        alignCenter: a.center,
        alignEnd: a.end
      })
    ), b = L({}), S = _(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const F = typeof a.offset == "string" || typeof a.offset == "number" ? d.value : a.offset, $ = [Zl(F)];
      return a.noFlip === !1 && $.push(
        ro({
          boundary: y.value,
          rootBoundary: B.value,
          padding: a.boundaryPadding
        })
      ), a.noShift === !1 && $.push(
        so({
          boundary: y.value,
          rootBoundary: B.value,
          padding: a.boundaryPadding
        })
      ), a.noSize === !1 && $.push(
        io({
          boundary: y.value,
          rootBoundary: B.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: N, availableHeight: R }) {
            b.value = {
              maxHeight: R && u.value ? `${R}px` : void 0,
              maxWidth: N && u.value ? `${N}px` : void 0
            };
          }
        })
      ), $;
    }), { update: w, floatingStyles: x } = co(C, c, {
      placement: h,
      middleware: S,
      strategy: k(() => a.strategy),
      whileElementsMounted: no
    }), V = _(() => ({
      dropup: a.dropup,
      dropend: a.dropend,
      dropstart: a.dropstart,
      "position-static": a.boundary !== "clippingAncestors" && !a.isNav
    })), W = _(() => [
      a.split ? a.splitClass : a.toggleClass,
      {
        "nav-link": a.isNav,
        "dropdown-toggle": !a.split,
        "dropdown-toggle-no-caret": a.noCaret && !a.split,
        show: a.split ? void 0 : u.value
      }
    ]), q = () => {
      G();
    }, P = (F) => {
      a.split ? s("click", F) : q();
    };
    go(
      c,
      () => {
        u.value && (a.autoClose === !0 || a.autoClose === "outside") && G();
      },
      { ignore: [f, g] }
    );
    const Y = () => {
      u.value && (a.autoClose === !0 || a.autoClose === "inside") && G();
    }, te = () => {
      u.value && G();
    }, ie = () => {
      u.value || G();
    }, G = () => {
      var N;
      s("toggle");
      const F = u.value, $ = new wt(F ? "hide" : "show");
      if (s(F ? "hide" : "show", $), $.defaultPrevented) {
        s(F ? "hide-prevented" : "show-prevented");
        return;
      }
      u.value = !F, s(F ? "hidden" : "shown"), (N = v.value) == null || N.dispatchEvent(new Event("forceHide"));
    };
    return fe(u, () => {
      w();
    }), o({
      hide: te,
      show: ie,
      toggle: G
    }), Qe(Oo, {
      id: r,
      show: ie,
      hide: te,
      toggle: G,
      visible: k(() => u.value),
      isNav: k(() => a.isNav)
    }), (F, $) => (m(), A("div", {
      ref_key: "wrapper",
      ref: v,
      class: D([V.value, "btn-group"])
    }, [
      be(mt, {
        id: n(r),
        ref_key: "splitButton",
        ref: g,
        variant: n(a).splitVariant || n(a).variant,
        size: n(a).size,
        class: D(W.value),
        disabled: n(a).splitDisabled || n(a).disabled,
        type: n(a).splitButtonType,
        "aria-label": n(a).ariaLabel,
        "aria-expanded": n(a).split ? void 0 : u.value,
        "aria-haspopup": n(a).split ? void 0 : "menu",
        href: n(a).split ? n(a).splitHref : void 0,
        to: n(a).split && n(a).splitTo ? n(a).splitTo : void 0,
        onClick: P
      }, {
        default: I(() => [
          T(F.$slots, "button-content", {}, () => [
            ue(Z(n(a).text), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "variant", "size", "class", "disabled", "type", "aria-label", "aria-expanded", "aria-haspopup", "href", "to"]),
      n(a).split ? (m(), O(mt, {
        key: 0,
        ref_key: "button",
        ref: f,
        variant: n(a).variant,
        size: n(a).size,
        disabled: n(a).disabled,
        class: D([[n(a).toggleClass, { show: u.value }], "dropdown-toggle-split dropdown-toggle"]),
        "aria-expanded": u.value,
        "aria-haspopup": "menu",
        onClick: q
      }, {
        default: I(() => [
          J("span", Ri, [
            T(F.$slots, "toggle-text", {}, () => [
              ue(Z(n(a).toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled", "class", "aria-expanded"])) : ee("", !0),
      (m(), O(_t, {
        to: n(a).teleportTo,
        disabled: !n(a).teleportTo || n(a).teleportDisabled
      }, [
        !n(a).lazy || u.value ? ct((m(), A("ul", {
          key: 0,
          ref_key: "floating",
          ref: c,
          style: Le([n(x), b.value]),
          class: D(["dropdown-menu overflow-auto", [n(a).menuClass, { show: u.value }]]),
          "aria-labelledby": n(r),
          role: n(a).role,
          onClick: Y
        }, [
          T(F.$slots, "default", {
            hide: te,
            show: ie
          })
        ], 14, Di)), [
          [qt, n(a).lazy || u.value]
        ]) : ee("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), ji = { role: "presentation" }, qi = /* @__PURE__ */ z({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(t) {
    const e = M(t, "BDropdownDivider");
    return (l, a) => (m(), A("li", ji, [
      (m(), O(de(n(e).tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), Gi = { role: "presentation" }, Wi = /* @__PURE__ */ z({
  __name: "BDropdownForm",
  setup(t) {
    return (o, e) => (m(), A("li", Gi, [
      J("form", K({ class: "dropdown-item-text" }, o.$attrs), [
        T(o.$slots, "default")
      ], 16)
    ]));
  }
}), Ui = { role: "presentation" }, Xi = ["id", "aria-describedby"], Ki = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BDropdownGroup",
  props: {
    ariaDescribedby: { default: void 0 },
    header: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "header" },
    headerVariant: { default: null },
    id: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BDropdownGroup"), l = k(() => e.id ? `${e.id}_group_dd_header` : void 0), a = k(() => e.headerTag === "header" ? void 0 : "heading"), s = _(() => [
      e.headerClass,
      {
        [`text-${e.headerVariant}`]: e.headerVariant !== null
      }
    ]);
    return (r, u) => (m(), A("li", Ui, [
      (m(), O(de(n(e).headerTag), {
        id: l.value,
        class: D(["dropdown-header", s.value]),
        role: a.value
      }, {
        default: I(() => [
          T(r.$slots, "header", {}, () => [
            ue(Z(n(e).header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      J("ul", K({
        id: n(e).id,
        role: "group",
        class: "list-unstyled"
      }, r.$attrs, {
        "aria-describedby": n(e).ariaDescribedby || l.value
      }), [
        T(r.$slots, "default")
      ], 16, Xi)
    ]));
  }
}), Yi = { class: "dropdown-header" }, Zi = /* @__PURE__ */ z({
  __name: "BDropdownHeader",
  setup(t) {
    return (o, e) => (m(), A("li", null, [
      J("h6", Yi, [
        T(o.$slots, "default")
      ])
    ]));
  }
}), Ji = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BDropdownItem",
  props: {
    linkClass: { default: void 0 },
    wrapperAttrs: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: null }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BDropdownItem"), a = o, { class: s, ...r } = jt(), { computedLink: u, computedLinkProps: i } = Ct(l), d = _(() => [
      l.linkClass,
      {
        active: l.active,
        disabled: l.disabled,
        [`text-${l.variant}`]: l.variant !== null
      }
    ]), c = k(() => u.value ? st : l.href ? "a" : "button"), f = Ve(el, null), g = Ve(Oo, null), v = Ve(tl, null), y = (B) => {
      var C, p, h;
      a("click", B), v !== null && ((C = v == null ? void 0 : v.autoClose) == null ? void 0 : C.value) === !0 && ((p = f == null ? void 0 : f.hide) == null || p.call(f)), (h = g == null ? void 0 : g.hide) == null || h.call(g);
    };
    return (B, C) => (m(), A("li", K({
      role: "presentation",
      class: n(s)
    }, n(l).wrapperAttrs), [
      (m(), O(de(c.value), K({
        class: ["dropdown-item", d.value],
        disabled: n(l).disabled,
        "aria-disabled": n(l).disabled ? !0 : null,
        "aria-current": n(l).active ? !0 : null,
        href: c.value === "a" ? n(l).href : null,
        rel: n(l).rel,
        role: "menuitem",
        type: c.value === "button" ? "button" : null,
        target: n(l).target
      }, { ...n(i), ...r }, { onClick: y }), {
        default: I(() => [
          T(B.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "disabled", "aria-disabled", "aria-current", "href", "rel", "type", "target"]))
    ], 16));
  }
}), Qi = { role: "presentation" }, eu = ["disabled"], tu = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BDropdownItemButton",
  props: {
    active: { type: Boolean, default: !1 },
    activeClass: { default: "active" },
    buttonClass: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    variant: { default: null }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BDropdownItemButton"), a = o, s = _(() => [
      l.buttonClass,
      {
        [l.activeClass]: l.active,
        disabled: l.disabled,
        [`text-${l.variant}`]: l.variant !== null
      }
    ]), r = (u) => {
      a("click", u);
    };
    return (u, i) => (m(), A("li", Qi, [
      J("button", {
        role: "menu",
        type: "button",
        class: D(["dropdown-item", s.value]),
        disabled: n(l).disabled,
        onClick: r
      }, [
        T(u.$slots, "default")
      ], 10, eu)
    ]));
  }
}), au = { role: "presentation" }, lu = /* @__PURE__ */ z({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(t) {
    const e = M(t, "BDropdownText");
    return (l, a) => (m(), A("li", au, [
      J("span", K({ class: "dropdown-item-text" }, l.$attrs), [
        T(l.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ], 16)
    ]));
  }
}), ou = ["id", "novalidate"], pn = /* @__PURE__ */ z({
  __name: "BForm",
  props: {
    floating: { type: Boolean, default: !1 },
    id: { default: void 0 },
    novalidate: { type: Boolean, default: !1 },
    validated: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BForm"), s = e, r = L(null), u = _(() => ({
      "form-floating": a.floating,
      "was-validated": a.validated
    })), i = (d) => {
      s("submit", d);
    };
    return o({
      element: r
    }), (d, c) => (m(), A("form", {
      id: n(a).id,
      ref_key: "element",
      ref: r,
      novalidate: n(a).novalidate,
      class: D(u.value),
      onSubmit: pt(i, ["prevent"])
    }, [
      T(d.$slots, "default")
    ], 42, ou));
  }
}), nu = { class: "form-floating" }, su = ["for"], ru = /* @__PURE__ */ z({
  __name: "BFormFloatingLabel",
  props: {
    label: { default: void 0 },
    labelFor: { default: void 0 },
    text: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BFormFloatingLabel");
    return (l, a) => (m(), A("div", nu, [
      T(l.$slots, "default", {}, () => [
        ue(Z(n(e).text), 1)
      ]),
      J("label", {
        for: n(e).labelFor
      }, [
        T(l.$slots, "label", {}, () => [
          ue(Z(n(e).label), 1)
        ])
      ], 8, su)
    ]));
  }
}), Pa = /* @__PURE__ */ z({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: Boolean, default: !1 },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BFormInvalidFeedback"), l = k(() => e.forceShow === !0 || e.state === !1), a = _(() => ({
      "d-block": l.value,
      "invalid-feedback": !e.tooltip,
      "invalid-tooltip": e.tooltip
    }));
    return (s, r) => (m(), O(de(n(e).tag), {
      id: n(e).id,
      role: n(e).role,
      "aria-live": n(e).ariaLive,
      "aria-atomic": n(e).ariaLive ? !0 : void 0,
      class: D(a.value)
    }, {
      default: I(() => [
        T(s.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), la = /* @__PURE__ */ z({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = M(t, "BFormRow");
    return (l, a) => (m(), O(de(n(e).tag), { class: "row d-flex flex-wrap" }, {
      default: I(() => [
        T(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Na = /* @__PURE__ */ z({
  __name: "BFormText",
  props: {
    id: { default: void 0 },
    inline: { type: Boolean, default: !1 },
    tag: { default: "small" },
    text: { default: void 0 },
    textVariant: { default: "body-secondary" }
  },
  setup(t) {
    const e = M(t, "BFormText"), l = _(() => ({
      [`text-${e.textVariant}`]: e.textVariant !== null,
      "form-text": !e.inline
    }));
    return (a, s) => (m(), O(de(n(e).tag), {
      id: n(e).id,
      class: D(l.value)
    }, {
      default: I(() => [
        T(a.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Ea = /* @__PURE__ */ z({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: Boolean, default: !1 },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BFormInvalidFeedback"), l = k(() => e.forceShow === !0 || e.state === !0), a = _(() => ({
      "d-block": l.value,
      "valid-feedback": !e.tooltip,
      "valid-tooltip": e.tooltip
    }));
    return (s, r) => (m(), O(de(n(e).tag), {
      id: n(e).id,
      role: n(e).role,
      "aria-live": n(e).ariaLive,
      "aria-atomic": n(e).ariaLive ? !0 : void 0,
      class: D(a.value)
    }, {
      default: I(() => [
        T(s.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), iu = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "true-value", "false-value", "indeterminate"], uu = ["for"], mn = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BFormCheckbox",
  props: /* @__PURE__ */ ge({
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    button: { type: Boolean, default: !1 },
    buttonGroup: { type: Boolean, default: !1 },
    buttonVariant: { default: null },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    indeterminate: { type: Boolean },
    inline: { type: Boolean, default: !1 },
    modelValue: { type: [Array, Set, String, Boolean, Object, Number, null] },
    name: { default: void 0 },
    plain: { type: Boolean, default: !1 },
    required: { type: Boolean, default: void 0 },
    reverse: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    switch: { type: Boolean, default: !1 },
    uncheckedValue: { type: [Array, Set, String, Boolean, Object, Number, null], default: !1 },
    value: { type: [String, Boolean, Array, Set, Object, Number, null], default: !0 }
  }, {
    modelValue: { type: [Array, Set, String, Boolean, Object, Number, null], default: void 0 },
    modelModifiers: {},
    indeterminate: { type: Boolean, default: !1 },
    indeterminateModifiers: {}
  }),
  emits: ["update:modelValue", "update:indeterminate"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormCheckbox"), a = He(), s = _e(t, "modelValue"), r = _e(t, "indeterminate"), u = we(() => l.id, "form-check"), i = Ve(Vo, null), d = L(null), { focused: c } = Fe(d, {
      initialValue: l.autofocus
    }), f = k(() => !Ae(a.default)), g = _({
      get: () => (i == null ? void 0 : i.modelValue.value) ?? s.value,
      set: (b) => {
        if (b !== void 0) {
          if (r.value = !1, i !== null && Array.isArray(b)) {
            i.modelValue.value = b;
            return;
          }
          s.value = b;
        }
      }
    }), v = k(
      () => !!(l.name ?? (i == null ? void 0 : i.name.value)) && (l.required || (i == null ? void 0 : i.required.value))
    ), y = k(() => l.buttonGroup || ((i == null ? void 0 : i.buttons.value) ?? !1)), B = _(() => ({
      plain: l.plain || ((i == null ? void 0 : i.plain.value) ?? !1),
      button: l.button || ((i == null ? void 0 : i.buttons.value) ?? !1),
      inline: l.inline || ((i == null ? void 0 : i.inline.value) ?? !1),
      reverse: l.reverse || ((i == null ? void 0 : i.reverse.value) ?? !1),
      switch: l.switch || ((i == null ? void 0 : i.switch.value) ?? !1),
      state: l.state || (i == null ? void 0 : i.state.value),
      size: l.size ?? (i == null ? void 0 : i.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: l.buttonVariant ?? (i == null ? void 0 : i.buttonVariant.value) ?? "secondary",
      // This is where the true default is made
      hasDefaultSlot: f.value
    })), C = Do(B), p = jo(B), h = qo(B);
    return o({
      blur: () => {
        c.value = !1;
      },
      element: d,
      focus: () => {
        c.value = !0;
      }
    }), (b, S) => (m(), O(sl, {
      skip: y.value,
      class: D(n(C))
    }, {
      default: I(() => {
        var w, x, V;
        return [
          ct(J("input", K({ id: n(u) }, b.$attrs, {
            ref_key: "input",
            ref: d,
            "onUpdate:modelValue": S[0] || (S[0] = (W) => g.value = W),
            class: n(p),
            type: "checkbox",
            disabled: n(l).disabled || ((w = n(i)) == null ? void 0 : w.disabled.value),
            required: v.value || void 0,
            name: n(l).name || ((x = n(i)) == null ? void 0 : x.name.value),
            form: n(l).form || ((V = n(i)) == null ? void 0 : V.form.value),
            "aria-label": n(l).ariaLabel,
            "aria-labelledby": n(l).ariaLabelledby,
            "aria-required": v.value || void 0,
            value: n(l).value,
            "true-value": n(l).value,
            "false-value": n(l).uncheckedValue,
            indeterminate: n(l).indeterminate
          }), null, 16, iu), [
            [Nn, g.value]
          ]),
          f.value || n(l).plain === !1 ? (m(), A("label", {
            key: 0,
            for: n(u),
            class: D(n(h))
          }, [
            T(b.$slots, "default")
          ], 10, uu)) : ee("", !0)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
}), du = ["id"], cu = ["innerHTML"], fu = /* @__PURE__ */ z({
  __name: "BFormCheckboxGroup",
  props: /* @__PURE__ */ ge({
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: {},
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    reverse: { type: Boolean, default: !1 },
    size: { default: "md" },
    stacked: { type: Boolean, default: !1 },
    state: { type: [Boolean, null], default: null },
    switches: { type: Boolean, default: !1 },
    textField: { default: "text" },
    validated: { type: Boolean, default: !1 },
    valueField: { default: "value" }
  }, {
    modelValue: {
      default: () => []
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormCheckboxGroup"), a = _e(t, "modelValue"), s = we(() => l.id, "checkbox"), r = we(() => l.name, "checkbox"), u = L(null), { focused: i } = Fe(u, {
      initialValue: l.autofocus
    });
    Qe(Vo, {
      modelValue: a,
      switch: k(() => l.switches),
      buttonVariant: k(() => l.buttonVariant),
      form: k(() => l.form),
      name: r,
      state: k(() => l.state),
      plain: k(() => l.plain),
      size: k(() => l.size),
      inline: k(() => !l.stacked),
      reverse: k(() => l.reverse),
      required: k(() => l.required),
      buttons: k(() => l.buttons),
      disabled: k(() => l.disabled)
    });
    const d = _(
      () => l.options.map(
        (v, y) => typeof v == "string" || typeof v == "number" ? {
          props: {
            value: v,
            disabled: l.disabled
          },
          text: v.toString(),
          html: void 0,
          self: Symbol(`checkboxGroupOptionItem${y}`)
        } : {
          props: {
            value: v[l.valueField],
            disabled: v[l.disabledField],
            ...v.props ? v.props : {}
          },
          text: v[l.textField],
          html: v[l.htmlField],
          self: Symbol(`checkboxGroupOptionItem${y}`)
        }
      )
    ), c = _(() => ({
      required: l.required,
      ariaInvalid: l.ariaInvalid,
      state: l.state,
      validated: l.validated,
      buttons: l.buttons,
      stacked: l.stacked,
      size: l.size
    })), f = Go(c), g = Wo(c);
    return o({
      blur: () => {
        i.value = !1;
      },
      focus: () => {
        i.value = !0;
      }
    }), (v, y) => (m(), A("div", K(n(f), {
      id: n(s),
      ref_key: "element",
      ref: u,
      role: "group",
      class: [n(g), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      T(v.$slots, "first"),
      (m(!0), A(pe, null, ke(d.value, (B) => (m(), O(mn, K({
        key: B.self,
        ref_for: !0
      }, B.props), {
        default: I(() => [
          B.html ? (m(), A("span", {
            key: 0,
            innerHTML: B.html
          }, null, 8, cu)) : (m(), A(pe, { key: 1 }, [
            ue(Z(B.text), 1)
          ], 64))
        ]),
        _: 2
      }, 1040))), 128)),
      T(v.$slots, "default")
    ], 16, du));
  }
}), vu = ["for"], pu = ["for"], mu = { class: "input-group form-input-file" }, bu = ["id", "form", "name", "multiple", "disabled", "capture", "accept", "required", "aria-label", "aria-labelledby", "aria-required", "directory", "webkitdirectory"], yu = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BFormFile",
  props: /* @__PURE__ */ ge({
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    accept: { default: "" },
    autofocus: { type: Boolean, default: !1 },
    browserText: { default: "Choose" },
    capture: { type: [Boolean, String], default: !1 },
    directory: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    label: { default: "" },
    labelClass: { default: void 0 },
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    name: { default: void 0 },
    noDrop: { type: Boolean, default: !1 },
    noTraverse: { type: Boolean, default: !1 },
    placement: { default: "start" },
    required: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const e = He(), a = M(t, "BFormFile"), s = _e(t, "modelValue"), r = we(() => a.id), u = kt(() => a.state), i = L(null), { focused: d } = Fe(i, { initialValue: a.autofocus }), c = k(() => !Ae(e.label)), f = k(
      () => typeof a.accept == "string" ? a.accept : a.accept.join(",")
    ), g = _(() => [
      u.value,
      {
        [`form-control-${a.size}`]: a.size !== void 0
      }
    ]), v = () => {
      var b, S;
      const h = ((b = i.value) == null ? void 0 : b.files) === null || ((S = i.value) == null ? void 0 : S.files) === void 0 ? null : [...i.value.files];
      s.value = h === null ? null : a.multiple === !0 ? h : h[0];
    }, y = (h) => {
      a.noDrop === !0 && h.preventDefault();
    }, B = () => {
      s.value = null;
    };
    fe(s, (h) => {
      h === null && i.value !== null && (i.value.value = "");
    }), o({
      blur: () => {
        d.value = !1;
      },
      element: i,
      focus: () => {
        d.value = !0;
      },
      reset: B
    });
    const [C, p] = Rt();
    return (h, b) => (m(), A(pe, null, [
      be(n(C), null, {
        default: I(() => [
          J("label", {
            class: "input-group-text",
            for: n(r)
          }, Z(n(a).browserText), 9, vu)
        ]),
        _: 1
      }),
      c.value || n(a).label ? (m(), A("label", {
        key: 0,
        class: D(["form-label", n(a).labelClass]),
        for: n(r)
      }, [
        T(h.$slots, "label", {}, () => [
          ue(Z(n(a).label), 1)
        ], !0)
      ], 10, pu)) : ee("", !0),
      J("div", mu, [
        n(a).placement === "start" ? (m(), O(n(p), { key: 0 })) : ee("", !0),
        J("input", K({ id: n(r) }, h.$attrs, {
          ref_key: "input",
          ref: i,
          type: "file",
          class: ["form-control", g.value],
          form: n(a).form,
          name: n(a).name,
          multiple: n(a).multiple,
          disabled: n(a).disabled,
          capture: n(a).capture,
          accept: f.value || void 0,
          required: n(a).required || void 0,
          "aria-label": n(a).ariaLabel,
          "aria-labelledby": n(a).ariaLabelledby,
          "aria-required": n(a).required || void 0,
          directory: n(a).directory,
          webkitdirectory: n(a).directory,
          onChange: v,
          onDrop: y
        }), null, 16, bu),
        n(a).placement === "end" ? (m(), O(n(p), { key: 1 })) : ee("", !0)
      ])
    ], 64));
  }
}), gu = /* @__PURE__ */ nl(yu, [["__scopeId", "data-v-f7b61526"]]), bn = ["input", "select", "textarea"], hu = bn.map((t) => `${t}:not([disabled])`).join(), Bu = [...bn, "a", "button", "label"], _u = "label", wu = "invalid-feedback", Cu = "valid-feedback", ku = "description", Tu = "default", $u = z({
  components: { BCol: zt, BFormInvalidFeedback: Pa, BFormRow: la, BFormText: Na, BFormValidFeedback: Ea },
  props: {
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    contentCols: { type: [Boolean, String, Number], default: void 0 },
    contentColsLg: { type: [Boolean, String, Number], default: void 0 },
    contentColsMd: { type: [Boolean, String, Number], default: void 0 },
    contentColsSm: { type: [Boolean, String, Number], default: void 0 },
    contentColsXl: { type: [Boolean, String, Number], default: void 0 },
    description: { type: [String], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, default: void 0 },
    invalidFeedback: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    labelAlign: { type: [Boolean, String, Number], default: void 0 },
    labelAlignLg: { type: [Boolean, String, Number], default: void 0 },
    labelAlignMd: { type: [Boolean, String, Number], default: void 0 },
    labelAlignSm: { type: [Boolean, String, Number], default: void 0 },
    labelAlignXl: { type: [Boolean, String, Number], default: void 0 },
    labelClass: { type: [Array, Object, String], default: void 0 },
    labelCols: { type: [Boolean, String, Number], default: void 0 },
    labelColsLg: { type: [Boolean, String, Number], default: void 0 },
    labelColsMd: { type: [Boolean, String, Number], default: void 0 },
    labelColsSm: { type: [Boolean, String, Number], default: void 0 },
    labelColsXl: { type: [Boolean, String, Number], default: void 0 },
    labelFor: { type: String, default: void 0 },
    labelSize: { type: String, default: void 0 },
    labelSrOnly: { type: Boolean, default: !1 },
    state: { type: Boolean, default: null },
    tooltip: { type: Boolean, default: !1 },
    validFeedback: { type: String, default: void 0 },
    validated: { type: Boolean, default: !1 },
    floating: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = ["xs", "sm", "md", "lg", "xl"], l = (y, B) => e.reduce((C, p) => {
      const h = xl(p === "xs" ? "" : p, `${B}Align`), b = y[h] || null;
      return b && (p === "xs" ? C.push(`text-${b}`) : C.push(`text-${p}-${b}`)), C;
    }, []), a = (y, B) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e.reduce((C, p) => {
        const h = xl(p === "xs" ? "" : p, `${B}Cols`);
        let b = y[h];
        if (b = b === "" ? !0 : b || !1, typeof b != "boolean" && b !== "auto") {
          const S = Number.parseInt(b);
          b = Number.isNaN(S) ? 0 : S, b = b > 0 ? b : !1;
        }
        return b && (p === "xs" ? C[typeof b == "boolean" ? "col" : "cols"] = b : C[p || (typeof b == "boolean" ? "col" : "cols")] = b), C;
      }, {})
    ), s = L(null), r = (y, B = null) => {
      if (Da && t.labelFor && s.value !== null) {
        const C = s.value.querySelector(`#${CSS.escape(t.labelFor)}`);
        if (C) {
          const p = "aria-describedby", h = (y || "").split(ea), b = (B || "").split(ea), S = (C.getAttribute(p) || "").split(ea).filter((w) => !b.includes(w)).concat(h).filter((w, x, V) => V.indexOf(w) === x).filter((w) => w).join(" ").trim();
          S ? C.setAttribute(p, S) : C.removeAttribute(p);
        }
      }
    }, u = _(() => a(t, "content")), i = _(() => l(t, "label")), d = _(() => a(t, "label")), c = _(
      () => (
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys(u.value).length > 0 || Object.keys(d.value).length > 0
      )
    ), f = kt(() => t.state), g = ma(
      () => t.ariaInvalid,
      () => t.state
    );
    return fe(
      () => null,
      (y, B) => {
        y !== B && r(y, B);
      }
    ), Ue(() => {
      Ne(() => {
        r(null);
      });
    }), {
      ariaDescribedby: null,
      computedAriaInvalid: g,
      contentColProps: u,
      isHorizontal: c,
      labelAlignClasses: i,
      labelColProps: d,
      onLegendClick: (y) => {
        if (t.labelFor || s.value === null)
          return;
        const { target: B } = y, C = B ? B.tagName : "";
        if (Bu.indexOf(C) !== -1)
          return;
        const p = [...s.value.querySelectorAll(hu)].filter(Hn), [h] = p;
        p.length === 1 && h instanceof HTMLElement && zn(h);
      },
      stateClass: f
    };
  },
  render() {
    const t = this.$props, o = this.$slots, e = we(), l = !t.labelFor;
    let a = null;
    const s = Lt(_u, {}, o) || t.label, r = s ? we(void 0, "_BV_label_").value : null;
    if (s || this.isHorizontal) {
      const S = l ? "legend" : "label";
      if (t.labelSrOnly)
        s && (a = Ie(
          S,
          {
            class: "visually-hidden",
            id: r,
            for: t.labelFor || null
          },
          s
        )), this.isHorizontal ? a = Ie(zt, this.labelColProps, { default: () => a }) : a = Ie("div", {}, [a]);
      else {
        const w = {
          onClick: l ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? S : null,
          id: r,
          for: t.labelFor || null,
          tabIndex: l ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": l,
              "col-form-label": this.isHorizontal || l,
              "pt-0": !this.isHorizontal && l,
              "d-block": !this.isHorizontal && !l,
              [`col-form-label-${t.labelSize}`]: !!t.labelSize
            },
            this.labelAlignClasses,
            t.labelClass
          ]
        };
        this.isHorizontal ? a = Ie(zt, w, { default: () => s }) : a = Ie(S, w, s);
      }
    }
    let u = null;
    const i = Lt(wu, {}, o) || this.invalidFeedback, d = i ? we(void 0, "_BV_feedback_invalid_").value : void 0;
    i && (u = Ie(
      Pa,
      {
        ariaLive: t.feedbackAriaLive,
        id: d,
        state: t.state,
        tooltip: t.tooltip
      },
      { default: () => i }
    ));
    let c = null;
    const f = Lt(Cu, {}, o) || this.validFeedback, g = f ? we(void 0, "_BV_feedback_valid_").value : void 0;
    f && (c = Ie(
      Ea,
      {
        ariaLive: t.feedbackAriaLive,
        id: g,
        state: t.state,
        tooltip: t.tooltip
      },
      { default: () => f }
      // validFeedbackContent
    ));
    let v = null;
    const y = Lt(ku, {}, o) || this.description, B = y ? we(void 0, "_BV_description_").value : void 0;
    y && (v = Ie(
      Na,
      {
        id: B
      },
      { default: () => y }
    ));
    const C = this.ariaDescribedby = [
      B,
      t.state === !1 ? d : null,
      t.state === !0 ? g : null
    ].filter((S) => S).join(" ") || null, p = [
      Lt(Tu, { ariaDescribedby: C, descriptionId: B, id: e, labelId: r }, o) || "",
      u,
      c,
      v
    ];
    !this.isHorizontal && t.floating && p.push(a);
    let h = Ie(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && t.floating
          }
        ]
      },
      p
    );
    this.isHorizontal && (h = Ie(zt, { ref: "content", ...this.contentColProps }, { default: () => p }));
    const b = {
      class: [
        this.stateClass,
        {
          "was-validated": t.validated
        }
      ],
      id: we(() => t.id).value,
      disabled: l ? t.disabled : null,
      role: l ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      "aria-labelledby": l && this.isHorizontal ? r : null
    };
    return this.isHorizontal && !l ? Ie(la, b, { default: () => [a, h] }) : Ie(
      l ? "fieldset" : "div",
      b,
      this.isHorizontal && l ? [Ie(la, null, { default: () => [a, h] })] : this.isHorizontal || !t.floating ? [a, h] : [h]
    );
  }
}), xu = ["id", "value", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"], Il = /* @__PURE__ */ z({
  __name: "BFormInput",
  props: /* @__PURE__ */ ge({
    max: { default: void 0 },
    min: { default: void 0 },
    step: { default: void 0 },
    type: { default: "text" },
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazyFormatter: { type: Boolean, default: !1 },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    plaintext: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormInput"), [a, s] = _e(t, "modelValue", {
      set: (p) => {
        if (p === null)
          return;
        let h = p;
        if (s.trim && (h = h.toString().trim()), (s.number || l.type === "number") && typeof h == "string" && h !== "") {
          const b = Number.parseFloat(h);
          h = Number.isNaN(b) ? h : b;
        }
        return h;
      }
    }), { input: r, computedId: u, computedAriaInvalid: i, onInput: d, onChange: c, onBlur: f, focus: g, blur: v } = Uo(l, a, s), y = kt(() => l.state), B = L(!1), C = _(() => {
      const p = l.type === "range", h = l.type === "color";
      return [
        y.value,
        {
          "form-control-highlighted": B.value,
          "form-range": p,
          "form-control": h || !l.plaintext && !p,
          "form-control-color": h,
          "form-control-plaintext": l.plaintext && !p && !h,
          [`form-control-${l.size}`]: !!l.size
        }
      ];
    });
    return o({
      blur: v,
      element: r,
      focus: g
    }), (p, h) => (m(), A("input", {
      id: n(u),
      ref_key: "input",
      ref: r,
      value: n(a),
      class: D(C.value),
      name: n(l).name || void 0,
      form: n(l).form || void 0,
      type: n(l).type,
      disabled: n(l).disabled,
      placeholder: n(l).placeholder,
      required: n(l).required || void 0,
      autocomplete: n(l).autocomplete || void 0,
      readonly: n(l).readonly || n(l).plaintext,
      min: n(l).min,
      max: n(l).max,
      step: n(l).step,
      list: n(l).type !== "password" ? n(l).list : void 0,
      "aria-required": n(l).required || void 0,
      "aria-invalid": n(i),
      onInput: h[0] || (h[0] = (b) => n(d)(b)),
      onChange: h[1] || (h[1] = (b) => n(c)(b)),
      onBlur: h[2] || (h[2] = (b) => n(f)(b))
    }, null, 42, xu));
  }
}), Su = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], Vu = ["for"], yn = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BFormRadio",
  props: /* @__PURE__ */ ge({
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    button: { type: Boolean, default: !1 },
    buttonGroup: { type: Boolean, default: !1 },
    buttonVariant: { default: null },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    inline: { type: Boolean, default: !1 },
    modelValue: { type: [Boolean, String, Array, Object, Number, null] },
    name: { default: void 0 },
    plain: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    reverse: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    value: { type: [Boolean, String, Array, Object, Number, null], default: !0 }
  }, {
    modelValue: { type: [Boolean, String, Array, Object, Number, null], default: void 0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormRadio"), a = He(), s = _e(t, "modelValue"), r = we(() => l.id, "form-check"), u = Ve(Ao, null), i = L(null), { focused: d } = Fe(i, {
      initialValue: l.autofocus
    }), c = k(() => !Ae(a.default)), f = _({
      get: () => (u == null ? void 0 : u.modelValue.value) ?? s.value,
      set: (h) => {
        if (h !== void 0) {
          if (u !== null) {
            u.modelValue.value = h;
            return;
          }
          s.value = h;
        }
      }
    }), g = k(
      () => !!(l.name ?? (u == null ? void 0 : u.name.value)) && (l.required || (u == null ? void 0 : u.required.value))
    ), v = k(() => l.buttonGroup || ((u == null ? void 0 : u.buttons.value) ?? !1)), y = _(() => ({
      plain: l.plain || ((u == null ? void 0 : u.plain.value) ?? !1),
      button: l.button || ((u == null ? void 0 : u.buttons.value) ?? !1),
      inline: l.inline || ((u == null ? void 0 : u.inline.value) ?? !1),
      state: l.state || (u == null ? void 0 : u.state.value),
      reverse: l.reverse || ((u == null ? void 0 : u.reverse.value) ?? !1),
      size: l.size ?? (u == null ? void 0 : u.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: l.buttonVariant ?? (u == null ? void 0 : u.buttonVariant.value) ?? "secondary",
      // This is where the true default is made
      hasDefaultSlot: c.value
    })), B = Do(y), C = jo(y), p = qo(y);
    return o({
      blur: () => {
        d.value = !1;
      },
      element: i,
      focus: () => {
        d.value = !0;
      }
    }), (h, b) => (m(), O(sl, {
      skip: v.value,
      class: D(n(B))
    }, {
      default: I(() => {
        var S, w, x;
        return [
          ct(J("input", K({ id: n(r) }, h.$attrs, {
            ref_key: "input",
            ref: i,
            "onUpdate:modelValue": b[0] || (b[0] = (V) => f.value = V),
            class: n(C),
            type: "radio",
            disabled: n(l).disabled || ((S = n(u)) == null ? void 0 : S.disabled.value),
            required: g.value || void 0,
            name: n(l).name || ((w = n(u)) == null ? void 0 : w.name.value),
            form: n(l).form || ((x = n(u)) == null ? void 0 : x.form.value),
            "aria-label": n(l).ariaLabel,
            "aria-labelledby": n(l).ariaLabelledby,
            value: n(l).value,
            "aria-required": g.value || void 0
          }), null, 16, Su), [
            [En, f.value]
          ]),
          c.value || n(l).plain === !1 ? (m(), A("label", {
            key: 0,
            for: n(r),
            class: D(n(p))
          }, [
            T(h.$slots, "default")
          ], 10, Vu)) : ee("", !0)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
}), Au = ["id"], Ou = ["innerHTML"], Iu = /* @__PURE__ */ z({
  __name: "BFormRadioGroup",
  props: /* @__PURE__ */ ge({
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: { type: [Boolean, String, Array, Object, Number, null] },
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    reverse: { type: Boolean, default: !1 },
    size: { default: "md" },
    stacked: { type: Boolean, default: !1 },
    state: { type: [Boolean, null], default: null },
    textField: { default: "text" },
    validated: { type: Boolean, default: !1 },
    valueField: { default: "value" }
  }, {
    modelValue: { type: [Boolean, String, Array, Object, Number, null], default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormRadioGroup"), a = _e(t, "modelValue"), s = we(() => l.id, "radio"), r = we(() => l.name, "checkbox"), u = L(null), { focused: i } = Fe(u, {
      initialValue: l.autofocus
    });
    Qe(Ao, {
      modelValue: a,
      buttonVariant: k(() => l.buttonVariant),
      form: k(() => l.form),
      name: r,
      buttons: k(() => l.buttons),
      state: k(() => l.state),
      plain: k(() => l.plain),
      size: k(() => l.size),
      inline: k(() => !l.stacked),
      reverse: k(() => l.reverse),
      required: k(() => l.required),
      disabled: k(() => l.disabled)
    });
    const d = _(
      () => l.options.map(
        (v, y) => typeof v == "string" || typeof v == "number" ? {
          value: v,
          disabled: l.disabled,
          text: v.toString(),
          html: void 0,
          self: Symbol(`radioGroupOptionItem${y}`)
        } : {
          value: v[l.valueField],
          disabled: v[l.disabledField],
          ...v.props ? v.props : {},
          text: v[l.textField],
          html: v[l.htmlField],
          self: Symbol(`radioGroupOptionItem${y}`)
        }
      )
    ), c = _(() => ({
      required: l.required,
      ariaInvalid: l.ariaInvalid,
      state: l.state,
      validated: l.validated,
      buttons: l.buttons,
      stacked: l.stacked,
      size: l.size
    })), f = Go(c), g = Wo(c);
    return o({
      blur: () => {
        i.value = !1;
      },
      focus: () => {
        i.value = !0;
      }
    }), (v, y) => (m(), A("div", K(n(f), {
      id: n(s),
      ref_key: "element",
      ref: u,
      role: "radiogroup",
      class: [n(g), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      T(v.$slots, "first"),
      (m(!0), A(pe, null, ke(d.value, (B) => (m(), O(yn, {
        key: B.self,
        disabled: B.disabled,
        value: B.value
      }, {
        default: I(() => [
          B.html ? (m(), A("span", {
            key: 0,
            innerHTML: B.html
          }, null, 8, Ou)) : (m(), A(pe, { key: 1 }, [
            ue(Z(B.text), 1)
          ], 64))
        ]),
        _: 2
      }, 1032, ["disabled", "value"]))), 128)),
      T(v.$slots, "default")
    ], 16, Au));
  }
}), Pu = ["value", "disabled"], ul = /* @__PURE__ */ z({
  __name: "BFormSelectOption",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BFormSelectOption");
    return (l, a) => (m(), A("option", {
      value: n(e).value,
      disabled: n(e).disabled
    }, [
      T(l.$slots, "default")
    ], 8, Pu));
  }
}), Nu = ["label"], Eu = ["innerHTML"], gn = /* @__PURE__ */ z({
  __name: "BFormSelectOptionGroup",
  props: {
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    label: { default: void 0 },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(t) {
    const e = M(t, "BFormSelectOptionGroup"), { normalizedOptions: l } = Xo(() => e.options, e), a = _(() => l.value);
    return (s, r) => (m(), A("optgroup", {
      label: n(e).label
    }, [
      T(s.$slots, "first"),
      (m(!0), A(pe, null, ke(a.value, (u, i) => (m(), O(ul, K({
        key: i,
        disabled: u.disabled,
        value: u.value,
        ref_for: !0
      }, s.$attrs), {
        default: I(() => [
          u.html ? (m(), A("span", {
            key: 0,
            innerHTML: u.html
          }, null, 8, Eu)) : (m(), A(pe, { key: 1 }, [
            ue(Z(u.text), 1)
          ], 64))
        ]),
        _: 2
      }, 1040, ["disabled", "value"]))), 128)),
      T(s.$slots, "default")
    ], 8, Nu));
  }
}), Fu = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], Lu = ["innerHTML"], zu = /* @__PURE__ */ z({
  __name: "BFormSelect",
  props: /* @__PURE__ */ ge({
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    labelField: { default: "label" },
    modelValue: { type: [Boolean, String, Array, Object, Number, null] },
    multiple: { type: Boolean, default: !1 },
    name: { default: void 0 },
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    selectSize: { default: 0 },
    size: { default: "md" },
    state: { type: [Boolean, null], default: null },
    textField: { default: "text" },
    valueField: { default: "value" }
  }, {
    modelValue: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormSelect"), a = _e(t, "modelValue"), s = we(() => l.id, "input"), r = he(() => l.selectSize), u = kt(() => l.state), i = L(null), { focused: d } = Fe(i, {
      initialValue: l.autofocus
    }), c = _(() => [
      u.value,
      {
        "form-control": l.plain,
        [`form-control-${l.size}`]: l.size !== "md" && l.plain,
        "form-select": !l.plain,
        [`form-select-${l.size}`]: l.size !== "md" && !l.plain
      }
    ]), f = k(
      () => r.value || l.plain ? r.value : void 0
    ), g = ma(
      () => l.ariaInvalid,
      () => l.state
    ), { normalizedOptions: v, isComplex: y } = Xo(() => l.options, l), B = _(
      () => v.value
    ), C = _({
      get: () => a.value,
      set: (p) => {
        a.value = p;
      }
    });
    return o({
      blur: () => {
        d.value = !1;
      },
      element: i,
      focus: () => {
        d.value = !0;
      }
    }), (p, h) => ct((m(), A("select", {
      id: n(s),
      ref_key: "input",
      ref: i,
      "onUpdate:modelValue": h[0] || (h[0] = (b) => C.value = b),
      class: D(c.value),
      name: n(l).name,
      form: n(l).form || void 0,
      multiple: n(l).multiple || void 0,
      size: f.value,
      disabled: n(l).disabled,
      required: n(l).required || void 0,
      "aria-required": n(l).required || void 0,
      "aria-invalid": n(g)
    }, [
      T(p.$slots, "first"),
      (m(!0), A(pe, null, ke(B.value, (b, S) => (m(), A(pe, { key: S }, [
        n(y)(b) ? (m(), O(gn, {
          key: 0,
          label: b.label,
          options: b.options,
          "value-field": n(l).valueField,
          "text-field": n(l).textField,
          "html-field": n(l).htmlField,
          "disabled-field": n(l).disabledField
        }, null, 8, ["label", "options", "value-field", "text-field", "html-field", "disabled-field"])) : (m(), O(ul, {
          key: 1,
          value: b.value,
          disabled: b.disabled
        }, {
          default: I(() => [
            b.html ? (m(), A("span", {
              key: 0,
              innerHTML: b.html
            }, null, 8, Lu)) : (m(), A(pe, { key: 1 }, [
              ue(Z(b.text), 1)
            ], 64))
          ]),
          _: 2
        }, 1032, ["value", "disabled"]))
      ], 64))), 128)),
      T(p.$slots, "default")
    ], 10, Fu)), [
      [Fn, C.value]
    ]);
  }
}), ka = "ArrowDown", Pl = "End", Nl = "Home", El = "PageDown", Fl = "PageUp", Ta = "ArrowUp", Hu = ["lang", "tabindex", "title"], Mu = ["name", "form", "value"], Ru = ["id", "dir", "tabindex", "aria-label", "aria-invalid", "aria-required", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"], Re = {
  min: 1,
  max: 100,
  step: 1,
  repeatDelay: 500,
  repeatInterval: 100,
  repeatThreshold: 10,
  repeatMultiplier: 4
}, Du = /* @__PURE__ */ z({
  __name: "BFormSpinbutton",
  props: /* @__PURE__ */ ge({
    ariaControls: { default: void 0 },
    ariaLabel: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    formatterFn: { type: Function, default: void 0 },
    id: { default: void 0 },
    inline: { type: Boolean, default: !1 },
    labelDecrement: { default: "Decrement" },
    labelIncrement: { default: "Increment" },
    locale: { default: void 0 },
    max: { default: Re.max },
    min: { default: Re.min },
    modelValue: {},
    name: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    repeatDelay: { default: Re.repeatDelay },
    repeatInterval: { default: Re.repeatInterval },
    repeatStepMultiplier: { default: Re.repeatMultiplier },
    repeatThreshold: { default: Re.repeatThreshold },
    required: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    step: { default: Re.step },
    vertical: { type: Boolean, default: !1 },
    wrap: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["change"], ["update:modelValue"]),
  setup(t, { emit: o }) {
    const e = [Ta, ka, Nl, Pl, Fl, El], a = M(t, "BFormSpinbutton"), s = o, r = _e(t, "modelValue"), u = L(null), { focused: i } = Fe(u), d = we(() => a.id, "spinbutton"), c = _(() => ({
      disabled: a.disabled,
      readonly: a.readonly,
      focus: i.value,
      "d-inline-flex": a.inline || a.vertical,
      "d-flex": !a.inline && !a.vertical,
      "align-items-stretch": !a.vertical,
      "flex-column": a.vertical,
      [`form-control-${a.size}`]: a.size !== void 0
    })), f = _(() => ({
      "d-flex": a.vertical,
      "align-self-center": !a.vertical,
      "align-items-center": a.vertical,
      "border-top": a.vertical,
      "border-bottom": a.vertical,
      "border-start": !a.vertical,
      "border-end": !a.vertical
    }));
    let g, v, y = !1;
    const B = he(() => a.step), C = k(
      () => Number.isNaN(B.value) ? Re.step : B.value
    ), p = he(() => a.min), h = k(
      () => Number.isNaN(p.value) ? Re.min : p.value
    ), b = he(() => a.max), S = k(() => {
      const H = C.value, se = h.value;
      return Math.floor((b.value - se) / H) * H + se;
    }), w = he(() => a.repeatDelay, {
      nanToZero: !0,
      method: "parseInt"
    }), x = k(
      () => w.value > 0 ? w.value : Re.repeatDelay
    ), V = he(() => a.repeatInterval, {
      nanToZero: !0,
      method: "parseInt"
    }), W = k(
      () => V.value > 0 ? V.value : Re.repeatInterval
    ), q = he(() => a.repeatThreshold, {
      nanToZero: !0,
      method: "parseInt"
    }), P = k(
      () => Math.max(
        Number.isNaN(q.value) ? Re.repeatThreshold : q.value,
        1
      )
    ), Y = he(() => a.repeatStepMultiplier, {
      nanToZero: !0,
      method: "parseInt"
    }), te = k(
      () => Math.max(
        Number.isNaN(Y.value) ? Re.repeatMultiplier : Y.value,
        1
      )
    ), ie = k(() => {
      const H = C.value;
      return Math.floor(H) === H ? 0 : (H.toString().split(".")[1] || "").length;
    }), G = k(() => Math.pow(10, ie.value || 0)), F = k(
      () => r.value === null ? "" : r.value.toFixed(ie.value)
    ), { isRtl: $, locale: N } = jr(), R = _(() => {
      const se = [(a.locale ?? (N == null ? void 0 : N.value)) || "locale"];
      return new Intl.NumberFormat(se).resolvedOptions().locale;
    }), X = () => new Intl.NumberFormat(R.value, {
      style: "decimal",
      useGrouping: !1,
      minimumIntegerDigits: 1,
      minimumFractionDigits: ie.value,
      maximumFractionDigits: ie.value,
      notation: "standard"
    }).format, E = k(() => a.formatterFn ?? X()), j = (H) => {
      let { value: se } = r;
      if (!a.disabled && se !== null) {
        const ye = C.value * H, me = h.value, Oe = S.value, $e = G.value, { wrap: xe } = a;
        se = Math.round((se - me) / ye) * ye + me + ye, se = Math.round(se * $e) / $e, r.value = se > Oe ? xe ? me : Oe : se < me ? xe ? Oe : me : se;
      }
    }, ae = (H = 1) => {
      if (r.value === null) {
        r.value = h.value;
        return;
      }
      j(1 * H);
    }, re = (H = 1) => {
      if (r.value === null) {
        r.value = a.wrap ? S.value : h.value;
        return;
      }
      j(-1 * H);
    }, U = (H) => {
      H.preventDefault(), H.stopImmediatePropagation();
    };
    De(
      e,
      (H) => {
        const { code: se, altKey: ye, ctrlKey: me, metaKey: Oe } = H;
        if (!(a.disabled || a.readonly || ye || me || Oe) && (U(H), !y)) {
          if (oe(), [Ta, ka].includes(se)) {
            if (y = !0, se === Ta) {
              ne(H, ae);
              return;
            }
            se === ka && ne(H, re);
            return;
          }
          if (se === Fl) {
            ae(te.value);
            return;
          }
          if (se === El) {
            re(te.value);
            return;
          }
          if (se === Nl) {
            r.value = h.value;
            return;
          }
          se === Pl && (r.value = S.value);
        }
      },
      { target: u, eventName: "keydown" }
    ), De(
      e,
      (H) => {
        const { altKey: se, ctrlKey: ye, metaKey: me } = H;
        a.disabled || a.readonly || se || ye || me || (U(H), oe(), y = !1, s("change", r.value));
      },
      { target: u, eventName: "keyup" }
    );
    const ne = (H, se) => {
      const { type: ye } = H || {};
      if (!a.disabled && !a.readonly) {
        if (ve(H) && ye === "mousedown" && H.button)
          return;
        oe(), se(1);
        const me = P.value, Oe = te.value, $e = x.value, xe = W.value;
        g = setTimeout(() => {
          let et = 0;
          v = setInterval(() => {
            se(et < me ? 1 : Oe), et++;
          }, xe);
        }, $e);
      }
    }, ve = (H) => H.type === "mouseup" || H.type === "mousedown", Q = (H) => {
      ve(H) && H.type === "mouseup" && H.button || (U(H), oe(), ce(!1), s("change", r.value));
    }, ce = (H) => {
      try {
        vl(H, [document.body, "mouseup", Q, !1]), vl(H, [document.body, "touchend", Q, !1]);
      } catch {
      }
    }, oe = () => {
      clearTimeout(g), clearInterval(v), g = void 0, v = void 0;
    }, le = _(() => {
      const H = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-plus",
          viewBox: "0 0 16 16"
        },
        path: {
          d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        }
      }, se = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-dash",
          viewBox: "0 0 16 16"
        },
        path: { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }
      }, ye = {
        class: [{ "py-0": !a.vertical }, "btn", "btn-sm", "border-0", "rounded-0"],
        tabindex: "-1",
        type: "button",
        disabled: a.disabled || a.readonly,
        "aria-disabled": a.disabled || a.readonly ? !0 : void 0,
        "aria-controls": d.value
      }, me = {
        "aria-hidden": !0,
        scale: i.value ? 1.5 : 1.25
      }, Oe = (et, xn) => {
        !a.disabled && !a.readonly && (U(et), ce(!0), i.value = !0, ne(et, xn));
      }, $e = {
        button: {
          ...ye,
          "aria-label": a.labelIncrement || void 0,
          "aria-keyshortcuts": "ArrowUp"
        },
        svg: {
          ...me,
          ...H.svg
        },
        path: {
          ...H.path
        },
        slot: {
          name: "increment"
        },
        handler: (et) => Oe(et, ae)
      }, xe = {
        button: {
          ...ye,
          "aria-label": a.labelDecrement || void 0,
          "aria-keyshortcuts": "ArrowDown"
        },
        svg: {
          ...me,
          ...se.svg
        },
        path: {
          ...se.path
        },
        slot: {
          name: "decrement"
        },
        handler: (et) => Oe(et, re)
      };
      return {
        top: {
          ...a.vertical ? $e : xe
        },
        bottom: {
          ...a.vertical ? xe : $e
        }
      };
    });
    return (H, se) => (m(), A("div", {
      ref_key: "element",
      ref: u,
      class: D(["b-form-spinbutton form-control", c.value]),
      role: "group",
      lang: R.value,
      tabindex: n(a).disabled ? void 0 : "-1",
      title: n(a).ariaLabel,
      onClick: se[4] || (se[4] = (ye) => i.value = !0)
    }, [
      T(H.$slots, le.value.top.slot.name, { hasFocus: n(i) }, () => [
        J("button", K(le.value.top.button, {
          onMousedown: se[0] || (se[0] = //@ts-ignore
          (...ye) => le.value.top.handler && le.value.top.handler(...ye)),
          onTouchstart: se[1] || (se[1] = //@ts-ignore
          (...ye) => le.value.top.handler && le.value.top.handler(...ye))
        }), [
          (m(), A("svg", Be(Ce(le.value.top.svg)), [
            J("path", Be(Ce(le.value.top.path)), null, 16)
          ], 16))
        ], 16)
      ]),
      n(a).name && !n(a).disabled ? (m(), A("input", {
        key: "hidden",
        type: "hidden",
        name: n(a).name,
        form: n(a).form,
        value: F.value
      }, null, 8, Mu)) : ee("", !0),
      J("output", {
        id: n(d),
        key: "output",
        class: D(["flex-grow-1", f.value]),
        dir: n($) ?? !1 ? "rtl" : "ltr",
        tabindex: n(a).disabled ? void 0 : "0",
        role: "spinbutton",
        "aria-live": "off",
        "aria-label": n(a).ariaLabel || void 0,
        "aria-invalid": n(a).state === !1 || !r.value !== null && n(a).required ? !0 : void 0,
        "aria-required": n(a).required ? !0 : void 0,
        "aria-valuemin": h.value,
        "aria-valuemax": S.value,
        "aria-valuenow": r.value !== null ? r.value : void 0,
        "aria-valuetext": r.value !== null ? E.value(r.value) : void 0
      }, [
        J("bdi", null, Z((r.value !== null ? E.value(r.value) : n(a).placeholder) || ""), 1)
      ], 10, Ru),
      T(H.$slots, le.value.bottom.slot.name, { hasFocus: n(i) }, () => [
        J("button", K(le.value.bottom.button, {
          onMousedown: se[2] || (se[2] = //@ts-ignore
          (...ye) => le.value.bottom.handler && le.value.bottom.handler(...ye)),
          onTouchstart: se[3] || (se[3] = //@ts-ignore
          (...ye) => le.value.bottom.handler && le.value.bottom.handler(...ye))
        }), [
          (m(), A("svg", Be(Ce(le.value.bottom.svg)), [
            J("path", Be(Ce(le.value.bottom.path)), null, 16)
          ], 16))
        ], 16)
      ])
    ], 10, Hu));
  }
}), ju = ["id"], hn = /* @__PURE__ */ z({
  __name: "BFormTag",
  props: {
    disabled: { type: Boolean, default: !1 },
    id: { default: void 0 },
    noRemove: { type: Boolean, default: !1 },
    pill: { type: Boolean, default: !1 },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    title: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(t, { emit: o }) {
    const l = M(t, "BFormTag"), a = o, s = He(), r = we(() => l.id), u = _(
      () => {
        var c;
        return ((((c = s.default) == null ? void 0 : c.call(s, {})[0].children) ?? "").toString() || l.title) ?? "";
      }
    ), i = k(() => `${r.value}taglabel__`), d = _(() => ({
      [`text-bg-${l.variant}`]: l.variant !== null,
      "rounded-pill": l.pill,
      disabled: l.disabled
    }));
    return (c, f) => (m(), O(de(n(l).tag), {
      id: n(r),
      title: u.value,
      class: D(["badge b-form-tag d-inline-flex align-items-center mw-100", d.value]),
      "aria-labelledby": i.value
    }, {
      default: I(() => [
        J("span", {
          id: i.value,
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          T(c.$slots, "default", {}, () => [
            ue(Z(u.value), 1)
          ])
        ], 8, ju),
        !n(l).disabled && !n(l).noRemove ? (m(), O(Ft, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": n(l).removeLabel,
          class: "b-form-tag-remove",
          "aria-describedby": i.value,
          "aria-controls": n(l).id,
          onClick: f[0] || (f[0] = (g) => a("remove", u.value))
        }, null, 8, ["aria-label", "aria-describedby", "aria-controls"])) : ee("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), qu = ["id"], Gu = ["id", "for", "aria-live"], Wu = ["id", "aria-live"], Uu = ["id"], Xu = ["aria-controls"], Ku = {
  role: "group",
  class: "d-flex"
}, Yu = ["id", "disabled", "value", "type", "placeholder", "form", "required", "aria-required"], Zu = ["disabled"], Ju = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, Qu = {
  key: 0,
  class: "d-block invalid-feedback"
}, ed = {
  key: 1,
  class: "form-text text-body-secondary"
}, td = {
  key: 2,
  class: "form-text text-body-secondary"
}, ad = ["name", "value"], ld = /* @__PURE__ */ z({
  __name: "BFormTags",
  props: /* @__PURE__ */ ge({
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    duplicateTagText: { default: "Duplicate tag(s)" },
    form: { default: void 0 },
    inputAttrs: { default: void 0 },
    inputClass: { default: void 0 },
    inputId: { default: void 0 },
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    limit: { default: void 0 },
    limitTagsText: { default: "Tag limit reached" },
    modelValue: {},
    name: { default: void 0 },
    noAddOnEnter: { type: Boolean, default: !1 },
    noOuterFocus: { type: Boolean, default: !1 },
    noTagRemove: { type: Boolean, default: !1 },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    separator: { default: void 0 },
    size: { default: "md" },
    state: { type: [Boolean, null], default: null },
    tagClass: { default: void 0 },
    tagPills: { type: Boolean, default: !1 },
    tagRemoveLabel: { default: void 0 },
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => !0 },
    tagVariant: { default: "secondary" }
  }, {
    modelValue: {
      default: () => []
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["blur", "focus", "focusin", "focusout", "tag-state"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BFormTags"), s = e, r = _e(t, "modelValue"), u = we(), i = he(() => a.limit ?? NaN), d = kt(() => a.state), c = L(null), { focused: f } = Fe(c, {
      initialValue: a.autofocus
    }), g = k(() => a.inputId || `${u.value}input__`), v = L([...r.value]), y = L(""), B = L(r.value.length > 0), C = L(""), p = L([]), h = L([]), b = L([]);
    Oa(r, v, {
      direction: "ltr",
      transform: {
        ltr: (E) => [...E]
      }
    });
    const S = _(() => [
      d.value,
      {
        [`form-control-${a.size}`]: a.size !== "md",
        disabled: a.disabled,
        focus: f.value
      }
    ]), w = _(() => v.value.includes(y.value)), x = _(
      () => y.value === "" ? !1 : !a.tagValidator(y.value)
    ), V = k(() => v.value.length === i.value), W = k(() => !x.value && !w.value), q = _(() => ({
      addButtonText: a.addButtonText,
      addButtonVariant: a.addButtonVariant,
      addTag: R,
      disableAddButton: W.value,
      disabled: a.disabled,
      duplicateTagText: a.duplicateTagText,
      duplicateTags: b.value,
      form: a.form,
      inputAttrs: {
        ...a.inputAttrs,
        disabled: a.disabled,
        form: a.form,
        id: g,
        value: y
      },
      inputHandlers: {
        input: ie,
        keydown: F,
        change: G
      },
      inputId: g,
      inputType: a.inputType,
      invalidTagText: a.invalidTagText,
      invalidTags: h.value,
      isDuplicate: w.value,
      isInvalid: x.value,
      isLimitReached: V.value,
      limitTagsText: a.limitTagsText,
      limit: i.value,
      noTagRemove: a.noTagRemove,
      placeholder: a.placeholder,
      removeTag: X,
      required: a.required,
      separator: a.separator,
      size: a.size,
      state: a.state,
      tagClass: a.tagClass,
      tagPills: a.tagPills,
      tagRemoveLabel: a.tagRemoveLabel,
      tagVariant: a.tagVariant,
      tags: v.value
    })), P = (E) => {
      if (a.disabled) {
        E.target.blur();
        return;
      }
      s("focusin", E);
    }, Y = (E) => {
      a.disabled || a.noOuterFocus || (f.value = !0, s("focus", E));
    }, te = (E) => {
      f.value = !1, s("blur", E);
    }, ie = (E) => {
      var ae, re;
      const j = typeof E == "string" ? E : E.target.value;
      if (B.value = !1, (ae = a.separator) != null && ae.includes(j.charAt(0)) && j.length > 0) {
        c.value && (c.value.value = "");
        return;
      }
      if (y.value = j, (re = a.separator) != null && re.includes(j.charAt(j.length - 1))) {
        R(j.slice(0, j.length - 1));
        return;
      }
      p.value = a.tagValidator(j) && !w.value ? [j] : [], h.value = a.tagValidator(j) ? [] : [j], b.value = w.value ? [j] : [], s("tag-state", p.value, h.value, b.value);
    }, G = (E) => {
      a.addOnChange && (ie(E), w.value || R(y.value));
    }, F = (E) => {
      if (E.key === "Enter" && !a.noAddOnEnter) {
        R(y.value);
        return;
      }
      (E.key === "Backspace" || E.key === "Delete") && a.removeOnDelete && y.value === "" && B.value && v.value.length > 0 ? X(v.value[v.value.length - 1]) : B.value = !0;
    };
    De(F, { target: c });
    const $ = _(() => {
      if (a.separator)
        return typeof a.separator == "string" ? a.separator : a.separator.join("");
    }), N = _(() => {
      if ($.value)
        return new RegExp(`[${Or($.value)}]+`);
    }), R = (E) => {
      E = (E ?? y.value).trim();
      const j = N.value ? E.split(N.value).map((U) => U.trim()) : [E], ae = [];
      for (const U of j)
        if (!(U === "" || w.value || !a.tagValidator(U))) {
          if (i.value && V.value)
            break;
          ae.push(U);
        }
      const re = [...r.value, ...ae];
      y.value = "", B.value = !0, r.value = re, f.value = !0;
    }, X = (E) => {
      const j = v.value.indexOf((E == null ? void 0 : E.toString()) ?? "");
      j !== -1 && (C.value = v.value.splice(j, 1).toString(), r.value = v.value);
    };
    return o({
      blur: () => {
        f.value = !1;
      },
      element: c,
      focus: () => {
        f.value = !0;
      }
    }), (E, j) => (m(), A("div", {
      id: n(u),
      class: D(["b-form-tags form-control h-auto", S.value]),
      role: "group",
      tabindex: "-1",
      onFocusin: P,
      onFocusout: j[1] || (j[1] = (ae) => s("focusout", ae))
    }, [
      J("output", {
        id: `${n(u)}selected_tags__`,
        class: "visually-hidden",
        for: g.value,
        "aria-live": n(f) ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, Z(v.value.join(", ")), 9, Gu),
      J("div", {
        id: `${n(u)}removed_tags__`,
        role: "status",
        "aria-live": n(f) ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + Z(n(a).tagRemovedLabel) + ") " + Z(C.value), 9, Wu),
      T(E.$slots, "default", Be(Ce(q.value)), () => [
        J("ul", {
          id: `${n(u)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (m(!0), A(pe, null, ke(v.value, (ae, re) => T(E.$slots, "tag", {
            key: re,
            tag: ae,
            tagClass: n(a).tagClass,
            tagVariant: n(a).tagVariant,
            tagPills: n(a).tagPills,
            removeTag: X
          }, () => [
            (m(), O(hn, {
              key: ae,
              class: D(n(a).tagClass),
              tag: "li",
              variant: n(a).tagVariant,
              pill: n(a).tagPills,
              onRemove: X
            }, {
              default: I(() => [
                ue(Z(ae), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"]))
          ])), 128)),
          J("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${n(u)}tag_list__`
          }, [
            J("div", Ku, [
              J("input", K({
                id: g.value,
                ref_key: "input",
                ref: c,
                disabled: n(a).disabled,
                value: y.value,
                type: n(a).inputType,
                placeholder: n(a).placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, n(a).inputAttrs, {
                form: n(a).form,
                required: n(a).required || void 0,
                "aria-required": n(a).required || void 0,
                onInput: ie,
                onChange: G,
                onFocus: Y,
                onBlur: te
              }), null, 16, Yu),
              W.value ? (m(), A("button", {
                key: 0,
                type: "button",
                class: D(["btn b-form-tags-button py-0", [
                  E.inputClass,
                  {
                    [`btn-${n(a).addButtonVariant}`]: n(a).addButtonVariant !== null,
                    "disabled invisible": y.value.length === 0
                  }
                ]]),
                style: { "font-size": "90%" },
                disabled: n(a).disabled || y.value.length === 0 || V.value,
                onClick: j[0] || (j[0] = (ae) => R(y.value))
              }, [
                T(E.$slots, "add-button-text", {}, () => [
                  ue(Z(n(a).addButtonText), 1)
                ])
              ], 10, Zu)) : ee("", !0)
            ])
          ], 8, Xu)
        ], 8, Uu),
        J("div", Ju, [
          x.value ? (m(), A("div", Qu, Z(n(a).invalidTagText) + ": " + Z(y.value), 1)) : ee("", !0),
          w.value ? (m(), A("small", ed, Z(n(a).duplicateTagText) + ": " + Z(y.value), 1)) : ee("", !0),
          v.value.length === n(a).limit ? (m(), A("small", td, Z(n(a).limitTagsText), 1)) : ee("", !0)
        ])
      ]),
      n(a).name ? (m(!0), A(pe, { key: 0 }, ke(v.value, (ae, re) => (m(), A("input", {
        key: re,
        type: "hidden",
        name: n(a).name,
        value: ae
      }, null, 8, ad))), 128)) : ee("", !0)
    ], 42, qu));
  }
}), od = ["id", "name", "form", "value", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"], nd = /* @__PURE__ */ z({
  __name: "BFormTextarea",
  props: /* @__PURE__ */ ge({
    noResize: { type: Boolean, default: !1 },
    rows: { default: 2 },
    wrap: { default: "soft" },
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: { default: void 0 },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazyFormatter: { type: Boolean, default: !1 },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    plaintext: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: void 0 },
    state: { type: [Boolean, null], default: null },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    const l = M(t, "BFormTextarea"), [a, s] = _e(t, "modelValue", {
      set: (p) => {
        if (p === null)
          return;
        let h = p;
        if (s.trim && (h = h.toString().trim()), s.number && typeof h == "string" && h !== "") {
          const b = Number.parseFloat(h);
          h = Number.isNaN(b) ? h : b;
        }
        return h;
      }
    }), { input: r, computedId: u, computedAriaInvalid: i, onInput: d, onChange: c, onBlur: f, focus: g, blur: v } = Uo(l, a, s), y = kt(() => l.state), B = _(() => [
      y.value,
      l.plaintext ? "form-control-plaintext" : "form-control",
      {
        [`form-control-${l.size}`]: !!l.size
      }
    ]), C = _(() => ({
      resize: l.noResize ? "none" : void 0
    }));
    return o({
      blur: v,
      element: r,
      focus: g
    }), (p, h) => (m(), A("textarea", {
      id: n(u),
      ref_key: "input",
      ref: r,
      class: D(B.value),
      name: n(l).name || void 0,
      form: n(l).form || void 0,
      value: n(a) ?? void 0,
      disabled: n(l).disabled,
      placeholder: n(l).placeholder,
      required: n(l).required || void 0,
      autocomplete: n(l).autocomplete || void 0,
      readonly: n(l).readonly || n(l).plaintext,
      "aria-required": n(l).required || void 0,
      "aria-invalid": n(i),
      rows: n(l).rows,
      style: Le(C.value),
      wrap: n(l).wrap || void 0,
      onInput: h[0] || (h[0] = (b) => n(d)(b)),
      onChange: h[1] || (h[1] = (b) => n(c)(b)),
      onBlur: h[2] || (h[2] = (b) => n(f)(b))
    }, null, 46, od));
  }
}), sd = {
  key: 0,
  class: "input-group-text"
}, rd = ["innerHTML"], id = { key: 1 }, ud = {
  key: 0,
  class: "input-group-text"
}, dd = ["innerHTML"], cd = { key: 1 }, fd = /* @__PURE__ */ z({
  __name: "BInputGroup",
  props: {
    append: { default: void 0 },
    appendHtml: { default: void 0 },
    id: { default: void 0 },
    prepend: { default: void 0 },
    prependHtml: { default: void 0 },
    size: { default: "md" },
    tag: { default: "div" }
  },
  setup(t) {
    const e = M(t, "BInputGroup"), l = _(() => ({
      [`input-group-${e.size}`]: e.size !== "md"
    })), a = k(() => !!e.append || !!e.appendHtml), s = k(() => !!e.prepend || !!e.prependHtml);
    return (r, u) => (m(), O(de(n(e).tag), {
      id: n(e).id,
      class: D(["input-group", l.value]),
      role: "group"
    }, {
      default: I(() => [
        T(r.$slots, "prepend", {}, () => [
          s.value ? (m(), A("span", sd, [
            n(e).prependHtml ? (m(), A("span", {
              key: 0,
              innerHTML: n(e).prependHtml
            }, null, 8, rd)) : (m(), A("span", id, Z(n(e).prepend), 1))
          ])) : ee("", !0)
        ]),
        T(r.$slots, "default"),
        T(r.$slots, "append", {}, () => [
          a.value ? (m(), A("span", ud, [
            n(e).appendHtml ? (m(), A("span", {
              key: 0,
              innerHTML: n(e).appendHtml
            }, null, 8, dd)) : (m(), A("span", cd, Z(n(e).append), 1))
          ])) : ee("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Bn = /* @__PURE__ */ z({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BInputGroupText");
    return (l, a) => (m(), O(de(n(e).tag), { class: "input-group-text" }, {
      default: I(() => [
        T(l.$slots, "default", {}, () => [
          ue(Z(n(e).text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), dl = /* @__PURE__ */ z({
  __name: "BInputGroupAddon",
  props: {
    isText: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BInputGroupAddon");
    return (l, a) => n(e).isText ? (m(), O(Bn, { key: 0 }, {
      default: I(() => [
        T(l.$slots, "default")
      ]),
      _: 3
    })) : T(l.$slots, "default", { key: 1 });
  }
}), vd = /* @__PURE__ */ z({
  __name: "BInputGroupAppend",
  props: {
    isText: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BInputGroupAppend");
    return (l, a) => (m(), O(dl, Be(Ce(n(e))), {
      default: I(() => [
        T(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pd = /* @__PURE__ */ z({
  __name: "BInputGroupPrepend",
  props: {
    isText: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BInputGroupPrepend");
    return (l, a) => (m(), O(dl, Be(Ce(n(e))), {
      default: I(() => [
        T(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), md = /* @__PURE__ */ z({
  __name: "BListGroup",
  props: {
    flush: { type: Boolean, default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { type: Boolean, default: !1 },
    tag: { default: "div" }
  },
  setup(t) {
    const e = M(t, "BListGroup"), l = _(() => {
      const s = e.flush ? !1 : e.horizontal;
      return {
        "list-group-flush": e.flush,
        "list-group-horizontal": s === !0,
        [`list-group-horizontal-${s}`]: typeof s == "string",
        "list-group-numbered": e.numbered
      };
    }), a = k(() => e.numbered === !0 ? "ol" : e.tag);
    return Qe($o, {
      numbered: k(() => e.numbered)
    }), (s, r) => (m(), O(de(a.value), {
      class: D(["list-group", l.value])
    }, {
      default: I(() => [
        T(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bd = /* @__PURE__ */ z({
  __name: "BListGroupItem",
  props: {
    action: { type: Boolean, default: !1 },
    button: { type: Boolean, default: !1 },
    tag: { default: "div" },
    active: { type: Boolean, default: !1 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BListGroupItem"), l = jt(), a = Ve($o, null), { computedLink: s } = Ct(e), r = k(() => !e.button && s.value), u = k(
      () => a != null && a.numbered.value ? "li" : e.button ? "button" : r.value ? st : e.tag
    ), i = _(
      () => e.action || r.value || e.button || ["a", "router-link", "button", "b-link"].includes(e.tag)
    ), d = _(() => ({
      [`list-group-item-${e.variant}`]: e.variant !== null && e.variant !== void 0,
      "list-group-item-action": i.value,
      active: e.active,
      disabled: e.disabled
    })), c = _(() => {
      const f = {};
      return e.button && ((!l || !l.type) && (f.type = "button"), e.disabled && (f.disabled = !0)), f;
    });
    return (f, g) => (m(), O(de(u.value), K({
      class: ["list-group-item", d.value],
      "aria-current": n(e).active ? !0 : void 0,
      "aria-disabled": n(e).disabled ? !0 : void 0,
      target: r.value ? n(e).target : void 0,
      href: n(e).button ? void 0 : n(e).href,
      to: n(e).button ? void 0 : n(e).to
    }, c.value), {
      default: I(() => [
        T(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), yd = { id: "__BVID__modal-container" }, gd = /* @__PURE__ */ z({
  __name: "BModalOrchestrator",
  props: {
    teleportDisabled: { default: !1 },
    teleportTo: { default: "body" }
  },
  setup(t, { expose: o }) {
    const l = M(t, "BModalOrchestrator"), { modals: a, remove: s, show: r, confirm: u } = Ko(), i = (d) => ga(d, ["_promise", "_self", "_isConfirm", "_modelValue"]);
    return o({
      modals: a,
      show: r,
      confirm: u
    }), (d, c) => (m(), O(_t, {
      to: n(l).teleportTo,
      disabled: n(l).teleportDisabled
    }, [
      J("div", yd, [
        (m(!0), A(pe, null, ke(n(a), (f, g) => (m(), O(de(f.value.component), K({
          key: g,
          modelValue: f.value.props._modelValue,
          "onUpdate:modelValue": (v) => f.value.props._modelValue = v,
          ref_for: !0
        }, i(f.value.props), {
          "teleport-disabled": !0,
          onHide: (v) => {
            if (f.value.props._isConfirm === !0) {
              if (v.trigger === "ok") {
                f.value.props._promise.resolve(!0);
                return;
              }
              if (v.trigger === "cancel") {
                f.value.props._promise.resolve(!1);
                return;
              }
              f.value.props._promise.resolve(null);
            }
            f.value.props._promise.resolve(!0);
          },
          onHidden: (v) => {
            var y;
            return (y = n(s)) == null ? void 0 : y(f.value.props._self);
          }
        }), null, 16, ["modelValue", "onUpdate:modelValue", "onHide", "onHidden"]))), 128))
      ])
    ], 8, ["to", "disabled"]));
  }
}), hd = /* @__PURE__ */ z({
  __name: "BNav",
  props: {
    align: { default: void 0 },
    cardHeader: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 },
    justified: { type: Boolean, default: !1 },
    pills: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    tabs: { type: Boolean, default: !1 },
    tag: { default: "ul" },
    underline: { type: Boolean, default: !1 },
    vertical: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BNav"), l = Gt(() => e.align), a = _(() => ({
      "nav-tabs": e.tabs,
      "nav-pills": e.pills && !e.tabs,
      "card-header-tabs": !e.vertical && e.cardHeader && e.tabs,
      "card-header-pills": !e.vertical && e.cardHeader && e.pills && !e.tabs,
      "flex-column": e.vertical,
      "nav-fill": !e.vertical && e.fill,
      "nav-justified": !e.vertical && e.justified,
      [l.value]: !e.vertical && e.align !== void 0,
      small: e.small,
      "nav-underline": e.underline
    }));
    return (s, r) => (m(), O(de(n(e).tag), {
      class: D(["nav", a.value])
    }, {
      default: I(() => [
        T(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bd = { class: "d-flex flex-row align-items-center flex-wrap" }, _d = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BNavForm",
  props: {
    role: { default: void 0 },
    floating: { type: Boolean, default: void 0 },
    id: { default: void 0 },
    novalidate: { type: Boolean, default: void 0 },
    validated: { type: Boolean, default: void 0 }
  },
  emits: ["submit"],
  setup(t, { emit: o }) {
    const l = M(t, "BNavForm"), a = o, s = (r) => {
      a("submit", r);
    };
    return (r, u) => (m(), A("li", Bd, [
      be(pn, K(r.$attrs, {
        id: n(l).id,
        floating: n(l).floating,
        role: n(l).role,
        novalidate: n(l).novalidate,
        validated: n(l).validated,
        class: "d-flex",
        onSubmit: pt(s, ["prevent"])
      }), {
        default: I(() => [
          T(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "floating", "role", "novalidate", "validated"])
    ]));
  }
}), wd = { class: "nav-item" }, Cd = /* @__PURE__ */ z({
  __name: "BNavItem",
  props: {
    linkAttrs: { default: void 0 },
    linkClass: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BNavItem"), a = o, s = _(
      () => al(l, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "icon",
        "opacity",
        "opacityHover",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "underlineVariant",
        "variant"
      ])
    );
    return s.value.activeClass, (r, u) => (m(), A("li", wd, [
      be(st, K({
        class: ["nav-link", r.linkClass],
        tabindex: n(l).disabled ? -1 : void 0,
        "aria-disabled": n(l).disabled ? !0 : void 0
      }, { ...s.value, ...r.linkAttrs }, {
        onClick: u[0] || (u[0] = (i) => a("click", i))
      }), {
        default: I(() => [
          T(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "tabindex", "aria-disabled"])
    ]));
  }
}), kd = { class: "nav-item dropdown" }, Td = /* @__PURE__ */ z({
  __name: "BNavItemDropdown",
  props: /* @__PURE__ */ ge({
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: !0 },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dropend: { type: Boolean, default: !1 },
    dropstart: { type: Boolean, default: !1 },
    dropup: { type: Boolean, default: !1 },
    end: { type: Boolean, default: !1 },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: Boolean, default: !0 },
    lazy: { type: Boolean, default: !1 },
    menuClass: { default: void 0 },
    modelValue: { type: Boolean },
    noCaret: { type: Boolean, default: !1 },
    noFlip: { type: Boolean, default: !1 },
    noShift: { type: Boolean, default: !1 },
    noSize: { type: Boolean, default: !1 },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: Boolean, default: !1 },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: Boolean, default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "link" },
    teleportDisabled: { default: !1 },
    teleportTo: { default: void 0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BNavItemDropdown"), s = e, r = _e(t, "modelValue"), u = L(null), i = () => {
      var f;
      (f = u.value) == null || f.hide();
    }, d = () => {
      var f;
      (f = u.value) == null || f.show();
    };
    return o({
      hide: i,
      show: d,
      toggle: () => {
        var f;
        (f = u.value) == null || f.toggle();
      }
    }), (f, g) => (m(), A("li", kd, [
      be(vn, K({
        ref_key: "dropdown",
        ref: u
      }, n(a), {
        modelValue: r.value,
        "onUpdate:modelValue": g[0] || (g[0] = (v) => r.value = v),
        "is-nav": "",
        onShow: g[1] || (g[1] = (v) => s("show", v)),
        onShown: g[2] || (g[2] = (v) => s("shown")),
        onHide: g[3] || (g[3] = (v) => s("hide", v)),
        onHidden: g[4] || (g[4] = (v) => s("hidden")),
        onHidePrevented: g[5] || (g[5] = (v) => s("hide-prevented")),
        onShowPrevented: g[6] || (g[6] = (v) => s("show-prevented")),
        onClick: g[7] || (g[7] = (v) => s("click", v)),
        onToggle: g[8] || (g[8] = (v) => s("toggle"))
      }), {
        "button-content": I(() => [
          T(f.$slots, "button-content")
        ]),
        "toggle-text": I(() => [
          T(f.$slots, "toggle-text")
        ]),
        default: I(() => [
          T(f.$slots, "default", {
            hide: i,
            show: d
          })
        ]),
        _: 3
      }, 16, ["modelValue"])
    ]));
  }
}), $d = { class: "navbar-text" }, xd = /* @__PURE__ */ z({
  __name: "BNavText",
  props: {
    text: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BNavText");
    return (l, a) => (m(), A("li", $d, [
      T(l.$slots, "default", {}, () => [
        ue(Z(n(e).text), 1)
      ])
    ]));
  }
}), Sd = /* @__PURE__ */ z({
  __name: "BNavbar",
  props: {
    autoClose: { type: Boolean, default: !0 },
    container: { type: [Boolean, String], default: "fluid" },
    fixed: { default: void 0 },
    print: { type: Boolean, default: !1 },
    sticky: { default: void 0 },
    tag: { default: "nav" },
    toggleable: { type: [Boolean, String], default: !1 },
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BNavbar"), l = k(() => e.tag === "nav" ? void 0 : "navigation"), a = Er(() => e.container), s = _(() => ({
      "d-print": e.print,
      [`sticky-${e.sticky}`]: e.sticky !== void 0,
      [`bg-${e.variant}`]: e.variant !== null,
      [`fixed-${e.fixed}`]: e.fixed !== void 0,
      "navbar-expand": e.toggleable === !1,
      [`navbar-expand-${e.toggleable}`]: typeof e.toggleable == "string"
    }));
    return Qe(tl, {
      tag: k(() => e.tag),
      autoClose: k(() => e.autoClose)
    }), (r, u) => (m(), O(de(n(e).tag), {
      class: D(["navbar", s.value]),
      role: l.value
    }, {
      default: I(() => [
        n(e).container !== !1 ? (m(), A("div", {
          key: 0,
          class: D(n(a))
        }, [
          T(r.$slots, "default")
        ], 2)) : T(r.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), Vd = /* @__PURE__ */ z({
  __name: "BNavbarBrand",
  props: {
    tag: { default: "div" },
    active: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: Boolean, default: void 0 },
    stretched: { type: Boolean, default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: Boolean, default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BNavbarBrand"), { computedLink: l, computedLinkProps: a } = Ct(e, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "variant",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), s = k(() => l.value ? st : e.tag);
    return (r, u) => (m(), O(de(s.value), K({ class: "navbar-brand" }, n(a)), {
      default: I(() => [
        T(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ad = /* @__PURE__ */ z({
  __name: "BNavbarNav",
  props: {
    align: { default: void 0 },
    fill: { type: Boolean, default: !1 },
    justified: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    tag: { default: "ul" }
  },
  setup(t) {
    const e = M(t, "BNavbarNav"), l = Gt(() => e.align), a = _(() => ({
      "nav-fill": e.fill,
      "nav-justified": e.justified,
      [l.value]: e.align !== void 0,
      small: e.small
    }));
    return (s, r) => (m(), A("ul", {
      class: D(["navbar-nav", a.value])
    }, [
      T(s.$slots, "default")
    ], 2));
  }
}), Ll = (t, o) => t.setAttribute("data-bs-theme", o), Od = {
  mounted(t, o) {
    Ll(t, o.value);
  },
  updated(t, o) {
    Ll(t, o.value);
  }
}, Id = (t, o) => {
  const { modifiers: e, arg: l, value: a } = t, s = Object.keys(e || {}), r = typeof a == "string" ? a.split(ea) : a;
  if (o.tagName.toLowerCase() === "a") {
    const u = o.getAttribute("href") || "";
    $r.test(u) && s.push(u.replace(Tr, ""));
  }
  return Array.prototype.concat.apply([], [l, r]).forEach((u) => typeof u == "string" && s.push(u)), s.filter((u, i, d) => u && d.indexOf(u) === i);
}, Pd = (t, o) => {
  t.forEach((e) => {
    const l = document.getElementById(e);
    l !== null && l.dispatchEvent(new Event("bv-toggle"));
  }), setTimeout(() => _n(t, o), 50);
}, _n = (t, o) => {
  let e = !1;
  t.forEach((l) => {
    const a = document.getElementById(l);
    a != null && a.classList.contains("show") && (e = !0), a != null && a.classList.contains("closing") && (e = !1);
  }), o.setAttribute("aria-expanded", e ? "true" : "false"), o.classList.remove(e ? "collapsed" : "not-collapsed"), o.classList.add(e ? "not-collapsed" : "collapsed");
}, zl = (t, o) => {
  const e = Id(o, t);
  e.length !== 0 && (t.__toggle && t.removeEventListener("click", t.__toggle), t.__toggle = () => Pd(e, t), t.addEventListener("click", t.__toggle), t.setAttribute("aria-controls", e.join(" ")), _n(e, t));
}, Fa = {
  mounted: zl,
  updated: zl,
  unmounted(t) {
    t.removeEventListener("click", t.__toggle), t.removeAttribute("aria-controls"), t.removeAttribute("aria-expanded");
  }
}, Nd = {
  mounted(t, o) {
    if (!Dt(o.value))
      return;
    const l = ua(o.value, t);
    !l.content && !l.title || ca(t, o, {
      ...da(o, t),
      ...l
    });
  },
  updated(t, o) {
    if (!Dt(o.value))
      return;
    const l = ua(o.value, t);
    !l.content && !l.title || (fa(t), ca(t, o, {
      ...da(o, t),
      ...l
    }));
  },
  beforeUnmount(t) {
    fa(t);
  }
}, Hl = (t, o) => {
  t.$__scrollspy && t.$__scrollspy.cleanup();
  const { arg: e, value: l } = o, a = typeof l == "object" && l !== null, s = e || (typeof l == "string" ? l : a ? l.content || l.element : null);
  t.$__scrollspy = Zo(s, t, a ? ga(l, ["content", "element"]) : {});
}, Ed = {
  mounted: Hl,
  updated: Hl,
  beforeUnmount(t) {
    t.$__scrollspy && t.$__scrollspy.cleanup();
  }
}, Fd = {
  mounted(t, o) {
    const e = Dt(o.value);
    if (!e)
      return;
    const l = ua(o.value, t);
    !l.content && !l.title || ca(t, o, {
      noninteractive: !0,
      ...da(o, t),
      title: l.title ?? l.content ?? "",
      tooltip: e
    });
  },
  updated(t, o) {
    const e = Dt(o.value);
    if (!e)
      return;
    const l = ua(o.value, t);
    !l.content && !l.title || (fa(t), ca(t, o, {
      noninteractive: !0,
      ...da(o, t),
      title: l.title ?? l.content ?? "",
      tooltip: e
    }));
  },
  beforeUnmount(t) {
    fa(t);
  }
}, La = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  vBColorMode: Od,
  vBModal: Fa,
  vBPopover: Nd,
  vBScrollspy: Ed,
  vBToggle: Fa,
  vBTooltip: Fd
}, Symbol.toStringTag, { value: "Module" })), Ld = ["disabled", "aria-label"], zd = /* @__PURE__ */ J("span", { class: "navbar-toggler-icon" }, null, -1), Hd = /* @__PURE__ */ z({
  __name: "BNavbarToggle",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "Toggle navigation" },
    target: { default: void 0 }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const l = M(t, "BNavbarToggle"), a = o, s = _(() => ({
      disabled: l.disabled
    })), r = (u) => {
      l.disabled || a("click", u);
    };
    return (u, i) => ct((m(), A("button", {
      class: D(["navbar-toggler", s.value]),
      type: "button",
      disabled: n(l).disabled,
      "aria-label": n(l).label,
      onClick: r
    }, [
      T(u.$slots, "default", {}, () => [
        zd
      ])
    ], 10, Ld)), [
      [n(Fa), n(l).disabled ? void 0 : n(l).target]
    ]);
  }
}), Md = ["id", "aria-labelledby"], Rd = ["id"], Dd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BOffcanvas",
  props: /* @__PURE__ */ ge({
    backdrop: { type: Boolean, default: !0 },
    backdropBlur: { default: void 0 },
    backdropVariant: { default: "dark" },
    bodyAttrs: { default: void 0 },
    bodyClass: { default: void 0 },
    bodyScrolling: { type: Boolean, default: !1 },
    footerClass: { default: void 0 },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    id: { default: void 0 },
    lazy: { type: Boolean, default: !1 },
    modelValue: { type: Boolean },
    noCloseOnBackdrop: { type: Boolean, default: !1 },
    noCloseOnEsc: { type: Boolean, default: !1 },
    noFocus: { type: Boolean, default: !1 },
    noHeader: { type: Boolean, default: !1 },
    noHeaderClose: { type: Boolean, default: !1 },
    placement: { default: "start" },
    shadow: { type: [String, Boolean], default: !1 },
    title: { default: void 0 },
    width: { default: void 0 },
    teleportDisabled: { default: !1 },
    teleportTo: { default: "body" }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["close", "esc", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown"], ["update:modelValue"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BOffcanvas"), s = e, r = He(), u = _e(t, "modelValue"), i = we(() => a.id, "offcanvas");
    Yo(u, () => a.bodyScrolling);
    const d = L(null);
    De(
      "Escape",
      () => {
        V("esc");
      },
      { target: d }
    );
    const { focused: c } = Fe(d, {
      initialValue: u.value && a.noFocus === !1
    }), f = L(u.value), g = L(!1), v = k(() => a.backdrop === !0 && u.value === !0), y = k(
      () => a.lazy === !1 || a.lazy === !0 && g.value === !0 || a.lazy === !0 && u.value === !0
    ), B = k(() => !Ae(r["header-close"])), C = _(() => [
      { "text-reset": !B.value },
      a.headerCloseClass
    ]), p = _(() => ({
      variant: B.value ? a.headerCloseVariant : void 0,
      class: C.value
    })), h = k(() => !Ae(r.footer)), b = _(() => [
      // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
      "offcanvas",
      // Remove when above check is fixed
      `offcanvas-${a.placement}`,
      {
        show: u.value && f.value === !0,
        [`shadow-${a.shadow}`]: !!a.shadow
      }
    ]), S = _(() => ({
      width: a.width
    })), w = _(() => ({
      visible: u.value,
      placement: a.placement,
      hide: V
    })), x = (G, F = {}) => new wt(G, {
      cancelable: !1,
      target: d.value || null,
      relatedTarget: null,
      trigger: null,
      ...F,
      componentId: i.value
    }), V = (G = "") => {
      if (G === "backdrop" && a.noCloseOnBackdrop || G === "esc" && a.noCloseOnEsc) {
        s("hide-prevented");
        return;
      }
      const F = x("hide", { cancelable: G !== "", trigger: G });
      if (G === "close" && s(G, F), G === "esc" && s(G, F), s("hide", F), F.defaultPrevented) {
        s("hide-prevented");
        return;
      }
      u.value = !1;
    }, W = () => {
      const G = x("show", { cancelable: !0 });
      if (s("show", G), G.defaultPrevented) {
        u.value = !1, s("show-prevented");
        return;
      }
      u.value = !0;
    }, q = () => {
      Ne(() => {
        a.noFocus === !1 && (c.value = !0);
      });
    }, P = () => W(), Y = () => {
      f.value = !0, q(), s("shown", x("shown")), a.lazy === !0 && (g.value = !0);
    }, te = () => {
      f.value = !1;
    }, ie = () => {
      s("hidden", x("hidden")), a.lazy === !0 && (g.value = !1);
    };
    return Te(d, "bv-toggle", () => {
      u.value ? V() : W();
    }), o({
      hide: V,
      show: W
    }), (G, F) => (m(), O(_t, {
      to: n(a).teleportTo,
      disabled: n(a).teleportDisabled
    }, [
      be(Et, {
        "no-fade": !0,
        "trans-props": {
          enterToClass: "showing",
          enterFromClass: "",
          leaveToClass: "hiding show",
          leaveFromClass: "show"
        },
        onBeforeEnter: P,
        onAfterEnter: Y,
        onLeave: te,
        onAfterLeave: ie
      }, {
        default: I(() => [
          ct(J("div", K({
            id: n(i),
            ref_key: "element",
            ref: d,
            "aria-modal": "true",
            role: "dialog",
            class: b.value,
            style: S.value,
            tabindex: "-1",
            "aria-labelledby": `${n(i)}-offcanvas-label`,
            "data-bs-backdrop": "false"
          }, G.$attrs), [
            y.value ? (m(), A(pe, { key: 0 }, [
              n(a).noHeader ? ee("", !0) : (m(), A("div", {
                key: 0,
                class: D(["offcanvas-header", n(a).headerClass])
              }, [
                T(G.$slots, "header", Be(Ce(w.value)), () => [
                  J("h5", {
                    id: `${n(i)}-offcanvas-label`,
                    class: "offcanvas-title"
                  }, [
                    T(G.$slots, "title", Be(Ce(w.value)), () => [
                      ue(Z(n(a).title), 1)
                    ])
                  ], 8, Rd),
                  n(a).noHeaderClose ? ee("", !0) : (m(), A(pe, { key: 0 }, [
                    B.value ? (m(), O(mt, K({ key: 0 }, p.value, {
                      onClick: F[0] || (F[0] = ($) => V("close"))
                    }), {
                      default: I(() => [
                        T(G.$slots, "header-close")
                      ]),
                      _: 3
                    }, 16)) : (m(), O(Ft, K({
                      key: 1,
                      "aria-label": n(a).headerCloseLabel
                    }, p.value, {
                      onClick: F[1] || (F[1] = ($) => V("close"))
                    }), null, 16, ["aria-label"]))
                  ], 64))
                ])
              ], 2)),
              J("div", K({
                class: ["offcanvas-body", n(a).bodyClass]
              }, n(a).bodyAttrs), [
                T(G.$slots, "default", Be(Ce(w.value)))
              ], 16),
              h.value ? (m(), A("div", {
                key: 1,
                class: D(n(a).footerClass)
              }, [
                T(G.$slots, "footer", Be(Ce(w.value)))
              ], 2)) : ee("", !0)
            ], 64)) : ee("", !0)
          ], 16, Md), [
            [qt, u.value]
          ])
        ]),
        _: 3
      }),
      T(G.$slots, "backdrop", {}, () => [
        be(Ba, {
          blur: n(a).backdropBlur,
          variant: n(a).backdropVariant,
          show: v.value,
          fixed: "",
          "no-wrap": "",
          "no-spinner": "",
          onClick: F[2] || (F[2] = ($) => V("backdrop"))
        }, null, 8, ["blur", "variant", "show"])
      ])
    ], 8, ["to", "disabled"]));
  }
}), jd = ["aria-disabled", "aria-label"], Ml = 20, Rl = 0, qd = /* @__PURE__ */ z({
  __name: "BPagination",
  props: /* @__PURE__ */ ge({
    align: { default: "start" },
    ariaControls: { default: void 0 },
    ariaLabel: { default: "Pagination" },
    disabled: { type: Boolean, default: !1 },
    ellipsisClass: { default: void 0 },
    ellipsisText: { default: "…" },
    firstClass: { default: void 0 },
    firstNumber: { type: Boolean, default: !1 },
    firstText: { default: "«" },
    hideEllipsis: { type: Boolean, default: !1 },
    hideGotoEndButtons: { type: Boolean, default: !1 },
    labelFirstPage: { default: "Go to first page" },
    labelLastPage: { default: "Go to last page" },
    labelNextPage: { default: "Go to next page" },
    labelPage: { default: "Go to page" },
    labelPrevPage: { default: "Go to previous page" },
    lastClass: { default: void 0 },
    lastNumber: { type: Boolean, default: !1 },
    lastText: { default: "»" },
    limit: { default: 5 },
    modelValue: {},
    nextClass: { default: void 0 },
    nextText: { default: "›" },
    pageClass: { default: void 0 },
    perPage: { default: Ml },
    pills: { type: Boolean, default: !1 },
    prevClass: { default: void 0 },
    prevText: { default: "‹" },
    size: { default: void 0 },
    totalRows: { default: Rl }
  }, {
    modelValue: { default: 1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["page-click"], ["update:modelValue"]),
  setup(t, { emit: o }) {
    const d = M(t, "BPagination"), c = o, f = _e(t, "modelValue"), g = he(() => d.limit, { nanToZero: !0, method: "parseInt" }), v = he(() => d.perPage, { nanToZero: !0, method: "parseInt" }), y = he(() => d.totalRows, { nanToZero: !0, method: "parseInt" }), B = he(f, { nanToZero: !0, method: "parseInt" }), C = k(() => Math.max(v.value || Ml, 1)), p = k(() => Math.max(y.value || Rl, 0)), h = k(() => Math.ceil(p.value / C.value)), b = k(() => d.align === "fill"), S = k(() => d.align === "fill" ? "start" : d.align), w = Gt(S), x = (Q) => Q === B.value, V = (Q) => d.disabled ? null : x(Q) ? "0" : "-1", W = (Q) => d.disabled || x(Q) || B.value < 1 || // Check if the number is out of bounds
    Q < 1 || Q > h.value, q = _(() => W(1)), P = _(() => W(B.value - 1)), Y = _(() => W(h.value)), te = _(() => W(B.value + 1)), ie = ({
      page: Q,
      classVal: ce,
      dis: oe,
      slotName: le,
      textValue: H,
      tabIndex: se,
      label: ye,
      position: me,
      isActive: Oe,
      role: $e,
      hidden: xe
    }) => ({
      li: {
        class: [
          "page-item",
          {
            active: Oe,
            disabled: oe,
            "flex-fill": b.value,
            "d-flex": b.value && !oe
          },
          ce
        ],
        role: $e,
        "aria-hidden": xe
      },
      button: {
        is: oe ? "span" : "button",
        class: ["page-link", { "flex-grow-1": !oe && b.value }],
        "aria-label": ye,
        "aria-controls": d.ariaControls || void 0,
        "aria-disabled": oe ? !0 : void 0,
        "aria-posinset": me,
        "aria-setsize": me ? h.value : void 0,
        role: "menuitem",
        type: oe ? void 0 : "button",
        tabindex: oe ? void 0 : se
      },
      text: {
        name: le,
        active: Oe,
        value: H ?? Q,
        page: Q,
        disabled: oe,
        index: Q - 1,
        content: H ? void 0 : Q
      },
      clickHandler: (et) => ne(et, Q)
    }), G = ({
      page: Q,
      classVal: ce,
      dis: oe,
      slotName: le,
      textValue: H,
      label: se
    }) => ie({ page: Q, classVal: ce, dis: oe, slotName: le, textValue: H, label: se, tabIndex: "-1" }), F = (Q) => ie({
      page: Q,
      dis: d.disabled,
      classVal: d.pageClass,
      slotName: "page",
      label: d.labelPage ? `${d.labelPage} ${Q}` : void 0,
      tabIndex: V(Q) ?? void 0,
      position: Q,
      isActive: x(Q)
    }), $ = _(
      () => G({
        page: 1,
        dis: q.value,
        classVal: d.firstClass,
        slotName: "first-text",
        textValue: d.firstText,
        label: d.labelFirstPage
      })
    ), N = _(
      () => G({
        page: Math.max(B.value - 1, 1),
        dis: P.value,
        classVal: d.prevClass,
        slotName: "prev-text",
        textValue: d.prevText,
        label: d.labelPrevPage
      })
    ), R = _(
      () => G({
        page: Math.min(B.value + 1, h.value),
        dis: te.value,
        classVal: d.nextClass,
        slotName: "next-text",
        textValue: d.nextText,
        label: d.labelNextPage
      })
    ), X = _(
      () => G({
        page: h.value,
        dis: Y.value,
        classVal: d.lastClass,
        slotName: "last-text",
        textValue: d.lastText,
        label: d.labelLastPage
      })
    ), E = Rt(), j = Rt(), ae = _(() => ({
      li: {
        class: [
          "page-item",
          "disabled",
          "bv-d-xs-down-none",
          b.value ? "flex-fill" : "",
          d.ellipsisClass
        ],
        role: "separator"
      },
      span: {
        class: ["page-link"]
      }
    })), re = _(() => [
      w.value,
      {
        [`pagination-${d.size}`]: d.size !== void 0,
        "b-pagination-pills": d.pills
      }
    ]), U = _(() => ({
      pageSize: C.value,
      totalRows: y.value,
      numberOfPages: h.value
    })), ne = (Q, ce) => {
      if (ce === B.value)
        return;
      const oe = new rt("page-click", {
        cancelable: !0,
        target: Q.target
      });
      c("page-click", oe, ce), !oe.defaultPrevented && (f.value = ce);
    };
    fe(B, (Q) => {
      const oe = ((le, H) => {
        const se = le || 1;
        return se > H ? H : se < 1 ? 1 : se;
      })(Q, h.value);
      oe !== f.value && (f.value = oe);
    }), fe(U, (Q, ce) => {
      (ce.pageSize !== Q.pageSize && ce.totalRows === Q.totalRows || ce.numberOfPages !== Q.numberOfPages && B.value > ce.numberOfPages) && (f.value = 1);
    });
    const ve = _(() => {
      const Q = h.value, { value: ce } = B, oe = g.value, le = d.firstNumber ? 1 : 0, H = d.lastNumber ? 1 : 0, se = d.hideEllipsis || oe <= 3, ye = d.hideGotoEndButtons ? 1 : 0;
      if (Q < oe + le + H)
        return [
          !le && !ye ? -1 : null,
          -2,
          ...Array.from({ length: Q }, ($e, xe) => xe + 1),
          -3,
          !H && !ye ? -4 : null
        ].filter(($e) => $e !== null);
      const me = Array.from({ length: oe + 4 - ye * 2 });
      ye ? (me[0] = -2, me[me.length - 1] = -3) : (le ? (me[0] = -2, me[1] = 1) : (me[0] = -1, me[1] = -2), H ? (me[me.length - 1] = -3, me[me.length - 2] = Q) : (me[me.length - 1] = -4, me[me.length - 2] = -3));
      const Oe = Math.floor(oe / 2);
      if (ce <= Oe + le) {
        for (let $e = 1; $e <= oe; $e++)
          me[$e + 1 - ye] = $e + le;
        se || (me[me.length - 3] = -5);
      }
      if (ce > Q - Oe - H) {
        const $e = Q - (oe - 1) - H;
        for (let xe = 0; xe < oe; xe++)
          me[xe + 2 - ye] = $e + xe;
        se || (me[2] = -5);
      }
      if (!me[2]) {
        const $e = ce - Math.floor(oe / 2);
        for (let xe = 0; xe < oe; xe++)
          me[xe + 2 - ye] = $e + xe;
        se || (me[2] = -5, me[me.length - 3] = -5);
      }
      return me;
    });
    return (Q, ce) => (m(), A("ul", {
      class: D(["pagination", re.value]),
      role: "menubar",
      "aria-disabled": n(d).disabled,
      "aria-label": n(d).ariaLabel || void 0
    }, [
      be(n(E).define, null, {
        default: I(({ button: oe, li: le, text: H, clickHandler: se }) => [
          J("li", Be(Ce(le)), [
            (m(), O(de(oe.is), K(oe, { onClick: se }), {
              default: I(() => [
                T(Q.$slots, H.name, {
                  disabled: H.disabled,
                  page: H.page,
                  index: H.index,
                  active: H.active,
                  content: H.value
                }, () => [
                  ue(Z(H.value), 1)
                ])
              ]),
              _: 2
            }, 1040, ["onClick"]))
          ], 16)
        ]),
        _: 3
      }),
      be(n(j).define, null, {
        default: I(() => [
          J("li", Be(Ce(ae.value.li)), [
            J("span", Be(Ce(ae.value.span)), [
              T(Q.$slots, "ellipsis-text", {}, () => [
                ue(Z(n(d).ellipsisText || "..."), 1)
              ])
            ], 16)
          ], 16)
        ]),
        _: 3
      }),
      (m(!0), A(pe, null, ke(ve.value, (oe) => (m(), A(pe, {
        key: `page-${oe}`
      }, [
        oe === -1 ? (m(), O(n(E).reuse, K({
          key: 0,
          ref_for: !0
        }, $.value), null, 16)) : oe === -2 ? (m(), O(n(E).reuse, K({
          key: 1,
          ref_for: !0
        }, N.value), null, 16)) : oe === -3 ? (m(), O(n(E).reuse, K({
          key: 2,
          ref_for: !0
        }, R.value), null, 16)) : oe === -4 ? (m(), O(n(E).reuse, K({
          key: 3,
          ref_for: !0
        }, X.value), null, 16)) : oe === -5 ? (m(), O(n(j).reuse, { key: 4 })) : oe !== null ? (m(), O(n(E).reuse, K({
          key: 5,
          ref_for: !0
        }, F(oe)), null, 16)) : ee("", !0)
      ], 64))), 128))
    ], 10, jd));
  }
}), Xe = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BPlaceholder",
  props: {
    animation: { default: void 0 },
    cols: { default: 12 },
    size: { default: "md" },
    tag: { default: "span" },
    variant: { default: null },
    width: { default: void 0 },
    wrapperTag: { default: "span" }
  },
  setup(t) {
    const e = M(t, "BPlaceholder"), l = k(
      () => e.width === void 0 ? void 0 : typeof e.width == "number" ? e.width.toString() : e.width.replace("%", "")
    ), a = k(
      () => e.cols === void 0 ? void 0 : typeof e.cols == "number" ? e.cols.toString() : e.cols
    ), s = _(() => ({
      [`col-${a.value}`]: a.value !== void 0 && l.value === void 0,
      [`bg-${e.variant}`]: e.variant !== null,
      [`placeholder-${e.size}`]: e.size !== "md"
    })), r = _(() => ({
      [`placeholder-${e.animation}`]: e.animation !== void 0
    })), u = _(() => ({
      width: l.value === void 0 ? void 0 : `${l.value}%`
    }));
    return (i, d) => (m(), O(de(n(e).wrapperTag), {
      class: D(r.value)
    }, {
      default: I(() => [
        (m(), O(de(i.tag), K(i.$attrs, {
          class: ["placeholder", s.value],
          style: u.value
        }), null, 16, ["class", "style"]))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), wn = /* @__PURE__ */ z({
  __name: "BPlaceholderButton",
  props: {
    animation: { default: void 0 },
    cols: { default: void 0 },
    tag: { default: "div" },
    variant: { default: "primary" },
    width: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BPlaceholderButton"), l = _(() => ({
      [`btn-${e.variant}`]: e.variant !== null
    }));
    return (a, s) => (m(), O(Xe, {
      class: D(["btn disabled", l.value]),
      animation: n(e).animation,
      width: n(e).width,
      cols: n(e).cols,
      tag: n(e).tag,
      style: { cursor: "wait", "pointer-events": "auto" }
    }, null, 8, ["class", "animation", "width", "cols", "tag"]));
  }
}), Gd = /* @__PURE__ */ z({
  __name: "BPlaceholderCard",
  props: {
    animation: { default: void 0 },
    footerAnimation: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    footerWidth: { default: 100 },
    headerAnimation: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    headerWidth: { default: 100 },
    imgBlankColor: { default: "#868e96" },
    imgPlacement: { default: "top" },
    imgHeight: { default: 100 },
    imgSrc: { default: void 0 },
    noButton: { type: Boolean, default: !1 },
    noFooter: { type: Boolean, default: !1 },
    noHeader: { type: Boolean, default: !1 },
    noImg: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BPlaceholderCard"), l = _(() => ({
      animation: e.animation,
      size: e.size,
      variant: e.variant
    })), a = k(() => e.noButton ? Xe : wn);
    return (s, r) => (m(), O(fn, {
      "img-placement": n(e).imgPlacement
    }, Ra({
      default: I(() => [
        T(s.$slots, "default", {}, () => [
          be(Xe, K({ cols: "7" }, l.value), null, 16),
          be(Xe, K({ cols: "4" }, l.value), null, 16),
          be(Xe, K({ cols: "4" }, l.value), null, 16),
          be(Xe, K({ cols: "6" }, l.value), null, 16),
          be(Xe, K({ cols: "8" }, l.value), null, 16)
        ])
      ]),
      _: 2
    }, [
      n(e).noImg ? void 0 : {
        name: "img",
        fn: I(() => [
          T(s.$slots, "img", {}, () => [
            be(il, {
              blank: !n(e).imgSrc,
              "blank-color": n(e).imgBlankColor,
              height: n(e).imgSrc ? void 0 : n(e).imgHeight,
              src: n(e).imgSrc,
              "img-placement": n(e).imgPlacement,
              style: { cursor: "wait" }
            }, null, 8, ["blank", "blank-color", "height", "src", "img-placement"])
          ])
        ]),
        key: "0"
      },
      n(e).noHeader ? void 0 : {
        name: "header",
        fn: I(() => [
          T(s.$slots, "header", {}, () => [
            be(Xe, {
              width: n(e).headerWidth,
              variant: n(e).headerVariant,
              animation: n(e).headerAnimation,
              size: n(e).headerSize
            }, null, 8, ["width", "variant", "animation", "size"])
          ])
        ]),
        key: "1"
      },
      n(e).noFooter ? void 0 : {
        name: "footer",
        fn: I(() => [
          T(s.$slots, "footer", {}, () => [
            (m(), O(de(a.value), {
              width: n(e).footerWidth,
              animation: n(e).footerAnimation,
              size: n(e).noButton ? n(e).footerSize : void 0,
              variant: n(e).footerVariant
            }, null, 8, ["width", "animation", "size", "variant"]))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-placement"]));
  }
}), Wd = "300px", cl = /* @__PURE__ */ z({
  __name: "BTableSimple",
  props: {
    bordered: { type: Boolean, default: !1 },
    borderless: { type: Boolean, default: !1 },
    borderVariant: { default: null },
    captionTop: { type: Boolean, default: !1 },
    dark: { type: Boolean, default: !1 },
    fixed: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !1 },
    id: { default: void 0 },
    noBorderCollapse: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    responsive: { type: [Boolean, String], default: !1 },
    small: { type: Boolean, default: !1 },
    stacked: { type: [Boolean, String], default: !1 },
    stickyHeader: { type: [Boolean, String, Number], default: !1 },
    striped: { type: Boolean, default: !1 },
    stripedColumns: { type: Boolean, default: !1 },
    variant: { default: null },
    tableAttrs: { default: void 0 },
    tableClass: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BTableSimple"), l = _(() => [
      e.tableClass,
      "table",
      "b-table",
      {
        "table-bordered": e.bordered,
        "table-borderless": e.borderless,
        [`border-${e.borderVariant}`]: e.borderVariant !== null,
        "caption-top": e.captionTop,
        "table-dark": e.dark,
        "table-hover": e.hover,
        "b-table-stacked": e.stacked === !0,
        [`b-table-stacked-${e.stacked}`]: typeof e.stacked == "string",
        "table-striped": e.striped,
        "table-sm": e.small,
        [`table-${e.variant}`]: e.variant !== null,
        "table-striped-columns": e.stripedColumns
      }
    ]), a = _(() => ({
      id: e.id,
      class: l.value,
      ...e.tableAttrs
    })), s = pa(
      _(
        () => (e.stickyHeader === !0 ? Wd : e.stickyHeader) || NaN
      )
    ), r = _(() => e.stickyHeader !== !1), u = _(() => e.responsive !== !1 || r.value), i = _(
      () => r.value ? { maxHeight: s.value } : void 0
    ), d = _(() => ({
      "table-responsive": e.responsive === !0,
      [`table-responsive-${e.responsive}`]: typeof e.responsive == "string",
      "b-table-sticky-header": r.value
    }));
    return (c, f) => u.value ? (m(), A("div", {
      key: 0,
      class: D(d.value),
      style: Le(i.value)
    }, [
      J("table", Be(Ce(a.value)), [
        T(c.$slots, "default")
      ], 16)
    ], 6)) : (m(), A("table", Be(K({ key: 1 }, a.value)), [
      T(c.$slots, "default")
    ], 16));
  }
}), Ud = /* @__PURE__ */ z({
  __name: "BPlaceholderTable",
  props: {
    animation: { default: void 0 },
    cellWidth: { default: 100 },
    columns: { default: 5 },
    footerAnimation: { default: void 0 },
    footerCellWidth: { default: 100 },
    footerColumns: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    headerAnimation: { default: void 0 },
    headerCellWidth: { default: 100 },
    headerColumns: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    hideHeader: { type: Boolean, default: !1 },
    rows: { default: 3 },
    showFooter: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BPlaceholderTable"), l = he(() => e.columns), a = he(() => e.rows), s = k(() => e.headerColumns ?? NaN), r = k(() => e.footerColumns ?? NaN), u = he(s), i = he(r), d = k(() => l.value || 5), c = k(() => a.value || 3), f = k(
      () => e.headerColumns === void 0 ? d.value : u.value
    ), g = k(
      () => e.footerColumns === void 0 ? d.value : i.value
    );
    return (v, y) => (m(), O(cl, null, {
      default: I(() => [
        n(e).hideHeader ? ee("", !0) : T(v.$slots, "thead", { key: 0 }, () => [
          J("thead", null, [
            J("tr", null, [
              (m(!0), A(pe, null, ke(f.value, (B, C) => (m(), A("th", { key: C }, [
                be(Xe, {
                  size: n(e).headerSize,
                  variant: n(e).headerVariant,
                  animation: n(e).headerAnimation,
                  width: n(e).headerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]),
        T(v.$slots, "default", {}, () => [
          J("tbody", null, [
            (m(!0), A(pe, null, ke(c.value, (B, C) => (m(), A("tr", { key: C }, [
              (m(!0), A(pe, null, ke(d.value, (p, h) => (m(), A("td", { key: h }, [
                be(Xe, {
                  size: n(e).size,
                  variant: n(e).variant,
                  animation: n(e).animation,
                  width: n(e).cellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ]))), 128))
          ])
        ]),
        n(e).showFooter ? T(v.$slots, "tfoot", { key: 1 }, () => [
          J("tfoot", null, [
            J("tr", null, [
              (m(!0), A(pe, null, ke(g.value, (B, C) => (m(), A("th", { key: C }, [
                be(Xe, {
                  size: n(e).footerSize,
                  variant: n(e).footerVariant,
                  animation: n(e).footerAnimation,
                  width: n(e).footerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]) : ee("", !0)
      ]),
      _: 3
    }));
  }
}), Xd = /* @__PURE__ */ z({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = M(t, "BPlaceholderWrapper");
    return (l, a) => n(e).loading ? T(l.$slots, "loading", { key: 0 }) : T(l.$slots, "default", { key: 1 });
  }
}), Kd = /* @__PURE__ */ z({
  __name: "BRow",
  props: {
    tag: { default: "div" },
    gutterX: { default: void 0 },
    gutterY: { default: void 0 },
    noGutters: { type: Boolean, default: !1 },
    alignV: { default: void 0 },
    alignH: { default: void 0 },
    alignContent: { default: void 0 },
    cols: { default: void 0 },
    colsSm: { default: void 0 },
    colsMd: { default: void 0 },
    colsLg: { default: void 0 },
    colsXl: { default: void 0 },
    colsXxl: { default: void 0 }
  },
  setup(t) {
    const e = M(t, "BRow"), l = Gt(() => e.alignH), a = _(
      () => Qt(
        {
          cols: e.cols,
          colsLg: e.colsLg,
          colsMd: e.colsMd,
          colsSm: e.colsSm,
          colsXl: e.colsXl,
          colsXxl: e.colsXxl
        },
        ["cols", "colsLg", "colsMd", "colsSm", "colsXl", "colsXxl"],
        "cols",
        "row-cols"
      )
    ), s = _(() => [
      a.value,
      {
        [`gx-${e.gutterX}`]: e.gutterX !== void 0,
        [`gy-${e.gutterY}`]: e.gutterY !== void 0,
        "g-0": e.noGutters,
        [`align-items-${e.alignV}`]: e.alignV !== void 0,
        [l.value]: e.alignH !== void 0,
        [`align-content-${e.alignContent}`]: e.alignContent !== void 0
      }
    ]);
    return (r, u) => (m(), O(de(n(e).tag), {
      class: D(["row", s.value])
    }, {
      default: I(() => [
        T(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), tt = (t) => typeof t == "object" && t !== null, Ht = (t) => typeof t == "object" && t !== null && "key" in t, Cn = /* @__PURE__ */ z({
  __name: "BTbody",
  props: {
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BTbody"), l = _(() => ({
      [`thead-${e.variant}`]: e.variant !== null
    }));
    return (a, s) => (m(), A("tbody", {
      class: D(l.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), Yd = ["scope", "colspan", "rowspan", "data-label"], Zd = { key: 0 }, St = /* @__PURE__ */ z({
  __name: "BTd",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: Boolean, default: !1 },
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BTd"), l = _(() => ({
      [`table-${e.variant}`]: e.variant !== null,
      "b-table-sticky-column": e.stickyColumn,
      "table-b-table-default": e.stickyColumn && e.variant === null
    })), a = k(() => e.colspan ? "colspan" : e.rowspan ? "rowspan" : "col");
    return (s, r) => (m(), A("td", {
      scope: a.value,
      class: D(l.value),
      colspan: n(e).colspan,
      rowspan: n(e).rowspan,
      "data-label": n(e).stackedHeading
    }, [
      n(e).stackedHeading ? (m(), A("div", Zd, [
        T(s.$slots, "default")
      ])) : T(s.$slots, "default", { key: 1 })
    ], 10, Yd));
  }
}), za = /* @__PURE__ */ z({
  __name: "BTfoot",
  props: {
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BTfoot"), l = _(() => ({
      [`table-${e.variant}`]: e.variant !== null
    }));
    return (a, s) => (m(), A("tfoot", {
      class: D(l.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), Jd = ["scope", "colspan", "rowspan", "data-label"], Qd = { key: 0 }, Ha = /* @__PURE__ */ z({
  __name: "BTh",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: Boolean, default: !1 },
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BTh"), l = _(() => ({
      [`table-${e.variant}`]: e.variant !== null,
      "b-table-sticky-column": e.stickyColumn,
      "table-b-table-default": e.stickyColumn && e.variant === null
    })), a = k(() => e.colspan ? "colspan" : e.rowspan ? "rowspan" : "col");
    return (s, r) => (m(), A("th", {
      scope: a.value,
      class: D(l.value),
      colspan: n(e).colspan,
      rowspan: n(e).rowspan,
      "data-label": n(e).stackedHeading
    }, [
      n(e).stackedHeading !== void 0 ? (m(), A("div", Qd, [
        T(s.$slots, "default")
      ])) : T(s.$slots, "default", { key: 1 })
    ], 10, Jd));
  }
}), kn = /* @__PURE__ */ z({
  __name: "BThead",
  props: {
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BThead"), l = _(() => ({
      [`table-${e.variant}`]: e.variant !== null
    }));
    return (a, s) => (m(), A("thead", {
      class: D(l.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), at = /* @__PURE__ */ z({
  __name: "BTr",
  props: {
    variant: { default: null }
  },
  setup(t) {
    const e = M(t, "BTr"), l = _(() => ({
      [`table-${e.variant}`]: e.variant !== null
    }));
    return (a, s) => (m(), A("tr", {
      class: D(l.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), ec = {
  key: 0,
  class: "b-table-stacked-label"
}, tc = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, ac = { key: 2 }, Tn = /* @__PURE__ */ z({
  __name: "BTableLite",
  props: {
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: "There are no records matching your request" },
    emptyText: { default: "There are no records to show" },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: Boolean, default: !1 },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: Boolean, default: !1 },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: Boolean, default: !1 },
    tbodyClass: { default: void 0 },
    tbodyTrAttrs: {},
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: Boolean, default: void 0 },
    borderless: { type: Boolean, default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: Boolean, default: void 0 },
    dark: { type: Boolean, default: void 0 },
    fixed: { type: Boolean, default: void 0 },
    hover: { type: Boolean, default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: Boolean, default: void 0 },
    outlined: { type: Boolean, default: void 0 },
    responsive: { type: [Boolean, String], default: void 0 },
    small: { type: Boolean, default: void 0 },
    stacked: { type: [Boolean, String], default: void 0 },
    stickyHeader: { type: [Boolean, String, Number], default: void 0 },
    striped: { type: Boolean, default: void 0 },
    stripedColumns: { type: Boolean, default: void 0 },
    variant: { default: void 0 },
    tableAttrs: {},
    tableClass: { default: void 0 }
  },
  emits: ["head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered"],
  setup(t, { emit: o }) {
    const l = M(t, "BTableLite"), a = o, s = (p) => [
      p,
      p._showDetails
    ], r = L(
      new WeakMap(
        l.items.reduce(
          (p, h) => (tt(h) && p.push(s(h)), p),
          []
        )
      )
    );
    fe(
      () => l.items,
      (p) => {
        p.forEach((h) => {
          if (!tt(h))
            return;
          const b = s(h);
          r.value.set(b[0], b[1]);
        });
      },
      { deep: !0 }
    );
    const u = _(() => [
      l.tableClass,
      {
        [`align-${l.align}`]: l.align !== void 0
      }
    ]), i = _(() => {
      if (!l.fields.length && l.items.length) {
        const [p] = l.items;
        return tt(p) || Array.isArray(p) ? Object.keys(p).map((h) => {
          const b = wa(h);
          return {
            key: h,
            label: b,
            tdAttr: l.stacked === !0 ? { "data-label": b } : void 0
          };
        }) : [{ key: "", _noHeader: !0 }];
      }
      return l.fields.map((p) => {
        if (Ht(p))
          return {
            ...p,
            tdAttr: l.stacked === !0 ? { "data-label": wa(p.key), ...p.tdAttr } : p.tdAttr
          };
        const h = wa(p);
        return {
          key: p,
          label: h,
          tdAttr: l.stacked === !0 ? { "data-label": h } : void 0
        };
      });
    }), d = k(() => i.value.length), c = _(() => !(i.value.length > 0 && i.value.every((p) => p._noHeader === !0))), f = (p, h, b) => {
      const S = Ee(p, h);
      return b && typeof b == "function" ? b(S, h, p) : b;
    }, g = (p, h, b = !1) => {
      a("head-clicked", p.key, p, h, b);
    }, v = (p) => {
      if (tt(p)) {
        const h = r.value.get(p);
        r.value.set(p, !h), p._showDetails = !h;
      }
    }, y = (p) => [
      p.class,
      p.thClass,
      {
        "b-table-sticky-column": p.stickyColumn
      },
      l.fieldColumnClass ? typeof l.fieldColumnClass == "function" ? l.fieldColumnClass(p) : l.fieldColumnClass : null
    ], B = (p, h) => {
      var b, S;
      return [
        p.class,
        p.tdClass,
        tt(h) && (b = h._cellVariants) != null && b[p.key] ? `table-${(S = h._cellVariants) == null ? void 0 : S[p.key]}` : null,
        {
          "b-table-sticky-column": p.stickyColumn
        }
      ];
    }, C = (p, h) => l.tbodyTrClass ? typeof l.tbodyTrClass == "function" ? l.tbodyTrClass(p, h) : l.tbodyTrClass : null;
    return (p, h) => (m(), O(cl, {
      id: n(l).id,
      bordered: n(l).bordered,
      borderless: n(l).borderless,
      "border-variant": n(l).borderVariant,
      "caption-top": n(l).captionTop,
      dark: n(l).dark,
      fixed: n(l).fixed,
      hover: n(l).hover,
      "no-border-collapse": n(l).noBorderCollapse,
      outlined: n(l).outlined,
      responsive: n(l).responsive,
      small: n(l).small,
      stacked: n(l).stacked,
      "sticky-header": n(l).stickyHeader,
      striped: n(l).striped,
      "table-class": u.value,
      variant: n(l).variant,
      "striped-columns": n(l).stripedColumns
    }, {
      default: I(() => [
        ct(be(kn, {
          variant: n(l).headVariant,
          class: D(n(l).theadClass)
        }, {
          default: I(() => [
            p.$slots["thead-top"] ? T(p.$slots, "thead-top", { key: 0 }) : ee("", !0),
            be(at, {
              variant: n(l).headRowVariant,
              class: D(n(l).theadTrClass)
            }, {
              default: I(() => [
                (m(!0), A(pe, null, ke(i.value, (b) => (m(), O(Ha, K({
                  key: b.key,
                  scope: "col",
                  class: y(b),
                  title: b.headerTitle,
                  variant: b.variant,
                  abbr: b.headerAbbr,
                  style: b.thStyle,
                  ref_for: !0
                }, b.thAttr, {
                  onClick: (S) => g(b, S)
                }), {
                  default: I(() => [
                    T(p.$slots, p.$slots[`head(${String(b.key)})`] ? `head(${String(b.key)})` : "head()", {
                      label: b.label,
                      column: b.key,
                      field: b,
                      isFoot: !1
                    }, () => [
                      ue(Z(n(ta)(b)), 1)
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "variant", "abbr", "style", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"]),
            p.$slots["thead-sub"] ? (m(), O(at, { key: 1 }, {
              default: I(() => [
                (m(!0), A(pe, null, ke(i.value, (b) => (m(), O(St, {
                  key: b.key,
                  scope: "col",
                  variant: b.variant,
                  class: D([b.class, b.thClass])
                }, {
                  default: I(() => [
                    T(p.$slots, "thead-sub", K({
                      items: i.value,
                      ref_for: !0
                    }, b), () => [
                      ue(Z(b.label), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["variant", "class"]))), 128))
              ]),
              _: 3
            })) : ee("", !0)
          ]),
          _: 3
        }, 8, ["variant", "class"]), [
          [qt, c.value]
        ]),
        be(Cn, {
          class: D(n(l).tbodyClass)
        }, {
          default: I(() => [
            T(p.$slots, "custom-body", {
              fields: i.value,
              items: n(l).items,
              columns: i.value.length
            }, () => [
              !n(l).stacked && p.$slots["top-row"] ? (m(), O(at, { key: 0 }, {
                default: I(() => [
                  T(p.$slots, "top-row")
                ]),
                _: 3
              })) : ee("", !0),
              (m(!0), A(pe, null, ke(n(l).items, (b, S) => (m(), A(pe, { key: S }, [
                be(at, {
                  class: D(C(b, "row")),
                  variant: n(tt)(b) ? b._rowVariant : void 0,
                  onClick: (w) => !n(Xt)(w) && a("row-clicked", b, S, w),
                  onDblclick: (w) => !n(Xt)(w) && a("row-dbl-clicked", b, S, w),
                  onMouseenter: (w) => !n(Xt)(w) && a("row-hovered", b, S, w),
                  onMouseleave: (w) => !n(Xt)(w) && a("row-unhovered", b, S, w)
                }, {
                  default: I(() => [
                    (m(!0), A(pe, null, ke(i.value, (w) => {
                      var x;
                      return m(), O(St, K({
                        key: w.key,
                        variant: n(tt)(b) && (x = b._cellVariants) != null && x[w.key] ? null : w.variant,
                        class: B(w, b),
                        ref_for: !0
                      }, f(b, String(w.key), w.tdAttr)), {
                        default: I(() => [
                          n(l).stacked && n(l).labelStacked ? (m(), A("label", ec, Z(n(ta)(w)), 1)) : ee("", !0),
                          T(
                            p.$slots,
                            p.$slots[`cell(${String(w.key)})`] ? `cell(${String(w.key)})` : "cell()",
                            {
                              value: n(Ee)(b, String(w.key)),
                              index: S,
                              item: b,
                              field: w,
                              items: p.items,
                              toggleDetails: () => {
                                v(b);
                              },
                              detailsShowing: n(tt)(b) ? r.value.get(b) ?? !1 : !1
                            },
                            () => [
                              !p.$slots[`cell(${String(w.key)})`] && !p.$slots["cell()"] ? (m(), A(pe, { key: 0 }, [
                                ue(Z(n(Bo)(b, String(w.key), w.formatter)), 1)
                              ], 64)) : ee("", !0)
                            ]
                          )
                        ]),
                        _: 2
                      }, 1040, ["variant", "class"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "variant", "onClick", "onDblclick", "onMouseenter", "onMouseleave"]),
                n(tt)(b) && r.value.get(b) === !0 && p.$slots["row-details"] ? (m(), A(pe, { key: 0 }, [
                  be(at, {
                    "aria-hidden": "true",
                    role: "presentation",
                    class: "d-none"
                  }),
                  be(at, {
                    class: D(C(b, "row-details")),
                    variant: b._rowVariant
                  }, {
                    default: I(() => [
                      be(St, { colspan: d.value }, {
                        default: I(() => [
                          T(p.$slots, "row-details", {
                            item: b,
                            toggleDetails: () => {
                              v(b);
                            },
                            fields: n(l).fields,
                            index: S
                          })
                        ]),
                        _: 2
                      }, 1032, ["colspan"])
                    ]),
                    _: 2
                  }, 1032, ["class", "variant"])
                ], 64)) : ee("", !0)
              ], 64))), 128)),
              n(l).showEmpty && n(l).items.length === 0 ? (m(), O(at, {
                key: 1,
                class: "b-table-empty-slot"
              }, {
                default: I(() => [
                  be(St, { colspan: d.value }, {
                    default: I(() => [
                      T(p.$slots, "empty", {
                        items: n(l).items
                      }, () => [
                        ue(Z(n(l).emptyText), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["colspan"])
                ]),
                _: 3
              })) : ee("", !0),
              !n(l).stacked && p.$slots["bottom-row"] ? (m(), O(at, { key: 2 }, {
                default: I(() => [
                  T(p.$slots, "bottom-row")
                ]),
                _: 3
              })) : ee("", !0)
            ])
          ]),
          _: 3
        }, 8, ["class"]),
        n(l).footClone ? (m(), O(za, {
          key: 0,
          variant: n(l).footVariant,
          class: D(n(l).tfootClass)
        }, {
          default: I(() => [
            be(at, {
              variant: n(l).footRowVariant,
              class: D(n(l).tfootTrClass)
            }, {
              default: I(() => [
                (m(!0), A(pe, null, ke(i.value, (b) => (m(), O(Ha, K({
                  key: b.key,
                  scope: "col",
                  class: y(b),
                  title: b.headerTitle,
                  abbr: b.headerAbbr,
                  style: b.thStyle,
                  variant: b.variant,
                  ref_for: !0
                }, b.thAttr, {
                  onClick: (S) => g(b, S, !0)
                }), {
                  default: I(() => [
                    J("div", tc, [
                      J("div", null, [
                        T(
                          p.$slots,
                          p.$slots[`foot(${String(b.key)})`] ? `foot(${String(b.key)})` : "foot()",
                          {
                            label: b.label,
                            column: b.key,
                            field: b,
                            isFoot: !0
                          },
                          () => [
                            ue(Z(n(ta)(b)), 1)
                          ]
                        )
                      ])
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "abbr", "style", "variant", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"])
          ]),
          _: 3
        }, 8, ["variant", "class"])) : p.$slots["custom-foot"] ? (m(), O(za, { key: 1 }, {
          default: I(() => [
            T(p.$slots, "custom-foot", {
              fields: i.value,
              items: n(l).items,
              columns: i.value.length
            })
          ]),
          _: 3
        })) : ee("", !0),
        p.$slots["table-caption"] || n(l).caption ? (m(), A("caption", ac, [
          T(p.$slots, "table-caption", {}, () => [
            ue(Z(n(l).caption), 1)
          ])
        ])) : ee("", !0)
      ]),
      _: 3
    }, 8, ["id", "bordered", "borderless", "border-variant", "caption-top", "dark", "fixed", "hover", "no-border-collapse", "outlined", "responsive", "small", "stacked", "sticky-header", "striped", "table-class", "variant", "striped-columns"]));
  }
}), lc = /* @__PURE__ */ J("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  class: "bi bi-arrow-up-short",
  viewBox: "0 0 16 16",
  "aria-hidden": ""
}, [
  /* @__PURE__ */ J("path", {
    "fill-rule": "evenodd",
    d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
  })
], -1), oc = /* @__PURE__ */ J("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  class: "bi bi-arrow-down-short",
  viewBox: "0 0 16 16",
  "aria-hidden": ""
}, [
  /* @__PURE__ */ J("path", {
    "fill-rule": "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
  })
], -1), nc = {
  style: { opacity: 0.4 },
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  class: "bi bi-arrow-up-short",
  viewBox: "0 0 16 16",
  "aria-hidden": ""
}, sc = /* @__PURE__ */ J("path", {
  "fill-rule": "evenodd",
  d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
}, null, -1), rc = [
  sc
], ic = { class: "d-flex align-items-center gap-2 mt-5" }, uc = /* @__PURE__ */ z({
  __name: "BTable",
  props: /* @__PURE__ */ ge({
    provider: { default: void 0 },
    noProvider: { default: void 0 },
    noProviderPaging: { type: Boolean, default: !1 },
    noProviderSorting: { type: Boolean, default: !1 },
    noProviderFiltering: { type: Boolean, default: !1 },
    sortBy: {},
    mustSort: { type: [Boolean, Array], default: !1 },
    selectable: { type: Boolean, default: !1 },
    multisort: { type: Boolean, default: !1 },
    stickySelect: { type: Boolean, default: !1 },
    selectHead: { type: [Boolean, String], default: !0 },
    selectMode: { default: "multi" },
    selectionVariant: { default: "primary" },
    busy: { type: Boolean },
    busyLoadingText: { default: "Loading..." },
    perPage: { default: Number.POSITIVE_INFINITY },
    currentPage: { default: 1 },
    filter: { default: void 0 },
    filterable: { default: void 0 },
    noLocalSorting: { type: Boolean, default: !1 },
    noSelectOnClick: { type: Boolean, default: !1 },
    selectedItems: {},
    noSortableIcon: { type: Boolean, default: !1 },
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: void 0 },
    emptyText: { default: void 0 },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: Boolean, default: void 0 },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: Boolean, default: void 0 },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: Boolean, default: void 0 },
    tbodyClass: { default: void 0 },
    tbodyTrAttrs: {},
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: Boolean, default: void 0 },
    borderless: { type: Boolean, default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: Boolean, default: void 0 },
    dark: { type: Boolean, default: void 0 },
    fixed: { type: Boolean, default: void 0 },
    hover: { type: Boolean, default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: Boolean, default: void 0 },
    outlined: { type: Boolean, default: void 0 },
    responsive: { type: [Boolean, String], default: void 0 },
    small: { type: Boolean, default: void 0 },
    stacked: { type: [Boolean, String], default: void 0 },
    stickyHeader: { type: [Boolean, String, Number], default: void 0 },
    striped: { type: Boolean, default: void 0 },
    stripedColumns: { type: Boolean, default: void 0 },
    variant: { default: void 0 },
    tableAttrs: {}
  }, {
    sortBy: {
      default: void 0
    },
    sortByModifiers: {},
    busy: { type: Boolean, default: !1 },
    busyModifiers: {},
    selectedItems: {
      default: () => []
    },
    selectedItemsModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["filtered", "head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered", "row-selected", "row-unselected", "selection", "sorted", "change"], ["update:sortBy", "update:busy", "update:selectedItems"]),
  setup(t, { expose: o, emit: e }) {
    const a = M(t, "BTable"), s = e, r = _e(t, "sortBy"), u = _e(t, "busy"), i = _e(t, "selectedItems"), d = _({
      get: () => /* @__PURE__ */ new Set([...i.value]),
      set: ($) => {
        i.value = [...$];
      }
    }), c = {
      add: ($) => {
        const N = new Set(d.value);
        N.add($), d.value = N, s("row-selected", $);
      },
      clear: () => {
        d.value.forEach(($) => {
          c.delete($);
        });
      },
      delete: ($) => {
        const N = new Set(d.value);
        if (a.primaryKey) {
          const R = a.primaryKey;
          i.value.forEach((X, E) => {
            const j = Ee(X, R), ae = Ee($, R);
            j && ae && j === ae && N.delete(i.value[E]);
          });
        } else
          N.delete($);
        d.value = N, s("row-unselected", $);
      },
      set: ($) => {
        d.value = new Set($), d.value.forEach((N) => {
          s("row-unselected", N);
        });
      },
      has: ($) => {
        if (!a.primaryKey)
          return d.value.has($);
        const N = a.primaryKey;
        for (const R of d.value) {
          const X = Ee(R, N), E = Ee($, N);
          if (X && E && X === E)
            return !0;
        }
        return !1;
      }
    }, f = L([]), g = he(() => a.perPage, { method: "parseInt" }), v = he(() => a.currentPage, { method: "parseInt" }), y = k(() => !!a.filter), B = k(() => a.provider !== void 0), C = k(() => d.value.size > 0), p = _(
      () => r.value !== void 0 || a.fields.some(
        ($) => typeof $ == "object" && $ !== null && $.sortable === !0
      )
    ), h = _(
      () => a.fields.map(($) => {
        var X;
        if (!(typeof $ == "object" && $ !== null))
          return $;
        const N = (X = r.value) == null ? void 0 : X.find((E) => $.key === E.key), R = p.value === !1 ? void 0 : N === void 0 ? "none" : N.order === "desc" ? "descending" : "ascending";
        return {
          ...$,
          thAttr: {
            "aria-sort": R,
            ...$.thAttr
          }
        };
      })
    ), b = _(() => ({
      "b-table-busy": u.value,
      "b-table-selectable": a.selectable,
      "user-select-none": a.selectable && C.value
    })), S = _(() => [
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(null, "table-busy") : a.tbodyTrClass : null
    ]), w = ($) => [
      {
        "b-table-sortable-column": p.value && $.sortable
      }
    ], x = ($, N) => [
      {
        [`selected table-${a.selectionVariant}`]: a.selectable && $ && c.has($)
      },
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass($, N) : a.tbodyTrClass : null
    ], V = _(() => {
      const $ = (X) => {
        var j;
        const E = (j = r.value) == null ? void 0 : j.filter((ae) => !!ae.order);
        return !E || E.length === 0 ? X : [...X].sort((ae, re) => {
          for (let U = 0; U < (E.length ?? 0); U++) {
            const ne = E[U], ve = (le) => {
              if (!tt(le))
                return String(le);
              const H = h.value.find((ye) => Ht(ye) ? ye.key === ne.key : !1), se = Ee(le, ne.key);
              if (Ht(H) && H.sortByFormatted) {
                const ye = typeof H.sortByFormatted == "function" ? H.sortByFormatted : H.formatter;
                if (ye)
                  return Bo(le, String(H.key), ye);
              }
              return typeof se == "object" && se !== null ? JSON.stringify(se) : (se == null ? void 0 : se.toString()) ?? "";
            }, Q = ve(ae), ce = ve(re), oe = ne.comparer ? ne.comparer(Q, ce) : Q.localeCompare(ce, void 0, { numeric: !0 });
            if (oe !== 0)
              return ne.order === "asc" ? oe : -oe;
          }
          return 0;
        });
      }, N = (X) => X.filter(
        (E) => tt(E) ? Object.entries(E).some(([j, ae]) => {
          var ne, ve, Q;
          return ae == null || j[0] === "_" || !((ne = a.filterable) != null && ne.includes(j)) && ((ve = a.filterable) != null && ve.length) ? !1 : (() => {
            const ce = h.value.find((oe) => Ht(oe) ? oe.key === j : !1);
            if (Ht(ce) && ce.filterByFormatted) {
              const oe = typeof ce.filterByFormatted == "function" ? ce.filterByFormatted : ce.formatter;
              if (oe)
                return oe(ae, String(ce.key), E);
            }
            return typeof ae == "object" ? JSON.stringify(Object.values(ae)) : ae.toString();
          })().toLowerCase().includes(((Q = a.filter) == null ? void 0 : Q.toLowerCase()) ?? "");
        }) : !0
      );
      let R = B.value ? f.value : a.items;
      return R = R.map((X) => {
        if (typeof X == "object" && X !== null && Object.keys(X).some((E) => E.includes("."))) {
          let E = {};
          for (const j in X)
            j.includes(".") ? E = Pr(E, j, X[j]) : E[j] = X[j];
          return E;
        }
        return X;
      }), (y.value === !0 && !B.value || y.value === !0 && B.value && a.noProviderFiltering) && (R = N(R)), (p.value === !0 && !B.value && !a.noLocalSorting || p.value === !0 && B.value && a.noProviderSorting) && (R = $(R)), R;
    }), W = _(() => Number.isNaN(g.value) || B.value && !a.noProviderPaging ? V.value : V.value.slice(
      (v.value - 1) * (g.value || Number.POSITIVE_INFINITY),
      v.value * (g.value || Number.POSITIVE_INFINITY)
    ));
    fe(W, ($) => {
      s("change", $);
    });
    const q = ($, N, R = !1, X = !1, E = !1) => {
      if (a.selectable) {
        if (a.selectMode === "single" || a.selectMode === "multi") {
          if (R || X)
            return;
          c.has($) ? c.delete($) : a.selectMode === "single" ? c.set([$]) : c.add($);
        } else if (X || E)
          c.has($) ? c.delete($) : c.add($);
        else if (R) {
          const j = [...d.value].pop(), ae = a.items.findIndex((ve) => ve === j), re = Math.min(ae, N), U = Math.max(ae, N), ne = a.items.slice(re, U + 1);
          c.set(ne);
        } else
          c.set([$]);
        G();
      }
    }, P = ($, N, R) => {
      a.noSelectOnClick === !1 && q($, N, R.shiftKey, R.ctrlKey, R.metaKey), s("row-clicked", $, N, R);
    }, Y = ($) => {
      var ne, ve;
      if (!p.value)
        return;
      const N = typeof $ == "object" && $ !== null ? $.key : $, R = typeof $ == "object" && $ !== null ? $.sortable : !1;
      if (!(p.value === !0 && R === !0))
        return;
      const X = (Q) => {
        if (Q === "asc")
          return "desc";
        if (Q === void 0 || a.mustSort === !0 || Array.isArray(a.mustSort) && a.mustSort.includes(N))
          return "asc";
      }, E = ((ne = r.value) == null ? void 0 : ne.findIndex((Q) => Q.key === N)) ?? -1, j = (ve = r.value) == null ? void 0 : ve[E], ae = (
        // If value is new, we default to ascending
        // Otherwise we make a temp copy of the value
        E === -1 || !j ? { key: N, order: "asc" } : { ...j }
      ), re = () => {
        var ce, oe;
        let Q = ae;
        if (E === -1)
          r.value = [...r.value ?? [], ae];
        else {
          const le = X(ae.order);
          Q = { ...ae, order: le }, r.value = le ? (ce = r.value) == null ? void 0 : ce.map((H) => H.key === Q.key ? Q : H) : (oe = r.value) == null ? void 0 : oe.filter((H) => H.key !== Q.key);
        }
        return Q;
      }, U = () => {
        const Q = {
          ...ae,
          order: E === -1 ? ae.order : X(ae.order)
        };
        return r.value = [Q], Q;
      };
      s("sorted", a.multisort === !0 ? re() : U());
    }, te = ($, N, R, X = !1) => {
      s("head-clicked", $, N, R, X), Y(N);
    }, ie = async () => {
      if (!B.value || a.provider === void 0 || u.value)
        return;
      u.value = !0;
      const $ = a.provider({
        currentPage: v.value,
        filter: a.filter,
        sortBy: r.value,
        perPage: g.value
      });
      try {
        const N = $ instanceof Promise ? await $ : $;
        if (N === void 0)
          return;
        f.value = N;
      } finally {
        u.value = !1;
      }
    }, G = () => {
      a.selectable && s("selection", [...d.value]);
    }, F = async ($, N, R) => {
      if (N === R)
        return;
      const X = (re) => {
        var U;
        return ((U = a.noProvider) == null ? void 0 : U.includes(re)) === !0;
      }, E = ($ === "currentPage" || $ === "perPage") && (X("paging") || a.noProviderPaging === !0), j = $ === "filter" && (X("filtering") || a.noProviderFiltering === !0), ae = ($ === "sortBy" || $ === "sortDesc") && (X("sorting") || a.noProviderSorting === !0);
      E || j || ae || (B.value === !0 && await ie(), $ === "currentPage" || $ === "perPage" || s("filtered", [...V.value]));
    };
    return fe(
      () => a.filter,
      ($, N) => {
        F("filter", $, N), !($ === N || B.value) && ($ || s("filtered", [...V.value]));
      }
    ), fe(v, ($, N) => {
      F("currentPage", $, N);
    }), fe(g, ($, N) => {
      F("perPage", $, N);
    }), fe(
      r,
      ($, N) => {
        F("sortBy", $, N);
      },
      { deep: !0 }
    ), fe(
      () => a.provider,
      ($) => {
        if ($ === void 0) {
          f.value = [];
          return;
        }
        ie();
      }
    ), Ue(ie), o({
      // The row selection methods are really for compat. Users should probably use the v-model though
      clearSelected: () => {
        a.selectable && (c.clear(), G());
      },
      refresh: ie,
      selectAllRows: () => {
        if (!a.selectable)
          return;
        const $ = d.value.size > 0 ? [...d.value] : [];
        d.value = /* @__PURE__ */ new Set([...V.value]), d.value.forEach((N) => {
          $.includes(N) || s("row-selected", N);
        }), G();
      },
      selectRow: ($) => {
        if (!a.selectable)
          return;
        const N = V.value[$];
        !N || c.has(N) || (c.add(N), G());
      },
      unselectRow: ($) => {
        if (!a.selectable)
          return;
        const N = V.value[$];
        !N || !c.has(N) || (c.delete(N), G());
      }
    }), ($, N) => (m(), O(Tn, K(n(a), {
      "aria-busy": u.value,
      items: W.value,
      fields: h.value,
      "table-class": b.value,
      "tbody-tr-class": x,
      "field-column-class": w,
      onHeadClicked: te,
      onRowDblClicked: N[0] || (N[0] = (R, X, E) => {
        s("row-dbl-clicked", R, X, E);
      }),
      onRowClicked: P,
      onRowHovered: N[1] || (N[1] = (R, X, E) => {
        s("row-hovered", R, X, E);
      }),
      onRowUnhovered: N[2] || (N[2] = (R, X, E) => {
        s("row-unhovered", R, X, E);
      })
    }), Ra({
      "head()": I((R) => {
        var X, E, j, ae;
        return [
          ue(Z(n(ta)(R.field)) + " ", 1),
          p.value && R.field.sortable && n(a).noSortableIcon === !1 ? (m(), A(pe, { key: 0 }, [
            ((E = (X = r.value) == null ? void 0 : X.find((re) => re.key === R.field.key)) == null ? void 0 : E.order) === "asc" ? T(
              $.$slots,
              $.$slots[`sortAsc(${String(R.field.key)})`] ? `sortAsc(${String(R.field.key)})` : "sortAsc()",
              Be(K({ key: 0 }, { ...R })),
              () => [
                lc
              ]
            ) : ((ae = (j = r.value) == null ? void 0 : j.find((re) => re.key === R.field.key)) == null ? void 0 : ae.order) === "desc" ? T(
              $.$slots,
              $.$slots[`sortDesc(${String(R.field.key)})`] ? `sortDesc(${String(R.field.key)})` : "sortDesc()",
              Be(K({ key: 1 }, { ...R })),
              () => [
                oc
              ]
            ) : T(
              $.$slots,
              $.$slots[`sortDefault(${String(R.field.key)})`] ? `sortDefault(${String(R.field.key)})` : "sortDefault()",
              Be(K({ key: 2 }, { ...R })),
              () => [
                (m(), A("svg", nc, rc))
              ]
            )
          ], 64)) : ee("", !0)
        ];
      }),
      "custom-body": I((R) => [
        u.value ? (m(), O(at, {
          key: 0,
          class: D(["b-table-busy-slot", S.value])
        }, {
          default: I(() => [
            be(St, {
              colspan: R.fields.length
            }, {
              default: I(() => [
                T($.$slots, "table-busy", {}, () => [
                  be(Ba, { show: "" }, {
                    overlay: I(() => [
                      J("div", ic, [
                        be(ha),
                        J("strong", null, Z(n(a).busyLoadingText), 1)
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 2
            }, 1032, ["colspan"])
          ]),
          _: 2
        }, 1032, ["class"])) : ee("", !0)
      ]),
      _: 2
    }, [
      ke($.$slots, (R, X) => ({
        name: X,
        fn: I((E) => [
          T($.$slots, X, Be(Ce(E)))
        ])
      }))
    ]), 1040, ["aria-busy", "items", "fields", "table-class"]));
  }
}), dc = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "BTab",
  props: /* @__PURE__ */ ge({
    active: { type: Boolean },
    buttonId: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    id: { default: void 0 },
    lazy: { type: Boolean, default: void 0 },
    lazyOnce: { type: Boolean, default: void 0 },
    noBody: { type: Boolean, default: !1 },
    tag: { default: "div" },
    title: { default: void 0 },
    titleItemClass: { default: void 0 },
    titleLinkAttrs: { default: void 0 },
    titleLinkClass: { default: void 0 }
  }, {
    active: { type: Boolean, default: !1 },
    activeModifiers: {}
  }),
  emits: ["update:active"],
  setup(t) {
    const e = M(t, "BTab"), l = He(), a = _e(t, "active"), s = Ve(ko, null), r = we(() => e.id, "tabpane"), u = we(() => e.buttonId, "tab"), i = L(!1), d = L(null), { onClick: c, ...f } = jt(), g = _(
      () => ({
        id: r.value,
        buttonId: u.value,
        disabled: e.disabled,
        title: e.title,
        titleComponent: l.title,
        titleItemClass: e.titleItemClass,
        titleLinkAttrs: e.titleLinkAttrs,
        titleLinkClass: e.titleLinkClass,
        onClick: c,
        el: d.value
      })
    );
    Ue(() => {
      s && (s.registerTab(g), e.active && s.activateTab(r.value));
    }), Ln(() => {
      s && s.unregisterTab(r.value);
    });
    const v = k(() => (s == null ? void 0 : s.activeId.value) === r.value), y = L(v.value), B = k(() => !!(s != null && s.lazy.value || (e.lazyOnce ?? e.lazy))), C = k(() => e.lazyOnce !== void 0), p = k(() => v.value && !e.disabled), h = k(
      () => p.value || !B.value || B.value && C.value && i.value
    );
    fe(v, (S) => {
      if (S) {
        a.value = !0, setTimeout(() => {
          y.value = !0;
        }, 0);
        return;
      }
      y.value = !1, a.value = !1;
    }), fe(
      () => e.active,
      (S) => {
        if (s) {
          if (!S) {
            v.value && s.activateTab(void 0);
            return;
          }
          s.activateTab(r.value);
        }
      }
    );
    const b = _(() => [
      {
        active: v.value,
        show: y.value,
        "card-body": (s == null ? void 0 : s.card.value) && e.noBody === !1,
        fade: !(s != null && s.noFade.value)
      },
      y.value ? s == null ? void 0 : s.activeTabClass : s == null ? void 0 : s.inactiveTabClass,
      s == null ? void 0 : s.tabClass
    ]);
    return fe(h, (S) => {
      S && !i.value && (i.value = !0);
    }), (S, w) => (m(), O(de(n(e).tag), K({
      id: n(r),
      ref_key: "el",
      ref: d,
      class: ["tab-pane", b.value],
      role: "tabpanel",
      "aria-labelledby": n(u)
    }, f), {
      default: I(() => [
        h.value ? T(S.$slots, "default", { key: 0 }) : ee("", !0)
      ]),
      _: 3
    }, 16, ["id", "class", "aria-labelledby"]));
  }
}), cc = ["aria-orientation"], fc = ["id", "aria-controls", "aria-selected", "onClick"], vc = /* @__PURE__ */ z({
  __name: "BTabs",
  props: /* @__PURE__ */ ge({
    activeId: {},
    activeNavItemClass: { default: void 0 },
    activeTabClass: { default: void 0 },
    align: { default: void 0 },
    card: { type: Boolean, default: !1 },
    contentClass: { default: void 0 },
    end: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 },
    id: { default: void 0 },
    inactiveNavItemClass: { default: void 0 },
    inactiveTabClass: { default: void 0 },
    justified: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 },
    modelValue: {},
    navClass: { default: void 0 },
    navItemClass: { default: void 0 },
    navWrapperClass: { default: void 0 },
    noFade: { type: Boolean, default: !1 },
    noNavStyle: { type: Boolean, default: !1 },
    pills: { type: Boolean, default: !1 },
    small: { type: Boolean, default: !1 },
    tag: { default: "div" },
    tabClass: { default: void 0 },
    vertical: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: -1
    },
    modelModifiers: {},
    activeId: {
      default: void 0
    },
    activeIdModifiers: {}
  }),
  emits: /* @__PURE__ */ ge(["activate-tab", "click"], ["update:modelValue", "update:activeId"]),
  setup(t, { emit: o }) {
    const l = M(t, "BTabs"), a = o, s = _e(t, "modelValue"), r = _e(t, "activeId"), u = Rt(), i = L([]), d = _(
      () => i.value.map((w) => {
        const x = n(w), V = x.id === r.value;
        return {
          ...x,
          active: V,
          navItemClasses: [
            {
              active: V,
              disabled: x.disabled
            },
            V ? l.activeNavItemClass : l.inactiveNavItemClass,
            l.navItemClass,
            x.titleLinkClass
          ]
        };
      })
    ), c = k(() => !(d != null && d.value && d.value.length > 0)), f = _(() => ({
      "d-flex": l.vertical,
      "align-items-start": l.vertical
    })), g = Gt(() => l.align), v = _(() => ({
      "nav-pills": l.pills,
      "flex-column me-3": l.vertical,
      [g.value]: l.align !== void 0,
      "nav-fill": l.fill,
      "card-header-tabs": l.card,
      "nav-justified": l.justified,
      "nav-tabs": !l.noNavStyle && !l.pills,
      small: l.small
    })), y = (w) => {
      var x;
      if (w !== void 0) {
        const V = (x = d.value[w]) == null ? void 0 : x.id;
        if (w > -1 && w < d.value.length && !d.value[w].disabled && (s.value < 0 || r.value !== V || s.value !== w)) {
          const W = new rt("activate-tab", { cancelable: !0 });
          a("activate-tab", w, s.value, W), W.defaultPrevented || (r.value !== V && (r.value = V), s.value !== w && (s.value = w));
        }
      }
    }, B = (w, x) => {
      var V, W, q;
      y(x), x >= 0 && !d.value[x].disabled && ((V = d.value[x]) != null && V.onClick) && typeof d.value[x].onClick == "function" && ((q = (W = d.value[x]).onClick) == null || q.call(W, w));
    }, C = (w) => {
      var x, V;
      d.value.length <= 0 || (s.value = p(s.value + w, w), (V = document.getElementById((x = d.value[s.value]) == null ? void 0 : x.buttonId)) == null || V.focus());
    }, p = (w, x) => {
      let V = w, W = -1, q = -1;
      for (let P = 0; P < d.value.length; P++)
        d.value[P].disabled || (W === -1 && (W = P), q = P);
      for (; V >= W && V <= q && d.value[V].disabled; )
        V += x;
      return V < W && (V = W), V > q && (V = q), V;
    };
    fe(s, (w, x) => {
      if (w === x || d.value.length <= 0)
        return;
      const V = p(w, w > x ? 1 : -1);
      Ne(() => {
        y(V);
      });
    }), fe(r, (w, x) => {
      const V = d.value.findIndex((W) => W.id === w);
      if (w !== x && !(d.value.length <= 0)) {
        if (V === -1) {
          y(p(0, 1));
          return;
        }
        y(V);
      }
    });
    const h = (w) => {
      i.value.find((x) => x.value.id === w.value.id) ? i.value[i.value.findIndex((x) => x.value.id === w.value.id)] = w : i.value.push(w), i.value.sort((x, V) => {
        if (!Node || !x.value.el || !V.value.el)
          return 0;
        const W = x.value.el.compareDocumentPosition(V.value.el);
        return W & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : W & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      });
    }, b = (w) => {
      i.value = i.value.filter((x) => x.value.id !== w);
    };
    fe(
      i,
      () => {
        S();
      },
      { deep: !0 }
    );
    const S = () => {
      var w;
      if (d.value.length === 0) {
        s.value = -1, r.value = void 0;
        return;
      }
      if (s.value >= 0 && !r.value && (r.value = (w = d.value[s.value]) == null ? void 0 : w.id), d.value.find((x) => x.id === r.value)) {
        y(d.value.findIndex((x) => x.id === r.value));
        return;
      }
      y(d.value.map((x) => !x.disabled).indexOf(!0));
    };
    return Qe(ko, {
      lazy: k(() => l.lazy),
      card: k(() => l.card),
      noFade: k(() => l.noFade),
      activeTabClass: k(() => l.activeTabClass),
      inactiveTabClass: k(() => l.inactiveTabClass),
      tabClass: k(() => l.tabClass),
      registerTab: h,
      unregisterTab: b,
      activeId: r,
      activateTab: (w) => {
        const x = d.value.findIndex((V) => V.id === w);
        if (w === void 0 || x === -1) {
          y(p(0, 1));
          return;
        }
        y(x);
      }
    }), (w, x) => (m(), O(de(n(l).tag), {
      id: n(l).id,
      class: D(["tabs", f.value])
    }, {
      default: I(() => [
        be(n(u).define, null, {
          default: I(() => [
            J("div", {
              class: D(["tab-content", n(l).contentClass])
            }, [
              T(w.$slots, "default"),
              c.value ? (m(), A("div", {
                key: "bv-empty-tab",
                class: D(["tab-pane active", { "card-body": n(l).card }])
              }, [
                T(w.$slots, "empty")
              ], 2)) : ee("", !0)
            ], 2)
          ]),
          _: 3
        }),
        n(l).end ? (m(), O(n(u).reuse, { key: 0 })) : ee("", !0),
        J("div", {
          class: D([
            n(l).navWrapperClass,
            { "card-header": n(l).card, "ms-auto": w.vertical && n(l).end }
          ])
        }, [
          J("ul", {
            class: D(["nav", [v.value, n(l).navClass]]),
            role: "tablist",
            "aria-orientation": n(l).vertical ? "vertical" : "horizontal"
          }, [
            T(w.$slots, "tabs-start"),
            (m(!0), A(pe, null, ke(d.value, (V, W) => (m(), A("li", {
              key: V.id,
              class: D(["nav-item", V.titleItemClass]),
              role: "presentation"
            }, [
              J("button", K({
                id: V.buttonId,
                class: ["nav-link", V.navItemClasses],
                role: "tab",
                "aria-controls": V.id,
                "aria-selected": V.active,
                ref_for: !0
              }, V.titleLinkAttrs, {
                onKeydown: [
                  x[0] || (x[0] = Ut(pt((q) => C(-1), ["stop", "prevent"]), ["left"])),
                  x[1] || (x[1] = Ut(pt((q) => C(1), ["stop", "prevent"]), ["right"])),
                  x[2] || (x[2] = Ut(pt((q) => C(-999), ["stop", "prevent"]), ["page-up"])),
                  x[3] || (x[3] = Ut(pt((q) => C(999), ["stop", "prevent"]), ["page-down"]))
                ],
                onClick: pt((q) => B(q, W), ["stop", "prevent"])
              }), [
                V.titleComponent ? (m(), O(de(V.titleComponent), { key: 0 })) : (m(), A(pe, { key: 1 }, [
                  ue(Z(V.title), 1)
                ], 64))
              ], 16, fc)
            ], 2))), 128)),
            T(w.$slots, "tabs-end")
          ], 10, cc)
        ], 2),
        n(l).end ? ee("", !0) : (m(), O(n(u).reuse, { key: 1 }))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), pc = { id: "__BVID__toaster-container" }, mc = /* @__PURE__ */ z({
  __name: "BToastOrchestrator",
  props: {
    appendToast: { type: Boolean, default: !1 },
    teleportDisabled: { default: !1 },
    teleportTo: { default: "body" }
  },
  setup(t, { expose: o }) {
    const l = M(t, "BToastOrchestrator"), a = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, { remove: s, toasts: r, show: u, _setIsAppend: i } = Jo();
    fe(
      () => l.appendToast,
      (c) => {
        i == null || i(c);
      },
      { immediate: !0 }
    );
    const d = (c) => ga(c, ["_modelValue", "_self", "pos"]);
    return o({
      remove: s,
      show: u,
      toasts: r
    }), (c, f) => (m(), O(_t, {
      to: n(l).teleportTo,
      disabled: n(l).teleportDisabled
    }, [
      J("div", pc, [
        (m(), A(pe, null, ke(a, (g, v) => J("div", {
          key: v,
          class: D([g, "toast-container position-fixed p-3"])
        }, [
          be(Gl, { name: "b-list" }, {
            default: I(() => {
              var y;
              return [
                (m(!0), A(pe, null, ke((y = n(r)) == null ? void 0 : y.filter((B) => B.value.props.pos === v), (B) => (m(), O(de(B.value.component), K({
                  key: B.value.props._self,
                  ref_for: !0
                }, d(B.value.props), {
                  modelValue: B.value.props._modelValue,
                  "onUpdate:modelValue": (C) => B.value.props._modelValue = C,
                  "trans-props": { ...B.value.props.transProps, appear: !0 },
                  onHide: pt((C) => {
                    var p;
                    return (p = n(s)) == null ? void 0 : p(B.value.props._self);
                  }, ["prevent"])
                }), null, 16, ["modelValue", "onUpdate:modelValue", "trans-props", "onHide"]))), 128))
              ];
            }),
            _: 2
          }, 1024)
        ], 2)), 64))
      ])
    ], 8, ["to", "disabled"]));
  }
}), bc = /* @__PURE__ */ z({
  __name: "BTooltip",
  props: /* @__PURE__ */ ge({
    interactive: { type: Boolean, default: void 0 },
    boundary: {},
    boundaryPadding: {},
    click: { type: Boolean, default: void 0 },
    content: { default: void 0 },
    customClass: { default: void 0 },
    delay: { default: void 0 },
    floatingMiddleware: { default: void 0 },
    html: { type: Boolean, default: void 0 },
    id: { default: void 0 },
    inline: { type: Boolean, default: void 0 },
    manual: { type: Boolean, default: void 0 },
    modelValue: { type: Boolean },
    noAutoClose: { type: Boolean, default: void 0 },
    noFade: { type: Boolean, default: void 0 },
    noFlip: { type: Boolean, default: void 0 },
    noHide: { type: Boolean, default: void 0 },
    noShift: { type: Boolean, default: void 0 },
    noSize: { type: Boolean },
    noninteractive: { type: Boolean, default: void 0 },
    offset: { default: void 0 },
    placement: { default: void 0 },
    persistent: { type: Boolean },
    realtime: { type: Boolean, default: void 0 },
    reference: { default: void 0 },
    strategy: { default: void 0 },
    target: { default: void 0 },
    title: { default: void 0 },
    variant: { default: void 0 },
    teleportDisabled: { default: void 0 },
    teleportTo: { default: void 0 }
  }, {
    modelValue: { type: Boolean, default: void 0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: o }) {
    var u, i, d;
    const l = M(t, "BTooltip"), a = _e(t, "modelValue"), s = _(() => {
      const { interactive: c, noninteractive: f, ...g } = l;
      return { noninteractive: f !== void 0 ? f : !c, ...g };
    }), r = L(null);
    return o({
      hide: (u = r.value) == null ? void 0 : u.hide,
      show: (i = r.value) == null ? void 0 : i.show,
      toggle: (d = r.value) == null ? void 0 : d.toggle
    }), (c, f) => (m(), O(Qa, K({
      ref_key: "popover",
      ref: r
    }, s.value, {
      modelValue: a.value,
      "onUpdate:modelValue": f[0] || (f[0] = (g) => a.value = g),
      tooltip: ""
    }), Ra({ _: 2 }, [
      ke(c.$slots, (g, v) => ({
        name: v,
        fn: I((y) => [
          T(c.$slots, v, Be(Ce(y)))
        ])
      }))
    ]), 1040, ["modelValue"]));
  }
}), oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BAccordion: ri,
  BAccordionItem: ui,
  BAlert: ci,
  BAvatar: mi,
  BAvatarGroup: bi,
  BBadge: ln,
  BBreadcrumb: hi,
  BBreadcrumbItem: on,
  BButton: mt,
  BButtonGroup: Bi,
  BButtonToolbar: wi,
  BCard: fn,
  BCardBody: dn,
  BCardFooter: cn,
  BCardGroup: Ti,
  BCardHeader: sn,
  BCardImg: il,
  BCardSubtitle: un,
  BCardText: $i,
  BCardTitle: rn,
  BCarousel: Ni,
  BCarouselSlide: Hi,
  BCloseButton: Ft,
  BCol: zt,
  BCollapse: an,
  BContainer: Mi,
  BDropdown: vn,
  BDropdownDivider: qi,
  BDropdownForm: Wi,
  BDropdownGroup: Ki,
  BDropdownHeader: Zi,
  BDropdownItem: Ji,
  BDropdownItemButton: tu,
  BDropdownText: lu,
  BForm: pn,
  BFormCheckbox: mn,
  BFormCheckboxGroup: fu,
  BFormFile: gu,
  BFormFloatingLabel: ru,
  BFormGroup: $u,
  BFormInput: Il,
  BFormInvalidFeedback: Pa,
  BFormRadio: yn,
  BFormRadioGroup: Iu,
  BFormRow: la,
  BFormSelect: zu,
  BFormSelectOption: ul,
  BFormSelectOptionGroup: gn,
  BFormSpinbutton: Du,
  BFormTag: hn,
  BFormTags: ld,
  BFormText: Na,
  BFormTextarea: nd,
  BFormValidFeedback: Ea,
  BImg: rl,
  BInput: Il,
  BInputGroup: fd,
  BInputGroupAddon: dl,
  BInputGroupAppend: vd,
  BInputGroupPrepend: pd,
  BInputGroupText: Bn,
  BLink: st,
  BListGroup: md,
  BListGroupItem: bd,
  BModal: Ia,
  BModalOrchestrator: gd,
  BNav: hd,
  BNavForm: _d,
  BNavItem: Cd,
  BNavItemDropdown: Td,
  BNavText: xd,
  BNavbar: Sd,
  BNavbarBrand: Vd,
  BNavbarNav: Ad,
  BNavbarToggle: Hd,
  BOffcanvas: Dd,
  BOverlay: Ba,
  BPagination: qd,
  BPlaceholder: Xe,
  BPlaceholderButton: wn,
  BPlaceholderCard: Gd,
  BPlaceholderTable: Ud,
  BPlaceholderWrapper: Xd,
  BPopover: Qa,
  BProgress: en,
  BProgressBar: Qo,
  BRow: Kd,
  BSpinner: ha,
  BTab: dc,
  BTable: uc,
  BTableLite: Tn,
  BTableSimple: cl,
  BTabs: vc,
  BTbody: Cn,
  BTd: St,
  BTfoot: za,
  BTh: Ha,
  BThead: kn,
  BToast: tn,
  BToastOrchestrator: mc,
  BTooltip: bc,
  BTr: at,
  BTransition: Et
}, Symbol.toStringTag, { value: "Module" })), hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useBreadcrumb: zo,
  useColorMode: Nr,
  useModal: Dr,
  useModalController: Ko,
  useScrollspy: Zo,
  useToast: Jo
}, Symbol.toStringTag, { value: "Module" })), Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BvCarouselEvent: Wl,
  BvEvent: rt,
  BvTriggerableEvent: wt
}, Symbol.toStringTag, { value: "Module" })), _c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), $n = (t) => t.toLowerCase().startsWith("v") ? t.slice(1) : t, wc = ({
  components: t = !1,
  directives: o = !1,
  plugins: e = {},
  aliases: l = {}
} = {}) => ({
  install(a) {
    const s = typeof t == "boolean" ? { all: t } : t, r = Object.keys(oa);
    va(s, r).forEach((d) => {
      const c = oa[d];
      a.component(d, c);
    });
    const u = typeof o == "boolean" ? { all: o } : o, i = Object.keys(La);
    va(u, i).forEach((d) => {
      const c = $n(d), f = La[d];
      a.directive(c, f);
    }), Object.entries(l).forEach(([d, c]) => {
      const f = typeof c == "string" ? oa[c] : c;
      a.component(d, f);
    }), ((e == null ? void 0 : e.breadcrumb) ?? !0) && a.use(Yr), (((e == null ? void 0 : e.id) ?? !0) || typeof e.id == "object") && a.use(Zr, e), ((e == null ? void 0 : e.modalController) ?? !0) && a.use(ai), ((e == null ? void 0 : e.modalManager) ?? !0) && a.use(li), (((e == null ? void 0 : e.rtl) ?? !0) || typeof e.rtl == "object") && a.use(oi, e), ((e == null ? void 0 : e.toast) ?? !0) && a.use(Kr), a.use(ni, e);
  }
}), Cc = ({
  aliases: t = {},
  directives: o = !0,
  components: e = !0
} = {}) => {
  const l = typeof e == "boolean" ? { all: e } : e, a = Object.keys(oa), s = va(l, a), r = [
    {
      type: "component",
      resolve: (c) => {
        if (s.includes(c) || t[c])
          return {
            name: t[c] || c,
            from: "bootstrap-vue-next"
          };
      }
    }
  ], u = typeof o == "boolean" ? { all: o } : o, i = Object.keys(La), d = va(u, i).map($n);
  return d.length > 0 && r.push({
    type: "directive",
    resolve: (c) => {
      if (d.includes(c))
        return {
          name: `v${c}`,
          from: "bootstrap-vue-next"
        };
    }
  }), r;
};
export {
  ri as BAccordion,
  ui as BAccordionItem,
  ci as BAlert,
  mi as BAvatar,
  bi as BAvatarGroup,
  ln as BBadge,
  hi as BBreadcrumb,
  on as BBreadcrumbItem,
  mt as BButton,
  Bi as BButtonGroup,
  wi as BButtonToolbar,
  fn as BCard,
  dn as BCardBody,
  cn as BCardFooter,
  Ti as BCardGroup,
  sn as BCardHeader,
  il as BCardImg,
  un as BCardSubtitle,
  $i as BCardText,
  rn as BCardTitle,
  Ni as BCarousel,
  Hi as BCarouselSlide,
  Ft as BCloseButton,
  zt as BCol,
  an as BCollapse,
  Mi as BContainer,
  vn as BDropdown,
  qi as BDropdownDivider,
  Wi as BDropdownForm,
  Ki as BDropdownGroup,
  Zi as BDropdownHeader,
  Ji as BDropdownItem,
  tu as BDropdownItemButton,
  lu as BDropdownText,
  pn as BForm,
  mn as BFormCheckbox,
  fu as BFormCheckboxGroup,
  gu as BFormFile,
  ru as BFormFloatingLabel,
  $u as BFormGroup,
  Il as BFormInput,
  Pa as BFormInvalidFeedback,
  yn as BFormRadio,
  Iu as BFormRadioGroup,
  la as BFormRow,
  zu as BFormSelect,
  ul as BFormSelectOption,
  gn as BFormSelectOptionGroup,
  Du as BFormSpinbutton,
  hn as BFormTag,
  ld as BFormTags,
  Na as BFormText,
  nd as BFormTextarea,
  Ea as BFormValidFeedback,
  rl as BImg,
  Il as BInput,
  fd as BInputGroup,
  dl as BInputGroupAddon,
  vd as BInputGroupAppend,
  pd as BInputGroupPrepend,
  Bn as BInputGroupText,
  st as BLink,
  md as BListGroup,
  bd as BListGroupItem,
  Ia as BModal,
  gd as BModalOrchestrator,
  hd as BNav,
  _d as BNavForm,
  Cd as BNavItem,
  Td as BNavItemDropdown,
  xd as BNavText,
  Sd as BNavbar,
  Vd as BNavbarBrand,
  Ad as BNavbarNav,
  Hd as BNavbarToggle,
  Dd as BOffcanvas,
  Ba as BOverlay,
  qd as BPagination,
  Xe as BPlaceholder,
  wn as BPlaceholderButton,
  Gd as BPlaceholderCard,
  Ud as BPlaceholderTable,
  Xd as BPlaceholderWrapper,
  Qa as BPopover,
  en as BProgress,
  Qo as BProgressBar,
  Kd as BRow,
  ha as BSpinner,
  dc as BTab,
  uc as BTable,
  Tn as BTableLite,
  cl as BTableSimple,
  vc as BTabs,
  Cn as BTbody,
  St as BTd,
  za as BTfoot,
  Ha as BTh,
  kn as BThead,
  tn as BToast,
  mc as BToastOrchestrator,
  bc as BTooltip,
  at as BTr,
  Et as BTransition,
  Cc as BootstrapVueNextResolver,
  Wl as BvCarouselEvent,
  rt as BvEvent,
  wt as BvTriggerableEvent,
  oa as Components,
  hc as Composables,
  La as Directives,
  _c as Types,
  Bc as Utils,
  wc as createBootstrap,
  wc as default,
  zo as useBreadcrumb,
  Nr as useColorMode,
  Dr as useModal,
  Ko as useModalController,
  Zo as useScrollspy,
  Jo as useToast,
  Od as vBColorMode,
  Fa as vBModal,
  Nd as vBPopover,
  Ed as vBScrollspy,
  Fa as vBToggle,
  Fd as vBTooltip
};
//# sourceMappingURL=bootstrap-vue-next.mjs.map
