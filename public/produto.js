const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

async function loadProduct() {
    if (!productId) {
        window.location.href = '/';
        return;
    }

    try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) throw new Error('Produto não encontrado');
        
        const product = await response.json();
        renderDetail(product);
    } catch (error) {
        document.getElementById('loading').innerText = 'Produto não encontrado.';
    }
}

function renderDetail(product) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('product-content').style.display = 'grid';

    // Preencher dados
    document.getElementById('p-img').src = product.imageUrl;
    document.getElementById('p-category').innerText = product.category;
    document.getElementById('p-title').innerText = product.title;
    document.getElementById('p-desc').innerText = product.description;
    
    // Formatar Preço
    const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);
    document.getElementById('p-price').innerText = priceFormatted;

    // Badge (Etiqueta)
    const badge = document.getElementById('p-badge');
    if (product.originType === 'marketplace') {
        badge.className = 'badge-origin badge-mkt';
        badge.innerHTML = '<i class="fa-solid fa-user"></i> Vendedor Verificado';
    } else {
        badge.className = 'badge-origin badge-proprio';
        badge.innerHTML = '<i class="fa-solid fa-certificate"></i> Garantia da Loja';
    }

    // Botão WhatsApp (Link direto para seu número)
    const phone = "5569999083361"; 
    const msg = `Olá! Vi o anúncio do *${product.title}* por ${priceFormatted} na Vitrine e tenho interesse.`;
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    
    document.getElementById('btn-buy').href = whatsappLink;
}

loadProduct();
