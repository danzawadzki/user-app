Default comment with all props:

```jsx
<Comment
	author={{
		name: 'Random User',
		avatar: {
			small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
			regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
			large: 'https://randomuser.me/api/portraits/men/65.jpg'
		}
	}}
	comment="Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula."
	timestamp="10/11/2018"
/>
```

Comment written by author with out avatar:

```jsx
<Comment
	author={{
		name: 'Random User'
	}}
	comment="Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula."
	timestamp="10-11-2018"
/>
```
