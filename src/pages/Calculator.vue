<template>
  <q-page padding>
    <div class="fit row q-py-xs" style="max-width: 1280px">
      <div
        class="fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 624px"
      >
        <q-date
          class="col q-mx-sm"
          style="max-height: 248px"
          v-model="supportDate"
          landscape
          title="Support Start Date"
          subtitle="select one"
        />
        <q-separator vertical />
        <div class="col-4 q-mx-sm" style="min-height: 280px">
          <q-input
            outlined
            class="col-12 q-mb-sm"
            v-model="plaintiffName"
            label="Plaintiff's Name"
          />
          <q-input
            outlined
            class="col-12 q-my-sm"
            v-model="defendantName"
            label="Defendant's Name"
          />
          <q-select
            filled
            class="col-12 q-my-sm"
            v-model="pType"
            :options="typeoptions"
            label="Plaintiff is:"
          />
          <q-select
            filled
            class="col-12 q-my-sm"
            v-model="partiesChildren"
            :options="childrenoptions"
            label="Number of Children"
          />
        </div>
      </div>
      <div
        class="col-lt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm"
        style="min-height: 280px"
      >
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
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <h6
            v-if="partiesChildren.value === 0"
            class="col-12 q-mt-sm q-mb-none q-mx-sm"
          >
            Additional Expenses Paid for Minor child:
          </h6>
          <h6 v-else class="col-12 q-mt-sm q-mb-none q-mx-sm">
            Additional Expenses Paid for Minor children:
          </h6>
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
      <div
        class="col-gt-lg-6 col-lt-lg-12 q-mb-md q-mx-sm"
        style="min-height: 280px"
      >
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
          <h6
            v-if="partiesChildren.value === 0"
            class="col-12 q-mt-sm q-mb-none q-mx-sm"
          >
            Additional Expenses Paid for Minor child:
          </h6>
          <h6 v-else class="col-12 q-mt-sm q-mb-none q-mx-sm">
            Additional Expenses Paid for Minor children:
          </h6>
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
      <div
        class="fit row justify-start items-start content-start q-py-sm q-mx-sm q-mb-md shadow-1"
        style="min-width: 624px; max-width: 624px"
      >
        <div
          class="col-gt-lg-6 col-lt-lg-12 q-mb-none q-mx-sm"
          style="min-height: 280px"
        >
          <div class="row q-mx-sm text-h5">Support Paragraph:</div>
          <q-separator />
          <div class="row q-mx-sm q-my-xs text-justify">
            The court has determined that {{ payorPayee.payor }} (payor) earns a
            gross income of ${{ (+plaintiffGrossIncome).toFixed(2) }} per month
            and {{ payorPayee.payee }} (payee) earns a gross income of ${{
              (+defendantGrossIncome).toFixed(2)
            }}
            per month. Therefore, the parents’ combined gross income is ${{
              (+combinedGrossIncome).toFixed(2)
            }}
            with a basic child-support obligation of ${{
              (+presumedSupport).toFixed(2)
            }}
            for their {{ partiesChildren.label }} child(ren) per the Chart. The
            court also finds that {{ finalSentence }}. Plaintiff ({{
              payorPayee.plaintiff
            }}) is responsible for
            {{ (plaintiffGrossPercentage * 100).toFixed(0) }}% of the total
            obligation (${{ (+plaintiffShareBasic).toFixed(2) }} share of basic
            obligation plus ${{ (+plaintiffShareExpenses).toFixed(2) }} for
            expenses) and has a total child-support obligation of ${{
              (+plaintiffShareTotal).toFixed(2)
            }}. Defendant ({{ payorPayee.defendant }}) is responsible for
            {{ (defendantGrossPercentage * 100).toFixed(0) }}% of the total
            obligation (${{ (+defendantShareBasic).toFixed(2) }} share of basic
            obligation plus ${{ (+defendantShareExpenses).toFixed(2) }} for
            expenses) and has a total child-support obligation of ${{
              (+defendantShareTotal).toFixed(2)
            }}. {{ payorPayee.payor }}, as the payor, shall receive a ${{
              (+payorExpenses).toFixed(2)
            }}
            credit for the additional child-rearing expenses that (s)he is
            paying out of pocket. {{ payorPayee.payor }} shall pay ${{
              (+payorCost).toFixed(2)
            }}
            per month to {{ payorPayee.payee }} beginning on {{ dateMaker }}.
          </div>
          <q-separator />
          <div
            class="row q-mx-sm q-mt-sm q-my-none justify-center items-center"
          >
            <DocxWorksheet
              :plaintiff="{
                name: plaintiffName,
                payorpayee: payorPayee.plaintiff,
                gross: pIncome,
                deductions: pDeductions,
                adjgross: plaintiffGrossIncome,
                supportshare: plaintiffGrossPercentage,
                basicshare: plaintiffShareBasic,
                healthins: pHealthInsurance,
                extramedexp: pMedicalExpenses,
                workexpense: pWorkExpenses,
                totaladdexp: plaintiffTotalExpenses,
                addexpshare: plaintiffShareExpenses,
                partyobligation: plaintiffShareTotal,
                presumedsupport: +plaintiffShareTotal - +plaintiffTotalExpenses,
              }"
              :defendant="{
                name: defendantName,
                payorpayee: payorPayee.defendant,
                gross: dIncome,
                deductions: dDeductions,
                adjgross: defendantGrossIncome,
                supportshare: defendantGrossPercentage,
                basicshare: defendantShareBasic,
                healthins: dHealthInsurance,
                extramedexp: dMedicalExpenses,
                workexpense: dWorkExpenses,
                totaladdexp: defendantTotalExpenses,
                addexpshare: defendantShareExpenses,
                partyobligation: defendantShareTotal,
                presumedsupport: +defendantShareTotal - +defendantTotalExpenses,
              }"
              :payor="payorPayee.payor"
              :payee="payorPayee.payee"
              :combinedsupport="presumedSupport"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import supportData from "../assets/support.json";
import DocxWorksheet from "src/components/docxWorksheet.vue";

const plaintiffName = ref(null);
const defendantName = ref(null);

const partiesChildren = ref({ label: "one", value: 0 });

const childrenoptions = [
  { label: "one", value: 0 },
  { label: "two", value: 1 },
  { label: "three", value: 2 },
  { label: "four", value: 3 },
  { label: "five", value: 4 },
  { label: "six", value: 5 },
];

const pIncome = ref(0);
const dIncome = ref(0);

const pPayPeriod = ref({ label: "Select One", value: 0 });
const dPayPeriod = ref({ label: "Select One", value: 0 });
const options = [
  { label: "Weekly", value: 4.334 },
  { label: "Biweekly", value: 2.167 },
  { label: "Semimonthly", value: 2 },
  { label: "Monthly", value: 1 },
];

const pDeductions = ref(0);
const dDeductions = ref(0);

const pType = ref({ label: "payee", value: 1 });
const typeoptions = [
  { label: "payor", value: 0 },
  { label: "payee", value: 1 },
];

const pHealthInsurance = ref(0);
const dHealthInsurance = ref(0);

const pMedicalExpenses = ref(0);
const dMedicalExpenses = ref(0);

const pWorkExpenses = ref(0);
const dWorkExpenses = ref(0);

const supportDate = ref(new Date());

const dateMaker = computed(() => {
  return new Date(supportDate.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const plaintiffGrossIncome = computed(
  () => (pIncome.value - pDeductions.value) * pPayPeriod.value.value
);

const defendantGrossIncome = computed(
  () => (dIncome.value - dDeductions.value) * dPayPeriod.value.value
);

const combinedGrossIncome = computed(
  () => plaintiffGrossIncome.value + defendantGrossIncome.value
);

const plaintiffGrossPercentage = computed(
  () => plaintiffGrossIncome.value / combinedGrossIncome.value
);

const defendantGrossPercentage = computed(
  () => defendantGrossIncome.value / combinedGrossIncome.value
);

const roundedIncome = computed(
  () => Math.floor(combinedGrossIncome.value / 50) * 50
);

const presumedSupport = computed(() => {
  if (roundedIncome.value <= 1050) return 125;

  const support = supportData.find(
    (item) => item.maxIncome === roundedIncome.value
  );

  return support.combinedSupport[partiesChildren.value.value];
});

const plaintiffTotalExpenses = computed(
  () => +pHealthInsurance.value + +pMedicalExpenses.value + +pWorkExpenses.value
);

const defendantTotalExpenses = computed(
  () => +dHealthInsurance.value + +dMedicalExpenses.value + +dWorkExpenses.value
);

const totalExpenses = computed(
  () => plaintiffTotalExpenses.value + defendantTotalExpenses.value
);

const payorPayee = computed(() => {
  if (pType.value.value === 0) {
    return {
      payor: "Plaintiff",
      payee: "Defendant",
      defendant: "payee",
      plaintiff: "payor",
    };
  }

  return {
    payor: "Defendant",
    payee: "Plaintiff",
    defendant: "payor",
    plaintiff: "payee",
  };
});

const plaintiffSentence = computed(() => {
  if (plaintiffTotalExpenses.value <= 0) return "";

  const ptype = payorPayee.value.plaintiff;

  const phi = pHealthInsurance.value
    ? `$${(+pHealthInsurance.value).toFixed(2)} in health insurance`
    : "";

  const pme = dMedicalExpenses.value
    ? `$${(+dMedicalExpenses.value).toFixed(
        2
      )} in extraordinary medical expenses`
    : "";

  const pwe = dWorkExpenses.value
    ? `$${(+dWorkExpenses.value).toFixed(2)} in work expenses`
    : "";

  if (phi && pme && pwe) {
    return `Plaintiff (${ptype}) pays ${phi}, ${pme}, and ${pwe} for the minor child`;
  }

  if (phi && pme) {
    return `Plaintiff (${ptype}) pays ${phi} and ${pme} for the minor child`;
  }

  if (phi && pwe) {
    return `Plaintiff (${ptype}) pays ${phi} and ${pwe} for the minor child`;
  }

  if (pme && pwe) {
    return `Plaintiff (${ptype}) pays ${pme} and ${pwe} for the minor child`;
  }

  return `Plaintiff (${ptype}) pays ${phi}${pme}${pwe} for the minor child`;
});

const defendantSentence = computed(() => {
  if (defendantTotalExpenses.value <= 0) return "";

  const dtype = payorPayee.value.defendant;

  const dhi = dHealthInsurance.value
    ? `$${(+dHealthInsurance.value).toFixed(2)} in health insurance`
    : "";

  const dme = dMedicalExpenses.value
    ? `$${(+dMedicalExpenses.value).toFixed(
        2
      )} in extraordinary medical expenses`
    : "";

  const dwe = dWorkExpenses.value
    ? `$${(+dWorkExpenses.value).toFixed(2)} in work expenses`
    : "";

  if (dhi && dme && dwe) {
    return `Defendant (${dtype}) pays ${dhi}, ${dme}, and ${dwe} for the minor child`;
  }

  if (dhi && dme) {
    return `Defendant (${dtype}) pays ${dhi} and ${dme} for the minor child`;
  }

  if (dhi && dwe) {
    return `Defendant (${dtype}) pays ${dhi} and ${dwe} for the minor child`;
  }

  if (dme && dwe) {
    return `Defendant (${dtype}) pays ${dme} and ${dwe} for the minor child`;
  }

  return `Defendant (${dtype}) pays ${dhi}${dme}${dwe} for the minor child`;
});

const finalSentence = computed(() => {
  if (totalExpenses.value <= 0) return "";

  if (plaintiffTotalExpenses.value > 0 && defendantTotalExpenses.value > 0) {
    return `${plaintiffSentence.value}; and ${
      defendantSentence.value
    }; for a total of $${totalExpenses.value.toFixed(
      2
    )} in additional child-rearing expenses`;
  }

  if (plaintiffTotalExpenses.value > 0) {
    return plaintiffSentence.value;
  }

  if (defendantTotalExpenses.value > 0) {
    return defendantSentence.value;
  }

  return "";
});

const plaintiffShareTotal = computed(() => {
  return (
    (+presumedSupport.value + +totalExpenses.value) *
    plaintiffGrossPercentage.value
  );
});

const plaintiffShareBasic = computed(() => {
  return +presumedSupport.value * +plaintiffGrossPercentage.value;
});

const plaintiffShareExpenses = computed(() => {
  return +totalExpenses.value * +plaintiffGrossPercentage.value;
});

const defendantShareTotal = computed(() => {
  return (
    (+presumedSupport.value + +totalExpenses.value) *
    defendantGrossPercentage.value
  );
});

const defendantShareBasic = computed(() => {
  return +presumedSupport.value * +defendantGrossPercentage.value;
});

const defendantShareExpenses = computed(() => {
  return +totalExpenses.value * +defendantGrossPercentage.value;
});

const plaintiffPayorCost = computed(() =>
  Math.floor(plaintiffShareTotal.value - plaintiffTotalExpenses.value)
);

const defendantPayorCost = computed(() =>
  Math.floor(defendantShareTotal.value - defendantTotalExpenses.value)
);

const payorCost = computed(() => {
  if (pType.value.value === 0) {
    return plaintiffPayorCost.value;
  }

  return defendantPayorCost.value;
});

const payorExpenses = computed(() => {
  return pType.value.value === 0
    ? plaintiffTotalExpenses.value
    : defendantTotalExpenses.value;
});
</script>
