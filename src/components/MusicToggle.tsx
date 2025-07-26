import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music, VolumeX } from 'lucide-react';

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    // Use the global background music control
    const bgMusic = (window as any).backgroundMusic;
    if (bgMusic) {
      const playing = bgMusic.toggle();
      setIsPlaying(playing);
    }
  };

  // Update state based on actual music playing status
  useEffect(() => {
    const interval = setInterval(() => {
      const bgMusic = (window as any).backgroundMusic;
      if (bgMusic) {
        setIsPlaying(bgMusic.isPlaying());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};
