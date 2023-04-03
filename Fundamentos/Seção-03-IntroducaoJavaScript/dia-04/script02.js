let student = {

};
function addProperty(object, key, value) {
    object[key] = value;
};
addProperty(student, 'name', 'Lianny');
let newKey = 'e-mail';
let email = 'lianny_costa@hotmail.com';
addProperty(student, newKey, email);
addProperty(student, 'telefone', '84 999874004');
addProperty(student, 'GitHub', 'LiannyCoringa');
console.log(student);