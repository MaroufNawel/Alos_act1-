# Alos_act1-

	
   Nous avons installé Node.js, le JSON server, REST et UNIREST. Puis nous avons introduit un code JS sur Generator, pour générer notre base de données qui
  contient des enregistrements de 100 personnes capables de donner du sang.
  La base de données est contenue dans le fichier db.json. 
  Nous avons lancé le service json-server --watch db.json pour obtenir notre lien http://localhost:3000/Donneurs.
  Concernant le code Listing 2 modifié pour afficher les 10 premiers enregistrements , il est contenu dans le fichier index.js ainsi que la fonction de filtrage.
  Nous avons utilisé la fonctionnalité slice(0, 10) pour affichier les 10 premiers enregistrements et nous avons écrit une fonctions qui
  permet de filtrer seulement les ressources de notre base donnnée dont les noms commencent par la lettre M. 
