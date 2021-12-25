import React from 'react';
import './Videolink.css'
 function Videolink() {
  const style = {
    height: "560px",
    width: "1000px",
    borderWidth: '5px', 
    }
   
   

     return (
      <div className='framebox'>
      
   <p>VIDEO SUGGESTIONS</p>
<p><iframe style={style}src="https://www.youtube.com/embed/FW_bw9jdrlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe><br/>Rice Farming: Complete Guide from Seeds to Harvest with Recent Techniques. </p>  
<br/><p><iframe style={style}src="https://www.youtube.com/embed/rp09XwFtRCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe><br/> different cropping seasons of India in which different crops are grown.  </p>  
<br/><p><iframe style={style}src="https://www.youtube.com/embed/GRY6FgWoNQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> <br/>Biofloc fish farming, How to start biofloc fish farming ,profit training   </p> 
<br/><p><iframe style={style}src="https://www.youtube.com/embed/eD_N6NssnVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  <br/>Water Management in Aqua Culture  | Vannamei Shrimp | Prawn Farming | Aqua Factory </p>  


  </div>
  )
}

export default Videolink;
