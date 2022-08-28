import Produk from "../models/produkModel.js";

export const getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.findAll();
    res.json(produk);
  } catch (error) {
    res.json({ msg: error, error });
  }
};

export const getAllProdukById = async (req, res) => {
  try {
    const produk = await Produk.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(produk[0]);
  } catch (error) {
    res.json({ msg: error, error });
  }
};

export const createProduk = async (req, res) => {
  try {
    await Produk.create(req.body);
    res.json({
      Pesan: "Berhasil Menambahkan Produk",
    });
  } catch (error) {
    res.json({ msg: error, error });
  }
};

export const updateProduk = async (req, res) => {
  try {
    await Produk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      Pesan: "Berhasil Merubah Produk",
    });
  } catch (error) {
    res.json({ msg: error, error });
  }
};

export const deleteProduk = async (req, res) => {
  try {
    await Produk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      Pesan: "Berhasil Menghapus Produk",
    });
  } catch (error) {
    res.json({ msg: error, error });
  }
};
