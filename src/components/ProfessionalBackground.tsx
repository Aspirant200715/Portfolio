const ProfessionalBackground = () => {
  return (
    <div className='fixed inset-0 z-[-1] overflow-hidden pointer-events-none'>
      {/* Deep Midnight Base */}
      <div className='absolute inset-0 bg-[#0a0c10]' />
      
      {/* Subtle Static Grid */}
      <div 
        className='absolute inset-0 opacity-[0.05]'
        style={{
          backgroundImage: `
            linear-gradient(#58a6ff 1px, transparent 1px),
            linear-gradient(90deg, #58a6ff 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Moving Light Rays / Scanning Effect */}
      <div className='absolute inset-0 overflow-hidden'>
        <div 
          className='absolute w-[200%] h-[100%] bg-gradient-to-r from-transparent via-[#58a6ff05] to-transparent animate-[scan_10s_linear_infinite]'
          style={{
            transform: 'rotate(-45deg) translateY(-50%)',
          }}
        />
      </div>

      {/* Subtle Floating Blobs for depth */}
      <div className='absolute top-1/4 -left-20 w-96 h-96 bg-[#58a6ff08] rounded-full blur-[120px] animate-pulse' />
      <div className='absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#58a6ff05] rounded-full blur-[150px] animate-pulse' />
      
      <style>{`
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalBackground;
