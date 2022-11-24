let newQuote;
let quotes = ["“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
"“Learn as if you will live forever, live like you will die tomorrow.” ",
"“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
"“When you change your thoughts, remember to also change your world.”"];
let authors = ["— Albert Einstein",
"— Mahatma Gandhi",
"— Eleanor Roosevelt",
"—Norman Vincent Peale"];
class quote {
  constructor(text = "Phrase", author = "Author") {
    this.text = text;
    this.author = author;
  }}



/////
function Card(props) {

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, props.text), /*#__PURE__*/
    React.createElement("div", { id: "author" }, props.author), /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", target: "_blank", href: "twitter.com/intent/tweet" }, "Tweet"))), /*#__PURE__*/


    React.createElement("div", {
      onClick: () => props.clic(),
      id: "new-quote" }, "New Quote"))));






}

////

const ChangeQuote = () => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
};


function App() {
  var r = aleatorio(0, quotes.length - 1);
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  newQuote = new quote(quotes[r], authors[r]);
  console.log(newQuote);
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement(Card, {
      text: newQuote.text,
      author: newQuote.author,
      clic: ChangeQuote })));





}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));