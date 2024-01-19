import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 200
        }}
        source={{
          uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0d3c1de-1d28-4d96-8d45-9bbec1e44b2a/df40hgf-256590aa-7c5d-4994-9909-ab134d349253.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwZDNjMWRlLTFkMjgtNGQ5Ni04ZDQ1LTliYmVjMWU0NGIyYVwvZGY0MGhnZi0yNTY1OTBhYS03YzVkLTQ5OTQtOTkwOS1hYjEzNGQzNDkyNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N_LGdIn-2GdR47C56yWOMRwIeK6GsiPK_LN2PlRVgtI"
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
