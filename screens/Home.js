import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_titulo}>TECH WOMAN'S DAY</Text>

      <View style={styles.card}>
        <Text style={styles.text_subtitulo}>O FUTURO DA T.I É FEMININO</Text>
        <Text style={styles.text_paragrafo}>
          O Tech Woman's Day é um espaço dedicado a celebrar e impulsionar mulheres na tecnologia! Nossa missão é inspirar, conectar e empoderar talentos femininos no mundo da programação, inovação e desenvolvimento tecnológico. Aqui, você encontra histórias inspiradoras, oportunidades de aprendizado e uma comunidade unida para transformar o futuro da tecnologia.
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Grace Hopper')}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(100, 3, 19)',
    padding: 20,
  },
  text_titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: 'black',
    boxShadow: '0px 0px 8px white',
    elevation: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  text_subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgb(100, 3, 19)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    paddingHorizontal: 55,
  },
  text_paragrafo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(100, 3, 19)',
    textAlign: 'center',
    padding: 25
  },
  button: {
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(100, 3, 19)',
  },
});