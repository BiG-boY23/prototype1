function openFileExplorer() {
    document.getElementById('fileInput').click();
  }
  
  document.getElementById('fileInput').addEventListener('change', function() {
    const selectedFile = this.files[0];
    const selectedImageElement = document.getElementById('selectedImage');
    const selectedFileNameElement = document.getElementById('selectedFileName');
  
    if (selectedFile) {
      if (isImage(selectedFile)) {
        selectedFileNameElement.innerText = `Selected Image: ${selectedFile.name}`;
        const reader = new FileReader();
  
        reader.onload = function(e) {
          selectedImageElement.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile);
      } else {
        resetSelection();
        alert('Invalid file format. Please choose an image file.');
      }
    } else {
      resetSelection();
    }
  });
  
  function isImage(file) {
    const imageFormats = ['image/jpeg', 'image/png', 'image/gif'];
    return imageFormats.includes(file.type);
  }
  
  function resetSelection() {
    document.getElementById('selectedFileName').innerText = 'No image selected';
    document.getElementById('selectedImage').src = '';
  }
  