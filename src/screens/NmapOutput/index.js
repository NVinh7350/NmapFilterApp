import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { nmapContentSlector, pathSelector } from '../../redux/slice'

const NmapOutput = () => {
    const nmapContent = useSelector(nmapContentSlector);
    return (
        nmapContent ?
        <ScrollView>
            <Text
                style = {styles.text}
            >{nmapContent}</Text>
        </ScrollView> :
        <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
        <Text style={{fontSize : 30}}> Không có dữ liệu</Text>
      </View>
    )
}

export default NmapOutput

const styles = StyleSheet.create({
    text : {
        fontSize: 14,
        color:'black'
    }
})