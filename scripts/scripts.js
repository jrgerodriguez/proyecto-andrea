document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('#menu');
    const navigation = document.querySelector('.hero__navbar__nav');
  
    let isOpen = false;
  
    menuBtn.addEventListener('click', function () {
      isOpen = !isOpen;
      navigation.classList.toggle('open');
      menuBtn.classList.toggle('open');
  
      if (isOpen) {
        menuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>`;
      } else {
        menuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="35"
          height="35" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none"
          stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>`;
      }
    });
  });


// Current year



const currentYear = new Date().getFullYear();
document.querySelector('#current-year').textContent = currentYear;