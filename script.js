



document.addEventListener('DOMContentLoaded', (event) => {
    
    const form = document.querySelector('.form-main-wrapper');
  
    
    function handleFormSubmit(event) {
    
      event.preventDefault();
  
    
      const formData = new FormData(form);
  
    
      const formDataObject = {};
  
    
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      console.log('Form Data:', formDataObject);
    }
  
  
    form.addEventListener('submit', handleFormSubmit);
  });
  