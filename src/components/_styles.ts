import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

const GeneralBlock = styled.div`
  margin-top: 300px;
  margin-right: 40px;
  //align-self: center;
  width: 500px;
  height: 265px;
  border: 5px solid #053608;
  border-radius: 10px;
`

export const InsideBlockTopMode = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  margin-left: 23px;
  margin-top: 25px;
  width: 450px;
  height: 120px;
  border: 5px solid #053608;
  border-radius: 10px;

  /* Добавим стили для дочерних элементов */

  > * {
    align-self: center;
  }

  > :nth-child(odd) {
    grid-column: 1; /* Для нечетных элементов - первая колонка */
    justify-self: start
  }

  > :nth-child(even) {
    grid-column: 2; /* Для четных элементов - вторая колонка */
    justify-self: start
  }
`;

type GridProps = {
  isMax: boolean
  message: string | null
}

const SpanValueShow = styled.span<GridProps>`
  align-self: center;
  color: ${props => props.isMax || props.message === 'Incorrect Value' ? 'red' : 'deepskyblue'};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  font-size: 30px;
`

export const SpanValue = styled.span`
  font-size: 35px;
  margin-left: 30px;
  color: deepskyblue;
  font-weight: 700;
`

type InputType = {
  message: string | null
}

export const InputValue = styled.input<InputType>`
  background-color: ${props => props.message === 'Incorrect Value' ? "#f34949" : ''};
  height: 25px;
  width: 150px;
  margin-right: 10px;
  display: inline-block;
  border: 3px solid #0f9382;
  border-radius: 5px;
  text-align: center;
  color: #04173a;
  font-weight: 700;
`;

const InsideBlockBottom = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 23px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 450px;
  height: 60px;
  border: 5px solid #053608;
  border-radius: 10px;
`

const Button = styled.button`
  align-self: center;
  font-weight: 700;
  width: 70px;
  height: 25px;
  border-radius: 5px;
  margin: 5px;
`

const InsideBlockShow = styled.div`
  margin-left: 23px;
  margin-top: 25px;
  width: 450px;
  height: 120px;
  border: 5px solid #053608;
  border-radius: 10px;
`

export const S = {
  Wrapper,
  GeneralBlock,
  InsideBlockTopMode,
  InsideBlockBottom,
  InsideBlockShow,
  SpanValue,
  InputValue,
  Button,
  SpanValueShow,
}
