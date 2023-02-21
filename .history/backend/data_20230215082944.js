import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Quincy',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Khanh',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {
            // _id: '1',
            name: 'Iphone 14',
            slug: 'iphone-14',
            category: 'iphone',
            image: '/images/p1.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'iphone',
            rating: 5.0,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            // _id: '2',
            name: 'Iphone 13',
            slug: 'iphone-13',
            category: 'iphone',
            image: '/images/p2.jpg',
            price: 1100,
            countInStock: 20,
            brand: 'iphone',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: 'Iphone 12',
            slug: 'iphone-12',
            category: 'iphone',
            image: '/images/p3.jpg',
            price: 1000,
            countInStock: 30,
            brand: 'iphone',
            rating: 4.0,
            numReviews: 20,
            description: 'high quality product',
        },
        {
            // _id: '4',
            name: 'Iphone 11',
            slug: 'iphone-11',
            category: 'iphone',
            image: '/images/p4.jpg',
            price: 800,
            countInStock: 10,
            brand: 'iphone',
            rating: 5.0,
            numReviews: 12,
            description: 'high quality product',
        }
    ]
};

export default data;