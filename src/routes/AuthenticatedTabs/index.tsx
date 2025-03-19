import { TabBarLabel } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassesScreen from '../../screens/AuthenticatedScreens/Classes';
import ReportCardScreen from '../../screens/AuthenticatedScreens/ReportCard';
import { useTheme } from 'styled-components/native';
import CalendarIcon from '../../components/icons/Calendar';
import ReportCardIcon from '../../components/icons/ReportCard';
import Header from './Header';

interface TabBarProps {
  children?: string;
  focused?: boolean;
  color?: string;
}

const Tab = createBottomTabNavigator();

const TabBarLabelComponent = ({ children, focused }: TabBarProps) => (
  <TabBarLabel isFocused={focused}>{children}</TabBarLabel>
);

const Calendar = ({ focused }: TabBarProps) => {
  const theme = useTheme();
  return (
    <CalendarIcon color={focused ? theme.colors.primary : theme.colors.text} />
  );
};

const ReportCard = ({ focused }: TabBarProps) => {
  const theme = useTheme();
  return (
    <ReportCardIcon
      color={focused ? theme.colors.primary : theme.colors.text}
    />
  );
};

const AuthenticatedTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: {
          backgroundColor: theme.colors.foreground,
          borderTopWidth: 0,
          padding: 10,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabel: TabBarLabelComponent,
      }}
      initialRouteName="Classes">
      <Tab.Screen
        options={{
          title: 'Agenda',
          tabBarIcon: Calendar,
        }}
        name="Classes"
        component={ClassesScreen}
      />

      <Tab.Screen
        options={{
          title: 'Boletim',
          tabBarIcon: ReportCard,
        }}
        name="ReportCard"
        component={ReportCardScreen}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;
