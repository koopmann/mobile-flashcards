import React, {Component} from "react";
import {connect} from "react-redux";
import {View, TextInput} from "react-native";
import {globalStyle as styles} from "../general/global-styles";
import Button from "../components/Button";
import {handleCreateCard} from "../redux/actions";


class AddNewQuestion extends Component {
    goBack = () => {
        const {navigation} = this.props;
        navigation.push("home");
    };

    state = {
        question: "",
        answer: "",
    };

    onQuestionChanged = (question) => {
        this.setState({
            question,
        });
    };

    onAnswerChanged = (answer) => {
        this.setState({
            answer,
        });
    };

    createCard = () => {
        this.props.dispatch(
            handleCreateCard({
                id: this.props.id,
                question: this.state.question,
                answer: this.state.answer,
            })
        );
        this.goBack()
    };

    render() {
        return (
            <View style={styles.main}>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onQuestionChanged(text)}
                    placeholder="Question"
                    value={this.state.question}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onAnswerChanged(text)}
                    placeholder="Answer"
                    value={this.state.answer}
                />
                <Button
                    onPress={this.createCard}
                    title="Add New Card"
                    disabled={
                        this.state.question.length === 0 && this.state.answer.length === 0
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = ({decks}, {route}) => {
    const {id} = route.params;

    return {
        id: id,
    };
};

export default connect(mapStateToProps)(AddNewQuestion);
