function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[randomInt(0, keys.length)]];
}

function shuffle(array) {
  return [...array].sort(function () {
    return Math.random() - 0.5;
  });
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
    'que concede auxílio-paletó para',
    'que concede barras de chocolate para',
    'que concede vale-cultura para',
    'que concede vale-refeição para',
  ]);

  receivers = new RandomCache([
    'adultos desempregados',
    'apicultores',
    'bodybuilders',
    'coaches',
    'concurseiros',
    'crossfiteiros',
    'eleitores da Dilma',
    'eleitores do Bolsonaro',
    'eleitores do Dória',
    'eleitores do Lula',
    'estudantes de Educação Física',
    'jovens diabéticos',
    'negativados',
    'pescadores esportivos',
    'pessoas com faturas atrasadas',
    'produtores de leite',
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
    'a escuta de k-pop',
    'a escuta de sertanejo universitário',
    'a realização de bailes funk',
    'a venda de Whey Protein',
    'bom dia em grupo de WhatsApp',
    'o consumo de açaí',
    'o consumo de jiló',
    'o consumo de pequi',
    'o consumo de quiabo',
    'o consumo de água com gás',
    'o consumo de refrigerantes',
    'o consumo de bebidas alcoólicas',
    'o novo acordo ortográfico',
    'o uso de crocs',
    'o uso de samba canção',
    'versões forró de músicas internacionais',
    'vídeos de Fortnite',
  ]);

  objectives = new RandomCache([
    'em defesa da democracia',
    'em defesa da família',
    'em defesa dos direitos humanos',
    'em defesa dos valores cristãos',
    'em vias públicas',
    'para combater a URSAL',
    'para combater a doutrinação nas escolas',
    'para combater a obesidade',
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
    'a realização de rinhas de galo',
    'a volta do Orkut',
    'a volta do RBD',
    'jogo do bicho',
    'o congelamento do preço de sushi',
    'o consumo de Cloroquina',
    'o consumo de maconha',
    'o uso de doping nos esportes',
  ]);

  wheres = new RandomCache([
    'em fins de semana',
    'em parques públicos',
    'em praias de nudismo',
    'em shopping centers',
    'em todas as cidades',
    'em todo território nacional',
    'em vias públicas',
    'no Acre',
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
  proposalElement.innerHTML = generateProposal();

  newProposalBtn.onclick = function () {
    proposalElement.innerHTML = generateProposal();
  };

  let shareBtn = document.querySelector('[data-share]');
  if (!navigator.share) shareBtn.style.display = 'none';

  shareBtn.onclick = async function () {
    try {
      await navigator.share({
        title: 'Gerador de Proposta de Lei',
        text: `"${proposalElement.innerHTML}"`,
        url: window.location.href,
      });
    } catch (err) {
      this.alert(err);
    }
  };
};
