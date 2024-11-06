import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import styles from './styles/styles';

export default function Index() {
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

      {/* Mensagem de boas-vindas */}
      <Text style={styles.welcomeText}>Bem Vindo(a)</Text>

      {/* TEXTO primeira vez */}
      <Text style={styles.label}>Já possui conta?</Text>

      {/* BOTÃO Entrar */}
      <TouchableOpacity style={styles.button}>
        <Link href={"/login"} style={styles.Link}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Link>
      </TouchableOpacity>
      {/* TEXTO primeira vez */}
      <Text style={styles.label}>Primeira vez?</Text>
      
      {/* BOTÃO Cadastro */}
      <TouchableOpacity style={styles.button}>
        <Link href={"/register"} style={styles.Link}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
