import React, { useState } from "react";
import Legend from "../ui/Form/Legend";
import Label from "../ui/Form/Label";
import Input from "../ui/Form/Input";
import Button from "../ui/Button";
import Cod from "../Icons/Cod";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckoutInputFields, inputFieldsSchema } from "../../schema/checkout-form-field";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CheckoutSuccefulModal from "../CheckoutSuccefulModal";
import Backdrop from "../Backdrop";
import { clearCart } from "../../store/cart-slice";
import { useRouter } from "next/router";

function CheckoutForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutInputFields>({
    resolver: zodResolver(inputFieldsSchema),
    defaultValues: {
      paymentMethod: "eMoney",
    },
  });

  const paymentMethod = watch("paymentMethod", "eMoney");

  const onSubmit: SubmitHandler<CheckoutInputFields> = (data) => {
    setShowSuccessMessage(true);
  };

  const modalCloseHandler = () => {
    dispatch(clearCart());
    setShowSuccessMessage(false);
    router.replace("/");
  };

  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <React.Fragment>
      <form className="lg:grid md:grid-cols-3 md:gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 p-6 md:p-12 pb-8 bg-white md:col-span-2">
          <h1 className="mb-8 text-[1.75rem] font-bold uppercase">Checkout</h1>
          <div>
            <fieldset className="mb-8">
              <Legend className="">billing details</Legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" error={errors.name}>
                    Name
                  </Label>
                  <Input
                    placeholder="Alexi Ward"
                    type="text"
                    id="name"
                    name="name"
                    register={register}
                    validation={{ required: true }}
                    error={errors.name}
                  />
                </div>
                <div>
                  <Label htmlFor="email" error={errors.email}>
                    Email Address
                  </Label>
                  <Input
                    placeholder="alexi@mail.com"
                    type="email"
                    id="email"
                    name="email"
                    register={register}
                    validation={{ required: true }}
                    error={errors.email}
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber" error={errors.phoneNumber}>
                    Phone Number
                  </Label>
                  <Input
                    placeholder="1234567890"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    register={register}
                    validation={{ required: true }}
                    error={errors.phoneNumber}
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className="mb-8">
              <Legend>Shipping info</Legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="address" error={errors.address}>
                    Your Address
                  </Label>
                  <Input
                    placeholder="1137 Williams Avenue"
                    type="text"
                    id="address"
                    name="address"
                    validation={{ required: true }}
                    register={register}
                    error={errors.address}
                  />
                </div>
                <div>
                  <Label htmlFor="zip" error={errors.zip}>
                    ZIP Code
                  </Label>
                  <Input
                    placeholder="10001"
                    type="text"
                    id="zip"
                    name="zip"
                    validation={{ required: true }}
                    register={register}
                    error={errors.zip}
                  />
                </div>
                <div>
                  <Label htmlFor="city" error={errors.city}>
                    City
                  </Label>
                  <Input
                    placeholder="New York"
                    type="text"
                    id="city"
                    name="city"
                    validation={{ required: true }}
                    register={register}
                    error={errors.city}
                  />
                </div>
                <div>
                  <Label htmlFor="country" error={errors.country}>
                    Country
                  </Label>
                  <Input
                    placeholder="United States"
                    type="text"
                    id="country"
                    name="country"
                    validation={{ required: true }}
                    register={register}
                    error={errors.country}
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <Legend>Payment deatils</Legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <p
                  className="text-[0.75rem]
              font-bold -mb-2 sm:mb-0"
                >
                  Payment Method
                </p>
                <div className="mb-4 grid gap-4 ">
                  <div
                    className={`${
                      paymentMethod === "eMoney" ? "border-accent" : "border-inputBorder"
                    } block border-[1px]  rounded-md`}
                  >
                    <label
                      htmlFor="eMoney"
                      className={`text-left py-4 font-bold text-[0.875rem] block grow cursor-pointer px-4 `}
                    >
                      <input
                        id="eMoney"
                        value={"eMoney"}
                        type={"radio"}
                        className="cursor-pointer mr-4"
                        {...register("paymentMethod")}
                      />
                      e-Money
                    </label>
                  </div>
                  <div
                    className={`${
                      paymentMethod === "cod" ? "border-accent" : "border-inputBorder"
                    } block border-[1px]  rounded-md`}
                  >
                    <label
                      htmlFor="cod"
                      className="text-left py-4 font-bold text-[0.875rem] block grow cursor-pointer px-4"
                    >
                      <input
                        id="cod"
                        value={"cod"}
                        type={"radio"}
                        className="cursor-pointer mr-4"
                        {...register("paymentMethod")}
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                {paymentMethod === "eMoney" && (
                  <>
                    <div>
                      <Label htmlFor="eMoneyNumber" error={errors?.eMoneyNumber}>
                        e-Money Number
                      </Label>
                      <Input
                        placeholder="2345678910"
                        type="text"
                        id="eMoneyNumber"
                        name="eMoneyNumber"
                        validation={{ required: true }}
                        register={register}
                        error={errors?.eMoneyNumber}
                      />
                    </div>
                    <div>
                      <Label htmlFor="eMoneyPin" error={errors?.eMoneyPin}>
                        e-Money PIN
                      </Label>
                      <Input
                        placeholder="6891"
                        type="text"
                        id="eMoneyPin"
                        name="eMoneyPin"
                        validation={{ required: true }}
                        register={register}
                        error={errors?.eMoneyPin}
                      />
                    </div>
                  </>
                )}
                {paymentMethod === "cod" && (
                  <div className="flex items-center gap-6 sm:col-span-2">
                    <div>
                      <Cod />
                    </div>
                    <p className="text-[0.9375rem] leading-[1.66] text-text">
                      The &apos;Cash on Delivery&apos; option enables you to pay in cash when our
                      delivery courier arrives at your residence. Just make sure your address is
                      correct so that your order will not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <div className="mt-10 p-6 md:p-12 pb-8 bg-white sticky top-10">
            <h2 className="uppercase font-bold tracking-wider text-[1.75rem] ">Summary</h2>
            {/* <p>No items in cart</p> */}
            <div className="mt-8 space-y-1">
              <dl>
                <div className="flex justify-between">
                  <dt className="text-[0.935rem] uppercase text-text">Total</dt>
                  <dd className="font-bold text-[1.125rem]">$ 40</dd>
                </div>
              </dl>
              <dl>
                <div className="flex justify-between">
                  <dt className="text-[0.935rem] uppercase text-text">Shipping</dt>
                  <dd className="font-bold text-[1.125rem]">$ 10</dd>
                </div>
              </dl>
              <dl>
                <div className="flex justify-between">
                  <dt className="text-[0.935rem] uppercase text-text">Vat (included)</dt>
                  <dd className="font-bold text-[1.125rem]">$ 80</dd>
                </div>
              </dl>
              <dl className="">
                <div className="flex justify-between mt-6">
                  <dt className="text-[0.935rem] uppercase text-text">Grand Total</dt>
                  <dd className="font-bold text-[1.125rem] text-accent">$ 130</dd>
                </div>
              </dl>
            </div>
            <Button filled primary className="w-full mt-6">
              continue &amp; pay
            </Button>
          </div>
        </div>
      </form>
      {showSuccessMessage && (
        <Backdrop onClose={modalCloseHandler}>
          <CheckoutSuccefulModal onClose={modalCloseHandler} />
        </Backdrop>
      )}
    </React.Fragment>
  );
}

export default CheckoutForm;
