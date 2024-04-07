import React, { Component } from "react";
import { Text,Button } from "react-native";

class Button extends Component {
    render() {
        const { onPress } = this.props;
        return ( 
            <Button onPress={onPress} style={styles.button}>
                <Text style={styles.text}>Click Here</Text>
            </Button>
        );
    }
}

const styles = {
    button: {
        backgroundColor: "#007aff",
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
};

export default Button;
