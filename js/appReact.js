const App = () => {
    return React.createElement('h1', null, 'Hola Mundo desde React.js');
  };

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('react-app')
  );