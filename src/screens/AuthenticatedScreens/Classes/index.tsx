import { useState } from 'react';
import { Container, Content, StyledFlatList, Title } from './styles';
import EmptyState from '../../../components/EmptyState';
import { responsaveis } from '../../../db/responsaveis';
import { storage } from '../../../../App';
import Select from '../../../components/Select';
import { OptionProps } from '../../../types/option';
import Class from './Class';
import { ListRenderItem } from 'react-native';

export interface ClassProps {
  horario: string;
  disciplina: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const diaSemana = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  }).format(date);
  const dia = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(date);
  const mes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);

  return `${dia} de ${mes}, ${diaSemana}`;
};

const ClassesScreen = () => {
  const [selectedDate, setSelectedDate] = useState<
    OptionProps | null | undefined
  >();

  const renderItem: ListRenderItem<ClassProps> = ({ item }) => (
    <Class classOption={item} />
  );

  const user: (typeof responsaveis)[0] = JSON.parse(
    storage.getString('userLogged') || '',
  );

  const dates = user?.alunos[0].agenda.map(item => ({
    label: formatDate(item.dia),
    value: item.dia,
  }));

  const classes = user?.alunos[0].agenda.find(
    item => item.dia === selectedDate?.value,
  );

  return (
    <Container>
      <Content>
        <Title>Agenda</Title>

        <Select
          options={dates}
          onSelect={setSelectedDate}
          selected={selectedDate}
        />

        <StyledFlatList
          data={classes?.aulas || []}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyState>Sem aulas neste dia</EmptyState>}
          keyExtractor={(item: ClassProps) =>
            `${item.horario}-${item.disciplina}`
          }
        />
      </Content>
    </Container>
  );
};

export default ClassesScreen;
