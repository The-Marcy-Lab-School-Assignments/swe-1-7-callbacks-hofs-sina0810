const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (callback(value) ){
        return ture
  } else {
    return false
  }
}
};

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort(sortingCallback());
};

const logEachName = (names, i, arr) => {
   names.forEach(
    console.log(names,i,arr))

const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
