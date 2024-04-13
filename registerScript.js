document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        console.log('form submitted');
        event.preventDefault();
    
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const status = document.getElementById('status').value;
    
        console.log('ID:', id);
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Status:', status);
    
        let fee = 0;
        switch (status) {
            case 'student':
                fee = 10;
                break;
            case 'staff':
                fee = 50;
                break;
            case 'volunteer':
                fee = 0;
                break;
        }
    
        document.getElementById('confirmed-id').textContent = id;
        document.getElementById('confirmed-name').textContent = name;
        document.getElementById('confirmed-address').textContent = address;
        document.getElementById('confirmed-status').textContent = status;
        document.getElementById('confirmed-fee').textContent = fee;
    
        console.log('Confirmation Notice');
        
        document.getElementById('confirmation').style.display = 'block';
    })
})
