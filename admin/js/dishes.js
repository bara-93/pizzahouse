
let dishName = document.getElementById("dishName");
let dishType = document.getElementById("dishType");
let dishImage = document.getElementById("dishImage");
let dishPrice = document.getElementById("dishPrice");
let dishDescription = document.getElementById("dishDescription");
let dishPhoto = document.getElementById("dishPhoto");
let currentIndex;
let src;
let addBtn = document.getElementById("addBtn");
let data = document.getElementById("data");
let dishes = [];
let result = "";
let pastInfo = "";



let inputs = document.getElementsByClassName("form-control");

if (localStorage.getItem("dishesList") == null) {

  dishes = [];

} else {
  dishes = JSON.parse(localStorage.getItem("dishesList"));

}

showDishes();



addBtn.onclick = function () {
 if(validation()){
    if (addBtn.innerHTML == "Add Dish") {
      addDish();
    } else {
      updateDishInfo();
    }
    showDishes();
    clearDishForm();
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Pleas Input All Fields!',
  
  });
}

}







function addDish() {


  let dish = {
    name: dishName.value,
    type: dishType.value,
    image: src,
    price: dishPrice.value,
    description: dishDescription.value
  }

  dishes.push(dish);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' The Dish is Adding  ',
    showConfirmButton: false,
    timer: 1500
  });
  localStorage.setItem("dishesList", JSON.stringify(dishes));
  dishName.classList.add("is-invalid") ;
  dishImage.classList.add("is-invalid");
   dishType.classList.add("is-invalid") ;
    dishPrice.classList.add("is-invalid") ; 
    dishDescription.classList.add("is-invalid");
}

function showDishes() {
  result = "";

  for (var i = 0; i < dishes.length; i++) {
    result += ` <tr>
    <th scope="row">${i + 1}</th>
    <td>${dishes[i].name}</td>
    <td>${dishes[i].type}</td>
    <td><img src="${dishes[i].image}" alt="" style="width:40px ; height: 40px; "> </td>
    <td>${dishes[i].price}</td>
    <td>${dishes[i].description}</td>
    <td>
        <button type="button" class="btn btn-primary"  onclick="previewDishInfo(${i})" >Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteDish(${i})">Delete</button>

    </td>
  </tr>`;
  }


  data.innerHTML = result;
}
function readURL(input) {

  var img = input.files[0];
  console.log(img);
  if (img.type == "image/jpeg" || img.type == "image/jpg" || img.type == "image/gif" || img.type == "image/png" || img.type == "image/webp") {

    if (input.files && img) {

      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {

          src = reader.result;
          console.log(src);
          dishPhoto.src = src;
         

        },
        false
      );
      reader.readAsDataURL(input.files[0]);
    }

  } else {
    alert("this is not image");
  }
}

function clearDishForm() {
  //  dishName.value="";
  // dishImage.value ="";
  // dishPrice.value="";
  // dishDescription.value="";
  // dishType.selectedIndex =0;
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  dishType.selectedIndex = 0;
  src = "";
  dishPhoto.src = "http://placehold.jp/150x150.png";
}


function deleteDish(index) {
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
      dishes.splice(index, 1);
  localStorage.setItem("dishesList", JSON.stringify(dishes));

  showDishes(); 
  Swal.fire(
        'Deleted!',
        'Your Dish has been deleted.',
        'success'
      )
    }
  })
 

}
function deleteAllDishes() {
  localStorage.removeItem("dishesList");
  dishes = [];
  data.innerHTML = "";
}
function previewDishInfo(index) {
dishName.classList.add("is-valid") ;
  dishImage.classList.add("is-valid");
   dishType.classList.add("is-valid") ;
    dishPrice.classList.add("is-valid") ; 
    dishDescription.classList.add("is-valid");
    dishName.classList.remove("is-invalid") ;
  dishImage.classList.remove("is-invalid");
   dishType.classList.remove("is-invalid") ;
    dishPrice.classList.remove("is-invalid") ; 
    dishDescription.classList.remove("is-invalid");
  dishName.value = dishes[index].name;
  dishType.value = dishes[index].type;
  dishPhoto.src = dishes[index].image;
  dishPrice.value = dishes[index].price;
  dishDescription.value = dishes[index].description;
  
  addBtn.innerHTML = "Update Dish";
  currentIndex = index;

}

function updateDishInfo() {
  if(validation()){
  dishes[currentIndex].name = dishName.value;
  dishes[currentIndex].type = dishType.value;
  if (src) { dishes[currentIndex].image = src; }

  dishes[currentIndex].price = dishPrice.value;
  dishes[currentIndex].description = dishDescription.value;
  localStorage.setItem("dishesList", JSON.stringify(dishes));
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' The Dish is Update  ',
    showConfirmButton: false,
    timer: 1500
  });
  addBtn.innerHTML = "Add Dish";
}
}






dishName.onkeyup = function () {
  if (dishName.value != "") {
    dishName.classList.add("is-valid");
    dishName.classList.remove("is-invalid");
    errorDishName.classList.add("d-none");

  } else {

    dishName.classList.add("is-invalid");
    dishName.classList.remove("is-valid");
    errorDishName.classList.remove("d-none");
  }
}

dishType.onchange = function () {
  if (dishType.value != "") {
    dishType.classList.add("is-valid");
    dishType.classList.remove("is-invalid");
    errorDishType.classList.add("d-none");

  } else {

    dishType.classList.add("is-invalid");
    dishType.classList.remove("is-valid");
    errorDishType.classList.remove("d-none");
  }
}

dishImage.onchange = function () {
  if (dishImage.value != "") {
    console.log("joijio");
    readURL(dishImage);
    dishImage.classList.add("is-valid");
    dishImage.classList.remove("is-invalid");
    errorDishImage.classList.add("d-none");

  } else {
  
    dishImage.classList.add("is-invalid");
    dishImage.classList.remove("is-valid");
    errorDishImage.classList.remove("d-none");
  }
}
dishPrice.onkeyup = function () {

  if (!isNaN(dishPrice.value)) {

    dishPrice.classList.add("is-valid");
    dishPrice.classList.remove("is-invalid");
    errorDishPrice.classList.add("d-none");

  } else {

    dishPrice.classList.add("is-invalid");
    dishPrice.classList.remove("is-valid");
    errorDishPrice.classList.remove("d-none");
  }
}
dishDescription.onkeyup = function () {
  if (dishDescription.value != "") {
    dishDescription.classList.add("is-valid");
    dishDescription.classList.remove("is-invalid");
    errorDishDescription.classList.add("d-none");

  } else {

    dishDescription.classList.add("is-invalid");
    dishDescription.classList.remove("is-valid");
    errorDishDescription.classList.remove("d-none");
  }
}

function validation() {

  if (dishName.classList.contains("is-valid") && dishImage.classList.contains("is-valid") && dishType.classList.contains("is-valid") && dishPrice.classList.contains("is-valid") && dishDescription.classList.contains("is-valid")) {
    return true;
  } else {
    return false;
  }
}
 
