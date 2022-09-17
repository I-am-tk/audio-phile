import { z } from "zod";

const phoneRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const InputWithOutPaymentMethodSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(4, "Name should be at least 4 char"),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email address"),
  address: z
    .string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string",
    })
    .min(1, "Address is required"),
  city: z
    .string({
      required_error: "City is required",
      invalid_type_error: "City must be a string",
    })
    .min(1, "City is required"),
  phoneNumber: z
    .string({
      required_error: "Phone Number is required",
      invalid_type_error: "Phone Number must be a string",
    })
    .regex(phoneRegex, "Phone Number is not valid"),
  zip: z
    .string({
      required_error: "Zip is required",
      invalid_type_error: "Zip must be a string",
    })
    .regex(/\d{6}/, "Zip is invalid"),
  country: z
    .string({
      required_error: "Zip is required",
      invalid_type_error: "Zip must be a string",
    })
    .min(3, "Country should be more than 3 char"),
});

export const inputFieldsSchema = z.discriminatedUnion("paymentMethod", [
  z
    .object({
      paymentMethod: z.literal("eMoney"),
      eMoneyNumber: z
        .string({
          required_error: "E-money Number is required",
          invalid_type_error: "E-money Number must be a number",
        })
        .regex(/\d{10}/, "E-money Number is invalid"),
      eMoneyPin: z
        .string({
          required_error: "E-money pin is required",
          invalid_type_error: "E-money pin must be a string",
        })
        .regex(/\d{4}/, "E-money Pin is invalid"),
    })
    .merge(InputWithOutPaymentMethodSchema),
  z.object({ paymentMethod: z.literal("cod") }).merge(InputWithOutPaymentMethodSchema),
]);

export type CheckoutInputFields = z.infer<typeof inputFieldsSchema>;
