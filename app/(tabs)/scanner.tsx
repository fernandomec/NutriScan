import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

export default function Scanner() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  return (
    <View style={styles.containerFlexStart}>
      <View style={styles.backAndUser}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.buttonIcon}>
          <Image source={require('../../assets/icones/seta.png')} style={{ width: '60%', height: '60%', tintColor: '#FFFFFF' }} />
          </TouchableOpacity>
        </Link>

        <Image source={require('../../assets/icones/logo-nutriscan-scanner.png')}/>
      
        <Link href="/user" asChild>
          <TouchableOpacity style={styles.buttonIcon}>
          <FontAwesome name="user-o" style={{ fontSize: 28, color: '#FFFFFF' }} />
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.welcomeText}>CAMERA DO SCANNER AQ</Text>

      <TouchableOpacity style={styles.button}>
        <Link href={"./(tabs)/home"} style={styles.Link}>
          <Text style={styles.buttonText}>Escanear Código de Barras</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}