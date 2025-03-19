import { useState } from 'react';
import { Container, Content, StyledFlatList, Title } from './styles';
import EmptyState from '../../../components/EmptyState';
import Select from '../../../components/Select';
import { OptionProps } from '../../../types/option';
import Class from './Class';
import { ListRenderItem } from 'react-native';
import { useStudent } from '../../../context/studentContext';

export interface ClassProps {
  horario: string;
  disciplina: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const weekday = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  }).format(date);

  const day = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(date);

  const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
    date,
  );

  return `${day} de ${month}, ${weekday}`;
};

const ClassesScreen = () => {
  const [selectedDate, setSelectedDate] = useState<
    OptionProps | null | undefined
  >();

  const { selectedStudent } = useStudent();

  const renderItem: ListRenderItem<ClassProps> = ({ item }) => (
    <Class classOption={item} />
  );

  const dates = selectedStudent?.agenda.map(item => ({
    label: formatDate(item.dia),
    value: item.dia,
  }));

  const classes = selectedStudent?.agenda.find(
    item => item.dia === selectedDate?.value,
  );

  return (
    <Container>
      <Content>
        <Title>Agenda</Title>

        <Select
          options={dates || []}
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
