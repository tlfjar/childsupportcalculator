"use strict";
(self["webpackChunkchildsupportcalculator"] =
  self["webpackChunkchildsupportcalculator"] || []).push([
  [614],
  {
    5614: (e, t, l) => {
      l.r(t), l.d(t, { default: () => f });
      var c = l(3673);
      const n = {
          class:
            "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
        },
        o = (0, c._)("div", { style: { "font-size": "30vh" } }, "404", -1),
        s = (0, c._)(
          "div",
          { class: "text-h2", style: { opacity: "0.4" } },
          "Oops. Nothing here...",
          -1
        );
      function r(e, t, l, r, a, u) {
        const i = (0, c.up)("q-btn");
        return (
          (0, c.wg)(),
          (0, c.iD)("div", n, [
            (0, c._)("div", null, [
              o,
              s,
              (0, c.Wm)(i, {
                class: "q-mt-xl",
                color: "white",
                "text-color": "blue",
                unelevated: "",
                to: "/",
                label: "Go Home",
                "no-caps": "",
              }),
            ]),
          ])
        );
      }
      const a = (0, c.aZ)({ name: "Error404" });
      var u = l(4260),
        i = l(4607),
        p = l(7518),
        d = l.n(p);
      const h = (0, u.Z)(a, [["render", r]]),
        f = h;
      d()(a, "components", { QBtn: i.Z });
    },
  },
]);
