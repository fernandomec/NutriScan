import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link, Stack } from "expo-router";
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import styles from './styles/styles';

export default function NotFoundScreen() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}></View>;
  }

  return (
    <>
      <Stack.Screen options={{headerShown: false }} />
      <View style={styles.container}>
        <Text>Página não encontrada!</Text>
        <Link href="/" style={styles.link}>Clique aqui para voltar ao Início</Link>
      </View>
    </>
  );
}
