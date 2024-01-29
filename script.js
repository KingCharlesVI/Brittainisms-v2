// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
        toggleAccordion(this);
      });
  
      // Initial state: hide accordion content
      const accordionContent = header.nextElementSibling;
      accordionContent.style.display = 'none';
    });
  });
  
  function toggleAccordion(accordionHeader) {
    const accordionContent = accordionHeader.nextElementSibling;
    const isHidden = accordionContent.style.display === 'none';
  
    accordionContent.style.display = isHidden ? 'block' : 'none';
  }  