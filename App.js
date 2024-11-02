import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
      setLoding(false)
    }

    loadFilmes()
  }, [])

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color='#121212' size={45} />
      </View>
    )
  } else {
    return (
      <View style={s.container}>
        <FlatList keyExtractor={item => String(item.id)} data={filmes} renderItem={({ item }) => <Filmes data={item} />} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
