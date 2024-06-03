import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Components/Dashboard1';
import Orders from './Components/Orders';
import EvaluationP from './Components/EvaluationP';
import Status from './Components/Status';
import MyProfile from './Components/profile';
import Notifications from './Components/Notifications';
import Home from './Components/HomePage';
import Login from './Components/LoginPa';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='lognpin'>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="notification" component={Notifications} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Evaluation" component={EvaluationP} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Profile" component={MyProfile} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
