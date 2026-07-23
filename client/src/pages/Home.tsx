import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Music, MapPin, Calendar, Heart, Gift, MessageCircle, Volume2, VolumeX } from "lucide-react";

/**
 * Cherry Blossom Spring Wedding Invitation
 * 
 * Design Philosophy:
 * - Light, airy, graceful aesthetic inspired by Japanese cherry blossom gardens
 * - Photography-first hierarchy with elegant typography support
 * - Soft, slow animations that feel natural and calming
 * - Generous whitespace and botanical accents throughout
 */

// Reusable component untuk section dengan scroll animation
function AnimatedSection({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve setelah trigger untuk performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const mastHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    mastHeadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Sample wedding data - would be replaced with actual data from API
  const weddingData = {
    couple: {
      groom: { name: "Ravi", parents: "Mr. & Mrs. Sharma" },
      bride: { name: "Priya", parents: "Mr. & Mrs. Gupta" },
      coverImage: "/manus-storage/hero-cherry-blossom_a3854dd1.png",
      guestName: "Dear Guest",
    },
    events: [
      {
        title: "Ceremony",
        date: "June 15, 2024",
        time: "4:00 PM",
        location: "Botanical Gardens, New Delhi",
        address: "123 Garden Lane, New Delhi, India",
        mapUrl: "https://maps.google.com",
      },
      {
        title: "Reception",
        date: "June 15, 2024",
        time: "7:00 PM",
        location: "Grand Ballroom, Taj Palace Hotel",
        address: "456 Palace Road, New Delhi, India",
        mapUrl: "https://maps.google.com",
      },
    ],
    stories: [
      {
        title: "How We Met",
        description: "A chance encounter at a spring garden festival changed everything.",
        image: "/manus-storage/hero-cherry-blossom_a3854dd1.png",
      },
      {
        title: "The Proposal",
        description: "Under the blooming cherry blossoms, he asked the question.",
        image: "/manus-storage/hero-cherry-blossom_a3854dd1.png",
      },
    ],
    gifts: [
      {
        type: "Bank Transfer",
        accountName: "Ravi & Priya",
        accountNumber: "****1234",
        ifscCode: "HDFC0001234",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/sakura-logo_bfd83cfd.png"
              alt="Sakura Logo"
              className="w-8 h-8"
            />
            <span className="font-serif text-lg font-bold text-primary">
              Ravi & Priya
            </span>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
            aria-label="Toggle music"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Hero Cover Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${weddingData.couple.coverImage}')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        {/* Falling Petals Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-falling-petals"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10vh`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <svg
                className="w-4 h-4 text-pink-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 7h-6v13h-6v-13h-6l9-9 9 9z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-6 animate-fade-up">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-serif font-bold">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Together in Love
            </p>
          </div>
          <p className="text-lg opacity-90">{weddingData.couple.guestName}</p>
          <Button
            size="lg"
            onClick={handleOpenInvitation}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-serif transition-all hover:scale-105 active:scale-95"
          >
            Open Invitation
          </Button>
        </div>
      </section>

      {/* Masthead Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div
          ref={mastHeadRef}
          className="max-w-2xl mx-auto px-4 text-center space-y-8"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <img
              src="/manus-storage/watercolor-blossom_ea17f571.png"
              alt="Blossom"
              className="w-8 h-8 opacity-60"
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-primary animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Together
            </h2>
            <p className="text-lg text-muted-foreground font-light italic animate-fade-up" style={{ animationDelay: '0.2s' }}>
              "Two souls, one beautiful journey"
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Wedding Couple Section */}
      <AnimatedSection className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 animate-fade-up">
            The Couple
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Groom */}
            <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
                <img
                  src="/manus-storage/hero-cherry-blossom_a3854dd1.png"
                  alt={weddingData.couple.groom.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold">
                  {weddingData.couple.groom.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {weddingData.couple.groom.parents}
                </p>
              </div>
            </div>

            {/* Bride */}
            <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
                <img
                  src="/manus-storage/hero-cherry-blossom_a3854dd1.png"
                  alt={weddingData.couple.bride.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold">
                  {weddingData.couple.bride.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {weddingData.couple.bride.parents}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 animate-fade-up">
            Celebration Details
          </h2>

          <div className="space-y-8">
            {weddingData.events.map((event, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    {event.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Time</p>
                          <p className="font-medium">{event.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Location
                          </p>
                          <p className="font-medium">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-full border-primary text-primary hover:bg-primary/10"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-full border-primary text-primary hover:bg-primary/10"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      View Map
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* RSVP Section */}
      <AnimatedSection className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 animate-fade-up">
            RSVP
          </h2>

          <Card className="p-8 border-2 border-primary/20 animate-fade-up">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Will you attend?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="attendance" value="yes" />
                    <span>Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="attendance" value="no" />
                    <span>Sorry, I can't make it</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Guests
                </label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors bg-white">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 font-serif">
                Submit RSVP
              </Button>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      {/* Stories Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 animate-fade-up">
            Our Story
          </h2>

          <div className="space-y-12">
            {weddingData.stories.map((story, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center animate-fade-up transition-all duration-700`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="flex-1">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gifts Section */}
      <AnimatedSection className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 animate-fade-up">
            Gifts & Wishes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Monetary Gift */}
            <Card className="p-8 border-2 border-primary/20 space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold">Monetary Gift</h3>
              </div>

              <div className="space-y-4 bg-primary/5 p-6 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Name</p>
                  <p className="font-medium">
                    {weddingData.gifts[0].accountName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Account Number
                  </p>
                  <p className="font-medium font-mono">
                    {weddingData.gifts[0].accountNumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">IFSC Code</p>
                  <p className="font-medium font-mono">
                    {weddingData.gifts[0].ifscCode}
                  </p>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                Copy Account Details
              </Button>
            </Card>

            {/* Wishes */}
            <Card className="p-8 border-2 border-primary/20 space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold">Share a Wish</h3>
              </div>

              <textarea
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none transition-colors bg-white resize-none"
                rows={4}
                placeholder="Share your blessings and wishes..."
              />

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                Send Wishes
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Closing Section */}
      <AnimatedSection className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/manus-storage/sakura-pattern_52e90b04.png"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl md:text-5xl font-serif">Thank You</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for being a part of our special day. Your presence and
            blessings mean the world to us as we begin this beautiful journey
            together.
          </p>

          <div className="space-y-2">
            <p className="text-2xl font-serif font-bold text-primary">
              With Love,
            </p>
            <p className="text-xl font-serif">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <img
              src="/manus-storage/sakura-logo_bfd83cfd.png"
              alt="Sakura"
              className="w-12 h-12 opacity-40"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-primary/5 py-8 text-center text-sm text-muted-foreground">
        <p>© 2024 Ravi & Priya. All rights reserved.</p>
      </footer>
    </div>
  );
}
