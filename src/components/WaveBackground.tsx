const WaveBackground = () => {
  return (
    <div className='absolute inset-0 z-[-1] overflow-hidden'>
      {/* Deep Technical Foundation */}
      <div className='absolute inset-0 bg-[#050816]' />
      
      {/* Large Moving Nebula Orbs - HIGH VISIBILITY */}
      <div 
        className='absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#915EFF] opacity-[0.12] rounded-full blur-[150px] animate-pulse'
        style={{ animationDuration: '8s' }}
      />
      <div 
        className='absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#58a6ff] opacity-[0.1] rounded-full blur-[150px] animate-pulse'
        style={{ animationDuration: '12s' }}
      />
      <div 
        className='absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#bc8cf2] opacity-[0.08] rounded-full blur-[120px] animate-pulse'
        style={{ animationDuration: '10s' }}
      />

      {/* Dynamic Data Stream / Star Field */}
      <div className='absolute inset-0'>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className='absolute bg-white rounded-full opacity-[0.15] blur-[0.5px]'
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay - More Visible */}
      <div 
        className='absolute inset-0 opacity-[0.12]'
        style={{
          backgroundImage: `
            linear-gradient(#58a6ff10 1px, transparent 1px),
            linear-gradient(90deg, #58a6ff10 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Atmospheric Vignette */}
      <div className='absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#05081650]' />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-1000px) translateX(200px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WaveBackground;
