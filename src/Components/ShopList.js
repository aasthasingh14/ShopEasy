import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from "axios";
import ShopDetails from "./ShopDetails";

const ShopList = () => {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/aasthasingh14/shopNow/products")
      .then((response) => {
        setShopList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const renderList = () => {
    return shopList.map((product, index) => {
      return <ShopDetails key={index} product={product} />;
    });
  };

  return (
    <ScrollView>
      {renderList()}
    </ScrollView>
  );
};

export default ShopList;
