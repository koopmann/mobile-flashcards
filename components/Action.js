import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {surface} from "../general/color_values";
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function Action({iconName, title, onPressed, color}) {
    return (
        <TouchableOpacity onPress={onPressed} style={styles(color).quickActionItem}>
            <MaterialCommunityIcons name={iconName} size={24} color={color}/>
            <Text style={styles(color).title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = (color) =>
    StyleSheet.create({
        quickActionItem: {
            backgroundColor: surface,
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        title_action: {
            color: color,
            fontSize: 18,
            marginLeft: 10,
        },
    });
