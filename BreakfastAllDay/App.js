import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Footer from './Components/Next.jsx/Footer';
import Header from './Components/Next.jsx/Header';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminLoading from './Components/Admin/AdminLoading';
import InvitationForm from './Components/Admin/InvitationForm';
import EditAccount from './Components/Admin/EditAccount';
import StaffManagement from './Components/Admin/StaffManagement';
import AssignEmployee from './Components/Admin/AssignEmployee';
import EmployeeEvaluation from './Components/Admin/EmployeeEvaluation';


export default function App() {
  return (
    <View style={styles.container}>
  <AdminLoading/>
  {/* <AdminLogin/>*/}
 {/*<EditAccount />*/}
  {/*<EmployeeEvaluation/>*/}
  {/*<AssignEmployee/>*/}
  {/* <InvitationForm/>*/}
   {/*<StaffManagement/>*/}
  
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
