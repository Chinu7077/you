import { useRef, useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TimelineSection } from '@/components/TimelineSection';
import { LoveTraitsSection } from '@/components/LoveTraitsSection';
import { EnvelopeLetterSection } from '@/components/EnvelopeLetterSection';
import { VoiceOverlaySection } from '@/components/VoiceOverlaySection';
import { PolaroidMemorySection } from '@/components/PolaroidMemorySection';
import { LittleThingsSection } from '@/components/LittleThingsSection';
import { SecretPuzzleSection } from '@/components/SecretPuzzleSection';
import { FutureVisionSection } from '@/components/FutureVisionSection';
import { ProposalSection } from '@/components/ProposalSection';
import { SignatureSection } from '@/components/SignatureSection';
import { MusicToggle } from '@/components/MusicToggle';
import { NightModeToggle } from '@/components/NightModeToggle';

const Index = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isPuzzleUnlocked, setIsPuzzleUnlocked] = useState(false);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handlePuzzleUnlock = () => {
    setIsPuzzleUnlocked(true);
  };

  useEffect(() => {
    // Enhanced secret console messages
    console.log("💕 Hey there! If you're reading this, you found my secret message! 💕");
    console.log("🎉 I put my heart into every line of code for this proposal. 🎉");
    console.log("💖 I hope she says yes! 💖");
    console.log("P.S. I was always too shy to say it aloud... but I love you.");
  }, []);

  return (
    <div className="min-h-screen">
      <MusicToggle />
      <NightModeToggle />
      
      <HeroSection onStartJourney={scrollToTimeline} />
      
      <div ref={timelineRef}>
        <TimelineSection />
      </div>
      
      <LoveTraitsSection />
      
      <EnvelopeLetterSection />
      
      <VoiceOverlaySection />
      
      <PolaroidMemorySection />
      
      <FutureVisionSection />
      
      <LittleThingsSection />
      
      <SecretPuzzleSection onUnlock={handlePuzzleUnlock} />
      
      {isPuzzleUnlocked && <ProposalSection />}
      
      <SignatureSection />
    </div>
  );
};

export default Index;
