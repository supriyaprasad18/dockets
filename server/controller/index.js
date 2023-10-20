const fs = require("fs");
const XLSX = require("xlsx");
const Docket = require("../models/docket");

async function getCSVData(req, res) {
  let result = [];
  await fs.readFile("./server/file/data.xlsx", (err, data) => {
    if (err) {
      console.error("Error reading Excel file:", err);
      return;
    }
    const workbook = XLSX.read(data, { type: "buffer" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Parse the sheet data into JSON format
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    // Output the JSON data
    result = [...jsonData].map((item) => {
      return {
        PONumber: item["PO Number"],
        Supplier: item["Supplier"],
        Description: item["Description"],
      };
    });
    res.json(result);
  });
}

async function getDocketList(req, res) {
    Docket.find({}).then((data)=>res.json(data)).catch((err)=>console.log(err));
}

async function createDocket(req, res) {
  const newDocket = new Docket(req?.body);
  newDocket
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
}

module.exports = {
  getCSVData,
  getDocketList,
  createDocket,
};
