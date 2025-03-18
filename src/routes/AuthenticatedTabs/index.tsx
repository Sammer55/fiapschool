import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassesScreen from '../../screens/AuthenticatedScreens/Classes';
import ReportCardScreen from '../../screens/AuthenticatedScreens/ReportCard';

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Classes">
      <Tab.Screen name="Classes" component={ClassesScreen} />
      <Tab.Screen name="ReportCard" component={ReportCardScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;
