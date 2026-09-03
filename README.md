# Cours interactif — socle de recherche

Ce dépôt démarre par une base de connaissances sur les méthodes d'investigation scientifique, avec un domaine pilote : **la construction du savoir historique**. Il ne remplace ni l'expertise disciplinaire ni la consultation des documents originaux ; il rend leur utilisation plus systématique, vérifiable et réutilisable.

## Ce qui est disponible

| Élément | Rôle |
| --- | --- |
| `knowledge-base/rag/` | Index local de passages synthétiques et outil de récupération lexical, avec renvoi vers les sources. |
| `knowledge-base/rlm/` | Protocole de raisonnement récursif pour décomposer une question, croiser des preuves et rédiger avec incertitude. |
| `knowledge-base/sources/` | Registre bibliographique et niveau d'autorité des sources. |
| `knowledge-base/evidence/` | Registre d'affirmations : preuve, limite, niveau de confiance et source. |
| `knowledge-base/report-source.md` | Rapport de synthèse initial : méthodes historiques et scientifiques, choix d'architecture et limites. |
| `knowledge-base/programmes-officiels/` | Référentiel réglementaire 2026-2027 de la 6e à la 3e, avec carte spécifique des thèmes d'histoire. |
| `knowledge-base/pedagogie/` | Rapport sur l'apprentissage et la motivation, cadre éthique de narration, gabarit de séquence d'histoire. |
| `AGENTS.md` | Règles à appliquer par tout agent qui crée du contenu dans ce dépôt. |

## Démarrage rapide

Depuis la racine du dépôt :

```powershell
python knowledge-base/rag/retrieve.py "critique des sources historiques" --domain histoire --top-k 5
python knowledge-base/rag/validate.py
```

La première commande fournit des passages à lire avec leurs identifiants et liens. La seconde contrôle les liens internes entre l'index, le registre de sources et les affirmations. Les deux outils fonctionnent avec la bibliothèque standard de Python.

## Définition retenue

- **RAG** : récupération de passages externes et explicitement sourcés avant la rédaction. L'index ici est intentionnellement transparent : des fichiers JSONL versionnables plutôt qu'une base vectorielle opaque.
- **RLM** : *Recursive Language Model*. Dans son acception de recherche, le corpus devient un environnement inspecté et découpé, puis des sous-tâches sont réconciliées. Ici, cette idée est mise en œuvre sous forme de protocole explicite et audit-able ; elle ne prétend pas exécuter automatiquement des appels récursifs à un modèle.

La distinction est volontaire : le RAG répond à « quels éléments faut-il relire ? », le RLM à « comment raisonner sans perdre la provenance ni les désaccords ? ».

Avant tout cours de collège, la base impose désormais deux vérifications : le programme **effectivement applicable** à ce niveau en 2026-2027, puis le cadre pédagogique fondé sur les preuves. Les cours d'histoire ne sont pas encore rédigés : la carte des thèmes est prête dans `knowledge-base/programmes-officiels/histoire-2026-2027.md`.
