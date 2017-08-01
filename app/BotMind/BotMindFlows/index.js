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
	    botPrompt: 'Olá, antes de começarmos, vamos falar um pouco sobre <strong>você</strong>',
	    answers: [
	      {
	        nextId: 'myPurpose',
	      },
	    ],
	  },
	  myPurpose: {
	    botPrompt: 'Meu propósito é lhe ajudar em  <strong>diversas tarefas do dia-a-dia!</strong>',
	    answers: [
	      {
	        nextId: 'yourName',
	      },
	    ],
	  },
	  yourName: {
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
		  botPrompt: 'Eu ainda estou aprendendo a falar com os <strong>seres humanos</strong>, isso significa que ainda não sou tão <strong>inteligente...</strong> ',
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
	    botPrompt: "Também posso melhorar minha fala enquanto aprendo com <strong>você!</strong>",
	    answers: [
				{ nextId: 'mediaBubbles1' },
	    ],
	  },
	  mediaBubbles1: {
	    botPrompt: 'Posso também lhe mostrar <strong>imagens e GIFs, te ajudando a ter uma melhor ideia do que estou pensando,</strong> 	como:',
	    answers: [
				{ nextId: 'mediaBubbles2' },
	    ],
	  },
	  mediaBubbles2: {
	    botPrompt: 'https://yt3.ggpht.com/-jW_FCXQ52sU/AAAAAAAAAAI/AAAAAAAAAAA/7opo-bzggHc/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
	    type: RTypes.MEDIA,
	    answers: [
	      {
	        nextId: 'select',
	      },
	    ],
	  },
	  select: {
	    botPrompt: 'Também posso lhe oferecer <strong>mensagens pré definidas</strong> o que tornará seu dia mais dinâmico!',
	    varName: 'userName',
	    input: selectField(['Legal!', 'Isso é incrível!']),
	    answers: [
				{ nextId: 'tags' },
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
	    botPrompt: "Veja só:",
	    answers: [
				{ nextId: 'question1' },
	    ],
	  },
	  question1: {
	    botPrompt: 'Me conte, <strong>@varName</strong> você já ouviu falar de startups?',
	    type: RTypes.TRANSFORMED_TEXT,
	    varName: 'userName',
	    input: selectField(['Claro!', 'Não.', ]),
	    answers: [
	      {
	        answer: 'Sim',
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
	        nextId: 'question3',
	      },
	    ],
	  },
	  question3: {
	    botPrompt: 'Hmmm...',
	    answers: [
	      {
	        nextId: 'perg1',
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
	        answer: 'Não me importo...',
	        shouldEstimateRecommendation: true,
	        nextId: 'perg2',
	        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 1 }],
	      },
	      {
	        answer: "Me pergunte outra coisa!",
	        shouldEstimateRecommendation: true,
	        nextId: 'perg3',
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
	  gottaGive: {
	    botPrompt: 'Me conte um pouco mais sobre você! Qual sua profissão?',
	    input: selectField(['Programador', 'Engenheiro', 'CEO de uma grande empresa']),
	    answers: [
	      {
	        nextId: 'rickAndMorty2',
	      },
	    ],
	  },
	};


	export default questions;
