import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AuthenticatedTabs from './AuthenticatedTabs';
import { storage } from '../../App';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const hasUserLogged = storage.contains('userLogged');

  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
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
