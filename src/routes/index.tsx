import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AuthenticatedTabs from './AuthenticatedTabs';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState<string>('AuthStack');
  const [isLoading, setIsLoading] = useState(true);

  const getIsUserLogged = async () => {
    const isUserLogged = await AsyncStorage.getItem('isLogged');

    if (isUserLogged) {
      setInitialRouteName('AuthenticatedTabs');
      return setIsLoading(false);
    }

    setInitialRouteName('AuthStack');
    setIsLoading(false);
  };

  useEffect(() => {
    getIsUserLogged();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRouteName}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AuthenticatedTabs" component={AuthenticatedTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
