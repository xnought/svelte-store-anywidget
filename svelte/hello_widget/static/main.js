var H = Object.defineProperty;
var P = (t, e, n) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var C = (t, e, n) => (P(t, typeof e != "symbol" ? e + "" : e, n), n);
function d() {
}
function k(t) {
  return t();
}
function O() {
  return /* @__PURE__ */ Object.create(null);
}
function w(t) {
  t.forEach(k);
}
function v(t) {
  return typeof t == "function";
}
function U(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function V(t) {
  return Object.keys(t).length === 0;
}
function s(t, e) {
  t.appendChild(e);
}
function b(t, e, n) {
  t.insertBefore(e, n || null);
}
function _(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function f(t) {
  return document.createElement(t);
}
function E(t) {
  return document.createTextNode(t);
}
function y() {
  return E(" ");
}
function X(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Y(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function F(t) {
  return Array.from(t.childNodes);
}
function J(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let p;
function L(t) {
  p = t;
}
const D = [], $ = [];
let j = [];
const S = [], q = /* @__PURE__ */ Promise.resolve();
let z = !1;
function K() {
  z || (z = !0, q.then(Q));
}
function m(t) {
  j.push(t);
}
const x = /* @__PURE__ */ new Set();
let A = 0;
function Q() {
  if (A !== 0)
    return;
  const t = p;
  do {
    try {
      for (; A < D.length; ) {
        const e = D[A];
        A++, L(e), tt(e.$$);
      }
    } catch (e) {
      throw D.length = 0, A = 0, e;
    }
    for (L(null), D.length = 0, A = 0; $.length; )
      $.pop()();
    for (let e = 0; e < j.length; e += 1) {
      const n = j[e];
      x.has(n) || (x.add(n), n());
    }
    j.length = 0;
  } while (D.length);
  for (; S.length; )
    S.pop()();
  z = !1, x.clear(), L(t);
}
function tt(t) {
  if (t.fragment !== null) {
    t.update(), w(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(m);
  }
}
function et(t) {
  const e = [], n = [];
  j.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), j = e;
}
const h = /* @__PURE__ */ new Set();
let nt;
function W(t, e) {
  t && t.i && (h.delete(t), t.i(e));
}
function it(t, e, n, i) {
  if (t && t.o) {
    if (h.has(t))
      return;
    h.add(t), nt.c.push(() => {
      h.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Mt(t) {
  t && t.c();
}
function Z(t, e, n) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, n), m(() => {
    const g = t.$$.on_mount.map(k).filter(v);
    t.$$.on_destroy ? t.$$.on_destroy.push(...g) : w(g), t.$$.on_mount = [];
  }), u.forEach(m);
}
function G(t, e) {
  const n = t.$$;
  n.fragment !== null && (et(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ut(t, e) {
  t.$$.dirty[0] === -1 && (D.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(t, e, n, i, u, g, r, o = [-1]) {
  const l = p;
  L(t);
  const M = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: g,
    update: d,
    not_equal: u,
    bound: O(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: O(),
    dirty: o,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  r && r(M.root);
  let I = !1;
  if (M.ctx = n ? n(t, e.props || {}, (c, a, ...N) => {
    const T = N.length ? N[0] : a;
    return M.ctx && u(M.ctx[c], M.ctx[c] = T) && (!M.skip_bound && M.bound[c] && M.bound[c](T), I && ut(t, c)), a;
  }) : [], M.update(), I = !0, w(M.before_update), M.fragment = i ? i(M.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = F(e.target);
      M.fragment && M.fragment.l(c), c.forEach(_);
    } else
      M.fragment && M.fragment.c();
    e.intro && W(t.$$.fragment), Z(t, e.target, e.anchor), Q();
  }
  L(l);
}
class B {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    C(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    C(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    G(this, 1), this.$destroy = d;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!v(n))
      return d;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const u = i.indexOf(n);
      u !== -1 && i.splice(u, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !V(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rt);
const ct = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjI2LjYiIGhlaWdodD0iMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMzA4Ij48cGF0aCBmaWxsPSIjRkYzRTAwIiBkPSJNMjM5LjY4MiA0MC43MDdDMjExLjExMy0uMTgyIDE1NC42OS0xMi4zMDEgMTEzLjg5NSAxMy42OUw0Mi4yNDcgNTkuMzU2YTgyLjE5OCA4Mi4xOTggMCAwIDAtMzcuMTM1IDU1LjA1NmE4Ni41NjYgODYuNTY2IDAgMCAwIDguNTM2IDU1LjU3NmE4Mi40MjUgODIuNDI1IDAgMCAwLTEyLjI5NiAzMC43MTlhODcuNTk2IDg3LjU5NiAwIDAgMCAxNC45NjQgNjYuMjQ0YzI4LjU3NCA0MC44OTMgODQuOTk3IDUzLjAwNyAxMjUuNzg3IDI3LjAxNmw3MS42NDgtNDUuNjY0YTgyLjE4MiA4Mi4xODIgMCAwIDAgMzcuMTM1LTU1LjA1N2E4Ni42MDEgODYuNjAxIDAgMCAwLTguNTMtNTUuNTc3YTgyLjQwOSA4Mi40MDkgMCAwIDAgMTIuMjktMzAuNzE4YTg3LjU3MyA4Ny41NzMgMCAwIDAtMTQuOTYzLTY2LjI0NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDYuODg5IDI3MC44NDFjLTIzLjEwMiA2LjAwNy00Ny40OTctMy4wMzYtNjEuMTAzLTIyLjY0OGE1Mi42ODUgNTIuNjg1IDAgMCAxLTkuMDAzLTM5Ljg1YTQ5Ljk3OCA0OS45NzggMCAwIDEgMS43MTMtNi42OTNsMS4zNS00LjExNWwzLjY3MSAyLjY5N2E5Mi40NDcgOTIuNDQ3IDAgMCAwIDI4LjAzNiAxNC4wMDdsMi42NjMuODA4bC0uMjQ1IDIuNjU5YTE2LjA2NyAxNi4wNjcgMCAwIDAgMi44OSAxMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMCAxOC4zOTcgNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMCA0LjQwMy0xLjkzNWw3MS42Ny00NS42NzJhMTQuOTIyIDE0LjkyMiAwIDAgMCA2LjczNC05Ljk3N2ExNS45MjMgMTUuOTIzIDAgMCAwLTIuNzEzLTEyLjAxMWExNy4xNTYgMTcuMTU2IDAgMCAwLTE4LjQwNC02LjgzMmExNS43OCAxNS43OCAwIDAgMC00LjM5NiAxLjkzM2wtMjcuMzUgMTcuNDM0YTUyLjI5OCA1Mi4yOTggMCAwIDEtMTQuNTUzIDYuMzkxYy0yMy4xMDEgNi4wMDctNDcuNDk3LTMuMDM2LTYxLjEwMS0yMi42NDlhNTIuNjgxIDUyLjY4MSAwIDAgMS05LjAwNC0zOS44NDlhNDkuNDI4IDQ5LjQyOCAwIDAgMSAyMi4zNC0zMy4xMTRsNzEuNjY0LTQ1LjY3N2E1Mi4yMTggNTIuMjE4IDAgMCAxIDE0LjU2My02LjM5OGMyMy4xMDEtNi4wMDcgNDcuNDk3IDMuMDM2IDYxLjEwMSAyMi42NDhhNTIuNjg1IDUyLjY4NSAwIDAgMSA5LjAwNCAzOS44NWE1MC41NTkgNTAuNTU5IDAgMCAxLTEuNzEzIDYuNjkybC0xLjM1IDQuMTE2bC0zLjY3LTIuNjkzYTkyLjM3MyA5Mi4zNzMgMCAwIDAtMjguMDM3LTE0LjAxM2wtMi42NjQtLjgwOWwuMjQ2LTIuNjU4YTE2LjA5OSAxNi4wOTkgMCAwIDAtMi44OS0xMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMC0xOC4zOTgtNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMC00LjQwMiAxLjkzNWwtNzEuNjcgNDUuNjc0YTE0Ljg5OCAxNC44OTggMCAwIDAtNi43MyA5Ljk3NWExNS45IDE1LjkgMCAwIDAgMi43MDkgMTIuMDEyYTE3LjE1NiAxNy4xNTYgMCAwIDAgMTguNDA0IDYuODMyYTE1Ljg0MSAxNS44NDEgMCAwIDAgNC40MDItMS45MzVsMjcuMzQ1LTE3LjQyN2E1Mi4xNDcgNTIuMTQ3IDAgMCAxIDE0LjU1Mi02LjM5N2MyMy4xMDEtNi4wMDYgNDcuNDk3IDMuMDM3IDYxLjEwMiAyMi42NWE1Mi42ODEgNTIuNjgxIDAgMCAxIDkuMDAzIDM5Ljg0OGE0OS40NTMgNDkuNDUzIDAgMCAxLTIyLjM0IDMzLjEybC03MS42NjQgNDUuNjczYTUyLjIxOCA1Mi4yMTggMCAwIDEtMTQuNTYzIDYuMzk4Ij48L3BhdGg+PC9zdmc+", ot = "/vite.svg";
function st(t) {
  let e, n, i, u, g;
  return {
    c() {
      e = f("button"), n = E("count is "), i = E(
        /*count*/
        t[0]
      );
    },
    m(r, o) {
      b(r, e, o), s(e, n), s(e, i), u || (g = X(
        e,
        "click",
        /*increment*/
        t[1]
      ), u = !0);
    },
    p(r, [o]) {
      o & /*count*/
      1 && J(
        i,
        /*count*/
        r[0]
      );
    },
    i: d,
    o: d,
    d(r) {
      r && _(e), u = !1, g();
    }
  };
}
function gt(t, e, n) {
  let i = 0;
  return [i, () => {
    n(0, i += 1);
  }];
}
class Nt extends B {
  constructor(e) {
    super(), R(this, e, gt, st, U, {});
  }
}
function lt(t) {
  let e, n, i, u, g, r, o, l, M, I, c, a;
  return o = new Nt({}), {
    c() {
      e = f("main"), n = f("div"), n.innerHTML = `<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${ot}" class="logo svelte-11cv5lq" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${ct}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`, i = y(), u = f("h1"), u.textContent = "Vite + Svelte", g = y(), r = f("div"), Mt(o.$$.fragment), l = y(), M = f("p"), M.innerHTML = 'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!', I = y(), c = f("p"), c.textContent = "Click on the Vite and Svelte logos to learn more", Y(r, "class", "card"), Y(c, "class", "read-the-docs svelte-11cv5lq");
    },
    m(N, T) {
      b(N, e, T), s(e, n), s(e, i), s(e, u), s(e, g), s(e, r), Z(o, r, null), s(e, l), s(e, M), s(e, I), s(e, c), a = !0;
    },
    p: d,
    i(N) {
      a || (W(o.$$.fragment, N), a = !0);
    },
    o(N) {
      it(o.$$.fragment, N), a = !1;
    },
    d(N) {
      N && _(e), G(o);
    }
  };
}
class at extends B {
  constructor(e) {
    super(), R(this, e, null, lt, U, {});
  }
}
function At({ model: t, el: e }) {
  let n = new at({ target: e });
  return () => n.$destroy();
}
export {
  At as default,
  At as render
};
