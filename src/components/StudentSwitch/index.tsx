import { Modal } from 'react-native';
import {
  CloseButton,
  CloseText,
  Container,
  Content,
  Student,
  StudentInformations,
  StudentName,
  StudentsList,
  Title,
  WrapperStudents,
} from './styles';
import CloseIcon from '../icons/Close';
import { UserProps } from '../../types/user';
import { storage } from '../../../App';
import { useStudent } from '../../context/studentContext';
import { useCallback, useEffect, useState } from 'react';

interface StudentSwitchProps {
  isVisible: boolean;
  handleClose: () => void;
}

const StudentSwitch = ({ isVisible, handleClose }: StudentSwitchProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const userString = storage.getString('userLogged');
    if (userString) {
      try {
        const parsedUser: UserProps = JSON.parse(userString);
        setUser(parsedUser);
      } catch (error) {
        console.error('Erro ao fazer parse do userLogged', error);
      }
    }
  }, []);

  const { selectedStudent, setSelectedStudent } = useStudent();

  const handleSelectStudent = useCallback(
    (student: UserProps['alunos'][0]) => {
      setSelectedStudent(student);
      handleClose();
    },
    [handleClose, setSelectedStudent],
  );

  if (!user) {
    return null;
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <Container>
        <Content>
          <CloseButton onPress={handleClose}>
            <CloseText>FECHAR</CloseText>

            <CloseIcon />
          </CloseButton>

          <WrapperStudents>
            <Title>Escolha o perfil que você quer visualizar</Title>

            <StudentsList>
              {user.alunos.map(item => (
                <Student
                  onPress={() =>
                    handleSelectStudent(item as UserProps['alunos'][0])
                  }
                  isSelected={item.rm === selectedStudent?.rm}
                  key={item.rm}>
                  <StudentName>
                    {item.primeiroNome} {item.sobrenome}
                  </StudentName>

                  <StudentInformations>
                    {item.turma} - RM {item.rm} - {item.periodo}
                  </StudentInformations>
                </Student>
              ))}
            </StudentsList>
          </WrapperStudents>
        </Content>
      </Container>
    </Modal>
  );
};

export default StudentSwitch;
