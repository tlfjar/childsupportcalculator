<template>
  <div>
    <q-btn label="Download Worksheet" color="primary" @click="renderDoc" />
  </div>
</template>

<script setup>
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
const props = defineProps({
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
    presumedsupport: Number
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
    presumedsupport: Number
  },
  combinedsupport: Number,
  payor: String,
  payee: String
});
function renderDoc() {
  loadFile("supportWorksheet.docx", function (error, content) {
    if (error) {
      throw error;
    }
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true
    });

    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    if (props.payor == "Plaintiff") {
      doc.render({
        plaintiff: props.plaintiff.name.toUpperCase(),
        defendant: props.defendant.name.toUpperCase(),
        payee: props.payee.toUpperCase(),
        payor: props.payor.toUpperCase(),
        combinedsu: `\$${(+props.combinedsupport).toFixed(2)}`,

        dgross: `\$${(+props.plaintiff.gross).toFixed(2)}`,
        pgross: `\$${(+props.defendant.gross).toFixed(2)}`,
        cgross:
          `\$${(+props.plaintiff.gross + +props.defendant.gross).toFixed(2)}`,
        pdeductions: `\$${(+props.defendant.deductions).toFixed(2)}`,
        ddeductions: `\$${(+props.plaintiff.deductions).toFixed(2)}`,
        cdeductions: (
          +props.plaintiff.deductions + +props.defendant.deductions
        ).toFixed(2),
        padjgross: `\$${(+props.defendant.adjgross).toFixed(2)}`,
        dadjgross: `\$${(+props.plaintiff.adjgross).toFixed(2)}`,
        cadjgross: (
          +props.plaintiff.adjgross + +props.defendant.adjgross
        ).toFixed(2),
        psupportshare: (+props.defendant.supportshare * 100).toFixed(0) + "%",
        dsupportshare: (+props.plaintiff.supportshare * 100).toFixed(0) + "%",
        pbasicshare: `\$${(+props.defendant.basicshare).toFixed(2)}`,
        dbasicshare: `\$${(+props.plaintiff.basicshare).toFixed(2)}`,
        phealthins: `\$${(+props.defendant.healthins).toFixed(2)}`,
        dhealthins: `\$${(+props.plaintiff.healthins).toFixed(2)}`,
        chealthins: (
          +props.defendant.healthins + +props.plaintiff.healthins
        ).toFixed(2),
        pextramed: `\$${(+props.defendant.extramedexp).toFixed(2)}`,
        dextramed: `\$${(+props.plaintiff.extramedexp).toFixed(2)}`,
        cextramed: (
          +props.defendant.extramedexp + +props.plaintiff.extramedexp
        ).toFixed(2),
        pworkexp: `\$${(+props.defendant.workexpense).toFixed(2)}`,
        dworkexp: `\$${(+props.plaintiff.workexpense).toFixed(2)}`,
        cworkexp: (
          +props.defendant.workexpense + +props.plaintiff.workexpense
        ).toFixed(2),
        ptotaladd: `\$${(+props.defendant.totaladdexp).toFixed(2)}`,
        dtotaladd: `\$${(+props.plaintiff.totaladdexp).toFixed(2)}`,
        ctotaladd: (
          +props.defendant.totaladdexp + +props.plaintiff.totaladdexp
        ).toFixed(2),
        paddexp: `\$${(+props.defendant.addexpshare).toFixed(2)}`,
        daddexp: `\$${(+props.plaintiff.addexpshare).toFixed(2)}`,
        pobligation: `\$${(+props.defendant.partyobligation).toFixed(2)}`,
        dobligation: `\$${(+props.plaintiff.partyobligation).toFixed(2)}`,
        dpsupport: `\$${(+props.plaintiff.presumedsupport).toFixed(2)}`
      });
    } else {
      doc.render({
        plaintiff: props.plaintiff.name.toUpperCase(),
        defendant: props.defendant.name.toUpperCase(),
        payee: props.payee.toUpperCase(),
        payor: props.payor.toUpperCase(),
        combinedsu: `\$${(+props.combinedsupport).toFixed(2)}`,

        pgross: `\$${(+props.plaintiff.gross).toFixed(2)}`,
        dgross: `\$${(+props.defendant.gross).toFixed(2)}`,
        cgross:
          `\$${(+props.plaintiff.gross + +props.defendant.gross).toFixed(2)}`,
        ddeductions: `\$${(+props.defendant.deductions).toFixed(2)}`,
        pdeductions: `\$${(+props.plaintiff.deductions).toFixed(2)}`,
        cdeductions:
          `\$${(+props.plaintiff.deductions + +props.defendant.deductions).toFixed(
            2
          )}`,
        dadjgross: `\$${(+props.defendant.adjgross).toFixed(2)}`,
        padjgross: `\$${(+props.plaintiff.adjgross).toFixed(2)}`,
        cadjgross:
          `\$${(+props.plaintiff.adjgross + +props.defendant.adjgross).toFixed(2)}`,
        dsupportshare: (+props.defendant.supportshare * 100).toFixed(0) + "%",
        psupportshare: (+props.plaintiff.supportshare * 100).toFixed(0) + "%",
        csupportshare:
          `\$${(+props.plaintiff.gross + +props.defendant.gross).toFixed(2)}`,
        dbasicshare: `\$${(+props.defendant.basicshare).toFixed(2)}`,
        pbasicshare: `\$${(+props.plaintiff.basicshare).toFixed(2)}`,
        dhealthins: `\$${(+props.defendant.healthins).toFixed(2)}`,
        phealthins: `\$${(+props.plaintiff.healthins).toFixed(2)}`,
        chealthins:
          `\$${(+props.defendant.healthins + +props.plaintiff.healthins).toFixed(2)}`,
        dextramed: `\$${(+props.defendant.extramedexp).toFixed(2)}`,
        pextramed: `\$${(+props.plaintiff.extramedexp).toFixed(2)}`,
        cextramed:
          `\$${(+props.defendant.extramedexp + +props.plaintiff.extramedexp).toFixed(
            2
          )}`,
        dworkexp: `\$${(+props.defendant.workexpense).toFixed(2)}`,
        pworkexp: `\$${(+props.plaintiff.workexpense).toFixed(2)}`,
        cworkexp:
          `\$${(+props.defendant.workexpense + +props.plaintiff.workexpense).toFixed(
            2
          )}`,
        dtotaladd: `\$${(+props.defendant.totaladdexp).toFixed(2)}`,
        ptotaladd: `\$${(+props.plaintiff.totaladdexp).toFixed(2)}`,
        ctotaladd:
          `\$${(+props.defendant.totaladdexp + +props.plaintiff.totaladdexp).toFixed(
            2
          )}`,
        daddexp: `\$${(+props.defendant.addexpshare).toFixed(2)}`,
        paddexp: `\$${(+props.plaintiff.addexpshare).toFixed(2)}`,
        dobligation: `\$${(+props.defendant.partyobligation).toFixed(2)}`,
        pobligation: `\$${(+props.plaintiff.partyobligation).toFixed(2)}`,
        dpsupport: `\$${(+props.defendant.presumedsupport).toFixed(2)}`
      });
    }
    const out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
    // Output the document using Data-URI
    saveAs(out, "SupportWorksheet.docx");
  });
}
</script>
