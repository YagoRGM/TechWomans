import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function GraceHopper() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Grace Hopper</Text>
      <Text style={[styles.description, styles.introducao]}>
        Grace Hopper foi uma cientista da computação e contra-almirante da Marinha dos Estados Unidos. Ela é conhecida por ter desenvolvido o primeiro compilador de computador e por ter contribuído para o desenvolvimento da linguagem de programação COBOL.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/GracceHopper.jpg')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Desenvolveu o primeiro compilador de computador.<br />
        - Contribuiu para o desenvolvimento da linguagem COBOL.<br />
        - Ajudou a popularizar a programação de computadores.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        Grace Hopper é lembrada por suas contribuições revolucionárias para a computação e pela sua influência duradoura na indústria de tecnologia.
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
