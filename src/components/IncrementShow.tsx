import React, {FC} from 'react';
import {S} from './_styles';

type IncrementShowType = {
  value: number
  isMaxValue: boolean
  message: string | null
}

export const IncrementShow: FC<IncrementShowType> = ({
  value,
  isMaxValue,
  message
}) => {

  const displayValue = message ? message : value

  return <S.InsideBlockShow>
    <S.SpanValueShow
      message={message}
      isMax={isMaxValue}>
      {displayValue}
    </S.SpanValueShow>
  </S.InsideBlockShow>
};
