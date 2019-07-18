import React from 'react'




const contactFormStyle = {
  submitBtn: {
    //backgroundColor: colors.primaryBackground,
    color: "white",
    "&:hover": { backgroundColor: "#01002b" }
  },
  input: { root: { marginBottom: "20px" } },
  warning: {}
};

const FormInput = withStyles(contactFormStyle.input)(props => {
  return <Input {...props} classes={{ root: props.classes.root }} fullWidth />;
});

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  submitForm = () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      
    })
      .then(() => {
        alert("Thanks for your message!");
        this.clearForm();
      })
      .catch(() => {
        alert("Something went wrong.  Please try again later.");
      });
  };

  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <React.Fragment>
        <FormInput
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <FormInput
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <FormInput
          placeholder="Phone (optional)"
          name="phone"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <FormInput
          placeholder="Message"
          name="message"
          onChange={this.handleChange}
          value={this.state.message}
          multiline
        />

        <Button
          variant="raised"
          onClick={this.submitForm}
          className={this.props.classes.submitBtn}
        >
          Send Message
        </Button>
      </React.Fragment>
    );
  }
}

const StyledContactForm = withStyles(contactFormStyle)(ContactForm);

export const ContactInfo = props => { return;
//   return (
//     <>
//       <Typography variant="title">Contact Us</Typography>
//       <br />
//       <br />
//       <Typography variant="body1" style={{ maxWidth: "350px" }}>
//         Have a question? Send us a note and someone from the H1 team will be in
//         touch soon.
//       </Typography>

//       <br />
//       <Typography
//         variant="body2"
//         style={{ fontSize: "12px", fontWeight: "bold" }}
//       >
//         ADDRESS
//       </Typography>
//       <Typography>
//         419 Park Avenue South <br /> Suite 1407 <br /> New York, NY 10016
//       </Typography>

//       <br />
//       <Typography
//         variant="body2"
//         style={{ fontSize: "12px", fontWeight: "bold" }}
//       >
//         PHONE
//       </Typography>
//       <Typography>+1 646-535-0970</Typography>
//     </>
//   );
};

const Contact = props => { return;
//   return (
//     <Grid
//       container
//       style={{
//         backgroundColor: "white",
//         maxWidth: "1280px",
//         margin: "0px auto"
//       }}
//       id="contact"
//     >
//       <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
//         <ContactInfo />
//       </Grid>
//       <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
//         <StyledContactForm />
//       </Grid>
//     </Grid>
//   );
};

export default Contact;
