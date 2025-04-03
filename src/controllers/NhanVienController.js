const {
  getAllNhanvien,
  createNhanvien,
  updateNhanvien,
  deleteNhanvien,
} = require("../services/NhanVienServices");
const getAllNhanvienController = async (req, res) => {
  try {
    const nhanViens = await getAllNhanvien();
    res.json(nhanViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNhanvienController = async (req, res) => {
  const { HoTen, SDT, CCCD, GioiTinh, Email, Password, Luong, id_chinhanh, id_vitri } = req.body;
  console.log(req.body)
  try {
    const newNhanVien = await createNhanvien(HoTen, SDT, CCCD, GioiTinh, Email, Password, Luong, id_chinhanh, id_vitri);
    res.status(201).json({ message: "Thêm nhân viên thành công", nhanVien: newNhanVien });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateNhanvienController = async (req, res) => {
  const { id } = req.params;
  const { HoTen, SDT, CCCD, GioiTinh, Email, Password, Luong, id_chiNhanh, id_viTri } = req.body;
  try {
    const updatedNhanVien = await updateNhanvien(id, HoTen, SDT, CCCD, GioiTinh, Email, Password, Luong, id_chiNhanh, id_viTri);
    res.json({ message: "Cập nhật nhân viên thành công", nhanVien: updatedNhanVien });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteNhanvienController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteNhanvien(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNhanvienController,
  createNhanvienController,
  updateNhanvienController,
  deleteNhanvienController,
};
