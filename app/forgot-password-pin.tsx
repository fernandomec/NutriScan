import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ForgotLoginPin() {
  const [pin, setPin] = useState<string[]>(Array(5).fill(''));
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleSendEmail = () => {
    const pinCode = pin.join('');
    router.push('/forgot-password');
  };

  const handleChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1 && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleBackspace = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && pin[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
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
      <Image source={require('../assets/icones/logo-nutriscan.png')} style={{ height: '30%', margin: 0, resizeMode: 'contain' }} />
      {/* titulo */}
      <Text style={styles.welcomeText}>Insira o código que enviamos no e-mail cadastrado no sistema.</Text>
      {/* campo pin */}
      <View style={styles.inputPinContainer}>
        {pin.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.inputPin}
            maxLength={1}
            keyboardType="number-pad"
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleBackspace(e, index)}
            placeholderTextColor="rgba(65, 64, 66, 0.36)"
          />
        ))}
      </View>
      {/* botao */}
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
