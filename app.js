import { swipTheme } from "./theme.js";

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

const container = document.querySelector('.list-group');
const form = document.querySelector('form');
const groupe = document.querySelectorAll('.btn-group button');
const contGroupe = document.querySelector('.btn-group');
const todos = getFromLocalStorage('todos');

function createTodoElement(id, title, completed) {
    const li = document.createElement('li');
    li.classList.add('todo', 'list-group-item', 'd-flex', 'align-items-center');
    if (completed) li.classList.add('checked');
    li.innerHTML = `
        <input class="form-check-input" type="checkbox" id="checkbox-${id}" ${completed ? 'checked' : ''}>
        <label class="ms-2 form-check-label" for="checkbox-${id}">${title}</label>
        <button class="ms-auto btn btn-danger btn-sm"><i class="bi-trash"></i></button>
    `;
    li.id = `todo-${id}`;
    return li;
}

function loadTodosFromLocalStorage() {
    todos.forEach(todo => {
        const li = createTodoElement(todo.id, todo.title, todo.completed);
        container.prepend(li);
        addRemoveEvent(li.querySelector('button'));
        addCheckboxEvent(li.querySelector('input[type="checkbox"]'));
    });
}

function addTodo() {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const title = data.get('title');
        const id = Date.now();
        const newTodo = { id, title, completed: false };

        const li = createTodoElement(id, title, false);
        container.prepend(li);
        form.reset();
        addRemoveEvent(li.querySelector('button'));
        addCheckboxEvent(li.querySelector('input[type="checkbox"]'));

        todos.push(newTodo);
        saveToLocalStorage('todos', todos);
    });
}

function addRemoveEvent(button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const li = button.closest('li');
        const todoId = parseInt(li.id.replace('todo-', ''));
        li.remove();

        // Mettre à jour le tableau todos et sauvegarder les changements
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        todos.length = 0; // Vider le tableau todos
        todos.push(...updatedTodos); // Ajouter les éléments mis à jour
        saveToLocalStorage('todos', updatedTodos);
    });
}


function addCheckboxEvent(checkbox) {
    checkbox.addEventListener('change', function (e) {
        const li = checkbox.closest('li');
        const todoId = parseInt(li.id.replace('todo-', ''));
        li.classList.toggle('checked', checkbox.checked);

        todos.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = checkbox.checked;
            }
        });
        saveToLocalStorage('todos', todos);
    });
}

function filterButton() {
    groupe.forEach(button => {
        button.addEventListener('click', function () {
            groupe.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterTasks();
        });
    });
}

function filterTasks() {
    const allActive = document.querySelector('#all').classList.contains('active');
    const todoActive = document.querySelector('#todo').classList.contains('active');
    const doneActive = document.querySelector('#done').classList.contains('active');

    document.querySelectorAll('.list-group-item').forEach(task => {
        const isChecked = task.classList.contains('checked');
        if (allActive) {
            task.style.display = 'flex';
        } else if (todoActive) {
            task.style.display = isChecked ? 'none' : 'flex';
        } else if (doneActive) {
            task.style.display = isChecked ? 'flex' : 'none';
        }
    });
}

function init() {
    addTodo();
    loadTodosFromLocalStorage();
    filterButton();
}

const icon = document.querySelector('#dark-light .bi');
icon.addEventListener('click', function (e) {
    swipTheme(icon);
});

init();
