import React, {ChangeEvent, FC, memo} from 'react';
import {S} from './_styles';

type InputType = {
  valueName: string
  callBack: (value: number) => void
  inputValue: number
  message: string | null
}

export const Input: FC<InputType> =({
  valueName,
  callBack,
  inputValue,
  message
}) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    callBack(Number(e.currentTarget.value))
  }

  return (
    <>
      <S.SpanValue>
        {valueName}
      </S.SpanValue>
      <S.InputValue
        onChange={onChangeHandler}
        type="number"
        value={inputValue}
        message={message}
      />
    </>
  );
}
