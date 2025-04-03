const  ViTri  = require("../models/ViTri");

const getViTri = async () => {
  try {
    return await ViTri.findAll();
  } catch (error) {
    throw new Error("Error fetching positions");
  }
};

const getViTriById = async (id) => {
  try {
    const viTri = await ViTri.findOne({ where: { id } });
    if (!viTri) {
      throw new Error("Position not found");
    }
    return viTri;
  } catch (error) {
    throw new Error("Error fetching position");
  }
};

const createViTri = async (tenViTri) => {
  try {
    const viTri = await ViTri.create({ tenViTri });
    return viTri;
  } catch (error) {
    throw new Error("Error creating position");
  }
};

const updateViTri = async (id, tenViTri) => {
  try {
    const viTri = await ViTri.findOne({ where: { id } });
    if (!viTri) {
      throw new Error("Position not found");
    }

    viTri.tenViTri = tenViTri || viTri.tenViTri;
    await viTri.save();

    return viTri;
  } catch (error) {
    throw new Error("Error updating position");
  }
};

const deleteViTri = async (id) => {
  try {
    const viTri = await ViTri.findOne({ where: { id } });
    if (!viTri) {
      throw new Error("Position not found");
    }

    await viTri.destroy();
    return { message: "Position deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting position");
  }
};

module.exports = {
  getViTri,
  getViTriById,
  createViTri,
  updateViTri,
  deleteViTri,
};
