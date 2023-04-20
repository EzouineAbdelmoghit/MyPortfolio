import Header from './Header';
import Main from './Main';
import './App.css';
const content= document.querySelector(".content");

window.addEventListener("scroll", function(){
  let scrollPosition = window.pageYOffset;
  console.log(scrollPosition)
  if(scrollPosition===300){
      content.classList.remove("Animation");
  }
  else if(scrollPosition<300){
      content.classList.add("Animation");
  }
});


function App() {
  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
