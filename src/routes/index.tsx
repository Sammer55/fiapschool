import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AuthenticatedTabs from './AuthenticatedTabs';
import { storage } from '../../App';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const hasUserLogged = storage.contains('userLogged');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={hasUserLogged ? 'AuthenticatedTabs' : 'AuthStack'}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AuthenticatedTabs" component={AuthenticatedTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
