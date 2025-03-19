import { Container, Subjects, Time } from './styles';

interface ClassProps {
  classOption: {
    horario: string;
    disciplina: string;
  };
}

const Class = ({ classOption }: ClassProps) => {
  return (
    <Container>
      <Time>◦ {classOption.horario}</Time>
      <Subjects>{classOption.disciplina}</Subjects>
    </Container>
  );
};

export default Class;
