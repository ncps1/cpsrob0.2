import * as bc from './BotConstants'

export function defaultUserInput() {
  return {
    label: null,
    type: 'disabledFieldText',
    placeholder: 'Por favor, espere...',
  };
}

export function userMessage(message, type = 'text') {
  return {
    from: 'user',
    bubbles: [
      {
        content: message,
        type,
      },
    ],
  };
}

export function botMessage(message, type = "text", varName = "") {
  return {
    from: 'bot',
    bubbles: [
      {
        content: message,
        varName: varName,
        type,
      },
    ],
  };
}

export function optionCards(optionCardsValues){
  const optionCardsInput = {
    label: 'These are option cards!',
    type: 'optionCards',
    optionCards: [
      {
        title: 'Design',
        description: 'I need someone to help with branding, UI/UX, web, or product design.No coding. Just Design.',
      },
      {
        title: 'Design',
        description: 'I need someone to help with branding, UI/UX, web, or product design.No coding. Just Design.',
      },
      {
        title: 'Design',
        description: 'I need someone to help with branding, UI/UX, web, or product design.No coding. Just Design.',
      },
    ],
  };

  return optionCardsInput
}

export function selectField(optionsValues){

  const options = optionsValues.map((optionValue) => { return { label: optionValue, value: optionValue }; } )
  const selectInput = {
    label: null,
    type: 'select',
    options,
  };

  return selectInput;
}

export function tagsField(tagValues){

  const tags = tagValues.map((tagValue) => { return { label: tagValue, value: tagValue }; } )

  const tagsInput = {
    label: 'Escolha: ',
    type: 'tags',
    tags,
  };

  return tagsInput;
}

export function textField(textFieldValue){
  const fieldTextInput = {
    label: null,
    type: 'fieldText',
    placeholder: 'Digite aqui..',
  };

  return fieldTextInput;
}

export function disabledFieldText(){
  const fieldTextInput = {
    type: 'disabledFieldText',
    placeholder: 'Por favor, espere...',
  };

  return fieldTextInput;
}

export function endOfConversation(){
  const fieldTextInput = {
    type: 'Fim de conversa.',
    placeholder: '– ' + bc.name + ' left the conversation –',
  };

  return fieldTextInput;
}
