import React from 'react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Main background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./ChatGPT Image Aug 2, 2025, 03_20_43 PM (1) (1) (1) (1) copy.png')",
          filter: 'sepia(10%) contrast(90%) brightness(95%)'
        }}
      ></div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-amber-50 bg-opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 relative" style={{ borderBottom: '3px solid #8B4513' }}>
          <h1 className="text-7xl font-bold text-amber-900 mb-2 tracking-wide relative" style={{ 
            fontFamily: 'Times, "Times New Roman", serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            transform: 'rotate(-0.2deg)'
          }}>
            GOON
          </h1>
          <div className="text-2xl text-amber-800 italic mb-4" style={{ 
            fontFamily: 'Times, "Times New Roman", serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            transform: 'rotate(0.1deg)'
          }}>
            noun /ˈguːn/
          </div>
          <div className="text-lg text-amber-700" style={{ 
            fontFamily: 'Times, "Times New Roman", serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            transform: 'rotate(-0.1deg)'
          }}>
            <em>Internet Slang, Cryptocurrency, Addiction</em>
          </div>
        </header>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Dictionary Content */}
          <div className="space-y-8">
            
            {/* Main Definition - Aged Boxed Section */}
            <section className="relative border-2 border-amber-800 bg-white bg-opacity-80 p-6 transform rotate-0.5" style={{
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 transform -rotate-0.2" style={{ 
                fontFamily: 'Times, "Times New Roman", serif', 
                textDecoration: 'underline',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Definition
              </h2>
              <div className="text-lg leading-relaxed text-amber-900 space-y-3" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                <p className="transform rotate-0.1">
                  <strong>GOON</strong> – <em>A crypto trader who has achieved complete mental dissociation from reality, existing only to stare at charts and buy dips.</em>
                </p>
                <p className="transform -rotate-0.1">
                  Derived from internet slang describing obsessive behavior, now applied to degens who spend 18+ hours daily in their "chart caves" buying every dip with religious devotion.
                </p>
                <p className="transform rotate-0.05">
                  No exit strategy. No self-control. No life outside the charts. Just pure, unfiltered financial gooning.
                </p>
              </div>
              <div className="mt-4 text-base italic text-amber-700 border-l-4 border-amber-600 pl-4 transform rotate-0.2" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                "When you've been staring at 1-minute candles for 72 hours straight and your brain has melted into pure chart-reading instinct, you have achieved the goon state."
              </div>
              
              {/* Enhanced Red Ink Rubber Stamp */}
              <div className="mt-6 flex justify-center">
                <div className="relative transform -rotate-12 border-4 border-red-600 bg-red-100 px-4 py-2" style={{ 
                  fontFamily: 'Times, "Times New Roman", serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#DC2626',
                  letterSpacing: '1px',
                  boxShadow: '3px 3px 8px rgba(220,38,38,0.4)',
                  background: 'radial-gradient(circle at 30% 40%, rgba(220,38,38,0.3) 20%, rgba(254,226,226,0.9) 50%)'
                }}>
                  {/* Ink blotches */}
                  <div className="absolute -top-1 -left-2 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-1 right-1 w-1 h-3 bg-red-600 rounded-full opacity-50"></div>
                  <div className="absolute top-1 right-8 w-1 h-1 bg-red-700 rounded-full opacity-70"></div>
                  
                  CA: 8HHuE7ZL3wTMVhgwHGZmpnP4xtaPG2Wp12HfavtXpump
                </div>
              </div>
            </section>

            {/* Horizontal Divider */}
            <hr className="border-t-2 border-amber-800 my-6 opacity-70 transform rotate-0.1" />

            {/* Etymology Section */}
            <section className="relative border-2 border-amber-800 bg-white bg-opacity-80 p-6 transform -rotate-0.3" style={{
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <h3 className="text-xl font-bold text-amber-900 mb-3 transform rotate-0.1" style={{ 
                fontFamily: 'Times, "Times New Roman", serif', 
                textDecoration: 'underline',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Etymology
              </h3>
              <p className="text-base text-amber-800 leading-relaxed transform -rotate-0.05" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                <em>Early 21st century:</em> from internet slang "gooning" (obsessive, mindless behavior leading to mental dissociation) 
                adapted by crypto communities to describe traders who achieve complete chart-staring enlightenment. First documented in degen trading communities of 2025.
              </p>
            </section>

            {/* Horizontal Divider */}
            <hr className="border-t-2 border-amber-800 my-6 opacity-70 transform -rotate-0.1" />

            {/* Usage Examples Section */}
            <section className="relative border-2 border-amber-800 bg-white bg-opacity-80 p-6 transform rotate-0.2" style={{
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <h3 className="text-xl font-bold text-amber-900 mb-3 transform -rotate-0.1" style={{ 
                fontFamily: 'Times, "Times New Roman", serif', 
                textDecoration: 'underline',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Usage in Context
              </h3>
              <div className="space-y-3 text-base text-amber-800" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                <p className="transform rotate-0.05">
                  <em>"I've been gooning in my chart cave for 18 hours straight, bought every dip, brain completely melted."</em>
                </p>
                <p className="transform -rotate-0.1">
                  <em>"Achieved full goon state last night - 47 monitors, all showing GOON charts, pure bliss."</em>
                </p>
                <p className="transform rotate-0.08">
                  <em>"My goon cave setup is complete: 12 screens, IV drip of energy drinks, GOON charts on repeat."</em>
                </p>
              </div>
            </section>

            {/* Horizontal Divider */}
            <hr className="border-t-2 border-amber-800 my-6 opacity-70 transform rotate-0.05" />

            {/* Community Quotes Section */}
            <section className="relative border-2 border-amber-800 bg-white bg-opacity-80 p-6 transform -rotate-0.4" style={{
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <h3 className="text-xl font-bold text-amber-900 mb-4 transform rotate-0.15" style={{ 
                fontFamily: 'Times, "Times New Roman", serif', 
                textDecoration: 'underline',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                COMMUNITY QUOTES
              </h3>
              <div className="space-y-4 text-base text-amber-800" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                <blockquote className="border-l-4 border-amber-600 pl-4 italic transform rotate-0.1">
                  "Haven't left my goon cave in 4 days. GOON charts are life." — <strong>@ChartGoonMaxxer</strong>
                </blockquote>
                <blockquote className="border-l-4 border-amber-600 pl-4 italic transform -rotate-0.08">
                  "Achieved enlightenment: 73 hours of pure chart gooning, bought 420 dips." — <strong>@GoonCaveKing</strong>
                </blockquote>
                <blockquote className="border-l-4 border-amber-600 pl-4 italic transform rotate-0.12">
                  "My brain is mush but my GOON bag is massive. This is the way." — <strong>@MindlessGooner</strong>
                </blockquote>
                <blockquote className="border-l-4 border-amber-600 pl-4 italic transform -rotate-0.05">
                  "Sold my bed to buy more GOON. Sleep is for non-gooners." — <strong>@ChartAddictAnon</strong>
                </blockquote>
              </div>
            </section>

            {/* Horizontal Divider */}
            <hr className="border-t-2 border-amber-800 my-6 opacity-70 transform -rotate-0.08" />

            {/* Related Terms Section */}
            <section className="relative border-2 border-amber-800 bg-white bg-opacity-80 p-6 transform rotate-0.1" style={{
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <h3 className="text-xl font-bold text-amber-900 mb-3 transform -rotate-0.12" style={{ 
                fontFamily: 'Times, "Times New Roman", serif', 
                textDecoration: 'underline',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Related Terms
              </h3>
              <div className="text-base text-amber-800 leading-relaxed transform rotate-0.05" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
              }}>
                <p>
                  <strong>See also:</strong> <em>chart cave, goon cave, edging (the dip), diamond hands, 
                  bag holder, exit liquidity, FOMO, endless scroll, dopamine hit, financial dissociation, chart addiction</em>
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Derpina Images */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* First Derpina Image */}
            <div className="text-center">
              <img 
                src="./Untitled (Your Story)13513531.png" 
                alt="GOON Chart Addict Mascot" 
                className="w-full max-w-lg h-auto transform -rotate-0.5"
                style={{ 
                  filter: 'sepia(5%) contrast(95%) brightness(98%)'
                }}
              />
              <div className="mt-4 text-center transform rotate-0.1">
                <p className="text-sm italic text-amber-700" style={{ 
                  fontFamily: 'Times, "Times New Roman", serif',
                  textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
                }}>
                  <strong>Chart Goon</strong> - Chief Chart Gooning Officer
                </p>
                <p className="text-xs text-amber-600 mt-1 transform -rotate-0.05" style={{ 
                  fontFamily: 'Times, "Times New Roman", serif',
                  textShadow: '0.3px 0.3px 1px rgba(0,0,0,0.1)'
                }}>
                  "Professional chart gooner since 2019"
                </p>
              </div>
            </div>

            {/* Contract Address */}
            <div className="text-center bg-white bg-opacity-80 p-6 border-2 border-amber-800 transform rotate-0.3 mb-8" style={{
              boxShadow: '3px 3px 8px rgba(0,0,0,0.2)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.8) 100%)'
            }}>
              <p className="text-xs font-bold text-amber-900 mb-2" style={{ 
                fontFamily: 'Times, "Times New Roman", serif',
                letterSpacing: '1px'
              }}>
                CONTRACT ADDRESS
              </p>
              <p className="text-xs text-amber-800 font-mono break-all" style={{
                textShadow: '0.3px 0.3px 1px rgba(0,0,0,0.1)'
              }}>
                8HHuE7ZL3wTMVhgwHGZmpnP4xtaPG2Wp12HfavtXpump
              </p>
            </div>

            {/* Community Link */}
            <div className="text-center">
              <a 
                href="https://x.com/apegoondotfun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors duration-200 transform hover:scale-105"
              >
                Join Our Community
              </a>
            </div>

            {/* Second Derpina Image */}
            <div className="text-center">
              <img 
                src="./Untitled (Your 13513513513513513513.png" 
                alt="GOON Cave Setup" 
                className="w-full max-w-lg h-auto transform rotate-0.3"
                style={{ 
                  filter: 'sepia(5%) contrast(95%) brightness(98%)'
                }}
              />
              <div className="mt-4 text-center transform -rotate-0.1">
                <p className="text-xs text-amber-600" style={{ 
                  fontFamily: 'Times, "Times New Roman", serif',
                  textShadow: '0.3px 0.3px 1px rgba(0,0,0,0.1)'
                }}>
                  "Emergency chart gooning kit includes 47 monitors"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 text-center relative transform rotate-0.05" style={{ borderTop: '3px solid #8B4513' }}>
          <div className="text-sm text-amber-700 space-y-2" style={{ 
            fontFamily: 'Times, "Times New Roman", serif',
            textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
          }}>
            <p className="transform -rotate-0.05">
              <em>Modern Meme Dictionary of Finance, 2025 Edition</em>
            </p>
            <p className="transform rotate-0.08">
              "Not financial advice. Definitely chart addiction."
            </p>
            <p className="text-xs text-amber-600 mt-4 transform -rotate-0.03">
              Documented from the deepest goon caves of crypto Twitter
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;