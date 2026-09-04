# Cours interactif

Des cours de collège qui se lisent comme une enquête : une porte, un pari, une
pièce, un verdict, et ce qu'on en retient. Ni score, ni classement, ni compteur
de série.

Le dépôt contient deux choses : le **site** que les élèves ouvrent, et la **base
de connaissances** qui sert à l'écrire — sources, affirmations, limites, et les
outils qui vérifient que l'un ne dit rien que l'autre n'établisse.

## Ce qui existe

| | |
| --- | --- |
| **Histoire 6e** | 9 modules, les trois thèmes du programme |
| **Sciences et technologie 6e** | 11 modules, les quatre thèmes du programme |
| Géographie, EMC | cartes de programme à établir |
| Histoire 5e, 4e, 3e | 27 modules déclarés, non écrits |

Les hubs connaissent les modules **avant** qu'ils soient écrits : la carte du
programme (`site/programme.json`) déclare tout, l'index (`site/modules/index.json`)
dit ce qui est disponible. Un module ajouté apparaît sans qu'on touche à une page.

## Démarrage

```bash
python -m http.server 8792 --directory site
```

Puis `http://localhost:8792`. Le site est en HTML, CSS et modules ES natifs :
aucune dépendance, aucune étape de construction.

Après avoir ajouté ou corrigé un module :

```bash
python site/construire.py
```

Il régénère la carte et l'index depuis les fichiers présents.

## Structure

| Chemin | Rôle |
| --- | --- |
| `site/` | Le site. `index.html` → `niveau.html` → `discipline.html` → `module.html`. |
| `site/modules/*.json` | Un module par fichier. C'est là qu'est le contenu. |
| `site/socle.js` | Progression, rappels différés, différenciation. Rien n'est envoyé nulle part. |
| `site/worker.js` | Marge, la compagne conversationnelle. Non déployée. |
| `knowledge-base/sources/` | Registre bibliographique : autorité, périmètre, date de consultation. |
| `knowledge-base/evidence/` | Registre d'affirmations : preuve, inférence autorisée, limite, confiance. |
| `knowledge-base/rag/` | Index lexical en JSONL — versionnable et relisible, pas une base vectorielle opaque. |
| `knowledge-base/programmes-officiels/` | Ce qui est réellement applicable en 2026-2027, avec les limites de chaque lecture. |
| `AGENTS.md` | Les règles que suit quiconque écrit du contenu ici. À lire avant d'ajouter un module. |
| `production-video/` | Matière et consignes pour produire les vidéos. |

## Comment un module est fait

Cinq étapes, dans cet ordre, et l'ordre est le dispositif :

**Porte** — une affirmation ordinaire, qui a l'air juste.
**Anticipation** — l'élève parie avant de savoir. Le pari n'est ni ramassé ni noté.
**Collision** — une pièce authentique, et le travail dessus.
**Transformation** — ce que la pièce établit, ce qu'elle n'établit pas, et l'affirmation de départ réécrite.
**Extraction** — deux questions de mémoire, après le verdict.

Chaque module introduit **un objet-mémoire** : un outil concret qui pose une
question. Le tamis, le tampon, la balance en histoire ; le bocal, le repère, la
fenêtre en sciences. Chacun est réactivé plus tard, dans un autre module —
et certaines réactivations sont des **échecs délibérés** : l'outil ne convient
pas, et le module dit pourquoi. C'est voulu. Un outil qui s'applique partout
n'apprend rien.

Les statuts de preuve emploient un lexique fixe : *établi, probable, rapporté,
possible, non acquis, réfuté, indéterminé*. Le programme officiel de sciences
prescrit lui-même de « distinguer les savoirs scientifiques — qui reposent sur
des faits éprouvés — des croyances ou de la simple opinion » : le lexique n'est
pas un ajout, il répond à une demande du texte.

## Vidéos

`site/notebooklm.py` produit, pour chaque module, la **source unique** à déposer
dans NotebookLM et la consigne à lui donner. Source unique : ce qui n'entre pas
dans le carnet ne peut pas ressortir dans la vidéo.

Le fichier produit va dans `production-video/vidéo/`, puis :

```bash
python site/videos.py            # propose une association, n'écrit rien
python site/videos.py --ecrire   # applique
```

Les fichiers vidéo sont **hors du dépôt** — vingt mégaoctets pièce. Le site les
sert par une jonction `site/medias/video`. Voir `production-video/LISEZ-MOI.md`.

## Vérifier la base de connaissances

```bash
python knowledge-base/rag/retrieve.py "critique des sources historiques" --domain histoire --top-k 5
python knowledge-base/rag/validate.py
```

La première récupère des passages avec leurs identifiants et leurs liens. La
seconde contrôle que l'index, le registre de sources et le registre
d'affirmations se renvoient bien les uns aux autres. Bibliothèque standard
uniquement.

**RAG** répond à « quels éléments faut-il relire ? ». **RLM** répond à « comment
raisonner sans perdre la provenance ni les désaccords ? » — protocole explicite
et vérifiable, pas des appels récursifs automatiques à un modèle.

## Ce que le dépôt ne contient pas

Aucune donnée d'élève, aucun nom, aucun résultat. La progression d'un élève vit
dans son navigateur et n'est envoyée nulle part ; le site ne conserve aucun
profil et recalcule l'adaptation à chaque affichage.

Aucune clé, aucun jeton. `MISTRAL_API_KEY` n'apparaît que comme nom de liaison ;
la valeur vit dans les Secrets chiffrés du Worker, jamais dans un fichier.

## Licence

À définir. En attendant, tous droits réservés — les pièces citées dans les
modules restent la propriété de leurs auteurs et sont créditées dans chaque page.
