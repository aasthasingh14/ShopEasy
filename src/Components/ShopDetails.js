 import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 

const ShopDetails = (props) => {
    const {headContainer,headerText,imageStyle} = styles
  return ( 
    <View style={headContainer}>
        <Text style={headerText}>{props.product.title}</Text>
    </View>
        
  )
}

export default ShopDetails

styles = {
    headContainer : {
        flexDirection : "column",
        justifyContent : "center",
        fontSize : 50,
        fontWeight : "bold",
        align : "center"
    },
    headerText : {
        fontSize : 20,
        fontWeight : "bold",
        textTransform : "uppercase"
    },
    imageStyle :{
        height : 300,
        flex : 1,
        width : 0
    }
}