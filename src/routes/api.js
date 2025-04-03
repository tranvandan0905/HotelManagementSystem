const express = require("express");
const routerAPI = express.Router();
const { getAllDatLichController, getDatLichByIdController, createDatLichController, updateDatLichController, deleteDatLichController } = require('../controllers/DatLichController'); // Đảm bảo đúng đường dẫn tới controller
const { getAllNhanvienController, createNhanvienController, updateNhanvienController, deleteNhanvienController } = require('../controllers/NhanVienController');
const { getAllPhongController, getPhongByIdController, createPhongController, updatePhongController, deletePhongController } = require('../controllers/PhongController');
const { getViTriController, getViTriByIdController, createViTriController, updateViTriController, deleteViTriController } = require('../controllers/ViTriController');
const { getTienIchPhongController, getTienIchPhongByIdController, createTienIchPhongController, updateTienIchPhongController, deleteTienIchPhongController } = require('../controllers/TienIchPhongController');
const { getAllChiNhanhController, getChiNhanhByIdController, createChiNhanhController, updateChiNhanhController, deleteChiNhanhController } = require('../controllers/ChiNhanhController');
const { getAllHoaDonController, getHoaDonByIdController, createHoaDonController, updateHoaDonController, deleteHoaDonController } = require("../controllers/HoaDonController");
const { saveImageController, deleteImageController, updateImageController } = require('../controllers/imageController');
const { register, login } = require("../controllers/AuthController");
const { addTienIchToPhong,removeTienIchFromPhong } = require("../controllers/TienIch_PhongController");
// Các route API
// Nhan Vien  

routerAPI.get('/nhanvien', getAllNhanvienController);
routerAPI.post('/nhanvien', createNhanvienController);
routerAPI.put('/nhanvien/:id', updateNhanvienController);
routerAPI.delete('/nhanvien/:id', deleteNhanvienController);
//Phong 
routerAPI.get("/phongs", getAllPhongController);
routerAPI.get("/phongs/:id", getPhongByIdController);
routerAPI.post("/phongs", createPhongController);
routerAPI.put("/phongs/:id", updatePhongController);
routerAPI.delete("/phongs/:id", deletePhongController);
//Dat Lich
routerAPI.get("/datlich", getAllDatLichController);
routerAPI.get("/datlich/:id", getDatLichByIdController);
routerAPI.post("/datlich", createDatLichController);
routerAPI.put("/datlich/:id", updateDatLichController);
routerAPI.delete("/datlich/:id", deleteDatLichController);
// Vi Tri 
routerAPI.get("/vitri", getViTriController);
routerAPI.get("/vitri/:id", getViTriByIdController);
routerAPI.post("/vitri", createViTriController);
routerAPI.put("/vitri/:id", updateViTriController);
routerAPI.delete("/vitri/:id", deleteViTriController);
//Tien Ich Phong
routerAPI.get("/tienichphong", getTienIchPhongController);
routerAPI.get("/tienichphong/:id", getTienIchPhongByIdController);
routerAPI.post("/tienichphong", createTienIchPhongController);
routerAPI.put("/tienichphong/:id", updateTienIchPhongController);
routerAPI.delete("/tienichphong/:id", deleteTienIchPhongController);
//Chi Nhanh 
routerAPI.get("/chinhanh", getAllChiNhanhController);
routerAPI.get("/chinhanh/:id", getChiNhanhByIdController);
routerAPI.post("/chinhanh", createChiNhanhController);
routerAPI.put("/chinhanh/:id", updateChiNhanhController);
routerAPI.delete("/chinhanh/:id", deleteChiNhanhController);
// Hoa Don 
routerAPI.get("/hoadon", getAllHoaDonController);
routerAPI.get("/hoadon/:id", getHoaDonByIdController);
routerAPI.post("/hoadon", createHoaDonController);
routerAPI.put("/hoadon/:id", updateHoaDonController);
routerAPI.delete("/hoadon/:id", deleteHoaDonController);
//Auth
routerAPI.post("/register", register);
routerAPI.post("/login", login);
//img
routerAPI.post('/save', saveImageController);
routerAPI.delete('/delete/:imageName', deleteImageController);
routerAPI.put('/update/:imageName', updateImageController);
//TienIchToPhong 
routerAPI.post('/TienIchToPhong', addTienIchToPhong);
routerAPI.delete('/TienIchToPhong', removeTienIchFromPhong);
module.exports = routerAPI;
