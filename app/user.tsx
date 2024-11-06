import React from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import styles from './styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function User() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };


  const handleLogout = () => {
    Alert.alert(
      "Sair da Conta",
      "Você tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Sair", 
          onPress: () => {
            router.push('/login');
          }
        }
      ]
    );
  };

  const handleExitApp = () => {
    Alert.alert(
      "Sair do Aplicativo",
      "Você tem certeza que deseja fechar o aplicativo?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Fechar", 
          onPress: () => BackHandler.exitApp()
        }
      ]
    );
  };

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
        <TouchableOpacity style={styles.buttonIcon} onPress={handleBackPress}>
          <Ionicons name="chevron-back" style={styles.imgButton}/>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundUserConfig}>
        <FontAwesome name="user-o" color="white" style={styles.iconUserConfig} />
      </View>

      <Text style={styles.welcomeText}>Seu Perfil</Text>

      {/* EDITAR PERFIL */}
      <View style={styles.linhaUser}>
        <Link href="/edit-user" asChild>
          <TouchableOpacity style={styles.circuloUser}>
            <FontAwesome name="user" style={styles.imgButton} />
          </TouchableOpacity>
        </Link>
        
        <Link href="/edit-user" asChild>
          <TouchableOpacity style={styles.buttonUser}>
            <Text style={styles.buttonTextUser}>Editar perfil</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* ALTERAR SUAS PREFERENCIAS */}
      <View style={styles.linhaUser}>
        <Link href="/edit-user" asChild>
          <TouchableOpacity style={styles.circuloUser}>
            <FontAwesome name="cog" style={styles.imgButton} />
          </TouchableOpacity>
        </Link>

        <Link href="/preferences" asChild>
          <TouchableOpacity style={styles.buttonUser}>
            <Text style={styles.buttonTextUser}>Altere suas Preferências</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* SAIR DA CONTA */}
      <View style={styles.linhaUser}>
        <TouchableOpacity style={styles.circuloUser} onPress={handleLogout}>
          <FontAwesome name="sign-out" style={styles.imgButton} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonUser} onPress={handleLogout}>
          <Text style={styles.buttonTextUser}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      {/* SAIR DO APLICATIVO */}
      <View style={styles.linhaUser}>
        <TouchableOpacity style={styles.circuloUser} onPress={handleExitApp}>
          <FontAwesome name="times" style={styles.imgButton} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonUser} onPress={handleExitApp}>
          <Text style={styles.buttonTextUser}>Sair do Aplicativo</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
