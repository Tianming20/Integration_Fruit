const item1 = {
  itemName: "Apple",
  itemNumber: 1,
  category: "Fruit"
};

const item2 = {
  itemName: "pork Rib",
  itemNumber: 2,
  category: "Meat"
};

const item3 = {
  itemName: "Banana",
  itemNumber: 3,
  category: "Fruit"
};

const item4 = {
  itemName: "Banana",
  itemNumber: 4,
  category: "Fruit"
};

const item5 = {
  itemName: "lala",
  itemNumber: 5,
  category: "vegetable"
};

const arr = [item1, item2, item3, item4, item5];

const solution = (arr) => {
  const myMap = new Map();
  arr.forEach((element) => {
    if (!myMap.has(element.category)) {
      myMap.set(element.category, [element]);
    } else {
      const newArr = myMap.get(element.category);
      myMap.set(element.category, [...newArr, element]);
    }
  });
  return myMap;
};

console.log(solution(arr));
//input: [item1, item2, item3, item4, item5];
//output:
// {Fruit: Array(3), Meat: Array(1), vegetable: Array(1)}
// Fruit: Array(3)
// 0: Object
// itemName: "Apple"
// itemNumber: 1
// category: "Fruit"
// 1: Object
// itemName: "Banana"
// itemNumber: 3
// category: "Fruit"
// 2: Object
// itemName: "Banana"
// itemNumber: 4
// category: "Fruit"
// Meat: Array(1)
// 0: Object
// itemName: "pork Rib"
// itemNumber: 2
// category: "Meat"
// vegetable: Array(1)
// 0: Object
// itemName: "lala"
// itemNumber: 5
// category: "vegetable"
