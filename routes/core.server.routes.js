"user strict";

const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderTrangChu);
  app.route('/sanpham.ejs').get(coreCtrl.renderSanPham);
  app.route('/thuonghieu.ejs').get(coreCtrl.renderThuongHieu);
  app.route('/lienhe.ejs').get(coreCtrl.renderLienHe);
};