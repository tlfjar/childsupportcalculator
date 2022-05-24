"use strict";
(self["webpackChunkchildsupportcalculator"] =
  self["webpackChunkchildsupportcalculator"] || []).push([
  [674],
  {
    2674: (e, t, a) => {
      a.r(t), a.d(t, { default: () => U });
      var l = a(3673),
        n = a(2323);
      const i = (0, l.Uk)("Troutt Law Firm"),
        u = (0, l.Uk)("Essential Links");
      function r(e, t, a, r, o, c) {
        const p = (0, l.up)("q-btn"),
          m = (0, l.up)("q-toolbar-title"),
          s = (0, l.up)("q-toolbar"),
          d = (0, l.up)("q-header"),
          w = (0, l.up)("q-item-label"),
          k = (0, l.up)("EssentialLink"),
          f = (0, l.up)("q-list"),
          g = (0, l.up)("q-drawer"),
          L = (0, l.up)("router-view"),
          b = (0, l.up)("q-page-container"),
          q = (0, l.up)("q-layout");
        return (
          (0, l.wg)(),
          (0, l.j4)(
            q,
            { view: "lHh Lpr lFf" },
            {
              default: (0, l.w5)(() => [
                (0, l.Wm)(
                  d,
                  { elevated: "" },
                  {
                    default: (0, l.w5)(() => [
                      (0, l.Wm)(s, null, {
                        default: (0, l.w5)(() => [
                          (0, l.Wm)(
                            p,
                            {
                              flat: "",
                              dense: "",
                              round: "",
                              icon: "menu",
                              "aria-label": "Menu",
                              onClick: e.toggleLeftDrawer,
                            },
                            null,
                            8,
                            ["onClick"]
                          ),
                          (0, l.Wm)(m, null, {
                            default: (0, l.w5)(() => [i]),
                            _: 1,
                          }),
                          (0, l._)(
                            "div",
                            null,
                            "Quasar v" + (0, n.zw)(e.$q.version),
                            1
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                (0, l.Wm)(
                  g,
                  {
                    modelValue: e.leftDrawerOpen,
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.leftDrawerOpen = t)),
                    "show-if-above": "",
                    bordered: "",
                  },
                  {
                    default: (0, l.w5)(() => [
                      (0, l.Wm)(f, null, {
                        default: (0, l.w5)(() => [
                          (0, l.Wm)(
                            w,
                            { header: "" },
                            { default: (0, l.w5)(() => [u]), _: 1 }
                          ),
                          ((0, l.wg)(!0),
                          (0, l.iD)(
                            l.HY,
                            null,
                            (0, l.Ko)(
                              e.essentialLinks,
                              (e) => (
                                (0, l.wg)(),
                                (0, l.j4)(
                                  k,
                                  (0, l.dG)({ key: e.title }, e),
                                  null,
                                  16
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
                (0, l.Wm)(b, null, {
                  default: (0, l.w5)(() => [(0, l.Wm)(L)]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      }
      function o(e, t, a, i, u, r) {
        const o = (0, l.up)("q-icon"),
          c = (0, l.up)("q-item-section"),
          p = (0, l.up)("q-item-label"),
          m = (0, l.up)("q-item");
        return e.link
          ? ((0, l.wg)(),
            (0, l.j4)(
              m,
              {
                key: 0,
                clickable: "",
                tag: "a",
                target: "_blank",
                href: e.link,
              },
              {
                default: (0, l.w5)(() => [
                  e.icon
                    ? ((0, l.wg)(),
                      (0, l.j4)(
                        c,
                        { key: 0, avatar: "" },
                        {
                          default: (0, l.w5)(() => [
                            (0, l.Wm)(o, { name: e.icon }, null, 8, ["name"]),
                          ]),
                          _: 1,
                        }
                      ))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(c, null, {
                    default: (0, l.w5)(() => [
                      (0, l.Wm)(p, null, {
                        default: (0, l.w5)(() => [
                          (0, l.Uk)((0, n.zw)(e.title), 1),
                        ]),
                        _: 1,
                      }),
                      (0, l.Wm)(
                        p,
                        { caption: "" },
                        {
                          default: (0, l.w5)(() => [
                            (0, l.Uk)((0, n.zw)(e.caption), 1),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["href"]
            ))
          : e.internalLink
          ? ((0, l.wg)(),
            (0, l.j4)(
              m,
              { key: 1, clickable: "", to: e.internalLink },
              {
                default: (0, l.w5)(() => [
                  e.icon
                    ? ((0, l.wg)(),
                      (0, l.j4)(
                        c,
                        { key: 0, avatar: "" },
                        {
                          default: (0, l.w5)(() => [
                            (0, l.Wm)(o, { name: e.icon }, null, 8, ["name"]),
                          ]),
                          _: 1,
                        }
                      ))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(c, null, {
                    default: (0, l.w5)(() => [
                      (0, l.Wm)(p, null, {
                        default: (0, l.w5)(() => [
                          (0, l.Uk)((0, n.zw)(e.title), 1),
                        ]),
                        _: 1,
                      }),
                      (0, l.Wm)(
                        p,
                        { caption: "" },
                        {
                          default: (0, l.w5)(() => [
                            (0, l.Uk)((0, n.zw)(e.caption), 1),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ))
          : (0, l.kq)("", !0);
      }
      const c = (0, l.aZ)({
        name: "EssentialLink",
        props: {
          title: { type: String, required: !0 },
          caption: { type: String, default: "" },
          link: { type: String, default: "" },
          internalLink: { type: String, default: "#" },
          icon: { type: String, default: "" },
        },
      });
      var p = a(4260),
        m = a(3414),
        s = a(2035),
        d = a(4554),
        w = a(2350),
        k = a(7518),
        f = a.n(k);
      const g = (0, p.Z)(c, [["render", o]]),
        L = g;
      f()(c, "components", {
        QItem: m.Z,
        QItemSection: s.Z,
        QIcon: d.Z,
        QItemLabel: w.Z,
      });
      var b = a(1959);
      const q = [
          {
            title: "Home",
            caption: "Troutt Law Firm Home Page",
            icon: "home",
            internalLink: "/",
          },
          {
            title: "Child Support Calculator",
            caption: "Current Arkansas Support Calculator",
            icon: "calculate",
            internalLink: "/calc",
          },
          {
            title: "Github",
            caption: "github.com/quasarframework",
            icon: "code",
            link: "https://github.com/quasarframework",
          },
        ],
        _ = (0, l.aZ)({
          name: "MainLayout",
          components: { EssentialLink: L },
          setup() {
            const e = (0, b.iH)(!1);
            return {
              essentialLinks: q,
              leftDrawerOpen: e,
              toggleLeftDrawer() {
                e.value = !e.value;
              },
            };
          },
        });
      var h = a(3066),
        W = a(3812),
        Z = a(9570),
        v = a(4607),
        Q = a(3747),
        y = a(2428),
        C = a(7011),
        S = a(2652);
      const D = (0, p.Z)(_, [["render", r]]),
        U = D;
      f()(_, "components", {
        QLayout: h.Z,
        QHeader: W.Z,
        QToolbar: Z.Z,
        QBtn: v.Z,
        QToolbarTitle: Q.Z,
        QDrawer: y.Z,
        QList: C.Z,
        QItemLabel: w.Z,
        QPageContainer: S.Z,
      });
    },
  },
]);
