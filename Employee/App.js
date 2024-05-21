import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './Components/Notifications';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';
//import MyProfile from './Components/Profile';
import DashBoard from './Components/Dashboard1';
import Status from './Components/Status';

export default function App() {
  return (
    <View style={styles.container}>
   <Status/>
     {/*<DashBoard/>*/}
     {/* <EvaluationP/>*/}
   {/*<MyProfile/>*/}
  {/* <DashBoard/>*/}
 {/* <Orders/>*/}
 

   {/*  <Notifications/>*/}
 {/* <Home/>*/}
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
