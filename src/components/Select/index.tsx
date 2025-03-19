import { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Container, Content, SelectArea, Text } from './styles';
import ChevronIcon from '../icons/Chevron';
import { OptionProps } from '../../types/option';

interface SelectProps {
  options: OptionProps[];
  onSelect: (selectedOption: OptionProps) => void;
  selected: OptionProps | null | undefined;
}

const Select = ({ options = [], onSelect, selected }: SelectProps) => {
  const [isSelectAreaVisible, setIsSelectAreaVisible] = useState(false);
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

  const handleOpenSelectAreaVisible = () => {
    setIsSelectAreaVisible(!isSelectAreaVisible);
    toggleRotation();
  };

  const handleSelect = (selectedOption: OptionProps) => {
    onSelect(selectedOption);
    setIsSelectAreaVisible(false);
  };

  return (
    <Container>
      <Content onPress={handleOpenSelectAreaVisible}>
        <Text>{selected ? selected.label : 'Selecionar data'}</Text>

        <Animated.View style={{ transform: [{ rotate }] }}>
          <ChevronIcon />
        </Animated.View>
      </Content>

      {isSelectAreaVisible && (
        <SelectArea>
          {options?.map(item => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              key={item.label}
              hitSlop={4}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </SelectArea>
      )}
    </Container>
  );
};

export default Select;
