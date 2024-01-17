import {StatusBar} from'expo-status-bar'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

export default function Home() {
  function handleParticipantAdd(){
    console.log('voce adicionou um participante');
  }

  return (
    <View style={styles.container}>

      <StatusBar style='dark' />  

      <Text style={styles.t2}>
        Nome do evento
        </Text>

      <Text style={styles.t5}>
        7 de julho de 2023
       </Text> 
      <View style={styles.form}>
      <TextInput style={styles.input}
      placeholder='Nome do Participante'
      placeholderTextColor='#6b6b6b'    
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
}
