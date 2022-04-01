const profile = new Profile(); //profileden bir tane obje tanımlıcaz ve bu obje aracılıgıyla 
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup",(event)=>{ 
 let text = event.target.value;              //event aracılığıyla targete ulaşcaz
    ui.clear();
    if(text!==""){          //target değeri boşluğa eşit değilse dedik burda
        profile.getProfile(text)
        .then(res => 
            {
            if(res.profile.length=== 0){  //burda aldıgımız profili consolda yazdırabildik.
                    ui.showAlert(text);
            }else{
                ui.showProfile(res.profile[0]); //profile artık profil bilgisine sahip..
            }
    })
}

});