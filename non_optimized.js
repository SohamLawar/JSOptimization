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
const getCntFrmShelve = (shelve, bookName) => {
  let count = 0;
  return new Promise((resolve, reject) => {
    shelve.map(async book => {
      if (book.name === bookName) {
        count += 1;
      }
    });
    resolve(count);
  });
};
const pickBook = (shelve, bookName) => {
  return new Promise((resolve, reject) => {
    shelve.map(async (book, index) => {
      if (book.name === bookName) {
        shelve.splice(index, 1);
        resolve(true);
      }
    });
    resolve(false);
  });
};
const placeOrder = async bookName => {
  let totalCount = 0;
  let shelveId = -1;
  let isBookPicked = false;
  await Promise.all(
    shelves.map(async (shelve, index) => {
      const count = await getCntFrmShelve(shelve, bookName);
      totalCount += count;
      if (count > 0) {
        shelveId = index;
      }
    })
  );
  if (totalCount > 0) {
    isBookPicked = await pickBook(shelves[shelveId], bookName);
    if (isBookPicked) {
      console.log('Order placed successfully');
    }
  }
};
placeOrder('A Single Man');