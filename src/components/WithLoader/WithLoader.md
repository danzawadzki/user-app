Default WithLoader, where flag isLoading is true:

```jsx
const Test = WithLoader(Counter);
const label = 'Label';
const counter = 997;
<Test isLoading={true} label={label} number={counter} />;
```
