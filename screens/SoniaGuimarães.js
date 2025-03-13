import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function SoniaGuimaraes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Sônia Guimarães</Text>
      <Text style={[styles.description, styles.introducao]}>
        Sônia Guimarães é uma física brasileira reconhecida por seu trabalho em física experimental e pela luta pela inclusão de mulheres negras na ciência. Ela é a primeira mulher negra a se tornar professora titular no Instituto de Física da Universidade de São Paulo (USP).
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Sonia.jpg')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Pioneira na física experimental e na luta pela inclusão de mulheres negras na ciência.<br />
        - Contribuiu para o avanço do estudo da física de partículas.<br />
        - Trabalhou para aumentar a diversidade nas áreas de ciências e tecnologia no Brasil.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        Sônia Guimarães é um exemplo de perseverança e dedicação, inspirando novas gerações de cientistas, especialmente mulheres negras, e ampliando as perspectivas da ciência no Brasil e no mundo.
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
