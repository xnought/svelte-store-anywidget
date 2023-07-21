var P = Object.defineProperty;
var q = (t, e, n) => e in t ? P(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var y = (t, e, n) => (q(t, typeof e != "symbol" ? e + "" : e, n), n);
function m() {
}
function j(t) {
  return t();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function p(t) {
  t.forEach(j);
}
function L(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function D(t) {
  return Object.keys(t).length === 0;
}
function A(t, e) {
  t.appendChild(e);
}
function F(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t) {
  return document.createElement(t);
}
function N(t) {
  return document.createTextNode(t);
}
function T(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function U(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function V(t) {
  return Array.from(t.childNodes);
}
function G(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let g;
function h(t) {
  g = t;
}
function I() {
  if (!g)
    throw new Error("Function called outside component initialization");
  return g;
}
function H(t) {
  I().$$.on_mount.push(t);
}
function J(t) {
  I().$$.on_destroy.push(t);
}
const d = [], O = [];
let _ = [];
const S = [], K = /* @__PURE__ */ Promise.resolve();
let b = !1;
function Q() {
  b || (b = !0, K.then(M));
}
function w(t) {
  _.push(t);
}
const $ = /* @__PURE__ */ new Set();
let a = 0;
function M() {
  if (a !== 0)
    return;
  const t = g;
  do {
    try {
      for (; a < d.length; ) {
        const e = d[a];
        a++, h(e), W(e.$$);
      }
    } catch (e) {
      throw d.length = 0, a = 0, e;
    }
    for (h(null), d.length = 0, a = 0; O.length; )
      O.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      $.has(n) || ($.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; S.length; )
    S.pop()();
  b = !1, $.clear(), h(t);
}
function W(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(w);
  }
}
function X(t) {
  const e = [], n = [];
  _.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), _ = e;
}
const Y = /* @__PURE__ */ new Set();
function Z(t, e) {
  t && t.i && (Y.delete(t), t.i(e));
}
function tt(t, e, n) {
  const { fragment: r, after_update: c } = t.$$;
  r && r.m(e, n), w(() => {
    const s = t.$$.on_mount.map(j).filter(L);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : p(s), t.$$.on_mount = [];
  }), c.forEach(w);
}
function et(t, e) {
  const n = t.$$;
  n.fragment !== null && (X(n.after_update), p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), Q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function rt(t, e, n, r, c, s, u, i = [-1]) {
  const f = g;
  h(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: m,
    not_equal: c,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: i,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  u && u(o.root);
  let v = !1;
  if (o.ctx = n ? n(t, e.props || {}, (l, x, ...k) => {
    const E = k.length ? k[0] : x;
    return o.ctx && c(o.ctx[l], o.ctx[l] = E) && (!o.skip_bound && o.bound[l] && o.bound[l](E), v && nt(t, l)), x;
  }) : [], o.update(), v = !0, p(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = V(e.target);
      o.fragment && o.fragment.l(l), l.forEach(B);
    } else
      o.fragment && o.fragment.c();
    e.intro && Z(t.$$.fragment), tt(t, e.target, e.anchor), M();
  }
  h(f);
}
class ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!L(n))
      return m;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !D(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
function ut(t) {
  let e, n, r, c, s;
  return {
    c() {
      e = R("button"), n = N("Count is "), r = N(
        /*count*/
        t[2]
      ), U(e, "class", "svelte-1qwvwam");
    },
    m(u, i) {
      F(u, e, i), A(e, n), A(e, r), c || (s = T(
        e,
        "click",
        /*click_handler*/
        t[3]
      ), c = !0);
    },
    p(u, [i]) {
      i & /*count*/
      4 && G(
        r,
        /*count*/
        u[2]
      );
    },
    i: m,
    o: m,
    d(u) {
      u && B(e), c = !1, s();
    }
  };
}
function st(t, e, n) {
  let { model: r } = e, { name: c = "value" } = e;
  console.log(r);
  let s = r.get(c), u = `change:${c}`, i = () => n(2, s = r.get(c));
  H(() => {
    r.on(u, i);
  }), J(() => {
    r.off(u, i);
  });
  const f = () => {
    r.set(c, r.get(c) + 1), r.save_changes();
  };
  return t.$$set = (o) => {
    "model" in o && n(0, r = o.model), "name" in o && n(1, c = o.name);
  }, [r, c, s, f];
}
class it extends ot {
  constructor(e) {
    super(), rt(this, e, st, ut, z, { model: 0, name: 1 });
  }
}
function ft({ model: t, el: e }) {
  const n = new it({ target: e, props: { model: t } });
  return () => n.$destroy();
}
export {
  ft as default,
  ft as render
};
