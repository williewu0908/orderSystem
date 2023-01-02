// 接收服務生系統傳來的資料
function get() {
  fetch('URL')
    .then(response => response.json()) // 將回應資料解析成 JSON 格式
    .then(name => addTodo(name)) // 使用解析後的資料來新增餐點
    .catch(error => console.error(error)); // 處理錯誤
}
// 定義一個函數來新增餐點到待做清單中
function addTodo(name) {
  // 建立一個新的 li 元素，內含餐點名稱和按鈕
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <span>${name}</span>
    <input type="button" value="待做">
  `;
  todoItem.classList.add('todo-item');

  // 將新建立的餐點項目加入到待做清單中
  const todoList = document.getElementById('todo-list');
  todoList.appendChild(todoItem);

  // 綁定按鈕的點擊事件
  const button = todoItem.querySelector('.todo-button');
  button.addEventListener('click', toggle);
}

// 監聽按鈕的點擊事件，並更新按鈕的名稱和計時器的狀態
function toggle(event) {
  const button = event.target;
  const todoItem = button.parentNode;
  const timer = todoItem.querySelector('.timer');

  if (button.value === '待做') {
    // 如果原本是待做狀態，則更新按鈕名稱為 "完成"，並啟動計時器
    button.value = '完成';
    timer.classList.remove('hidden');
    timer.start();
  } else {
    // 如果原本是完成狀態，則更新按鈕名稱為 "'結束'"，並停止計時器
    button.value = '結束';
    timer.classList.add('hidden');
    timer.stop();

    // 將完成的餐點名稱傳回給其他網頁
    const name = todoItem.querySelector('span').textContent;
    sendToOtherWeb(name);

    // 將完成的餐點資訊傳回給後端
    const time = timer.textContent;
    sendToBackend(name, time);

    todoItem.remove();
  }
}
// 傳送完成的餐點資訊給後端
function sendToBackend(name, time) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `name=${encodeURIComponent(name)}&time=${encodeURIComponent(time)}`
  };
  fetch('/todos', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}


// 傳送完成的餐點資訊給其他網頁
function sendToOtherWeb(name) {
  const message = {
    type: 'todo_status',
    data: name
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  };
  fetch('URL', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

  
  



