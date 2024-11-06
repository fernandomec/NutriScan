import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

export default function PasswordSucessPopup() {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }


  return (
    <View style={styles.container}>
      {/* Título do aplicativo */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nutri</Text>
        <Text style={styles.titleScan}>Scan</Text>
      </View>

      {/* Logo do aplicativo */}
      <Image source={require('../assets/icones/logo-nutriscan.png')} style={styles.image} />
        <Text style={styles.welcomeText}>Sua senha foi alterarada com sucesso!</Text>
        
        
        <TouchableOpacity style={styles.button}>
          <Link href={"./login"} style={styles.Link}>
            <Text style={styles.buttonText}>Voltar para Login</Text>
          </Link>
        </TouchableOpacity>

        </View>

  );
}
