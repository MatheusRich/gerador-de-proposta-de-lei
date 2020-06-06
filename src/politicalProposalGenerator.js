function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

function shuffle(array) {
  return array.sort(function () {
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
    'para dar auxílio-paletó',
    'para dar barras de chocolate',
    'para dar vale-cultura',
    'para dar vale-refeição',
    'para plantar uma árvore',
  ]);

  receivers = new RandomCache([
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
  ]);

  objectives = new RandomCache([
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
    'a construção de usinas nucleares',
    'a realização de rinhas de galo',
    'jogo do bicho',
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

function generateProposal() {
  const proposalKinds = {
    BENEFIT: benefitProposal,
    PROHIBITION: prohibitionProposal,
    PERMISSION: permissionProposal,
  };

  const randomProposal = randomProperty(proposalKinds);
  console.log(randomProposal);

  return randomProposal.generate();
}

window.onload = function () {
  let proposalElement = document.querySelector('.Proposal-text');
  let newProposalBtn = document.querySelector('[data-new-proposal]');
  // let shareBtn = document.querySelector('[data-share]');
  proposalElement.innerHTML = generateProposal();

  newProposalBtn.onclick = function () {
    proposalElement.innerHTML = generateProposal();
  };
};
