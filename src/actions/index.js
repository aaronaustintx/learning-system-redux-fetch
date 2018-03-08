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

   export function loadComments() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_COMMENTS"
      });
      fetch("/comments")
      .then( (response) => {
        return response.json();
      }).then((comments) => {
        dispatch(commentsLoaded(comments));
      });
    };
   }

   export function commentsLoaded(comments) {
    return {
      type: "COMMENTS_LOADED",
      value: comments
    };
   }

   export function createComment(comment) {
    return function (dispatch) {
      fetch("/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
      }).then(() => dispatch(loadComments()));
    };
   }

   //courses
   export function createCourse(course) {
    return function (dispatch) {
      fetch("/courses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(course)
      }).then(() => dispatch(loadCourses()));
    };
   }


   export function loadCourses() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_COURSES"
      });
      fetch("/courses")
      .then( (response) => {
        return response.json();
      }).then((courses) => {
        dispatch(coursesLoaded(courses));
      });
    };
   }

   export function coursesLoaded(courses) {
    return {
      type: "COURSES_LOADED",
      value: courses
    };
   }

   export function setSpecialText(txt){
    return {
      type:"SET_SPECIAL_TEXT",
      value:txt
    }
  }
  export function setSearchText(txt) {
    return {
      type:"SET_SEARCH_TEXT",
      value:txt
    }
  }

  // new search
  export function loadMyCourseList() {
    return function (dispatch) {
      dispatch({
        type: "LOAD_MY_COURSE_LIST"
      });
      fetch("/courses")
      .then( (response) => {
        return response.json();
      }).then((courses) => {
        // console.log("loaded");
        dispatch(myCourseListLoaded(courses));
      });
    };
   }
   export function myCourseListLoaded(courses) {
    return {
      type: "MY_COURSES_LIST_LOADED",
      value: courses
    };
   }

   export function loadSearch(searchText) {
    return function (dispatch) {
      dispatch({
        type: "LOAD_SEARCH"
      });
      // no fetch - filter courses
      fetch("/courses")
      .then( (response) => {
        return response.json();
      }).then((courses) => {
        dispatch(searchLoadedCourses(courses));
      });
    };
   }
   export function searchLoadedCourses(courses) {
    return {
      type: "SEARCH_RESULTS_LOADED",
      value: courses.results
    };
   }

   export function saveMyCourse(course) {
    return function (dispatch) {
      fetch("/courses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(course)
      }).then(() => dispatch(loadMyCourseList()));
    };
   }
   export function removeMyCourse(id) {
    return (dispatch) => {
      console.log(id);
      fetch("/course/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify()
      }).then(() => dispatch(loadMyCourseList()));
    };
   }