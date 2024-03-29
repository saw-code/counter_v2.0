import React, {useEffect, useState} from 'react';
import './App.css';
import {S} from './components/_styles'
import {Button} from './components/Button';
import {ValueModePanel} from './components/ValueModePanel';
import {IncrementShow} from './components/IncrementShow';

function App() {
  const [increment, setIncrement] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [isMaxValue, setIsMaxValue] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const getStartValue = localStorage.getItem('startValue')
    const getMaxValue = localStorage.getItem('maxValue')
    if (getMaxValue && getStartValue) {
      setStartValue(JSON.parse(getStartValue))
      setMaxValue(JSON.parse(getMaxValue))
      setIncrement(JSON.parse(getStartValue))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    setIsMaxValue(increment === maxValue)
  }, [maxValue, startValue, increment])

  useEffect(() => {
    if (maxValue <= startValue || maxValue < 0 || startValue < 0) {
      setMessage('Incorrect Value');
    } else {
      setMessage('enter values and press \'set\'')
    }

    setIncrement(0)
    setDisabled(true)
    setIsMaxValue(false)
  }, [maxValue, startValue])

  const incrementCounter = () => {
    setIncrement(increment + 1)
    setMessage(null)
  }

  const resetCounter = () => {
    setIncrement(startValue)
  }

  const setCounter = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    resetCounter()
    setMessage(null)
    setDisabled(false)
  }

  const maxIncrementValue = increment === maxValue // disable inc и set когда инкремент равен мах значению
  const incorrectValue = startValue >= maxValue || startValue < 0 || maxValue < 0 // disable все кнопки когда некорректный ввод

  return (
    <S.Wrapper>
      <S.GeneralBlock>
        <ValueModePanel
          startValue={startValue}
          maxValue={maxValue}
          setStartValue={setStartValue}
          setMaxValue={setMaxValue}
          setMessage={setMessage}
          message={message}
        />
        <S.InsideBlockBottom>
          <Button lockButton={maxIncrementValue ? maxIncrementValue : incorrectValue || !disabled} name={'SET'}
                  callBack={setCounter}/>
        </S.InsideBlockBottom>
      </S.GeneralBlock>
      <S.GeneralBlock>
        <IncrementShow
          isMaxValue={isMaxValue}
          value={increment}
          message={message}
        />
        <S.InsideBlockBottom>
          <Button lockButton={maxIncrementValue ? maxIncrementValue : incorrectValue || disabled} name={'INC'}
                  callBack={incrementCounter}/>
          <Button lockButton={incorrectValue || disabled} name={'RESET'} callBack={resetCounter}/>
        </S.InsideBlockBottom>
      </S.GeneralBlock>
    </S.Wrapper>
  )
}

export default App
