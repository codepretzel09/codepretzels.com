$(function() {
	// Set initial mode to dark
	$('body').addClass('dark');

	// Function to toggle between light and dark modes
	function toggleMode() {
		$('body').toggleClass('light');
		$('.bar').toggleClass('light');
		$('.logo').toggleClass('light');
		$('nav').toggleClass('light');
		$('ul').toggleClass('light');
		$('a').toggleClass('light');
		$('.gallery').toggleClass('light');
		$('.gallery-item').toggleClass('light');
		$('img').toggleClass('light');
	}

	// Attach click event to toggle switch
	$('#toggleButton').click(function() {
		toggleMode();
	});
});


$(function() {
	// ... The rest of your jQuery code
  
	// Attach click event to toggle switch
	$('#toggleButton').click(function() {
	  toggleMode();
	});
  });
  
  // Get all gallery items
  const items = document.querySelectorAll('.gallery-item img');
  
  // Loop through all gallery items and add click event listener
  items.forEach((item) => {
	item.addEventListener('click', () => {
	  // Get modal and modal image elements
	  const modal = document.querySelector('#modal');
	  const modalImage = document.querySelector('#modal-image');
  
	  // Set modal image source and alt attributes
	  modalImage.src = item.src;
	  modalImage.alt = item.alt;
  
	  // Display modal
	  modal.style.display = 'flex';
	  modal.style.alignItems = 'center';
	  modal.style.justifyContent = 'center';
	});
  });
  
  // Function to close modal
  function closeModal() {
	// Get modal element
	const modal = document.querySelector('#modal');
  
	// Hide modal
	modal.style.display = 'none';
  }
  
  