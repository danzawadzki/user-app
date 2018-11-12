React component example:

Default button.

```jsx
<Button id="test" onClick={() => console.log('Fired by onClick event')}>
	Click me
</Button>
```

Full width button.

```jsx
<Button
	id="test"
	isFullWidth={true}
	onClick={() => console.log('Fired by onClick event')}>
	Click me
</Button>
```
