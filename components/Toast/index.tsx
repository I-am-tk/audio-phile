import React from "react";
import Toast from "../ui/Toast";
import { useSelector, useDispatch } from "react-redux";
function ToastSection() {
  const toastItems = useSelector((state) => state.toast.toastItems);
  if (toastItems.length === 0) return null;
  return (
    <section id="toast" className="fixed top-0 py-4 px-4 space-y-2 z-[100]">
      {toastItems.map((item, idx) => (
        <Toast key={idx} text={item} />
      ))}
    </section>
  );
}

export default ToastSection;
