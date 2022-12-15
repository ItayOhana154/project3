let regForm = document.getElementById("regForm");
let fullName = document.getElementById("fullName");

function storage() {
    
    const user = {
        fullName: inputs[0].value,
        username: inputs[1].value,
        password: inputs[2].value,
        Email: inputs[3].value,
        phone: inputs[4].value,
        Address: inputs[5].value,
        birthday: inputs[6].value,
        workPlace: inputs[7].value,
        height: inputs[8].value,
        admin: inputs[9].checked
    }
    server.post(`${user.fullName.trim()}`, user)
}