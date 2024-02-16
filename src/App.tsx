import React from 'react';
import './App.css';
import {S} from './components/_styles'


function App() {

  return (
    <S.Wrapper>
      <S.GeneralBlock>
        <S.InsideBlockTopMode>
          <S.SpanValue
            gridColumn="1 / 2"
            gridRow="1">
            max value:
          </S.SpanValue>
          <S.InputValue
            type="number"
            gridColumn="2 / 3"
            gridRow="1"
            justifySelf="end"/>
          <S.SpanValue
            gridColumn="1 / 2"
            gridRow="2">
            start value:
          </S.SpanValue>
          <S.InputValue
            type="number"
            gridColumn="2 / 3"
            gridRow="2"
            justifySelf="end"/>
        </S.InsideBlockTopMode>
        <S.InsideBlockBottom>
          <S.Button>SET</S.Button>
        </S.InsideBlockBottom>
      </S.GeneralBlock>
      <S.GeneralBlock>
        <S.InsideBlockShow>
          <S.SpanValueShow>1</S.SpanValueShow>
        </S.InsideBlockShow>
        <S.InsideBlockBottom>
          <S.Button>INC</S.Button>
          <S.Button>RESET</S.Button>
        </S.InsideBlockBottom>
      </S.GeneralBlock>
    </S.Wrapper>
  )
}

export default App
