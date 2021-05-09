const fetch = require("node-fetch");
const env = require("dotenv").config({ path: "../.env" }).parsed;
const fs = require("fs");

async function main() {
  // 住所取得

  // 現実的に 15 以上行かない
  const pages = new Array(15).fill(undefined).map((_, i) => i + 1);

  // 普通の住所
  for (let page of pages) {
    //   const generalResponse = await fetch(
    //     `${env.GENERAL_ENDPOINT}?per=10000&page=${page}`
    //   );
    //   if (generalResponse.ok) {
    //     console.log("general", page);
    //     const data = await generalResponse.json();
    //     fs.writeFileSync(`./data/general/${page}.json`, JSON.stringify(data), {
    //       encoding: "utf-8",
    //     });
    //   }

    // 事務所の住所
    const officeResponse = await fetch(
      `${env.OFFICE_ENDPOINT}?per=10000&page=${page}`
    );
    if (officeResponse.ok) {
      console.log("office", page);
      const data = await officeResponse.json();
      fs.writeFileSync(`./data/office/${page}.json`, JSON.stringify(data), {
        encoding: "utf-8",
      });
    }
  }

  // 事務所
}

main();
