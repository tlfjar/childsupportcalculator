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
            v-model="plaintiffType"
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
            v-model="plaintiffIncome"
            label="Plaintiff Income (Gross)"
          />
          <q-select
            filled
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="plaintiffPayPeriod"
            :options="options"
            label="Pay Period"
          />
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="plaintiffDeductions"
            label="Allowed Deductions (per pay period)"
          />
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <h6
            v-if="+partiesChildren.value.value === 0"
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
            v-model="plaintiffHealthInsurance"
            label="Health insurance"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="plaintiffMedicalExpenses"
            label="Medical expenses"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="plaintiffWorkExpenses"
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
            v-model="defendantIncome"
            label="Defendant Income (Gross)"
          />
          <q-select
            filled
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="defendantPayPeriod"
            :options="options"
            label="Pay Period"
          />
          <q-input
            outlined
            class="col-8 q-gutter-sm q-col-gutter-sm"
            v-model="defendantDeductions"
            label="Allowed Deductions (per pay period)"
          />
          <div class="col-4 q-gutter-sm q-col-gutter-sm" />
          <h6
            v-if="+partiesChildren.value.value === 0"
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
            v-model="defendantHealthInsurance"
            label="Health insurance"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="defendantMedicalExpenses"
            label=" Medical expenses"
          />
          <q-input
            outlined
            class="col-4 q-gutter-sm q-col-gutter-sm"
            v-model="defendantWorkExpenses"
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
          <div class="row q-mx-sm text-h5">
            Support Paragraph{{ payorIncomeOnly }}:
          </div>
          <q-separator />
          <div
            v-if="presumedSupport != 125 && payorIncomeOnly == 1"
            class="row q-mx-sm q-my-xs text-justify"
          >
            The court has determined that Plaintiff ({{ payorPayee.plaintiff }})
            earns a gross income of ${{
              (+plaintiffGrossIncome).toFixed(2)
            }}
            per month and Defendant ({{ payorPayee.defendant }}) earns a gross
            income of ${{ (+defendantGrossIncome).toFixed(2) }} per month.
            Therefore, the parents’ combined gross income is ${{
              (+combinedGrossIncome).toFixed(2)
            }}
            with a basic child-support obligation of ${{
              (+presumedSupport).toFixed(2)
            }}
            for their {{ partiesChildren.label }} child(ren) per the Chart.
            {{ finalSentence }} Plaintiff ({{ payorPayee.plaintiff }}) is
            responsible for {{ (plaintiffGrossPercentage * 100).toFixed(0) }}%
            of the total obligation (${{
              (+plaintiffShareBasic).toFixed(2)
            }}
            share of basic obligation plus ${{
              (+plaintiffShareExpenses).toFixed(2)
            }}
            for expenses) and has a total child-support obligation of ${{
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
          <div
            v-if="presumedSupport == 125"
            class="row q-mx-sm q-my-xs text-justify"
          >
            The court has determined that {{ payorPayee.payor }} (payor) earns a
            gross income of ${{ (+combinedGrossIncome).toFixed(2) }} per month.
            Therefore, {{ payorPayee.payor }} (payor) is ordered to pay the
            minimum support amount of $125.00 per month to
            {{ payorPayee.payee }} beginning on {{ dateMaker }}.
          </div>
          <div
            v-if="presumedSupport != 125 && payorIncomeOnly == 0"
            class="row q-mx-sm q-my-xs text-justify"
          >
            The court has determined that {{ payorPayee.payor }} (payor) earns a
            gross income of ${{ (+combinedGrossIncome).toFixed(2) }} per month.
            Because this income falls into the "shaded area" on the "Arkansas
            Family Support Chart of Basic Child Support Obligations," support
            must be callculated based on {{ payorPayee.payor }}'s (payor's)
            income alone. {{ payorPayee.payor }} (payor) therefore has a basic
            child-support obligation of ${{ (+presumedSupport).toFixed(2) }} for
            the parties' {{ partiesChildren.label }} child(ren) per the Chart.
            {{ payorPayee.payor }} shall pay said amount monthly to
            {{ payorPayee.payee }}, beginning on {{ dateMaker }}.
          </div>
          <q-separator />
          <div
            class="row q-mx-sm q-mt-sm q-my-none justify-center items-center"
          >
            <DocxWorksheet
              :plaintiff="{
                name: plaintiffName,
                payorpayee: payorPayee.plaintiff,
                gross: plaintiffIncome,
                deductions: plaintiffDeductions,
                adjgross: plaintiffGrossIncome,
                supportshare: plaintiffGrossPercentage,
                basicshare: plaintiffShareBasic,
                healthins: plaintiffHealthInsurance,
                extramedexp: plaintiffMedicalExpenses,
                workexpense: plaintiffWorkExpenses,
                totaladdexp: plaintiffTotalExpenses,
                addexpshare: plaintiffShareExpenses,
                partyobligation: plaintiffShareTotal,
                presumedsupport: +plaintiffShareTotal - +plaintiffTotalExpenses,
              }"
              :defendant="{
                name: defendantName,
                payorpayee: payorPayee.defendant,
                gross: defendantIncome,
                deductions: defendantDeductions,
                adjgross: defendantGrossIncome,
                supportshare: defendantGrossPercentage,
                basicshare: defendantShareBasic,
                healthins: defendantHealthInsurance,
                extramedexp: defendantMedicalExpenses,
                workexpense: defendantWorkExpenses,
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

const plaintiffName = ref("Plaintiff");
const defendantName = ref("Defendant");

const partiesChildren = ref({ label: "one", value: 0 });

const childrenoptions = [
  { label: "one", value: 0 },
  { label: "two", value: 1 },
  { label: "three", value: 2 },
  { label: "four", value: 3 },
  { label: "five", value: 4 },
  { label: "six", value: 5 },
];

const plaintiffIncome = ref(0);
const defendantIncome = ref(0);

const plaintiffPayPeriod = ref({ label: "Select One", value: 0 });
const defendantPayPeriod = ref({ label: "Select One", value: 0 });
const options = [
  { label: "Weekly", value: 4.334 },
  { label: "Biweekly", value: 2.167 },
  { label: "Semimonthly", value: 2 },
  { label: "Monthly", value: 1 },
];

const plaintiffDeductions = ref(0);
const defendantDeductions = ref(0);

const plaintiffType = ref({ label: "payee", value: 1 });
const typeoptions = [
  { label: "payor", value: 0 },
  { label: "payee", value: 1 },
];

const plaintiffHealthInsurance = ref(0);
const defendantHealthInsurance = ref(0);

const plaintiffMedicalExpenses = ref(0);
const defendantMedicalExpenses = ref(0);

const plaintiffWorkExpenses = ref(0);
const defendantWorkExpenses = ref(0);

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
  () =>
    (plaintiffIncome.value - plaintiffDeductions.value) *
    plaintiffPayPeriod.value.value
);

const defendantGrossIncome = computed(
  () =>
    (defendantIncome.value - defendantDeductions.value) *
    defendantPayPeriod.value.value
);

const combinedGrossIncome = computed(() => {
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 5 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1850
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 5 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1850
  )
    return plaintiffGrossIncome.value;
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 4 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1750
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 4 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1750
  )
    return plaintiffGrossIncome.value;
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 3 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1650
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 3 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1650
  )
    return plaintiffGrossIncome.value;
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 2 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1550
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 2 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1550
  )
    return plaintiffGrossIncome.value;
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 1 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1400
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 1 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1400
  )
    return plaintiffGrossIncome.value;
  if (
    payorPayee.value.payor == "Defendant" &&
    +partiesChildren.value.value == 0 &&
    defendantGrossIncome.value > 1050 &&
    defendantGrossIncome.value < 1200
  )
    return defendantGrossIncome.value;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    +partiesChildren.value.value == 0 &&
    plaintiffGrossIncome.value > 1050 &&
    plaintiffGrossIncome.value < 1200
  )
    return plaintiffGrossIncome.value;
  return plaintiffGrossIncome.value + defendantGrossIncome.value;
});

const plaintiffGrossPercentage = computed(() => {
  const value =
    plaintiffGrossIncome.value / combinedGrossIncome.value > 1
      ? 0
      : plaintiffGrossIncome.value / combinedGrossIncome.value;
  return value;
});

const defendantGrossPercentage = computed(() => {
  const value =
    defendantGrossIncome.value / combinedGrossIncome.value > 1
      ? 0
      : defendantGrossIncome.value / combinedGrossIncome.value;
  return value;
});

const roundedIncome = computed(
  () => Math.floor(combinedGrossIncome.value / 50) * 50
);
const payorIncomeOnly = computed(() => {
  const value =
    (combinedGrossIncome.value >= 1200 && partiesChildren.value.value == 0) ||
    (combinedGrossIncome.value >= 1400 && partiesChildren.value.value == 1) ||
    (combinedGrossIncome.value >= 1550 && partiesChildren.value.value == 2) ||
    (combinedGrossIncome.value >= 1650 && partiesChildren.value.value == 3) ||
    (combinedGrossIncome.value >= 1750 && partiesChildren.value.value == 4) ||
    (combinedGrossIncome.value >= 1850 && partiesChildren.value.value == 5)
      ? 1
      : 0;
  return value;
});
const presumedSupport = computed(() => {
  if (
    payorPayee.value.payor == "Defendant" &&
    defendantGrossIncome.value <= 1050
  )
    return 125;
  if (
    payorPayee.value.payor == "Plaintiff" &&
    plaintiffGrossIncome.value <= 1050
  )
    return 125;

  const support = supportData.find(
    (item) => item.maxIncome === roundedIncome.value
  );

  return support.combinedSupport[+partiesChildren.value.value];
});

const plaintiffTotalExpenses = computed(
  () =>
    +plaintiffHealthInsurance.value +
    +plaintiffMedicalExpenses.value +
    +plaintiffWorkExpenses.value
);

const defendantTotalExpenses = computed(
  () =>
    +defendantHealthInsurance.value +
    +defendantMedicalExpenses.value +
    +defendantWorkExpenses.value
);

const totalExpenses = computed(
  () => plaintiffTotalExpenses.value + defendantTotalExpenses.value
);

const payorPayee = computed(() => {
  if (plaintiffType.value.value === 0) {
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

  const phi = plaintiffHealthInsurance.value
    ? `$${(+plaintiffHealthInsurance.value).toFixed(2)} in health insurance`
    : "";

  const pme = defendantMedicalExpenses.value
    ? `$${(+defendantMedicalExpenses.value).toFixed(
        2
      )} in extraordinary medical expenses`
    : "";

  const pwe = defendantWorkExpenses.value
    ? `$${(+defendantWorkExpenses.value).toFixed(2)} in work expenses`
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

  const dhi = defendantHealthInsurance.value
    ? `$${(+defendantHealthInsurance.value).toFixed(2)} in health insurance`
    : "";

  const dme = defendantMedicalExpenses.value
    ? `$${(+defendantMedicalExpenses.value).toFixed(
        2
      )} in extraordinary medical expenses`
    : "";

  const dwe = defendantWorkExpenses.value
    ? `$${(+defendantWorkExpenses.value).toFixed(2)} in work expenses`
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
    return `The court also finds that ${plaintiffSentence.value}, and ${
      defendantSentence.value
    }; for a total of $${totalExpenses.value.toFixed(
      2
    )} in additional child-rearing expenses.`;
  }

  if (plaintiffTotalExpenses.value > 0) {
    return `The Court also finds that ${plaintiffSentence.value}.`;
  }

  if (defendantTotalExpenses.value > 0) {
    return `The Court also finds that ${defendantSentence.value}.`;
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
  if (plaintiffType.value.value === 0) {
    return plaintiffPayorCost.value;
  }

  return defendantPayorCost.value;
});

const payorExpenses = computed(() => {
  return plaintiffType.value.value === 0
    ? plaintiffTotalExpenses.value
    : defendantTotalExpenses.value;
});
</script>
