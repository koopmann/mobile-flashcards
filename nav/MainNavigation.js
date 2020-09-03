import FooterNav from "./FooterNav";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Deck from "../components/Deck";
import Quiz from "../components/Quiz";
import AddNewQuestion from "../components/AddNewQuestion";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={FooterNav}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="deck"
                    component={Deck}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="quiz"
                    component={Quiz}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="addcard"
                    component={AddNewQuestion}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
