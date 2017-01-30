import fetch from 'isomorphic-fetch';

export const queryDonations = () => {
    return function (dispatch) {

        return fetch('/api/donations', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'RESET_DONATIONS',
                        donations: json.data
                    });
            });
    };
};

export const fetchDonation = (id) => {
    return function (dispatch) {

        return fetch('/api/donations/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'APPEND_DONATIONS',
                        donations: json.data
                    });
            });
    };
};
