import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Importando as telas
import Home from './screens/Home';
import GraceHopper from './screens/GraceHopper';
import AdaLovelace from './screens/AdaLovelace';
import MargaretHamilton from './screens/MargaretHamilton';
import KatherineJohnson from './screens/KatherineJohnson';
import RadiaPerlman from './screens/RadiaPerlman';
import SoniaGuimarães from './screens/SoniaGuimarães';

const Drawer = createDrawerNavigator();

// Componente do cabeçalho personalizado
const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#4B1D2F'
    }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 10 }}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>

      <Text style={{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
      }}>
        {title}
      </Text>

      <Image
        style={{
          width: 250,
          height: 70,
        }}
        source={require('./assets/logo-techwomans-vinho.png')}
      />
    </View>
  );
};

// Configuração do Drawer Navigator
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#e0af0d',
          drawerInactiveTintColor: '#fff',
          drawerStyle: { backgroundColor: 'rgb(100, 3, 19)' },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Home" />
          })}
        />
        <Drawer.Screen
          name="Grace Hopper"
          component={GraceHopper}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Grace Hopper" />
          })}
        />
        <Drawer.Screen
          name="Ada Lovelace"
          component={AdaLovelace}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Ada Lovelace" />
          })}
        />
        <Drawer.Screen
          name="Margaret Hamilton"
          component={MargaretHamilton}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Margaret Hamilton" />
          })}
        />
        <Drawer.Screen
          name="Katherine Johnson"
          component={KatherineJohnson}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Katherine Johnson" />
          })}
        />
        <Drawer.Screen
          name="Radia Perlman"
          component={RadiaPerlman}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Radia Perlman" />
          })}
        />
        <Drawer.Screen
          name="Sonia Guimarães"
          component={SoniaGuimarães}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="Sonia Guimarães" />
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
