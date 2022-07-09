import React from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
// !!! axios !!!
import useAxios from "./hooks/useAxios";
import axios from "./apis/produit";
import Carousel from "./components/HomePage/Carousel/carousel";
import PopularCollections from "./components/HomePage/PopularCollections/PopularCollections";

export type ProduitModel = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultModel[];
};

export type ResultModel = {
  id: number;
  nom: string;
  ordre: any;
  photo_principal: string;
  prix: number;
  nombre_couleurs: number;
  couleurs: CouleurModel[];
  categorie: number;
  promotion: any;
  is_new: boolean;
  favoris: boolean;
  longeur_par_largeur: number;
  nombre_photo_carroussel: number;
};

export type CouleurModel = {
  id: number;
  code: string;
  nom: string;
};

const App = () => {
  //! fetch api produit
  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    endpoint: "/api/produit/",
  });
  const CastedProduitData = data as unknown as ProduitModel;
  const castedResults = CastedProduitData.results as ResultModel[];

  console.log("print products -------------- ");
  console.log(data);
  return (
    <div>
      <Navbar />
      <Carousel />
      <PopularCollections />

      {!loading && !error && data && (
        <div>
          <img src={castedResults[0].photo_principal} alt="product" />
          <Products />
        </div>
      )}
      {!loading && !error && !data && <div>No data</div>}
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
