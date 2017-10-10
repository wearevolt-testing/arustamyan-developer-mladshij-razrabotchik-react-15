export const openModal = function (title, content) {
    console.log('OPEN_MODAL');
    return {
        type: 'OPEN_MODAL', title, content
    }
};

export const closeModal = function () {
    return {
        type: 'CLOSE_MODAL'
    }
};