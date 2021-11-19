class User{
    constructor(name,lastname,email,password,country){
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.password=password;
        this.country=country;
        this.admin=this.admin;
    }
}

let users=[
    new User("Diego","Fernandez","diego@gmail.com","diego123","argentina",false),
    new User("marcos", "scheuermann", "marcos@gmail.com", "marcos123", "argentina",false),
    new User("juan", "ramallo", "juan@gmail.com", "juan123", "suiza",false),
    new User("pablo", "gil", "pablo@gmail.com", "pablo123", "argentina",false),
    new User("hector", "brito", "hector@gmail.com", "hector123", "argentina",false),
]

function loginCheck(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let pass = document.getElementById("pass").value;
    let userLoger = users.find(user=>user.email === email);
    let passLogger = pass.find(pass=>user.password === pass)
    if(userLoger){
        if(passlogged){
            window.location.assign("file:///C:/Users/54381/Desktop/ecomerce21I/js/main.html");
    }else{
        let passError = document.createElement("div");
        passError.innerText="La contraseña es incorrecta";
        passError.classList.add("alert", "alert-danger","mt-3");
        let form = document.querySelector("form");
        form.appendChild(passError);
        setTimeout(function(){
            form.removeChild(passError);
        },5000)
    }else{
            let dataError = document.createElement("div");
            dataError.innerText = "Los datos ingresados no son correctos";
            dataError.classList.add("alert", "alert-danger", "mt-3");
            let form = document.querySelector("form");
            form.appendChild(dataError);
            setTimeout(function () {
                form.removeChild(dataError);
            }, 5000)
    }
    }
}

console.log(email);
console.log(pass);