// Validate IP Address Function
// Ian Cramer
// 2/14/19
//

var validateIp = (inputString) =>
{
	if (typeof inputString !== 'string')
		return false;
	if (inputString.length < 7 || inputString.length > 15)
		return false;

	var octetStr = inputString.split('.');

	if (octetStr.length !== 4)
		return false;

	for (var i = 0; i < 4; i++)
	{
		var num = parseInt(octetStr[i], 10);
		if (isNaN(num) || num < 0 || num > 255)
			return false;
	}
	return true;
}

module.exports = validateIp;