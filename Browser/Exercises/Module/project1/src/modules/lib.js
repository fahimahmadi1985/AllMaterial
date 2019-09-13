export function add(x, y) {
  return x + y;
}

export class User {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  eating() {
    console.log("I am eating.");
  }
}
