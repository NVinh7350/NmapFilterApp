import { KeyboardAvoidingView, StyleSheet, ActivityIndicator, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import NavigationTab from '../../navigation'
import NmapInput from '../../component/NmapInput'
import { useDispatch, useSelector } from 'react-redux'
import { statusReadFileSelector } from '../../redux/slice'
import NmapInputSlice from '../../component/NmapInput/NmapInputSlice'

const Home = () => {
  const statusReadFile = useSelector(statusReadFileSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(statusReadFile == 'success') {
        dispatch(NmapInputSlice.actions.setStatusReadFile('idle'))
    } else if (statusReadFile == 'error') {
        Alert.alert('Lỗi', 'Đường dẫn không đúng')
        dispatch(NmapInputSlice.actions.setStatusReadFile('idle'))
    }
  }, [statusReadFile])

  return (
    <KeyboardAvoidingView
    behavior='height'
    style={styles.container}
    keyboardVerticalOffset={-185}
    >
        <NmapInput/>
        <View style={styles.viewContainer}>
            <NavigationTab></NavigationTab>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    viewContainer : {
        flex: 6,
        elevation:10
    }

})