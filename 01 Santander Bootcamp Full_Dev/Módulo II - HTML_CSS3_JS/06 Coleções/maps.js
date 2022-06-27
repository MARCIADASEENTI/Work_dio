/*
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));
*/
function getAdmins(map) {
let admins = [];
	for  ([Key, value] of map) {
		if (value === 'Admin'){
			admins.push(key)
		}
} 
return admins;
}
const usuarios = new Map();

usuarios.set ('Márcia', 'Admin');
usuarios.set ('Mária', 'Admin');
usuarios.set ('Marta', 'Admin');
usuarios.set ('José', 'User');
usuarios.set ('João', 'User');

console.log(getAdmins(usuarios));


