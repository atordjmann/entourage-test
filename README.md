# Test technique front-end - ReactJS

L'utilisation de ReactJS est obligatoire.  
L'utilisation de Redux est un plus dans le cas du poste de dev Junior.

__Objectif__ : Utiliser l'API Movie Database, afin de réaliser une interface utilisateur.  
https://developers.themoviedb.org/3/getting-started/introduction

Votre rendu final devra comprendre :

# Si vous postulez pour le poste de dev Junior:

__Affichage des derniers films__:<br/>
Un utilisateur peut voir les derniers films sur la page d'accueil.

__Affichage des films dans l'ordre__:<br/>
Un utilisateur peut afficher les films par leur ordre de sortie. 

__Affichage d'un film sur une autre page__:<br/>
Un utilisateur peut alors voir tout les détails d'un film(vous êtes libre d'afficher le nombre d'informations que vous voulez).

__Afficher les suggestions d'un film__:<br/>
Une fois sur la page de détails, un utilisateur peut voir les suggestions alternative en rapport avec ce film.


# Si vous postulez pour le poste de dev Senior: 

__Les mêmes exercices que le Junior__

__Utilisation obligatoire de Redux__

__Creation d'une liste de film à voir__:<br/>
Un utilisateur peut se créer une liste de film à voir. 

__Ajout d'un système de rating__:<br/>
Un utilisateur peut ajouter une note sur chaque film.

Si certaines questions vous semblent ambigües, choisissez ce qui est le plus pertinent pour vous.

Bon courage ! 


# Notes

J'ai utilisé pour mon projet Next js et Redux.
Ne connaissant pas Next et Redux, j'ai essayé de garder mon code le plus simple possible. Je n'utilise donc pas de librairie particulière ou de concept très exotique.

Pour définir mes call à l'API de TMDB j'ai utilisé `createApi` que j'ai découvert dans un tuto de Redux et trouvé extrêmement pratique à utiliser.
Pour le routing, j'ai utilisé le routing de base. Après avoir essayé le react-router-dom que je ne trouvais pas satisfaisant.

J'ai beaucoup aimé faire ce test, mais il m'a pris beaucoup de temps car j'ai dû lire beaucoup de documentation avant de commencer à coder. Ainsi j'ai dépassé la moyenne des 4h, et me situe plutôt autour de 6h.

Il y a trois pages:
- La page d'accueil avec les films actuellement en salle
- La page /movies avec les films sortis avant aujourd'hui, classés par date de sortie
- La page /movies/id qui permet de voir la page de détail d'un film, ainsi que les films similaires

Pour lancer le projet:
- Installer les dépendances
`npm i`
- Ajouter un fichier `.env.local` avec comme contenu:
```
NEXT_PUBLIC_TMDB_TOKEN={votre token TMDB}
```
- Lancer le projet à l'aide de `npm run dev`
Le projet est lancé sur localhost:3000

