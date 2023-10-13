import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Address,
  Contact_H2,
  Contact_p,
  Email_Send,
  Get_in_Touch,
} from "@/constants/Constants";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string().required("Company/Organization is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,320}$/,
      "Invalid email format"
    )
    .min(5, "Email must be at least 5 characters")
    .max(230, "Email must not exceed 230 characters")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

function Contactpage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const emailjsParams = {
          service_id: "service_gi7wob8",
          template_id: "template_malxyyp",
          user_id: "TjsPySruVhn5xaxn6",
          template_params: {
            first_name: values.firstName,
            last_name: values.lastName,
            company_name: values.company,
            email: values.email,
            phone: values.phone,
            message: values.message,
            reply_to: values.email,
            from_email: Email_Send,
          },
        };

        const response = await emailjs.send(
          emailjsParams.service_id,
          emailjsParams.template_id,
          emailjsParams.template_params,
          emailjsParams.user_id
        );

        if (response.status === 200) {
          // Handle success
          console.log("Email sent successfully");
          toast.success(/* ... */);
        } else {
          // Handle error
          console.error("Error sending email");
          toast.error(/* ... */);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        resetForm();
        setSubmitting(false);
      }
      if (Object.keys(formik.errors).length === 0) {
        console.log("Form values:", values);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        resetForm();
        setSubmitting(false);

        const successMessage = "Thank you!";
        const additionalMessage = "We will contact you soon.";

        // Combine messages into a single string
        const combinedMessage = `${successMessage}\n${additionalMessage}`;

        // Show toast message
        toast.success(
          <>
            <div
              style={{ color: "#06D889", fontSize: "18px", fontWeight: "800" }}
            >
              {successMessage}
            </div>
            <div style={{ color: "#ffffff", fontSize: "13px" }}>
              {additionalMessage}
            </div>
          </>,
          {
            position: "top-center",
            autoClose: 3000, // Close the toast after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    },
  });
  return (
    <>
      <Breadcrumb
        pageList="Contact Us"
        title="Talk to Us & Get The Services​"
        pageName="CONTACT US"
      />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>{Get_in_Touch}</span>
                <h2>{Contact_H2}</h2>
                <p>{Contact_p}</p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>{Address}</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:03232788259">+92(323-2788259)</a>
                      <a href="tel:00442032865975">+44(20 3286 5975)​</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: info@esparkconnect.com​">
                        info@esparkconnect.com​​
                      </a>
                      <a href="mailto: support@esparkconnect.com​">
                        support@esparkconnect.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a
                          href="https://www.facebook.com/espark.connect"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/esparkconnect/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/espark-connect/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Make a Free Consulting</h5>
                </div>
                <div className="contact-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>first name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.firstName &&
                            !formik.values.firstName && (
                              <div style={{ color: "red" }}>
                                {formik.errors.firstName}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Last name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.lastName &&
                            !formik.values.lastName && (
                              <div style={{ color: "red" }}>
                                {formik.errors.lastName}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Company/Organization *</label>
                          <input
                            type="text"
                            name="company"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.company && !formik.values.company && (
                            <div style={{ color: "red" }}>
                              {formik.errors.company}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <div style={{ color: "red" }}>
                              {formik.errors.email}
                              {formik.errors.email ===
                                "Invalid email format" && (
                                <>
                                  <br />
                                  <span style={{ color: "red" }}>
                                    Your email should match the format
                                    user@example.com.
                                  </span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone *</label>
                          <input
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                              formik.setFieldValue("phone", numericValue);
                            }}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.phone && !formik.values.phone && (
                            <div style={{ color: "red" }}>
                              {formik.errors.phone}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message *</label>
                          <textarea
                            defaultValue={""}
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.message && !formik.values.message && (
                            <div style={{ color: "red" }}>
                              {formik.errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            {" "}
                            Submit
                          </button>
                        </div>
                      </div>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
