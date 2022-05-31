import { useCallback, useContext, useEffect, useState } from 'react'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'

import { ProgressContext } from '../context/progress'
import { questions } from '../config'

import { useNavigate } from 'react-router-dom'

import brincadeiras from '../assets/brincadeiras.png'

export const Brincadeiras = () => {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const { handleState } = useContext(ProgressContext)

  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    },
    botao: {
      width: 264,
      background: '#00773E',
      color: '#FFF',
      maxWidth: '100%',
      transition: 'all .3s',
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      fontSize: 13,
      border: 'none'
    }
  }

  useEffect(() => {
    const itemsDone = JSON.parse(localStorage.getItem('progress'))
    if (itemsDone != '') {
      for (const key in itemsDone) {
        questions[itemsDone[key]].done = true
      }
    }
    setItems(questions)
  }, [])

  const handleStep = async (step) => {
    await handleState(step)
    navigate('/main')
  }

  const render = useCallback(() => {
    return items.map((item) => {
      if (item.done) {
        return (
          <Button
            disabled={item.done}
            className={item.done ? 'button done' : 'button'}
            key={item.index}
            onClick={() => {
              handleStep(item.index)
            }}
            label={item.title}
            style={style.botao}
          >
            <img src={item.icon} alt="" style={{maxHeight: 45}} />
          </Button>
        )
      } else {
        return (
          <Button
            disabled={item.done}
            className={item.done ? 'button done' : 'button'}
            key={item.index}
            onClick={() => {
              handleStep(item.index)
            }}
            label={`BRINCADEIRA ${item.index + 1}`}
            style={style.botao}
          >
          </Button>
        )
      }
    })
  }, [items])

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%', height: 'calc(100vh - 83px)', paddingTop: 30, textAlign: 'center' }}>
          <img src={brincadeiras} alt="" style={{ maxWidth: '100%' }} />
          <div
            className="perguntas"
            style={{
              paddingTop: 40,
              display: 'flex',
              rowGap: 10,
              columnGap: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              margin: '0 auto',
              maxWidth: 550
            }}
          >
            {render()}
          </div>
        </Container>
      </div>
    </>
  )
}
