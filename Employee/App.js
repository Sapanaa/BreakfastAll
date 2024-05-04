import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './Components/Notifications';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';


export default function App() {
  return (
    <View style={styles.container}>
      {/*<Notifications/>*/}
    {/*  <Orders/>*/}
      <EvaluationP/>
      <StatusBar style="auto" />
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
