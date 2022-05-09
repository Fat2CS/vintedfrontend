import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");

  const [condition, setcondition] = useState("");
  const [city, setcity] = useState("");
  const [brand, setbrand] = useState("");
  const [size, setsize] = useState("");
  const [color, setcolor] = useState("");

  const [picture, setPicture] = useState(null);
  const [data, setData] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false);

  const formData = new FormData();
  formData.append("title", "title");
  formData.append("description", "description");
  formData.append("price", "price");
  formData.append("condition", "condition");
  formData.append("city", "city");
  formData.append("brand", "brand");
  formData.append("size", "size");
  formData.append("color", "color");
  formData.append("picture", "picture");

  const handleSendPicture = async (event) => {
    event.preventDefault();
    setIsPictureSending(true);

    // formData.append();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,

      {
        headers: {
          authorization: `Bearer ${"token"}`
        }
      },

      setData(response.data),
      setIsPictureSending(false),
      console.log(response.data)
    );
  };

  return (
    <div className="App">
      <h2>Vends ton article </h2>
      <form onSubmit={handleSendPicture}>
        <input type="file" />
        <h3>Titre</h3>
        <input
          valeur={title}
          type="text"
          placholder="ex: Chemise"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <h3>Décris ton article</h3>
        <input
          valeur={description}
          type="text"
          placeholder="ex: porté quelquesfois, taille "
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        />
        <h3>Marque</h3>
        <input
          valeur={brand}
          type="text"
          placeholder="ex:Zara"
          onChange={(event) => {
            setbrand(event.target.value);
          }}
        />

        <h3>Taille</h3>
        <input
          valeur={size}
          type="text"
          placeholder="ex:L/40/12"
          onChange={(event) => {
            setsize(event.target.value);
          }}
        />
        <h3>Couleur</h3>
        <input
          valeur={color}
          type="text"
          onChange={(event) => {
            setcolor(event.target.value);
          }}
        />

        <h3>Etat</h3>
        <input
          valeur={condition}
          type="text"
          placeholder="ex: porté quelquesfois, taille "
          onChange={(event) => {
            setcondition(event.target.value);
          }}
        />
        <h3>Lieu</h3>
        <input
          valeur={city}
          type="text"
          placeholder="ex: porté quelquesfois, taille "
          onChange={(event) => {
            setcity(event.target.value);
          }}
        />
        <h3>Prix</h3>
        <input
          valeur={price}
          type="text"
          placeholder="ex: porté quelquesfois, taille "
          onChange={(event) => {
            setprice(event.target.value);
          }}
        />

        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default Publish;
