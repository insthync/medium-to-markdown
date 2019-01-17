'use strict';

const Promise = require('bluebird');
const request = require('request');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const converters = require('./mdConverters');
const turndownService = new TurndownService({ gfm: true, converters: converters });

function convertFromUrl(url) {
  return new Promise(function(resolve, reject) {
    request({
      uri: url,
      method: 'GET'
    }, function (err, httpResponse, body) {

      if (err)
        return reject(err);

      let $ = cheerio.load(body);
      $('.postArticle-content .uiScale').remove();
      let html = $('.postArticle-content').html() || '';
      let markdown = turndownService.turndown(html);

      resolve(markdown);

    });
  });
}

module.exports = convertFromUrl;
