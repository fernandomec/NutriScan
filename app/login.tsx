import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import CheckBox from "expo-checkbox";
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

export default function LoginScreen() {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  function handleLogin() {
    
    router.push("./(tabs)/home"); 
  }

  return (
    <ScrollView contentContainerStyle={[styles.contentContainer, { paddingBottom: '85%' }]} style={styles.scrollView}>
      {/* Logo */}
      <Image source={require('../assets/icones/logo-nutriscan.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.welcomeText}>Login</Text>

      {/* Campo de Usuário */}<Text style={styles.label}>Usuário</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="rgba(65, 64, 66, 0.36)" />
      </View>

      {/* Campo de Senha */}
      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="rgba(65, 64, 66, 0.36)"/>
      </View>

      {/* Checkbox "Lembre-se de mim" */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setChecked} style={styles.checkbox} />
        <Text style={styles.checkboxLabel}>Lembre-se de mim</Text>
      </View>

      {/* Botão Entrar usando Link */}
      <TouchableOpacity style={styles.button}>
        <Link href={"./(tabs)/home"} style={styles.Link}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Link>
      </TouchableOpacity>

      {/*Esqueceu sua senha? e Registre-se*/}
      <Link href="/forgot-password-email" style={styles.link}>
        Esqueceu sua senha?
      </Link>
      <Link href="/register" style={styles.link}>
        Registre-se
      </Link>
    </ScrollView>
  );
}


