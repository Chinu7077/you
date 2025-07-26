import { useEffect, useRef } from 'react';

const AudioManager = () => {
  const bgAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const bgAudio = bgAudioRef.current;
    if (!bgAudio) return;

    // Auto-play background music once page loads
    const playBgMusic = () => {
      bgAudio.volume = 0.3; // Lower volume for background
      bgAudio.loop = true;
      bgAudio.currentTime = 5; // Start from 5 seconds like in MusicToggle
      bgAudio.play().catch(err => {
        console.warn('Autoplay failed. User interaction needed.', err);
      });
    };

    // Listen for custom voice events to pause/resume background music
    const handleVoicePlay = () => {
      if (!bgAudio.paused) {
        bgAudio.pause();
      }
    };

    const handleVoiceEnd = () => {
      bgAudio.play().catch(console.error);
    };

    // Listen for global voice events
    window.addEventListener('voicePlay', handleVoicePlay);
    window.addEventListener('voiceEnd', handleVoiceEnd);

    // Try to auto-play once DOM is ready
    bgAudio.addEventListener('loadedmetadata', playBgMusic);

    return () => {
      window.removeEventListener('voicePlay', handleVoicePlay);
      window.removeEventListener('voiceEnd', handleVoiceEnd);
      bgAudio.removeEventListener('loadedmetadata', playBgMusic);
    };
  }, []);

  // Function to expose background music control globally
  useEffect(() => {
    const bgAudio = bgAudioRef.current;
    if (!bgAudio) return;

    // Make audio control available globally
    (window as any).backgroundMusic = {
      play: () => bgAudio.play().catch(console.error),
      pause: () => bgAudio.pause(),
      toggle: () => {
        if (bgAudio.paused) {
          bgAudio.play().catch(console.error);
        } else {
          bgAudio.pause();
        }
        return !bgAudio.paused;
      },
      isPlaying: () => !bgAudio.paused
    };
  }, []);

  return (
    <>
      {/* Hidden background music - no visible controls */}
      <audio ref={bgAudioRef} src="/audio/bm.mp3" preload="auto" />
    </>
  );
};

export default AudioManager;
