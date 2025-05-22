// fetch.js
const fs = require('fs');
const DiscoverSnoop = require('discover_snoop');

const api = new DiscoverSnoop.LiveApi();

const token = process.env.SNOOP_TOKEN; // Guardado en GitHub Secrets
DiscoverSnoop.ApiClient.instance.authentications["Bearer"].accessToken = token;

const country = "ES";
const opts = { lines: 10 };

api.livepagesGet(country, opts, (error, data, response) => {
  if (error) {
    console.error("❌ Error:", error.response.body);
    process.exit(1);
  } else {
    fs.writeFileSync('livepages.json', JSON.stringify(data, null, 2));
    console.log("✅ livepages.json actualizado");
  }
});
