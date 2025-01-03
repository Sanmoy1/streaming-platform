import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect">
      <AudioPlayer
        autoPlay={false}
        src=""
        onPlay={() => console.log("Playing")}
        showSkipControls={true}
        showJumpControls={false}
        className="bg-transparent"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      />
    </div>
  );
};

export default Player;
