const initialState = [
    {
        id: 0,
        name: "علی رضایی",
        email: "ali.rezaei@gmail.com",
        number: 9338430259,
    },
    {
        id: 1,
        name: "امید سرایی",
        email: "omid.sarai@gmail.com",
        number: 9395468546,
    },
];

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, action.paylod];
            break;
        case "َUPDATE_CONTACT":
            const updateState = state.map((contact) =>
                contact.id === action.paylod.id ? action.paylod : contact
            );
            state = updateState;
            return state;
            break;
        case "َDELETE_CONTACT":
            const filterContact = state.filter(
                (contact) => contact.id !== action.paylod && contact
            );
            state = filterContact;
            return state;
            break;
        default:
            return state;
            break;
    }
};
export default ContactReducer;
