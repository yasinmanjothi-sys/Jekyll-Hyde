(function () {
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    // Create the badge element
    var badge = document.createElement('a');
    badge.href = 'https://redboatmedia.com';
    badge.target = '_blank';
    badge.rel = 'noopener noreferrer';
    badge.id = 'rbm-badge';

    // Create the image element using the uploaded asset
    var img = document.createElement('img');
    // Note: For production, move this image to your project folder and update the path
    img.src = '/Users/user/.gemini/antigravity/brain/2b3363c9-ee19-4b2d-908c-fb697f08cb68/uploaded_media_1769370903950.png';
    img.alt = 'Made by Red Boat Media';

    badge.appendChild(img);

    // Inject CSS styles
    var style = document.createElement('style');
    style.innerHTML = `
      #rbm-badge {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        transition: transform 0.3s ease;
        cursor: pointer;
        display: block; /* Removes inline spacing issues */
      }
      
      #rbm-badge img {
        height: 40px; /* Set a standard height */
        width: auto;
        display: block;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        border-radius: 4px; /* Optional: matches the image corners if they are rounded */
      }

      #rbm-badge:hover {
        transform: translateY(-2px);
      }
      
      /* Mobile responsiveness */
      @media (max-width: 600px) {
        #rbm-badge {
          bottom: 10px;
          right: 10px;
        }
        #rbm-badge img {
            height: 30px;
        }
      }
    `;

    // Append to document
    document.head.appendChild(style);
    document.body.appendChild(badge);
  });
})();
