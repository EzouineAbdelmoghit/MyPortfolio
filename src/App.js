import Header from './Header';
import Main from './Main';
import './App.css';
// import { useRef } from 'react';

document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector(".content");

  // Add scroll event listener now that the DOM is ready
  window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 300) {
      content.classList.remove("Animation");
    } else {
      content.classList.add("Animation");
    }
  });
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
