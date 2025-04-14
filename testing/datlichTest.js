const express = require("express");
const { body } = require("express-validator");
const {
  getAllDatLichController,
  getDatLichByIdController,
  createDatLichController,
  updateDatLichController,
  deleteDatLichController,
} = require("../src/controllers/DatLichController");

const router = express.Router();

router.get("/", getAllDatLichController);
router.get("/:id", getDatLichByIdController);
router.post(
  "/",
  [
    body("HoTen").notEmpty().withMessage("HoTen không được để trống"),
    body("SDT")
      .isMobilePhone("vi-VN")
      .withMessage("Số điện thoại không hợp lệ"),
    body("email").isEmail().withMessage("Email không hợp lệ"),
    body("NgayNhan").isISO8601().withMessage("Ngày nhận không hợp lệ"),
    body("NgayTra").isISO8601().withMessage("Ngày trả không hợp lệ"),
    body("SoNguoi").isInt({ min: 1 }).withMessage("Số người phải >= 1"),
    body("TongTien").isNumeric().withMessage("Tổng tiền phải là số"),
    body("id_phong").notEmpty().withMessage("ID phòng là bắt buộc"),
    body("Check")
      .optional()
      .isBoolean()
      .withMessage("Check phải là true/false"),
  ],
  createDatLichController
);
router.put("/:id", updateDatLichController);
router.delete("/:id", deleteDatLichController);

module.exports = router;
