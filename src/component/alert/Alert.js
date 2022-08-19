import React , {useRef}from 'react'
import "./Alert.css"
function Alert() {
    

    const ref=useRef("")
    const refparent=useRef("")
    // Get all elements with class="closebtn"
    // close.style.display = "block";
    var close = ref.current
    var i;
    
    
    // Loop through all close buttons
    for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = refparent.current;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


  return (
    <div>
      <div className="alert" ref={refparent}>
  <span className="closebtn" ref={ref} onClick={refparent.style.display='none'}>&times;</span>
  This is an alert box.
</div>
    </div>
  )
}

export default Alert
