<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Show/Print Worksheet" color="primary" @click="medium = true" />
    <q-dialog v-model="medium">
      <q-card style="width: 800px; max-width: 1200px">
        <q-card-section>
          <div class="text-h6 absolute-center">Terms of Agreement</div>
        </q-card-section>

        <q-separator />
        <q-card-section style="max-height: 50vh">
          <div class="row items-start justify-start content-start">
            <div class="q-mx-sm">
              <h6 class="q-ma-none">Part I: Monthly Income</h6>
            </div>
            <div class="q-mx-sm" />
            <q-separator vertical />
            <div class="q-mx-sm">
              <h6 class="q-ma-none">Payor ({{payor}})</h6>
              <q-separator />
              <div v-for="n in 5" :key="n">Payor ({{payor}})</div>
            </div>
            <q-separator vertical />

            <div class="q-mx-sm text-h6">Payee ({{payee}})</div>

            <q-separator vertical />

            <div class="q-mx-sm text-h6">Combined</div>
          </div>
          <q-separator />
        </q-card-section>
        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Print" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "Worksheet",
  props: {
    payor: {
      type: String,
      default: "Defendant"
    },
    payee: {
      type: String,
      default: "Plaintiff"
    },
    income: {
      type: String,
      default: "$0.00"
    },
    expenses: {
      type: String,
      default: "$0.00"
    }
  },
  setup() {
    return {
      medium: ref(false)
    };
  }
});
</script>
