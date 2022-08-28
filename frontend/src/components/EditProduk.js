import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduk = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    tampilProduk();
  }, []);

  const tampilProduk = async () => {
    const response = await axios.get(
      `http://localhost:5000/daftarproduks/${id}`
    );
    setNama(response.data.nama);
    setHarga(response.data.harga);
    setStok(response.data.stok);
  };

  const editProduk = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/daftarproduks/${id}`, {
      nama: nama,
      harga: harga,
      stok: stok,
    });
    history("/");
  };
  return (
    <div>
      <h1>Edit Produk</h1>
      <Container>
        <Form onSubmit={editProduk}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Produk"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Harga Produk"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stok Produk</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Stok Produk"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditProduk;
