let initialState = {isOpen: false, title: 'Title', content: null};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return Object.assign({}, state,
                {
                    isOpen: true,
                    title: action.title,
                    content: action.content
                }
            );

        case 'CLOSE_MODAL':
            return Object.assign({}, state, {isOpen: false});

        default:
            return state;
    }
};

export default modalReducer;