import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HostPort from '../screens/HostPort';
import HostDetail from '../screens/HostDetail';
import NmapOutput from '../screens/NmapOutput';
import Service from '../screens/Service';
const NavigationTab = ({
}) => {
    const Tab = createBottomTabNavigator();
    return (
        <View style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarIconStyle: { display: "none" },
                    tabBarItemStyle:{
                        justifyContent:'center',
                        alignContent:'center',
                        borderRightWidth:0.5
                    },
                    tabBarLabelStyle:{
                        width:'100%',
                        fontWeight: "700",
                        fontSize: 13
                    },
                  }}>
                    <Tab.Screen name="NmapOutput" component={NmapOutput}/>
                    <Tab.Screen name="Running Time" component={Service} />
                    <Tab.Screen name="HostPort" component={HostPort} />
                    <Tab.Screen name="HostDetail" component={HostDetail} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default NavigationTab