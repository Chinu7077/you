import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music, VolumeX } from 'lucide-react';

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // You can replace this with an actual romantic instrumental track
  const musicUrl = "https://www.soundjay.com/misc/sounds/magic-chime-02.wav";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
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
      
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src={musicUrl} type="audio/wav" />
        {/* Fallback - you can add multiple sources here */}
        Your browser does not support the audio element.
      </audio>
    </>
  );
};