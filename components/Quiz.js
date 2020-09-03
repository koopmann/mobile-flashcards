import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text} from "react-native";
import Button from "../components/Button";
import {globalStyle} from "../general/global-styles";
import {Feather} from "@expo/vector-icons";
import {removeNotifications, createLocalNotification} from "../general/messages";
import Box from "./Box";

class Quiz extends Component {
    state = {
        score: 0,
        showScore: false,
        currentIndex: 0,
        loading: true,
    };

    componentDidMount() {
        removeNotifications().then(createLocalNotification);
        const {deck} = this.props;
        const {questions} = deck;
        this.setState({
            questions: questions,
            total: questions.length,
            loading: false,
        });
    }


    showNext() {
        let currentIndex = this.state.currentIndex;
        let next = currentIndex + 1;
        let isShowScore = next > this.state.total - 1;

        if (isShowScore) {
            this.setState({
                showScore: true,
            });
        } else {
            this.setState({
                currentIndex: next,
            });
        }
    }

    restartQuiz = () => {
        this.setState({
            score: 0,
            showScore: false,
            currentIndex: 0,
        });
    };

    wrongAnswer(val) {
        if (val) {
            this.showNext();
            return;
        }

        this.setState((currentState) => ({
            score: currentState.score + 1,
        }));
        this.showNext();
    }

    goBack = () => {
        const {navigation, id} = this.props;
        navigation.push("deck", {
            id: id,
        });
    };

    render() {

        if (this.state.loading) {
            return null;
        }
        const {deck} = this.props;
        let currentIndex = this.state.currentIndex;
        let questions = this.state.questions;

        const questionObject = questions[currentIndex];
        const {question, answer} = questionObject;
        return (
            <View style={globalStyle.main}>
                <View style={globalStyle.wrapper}>
                    <Feather name="arrow-left-circle" size={24} onPress={this.goBack}/>
                    <View style={{marginLeft: 20}}>
                        <Text style={globalStyle.title}>{deck.title ?? "Deck Title"}</Text>
                        <Text style={globalStyle.subtitle}>"Current Quiz"</Text>
                    </View>
                </View>
                {this.state.showScore ? (
                    <View>
                        <Text style={globalStyle.title}>
                            {" "}
                            Your Score : {this.state.score}{" "}
                        </Text>
                        <View>
                            <Button onPress={() => this.restartQuiz()} title="Restart Quiz"/>
                            <Button
                                onPress={this.goBack}
                                title="Back to deck"
                                type="secondary"
                            />
                        </View>
                    </View>
                ) : (
                    <View>
                        {!this.state.loading && (
                            <Box
                                answer={answer}
                                question={question}
                                index={currentIndex + 1}
                                total={this.state.total}
                            />
                        )}

                        <View>
                            <Button onPress={() => this.wrongAnswer(false)} title="Correct"/>
                            <Button
                                onPress={() => this.wrongAnswer(true)}
                                title="Incorrect"
                                type="secondary"
                            />
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = ({decks}, {route}) => {
    const {id} = route.params;

    return {
        deck: decks[id],
        id,
    };
};

export default connect(mapStateToProps)(Quiz);