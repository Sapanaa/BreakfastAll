import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyMenu from './Components/Menu';
import MyProfile from './Components/Profile';
import MyOrderHistory from './Components/OrderHistory';
import MyHome from './Components/Home';
import MyStatus from './Components/OrderStatus';
import MyMenuItem from './Components/MenuItem';
import MyRequest from './Components/RequestEmployee';
import MyFeedback from './Components/Feedback';
<<<<<<< HEAD
=======
import Feedback from './Components/Feedback';
>>>>>>> b48846bee27f0d48d887c01a945ae13c416941e4
import MyGoodbye from './Components/Goodbye';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <MyGoodbye />
=======
     {/* < MyHome/>*/}
     {/*<MyMenu/>*/}
    {/* <MyMenuItem/> */}
    {/*<MyStatus/>*/}
    {/*<MyProfile/>*/}
    {/*<MyRequest/>*/}
    {/*<MyOrderHistory/>*/}
    {/*<Feedback/>*/}
    <MyGoodbye/>
>>>>>>> b48846bee27f0d48d887c01a945ae13c416941e4
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
