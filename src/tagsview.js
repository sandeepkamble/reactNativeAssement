import { View, Text, StyleSheet } from "react-native";

export default function TagsView({ customStyle, tagsNames }) {
    return (
        <View style={[styles.tagBarStyle, customStyle]}>
            <Text style={styles.tagTextStle}>{tagsNames}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tagBarStyle: {
        backgroundColor: '#28395A',  height: 30, justifyContent: 'center', borderRadius: 5,marginEnd:15,paddingHorizontal:10
    },
    tagTextStle: {
        fontSize: 12, fontWeight: '300', color: '#CFD7E7', textAlign: 'center'
    }
})