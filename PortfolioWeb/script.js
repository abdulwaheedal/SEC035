// Sample project data
const projects = [
    {
        name: "E-commerce Platform",
        description: "A full-featured online store",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Portfolio Website",
        description: "Personal portfolio showcase",
        image: "https://images.unsplash.com/photo-1467232004584-959866e3d7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Task Manager",
        description: "Productivity web application",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Sample skills data
const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git", "Responsive Design", "UI/UX"
];

// Function to render projects
function renderProjects() {
    const container = document.getElementById('projectContainer');
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Function to render skills
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';

    skills.forEach(skill => {
        const item = document.createElement('div');
        item.classList.add('skill-item');
        item.textContent = skill;
        container.appendChild(item);
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
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});