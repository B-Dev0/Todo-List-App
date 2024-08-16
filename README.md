# To-Do List Application

Cette application de To-Do List est une solution simple et efficace pour gérer vos tâches quotidiennes. Elle vous permet d'ajouter, de supprimer et de filtrer les tâches, ainsi que de sauvegarder vos tâches dans le stockage local de votre navigateur. L'application prend également en charge le basculement entre les thèmes clair et sombre.

## Fonctionnalités

- **Ajout de tâches** : Ajoutez une nouvelle tâche en remplissant le formulaire et en soumettant le titre de la tâche.
- **Suppression de tâches** : Supprimez une tâche en cliquant sur l'icône poubelle à côté de la tâche.
- **Filtrage des tâches** : Filtrez les tâches pour afficher toutes les tâches, uniquement celles qui sont terminées, ou uniquement celles qui ne le sont pas.
- **Sauvegarde locale** : Les tâches sont automatiquement sauvegardées dans le stockage local, ce qui permet de les retrouver même après le rechargement de la page.
- **Thème clair/sombre** : Changez le thème de l'application en cliquant sur l'icône correspondante.

## Structure du code

- **`createTodoElement(id, title, completed)`** : Crée un élément de tâche (`li`) avec un identifiant, un titre, et un état complété ou non.
- **`saveToLocalStorage(key, value)`** : Sauvegarde les données sous forme de clé/valeur dans le stockage local.
- **`getFromLocalStorage(key)`** : Récupère les données sauvegardées depuis le stockage local.
- **`addTodo()`** : Ajoute un écouteur d'événements au formulaire pour créer une nouvelle tâche lorsque le formulaire est soumis.
- **`addRemoveEvent(button)`** : Ajoute un écouteur d'événements à chaque bouton de suppression pour permettre la suppression d'une tâche.
- **`addCheckboxEvent(checkbox)`** : Ajoute un écouteur d'événements à chaque case à cocher pour marquer une tâche comme complétée ou non.
- **`filterButton()`** : Gère les boutons de filtrage des tâches.
- **`filterTasks()`** : Filtre les tâches en fonction du filtre sélectionné (toutes, à faire, faites).
- **`init()`** : Fonction principale qui initialise l'application en chargeant les tâches depuis le stockage local, en ajoutant les écouteurs d'événements et en appliquant les filtres.

## Installation et exécution

1. Clonez ce dépôt sur votre machine locale.
   ```bash
   git clone https://github.com/votre-utilisateur/todo-list-app.git
