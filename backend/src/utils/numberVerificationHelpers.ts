import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_SERVICE_SID ?? "";
const client = twilio(accountSid, authToken);
export const sendVerificationCodeByMsg = async (phoneNumber: string) => {
  const verification = await client.verify.v2
    .services(verifyServiceSid)
    .verifications.create({
      channel: "sms",
      to: phoneNumber,
    });
};

export const verifyPhoneNumber = async (phoneNumber: string, code: string) => {
  const verificationCheck = await client.verify.v2
    .services(verifyServiceSid)
    .verificationChecks.create({
      to: phoneNumber,
      code: code,
    });

  return {
    success: verificationCheck.status === "approved",
    status: verificationCheck.status,
  };
};
