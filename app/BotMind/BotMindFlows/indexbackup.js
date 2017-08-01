import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

const common_greetings = /(^olá|^ola|^oi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;
 
const questions = {
    start: {
    botPrompt: 'Olá!, antes de começarmos, vamos falar um pouco sobre <strong>você</strong>',
    answers: [
      {
        nextId: 'yv2',
      },
    ],
  },
  yv2: {
    botPrompt: 'Você é <strong>homem</strong> ou <strong>mulher</strong>?',
    varName: 'userName',
    input: selectField(['Homem', 'Mulher']),
    answers: [
      answer: 'Homem',
        nextId: 'i',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      { nextId: 'tags' },
    ],
  },
  yv3: {
    botPrompt: 'E qual o seu <strong>nome<strong>?',
    input: textField(),
    answers: [
      {
        nextId: 'yv4'
      },
    ],
  },
  myPurpose: {
    botPrompt: 'Meu propósito é lhe ajudar em  <strong>diversas tarefas do dia-a-dia!</strong>',
    answers: [
      {
        nextId: 'yv',
      },
    ],
  },
  yv: {
    botPrompt: 'Vamos começar falando um pouco sobre <strong>você</strong>',
    answers: [
      {
        nextId: 'yv2',
      },
    ],
  },
  yv2: {
    botPrompt: 'Você é <strong>homem</strong> ou <strong>mulher</strong>?',
    varName: 'userName',
    input: selectField(['Homem', 'Mulher']),
    answers: [
      answer: 'Claro!',
        nextId: 'i',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      { nextId: 'tags' },
    ],
  },
  yv3: {
    botPrompt: 'Então, qual seu nome?',
    input: textField(),
    answers: [
      {
        answer: common_greetings,
        nextId: 'greetings_notAName',
      },
      {
        answer: common_greetings_negative,
        catchName: true,
        nextId: 'asYouCanSee',
      },
    ],
  },
  greetings_notAName: {
	  botPrompt: 'Eu ainda estou aprendendo a falar com os <strong>seres humanos</strong>, isso significa que ainda não sou tão <stroninteligente... ',
	  answers: [
	    {
	      nextId: 'greetings_whatsYourNameAgain',
	    },
	  ],
  },
  greetings_whatsYourNameAgain: {
	  botPrompt: 'Então, qual <strong>seu nome</strong>?',
	  input: textField(),
	  answers: [
	    {
	      answer: common_greetings,
	      nextId: 'greetings_notAName',
	    },
	    {
	      answer: common_greetings_negative,
	      catchName: true,
	      nextId: 'asYouCanSee',
	    },
	  ],
  },
  asYouCanSee: {
    botPrompt: 'Muito prazer, <strong>@varName</strong>!, como você pode ver, eu me lembro de todas as coisas que você me diz.',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
			{ nextId: 'vocêinterne' },
    ],
  },
  vocêinterne: {
    botPrompt: "Também posso melhorar minha fala sendo moldado por <strong>você</strong> e pela própria <strong>internet</strong>",
    answers: [
			{ nextId: 'mediaBubbles1' },
    ],
  },
  mediaBubbles1: {
    botPrompt: 'Eu também posso lhe mostrar quaisquer <strong>imagens e GIFs da internet</strong> como:',
    answers: [
			{ nextId: 'mediaBubbles2' },
    ],
  },
  mediaBubbles2: {
    botPrompt: 'http://vignette1.wikia.nocookie.net/smashbroslawlorigins/images/5/5e/Mario_Kart_Mario.gif/revision/latest?cb=20140401130354',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'select',
      },
    ],
  },
  tags: {
    botPrompt: 'Ou também posso te deixar selecionar <strong>varias dessas mensagens</strong> de uma vez só:',
    varName: 'userName',
    input: tagsField(['Muito bom!', 'Demais!', "Você é realmente um assistente incrível!"]),
    answers: [
			{ nextId: 'bagsSystem' },
    ],
  },
  bagsSystem: {
    botPrompt: "Além disso, cada pergunta que eu te fizer, me ajuda a entender sua personalidade, podendo lhe ajudar em diversos assuntos!",
    answers: [
			{ nextId: 'letsTryIt' },
    ],
  },
  letsTryIt: {
    botPrompt: "Vamos tentar!",
    answers: [
			{ nextId: 'question1' },
    ],
  },
  question1: {
    botPrompt: 'Me conte, <strong>@varName</strong> você já ouviu falar de startups?:',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    input: selectField(['Claro!', 'Não.', ]),
    answers: [
      {
        answer: 'Claro!',
        nextId: 'i',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: 'Não.',
        nextId: 'expl',
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 3 }],
      },
      {
        answer: "Ainda não tenho certeza..",
        nextId: 'hmm',
        sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  i: {
    botPrompt: 'Incrível, você é muito inteligente! ',
    answers: [
      {
        nextId: 'perg1',
      },
    ],
  },
  question3: {
    botPrompt: 'Hmmm...',
    answers: [
      {
        nextId: 'question3',
      },
    ],
  },
  expl: {
    botPrompt: 'Então deixe-me contar o que é uma <strong>startup</strong> pra você!',
    answers: [
      {
        nextId: 'resp1',
      },
    ],
  },
  resp1: {
    botPrompt: 'Dentro do segmento das empresas de pequeno porte, existe uma modalidade específica: <strong>as empresas emergentes (start-ups)</strong>, que podem ser definidas como empresas iniciantes no ramo da <strong>tecnologia</strong>',
    input: selectField(['Isso é incrível!', 'Não me importo...', "Me pergunte outra coisa!"]),
    answers: [
      {
        answer: 'Isso é incrível!',
        shouldEstimateRecommendation: true,
        nextId: 'perg1',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: "Me pergunte outra coisa!",
        shouldEstimateRecommendation: true,
        nextId: 'perg2',
        sumToBags: [{ name: 'recursion', points: 2 }],
      },
    ],
  },
  perg1: {
    botPrompt: 'Ei, <strong>@varName</strong>, eu realmente gosto de você!',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'gottaGive',
      },
    ],
  },
  perg2: {
    botPrompt: 'Claro!, <strong>@varName</strong>, eu realmente gosto de você!',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'gottaGive',
      },
    ],
  },
  gottaGive: {
    botPrompt: 'Me conte um pouco mais sobre você! Qual sua profissão?',
    input: selectField(['Programador', 'Engenheiro', 'CEO de uma grande empresa']),
    answers: [
      {
        answer: 'Programador',
        shouldEstimateRecommendation: true,
        nextId: 'rep1',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: "Engenheiro",
        shouldEstimateRecommendation: true,
        nextId: 'rep2',
        sumToBags: [{ name: 'recursion', points: 2 }],
        nextId: 'rickAndMorty2',
      },
      {
        answer: 'CEO de uma grande empresa',
        shouldEstimateRecommendation: true,
        nextId: 'rep3',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  rep1: {
    botPrompt: "My best recommendation is you should go and watch something <a href='www.adultswim.com/videos/rick-and-morty/'>fun</a>!",
    answers: [
      {
        nextId: 'rickAndMorty3',
      },
    ],
  },
  rep2: {
    botPrompt: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
    finishConversation: true,
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  rep3: {
    botPrompt: "Você é realmente importante! ",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'shroedingersCat2',
      },
    ],
  },
  shroedingersCat2: {
    botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'shroedingersCat3',
      },
    ],
  },
  shroedingersCat3: {
    botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
    answers: [
      {
        nextId: 'check_out1',
        finishConversation: true,
      },
    ],
  },
  recursion: {
    botPrompt: 'https://media.giphy.com/media/l4HnKwiJJaJQB04Zq/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'recursion2',
      },
    ],
  },
  recursion2: {
    botPrompt: "You're really a no-nonsense kind of type, huh?",
    answers: [
      {
        nextId: 'recursion3',
      },
    ],
  },
  recursion3: {
    botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'recursion4',
      },
    ],
  },
  recursion4: {
    botPrompt: 'Recursion.',
    input: selectField(['What?', 'Yes', 'No', 'Stop It']),
    answers: [
      {
        answer: 'What?',
        nextId: 'recursion3',
      },
      {
        answer: 'Yes',
        nextId: 'recursion3',
      },
      {
        answer: 'No',
        nextId: 'recursion3',
      },
      {
        answer: 'Stop It',
        nextId: 'sorry',
      },
    ],
  },
  sorry: {
    botPrompt: 'https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif',
    type: RTypes.MEDIA,
    finishConversation: true,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  check_out1: {
    botPrompt: 'Check out how to build your own, fully customizable, web-based bot in here',
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
  check_out2: {
    botPrompt: 'https://github.com/IcaliaLabs/alpha',
    type: RTypes.LINK,
    input: endOfConversation(),
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
};


export default questions;
