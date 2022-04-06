<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="inception = true" />

    <q-dialog v-model="inception">
      <q-card>
        <q-card-section>
          <div class="text-h6">Inception</div>
        </q-card-section>

        <q-card-section class="q-pt-none"
          >The court has determined that Plaintiff (payor) earns a gross income
          of {{ plaintiffGross }} per month and Defendant (payee) earns a gross
          income of {{ defendantGross }} per month. Therefore, the parents’
          combined gross income is {{ combinedGross }} with a basic
          child-support obligation of {{ supportObligation }} for their one
          child per the Chart. The court also finds that Plaintiff (payor) is
          paying for the child’s health insurance premium in the amount of $100
          per month and that Defendant (payee) is paying $200 for childcare
          expenses, for a total of $300 for additional child-rearing expenses.
          Plaintiff (payor) is responsible for 66% of the total obligation
          ($312.67 share of basic obligation plus $200 for expenses) and has a
          total child-support obligation of $512.67. Defendant (payee) is
          responsible for 33% of the total obligation ($156.33 share of basic
          obligation plus $100 for expenses) and has a total child-support
          obligation of $256.33. Plaintiff, as the payor, shall receive a $100
          credit for the additional child-rearing expenses that he is paying out
          of pocket. Plaintiff shall pay $412 per month to Defendant beginning
          on March 1, 2020, and he shall continue to cover the child’s health
          insurance premium.</q-card-section
        >

        <q-card-actions align="right" class="text-primary">
          <q-btn
            flat
            label="Open another dialog"
            @click="secondDialog = true"
          />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none"
          >Click/Tap on the backdrop.</q-card-section
        >

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Popout",
  props: {
    plaintiffGross: {
      type: Number,
    },
    defendantGross: {
      type: Number,
    },
    combinedGross: {
      type: Number,
    },
  },
  setup() {
    return {
      inception: ref(false),
      secondDialog: ref(false),
    };
  },
});
</script>
