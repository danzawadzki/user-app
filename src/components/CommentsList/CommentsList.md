Default CommentsList component with all props:

```jsx
const user = {
	author: {
		name: 'Random User',
		avatar: {
			small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
			regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
			large: 'https://randomuser.me/api/portraits/men/65.jpg'
		}
	},
	comment:
		'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
	timestamp: '10/10/2018'
};
<CommentsList comments={[user, user, user, user]} />;
```

CommentsList component with out props:

```jsx
<CommentsList />
```
