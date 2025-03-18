import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function GraceHopper() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Grace Hopper</Text>
      <Text style={[styles.description, styles.introducao]}>
        Grace Hopper foi uma cientista da computação, contra-almirante da Marinha dos EUA e uma das figuras mais importantes na história da computação. Ela é mais conhecida por ter desenvolvido o primeiro compilador de computador e por sua contribuição significativa no desenvolvimento da linguagem de programação COBOL.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/GracceHopper.jpg')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Grace Hopper nasceu em 9 de dezembro de 1906, em Nova York, e desde jovem demonstrou grande interesse por ciências e matemática. Ela se formou em Matemática pela Universidade de Yale em 1928, tornando-se uma das poucas mulheres na época a seguir essa área. 
          No início de sua carreira acadêmica, Grace começou na área de matemática, mas seu interesse pela computação surgiu após ela entrar para a Marinha dos EUA.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira Militar</Text>
        <Text style={styles.sectionText}>
          Hopper ingressou na Marinha dos Estados Unidos durante a Segunda Guerra Mundial em 1943. Ela começou sua carreira como tenente e foi designada para o projeto de construção de um dos primeiros computadores eletrônicos, o Mark I, na Universidade de Harvard. 
          Ela se destacou por sua habilidade técnica, e também pela sua capacidade de liderança. Sua carreira na Marinha culminou com o posto de contra-almirante, um feito raro para mulheres na época.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          - Desenvolveu o primeiro compilador de computador (A-0).<br />
          - Foi uma das principais responsáveis pela criação da linguagem COBOL.<br />
          - Ajudou a popularizar a ideia de programação de computadores em inglês, tornando-a mais acessível.<br />
          - Fez contribuições significativas na Marinha dos EUA, ajudando a modernizar seus sistemas de computação.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          Grace Hopper deixou um legado duradouro na indústria de tecnologia. Ela foi pioneira em muitos aspectos da computação, ajudando a tornar a programação mais acessível. Sua famosa frase "It's easier to ask for forgiveness than it is to get permission" (É mais fácil pedir perdão do que pedir permissão) reflete sua abordagem inovadora e corajosa em relação ao avanço tecnológico.
        </Text>
        <Text style={styles.legado}>
          Além disso, Hopper foi uma das primeiras mulheres a alcançar o posto de contra-almirante na Marinha dos EUA, quebrando barreiras de gênero em uma época em que as mulheres tinham um papel limitado nas forças armadas.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "A inovação é o que distingue um líder de um seguidor."
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