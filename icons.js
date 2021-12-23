// include fs for reading/writing files
var fs = require('fs');

// include templatejs for parsing template language
var templatesjs = require('templatesjs');

// array that will hold HTML code for each icon example
var icons_regular_code = [];
var icons_light_code = [];
var icons_bold_code = [];
var icons_fa_code = [];

// some sample data
var rawdata = fs.readFileSync("./source/icons.json");
var iconsdata = JSON.parse(rawdata);
var x = 0;
for (x;x<iconsdata.regular.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="fs-3 '+iconsdata.regular[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-2 text-muted">'+iconsdata.regular[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '</div>\n</div>\n\n';
  // newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.regular[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_regular_code.push(newcode);
}
for (x=0;x<iconsdata.light.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="fs-3 '+iconsdata.light[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-2 text-muted">'+iconsdata.light[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '</div>\n</div>\n\n';
  // newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.light[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_light_code.push(newcode);
}
for (x=0;x<iconsdata.bold.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="fs-3 '+iconsdata.bold[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-2 text-muted">'+iconsdata.bold[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '</div>\n</div>\n\n';
  // newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.bold[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_bold_code.push(newcode);
}
for (x=0;x<iconsdata.fa.length;x++) {
  var newcode = '<!-- ICON CARD -->\n';
  newcode += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">\n  <div class="card">\n';
  newcode += '    <div class="card-body text-center">\n';
  newcode += '      <div><span class="fs-3 '+iconsdata.fa[x].class+'"></span></div>\n';
  newcode += '      <div class="mt-2 text-muted">'+iconsdata.fa[x].name+'</div>\n';
  newcode += '    </div>\n';
  newcode += '</div>\n</div>\n\n';
  // newcode += '    <div class="card-footer text-center"><code>.'+iconsdata.bold[x].class+'</code></div>\n  </div>\n</div>\n\n';
  icons_fa_code.push(newcode);
}

// pull in the page with the template
var file = fs.readFileSync("./index-temp.html");
templatesjs.setSync(file);
file = templatesjs.renderSync("icons_regular", icons_regular_code);
file = templatesjs.renderSync("icons_light", icons_light_code);
file = templatesjs.renderSync("icons_bold", icons_bold_code);
file = templatesjs.renderSync("icons_fa", icons_fa_code);
fs.writeFileSync("./index.html",file);