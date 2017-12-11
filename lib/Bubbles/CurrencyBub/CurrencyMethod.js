
/*
*  Name :   CurrencyMethod.js
*  Location : /lib/Bubbles/CurrencyBub/CurrencyMethod.js
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: BubbleCurrencyConvertor
*/






import {Meteor} from 'meteor/meteor';

Meteor.methods({
	async BubbleCurrencyConvertor(data) {
		const startValue = parseFloat(data.value);
		delete data.value;
		const reqProm = require('request-promise');
		const money = require('money');
		const options = {
			uri: 'https://openexchangerates.org/api/latest.json?app_id=c4a2cfd544d94d71bc3236f44363381b',
			headers: {
				'User-Agent': 'Request-Promise'
			},
			json: true
		};
		const finalValue = async() => {
			try {
				const exchanges = await reqProm(options);
				money.rates = exchanges.rates;
				money.base = exchanges.base;
				const Value = money.convert(startValue, {from: data.curr_in, to: data.curr_out});
				return Value;
			} catch (e) {
				console.log(e);
				throw new Meteor.Error('convertion-api-fails', 'error while using money.js');
			}
		};
		let promisedOfResult = await finalValue();
		promisedOfResult = Math.round(promisedOfResult * 100)/100;
		Object.assign(data,
			{
				value_in: startValue,
				value_out: promisedOfResult
			});
		return data;
	}
});

