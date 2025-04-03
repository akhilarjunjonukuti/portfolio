import { useState } from "react";
import { useTheme } from "../../context/PortfolioThemeContext";
import SectionTitle from "../SectionTitle";
import { Favorite } from "@mui/icons-material";

const textFields = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter your name",
    id: "name",
  },
  {
    label: "Email",
    type: "text",
    placeHolder: "Enter your email",
    id: "email",
  },
  {
    label: "Message",
    type: "textArea",
    placeHolder: "Enter your message",
    id: "message",
  },
];

export const Contact = () => {
  const { theme } = useTheme();
  const [alertMsg, setAlertMsg] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleButtonClick = () => {
    const { name, email, message } = contactInfo;
    if (name && email && message) {
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      const isValidEmail = emailRegex.test(email);
      if (!isValidEmail) {
        setAlertMsg("Please enter a valid email address.");
        return;
      }
      setAlertMsg("Message sent successfully!");
    } else {
      setAlertMsg("Please fill in all fields!");
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col gap-4 w-full sm:max-w-[400px] text-sm"
    >
      <SectionTitle title="CONTACT" />
      <div className="flex flex-col gap-4 w-full ">
        {textFields.map((textField) => (
          <TextField
            field={textField}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            key={textField.id}
            setAlertMsg={setAlertMsg}
          />
        ))}
        {alertMsg && (
          <p
            className={`self-center ${
              alertMsg.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {alertMsg}
          </p>
        )}
        <button
          onClick={handleButtonClick}
          className={`py-1 px-3 border-[1px] border-${theme}-primary text-${theme}-primary text-[15px] font-medium rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white`}
        >
          submit
        </button>
      </div>
      <div
        className={`flex gap-1 items-center justify-center pt-8 text-${theme}-primary `}
      >
        <p>Created with </p>
        <Favorite style={{ color: "red" }} />
      </div>
    </div>
  );
};

export const TextField = ({
  field,
  contactInfo,
  setContactInfo,
  setAlertMsg,
}: {
  field: any;
  contactInfo: any;
  setContactInfo: any;
  setAlertMsg: any;
}) => {
  const { id, type, placeHolder } = field;
  const [isFocused, setIsFocused] = useState(false);
  const inputStyle = `p-3 outline-none border  ${
    isFocused ? "border-[#0000003B]" : "border-[#0000003B]"
  } rounded-md`;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };
  return type !== "textArea" ? (
    <input
      type={type}
      value={contactInfo[id]}
      placeholder={placeHolder}
      onFocus={() => {
        setIsFocused(true);
        setAlertMsg("");
      }}
      onBlur={() => setIsFocused(false)}
      className={inputStyle}
      onChange={handleChange}
    />
  ) : (
    <textarea
      rows={5}
      placeholder={placeHolder}
      className={inputStyle}
      value={contactInfo[id]}
      onChange={handleChange}
      onFocus={() => {
        setIsFocused(true);
        setAlertMsg("");
      }}
      onBlur={() => setIsFocused(false)}
    />
  );
};
