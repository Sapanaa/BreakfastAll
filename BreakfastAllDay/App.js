import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import AssignEmployee from './Components/Admin/AssignEmployee';
//import { app } from "../firebase.config";
import StaffManagement from './Components/Admin/StaffManagement';
import EditAccount from './Components/Admin/EditAccount';
<<<<<<< HEAD
import EmployeeEvaluation from './Components/Admin/EmployeeEvaluation';
export default function App() {
  return (
    <View style={styles.container}>
  {/*<AdminLogin/>*/}
  {/*<AdminLoading/>*/}
  {/*<StaffManagement/>*/}
 {/* <InvitationForm/>*/}
  {/*<EditAccount />*/}
{/*<AssignEmployee/>*/}
  <EmployeeEvaluation/>
=======
//import InvitationForm from './Components/Admin/InvitationForm';
//import EditAccount from './Components/Admin/EditAccount';
//./[import Login from './Components/Admin/AdminLogin';
export default function App() {
  return (
    <View style={styles.container}>
  {/*<StaffManagement/>*/}
<EditAccount/>
>>>>>>> 83a30bf1c7f78304a82644c1152f2fcdab1b79b0
  
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
