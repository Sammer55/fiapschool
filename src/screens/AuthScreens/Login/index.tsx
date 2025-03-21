import React, { useState } from 'react';
import Input from '../../../components/Input';
import Logo from '../../../components/Logo';
import {
  Container,
  ErrorMessage,
  Form,
  KeyboardAvoidingView,
  LogoContainer,
  SafeAreaView,
} from './styles';
import Button from '../../../components/Button';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { responsaveis } from '../../../db/responsaveis';
import { storage } from '../../../../App';
import { useStudent } from '../../../context/studentContext';
import { UserProps } from '../../../types/user';

const LoginScreen = () => {
  const [document, setDocument] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const navigation = useNavigation();
  const { setSelectedStudent } = useStudent();

  const isValid = document !== '' && password !== '';

  const handleLogin = async () => {
    setIsLoading(true);
    setIsError(false);

    await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));

    const unmaskedDocument = document.replaceAll('.', '').replaceAll('-', '');

    const user = responsaveis.find(
      item => item.cpf === unmaskedDocument && item.senha === password,
    );

    if (user) {
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

      storage.set('userLogged', JSON.stringify(user));

      const firstStudent = responsaveis.find(item => item.id === user.id)
        ?.alunos[0];

      if (firstStudent) {
        console.log('firstStudent', firstStudent);

        setSelectedStudent(firstStudent as UserProps['alunos'][0]);
      }

      return setIsLoading(false);
    }

    setIsError(true);
    setIsLoading(false);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Container>
          <LogoContainer>
            <Logo width={306} height={49} />
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
