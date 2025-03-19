import { Animated } from 'react-native';
import { Container, Content, Disciplines, Title } from './styles';
import { useState } from 'react';
import ChevronIcon from '../../../../components/icons/Chevron';
import { QuarterProps } from '..';
import Accordion from './Accordion';

const Quarter = ({ item }: { item: QuarterProps }) => {
  const [isDisciplinesVisible, setIsDisciplinesVisible] = useState(false);
  const [rotation, _] = useState(new Animated.Value(0));

  const toggleRotation = () => {
    Animated.timing(rotation, {
      // @ts-ignore
      toValue: rotation._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleOpenQuarter = () => {
    toggleRotation();
    setIsDisciplinesVisible(!isDisciplinesVisible);
  };

  return (
    <Container>
      <Content onPress={handleOpenQuarter}>
        <Title>{item.trimestre}º TRIMESTRE</Title>

        <Animated.View style={{ transform: [{ rotate }] }}>
          <ChevronIcon />
        </Animated.View>
      </Content>

      {isDisciplinesVisible && (
        <Disciplines>
          {item.disciplinas.map((discipline, index) => (
            <Accordion
              key={index.toString()}
              discipline={discipline as QuarterProps['disciplinas'][0]}
            />
          ))}
        </Disciplines>
      )}
    </Container>
  );
};

export default Quarter;
