let Events_Crud_Img = document.querySelector("#Events_Crud_Img");
let avatar_Img = document.querySelector(".avatar_Img");
let Events_Crud_Date = document.querySelector("#Events_Crud_Date");
let Events_Crud_Title = document.querySelector("#Events_Crud_Title");
let Events_Crud_Btn = document.querySelector("#Events_Crud_Btn");
let Events_Crud_Datas = document.querySelector("#Events_Crud_Datas");

if(localStorage.getItem("Event_Details") ==null){
  var arrData = [];
  var arrSearch_Query = [];
}
else{
var arrData =[];
arrData = JSON.parse(localStorage.getItem("Event_Details"));
arrSearch_Query = JSON.parse(localStorage.getItem("SearchQuery"));
  displayEventData();
}
var src;
let inputs =Array.from(document.getElementsByClassName('Events_Crud_Form_Control'));
var currentIndex = 0;

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.addEventListener(
        "load",
        function () {
          src = reader.result;
          avatar_Img.src =src;
        },
        false
      );
          reader.readAsDataURL(input.files[0]);
        }
  }
Events_Crud_Btn.addEventListener("click",function(){
  if(Events_Crud_Btn.innerHTML=="Add"){
    addEventData();
  }else if(Events_Crud_Btn.innerHTML =="Update") {
    Update_EV_Data();
    
Swal.fire(
  'Data has been updated',
  '',
  'success'
)
    }
  
  clearEventDataForm();
    displayEventData();
  
});
function addEventData(){
let event = {
    img:src,
    date:Events_Crud_Date.value,
    title:Events_Crud_Title.value
}
arrData.push(event);
arrSearch_Query.push(event.title);
localStorage.setItem("Event_Details",JSON.stringify(arrData));
localStorage.setItem("SearchQuery",JSON.stringify(arrSearch_Query));
}
function displayEventData(){
    let data = "";
    for(let i =0; i<arrData.length;i++){
       currentIndex = i;

    data += `
    <tr>
    <th scope="row">${i+1}</th>
    <td><img src=${arrData[i].img} alt="testimg" style="width:30px; height:30px" id="Crud_table_Img"></td>
    <td>${arrData[i].date}</td>
    <td>${arrData[i].title}</td>
    <td>
        <button class="btn btn-primary" onclick="get_Event_Data(${i})">Edit</button>
        <button class="btn btn-danger" onclick="Delete_event_Data(${i})">Delete</button>
    </td>

  </tr>
    
    `
}
Events_Crud_Datas.innerHTML = data;
}

function clearEventDataForm(){
  inputs.forEach((e) => {
    e.value ="";
    
  });

}
function get_Event_Data(index){
  Events_Crud_Date.value = arrData[index].date;
  Events_Crud_Title.value = arrData[index].title;
  src = arrData[index].img;
  Events_Crud_Btn.innerHTML ="Update"
  currentIndex = index;
}
function Update_EV_Data(){
  var event= {
    img:src,
    date:Events_Crud_Date.value,
    title:Events_Crud_Title.value,
}
  arrData[currentIndex].date =  event.date;
  arrData[currentIndex].title = event.title;
  arrData[currentIndex].img = event.img;
  arrSearch_Query[currentIndex] = event.title;
  localStorage.setItem("Event_Details",JSON.stringify(arrData));
  localStorage.setItem("SearchQuery",JSON.stringify(arrSearch_Query));

  Events_Crud_Btn.innerHTML = "Add";


}
function Delete_event_Data(index){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      arrData.splice(index,1);
      arrSearch_Query.splice(index,1);
      localStorage.setItem("Event_Details",JSON.stringify(arrData));
      localStorage.setItem("SearchQuery",JSON.stringify(arrSearch_Query));
    
        displayEventData();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      }
})
}
function Delete_All_Events(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("Event_Details");
      localStorage.removeItem("SearchQuery")
  arrData = [];
  arrSearch_Query = [];
  displayEventData();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      
    }
  })
  
  
}
function searchEvent(input){
  let data = "";
    for(let i =0; i<arrData.length;i++){
      if(arrData[i].title.toLowerCase().includes(input.toLowerCase())){
    data += `
    <tr>
    <th scope="row">${i+1}</th>
    <td><img src=${arrData[i].img} alt="testimg" style="width:30px; height:30px" id="Crud_table_Img"></td>
    <td>${arrData[i].date}</td>
    <td>${arrData[i].title}</td>
    <td>
        <button class="btn btn-primary" onclick="get_Event_Data(${i})">Edit</button>
        <button class="btn btn-danger" onclick="Delete_event_Data(${i})">Delete</button>
    </td>

  </tr>
    
    `
}
}
Events_Crud_Datas.innerHTML = data;

}









