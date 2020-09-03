import React, {Component} from "react";
import {View, Text, TextInput} from "react-native";
import Button from "../components/Button";
import {globalStyle as styles} from "../general/global-styles";
import {connect} from "react-redux";
import {handleCreateDeck} from "../redux/actions";

class AddNewDeck extends Component {
    state = {
        title: "",
    };

    onTitleChanged = (title) => {
        this.setState({
            title,
        });
    };

    createDeck = async () => {
        const {dispatch, navigation} = this.props;
        const {title} = this.state;

        dispatch(handleCreateDeck(title));

        await new Promise(function (resolve) {
            setTimeout(resolve, 100);
        });

        navigation.navigate("deck", {
            id: title,
        });
    };

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add Deck</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onTitleChanged(text)}
                    placeholder="Title"
                    value={this.state.title}
                />
                <Button
                    onPress={this.createDeck}
                    title="Create Deck"
                    disabled={this.state.title.length === 0}
                />
            </View>
        );
    }
}

export default connect()(AddNewDeck);
