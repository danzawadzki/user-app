Default UserCard component with all props:

```jsx
<UserCard
	name="Random User"
	location="New York, USA"
	avatar={{
		small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
		regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
		large: 'https://randomuser.me/api/portraits/men/65.jpg'
	}}
	onHeartClick={e => console.log(e.target + ' has been clicked.')}
/>
```
