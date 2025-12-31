// JavaScript for Zenba CPA Office Website

document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // Initialize all functionality
  initMobileMenu();
  initSmoothScrolling();
  updateCopyrightYear();
});

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function () {
      navList.classList.toggle('mobile-open');

      // Update aria-label for accessibility
      const isOpen = navList.classList.contains('mobile-open');
      mobileToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');

      // Update icon
      const icon = mobileToggle.querySelector('.material-icons');
      if (icon) {
        icon.textContent = isOpen ? 'close' : 'menu';
      }
    });

    // Close menu when clicking nav links
    const navLinks = navList.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        navList.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-label', 'メニューを開く');
        const icon = mobileToggle.querySelector('.material-icons');
        if (icon) {
          icon.textContent = 'menu';
        }
      });
    });
  }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

// Update Copyright Year
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll('.footer-copyright');

  copyrightElements.forEach((element) => {
    // Replace any year (4 digits) with current year
    element.innerHTML = element.innerHTML.replace(/\d{4}/, currentYear);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Header scroll effect
window.addEventListener(
  'scroll',
  debounce(function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.boxShadow = 'var(--shadow-3)';
    } else {
      header.style.boxShadow = 'var(--shadow-1)';
    }
  }, 10)
);

// Back to top functionality (if needed)
function createBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<span class="material-icons">keyboard_arrow_up</span>';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'ページトップに戻る');

  backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 56px;
        height: 56px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: var(--shadow-2);
        transition: all var(--transition-normal);
        z-index: 999;
        display: none;
    `;

  document.body.appendChild(backToTopBtn);

  window.addEventListener(
    'scroll',
    debounce(function () {
      if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
        backToTopBtn.style.alignItems = 'center';
        backToTopBtn.style.justifyContent = 'center';
      } else {
        backToTopBtn.style.display = 'none';
      }
    }, 100)
  );

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Create back to top button
createBackToTop();

// Handle image loading errors
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', function () {
      // Create a placeholder div
      const placeholder = document.createElement('div');
      placeholder.style.cssText = `
                width: ${this.width || '100'}px;
                height: ${this.height || '100'}px;
                background-color: var(--divider);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-secondary);
                font-size: 0.875rem;
                border-radius: 4px;
            `;
      placeholder.textContent = '画像を準備中';

      this.parentNode.replaceChild(placeholder, this);
    });
  });
});
