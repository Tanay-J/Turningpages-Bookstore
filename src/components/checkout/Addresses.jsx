import styles from "./Checkout.module.css";
const Addresses = () => {
  const addressData = [
    {
      _id: "1",
      name: "Tanay Joshi",
      line1: "Model Mill Square, Shukrawari Lake",
      line2: "",
      city: "Nagpur",
      state: "Maharashtra",
      pin: 444018,
      default: true,
    },
    {
      _id: "2",
      name: "Tanay Joshi",
      line1: "'Vinayak', Sahakar Nagar",
      line2: "",
      city: "Akola",
      state: "Maharashtra",
      pin: 444001,
      default: false,
    },
  ];
  return (
    <section className="mx-auto my-xs px-m">
      <p className="text-xs font-bold">Deliver to</p>
      <div className={`${styles.address_wrapper} grid card-shadow my-s p-m`}>
        {addressData.map((addrs) => (
          <label
            className={`${styles.address_container} my-s`}
            htmlFor={addrs._id}
            key={addrs._id}
          >
            <input
              type="radio"
              name="address"
              id={addrs._id}
              defaultChecked={addrs.default}
            />
            <span className="font-bold mx-xs">{addrs.name}, </span>
            {addrs.line1}, {addrs.line2} {addrs.city}, {addrs.state} -
            {addrs.pin}
          </label>
        ))}
      </div>
    </section>
  );
};
export { Addresses };
