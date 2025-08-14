import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/nova_logo.png';
import editorialsImg from '../assets/prefooter/EDITOR.jpg';
import eventsImg from '../assets/prefooter/EVENT.jpg';
import animationImg from '../assets/prefooter/ANIMETION.png';
import lookbooksImg from '../assets/prefooter/LOOKBOOKS.jpg';
import musicvideosImg from '../assets/prefooter/VIDEO.png';
import documentariesImg from '../assets/prefooter/DOCUMENT.jpg';
import behindScenesImg from '../assets/prefooter/BEHINDTHESECNE.jpg';
import fashionImg from '../assets/prefooter/FASION.jpg';
import interviewImg from '../assets/prefooter/INTERVIEW.jpg';
import shortfilmImg from '../assets/prefooter/SHOTFILM.jpg';
// Categories for image slider
const categories = [
  { title: 'Editorials', img: editorialsImg },
  { title: 'Events', img: eventsImg },
  { title: 'Animation', img: animationImg },
  { title: 'Lookbooks', img: lookbooksImg },
  { title: 'Music Videos', img: musicvideosImg },
  { title: 'Documentaries', img: documentariesImg },
  { title: 'Behind the Scenes', img: behindScenesImg },
  { title: 'Fashion', img: fashionImg },
  { title: 'Interviews', img: interviewImg },
  { title: 'Short Films', img: shortfilmImg }
];

// Main component
const NovaFilmIndustry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const highlightLink = (el) => {
    document.querySelectorAll('nav a').forEach((l) => (l.style.color = 'white'));
    el.style.color = '#00ffcc';
  };

  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const moveSpotlight = (e) => {
      const { clientX, clientY } = e;
      if (spotlight) {
        spotlight.style.background = `
          radial-gradient(
            circle at ${clientX}px ${clientY}px,
            rgba(255, 255, 255, 0.08),
            transparent 160px
          )
        `;
      }
    };

    document.addEventListener('mousemove', moveSpotlight);
    return () => document.removeEventListener('mousemove', moveSpotlight);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Spotlight effect */}
      <div
        ref={spotlightRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200vw',
          height: '200vh',
          pointerEvents: 'none',
          zIndex: 2,
          mixBlendMode: 'screen',
          transition: 'background 0.1s ease',
        }}
      />

      {/* Header */}
      <header
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '1px,20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
  {/* Logo */}
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={logo}
      alt="Nova Film Logo"  
      style={{
        height: 100,
        width: 100,
        borderRadius: '50%',
      }}
    />
  </div>

  {/* Navigation + Login */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    {/* Navigation */}
   <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
  {['home', 'talents',  'about', 'team', 'testimonials', 'contact', 'login'].map((id) => (
    <a
      key={id}
      href={`#${id}`}
      style={{
        fontWeight: 600,
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = '#00ffcc')}
      onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
    >
      {id === 'testimonials' ? 'Reviews' : id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  ))}

  {/* Dashboard link goes to separate route/page */}
  <a
    href="/dashboard"
    style={{
      fontWeight: 500,
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s',
    }}
    onMouseOver={(e) => (e.currentTarget.style.color = '#00ffcc')}
    onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
  >
    Dashboard
  </a>
</nav>
<a
  href="/gallery"
  style={{
    fontWeight: 500,
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  }}
  onMouseOver={(e) => (e.currentTarget.style.color = '#00ffcc')}
  onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
>
  Gallery
</a>

    

    {/* Login Button */}
    
  </div>
</header>

  
      {/* Hero */}
      <section id="home" style={{
        height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', background: `url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4') center center / cover`,
        color: 'white', padding: '0 20px'
      }}>
        <div data-aos="fade-up">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Explore the World of Cinema</h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 30px' }}>
            Connect with directors, actors, crew, and shooting locations. Your film journey starts here.
          </p>
 

<div
  style={{
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
   
  }}
>
  <a
    href="#talents"
    style={{
      padding: '14px 28px',
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      borderRadius: '40px',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 0 12px rgba(144, 0, 255, 0.4)',
      backdropFilter: 'blur(4px)',
      transition: '0.3s ease all',
      textDecoration: 'none'
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.boxShadow = '0 0 18px rgba(186, 103, 255, 0.7)')
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.boxShadow = '0 0 12px rgba(144, 0, 255, 0.4)')
    }
  >
    Browse Talents
  </a>
  <a
    href="#contact"
    style={{
      padding: '14px 28px',
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      borderRadius: '40px',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 0 12px rgba(144, 0, 255, 0.4)',
      backdropFilter: 'blur(4px)',
      transition: '0.3s ease all',
      textDecoration: 'none'
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.boxShadow = '0 0 18px rgba(186, 103, 255, 0.7)')
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.boxShadow = '0 0 12px rgba(144, 0, 255, 0.4)')
    }
  >
    Get in Touch
  </a>
</div>
 </div>
      </section>

    {/* Categories */}
<SectionTitle id="talents" text="Featured Categories" />
<section
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    margin: '2rem auto',
    maxWidth: '1200px'
  }}
>
  {[
    ['Actors', 'Leading men and women ready for your vision.'],
    ['Directors', 'Creative minds behind every great story.'],
    ['Writers', 'Stories that move the audience and win hearts.'],
    ['Cameramen', 'Experts in visual storytelling.'],
    ['Editors', 'Perfecting every frame.'],
    ['Makeup Artists', 'Crafting on-screen magic.'],
    ['Stylists', 'Looks that define scenes.'],
    ['Producers', 'Powering projects to reality.']
  ].map(([title, desc]) => (
    <div
      key={title}
      data-aos="zoom-in"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '1.5rem',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(144, 0, 255, 0.2)',
        backdropFilter: 'blur(6px)',
        transition: 'all 0.3s ease-in-out',
        color: '#fff',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.5)';
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(144, 0, 255, 0.2)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#f0f0f0' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#ccc' }}>{desc}</p>
    </div>
  ))}
</section>


      {/* About */}
      <SectionTitle id="about" text="About Nova Film Industry" />
      <section data-aos="fade-up" style={sectionPadding}>
        <p style={textBlock}>
          Nova Film Industry is a platform crafted for filmmakers, actors, and cinema enthusiasts. Whether you're a fresh face or a seasoned professional, this platform helps you showcase your profile, find collaborators, and manage bookings.
        </p>
      </section>

      {/* Team */}
      <SectionTitle id="team" text="Our Team" />
      <section style={gridSectionStyle}>
        {[
          ['vijayan', 'Creative Director'],
          ['shan ', 'Project Manager'],
          ['Aarthi P.', 'Media Strategist']
        ].map(([name, role]) => (
          <div key={name} data-aos="fade-up" style={cardStyle}>
            <img src="https://via.placeholder.com/120" alt={name} style={teamImageStyle} />
            <h4 style={cardTitle}>{name}</h4>
            <p style={cardDesc}>{role}</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <SectionTitle id="contact" text="Contact Us" />
      <section data-aos="fade-up" style={sectionPadding}>
        <form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
          <button type="submit" style={submitBtn}>Send Message</button>
        </form>
      </section>

    {/* Login */}
<SectionTitle id="login" text="Login" />
<section
  data-aos="fade-up"
  style={{
    ...sectionPadding,
    background: '#111',
    maxWidth: 500,
    margin: '60px auto',
    borderRadius: '10px',
    padding: '40px',
  }}
>
  <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Login to Your Account</h3>
  <input type="text" placeholder="Username or Email" required style={inputStyle} />
  <input type="password" placeholder="Password" required style={inputStyle} />
  <button type="submit" style={submitBtn}>Login</button>

  <p style={{ marginTop: 20, textAlign: 'center', color: '#ccc' }}>
    Don't have an account?{' '}
    <span
      style={{ color: '#00f', cursor: 'pointer' }}
      onClick={() => window.location.href = '../signup'}
    >
      Register
    </span>
    
  </p>
   <p style={{ marginTop: 20, textAlign: 'center', color: '#ccc' }}>
    {' '}
    <span
      style={{ color: '#00f', cursor: 'pointer' }}
      onClick={() => window.location.href = '../ForgotPassword'}
    >
      
      Forgot Password
    </span>
    
  </p>
</section>


      {/* Footer Slider */}
      

{/* Footer Slider */}
<div style={{ background: '#111110', padding: '60px 0', overflow: 'hidden' }}>
  {['right', 'left'].map((dir, idx) => (
    <div key={dir} style={{
      display: 'flex',
      animation: `scroll-${dir} 20s linear infinite`,
      gap: '40px',
      padding: dir === 'right' ? '0 0 0 100%' : '0 100% 0 0',
      marginTop: idx ? '40px' : '0'
    }}>
      {categories.map((cat, i) => (
        <div key={i} style={{ minWidth: '180px', textAlign: 'center' }}>
          <img
            src={cat.img}
            alt={cat.title}
            loading="fast"
            style={{ borderRadius: '12px', width: '100%', height: '140px', objectFit: 'cover' }}
          />
          <h3 style={{ color: 'white', fontWeight: 250 }}>{cat.title}</h3>
        </div>
      ))}
    </div>
  ))}
</div>

{/* Footer Text */}
<footer style={{ background: '#000', textAlign: 'center', padding: '40px', fontSize: '0.9rem', color: '#777' }}>
  &copy; {new Date().getFullYear()} Nova Film Industry. All rights reserved.
</footer>

<style>{`
  @keyframes scroll-right { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
  @keyframes scroll-left { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
`}</style>
</div>
  );
};
// Styles
const btnStyle = {
  padding: '14px 28px', background: 'black', color: '#00ffcc', borderRadius: '40px',
  fontSize: '1rem', fontWeight: 'bold', border: '2px solid #00ffcc', textDecoration: 'none',
  transition: 'all 0.3s ease'
};
const gridSectionStyle = {
  padding: '60px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '30px'
};
const sectionPadding = { padding: '60px 40px' };
const cardStyle = {
  background: '#1a1a1a', padding: '30px', borderRadius: '12px', transition: 'transform 0.3s',
  textAlign: 'center'
};
const cardTitle = { fontSize: '1.2rem', marginBottom: '10px', color: 'white' };
const cardDesc = { color: '#aaa', fontSize: '0.95rem' };
const inputStyle = {
  width: '100%', padding: '15px', marginBottom: '20px', border: 'none',
  borderRadius: '8px', background: '#1e1e1e', color: '#fff', fontSize: '1rem'
};
const submitBtn = {
  padding: '12px 30px', background: '#00ffcc', color: '#000',
  border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer'
};
const textBlock = {
  maxWidth: '800px', margin: 'auto', color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6
};
const teamImageStyle = {
  width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px'
};

// Section Title component
const SectionTitle = ({ id, text }) => (
  <h2 id={id} style={{
    textAlign: 'center', fontSize: '2.5rem',
    fontWeight: 700, margin: '80px 0 30px'
  }}>{text}</h2>
);
{/* Footer */}
      <footer
        style={{
          background: "#000",
          textAlign: "center",
          padding: 40,
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        &copy; {new Date().getFullYear()} Nova Film Industry. All rights reserved.
      </footer>
export default NovaFilmIndustry;
