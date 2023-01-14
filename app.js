const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const router = express.Router();

router.get('/scrape', (req, res) => {
  let url = req.query.url;

  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      let $ = cheerio.load(html);
      let products = [];

      $('.product').each((i, element) => {
        let name = $(element).find('.name').text();
        let price = $(element).find('.price').text();

        products.push({
          name: name,
          price: price
        });
      });
      res.json({
        url: url,
        products: products
      });
    } else {
      res.status(500).send('Error al obtener datos de la web');
    }
  });
});

module.exports = router;
