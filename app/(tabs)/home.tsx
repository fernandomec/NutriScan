import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Product = {
  id: number;
  title: string;
  image: string;
  nutritionalValues: {
    kcal: string;
    carboidrato: string;
    proteina: string;
    totalGordura: string;
    saturadaGordura: string;
    sodio: string;
    acucar: string;
  };
};

export default function Home() {
  const [currentDate, setCurrentDate] = useState({
    day: '',
    dayOfWeek: '',
    monthYear: '',
  });

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const day = date.getDate();
      const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'short' });
      const monthYear = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

      setCurrentDate({
        day: day.toString(),
        dayOfWeek: dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1),
        monthYear: monthYear.charAt(0).toUpperCase() + monthYear.slice(1),
      });
    };

    updateDate();
    fetchProducts();
  }, []);

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    const mockData: Product[] = [
      {
        id: 1,
        title: "Produto 1",
        image: "../../assets/dbImages/1000.png",
        nutritionalValues: {
          kcal: "200",
          carboidrato: "40",
          proteina: "10",
          totalGordura: "5",
          saturadaGordura: "2",
          sodio: "0.25",
          acucar: "15"
        }
      },
      {
        id: 2,
        title: "Produto 2",
        image: "../../assets/dbImages/1000.png",
        nutritionalValues: {
          kcal: "200",
          carboidrato: "40",
          proteina: "10",
          totalGordura: "5",
          saturadaGordura: "2",
          sodio: "0.25",
          acucar: "15"
        }
      },
      {
        id: 3,
        title: "Produto 3",
        image: "../../assets/dbImages/1000.png",
        nutritionalValues: {
          kcal: "200",
          carboidrato: "40",
          proteina: "10",
          totalGordura: "5",
          saturadaGordura: "2",
          sodio: "0.25",
          acucar: "15"
        }
      },
      {
        id: 4,
        title: "Produto 4",
        image: "../../assets/dbImages/1000.png",
        nutritionalValues: {
          kcal: "200",
          carboidrato: "40",
          proteina: "10",
          totalGordura: "5",
          saturadaGordura: "2",
          sodio: "0.25",
          acucar: "15"
        }
      },
    ];
    setProducts(mockData);
  };

  return (
    <View style={styles.containerFlexStartHome}>
      <View style={styles.backAndUser}>
        <View style={styles.horaData}>
          <View style={styles.diaContainer}>
            <Text style={styles.dia}>{currentDate.day}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.data}>{currentDate.dayOfWeek}</Text>
            <Text style={styles.data}>{currentDate.monthYear}</Text>
          </View>
        </View>

        <Link href="/user" asChild>
          <TouchableOpacity style={styles.buttonIcon}>
          <FontAwesome name="user-o" style={{ fontSize: 28, color: '#FFFFFF' }} />
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.rowContainerHome}>
      <FontAwesome name="history" style={{ fontSize: 24, color: '#344445' }} />
        <Text style={styles.homeText}>Histórico de Produtos:</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsHome}>
        {products.map(product => (
          <View key={product.id} style={styles.cardItem}>
            <Image source={{ uri: product.image }} style={styles.cardImg} resizeMode="cover"/>
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={[styles.textCard, { textAlign: 'left' }]}>Porção de X gramas:</Text>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Valor Energético:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.kcal}kcal</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Carboidratos:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.carboidrato}g</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Proteína:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.proteina}g</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Gordura Total:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.totalGordura}g</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Gordura Saturada:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.saturadaGordura}g</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Sódio:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.sodio}g</Text>
            </View>
            
            <View style={styles.rowCardText}>
                <Text style={styles.textCard}>Açúcar:</Text>
                <Text style={styles.textCard}>{product.nutritionalValues.acucar}g</Text>
            </View>
            
          </View>
        ))}
      </ScrollView>
    </View>
    
  );
}