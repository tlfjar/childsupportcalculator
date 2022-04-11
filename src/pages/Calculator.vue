<template>
  <q-page padding>
    <div class="fit row q-py-xs" style="max-width: 1280px">
      <div
        class="fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 624px"
      >
        <q-date class="col q-ml-sm" v-model="supportDate" minimal />
        <div class="col-4 q-mx-sm">
          <q-select
            filled
            class="col-12 q-mb-sm"
            v-model="partiesChildren"
            :options="childrenoptions"
            label="Number of Children"
          />
          <q-input
            outlined
            class="col-12 q-my-sm"
            v-model="plaintiffName"
            label="Plaintiff's Name"
          />
          <q-input
            outlined
            class="col-12 q-my-sm"
            v-model="defendantName"
            label="Defendant's Name"
          />
        </div>
      </div>
      <div class="col-lt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm">
        <div
          class="fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1"
          style="min-width: 624px; max-width: 624px"
        >
          <h5 class="col-12 q-my-none q-mx-sm">Plaintiff</h5>
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="pIncome"
            label="Plaintiff Income (Gross)"
          />
          <q-select
            filled
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="pPayPeriod"
            :options="options"
            label="Pay Period"
          />
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="pDeductions"
            label="Allowed Deductions (per pay period)"
          />
          <q-select
            filled
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="pType"
            :options="typeoptions"
            label="Plaintiff is:"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="pHealthInsurance"
            label="Health insurance"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="pMedicalExpenses"
            label="Medical expenses"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="pWorkExpenses"
            label="Work expenses"
          />
          <div class="col-4" />
        </div>
      </div>
      <div class="col-gt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm">
        <div
          class="fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1"
          style="min-width: 624px; max-width: 624px"
        >
          <h5 class="col-12 q-my-none q-mx-sm">Defendant</h5>
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="dIncome"
            label="Defendant Income (Gross)"
          />
          <q-select
            filled
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="dPayPeriod"
            :options="options"
            label="Pay Period"
          />
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="dDeductions"
            label="Allowed Deductions (per pay period)"
          />
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="dHealthInsurance"
            label="Health insurance"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="dMedicalExpenses"
            label=" Medical expenses"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="dWorkExpenses"
            label="Work expenses"
          />
          <div class="col-4" />
        </div>
      </div>
    </div>
    <p class="row">
      Plaintiff's Monthly Gross Income: {{ GrossIncome.plaintiff }}, which is
      {{ GrossPercentage.plaintiff }}
    </p>
    <p class="row">
      Defendant's Monthly Gross Income: {{ GrossIncome.defendant }}, which is
      {{ GrossPercentage.defendant }}
    </p>
    <p class="row">
      Combined Monthly Gross Income: {{ GrossIncome.combined }}. Rounded for
      support purposes is {{ RoundIncome.total }}
    </p>
    <p class="row">Sentence: {{ Expenses.sentence }}</p>
    <p class="row">total support is {{ PresumedSupport }}</p>
    <p class="q-pa-md shadow-2" style="max-width: 624px">
      The court has determined that {{PayorPayee.payor}} (payor) earns a gross income of
      {{ GrossIncome.plaintiff }} per month and {{PayorPayee.payee}} (payee) earns a gross
      income of {{ GrossIncome.defendant }} per month. Therefore, the parents’
      combined gross income is {{ GrossIncome.combined }} with a basic
      child-support obligation of {{ PresumedSupport }} for their one child per
      the Chart. The court also finds that {{ Expenses.sentence }}. Plaintiff ({{ PayorPayee.plaintiff}}) is
      responsible for {{ GrossPercentage.plaintiff}} of the total obligation ({{ GrandTotals.psharebasic }} share of basic
      obligation plus {{ GrandTotals.pshareexpenses }} for expenses) and has a total child-support
      obligation of {{ GrandTotals.psharetotal}}. Defendant ({{PayorPayee.defendant}}) is responsible for {{GrossPercentage.defendant}} of the
      total obligation ({{GrandTotals.dsharebasic}} share of basic obligation plus {{GrandTotals.dshareexpenses}} for
      expenses) and has a total child-support obligation of {{GrandTotals.dsharetotal}}. {{PayorPayee.payor}},
      as the payor, shall receive a ${{ GrandTotals.payorexpenses }} credit for the additional child-rearing
      expenses that (s)he is paying out of pocket. {{PayorPayee.payor}} shall pay {{ GrandTotals.payorpays }} per
      month to {{PayorPayee.payee}} beginning on {{supportDate}}, and (s)he shall continue to
      cover the child’s health insurance premium.
    </p>
  </q-page>
</template>

<script>
import { ref } from "vue";
import supportData from "../assets/support.json";

const supports = supportData;

export default {
  setup() {
    return {
      plaintiffName: ref(null),
      defendantName: ref(null),
      partiesChildren: ref({ label: "Select One", value: 0 }),
      childrenoptions: [
        { label: "One", value: 0 },
        { label: "Two", value: 1 },
        { label: "Three", value: 2 },
        { label: "Four", value: 3 },
        { label: "Five", value: 4 },
        { label: "Six", value: 5 }
      ],
      pIncome: ref(null),
      dIncome: ref(null),
      pPayPeriod: ref({ label: "Select One", value: 0 }),
      dPayPeriod: ref({ label: "Select One", value: 0 }),
      options: [
        { label: "Weekly", value: 4.334 },
        { label: "Biweekly", value: 2.167 },
        { label: "Semimonthly", value: 2 },
        { label: "Monthly", value: 1 }
      ],
      pDeductions: ref(null),
      dDeductions: ref(null),
      pType: ref({ label: "payee", value: 1 }),
      typeoptions: [
        { label: "payor", value: 0 },
        { label: "payee", value: 1 }
      ],
      pHealthInsurance: ref(0),
      dHealthInsurance: ref(0),
      pMedicalExpenses: ref(0),
      dMedicalExpenses: ref(0),
      pWorkExpenses: ref(0),
      dWorkExpenses: ref(0),
      supportDate: ref(null)
    };
  },
  computed: {
    GrossIncome() {
      return {
        plaintiff: (this.pIncome - this.pDeductions) * this.pPayPeriod.value,
        defendant: (this.dIncome - this.dDeductions) * this.dPayPeriod.value,
        combined:
          (this.pIncome - this.pDeductions) * this.pPayPeriod.value +
          (this.dIncome - this.dDeductions) * this.dPayPeriod.value
      };
    },
    GrossPercentage() {
      return {
        plaintiff: this.GrossIncome.plaintiff / this.GrossIncome.combined,
        defendant: this.GrossIncome.defendant / this.GrossIncome.combined
      };
    },
    RoundIncome() {
      return {
        total: Math.floor(this.GrossIncome.combined / 50) * 50
      };
    },
    PresumedSupport() {
      let income = this.RoundIncome.total;
      if (income > 1050) {
        return supports
          .find((item) => {
            if (item.maxIncome == this.RoundIncome.total) {
              return item;
            }
          })
          .combinedSupport.at(this.partiesChildren.value);
      }

      return 125;
    },
    Expenses() {
      let dtotalexpenses =
        +this.dHealthInsurance + +this.dMedicalExpenses + +this.dWorkExpenses;

      let ptotalexpenses =
        +this.pHealthInsurance + +this.pMedicalExpenses + +this.pWorkExpenses;
      let totalexpenses = +dtotalexpenses + +ptotalexpenses;
      let dhi;
      let dme;
      let dwe;
      let dt = "";
      let phi;
      let pme;
      let pwe;
      let pt = "";
      let psentence;
      let dsentence;
      let ptype = this.PayorPayee.plaintiff;
      let dtype = this.PayorPayee.defendant;
      if (dtotalexpenses > 0) {
        if (this.dHealthInsurance > 0) {
          dhi = "$" + this.dHealthInsurance + " in health insurance";
          dt = dt + "A";
        } else {
          dhi = "";
        }
        if (this.dMedicalExpenses > 0) {
          dme =
            "$" + this.dMedicalExpenses + " in extraordinary medical expenses";
          dt = dt + "B";
        } else {
          dme = "";
        }
        if (this.dWorkExpenses > 0) {
          dwe = "$" + this.dWorkExpenses + " in work expenses";
          dt = dt + "C";
        } else {
          dwe = "";
        }
        if (dt === "ABC") {
          dsentence = `Defendant (${dtype}) pays ${dhi}, ${dme}, and ${dwe} for the minor child.`;
        } else if (dt === "AB") {
          dsentence = `Defendant (${dtype}) pays ${dhi} and ${dme} for the minor child.`;
        } else if (dt === "AC") {
          dsentence = `Defendant (${dtype}) pays ${dhi} and ${dwe} for the minor child.`;
        } else if (dt === "BC") {
          dsentence = `Defendant (${dtype}) pays ${dme} and ${dwe} for the minor child.`;
        } else {
          dsentence = `Defendant (${dtype}) pays ${dhi}${dme}${dwe} for the minor child.`;
        }
      } else {
        dsentence = "";
      }
      if (ptotalexpenses > 0) {
        if (this.pHealthInsurance > 0) {
          phi = "$" + this.pHealthInsurance + " in health insurance";
          pt = pt + "A";
        } else {
          phi = "";
        }
        if (this.pMedicalExpenses > 0) {
          pme =
            "$" + this.pMedicalExpenses + " in extraordinary medical expenses";
          pt = pt + "B";
        } else {
          pme = "";
        }
        if (this.pWorkExpenses > 0) {
          pwe = "$" + this.pWorkExpenses + " in work expenses";
          pt = pt + "C";
        } else {
          pwe = "";
        }
        if (pt === "ABC") {
          psentence = `Plaintiff (${ptype}) pays ${phi}, ${pme}, and ${pwe} for the minor child.`;
        } else if (pt === "AB") {
          psentence = `Plaintiff (${ptype}) pays ${phi} and ${pme} for the minor child.`;
        } else if (pt === "AC") {
          psentence = `Plaintiff (${ptype}) pays ${phi} and ${pwe} for the minor child.`;
        } else if (pt === "BC") {
          psentence = `Plaintiff (${ptype}) pays ${pme} and ${pwe} for the minor child.`;
        } else {
          psentence = `Plaintiff (${ptype}) pays ${phi}${pme}${pwe} for the minor child.`;
        }
      } else {
        psentence = "";
      }
      if (totalexpenses > 0) {
        if (ptotalexpenses > 0 && dtotalexpenses > 0) {
          return {
            sentence: `${psentence} ${dsentence} for a total of \$${totalexpenses} for additional child-rearing expenses`,
            totalexpenses,
            ptotalexpenses,
            dtotalexpenses
          };
        } else if (ptotalexpenses > 0) {
          return {
            sentence: psentence,
            totalexpenses,
            ptotalexpenses,
            dtotalexpenses: 0
          };
        }
      }
      return {
        sentence: "",
        totalexpenses: 0,
        ptotalexpenses: 0,
        dtotalexpenses: 0
      };
    },
    PayorPayee() {
      if (this.pType.value === 0) {
        return {
          payor: "Plaintiff",
          payee: "Defendant",
          defendant: "payor",
          plaintiff: "payee"
        };
      }
      return {
        payor: "Defendant",
        payee: "Plaintiff",
        defendant: "payee",
        plaintiff: "payor"
      };
    },
    GrandTotals() {
      let psharetotal =
        (+this.PresumedSupport + +this.Expenses.totalexpenses) *
        this.GrossPercentage.plaintiff;
      let psharebasic = this.PresumedSupport * this.GrossPercentage.plaintiff;
      let pshareexpenses =
        this.Expenses.ptotalexpenses * this.GrossPercentage.plaintiff;
      let dsharetotal =
        (+this.PresumedSupport + +this.Expenses.totalexpenses) *
        this.GrossPercentage.defendant;
      let dsharebasic = this.PresumedSupport * this.GrossPercentage.defendant;
      let dshareexpenses =
        this.Expenses.dtotalexpenses * this.GrossPercentage.defendant;
      if (this.pType.value === 0) {
        return {
          psharetotal,
          psharebasic,
          pshareexpenses,
          dsharebasic,
          dshareexpenses,
          dsharetotal,
          payorpays: psharetotal - this.Expenses.ptotalexpenses,
          payorexpenses: this.Expenses.ptotalexpenses
        };
      }
      return {
        psharetotal,
        psharebasic,
        pshareexpenses,
        dsharebasic,
        dshareexpenses,
        dsharetotal,
        payorpays: dsharetotal - this.Expenses.dtotalexpenses,
        payorexpenses: this.Expenses.dtotalexpenses
      };
    }
  },
  name: "PageCalculator"
};
</script>
