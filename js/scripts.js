document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const contactMenu = document.getElementById('contactMenu')
  
    if (menuToggle && contactMenu) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation()
        contactMenu.classList.toggle('open')
      })
  
      document.addEventListener('click', (e) => {
        if (!contactMenu.contains(e.target)) {
          contactMenu.classList.remove('open')
        }
      })
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          contactMenu.classList.remove('open')
        }
      })
    }
  })