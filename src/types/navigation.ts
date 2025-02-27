import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the navigation stack types
export type RootStackParamList = {
  MainScreen: undefined;
  ScreenRest: undefined;
  ScreenGraphql: undefined;
};

// Define Navigation Prop Type
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
