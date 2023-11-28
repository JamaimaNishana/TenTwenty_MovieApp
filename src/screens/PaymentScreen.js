import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'


const PaymentScreen = () => {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const timeArray = ["10:30", "1:30", "5:30"];
    const dateArray = [{
        date: 29,
    },
    {
        date: 30,
    }, {
        date: 1,
    }, {
        date: 2,
    },
    {
        date: 3,
    }, {
        date: 4,
    }, {
        date: 5,
    },
    ]


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 150 }}>
                <ChevronLeftIcon onPress={() => navigation.goBack()} size={23} strokeWidth={2} color={'#000000'} style={{ marginRight: 2 }} />
                <Text style={{ fontFamily: 'Poppins', fontWeight: '500', color: '#202C43', lineHeight: 20, fontSize: 16, }}>The King</Text>
                <Text></Text>

            </View>

            <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={dateArray}
                    keyExtractor={(item) => item.date}
                    numColumns={4}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity>
                                <View style={{ width: 40, height: 32, borderRadius: 10, backgroundColor: "#CD9D0F", justifyContent: 'center', alignItems: 'center', marginRight: 10, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20, fontSize: 12 }}> </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <View>
                </View>

            </View>
            <View style={{ justifyContent: 'space-between', marginHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ height: 50, width: 150, borderRadius: 10, backgroundColor: '#61C3F2', alignItems: 'center', justifyContent: 'center', marginTop: 200, marginRight: 10 }}>
                    <Text numberOfLines={2} style={{ textAlign: 'center', color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Total Price $50</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height: 50, width: 180, borderRadius: 10, backgroundColor: '#61C3F2', alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Proceed to Pay</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default PaymentScreen;
