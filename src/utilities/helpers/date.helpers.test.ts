import { getTimestamp, timeAgo } from './date.helpers';

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

describe('getTimestamp helper function: ', () => {
	it('should return "20:30:40 01/01/2001"', () => {
		expect(getTimestamp(new Date('20:30:40 01/01/2001'))).toEqual(
			'20:30:40 1/1/2001'
		);
	});

	it('should return "01/01/2001"', () => {
		expect(getTimestamp(new Date('01/01/2001'))).toEqual('0:0:0 1/1/2001');
	});

	it('should return "10:10:10 11/10/2018"', () => {
		expect(getTimestamp(new Date('10:10:10 11/10/2018'))).toEqual(
			'10:10:10 11/10/2018'
		);
	});
});
