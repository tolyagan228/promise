// Завдання 1
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
// Завдання 2

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};

console.log("--- Початковий список ---");
console.table(users);

toggleUserState(users, "Mango").then((updatedUsers) => {
  console.log("\n--- Після зміни Mango ---");
  console.table(updatedUsers);
});

toggleUserState(users, "Lux").then((updatedUsers) => {
  console.log("\n--- Після зміни Lux ---");
  console.table(updatedUsers);
});
