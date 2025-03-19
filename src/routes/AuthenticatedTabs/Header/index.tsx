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

const Header = () => {
  const navigation = useNavigation();

  const user: UserProps = JSON.parse(storage.getString('userLogged') || '');

  const handleLogout = async () => {
    storage.clearAll();

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
          <Button>
            <ButtonText>Trocar Perfil</ButtonText>
          </Button>

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
          <StudentName>ALUNO SELECIONADO</StudentName>

          <StudentInformations>TURMA - RM 123 - PERÍODO</StudentInformations>
        </StudentContainer>
      </UserInformation>
    </Container>
  );
};

export default Header;
