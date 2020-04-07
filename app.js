console.log("Hello from Back 2 School!");
let viz;
const vizContainer = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const options = {
  device: "desktop",
};
const exporttoPDF = document.getElementById("exporttoPDF");
const exporttoimage = document.getElementById("exporttoimage");
function initViz() {
  console.log("Hello data school, loaded when the page loaded!");
  viz = new tableau.Viz(vizContainer, url, options);
}

exporttoPDF.addEventListener("click", function () {
  console.log("Hello from my export to PDF button");
  viz.showExportPDFDialog();
});
exporttoimage.addEventListener("click", function () {
  console.log("Hello from my export to image button");
  viz.showExportImageDialog();
});
document.addEventListener("DOMContentLoaded", initViz());
