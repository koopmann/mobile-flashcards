import React, {Component} from "react";
import {Text, View} from "react-native";
import {textPrimary} from "../general/color_values";
import {Feather} from "@expo/vector-icons";
import {globalStyle as styles} from "../general/global-styles";
import {connect} from "react-redux";

class SingleDeck extends Component {
    render() {
        const {deck, cards} = this.props;

        return (
            <View style={styles.deckItem}>
                <View style={styles.deckInfo}>
                    <Text style={styles.deckCards}>{cards} cards in Deck</Text>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                </View>
                <Feather name="arrow-right-circle" color={textPrimary} size={24}/>
            </View>
        );
    }
}

const mapStateToProps = ({decks}, {id}) => {
    const deck = decks[id];
    return {
        deck,
        cards: deck.questions.length,
    };
};

export default connect(mapStateToProps)(SingleDeck);
