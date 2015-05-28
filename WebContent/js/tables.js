$(document).ready(
		function() {
		var table1data=
			[
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "Bob", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Smith", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"},
                { "row": 1, "firstName": "John", "lastName": "Doe", "email": "abc@123.com", "phoneNumber": 4045551234, "dept": "IT", "employeeID": "xxx1234"}
            ];
		$("#table1").dataTable({
			'data': table1data,
			'columns': [
		        { "data": 'row' },
		        { "data": 'firstName' },
		        { "data": 'lastName' },
		        { "data": 'email' },
		        { "data": 'phoneNumber' },
		        { "data": 'dept' },
		        { "data": 'employeeID' }
		    ],
		    'paging': true
            });
});