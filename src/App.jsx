import React from 'react';
import Accordion from './Accordian';

const App = () => {
  const accordionData = [
    {
      title: 'Ye Daba',
      content: `Hemlo Cheemz :)`
    },
    {
      title: 'Ab ye',
      content: `Aur Bata Kya Haal Chaal!`
    },
    {
      title: 'Ha maine v wahi socha XD',
      content: `mai v changa ;)`
    }
  ];

  return (
    <div>
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;