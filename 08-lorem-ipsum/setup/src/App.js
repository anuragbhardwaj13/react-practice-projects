import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < 1) {
      const arr = ["Error Please Enter Valid Number"];
      setText(arr);
    } else {
      fetch(`https://hipsum.co/api/?type=hipster-centric&paras=${count}`)
        .then((response) => response.json())
        .then((result) => setText(result));
    }
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsium ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
