interface Person {
  first: string;
  last: string;
  city: string;
  siblings: {
    sister: string;
  };
}

const bob: Person = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first: firstName,
  last,
  city,
  siblings: { sister: favoriteSibling },
}: Person = bob;
console.log(firstName, last, city, favoriteSibling);
