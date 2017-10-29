# Raya

Raya is a simple state management library for [React](https://reactjs.org/), serving a similar purpose as [Redux](http://redux.js.org/) but is designed for smaller applications in mind. The idea of Raya is to keep all of your state in a single top level React component and to allow lower level components to subscribe for updates. To do this it provides two components `<RayaRoot>` to be placed at the top of the app and `<Raya>` components to be placed near where you need access.

## Usage

```javascript
// Create an app using `Raya` components to access the state
class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <Raya render={({ getRState, setRState }) =>
          <input value={getRState().foo} onChange={foo => setRState({ foo })} />
        }/>
      </div>
    );
  }
}

// Initialize the render with the `RayaRoot` component at top level
ReactDOM.render((
  <RayaRoot initialState={{ foo: '' }}>
    <MyApp>
  </RayaRoot>
), document.getElementById('app'))

```

The `Raya` components will be rerendered everytime the state gets changed, even if they're parents do not re-render because of a `shouldComponentUpdate` callback.

## Installation

```
yarn add raya
```

## Prior art

This library is based off of [react-broadcast](https://github.com/ReactTraining/react-broadcast), so thanks goes to them.
