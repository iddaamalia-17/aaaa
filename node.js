// Mengirim pesanan ke server menggunakan AJAX
function placeOrder() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var menu = document.getElementById("menu").value;
    var quantity = document.getElementById("quantity").value;

    var order = {
        name: name,
        email: email,
        menu: menu,
        quantity: quantity
    };

    fetch('server_endpoint_url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesanan berhasil disimpan');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
s