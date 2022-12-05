import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { nmapContentSlector, showDetailHostSelector, showHostPortInfomationSelector } from '../../redux/slice'

const HostDetail = () => {
    const nmapContent = useSelector(nmapContentSlector);
    const showHostDetail= useSelector(showDetailHostSelector)
    return (
      showHostDetail ? 
      <View>
      <Text style={{ fontSize:15, color:'red'}}>{showHostDetail.host}</Text>
      <Text style={styles.textTitle}>Host Status: </Text>
        <Text style={styles.textContent}>State:  {showHostDetail.HostStatus.State}</Text>
        <Text style={styles.textContent}>Open :  {showHostDetail.HostStatus.OpenPorts}</Text>
        <Text style={styles.textContent}>Scanned :  {showHostDetail.HostStatus.ScannedPorts}</Text>
        <Text style={styles.textContent}>Filtered :  {showHostDetail.HostStatus.FilteredPorts}</Text>
      <Text style={styles.textTitle}>Addresses: </Text>
      <Text style={styles.textContent}>IPv4: {showHostDetail.Addresses.IPv4}</Text>
      <Text style={styles.textContent}>IPv6: {showHostDetail.Addresses.IPv6}</Text>
      <Text style={styles.textContent}>MAC: {showHostDetail.Addresses.MAC}</Text>
      <Text style={styles.textTitle}>Operating System</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.Uptime_guess}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.Network_Distance}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.OS_CPE}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.TCP_Sequence_Prediction}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.IP_ID_Sequence_Generation}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.Aggressive_OS_guesses}</Text>
      <Text style={styles.textContent}>{showHostDetail.OperatingSystem.Device_Type}</Text>
    </View> :
    <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize : 30}}> Không có dữ liệu</Text>
    </View>
  )
}

export default HostDetail

const styles = StyleSheet.create({
  textTitle : {
    fontSize: 16,
    color:'blue',
    marginHorizontal:10
  },
  textContent: {
    color:'black',
    marginHorizontal:20
  }
})