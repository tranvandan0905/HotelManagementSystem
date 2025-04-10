const NhanVien = require("../models/NhanVien");
const bcrypt = require("bcrypt");

const getAllNhanvien = async () => {
  try {
    return await NhanVien.findAll();
  } catch (error) {
    throw new Error("Lỗi lấy danh sách nhân viên");
  }
};

const createNhanvien = async (
  HoTen,
  SDT,
  CCCD,
  GioiTinh,
  Email,
  Password,
  Luong,
  Role,
  id_chinhanh
) => {
  try {
    if (!id_chinhanh) {
      throw new Error("Lỗi: id_chinhanh không được để trống!");
    }

    const luong = parseFloat(Luong);
    const role = String(Role);

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newNhanVien = await NhanVien.create({
      HoTen,
      SDT,
      CCCD,
      GioiTinh,
      Email,
      Password: hashedPassword,
      Luong: luong, // Lưu 'Luong' với kiểu dữ liệu đúng
      Role: role, // Lưu 'Role' với kiểu dữ liệu đúng
      id_chinhanh,
    });
    return newNhanVien;
  } catch (error) {
    console.error("Lỗi khi thêm nhân viên:", error);
    throw new Error("Lỗi thêm nhân viên");
  }
};

// file gốc anh mới clone về à sao khác nhiều vậy triwif
// a clone cái mới của e về

const updateNhanvien = async (
  id,
  HoTen,
  SDT,
  CCCD,
  GioiTinh,
  Email,
  Password,
  Luong,
  Role,
  id_chiNhanh
) => {
  try {
    const nhanVien = await NhanVien.findByPk(id);
    if (!nhanVien) {
    }

    let hashedPassword = nhanVien.Password;
    if (Password) {
      hashedPassword = await bcrypt.hash(Password, 10);
    }

    await nhanVien.update({
      HoTen,
      SDT,
      CCCD,
      GioiTinh,
      Email,
      Password: hashedPassword,
      Luong,
      Role,
      id_chiNhanh,
    });

    return nhanVien;
  } catch (error) {
    throw new Error("Lỗi cập nhật nhân viên");
  }
};

const deleteNhanvien = async (id) => {
  try {
    const nhanVien = await NhanVien.findByPk(id);
    if (!nhanVien) {
      throw new Error("Nhân viên không tồn tại");
    }

    await nhanVien.destroy();
    return { message: "Xóa nhân viên thành công" };
  } catch (error) {
    throw new Error("Lỗi xóa nhân viên");
  }
};

module.exports = {
  getAllNhanvien,
  createNhanvien,
  updateNhanvien,
  deleteNhanvien,
};
