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
   
   export function createVehicle(vehicle) {
    return function (dispatch) {
      fetch("/vehicles", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(vehicle)
      }).then(() => dispatch(loadVehicles()));
    };
   }


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


   export function loadProducts() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_PRODUCTS"
      });
      fetch("/products")
      .then( (response) => {
        return response.json();
      }).then((products) => {
        dispatch(productsLoaded(products));
      });
    };
   }

   export function productsLoaded(products) {
    return {
      type: "PRODUCTS_LOADED",
      value: products
    };
   }

   export function createProduct(product) {
    return function (dispatch) {
      fetch("/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
      }).then(() => dispatch(loadProducts()));
    };
   }