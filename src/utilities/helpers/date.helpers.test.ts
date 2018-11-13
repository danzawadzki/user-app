import { timeAgo } from './date.helpers';

describe('timeAgo helper function: ', () => {
	it('should return 1d', () => {
		expect(timeAgo(new Date('11/10/2018'), new Date('11/11/2018'))).toEqual('1d');
	});
	it('should return 1y', () => {
		expect(timeAgo(new Date('11/10/2017'), new Date('11/11/2018'))).toEqual('1y');
	});
	it('should return 1y', () => {
		expect(
			timeAgo(new Date('9:00 11/10/2018'), new Date('10:00 11/10/2018'))
		).toEqual('1h');
	});
	it('should return 1m', () => {
		expect(timeAgo(new Date('9:00 11/10/2018'), new Date('9:01 11/10/2018'))).toEqual(
			'1m'
		);
	});
	it('should return 1s', () => {
		expect(
			timeAgo(new Date('9:00:00 11/10/2018'), new Date('9:00:01 11/10/2018'))
		).toEqual('1s');
	});
});
