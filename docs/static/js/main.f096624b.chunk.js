(this["webpackJsonpreact-hooks"] = this["webpackJsonpreact-hooks"] || []).push([
  [0],
  {
    14: function (e, t, a) {},
    18: function (e, t, a) {
      e.exports = a(32);
    },
    23: function (e, t, a) {},
    24: function (e, t, a) {},
    25: function (e, t, a) {},
    32: function (e, t, a) {
      "use strict";
      a.r(t);
      const n = a(0);
      const c = a.n(n);
      const r = a(15);
      const l = a.n(r);
      const o = (a(23), a(7));
      const u = a(1);
      const s = (a(24), a(2));
      const i = function (e) {
        return c.a.createElement(
          "div",
          null,
          c.a.createElement("input", {
            type: e.type,
            onChange: e.onChange,
            value: e.value,
            placeholder: e.placeHolder,
            onClick: e.onClick,
          })
        );
      };
      a(25);
      const m = function () {
        const e = Object(n.useState)("");
        const t = Object(s.a)(e, 2);
        const a = t[0];
        const r = t[1];
        const l = Object(n.useState)("");
        const o = Object(s.a)(l, 2);
        const m = o[0];
        const h = o[1];
        const p = Object(n.useState)(!1);
        const E = Object(s.a)(p, 2);
        const f = E[0];
        const j = E[1];
        return c.a.createElement(
          "div",
          { className: "loginWrapper" },
          c.a.createElement(
            "div",
            { className: "loginContent" },
            f ? c.a.createElement(u.a, { to: "/emojis" }) : null,
            c.a.createElement(i, {
              onChange: function (e) {
                return r(e.target.value);
              },
              value: a,
              type: "text",
              placeHolder: "Your Name",
            }),
            c.a.createElement(i, {
              onChange: function (e) {
                return h(e.target.value);
              },
              value: m,
              type: "email",
              placeHolder: "Your Email",
            }),
            c.a.createElement(
              "button",
              {
                type: "submit",
                onClick: function (e) {
                  return setTimeout(function () {
                    return j(!0);
                  }, 0);
                },
              },
              "Submit"
            )
          )
        );
      };
      a(14);
      const h = function () {
        const e = Object(n.useState)([]);
        const t = Object(s.a)(e, 2);
        const a = t[0];
        const r = t[1];
        const l = Object(n.useState)(0);
        const o = Object(s.a)(l, 2);
        const u = o[0];
        const m = o[1];
        const h = Object(n.useState)("");
        const p = Object(s.a)(h, 2);
        const E = p[0];
        const f = p[1];
        const j = Object(n.useState)(!1);
        const d = Object(s.a)(j, 2);
        const v = d[0];
        const b = d[1];
        return (
          Object(n.useEffect)(
            function () {
              b(!0),
                fetch("https://unpkg.com/emoji.json@13.0.0/emoji.json")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    if (E) {
                      const t = e.filter(function (e) {
                        return e.name.toLowerCase().includes(E.toLowerCase());
                      });
                      r(t), m(t.length);
                    } else r(e), m(e.length);
                    b(!1);
                  });
            },
            [E]
          ),
          c.a.createElement(
            "div",
            null,
            c.a.createElement(
              "div",
              { className: "header" },
              c.a.createElement(
                "div",
                null,
                c.a.createElement("a", { href: "/" }, "Home"),
                c.a.createElement("a", { href: "/emojis" }, "Emojis"),
                c.a.createElement(
                  "a",
                  { href: "/emojisWithCustomHooks" },
                  "Emojis with custom hook"
                )
              ),
              c.a.createElement(i, {
                onChange: function (e) {
                  f(e.target.value);
                },
                type: "search",
                placeHolder: "Search...",
              }),
              c.a.createElement(
                "p",
                null,
                "Total Results:  ",
                c.a.createElement("b", null, u)
              )
            ),
            v
              ? c.a.createElement(
                  "div",
                  { className: "App" },
                  " ",
                  c.a.createElement("p", null, "Loading..."),
                  " "
                )
              : c.a.createElement(
                  "ul",
                  { className: "list" },
                  a.map(function (e) {
                    return c.a.createElement(
                      "li",
                      { key: e.codes },
                      c.a.createElement("p", null, e.char),
                      c.a.createElement("span", null, e.name)
                    );
                  })
                )
          )
        );
      };
      const p = a(11);
      const E = a.n(p);
      const f = a(17);
      function j(e, t) {
        const a = Object(n.useState)([]);
        const c = Object(s.a)(a, 2);
        const r = c[0];
        const l = c[1];
        const o = Object(n.useState)(0);
        const u = Object(s.a)(o, 2);
        const i = u[0];
        const m = u[1];
        const h = Object(n.useState)(!1);
        const p = Object(s.a)(h, 2);
        const j = p[0];
        const d = p[1];
        function v() {
          return (v = Object(f.a)(
            E.a.mark(function a() {
              let n, c, r;
              return E.a.wrap(function (a) {
                for (;;) {
                  switch ((a.prev = a.next)) {
                    case 0:
                      return d(!0), (a.next = 3), fetch(e);
                    case 3:
                      return (n = a.sent), (a.next = 6), n.json();
                    case 6:
                      (c = a.sent),
                        t.length > 2
                          ? ((r = c.filter(function (e) {
                              return e.name
                                .toLowerCase()
                                .includes(t.toLowerCase());
                            })),
                            l(r),
                            m(r.length))
                          : (l(c), m(c.length)),
                        d(!1);
                    case 9:
                    case "end":
                      return a.stop();
                  }
                }
              }, a);
            })
          )).apply(this, arguments);
        }
        return (
          Object(n.useEffect)(
            function () {
              !(function () {
                v.apply(this, arguments);
              })();
            },
            [t]
          ),
          { data: r, length: i, loading: j }
        );
      }
      const d = function () {
        const e = Object(n.useState)("");
        const t = Object(s.a)(e, 2);
        const a = t[0];
        const r = t[1];
        const l = j("https://unpkg.com/emoji.json@13.0.0/emoji.json", a);
        const o = l.data;
        const u = l.length;
        const m = l.loading;
        return c.a.createElement(
          "div",
          null,
          c.a.createElement(
            "div",
            { className: "header" },
            c.a.createElement(
              "div",
              null,
              c.a.createElement("a", { href: "/" }, "Home"),
              c.a.createElement("a", { href: "/emojis" }, "Emojis"),
              c.a.createElement(
                "a",
                { href: "/emojisWithCustomHooks" },
                "Emojis with custom hook"
              )
            ),
            c.a.createElement(i, {
              onChange: function (e) {
                r(e.target.value);
              },
              type: "search",
              placeHolder: "Search...",
            }),
            c.a.createElement(
              "p",
              null,
              "Total Results:  ",
              c.a.createElement("b", null, u)
            )
          ),
          m
            ? c.a.createElement(
                "div",
                { className: "App" },
                " ",
                c.a.createElement("p", null, "Loading..."),
                " "
              )
            : c.a.createElement(
                "ul",
                { className: "list" },
                o.map(function (e) {
                  return c.a.createElement(
                    "li",
                    { key: e.codes },
                    c.a.createElement("p", null, e.char),
                    c.a.createElement("span", null, e.name)
                  );
                })
              )
        );
      };
      const v = function () {
        return c.a.createElement(
          o.a,
          null,
          c.a.createElement(
            u.d,
            null,
            c.a.createElement(u.b, { exact: !0, path: "/", component: m }),
            c.a.createElement(u.b, {
              exact: !0,
              path: "/emojis",
              component: h,
            }),
            c.a.createElement(u.b, {
              exact: !0,
              path: "/emojisWithCustomHooks",
              component: d,
            })
          )
        );
      };
      Boolean(
        window.location.hostname === "localhost" ||
          window.location.hostname === "[::1]" ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(
        c.a.createElement(c.a.StrictMode, null, c.a.createElement(v, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[18, 1, 2]],
]);
// # sourceMappingURL=main.f096624b.chunk.js.map
