export const initialFormJson = {
  title: "User Registration",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true
    },
    {
      name: "age",
      label: "Age",
      type: "number"
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Other"],
      required: true
    },
    {
      name: "subscribe",
      label: "Subscribe to newsletter",
      type: "checkbox"
    },
    {
      name: "customField",
      label: "Custom Field",
      type: "text",
      required: true,
      validator: (value) => value === "magic" || "Must be 'magic'"
    }
  ]
};