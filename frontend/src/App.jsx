import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import AvatarSelectPage from "./components/AvatarSelectPage";
import RoundsSelectPage from "./components/RoundsSelectPage";
import GameAreaPage from "./components/GameAreaPage";
import AbhijeetPng from '../icons/Abhijeet.png';
import GangLeaderPng from '../icons/gangleader.png';
import BBzPng from '../icons/bbz.png';

export default function App() {
  const [page, setPage] = useState("home");
  const [avatar, setAvatar] = useState(null);
  const [playerName, setPlayerName] = useState("Player");
  const [botName] = useState("Bot");
  const [rounds, setRounds] = useState(3);


  // Avatar selection
  const handleAvatarNext = ({ name, avatar }) => {
    setPlayerName(name || "Player");
    setAvatar(avatar);
    setPage("rounds");
  };

  // Map avatar index to image
  const getAvatarImage = (avatarIdx) => {
    if (avatarIdx === 3) return GangLeaderPng;
    if (avatarIdx === 4) return AbhijeetPng;
    // Default gray placeholder for 0, 1, 2
    return null;
  };

  // Rounds selection
  const handleRoundsStart = (numRounds) => {
    setRounds(numRounds);
    setPage("game");
  };

  // Go to home handler
  const handleGoHome = () => {
    setPage('home');
  };

  // Play again handler
  const handlePlayAgain = () => {
    setPage('rounds');
  };

  // Use a default bot avatar if not set
  const defaultBotAvatar = null; // You can set a bot avatar image here if you want

  // Determine bot avatar based on player avatar
  const getBotAvatar = (avatarIdx) => {
    if (avatarIdx === 3) return BBzPng;
    return defaultBotAvatar;
  };

  if (page === "home") {
    return <HomePage onPlay={() => setPage("avatar")} onSettings={() => alert("Settings clicked!")} />;
  }
  if (page === "avatar") {
    return (
      <AvatarSelectPage
        onNext={handleAvatarNext}
        onSettings={() => alert("Settings clicked!")}
      />
    );
  }
  if (page === "rounds") {
    return (
      <RoundsSelectPage
        onStart={handleRoundsStart}
        onSettings={() => alert("Settings clicked!")}
      />
    );
  }
  if (page === "game") {
    return (
      <GameAreaPage
        totalRounds={rounds}
        playerName={playerName}
        botName={botName}
        playerAvatar={getAvatarImage(avatar)}
        botAvatar={getBotAvatar(avatar)}
        onGoHome={handleGoHome}
        onPlayAgain={handlePlayAgain}
      />
    );
  }
  return null;
}
