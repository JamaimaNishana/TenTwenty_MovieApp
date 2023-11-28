import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'


const TicketScreen = () => {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const [focused, setFocused] = useState(false);
    console.log("ticketscreen", item.title)
    const timeArray = ["10:30", "1:30", "5:30"];
    const dateArray = [{
        date: 29,
        day: "Wed"
    },
    {
        date: 30,
        day: "Thu"
    }, {
        date: 1,
        day: "Fri"
    }, {
        date: 2,
        day: "Sat"
    },
    {
        date: 3,
        day: "Sun"
    }, {
        date: 4,
        day: "Mon"
    }, {
        date: 5,
        day: "Tue"
    },
    ]


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 150 }}>
                <ChevronLeftIcon onPress={() => navigation.goBack()} size={23} strokeWidth={2} color={'#000000'} style={{ marginRight: 2 }} />
                <Text style={{ fontFamily: 'Poppins', fontWeight: '500', color: '#202C43', lineHeight: 20, fontSize: 16, }}>{item.title}</Text>
                <Text></Text>

            </View>

            <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>
                <Text style={{ color: '#202C43', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20, letterSpacing: 1, marginBottom: 15 }}>Date</Text>
                <FlatList
                    data={dateArray}
                    keyExtractor={(item) => item.date}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={(item) => { setFocused(!focused) }}>
                                <View style={{ width: 67, height: 32, borderRadius: 10, backgroundColor: focused === true ? "#61C3F2" : 'white', justifyContent: 'center', alignItems: 'center', marginRight: 10, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'Poppins', fontWeight: '600', color: focused === true ? 'white' : '#202C43', lineHeight: 20, fontSize: 12 }}>{item.date}  {item.day}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <View>

                </View>
                <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
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
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('Payment')}
                style={{ height: 50, width: 243, borderRadius: 10, backgroundColor: '#61C3F2', alignItems: 'center', justifyContent: 'center', left: 60, marginTop: 100 }}>
                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Select seats</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}

export default TicketScreen;
