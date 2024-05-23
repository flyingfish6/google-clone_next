"use client";

import React, { useEffect, useState } from "react";

const CountryLookUp = () => {
  const [country, setCountry] = useState("China");
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.cpuntry));
  }, []);
  return <div>China</div>;
};

export default CountryLookUp;
