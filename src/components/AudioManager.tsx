import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

const AudioManager = () => {
  const bgAudioRef = useRef<HTMLAudioElement>(null);
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);

  useEffect(() => {
    const bgAudio = bgAudioRef.current;
    if (!bgAudio) return;

    // Configure audio settings
    bgAudio.volume = 0.3;
    bgAudio.loop = true;
    bgAudio.preload = 'auto';

         // Auto-play strategies
     const attemptAutoplay = async () => {
       try {
         // Set start time
         bgAudio.currentTime = 1.25;
        
        // Try to play immediately
        await bgAudio.play();
        console.log('🎵 Background music started automatically');
        setShowPlayPrompt(false);
      } catch (error) {
        console.log('⚠️ Autoplay blocked by browser. User interaction needed.');
        setShowPlayPrompt(true);
      }
    };

    // Try autoplay when audio is loaded
    bgAudio.addEventListener('loadeddata', attemptAutoplay);

         // Also try on any user interaction
     const handleUserInteraction = async () => {
       if (bgAudio.paused) {
         try {
           bgAudio.currentTime = 1.25;
          await bgAudio.play();
          setShowPlayPrompt(false);
          console.log('🎵 Background music started after user interaction');
        } catch (error) {
          console.error('Failed to start music:', error);
        }
      }
      // Remove listeners after first successful play
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Listen for any user interaction to start music
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

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

    return () => {
      window.removeEventListener('voicePlay', handleVoicePlay);
      window.removeEventListener('voiceEnd', handleVoiceEnd);
      bgAudio.removeEventListener('loadeddata', attemptAutoplay);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
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
           bgAudio.currentTime = 1.25; // Reset to start position
          bgAudio.play().catch(console.error);
        } else {
          bgAudio.pause();
        }
        return !bgAudio.paused;
      },
      isPlaying: () => !bgAudio.paused
    };
  }, []);

     // Manual play function for the prompt
   const handleManualPlay = async () => {
     const bgAudio = bgAudioRef.current;
     if (bgAudio) {
       try {
         bgAudio.currentTime = 1.25;
        await bgAudio.play();
        setShowPlayPrompt(false);
      } catch (error) {
        console.error('Failed to start music:', error);
      }
    }
  };

  return (
    <>
      {/* Hidden background music */}
      <audio ref={bgAudioRef} src="/audio/bm.mp3" preload="auto" />
      
      {/* Autoplay prompt overlay - only shows if autoplay is blocked */}
      {showPlayPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-card p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-4">Welcome to Our Love Story</h3>
            <p className="text-muted-foreground mb-6">
              Click below to start the romantic background music and begin your journey
            </p>
            <Button 
              onClick={handleManualPlay}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Music className="mr-2 h-5 w-5" />
              Start the Magic ✨
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioManager;
