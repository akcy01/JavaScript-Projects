function Course(title,instructor,image){   //obje yaptık //parantezin içine yazdıklarım dışardan alınacak bilgiler

    this.title = title;
    this.instructor = instructor;
    this.image = image;

}

// UI constructor
function UI(){

}



UI.prototype.addCourseToList = function(course){ //dışardan gelen kurs objesi ile bir html tanımlaması yapıcak
    const list = document.getElementById("course-list");

    var html = `
        <tr>

                <td><img src="img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>                                   
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>

        </tr>
    
    
    `;

    list.innerHTML += html;             //olan kaydın içine burdan bir html ekliyoruz
}

UI.prototype.clearControls = function(){

    const title = document.getElementById("title").value=""; 
    const instructor = document.getElementById("instructor").value="";
    const image = document.getElementById("image").value="";

    // value degerlerine bir şey atamadık bu da elemanları otomatik olarak silecek anlamına geliyor.


}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();  //delete tuşunun htmlde içerdiği etiketlerin dışına çıktık teker teker
    }
}

UI.prototype.showAlert = function(message,className){ //show alert kısmını oluşturdum burada
    
    var alert = `

            <div class="alert alert-${className}">
                ${message}
            </div>
    
    `;

    const row = document.querySelector(".row"); //html kısmından rowu aldım

    row.insertAdjacentHTML("beforeBegin",alert) //bu bizden bazı parametreler bekler ör beforebegin,afterbegin,beforend gibi

    setTimeout(()=>{
        document.querySelector(".alert").remove()
    },3000);     //Burda verilen alertin belli bir süre sonra kaybolmasını sağladım.
}


document.getElementById("new-course").addEventListener("submit",function(e){

    const title = document.getElementById("title").value; // kullanıcının girdiği bilgiyi aldık  .value ile
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;


    // create course obje

    const course = new Course(title,instructor,image);

    // create UI
    const ui = new UI();

    if(title==="" || instructor ==="" || image=== ""){ //eğer kullanıcı title alanını veya instructor alanını veya image alanını boş bırakmışsa uyarı verdiriyorum burda.

        ui.showAlert("Please complete the form","warning");

    }else{

    // add course to list
    ui.addCourseToList(course)

     // clear controls
     ui.clearControls(); //bunun görevi girilmiş olan bilgileri temizlemek olacak

     ui.showAlert("the course has been added","success");
    }
   
    e.preventDefault(); //Submit olayını bununla keseriz.
})

document.getElementById("course-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert("The course has been deleted","danger");
})