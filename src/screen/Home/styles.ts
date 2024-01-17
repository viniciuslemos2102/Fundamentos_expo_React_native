import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121121',
      padding: 16,  
    },
    t2:{
      color: '#e0e0e0',
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      padding: 21,
    },
    t5 :{
      color : '#cfcfcfaa',
      margin: 10
      
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius:5,
        color: '#f1f1f1',
        padding: 16,
        fontSize: 16,
        
    },
    buttonText:{
      fontSize: 24,
      color : '#f1f1f1',

    },
    button:{
      width:56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    form:{
      width: '100%',
      flexDirection: 'row'
    }
  });
