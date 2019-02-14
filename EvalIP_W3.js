// Validate IP Address Function
// From W3 Schools
// 2/14/19
//

function ValidateIPaddress(inputText)
 {
 	if (typeof inputText !== 'string')
 		return false;

	 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	 
	 if(inputText.match(ipformat))
		 return true;
	 else
		 return false;
 }

 module.exports = ValidateIPaddress;