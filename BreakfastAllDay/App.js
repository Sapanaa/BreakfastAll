import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import AssignEmployee from './Components/Admin/AssignEmployee';
import { app } from "./firebase.config";
import StaffManagement from './Components/Admin/StaffManagement';
import InvitationForm from './Components/Admin/InvitationForm';
import EditAccount from './Components/Admin/EditAccount';
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
