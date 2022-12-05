import { StyleSheet, Text, View , Dimensions, ScrollView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { showDetailHostSelector, showRunningTimeSelector } from '../../redux/slice'
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
const Service = () => {
  const tableHead = ['HOP', 'RTT', 'ADDRESS'];
  const runningTime = useSelector(showRunningTimeSelector)
  const showHostDetail = useSelector(showDetailHostSelector);
  return (
    showHostDetail ?
    <ScrollView>
      <Text style={{ fontSize:15, color:'blue', margin:10}}>{showHostDetail.RunningTime}</Text>
      <Table style={styles.containerItem}>
      <Row data={tableHead} flexArr={[1.3, 2, 3]} style={styles.head} textStyle={styles.text}></Row>
      <TableWrapper style={styles.wrapper}>
      <Rows data={runningTime} flexArr={[1.3,2,3]} style={styles.row} textStyle={styles.text}/>
      </TableWrapper>
      </Table>
    </ScrollView> :
    <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
    <Text style={{fontSize : 30}}> Không có dữ liệu</Text>
  </View>
  )
}

export default Service

const styles = StyleSheet.create({
  containerItem : {
    justifyContent:'center',
    alignItems:'center',
    
},
head: { 
    height: 40, 
    backgroundColor: '#D2E7FF',
},
text: { 
    margin: 6 ,
    marginVertical:10,
    color:'black',
    lineHeight:22
}  ,
wrapper: { 
    flexDirection: 'row' 
},
title: { 
    flex: 1, 
    backgroundColor: '#4AE68D' 
},
})