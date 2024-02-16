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
  border: 3px solid #053608;
  border-radius: 10px;
`

const InsideBlockTopMode = styled.div`
  display: grid;
  grid-template-columns: auto auto; /* 2 колонки */
  grid-template-rows: auto auto; /* 2 строки */
  gap: 10px;

  margin-left: 23px;
  margin-top: 25px;
  width: 450px;
  height: 120px;
  border: 3px solid #053608;
  border-radius: 10px;
`

interface GridProps {
  gridColumn: string;
  gridRow: string;
  justifySelf?: string;
}

const SpanValue = styled.span<GridProps>`
  font-size: 35px;
  margin-left: 30px;
  margin-top: 9px;
  color: deepskyblue;
  grid-column: ${props => props.gridColumn}; /* колонка */
  grid-row: ${props => props.gridRow}; /* строка */
  font-weight: 700;
`
const SpanValueShow = styled.span`
  align-self: center;
  font-weight: 700;
  color: deepskyblue;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  margin-top: 27px;
`

const InputValue = styled.input<GridProps>`
  grid-column: ${props => props.gridColumn}; /* колонка */
  grid-row: ${props => props.gridRow}; /* строка */
  justify-self: ${props => props.justifySelf || 'start'}; /* выравнивание по умолчанию */
  //grid-area: iv;
  height: 25px;
  width: 150px;
  margin-top: 13px;
  margin-right: 10px;
  display: inline-block;
  border: 3px solid #0f9382;
  border-radius: 5px;
  text-align: center;
  color: #04173a;
  font-weight: 700;
`

const InsideBlockBottom = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 23px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 450px;
  height: 60px;
  border: 3px solid #053608;
  border-radius: 10px;
`

const Button = styled.button`
  align-self: center;
  font-weight: 700;
  width: 70px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid goldenrod;
  margin: 5px;

  &:hover {
    color: green;
    background-color: darkred;
  }
`

const InsideBlockShow = styled.div`
  margin-left: 23px;
  margin-top: 25px;
  width: 450px;
  height: 120px;
  border: 3px solid #053608;
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
  SpanValueShow
}
