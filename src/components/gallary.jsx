import React from 'react';

import behindSceneImg from '../assets/prefooter/BEHINDTHESECNE.jpg'; // Make sure this matches your file exactly
import shortFilmImg from '../assets/prefooter/SHOTFILM.jpg';
import documentaryImg from '../assets/prefooter/DOCUMENT.jpg';
import interviewImg from '../assets/prefooter/INTERVIEW.jpg';
import eventImg from '../assets/prefooter/EVENT.jpg';
import lookbookImg from '../assets/prefooter/LOOKBOOKS.jpg';
import animationImg from '../assets/prefooter/ANIMETION.png';
import videoImg from '../assets/prefooter/VIDEO.png';

const galleryItems = [
  { title: 'Behind the Scenes', img: behindSceneImg },
  { title: 'Short Film', img: shortFilmImg },
  { title: 'Documentary Shoot', img: documentaryImg },
  { title: 'Interview Setup', img: interviewImg },
  { title: 'Event Highlight', img: eventImg },
  { title: 'Lookbook Shoot', img: lookbookImg },
  { title: 'Animation Work', img: animationImg },
  { title: 'Music Video Production', img: videoImg }
];

const GalleryPage = () => {
  console.log('Gallery Items:', galleryItems); // Debug to confirm images load

  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '0 10px'
  };

  const itemStyle = {
    backgroundColor: '#111',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    cursor: 'pointer'
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const captionStyle = {
    padding: '10px',
    fontSize: '1rem',
    color: '#ccc'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Nova Film Industry Gallery</h2>
      <p>If you see this text, the component is rendering.</p>
      <div style={gridStyle}>
        {galleryItems.map((item, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={item.img} alt={item.title} style={imgStyle} />
            <p style={captionStyle}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
