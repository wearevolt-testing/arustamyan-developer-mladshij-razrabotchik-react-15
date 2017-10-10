let initialState = [];

const customerReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'LOAD_CUSTOMERS':
            return [...state, ...action.customers];

        case 'ADD_CUSTOMER':
            return [...state, {
                id: action.id,
                name: action.name,
                address: action.address,
                phone: action.phone,
                createdAt: action.createdAt,
                updatedAt: action.updatedAt
            }];

        case 'EDIT_CUSTOMER':
            return state.map(c => {

                if (Number(c.id) === Number(action.id))
                    return Object.assign({}, c,
                        {
                            name: action.name,
                            phone: action.phone,
                            address: action.address,
                            updatedAt: action.updatedAt
                        }
                    );

                return c;
            });

        case 'DELETE_CUSTOMER':
            return state.filter(c => c.id !== action.id);

        default:
            return state;
    }
};

export default customerReducer;

