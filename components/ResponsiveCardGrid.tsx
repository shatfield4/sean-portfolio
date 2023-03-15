// components/ResponsiveCardGrid.tsx

import React from 'react';

const cards = [
  {
    title: 'Card 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Card 2',
    content: 'Vestibulum ullamcorper mauris at ligula.',
  },
  {
    title: 'Card 3',
    content: 'Pellentesque dapibus hendrerit tortor.',
  },
];

const ResponsiveCardGrid: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-lg bg-gray-100 shadow-md p-6 ${
                index % 2 === 0 ? 'md:-mt-12 lg:-mt-16' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCardGrid;
