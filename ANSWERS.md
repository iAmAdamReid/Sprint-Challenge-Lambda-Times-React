**What are PropTypes used for?**

>"PropTypes exports a range of validators that can be used to make sure the data you receive is valid." -reactjs.org

PropTypes are used to ensure that the proper data type is passed as a prop to a component. If the data type passed as a prop does not match the validators declared in Component.propTypes, an error will show in the console. propTypes is only checked in development mode.

**What is a lifecycle event in React?**

A lifecycle event is any event that occurs during initialization, a state change, a prop change, or unmounting components.

[A. Sharif](https://busypeoples.github.io/post/react-component-lifecycle/) describes the standard sequence of a React lifecycle, and its constituent events.

First, we have the *Initialization* phase: 
1. `GetDefaultProps` pulls any default props declared within it, and stores them in `this.props`
2. `GetInitialState` declares the initial state, accessible via `this.state`
3. `componentWillMount` is called if any components are initialized
4. `render()` returns the JSX markup that renders to HTML
5. `componentDidMount` runs after the page is rendered, allowing for DOM manipulations or data fetching operations

Next, there are *State* changes.
1. `ShouldComponentUpdate`
2. `ComponentWillUpdate`
3. `render()`
4. `ComponentDidUpdate`

Then, there are *Props* changes.
1. `ComponentWillReceiveProps`
2. `ShouldComponentUpdate`
3. `ComponentWillUpdate`
4. `render()`
5. `ComponentDidUpdate`

And finally, *Unmounting*.
1. `componentWillUnmount`

All of the above are React lifecycle events, which we can use to manage the application during each phase.

**What is a Higher Order Component?**

>"...a higher-order component is a function that takes a component and returns a new component." -reactjs.org

Higher Order Components transform a component into another component by wrapping an initial component inside of a container component. The wrapped component receives all the props of its container, along with any new prop declarations or data fetches which it uses to render.

This permits us to replicate components easily that perform similar functions. They can also be used when we want to render components conditionally, i.e. render a component a different way based on conditional parameters. By changing the HOC wrapper, we can change how the wrapped component renders without mutating its state.


**What are three different ways to style components in React?**

1. CSS Stylesheets using `import`.
2. Inline styling, using `const` and `style` declarations.
3. `styled-components`, a library that allows component-level styles, enabling us to render CSS using JS.