import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <section className='app__block'>
        <h1>I'm going to learn SASS</h1>
        <p className='app__paragraph'>        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non ullam ad debitis sint praesentium eveniet beatae corrupti itaque quae laudantium doloribus,
          aperiam libero voluptatem hic quod vero optio? Nostrum, est?</p>

      </section>
      <section className='app__block_splitted'>
        <p className='app__paragraph app__paragraph_underlined'>        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non ullam ad debitis sint praesentium eveniet beatae corrupti itaque quae laudantium doloribus,
          aperiam libero voluptatem hic quod vero optio? Nostrum, est?</p>

        <p className='app__paragraph'>Lorem ipsum dolor sit amet,consectetur
          adipisicing elit. Suscipit cupiditate asperiores animi,
          officia quo excepturi saepe provident reiciendis natus
          alias a corrupti! Pariatur molestias ab quae odio ipsa
          accusantium aliquid!</p>
      </section>

    </div>
  );
}

export default App;
