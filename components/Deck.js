import React, { Component } from "react";
import { View, Text } from "react-native";
import { globalStyle as styles } from "../general/global-styles";
import { textPrimary, secondary } from "../general/color_values";
import { connect } from "react-redux";
import Action from "./Action";
import { Feather } from "@expo/vector-icons";


class Deck extends Component {
  goBack = () => {
    const { navigation } = this.props;
    navigation.push("home");
  };

  startQuiz = () => {
    const { navigation, id } = this.props;
    navigation.navigate("quiz", {
      id,
    });
  };

  createCard = () => {
    const { navigation, id } = this.props;
    navigation.navigate("addcard", {
      id,
    });
  };

  render() {
    const { deck, cards } = this.props;

    return (
      <View style={styles.main}>
        <View style={styles.wrapper}>
          <Feather name="arrow-left-circle" size={24} onPress={this.goBack} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.title_deck}>{deck.title ?? "Deck Title"}</Text>
            <Text style={styles.subtitle_deck}>{`${cards} cards in Deck`}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>What do you like to do?</Text>
        {cards > 0 &&
        <Action
          title="Start new Quiz"
          iconName="comment-question"
          color={textPrimary}
          onPressed={this.startQuiz}
        />}
        <Action
          title="Add New Question"
          iconName="note-plus"
          color={secondary}
          onPressed={this.createCard}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  const deck = decks[id];

  return {
    id: id,
    deck,
    cards: deck.questions.length,
  };
};

export default connect(mapStateToProps)(Deck);
