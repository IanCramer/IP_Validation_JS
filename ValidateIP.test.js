const validateIp = require('./ValidateIP');

describe('Validate IP', () =>
{
	describe('Non Strings Input (Wrong Input Type)', () =>
	{
		test('No arguments', () =>
		{
			expect(validateIp()).toBe(false);
		});

		test('One undefined/null argument', () =>
		{
			expect(validateIp(undefined)).toBe(false);
			expect(validateIp(null)).toBe(false);
		});

		test('One undefined/null argument', () =>
		{
			expect(validateIp(undefined, undefined)).toBe(false);
			expect(validateIp(null, null)).toBe(false);
			expect(validateIp(undefined, null)).toBe(false);
			expect(validateIp(null, undefined)).toBe(false);
		});

		test('One boolean argument', () =>
		{
			expect(validateIp(true)).toBe(false);
			expect(validateIp(false)).toBe(false);
		});

		test('Multiple boolean arguments', () =>
		{
			expect(validateIp(true, false)).toBe(false);
			expect(validateIp(false, true)).toBe(false);
		});

		test('One number argument', () =>
		{
			expect(validateIp(5)).toBe(false);
			expect(validateIp(3.7)).toBe(false);
			expect(validateIp(-4)).toBe(false);
		});

		test('Multiple number argument', () =>
		{
			expect(validateIp(5, 3.7)).toBe(false);
			expect(validateIp(3.7, -4)).toBe(false);
			expect(validateIp(-4, 5)).toBe(false);
		});

		test('One array argument', () =>
		{
			expect(validateIp( [] )).toBe(false);

			var arr = [true, 2, 'three'];
			expect(validateIp(arr)).toBe(false);

			arr = ['24.5.17.39'];
			expect(validateIp(arr)).toBe(false);

			arr = [24, 5, 17, 39];
			expect(validateIp(arr)).toBe(false);
		});

		test('Multiple array arguments', () =>
		{
			var arr = []
			var arr1 = [true, 2, 'three'];
			var arr2 = ['24.5.17.39'];
			var arr3 = [24, 5, 17, 39];
			expect(validateIp(arr1, arr2, arr3)).toBe(false);
			expect(validateIp(arr, arr3, arr1)).toBe(false);
		});

		test('One object argument', () =>
		{
			expect(validateIp( {} )).toBe(false);

			var obj = {p1: true, p2: 2, p3: 'three'};
			expect(validateIp(obj)).toBe(false);

			obj = {p1: '24.5.17.39'};
			expect(validateIp(obj)).toBe(false);

			obj = {p1: 24, p2: 5, p3: 17, p4: 39};
			expect(validateIp(obj)).toBe(false);
		});

		test('Multiple object argument', () =>
		{
			var obj = {}
			var obj1 = {p1: true, p2: 2, p3: 'three'};
			var obj2 = {p1: '24.5.17.39'};
			var obj3 = {p1: 24, p2: 5, p3: 17, p4: 39};
			expect(validateIp(obj, obj1)).toBe(false);
			expect(validateIp(obj1, obj3)).toBe(false);
			expect(validateIp(obj2, obj3)).toBe(false);
		});
	});

	describe('Bad Strings (Correct Input)', () =>
	{
		test('Empty String', () =>
		{
			expect(validateIp('')).toBe(false);
		});

		test('Plain Language', () =>
		{
			var badStr = [
			'string',
			'This string has spaces',
			'This string has punctuation.',
			'Lots. of. punctuation. string'
			];

			for (var i = 0; i < badStr.length; i++)
			{
				expect(validateIp( badStr[i] )).toBe(false);
			}
		});

		test('Fake IPs', () =>
		{
			var badStr = [
			'aaa.bbb.ccc.ddd',
			'123.213.231',
			'24.81.105.63.117',
			'12.86.9.305'
			];

			for (var i = 0; i < badStr.length; i++)
			{
				expect(validateIp( badStr[i] )).toBe(false);
			}
		});
	});

	describe('Good IP Strings', () =>
	{
		test('Good IPs', () =>
		{
			var goodIps = [
			'12.18.192.30',
			'123.213.231.16',
			'000.000.000.000',
			'255.255.255.255',
			'1.5.7.3',
			'100.200.112.210',
			'11.22.33.44'
			];

			for (var i = 0; i < goodIps.length; i++)
			{
				expect(validateIp( goodIps[i] )).toBe(true);
			}
		});
	});
});
