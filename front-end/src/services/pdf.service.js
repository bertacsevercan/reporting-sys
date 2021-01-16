import { jsPDF } from "jspdf";

export const createPDF = (title, subTitle, textList, chart, isLonger) => {
  const doc = new jsPDF();
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const downloadDate = day + ". " + month + ". " + year;

  doc.setFont("", "", "bold");
  doc.setFontSize(32);
  doc.text(title, 50, 10);
  doc.setFontSize(16);
  doc.text(downloadDate, 170, 20);
  isLonger ? doc.text(subTitle, 10, 30) : doc.text(subTitle, 20, 30);
  doc.setFont("", "", "normal");
  doc.text(textList, 20, 40);
  const base64Image = chart.current.chartInstance.toBase64Image();
  isLonger
    ? doc.addImage(base64Image, "JPEG", 20, 190, 160, 100)
    : doc.addImage(base64Image, "JPEG", 20, 140, 160, 100);
  return doc.save("report.pdf");
};
