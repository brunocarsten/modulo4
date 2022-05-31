import '../styles/welcome.scoped.scss'

import { useState } from 'react'

import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { NavButton } from '../components/layout/NavButton'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'

export const Welcome = () => {
  const [step, setStep] = useState(1)

  const handleStep = () => {
    setStep(2)
  }

  const handleContent = () => {
    const Component = () => {
      if (step === 1) {
        return (
          <>
            <div className="info">
              <h1 className="title">BOAS-VINDAS!</h1>
              <p>
                Seja bem-vindo ao Quizz do Módulo 4 do Curso Comunidade e Povos Tradicionais!
              </p>
              <p>
                Sua tarefa agora será ajudar as crianças de comunidades e povos tradicionais a desbloquearem brinquedos e brincadeiras para se divertirem juntas.
              </p>
              <p>
                Para isso, responda corretamente às próximas perguntas sobre cenas do cotidiano dentro de povos e comunidades tradicionais. Boa sorte!
              </p>
            </div>
            <Button
              onClick={handleStep}
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#00773E', color: '#FFF' }}
            />
          </>
        )
      } else {
        return (
          <>
            <div className="info">
              <ul>
                <li>
                  <img src={image1} alt="1" />
                  <p>
                    Certifique-se de que você estudou todos os conteúdos disponíveis no Módulo 4, assim você conseguirá ter melhor desempenho no jogo.
                  </p>
                </li>

                <li>
                  <img src={image2} alt="2" />
                  <p>Clique nos brinquedos e nas brincadeiras que estão numerados para conhecer as perguntas sobre as cenas do cotidiano dentro de povos e comunidades tradicionais.</p>
                </li>

                <li>
                  <img src={image3} alt="3" />
                  <p>Ao longo do desafio, você precisará escolher a alternativa correta entre as demais apresentadas.</p>
                </li>

                <li>
                  <img src={image4} alt="4" />
                  <p>Para desbloquear cada brinquedo ou brincadeira e se divertir com a criançada, será necessário acertar a questão. Em caso de resposta incorreta, você poderá tentar novamente. </p>
                </li>

                <li>
                  <img src={image5} alt="5" />
                  <p>Se acertar todas as questões, você vencerá o jogo, e as crianças poderão escolher a diversão do dia. </p>
                </li>

                <li>
                  <img src={image6} alt="6" />
                  <p>Se tiver dúvidas, reveja as aulas e revise os conteúdos.</p>
                </li>
              </ul>
            </div>
            <NavButton
              url="/brincadeiras"
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#00773E', color: '#FFF' }}
            />
          </>
        )
      }
    }

    return <Component />
  }

  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%' }}>
          <div style={style.content}>{handleContent()}</div>
        </Container>
      </div>
    </>
  )
}
