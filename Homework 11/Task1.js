const printWithDilay = (text, time) => {
  setTimeout(() => {
    console.log(text);
  }, time);
};

printWithDilay('123', 5000);
