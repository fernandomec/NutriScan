import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ForgotLoginEmail() {
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleSendEmail = () => {
    router.push('/forgot-password-pin');
  };

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity style={styles.buttonIcon} onPress={handleBackPress}>
          <Ionicons name="chevron-back" style={styles.imgButton} />
        </TouchableOpacity>
      </View>
      {/* logo */}
      <Image source={require('../assets/icones/logo-nutriscan.png')} style={{height: '30%', margin: 0, resizeMode: 'contain'}}/>

      {/* titulo */}
      <Text style={styles.welcomeTextFPE}>Digite seu e-mail para</Text>
      <Text style={styles.welcomeTextFPE}>alterar a senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="rgba(65, 64, 66, 0.36)" />
      </View>

      {/* botao */}
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Enviar e-mail</Text>
      </TouchableOpacity>
    </View>
  );
}
