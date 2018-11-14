Default MessageInput with all props:

```jsx
<MessageInput
	value="Test value"
	placeholder="Add a comment..."
	onChange={e => console.log(e.target.value)}
	onSubmit={e => {
		e.preventDefault();
		console.log(e);
	}}
/>
```
