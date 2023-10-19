import { Image, StyleSheet, SafeAreaView, TouchableOpacity, View, Text, TextInput } from "react-native";
import Header from "./header";
import { useState } from "react";
import TagsView from "./tagsview";
import { useNavigation } from "@react-navigation/native";

export default function AddChiproz() {

    const [tagText, setTagText] = useState('')
    const navigation = useNavigation()

    const backButtonPress = () => {
        navigation.goBack()
    }
    const postClick = () => {
        navigation.navigate("home")
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#091224',
            padding: 20
        }}>
            <Header backButtonPress={backButtonPress} postClick={postClick} />
            <Text style={[styles.textDecoration, { marginTop: 50 }]}>Create</Text>
            <TextInput placeholder="What on your mind?" style={styles.inputTextStyle} />
            <Text style={[styles.textDecoration, { marginTop: 70 }]}>Add Tags</Text>
            <View style={styles.tagViewContainer}>
                <TextInput placeholder="Write Tags" style={styles.inputTextStyle} onChangeText={(changeText) => {
                    setTagText(changeText)
                }} />
                {tagText != '' && <TouchableOpacity ><Text style={styles.addTextStyle}>Add</Text></TouchableOpacity>}
            </View>
            {tagText != '' && <TagsView />}
        </View>

    )
}
const styles = StyleSheet.create({
    textDecoration: {
        fontWeight: '800', color: 'white', fontSize: 20
    },
    inputTextStyle: {
        fontSize: 20, fontWeight: '400', color: '#D4DCEC'
    },
    addTextStyle: {
        color: 'white', fontWeight: '700', fontSize: 20
    },
    tagViewContainer:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
})