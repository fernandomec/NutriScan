import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

export default function EditUser() {
    const router = useRouter();

    // data de nascimento
    const [birthDate, setBirthDate] = useState('');
    const formatDate = (date: string): string => {
    const numbers = date.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers; // DD
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`; // DD/MM
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`; // DD/MM/YYYY
    };

  // voltar à página anterior
  const handleBackPress = () => {
    router.back();
  };

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#BCC9BF' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.contentContainer, { flexGrow: 1 }]} style={styles.scrollView}>
        <View style={styles.backAndUser}>
          <TouchableOpacity style={styles.buttonIcon} onPress={handleBackPress}>
            <Image source={require('../assets/icones/seta.png')} style={{ width: '60%', height: '60%', tintColor: '#FFFFFF' }} />
          </TouchableOpacity>
        </View>

        <Text style={styles.welcomeText}>Editar Perfil</Text>

        <View style={styles.backgroundUserConfig}>
          <Image source={require('../assets/icones/user.png')} style={styles.iconUserConfig} />
        </View>

        <Text style={styles.label}>Nome:</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputEditUser} placeholder="Nome" placeholderTextColor="rgba(65, 64, 66, 0.36)" />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputEditUser} placeholder="Email" placeholderTextColor="rgba(65, 64, 66, 0.36)" />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputEditUser} placeholder="Senha" secureTextEntry={true} placeholderTextColor="rgba(65, 64, 66, 0.36)" />
        </View>

        <Text style={styles.label}>Data de Nascimento:</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputEditUser} placeholder="DD/MM/YYYY" placeholderTextColor="rgba(65, 64, 66, 0.36)" keyboardType="numeric" maxLength={10} value={birthDate} onChangeText={(text) => setBirthDate(formatDate(text))}/>
        </View>

        <TouchableOpacity style={styles.button}>
          <Link href={"/user"} style={styles.Link}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
