import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react' 
import Item from './Item'
import ItemSection from './ItemSection'

const ShopDetails = (props) => {
    const { headContainer, headerText, imageStyle, scrollViewContainer, descriptionText, brandText, priceText, discountText, stockText } = styles;

    return (  
        <Item>
            <ItemSection>
                <View style={headContainer}>
                    <Text style={headerText}>{props.product.title}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <ScrollView horizontal={true} style={scrollViewContainer}>
                    {props.product.images.map((image, index) => (
                        <Image key={index} style={imageStyle} source={{ uri: image }} />
                    ))}
                </ScrollView>
            </ItemSection>
            <ItemSection>
                <Text style={brandText}>Brand: {props.product.brand}</Text>
            </ItemSection>
            <ItemSection>
                <Text style={descriptionText}>{props.product.description}</Text> 
            </ItemSection>
            <ItemSection>
                <Text style={priceText}>Price: ${props.product.price}</Text>
            </ItemSection>
            <ItemSection>
                <Text style={discountText}>Discount: {props.product.discountPercentage}%</Text>
            </ItemSection>
            <ItemSection>
                <Text style={stockText}>In Stock: {props.product.stock} available</Text>
            </ItemSection>
        </Item>
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
    },
    brandText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    priceText: {
        fontSize: 16,
        marginBottom: 5,
    },
    discountText: {
        fontSize: 16,
        marginBottom: 5,
    },
    stockText: {
        fontSize: 16,
        marginBottom: 5,
    }
});
