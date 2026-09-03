# Production des vidéos de cours

Un dossier par module. Chacun contient la matière à déposer dans NotebookLM
et la consigne à lui donner.

## Marche à suivre

1. Créer un carnet, et y déposer **`source.md` comme source unique**. Ne rien
   ajouter d'autre : tout ce qui entre dans le carnet peut ressortir dans la
   vidéo, y compris ce qu'on n'avait pas prévu.
2. Lancer une génération de synthèse — audio ou vidéo selon ce qui est
   disponible — et coller le contenu de `consigne.md` dans la personnalisation.
3. Relire la production avec la liste de contrôle qui termine `consigne.md`.
4. Publier, puis renseigner l'emplacement `medias` du module.

## Pourquoi la source unique

NotebookLM ne se fonde que sur ce qu'on lui donne, et c'est précisément ce qui
rend la méthode utilisable en classe : la vidéo ne pourra pas inventer une
date ou durcir un statut, faute d'avoir de quoi. Ajouter un manuel, un article
ou une page encyclopédique dans le même carnet ruine cette garantie.

## Ce que ces fichiers ne peuvent pas garantir

Une génération reste une génération. Les voix ont une pente naturelle vers
l'enthousiasme et l'arrondi : elles transforment volontiers « rapporté » en
« on sait que ». La source et la consigne luttent contre cette pente ; elles
ne la suppriment pas. **Aucune vidéo ne se publie sans avoir été écoutée en
entier**, la liste de contrôle sous les yeux.

## Les fichiers sont produits, jamais écrits à la main

`python site/notebooklm.py` les régénère depuis les modules. Corriger un
module, puis relancer — ne pas retoucher `source.md`, qui serait écrasé.
