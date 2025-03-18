import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function RadiaPerlman() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Radia Perlman</Text>
      <Text style={[styles.description, styles.introducao]}>
        Radia Perlman é uma cientista da computação americana, conhecida como a "mãe da Internet" devido às suas contribuições fundamentais para o desenvolvimento de protocolos que ajudaram a estruturar a arquitetura da rede. Como o protocolo de roteamento Spanning Tree Protocol (STP), utilizado para tornar as redes mais eficientes e confiáveis.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Radia.png')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Radia Perlman nasceu em 1951, em Washington, D.C. Ela se formou em Ciência da Computação pelo MIT (Instituto de Tecnologia de Massachusetts), onde teve sua formação inicial em redes de computadores e áreas relacionadas. A paixão por redes de computadores surgiu durante seus estudos universitários, quando ela começou a explorar a teoria dos grafos e a infraestrutura de redes.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira</Text>
        <Text style={styles.sectionText}>
          Radia Perlman trabalhou na Digital Equipment Corporation (DEC), onde desenvolveu o Spanning Tree Protocol (STP), um protocolo que garante a eficiência e segurança nas redes Ethernet. Ela também trabalhou em outras inovações, incluindo protocolos de roteamento para redes de grandes dimensões.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          O principal trabalho de Radia Perlman foi o desenvolvimento do STP, que permite que as redes Ethernet sejam auto-corrigíveis e resilientes a falhas. Seu trabalho foi crucial para o desenvolvimento da infraestrutura que sustenta a Internet moderna.
        </Text>
        <Text style={styles.contribution}>
          - Desenvolveu o Spanning Tree Protocol (STP).<br />
          - Contribuiu para a criação de redes seguras e eficientes.<br />
          - Trabalhou em protocolos que ajudaram a tornar a Internet acessível e funcional em grande escala.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          Radia Perlman é amplamente reconhecida por seu trabalho inovador no campo das redes de computadores. Seu desenvolvimento do STP foi crucial para o crescimento da Internet, e sua contribuição ajudou a criar a base para a comunicação em rede moderna. Seu legado é lembrado por sua habilidade em resolver problemas complexos e por ter contribuído para a arquitetura global da Internet.
        </Text>
        <Text style={styles.legado}>
          Ela continua sendo uma das principais defensoras da educação em tecnologia e busca inspirar novas gerações de cientistas da computação, especialmente mulheres no campo.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "Quando você é desafiado a resolver um problema, a resposta não é 'quem pode me ajudar', é 'como eu posso fazer isso?'"
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
