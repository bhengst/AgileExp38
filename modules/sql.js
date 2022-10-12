require('dotenv').config();
const mysql = require("mysql");
const connection = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DB
});

async function getOwners(req, res){
	return new Promise(function(resolve,reject){
		connection.query("SELECT * FROM owner", function (err, rows, fields) {
			if (err) return reject(err);
			resolve(rows);
		});
	});
}

async function changeEmail(ownerIDParam, emailParam){
	return new Promise(function(resolve, reject){
		connection.query("UPDATE owner SET Email = '" + emailParam + "' WHERE OwnerID = " + ownerIDParam + ";", function (err, rows, fields) {
			if (err) return reject(err);
			resolve();
		});
	});
}

async function changeAddress(ownerIDParam, firstNameParam, lastNameParam, streetParam, stateParam, countryParam, zipParam){
	return new Promise(function(resolve, reject){
		connection.query("UPDATE owner SET FirstName = '" + firstNameParam + "',LastName = '" + lastNameParam + "' WHERE OwnerID = " + ownerIDParam + ";", function (err, rows, fields) {
			if (err) return reject(err);
		});
		connection.query("UPDATE address SET StreetAddressOne = '" + streetParam + "',State = '" + stateParam + "',Country = '"+ countryParam + "',Zip = '" + zipParam + "' WHERE OID = " + ownerIDParam + ";", function (err, rows, fields) {
			if (err) return reject(err);
			resolve();
		});
	});
}

async function getCredits(ID){
	console.log(ID);
	return new Promise(function(resolve,reject){
		connection.query("SELECT * FROM credits WHERE OwnerID ="+ ID, function (err, rows, fields) {
			if (err) return reject(err);
			resolve(rows);
		});
	});
}

async function changeAddressDisplay(OID){
	return new Promise(function(resolve,reject){
		connection.query("SELECT * FROM address WHERE OID = " + OID, function (err, rows, fields){
			if (err) return reject(err);
			resolve(rows);
		})
	})
}



module.exports = {
	getOwners,
	changeEmail,
	changeAddress,
	changeAddressDisplay,
	getCredits
}