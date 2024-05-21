import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './Components/Notifications';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';
import DashBoard from './Components/Dashboard1';
import Status from './Components/Status';
import Profile from './Components/Profile';
import MyProfile from './Components/Profile';
export default function App() {
  return (
    <View style={styles.container}>
  
     {/*<DashBoard/>*/}
     {/* <EvaluationP/>*/}
   {/* <Status/>*/}
  {/* <DashBoard/>*/}
 {/* <Orders/>*/}
 <MyProfile/>

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
