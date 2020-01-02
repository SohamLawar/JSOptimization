const shelves = [];
shelves.push([
  { id: 1, name: 'The Kite Runner', writer: ' Khaled Hosseini' },
  { id: 2, name: 'Number the Stars', writer: ' Lois Lowry' },
  { id: 3, name: ' Pride and Prejudice', writer: 'Jane Austen' }
]);
shelves.push([
  { id: 4, name: 'The Outsiders', writer: 'S.E. Hinton' },
  { id: 5, name: 'Little Women', writer: 'Louisa May Alcott' },
  { id: 6, name: 'The Kite Runner', writer: ' Khaled Hosseini' }
]);
shelves.push([
  { id: 7, name: 'Charlotte’s Web', writer: 'E.B. White' },
  { id: 8, name: 'Little Women', writer: 'Louisa May Alcott' },
  { id: 9, name: 'A Single Man', writer: 'Christopher Isherwood' }
]);
const getCntFrmShelve = bookName => {
  let count = 0;
  for (let i = 0; i < shelves.length; i += 1) {
    for (let j = 0; j < shelves[i].length; j += 1) {
      if (shelves[i][j].name === bookName) {
        count += 1;
      }
    }
  }
  return count;
};
const pickBook = bookName => {
  for (let i = 0; i < shelves.length; i += 1) {
    for (let j = 0; j < shelves[i].length; j += 1) {
      if (shelves[i][j].name === bookName) {
        shelves[i].splice(j, 1);
        return true;
      }
    }
  }
  return false;
};
const placeOrder = async bookName => {
  let totalCount = 0;
  let isBookPicked = false;
  totalCount = await getCntFrmShelve(bookName); 
  if (totalCount > 0) {
    isBookPicked = await pickBook(bookName);
    if (isBookPicked) {
      console.log('Order placed successfully');
    }
  }
};
placeOrder('A Single Man');