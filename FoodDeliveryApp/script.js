// Sample restaurant data with realistic values
const restaurants = [
    {
        name: "Taste of Tuscany",
        cuisine: "Italian, Pizza",
        rating: "4.6 ★",
        image: "https://images.unsplash.com/photo-1513106580091-1d82408b8b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Saffron Delight",
        cuisine: "Indian, North Indian",
        rating: "4.8 ★",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Burger Barn",
        cuisine: "American, Fast Food",
        rating: "4.3 ★",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Sushi Haven",
        cuisine: "Japanese, Sushi",
        rating: "4.7 ★",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Taco Fiesta",
        cuisine: "Mexican, Street Food",
        rating: "4.4 ★",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a14705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Function to render restaurant cards
function renderRestaurants() {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = '';

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');

        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="card-info">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.cuisine}</p>
                <p>${restaurant.rating}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Login Modal Functionality
const loginLink = document.getElementById('loginLink');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    console.log('Login attempt:', { email, password });
    loginModal.style.display = 'none';
    alert('Login successful!'); // Replace with actual auth logic
});

// Initial render
document.addEventListener('DOMContentLoaded', renderRestaurants);