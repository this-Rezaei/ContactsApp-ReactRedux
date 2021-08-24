const initialState = [
    {
        id: 0,
        name: "علی رضایی",
        email: "",
        number: 9338430259,
    },
    {
        id: 0,
        name: "امید سرایی",
        email: "",
        number: 9395468546,
    },
];

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {

      case "ADD_CONTACT":
         return [...state,action.paylod]
      break;
        default:
            return state;
            break;
    }
};
export default ContactReducer;
