const {
    getViTri,
    getViTriById,
    createViTri,
    updateViTri,
    deleteViTri,
  } = require("../services/ViTriServices");

  const getViTriController = async (req, res) => {
    try {
      const viTri = await getViTri();
      res.status(200).json(viTri);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const getViTriByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const viTri = await getViTriById(id);
      res.status(200).json(viTri);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const createViTriController = async (req, res) => {
    const { tenViTri } = req.body;
    try {
      const newViTri = await createViTri(tenViTri);
      res.status(201).json(newViTri);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const updateViTriController = async (req, res) => {
    const { id } = req.params;
    const { tenViTri } = req.body;
    try {
      const updatedViTri = await updateViTri(id, tenViTri);
      res.status(200).json(updatedViTri);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const deleteViTriController = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await deleteViTri(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    getViTriController,
    getViTriByIdController,
    createViTriController,
    updateViTriController,
    deleteViTriController,
  };
  