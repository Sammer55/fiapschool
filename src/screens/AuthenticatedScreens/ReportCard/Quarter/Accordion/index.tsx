import { useState } from 'react';
import ChevronIcon from '../../../../../components/icons/Chevron';
import {
  Container,
  Content,
  Informations,
  TextInformations,
  Title,
} from './styles';
import { Animated } from 'react-native';
import { QuarterProps } from '../..';

interface AccordionProps {
  discipline: QuarterProps['disciplinas'][0];
}

const formatGrade = (grade: number) =>
  grade.toFixed(1).replace('.0', ',0').replace('.', ',');

const Accordion = ({ discipline }: AccordionProps) => {
  const [isInformationsVisible, setIsInformationsVisible] = useState(false);

  const [rotation, _] = useState(new Animated.Value(0));

  const toggleRotation = () => {
    Animated.timing(rotation, {
      toValue: rotation._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const formattedGrade = formatGrade(discipline.nota);

  const handleOpenDiscipline = () => {
    toggleRotation();
    setIsInformationsVisible(!isInformationsVisible);
  };

  return (
    <Container>
      <Content onPress={handleOpenDiscipline}>
        <Title>{discipline.nome}</Title>

        <Animated.View style={{ transform: [{ rotate }] }}>
          <ChevronIcon />
        </Animated.View>
      </Content>

      {isInformationsVisible && (
        <Informations>
          <TextInformations>Nota: {formattedGrade || '-'}</TextInformations>

          <TextInformations>
            Faltas: {discipline.faltas || '-'}
          </TextInformations>
        </Informations>
      )}
    </Container>
  );
};

export default Accordion;
