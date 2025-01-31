"use client";

import { useEffect, useState } from "react";
import styles from "../styles/penjualan.module.css";

interface Penjualan {
  id: number;
  nama: string;
  jumlah: number;
  harga: number;
}

export default function Penjualan() {
  const [dataPenjualan, setDataPenjualan] = useState<Penjualan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPenjualan = async () => {
      try {
        const response = await fetch("/data/penjualan.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDataPenjualan(data);
      } catch (error) {
        setError("Gagal mengambil data penjualan.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPenjualan();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Daftar Penjualan</h1>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && dataPenjualan.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {dataPenjualan.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.jumlah}</td>
                <td>{item.harga.toLocaleString()}</td>
                <td>{(item.jumlah * item.harga).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>Data penjualan kosong.</p>
      )}

      <footer className={styles.footer}>
        <p>© 2024 Halaman Penjualan. All rights reserved.</p>
      </footer>
    </div>
  );
}
