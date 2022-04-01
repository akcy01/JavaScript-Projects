class Profile{
    constructor(){
        this.clientid = "", // clientId oluşturduk  çünkü apiler bize bir ıd vericek yani bize benzersiz bir sayı veriyor apiler biz de bu sayıyla apiye gidip ordan bilgi alabiliyoruz.
        this.clientSecret = ""
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`); //Burada o arama kısmına username kısmını yazınca sonuc getirmesini ayarladık.fetch bizden bir url bekliyor internette hazır olan json urlsini oraya yapıstırdım ve $ ile de yazılan usernameyi aldım.

        const profile = await profileResponse.json(); // bunu çağırmalıyız ki bize profile bilgisi gelsin.
        
        return{
            profile
        }
    }


}