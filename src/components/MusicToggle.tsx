import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music, VolumeX } from 'lucide-react';

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Start playing by default
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = '/audio/bm.mp3'; // Ensure this is inside /public/audio

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.3;

      // Wait for metadata to be loaded to set currentTime
      const playAudio = () => {
        audio.currentTime = 5; // Start from 5 seconds
        audio.play().catch(console.error);
      };

      audio.addEventListener('loadedmetadata', playAudio);

      return () => {
        audio.removeEventListener('loadedmetadata', playAudio);
      };
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className="fixed top-6 right-6 z-50 rounded-full bg-background/80 backdrop-blur-sm shadow-soft border-primary/30 hover:bg-primary hover:text-primary-foreground transition-romantic"
      >
        {isPlaying ? (
          <Music className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>

      <audio ref={audioRef} preload="auto">
        <source src={musicUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
