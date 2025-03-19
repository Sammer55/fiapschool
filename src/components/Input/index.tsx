import React, { useState, useCallback } from 'react';
import { TextInput, InputWrapper, Label, MaskedTextInput } from './styles';
import { TextInputProps } from 'react-native';
import { TextInputMaskTypeProp } from 'react-native-masked-text';

interface InputProps extends TextInputProps {
  placeholder: string;
  maskType?: TextInputMaskTypeProp;
}

const Input: React.FC<InputProps> = ({ placeholder, maskType, ...rest }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const isFilled = rest.value !== '';
  const isHighlighted = isFilled || isFocused;

  const renderInput = () => {
    const sharedProps = {
      onFocus: handleFocus,
      onBlur: handleBlur,
      isHighlighted,
      ...rest,
    };

    if (maskType) {
      return <MaskedTextInput type={maskType} {...sharedProps} />;
    }

    return <TextInput {...sharedProps} />;
  };

  return (
    <InputWrapper>
      <Label>{placeholder}</Label>

      {renderInput()}
    </InputWrapper>
  );
};

export default Input;
