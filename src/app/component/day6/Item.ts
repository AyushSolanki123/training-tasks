export interface Item {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
}

export const items: Item[] = [
  {
    id: 1001,
    name: 'IPhone 12',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz04nnGl7wv3vFMECRXGJUAtpHA6TBv2au9evh9kTyr4O1RvuK4oiEJKWTUaHf4FCVe4&usqp=CAU',
    brand: 'Apple',
    price: 39000,
  },
  {
    id: 1002,
    name: 'Nokia 8',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeJBxYtwS2CNyLzDnogbW_YafDiv5sDCj9uJ4Q3LLgs9juM4j9nLp2GZ3u0t5wMo3AOs&usqp=CAU',
    brand: 'Nokia',
    price: 24000,
  },
  {
    id: 1003,
    name: 'Redmi Note 8',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh8a3gBoxDaH-7yPmVYIYvYaX4MBRRYt-RRH9-L6i0zPUB5_8wY7HBfpzCV5ep4AS4-c&usqp=CAU',
    brand: 'Redmi',
    price: 20000,
  },
  {
    id: 1004,
    name: 'Samsung Galaxy 10s',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46fYdfJBa7WshPXt_b7rElFdKAaJMfzDWWg&usqp=CAU',
    brand: 'Samsung',
    price: 36000,
  },
];
