const users = [
    { name: 'Alice', isLoggedIn: true },
    { name: 'Bob', isLoggedIn: false },
    { name: 'Charlie', isLoggedIn: true }
];

console.log(filterLoggedInUsers(users));

function filterLoggedInUsers(users) {
    return users.filter(user => user.isLoggedIn === true);
}