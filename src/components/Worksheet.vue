<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Show/Print Worksheet" color="primary" @click="basic = true" />
    <q-dialog v-model="basic">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <h5>
            Payor ({{PayorPayee.payor}})
            <q-separator vertical />
            Payee ({{PayorPayee.payee}})
            <q-separator vertical />Combined
          </h5>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
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
    }
  },
  setup() {
    return {
      basic: ref(false)
    };
  }
});
</script>
