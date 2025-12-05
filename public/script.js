const grid = document.getElementById('product-grid');
let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        allProducts = await response.json();
        renderProducts(allProducts);
    } catch (error) {
        grid.innerHTML = '<p style="text-align:center; width:100%">Carregando...</p>';
        console.error(error);
    }
}

function renderProducts(products) {
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    products.forEach(product => {
        // Badges
        let badgeClass = '';
        let badgeText = '';

        if (product.originType === 'proprio' || product.originType === 'consignacao') {
            badgeClass = 'badge-proprio';
            badgeText = '<i class="fa-solid fa-certificate"></i> TechReborn';
        } else {
            badgeClass = 'badge-mkt';
            badgeText = '<i class="fa-solid fa-user"></i> Marketplace';
        }

        const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);
        
        const conditionMap = {
            'novo': 'Novo (Lacrado)',
            'grade_a': 'Excelente (Grade A)',
            'grade_b': 'Muito Bom (Grade B)',
            'grade_c': 'Bom (Grade C)',
            'defeito': 'Para Peças'
        };

        const card = document.createElement('div');
        card.className = 'card';
        // AQUI MUDOU: O botão "Ver Detalhes" agora é um link <a>
        card.innerHTML = `
            <div class="badge-origin ${badgeClass}">${badgeText}</div>
            <img src="${product.imageUrl}" alt="${product.title}" class="card-img-top">
            <div class="card-body">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${product.title}</h3>
                <span class="card-condition">${conditionMap[product.condition] || product.condition}</span>
                <div class="card-footer">
                    <span class="price">${priceFormatted}</span>
                    <a href="produto.html?id=${product.id}" class="btn-buy">Ver Detalhes</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProducts(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (type === 'todos') {
        renderProducts(allProducts);
    } else if (type === 'proprio') {
        const filtered = allProducts.filter(p => p.originType === 'proprio' || p.originType === 'consignacao');
        renderProducts(filtered);
    } else {
        const filtered = allProducts.filter(p => p.originType === type);
        renderProducts(filtered);
    }
}

fetchProducts();
