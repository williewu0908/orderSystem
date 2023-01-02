var addman = document.getElementById("newEmployee");
var newName = document.getElementById("name");
var img = document.getElementById("SelectImg");
var pos = document.getElementById("SelectPosition");
var list = document.getElementById("list");


addman.addEventListener("click", function handleClick() {
    list.innerHTML = list.innerHTML + `
    <div class="col-12 col-md-3">
        <img src="館長.jpg" class="img-fluid" />
        <h3 class="title">${newName.value}</h3>
        <div>s
            <h5 style="display:inline">職位：</h5>
            <h5 style="display:inline">服務生</h5>
        </div>
            <div>
                <span>上班時間：</span>
                <span>8</span>
                <span>時</span>
                <span>0</span>
                <span>分</span>
            </div>
        <div>
            <span>下班時間：</span>
            <span>8</span>
            <span>時</span>
            <span>0</span>
            <span>分</span>
        </div>
    </div>
     `;
    newName.value = "";
    content.value = "";
})