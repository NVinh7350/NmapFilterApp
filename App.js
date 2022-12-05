import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, PermissionsAndroid, Platform, Image, Alert, FlatList } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/Home';
const App = () => {

    return (
        <Provider store={store}>
          <Home></Home>
        </Provider>
    )
}
export default App;
