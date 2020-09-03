import {surface, primary, textPrimary} from "../general/color_values";
import {FontAwesome5, AntDesign} from '@expo/vector-icons';
import React from "react";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../components/Home';
import AddNewDeck from "../components/AddNewDeck";


const Tab = createMaterialBottomTabNavigator();

export default function FooterNav() {
    return (
        <Tab.Navigator
            activeColor={primary}
            inactiveColor={textPrimary}
            barStyle={{backgroundColor: surface}}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: "Home (Deck List)",
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="home" color={color} size={24}/>
                    ),
                }}
                name="decklist"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: "Add New Deck",
                    tabBarIcon: ({color}) => (
                        <AntDesign name="pluscircle" color={color} size={24}/>
                    ),
                }}
                name="adddeck"
                component={AddNewDeck}
            />
        </Tab.Navigator>
    );
}
