import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function RadiaPerlman() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Radia Perlman</Text>
      <Text style={[styles.description, styles.introducao]}>
        Radia Perlman é uma engenheira de redes e cientista da computação, conhecida como a "mãe da Internet" por suas contribuições ao desenvolvimento de protocolos de redes de computadores, como o algoritmo de Spanning Tree Protocol (STP), que é fundamental para a operação de redes Ethernet.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Radia.png')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>Principais Contribuições:</Text>
      <Text style={styles.description}>
        - Desenvolveu o Spanning Tree Protocol (STP), essencial para as redes Ethernet.<br />
        - Foi pioneira em pesquisas sobre a segurança e escalabilidade das redes.<br />
        - Sua contribuição foi vital para o desenvolvimento da infraestrutura moderna da Internet.
      </Text>
      <Text style={styles.subtitle}>Legado:</Text>
      <Text style={styles.description}>
        O trabalho de Radia Perlman foi crucial para a criação das redes de computadores modernas, e ela é amplamente reconhecida por sua inovação e visão em redes e infraestrutura de Internet.
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
