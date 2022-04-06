<template>
  <q-page padding>
    <div class="fit row q-py-xs" style="max-width: 1280px">
      <div
        class="fit row justify-center items-center content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 1280px"
      >
        <q-input
          outlined
          class="col-4 q-gutter-sm q-col-gutter-sm"
          v-model="partiesChildren"
          label="Number of Children"
        />
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
          <div class="col-4" />
        </div>
      </div>
    </div>
    <p
      class="row"
    >Plaintiff's Monthly Gross Income: {{ GrossIncome.plaintiff }}, which is {{ GrossPercentage.plaintiff }}</p>
    <p
      class="row"
    >Defendant's Monthly Gross Income: {{ GrossIncome.defendant }}, which is {{ GrossPercentage.defendant }}</p>
    <p
      class="row"
    >Combined Monthly Gross Income: {{ GrossIncome.combined }}. Rounded for support purposes is {{ RoundIncome.total }}</p>
    <p class="row">total support is {{ PresumedSupport }}</p>
    <p
      class="q-pa-md shadow-1"
      style="max-width: 624px"
    >The court has determined that Plaintiff (payor) earns a gross income of {{ GrossIncome.plaintiff }} per month and Defendant (payee) earns a gross income of {{GrossIncome.defendant}} per month. Therefore, the parents’ combined gross income is {{GrossIncome.combined}} with a basic child-support obligation of {{PresumedSupport}} for their one child per the Chart. The court also finds that Plaintiff (payor) is paying for the child’s health insurance premium in the amount of $100 per month and that Defendant (payee) is paying $200 for childcare expenses, for a total of $300 for additional child-rearing expenses. Plaintiff (payor) is responsible for 66% of the total obligation ($312.67 share of basic obligation plus $200 for expenses) and has a total child-support obligation of $512.67. Defendant (payee) is responsible for 33% of the total obligation ($156.33 share of basic obligation plus $100 for expenses) and has a total child-support obligation of $256.33. Plaintiff, as the payor, shall receive a $100 credit for the additional child-rearing expenses that he is paying out of pocket. Plaintiff shall pay $412 per month to Defendant beginning on March 1, 2020, and he shall continue to cover the child’s health insurance premium.</p>
  </q-page>
</template>

<script>
import { ref } from "vue";
import supportData from "../assets/support.json";

const supports = supportData;

export default {
  setup() {
    return {
      partiesChildren: ref(1),
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
      dDeductions: ref(null)
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
          .combinedSupport.at(this.partiesChildren - 1);
      }

      return 125;
    }
  },
  name: "PageCalculator"
};
</script>
