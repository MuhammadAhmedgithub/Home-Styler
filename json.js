// Function to load the design gallery
function loadGallery() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = '<div class="gallery"></div>';
      const gallery = content.querySelector('.gallery');
      data.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        gallery.appendChild(galleryItem);
      });
    })
    .catch(error => {
      console.error('Error fetching the design data:', error);
    });
}

// Function to load the design table
function loadTable() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const content = document.getElementById('content');
      let tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
      `;
      data.forEach(item => {
        tableHTML += `
          <tr>
            <td>${item.title}</td>
            <td>${item.description}</td>
          </tr>
        `;
      });
      tableHTML += '</tbody></table>';
      content.innerHTML = tableHTML;
    })
    .catch(error => {
      console.error('Error fetching the design data:', error);
    });
}
