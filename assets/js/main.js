 /* Start js for Featured Dishes Section  */
 let pizzaDish = document.querySelector(".pizza-dishs");
let pastaDish = document.querySelector(".pasta-dishs");
let saladDish = document.querySelector(".salad-dishs");
let drinks =document.querySelector(".drinks");




let dishes;
if (localStorage.getItem("dishesList") == null) {

    dishes = [];
  console.log("hi1");
  } else {
    dishes = JSON.parse(localStorage.getItem("dishesList"));
  console.log("hi2");
  }
  showPastaDishes();


function showPastaDishes() {
    pastInfo = "";
    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i].type == "pasta") {
        
        pastInfo += ` 
         <div class="card mb-3 col-md-6">
      <div class="row g-0">
          <div class="col-md-3 menuitem_img ">
              <img src="${dishes[i].image}"
                  class="img-fluid rounded-circle " alt="...">
          </div>
          <div class="col-md-9 ">
              <div class="card-body menuitem_info ">
                  <h5 class="card-title menuitem_title text-start text-capitalize ">${dishes[i].name} <span
                          class=" menuitem_price text-end">${dishes[i].price}.00$</span></h5>
  
  
                  <p class=" menuitem_desc text-start">${dishes[i].description}</p>
              </div>
          </div>
      </div>
      </div>
      `;
  
      }
     
    }
    pastaDish.innerHTML = pastInfo;
  
  }
  
  function showPizzaDishes() {
    console.log("pizza");
    let pizzaInfo = "";
    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i].type == "pizza") {
        pizzaInfo += `   <div class="row g-0">
        <div class="card mb-3 col-md-6">
      <div class="row g-0">
          <div class="col-md-3 menuitem_img ">
              <img src="${dishes[i].image}"
                  class="img-fluid rounded-circle " alt="...">
          </div>
          <div class="col-md-9 ">
              <div class="card-body menuitem_info ">
                  <h5 class="card-title menuitem_title text-start">${dishes[i].name} <span
                          class=" menuitem_price text-end">${dishes[i].price}.00$</span></h5>
  
  
                  <p class=" menuitem_desc text-start">${dishes[i].description}</p>
              </div>
          </div>
      </div>
      </div>
  </div>`;
  
      }
  
    }
    pizzaDish.innerHTML = pizzaInfo;
  }
  function showSaladDishes() {
    let saladInfo = "";
    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i].type == "salads") {
        saladInfo += `   <div class="row g-0">
        <div class="card mb-3 col-md-6">
      <div class="row g-0">
          <div class="col-md-3 menuitem_img ">
              <img src="${dishes[i].image}"
                  class="img-fluid rounded-circle " alt="...">
          </div>
          <div class="col-md-9 ">
              <div class="card-body menuitem_info ">
                  <h5 class="card-title menuitem_title text-start">${dishes[i].name} <span
                          class=" menuitem_price text-end">${dishes[i].price}.00$</span></h5>
  
  
                  <p class=" menuitem_desc text-start">${dishes[i].description}</p>
              </div>
          </div>
      </div>
      </div>
  </div>`;
  
      }
  
    }
    saladDish.innerHTML = saladInfo;
  }
  function showDrinks() {
    let drinksInfo = "";
    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i].type == "drinks") {
        drinksInfo += `   <div class="row g-0">
       <div class="card mb-3 col-md-6">
      <div class="row g-0">
          <div class="col-md-3 menuitem_img ">
              <img src="${dishes[i].image}"
                  class="img-fluid rounded-circle " alt="...">
          </div>
          <div class="col-md-9 ">
              <div class="card-body menuitem_info ">
                  <h5 class="card-title menuitem_title text-start">${dishes[i].name} <span
                          class=" menuitem_price text-end">${dishes[i].price}.00$</span></h5>
  
  
                  <p class=" menuitem_desc text-start">${dishes[i].description}</p>
              </div>
          </div>
      </div>
      </div>
  </div>`;
  
      }
  
    }
    drinks.innerHTML = drinksInfo;
  }
 /* End js for Featured Dishes Section  */
 
if(localStorage.getItem("links") == null){
    let link = [];
}else {

    let link = [];
     link=JSON.parse(localStorage.getItem("links"));
    console.log('link',link);
    let fb_pure_link = $("#fb_pure_link");
    let twitter_pure_link = $("#twitter_pure_link");
    let insta_pure_link = $("#insta_pure_link");
    fb_pure_link.attr("href",link.fb_link);
    twitter_pure_link.attr("href",link.tw_link);
    insta_pure_link.attr("href",link.inst_link);
}
if (localStorage.getItem("Event_Details") == null){
    let arrayData = [];
}else{

    let arrData = JSON.parse(localStorage.getItem("Event_Details"));
    console.log(" arrayData: =>",arrData);
    let arrSearch_Query = JSON.parse(localStorage.getItem("SearchQuery"));
    let  upcom_events_items_img_pic = document.querySelector(".upcom_events_items_img_pic");
    console.log( upcom_events_items_img_pic);
    let upcom_events_date = document.querySelector(".upcom_events_date");
    console.log(upcom_events_date);
    let Events_Title = document.querySelector(".Events_Title");
    console.log(Events_Title);
    let CrudEvents_Container_Content = document.querySelector(".CrudEvents_Container_Content")
    
    
        let result = "";
        for(let i=0;i<arrData.length;i++ ){
    result+= 
    `
    <div class="upcom_events_items col-md-4 pb-3 ">
                          <div class="card h-100  ">
                              <div class="upcom_events_items_img position-relative">
                                <a href="https://www.google.com/search?q=${arrSearch_Query[i]}" class="upcom_events_items_img_link">
                                  <img src=${arrData[i].img} class="card-img-top upcom_events_items_img_pic  img-fluid" alt="upcom_events_items_img1">
                                <div class="upcom_events_items_overlay position-absolute top-0 start-0 end-0 bottom-0">
                                      <p class="upcom_events_items_overlay_link bg-danger  row rounded-circle   justify-content-center   align-items-center">
                                        <i class="fa-solid fa-link"></i>
                                      </p>
                                  </div>
                                </a>
                              </div >
                            <div class="card-body  w-100 img-">
                                <p class="sc_events_item_date upcom_events_date  m-auto px-1 my-5 px-2"style="width:fit-content; color:#fff">${arrData[i].date}</p>
                                <h5 class="card-title  text-center w-75 m-auto ">
                                <a href="https://www.google.com/search?q=${arrSearch_Query[i]}" class="Events_Title">
                                  ${arrData[i].title} 
                                </a> 
                                </h5>
                                <div class="card_moreDetails text-center mt-2 p-2">
                                    <a href="https://www.google.com/search?q=${arrSearch_Query[i]}">read more..</a>
             </div>
                          </div>
                        </div>
                        </div>
    `
    
    
        }
        CrudEvents_Container_Content.innerHTML = result;


}

    
      

