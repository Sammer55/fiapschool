import {
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  Content,
  StudentContainer,
  StudentInformations,
  StudentName,
  Title,
  UserInformation,
} from './styles';
import Logo from '../../../components/Logo';
import LogoutIcon from '../../../components/icons/Logout';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { storage } from '../../../../App';
import { UserProps } from '../../../types/user';
import { useStudent } from '../../../context/studentContext';

const Header = () => {
  const navigation = useNavigation();
  const { selectedStudent, setIsStudentSwitchVisible, setSelectedStudent } =
    useStudent();

  const user: UserProps = JSON.parse(storage.getString('userLogged') || '');

  const handleLogout = async () => {
    storage.clearAll();

    setSelectedStudent(null);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'AuthStack',
          },
        ],
      }),
    );
  };

  return (
    <Container>
      <Content>
        <Logo height={16} width={100} />

        <ButtonsContainer>
          {user?.alunos?.length > 1 && (
            <Button onPress={() => setIsStudentSwitchVisible(true)}>
              <ButtonText>Trocar Perfil</ButtonText>
            </Button>
          )}

          <Button onPress={handleLogout}>
            <ButtonText>Sair</ButtonText>

            <LogoutIcon />
          </Button>
        </ButtonsContainer>
      </Content>

      <UserInformation>
        <Title>
          Olá, <Title isFirstName>{user?.primeiroNome}</Title>
        </Title>

        <StudentContainer>
          <StudentName>
            {selectedStudent?.primeiroNome} {selectedStudent?.sobrenome}
          </StudentName>

          <StudentInformations>
            {selectedStudent?.turma} - RM {selectedStudent?.rm} -{' '}
            {selectedStudent?.periodo}
          </StudentInformations>
        </StudentContainer>
      </UserInformation>
    </Container>
  );
};

export default Header;
