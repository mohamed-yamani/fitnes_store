import React from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
// !!! axios !!!
import useAxios from "./hooks/useAxios";
import axios from "./apis/produit";
import Carousel from "./components/HomePage/Carousel/carousel";
import PopularCollections from "./components/HomePage/PopularCollections/PopularCollections";

const App = () => {
  //! fetch api produit
  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    endpoint: "/api/produit/",
  });
  console.log("print products -------------- ");
  console.log(data);
  return (
    <div>
      <Navbar />
      <Carousel />
      <PopularCollections />

      {!loading && !error && data && <Products />}
      {!loading && !error && !data && <div>No data</div>}
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
      <Products />
    </div>
  );
};

export default App;
