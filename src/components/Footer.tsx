const Footer = () => {
  return (
    <footer className='py-10 bg-primary border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='flex items-center gap-4'>
          <div className='relative w-12 h-12'>
            <img src="/soham.jpg" alt="logo" className='w-full h-full rounded-full border border-[#58a6ff] object-cover' />
            <div className='absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-gradient-to-br from-[#58a6ff] to-[#bc8cf2] flex items-center justify-center shadow-lg'>
              <span className='text-white text-[12px] font-black italic'>S</span>
            </div>
          </div>
          <div>
            <p className='text-white font-bold text-[18px]'>Soham Gangopadhyay</p>
            <p className='text-secondary text-[14px]'>AI Research & Systems Engineer</p>
          </div>
        </div>
        
        <div className='flex gap-8'>
          <a href="https://linkedin.com/in/soham-gangopadhyay-b47519368" target="_blank" className='text-secondary hover:text-white transition-colors'>LinkedIn</a>
          <a href="mailto:sohamgangopadhyay2007@gmail.com" className='text-secondary hover:text-white transition-colors'>Email</a>
          <a href="https://github.com/Aspirant200715" target="_blank" className='text-secondary hover:text-white transition-colors'>GitHub</a>
        </div>
        
        <p className='text-secondary text-[12px]'>© 2026 • Designed for the future.</p>
      </div>
    </footer>
  );
};

export default Footer;
