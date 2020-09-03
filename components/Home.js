import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {globalStyle} from "../general/global-styles";
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions/action_creators"
import SingleDeck from "./SingleDeck";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    viewDeckHome = (id) => {
        const {navigation} = this.props;

        navigation.navigate("deck", {
            id: id,
        });
    };

    render() {
        const {decks} = this.props;
        return (
            <View style={globalStyle.main}>
                <Text style={globalStyle.title}>Currently available decks</Text>
                {Object.keys(decks).map((id) => {
                    return (
                        <TouchableOpacity
                            key={id}
                            activeOpacity={1}
                            onPress={() => this.viewDeckHome(id)}
                        >
                            <SingleDeck id={id}/>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const mapStateToProps = ({decks}) => ({decks});

export default connect(mapStateToProps)(Home);
