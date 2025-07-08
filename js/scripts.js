/*
  -----------------------------------------------------------------------------
  This file is part of a personal project by Sarlin Tejada, shared for portfolio purposes only.
  All rights reserved. This code is provided for view-only access.

  Do not copy, modify, reuse, or distribute without prior written permission.
  For license details, see the LICENSE file in the root of this repository.
  -----------------------------------------------------------------------------
*/

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
