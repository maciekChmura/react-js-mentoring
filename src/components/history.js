import { createBrowserHistory } from 'history';
// export default createBrowserHistory();

const history = createBrowserHistory();

// Get the current location.
const location = history.location;

// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  //Do your logic here and dispatch if needed
  console.log(location);
});

export default history;
