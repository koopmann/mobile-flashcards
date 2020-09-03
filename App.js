import React, {Component} from "react";
import {View, Dimensions, StatusBar} from "react-native";
import {createLocalNotification} from "./general/messages";
import store from "./redux/rxstore"
import {primary} from "./general/color_values";
import {Provider} from "react-redux";
import Constants from "expo-constants";
import MainNavigation from "./nav/MainNavigation";

export default class App extends Component {

    componentDidMount() {
        createLocalNotification();
    }


    render() {
        return (
            <Provider store={store}>
                <View
                    style={{
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                    }}
                >
                    <View style={{height: Constants.statusBarHeight}}>
                        <StatusBar translucent backgroundColor={primary} barStyle="dark-content"/>
                    </View>
                    <MainNavigation/>
                </View>
            </Provider>
        );
    }
}
