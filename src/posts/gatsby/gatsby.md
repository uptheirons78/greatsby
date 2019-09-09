---
title: "The Great Gatsby Post"
date: "06-09-2019"
---

This is an article about the Great Gatsby Static Site Builder

```javascript

const cities = ['ROME', 'PARIS', 'LONDON', 'LOS ANGELES', 'VIENNA'];

cities.forEach((value, index, array) => {
  console.log(`${index + 1} ${value}`); //output: 1 ROME, 2 PARIS, 3 LONDON, 4 LOS ANGELES, 5 VIENNA
});

//we can use it to invert the "cities" array...even though with reverse() would be better 😉
const invertedCities = [];
cities.forEach((value, index, array) => invertedCities.unshift(value));
console.log(invertedCities); //output: ["VIENNA", "LOS ANGELES", "LONDON", "PARIS", "ROME"]

```

![Post Thumbnail](./blogpostpic.jpg)

## Topics

1. Gatsby
2. GraphQL
3. React
