import React, {FC} from 'react';
import {S} from './_styles';
import {Input} from './Input';

type InputType = {
  setStartValue: (value: number) => void
  setMaxValue: (value: number) => void
  startValue: number
  maxValue: number
  setMessage: (error: string) => void
  message: string | null
}

export const ValueModePanel: FC<InputType> = ({
  setStartValue,
  setMaxValue,
  startValue,
  maxValue,
  setMessage,
  message
}) => {

const onChangeStartValueHandler = (value: number) => {
  setStartValue(value)
}

const onChangeMaxValueHandler = (value: number) => {
  setMaxValue(value)
}

  return <S.InsideBlockTopMode>
    <Input message={message}  inputValue={maxValue} valueName={'max value:'} callBack={onChangeMaxValueHandler}/>
    <Input message={message } inputValue={startValue} valueName={'start value:'} callBack={onChangeStartValueHandler}/>
  </S.InsideBlockTopMode>
};
