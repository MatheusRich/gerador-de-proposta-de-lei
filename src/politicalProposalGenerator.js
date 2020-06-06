function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFromArray(array) {
  return array[getRandomInt(0, array.length)];
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

function generateNewBenefitProposal() {
  const actions = [
    'Novo benefício estadual',
    'Novo incentivo Federal',
    'Novo programa da prefeitura',
    'Será criada uma nova taxa',
    'Será instituído um novo imposto',
  ];

  const benefits = [
    'para dar auxílio-paletó',
    'para dar barras de chocolate',
    'para dar vale-cultura',
    'para dar vale-refeição',
    'para plantar uma árvore',
  ];

  const receivers = [
    'para adultos desempregados',
    'para apicultores',
    'para bodybuilders',
    'para concurseiros',
    'para crossfiteiros',
    'para estudantes de Educação Física',
    'para jovens diabéticos',
    'para pescadores esportivos',
    'para produtores de leite',
    'para veganos',
    'para vítimas de COVID-19',
  ];

  const action = randomFromArray(actions);
  const benefit = randomFromArray(benefits);
  const receiver = randomFromArray(receivers);

  return action + ' ' + benefit + ' ' + receiver + '.';
}

function generateNewProhibitionProposal() {
  const actions = [
    'Abolir',
    'Banir',
    'Censurar',
    'Condenar',
    'Criminalizar',
    'Impedir',
    'Limitar',
    'Proibir',
    'Reprimir',
    'Taxar',
    'Vetar',
  ];

  const targets = [
    'a escuta de sertanejo universitário',
    'a realização de bailes funk',
    'a venda de Whey Protein',
    'bom dia em grupo de WhatsApp',
    'o consumo de pequi',
    'o consumo de refrigerantes',
    'o novo acordo ortográfico',
    'o uso de samba canção',
    'versões forró de músicas internacionais',
    'vídeos de Fortnite',
  ];

  const objectives = [
    'em defesa da família',
    'em defesa dos valores cristãos',
    'em vias públicas',
    'para combater a URSAL',
    'para combater a obesidade',
    'para combater o capitalismo',
    'para combater o comunismo',
    'para combater o desmatamento da Amazônia',
    'para lutar contra o fascismo',
    'para melhorar a educação',
    'para melhorar o transporte rodoviário',
    'para movimentar a economia',
  ];

  const action = randomFromArray(actions);
  const target = randomFromArray(targets);
  const objective = randomFromArray(objectives);

  return action + ' ' + target + ' ' + objective + '.';
}

function generateNewPermissionProposal() {
  const actions = [
    'Permitir',
    'Incentivar',
    'Obrigar',
    'Subsidiar',
    'Estimular',
    'Encorajar',
  ];

  const targets = [
    'a construção de usinas nucleares',
    'a realização de rinhas de galo',
    'jogo do bicho',
    'o consumo de maconha',
    'o uso de doping nos esportes',
  ];

  const wheres = [
    'em fins de semana',
    'em parques públicos',
    'em praias de nudismo',
    'em vias públicas',
    'em shopping centers',
  ];

  const action = randomFromArray(actions);
  const target = randomFromArray(targets);
  const where = randomFromArray(wheres);

  return action + ' ' + target + ' ' + where + '.';
}

function generateProposal() {
  const proposalKinds = {
    BENEFIT: generateNewBenefitProposal,
    PROHIBITION: generateNewProhibitionProposal,
    PERMISSION: generateNewPermissionProposal,
  };

  const randomProposal = randomProperty(proposalKinds);
  return randomProposal();
}

window.onload = function () {
  let proposalElement = document.querySelector('.proposal-text');
  let buttonElement = document.querySelector('button');
  proposalElement.innerHTML = generateProposal();

  buttonElement.onclick = () =>
    (proposalElement.innerHTML = generateProposal());
};
