"use client";
import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");
  const [alamat,setAlamat] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nama :',name)
    console.log('Alamat :',alamat)
    setName("");
    setAlamat(""); 
};

  return (
    <div>
      <h1>Form Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
