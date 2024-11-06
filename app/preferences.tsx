import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { Link } from 'expo-router';
import styles from './styles/styles';

// SwitchButton
const SwitchButton = () => {
    const [isActive, setIsActive] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;

    // Dimensions
    const screenWidth = Dimensions.get('window').width;
    const outerWidth = screenWidth * 0.175;
    const outerHeight = outerWidth * 0.5;

    // cores e imgs do switch
    const activeColor = '#2BB302';
    const inactiveColor = '#E70404';
    const leftImage = require('../assets/icones/setaDireita.png');
    const rightImage = require('../assets/icones/verified.png');

    // function switch
    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const maxTranslateX = outerWidth - (outerWidth * 0.373) - outerWidth * 0.1;
        Animated.timing(translateX, { toValue: isActive ? maxTranslateX : 0, duration: 100, useNativeDriver: true }).start();
    }, [isActive]);

    return (
        <TouchableWithoutFeedback onPress={toggleSwitch}>
            <View style={{ backgroundColor: isActive ? activeColor : inactiveColor, width: outerWidth, height: outerHeight, borderRadius: outerHeight / 2, justifyContent: 'center', paddingHorizontal: outerWidth * 0.025 }}>
                <Animated.View style={{ width: outerWidth * 0.373, height: '80%', backgroundColor: 'white', borderRadius: outerHeight / 2, justifyContent: 'center', alignItems: 'center', margin: 2, transform: [{ translateX }] }}>
                    <Image source={isActive ? rightImage : leftImage} style={{ width: '80%', height: '80%', tintColor: isActive ? '#2BB302' : '#E70404' }} resizeMode="contain" />
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const PreferencesScreen = () => {
    const [fontsLoaded] = useFonts({ RobotoSlab_400Regular, RobotoSlab_700Bold });

    if (!fontsLoaded) {
        return <View style={styles.container}></View>;
    }

    const preferences = [
        "Intolerância à lactose",
        "Intolerância à gluten",
        "Alergia à amendoim",
        "Diabetes",
        "Alergia à frutos do mar",
        "Alergia à soja",
        "Alergia à ovo"
    ];

    return (
        <View style={styles.containerPreferences}>
            <Text style={styles.titlePreferences}>Suas Preferências</Text>
            {preferences.map((preference, index) => (
                <View style={styles.rowContainerPreferences} key={index}>
                    <Text style={styles.textItemPreferences}>{index + 1}</Text>
                    <Text style={styles.textPreferences}>{preference}</Text>
                    <SwitchButton />
                </View>
            ))}
            {/* button confirmar */}
            <Link href="/home" style={{ backgroundColor: '#506668', borderRadius: 10, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center', marginTop: 20, alignSelf: 'center', width: '80%', textAlign: 'center' }}>
                    <Text style={styles.buttonText}>Confirmar</Text>
            </Link>
        </View>
    );
};

export default PreferencesScreen;
