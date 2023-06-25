const counter = {
    count: 0,
    increment() {
      console.log(this);
      this.count++;
      console.log(this.count);
    },
  };
  
  const btn = document.querySelector('.increment');
  
  // fail
  // btn.addEventListener('click', counter.increment);
  
  // some edge cases
  // btn.addEventListener('click', counter.increment.bind(counter));
  
  const increment = counter.increment.bind(counter);
  btn.addEventListener('click', increment);
  btn.removeEventListener('click', increment);
  