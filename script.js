// script.js

const products = [
    {
        name: "Jus Jeruk",
        price: "Rp 15.000",
        description: "Jus segar dari jeruk manis dengan vitamin C tinggi.",
        image: "jeruk.jpg"
    },
    {
        name: "Jus Apel",
        price: "Rp 18.000",
        description: "Jus apel dengan rasa manis alami dan kaya akan serat.",
        image: "apel.png"
    },
    {
        name: "Jus Mangga",
        price: "Rp 20.000",
        description: "Jus mangga tropis yang lembut dan menyegarkan.",
        image: "mangga.jpg"
    }
];

function showDetail(index) {
    const product = products[index];
    const detailSection = document.getElementById('detail');
    const detailContent = document.getElementById('detail-content');
    
    detailSection.style.display = 'block';
    detailContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 200px; border-radius: 5px;">
        <h3>${product.name}</h3>
        <p><strong>Harga:</strong> ${product.price}</p>
        <p><strong>Deskripsi:</strong> ${product.description}</p>
        <button onclick="purchaseProduct('${product.name}', '${product.price}')">Beli Sekarang</button>
    `;
}

function closeDetail() {
    document.getElementById('detail').style.display = 'none';
}

function purchaseProduct(name, price) {
    alert(`Anda telah membeli ${name} seharga ${price}`);
}
