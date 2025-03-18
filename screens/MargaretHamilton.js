import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function MargaretHamilton() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Margaret Hamilton</Text>
      <Text style={[styles.description, styles.introducao]}>
        Margaret Hamilton foi uma cientista da computação e engenheira americana, conhecida por liderar o desenvolvimento do software de navegação da Apollo 11, que levou o homem à Lua. Ela foi pioneira no campo da programação e desempenhou um papel crucial nas missões espaciais da NASA.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Margaret.jpg')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Margaret Hamilton nasceu em 17 de agosto de 1936, em Paoli, Indiana. Ela se formou em Matemática pela Universidade de Earlham e, mais tarde, obteve seu mestrado em Filosofia, áreas que mais tarde a ajudariam a desenvolver um raciocínio lógico e a programar softwares complexos.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira na NASA</Text>
        <Text style={styles.sectionText}>
          Hamilton começou sua carreira na NASA em 1960, onde liderou a equipe responsável pela criação do software de navegação e controle da Apollo 11. Seu trabalho garantiu a segurança e o sucesso da missão que levou os astronautas Neil Armstrong e Buzz Aldrin à Lua.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          Hamilton foi responsável por escrever o código que permitiu o sucesso das missões Apollo. Ela criou um sistema de software que ajudava na navegação espacial, sendo fundamental para garantir que as missões fossem bem-sucedidas.
        </Text>
        <Text style={styles.contribution}>
          - Desenvolveu o software de navegação para a missão Apollo 11.<br />
          - Foi pioneira na engenharia de software e no uso de programação em tempo real.<br />
          - Introduziu conceitos inovadores de software que ainda são usados na indústria espacial.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          O trabalho de Margaret Hamilton deixou um legado duradouro na engenharia de software. Ela foi uma das primeiras a demonstrar a importância de ter uma abordagem estruturada para o desenvolvimento de software e foi uma pioneira no campo da programação.
        </Text>
        <Text style={styles.legado}>
          Seu trabalho não só ajudou a levar o homem à Lua, mas também estabeleceu as bases para o desenvolvimento de software para a indústria espacial moderna. Ela recebeu diversas honrarias, incluindo a Medalha Presidencial da Liberdade, em reconhecimento a suas contribuições.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "Eu pensei que, se as mulheres não fizessem o trabalho, não haveria ninguém para fazê-lo."
        </Text>
      </View>
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
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 280,
    height: 230,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e0af0d',
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#e0af0d',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  introducao: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'justify',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0af0d', 
    marginVertical: 10,
    textAlign: 'left',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  sectionText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    marginBottom: 15,
    textAlign: 'justify',
  },
  sectionContainer: {
    marginVertical: 15,
  },
  contribution: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    marginBottom: 15,
    textAlign: 'justify',
  },
  legado: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
    marginBottom: 15,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
});
