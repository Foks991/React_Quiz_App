export const setSelectedTestToStorage = (selectedTest) => sessionStorage.setItem('selectedTest', selectedTest);
export const setUserToStorage = (user) => sessionStorage.setItem('user', JSON.stringify(user));
export const setIsAuthToStorage = () => sessionStorage.setItem('isAuth', 'true');

export const getIsAuthFromStorage = () => sessionStorage.getItem('isAuth');
