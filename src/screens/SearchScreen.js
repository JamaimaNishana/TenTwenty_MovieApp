import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { Dimensions, SafeAreaView, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import { EllipsisHorizontalIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { movieImage, searchMovies } from '../api/moviedb';
import WatchScreen from './WatchScreen';

const { width, height } = Dimensions.get('window');

const SearchScreen = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = value => {
        if (value && value.length > 2) {
            setIsLoading(true);
            searchMovies({
                query: value,
                include_adult: 'false',
                language: 'en-US',
                page: '1'
            }).then(data => {
                setIsLoading(false);
                if (data && data.results) setResults(data.results);
                console.log('got movies', data.results);
            })
        } else {
            setIsLoading(false);
            setResults([])
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ position: 'relative', marginHorizontal: 15, marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <ChevronLeftIcon onPress={() => navigation.goBack()} size={23} strokeWidth={2} color={'#000000'} style={{ marginRight: 2 }} />
                <TextInput
                    style={{ position: 'relative', height: 52, flex: 1, backgroundColor: '#EFEFEF', borderRadius: 27, paddingHorizontal: 15, }}
                    placeholder='TV Shows, movies and more'
                    clearButtonMode='always'
                    placeholderTextColor={'lightgray'}
                    onChangeText={handleSearch}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 20, }}
            >
                {
                    results.length === 0 ?
                        <WatchScreen />
                        :

                        <><Text style={{ fontFamily: 'Poppins', fontWeight: '500', color: '#202C43', lineHeight: 20, fontSize: 16, marginBottom: 3 }}>{results.length} results found</Text><View style={{ justifyContent: 'space-between', flexWrap: 'wrap', }}>
                            {results.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Details", item)} key={index}>
                                        <View style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                                            <Image resizeMode='stretch' source={{ uri: movieImage(item?.poster_path) || 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90' }} style={{ width: 130, height: 100, borderRadius: 10 }} />
                                            <Text numberOfLines={1} style={{ fontFamily: 'Poppins', fontWeight: '500', color: '#202C43', lineHeight: 20, fontSize: 16, left: -15, width: 130 }}>{item.title}</Text>
                                            <EllipsisHorizontalIcon size={23} strokeWidth={2} color={'#000000'} />

                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}

                        </View></>
                }
            </ScrollView>
        </SafeAreaView>
    )

}

export default SearchScreen;
