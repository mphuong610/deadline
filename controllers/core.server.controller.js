"user strict";

module.exports = {
  renderTrangChu : renderTrangChu,
  renderSanPham  : renderSanPham,
  renderThuongHieu : renderThuongHieu,
  renderLienHe : renderLienHe
};

function renderTrangChu(req, res) {
  res.render('trangchu');
}

function renderSanPham(req, res) {
  res.render('sanpham');
};

 function renderThuongHieu(req, res) {
  res.render('thuonghieu');
};

function renderLienHe(req, res) {
  res.render('lienhe');
};