export function loadContacts() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_CONTACTS"
      });
      fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
    };
   }
   export function contactsLoaded(contacts) {
    return {
      type: "CONTACTS_LOADED",
      value: contacts
    };
   }

   export function createContact(contact) {
    return function (dispatch) {
      fetch("/contacts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contact)
      }).then(() => dispatch(loadContacts()));
    };
   }
   
   
  //  export function createContact(contact) {
  //   return function (dispatch) {
  //     dispatch({
  //       type: "CREATE_CONTACT"
  //     });
  //     fetch("/contacts")
  //     .then( (response) => {
  //       return response.json();
  //     }).then((contacts) => {
  //       dispatch(loadContacts(contacts));
  //     });
  //   };
  //  }

   export function loadVehicles() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_VEHICLES"
      });
      fetch("/vehicles")
      .then( (response) => {
        return response.json();
      }).then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
    };
   }

   export function vehiclesLoaded(vehicles) {
    return {
      type: "VEHICLES_LOADED",
      value: vehicles
    };
   }