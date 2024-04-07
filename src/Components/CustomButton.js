import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class CustomButton extends Component {
    render() {
        const { onPress } = this.props;
        return ( 
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>Click Here</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default CustomButton;
