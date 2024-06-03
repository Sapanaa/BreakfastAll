import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StaffManagement from './Components/Admin/StaffManagement';
import EditAccount from './Components/Admin/EditAccount';
import EmployeeEvaluation from './Components/Admin/EmployeeEvaluation';
import AdminLoading from './Components/Admin/AdminLoading';
import Login from './Components/Admin/AdminLogin';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="AdminLoad" component={AdminLoading} options={{ headerShown: false }} />
        <Stack.Screen name="StaffManagement" component={StaffManagement} options={{ headerTitle: '', headerBackVisible: true }}/>
        <Stack.Screen name="EditAccount" component={EditAccount} options={{ headerTitle: '', headerBackVisible: true }}/>
        <Stack.Screen name="EmployeeEvaluation" component={EmployeeEvaluation}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
