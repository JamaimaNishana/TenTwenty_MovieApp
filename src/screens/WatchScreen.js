import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, FlatList } from 'react-native'
import { movieImage } from '../api/moviedb'

const API_KEY = '1bd87bc8f44f05134b3cff209a473d2e'

const WatchScreen = () => {

    const [genres, setGenres] = React.useState([])
    const [movies, setMovies] = React.useState([])
    console.log("Movie name", movies)

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY)
            .then(res => res.json())
            .then(result => {
                setMovies(result.results)
            })

        fetch('https://api.themoviedb.org/3/genre/movie/list?&api_key=' + API_KEY)
            .then(genre => genre.json())
            .then(result => {
                const genres = result.genres.reduce((genres, gen) => {
                    const { id, name } = gen
                    genres[id] = name
                    return genres
                }, [])
                setGenres(genres)
            })

    }, [])

    const Movies = ({ item, index }) => {
        return (
            <View style={{ margin: 5, marginBottom: 15 }}>
                <Image source={{ uri: movieImage(item.poster_path) || 'https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90' }} resizeMode='stretch' style={{ width: 160, height: 100, borderRadius: 10, }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={movies}
                style={{ marginTop: 10 }}
                key={2}
                keyExtractor={(item, index) => item.id}
                renderItem={Movies}
                numColumns={2}
            />

        </SafeAreaView>
    )
}

export default WatchScreen;
