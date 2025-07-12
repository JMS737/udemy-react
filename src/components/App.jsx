import React from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./Header";
import Card from "./Card";
import OtherCard from "./OtherCard";

export default function App() {
  return (
    <div>
      <Header />
      <Note />
      <OtherCard
        name="Jeremy Sapsed"
        tel="07871 559336"
        img="https://picsum.photos/200"
      />
      <Card
        name="Jeremy Sapsed"
        tel="07871 559336"
        img="https://picsum.photos/200"
      />
      <Footer />
    </div>
  );
}
