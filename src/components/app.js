import React, { Component } from "react";
import useFetch from "../useFetch";
import Card from "./card";

const App = () => {
  let value = useFetch("assets/data.json");
  const { loading, data } = value;
  const apps = data || [];
  let totalapps = apps.length;
  return (
    <div>
      {loading && apps.length === 0 && <h2>Loading...</h2>}
      {!loading && apps.length === 0 && <h2>Empty.</h2>}
      <Card apps={apps} totalapps={totalapps} />
    </div>
  );
};

export default App;
