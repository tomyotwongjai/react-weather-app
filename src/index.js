import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const api = {
  key: 'e902985907738b357b6a7c7a2651a108',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Seach...' />
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
