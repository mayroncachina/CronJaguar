// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
	var db = window.openDatabase("cronometro", "1.0", "CronJaguar", 200000);
	db.transaction(populateDB, errorCB, successCB);
}

// Populate the database
//
function populateDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS TIMES');
	tx.executeSql('CREATE TABLE IF NOT EXISTS TIMES (id unique, time, data)');
	tx
			.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "00:50:00:0000","19/09/2011")');
	tx
			.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "00:15:54:5120","19/09/2011")');
}

// Transaction error callback
//
function errorCB(err) {
	alert("Error processing SQL: " + err);
}

// Transaction success callback
//
function successCB() {
	alert("success!");
}

/** TODO: ADICIONAR DEPOIS NO ARTIGO */
// Query the database
//
function queryDB(tx) {
	tx.executeSql('SELECT * FROM TIMES', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
	// this will be empty since no rows were inserted.
	console.log("Insert ID = " + results.insertId);
	// this will be 0 since it is a select statement
	console.log("Rows Affected = " + results.rowAffected);
	// the number of rows returned by the select statement
	console.log("Insert ID = " + results.rows.length);
}
