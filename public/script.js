const grid = document.getElementById('product-grid');
let allProducts = [];

// Função principal para buscar produtos
async function fetchProducts() {
    try {
        // Chama a API que criamos no passo anterior
        const response = await fetch('/api/products');
        allProducts = await response.json();
        renderProducts(allProducts);
    } catch (error) {
        grid.innerHTML = '<p style="text-align:center; width:100%">Erro ao carregar produtos. O servidor está rodando?</p>';
        console.error(error);
    }
}

// Função que desenha os cards na tela
function renderProducts(products) {
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    products.forEach(product => {
        // Lógica das Etiquetas (Badges)
        let badgeClass = '';
        let badgeText = '';

        if (product.originType === 'proprio' || product.originType === 'consignacao') {
            badgeClass = 'badge-proprio';
            badgeText = '<i class="fa-solid fa-certificate"></i> Verificado TechReborn';
        } else {
            badgeClass = 'badge-mkt';
            badgeText = '<i class="fa-solid fa-user"></i> Marketplace';
        }

        // Formatação de Preço
        const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);

        // Tratamento da condição
        const conditionMap = {
            'novo': 'Novo (Lacrado)',
            'grade_a': 'Excelente (Grade A)',
            'grade_b': 'Muito Bom (Grade B)',
            'grade_c': 'Bom (Grade C)',
            'defeito': 'Para Peças'
        };

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="badge-origin ${badgeClass}">${badgeText}</div>
            <img src="${product.imageUrl}" alt="${product.title}" class="card-img-top">
            <div class="card-body">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${product.title}</h3>
                <span class="card-condition">${conditionMap[product.condition] || product.condition}</span>
                <div class="card-footer">
                    <span class="price">${priceFormatted}</span>
                    <button class="btn-buy">Comprar</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtros simples no Frontend
function filterProducts(type) {
    // Atualiza botões
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (type === 'todos') {
        renderProducts(allProducts);
    } else if (type === 'proprio') {
        // Mostra Próprio E Consignação (ambos são "Loja")
        const filtered = allProducts.filter(p => p.originType === 'proprio' || p.originType === 'consignacao');
        renderProducts(filtered);
    } else {
        const filtered = allProducts.filter(p => p.originType === type);
        renderProducts(filtered);
    }
}

// Inicia
fetchProducts();
