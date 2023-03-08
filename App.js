import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useAsync } from 'react-async-hook';

const fetchStarwarsHero = async () =>
  (await fetch(`https://swapi.dev/api/people/1/`)).json();


export default function App() {
  const asyncHero = useAsync(fetchStarwarsHero);

  return (
    <View style={styles.container}>
      {asyncHero.loading && <View><Text>Loading</Text></View>}
      {asyncHero.error && (
        <View>
          <Text>Error: {asyncHero.error.message}</Text>
        </View>
      )}
      {asyncHero.result && (
        <View>
          <Text>Success!</Text>
          <Text>Name: {asyncHero.result.name}</Text>
        </View>
      )}
      <StatusBar style='auto' />
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
