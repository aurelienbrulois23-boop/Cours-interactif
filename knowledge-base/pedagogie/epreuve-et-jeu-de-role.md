# L'épreuve de fin de séquence, et le jeu de rôle qui pourrait la précéder

**Usage :** décider ce qu'on construit, dans quel ordre, et ce qu'on refuse de construire.
**État au 6 septembre 2026 :** l'épreuve est faite et jouable (`site/epreuve.html`,
`site/epreuves.json`, deux séquences de géographie). Le jeu de rôle est spécifié ici,
et **n'est pas commencé**.
**Origine :** proposition de l'utilisateur, à partir des modules PIX-pHARe qu'il a écrits
pour le Portail Vie Scolaire (`aethonyx_phénix/projet hub viesco/`).

---

## 1. Ce que l'épreuve ajoute, et qui manquait

Le site avait deux formes et il lui en manquait une troisième.

| Forme | Ce qu'elle fait | Ce qu'elle ne fait pas |
|---|---|---|
| Le **module** | fait rencontrer une pièce, fabrique un outil, fait écrire de mémoire | ne dit pas si l'outil tient hors de sa propre pièce |
| L'**entraînement** | automatise un geste par la répétition, retour immédiat | ne porte que sur des automatismes, un à la fois |
| L'**épreuve** | reprend plusieurs modules ensemble, mélangés | ne mesure pas le rappel libre (voir §3) |

Le point d'appui : **un test n'est pas seulement une mesure, c'est un événement
d'apprentissage.** Se rappeler d'un souvenir le consolide davantage que le relire.
L'épreuve est donc utile même quand elle est entièrement réussie — c'est pourquoi elle
n'est pas facultative « en cas de doute ».

Le second appui est le **mastery learning** (Kulik, Kulik & Bangert-Drowns, 1990) :
environ une demi-écart-type, davantage sur les élèves les plus faibles, **au prix du
temps d'enseignement**, et l'effet **dépend de la sévérité du critère**. Ce qui justifie
un passage conditionnel — pas un passage automatique après relecture.

## 2. Trois marches, et pourquoi on ne les additionne pas

- **Rappel** — la notion revient-elle sans le cahier ?
- **Discrimination** — sait-on ce que la pièce permet, et ce qu'elle interdit ?
- **Transfert** — l'outil fonctionne-t-il sur une situation jamais montrée ?

C'est la décision de conception la plus importante du dispositif : **il n'y a pas de
score.** Un pourcentage mélangerait les trois marches, et « sept sur dix » ne dit pas
quoi faire ensuite. Deux élèves à sept sur dix peuvent avoir besoin de choses opposées :

| Marche ratée | Ce qu'il faut faire | Ce qu'il ne faut surtout pas faire |
|---|---|---|
| Rappel | rouvrir le module entier | donner un exercice de plus |
| Discrimination | rouvrir la Collision : la pièce et son statut | tout relire |
| Transfert | **ne rien relire** — reprendre une autre situation | renvoyer au cours, qui est su |

Un total ne sait pas distinguer ces trois élèves. Un renvoi nommé, si. C'est aussi
pourquoi le renvoi se fait **au palier le plus bas qui a échoué** : réparer le socle
peut réparer le reste, et il serait absurde d'envoyer travailler le transfert d'une
notion qui n'est pas encore là.

**Une variante par passage.** Les questions de transfert vont par deux : une reprise en
tire l'autre. Sans quoi le second passage ne mesurerait plus le transfert, mais le
souvenir d'avoir vu la réponse.

**Une question au moins doit être un refus.** Dans chaque séquence, un item demande si
l'outil s'applique — et la réponse est non. Un outil qui s'applique partout ne sert à
rien, et c'est le prolongement direct des rappels-échecs délibérés des modules.

## 3. Les limites, écrites dans le fichier lui-même

- **Un choix parmi quatre teste la reconnaissance, pas le rappel libre.** Le rappel
  libre, c'est l'Extraction du module, qui fait écrire. L'épreuve ne la remplace pas.
- **Les réponses sont dans la page.** C'est vrai de tout ce que ce site sert en
  statique. Cela signifie que **l'épreuve ne peut pas noter**, et qu'elle ne doit
  jamais servir à cela. Pour un usage probatoire, il faudrait passer par le Worker —
  et ce serait un autre objet, avec d'autres obligations.
- Le tableau de verdict indique **sur quelles marches chaque module a été interrogé**.
  Sans cette colonne, « acquis » laisserait croire à trois marches passées alors qu'une
  épreuve mélange les modules et n'en interroge pas chacun partout. `verifier.py`
  refuse une séquence dont un module n'aurait aucune question, et signale ceux qui
  n'en ont qu'à un seul palier.

## 4. Le jeu de rôle : ce qu'il faut décider avant d'écrire une ligne

L'idée : une narration interdisciplinaire, calée sur le niveau de l'élève dans chaque
discipline, qui fait travailler en situation les notions à valider.

### 4.1 L'ordre — et il y en a deux, qu'il ne faut pas confondre

**Dans le parcours de l'élève : le jeu vient AVANT l'épreuve.** Il est le lieu de la
pratique variée et du plaisir ; l'épreuve est le moment sobre où l'on regarde ce qui
tient. Corollaire non négociable : **le jeu ne barre jamais la route.** Si échouer dans
la fiction bloque une progression, la fiction devient un examen déguisé et perd
exactement ce pour quoi on l'avait faite.

**Dans l'ordre de construction : l'épreuve vient d'abord.** Le jeu a besoin d'un index
de notions sûres, avec questions, réponses et raisons, rattachées à un module, un
niveau et une référence de claim. C'est très précisément ce que `epreuves.json` est.
Construire l'épreuve, c'est construire la matière du jeu ; l'inverse n'est pas vrai.

### 4.2 Trois risques, et la réponse structurelle à chacun

**a) La narration peut concurrencer le contenu.** C'est la littérature sur les *détails
séduisants* : un ornement intéressant mais hors sujet dégrade la rétention. La règle
qui en découle est simple à énoncer et exigeante à tenir : **la question doit être
l'action.** Si l'histoire peut continuer sans la réponse, l'histoire est un décor. Une
erreur produit une conséquence dans la fiction, pas une croix rouge.

**b) Une IA qui rédige peut inventer.** Tout le site tient sur le contraire. La réponse
est celle que l'utilisateur a lui-même formulée : **l'IA écrit le tissu, jamais la
réponse.** Les questions et les réponses sortent de l'index vérifié ; ce que l'IA
compose, c'est la situation qui les amène. Et sa production est **contrôlée avant
d'être jouable**, comme les vidéos NotebookLM le sont avant publication.

**c) Une partie ne doit pas dépendre d'une API.** Donc : l'IA compose une campagne
**une fois**, on la relit, elle est stockée en JSON, et elle se joue ensuite hors
ligne et de façon reproductible — comme les générateurs d'exercices, à graine fixe.
La composition est un acte d'auteur ; la partie est un fichier.

### 4.3 Valdurne — attention à la licence

L'univers est écrit, l'utilisateur le connaît, ses élèves aussi. Mais deux réserves :

1. **Le dépôt `Cours-interactif` est public, sous CC BY-NC-SA.** Y verser le texte des
   quatre tomes placerait ses propres livres sous cette licence. Ce qui peut traverser,
   c'est **les noms, les lieux, le ton** — pas le texte publié.
2. `kern_campagnes.js`, côté Portail Vie Scolaire, contient des solutions d'enquête et
   **ne doit jamais être servi en statique**. Le même piège attend toute campagne.

Piste : un cadre neutre côté site public, et Valdurne comme habillage côté établissement.
La décision appartient à l'utilisateur — c'est son univers et ce sont ses livres.

### 4.4 Le document téléchargeable

Non pas une fiche distribuée **avant**, avec les réponses en regard, mais un **carnet
produit après** : ce qui a été demandé, ce qui a été répondu, ce qu'on attendait, et
pourquoi. C'est la trace de l'Extraction, à l'échelle d'une séance — et c'est ce qu'un
CPE peut garder ou remettre à une famille.

**Fait pour l'épreuve** : le carnet est une vue imprimable de la page elle-même
(`@media print`), sans bibliothèque et sans serveur ; « Enregistrer au format PDF »
dans la boîte d'impression suffit. Si un fichier d'archive est un jour nécessaire,
ce sera **en Python** — Node n'est pas installé sur ce poste.

## 5. Ce qui reste

- 45 modules sur 52 n'ont pas encore d'épreuve. `verifier.py` les nomme à chaque passage.
- Le jeu de rôle : rien n'est commencé, et rien ne doit l'être avant que l'index couvre
  au moins deux disciplines complètes — sans quoi il n'y aurait pas d'interdisciplinaire
  à croiser.
