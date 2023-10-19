import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import PlusImage from '../assets/plusImage.png'
import ProfilePicture from '../assets/ProfilePicture.png'
import VerifiedIcon from '../assets/verifiedIcon.png'
import { useNavigation } from "@react-navigation/native";
import TagsView from "./tagsview";
import { PostList } from "./postsList";
export default function Home() {

    const navigation = useNavigation()

    function Posts({ postDetails }) {

        return (
            <View style={{ marginTop: 35, marginStart: 22, marginEnd: 30, borderBottomWidth: 1, borderColor: '#142340' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 700, fontSize: 15, color: 'white' }}>
                        {postDetails.item.userName}
                    </Text>

                    {postDetails.item.isVerified&&<Image source={VerifiedIcon} style={{ marginStart: 15 }} />}
                </View>
                <Text style={{ fontWeight: '300', fontSize: 15, color: '#A6B6D6', marginTop: 15 }}>
                    {postDetails.item.caption}
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {postDetails.item.tags.map((tagName) => { return (<TagsView customStyle={{ marginTop: 30, marginBottom: 20 }} tagsNames={tagName} />) })}
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[{ backgroundColor: "#091224", flex: 1 }]}>
            <View style={{ flex: 1 }}>
                <View style={styles.headerBar}>
                    <Image source={ProfilePicture} style={{ justifyContent: 'flex-start', }} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginStart: 120 }}>Chirpz</Text>
                </View>
                <FlatList key={Math.random().toString()} data={PostList} renderItem={(item) => {
                    return (
                        <Posts postDetails={item} />
                    )
                }} />

                <TouchableOpacity onPress={() => navigation.navigate("addChiproz")} style={styles.bottomView}>
                    <Image source={PlusImage} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: "#091224"
    },
    headerBar: {
        flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingStart: 15, borderBottomColor: 'gray', borderBottomWidth: 1
    },
    bottomView: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute', //Here is the trick
        bottom: 20,
        end: 20,//Here is the trick

    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
});