import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../asset/publish.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("ddd");
  const [description, setdescription] = useState("dvddv");
  const [price, setprice] = useState("45");

  const [condition, setcondition] = useState("vddv");
  const [city, setcity] = useState("ff");
  const [brand, setbrand] = useState("ff");
  const [size, setsize] = useState("ff");
  const [color, setcolor] = useState("ff");
  const [changed, setChanged] = useState();

  const [picture, setPicture] = useState(null);
  const [data, setData] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false);

  const handleSendPicture = async (event) => {
    event.preventDefault();
    setIsPictureSending(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      // formData.append();
      console.log(userToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`
          }
        }
      );
      setData(response.data);
      setIsPictureSending(false);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
      setIsPictureSending(false);
    }
  };

  return (
    <>
      {userToken ? (
        <section className="sectionpublish">
          <div className="container">
            <div className="pubcontainer">
              <h2>Vends ton article </h2>
              <form className="inputform" onSubmit={handleSendPicture}>
                <div className="filecontainer">
                  <label htmlFor="file">
                    <FontAwesomeIcon icon="fa-solid fa-plus" size="4x" />{" "}
                    Ajouter une photo
                  </label>
                  <input
                    className="filesup"
                    id="file"
                    type="file"
                    onChange={(event) => {
                      setPicture(event.target.files[0]);
                    }}
                  />
                </div>
                <div className="title">
                  <h3>Titre</h3>
                  <input
                    valeur={title}
                    type="text"
                    placholder="ex: Chemise"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>{" "}
                <div className="describ">
                  <h3>Décris ton article</h3>
                  <input
                    valeur={description}
                    type="text"
                    placeholder="ex: porté quelquesfois, taille "
                    onChange={(event) => {
                      setdescription(event.target.value);
                    }}
                  />
                </div>
                <div className="block2">
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
                </div>
                <div className="priceBlock">
                  <h3>Prix</h3>
                  <input
                    valeur={price}
                    type="text"
                    placeholder="ex: porté quelquesfois, taille "
                    onChange={(event) => {
                      setprice(event.target.value);
                    }}
                  />
                  <div className="changeText">
                    <input
                      className="checkbox2"
                      type="checkbox"
                      onClick={() => {
                        setChanged(!changed);
                      }}
                    />
                    <span>Je suis interressé(e) par les échanges </span>
                  </div>
                </div>
                <div className="ajout">
                  <input type="submit" value="Ajouter" />
                </div>
              </form>

              {isPictureSending === true ? (
                <div>Image en cours d'upload</div>
              ) : (
                data && (
                  <img
                    src={data.secure_url}
                    style={{ width: "200px" }}
                    alt=""
                  />
                )
              )}
            </div>
          </div>
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Publish;
