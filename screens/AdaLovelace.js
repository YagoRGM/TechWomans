import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function AdaLovelace() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Ada Lovelace</Text>
      <Text style={[styles.description, styles.introducao]}>
        Ada Lovelace foi uma matemática e escritora britânica, reconhecida como a primeira programadora de computador do mundo. Ela ficou famosa por seu trabalho com Charles Babbage no projeto da Máquina Analítica, o primeiro conceito de computador mecânico programável.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/ada-lovelace.webp')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Ada Lovelace nasceu em 10 de dezembro de 1815, em Londres, filha do poeta Lord Byron e da matemática Annabella Milbanke. Sua mãe incentivou o interesse da filha pelas ciências e matemática.
          Ada sempre demonstrou interesse por números e padrões, ela estudou álgebra e matemática com renomados professores da época e, apesar das limitações sociais para mulheres, sua formação a levou a colaborar com Charles Babbage em sua famosa Máquina Analítica.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira em Matemática e Ciência</Text>
        <Text style={styles.sectionText}>
          Embora Ada não tenha sido formalmente treinada em ciência ou engenharia, ela se destacou por sua colaboração com Charles Babbage, o "pai do computador". Onde traduziu um artigo do matemático italiano, Luigi Federico Menabrea, sobre a Máquina Analítica e, em suas anotações, descreveu um algoritmo para calcular os números de Bernoulli, considerado o primeiro algoritmo destinado a ser processado por uma máquina. 
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          Ada previu que os computadores poderiam ser usados para mais do que apenas cálculos numéricos, uma visão que só seria completamente realizada mais de um século depois.
        </Text>
        <Text style={styles.contribution}>
          - Trabalhou com a Máquina Analítica de Babbage. o conceito de Ada sobre como ela poderia ser programada foi revolucionário para a época.<br />
          - Escreveu o primeiro algoritmo destinado a ser executado por uma máquina.<br />
          - Previu que os computadores poderiam realizar mais tarefas além de cálculos numéricos, incluindo manipulação de símbolos e produção de música.<br />
          - Contribuiu com a primeira visão do que viria a ser a programação de computadores.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          O legado de Ada Lovelace é incomparável no mundo da computação. Sua visão precoce sobre a utilidade dos computadores foi a base para muitos dos avanços tecnológicos que temos hoje. Ela é frequentemente celebrada como a primeira programadora de computadores e uma das figuras mais importantes na história da ciência da computação.
        </Text>
        <Text style={styles.legado}>
          Seu nome foi dado a uma linguagem de programação (Ada) em sua homenagem, e ela é lembrada até hoje como uma figura visionária.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "A máquina analítica não tem pretensão de ser capaz de realizar nada sem a ajuda do homem."
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
