// image imports
import image1 from '../assets/pergunta 1.png'
import image2 from '../assets/pergunta 2.png'
import image3 from '../assets/pergunta 3.png'
import image4 from '../assets/pergunta 4.png'
import image5 from '../assets/pergunta 5.png'
import image6 from '../assets/pergunta 6.png'
import image7 from '../assets/pergunta 7.png'

import icon1 from '../assets/brincadeira 1.png'
import icon2 from '../assets/brincadeira 2.png'
import icon3 from '../assets/brincadeira 3.png'
import icon4 from '../assets/brincadeira 4.png'
import icon5 from '../assets/brincadeira 5.png'
import icon6 from '../assets/brincadeira 6.png'
import icon7 from '../assets/brincadeira 7.png'

// questions
export const questions = [
  {
    index: 0,
    title: 'PETECA',
    question:
      'As crianças pertencentes a povos e comunidades tradicionais ciganos, indígenas, quilombolas e de terreiros têm em comum experiência pautada:',
    alternatives: [
      {
        correct: false,
        text: 'No desenvolvimento individual, a partir do qual interferem no cotidiano de suas comunidades.'
      },
      {
        correct: true,
        text: 'Nos espaços de sociabilidade coletivos e colaborativos, com o aprendizado pautado na experiência e na relação com os membros do grupo.'
      },
      {
        correct: false,
        text: 'Na socialização familiar, como fator primário, que se restringe aos moradores de suas casas.'
      },
      {
        correct: false,
        text: 'Na busca por referências externas que possam contribuir para o desenvolvimento do grupo.'
      }
    ],
    image: image1,
    icon: icon1,
    message: 'Povos e comunidades tradicionais são muito comunitários, e a maioria de suas atividades são coletivas!'
  },
  {
    index: 1,
    title: 'ARCO E FLECHA',
    question: 'Não se constitui atitude positiva no trabalho técnico social com povos e comunidades tradicionais:',
    alternatives: [
      {
        correct: false,
        text: 'A adoção de abordagem e procedimentos metodológicos pautados no diálogo e no respeito intercultural.'
      },
      {
        correct: false,
        text: 'O conhecimento do território (potencialidades, recursos, vulnerabilidades) e da cultura (tradições, organização social e parentesco, visão de mundo) dos povos que ali habitam.'
      },
      {
        correct: false,
        text: 'A consciência crítica e o espírito pesquisador por parte dos profissionais da assistência social acerca da realidade local.'
      },
      {
        correct: true,
        text: 'O atendimento individual sem interferência e olhar para o contexto mais amplo.'
      }
    ],
    image: image2,
    icon: icon2,
    message:
      'Os atendimentos nas comunidades devem ocorrer de forma comunitária e sempre devem considerar o contexto e os costumes locais.'
  },
  {
    index: 2,
    title: 'CABO DE GUERRA',
    question:
      'As narrativas sobre os quatro grupos (ciganos, indígenas, quilombolas e terreiros) apontam que a infância deve ser compreendida:',
    alternatives: [
      {
        correct: false,
        text: 'Como fase peculiar de desenvolvimento homogêneo, independentemente do contexto.'
      },
      {
        correct: false,
        text: 'Como período de desenvolvimento voltado apenas para a individualidade e formação da subjetividade dos sujeitos.'
      },
      {
        correct: true,
        text: 'Como etapa da vida que pode ser vivenciada de múltiplas formas, a depender do contexto sociocultural.'
      },
      {
        correct: false,
        text: 'Como momento de repetição, imitação e aquisição de comportamentos sociais, com pouco protagonismo e intervenção das crianças.'
      }
    ],
    image: image3,
    icon: icon3,
    message: 'A infância é uma das fases mais importantes da vida e deve ser vivida de forma plena, feliz e saudável.'
  },
  {
    index: 3,
    title: 'JOGO DA ONÇA',
    question: 'De acordo com as cenas do cotidiano sobre a comunidade cigana, é correto afirmar que:',
    alternatives: [
      {
        correct: true,
        text: 'O exemplo dado se trata de comunidade fixa de ciganos que, durante o período letivo, se mantinham fixos na região e se dispersavam em período de recesso escolar.'
      },
      {
        correct: false,
        text: 'Assim como é tradição em comunidades ciganas, o nascimento da criança ocorreu de forma discreta.'
      },
      {
        correct: false,
        text: 'Segundo a tradição, as crianças frequentam escolas feitas exclusivamente para ciganos.'
      },
      {
        correct: false,
        text: 'As cenas demonstram de forma clara a criação da criança, que ocorre centrada na unidade familiar.'
      }
    ],
    image: image4,
    icon: icon4,
    message:
      'Essa é uma forma de manter os costumes ciganos de serem itinerantes, mas com a garantia de acesso das crianças à educação.'
  },
  {
    index: 4,
    title: 'BONECOS DE PALHA E MADEIRA',
    question: 'Sobre as cenas do cotidiano apresentadas na comunidade indígena, marque a alternativa incorreta:',
    alternatives: [
      {
        correct: true,
        text: 'É comum que todos falem apenas a língua materna e que somente o cacique aprenda português para se comunicar com os espaços fora da comunidade.'
      },
      {
        correct: false,
        text: 'O cacique lidera as decisões comunitárias e está atento às movimentações, com autoridade sobre quem entra e quem sai do seu território.'
      },
      {
        correct: false,
        text: 'As crianças costumam circular pela aldeia, observar e aprender técnicas, danças e cânticos indígenas.'
      },
      {
        correct: false,
        text: 'As crianças utilizam brinquedos feitos artesanalmente com uso de palhas, sementes e outros objetos locais.'
      }
    ],
    image: image5,
    icon: icon5,
    message:
      'Geralmente, o cacique costuma falar português para se comunicar com os espaços de fora da comunidade, e os demais falam somente a língua materna.'
  },
  {
    index: 5,
    title: 'CAMA DE GATO',
    question: 'Sobre as cenas do cotidiano na comunidade quilombola, marque a alternativa incorreta:',
    alternatives: [
      {
        correct: false,
        text: 'É comum que, enquanto crescem, as crianças escutem contos das pessoas mais velhas, os quais remontam à história do território e dos seus ancestrais.'
      },
      {
        correct: false,
        text: 'Muitas crianças nascem na própria comunidade, pois é comum que gestantes sejam acompanhadas por parteiras locais.'
      },
      {
        correct: true,
        text: 'Quilombos já foram símbolo de luta e resistência, mas os costumes e as tradições atuais não levam em consideração a história dos seus ancestrais.'
      },
      {
        correct: false,
        text: 'Ainda hoje, existem quilombos em situação de vulnerabilidade social. A atuação do Estado é importante para amparar e levar serviços públicos para essas comunidades, por exemplo, o Programa Criança Feliz. '
      }
    ],
    image: image6,
    icon: icon6,
    message:
      'Ainda hoje, os quilombos são símbolo de luta e resistência, e seus costumes e suas tradições são baseados na história dos seus ancestrais.'
  },
  {
    index: 6,
    title: 'CANTIGAS DE RODA',
    question: 'Sobre as cenas do cotidiano no terreiro de Tambor de Mina, marque a alternativa incorreta:',
    alternatives: [
      {
        correct: false,
        text: 'Enquanto crescem, as crianças cantam cantigas religiosas, ouvem os contos das divindades e participam dos rituais religiosos.'
      },
      {
        correct: true,
        text: 'As famílias de terreiros costumam ser bem pequenas, mas as crianças convivem com amigos da comunidade de terreiro durante a infância.'
      },
      {
        correct: false,
        text: 'A cena apresentada demonstra alguns preceitos cumpridos pelos praticantes da religião de matriz africana. Esses preceitos devem ser compreendidos e respeitados pelos profissionais que trabalham com essas famílias.'
      },
      {
        correct: false,
        text: 'A autoridade dentro dos terreiros são os pais e as mães de santo, que são líderes religiosos e também comunitários.'
      }
    ],
    image: image7,
    icon: icon7,
    message:
      'As famílias de terreiros costumam ser muito grandes. Então, é comum ter vários amigos da comunidade de terreiro durante a infância.'
  }
]
