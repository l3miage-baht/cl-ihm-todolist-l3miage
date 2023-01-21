## PROJET TODOLIST L3 MIAGE 2021 - 2022 ##
## Membres : 
      BAH Thierno Mamadou Aliou       =>      [11818868]
      TCHANA TAME Franck      		    =>      [11718422]


## Le lien vers votre GIT
  ->  https://github.com/l3-miage-cl-ihm/cl-ihm-todolist-l3miage-baht
    
      https://github.com/l3-miage-cl-ihm/cl-ihm-todolist-l3miage-baht.git
      git@github.com:l3-miage-cl-ihm/cl-ihm-todolist-l3miage-baht.git


## Lien vers l'application déployée      
      Project Console: https://console.firebase.google.com/project/l3miagetodolist/overview

  ->  Hosting URL: https://l3miagetodolist.web.app
                   l3miagetodolist.firebaseapp.com


## Fonctionnalité réalisé
      
      Authentification 
          Avec un compte google existant
          Avec saisi Email et mot de pass déjà existant

      Inscription d'un nouvelle utilisateur 
          Avec saisi Email et mot de pass 
      
      Deconnexion d'un utilistaur connecté
      [Les opérations d'authentification et d'inscription sont tous gére dans service spécifique qui a été crée a cet effet]
      
      Stockage synchronisé de la todoList sur Firebase 
          Nous à permis de stocker notre liste de chose a faire sur firebase avec le service AngularFirestore pour un utilistateur bien connecter, il peut donc effectué toutes les opération CRUD (ajout, lecture, mise à jour, et suppression) d'une tâche dans sa todoList et ne peut avoir access a la todoList d'un autre utilisateur.
          L'ensemble de ces opérations sont gerer dans le service de base fourni qui a été modifier à cet effet.


## Bugs connu

      Le bug connu a ce jour est le fait de devoir actualiser la page d'accueil une fois l'utilisateur connecter et rediriger sur la route principale pour avoir access a sa todoList s'il y'en a une qui existe déjà.

















## #######################################################################################################
https://www.simicart.com/blog/pwa-app-stores/
## #######################################################################################################



#######################################################################################################################################################
#######################################################################################################################################################
# Ressources pour le cours
Communication : 

Via vos pages OneNote 

Via MatterMost : https://im2ag-tchat.univ-grenoble-alpes.fr/l3-miage-2122/channels/clihm 

Via GIT => Créez vos compte étudiant sur GitHub comme demandé en SI ! 

 

Javascript : https://developer.mozilla.org/fr/docs/Web/JavaScript 

Typescript 

Le site du langage : https://www.typescriptlang.org/ 

Un éditeur en ligne type bac à sable : https://www.typescriptlang.org/play 

Un éditeur de projet en ligne basé sur vsCode : https://stackblitz.com 

 

Cours en ligne (autre version) : 

Une PWA : https://support-l3m-clihm.web.app 

# TP1 : Prise en main et tableaux 
Objectifs : 

Prise en main de l’environnement de développement 

Familiarisation avec le langage Typescript 

Vous pouvez télécharger le code du TP à l’aide de GIT : 

git clone https://github.com/AlexDmr/L3M-TP1.git 

 

Voilà les fichiers dont vous disposez : 

index.html : Le fichier HTML point d’entré de votre client. 

package.json : La liste des bibliothèques dont dépend le client. Utilisé par NPM. 

style.css : Un fichier de mise en page. 

tsconfig.json : Fichier de configuration du compilateur Typescript. 

ts/main.ts : Le fichier qu’il faudra compléter dans ce TP. 

Pour effectuer le TP, vous devez installer des bibliothèques et lancer la compilation des fichiers sources (placez vous dans le répertoire contenant les fichiers du TP) : 

npm install 

npm start 

 

Le code à compléter du TP se trouve dans le fichier ts/main.ts. 

Aidez vous de la console de développement de votre navigateur (Chrome ou autre). 

 

Le TP devient accessible via HTTP à l’adresse : 

http://localhost:1234 

 

Vous verrez un ensemble de tableaux, ils représentent les tests effectués sur le code que vous devez réaliser. 

Toutes les lignes doivent devenir vertes au fur et à mesure que vous complétez les fonctions dans le fichier main.ts. 

# TP 2-3 : Reversi (Service / Algorithme) 
Nous allons programmer un jeu de Revers (Othello)  

Les règles du jeu sont accessibles ici : https://fr.wikipedia.org/wiki/Othello_(jeu) 

Un jeu en ligne est disponible ici : https://cardgames.io/reversi/ 

L'objectif est de développer un jeu de Reversi en utilisant Angular. Nous commencerons cependant par développer le moteur de jeu (un squelette est fourni) avant d'attaquer le développement des composants Angular. 

 

Le GIT à cloner :  
git clone https://github.com/l3-miage-cl-ihm/l3m-reversi-angular-y2022.git 

 

Le jeu vous a été distribué via GitHub classroom, à l'aide du compte que vous avez créé pour le module SI. La distribution s'est opérée par un fork, c’est-à-dire une copie d'un projet initial. Vous disposez donc de votre propre copie de projet sur GitHub. 

 

Clonez ce projet sur votre machine (git clone …), placez vous dans le répertoire du projet (celui contenant le fichier package.json) et installez les dépendances : 

npm install 

 

Vérifez que vous arrivez à exécuter le projet : 

npm start 
Première séance : Service de moteur de jeu 

Vous allez coder le moteur de jeu du Reversi (à partir d'un squelette). 
Vous allez manipuler les fichiers suivants : 

src/app/ReversiDefinitions.ts : Ce fichier contient les définitions des données utilisées pour ce jeu de Reversi ainsi que des fonctions utilitaires. Vous n'avez PAS à modifier ce fichier. 

src/app/reversi-game-engine.service.spec.ts : Ce fichier contient un ensemble de tests automatiques qui s'appliquent au service de moteur de jeu. Vous n'avez PAS à modifier ce fichier. 

src/app/reversi-game-engine.service.ts : Ce fichier contient l'implémentation du service de jeu (le moteur de jeu). Un squelette est déjà fourni, certaines méthodes ne DOIVENT PAS être modifiées (c'est indiqué dans les commentaires précédents ces fonctions).  
Les méthodes à implémenter sont : 

initGameState 

whereCanPlay 

PionsTakenIfPlayAt 

canPlay 

tryPlay 

 

Vous devez donc coder le moteur de jeu qui est dans le fichier reversi-game-engine.service.ts. 

Pour tester votre code, vous pouvez : 

Ouvrir la console de développement du navigateur et utiliser la console javascript qui est inclue. Vous devriez avoir accès à l'objet RGS qui référence une instance du service de jeu. Vous pouvez ainsi afficher l'état courant (méthode résuméDebug) en saisissant l'instruction suivante dans la console de développement : 
RGS.résuméDebug() 
Vous pourrez aussi appeler les autres méthodes du service. Il existe en particulier la méthode restart qui doit vous permettre de configurer le plateau de départ en passant optionnellement un plateau et le joueur courant en paramètre. 

Exécuter le script de test (npm test), cela entrainera l'exécution des tests automatiques et affichera un résumé des résultats dans Chrome. 


# TP 4-5 : Reversi (Angular)
Nous allons maintenant utiliser le framework Angular pour coder l'IHM du jeu de Reversi. 

Nous commencerons par tous repartir d'une base correcte à l'aide de GitHub classroom. 

Un nouveau travail vous a été assigné, suivez le lien suivant pour forker le projet Reversi qui contient le code de correction du service. Vous aurez ainsi votre propre dépôt. 

 

https://classroom.github.com/a/aamE3WXl 

 

Rendez-vous ensuite dans votre dépôt GitHub, vérifiez que vous disposez bien d'une section issue, si ça n'est pas le cas, prévenez le professeur. 

 

Placez vous dans la branche correction (git checkout correction) pour avoir le code de correction. 

 

Dans votre nouveau projet, après avoir installé les bibliothèques (commande npm install dans le terminal), vous allez modifier le composant racine de sorte à afficher un plateau de jeu interactif. 

 

 

Version 1 (une séance) : Codage dans le composant racine (app-component) 

Modifiez le composant app-component de sorte à afficher le plateau de jeu à l'aide d'un tableau HTML. 

Vous pourrez représenter les pions des joueurs avec les caractères 'X' et 'O'. 

Ainsi le plateau initial pourrait ressembler à cela :  
 
Quelques indications : 

Le tableau HTML sera à implémenter dans la VUE du composant (fichiers app.component.html) 

La mise en page de ce tableau sera à implémenter à l'aide de CSS (ou SCSS) dans la VUE du composant (fichier app.component.scss). 

La gestion des données sera à implémenter dans la VUE-MODELE du composant (fichier app.component.ts) 

La gestion des événements utilisateurs (par exemple le clique sur une case) sera à implémenter dans la VUE et dans la VUE-MODELE. 

 

Enrichissez votre composant de sorte à afficher le tour de jeu ainsi que le nombre de pions de chaque joueur. Une vue possible pourrait être celle-ci (basé sur l'utilisation de la balise pre pour faciliter la mise en page) : 

 
Enfin, vous pouvez enrichir la présentation en mettant en évidence les cases sur lesquels le joueur courant peut jouer, par exemple en leur attribuant une couleur de fond jaune. Quelques indications : 

Vous pouvez attribuer une classe CSS de façon optionnelle aux cases sur lesquels le joueur courant peut jouer. 

Vous pouvez associer une règle CSS indiquant que de telles cases ont un fond de couleur jaune (attribut background-color dans la règle CSS). 

Version 2 (une séance) : Ajout d'un composant Plateau 

De manière similaire, nous allons créer un nouveau composant Angular qui sera chargé de représenter une partie de jeu Reversi. 

Placez-vous dans le répertoire du projet. 

npx ng generate component plateau -c OnPush Cela vous crée quatre fichier et en modifie un autre :

 

Vous pouvez maintenant utiliser ce composant et sa balise correspondante (app-plateau, voir le fichier plateau.component.ts). Dans le fichier app.component.html, ajoutez la balise app-plateau pour créer une instance de ce composant. Observez le résultat dans le navigateur. En cas de problème, essayez de relancer la compilation (stoppez le processus npm start et relancez le). 

 

 

Codage du composant Plateau (partie Vue-Modèle) 

Ce composant définit 3 attribut inputs : 

board, de type Board_RO 

turn, de type Turn 

playable, du type tableau de tableau de booléen (si possible immuable, si possible de même dimension que le plateau de jeu). 

 

Initialisez ces attributs avec des valeurs par défaut représentants un tableau vide sur lequel le joueur 1 ne peut jouer nulle part. 

 

Il définit un attribut output : 

play, qui émet un doublet de nombres (soit un tuple [number, number]) représentant les coordonnées de la case sur laquelle le joueur veut poser son pion. 

 

Codez une méthode PLAY qui prend en paramètre un doublet de nombre (des coordonnées) et qui émet ce doublet via l'attribut output play. 

 

Codage du composant Plateau (partie Vue) 

Codez la vue du composant : un tableau de 8 lignes et 8 colonnes. Adoptez les principes suivant : 

Les cases du tableau contiennent une balise div si la case contient le pion d'un joueur si on peut jouer sur cette case... 

Les cases contenant un pion du joueur 1 contiennent la classe CSS "Player1". 

Les cases contenant un pion du joueur 2 contiennent la classe CSS "Player2". 

Les cases sur lesquelles le joueur courant peut poser un pion contiennent la classe CSS "canPlay. 

Vous pouvez utiliser le code SCSS suivant. 

Donner la possibilité au joueur de poser un pion sur les case du plateau (si il en a le droit). 

 

Afficher aussi : 

à qui est-ce de jouer (avec le pion qui lui correspond. 

Le nombre totale de pions pour chaque joueur. 

# TP6-7 : TodoList Angular (3-4 séances) 

Nous allons implémenter en Angular une liste de choses à faire à la manière de ce qui est proposé sur le site http://todomvc.com. Commencez par aller sur ce site, il présente une application "liste de choses à faire" qui est implémentée à l'aide de différents Framework web. Vous pouvez tester l'application en question en vous rendant par exemple à l'adresse http://todomvc.com/examples/react. 

 

Code de base 

Nous vous fournissons un code de base qui comprend un service de gestion d'une liste de choses à faire. 

Le code est déployé via GitHub classroom, vous aurez donc votre propre fork sur lequel travailler : 

https://classroom.github.com/a/-cq9PoWG 

 

Observez le fichier todolist.service.ts, il définit les structures des données TodoItem et TodoList 

 

export interface TodoItem { 

  readonly label: string; 

  readonly isDone: boolean; 

} 

 

export interface TodoList { 

  readonly label: string; 

  readonly items: readonly TodoItem[]; 

} 
Observez ensuite la classe TodolistService. Vous l'utiliserez pour gérer votre liste de choses à faire. Notez qu'elle permet d'ajouter, supprimer et modifier des choses à faire.  

 

Version 1 : Pour tester rapidement 

Dans un premier temps, nous allons implémenter une IHM rapide dans le but de pouvoir tester rapidement l'interfaçage avec le service. 

Dans le module Angular app.module.ts : 

Ajoutez le module FormsModule en plus de BrowserModule. 
Ce module permet de gérer plus facilement les balises formulaire HTML (form, input, etc.) en ajoutant des directives dédiées (comme ngModel ou ngModelChange par exemple pour les balises input). 

 

Dans le composant racine 

Injectez le service TodolistService 

Dans la vue : 

Une balise form contenant une balise input pour permettre d'ajouter de nouveaux items. Abonnez vous à l'événement submit de la balise form pour déclencher l'ajout. 

Une balise ul et des balises li pour coder la liste elle-même. Abonner vous à l'observable fourni par le service. 

Dans chaque li,  une balise input checkbox pour coder l'attribut isDone, une balise input texte pour coder le l'attribut label, un bouton delete pour permettre la suppression. 

Les balises inputs permettent non seulement de représenter l'état de l'item mais aussi de demander sa modification. Respectez bien l'architecture MVVM. 

[ngMode]   pour injecter dans la balise la valeur à représenter 

Abonnement à (ngModelChange) pour gérer les modifications des balises input (représentant isDone ou label) 

 Version 1 plus plus : Pour un meilleur service 

Nous vous proposons deux points d'améliorations, si le premier est relativement simple, le second vous prendra nettement plus de temps. 

Utilisez l'objet localStorage, définit dans le navigateur, afin de sauvegarder votre liste de chose à faire à chaque modification, et ce de sorte à retrouver votre liste lorsque la page est rafraichie. 
Indication : Vous pouvez utiliser l'objet JSON et ses méthode stringify et parse afin de sérialiser et désérialiser vos TodoList. 

Création d'un service Annuler/Refaire générique et intégration avec le service de TodoList. 
Créez un service d'historique générique : npx ng generate service history 
Pour implémenter le service d'annuler/refaire, nous vous conseillons : 

D'utiliser la généricité afin de pouvoir utiliser ce service quelque soit le type de donnée 

D'avoir deux piles : une pour les versions précédentes (qu'on dépilera pour annuler) ; une pour les versions "suivantes" (qu'on dépilera pour refaire). 

D'utiliser un BehaviorSubject privé pour gérer la version courante de la donnée. 

De dériver de ce BehaviorSubject un observable publique qui publiera des données de type : 

interface History<T> { 

  canUndo: boolean; 

  canRedo: boolean; 

  history: T[]; 

  currentIndex: number; 

  current: T; 

} 

 

D'implémenter des méthode undo, redo et push et un attribut en lecture seule current qui renvoie la valeur courante. 

D'utiliser ce service dans TodoList service afin de gérer les annuler/refaire. 

De modifier le composant racine afin d'en tirer parti. 
 

 

Version 2 : Pour coller à la spécification todomvc
Nous allons recoder l'IHM de l'application du site todoMVC. Nous vous fournissons la feuille de style du site (dans le fichier style.scss qu'il vous faudra copier à la place du fichier existant). Vous n'avez pas à le modifier mais il faudra respecter la structure HTML prévue pour que le style s'applique. 

 

Créez deux composants : 

npx ng generate component todo-list -c OnPush 

npx ng generate component todo-item -c OnPush 

 

Etape 1 : Composant todo-list 

Injecter la dépendance à TodolistService. 

Complétez la vue en copiant le code HTML tiré du site todomvc. 

Affichez le label de la liste 

Permettez à l'utilisateur d'ajouter une chose à faire 

Affichez la liste des choses à faire en utilisant des composants todo-item 

 

Etape 2 : Composant todo-item 
Complétez la vue en copiant le code HTML tiré du site todomvc. 

Le composant prend comme attributs 

Un Input data de type TodoItem. 

Un Output update qui émet des événement de type Partial<TodoItem> 

Un Output remove qui émet des événements de type TodoItem 

Gérez le mode édition (voir sous page dédiée) 

Boutons pour lever l'événement remove 

Case à cocher pour lever l'événement update et représenter isDone 

Champs texte et formulaire pour lever l'événement update 

Pensez à ajouter la classe CSS editing à la balise li contenant l'item si on l'édite. 

Pensez à donner le focus au champs texte lorsque l'item passe en mode édition. 

Sortez du mode édition si le label est modifié ou si le champs texte perd le focus. 

 

Etape 3 : Composant todo-list suite et fin 

Nombre d'items restants à faire 

Gestion des filtres "afficher tout", "afficher les choses à faire" et "afficher les choses faites" 

Case "Tout sélectionner", la case doit se cocher automatiquement si vous sélectionnez chaque items 

 

Question) Remarquez que quand vous coché une chose à faire, le texte passe en grisé barré. 
Cependant il y a une différence avec le site todomvc, normalement il devrait y avoir une petite animation, le texte devrait se griser progressivement or ça n'est pas le cas ici. Ça n'est pas un problème de code CSS mais cela est dû à la boucle *ngFor. Relisez bien le fonctionnement  de ngFor ainsi que cet article et expliquer pourquoi on observe ce comportement. Proposez une solution pour visualiser l'animation correctement (indication, il faudra utiliser trackBy dans la boucle *ngFor). 

# Gestion du annuler refaire 

Utilisez votre service pour pouvoir annuler/refaire des opérations sur la liste : 

Pour cela, vous pourrez vous abonner aux événements clavier de la page à l'aide du décorateur @HostListener: 

 

@HostListener('document:keydown.control.z') undo(event: KeyboardEvent) { 

  // Gestion de l'annulation 

} 

# TP final : Todo List et Firebase 
Pour al suite des TPs, nous vous proposons de mettre en œuvre un serveur Firebase pour gérer vos listes et l'identification des utilisateurs. 

Nous utiliserons l'encapsulation de Firebase dédiée à Angular :  

https://github.com/angular/angularfire 

Partie Client Angular + Firebase 

------------------------------------------------------------------------------------------------------------------------------------ 

Le client sera développé à l’aide d’Angular et pourra être hébergé sur Firebase. 

Firebase est une solution d’hébergement proposée par Google. Cela permet aussi d’utiliser des mécanismes d'authentification de l’utilisateur (via des comptes Google, Facebook, Twitter, Github ou autre) ainsi que du stockage et une base de données temps réelles. 

Nous n'utilisons pour ce projet que la partie hébergement plus authentification. 
 

Création d’une application Firebase 

------------------------------------------------------------------------------------------------------------------------------------ 

Vous aurez besoin d’un compte Google. 

Rendez-vous sur le site de Firebase : https://firebase.google.com 

Connectez-vous avec votre compte Google et accédez à la console. 

Ajoutez un projet. 

Activation des mécanismes d’authentification 

------------------------------------------------------------------------------------------------------------------------------------ 

 

Dans la page de gestion de votre projet Firebase, allez dans la partie Authentification. 
Cliquez sur le bouton commencer, puis activez des fournisseurs (Google à minima). 

 

 

 

 

Intégration de Firebase dans le client 

------------------------------------------------------------------------------------------------------------------------------------ 

 

 

Placez-vous dans le répertoire du projet et exécutez les commandes suivantes : 

Installation de la CLI Firebase : 

npm install -g firebase-tools 

Connectez vous : 

firebase login 

Initialisez Firebase dans votre projet : 

ng add @angular/fire 
Choisissez le projet Firebase que vous avez créé. 

Rendez-vous sur Firebase pour ajouter Firebase à votre application : 
 

Firebase 
Vue d'ensemble du proje 
Créer 
Authentication 
Firestore Database 
Realtime Database 
Storage 
Hosting 
Functions 
Machine Leaming 
Publier et surveiller 
Crashlytics, Performance, Test Lab 
proj-13m-2020-2021 
proj-13m-2020-2021 
Formule Spark 
Lancez-vous en ajoutant 
Firebase à votre 
application 
Ajoutez une application pour démarrer 
 

Spécifiez un nom et cochez la case activant l'hébergement, puis enregistrez l'application 
 

x 
Ajouter Firebase à votre application Web 
Enregistrer l'application 
Pseudo de l'application O 
projet intégrateur 
Configurez également Firebase Hosting pour cette application. En savoir plus 
Hosting peut être configuré plus tard. Vous pouvez commencer à l'utiliser gratuitement à tout moment. 
proj-13m-2020-2021 
(Aucun déploiement pou • 
Enregistrer l'application 
O Ajouter le SDK Firebase 
 
 

Cliquez ensuite sur suivant jusqu'à finaliser le processus. 

Rendez-vous ensuite dans les paramètres du projet : 
 

Firebase 
Vue densemble du proje 
proj-13m-2020-2021 
Paramètres du projet 
Utilisateurs et autorisations 
Utilisation et facturation 
 

En bas de la page, vous devriez ensuite voir apparaitre votre application web, coché le radio bouton "Configuration". 
 

Firebase 
Vue densemble du proje 
Authentication 
Firestore Database 
Realtime Database 
Storage 
Hasting 
Functions 
Machine Learning 
Publier et surveiller 
Crashlytics, Performance, Test Lab 
Analytics 
Dashboard, Realtime, Events, Conve„. 
Engager 
Predictions, AIB Testing, Cloud Me• 
Extensions 
proj-13m.2020-2021 
Paramètres du projet 
Paramètres généraux 
Votre projet 
Nom du projet 
ID du projet 
Numéro du projet O 
Cloud Messaging Intégrations 
proj-13m-2020-2021 
proj-13m-2020-2021 
423016891702 
Comptes de service 
Confidentialité des dc 
Emplacement des ressources GCR 
par défaut 
Clé API web 
Paramètres publics 
eur3 (europe-west) 
AizaSyA2k7P2CF14P2cNgw19cPkGg02TumRfoCE 
Ces paramètres déterminent quelles instances de votre projet sont publiques 
Nom public @ 
Adresse e-mail associée O 
Vos applications 
Applications Web 
projet intégrateur 
Web App 
project-423016891702 
alxdmr2@gmail.c0m 
Pseudo de l'application 
projet intégrateur 
ID de l'application O 
Site Firebase Hosting associé 
G) proj-13m-2020-2021 
Firebase SDK snippet 
@ Automatique O O CDN O O Configuration O 
Copiez et collez ces scripts en bas de votre balise et c 
Firebase : 
 

Copiez l'objet JSON 

Rendez-vous maintenant dans votre code, fichier environments/environment.ts 
Ajoutez un attribut firebase dont la valeur sera l'objet JSON que vous avez copié dans Firebase 

Dans le fichier app.module.ts, ajoutez dans les imports le module suivant : 

AngularFireModule.initializeApp(environment.firebase) 


# Authentification via Firebase 

Client V0 
---------------------------------------------------------------------------------- 

Nous allons ajouter la possibilité de s'identifier via un compte Google. 

https://github.com/angular/angularfire/blob/HEAD/docs/auth/getting-started.md 

Modifiez la vue du composant pour exploiter ces fonctions. 
Vous disposez de observable  auth.user qui publie des données de type firebase.User | null. 
L'observable publie null quand il n'y a pas d'utilisateur authentifié. 
L'observable publie un utilisateur de type firebase.User sinon. 
Affichez l'image de profil de l'utilisateur ainsi que son nom. 

# Accès à la BD FireStore 

Nous allons utiliser la BD synchronisé Firestore pour stocker les listes de choses à faire. 

https://github.com/angular/angularfire#interacting-with-your-databases 

Vous utiliserez le service  AngularFirestore, voir par exemple https://github.com/angular/angularfire/blob/master/docs/firestore/documents.md 

Code amorce pour refaire le CC sur machine : 

https://github.com/AlexDmr/clihm-2022-cc1-student  

# Séance de révision 
CC2 sur papier : 1 avril 

 

+ mini projet todolist => vendredi 8 avril à 22h, date du dépôt GitHub faisant foi 

Synchroniser la todolist avec Firebase 

Ajouter quelques fonctionnalité : 

De base : authentification 

De base : Synchroniser les données avec Firestore (BD temps réelle) 

Extensions possibles : 

Une liste par compte => mutli-utilisateur 

Todo item  

Photos 

Annotation manuscrite / dessin (canvas) 

Import/Export de la todolist (format JSON par exemple) 

Interaction vocale (synthèse + reconnaissance) 

Partage de liste (ex : QR-code, invitation, …) 

Gestion de plusieurs listes 

Version pour smartphone, PWA (Progressive Web Application) 

Question : Comment fonctionne l'injection de service dans les composants ? 

 

Les composants expriment des dépendances à des services via les paramètres de leur constructeur 

Il est nécessaire que les services correspondants soient fournis par "quelqu'un" 

Un composant (celui qui réclame le service OU BIEN un de ses ancêtres dans la hiérarchie de l'arbre HTML) 

Soit le module Angular dans lequel le composant est définit 

Soit la racine de l'application 
(ce qui se passe par défaut quand vous ajoutez un composant dans vsCode) 

Question : Différences entre Observable, Subject et BehaviorSubject 

https://support-l3m-clihm.web.app/#c3s2v0 

https://support-l3m-clihm.web.app/#c3s2v1 

 

Pourquoi in dérive toujours les behaviorSubject en observable ? 

En général, le behaviorSubject est privé, on est donc les seul à pouvoir l'utiliser pour publier de nouvelles valeur 

Au contraire, l'observable dérivé de ce behaviorSubject est quant à lui publique, mais la seule chose qu'on peut faire avec, c'est s'abonner ou le dériver 

Dérivation avec pipe 

Observables froids ou chaud ? 

https://support-l3m-clihm.web.app/#c3s4v0 

##############################################################################################################################################################################################################################################################################################################
