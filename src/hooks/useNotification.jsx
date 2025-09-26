import { notification } from "antd";

let apiRef = null;

export function initNotification(api) {
  apiRef = api;
}

export function openNotification(type) {
  if (!apiRef) return;

  return apiRef[type]({
    message: type === "success" ? "Success" : "Error",
    description:
      type === "success"
        ? "Your message has been sent successfully. Our representative will contact you shortly"
        : "An error occurred. Please try again later.",
  });
}
