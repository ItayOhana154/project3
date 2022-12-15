let temp = document.getElementsByTagName("template")[0];;
let temp1 = document.getElementsByTagName("template")[1];;
let temp2 = document.getElementsByTagName("template")[2];;
let inputs = document.getElementsByTagName("input");
let passwordValid = document.getElementById("passwordValid");
let loginForm = document.getElementById("loginForm");
let checkval = document.getElementById("checkval");
const body = document.getElementById("bodys");


// log in page
function logInPage() {
    body.innerHTML = "";
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}

// registration page
function registration() {
    body.innerHTML = "";
    let clon = temp1.content.cloneNode(true);
    document.body.appendChild(clon);
}

//app page
function logIN(isAdmin) {
    body.innerHTML = "";
    let clon = temp2.content.cloneNode(true);
    document.body.appendChild(clon);

    if (isAdmin == true) {
        let deleteBtn = document.getElementById("deleteBtn");
        deleteBtn.style.display = "unset"
    }
};

// submit registration
function submited() {
    storage();
    logInPage();
}


// validate user and password when log in and if user have Administrator privileges
function validate(event) {
    let userprofile = server.get(inputs[0].value);

    if (userprofile == null) {
        return;
    };

    if (userprofile.password !== inputs[1].value) {
        return;
    }

    let isAdmin = false;

    if (userprofile.admin == true) {
        isAdmin = true;
    }

    logIN(isAdmin);
};

//delete profile
function deleteProfile(){
    let search = document.getElementById('search');
    key = search.value
    server.delete(key);
}

