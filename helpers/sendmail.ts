"use server"

import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for 465, false for other ports
  auth: {
    user: "connect.dmssolars@gmail.com",
    pass: "kiukfumbdunyvzon",
  },
});

// send career application mail to applicant function.
export async function sendCareerMail(data : any) {
  const finalData = {
      name : data.name || "No Name",
      email : data.email || "No Email",
  }
    const info = await transporter.sendMail({
    from: 'connect.dmssolars@gmail.com',
    to: `${finalData.email}`,
    subject: `${finalData.name} thanks for applying`,
    text: `Hey there ${finalData.name} Thank you for applying. We have received your application and will get back to you soon.`, // plain‑text body
    // html: "<></>", // HTML body
  });
  console.log("Message sent:", info.messageId);
}

// send career application mail to client function.
export async function sendCareerMailToClient(data : any) {
  const finalData = {
      name : data.name || "No Name",
      email : data.email || "No Email",
      contact : data.contact || "No Contact",
      department : data.department || "No Department",
      designation : data.designation || "No Designation",
      currentDesignation : data.currentDesignation || "No Current Designation",
      currentCTC : data.currentCTC || "No Current CTC",
      expectedCTC : data.expectedCTC || "No Expected CTC",
      noticePeriod : data.noticePeriod || "No Notice Period",
      state : data.state || "No State",
      city : data.city || "No City",
      experience : data.experience || "No Experience",
      // resumeLink : data.resumeLink || "No Resume Link",
  }
    const info = await transporter.sendMail({
    from: 'connect.dmssolars@gmail.com',
    to : `connect.dmssolars@gmail.com`,
    subject: `${finalData.name} has applied for a job`,
    text: `Name: ${finalData.name}\nEmail: ${finalData.email}\nContact: ${finalData.contact}\nDepartment: ${finalData.department}\nDesignation: ${finalData.designation}\nCurrent Designation: ${finalData.currentDesignation}\nCurrent CTC: ${finalData.currentCTC}\nExpected CTC: ${finalData.expectedCTC}\nNotice Period: ${finalData.noticePeriod}\nState: ${finalData.state}\nCity: ${finalData.city}\nExperience: ${finalData.experience}`, // plain‑text body
    // html: "<></>", // HTML body
  });
  console.log("Message sent:", info.messageId);
}

// send contact mail to client function.
export async function sendContactMailToClient(data : any) {
  const finalData = {
      name : data.name || "No Name",
      email : data.email || "No Email",
      contact : data.contact || "No Contact",
      category : data.category || "No Category",
      message : data.message || "No Message",
  }
    const info = await transporter.sendMail({
    from: 'connect.dmssolars@gmail.com',
    to: `connect.dmssolars@gmail.com`,
    subject: `${finalData.name} has applied for the installation`,
    text: `Name: ${finalData.name}\nEmail: ${finalData.email}\nContact: ${finalData.contact}\nCategory: ${finalData.category}\nMessage: ${finalData.message}`, // plain‑text body
    // html: "<b>Hello world?</b>", // HTML body
  });
  console.log("Message sent:", info.messageId);
}

// send contact mail to user function.

export async function sendContactMailToUser(data : any) {
  const finalData = {
      name : data.name || "No Name",
      email : data.email || "No Email",
      contact : data.contact || "No Contact",
      category : data.category || "No Category",
      message : data.message || "No Message",
  }
    const info = await transporter.sendMail({
    from: 'connect.dmssolars@gmail.com',
    to: `${finalData.email}`,
    subject: `${finalData.name} thanks for contacting DMS Solar`,
    text: `Hey ${finalData.name}, Thank you for reaching out to DMS Solar. We have received your message regarding "${finalData.category}" and will get back to you soon. Here is a copy of your message:\n\n${finalData.message}`, // plain‑text body
    // html: "<b>Hello world?</b>", // HTML body
  });
  console.log("Message sent:", info.messageId);
}