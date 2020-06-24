export const setSelectedTestToStorage = (selectedTest) => sessionStorage.setItem('selectedTest', selectedTest);
export const getSelectedTestFromStorage = () => sessionStorage.getItem('selectedTest');

export const setUserToStorage = (user) => sessionStorage.setItem('user', JSON.stringify(user));
export const getUserFromStorage = () =>  JSON.parse(sessionStorage.getItem('user'));