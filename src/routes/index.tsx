import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AuthenticatedTabs from './AuthenticatedTabs';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthenticatedTabs">
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AuthenticatedTabs" component={AuthenticatedTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
