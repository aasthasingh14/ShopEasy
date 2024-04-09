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





// //step 1 : import libaries

// import { Component } from "react";
// import React from "react";
// import { ScrollView, Text, View } from "react-native";
// import axios from "axios"; 
// import ShopDetails from "./ShopDetails";
// //step 2 : create component 

// //class component
// class ShopList extends Component{

//     state = {shopList:[]}

//     componentDidMount() {
//         // console.log("Called from cdm")
//         axios.get('https://my-json-server.typicode.com/aasthasingh14/shopNow/products')
//         .then((response)=>{
//             this.setState({shopList:response.data})
//         })
//     }
    
//     renderList = () => {
//         return this.state.shopList.map((product, index) => {
//             return <ShopDetails key={index} product={product} />;
//         });
//     }
    

//     render(){
//         console.log(this.state)
//         return (
//             // <View> {this.renderList()} </View>
//             <ScrollView>{this.renderList()}</ScrollView>
//         ) 
//     }
// }

// //step 3:  make component available to other component

// export default ShopList
