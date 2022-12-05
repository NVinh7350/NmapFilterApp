import { StyleSheet, Text, View , TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NmapInputSlice, { readFile } from './NmapInputSlice';
import { pathSelector, statusReadFileSelector } from '../../redux/slice';
const RNFS = require('react-native-fs')
const NmapInput = () => {

    const statusReadFile = useSelector(statusReadFileSelector);
    const [text, setText] = useState(RNFS.DocumentDirectoryPath + '/scan_google.txt');
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(NmapInputSlice.actions.setPath(text))
        dispatch(readFile(text))
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInputPath}
            placeholder={'scan file path'}
            value={text}
            onChangeText= {e => setText(e)}
        ></TextInput>
        <TouchableOpacity style={styles.buttonSubmit}
        onPress = {() => handleSubmit()}
        >
            {
                statusReadFile == 'loading' ? 
                <ActivityIndicator
                    style={styles.activityIndicator}
                    size={'large'}
                    color='white'
                ></ActivityIndicator> :
                <Text style={styles.buttonText}>OK</Text>
            }
        </TouchableOpacity>
      </View>
  )
}

export default NmapInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'gray'
      },
      buttonSubmit:{
        height: '40%',
        width: '20%',
        borderRadius: 15,
        justifyContent:'center',
        alignItems:'center',
        elevation:30,
        backgroundColor:'#4630EB',
      },
      buttonText: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
      },
      textInputPath: {
        height: '40%',
        width: '75%',
        elevation:20,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
      },
    activityIndicator : {
      height : '100%',
      width: '100%',
      position:'absolute',
      zIndex: 1,
    }
})