import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function AdaLovelace() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Ada Lovelace</Text>
      <Text style={[styles.description, styles.introducao]}>
        Ada Lovelace foi uma matemática e escritora britânica, conhecida por ter escrito o primeiro algoritmo 
        para ser processado por uma máquina. Seu trabalho foi essencial para o desenvolvimento da computação moderna.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/ada-lovelace.webp')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Criou o primeiro algoritmo para ser processado por uma máquina.<br />
        - Considerada a primeira programadora de computadores.<br />
        - Trabalhou com Charles Babbage na máquina analítica.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        O trabalho de Ada foi essencial para a criação da computação moderna, e ela é lembrada como uma das figuras mais importantes da história da tecnologia.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100, 3, 19)', // Fundo clean
    padding: 25,
  },
  imageContainer: {
    alignItems: 'end',
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 230,
    borderRadius: 15,
    borderWidth: 2,
    marginTop: -200,
    borderColor: '#e0af0d', // Bordas para a imagem
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#e0af0d', // Roxo vibrante
    textAlign: 'center',
    marginVertical: 10,
  },
  introducao: {
    maxWidth: 330,
    flex: 'start',
    marginTop: 25,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e0af0d', // Roxo vibrante
    marginVertical: 12,
    paddingHorizontal: 12,
    textShadowColor: '000',
  },
  description: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'justify',
  },
});
