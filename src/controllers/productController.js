// DADOS MOCKADOS (Agora usando 'let' para podermos adicionar itens)
let MOCK_DB = [
    {
        id: 1,
        title: "iPhone 13 Pro Max",
        description: "Bateria 98%, impecável.",
        price: 4200.00,
        category: "celular",
        originType: "proprio",
        condition: "grade_a",
        imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "PlayStation 5",
        description: "Com leitor de disco e 1 controle.",
        price: 3100.00,
        category: "game",
        originType: "marketplace",
        condition: "novo",
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80"
    }
];

exports.createProduct = (req, res) => {
    try {
        const newProduct = {
            id: MOCK_DB.length + 1, // Gera um ID simples
            ...req.body,
            // Se não mandar imagem, usa uma padrão
            imageUrl: req.body.imageUrl || "https://via.placeholder.com/300x300?text=Sem+Imagem"
        };

        // Adiciona na lista em memória
        MOCK_DB.push(newProduct);

        res.status(201).json({ message: 'Produto anunciado com sucesso!', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar produto" });
    }
};

exports.getAllProducts = (req, res) => {
    // Retorna a lista atualizada (os novos aparecerão aqui!)
    res.status(200).json(MOCK_DB);
};

exports.getPendings = (req, res) => {
    res.status(200).json([]);
};
