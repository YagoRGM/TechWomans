import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function SoniaGuimaraes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Sonia Guimarães</Text>
      <Text style={[styles.description, styles.introducao]}>
        Sonia Guimarães é uma física brasileira conhecida por suas contribuições no campo da física de materiais e, particularmente, pela defesa de políticas de inclusão e igualdade de gênero no ambiente acadêmico e científico. Ela se destacou pela sua pesquisa na área de física de partículas e por seu trabalho como professora e mentora.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Sonia.jpg')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Sonia Guimarães nasceu em 1958, em São Paulo, e desde muito jovem se interessou pela ciência. Ela se formou em Física pela Universidade de São Paulo (USP) e, posteriormente, obteve seu doutorado na Universidade Estadual de Campinas (UNICAMP). Durante sua formação, ela se dedicou à física de partículas, focando em aspectos teóricos e experimentais da área.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira Acadêmica</Text>
        <Text style={styles.sectionText}>
          Sonia Guimarães foi professora na Universidade de São Paulo e atuou em várias instituições de pesquisa. Ela é uma defensora da diversidade e da inclusão dentro do meio acadêmico, principalmente no que diz respeito ao empoderamento de mulheres na ciência.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          Sonia Guimarães é amplamente reconhecida por seu trabalho na física de partículas, além de suas contribuições para a popularização da ciência no Brasil. Ela também tem sido uma defensora ativa das políticas de inclusão para mulheres no campo da física e em outras ciências exatas.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          Sonia Guimarães deixou um legado significativo na física brasileira, não só pelo seu trabalho acadêmico, mas também por sua atuação como mentora e defensora de uma ciência mais inclusiva e acessível. Ela tem sido uma inspiração para muitas mulheres que desejam seguir carreiras científicas, desafiando as barreiras de gênero.
        </Text>
        <Text style={styles.legado}>
          Sua presença no meio acadêmico contribuiu para a quebra de estereótipos e para a construção de uma ciência mais diversa e igualitária no Brasil.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "A ciência precisa de mais mulheres e de mais diversidade. Isso é essencial para que as ideias floresçam."
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
