import { useEffect } from 'react'

const useMyScroll = () => {

  useEffect(() => {

    let lastScroll = 0;

    const handleScroll = () => {

      const currentScroll = window.pageYOffset;

      // scrolled to top
      if(currentScroll <= 0) {
        document.body.classList.remove('scroll-up');
      }
  
      // scrolling down
      if(currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-up');
        document.body.classList.add('scroll-down');
      }
  
      // scrolling up
      if(currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-down');
        document.body.classList.add('scroll-up');
      }
  
      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
}

export default useMyScroll