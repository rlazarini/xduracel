export function sortArray(array) {
  return array.map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const buffs = [
  {
    "nome": "Fortalecer Ataque",
    "descricao": "O poder de ataque do alvo será aumentado em 50%",
    "icon": "/buffs_debuffs/buff_attack_up.png",
    "active": true,
  },
  {
    "nome": "Aumentar Velocidade de Ataque",
    "descricao": "A velocidade de ataque do alvo aumentará em 30%",
    "icon": "/buffs_debuffs/buff_speed.png",
    "active": true,
  },
  {
    "nome": "Fortalecer Defesa",
    "descricao": "A Defesa do alvo será aumentada em 70%",
    "icon": "/buffs_debuffs/buff_defence_up.png",
    "active": true,
  },
  {
    "nome": "Imunidade",
    "descricao": "O alvo ganhará imunidade contra todos os efeitos maléficos",
    "icon": "/buffs_debuffs/buff_immune.png",
    "active": true,
  },
  {
    "nome": "Refletir Dano",
    "descricao": "O alvo retornará 30% do dano recebido em quem o atacou",
    "icon": "/buffs_debuffs/buff_reflect.png",
    "active": true,
  },
  {
    "nome": "Aumentar Taxa Crítica",
    "descricao": "A taxa crítica do alvo será aumentada em 30%",
    "icon": "/buffs_debuffs/buff_crit_up.png",
    "active": true,
  },
  {
    "nome": "Recuperação",
    "descricao": "O HP do alvo será recuperado em 15% em cada rodada",
    "icon": "/buffs_debuffs/buff_heal.png",
    "active": true,
  },
  {
    "nome": "Escudo",
    "descricao": "O Escudo absorverá uma quantia fixa de dano",
    "icon": "/buffs_debuffs/buff_shield.png",
    "active": true,
  },
  {
    "nome": "Contra-ataque",
    "descricao": "Quando atacado, o alvo contra-atacará para infligir 75% do poder de ataque como dano",
    "icon": "/buffs_debuffs/buff_counter.png",
    "active": true,
  },
  {
    "nome": "Invencível",
    "descricao": "O alvo será invencível",
    "icon": "/buffs_debuffs/buff_invinciblity.png",
    "active": true,
  },
  {
    "nome": "Aumentar Taxa de Bloqqueio de Golpe Crítico",
    "descricao": "Diminui as chanves de ser atacado com um golpe crítico em 50%",
    "icon": "/buffs_debuffs/buff_crit_down.png",
    "active": true,
  },
  {
    "nome": "Resistir",
    "descricao": "O HP do alvo não cairá abaixo de 1, mesmo quando atacado",
    "icon": "/buffs_debuffs/buff_endure.png",
    "active": true,
  },
  {
    "nome": "Defesa",
    "descricao": "O lançador dessa habilidade receberá metade do dano infligido no alvo escoltado enquanto faz o dano gerado no alvo escoltado para 0 e contra-ataca o inimigo alvo",
    "icon": "/buffs_debuffs/buff_protect.png",
    "active": true,
  },
  {
    "nome": "Shield",
    "descricao": "A runa shield será criada em todos os aliados, absorvendo dano equivalente a 15% do HP do monstro equipado com o conjunto de 2 runas shield. (A runa shield absorverá mais dano quando mais de 1 conjunto é equipado)",
    "icon": "/buffs_debuffs/buff_shield.png",
    "active": false,
  },
  {
    "nome": "Proteção da Alma",
    "descricao": "O alvo renascerá com 30% quando derrotado.",
    "icon": "/buffs_debuffs/buff_soul_protect.png",
    "active": true,
  },
  {
    "nome": "Ameaça",
    "descricao": "O inimigo só pode atacar o alvo sob o estado de ameaça ao usar a habilidade de ataque. A duração da ameaça será reduzida apenas por habilidade que ataca um único alvo inimigo. O alvo sob o estado de ameaça será infligido com 15% menos dano quando atacado.",
    "icon": "/buffs_debuffs/buff_threat.png",
    "active": true,
  },
  {
    "nome": "Vampiro",
    "descricao": "Recupera HP por 20% do dano infligido",
    "icon": "/buffs_debuffs/buff_vampire.png",
    "active": true,
  },
  {
    "nome": "Reflexão de Efeito Maléfico",
    "descricao": "Reflete efeitos maléficos concedidos ao monstro, exceto efeitos de inabilidade",
    "icon": "/buffs_debuffs/buff_magic_reflect.png",
    "active": true,
  },
]
export const debuffs = [
  {
    "nome": "Atordoar",
    "descricao": "O alvo será atordoado e não poderá atacar",
    "icon": "/buffs_debuffs/debuff_stun.png",
    "active": true,
  },
  {
    "nome": "Congelar",
    "descricao": "O alvo será congelado e não poderá atacar",
    "icon": "/buffs_debuffs/debuff_freeze.png",
    "active": true,
  },
  {
    "nome": "Enfraquecer Defesa",
    "descricao": "A defesa do alvo será diminuída em 70%",
    "icon": "/buffs_debuffs/debuff_defence_down.png",
    "active": true,
  },
  {
    "nome": "Enfraquecer Ataque",
    "descricao": "O poder de ataque do alvo diminuirá em 50%",
    "icon": "/buffs_debuffs/debuff_attack_down.png",
    "active": true,
  },
  {
    "nome": "Dano contínuo",
    "descricao": "O HP do alvo será danificado em 5% do HP MÁX toda vez que a rodada do alvo voltar. (Ignora a defesa)",
    "icon": "/buffs_debuffs/debuff_dot.png",
    "active": true,
  },
  {
    "nome": "Diminuir Velocidade de Ataque",
    "descricao": "A velocidade de ataque do alvo será diminuída em 30%",
    "icon": "/buffs_debuffs/debuff_slow.png",
    "active": true,
  },
  {
    "nome": "Dormir",
    "descricao": "O alvo adormecerá e não atacará. O alvo adormecido acorda quando atacado ou quando receber dano. Além disso, você não receberá Golpes Oblíquos ao ser atacado",
    "icon": "/buffs_debuffs/debuff_sleep.png",
    "active": true,
  },
  {
    "nome": "Aumentar a Chance de Golpe Oblíquio",
    "descricao": "As chances de acertar um golpe oblíquo aumentarão em 50%. Golpes Oblíquos diminuirão o dano em 30% e se o atacante possuir uma desvantagem de atributo, o dano será diminuído em 16% de forma adicional",
    "icon": "/buffs_debuffs/debuff_glancing_hit.png",
    "active": true,
  },
  {
    "nome": "Irrecuperável",
    "descricao": "O HP do alvo não pode ser recuperado",
    "icon": "/buffs_debuffs/debuff_block_heal.png",
    "active": true,
  },
  {
    "nome": "Bomba",
    "descricao": "Quando os turnos restantes chegam a 0, a bomba explode para causar dano que ignora Defesa e atordoa por 1 turno. O dano é afetado pelo poder de ataque do lançador e a chance de atordoar é afetada pela precisão do lançador e pela resistência do alvo",
    "icon": "/buffs_debuffs/debuff_bomb.png",
    "active": true,
  },
  {
    "nome": "Provocar",
    "descricao": "O alvo é forçado a atacar o monstro que o provocou",
    "icon": "/buffs_debuffs/debuff_provoke.png",
    "active": true,
  },
  {
    "nome": "Efeitos de Fortalecimento Bloqueados",
    "descricao": "Todos os efeitos benéficos serão bloqueados",
    "icon": "/buffs_debuffs/debuff_block_buffs.png",
    "active": true,
  },
  {
    "nome": "Silêncio",
    "descricao": "As habilidades com tempo de cooldown serão travadas. (Exceto as habilidades passivas)",
    "icon": "/buffs_debuffs/debuff_silence.png",
    "active": true,
  },
  {
    "nome": "Marca",
    "descricao": "O alvo receberá 25% de aumento de dano",
    "icon": "/buffs_debuffs/debuff_brand.png",
    "active": true,
  },
  {
    "nome": "Esquecimento",
    "descricao": "Habilidades Passivas serão travadas. Não se aplica a chefes",
    "icon": "/buffs_debuffs/debuff_oblivious.png",
    "active": true,
  },
  {
    "nome": "Remoção de Efeito Maléfico Bloqueada",
    "descricao": "Os efeitos maléficos não podem ser removidos enquanto este efeito estiver ativado. Este efeito será removido primeiro quando a habilidade de remoção de efeito maléfico for usada, e outros efeitos maléficos podem ser removidos após a remoção do bloqueio",
    "icon": "/buffs_debuffs/debuff_cleanse_block.png",
    "active": true,
  },
  {
    "nome": "Supressão",
    "descricao": "O HP é reduzido em 50% do HP MÁX se o alvo usar uma habilidade com tempo de cooldown, e o tempo de cooldown da habilidade usada é aumentado em 3 rodadas além do tempo de cooldown MÁX. A supressão é removida quando este efeito for ativado.",
    "icon": "/buffs_debuffs/debuff_suppress.png",
    "active": true,
  },
  {
    "nome": "Seal",
    "descricao": "Desativa os efeitos de conjunto de runas Despair, Vampire, Violent, Nemesis, Revenge, Destroy e Seal. Não se aplica a chefes",
    "icon": "/buffs_debuffs/debuff_seal.png",
    "active": true,
  },
  {
    "nome": "Irresistível",
    "descricao": "O alvo sob o efeito irresistível não pode resistir a nenhum efeito maléfico, incluindo todos os debuffs",
    "icon": "/buffs_debuffs/debuff_irresistible.png",
    "active": true,
  },
  {
    "nome": "Reviver Irrecuperável",
    "descricao": "Se morrer sob este efeito, não poderá ser revivido durante a batalha. Não se aplica a chefes",
    "icon": "/buffs_debuffs/debuff_unrevivable.png",
    "active": false,
  },
]
export const elementos = [
  {
    "nome": "Escuridão",
    "icon": "/elementos/dark.png",
    "active": true,
  },
  {
    "nome": "Fogo",
    "icon": "/elementos/fire.png",
    "active": true,
  },
  {
    "nome": "Luz",
    "icon": "/elementos/light.png",
    "active": true,
  },
  {
    "nome": "Água",
    "icon": "/elementos/water.png",
    "active": true,
  },
  {
    "nome": "Vento",
    "icon": "/elementos/wind.png",
    "active": true,
  },
]
export const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]