import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native';

export default function KatherineJohnson() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>Katherine Johnson</Text>
      <Text style={[styles.description, styles.introducao]}>
        Katherine Johnson foi uma matemática e cientista espacial americana cujos cálculos de trajetória foram essenciais para o sucesso das missões espaciais da NASA, incluindo o voo orbital de John Glenn. Sua contribuição foi fundamental para o avanço da exploração espacial.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/KatherineJohnson.jpg')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Infância e Formação</Text>
        <Text style={styles.sectionText}>
          Katherine Johnson nasceu em 26 de agosto de 1918, em White Sulphur Springs, West Virginia. Desde jovem, ela demonstrou uma habilidade extraordinária para a matemática, completando a escola secundária com apenas 14 anos. Ela obteve seu diploma em Matemática pela Universidade Estadual de West Virginia em 1937, uma realização notável para uma mulher negra na época.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Carreira na NASA</Text>
        <Text style={styles.sectionText}>
          Johnson começou a trabalhar na NASA em 1953 como "computador humano", realizando cálculos complexos de trajetórias e órbitas para as primeiras missões espaciais. Ela foi uma das principais responsáveis pelos cálculos da missão espacial de John Glenn, garantindo a precisão dos cálculos que permitiram o seu voo orbital.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Principais Contribuições</Text>
        <Text style={styles.contribution}>
          - Foi pioneira em cálculos de trajetória para o voo espacial, ajudando a garantir o sucesso das missões Mercury, Apollo e Space Shuttle.<br />
          - Calculou a trajetória do voo de John Glenn, a primeira missão americana a dar a volta ao mundo.<br />
          - Ajudou no planejamento da missão Apollo 11, que levou o homem à Lua.<br />
          - Seus cálculos precisos e inovadores Contribuiu para o desenvolvimento de novas técnicas utilizadas pela NASA em várias missões.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Legado</Text>
        <Text style={styles.legado}>
          Katherine Johnson deixou um legado duradouro na NASA e na ciência espacial. Sua trajetória foi um exemplo de perseverança e superação de barreiras, sendo reconhecida como uma das maiores matemáticas da história. Ela recebeu diversas homenagens, incluindo a Medalha Presidencial da Liberdade, uma das mais altas honrarias civis nos Estados Unidos.
        </Text>
        <Text style={styles.legado}>
          Ela foi uma das pioneiras para mulheres e pessoas negras no campo da ciência, contribuindo para a quebra de barreiras raciais e de gênero nas áreas de STEM (Ciência, Tecnologia, Engenharia e Matemática).
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Citação Famosa</Text>
        <Text style={styles.legado}>
          "Eu não estava interessada em ser uma 'primeira mulher' ou 'primeira pessoa negra' em qualquer coisa. Eu estava interessada em fazer meu trabalho da melhor forma possível."
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
    borderColor: '#e0af0d', // Bordas para a imagem
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
