import SHOP_DATA from './shop.data.js';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action) {
        default:
            return state;
    }
}

export default shopReducer;