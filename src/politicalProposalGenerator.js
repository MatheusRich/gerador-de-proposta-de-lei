function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[randomInt(0, keys.length)]];
}

function shuffle(originalArray) {
  let array = [...originalArray];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class RandomCache {
  constructor(array) {
    this.array = shuffle(array);
    this.used = [];
  }

  get() {
    if (this.array.length === 0) {
      this.array = shuffle(this.used);
      this.used = [];
    }

    const item = this.array.shift();
    this.used.push(item);

    return item;
  }
}

class BenefitProposal {
  actions = new RandomCache([
    'Novo benefício estadual',
    'Novo incentivo Federal',
    'Novo programa da prefeitura',
    'Será criada uma nova taxa',
    'Será instituído um novo imposto',
  ]);

  benefits = new RandomCache([
    'para instituir um feriado homenageando',
    'para plantar uma árvore para',
    'que concede auxílio-moradia para',
    'que concede auxílio-paletó para',
    'que concede barras de chocolate para',
    'que concede vale-cultura para',
    'que concede vale-refeição para',
    'que concede vale-transporte para',
  ]);

  receivers = new RandomCache([
    'apicultores',
    'aposentados e pensionistas',
    'artistas de praia',
    'bodybuilders',
    'coaches',
    'concurseiros',
    'crossfiteiros',
    'desempregados',
    'eleitores da Dilma',
    'eleitores do Bolsonaro',
    'eleitores do Dória',
    'eleitores do Lula',
    'estudantes de Educação Física',
    'jovens diabéticos',
    'músicos',
    'negativados',
    'pescadores esportivos',
    'pessoas com faturas atrasadas',
    'produtores de leite',
    'servidores públicos',
    'veganos',
    'viciados em Twitter',
    'vítimas de COVID-19',
  ]);

  generate() {
    const action = this.actions.get();
    const benefit = this.benefits.get();
    const receiver = this.receivers.get();

    return action + ' ' + benefit + ' ' + receiver + '.';
  }
}

class ProhibitionProposal {
  actions = new RandomCache([
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
  ]);

  targets = new RandomCache([
    'a adição de açúcar no café',
    'a escuta de k-pop',
    'a escuta de sertanejo universitário',
    'a leitura de Olavo de Carvalho',
    'a leitura de Paulo Freire',
    'a posse de coelhos',
    'a realização de bailes funk',
    'a venda de Whey Protein',
    'aplicativos de carona compartilhada',
    'bom dia em grupo de WhatsApp',
    'grupo de família no WhatsApp',
    'lives de sertanejo',
    'o consumo de açaí',
    'o consumo de bebidas alcoólicas',
    'o consumo de jiló',
    'o consumo de pequi',
    'o consumo de quiabo',
    'o consumo de refrigerantes',
    'o consumo de água com gás',
    'o novo acordo ortográfico',
    'o uso de crocs',
    'o uso de samba canção',
    'sopa na janta',
    'versões forró de músicas internacionais',
    'vídeos de Fortnite',
  ]);

  objectives = new RandomCache([
    'em defesa da democracia',
    'em defesa da família',
    'em defesa dos direitos do trabalhador',
    'em defesa dos direitos humanos',
    'em defesa dos valores cristãos',
    'em vias públicas',
    'para combater a URSAL',
    'para combater a doutrinação nas escolas',
    'para combater a obesidade',
    'para combater aglomerações',
    'para combater as fake news',
    'para combater o capitalismo',
    'para combater o comunismo',
    'para combater o desmatamento da Amazônia',
    'para lutar contra o fascismo',
    'para melhorar a educação',
    'para melhorar o transporte rodoviário',
    'para movimentar a economia',
  ]);

  generate() {
    const action = this.actions.get();
    const target = this.targets.get();
    const objective = this.objectives.get();
    return action + ' ' + target + ' ' + objective + '.';
  }
}

class PermissionProposal {
  actions = new RandomCache([
    'Permitir',
    'Incentivar',
    'Obrigar',
    'Subsidiar',
    'Estimular',
    'Encorajar',
  ]);

  targets = new RandomCache([
    'a construção de cassinos',
    'a construção de usinas nucleares',
    'a extração de nióbio',
    'a realização de rinhas de galo',
    'a volta das tirinhas de meme',
    'a volta do Orkut',
    'a volta do RBD',
    'jogo do bicho',
    'o congelamento do preço de sushi',
    'o consumo de Cloroquina',
    'o consumo de maconha',
    'o fim das lives de sertanejo',
    'o uso de doping nos esportes',
  ]);

  wheres = new RandomCache([
    'em Itaquaquecetuba',
    'em Pindamonhangaba',
    'em anos bissextos',
    'em dias chuvosos',
    'em dias frios',
    'em dias quentes',
    'em fins de semana',
    'em parques públicos',
    'em praias de nudismo',
    'em shopping centers',
    'em todas as cidades',
    'em todo território nacional',
    'em universidades federais',
    'em vias públicas',
    'no Acre',
    'no Beto Carrero World',
    'uma vez por ano',
  ]);

  generate() {
    const action = this.actions.get();
    const target = this.targets.get();
    const where = this.wheres.get();
    return action + ' ' + target + ' ' + where + '.';
  }
}

const benefitProposal = new BenefitProposal();
const prohibitionProposal = new ProhibitionProposal();
const permissionProposal = new PermissionProposal();

const proposalKinds = {
  BENEFIT: benefitProposal,
  PROHIBITION: prohibitionProposal,
  PERMISSION: permissionProposal,
};

function generateProposal() {
  const randomProposal = randomProperty(proposalKinds);
  return randomProposal.generate();
}

window.onload = function () {
  let proposalElement = document.querySelector('.Proposal-text');
  let newProposalBtn = document.querySelector('[data-new-proposal]');
  let shareBtn = document.querySelector('[data-share]');
  let shareBtnText = !!navigator.share
    ? 'Compartilhar proposta'
    : 'Copiar proposta';
  shareBtn.innerHTML = shareBtnText;

  proposalElement.innerHTML = generateProposal();

  newProposalBtn.onclick = function () {
    shareBtn.innerHTML = shareBtnText;
    proposalElement.innerHTML = generateProposal();
  };

  shareBtn.onclick = async function () {
    try {
      await navigator.share({
        title: 'Gerador de Proposta de Lei',
        text: `"${proposalElement.innerHTML}"`,
        url: window.location.href,
      });
    } catch (err) {
      navigator.clipboard.writeText(`"${proposalElement.innerHTML}"`);
      shareBtn.innerHTML = 'Copiado!';
    }
  };
};
