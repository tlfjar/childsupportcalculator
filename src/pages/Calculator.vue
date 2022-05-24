<template>
  <q-page padding>
    <div class="fit row q-py-xs" style="max-width: 1280px">
      <div class="fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 624px">
        <q-date class="col q-mx-sm" style="max-height: 248px" v-model="supportDate" landscape title="Support Start Date"
          subtitle="select one" />
        <q-separator vertical />
        <div class="col-4 q-mx-sm" style="min-height: 280px">
          <q-input outlined class="col-12 q-mb-sm" v-model="plaintiffName" label="Plaintiff's Name" />
          <q-input outlined class="col-12 q-my-sm" v-model="defendantName" label="Defendant's Name" />
          <q-select filled class="col-12 q-my-sm" v-model="pType" :options="typeoptions" label="Plaintiff is:" />
          <q-select filled class="col-12 q-my-sm" v-model="partiesChildren" :options="childrenoptions"
            label="Number of Children" />
        </div>
      </div>
      <div class="col-lt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm" style="min-height: 280px">
        <div class="fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1"
          style="min-width: 624px; max-width: 624px">
          <h5 class="col-12 q-my-none q-mx-sm">Plaintiff</h5>
          <q-input outlined class="col-8 q-gutter-sm q-col-gutter-sm" v-model="pIncome"
            label="Plaintiff Income (Gross)" />
          <q-select filled class="col-4 q-gutter-sm q-col-gutter-sm" v-model="pPayPeriod" :options="options"
            label="Pay Period" />
          <q-input outlined class="col-8 q-gutter-sm q-col-gutter-sm" v-model="pDeductions"
            label="Allowed Deductions (per pay period)" />
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <h6 v-if="partiesChildren.value === 0" class="col-12 q-mt-sm q-mb-none q-mx-sm">Additional Expenses Paid for
            Minor child:</h6>
          <h6 v-else class="col-12 q-mt-sm q-mb-none q-mx-sm">Additional Expenses Paid for Minor children:</h6>
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="pHealthInsurance"
            label="Health insurance" />
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="pMedicalExpenses"
            label="Medical expenses" />
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="pWorkExpenses" label="Work expenses" />
          <div class="col-4" />
        </div>
      </div>
      <div class="col-gt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm" style="min-height: 280px">
        <div class="fit row justify-start items-start content-start q-py-sm q-mb-md shadow-1"
          style="min-width: 624px; max-width: 624px">
          <h5 class="col-12 q-my-none q-mx-sm">Defendant</h5>
          <q-input outlined class="col-8 q-gutter-sm q-col-gutter-sm" v-model="dIncome"
            label="Defendant Income (Gross)" />
          <q-select filled class="col-4 q-gutter-sm q-col-gutter-sm" v-model="dPayPeriod" :options="options"
            label="Pay Period" />
          <q-input outlined class="col-8 q-gutter-sm q-col-gutter-sm" v-model="dDeductions"
            label="Allowed Deductions (per pay period)" />
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <h6 v-if="partiesChildren.value === 0" class="col-12 q-mt-sm q-mb-none q-mx-sm">Additional Expenses Paid for
            Minor child:</h6>
          <h6 v-else class="col-12 q-mt-sm q-mb-none q-mx-sm">Additional Expenses Paid for Minor children:</h6>
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="dHealthInsurance"
            label="Health insurance" />
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="dMedicalExpenses"
            label=" Medical expenses" />
          <q-input outlined class="col-4 q-gutter-sm q-col-gutter-sm" v-model="dWorkExpenses" label="Work expenses" />
          <div class="col-4" />
        </div>
      </div>
      <div class="fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 624px">
        <div class="col-gt-lg-6 col-lt-lg-12 q-mb-none q-mx-sm" style="min-height: 280px">
          <div class="row q-mx-sm text-h5">Support Paragraph:</div>
          <q-separator />
          <div class="row q-mx-sm q-my-xs text-justify">
            The court has determined that {{ PayorPayee.payor }} (payor) earns a gross income of
            ${{ (+GrossIncome.plaintiff).toFixed(2) }} per month and {{ PayorPayee.payee }} (payee) earns a gross
            income of ${{ (+GrossIncome.defendant).toFixed(2) }} per month. Therefore, the parents’
            combined gross income is ${{ (+GrossIncome.combined).toFixed(2) }} with a basic
            child-support obligation of ${{ (+PresumedSupport).toFixed(2) }} for their {{ partiesChildren.label }}
            child(ren) per
            the Chart. The court also finds that {{ Expenses.sentence }}. Plaintiff ({{ PayorPayee.plaintiff }}) is
            responsible for {{ (GrossPercentage.plaintiff * 100).toFixed(0) }}% of the total obligation (${{
                (+GrandTotals.psharebasic).toFixed(2)
            }} share of basic
            obligation plus ${{ (+GrandTotals.pshareexpenses).toFixed(2) }} for expenses) and has a total child-support
            obligation of ${{ (+GrandTotals.psharetotal).toFixed(2) }}. Defendant ({{ PayorPayee.defendant }}) is
            responsible for {{ (GrossPercentage.defendant * 100).toFixed(0) }}% of the
            total obligation (${{ (+GrandTotals.dsharebasic).toFixed(2) }} share of basic obligation plus
            ${{ (+GrandTotals.dshareexpenses).toFixed(2) }} for
            expenses) and has a total child-support obligation of ${{ (+GrandTotals.dsharetotal).toFixed(2) }}.
            {{ PayorPayee.payor }},
            as the payor, shall receive a ${{ (+GrandTotals.payorexpenses).toFixed(2) }} credit for the additional
            child-rearing
            expenses that (s)he is paying out of pocket. {{ PayorPayee.payor }} shall pay ${{
                (+GrandTotals.payorpays).toFixed(2)
            }} per
            month to {{ PayorPayee.payee }} beginning on {{ DateMaker }}.
          </div>
          <q-separator />
          <div class="row q-mx-sm q-mt-sm q-my-none justify-center items-center">
            <DocxWorksheet :plaintiff="{
              name: plaintiffName,
              payorpayee: PayorPayee.plaintiff,
              gross: pIncome,
              deductions: pDeductions,
              adjgross: GrossIncome.plaintiff,
              supportshare: GrossPercentage.plaintiff,
              basicshare: GrandTotals.psharebasic,
              healthins: pHealthInsurance,
              extramedexp: pMedicalExpenses,
              workexpense: pWorkExpenses,
              totaladdexp: Expenses.ptotalexpenses,
              addexpshare: GrandTotals.pshareexpenses,
              partyobligation: GrandTotals.psharetotal,
              presumedsupport: +GrandTotals.psharetotal - +Expenses.ptotalexpenses
            }" :defendant="{
  name: defendantName,
  payorpayee: PayorPayee.defendant,
  gross: dIncome,
  deductions: dDeductions,
  adjgross: GrossIncome.defendant,
  supportshare: GrossPercentage.defendant,
  basicshare: GrandTotals.dsharebasic,
  healthins: dHealthInsurance,
  extramedexp: dMedicalExpenses,
  workexpense: dWorkExpenses,
  totaladdexp: Expenses.dtotalexpenses,
  addexpshare: GrandTotals.dshareexpenses,
  partyobligation: GrandTotals.dsharetotal,
  presumedsupport: +GrandTotals.dsharetotal - +Expenses.dtotalexpenses
}" :payor="PayorPayee.payor" :payee="PayorPayee.payee" :combinedsupport="PresumedSupport" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import supportData from "../assets/support.json";
import DocxWorksheet from "src/components/docxWorksheet.vue";

const supports = supportData;

export default {
  setup() {
    return {
      plaintiffName: ref(null),
      defendantName: ref(null),
      partiesChildren: ref({ label: "one", value: 0 }),
      childrenoptions: [
        { label: "one", value: 0 },
        { label: "two", value: 1 },
        { label: "three", value: 2 },
        { label: "four", value: 3 },
        { label: "five", value: 4 },
        { label: "six", value: 5 }
      ],
      pIncome: ref(0),
      dIncome: ref(0),
      pPayPeriod: ref({ label: "Select One", value: 0 }),
      dPayPeriod: ref({ label: "Select One", value: 0 }),
      options: [
        { label: "Weekly", value: 4.334 },
        { label: "Biweekly", value: 2.167 },
        { label: "Semimonthly", value: 2 },
        { label: "Monthly", value: 1 }
      ],
      pDeductions: ref(0),
      dDeductions: ref(0),
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
      supportDate: ref(new Date())
    };
  },
  computed: {
    DateMaker() {
      return new Date(this.supportDate).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    GrossIncome() {
      console.log(this.pIncome)
      console.log((this.pIncome - this.pDeductions))
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
          dhi =
            `\$${(+this.dHealthInsurance).toFixed(2)} in health insurance`;
          dt = `${dt}A`;
        } else {
          dhi = "";
        }
        if (this.dMedicalExpenses > 0) {
          dme =
            `\$${(+this.dMedicalExpenses).toFixed(2)} in extraordinary medical expenses`;
          dt = `${dt}B`;
        } else {
          dme = "";
        }
        if (this.dWorkExpenses > 0) {
          dwe = `\$${(+this.dWorkExpenses).toFixed(2)} in work expenses`;
          dt = `${dt}C`;
        } else {
          dwe = "";
        }
        if (dt === "ABC") {
          dsentence = `Defendant (${dtype}) pays ${dhi}, ${dme}, and ${dwe} for the minor child`;
        } else if (dt === "AB") {
          dsentence = `Defendant (${dtype}) pays ${dhi} and ${dme} for the minor child`;
        } else if (dt === "AC") {
          dsentence = `Defendant (${dtype}) pays ${dhi} and ${dwe} for the minor child`;
        } else if (dt === "BC") {
          dsentence = `Defendant (${dtype}) pays ${dme} and ${dwe} for the minor child`;
        } else {
          dsentence = `Defendant (${dtype}) pays ${dhi}${dme}${dwe} for the minor child`;
        }
      } else {
        dsentence = "";
      }
      if (ptotalexpenses > 0) {
        if (this.pHealthInsurance > 0) {
          phi =
            `\$${(+this.pHealthInsurance).toFixed(2)} in health insurance`;
          pt = `${pt}A`;
        } else {
          phi = "";
        }
        if (this.pMedicalExpenses > 0) {
          pme =
            `\$${(+this.pMedicalExpenses).toFixed(2)} in extraordinary medical expenses`;
          pt = `${pt}B`;
        } else {
          pme = "";
        }
        if (this.pWorkExpenses > 0) {
          pwe = `\$${(+this.pWorkExpenses).toFixed(2)} in work expenses`;
          pt = `${pt}C`;
        } else {
          pwe = "";
        }
        if (pt === "ABC") {
          psentence = `Plaintiff (${ptype}) pays ${phi}, ${pme}, and ${pwe} for the minor child`;
        } else if (pt === "AB") {
          psentence = `Plaintiff (${ptype}) pays ${phi} and ${pme} for the minor child`;
        } else if (pt === "AC") {
          psentence = `Plaintiff (${ptype}) pays ${phi} and ${pwe} for the minor child`;
        } else if (pt === "BC") {
          psentence = `Plaintiff (${ptype}) pays ${pme} and ${pwe} for the minor child`;
        } else {
          psentence = `Plaintiff (${ptype}) pays ${phi}${pme}${pwe} for the minor child`;
        }
      } else {
        psentence = "";
      }
      if (totalexpenses > 0) {
        if (ptotalexpenses > 0 && dtotalexpenses > 0) {
          return {
            sentence: `${psentence}; and ${dsentence}; for a total of \$${(+totalexpenses).toFixed(
              2
            )} in additional child-rearing expenses`,
            totalexpenses,
            ptotalexpenses,
            dtotalexpenses
          };
        } else if (ptotalexpenses > 0) {
          return {
            sentence: `${psentence}.`,
            totalexpenses,
            ptotalexpenses,
            dtotalexpenses: 0
          };
        } else {
          return {
            sentence: `${dsentence}.`,
            totalexpenses,
            ptotalexpenses: 0,
            dtotalexpenses
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
          defendant: "payee",
          plaintiff: "payor"
        };
      }
      return {
        payor: "Defendant",
        payee: "Plaintiff",
        defendant: "payor",
        plaintiff: "payee"
      };
    },
    GrandTotals() {
      let psharetotal =
        (+this.PresumedSupport + +this.Expenses.totalexpenses) *
        this.GrossPercentage.plaintiff;
      let psharebasic = this.PresumedSupport * this.GrossPercentage.plaintiff;
      let pshareexpenses =
        this.Expenses.totalexpenses * this.GrossPercentage.plaintiff;
      let dsharetotal =
        (+this.PresumedSupport + +this.Expenses.totalexpenses) *
        this.GrossPercentage.defendant;
      let dsharebasic = this.PresumedSupport * this.GrossPercentage.defendant;
      let dshareexpenses =
        this.Expenses.totalexpenses * this.GrossPercentage.defendant;
      let ppayorpays = Math.floor(psharetotal - this.Expenses.ptotalexpenses);
      let dpayorpays = Math.floor(dsharetotal - this.Expenses.dtotalexpenses);
      if (this.pType.value === 0) {
        return {
          psharetotal,
          psharebasic,
          pshareexpenses,
          dsharebasic,
          dshareexpenses,
          dsharetotal,
          payorpays: ppayorpays,
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
        payorpays: dpayorpays,
        payorexpenses: this.Expenses.dtotalexpenses
      };
    }
  },
  name: "PageCalculator",
  components: { DocxWorksheet }
};
</script>
