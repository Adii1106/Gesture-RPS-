import React from 'react';
import './HomePage.css';
import SettingsIcon from '../../icons/setting-3.svg';
import Play1 from '../../icons/Play1.svg';
import Play2 from '../../icons/Play2.svg';
import Play3 from '../../icons/Play3.svg';

export default function HomePage({ onPlay, onSettings, onGoHome }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  let playIcon = Play1;
  if (active) playIcon = Play3;
  else if (hover) playIcon = Play2;

  return (
    <div className="homepage-bg">
      <header className="homepage-header" style={{ position: 'relative' }}>
        <button className="icon-btn settings-btn" aria-label="Settings" onClick={onSettings}>
          <img src={SettingsIcon} alt="Settings" className="icon-img settings-icon-img" />
        </button>
      </header>
      <main className="homepage-main">
        <h1 className="homepage-title">ROCK–PAPER–SCISSORS!<br /><span className="homepage-ai">and AI!</span></h1>
        <h2 className="homepage-instructions-title">Instructions</h2>
        <div className="homepage-instructions-box">
          <ol>
            <li>Pick your wildest avatar and set the number of rounds. (The more, the merrier!)</li>
            <li>Get your hand ready! When the countdown begins, strike your best Rock 🪨, Paper 📄, or Scissors ✂️ pose.</li>
            <li><b>Pro tip:</b> Only your move in the <span style={{color:'#ff4f4f', fontWeight:700}}>last 1 second</span> is registered—so fake out the bot, switch it up, or just go wild at the end!</li>
            <li>The bot is unpredictable and a little sassy. Outsmart it to score points!</li>
            <li>After all rounds, the ultimate champion is crowned. Will it be you or the bot?</li>
            <li style={{color:'#ffd700', fontWeight:900, textShadow:'0 0 4px #888'}}>Ready to play? May the best hand win! 🏆</li>
          </ol>
        </div>
        <div className="homepage-play-row">
          <button
            className="play-btn"
            onClick={onPlay}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => { setHover(false); setActive(false); }}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            style={{ background: 'none', border: 'none', padding: 0, boxShadow: 'none', cursor: 'pointer' }}
            aria-label="Play"
          >
            <img src={playIcon} alt="Play" style={{ width: 180, height: 180, display: 'block' }} />
          </button>
        </div>
      </main>
    </div>
  );
} 