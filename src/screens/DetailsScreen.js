import React, { useEffect, useState } from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { movieDetailsEndpoint, movieImage } from '../api/moviedb';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  var { width, height } = Dimensions.get('window');
  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
    getMovieDetails(item.id);

  }, [item])

  const getMovieDetails = async id => {
    fetch(movieDetailsEndpoint(id)).then(data => data.json()
    )
      .then(data => setMovieDetails(data)
      )
    console.log("details from movie", movieDetails)

  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView style={{ flex: 1, position: 'relative', justifyContent: 'flex-end', alignItems: 'center', }}>
        <Image resizeMode='stretch' source={{ uri: movieImage(movieDetails?.poster_path) }} style={{ width: width, height: height / 1.7 }} />
        <View style={{ position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignContent: 'flex-end', bottom: 40 }}>

          <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, marginBottom: 15, textAlign: 'center' }}>In theaters december 22, 2021</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Ticket', item)}
            style={{ height: 50, width: 243, borderRadius: 10, backgroundColor: '#61C3F2', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Get Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Webview')}
            style={{ height: 50, width: 243, borderRadius: 10, backgroundColor: '#61C3F2', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Watch Trailer</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>

      <View style={{ marginHorizontal: 20, marginTop: 15, }}>
        <Text style={{ color: '#202C43', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: 1 }}>Genres</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 60, height: 24, justifyContent: 'center', backgroundColor: '#15D2BC', borderRadius: 16, marginVertical: 7, marginRight: 8 }}>
            <Text style={style.textStyle}>Action</Text>
          </View>
          <View style={{ width: 60, height: 24, justifyContent: 'center', backgroundColor: '#E26CA5', borderRadius: 16, marginVertical: 7, marginRight: 8 }}>
            <Text style={style.textStyle}>Thriller</Text>
          </View>
          <View style={{ width: 60, height: 24, justifyContent: 'center', backgroundColor: '#564CA3', borderRadius: 16, marginVertical: 7, marginRight: 8 }}>
            <Text style={style.textStyle}>Science</Text>
          </View>
          <View style={{ width: 60, height: 24, justifyContent: 'center', backgroundColor: '#CD9D0F', borderRadius: 16, marginVertical: 7, marginRight: 8 }}>
            <Text style={style.textStyle}>Fiction</Text>
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#d2d4d9', marginVertical: 10 }} />
        <Text style={{ color: '#202C43', fontFamily: 'Poppins', fontWeight: '600', fontSize: 16, lineHeight: 20, letterSpacing: 1, marginBottom: 8 }}>Overview</Text>

        <Text style={{ textAlign: 'justify', color: '#8F8F8F', fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, lineHeight: 19.2 }}>{movieDetails?.overview}</Text>

      </View>

    </ScrollView>
  )
}

export default DetailsScreen;

const style = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,

  }
})
