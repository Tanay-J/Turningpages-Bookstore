import styles from "./Checkout.module.css";
const Addresses = () => {
  const addressData = [
    {
      name: "Tanay Joshi",
      line1: "Model Mill Square, Shukrawari Lake",
      line2: "",
      city: "Nagpur",
      state: "Maharashtra",
      pin: 444018,
    },
    {
      name: "Tanay Joshi",
      line1: "'Vinayak', Sahakar Nagar",
      line2: "",
      city: "Akola",
      state: "Maharashtra",
      pin: 444001,
    },
  ];
  return (
    <section className="mx-auto my-xs px-m">
      <p className="text-xs font-bold">Deliver to</p>
      <div className={`${styles.address_wrapper} grid card-shadow my-s p-m`}>
        {addressData.map((addrs) => (
          <div className={`${styles.address_container} my-s`}>
            <input type="radio" name="address" id="address" />
            <label className='mx-xs' htmlFor="address">
              <span className="font-bold">{addrs.name}, </span>
              {addrs.line1}, {addrs.line2} {addrs.city}, {addrs.state} -
              {addrs.pin}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};
export { Addresses };
