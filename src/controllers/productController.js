// DADOS MOCKADOS (Falsos para teste visual)
const MOCK_DB = [
    {
        id: 1,
        title: "iPhone 13 Pro Max 128GB",
        description: "Aparelho impecável, saúde da bateria 98%.",
        price: 4200.00,
        category: "celular",
        originType: "proprio", // Vai aparecer VERDE (Verificado)
        condition: "grade_a",
        imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "PlayStation 5 (Leitor de Disco)",
        description: "Comprado há 3 meses, com caixa e nota.",
        price: 3100.00,
        category: "game",
        originType: "marketplace", // Vai aparecer LARANJA (Marketplace)
        condition: "novo",
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "MacBook Air M1",
        description: "Algumas marcas de uso na tampa, tela perfeita.",
        price: 3500.00,
        category: "notebook",
        originType: "consignacao", // Vai aparecer VERDE
        condition: "grade_b",
        imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Nintendo Switch OLED",
        description: "Acompanha Zelda e Mario Kart.",
        price: 1800.00,
        category: "game",
        originType: "marketplace", // Vai aparecer LARANJA
        condition: "grade_a",
        imageUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Samsung S23 Ultra",
        description: "Trincado no canto traseiro, funciona tudo.",
        price: 2500.00,
        category: "celular",
        originType: "marketplace",
        condition: "grade_c",
        imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Fone Sony WH-1000XM4",
        description: "Cancelamento de ruído perfeito.",
        price: 1100.00,
        category: "acessorio",
        originType: "proprio",
        condition: "grade_a",
        imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    }
];

exports.createProduct = (req, res) => {
    // Simula a criação
    res.status(201).json({ message: 'Produto criado (Simulação)!', product: req.body });
};

exports.getAllProducts = (req, res) => {
    // Retorna a lista falsa acima
    res.status(200).json(MOCK_DB);
};

exports.getPendings = (req, res) => {
    res.status(200).json([]);
};
