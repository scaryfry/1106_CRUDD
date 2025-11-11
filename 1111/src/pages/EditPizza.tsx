import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditPizza = () => {
  const {id} = useParams();
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    apiClient.get(`/pizzak/${id}`).then((response) => {
        setNev(response.data.nev ?? "")
        setLeiras(response.data.leiras ?? "")
        setAr(response.data.ar ?? 0)
        setImageUrl(response.data.imageUrl ?? "")
    })
  })
  
  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };

    apiClient
      .post("/pizzak", p)
      .then(() => toast.success("Sikeres hozzáadás!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <>
      <h1>Név:</h1>
      <input type="text" value={nev} onChange={(e) => setNev(e.target.value)} />

      <h1>Leírás</h1>
      <input type="text" value = {leiras} onChange={(e) => setLeiras(e.target.value)} />

      <h1>Ár</h1>
      <input type="number" value={ar} onChange={(e) => setAr(Number(e.target.value))} />

      <h1>setImageUrl</h1>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <br />
      <button onClick={submit}>Hozzáadás</button>
    </>
  );
};

export default EditPizza;
