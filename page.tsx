'use client'; 
import { useState, useEffect } from 'react';

export default function Home() {
  const kategorie = ['Beaty', 'Oblečení', 'Hudba'];
  const [status, setStatus] = useState('SYSTEM_ACTIVE');

  useEffect(() => {
    const messages = ['VOODOO_LINK_ESTABLISHED', 'SECTOR_808_READY', 'BYPASSING_FIREWALL...', 'SIGNAL_STABLE'];
    const i = setInterval(() => setStatus(messages[Math.floor(Math.random() * messages.length)]), 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <main style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#ffffff', 
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"Courier New", Courier, monospace', 
      position: 'relative',
      backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)',
      backgroundSize: '30px 30px',
    }}>

      {/* TOP STATUS BAR */}
      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', display: 'flex', 
        justifyContent: 'space-between', borderBottom: '1px solid #ffffff', 
        padding: '10px 0', fontSize: '10px', letterSpacing: '3px', opacity: 0.7
      }}>
        <span>ID: VOODOO_ENTITY_808</span>
        <span>STATUS: {status}</span>
        <span>LOC: [UNKNOWN_SECTOR]</span>
      </div>

      {/* ASCII LOGO: VOODOO 808 */}
      <header style={{ textAlign: 'center', marginTop: '100px', marginBottom: '100px' }}>
        <pre style={{ 
          fontSize: '10px', 
          lineHeight: '10px', 
          color: '#ffffff',
          textShadow: '0 0 10px rgba(255,255,255,0.4)', 
          display: 'inline-block',
          textAlign: 'left',
          fontWeight: 'bold'
        }}>
{`
██╗   ██╗ ██████╗  ██████╗ ██████╗  ██████╗  ██████╗      █████╗  █████╗  █████╗ 
██║   ██║██╔═══██╗██╔═══██╗██╔══██╗██╔═══██╗██╔═══██╗    ██╔══██╗██╔══██╗██╔══██╗
██║   ██║██║   ██║██║   ██║██║  ██║██║   ██║██║   ██║    ╚█████╔╝██║  ██║╚█████╔╝
╚██╗ ██╔╝██║   ██║██║   ██║██║  ██║██║   ██║██║   ██║    ██╔══██╗██║  ██║██╔══██╗
 ╚████╔╝ ╚██████╔╝╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝    ╚█████╔╝╚█████╔╝╚█████╔╝
  ╚═══╝   ╚═════╝  ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝      ╚═════╝ ╚═════╝ ╚═════╝
`}
        </pre>
      </header>

      {/* MŘÍŽKA KATEGORIÍ */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2px', 
        backgroundColor: '#ffffff', 
        border: '2px solid #ffffff',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {kategorie.map((polozka, index) => (
          <div 
            key={polozka}
            style={{
              padding: '80px 40px',
              backgroundColor: '#1a1a1a', 
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '5px',
              position: 'relative',
              transition: 'all 0.15s ease-in-out',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onClick={() => {
              if (polozka === 'Hudba') {
                window.open('https://open.spotify.com/artist/02w1mAiW0TvK3ZDSKfQM65', '_blank');
              } else {
                alert(`[LOG]: Sekce ${polozka} zvolena.`);
              }
            }}
          >
            <span style={{ position: 'absolute', top: '15px', left: '15px', fontSize: '10px', opacity: 0.5 }}>
              TRX_00{index + 1}
            </span>
            <div style={{ fontSize: '2rem' }}>{polozka}</div>
            <span style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '9px', opacity: 0.4 }}>
              //ACCESS_POINT_808
            </span>
          </div>
        ))}
      </div>

      {/* INSTAGRAM BUTTON */}
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <a 
          href="https://www.instagram.com/voodoobeats808/?hl=cs" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '18px 50px',
            border: '2px solid #ffffff',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '14px',
            letterSpacing: '6px',
            fontWeight: '900',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
            backgroundColor: 'transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#1a1a1a';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.6)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          &gt;&gt; INSTAGRAM_SIGNAL
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ 
        maxWidth: '1200px', margin: '100px auto 40px', 
        borderTop: '1px solid #444', paddingTop: '20px',
        fontSize: '10px', color: '#666', display: 'flex', justifyContent: 'space-between'
      }}>
        <div>
          [ AUTH_KEY: 808-VOODOO-X ]<br />
          [ CONNECTION: ENCRYPTED ]
        </div>
        <div style={{ textAlign: 'right' }}>
          &copy; 2026 VOODOO808 COMMUNICATIONS<br />
          ALL RIGHTS RESERVED BY ALIEN SECTOR
        </div>
      </footer>

      <style jsx global>{`
        body { margin: 0; padding: 0; background-color: #1a1a1a; overflow-x: hidden; }
      `}</style>
    </main>
  );
}