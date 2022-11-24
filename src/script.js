
let newQuote
let quotes=["“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
            "“Learn as if you will live forever, live like you will die tomorrow.” ",
            "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
           "“When you change your thoughts, remember to also change your world.”"]
let authors =["— Albert Einstein",
              "— Mahatma Gandhi",
              "— Eleanor Roosevelt",
             "—Norman Vincent Peale"]
class quote{
  constructor(text = "Phrase", author="Author"){
    this.text = text
    this.author = author
  }

}

/////
function Card(props) {

    return(
        <div id="quote-box">
            <div id="text">{props.text}</div>
            <div id="author">{props.author}</div>
            <div className="buttons">
                <div >
                    <div>
                     <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet</a>
                     </div>
                </div>
                <div
                    onClick={() => props.clic()}
                    id="new-quote">
                    New Quote
                </div>
            </div>
        </div>
    )

}

////

const ChangeQuote = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}


function App() {
  var r = aleatorio(0, quotes.length - 1)
  function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
  }

  
  newQuote = new quote (quotes[r], authors[r])
  console.log(newQuote)
  return (
    <div className="App">
      <Card 
        text = {newQuote.text}
        author = {newQuote.author}
        clic = {ChangeQuote}
      
      />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));