import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyHome from './Components/Home';
import MyProfile from './Components/Profile';
import MyOrderHistory from './Components/OrderHistory';
import MyMenu from './Components/Menu';
import MyStatus from './Components/OrderStatus';
import MyMenuItem from './Components/MenuItem';
import MyRequest from './Components/RequestEmployee';
import Feedback from './Components/Feedback';
import MyGoodbye from './Components/Goodbye';
import OrderStatus from './Components/OrderStatus';
import MyHomePage from './Components/HomePage';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={MyHomePage} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={MyOrderHistory} options={{ headerTitle: '', headerBackVisible: true }} />

        <Stack.Screen name="Home" component={MyHome} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="Menu" component={MyMenu} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="MenuItem" component={MyMenuItem} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="Profile" component={MyProfile} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="Request" component={MyRequest} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ headerTitle: '', headerBackVisible: true }} />
        <Stack.Screen name="Goodbye" component={MyGoodbye} options={{ headerTitle: '', headerBackVisible: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
