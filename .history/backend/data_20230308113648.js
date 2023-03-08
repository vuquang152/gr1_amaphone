import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Quincy',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456@'),
          isAdmin: true,
        },
        {
          name: 'Khanh',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456@'),
          isAdmin: false,
        },
      ],
    products: [
        {
            name: 'Iphone 14 promax',
            slug: 'iphone-14promax',
            category: 'iphone',
            image: '/images/iphone-14-promax.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'apple',
            rating: 5.0,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Iphone 14 pro',
            slug: 'iphone-14pro',
            category: 'iphone',
            image: '/images/iphone-14-pro.jpg',
            price: 1100,
            countInStock: 0,
            brand: 'apple',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Iphone 14',
            slug: 'iphone-14',
            category: 'iphone',
            image: '/images/iphone-14.jpg',
            price: 1000,
            countInStock: 30,
            brand: 'apple',
            rating: 4.0,
            numReviews: 20,
            description: 'high quality product',
        },
        {
            name: 'iphone 13 promax',
            slug: 'iphone-13promax',
            category: 'iphone',
            image: '/images/iphone-13-promax.jpg',
            price: 800,
            countInStock: 10,
            brand: 'apple',
            rating: 5.0,
            numReviews: 12,
            description: '6.7" Super Retina XDR display, A15 Bionic chip, 5G connectivity, Pro camera system, and Ceramic Shield front cover.',
        },
        {
            name: 'iphone 13 pro',
            slug: 'iphone-13pro',
            category: 'iphone',
            image: '/images/iphone-13-pro.jpg',
            price: 700,
            countInStock: 10,
            brand: 'apple',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'iphone 13',
            slug: 'iphone-13',
            category: 'iphone',
            image: '/images/iphone-13.jpg',
            price: 700,
            countInStock: 10,
            brand: 'apple',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'iphone 12 promax',
            slug: 'iphone-12promax',
            category: 'iphone',
            image: '/images/iphone-12-promax.jpg',
            price: 700,
            countInStock: 10,
            brand: 'apple',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'iphone 12 pro',
            slug: 'iphone-12pro',
            category: 'iphone',
            image: '/images/iphone-12-pro.jpg',
            price: 600,
            countInStock: 10,
            brand: 'apple',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'iphone 12',
            slug: 'iphone-12',
            category: 'iphone',
            image: '/images/iphone-12.jpg',
            price: 500,
            countInStock: 10,
            brand: 'apple',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Samsung Galaxy S23',
            slug: 'samsung-galaxy-s23',
            category: 'samsung',
            image: '/images/samsung-galaxy-s23.jpg',
            price: 1100,
            countInStock: 10,
            brand: 'samsung',
            rating: 5.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Samsung Galaxy a23',
            slug: 'samsung-galaxy-a23',
            category: 'samsung',
            image: '/images/samsung-galaxy-a23.jpg',
            price: 1000,
            countInStock: 10,
            brand: 'samsung',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Samsung Galaxy S22',
            slug: 'samsung-galaxy-s22',
            category: 'samsung',
            image: '/images/samsung-galaxy-s22.jpg',
            price: 900,
            countInStock: 10,
            brand: 'samsung',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Xiaomi redmi note 11 pro',
            slug: 'xiaomi-redmi-note-11pro',
            category: 'xiaomi',
            image: '/images/Xiaomi-redmi-note-11.jpeg',
            price: 500,
            countInStock: 10,
            brand: 'xiaomi',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Xiaomi 11 lite',
            slug: 'xiaomi-11-lite',
            category: 'xiaomi',
            image: '/images/xiaomi-11-lite.jpg',
            price: 450,
            countInStock: 10,
            brand: 'xiaomi',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Xiaomi 11T',
            slug: 'xiaomi-11t',
            category: 'xiaomi',
            image: '/images/xiaomi-11t.jpg',
            price: 450,
            countInStock: 10,
            brand: 'xiaomi',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Xiaomi 12',
            slug: 'xiaomi-12',
            category: 'xiaomi',
            image: '/images/xiaomi-12.jpg',
            price: 450,
            countInStock: 10,
            brand: 'xiaomi',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Xiaomi 12T',
            slug: 'xiaomi-12t',
            category: 'xiaomi',
            image: '/images/xiaomi-12t.jpg',
            price: 450,
            countInStock: 10,
            brand: 'xiaomi',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Oppo reno8 T',
            slug: 'oppo-reno8-t',
            category: 'oppo',
            image: '/images/oppo-reno8t.jpg',
            price: 550,
            countInStock: 10,
            brand: 'oppo',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Oppo reno8 pro',
            slug: 'oppo-reno8-pro',
            category: 'oppo',
            image: '/images/oppo-reno8-pro.jpg',
            price: 550,
            countInStock: 10,
            brand: 'oppo',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Oppo reno7 z',
            slug: 'oppo-reno7-z',
            category: 'oppo',
            image: '/images/oppo-reno7-z.jpg',
            price: 400,
            countInStock: 10,
            brand: 'oppo',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'sony xperia 2',
            slug: 'sony-xperia-2',
            category: 'sony',
            image: '/images/sony-xperia-2.jpg',
            price: 1050,
            countInStock: 10,
            brand: 'sony',
            rating: 5.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'sony xperia 10',
            slug: 'sony-xperia-10',
            category: 'sony',
            image: '/images/sony-xperia-10.jpg',
            price: 950,
            countInStock: 10,
            brand: 'sony',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Bphone A40',
            slug: 'bphone-a40',
            category: 'bphone',
            image: '/images/bphone-a40.jpg',
            price: 250,
            countInStock: 10,
            brand: 'bphone',
            rating: 3.0,
            numReviews: 12,
            description: 'immediate quality product',
        },
        {
            name: 'Bphone A50',
            slug: 'bphone-a50',
            category: 'bphone',
            image: '/images/bphone-a50.jpg',
            price: 350,
            countInStock: 10,
            brand: 'bphone',
            rating: 3.5,
            numReviews: 12,
            description: 'immediate quality product',
        }
    ]
};

export default data;