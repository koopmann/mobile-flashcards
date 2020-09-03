import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {globalStyle as styles} from "../general/global-styles";


export default class Box extends Component {
    state = {
        showAnswer: false,
    };

    toggleAnswer = () => {
        this.setState((currentState) => ({
            showAnswer: !currentState.showAnswer
        }));
    };

    render() {
        const {question, answer, index, total} = this.props;

        return (
            <View style={styles.quizBox}>
                <Text style={styles.counter}>{`${index}/${total}`}</Text>
                <Text style={styles.question}>{question}</Text>
                {this.state.showAnswer && <Text style={styles.counter}>{answer}</Text>}
                <TouchableOpacity onPress={() => this.toggleAnswer()}>
                    <Text style={styles.flatButton}>
                        {this.state.showAnswer ? "Hide Answer" : "View Answer"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

