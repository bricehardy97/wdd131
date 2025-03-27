const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
console.log(input,button,list);



button.addEventListener('click', function(){
    console.log("its time")
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    input.value = "";
});


