const {
  getAllNhanvien,
  createNhanvien,
  updateNhanvien,
  deleteNhanvien,
} = require("../services/NhanVienServices");
const NhanVien = require("../models/NhanVien");
const bcrypt = require("bcrypt");
const getAllNhanvienController = async (req, res) => {
  try {
    const nhanViens = await getAllNhanvien();
    res.json(nhanViens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNhanvienController = async (req, res) => {
  const {
    HoTen,
    SDT,
    CCCD,
    GioiTinh,
    Email,
    Password,
    Luong,
    Role,
    id_chinhanh,
  } = req.body;

  const existingNhanVien = await NhanVien.findOne({ where: { Email } });
  if (existingNhanVien) {
    return res.status(400).json({ message: "Email đã tồn tại" });
  }

  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newNhanVien = await NhanVien.create({
      HoTen,
      SDT,
      CCCD,
      GioiTinh,
      Email,
      Password: hashedPassword,
      Luong,
      Role,
      id_chinhanh,
    });

    // Gửi phản hồi khi thêm nhân viên thành công
    res.status(201).json({
      message: "Thêm nhân viên thành công",
      nhanVien: newNhanVien,
    });
  } catch (error) {
    // Xử lý lỗi
    res.status(500).json({ message: error.message });
  }
};
// cái khúc them này có bị lỗi k chia ra services
const updateNhanvienController = async (req, res) => {
  const { id } = req.params;
  const {
    HoTen,
    SDT,
    CCCD,
    GioiTinh,
    Email,
    Password,
    Luong,
    Role,
    id_chiNhanh,
    id_viTri,
  } = req.body;
  try {
    const updatedNhanVien = await updateNhanvien(
      id,
      HoTen,
      SDT,
      CCCD,
      GioiTinh,
      Email,
      Password,
      Role,
      Luong,
      id_chiNhanh
    );
    res.json({
      message: "Cập nhật nhân viên thành công",
      nhanVien: updatedNhanVien,
    });
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
