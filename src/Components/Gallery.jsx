// src/components/Gallery.jsx
import React, { useState } from 'react';
import FlowerCard from './FlowerCard';

const flowers = [
  { name: 'Rose',type: 'Red Rose', src: 'https://i.pinimg.com/236x/d2/e5/65/d2e56502ead55f2f9a94b4ed1cefe12d.jpg' },
  { name: 'Tulip',type: 'Yellow,orange,purple Tulip', src: 'https://i.pinimg.com/474x/69/c0/34/69c034d4e806abd4c85dde0d8d242b23.jpg' },
  { name: 'Daisy',type: 'Blue Daisy', src: 'https://i.pinimg.com/236x/d7/fe/c3/d7fec3dc61a327085d647e596e0285df.jpg' },
  { name: 'Sunflower',type: ' Yellow Sunflower', src: 'https://i.pinimg.com/474x/78/e2/95/78e2952f7aa7b74efa5d3ccbe55b3838.jpg' },
  { name: 'Lily',type: 'Pink lilly', src: 'https://i.pinimg.com/236x/c8/28/50/c828503edeca6cc1da7003eae73f4a7a.jpg' },
  { name: 'Carnation', type: 'Blue and purple carnation',src: 'https://i.pinimg.com/236x/0a/e9/4f/0ae94f0906a45b911165452ea4da6f3f.jpg' },
  { name: 'Rose', type: 'Pink Roses',src: 'https://i.pinimg.com/236x/36/6d/af/366daf57808892f775c43c66373fae5f.jpg' },
  { name: 'Tulip',type: 'Red and Yellow tulips', src: 'https://i.pinimg.com/236x/fb/96/fe/fb96fe1a75aceb5e72927462c70e3bb4.jpg' },
  { name: 'Daisy', type: 'White Daisy',src: 'https://i.pinimg.com/236x/f6/29/b2/f629b276ee97798098e6272552081c64.jpg' },
  { name: 'Sunflower', type: ' Red orange Sunflower',src: 'https://i.pinimg.com/236x/44/98/67/449867286d67aceb8e7d1bb29d566efd.jpg' },
  { name: 'Lily', type: 'White lilly',src: 'https://i.pinimg.com/474x/1b/b5/ca/1bb5ca34b317eea8c0e8fa826dc8cd6e.jpg' },
  { name: 'Carnation',type: 'Red and pink carnations', src: 'https://i.pinimg.com/236x/14/c4/67/14c467408efcd2aa9f5dfc9a260d6914.jpg' },
  { name: 'Rose', type: 'Yellow Roses',src: 'https://i.pinimg.com/236x/1c/e8/0e/1ce80e1076bc5ca3fd27b710f8cd0826.jpg' },
  { name: 'Rose', type: 'Orange Rose Flower',src: 'https://i.pinimg.com/236x/43/63/cc/4363cc06d5931c3991b5f561f6132e79.jpg' },
  { name: 'Rose', type: 'Pink, Yellow and Red roses',src: 'https://i.pinimg.com/236x/d3/b7/f1/d3b7f159069507a9de985a3d887b1922.jpg' },
  { name: 'Tulip',type: 'White tulips', src: 'https://i.pinimg.com/236x/a4/06/9b/a4069b7e6a1c75a63d5fe010ea3ad8e1.jpg' },
  { name: 'Tulip', type: 'Yellow Tulips',src: 'https://i.pinimg.com/236x/a0/0a/f5/a00af510f407888dffb71a1f5a9688f5.jpg' },
  { name: 'Tulip', type: 'Pink Tulips',src: 'https://i.pinimg.com/474x/fd/ac/92/fdac92b597894270fdcdb49e45db5290.jpg' },
  { name: 'Daisy', type: 'Pink Daisys',src: 'https://i.pinimg.com/236x/6d/39/85/6d3985ab350d939c184538547767085f.jpg' },
  { name: 'Daisy', type: 'Purple Daisys',src: 'https://i.pinimg.com/236x/34/29/f6/3429f65ef931bb4ee7a581de4e856159.jpg' },
  { name: 'Daisy', type: 'White and Pink Daisys',src: 'https://i.pinimg.com/236x/cf/b6/8a/cfb68a135a2a22bf8c506b69f282079e.jpg' },
  { name: 'Sunflower', type: 'Yellow Sunflower',src: 'https://i.pinimg.com/236x/38/97/6a/38976aabc8393d27e8cc89c66dd81f19.jpg' },
  { name: 'Sunflower', type: 'Pink Sunflower',src: 'https://i.pinimg.com/236x/9f/a2/e5/9fa2e55196373d26be69c4b9e2ce9c36.jpg' },
  { name: 'Sunflower', type: 'Deep Orange Sunflower',src: 'https://i.pinimg.com/236x/4a/58/3c/4a583cb96fa7f19803e1d2e32830bec5.jpg' },
  { name: 'Lily',type: 'Brown Orange Lilly', src: 'https://i.pinimg.com/236x/f9/ad/ae/f9adae522f5c286eadf8c692be2fd710.jpg' },
  { name: 'Lily', type: 'Yellow Lillies',src: 'https://i.pinimg.com/236x/23/99/82/239982aef8b03f78dfe405d80b16a75b.jpg' },
  { name: 'Lily', type: 'Blue Lilly',src: 'https://i.pinimg.com/236x/e9/18/cb/e918cbafd992a105f274e41c56b7b33c.jpg' },
  { name: 'Carnation',type: 'Yellow Carnations', src: 'https://i.pinimg.com/236x/e6/fb/74/e6fb74efed6dda750b8e40330f8f21e6.jpg' },
  { name: 'Carnation',type: 'Light Pink Carnations', src: 'https://i.pinimg.com/236x/ef/e3/4b/efe34b44957f3184b938f31e3f8e3973.jpg' },
  { name: 'Carnation', type: 'Orange Carnations',src: 'https://i.pinimg.com/474x/d4/99/4d/d4994de4bb808925caa79e7a72601049.jpg' },
];

const Gallery = () => {
  const [query, setQuery] = useState('');

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 text-center">
      <input
        type="text"
        className="p-2 mb-6 w-3/4 md:w-1/2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search flowers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {filteredFlowers.map((flower, index) => (
          <FlowerCard key={index} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
