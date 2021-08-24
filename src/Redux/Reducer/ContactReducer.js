const initialState = [
    {
        id: 0,
        name: "علی رضایی",
        number: 9338430259,
    },
    {
        id: 0,
        name: "امید سرایی",
        number: 9395468546,
    },
];

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
            break;
    }
};
export default ContactReducer;
