import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function KatherineJohnson() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Katherine Johnson</Text>
      <Text style={[styles.description, styles.introducao]}>
        Katherine Johnson foi uma matemática e física americana que desempenhou um papel crucial no sucesso das primeiras missões espaciais da NASA. Sua contribuição foi essencial para o sucesso das missões Mercury e Apollo.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/KatherineJohnson.jpg')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Realizou cálculos complexos para as missões Mercury e Apollo.<br />
        - Foi pioneira na matemática aplicada à exploração espacial.<br />
        - Sua trajetória foi fundamental para o avanço dos direitos civis e a inclusão de mulheres na ciência.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        O trabalho de Katherine Johnson foi fundamental para o sucesso das missões espaciais da NASA e para a mudança de atitudes em relação às mulheres e pessoas negras na ciência e tecnologia.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100, 3, 19)', // Fundo vinho
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
    marginTop: -220,
    borderColor: '#e0af0d', // Bordas para a imagem
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#e0af0d', // Cor vibrante
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
    color: '#e0af0d', // Cor vibrante
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
