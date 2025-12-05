document.getElementById('sellForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = document.querySelector('.btn-submit');
    const originalText = btn.innerText;
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    // Coleta os dados do formulário
    const productData = {
        title: document.getElementById('title').value,
        price: parseFloat(document.getElementById('price').value),
        category: document.getElementById('category').value,
        condition: document.getElementById('condition').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageUrl').value,
        originType: 'marketplace' // Força ser marketplace
    };

    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (response.ok) {
            alert('Anúncio criado com sucesso!');
            window.location.href = '/'; // Volta para a home para ver o produto
        } else {
            alert('Erro ao criar anúncio.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão com o servidor.');
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
});
