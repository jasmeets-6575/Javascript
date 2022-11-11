// this
// points to the left of the dot

const john = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function () {
      console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
  const bob = {
    firstName: 'peter',
    lastName: 'sanders',
    fullName: function () {
      console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  john.fullName();
  bob.fullName();
  