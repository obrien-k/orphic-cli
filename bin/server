// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.get("/top-news", (req, res) => {
  let articles = [
    {
      title: "The Bull Market is Charging into 2020",
      publication: "THE WALSTREET JOURNAL",
      imageURL: "https://i.ytimg.com/vi/gtkiRJwSN10/maxresdefault.jpg"
    },
    {
      title: "Tencent Groups 10% of Univercal Music",
      publication: "Bloomberg",
      imageURL:
        "https://prod.static9.net.au/_/media/2019/09/02/10/36/nine_news_melbourne_1600x900_fullstory_nightly6pm.jpg"
    }
  ];
  res.json(articles);
});

app.get("/stocks", (req, res) => {
  let stocks = [
    {
      symbol: "GOOG",
      description: "Google Innovation Media",
      price: 1080,
      change: "-0.24"
    },
    {
      symbol: "MSFT",
      description: "Microsoft Cooporation",
      price: 60,
      change: "+3.45"
    },
    {
      symbol: "FB",
      description: "Facebook Social Media",
      price: 220,
      change: "-1.56"
    },
    {
      symbol: "AMAZON",
      description: "Amazon Everything Store ",
      price: 400,
      change: "+6.56"
    }
  ];
  res.json(stocks);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
