import React from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native';
import backarrow from '../assets/backarrow.png'
export default function Header({backButtonPress, postClick}) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <TouchableOpacity onPress={backButtonPress}>
                <Image source={backarrow} />
            </TouchableOpacity>
            <TouchableOpacity onPress={postClick} style={{ width: 70, backgroundColor: '#E88607', padding: 5, borderRadius: 100 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: '700' }}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}