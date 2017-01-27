import fetch from 'isomorphic-fetch';

export const queryCharities = () => {
    return function (dispatch) {

        return fetch('/api/charities', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'RESET_CHARITIES',
                        charities: json.data
                    });
            });
    };
};

export const fetchCharity = (id) => {
    return function (dispatch) {

        return fetch('/api/charities/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'APPEND_CHARITIES',
                        charities: json.data
                    });
            });
    };
};
