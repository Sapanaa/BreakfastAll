import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './Components/Notifications';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';
import MyProfile from './Components/profile';
import MyHome from './Components/Home';


export default function App() {
  return (
    <View style={styles.container}>
      {/*<Notifications/>*/}
    {/*  <Orders/>*/}
     {/* <EvaluationP/>*/}
     <MyHome />
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
