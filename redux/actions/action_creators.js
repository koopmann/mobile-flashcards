import {GET_DECKS, CREATE_CARD, CREATE_DECK} from "./action_constants";
import {addCardToDeck, createDeck, getInitialData} from "../../general/methods";
import {hideLoading, showLoading} from "react-redux-loading";

export const getAllDecks = (decks) => {
    return {
        type: GET_DECKS,
        decks,
    };
};

const createCard = ({id, question, answer}) => {
    return {
        type: CREATE_CARD,
        id,
        question,
        answer,
    };
};

// Pass id, question and answer as arguements
export const handleCreateCard = (info) => {
    return (dispatch) => {
        addCardToDeck(info).then(() => {
            dispatch(createCard(info));
        });
    };
};

const addDeck = ({title}) => {
    return {
        type: CREATE_DECK,
        title,
    };
};

export const handleCreateDeck = (title) => {
    return (dispatch) => {
        createDeck(title).then(() => {
            dispatch(addDeck({title}));
        });
    };
};

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then((decks) => {
            dispatch(getAllDecks(decks));
            dispatch(hideLoading());
        });
    };
}
