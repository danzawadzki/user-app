module.exports = {
	propsParser: require('react-docgen-typescript').parse,
	title: 'User-app Guide',
	styles: {
		Playground: {
			preview: {
				paddingLeft: 0,
				paddingRight: 0,
				borderWidth: [[0, 0, 1, 0]],
				borderRadius: 0
			}
		},
		Markdown: {
			pre: {
				border: 0,
				background: 'none'
			},
			code: {
				fontSize: 14
			}
		}
	},
	template: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600'
				}
			]
		}
	},
	theme: {
		fontFamily: {
			base: '"Montserrat", sans-serif',
			fontSize: '62.5%'
		}
	}
};
