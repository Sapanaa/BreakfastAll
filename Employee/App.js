import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './Components/Notifications';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';
import MyProfile from './Components/profile';
import MyHome from './Components/Home';
import MyDashboard from './Components/Dashboard';
import Mylogin from './Components/login';


export default function App() {
  return (
    <View style={styles.container}>
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
