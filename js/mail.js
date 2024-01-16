document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    var username = event.target.elements.name.value;
    var email = event.target.elements.email.value;
    var phone = event.target.elements.phone.value;
    var message = event.target.elements.message.value;
  
    // Construct mailto link with formatted body
    var link = 'mailto:thijsvdbroek27@gmail.com?subject=' + encodeURIComponent(phone) +
               '&body=' + encodeURIComponent('Message from: ' + username + '\n\n' + 'Message: ' + message);
  
    // Open link
    window.location.href = link;
  
    // Clear form fields
    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.phone.value = '';
    event.target.elements.message.value = '';
  });