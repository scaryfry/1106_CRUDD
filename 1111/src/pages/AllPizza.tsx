import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((Response) => setPizzak(Response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Név</th>
          <th>Leírás</th>
          <th>Ár</th>
          <th>Kép</th>
          <th>Megtekintés</th>
        </tr>
      </thead>
      <tbody>
      {pizzak.map((p) => (
        <tr key={p.id}>
        <td>{p.nev}</td>
        <td>{p.leiras}</td>
        <td>{p.ar}</td>
        <td>
          <img src={`${baseURL}/kepek/${p.imageUrl}`} width={100}/></td>
        <td><button onClick={() => navigate(`/pizza/${p.id}`)}>Megtekintés</button></td>
        </tr>
      ))}
      </tbody>
      </table>
    </>
  );
};

export default AllPizza;
