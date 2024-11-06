import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/styles';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Search() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(''); // Armazena o filtro selecionado

  const filters = ['Filtro 1', 'Filtro 2', 'Filtro 3']; // Exemplos de filtros

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setIsFilterVisible(false);
  };

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
      
        <Link href="/user" asChild>
          <TouchableOpacity style={styles.buttonIcon}>
            <FontAwesome name="user-o" style={{ fontSize: 28, color: '#FFFFFF' }} />
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.welcomeText}>SEARCH</Text>
      
      <View style={styles.search}>
        <TouchableOpacity onPress={() => setIsFilterVisible(true)}>
          <Feather name="filter" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        
        <TextInput
          placeholder="Digite um item"
          style={styles.searchInput}
        />
        
        <Feather name="search" style={{ fontSize: 35 }} />
      </View>

      {/* Modal para dropdown de filtro */}
      <Modal
        visible={isFilterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione um filtro</Text>
            <FlatList
              data={filters}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleFilterSelect(item)}>
                  <Text style={styles.filterOption}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
