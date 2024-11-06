import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

export default function RegisterScreen() {
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
    
      <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]} style={styles.scrollView}>
        <Image source={require('../assets/icones/logo-nutriscan.png')} style={styles.image} />
        <Text style={styles.welcomeText}>Cadastre-se</Text>
        
        <Text style={styles.label}>Nome completo:</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Seu nome completo" placeholderTextColor="rgba(65, 64, 66, 0.36)" />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="seuemail@gmail.com" placeholderTextColor="rgba(65, 64, 66, 0.36)"/>
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="rgba(65, 64, 66, 0.36)"/>
        </View>

        <Text style={styles.label}>Confirme a senha</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="rgba(65, 64, 66, 0.36)"/>
        </View>

        <TouchableOpacity style={styles.button}>
          <Link href={"/register-popup"} style={styles.Link}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Link>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontFamily: 'RobotoSlab_400Regular', color: '#344445', alignSelf: 'center' }}>Já possui uma conta?</Text>

        <Link href="/login" style={styles.link}>
          Clique aqui
        </Link>
      </ScrollView>
  );
}
