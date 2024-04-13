document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registerForm');

    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            status: document.getElementById('status').value
        };

        try {
            const response = await fetch('https://sodv1202-assignment-2-backend.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error registering user');
            }

            const data = await response.json();
            displayConfirmation(data);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

function displayConfirmation(data) {
    const confirmationContainer = document.getElementById('confirmation');

    if (confirmationContainer) {
        confirmationContainer.innerHTML = `
            <h2>Confirmation Notice</h2>
            <p>ID: ${data.id}</p>
            <p>Full Name: ${data.name}</p>
            <p>Address: ${data.address}</p>
            <p>Status: ${data.status}</p>
            <p>Fee: ${data.fee}</p>
        `;
        confirmationContainer.style.display = 'block';
    } else {
        console.error('Confirmation container not found or is null');
    }
}
