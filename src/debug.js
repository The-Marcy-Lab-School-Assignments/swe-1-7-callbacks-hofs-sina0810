const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (callback(value)){
        
    }
  }
  return true
  };

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort((a,b) => sortingCallback(a-b));
};

const logEachName = (names, i, arr) => {
   names.forEach(
    console.log(names,i,arr))
   }
const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
