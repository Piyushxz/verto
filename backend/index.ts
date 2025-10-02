import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { id: 2, name: "Smart Watch", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300" },
    { id: 4, name: "Gaming Mouse", price: 49.99, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300" },
    { id: 5, name: "Mechanical Keyboard", price: 129.99, imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300" },
    { id: 6, name: "USB-C Hub", price: 39.99, imageUrl: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300" },
    { id: 7, name: "Phone Case", price: 24.99, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" },
    { id: 8, name: "Laptop Stand", price: 59.99, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300" }
]

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.post('/api/orders', (req, res) => {
    const { items } = req.body
    
    if (!items) {
         res.status(400).json({ error: 'Items is required ' })
         return
    }
    
    console.log('New Order Received', {
        items: items
    })
    
    let total = 0
    let orderedProducts : any =[]
    items.forEach((item:any) => {
        const product = products.find(p => p.id === item.productId)
        if (product) {
            total += product.price * item.quantity
            orderedProducts.push(product)
        }
    })
    console.log('Order Total ' + total)
    
    res.status(200).json({ 
        success: true, 
        message: 'Order processed successfully',
        total,
        items:orderedProducts,
        orderId: Date.now() 
    })
})

app.listen(5000, () => {
    console.log('Server Live on port 5000')
})