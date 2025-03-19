import { useEffect, useState } from 'react';
import Select from '../../../components/Select';
import { useStudent } from '../../../context/studentContext';
import { Container, Content, StyledFlatList, Title } from './styles';
import { OptionProps } from '../../../types/option';
import EmptyState from '../../../components/EmptyState';
import { UserProps } from '../../../types/user';
import Quarter from './Quarter';
import { ListRenderItem } from 'react-native';

export type QuarterProps =
  UserProps['alunos'][0]['boletim'][0]['trimestres'][0];

const ReportCardScreen = () => {
  const [selectedReportCard, setSelectedReportCard] = useState<
    OptionProps | null | undefined
  >();

  const { selectedStudent } = useStudent();

  const reportCards = selectedStudent?.boletim.map(item => ({
    value: `${item.turma}-${item.ano}`,
    label: `${item.turma} - ${item.ano}`,
  }));

  const quarters = selectedStudent?.boletim?.find(
    item => `${item.turma}-${item.ano}` === selectedReportCard?.value,
  );

  const renderItem: ListRenderItem<QuarterProps> = ({ item }) => (
    <Quarter item={item} />
  );

  useEffect(() => {
    setSelectedReportCard(undefined);
  }, [selectedStudent]);

  return (
    <Container>
      <Content>
        <Title>Boletim</Title>

        <Select
          options={reportCards || []}
          onSelect={setSelectedReportCard}
          selected={selectedReportCard}
        />

        <StyledFlatList
          data={quarters?.trimestres || []}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyState>Sem informações sobre o boletim</EmptyState>
          }
          keyExtractor={(item: QuarterProps) => item.trimestre.toString()}
        />
      </Content>
    </Container>
  );
};

export default ReportCardScreen;
