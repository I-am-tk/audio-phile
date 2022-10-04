import React, { useState } from "react";
import Legend from "components/ui/Form/Legend";
import Label from "components/ui/Form/Label";
import Input from "components/ui/Form/Input";
import Button from "components/ui/Button";
import Cod from "components/Icons/Cod";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { type CheckoutInputFields, inputFieldsSchema } from "../../schema/checkout-form-field";
import CheckoutSuccefulModal from "../CheckoutSuccefulModal";
import Backdrop from "../Backdrop";
import { useRouter } from "next/router";
import axios from "axios";
import { useSWRConfig } from "swr";
import getStripe from "lib/get-stripe";
import { useCartItems } from "hooks/useCartItems";

function CheckoutForm() {
  const { cartItems: items, isLoading, isError } = useCartItems();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputFields>({
    resolver: zodResolver(inputFieldsSchema),
  });

  const onSubmit: SubmitHandler<CheckoutInputFields> = (data) => {
    // setShowSuccessMessage(true);
    redirectToCheckout();
  };

  const modalCloseHandler = () => {
    const clearCart = async () => {
      await axios.delete("/api/cart/clear");
      return [];
    };
    mutate("/api/cart", clearCart, {
      optimisticData: [],
      rollbackOnError: true,
    });
    setShowSuccessMessage(false);
    router.replace("/");
  };

  const redirectToCheckout = async () => {
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: (items ?? []).map((item) => ({
        price: item.stripeId,
        quantity: item.quantity,
      })),
    });

    const stripe = await getStripe();
    if (stripe) {
      await stripe.redirectToCheckout({
        sessionId: id,
      });
    }
  };

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
      {/* {showSuccessMessage && (
        <Backdrop onClose={modalCloseHandler}>
          <CheckoutSuccefulModal onClose={modalCloseHandler} />
        </Backdrop>
      )} */}
    </React.Fragment>
  );
}

export default CheckoutForm;
