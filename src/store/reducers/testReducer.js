const initialState = {
    testIni: 777
};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BLA':
            return {
                testIni: state.testIni + 111
            }
        default: return {
            state
        }
    }
};