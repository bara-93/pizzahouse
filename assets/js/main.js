
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

    
      

