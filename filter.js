const items = [
    // Furniture
    { name: "Sofa A", price: 750, style: "contemporary", type: "furniture" },
    { name: "Chair B", price: 450, style: "elegant", type: "furniture" },
    { name: "Dining Table C", price: 950, style: "modern", type: "furniture" },
    { name: "Recliner D", price: 600, style: "contemporary", type: "furniture" },
    { name: "Bed E", price: 1200, style: "elegant", type: "furniture" },
    { name: "Storage Unit F", price: 800, style: "modern", type: "furniture" },

    // Lighting
    { name: "Ceiling Light G", price: 350, style: "elegant", type: "lighting" },
    { name: "Floor Lamp H", price: 550, style: "contemporary", type: "lighting" },
    { name: "Wall Lamp I", price: 450, style: "modern", type: "lighting" },
    { name: "Table Lamp J", price: 300, style: "elegant", type: "lighting" },
    { name: "Outdoor Light K", price: 500, style: "contemporary", type: "lighting" },

    // Decor
    { name: "Rug L", price: 450, style: "contemporary", type: "decor" },
    { name: "Curtains M", price: 300, style: "elegant", type: "decor" },
    { name: "Wall Art N", price: 700, style: "modern", type: "decor" },
    { name: "Cushion O", price: 150, style: "contemporary", type: "decor" },
    { name: "Vase P", price: 100, style: "elegant", type: "decor" },

    // Kitchen
    { name: "Kitchen Cabinet Q", price: 1200, style: "elegant", type: "kitchen" },
    { name: "Countertop R", price: 800, style: "modern", type: "kitchen" },
    { name: "Sink S", price: 400, style: "contemporary", type: "kitchen" },
    { name: "Kitchen Island T", price: 1000, style: "elegant", type: "kitchen" },
    { name: "Backsplash U", price: 700, style: "modern", type: "kitchen" },

    // Bathroom
    { name: "Vanity V", price: 950, style: "contemporary", type: "bathroom" },
    { name: "Bathtub W", price: 850, style: "elegant", type: "bathroom" },
    { name: "Toilet X", price: 400, style: "modern", type: "bathroom" },
    { name: "Bathroom Sink Y", price: 300, style: "elegant", type: "bathroom" },
    { name: "Mirror Z", price: 200, style: "contemporary", type: "bathroom" },
];

const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const filterTypeSelect = document.getElementById('filterType');
const styleFilterSelect = document.getElementById('styleFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const itemList = document.getElementById('itemList');

function renderList(filteredItems) {
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} (${item.style})`;
        itemList.appendChild(li);
    });
}

function filterAndSort() {
    const searchValue = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const filterTypeValue = filterTypeSelect.value;
    const styleFilterValue = styleFilterSelect.value;
    const priceLimit = Number(priceRange.value);

    let filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchValue) &&
        (filterTypeValue === 'all' || item.type === filterTypeValue) &&
        (styleFilterValue === 'all' || item.style === styleFilterValue) &&
        item.price <= priceLimit
    );

    if (sortValue === 'price') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'style') {
        filteredItems.sort((a, b) => a.style.localeCompare(b.style));
    } else {
        filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderList(filteredItems);
}

// Event listeners
searchInput.addEventListener('input', filterAndSort);
sortSelect.addEventListener('change', filterAndSort);
filterTypeSelect.addEventListener('change', filterAndSort);
styleFilterSelect.addEventListener('change', filterAndSort);
priceRange.addEventListener('input', () => {
    priceValue.textContent = `$${priceRange.value}`;
    filterAndSort();
});

// Initial render
renderList(items);

