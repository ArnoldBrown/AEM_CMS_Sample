import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import ScreenRest from './src/screens/ScreenRest';
import ScreenGraphql from './src/screens/ScreenGraphql';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'CMS' }} />
        <Stack.Screen name="ScreenRest" component={ScreenRest} options={{ title: 'Sample Rest' }} />
        <Stack.Screen name="ScreenGraphql" component={ScreenGraphql} options={{ title: 'Sample Graphql' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
