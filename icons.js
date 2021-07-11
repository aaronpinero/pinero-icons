// include fs for reading/writing files
var fs = require('fs');

// include templatejs for parsing template language
var templatesjs = require('templatesjs');

// array that will hold HTML code for each icon example
var iconscode = [];

// some sample data
var rawdata = fs.readFileSync("./source/icons.json");
var iconsdata = JSON.parse(rawdata);
var x = 0;
for (x;x<iconsdata.data.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="pineroicons pineroicons-3x '+iconsdata.data[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-3">'+iconsdata.data[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.data[x].class+'</code></div>\n  </div>\n</div>\n\n';
  iconscode.push(newcode);
}

// pull in the page with the template
var file = fs.readFileSync("./index-temp.html");
templatesjs.setSync(file);
file = templatesjs.renderSync("icons", iconscode);
fs.writeFileSync("./index.html",file);