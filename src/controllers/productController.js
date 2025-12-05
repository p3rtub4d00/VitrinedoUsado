// DADOS MOCKADOS (Banco de dados na memória)
let MOCK_DB = [
    {
        id: 1,
        title: "iPhone 13 Pro Max",
        description: "Aparelho impecável, saúde da bateria 98%. Acompanha caixa e cabo original. Nunca foi aberto para manutenção.",
        price: 4200.00,
        category: "celular",
        originType: "proprio",
        condition: "grade_a",
        imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "PlayStation 5",
        description: "Versão com leitor de disco. Acompanha 1 controle DualSense e cabos. Pouco uso.",
        price: 3100.00,
        category: "game",
        originType: "marketplace",
        condition: "novo",
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "MacBook Air M1",
        description: "Space Grey, 8GB RAM, 256GB SSD. Pequenas marcas na tampa, tela perfeita.",
        price: 3500.00,
        category: "notebook",
        originType: "consignacao",
        condition: "grade_b",
        imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80"
    }
];

exports.createProduct = (req, res) => {
    try {
        const newProduct = {
            id: MOCK_DB.length + 1,
            ...req.body,
            imageUrl: req.body.imageUrl || "https://via.placeholder.com/300x300?text=Sem+Imagem"
        };
        MOCK_DB.push(newProduct);
        res.status(201).json({ message: 'Produto anunciado com sucesso!', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar produto" });
    }
};

exports.getAllProducts = (req, res) => {
    res.status(200).json(MOCK_DB);
};

// --- NOVA FUNÇÃO: Busca por ID ---
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = MOCK_DB.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(product);
};

exports.getPendings = (req, res) => {
    res.status(200).json([]);
};
