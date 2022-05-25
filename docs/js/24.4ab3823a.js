"use strict";
(self["webpackChunkchildsupportcalculator"] =
  self["webpackChunkchildsupportcalculator"] || []).push([
  [24],
  {
    2024: (e, o, m) => {
      m.r(o), m.d(o, { default: () => X });
      var n = m(3673),
        p = m(2323);
      const t = { class: "fit row q-py-xs", style: { "max-width": "1280px" } },
        a = {
          class:
            "fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1",
          style: { "min-width": "624px", "max-width": "624px" },
        },
        c = { class: "col-4 q-mx-sm", style: { "min-height": "280px" } },
        d = {
          class: "col-lt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm",
          style: { "min-height": "280px" },
        },
        i = {
          class:
            "fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1",
          style: { "min-width": "624px", "max-width": "624px" },
        },
        r = (0, n._)(
          "h5",
          { class: "col-12 q-my-none q-mx-sm" },
          "Plaintiff",
          -1
        ),
        u = (0, n._)(
          "div",
          { class: "col-4 q-gutter-sm q-col-gutter-sm" },
          null,
          -1
        ),
        s = { key: 0, class: "col-12 q-mt-sm q-mb-none q-mx-sm" },
        x = { key: 1, class: "col-12 q-mt-sm q-mb-none q-mx-sm" },
        b = (0, n._)("div", { class: "col-4" }, null, -1),
        l = {
          class: "col-gt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm",
          style: { "min-height": "280px" },
        },
        I = {
          class:
            "fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1",
          style: { "min-width": "624px", "max-width": "624px" },
        },
        S = (0, n._)(
          "h5",
          { class: "col-12 q-my-none q-mx-sm" },
          "Defendant",
          -1
        ),
        f = (0, n._)(
          "div",
          { class: "col-4 q-gutter-sm q-col-gutter-sm" },
          null,
          -1
        ),
        h = { key: 0, class: "col-12 q-mt-sm q-mb-none q-mx-sm" },
        $ = { key: 1, class: "col-12 q-mt-sm q-mb-none q-mx-sm" },
        y = (0, n._)("div", { class: "col-4" }, null, -1),
        g = {
          class:
            "fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1",
          style: { "min-width": "624px", "max-width": "624px" },
        },
        P = {
          class: "col-gt-lg-6 col-lt-lg-12 q-mb-none q-mx-sm",
          style: { "min-height": "280px" },
        },
        w = (0, n._)(
          "div",
          { class: "row q-mx-sm text-h5" },
          "Support Paragraph:",
          -1
        ),
        F = { class: "row q-mx-sm q-my-xs text-justify" },
        q = {
          class: "row q-mx-sm q-mt-sm q-my-none justify-center items-center",
        };
      function k(e, o, m, k, v, V) {
        const E = (0, n.up)("q-date"),
          D = (0, n.up)("q-separator"),
          W = (0, n.up)("q-input"),
          G = (0, n.up)("q-select"),
          N = (0, n.up)("DocxWorksheet"),
          H = (0, n.up)("q-page");
        return (
          (0, n.wg)(),
          (0, n.j4)(
            H,
            { padding: "" },
            {
              default: (0, n.w5)(() => [
                (0, n._)("div", t, [
                  (0, n._)("div", a, [
                    (0, n.Wm)(
                      E,
                      {
                        class: "col q-mx-sm",
                        style: { "max-height": "248px" },
                        modelValue: k.supportDate,
                        "onUpdate:modelValue":
                          o[0] || (o[0] = (e) => (k.supportDate = e)),
                        landscape: "",
                        title: "Support Start Date",
                        subtitle: "select one",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    (0, n.Wm)(D, { vertical: "" }),
                    (0, n._)("div", c, [
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-12 q-mb-sm",
                          modelValue: k.plaintiffName,
                          "onUpdate:modelValue":
                            o[1] || (o[1] = (e) => (k.plaintiffName = e)),
                          label: "Plaintiff's Name",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-12 q-my-sm",
                          modelValue: k.defendantName,
                          "onUpdate:modelValue":
                            o[2] || (o[2] = (e) => (k.defendantName = e)),
                          label: "Defendant's Name",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        G,
                        {
                          filled: "",
                          class: "col-12 q-my-sm",
                          modelValue: k.pType,
                          "onUpdate:modelValue":
                            o[3] || (o[3] = (e) => (k.pType = e)),
                          options: k.typeoptions,
                          label: "Plaintiff is:",
                        },
                        null,
                        8,
                        ["modelValue", "options"]
                      ),
                      (0, n.Wm)(
                        G,
                        {
                          filled: "",
                          class: "col-12 q-my-sm",
                          modelValue: k.partiesChildren,
                          "onUpdate:modelValue":
                            o[4] || (o[4] = (e) => (k.partiesChildren = e)),
                          options: k.childrenoptions,
                          label: "Number of Children",
                        },
                        null,
                        8,
                        ["modelValue", "options"]
                      ),
                    ]),
                  ]),
                  (0, n._)("div", d, [
                    (0, n._)("div", i, [
                      r,
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-8 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pIncome,
                          "onUpdate:modelValue":
                            o[5] || (o[5] = (e) => (k.pIncome = e)),
                          label: "Plaintiff Income (Gross)",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        G,
                        {
                          filled: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pPayPeriod,
                          "onUpdate:modelValue":
                            o[6] || (o[6] = (e) => (k.pPayPeriod = e)),
                          options: k.options,
                          label: "Pay Period",
                        },
                        null,
                        8,
                        ["modelValue", "options"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-8 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pDeductions,
                          "onUpdate:modelValue":
                            o[7] || (o[7] = (e) => (k.pDeductions = e)),
                          label: "Allowed Deductions (per pay period)",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      u,
                      0 === k.partiesChildren.value
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "h6",
                            s,
                            "Additional Expenses Paid for Minor child:"
                          ))
                        : ((0, n.wg)(),
                          (0, n.iD)(
                            "h6",
                            x,
                            "Additional Expenses Paid for Minor children:"
                          )),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pHealthInsurance,
                          "onUpdate:modelValue":
                            o[8] || (o[8] = (e) => (k.pHealthInsurance = e)),
                          label: "Health insurance",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pMedicalExpenses,
                          "onUpdate:modelValue":
                            o[9] || (o[9] = (e) => (k.pMedicalExpenses = e)),
                          label: "Medical expenses",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.pWorkExpenses,
                          "onUpdate:modelValue":
                            o[10] || (o[10] = (e) => (k.pWorkExpenses = e)),
                          label: "Work expenses",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      b,
                    ]),
                  ]),
                  (0, n._)("div", l, [
                    (0, n._)("div", I, [
                      S,
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-8 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dIncome,
                          "onUpdate:modelValue":
                            o[11] || (o[11] = (e) => (k.dIncome = e)),
                          label: "Defendant Income (Gross)",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        G,
                        {
                          filled: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dPayPeriod,
                          "onUpdate:modelValue":
                            o[12] || (o[12] = (e) => (k.dPayPeriod = e)),
                          options: k.options,
                          label: "Pay Period",
                        },
                        null,
                        8,
                        ["modelValue", "options"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-8 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dDeductions,
                          "onUpdate:modelValue":
                            o[13] || (o[13] = (e) => (k.dDeductions = e)),
                          label: "Allowed Deductions (per pay period)",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      f,
                      0 === k.partiesChildren.value
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "h6",
                            h,
                            "Additional Expenses Paid for Minor child:"
                          ))
                        : ((0, n.wg)(),
                          (0, n.iD)(
                            "h6",
                            $,
                            "Additional Expenses Paid for Minor children:"
                          )),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dHealthInsurance,
                          "onUpdate:modelValue":
                            o[14] || (o[14] = (e) => (k.dHealthInsurance = e)),
                          label: "Health insurance",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dMedicalExpenses,
                          "onUpdate:modelValue":
                            o[15] || (o[15] = (e) => (k.dMedicalExpenses = e)),
                          label: " Medical expenses",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      (0, n.Wm)(
                        W,
                        {
                          outlined: "",
                          class: "col-4 q-gutter-sm q-col-gutter-sm",
                          modelValue: k.dWorkExpenses,
                          "onUpdate:modelValue":
                            o[16] || (o[16] = (e) => (k.dWorkExpenses = e)),
                          label: "Work expenses",
                        },
                        null,
                        8,
                        ["modelValue"]
                      ),
                      y,
                    ]),
                  ]),
                  (0, n._)("div", g, [
                    (0, n._)("div", P, [
                      w,
                      (0, n.Wm)(D),
                      (0, n._)(
                        "div",
                        F,
                        " The court has determined that " +
                          (0, p.zw)(V.PayorPayee.payor) +
                          " (payor) earns a gross income of $" +
                          (0, p.zw)((+V.GrossIncome.plaintiff).toFixed(2)) +
                          " per month and " +
                          (0, p.zw)(V.PayorPayee.payee) +
                          " (payee) earns a gross income of $" +
                          (0, p.zw)((+V.GrossIncome.defendant).toFixed(2)) +
                          " per month. Therefore, the parents’ combined gross income is $" +
                          (0, p.zw)((+V.GrossIncome.combined).toFixed(2)) +
                          " with a basic child-support obligation of $" +
                          (0, p.zw)((+V.PresumedSupport).toFixed(2)) +
                          " for their " +
                          (0, p.zw)(k.partiesChildren.label) +
                          " child(ren) per the Chart. The court also finds that " +
                          (0, p.zw)(V.Expenses.sentence) +
                          ". Plaintiff (" +
                          (0, p.zw)(V.PayorPayee.plaintiff) +
                          ") is responsible for " +
                          (0, p.zw)(
                            (100 * V.GrossPercentage.plaintiff).toFixed(0)
                          ) +
                          "% of the total obligation ($" +
                          (0, p.zw)((+V.GrandTotals.psharebasic).toFixed(2)) +
                          " share of basic obligation plus $" +
                          (0, p.zw)(
                            (+V.GrandTotals.pshareexpenses).toFixed(2)
                          ) +
                          " for expenses) and has a total child-support obligation of $" +
                          (0, p.zw)((+V.GrandTotals.psharetotal).toFixed(2)) +
                          ". Defendant (" +
                          (0, p.zw)(V.PayorPayee.defendant) +
                          ") is responsible for " +
                          (0, p.zw)(
                            (100 * V.GrossPercentage.defendant).toFixed(0)
                          ) +
                          "% of the total obligation ($" +
                          (0, p.zw)((+V.GrandTotals.dsharebasic).toFixed(2)) +
                          " share of basic obligation plus $" +
                          (0, p.zw)(
                            (+V.GrandTotals.dshareexpenses).toFixed(2)
                          ) +
                          " for expenses) and has a total child-support obligation of $" +
                          (0, p.zw)((+V.GrandTotals.dsharetotal).toFixed(2)) +
                          ". " +
                          (0, p.zw)(V.PayorPayee.payor) +
                          ", as the payor, shall receive a $" +
                          (0, p.zw)((+V.GrandTotals.payorexpenses).toFixed(2)) +
                          " credit for the additional child-rearing expenses that (s)he is paying out of pocket. " +
                          (0, p.zw)(V.PayorPayee.payor) +
                          " shall pay $" +
                          (0, p.zw)((+V.GrandTotals.payorpays).toFixed(2)) +
                          " per month to " +
                          (0, p.zw)(V.PayorPayee.payee) +
                          " beginning on " +
                          (0, p.zw)(V.DateMaker) +
                          ". ",
                        1
                      ),
                      (0, n.Wm)(D),
                      (0, n._)("div", q, [
                        (0, n.Wm)(
                          N,
                          {
                            plaintiff: {
                              name: k.plaintiffName,
                              payorpayee: V.PayorPayee.plaintiff,
                              gross: k.pIncome,
                              deductions: k.pDeductions,
                              adjgross: V.GrossIncome.plaintiff,
                              supportshare: V.GrossPercentage.plaintiff,
                              basicshare: V.GrandTotals.psharebasic,
                              healthins: k.pHealthInsurance,
                              extramedexp: k.pMedicalExpenses,
                              workexpense: k.pWorkExpenses,
                              totaladdexp: V.Expenses.ptotalexpenses,
                              addexpshare: V.GrandTotals.pshareexpenses,
                              partyobligation: V.GrandTotals.psharetotal,
                              presumedsupport:
                                +V.GrandTotals.psharetotal -
                                +V.Expenses.ptotalexpenses,
                            },
                            defendant: {
                              name: k.defendantName,
                              payorpayee: V.PayorPayee.defendant,
                              gross: k.dIncome,
                              deductions: k.dDeductions,
                              adjgross: V.GrossIncome.defendant,
                              supportshare: V.GrossPercentage.defendant,
                              basicshare: V.GrandTotals.dsharebasic,
                              healthins: k.dHealthInsurance,
                              extramedexp: k.dMedicalExpenses,
                              workexpense: k.dWorkExpenses,
                              totaladdexp: V.Expenses.dtotalexpenses,
                              addexpshare: V.GrandTotals.dshareexpenses,
                              partyobligation: V.GrandTotals.dsharetotal,
                              presumedsupport:
                                +V.GrandTotals.dsharetotal -
                                +V.Expenses.dtotalexpenses,
                            },
                            payor: V.PayorPayee.payor,
                            payee: V.PayorPayee.payee,
                            combinedsupport: V.PresumedSupport,
                          },
                          null,
                          8,
                          [
                            "plaintiff",
                            "defendant",
                            "payor",
                            "payee",
                            "combinedsupport",
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            }
          )
        );
      }
      m(4237), m(7068);
      var v = m(1959);
      const V = JSON.parse(
        '[{"maxIncome":1050,"combinedSupport":[125,125,125,125,125,125]},{"maxIncome":1100,"combinedSupport":[140,142,144,146,148,150]},{"maxIncome":1150,"combinedSupport":[175,178,180,183,185,188]},{"maxIncome":1200,"combinedSupport":[203,213,216,219,222,225]},{"maxIncome":1250,"combinedSupport":[211,249,252,256,259,263]},{"maxIncome":1300,"combinedSupport":[218,284,288,292,296,300]},{"maxIncome":1350,"combinedSupport":[226,320,324,329,333,338]},{"maxIncome":1400,"combinedSupport":[234,343,360,365,370,375]},{"maxIncome":1450,"combinedSupport":[241,354,396,402,407,413]},{"maxIncome":1500,"combinedSupport":[249,365,432,438,444,450]},{"maxIncome":1550,"combinedSupport":[256,376,454,475,481,488]},{"maxIncome":1600,"combinedSupport":[264,387,468,511,518,525]},{"maxIncome":1650,"combinedSupport":[271,398,481,537,555,563]},{"maxIncome":1700,"combinedSupport":[279,409,494,552,592,600]},{"maxIncome":1750,"combinedSupport":[286,420,507,567,623,638]},{"maxIncome":1800,"combinedSupport":[293,431,520,581,639,675]},{"maxIncome":1850,"combinedSupport":[301,442,534,596,656,713]},{"maxIncome":1900,"combinedSupport":[308,453,547,611,672,730]},{"maxIncome":1950,"combinedSupport":[316,463,560,626,688,748]},{"maxIncome":2000,"combinedSupport":[323,474,573,640,704,765]},{"maxIncome":2050,"combinedSupport":[330,485,586,654,720,783]},{"maxIncome":2100,"combinedSupport":[338,496,599,669,736,800]},{"maxIncome":2150,"combinedSupport":[345,506,612,683,752,817]},{"maxIncome":2200,"combinedSupport":[352,517,625,698,768,834]},{"maxIncome":2250,"combinedSupport":[360,528,638,712,784,852]},{"maxIncome":2300,"combinedSupport":[367,538,651,727,799,869]},{"maxIncome":2350,"combinedSupport":[374,549,664,741,815,886]},{"maxIncome":2400,"combinedSupport":[381,560,677,756,831,904]},{"maxIncome":2450,"combinedSupport":[389,571,689,770,847,921]},{"maxIncome":2500,"combinedSupport":[396,581,702,785,863,938]},{"maxIncome":2550,"combinedSupport":[403,592,715,799,879,955]},{"maxIncome":2600,"combinedSupport":[411,603,728,814,895,973]},{"maxIncome":2650,"combinedSupport":[418,613,741,828,911,990]},{"maxIncome":2700,"combinedSupport":[425,624,754,842,927,1007]},{"maxIncome":2750,"combinedSupport":[433,635,767,857,943,1025]},{"maxIncome":2800,"combinedSupport":[440,646,780,871,958,1042]},{"maxIncome":2850,"combinedSupport":[447,656,793,886,974,1059]},{"maxIncome":2900,"combinedSupport":[454,667,806,900,990,1076]},{"maxIncome":2950,"combinedSupport":[462,678,819,915,1006,1094]},{"maxIncome":3000,"combinedSupport":[469,688,832,929,1022,1111]},{"maxIncome":3050,"combinedSupport":[476,699,845,944,1038,1128]},{"maxIncome":3100,"combinedSupport":[484,710,858,958,1054,1146]},{"maxIncome":3150,"combinedSupport":[491,720,871,972,1070,1163]},{"maxIncome":3200,"combinedSupport":[498,731,883,987,1085,1180]},{"maxIncome":3250,"combinedSupport":[505,742,896,1001,1101,1197]},{"maxIncome":3300,"combinedSupport":[512,752,909,1015,1117,1214]},{"maxIncome":3350,"combinedSupport":[520,763,922,1029,1132,1231]},{"maxIncome":3400,"combinedSupport":[527,773,934,1044,1148,1248]},{"maxIncome":3450,"combinedSupport":[534,784,947,1058,1164,1265]},{"maxIncome":3500,"combinedSupport":[541,794,960,1072,1180,1282]},{"maxIncome":3550,"combinedSupport":[548,805,973,1087,1195,1299]},{"maxIncome":3600,"combinedSupport":[556,816,986,1101,1211,1316]},{"maxIncome":3650,"combinedSupport":[563,826,998,1115,1227,1333]},{"maxIncome":3700,"combinedSupport":[570,837,1011,1129,1242,1350]},{"maxIncome":3750,"combinedSupport":[577,847,1024,1144,1258,1367]},{"maxIncome":3800,"combinedSupport":[584,858,1037,1158,1274,1385]},{"maxIncome":3850,"combinedSupport":[592,868,1049,1172,1289,1402]},{"maxIncome":3900,"combinedSupport":[599,879,1062,1186,1305,1419]},{"maxIncome":3950,"combinedSupport":[606,890,1075,1201,1321,1436]},{"maxIncome":4000,"combinedSupport":[612,899,1086,1213,1335,1451]},{"maxIncome":4050,"combinedSupport":[619,908,1097,1226,1348,1465]},{"maxIncome":4100,"combinedSupport":[625,917,1108,1238,1362,1480]},{"maxIncome":4150,"combinedSupport":[631,926,1119,1250,1375,1495]},{"maxIncome":4200,"combinedSupport":[637,935,1130,1263,1389,1510]},{"maxIncome":4250,"combinedSupport":[644,945,1141,1275,1402,1524]},{"maxIncome":4300,"combinedSupport":[650,954,1152,1287,1416,1539]},{"maxIncome":4350,"combinedSupport":[656,963,1163,1300,1429,1554]},{"maxIncome":4400,"combinedSupport":[662,972,1174,1312,1443,1569]},{"maxIncome":4450,"combinedSupport":[668,981,1185,1324,1457,1583]},{"maxIncome":4500,"combinedSupport":[675,990,1197,1337,1470,1598]},{"maxIncome":4550,"combinedSupport":[681,999,1208,1349,1484,1613]},{"maxIncome":4600,"combinedSupport":[687,1008,1219,1361,1497,1628]},{"maxIncome":4650,"combinedSupport":[693,1018,1230,1373,1511,1642]},{"maxIncome":4700,"combinedSupport":[699,1027,1241,1386,1524,1657]},{"maxIncome":4750,"combinedSupport":[706,1036,1252,1398,1538,1672]},{"maxIncome":4800,"combinedSupport":[712,1045,1263,1410,1552,1686]},{"maxIncome":4850,"combinedSupport":[718,1054,1274,1423,1565,1701]},{"maxIncome":4900,"combinedSupport":[724,1063,1285,1435,1579,1716]},{"maxIncome":4950,"combinedSupport":[731,1072,1296,1447,1592,1731]},{"maxIncome":5000,"combinedSupport":[737,1081,1307,1460,1606,1745]},{"maxIncome":5050,"combinedSupport":[743,1091,1318,1472,1619,1760]},{"maxIncome":5100,"combinedSupport":[749,1100,1329,1484,1633,1775]},{"maxIncome":5150,"combinedSupport":[755,1109,1340,1497,1646,1790]},{"maxIncome":5200,"combinedSupport":[762,1118,1351,1509,1660,1804]},{"maxIncome":5250,"combinedSupport":[768,1127,1362,1521,1674,1819]},{"maxIncome":5300,"combinedSupport":[774,1136,1373,1534,1687,1834]},{"maxIncome":5350,"combinedSupport":[780,1145,1384,1546,1701,1849]},{"maxIncome":5400,"combinedSupport":[785,1152,1392,1555,1710,1859]},{"maxIncome":5450,"combinedSupport":[788,1154,1394,1557,1712,1861]},{"maxIncome":5500,"combinedSupport":[790,1156,1395,1559,1715,1864]},{"maxIncome":5550,"combinedSupport":[793,1159,1397,1561,1717,1866]},{"maxIncome":5600,"combinedSupport":[795,1161,1399,1563,1719,1869]},{"maxIncome":5650,"combinedSupport":[798,1163,1401,1565,1721,1871]},{"maxIncome":5700,"combinedSupport":[800,1165,1403,1567,1724,1873]},{"maxIncome":5750,"combinedSupport":[802,1167,1405,1569,1726,1876]},{"maxIncome":5800,"combinedSupport":[805,1170,1406,1571,1728,1878]},{"maxIncome":5850,"combinedSupport":[807,1172,1408,1573,1730,1881]},{"maxIncome":5900,"combinedSupport":[810,1174,1410,1575,1733,1883]},{"maxIncome":5950,"combinedSupport":[812,1176,1412,1577,1735,1886]},{"maxIncome":6000,"combinedSupport":[815,1178,1414,1579,1737,1888]},{"maxIncome":6050,"combinedSupport":[817,1181,1416,1582,1740,1891]},{"maxIncome":6100,"combinedSupport":[821,1185,1421,1587,1746,1897]},{"maxIncome":6150,"combinedSupport":[824,1189,1425,1592,1751,1904]},{"maxIncome":6200,"combinedSupport":[827,1193,1430,1598,1757,1910]},{"maxIncome":6250,"combinedSupport":[830,1197,1435,1603,1763,1916]},{"maxIncome":6300,"combinedSupport":[834,1201,1440,1608,1769,1923]},{"maxIncome":6350,"combinedSupport":[837,1205,1444,1613,1775,1929]},{"maxIncome":6400,"combinedSupport":[840,1209,1449,1619,1781,1936]},{"maxIncome":6450,"combinedSupport":[843,1214,1454,1624,1787,1942]},{"maxIncome":6500,"combinedSupport":[847,1218,1459,1629,1792,1948]},{"maxIncome":6550,"combinedSupport":[850,1222,1464,1635,1798,1955]},{"maxIncome":6600,"combinedSupport":[853,1226,1468,1640,1804,1961]},{"maxIncome":6650,"combinedSupport":[856,1230,1473,1645,1810,1967]},{"maxIncome":6700,"combinedSupport":[860,1234,1478,1651,1816,1974]},{"maxIncome":6750,"combinedSupport":[865,1240,1485,1659,1825,1984]},{"maxIncome":6800,"combinedSupport":[870,1247,1494,1669,1835,1995]},{"maxIncome":6850,"combinedSupport":[875,1254,1502,1678,1846,2006]},{"maxIncome":6900,"combinedSupport":[880,1261,1510,1687,1856,2017]},{"maxIncome":6950,"combinedSupport":[886,1268,1519,1696,1866,2028]},{"maxIncome":7000,"combinedSupport":[891,1274,1527,1705,1876,2039]},{"maxIncome":7050,"combinedSupport":[896,1281,1535,1715,1886,2050]},{"maxIncome":7100,"combinedSupport":[901,1288,1543,1724,1896,2061]},{"maxIncome":7150,"combinedSupport":[907,1295,1552,1733,1907,2072]},{"maxIncome":7200,"combinedSupport":[912,1302,1560,1742,1917,2083]},{"maxIncome":7250,"combinedSupport":[917,1308,1568,1752,1927,2095]},{"maxIncome":7300,"combinedSupport":[923,1315,1576,1761,1937,2106]},{"maxIncome":7350,"combinedSupport":[928,1322,1585,1770,1947,2117]},{"maxIncome":7400,"combinedSupport":[932,1328,1592,1778,1956,2126]},{"maxIncome":7450,"combinedSupport":[936,1334,1598,1785,1964,2135]},{"maxIncome":7500,"combinedSupport":[939,1340,1605,1793,1972,2143]},{"maxIncome":7550,"combinedSupport":[943,1345,1611,1800,1980,2152]},{"maxIncome":7600,"combinedSupport":[947,1351,1618,1807,1988,2161]},{"maxIncome":7650,"combinedSupport":[950,1357,1624,1814,1996,2169]},{"maxIncome":7700,"combinedSupport":[954,1362,1631,1821,2004,2178]},{"maxIncome":7750,"combinedSupport":[957,1368,1637,1828,2011,2186]},{"maxIncome":7800,"combinedSupport":[961,1373,1643,1835,2019,2195]},{"maxIncome":7850,"combinedSupport":[964,1379,1649,1842,2027,2203]},{"maxIncome":7900,"combinedSupport":[968,1384,1656,1849,2034,2211]},{"maxIncome":7950,"combinedSupport":[971,1390,1662,1856,2042,2220]},{"maxIncome":8000,"combinedSupport":[975,1395,1668,1863,2050,2228]},{"maxIncome":8050,"combinedSupport":[978,1401,1674,1870,2057,2236]},{"maxIncome":8100,"combinedSupport":[980,1402,1676,1872,2060,2239]},{"maxIncome":8150,"combinedSupport":[982,1404,1678,1875,2062,2242]},{"maxIncome":8200,"combinedSupport":[984,1406,1681,1877,2065,2245]},{"maxIncome":8250,"combinedSupport":[986,1408,1683,1880,2068,2248]},{"maxIncome":8300,"combinedSupport":[988,1410,1685,1882,2070,2250]},{"maxIncome":8350,"combinedSupport":[989,1411,1687,1885,2073,2253]},{"maxIncome":8400,"combinedSupport":[991,1413,1689,1887,2076,2256]},{"maxIncome":8450,"combinedSupport":[993,1415,1691,1889,2078,2259]},{"maxIncome":8500,"combinedSupport":[995,1417,1694,1892,2081,2262]},{"maxIncome":8550,"combinedSupport":[997,1419,1696,1894,2084,2265]},{"maxIncome":8600,"combinedSupport":[999,1420,1698,1897,2086,2268]},{"maxIncome":8650,"combinedSupport":[1001,1422,1700,1899,2089,2271]},{"maxIncome":8700,"combinedSupport":[1002,1424,1702,1902,2092,2274]},{"maxIncome":8750,"combinedSupport":[1005,1427,1705,1905,2095,2278]},{"maxIncome":8800,"combinedSupport":[1008,1430,1709,1909,2100,2283]},{"maxIncome":8850,"combinedSupport":[1011,1434,1714,1914,2106,2289]},{"maxIncome":8900,"combinedSupport":[1014,1438,1718,1919,2111,2294]},{"maxIncome":8950,"combinedSupport":[1017,1442,1722,1923,2116,2300]},{"maxIncome":9000,"combinedSupport":[1020,1445,1726,1928,2121,2305]},{"maxIncome":9050,"combinedSupport":[1023,1449,1730,1933,2126,2311]},{"maxIncome":9100,"combinedSupport":[1027,1453,1735,1937,2131,2317]},{"maxIncome":9150,"combinedSupport":[1030,1457,1739,1942,2136,2322]},{"maxIncome":9200,"combinedSupport":[1033,1461,1743,1947,2141,2328]},{"maxIncome":9250,"combinedSupport":[1036,1464,1747,1951,2147,2333]},{"maxIncome":9300,"combinedSupport":[1039,1468,1751,1956,2152,2339]},{"maxIncome":9350,"combinedSupport":[1042,1472,1755,1961,2157,2344]},{"maxIncome":9400,"combinedSupport":[1045,1476,1760,1965,2162,2350]},{"maxIncome":9450,"combinedSupport":[1048,1478,1763,1970,2167,2355]},{"maxIncome":9500,"combinedSupport":[1050,1480,1767,1974,2171,2360]},{"maxIncome":9550,"combinedSupport":[1053,1483,1770,1977,2175,2364]},{"maxIncome":9600,"combinedSupport":[1055,1485,1774,1981,2180,2369]},{"maxIncome":9650,"combinedSupport":[1057,1487,1777,1985,2184,2374]},{"maxIncome":9700,"combinedSupport":[1060,1489,1781,1989,2188,2379]},{"maxIncome":9750,"combinedSupport":[1062,1491,1784,1993,2193,2383]},{"maxIncome":9800,"combinedSupport":[1064,1493,1788,1997,2197,2388]},{"maxIncome":9850,"combinedSupport":[1067,1495,1791,2001,2201,2393]},{"maxIncome":9900,"combinedSupport":[1069,1497,1795,2005,2206,2397]},{"maxIncome":9950,"combinedSupport":[1071,1499,1799,2009,2210,2402]},{"maxIncome":10000,"combinedSupport":[1074,1501,1802,2013,2214,2407]},{"maxIncome":10050,"combinedSupport":[1076,1504,1806,2017,2219,2412]},{"maxIncome":10100,"combinedSupport":[1078,1506,1809,2021,2223,2416]},{"maxIncome":10150,"combinedSupport":[1081,1508,1813,2025,2227,2421]},{"maxIncome":10200,"combinedSupport":[1083,1510,1816,2029,2232,2426]},{"maxIncome":10250,"combinedSupport":[1085,1512,1820,2033,2236,2430]},{"maxIncome":10300,"combinedSupport":[1088,1514,1823,2037,2240,2435]},{"maxIncome":10350,"combinedSupport":[1090,1516,1827,2040,2245,2440]},{"maxIncome":10400,"combinedSupport":[1092,1518,1830,2044,2249,2444]},{"maxIncome":10450,"combinedSupport":[1095,1521,1834,2049,2253,2449]},{"maxIncome":10500,"combinedSupport":[1098,1526,1839,2054,2260,2456]},{"maxIncome":10550,"combinedSupport":[1102,1531,1844,2060,2266,2463]},{"maxIncome":10600,"combinedSupport":[1106,1536,1850,2066,2273,2471]},{"maxIncome":10650,"combinedSupport":[1109,1542,1855,2072,2279,2478]},{"maxIncome":10700,"combinedSupport":[1113,1547,1860,2078,2286,2485]},{"maxIncome":10750,"combinedSupport":[1116,1552,1866,2084,2292,2492]},{"maxIncome":10800,"combinedSupport":[1120,1557,1871,2090,2299,2499]},{"maxIncome":10850,"combinedSupport":[1123,1562,1876,2096,2305,2506]},{"maxIncome":10900,"combinedSupport":[1127,1568,1881,2101,2312,2513]},{"maxIncome":10950,"combinedSupport":[1130,1573,1887,2107,2318,2520]},{"maxIncome":11000,"combinedSupport":[1134,1578,1892,2113,2324,2527]},{"maxIncome":11050,"combinedSupport":[1137,1583,1897,2119,2331,2534]},{"maxIncome":11100,"combinedSupport":[1141,1589,1903,2125,2338,2541]},{"maxIncome":11150,"combinedSupport":[1145,1595,1908,2132,2345,2549]},{"maxIncome":11200,"combinedSupport":[1149,1600,1914,2138,2352,2557]},{"maxIncome":11250,"combinedSupport":[1153,1606,1920,2145,2359,2564]},{"maxIncome":11300,"combinedSupport":[1156,1612,1926,2151,2366,2572]},{"maxIncome":11350,"combinedSupport":[1160,1618,1931,2157,2373,2580]},{"maxIncome":11400,"combinedSupport":[1164,1623,1937,2164,2380,2587]},{"maxIncome":11450,"combinedSupport":[1168,1629,1943,2170,2387,2595]},{"maxIncome":11500,"combinedSupport":[1172,1635,1949,2177,2395,2603]},{"maxIncome":11550,"combinedSupport":[1176,1641,1955,2183,2402,2611]},{"maxIncome":11600,"combinedSupport":[1180,1646,1960,2190,2409,2618]},{"maxIncome":11650,"combinedSupport":[1184,1652,1966,2196,2416,2626]},{"maxIncome":11700,"combinedSupport":[1187,1658,1972,2203,2423,2634]},{"maxIncome":11750,"combinedSupport":[1191,1664,1978,2209,2430,2642]},{"maxIncome":11800,"combinedSupport":[1195,1668,1984,2216,2437,2649]},{"maxIncome":11850,"combinedSupport":[1198,1672,1990,2222,2445,2657]},{"maxIncome":11900,"combinedSupport":[1202,1677,1996,2229,2452,2665]},{"maxIncome":11950,"combinedSupport":[1206,1681,2002,2236,2459,2673]},{"maxIncome":12000,"combinedSupport":[1209,1686,2008,2242,2467,2681]},{"maxIncome":12050,"combinedSupport":[1213,1690,2013,2249,2474,2689]},{"maxIncome":12100,"combinedSupport":[1216,1695,2019,2256,2481,2697]},{"maxIncome":12150,"combinedSupport":[1220,1699,2025,2262,2489,2705]},{"maxIncome":12200,"combinedSupport":[1223,1703,2031,2269,2496,2713]},{"maxIncome":12250,"combinedSupport":[1227,1708,2037,2276,2503,2721]},{"maxIncome":12300,"combinedSupport":[1231,1712,2043,2282,2511,2729]},{"maxIncome":12350,"combinedSupport":[1234,1717,2049,2289,2518,2737]},{"maxIncome":12400,"combinedSupport":[1238,1721,2055,2296,2525,2745]},{"maxIncome":12450,"combinedSupport":[1241,1725,2061,2302,2532,2753]},{"maxIncome":12500,"combinedSupport":[1245,1730,2067,2309,2540,2761]},{"maxIncome":12550,"combinedSupport":[1248,1734,2073,2316,2547,2769]},{"maxIncome":12600,"combinedSupport":[1252,1739,2079,2322,2554,2777]},{"maxIncome":12650,"combinedSupport":[1256,1743,2085,2329,2562,2785]},{"maxIncome":12700,"combinedSupport":[1259,1748,2091,2335,2569,2792]},{"maxIncome":12750,"combinedSupport":[1263,1752,2097,2342,2576,2800]},{"maxIncome":12800,"combinedSupport":[1266,1756,2103,2349,2584,2808]},{"maxIncome":12850,"combinedSupport":[1270,1761,2109,2355,2591,2816]},{"maxIncome":12900,"combinedSupport":[1273,1765,2115,2362,2598,2824]},{"maxIncome":12950,"combinedSupport":[1277,1770,2121,2369,2606,2832]},{"maxIncome":13000,"combinedSupport":[1280,1774,2127,2375,2613,2840]},{"maxIncome":13050,"combinedSupport":[1284,1779,2132,2382,2620,2848]},{"maxIncome":13100,"combinedSupport":[1288,1783,2138,2389,2627,2856]},{"maxIncome":13150,"combinedSupport":[1291,1787,2144,2395,2635,2864]},{"maxIncome":13200,"combinedSupport":[1295,1792,2150,2402,2642,2872]},{"maxIncome":13250,"combinedSupport":[1298,1796,2156,2409,2649,2880]},{"maxIncome":13300,"combinedSupport":[1302,1801,2162,2415,2657,2888]},{"maxIncome":13350,"combinedSupport":[1305,1805,2168,2422,2664,2896]},{"maxIncome":13400,"combinedSupport":[1309,1809,2174,2428,2671,2904]},{"maxIncome":13450,"combinedSupport":[1313,1814,2180,2435,2679,2912]},{"maxIncome":13500,"combinedSupport":[1316,1818,2186,2442,2686,2920]},{"maxIncome":13550,"combinedSupport":[1320,1823,2192,2448,2693,2928]},{"maxIncome":13600,"combinedSupport":[1323,1827,2198,2455,2701,2936]},{"maxIncome":13650,"combinedSupport":[1326,1831,2202,2460,2706,2942]},{"maxIncome":13700,"combinedSupport":[1329,1834,2206,2465,2711,2947]},{"maxIncome":13750,"combinedSupport":[1331,1838,2211,2469,2716,2952]},{"maxIncome":13800,"combinedSupport":[1334,1841,2215,2474,2721,2958]},{"maxIncome":13850,"combinedSupport":[1337,1844,2219,2478,2726,2963]},{"maxIncome":13900,"combinedSupport":[1339,1848,2223,2483,2731,2969]},{"maxIncome":13950,"combinedSupport":[1342,1851,2227,2487,2736,2974]},{"maxIncome":14000,"combinedSupport":[1345,1854,2231,2492,2741,2979]},{"maxIncome":14050,"combinedSupport":[1347,1858,2235,2496,2746,2985]},{"maxIncome":14100,"combinedSupport":[1350,1861,2238,2500,2750,2990]},{"maxIncome":14150,"combinedSupport":[1352,1864,2242,2504,2755,2994]},{"maxIncome":14200,"combinedSupport":[1354,1867,2245,2508,2759,2999]},{"maxIncome":14250,"combinedSupport":[1357,1870,2249,2512,2763,3004]},{"maxIncome":14300,"combinedSupport":[1359,1873,2253,2516,2768,3008]},{"maxIncome":14350,"combinedSupport":[1361,1876,2256,2520,2772,3013]},{"maxIncome":14400,"combinedSupport":[1363,1879,2260,2524,2776,3018]},{"maxIncome":14450,"combinedSupport":[1366,1882,2263,2528,2781,3023]},{"maxIncome":14500,"combinedSupport":[1368,1885,2267,2532,2785,3027]},{"maxIncome":14550,"combinedSupport":[1370,1888,2270,2536,2790,3032]},{"maxIncome":14600,"combinedSupport":[1373,1891,2274,2540,2794,3037]},{"maxIncome":14650,"combinedSupport":[1375,1894,2277,2544,2798,3042]},{"maxIncome":14700,"combinedSupport":[1377,1897,2281,2548,2803,3046]},{"maxIncome":14750,"combinedSupport":[1380,1900,2284,2552,2807,3051]},{"maxIncome":14800,"combinedSupport":[1382,1903,2288,2556,2811,3056]},{"maxIncome":14850,"combinedSupport":[1384,1906,2292,2560,2816,3061]},{"maxIncome":14900,"combinedSupport":[1387,1909,2295,2564,2820,3065]},{"maxIncome":14950,"combinedSupport":[1389,1911,2299,2568,2824,3070]},{"maxIncome":15000,"combinedSupport":[1391,1914,2302,2572,2829,3075]},{"maxIncome":15050,"combinedSupport":[1394,1917,2306,2576,2833,3080]},{"maxIncome":15100,"combinedSupport":[1396,1920,2309,2580,2838,3084]},{"maxIncome":15150,"combinedSupport":[1398,1923,2313,2584,2842,3089]},{"maxIncome":15200,"combinedSupport":[1401,1926,2316,2587,2846,3094]},{"maxIncome":15250,"combinedSupport":[1403,1929,2320,2591,2851,3099]},{"maxIncome":15300,"combinedSupport":[1405,1932,2324,2595,2855,3103]},{"maxIncome":15350,"combinedSupport":[1408,1935,2327,2599,2859,3108]},{"maxIncome":15400,"combinedSupport":[1410,1938,2331,2603,2864,3113]},{"maxIncome":15450,"combinedSupport":[1412,1941,2334,2607,2868,3118]},{"maxIncome":15500,"combinedSupport":[1414,1944,2338,2611,2872,3122]},{"maxIncome":15550,"combinedSupport":[1417,1947,2341,2615,2877,3127]},{"maxIncome":15600,"combinedSupport":[1419,1950,2345,2619,2881,3132]},{"maxIncome":15650,"combinedSupport":[1421,1953,2348,2623,2886,3137]},{"maxIncome":15700,"combinedSupport":[1424,1956,2352,2627,2890,3141]},{"maxIncome":15750,"combinedSupport":[1426,1959,2356,2631,2894,3146]},{"maxIncome":15800,"combinedSupport":[1428,1962,2359,2635,2899,3151]},{"maxIncome":15850,"combinedSupport":[1431,1965,2363,2639,2903,3156]},{"maxIncome":15900,"combinedSupport":[1433,1968,2366,2643,2907,3160]},{"maxIncome":15950,"combinedSupport":[1435,1971,2370,2647,2912,3165]},{"maxIncome":16000,"combinedSupport":[1438,1974,2373,2651,2916,3170]},{"maxIncome":16050,"combinedSupport":[1440,1977,2377,2655,2920,3174]},{"maxIncome":16100,"combinedSupport":[1442,1980,2380,2659,2925,3179]},{"maxIncome":16150,"combinedSupport":[1445,1983,2384,2663,2929,3184]},{"maxIncome":16200,"combinedSupport":[1447,1986,2387,2667,2934,3189]},{"maxIncome":16250,"combinedSupport":[1449,1989,2391,2671,2938,3193]},{"maxIncome":16300,"combinedSupport":[1452,1992,2395,2675,2942,3198]},{"maxIncome":16350,"combinedSupport":[1454,1995,2398,2679,2947,3203]},{"maxIncome":16400,"combinedSupport":[1456,1998,2402,2683,2951,3208]},{"maxIncome":16450,"combinedSupport":[1459,2001,2405,2686,2955,3212]},{"maxIncome":16500,"combinedSupport":[1462,2004,2408,2690,2959,3216]},{"maxIncome":16550,"combinedSupport":[1464,2007,2412,2694,2963,3221]},{"maxIncome":16600,"combinedSupport":[1467,2009,2415,2697,2967,3225]},{"maxIncome":16650,"combinedSupport":[1470,2012,2418,2701,2971,3230]},{"maxIncome":16700,"combinedSupport":[1472,2015,2421,2705,2975,3234]},{"maxIncome":16750,"combinedSupport":[1475,2018,2425,2708,2979,3239]},{"maxIncome":16800,"combinedSupport":[1478,2021,2428,2712,2983,3243]},{"maxIncome":16850,"combinedSupport":[1480,2024,2431,2716,2987,3247]},{"maxIncome":16900,"combinedSupport":[1483,2027,2435,2720,2992,3252]},{"maxIncome":16950,"combinedSupport":[1486,2030,2438,2723,2996,3256]},{"maxIncome":17000,"combinedSupport":[1488,2033,2441,2727,3000,3261]},{"maxIncome":17050,"combinedSupport":[1491,2036,2445,2731,3004,3265]},{"maxIncome":17100,"combinedSupport":[1494,2038,2448,2734,3008,3269]},{"maxIncome":17150,"combinedSupport":[1496,2041,2451,2738,3012,3274]},{"maxIncome":17200,"combinedSupport":[1499,2044,2455,2742,3016,3278]},{"maxIncome":17250,"combinedSupport":[1501,2047,2457,2745,3019,3282]},{"maxIncome":17300,"combinedSupport":[1504,2050,2461,2748,3023,3286]},{"maxIncome":17350,"combinedSupport":[1506,2052,2464,2752,3027,3291]},{"maxIncome":17400,"combinedSupport":[1509,2055,2467,2756,3031,3295]},{"maxIncome":17450,"combinedSupport":[1512,2058,2470,2759,3035,3299]},{"maxIncome":17500,"combinedSupport":[1514,2061,2474,2763,3039,3304]},{"maxIncome":17550,"combinedSupport":[1517,2064,2477,2767,3043,3308]},{"maxIncome":17600,"combinedSupport":[1520,2067,2480,2770,3047,3312]},{"maxIncome":17650,"combinedSupport":[1522,2070,2483,2774,3051,3317]},{"maxIncome":17700,"combinedSupport":[1525,2072,2487,2778,3055,3321]},{"maxIncome":17750,"combinedSupport":[1527,2075,2490,2781,3059,3325]},{"maxIncome":17800,"combinedSupport":[1530,2078,2493,2784,3063,3329]},{"maxIncome":17850,"combinedSupport":[1532,2081,2496,2788,3067,3333]},{"maxIncome":17900,"combinedSupport":[1535,2083,2499,2791,3070,3338]},{"maxIncome":17950,"combinedSupport":[1537,2086,2502,2795,3074,3342]},{"maxIncome":18000,"combinedSupport":[1540,2089,2505,2798,3078,3346]},{"maxIncome":18050,"combinedSupport":[1542,2091,2508,2802,3082,3350]},{"maxIncome":18100,"combinedSupport":[1545,2094,2511,2805,3086,3354]},{"maxIncome":18150,"combinedSupport":[1547,2097,2514,2809,3090,3358]},{"maxIncome":18200,"combinedSupport":[1550,2100,2518,2812,3093,3362]},{"maxIncome":18250,"combinedSupport":[1552,2102,2521,2816,3097,3367]},{"maxIncome":18300,"combinedSupport":[1555,2105,2524,2819,3101,3371]},{"maxIncome":18350,"combinedSupport":[1557,2108,2527,2822,3105,3375]},{"maxIncome":18400,"combinedSupport":[1560,2110,2530,2826,3109,3379]},{"maxIncome":18450,"combinedSupport":[1562,2113,2533,2829,3112,3383]},{"maxIncome":18500,"combinedSupport":[1565,2116,2536,2833,3116,3387]},{"maxIncome":18550,"combinedSupport":[1567,2119,2539,2836,3120,3391]},{"maxIncome":18600,"combinedSupport":[1570,2121,2542,2840,3124,3396]},{"maxIncome":18650,"combinedSupport":[1572,2124,2545,2843,3128,3400]},{"maxIncome":18700,"combinedSupport":[1575,2127,2549,2847,3131,3404]},{"maxIncome":18750,"combinedSupport":[1577,2129,2552,2850,3135,3408]},{"maxIncome":18800,"combinedSupport":[1580,2132,2555,2854,3139,3412]},{"maxIncome":18850,"combinedSupport":[1582,2135,2558,2857,3143,3416]},{"maxIncome":18900,"combinedSupport":[1585,2138,2561,2861,3147,3420]},{"maxIncome":18950,"combinedSupport":[1587,2140,2564,2864,3150,3424]},{"maxIncome":19000,"combinedSupport":[1590,2143,2567,2867,3154,3429]},{"maxIncome":19050,"combinedSupport":[1592,2146,2570,2871,3158,3433]},{"maxIncome":19100,"combinedSupport":[1595,2148,2573,2874,3162,3437]},{"maxIncome":19150,"combinedSupport":[1597,2151,2576,2878,3166,3441]},{"maxIncome":19200,"combinedSupport":[1599,2154,2579,2881,3169,3445]},{"maxIncome":19250,"combinedSupport":[1602,2157,2583,2885,3173,3449]},{"maxIncome":19300,"combinedSupport":[1604,2159,2586,2888,3177,3453]},{"maxIncome":19350,"combinedSupport":[1607,2162,2589,2892,3181,3458]},{"maxIncome":19400,"combinedSupport":[1609,2165,2592,2895,3185,3462]},{"maxIncome":19450,"combinedSupport":[1612,2167,2595,2899,3188,3466]},{"maxIncome":19500,"combinedSupport":[1614,2170,2598,2902,3192,3470]},{"maxIncome":19550,"combinedSupport":[1617,2173,2601,2905,3196,3474]},{"maxIncome":19600,"combinedSupport":[1619,2176,2604,2909,3200,3478]},{"maxIncome":19650,"combinedSupport":[1622,2178,2607,2912,3204,3482]},{"maxIncome":19700,"combinedSupport":[1624,2181,2610,2916,3207,3486]},{"maxIncome":19750,"combinedSupport":[1627,2184,2614,2919,3211,3491]},{"maxIncome":19800,"combinedSupport":[1629,2186,2617,2923,3215,3495]},{"maxIncome":19850,"combinedSupport":[1632,2189,2620,2926,3219,3499]},{"maxIncome":19900,"combinedSupport":[1634,2192,2623,2930,3223,3503]},{"maxIncome":19950,"combinedSupport":[1637,2195,2626,2933,3226,3507]},{"maxIncome":20000,"combinedSupport":[1639,2197,2629,2937,3230,3511]},{"maxIncome":20050,"combinedSupport":[1642,2200,2632,2940,3234,3515]},{"maxIncome":20100,"combinedSupport":[1644,2203,2635,2944,3238,3520]},{"maxIncome":20150,"combinedSupport":[1647,2206,2638,2947,3242,3524]},{"maxIncome":20200,"combinedSupport":[1649,2208,2641,2950,3245,3528]},{"maxIncome":20250,"combinedSupport":[1652,2211,2644,2954,3249,3532]},{"maxIncome":20300,"combinedSupport":[1654,2214,2648,2957,3253,3536]},{"maxIncome":20350,"combinedSupport":[1657,2216,2651,2961,3257,3540]},{"maxIncome":20400,"combinedSupport":[1659,2219,2654,2964,3261,3544]},{"maxIncome":20450,"combinedSupport":[1662,2222,2657,2968,3264,3548]},{"maxIncome":20500,"combinedSupport":[1664,2225,2660,2971,3268,3553]},{"maxIncome":20550,"combinedSupport":[1667,2227,2663,2975,3272,3557]},{"maxIncome":20600,"combinedSupport":[1669,2230,2666,2978,3276,3561]},{"maxIncome":20650,"combinedSupport":[1672,2233,2669,2982,3280,3565]},{"maxIncome":20700,"combinedSupport":[1674,2235,2672,2985,3284,3569]},{"maxIncome":20750,"combinedSupport":[1677,2238,2675,2988,3287,3573]},{"maxIncome":20800,"combinedSupport":[1679,2241,2679,2992,3291,3577]},{"maxIncome":20850,"combinedSupport":[1681,2243,2681,2995,3295,3581]},{"maxIncome":20900,"combinedSupport":[1683,2246,2684,2998,3298,3585]},{"maxIncome":20950,"combinedSupport":[1684,2248,2687,3001,3301,3588]},{"maxIncome":21000,"combinedSupport":[1686,2251,2689,3004,3304,3592]},{"maxIncome":21050,"combinedSupport":[1687,2253,2692,3007,3308,3595]},{"maxIncome":21100,"combinedSupport":[1689,2255,2695,3010,3311,3599]},{"maxIncome":21150,"combinedSupport":[1691,2258,2697,3013,3314,3602]},{"maxIncome":21200,"combinedSupport":[1692,2260,2700,3016,3317,3606]},{"maxIncome":21250,"combinedSupport":[1694,2262,2702,3019,3321,3609]},{"maxIncome":21300,"combinedSupport":[1695,2265,2705,3022,3324,3613]},{"maxIncome":21350,"combinedSupport":[1697,2267,2708,3025,3327,3616]},{"maxIncome":21400,"combinedSupport":[1698,2269,2710,3027,3330,3620]},{"maxIncome":21450,"combinedSupport":[1700,2272,2713,3030,3333,3623]},{"maxIncome":21500,"combinedSupport":[1701,2274,2716,3033,3337,3627]},{"maxIncome":21550,"combinedSupport":[1703,2277,2718,3036,3340,3630]},{"maxIncome":21600,"combinedSupport":[1704,2279,2721,3039,3343,3634]},{"maxIncome":21650,"combinedSupport":[1706,2281,2723,3042,3346,3637]},{"maxIncome":21700,"combinedSupport":[1707,2284,2726,3045,3350,3641]},{"maxIncome":21750,"combinedSupport":[1709,2286,2729,3048,3353,3644]},{"maxIncome":21800,"combinedSupport":[1710,2288,2731,3051,3356,3648]},{"maxIncome":21850,"combinedSupport":[1712,2291,2734,3054,3359,3652]},{"maxIncome":21900,"combinedSupport":[1713,2293,2737,3057,3362,3655]},{"maxIncome":21950,"combinedSupport":[1715,2295,2739,3060,3366,3659]},{"maxIncome":22000,"combinedSupport":[1716,2298,2742,3063,3369,3662]},{"maxIncome":22050,"combinedSupport":[1718,2300,2744,3066,3372,3666]},{"maxIncome":22100,"combinedSupport":[1719,2303,2747,3069,3375,3669]},{"maxIncome":22150,"combinedSupport":[1721,2305,2750,3071,3379,3673]},{"maxIncome":22200,"combinedSupport":[1722,2307,2752,3074,3382,3676]},{"maxIncome":22250,"combinedSupport":[1724,2310,2755,3077,3385,3680]},{"maxIncome":22300,"combinedSupport":[1726,2312,2758,3080,3388,3683]},{"maxIncome":22350,"combinedSupport":[1727,2314,2760,3083,3392,3687]},{"maxIncome":22400,"combinedSupport":[1729,2317,2763,3086,3395,3690]},{"maxIncome":22450,"combinedSupport":[1730,2319,2766,3089,3398,3694]},{"maxIncome":22500,"combinedSupport":[1732,2321,2768,3092,3401,3697]},{"maxIncome":22550,"combinedSupport":[1733,2324,2771,3095,3404,3701]},{"maxIncome":22600,"combinedSupport":[1735,2326,2773,3098,3408,3704]},{"maxIncome":22650,"combinedSupport":[1736,2328,2776,3101,3411,3708]},{"maxIncome":22700,"combinedSupport":[1738,2331,2779,3104,3414,3711]},{"maxIncome":22750,"combinedSupport":[1739,2333,2781,3107,3417,3715]},{"maxIncome":22800,"combinedSupport":[1741,2336,2784,3110,3421,3718]},{"maxIncome":22850,"combinedSupport":[1742,2338,2787,3113,3424,3722]},{"maxIncome":22900,"combinedSupport":[1744,2340,2789,3115,3427,3725]},{"maxIncome":22950,"combinedSupport":[1745,2343,2792,3118,3430,3729]},{"maxIncome":23000,"combinedSupport":[1747,2345,2794,3121,3433,3732]},{"maxIncome":23050,"combinedSupport":[1748,2347,2797,3124,3437,3736]},{"maxIncome":23100,"combinedSupport":[1750,2350,2800,3127,3440,3739]},{"maxIncome":23150,"combinedSupport":[1751,2352,2802,3130,3443,3743]},{"maxIncome":23200,"combinedSupport":[1753,2354,2805,3133,3446,3746]},{"maxIncome":23250,"combinedSupport":[1754,2357,2808,3136,3450,3750]},{"maxIncome":23300,"combinedSupport":[1756,2359,2810,3139,3453,3753]},{"maxIncome":23350,"combinedSupport":[1758,2362,2813,3142,3456,3757]},{"maxIncome":23400,"combinedSupport":[1759,2364,2815,3145,3459,3760]},{"maxIncome":23450,"combinedSupport":[1761,2366,2818,3148,3462,3764]},{"maxIncome":23500,"combinedSupport":[1762,2369,2821,3151,3466,3767]},{"maxIncome":23550,"combinedSupport":[1764,2371,2823,3154,3469,3771]},{"maxIncome":23600,"combinedSupport":[1765,2373,2826,3157,3472,3774]},{"maxIncome":23650,"combinedSupport":[1767,2376,2829,3159,3475,3778]},{"maxIncome":23700,"combinedSupport":[1768,2378,2831,3162,3479,3781]},{"maxIncome":23750,"combinedSupport":[1770,2380,2834,3165,3482,3785]},{"maxIncome":23800,"combinedSupport":[1771,2383,2836,3168,3485,3788]},{"maxIncome":23850,"combinedSupport":[1773,2385,2839,3171,3488,3792]},{"maxIncome":23900,"combinedSupport":[1774,2388,2842,3174,3492,3795]},{"maxIncome":23950,"combinedSupport":[1776,2390,2844,3177,3495,3799]},{"maxIncome":24000,"combinedSupport":[1777,2392,2847,3180,3498,3802]},{"maxIncome":24050,"combinedSupport":[1779,2395,2850,3183,3501,3806]},{"maxIncome":24100,"combinedSupport":[1780,2397,2852,3186,3504,3809]},{"maxIncome":24150,"combinedSupport":[1782,2399,2855,3189,3508,3813]},{"maxIncome":24200,"combinedSupport":[1783,2402,2857,3192,3511,3816]},{"maxIncome":24250,"combinedSupport":[1785,2404,2860,3195,3514,3820]},{"maxIncome":24300,"combinedSupport":[1786,2406,2863,3198,3517,3823]},{"maxIncome":24350,"combinedSupport":[1788,2409,2865,3201,3521,3827]},{"maxIncome":24400,"combinedSupport":[1789,2411,2868,3203,3524,3830]},{"maxIncome":24450,"combinedSupport":[1791,2414,2871,3206,3527,3834]},{"maxIncome":24500,"combinedSupport":[1793,2416,2873,3209,3530,3837]},{"maxIncome":24550,"combinedSupport":[1794,2418,2876,3212,3533,3841]},{"maxIncome":24600,"combinedSupport":[1796,2421,2878,3215,3537,3844]},{"maxIncome":24650,"combinedSupport":[1797,2423,2881,3218,3540,3848]},{"maxIncome":24700,"combinedSupport":[1799,2425,2884,3221,3543,3851]},{"maxIncome":24750,"combinedSupport":[1800,2428,2886,3224,3546,3855]},{"maxIncome":24800,"combinedSupport":[1802,2430,2889,3227,3550,3858]},{"maxIncome":24850,"combinedSupport":[1803,2432,2892,3230,3553,3862]},{"maxIncome":24900,"combinedSupport":[1805,2435,2894,3233,3556,3865]},{"maxIncome":24950,"combinedSupport":[1806,2437,2897,3236,3559,3869]},{"maxIncome":25000,"combinedSupport":[1808,2440,2899,3239,3563,3872]},{"maxIncome":25050,"combinedSupport":[1809,2442,2902,3242,3566,3876]},{"maxIncome":25100,"combinedSupport":[1811,2444,2905,3245,3569,3879]},{"maxIncome":25150,"combinedSupport":[1812,2447,2907,3247,3572,3883]},{"maxIncome":25200,"combinedSupport":[1814,2449,2910,3250,3575,3886]},{"maxIncome":25250,"combinedSupport":[1815,2451,2913,3253,3579,3890]},{"maxIncome":25300,"combinedSupport":[1817,2454,2915,3256,3582,3893]},{"maxIncome":25350,"combinedSupport":[1818,2456,2918,3259,3585,3897]},{"maxIncome":25400,"combinedSupport":[1820,2458,2920,3262,3588,3901]},{"maxIncome":25450,"combinedSupport":[1821,2461,2923,3265,3592,3904]},{"maxIncome":25500,"combinedSupport":[1823,2463,2926,3268,3595,3908]},{"maxIncome":25550,"combinedSupport":[1825,2466,2928,3271,3598,3911]},{"maxIncome":25600,"combinedSupport":[1826,2468,2931,3274,3601,3915]},{"maxIncome":25650,"combinedSupport":[1828,2470,2934,3277,3604,3918]},{"maxIncome":25700,"combinedSupport":[1829,2473,2936,3280,3608,3922]},{"maxIncome":25750,"combinedSupport":[1831,2475,2939,3283,3611,3925]},{"maxIncome":25800,"combinedSupport":[1832,2477,2941,3286,3614,3929]},{"maxIncome":25850,"combinedSupport":[1834,2480,2944,3289,3617,3932]},{"maxIncome":25900,"combinedSupport":[1835,2482,2947,3291,3621,3936]},{"maxIncome":25950,"combinedSupport":[1837,2484,2949,3294,3624,3939]},{"maxIncome":26000,"combinedSupport":[1838,2487,2952,3297,3627,3943]},{"maxIncome":26050,"combinedSupport":[1840,2489,2955,3300,3630,3946]},{"maxIncome":26100,"combinedSupport":[1841,2492,2957,3303,3633,3950]},{"maxIncome":26150,"combinedSupport":[1843,2494,2960,3306,3637,3953]},{"maxIncome":26200,"combinedSupport":[1844,2496,2962,3309,3640,3957]},{"maxIncome":26250,"combinedSupport":[1846,2499,2965,3312,3643,3960]},{"maxIncome":26300,"combinedSupport":[1847,2501,2968,3315,3646,3964]},{"maxIncome":26350,"combinedSupport":[1849,2503,2970,3318,3650,3967]},{"maxIncome":26400,"combinedSupport":[1850,2506,2973,3321,3653,3971]},{"maxIncome":26450,"combinedSupport":[1852,2508,2976,3324,3656,3974]},{"maxIncome":26500,"combinedSupport":[1853,2510,2978,3327,3659,3978]},{"maxIncome":26550,"combinedSupport":[1855,2513,2981,3330,3663,3981]},{"maxIncome":26600,"combinedSupport":[1856,2515,2983,3333,3666,3985]},{"maxIncome":26650,"combinedSupport":[1858,2518,2986,3335,3669,3988]},{"maxIncome":26700,"combinedSupport":[1860,2520,2989,3338,3672,3992]},{"maxIncome":26750,"combinedSupport":[1861,2522,2991,3341,3675,3995]},{"maxIncome":26800,"combinedSupport":[1863,2525,2994,3344,3679,3999]},{"maxIncome":26850,"combinedSupport":[1864,2527,2997,3347,3682,4002]},{"maxIncome":26900,"combinedSupport":[1866,2529,2999,3350,3685,4006]},{"maxIncome":26950,"combinedSupport":[1867,2532,3002,3353,3688,4009]},{"maxIncome":27000,"combinedSupport":[1869,2534,3004,3356,3692,4013]},{"maxIncome":27050,"combinedSupport":[1870,2536,3007,3359,3695,4016]},{"maxIncome":27100,"combinedSupport":[1872,2539,3010,3362,3698,4020]},{"maxIncome":27150,"combinedSupport":[1873,2541,3012,3365,3701,4023]},{"maxIncome":27200,"combinedSupport":[1875,2544,3015,3368,3704,4027]},{"maxIncome":27250,"combinedSupport":[1876,2546,3018,3371,3708,4030]},{"maxIncome":27300,"combinedSupport":[1878,2548,3020,3374,3711,4034]},{"maxIncome":27350,"combinedSupport":[1879,2551,3023,3377,3714,4037]},{"maxIncome":27400,"combinedSupport":[1881,2553,3025,3379,3717,4041]},{"maxIncome":27450,"combinedSupport":[1882,2555,3028,3382,3721,4044]},{"maxIncome":27500,"combinedSupport":[1884,2558,3031,3385,3724,4048]},{"maxIncome":27550,"combinedSupport":[1885,2560,3033,3388,3727,4051]},{"maxIncome":27600,"combinedSupport":[1887,2562,3036,3391,3730,4055]},{"maxIncome":27650,"combinedSupport":[1888,2565,3039,3394,3734,4058]},{"maxIncome":27700,"combinedSupport":[1890,2567,3041,3397,3737,4062]},{"maxIncome":27750,"combinedSupport":[1892,2570,3044,3400,3740,4065]},{"maxIncome":27800,"combinedSupport":[1893,2572,3046,3403,3743,4069]},{"maxIncome":27850,"combinedSupport":[1895,2574,3049,3406,3746,4072]},{"maxIncome":27900,"combinedSupport":[1896,2577,3052,3409,3750,4076]},{"maxIncome":27950,"combinedSupport":[1898,2579,3054,3412,3753,4079]},{"maxIncome":28000,"combinedSupport":[1899,2581,3057,3415,3756,4083]},{"maxIncome":28050,"combinedSupport":[1901,2584,3060,3418,3759,4086]},{"maxIncome":28100,"combinedSupport":[1902,2586,3062,3420,3763,4090]},{"maxIncome":28150,"combinedSupport":[1904,2588,3065,3423,3766,4093]},{"maxIncome":28200,"combinedSupport":[1905,2591,3067,3426,3769,4097]},{"maxIncome":28250,"combinedSupport":[1907,2593,3070,3429,3772,4100]},{"maxIncome":28300,"combinedSupport":[1908,2596,3073,3432,3775,4104]},{"maxIncome":28350,"combinedSupport":[1910,2598,3075,3435,3779,4107]},{"maxIncome":28400,"combinedSupport":[1911,2600,3078,3438,3782,4111]},{"maxIncome":28450,"combinedSupport":[1913,2603,3081,3441,3785,4114]},{"maxIncome":28500,"combinedSupport":[1914,2605,3083,3444,3788,4118]},{"maxIncome":28550,"combinedSupport":[1916,2607,3086,3447,3792,4121]},{"maxIncome":28600,"combinedSupport":[1917,2610,3088,3450,3795,4125]},{"maxIncome":28650,"combinedSupport":[1919,2612,3091,3453,3798,4128]},{"maxIncome":28700,"combinedSupport":[1920,2614,3094,3456,3801,4132]},{"maxIncome":28750,"combinedSupport":[1922,2617,3096,3459,3804,4135]},{"maxIncome":28800,"combinedSupport":[1924,2619,3099,3462,3808,4139]},{"maxIncome":28850,"combinedSupport":[1925,2622,3102,3464,3811,4142]},{"maxIncome":28900,"combinedSupport":[1927,2624,3104,3467,3814,4146]},{"maxIncome":28950,"combinedSupport":[1928,2626,3107,3470,3817,4150]},{"maxIncome":29000,"combinedSupport":[1930,2629,3109,3473,3821,4153]},{"maxIncome":29050,"combinedSupport":[1931,2631,3112,3476,3824,4157]},{"maxIncome":29100,"combinedSupport":[1933,2633,3115,3479,3827,4160]},{"maxIncome":29150,"combinedSupport":[1934,2636,3117,3482,3830,4164]},{"maxIncome":29200,"combinedSupport":[1936,2638,3120,3485,3834,4167]},{"maxIncome":29250,"combinedSupport":[1937,2640,3123,3488,3837,4171]},{"maxIncome":29300,"combinedSupport":[1939,2643,3125,3491,3840,4174]},{"maxIncome":29350,"combinedSupport":[1940,2644,3127,3493,3842,4177]},{"maxIncome":29400,"combinedSupport":[1941,2646,3129,3495,3844,4179]},{"maxIncome":29450,"combinedSupport":[1942,2647,3130,3496,3846,4181]},{"maxIncome":29500,"combinedSupport":[1943,2648,3131,3498,3848,4183]},{"maxIncome":29550,"combinedSupport":[1943,2649,3133,3499,3850,4185]},{"maxIncome":29600,"combinedSupport":[1944,2650,3134,3501,3851,4186]},{"maxIncome":29650,"combinedSupport":[1945,2652,3135,3502,3853,4188]},{"maxIncome":29700,"combinedSupport":[1946,2653,3137,3504,3855,4190]},{"maxIncome":29750,"combinedSupport":[1947,2654,3138,3505,3857,4192]},{"maxIncome":29800,"combinedSupport":[1948,2655,3140,3507,3859,4194]},{"maxIncome":29850,"combinedSupport":[1949,2656,3141,3508,3860,4196]},{"maxIncome":29900,"combinedSupport":[1950,2658,3142,3510,3862,4198]},{"maxIncome":29950,"combinedSupport":[1951,2659,3144,3512,3864,4200]},{"maxIncome":30000,"combinedSupport":[1952,2660,3145,3513,3866,4202]}]'
      );
      var E = m(63),
        D = m.n(E),
        W = m(7405),
        G = m.n(W),
        N = m(7434),
        H = m.n(N),
        C = m(3139);
      const M = {
        props: {
          plaintiff: {
            name: String,
            payorpayee: String,
            gross: Number,
            deductions: Number,
            adjgross: Number,
            supportshare: Number,
            basicshare: Number,
            healthins: Number,
            extramedexp: Number,
            workexpense: Number,
            totaladdexp: Number,
            addexpshare: Number,
            partyobligation: Number,
            presumedsupport: Number,
          },
          defendant: {
            name: String,
            payorpayee: String,
            gross: Number,
            deductions: Number,
            adjgross: Number,
            supportshare: Number,
            basicshare: Number,
            healthins: Number,
            extramedexp: Number,
            workexpense: Number,
            totaladdexp: Number,
            addexpshare: Number,
            partyobligation: Number,
            presumedsupport: Number,
          },
          combinedsupport: Number,
          payor: String,
          payee: String,
        },
        setup(e) {
          const o = e;
          function m(e, o) {
            H().getBinaryContent(e, o);
          }
          function p() {
            m("supportWorksheet.docx", function (e, m) {
              if (e) throw e;
              const n = new (G())(m),
                p = new (D())(n, { paragraphLoop: !0, linebreaks: !0 });
              "Plaintiff" == o.payor
                ? p.render({
                    plaintiff: o.plaintiff.name.toUpperCase(),
                    defendant: o.defendant.name.toUpperCase(),
                    payee: o.payee.toUpperCase(),
                    payor: o.payor.toUpperCase(),
                    combinedsu: `$${(+o.combinedsupport).toFixed(2)}`,
                    dgross: `$${(+o.plaintiff.gross).toFixed(2)}`,
                    pgross: `$${(+o.defendant.gross).toFixed(2)}`,
                    cgross: `$${(
                      +o.plaintiff.gross + +o.defendant.gross
                    ).toFixed(2)}`,
                    pdeductions: `$${(+o.defendant.deductions).toFixed(2)}`,
                    ddeductions: `$${(+o.plaintiff.deductions).toFixed(2)}`,
                    cdeductions: (
                      +o.plaintiff.deductions + +o.defendant.deductions
                    ).toFixed(2),
                    padjgross: `$${(+o.defendant.adjgross).toFixed(2)}`,
                    dadjgross: `$${(+o.plaintiff.adjgross).toFixed(2)}`,
                    cadjgross: (
                      +o.plaintiff.adjgross + +o.defendant.adjgross
                    ).toFixed(2),
                    psupportshare:
                      (100 * +o.defendant.supportshare).toFixed(0) + "%",
                    dsupportshare:
                      (100 * +o.plaintiff.supportshare).toFixed(0) + "%",
                    pbasicshare: `$${(+o.defendant.basicshare).toFixed(2)}`,
                    dbasicshare: `$${(+o.plaintiff.basicshare).toFixed(2)}`,
                    phealthins: `$${(+o.defendant.healthins).toFixed(2)}`,
                    dhealthins: `$${(+o.plaintiff.healthins).toFixed(2)}`,
                    chealthins: (
                      +o.defendant.healthins + +o.plaintiff.healthins
                    ).toFixed(2),
                    pextramed: `$${(+o.defendant.extramedexp).toFixed(2)}`,
                    dextramed: `$${(+o.plaintiff.extramedexp).toFixed(2)}`,
                    cextramed: (
                      +o.defendant.extramedexp + +o.plaintiff.extramedexp
                    ).toFixed(2),
                    pworkexp: `$${(+o.defendant.workexpense).toFixed(2)}`,
                    dworkexp: `$${(+o.plaintiff.workexpense).toFixed(2)}`,
                    cworkexp: (
                      +o.defendant.workexpense + +o.plaintiff.workexpense
                    ).toFixed(2),
                    ptotaladd: `$${(+o.defendant.totaladdexp).toFixed(2)}`,
                    dtotaladd: `$${(+o.plaintiff.totaladdexp).toFixed(2)}`,
                    ctotaladd: (
                      +o.defendant.totaladdexp + +o.plaintiff.totaladdexp
                    ).toFixed(2),
                    paddexp: `$${(+o.defendant.addexpshare).toFixed(2)}`,
                    daddexp: `$${(+o.plaintiff.addexpshare).toFixed(2)}`,
                    pobligation: `$${(+o.defendant.partyobligation).toFixed(
                      2
                    )}`,
                    dobligation: `$${(+o.plaintiff.partyobligation).toFixed(
                      2
                    )}`,
                    dpsupport: `$${(+o.plaintiff.presumedsupport).toFixed(2)}`,
                  })
                : p.render({
                    plaintiff: o.plaintiff.name.toUpperCase(),
                    defendant: o.defendant.name.toUpperCase(),
                    payee: o.payee.toUpperCase(),
                    payor: o.payor.toUpperCase(),
                    combinedsu: `$${(+o.combinedsupport).toFixed(2)}`,
                    pgross: `$${(+o.plaintiff.gross).toFixed(2)}`,
                    dgross: `$${(+o.defendant.gross).toFixed(2)}`,
                    cgross: `$${(
                      +o.plaintiff.gross + +o.defendant.gross
                    ).toFixed(2)}`,
                    ddeductions: `$${(+o.defendant.deductions).toFixed(2)}`,
                    pdeductions: `$${(+o.plaintiff.deductions).toFixed(2)}`,
                    cdeductions: `$${(
                      +o.plaintiff.deductions + +o.defendant.deductions
                    ).toFixed(2)}`,
                    dadjgross: `$${(+o.defendant.adjgross).toFixed(2)}`,
                    padjgross: `$${(+o.plaintiff.adjgross).toFixed(2)}`,
                    cadjgross: `$${(
                      +o.plaintiff.adjgross + +o.defendant.adjgross
                    ).toFixed(2)}`,
                    dsupportshare:
                      (100 * +o.defendant.supportshare).toFixed(0) + "%",
                    psupportshare:
                      (100 * +o.plaintiff.supportshare).toFixed(0) + "%",
                    csupportshare: `$${(
                      +o.plaintiff.gross + +o.defendant.gross
                    ).toFixed(2)}`,
                    dbasicshare: `$${(+o.defendant.basicshare).toFixed(2)}`,
                    pbasicshare: `$${(+o.plaintiff.basicshare).toFixed(2)}`,
                    dhealthins: `$${(+o.defendant.healthins).toFixed(2)}`,
                    phealthins: `$${(+o.plaintiff.healthins).toFixed(2)}`,
                    chealthins: `$${(
                      +o.defendant.healthins + +o.plaintiff.healthins
                    ).toFixed(2)}`,
                    dextramed: `$${(+o.defendant.extramedexp).toFixed(2)}`,
                    pextramed: `$${(+o.plaintiff.extramedexp).toFixed(2)}`,
                    cextramed: `$${(
                      +o.defendant.extramedexp + +o.plaintiff.extramedexp
                    ).toFixed(2)}`,
                    dworkexp: `$${(+o.defendant.workexpense).toFixed(2)}`,
                    pworkexp: `$${(+o.plaintiff.workexpense).toFixed(2)}`,
                    cworkexp: `$${(
                      +o.defendant.workexpense + +o.plaintiff.workexpense
                    ).toFixed(2)}`,
                    dtotaladd: `$${(+o.defendant.totaladdexp).toFixed(2)}`,
                    ptotaladd: `$${(+o.plaintiff.totaladdexp).toFixed(2)}`,
                    ctotaladd: `$${(
                      +o.defendant.totaladdexp + +o.plaintiff.totaladdexp
                    ).toFixed(2)}`,
                    daddexp: `$${(+o.defendant.addexpshare).toFixed(2)}`,
                    paddexp: `$${(+o.plaintiff.addexpshare).toFixed(2)}`,
                    dobligation: `$${(+o.defendant.partyobligation).toFixed(
                      2
                    )}`,
                    pobligation: `$${(+o.plaintiff.partyobligation).toFixed(
                      2
                    )}`,
                    dpsupport: `$${(+o.defendant.presumedsupport).toFixed(2)}`,
                  });
              const t = p
                .getZip()
                .generate({
                  type: "blob",
                  mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                });
              (0, C.saveAs)(t, "SupportWorksheet.docx");
            });
          }
          return (e, o) => {
            const m = (0, n.up)("q-btn");
            return (
              (0, n.wg)(),
              (0, n.iD)("div", null, [
                (0, n.Wm)(m, {
                  label: "Download Worksheet",
                  color: "primary",
                  onClick: p,
                }),
              ])
            );
          };
        },
      };
      var T = m(4607),
        j = m(7518),
        U = m.n(j);
      const z = M,
        _ = z;
      U()(M, "components", { QBtn: T.Z });
      const A = V,
        B = {
          setup() {
            return {
              plaintiffName: (0, v.iH)(null),
              defendantName: (0, v.iH)(null),
              partiesChildren: (0, v.iH)({ label: "one", value: 0 }),
              childrenoptions: [
                { label: "one", value: 0 },
                { label: "two", value: 1 },
                { label: "three", value: 2 },
                { label: "four", value: 3 },
                { label: "five", value: 4 },
                { label: "six", value: 5 },
              ],
              pIncome: (0, v.iH)(0),
              dIncome: (0, v.iH)(0),
              pPayPeriod: (0, v.iH)({ label: "Select One", value: 0 }),
              dPayPeriod: (0, v.iH)({ label: "Select One", value: 0 }),
              options: [
                { label: "Weekly", value: 4.334 },
                { label: "Biweekly", value: 2.167 },
                { label: "Semimonthly", value: 2 },
                { label: "Monthly", value: 1 },
              ],
              pDeductions: (0, v.iH)(0),
              dDeductions: (0, v.iH)(0),
              pType: (0, v.iH)({ label: "payee", value: 1 }),
              typeoptions: [
                { label: "payor", value: 0 },
                { label: "payee", value: 1 },
              ],
              pHealthInsurance: (0, v.iH)(0),
              dHealthInsurance: (0, v.iH)(0),
              pMedicalExpenses: (0, v.iH)(0),
              dMedicalExpenses: (0, v.iH)(0),
              pWorkExpenses: (0, v.iH)(0),
              dWorkExpenses: (0, v.iH)(0),
              supportDate: (0, v.iH)(new Date()),
            };
          },
          computed: {
            DateMaker() {
              return new Date(this.supportDate).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            },
            GrossIncome() {
              return {
                plaintiff:
                  (this.pIncome - this.pDeductions) * this.pPayPeriod.value,
                defendant:
                  (this.dIncome - this.dDeductions) * this.dPayPeriod.value,
                combined:
                  (this.pIncome - this.pDeductions) * this.pPayPeriod.value +
                  (this.dIncome - this.dDeductions) * this.dPayPeriod.value,
              };
            },
            GrossPercentage() {
              return {
                plaintiff:
                  this.GrossIncome.plaintiff / this.GrossIncome.combined,
                defendant:
                  this.GrossIncome.defendant / this.GrossIncome.combined,
              };
            },
            RoundIncome() {
              return { total: 50 * Math.floor(this.GrossIncome.combined / 50) };
            },
            PresumedSupport() {
              let e = this.RoundIncome.total;
              return e > 1050
                ? A.find((e) => {
                    if (e.maxIncome == this.RoundIncome.total) return e;
                  }).combinedSupport.at(this.partiesChildren.value)
                : 125;
            },
            Expenses() {
              let e,
                o,
                m,
                n,
                p,
                t,
                a,
                c,
                d =
                  +this.dHealthInsurance +
                  +this.dMedicalExpenses +
                  +this.dWorkExpenses,
                i =
                  +this.pHealthInsurance +
                  +this.pMedicalExpenses +
                  +this.pWorkExpenses,
                r = +d + +i,
                u = "",
                s = "",
                x = this.PayorPayee.plaintiff,
                b = this.PayorPayee.defendant;
              return (
                d > 0
                  ? (this.dHealthInsurance > 0
                      ? ((e = `$${(+this.dHealthInsurance).toFixed(
                          2
                        )} in health insurance`),
                        (u = `${u}A`))
                      : (e = ""),
                    this.dMedicalExpenses > 0
                      ? ((o = `$${(+this.dMedicalExpenses).toFixed(
                          2
                        )} in extraordinary medical expenses`),
                        (u = `${u}B`))
                      : (o = ""),
                    this.dWorkExpenses > 0
                      ? ((m = `$${(+this.dWorkExpenses).toFixed(
                          2
                        )} in work expenses`),
                        (u = `${u}C`))
                      : (m = ""),
                    (c =
                      "ABC" === u
                        ? `Defendant (${b}) pays ${e}, ${o}, and ${m} for the minor child`
                        : "AB" === u
                        ? `Defendant (${b}) pays ${e} and ${o} for the minor child`
                        : "AC" === u
                        ? `Defendant (${b}) pays ${e} and ${m} for the minor child`
                        : "BC" === u
                        ? `Defendant (${b}) pays ${o} and ${m} for the minor child`
                        : `Defendant (${b}) pays ${e}${o}${m} for the minor child`))
                  : (c = ""),
                i > 0
                  ? (this.pHealthInsurance > 0
                      ? ((n = `$${(+this.pHealthInsurance).toFixed(
                          2
                        )} in health insurance`),
                        (s = `${s}A`))
                      : (n = ""),
                    this.pMedicalExpenses > 0
                      ? ((p = `$${(+this.pMedicalExpenses).toFixed(
                          2
                        )} in extraordinary medical expenses`),
                        (s = `${s}B`))
                      : (p = ""),
                    this.pWorkExpenses > 0
                      ? ((t = `$${(+this.pWorkExpenses).toFixed(
                          2
                        )} in work expenses`),
                        (s = `${s}C`))
                      : (t = ""),
                    (a =
                      "ABC" === s
                        ? `Plaintiff (${x}) pays ${n}, ${p}, and ${t} for the minor child`
                        : "AB" === s
                        ? `Plaintiff (${x}) pays ${n} and ${p} for the minor child`
                        : "AC" === s
                        ? `Plaintiff (${x}) pays ${n} and ${t} for the minor child`
                        : "BC" === s
                        ? `Plaintiff (${x}) pays ${p} and ${t} for the minor child`
                        : `Plaintiff (${x}) pays ${n}${p}${t} for the minor child`))
                  : (a = ""),
                r > 0
                  ? i > 0 && d > 0
                    ? {
                        sentence: `${a}; and ${c}; for a total of $${(+r).toFixed(
                          2
                        )} in additional child-rearing expenses`,
                        totalexpenses: r,
                        ptotalexpenses: i,
                        dtotalexpenses: d,
                      }
                    : i > 0
                    ? {
                        sentence: `${a}.`,
                        totalexpenses: r,
                        ptotalexpenses: i,
                        dtotalexpenses: 0,
                      }
                    : {
                        sentence: `${c}.`,
                        totalexpenses: r,
                        ptotalexpenses: 0,
                        dtotalexpenses: d,
                      }
                  : {
                      sentence: "",
                      totalexpenses: 0,
                      ptotalexpenses: 0,
                      dtotalexpenses: 0,
                    }
              );
            },
            PayorPayee() {
              return 0 === this.pType.value
                ? {
                    payor: "Plaintiff",
                    payee: "Defendant",
                    defendant: "payee",
                    plaintiff: "payor",
                  }
                : {
                    payor: "Defendant",
                    payee: "Plaintiff",
                    defendant: "payor",
                    plaintiff: "payee",
                  };
            },
            GrandTotals() {
              let e =
                  (+this.PresumedSupport + +this.Expenses.totalexpenses) *
                  this.GrossPercentage.plaintiff,
                o = this.PresumedSupport * this.GrossPercentage.plaintiff,
                m =
                  this.Expenses.totalexpenses * this.GrossPercentage.plaintiff,
                n =
                  (+this.PresumedSupport + +this.Expenses.totalexpenses) *
                  this.GrossPercentage.defendant,
                p = this.PresumedSupport * this.GrossPercentage.defendant,
                t =
                  this.Expenses.totalexpenses * this.GrossPercentage.defendant,
                a = Math.floor(e - this.Expenses.ptotalexpenses),
                c = Math.floor(n - this.Expenses.dtotalexpenses);
              return 0 === this.pType.value
                ? {
                    psharetotal: e,
                    psharebasic: o,
                    pshareexpenses: m,
                    dsharebasic: p,
                    dshareexpenses: t,
                    dsharetotal: n,
                    payorpays: a,
                    payorexpenses: this.Expenses.ptotalexpenses,
                  }
                : {
                    psharetotal: e,
                    psharebasic: o,
                    pshareexpenses: m,
                    dsharebasic: p,
                    dshareexpenses: t,
                    dsharetotal: n,
                    payorpays: c,
                    payorexpenses: this.Expenses.dtotalexpenses,
                  };
            },
          },
          name: "PageCalculator",
          components: { DocxWorksheet: _ },
        };
      var Z = m(4260),
        Q = m(4379),
        O = m(643),
        R = m(5869),
        L = m(4842),
        J = m(3008);
      const K = (0, Z.Z)(B, [["render", k]]),
        X = K;
      U()(B, "components", {
        QPage: Q.Z,
        QDate: O.Z,
        QSeparator: R.Z,
        QInput: L.Z,
        QSelect: J.Z,
      });
    },
  },
]);
