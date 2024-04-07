//Styled component for List Items
import React from "react";
import { View } from 'react-native'

const ShopItemSection = props => {
  return <View style={styles.viewStyle}>{props.children}</View>   
}

const styles ={
  viewStyle: {
    borderBottomWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor : 'white'  
  }
}
export default ShopItemSection