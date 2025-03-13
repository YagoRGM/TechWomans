import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
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
const Stack = createStackNavigator();

// Componente do cabeçalho com botão hamburguer
const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#357ede' }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 20 }}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

// Criando a Stack Navigator com todas as telas
function StackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{ header: () => <CustomHeader navigation={navigation} title="Home" /> }} />
      <Stack.Screen name="Grace Hopper" component={GraceHopper} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
      <Stack.Screen name="Ada Lovelace" component={AdaLovelace} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
      <Stack.Screen name="Margaret Hamilton" component={MargaretHamilton} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
      <Stack.Screen name="Katherine Johnson" component={KatherineJohnson} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
      <Stack.Screen name="Radia Perlman" component={RadiaPerlman} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
      <Stack.Screen name="Sonia Guimarães" component={SoniaGuimarães} options={{ header: () => <CustomHeader navigation={navigation} /> }} />
    </Stack.Navigator>
  );
}

// Configurando o Drawer Navigator
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: '#357ede' }}>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Grace Hopper" component={GraceHopper} />
        <Drawer.Screen name="Ada Lovelace" component={AdaLovelace} />
        <Drawer.Screen name="Margaret Hamilton" component={MargaretHamilton} />
        <Drawer.Screen name="Katherine Johnson" component={KatherineJohnson} />
        <Drawer.Screen name="Radia Perlman" component={RadiaPerlman} />
        <Drawer.Screen name="Sonia Guimarães" component={SoniaGuimarães} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
