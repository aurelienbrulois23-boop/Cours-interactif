/* Moteur d'exercices auto-générés, et progression à la maîtrise.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI DES EXERCICES GÉNÉRÉS, ET NON UNE BANQUE
 *
 * Le programme de mathématiques du cycle 3 demande des « activités rituelles
 * de calcul » et énumère nommément les automatismes attendus en sixième
 * (CLM-MAT-002). Une banque de cent exercices s'épuise ; un générateur ne
 * s'épuise pas, et il permet la reprise espacée qu'exige la mémorisation
 * (SRC-PED-003).
 *
 * Le programme donne aussi la raison de fond, et elle n'est pas de nous :
 * la maîtrise des automatismes « allège la mémoire de travail de l'élève
 * lors de la résolution de problèmes » et « produit souvent des progrès
 * rapides, ce qui engage les élèves dans un cercle vertueux » (CLM-MAT-001).
 * La motivation vient du progrès constaté, pas d'un score.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * CE QUE CE MOTEUR N'A PAS, ET N'AURA PAS
 *
 * Ni score, ni classement, ni série à ne pas rompre, ni minuterie qui
 * sanctionne. La charte les écarte, et l'apprentissage par maîtrise n'en a
 * pas besoin : son ressort est de voir qu'on y arrive.
 *
 * Rien n'est envoyé nulle part. Tout vit dans le navigateur de l'élève, et
 * s'efface d'un bouton.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * LE SEUIL DE MAÎTRISE EST UN CHOIX, PAS UNE MESURE
 *
 * L'apprentissage par maîtrise a un effet établi, plus fort sur les élèves
 * les plus faibles — et son ampleur DÉPEND DE LA SÉVÉRITÉ DU CRITÈRE retenu
 * (CLM-PED-025). Un seuil trop laxiste annule l'effet. Les valeurs
 * ci-dessous sont donc une décision pédagogique assumée, pas un réglage
 * technique, et elles sont à un seul endroit pour être discutées :
 *
 *     5 réussites d'affilée          → « acquis, à confirmer »
 *     puis 3 réussites, un jour plus tard → « confirmé »
 *
 * La seconde étape n'est pas un ornement : sans reprise différée, on mesure
 * la mémoire de la minute, pas l'automatisme. Le programme lui-même parle
 * d'« activités rituelles », donc répétées dans le temps.
 *
 * Ce coût est réel : la maîtrise prend plus de temps qu'un survol. C'est
 * écrit dans la source, et ce n'est pas caché ici.
 */

export const SEUIL = {
  suite: 5,          // réussites consécutives pour « acquis »
  confirmation: 3,   // réussites pour confirmer, après le délai
  delaiHeures: 20,   // délai minimal avant la confirmation
  fenetre: 12,       // nombre d'essais gardés par générateur
};

/* ═══════════════════════ HASARD REPRODUCTIBLE ═══════════════════════════ *
 * Un exercice tiré d'une graine peut être rejoué à l'identique — utile pour
 * qu'un professeur puisse regarder exactement ce que l'élève a eu.        */

export function graine(n) {
  let a = n >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const entre = (r, a, b) => a + Math.floor(r() * (b - a + 1));
const parmi = (r, l) => l[Math.floor(r() * l.length)];

/* Écriture française des nombres : virgule décimale, pas de zéro inutile. */
function fr(x, decimales) {
  let s = (decimales === undefined ? x : Number(x).toFixed(decimales));
  s = String(s);
  if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s.replace('.', ',');
}

/* On accepte la virgule comme le point, les espaces, et les espaces fines.
 * Un élève qui écrit « 0.1 » n'a pas fait d'erreur de mathématiques.      */
export function normalise(s) {
  return String(s == null ? '' : s)
    .replace(/ | |\s/g, '')
    .replace(',', '.')
    .replace(/^\+/, '')
    .replace(/^(-?)0+(\d)/, '$1$2')
    .replace(/(\.\d*?)0+$/, '$1')
    .replace(/\.$/, '');
}

export function juste(saisie, attendu) {
  const a = normalise(saisie), b = normalise(attendu);
  if (a === b) return true;
  const na = Number(a), nb = Number(b);
  return a !== '' && isFinite(na) && isFinite(nb) && Math.abs(na - nb) < 1e-9;
}

/* ═══════════════════════ LES GÉNÉRATEURS ═══════════════════════════════ *
 *
 * Chacun porte l'affirmation qui l'autorise. Un générateur sans source ne
 * rentre pas : il ferait travailler quelque chose que le programme ne
 * demande pas, au détriment de ce qu'il demande.
 *
 * « rang » ordonne la difficulté et sert au test de positionnement.        */

export const GENERATEURS = [
{
  id: 'MA6-AUT-01', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 1, source: 'CLM-MAT-002',
  nom: 'Fractions décimales et écriture à virgule',
  quoi: "Passer d'une fraction décimale à l'écriture à virgule, et l'inverse.",
  faire(r) {
    const d = parmi(r, [10, 100, 1000]);
    const n = entre(r, 1, d - 1);
    if (r() < 0.5) {
      return { enonce: `Écris <strong>${n}/${d}</strong> avec une virgule.`,
               reponse: fr(n / d), aide: `${d} au dénominateur, donc ${String(d).length - 1} chiffre(s) après la virgule.` };
    }
    return { enonce: `Écris <strong>${fr(n / d)}</strong> sous forme de fraction de dénominateur ${d}.`,
             reponse: String(n), aide: `Combien de ${1}/${d} y a-t-il dans ce nombre ?`,
             suffixe: `/${d}` };
  }
},
{
  id: 'MA6-AUT-02', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 2, source: 'CLM-MAT-002',
  nom: 'Relations entre les unités de numération',
  quoi: "Combien de dixièmes dans une unité, de millièmes dans un centième…",
  faire(r) {
    const u = [['1', 1], ['1/10', 0.1], ['1/100', 0.01], ['1/1000', 0.001]];
    let i = entre(r, 0, 2), j = entre(r, i + 1, 3);
    const f = Math.round(u[i][1] / u[j][1]);
    return { enonce: `Combien de fois <strong>${u[j][0]}</strong> faut-il pour faire <strong>${u[i][0]}</strong> ?`,
             reponse: String(f), aide: "On multiplie par 10 à chaque rang qu'on descend." };
  }
},
{
  id: 'MA6-AUT-03', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 3, source: 'CLM-MAT-002',
  nom: 'Somme de fractions décimales',
  quoi: "Reconnaître qu'une somme de fractions décimales et un nombre à virgule sont le même nombre.",
  faire(r) {
    const e = entre(r, 1, 9), a = entre(r, 0, 9), b = entre(r, 0, 9), c = entre(r, 1, 9);
    const val = e + a / 10 + b / 100 + c / 1000;
    const morceaux = [`${e}`];
    if (a) morceaux.push(`${a}/10`);
    if (b) morceaux.push(`${b}/100`);
    morceaux.push(`${c}/1000`);
    return { enonce: `Écris avec une virgule : <strong>${morceaux.join(' + ')}</strong>`,
             reponse: fr(val), aide: "Chaque fraction donne un chiffre à son rang : dixièmes, centièmes, millièmes." };
  }
},
{
  id: 'MA6-AUT-04', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 4, source: 'CLM-MAT-002',
  nom: 'Multiplier un décimal par 10, 100, 1000',
  quoi: "Appliquer la procédure sans compter les zéros au hasard.",
  faire(r) {
    const m = parmi(r, [10, 100, 1000]);
    const x = (entre(r, 101, 9999) / parmi(r, [10, 100, 1000]));
    return { enonce: `Calcule : <strong>${fr(x)} × ${m}</strong>`,
             reponse: fr(Math.round(x * m * 1e6) / 1e6),
             aide: `Multiplier par ${m}, c'est décaler chaque chiffre de ${String(m).length - 1} rang(s) vers la gauche.` };
  }
},
{
  id: 'MA6-AUT-05', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 5, source: 'CLM-MAT-002',
  nom: 'Diviser un décimal par 10, 100, 1000',
  quoi: "Appliquer la procédure inverse, sans confondre les deux sens.",
  faire(r) {
    const m = parmi(r, [10, 100, 1000]);
    const x = entre(r, 12, 9999) / parmi(r, [1, 10, 100]);
    return { enonce: `Calcule : <strong>${fr(x)} ÷ ${m}</strong>`,
             reponse: fr(Math.round(x / m * 1e9) / 1e9),
             aide: `Diviser par ${m}, c'est décaler chaque chiffre de ${String(m).length - 1} rang(s) vers la droite.` };
  }
},
{
  id: 'MA6-AUT-06', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 6, source: 'CLM-MAT-002',
  nom: 'Comparer deux nombres décimaux',
  quoi: "Comparer sans se laisser tromper par le nombre de chiffres.",
  faire(r) {
    // On fabrique exprès des paires où le plus long n'est pas le plus grand.
    const ent = entre(r, 0, 12);
    const a = ent + entre(r, 1, 9) / 10;
    const b = ent + entre(r, 10, 99) / 100;
    const x = fr(a), y = fr(b);
    const signe = a > b ? '>' : (a < b ? '<' : '=');
    return { enonce: `Compare : <strong>${x} … ${y}</strong><br><span class="fine">Réponds par &lt;, &gt; ou =</span>`,
             reponse: signe, choix: ['<', '>', '='],
             aide: "On compare rang par rang, en partant de la gauche. Le nombre de chiffres ne dit rien." };
  }
},
{
  id: 'MA6-AUT-07', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 7, source: 'CLM-MAT-002',
  nom: 'Valeur arrondie',
  quoi: "Arrondir à l'unité, au dixième ou au centième.",
  faire(r) {
    const rangs = [['à l’unité', 0], ['au dixième', 1], ['au centième', 2]];
    const [nom, d] = parmi(r, rangs);
    const x = entre(r, 1000, 99999) / 1000;
    return { enonce: `Donne la valeur arrondie <strong>${nom}</strong> de <strong>${fr(x)}</strong>.`,
             reponse: fr(Number(x.toFixed(d))),
             aide: "On regarde le chiffre juste après le rang demandé : 5 ou plus, on monte." };
  }
},
{
  id: 'MA6-AUT-08', discipline: 'mathematiques', niveau: '6e',
  domaine: 'Nombres et calcul', rang: 8, source: 'CLM-MAT-002',
  nom: 'Valeur d’un chiffre selon son rang',
  quoi: "Ne pas confondre le chiffre et ce qu'il vaut.",
  faire(r) {
    const rangs = [['des dixièmes', 0.1, 1], ['des centièmes', 0.01, 2], ['des millièmes', 0.001, 3]];
    const [nom, pas, pos] = parmi(r, rangs);
    const ent = entre(r, 1, 99);
    const dec = entre(r, 100, 999);
    const x = ent + dec / 1000;
    const chiffre = Number(String(dec).padStart(3, '0')[pos - 1]);
    return { enonce: `Dans <strong>${fr(x)}</strong>, quelle est la <strong>valeur</strong> du chiffre ${nom} ?`,
             reponse: fr(Math.round(chiffre * pas * 1000) / 1000),
             aide: `Le chiffre est ${chiffre}. Sa valeur est ${chiffre} × ${fr(pas)}, pas ${chiffre}.` };
  }
},
];

export const parId = id => GENERATEURS.find(g => g.id === id);

export function pourNiveau(discipline, niveau) {
  return GENERATEURS.filter(g => g.discipline === discipline && g.niveau === niveau)
                    .sort((a, b) => a.rang - b.rang);
}

/* ═══════════════════════ MAÎTRISE ══════════════════════════════════════ *
 *
 * Trois états, et un seul chemin entre eux :
 *
 *   à travailler  →  acquis (5 d'affilée)  →  confirmé (3 de plus, un jour après)
 *
 * Rien ne redescend automatiquement : un élève ne perd pas ce qu'il a
 * confirmé parce qu'il s'est trompé une fois. Il peut en revanche tout
 * effacer lui-même, ce qui est autre chose.                                */

const CLE = 'ci_exercices';

function tout() { try { return JSON.parse(localStorage.getItem(CLE) || '{}'); } catch (e) { return {}; } }
function ecrire(o) { try { localStorage.setItem(CLE, JSON.stringify(o)); } catch (e) {} }

export function etatDe(id) {
  const e = tout()[id] || {};
  return { essais: e.essais || [], acquis: e.acquis || null, confirme: e.confirme || null };
}

export function statut(id) {
  const e = etatDe(id);
  if (e.confirme) return 'confirme';
  if (e.acquis) {
    const h = (Date.now() - new Date(e.acquis).getTime()) / 3600000;
    return h >= SEUIL.delaiHeures ? 'a-confirmer' : 'acquis';
  }
  return 'a-travailler';
}

/** Combien de réussites d'affilée, dans l'état courant. */
export function suiteEnCours(id) {
  const e = etatDe(id);
  let n = 0;
  for (let i = e.essais.length - 1; i >= 0; i--) {
    if (e.essais[i]) n++; else break;
  }
  return n;
}

/** Enregistre un essai et renvoie le nouveau statut. */
export function noter(id, reussi) {
  const o = tout();
  const e = o[id] || { essais: [], acquis: null, confirme: null };
  e.essais = e.essais.concat([!!reussi]).slice(-SEUIL.fenetre);

  let n = 0;
  for (let i = e.essais.length - 1; i >= 0; i--) { if (e.essais[i]) n++; else break; }

  if (!e.acquis && n >= SEUIL.suite) {
    e.acquis = new Date().toISOString();
    e.essais = [];                       // la confirmation repart de zéro
  } else if (e.acquis && !e.confirme) {
    const h = (Date.now() - new Date(e.acquis).getTime()) / 3600000;
    if (h >= SEUIL.delaiHeures && n >= SEUIL.confirmation) e.confirme = new Date().toISOString();
  }
  o[id] = e;
  ecrire(o);
  return statut(id);
}

/** Le prochain générateur à travailler : le plus facile non confirmé. */
export function prochain(discipline, niveau) {
  const l = pourNiveau(discipline, niveau);
  return l.find(g => statut(g.id) === 'a-confirmer')
      || l.find(g => statut(g.id) === 'a-travailler')
      || l.find(g => statut(g.id) === 'acquis')
      || null;
}

export function avancementExercices(discipline, niveau) {
  const l = pourNiveau(discipline, niveau);
  const c = l.filter(g => statut(g.id) === 'confirme').length;
  return { total: l.length, confirmes: c, liste: l };
}

/* Le point de départ posé par le positionnement. C'est une POSITION, pas un
 * profil : elle se recalcule, elle n'est jamais transmise, et l'élève peut la
 * changer ou l'effacer lui-même à tout moment (CLM-PED-026). */
const CLE_DEPART = 'ci_depart';

export function depart(discipline) {
  try { return (JSON.parse(localStorage.getItem(CLE_DEPART) || '{}'))[discipline] || null; }
  catch (e) { return null; }
}

export function poserDepart(discipline, rang) {
  try {
    const o = JSON.parse(localStorage.getItem(CLE_DEPART) || '{}');
    o[discipline] = { rang, pose: new Date().toISOString() };
    localStorage.setItem(CLE_DEPART, JSON.stringify(o));
  } catch (e) {}
}

export function oublierDepart(discipline) {
  try {
    const o = JSON.parse(localStorage.getItem(CLE_DEPART) || '{}');
    delete o[discipline];
    localStorage.setItem(CLE_DEPART, JSON.stringify(o));
  } catch (e) {}
}

export function toutEffacer() {
  try { localStorage.removeItem(CLE); localStorage.removeItem(CLE_DEPART); } catch (e) {}
}
