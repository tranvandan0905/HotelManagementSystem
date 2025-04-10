const NhanVien = require("../models/NhanVien");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerNhanVien = async (data) => {
  const {
    HoTen,
    SDT,
    CCCD,
    GioiTinh,
    Email,
    Password,
    Luong,
    id_chiNhanh,
    id_viTri,
  } = data;
  const existingNhanVien = await NhanVien.findOne({ where: { Email } });
  if (existingNhanVien) {
    throw new Error("Email đã tồn tại");
  }
  const hashedPassword = await bcrypt.hash(Password, 10);

  const newNhanVien = await NhanVien.create({
    HoTen,
    SDT,
    CCCD,
    GioiTinh,
    Email,
    Password: hashedPassword,
    Luong,
    id_chiNhanh,
    id_viTri,
  });

  return {
    id: newNhanVien.id,
    HoTen: newNhanVien.HoTen,
    Email: newNhanVien.Email,
  };
};

const loginNhanVien = async (data) => {
  const { Email, Password } = data;
  const nhanVien = await NhanVien.findOne({ where: { Email } });
  if (!nhanVien) {
    throw new Error("Email không tồn tại");
  }
  const isPasswordValid = await bcrypt.compare(Password, nhanVien.Password);
  console.log("isPasswordValid", isPasswordValid);
  console.log("nhanVien.Password", nhanVien.Password);

  if (!isPasswordValid) {
    throw new Error("Mật khẩu không đúng");
  }

  // 🔥 Thay đoạn này để so sánh password trực tiếp (test mode)
  //  ? if (Password !== nhanVien.Password) {
  //     throw new Error("Mật khẩu không đúng");
  //   }
  const payload = {
    id: nhanVien.id,
    Email: nhanVien.Email,
    HoTen: nhanVien.HoTen,
    Role: nhanVien.Role,
  };
  const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });

  return {
    token,
    user: {
      id: nhanVien.id,
      Email: nhanVien.Email,
      HoTen: nhanVien.HoTen,
      Role: nhanVien.Role,
    },
  };
};

module.exports = {
  registerNhanVien,
  loginNhanVien,
};
