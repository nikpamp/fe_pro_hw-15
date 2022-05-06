const title = document.createElement('h1');
title.innerText = "Nikita Pampushka"
document.body.appendChild(title);

const paragraph = document.createElement('p');
paragraph.innerText = "Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html, а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия, в <p> - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести, если нажать на кнопку то будет выведен alert c введенным в поле значением и после закрытия alert'а поле будет очищаться.";
document.body.appendChild(paragraph);

const input = document.createElement('input');
document.body.appendChild(input);

const button = document.createElement('button');
button.innerText = "Button";
document.body.appendChild(button);
button.addEventListener('click', () => {
    alert(input.value);
    input.value = null;
});
