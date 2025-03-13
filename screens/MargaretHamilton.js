import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function MargaretHamilton() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Margaret Hamilton</Text>
      <Text style={[styles.description, styles.introducao]}>
        Margaret Hamilton foi uma cientista da computação e engenheira que liderou a equipe responsável pelo software da Apollo 11, a missão que levou o homem à Lua em 1969. Sua liderança e habilidades de programação foram fundamentais para o sucesso da missão.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Margaret.jpg')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Liderou a equipe responsável pelo software da missão Apollo 11.<br />
        - Desenvolveu sistemas de software para missões espaciais.<br />
        - Pioneira na ciência da computação.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        Margaret Hamilton é lembrada por suas contribuições essenciais para a exploração espacial e por seu impacto duradouro na engenharia de software.
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
    marginTop: -250,
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
