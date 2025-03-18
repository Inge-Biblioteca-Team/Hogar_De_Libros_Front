import emailjs from '@emailjs/browser';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  apiKey: import.meta.env.VITE_EMAILJS_API_KEY,
};

const feedbackConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID,
    apiKey: import.meta.env.VITE_EMAILJS_API_KEY,
  };

const sendEmail = async (form: HTMLFormElement) => {
  return emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form,
    emailConfig.apiKey
  );
};

const sendFeedback = async (form: HTMLFormElement) => {
    return emailjs.sendForm(
      feedbackConfig.serviceId,
      feedbackConfig.templateId,
      form,
      feedbackConfig.apiKey
    );
  };

  export {
    sendEmail,
    sendFeedback,
  };