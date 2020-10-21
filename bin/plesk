// TODO PLESK BACKEND

// plesk
// Plesk connector API to Orphic CLI and Tudio API

// init project
const express = require("express");
const app = express();

app.get("/api/psa", (req, res) => {
  let psa = [
    {
      psa.accounts: {[
      "id": String,
      "type: String
      ]},
      psa.databases: {[
      // MYSQL PSEUDO CODE
      /*
SELECT domains.name AS domain_name,
data_bases.name AS database_name, db_users.login, accounts.password
FROM data_bases, db_users, domains, accounts
WHERE data_bases.dom_id = domains.id
AND db_users.db_id = data_bases.id
AND db_users.account_id = accounts.id
ORDER BY domain_name;
      */
      ]}
    },
    {
      psa.db_users: {[
      "id": String,
      "login": Number,
      "account_id": Number,
      "db_id": Number
      ]},
      publication: "Bloomberg",
      imageURL:
        "https://prod.static9.net.au/_/media/2019/09/02/10/36/nine_news_melbourne_1600x900_fullstory_nightly6pm.jpg"
    }
  ];
  res.json(articles);
});

app.get("/socks", (req, res) => {
  let socks = [
    {
      category: "GOOG",
      description: "Google merch shop",
      price: 10.80,
      change: "-0.24"
    },
    {
      symbol: "MSFT",
      description: "Microsoft super soakers",
      price: 6.00,
      change: "+3.45"
    },
    {
      symbol: "FB",
      description: "Facebook Oculus",
      price: 220,
      change: "-1.56"
    },
    {
      symbol: "AMAZON",
      description: "Amazon Everything Store ",
      price: 4.00,
      change: "+6.56"
    }
  ];
  res.json(socks);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
