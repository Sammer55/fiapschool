import { useState } from 'react';
import Input from '../../../components/Input';
import Logo from '../../../components/Logo';
import {
  Container,
  ErrorMessage,
  Form,
  LogoContainer,
  SafeAreaView,
} from './styles';
import Button from '../../../components/Button';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { responsaveis } from '../../../db/responsaveis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [document, setDocument] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const navigation = useNavigation();

  const isValid = document !== '' && password !== '';

  const handleLogin = async () => {
    setIsLoading(true);
    setIsError(false);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const unmaskedDocument = document.replaceAll('.', '').replaceAll('-', '');

    const isLoginSuccess = responsaveis.some(
      item => item.cpf === unmaskedDocument && item.senha === password,
    );

    if (isLoginSuccess) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'AuthenticatedTabs',
            },
          ],
        }),
      );

      AsyncStorage.setItem('isLogged', 'true');

      return setIsLoading(false);
    }

    setIsError(true);
    setIsLoading(false);
  };

  return (
    <SafeAreaView>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Form>
          <Input
            maskType="cpf"
            onChangeText={setDocument}
            value={document}
            placeholder="CPF"
            keyboardType="number-pad"
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            secureTextEntry
          />

          {isError && (
            <ErrorMessage>
              Usuário ou senha inválida.
              {'\n'}
              Pode tentar novamente?
            </ErrorMessage>
          )}
        </Form>
      </Container>

      <Button isLoading={isLoading} onPress={handleLogin} disabled={!isValid}>
        Fazer Login
      </Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
