import { useSectionInView } from "../../lib/hooks";
import { SectionHeading, SubmitButton } from "components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FormValues } from "types/form";

const EMAIL_SEND_TO = process.env.NEXT_PUBLIC_EMAIL as string;
const sendEmailToViaClient = "mailto:" + EMAIL_SEND_TO;

export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [values, setValues] = useState<FormValues>();
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues({ ...values!, [event.target.name]: event.target.value });
  };
  const toastError = () => toast.error("Submission Failed");
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          message: values?.message,
          senderEmail: values?.senderEmail,
        }),
      });
      const data = await response.json();

      if (!data.error) {
        toast.success("Email sent successfully!");
      } else {
        /* eslint-disable no-console */
        console.error(
          `Failed to send email. Error - ${response.status}: ${response.statusText}`,
        );
        toastError();
      }
    } catch (error) {
      console.error(`Error (likely due to network issue): ${error}`);
      toastError();
    }
    /* eslint-enable no-console */
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={sendEmailToViaClient}>
          {EMAIL_SEND_TO}
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
          maxLength={500}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          onChange={handleChange}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};
