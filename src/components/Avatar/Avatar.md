React component example:

Default avatar.

```jsx
<Avatar
	name="Random User"
	avatar={{
		small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
		regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
		large: 'https://randomuser.me/api/portraits/men/65.jpg'
	}}
/>
```

Smaller avatar.

```jsx
<Avatar
	name="Random User"
	isSmaller={true}
	avatar={{
		small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
		regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
		large: 'https://randomuser.me/api/portraits/men/65.jpg'
	}}
/>
```

Avatar with out passed img src.

```jsx
<Avatar name="Random User" />
```
