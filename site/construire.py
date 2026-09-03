# -*- coding: utf-8 -*-
"""Construit ce que le site doit connaitre a l'avance.

Deux fichiers sont produits :

  programme.json  la carte declaree des quatre annees, extraite de la base de
                  connaissances. Elle contient TOUS les modules prevus, y
                  compris ceux qui ne sont pas encore ecrits : le hub les
                  affiche en attente au lieu de les ignorer.

  modules/index.json  la liste de ce qui existe reellement, obtenue en
                  balayant le dossier. Ajouter un module = deposer un fichier
                  et relancer ce script. Aucune page a modifier.

Le site n'a donc jamais de liste codee en dur, et un module futur est connu
avant d'etre concu. Python de la bibliotheque standard uniquement : node est
absent du poste.

Usage :  python site/construire.py
"""
import json, os, re, io, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
CARTE = os.path.join(RACINE, 'knowledge-base', 'programmes-officiels', 'histoire-2026-2027.md')
DOSSIER_MODULES = os.path.join(ICI, 'modules')

# Le numero d'un module suit l'ordre des sous-themes dans le niveau : le
# premier sous-theme de 6e est H6-01, et ainsi de suite. La convention est
# derivable, donc un module futur porte deja son identifiant.
PREFIXE = {'6e': 'H6', '5e': 'H5', '4e': 'H4', '3e': 'H3'}


def lire_carte():
    """Extrait niveaux, themes et sous-themes du referentiel officiel."""
    texte = open(CARTE, encoding='utf-8').read()
    niveaux, niveau, theme = [], None, None
    for ligne in texte.splitlines():
        m = re.match(r'^##\s+(6e|5e|4e|3e)\s*$', ligne.strip())
        if m:
            niveau = {'niveau': m.group(1), 'themes': []}
            niveaux.append(niveau)
            theme = None
            continue
        if niveau is None:
            continue
        m = re.match(r'^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$', ligne)
        if m:
            theme = {'rang': int(m.group(1)), 'intitule': m.group(2).strip(), 'sous_themes': []}
            niveau['themes'].append(theme)
            continue
        m = re.match(r'^\s*-\s+(.+?)\s*[;.]?\s*$', ligne)
        if m and theme is not None:
            libelle = m.group(1).strip().rstrip(' ;.')
            libelle = libelle[0].upper() + libelle[1:] if libelle else libelle
            theme['sous_themes'].append(libelle)
    return [n for n in niveaux if n['themes']]


def numeroter(niveaux):
    """Attribue son identifiant a chaque sous-theme, ecrit ou non."""
    total = 0
    for n in niveaux:
        prefixe = PREFIXE[n['niveau']]
        compteur = 0
        for t in n['themes']:
            entrees = []
            for st in t['sous_themes']:
                compteur += 1
                entrees.append({'id': '%s-%02d' % (prefixe, compteur), 'sous_theme': st})
                total += 1
            t['modules'] = entrees
            del t['sous_themes']
    return total


def inventaire():
    """Ce qui existe vraiment, avec le minimum utile au hub."""
    if not os.path.isdir(DOSSIER_MODULES):
        os.makedirs(DOSSIER_MODULES)
    ecrits = []
    for f in sorted(os.listdir(DOSSIER_MODULES)):
        if not f.endswith('.json') or f == 'index.json':
            continue
        d = json.load(open(os.path.join(DOSSIER_MODULES, f), encoding='utf-8'))
        ecrits.append({
            'id': d['id'],
            'discipline': d.get('discipline', 'histoire'),
            'titre': d.get('titre', ''),
            'niveau': d.get('niveau', ''),
            'theme': d.get('theme', ''),
            'cible': (d.get('cible') or {}).get('enonce', ''),
            'rappelJ1': next((r.get('indice') for r in d.get('rappels', [])
                              if r.get('quand') == 'J+1'), None),
            'fichier': 'modules/' + f,
        })
    return ecrits


def main():
    niveaux = lire_carte()
    total = numeroter(niveaux)
    ecrits = inventaire()
    connus = {e['id'] for e in ecrits}

    # La carte porte des DISCIPLINES. Une discipline sans aucun theme est
    # declaree quand meme : le site annonce ce qui viendra au lieu de le taire.
    programme = {
        'disciplines': [
            {
                'id': 'histoire',
                'nom': 'Histoire',
                'reference': 'Programme 2020, applicable en 2026-2027',
                'source': 'knowledge-base/programmes-officiels/histoire-2026-2027.md',
                'niveaux': niveaux,
            },
            {'id': 'geographie', 'nom': 'Geographie', 'reference': '', 'source': '', 'niveaux': []},
            {'id': 'emc', 'nom': 'Enseignement moral et civique', 'reference': '', 'source': '', 'niveaux': []},
        ],
    }
    json.dump(programme, open(os.path.join(ICI, 'programme.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    json.dump({'modules': ecrits},
              open(os.path.join(DOSSIER_MODULES, 'index.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)

    print("programme.json : %d modules declares sur %d niveaux" % (total, len(niveaux)))
    for n in niveaux:
        ids = [m['id'] for t in n['themes'] for m in t['modules']]
        faits = [i for i in ids if i in connus]
        print("   %-3s %2d prevus, %d ecrits%s" % (n['niveau'], len(ids), len(faits),
              ("  (" + ", ".join(faits) + ")") if faits else ""))
    orphelins = sorted(connus - {m['id'] for n in niveaux for t in n['themes'] for m in t['modules']})
    if orphelins:
        print("\nATTENTION : modules ecrits hors carte :", ", ".join(orphelins))
    print("\nmodules/index.json : %d modules disponibles" % len(ecrits))


main()
