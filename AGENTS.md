# Protocole de recherche du cours interactif

Ce dépôt est conçu pour produire des contenus d'enseignement sourcés. Ces règles s'appliquent à toute création ou révision de contenu substantiel.

## Règle de travail

1. Lire `knowledge-base/README.md`, puis utiliser `knowledge-base/rag/retrieve.py` pour une première récupération locale.
2. Vérifier les sources retournées à l'URL d'origine ; un extrait du RAG oriente la recherche, il ne constitue jamais seul une preuve.
3. Pour les affirmations importantes, enregistrer ou réutiliser une entrée dans `sources/sources.jsonl` et une affirmation dans `evidence/claims.jsonl`. Ne pas présenter comme un fait ce qui est une interprétation, une hypothèse ou un point débattu.
4. Suivre le protocole récursif de `rlm/PROTOCOLE.md` dès que la question comporte plusieurs notions, périodes, disciplines ou sources. Pour une réponse courte, appliquer au minimum les contrôles de sortie décrits dans ce protocole.
5. Citer les sources au plus près des affirmations : auteur/institution, titre, date si connue, lien direct. Donner une limite lorsque la source ne permet pas de conclure.

## Ancrage dans les programmes officiels

Avant de créer un cours ou une évaluation de collège :

1. Ouvrir `knowledge-base/programmes-officiels/programmes-2026-2027.md` et vérifier le niveau, le statut de l'enseignement et l'arrêté effectivement applicable.
2. Pour l'histoire, rattacher le contenu à un thème et sous-thème de `knowledge-base/programmes-officiels/histoire-2026-2027.md` avant toute sélection de documents.
3. Ne jamais substituer un programme publié mais non encore applicable à la référence de l'année ; en 2026-2027, l'histoire-géographie relève du programme 2020 de la 6e à la 3e.
4. Distinguer le tronc commun à horaire propre, les enseignements transversaux obligatoires (HDA, EMI, EVARS) et les options ou langues conditionnelles. Ne pas présenter une option comme universelle.

## Conception pédagogique fondée sur les preuves

- Lire `knowledge-base/pedagogie/report-source.md` et utiliser `knowledge-base/pedagogie/gabarit-sequence-histoire.md` pour toute nouvelle séquence d'histoire.
- Prévoir une opération d'apprentissage observable : rappel sans support suivi d'un feedback, réactivation espacée, comparaison guidée, explication argumentée ou métacognition. Le ludisme doit servir cette opération, pas seulement embellir l'activité.
- Adapter le guidage, les documents et la charge de travail aux prérequis ; une enquête sans repères, vocabulaire, modèles ni retours n'est pas une enquête suffisamment étayée.
- Soutenir l'autonomie par des choix réels mais bornés, des raisons claires et des critères de réussite explicites. Ne pas interpréter la motivation comme une propriété fixe de l'élève.
- La narration doit respecter `knowledge-base/pedagogie/narration-historique-ethique.md` : question authentique, sources, contexte, incertitudes, conclusion et sortie finissable.

## Le critère de la capacité

Ce dépôt assume d'employer les ressorts psychologiques de la motivation. Les
refuser en bloc revient à laisser l'économie de l'attention seule à s'en servir,
pour des fins creuses, pendant que l'école s'interdit ce que la bonne pédagogie
a toujours fait — un professeur qui coupe son cours sur une énigme emploie un
ressort psycho-biologique.

La ligne de partage n'est donc pas morale. Elle est mécanique, et vérifiable :

> **Employer tout ressort qui augmente l'appétit et la capacité d'apprendre de
> l'élève EN DEHORS de la plateforme. Refuser ceux qui n'augmentent que le temps
> passé dedans.**

- **Ressorts qui construisent** — à employer sans réserve : écart de curiosité, tension narrative, mystère, sentiment de maîtrise qui progresse, rappel espacé, progression méritée et lisible, appartenance à un groupe, surprise, beauté d'une forme. Plus on s'en sert, plus l'élève devient capable d'apprendre, ailleurs et sans nous.
- **Ressorts qui consomment** — à refuser : récompense à ratio variable, décompte de série puni par la rupture, urgence artificielle, défilement sans fin, comparaison sociale décourageante. Ils fonctionnent, et ils dégradent précisément la capacité qu'ils exploitent : le problème d'un jeu de captation n'est pas d'être plaisant, c'est de rendre le reste du monde plus terne.
- **Un cours qui produirait cet effet aurait échoué selon son propre critère** : on obtiendrait de l'engagement dans l'application, et un élève qui n'ouvre plus un livre.
- **Un classement n'est pas interdit : il est à régler.** Normaliser par niveau pour qu'un débutant investi puisse dépasser un ancien, et qu'aucun élève ne soit installé à demeure dans la moitié basse. Ce qui est proscrit, c'est le classement qui décourage, pas la visibilité du mérite.
- **Deux dégâts documentés, à éviter nommément** : la rupture de série, qui fait décrocher l'élève au moment exact où il perd son compteur ; et l'effet de surjustification, où récompenser extrinsèquement une activité déjà intéressante finit par en détruire l'intérêt.
- En cas de doute sur un dispositif, poser la question du critère : *cet élève aura-t-il, après, plus envie d'apprendre en dehors d'ici ?* Si la réponse n'est pas oui, le dispositif ne sert que la plateforme.

## Conception multimodale et accessible

- Avant d'ajouter une image, un audio, une vidéo, une animation ou une manipulation, nommer l'opération d'apprentissage qu'il rend possible : localiser, observer, comparer, entendre une formulation, manipuler une relation, rappeler ou expliquer. Un média décoratif est retiré.
- Appliquer `knowledge-base/pedagogie/multimodalite-psc-et-preferences.md` et le gabarit enrichi avant toute mise en ligne : une modalité supplémentaire doit être pertinente, segmentée, contrôlable et accessible.

### Adaptation mécanique, jamais de profil

Le site doit s'adapter à l'élève. Deux façons de le faire existent, et une seule
tient debout.

- **Ce qui est invalidé** : demander à l'élève quel « type » d'apprenant il est — visuel, auditif, kinesthésique — puis lui servir le format correspondant. L'étiquette déclarée n'améliore pas les résultats. Ne jamais la demander, ne jamais l'écrire, ne jamais l'afficher.
- **Ce qui marche** : servir davantage des formats avec lesquels cet élève **réussit réellement**, mesuré sur ses résultats. C'est de l'enseignement adaptatif ordinaire, et c'est ce que fait un professeur attentif.
- **La préférence se recalcule, elle ne s'enregistre pas.** Les résultats par module sont déjà conservés ; le format est une propriété du module, jamais de l'élève. Le calcul se fait donc à la volée, à partir de données qui existent de toute façon : aucune donnée nouvelle n'est créée, aucune étiquette n'existe, rien ne peut être exporté ni fuiter.
- **Un profil enregistré enferme, un calcul se corrige.** Une étiquette écrite survit à l'élève qui a changé et continue de décider pour lui. Un calcul suit sa progression sans qu'on ait à le mettre à jour.
- **L'élève garde la main** : ce que le calcul propose en premier, il doit pouvoir en sortir d'un geste, et accéder à tous les formats. L'adaptation oriente, elle ne restreint pas.
- Pour tout média : alternatives textuelles pour les images ; sous-titres et transcription pour l'audio/vidéo ; audiodescription ou transcript descriptif si l'image apporte une information nécessaire ; lecture, pause et vitesse contrôlables. Aucune lecture automatique sonore, flash, minuterie coercitive ni animation décorative continue.
- Les préférences d'élèves sont des retours de conception, non un diagnostic ni une mesure d'apprentissage. Employer `knowledge-base/pedagogie/retour-eleves-modules-interactifs.md` de façon anonyme et minimale ; ne pas centraliser de données identifiantes, biométriques ou émotionnelles pour personnaliser un cours.

## Exigences renforcées pour l'histoire

- Distinguer la source primaire, le témoignage et le travail historiographique.
- Documenter l'origine, la date, l'auteur ou producteur, le destinataire, le but, la chaîne de conservation et les transformations numériques éventuelles.
- Ne pas inférer l'absence d'un phénomène de son absence dans les archives sans discuter les silences, biais de conservation et conditions de production.
- Croiser les sources indépendantes lorsqu'une affirmation est sensible, contestable ou centrale au cours.

## Interdits

- Ne pas inventer une référence, une page, une citation ou un résultat d'étude.
- Ne pas transformer un seul document en consensus disciplinaire.
- Ne pas confondre pertinence de recherche et fiabilité d'une preuve.
- Ne pas recopier longuement un texte sous droit ; rédiger des synthèses et conserver les liens vers l'original.
- Ne pas employer d'humiliation, de compétition coercitive, de récompense à ratio variable ni de série punie par sa rupture. Ce ne sont pas des interdits de convenance : ce sont les dispositifs qui consomment la capacité d'apprendre au lieu de la construire (voir *Le critère de la capacité*).
- Ne pas enregistrer d'étiquette de « profil d'apprentissage », ni centraliser de données identifiantes, biométriques ou émotionnelles pour personnaliser un cours.
