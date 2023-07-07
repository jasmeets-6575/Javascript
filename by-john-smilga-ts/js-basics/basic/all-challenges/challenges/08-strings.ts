function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "jordan", firstName: "peter" }));
