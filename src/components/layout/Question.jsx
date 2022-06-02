import '../styles/question.scoped.scss'

import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { ProgressContext } from '../../context/progress'

import { questions } from '../../config'

export const Question = ({ ...props }) => {
  const { handleCurrentStep } = useContext(ProgressContext)
  const navigate = useNavigate()
  const { bkg, src, item } = props
  const { alternatives, question, index, message } = item

  const [selected, setSelected] = useState(0)

  const onChangeValue = (value) => {
    setSelected(value)
  }

  const handleAnswer = async () => {
    const { correct } = selected

    if (correct) {
      questions[index].done = true
      await handleCurrentStep()
      navigate('/acerto', { state: { message } })
    } else {
      navigate('/erro')
    }
  }

  let style = {}
  if (index === 2 || index === 5 || index === 6) {
    style = {
      box: {
        flexWrap: 'wrap'
      },
      content: {
        width: '100%'
      },
      image: {
        width: '100%',
        maxWidth: '100%'
      },
      button: {
        marginBottom: 10
      }
    }
  }

  return (
    <>
      <div className="box" style={{ backgroundColor: bkg, ...style.box }}>
        <div className="content" style={{ ...style.content }}>
          <p>PERGUNTA {index + 1}</p>
          <p>{question}</p>
          <ul className="alternatives">
            {alternatives.map((alternative, i) => {
              return (
                <li key={i} className={`alternative ${selected.i === i ? 'active' : ''}`}>
                  <Checkbox
                    checked={selected.i === i}
                    item={alternative}
                    onChange={() => {
                      onChangeValue({ correct: alternative.correct, i: i })
                    }}
                  />
                </li>
              )
            })}
          </ul>

          <Button
            onClick={() => {
              handleAnswer()
            }}
            label="RESPONDER"
            style={{ marginBottom: 50, background: '#00773E', color: '#FFF', ...style.button }}
          />
        </div>
        <div className="image" style={{ position: 'relative', ...style.image }}>
          <img src={src} alt="" />
        </div>
      </div>
    </>
  )
}
