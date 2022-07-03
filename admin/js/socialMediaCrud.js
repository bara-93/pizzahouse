 let fb_Input = $("#fb_Input");
 let tw_Input = $("#twitter_Input");
 let inst_Input = $("#instagram_Input");
let post = "";
    

if(localStorage.getItem("links") == null){
    let links = {};
    $('#social_Media_Btn').prop('disabled', true);
    checkValidation();


}
else{
let links = JSON.parse(localStorage.getItem("links"));
$('#social_Media_Btn').prop('disabled', true);
let clrForm = document.querySelectorAll(".socialMedia_Identifier");
clrForm.forEach((e)=>{
    e.setAttribute("disabled",true);
 })
 displayData();
    
}

$("#social_Media_Btn").click(function(){
    addLinks(); 
    displayData();
    clearForm();
})
function addLinks(){
    let socMed = {
        fb_link : fb_Input.val() ,
        tw_link: tw_Input.val() ,
        inst_link: inst_Input.val()
    }
    localStorage.setItem("links",JSON.stringify(socMed)) ;
    
}
function displayData(){
    let Data = localStorage.getItem("links");

    Data =  JSON.parse(Data);
    post = 
    `
    <tr>
    
    <td>${Data.fb_link}</td>
    <td>${Data.tw_link}</td>
    <td>${Data.inst_link}</td>
    <td ><button class="btn btn-primary" onclick ="updateData()">Update</button> 
    <button class="btn btn-danger" onclick="deleteData()">Delete</button> </td>

  </tr>
    
    `;
    
    $("#social_Crud_Container").html( post);
    $('#social_Media_Btn').prop('disabled', true);
}
function clearForm(){
    let clrForm = document.querySelectorAll(".socialMedia_Identifier");
    clrForm = Array.from(clrForm);
    clrForm.forEach((e)=>{
       e.value = "";
       e.setAttribute("disabled",true);
    })
    
}
function updateData(){
    let clrForm = document.querySelectorAll(".socialMedia_Identifier");
    let Data = localStorage.getItem("links")
    Data = JSON.parse(Data);
    clrForm = Array.from(clrForm);
    clrForm.forEach((e)=>{
       e.removeAttribute("disabled");
    })
    $('#social_Media_Btn').prop('disabled', false);
     fb_Input.val(Data.fb_link );
     inst_Input.val(Data.inst_link);
     tw_Input.val(Data.tw_link)
     $("#social_Media_Btn").html("Update Data");
    //  addLinks();
    //  displayData();

}
function deleteData(){
     let clrForm = document.querySelectorAll(".socialMedia_Identifier");
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
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success')
           
     localStorage.removeItem("links");
     $("#social_Crud_Container").html("");
     clrForm = Array.from(clrForm);
        clrForm.forEach((e)=>{
           e.removeAttribute("disabled");
           $('#social_Media_Btn').prop('disabled', false);
           $("#social_Media_Btn").html("Add")

        })
          
        }
      })

    
    }

    function fbValidate(){
      let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      if(pattern.test(fb_Input.val())){
        fb_Input.removeClass("is-invalid");
        fb_Input.addClass("is-valid");
        $(".fb_error").addClass("d-none");
        checkValidation()
        

      }
      else{
        fb_Input.addClass("is-invalid");
        $(".fb_error").removeClass("d-none");
        // $('#social_Media_Btn').prop('disabled', true);
      }
    }
    function tweetValidate(){
      let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      if(pattern.test(tw_Input.val())){ 
        tw_Input.removeClass("is-invalid");
        tw_Input.addClass("is-valid");
        $(".tw_error").addClass("d-none");
        checkValidation()

        
      }
      else{
        tw_Input.addClass("is-invalid");
        $(".tw_error").removeClass("d-none");
        // $('#social_Media_Btn').prop('disabled', true);

      }
    }
    function instValidate(){
      let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      if(pattern.test(inst_Input.val())){
        inst_Input.removeClass("is-invalid");
        inst_Input.addClass("is-valid");
        $(".ins_error").addClass("d-none");
        checkValidation()
        

      }
      else{
        inst_Input.addClass("is-invalid");
        $(".ins_error").removeClass("d-none");
        // $('#social_Media_Btn').prop('disabled', true);
      }
    }
    function checkValidation(){
      if(fb_Input.val().length >0 && tw_Input.val().length >0 && inst_Input.val().length>0){
        $('#social_Media_Btn').prop('disabled', false);
      }else{
        $('#social_Media_Btn').prop('disabled', true);
      }
    }