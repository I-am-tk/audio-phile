import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SuccessPage() {
  const [time, setTime] = useState(10);
  const router = useRouter();
  useEffect(() => {
    if (time <= 0) {
      router.push("/");
    }
    const timer = setInterval(() => {
      setTime((p) => p - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, router]);
  return (
    <div className="px-4 text-center max-w-lg w-3/4 mx-auto bg-gray py-20 mt-6">
      <h2 className="font-bold text-text text-xl md:text-2xl">Thank you for your order</h2>
      <p className="mt-2 text-text">You will be re-directed to home page after {time}sec</p>
    </div>
  );
}

export default SuccessPage;
