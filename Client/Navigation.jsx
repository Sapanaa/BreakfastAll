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

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MyMenu} />
        <Stack.Screen name="MenuItem" component={MyMenuItem} />
        <Stack.Screen name="OrderStatus" component={OrderStatus} />

        <Stack.Screen name="Request" component={MyRequest} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Goodbye" component={MyGoodbye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
