---
id: component-tests
title: Component Tests
sidebar_label: Component Tests
---

Component tests in ERB use [Jest](https://jestjs.io) and [Enzyme](https://github.com/airbnb/enzyme). While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications.

## Writing Component Tests

By convention, all component test modules have the following filename suffix: `.spec.js`. An example of test module filename would be `Counter.spec.js`.

We start by writing a function that will setup the actions of our component and importing the necessary modules:

```js title="tests/Counter.spec.js"
import { spy } from "sinon";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Counter from "../../src/components/Counter";

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy(),
  };
  const component = shallow(<Counter counter={1} {...actions} />);
  return {
    component,
    actions,
    buttons: component.find("button"),
    p: component.find(".counter"),
  };
}
```

Now we describe a set of tests with `describe()` and describe the test itself with `it()`:

```js title="tests/Counter.spec.js"
// --snip--

describe("Counter Component", () => {
  it("should match exact snapshot", () => {
    const { actions } = setup();
    const counter = (
      <div>
        <Router>
          <Counter counter={1} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer.create(counter).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
```

### Running Tests

Tests can be run by running `npm test`:

```bash
npm test
```

### Snapshot Tests

Snapshot tests are probably one of the most powerful features of Jest. With them, you can easily capture the current state of an object and test against that state in future executions of the test. For more details on this, see Jest's [Snapshot Testing docs](https://jestjs.io/docs/en/snapshot-testing).

After adding a new test to ERB, run `npm test -- -u`. This create a new snapshot if one does not exist already or it will update an existing one.

### Watching Tests

Suppose you are making change to React components and you want to see if components have broken while you are making changes. Running `npm test -- -w` will run tests all the tests that are affected by the changes made to the React components.
