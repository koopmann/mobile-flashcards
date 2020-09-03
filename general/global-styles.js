import {StyleSheet} from "react-native";
import {
    surface,
    secondary,
    textSecondary,
    background,
    textPrimary, primary, disabledSurface, textDisabled,
} from "./color_values";


export const globalStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: background,
        padding: 20,
    },
    title: {
        fontSize: 26,
        lineHeight: 36,
        color: textPrimary,
        marginBottom: 20,
        fontWeight: "bold"

    },
    subtitle: {
        fontSize: 18,
        lineHeight: 22,
        color: textPrimary,
        marginTop: 20,
    },
    deckItem: {
        backgroundColor: surface,
        padding: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    deckInfo: {
        display: "flex",
        flexDirection: "column",
    },
    deckTitle: {
        fontSize: 20,
        color: textSecondary,
        fontWeight: "bold"
    },
    deckCards: {
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 3,
        color: secondary,
        fontWeight: "bold"
    },
    inputField: {
        backgroundColor: surface,
        padding: 15,
        color: textSecondary,
        borderRadius: 10,
        marginBottom: 20
    },
    primaryCTA: {
        padding: 10,
        backgroundColor: primary,
        width: 100,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    primaryCTAText: {
        color: textPrimary,
        textAlign: "center",
    },
    disabledCTA: {
        padding: 10,
        backgroundColor: disabledSurface,
        width: 100,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    disabledCTAText: {
        color: textDisabled,
        textAlign: "center",
    },
    secondaryCTA: {
        padding: 10,
        backgroundColor: "transparent",
        width: 100,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: secondary,
    },
    secondaryCTAText: {
        color: secondary,
        textAlign: "center",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    title_deck: {
        fontSize: 24,
        lineHeight: 36,
        color: textPrimary,
    },
    subtitle_deck: {
        fontSize: 18,
        lineHeight: 22,
        color: textSecondary,
    },
    quizBox: {
        padding: 30,
        backgroundColor: surface,
        borderRadius: 10,
        marginTop: 50,
    },
    counter: {

        color: primary,
        fontSize: 18,
        lineHeight: 22,
        marginTop: 10
    },
    question: {

        color: textPrimary,
        fontSize: 24,
        lineHeight: 36,
    },
    flatButton: {
        marginTop: 20,
        color: secondary,

        fontSize: 18,
        lineHeight: 22,
    },
});
