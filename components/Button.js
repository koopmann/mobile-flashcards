import {TouchableOpacity, Text} from "react-native";
import React from "react";
import {globalStyle as styles} from "../general/global-styles";

const Button = ({
                    onPress,
                    title,
                    disabled = false,
                    type = "primary",
                }) => {
    const buttonStyle =
        type === "primary" ? styles.primaryCTA : styles.secondaryCTA;
    const buttonTextStyle =
        type === "primary" ? styles.primaryCTAText : styles.secondaryCTAText;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={disabled ? styles.disabledCTA : buttonStyle}
        >
            <Text style={disabled ? styles.disabledCTAText : buttonTextStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};


export default Button;
