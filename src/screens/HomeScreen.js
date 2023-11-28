import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { movieImage, upcomingMovieEndpoint } from '../api/moviedb';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getUpcomingMovies();

  }, [])

  const getUpcomingMovies = () => {
    setIsLoading(true);
    fetch(upcomingMovieEndpoint).then(data => data.json())
      .then(data => setUpcomingMovies(data.results))
    setIsLoading(false);
    console.log("upcomingmovies are", upcomingMovies);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ paddingHorizontal: 20, backgroundColor: 'white', paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Poppins', fontWeight: '500', color: '#202C43', lineHeight: 20, fontSize: 16 }}>Watch</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Watch')}>
          <MagnifyingGlassIcon size={23} strokeWidth={2} color={'#000000'} />
        </TouchableOpacity>
      </View>

      {upcomingMovies.length < 1 ?
        <ActivityIndicator size="small" color="#0000ff" />
        :
        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            data={upcomingMovies}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              console.log("item name", item.item.id)
              return (
                <TouchableOpacity onPress={() => navigation.push('Details', item.item)} style={{ justifyContent: 'flex-end', alignItems: 'center', position: 'relative', marginBottom: 15 }}>
                  <Image source={{ uri: movieImage(item.item.poster_path) }} resizeMode='stretch' style={{ width: 335, height: 180, borderRadius: 10, }} />
                  <Text style={{ position: 'absolute', fontFamily: 'Poppins', fontWeight: 'bold', color: 'white', lineHeight: 18, fontSize: 18, left: 40, bottom: 20, width: 270 }}>{item.item.original_title}</Text>
                </TouchableOpacity>
              )
            }}
          />

        </View>
      }
    </SafeAreaView>
  )
}

export default HomeScreen;
