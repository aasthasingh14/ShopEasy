import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native'
import React from 'react'  
import ShopItem from './ShopItem'
import ShopItemSection from './ShopItemSection' 
import CustomButton from './CustomButton'

const ShopDetails = (props) => {
    const { headContainer, headerText, imageStyle, scrollViewContainer, descriptionText, brandText, priceText, discountText, stockText } = styles;

    return (  
        <ShopItem>
            <ShopItemSection>
            <View style={headContainer}>
                    <Text style={headerText}>{props.product.title}</Text>
                </View>
            </ShopItemSection>
            <ShopItemSection>
                <ScrollView horizontal={true} style={scrollViewContainer}>
                    {props.product.images.map((image, index) => (
                        <Image key={index} style={imageStyle} source={{ uri: image }} />
                    ))}
                </ScrollView>
            </ShopItemSection>
            <ShopItemSection>
                <Text style={brandText}>Brand: {props.product.brand}</Text>
            </ShopItemSection>
            <ShopItemSection>
                <Text style={descriptionText}>{props.product.description}</Text> 
            </ShopItemSection>
            <ShopItemSection>
                <Text style={priceText}>Price: ${props.product.price}</Text>
            </ShopItemSection>
            <ShopItemSection>
                <Text style={discountText}>Discount: {props.product.discountPercentage}%</Text>
            </ShopItemSection>
            <ShopItemSection>
                <Text style={stockText}>In Stock: {props.product.stock} available</Text>
            </ShopItemSection> 
            <ShopItemSection>
                <CustomButton
                    title="Click Me"
                    onPress={() => Linking.openURL(props.product.thumbnail)}
                /> 
            </ShopItemSection>
        </ShopItem>
             
    )
}

export default ShopDetails

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 50,
        fontWeight: "bold",
        align: "center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: 'black'
    },
    imageStyle: {
        height: 300,
        width: 350,  
        margin: 5,  
        resizeMode: 'cover' 
    },
    scrollViewContainer: {
        marginVertical: 10,
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 10,
        color : 'black'
    },
    brandText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
        color : 'black'
    },
    priceText: {
        fontSize: 16,
        marginBottom: 5,
        color : 'black'
    },
    discountText: {
        fontSize: 16,
        marginBottom: 5,
        color : 'black'
    },
    stockText: {
        fontSize: 16,
        marginBottom: 5,
        color : 'black'
    }
});
