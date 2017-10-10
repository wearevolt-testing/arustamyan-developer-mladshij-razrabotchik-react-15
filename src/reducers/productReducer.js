let initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return [...state, ...action.products];

        case 'ADD_PRODUCT':
            return [...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    createdAt: action.createdAt,
                    updatedAt: action.updatedAt
                }
            ];

        case 'EDIT_PRODUCT':
            return state.map(p => {

                if (Number(p.id) === Number(action.id))
                    return Object.assign({}, p,
                        {
                            name: action.name,
                            price: action.price,
                            updatedAt: action.updatedAt
                        }
                    );

                return p;
            });

        case 'DELETE_PRODUCT':
            return state.filter(p => p.id !== action.id);

        default:
            return state;
    }
};

export default productReducer;