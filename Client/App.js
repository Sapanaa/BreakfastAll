import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import MyMenu from './Components/Menu';
import MyProfile from './Components/Profile';
//import MyOrderHistory from './Components/OrderHistory';
import MyHome from './Components/Home';
//import MyStatus from './Components/OrderStatus';
//import MyMenuItem from './Components/MenuItem';
//import MyRequest from './Components/RequestEmployee';
//import Feedback from './Components/Feedback';

import MyGoodbye from './Components/Goodbye';

export default function App() {
  return (
    <View style={styles.container}>
     {/* < MyHome/>*/}
    {/*<MyMenu/>*/}
     {/*<MyRequest/>*/}
<MyProfile/>
   {/* <MyMenuItem/> */}
    {/*<MyStatus/>*/}
    {/*<MyProfile/>*/}
    {/*<Feedback/>*/}
    {/*<MyOrderHistory/>*/}
     
   {/* <MyGoodbye/>*/}
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
