import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { nmapContentSlector, showDetailHostPortInfomationSelector, showHostDetailSelector, showHostPortInfomationSelector } from '../../redux/slice'
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { Col } from 'react-native-table-component';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width; 

const tableHead = ['Port', 'State', 'Service', 'Version'];
const HostPort = () => {
    const hostPortContent = useSelector(showHostPortInfomationSelector);
    const detailHostPortContent = useSelector(showDetailHostPortInfomationSelector);
    return (
        detailHostPortContent ? 
        <ScrollView style={styles.container}> 
        <Table>

            <Row data={tableHead} flexArr={[2, 1.5, 2.5, 4]} style={styles.head} textStyle={styles.text}></Row>
            <TableWrapper style={styles.wrapper}>
            <Rows data={hostPortContent} flexArr={[2, 1.5, 2.5, 4]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
        </Table>
            <View
            style={styles.buttonShowDetail}
            >
                <Text style={styles.buttonText}>Thông tin chi tiết</Text>
            </View>
            <Text style={styles.text}>{detailHostPortContent}</Text>
        </ScrollView>
        :
        <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize : 30}}> Không có dữ liệu</Text>
        </View>
    )
}

export default HostPort

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    containerHeader : {
        height: '10%',
        width:'100%',
        flexDirection:'row',
        borderWidth:1,
    },
    containerItem : {
        justifyContent:'center',
        alignItems:'center',
        padding:1
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
    buttonShowDetail : {
        height:HEIGHT*0.05,
        // width:WIDTH *0.35,
        backgroundColor:'#D2E7FF',
        justifyContent:'center',
        paddingHorizontal:10
        
    },
    buttonText : {
        fontSize:16,
        color:'black',
        fontWeight:'bold',
    }
})