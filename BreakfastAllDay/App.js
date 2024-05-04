import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';

import Footer from './Components/Next.jsx/Footer';
import Header from './Components/Next.jsx/Header';
import Profile from './Components/Profile';
import RequestEmp from './Components/RequestEmp';
import EditProfile from './Components/EditProfile';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminLoading from './Components/Admin/AdminLoading';
import InvitationForm from './Components/Admin/InvitationForm';
import EditAccount from './Components/Admin/EditAccount';
import StaffManagement from './Components/Admin/StaffManagement';
import AssignEmployee from './Components/Admin/AssignEmployee';
import EmployeeEvaluation from './Components/Admin/EmployeeEvaluation';
import Notifications from './Components/Employee/Notifications';
//import EvaluationP from './Components/Employee/EvaluationP';


export default function App() {
  return (
    <View style={styles.container}>
    {/*<Profile/>*/}  
   {/*  <RequestEmp/>*/}
  { /*<EditProfile/>*/}
  {/* <AdminLogin/>*/}
  {/*<AdminLoading/>*/}
 {/* <InvitationForm/>*/}
 {/*<EditAccount />*/}
{/*<AssignEmployee/>*/}
{/*<StaffManagement/>*/}
{/*<AdminLogin/>*/}
{/*<EmployeeEvaluation/>*/}
{/*<Notifications/>*/}
{/*<EvaluationP/>*/}
{/*<AdminLogin/>*/}
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
