import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello espresso!</h1>;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration: ServiceWorkerRegistration) =>
        console.log('SW registered: ', registration),
      )
      .catch((registrationError: Error) => console.error(registrationError));
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
