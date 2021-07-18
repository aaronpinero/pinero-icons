// include fs for reading/writing files
var fs = require('fs');

// include templatejs for parsing template language
var templatesjs = require('templatesjs');

// array that will hold HTML code for each icon example
var icons_regular_code = [];
var icons_thin_code = [];

// some sample data
var rawdata = fs.readFileSync("./source/icons.json");
var iconsdata = JSON.parse(rawdata);
var x = 0;
for (x;x<iconsdata.regular.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="picons picons-3x '+iconsdata.regular[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-3">'+iconsdata.regular[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.regular[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_regular_code.push(newcode);
}
for (x=0;x<iconsdata.thin.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="picons picons-3x '+iconsdata.thin[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-3">'+iconsdata.thin[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.thin[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_thin_code.push(newcode);
}

// pull in the page with the template
var file = fs.readFileSync("./index-temp.html");
templatesjs.setSync(file);
file = templatesjs.renderSync("icons_regular", icons_regular_code);
file = templatesjs.renderSync("icons_thin", icons_thin_code);
fs.writeFileSync("./index.html",file);