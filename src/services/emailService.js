import emailjs from "@emailjs/browser";

export async function sendEmail(
  templateId,
  data,
  onSuccess,
  onError,
  onFinally = null
) {
  await emailjs
    .send(import.meta.env.VITE_SERVICE_ID, templateId, data, {
      publicKey: import.meta.env.VITE_SERVICE_PUBLIC_KEY,
    })
    .then(() => onSuccess())
    .catch(() => onError)
    .finally(() => {
      if (onFinally) onFinally();
    });
}
