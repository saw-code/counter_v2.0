import React, {FC} from 'react';
import {S} from './_styles';

type ButtonType = {
  name: string
  callBack: () => void
  lockButton?: boolean
}

export const Button: FC<ButtonType> = ({name, callBack, lockButton}) => {
  const onCLickHandler = () => {
    callBack()
  }

  return <S.Button disabled={lockButton} onClick={onCLickHandler}>{name}</S.Button>
};
