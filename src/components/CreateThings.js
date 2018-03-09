import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {
        body: ""
      },
      contact: {
        name: "",
        occupation: "",
        avatar: ""
      },
      vehicle: {
        year: "",
        make: "",
        model: ""
      },
      course: {
        id: "",
        className: "",
        hours: ""
      },
      
    };
  }
  render() {
    return (
      <div>

        <div>
          <h1>Student</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createContact) {
              this.props.createContact(this.state.contact);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const contact = {name: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              studentId: <input onChange={(e) => {
                const contact = {occupation: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>

            <button>Add</button>
          </form>
        </div>

        <div>
          <h1>Add Course</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createCourse) {
              this.props.createCourse(this.state.course);
            }
          }}>
            <div>
              id: <input onChange={(e) => {
                const course = {id: e.target.value};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
              }} />
            </div>
            <div>
              courseName: <input onChange={(e) => {
                const course = {courseName: e.target.value};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
              }} />
            </div>
            <div>
              length: <input onChange={(e) => {
                const course = {length: e.target.value};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
              }} />
            </div>
            <div>
              subject: <input onChange={(e) => {
                const course = {subject: e.target.value};
                this.setState({
                  course: Object.assign(this.state.course,course)
                });
              }} />
            </div>
            <button>Add</button>
          </form>
        </div>

        <div>
          <h1>Favorite Class</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              id: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              courseName: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              length: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
     
      </div>
      
    );
  }
}
export default CreateThings;
