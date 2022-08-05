import React from 'react'
import styled from "styled-components"
import logo from "../logo.png"
const Title1 = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
padding-left:50px;

`;
const Title14 = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
flex-direction:row
margin-top:90px;
`;
const P = styled.p`
padding-bottom:90px;


`;

const TItle = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
flex-direction:row;

`;
const Title12 = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
text-align:center;
flex-direction:column;
`;
const Sidelink = styled.li`
color:black;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

margin-right:250px;
height:5px;

text-decoration:none;
list-type:none;
`;
const HR = styled.hr`
margin-top:10px;

width:100px;
`;
function Footer() {
  return (<>
     <footer>
    <div class="content">
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">EShop</li>
          <li class="link_name" > <a href="#">Our Story</a></li>
          <li class="link_name" ><a href="#">Our Products</a></li>
          <li class="link_name" ><a href="#">Opportunities</a></li>
          <li class="link_name" ><a href="#">Contact us</a></li>
        </ul>
        
        <ul class="box">
          <li class="link_name">Contcat with us</li>
          <li>info@le-pre.com</li>
          <li>@le-pre.lb </li>
          <HR/>
          <li>Subscrib to our newsletter</li>
          <TItle>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li></TItle>
        </ul>
        
        <ul class="box input-box">
          <li >Lebanon offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          
          <HR/>
          <li >Dubai offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <HR/>
          <li >Dubai offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <HR/>
        </ul>
      </div>
    </div>
   <div className='j'>
        
          <img  src={logo}/>
       
        
       
        
    <div className='li'>
          <p>terms and condition | </p>
          <p>terms and condition | </p>
          <p>terms and condition</p></div>
    <div className='li'>
          <p>terms and condition|</p>
          <p>terms and condition|</p>
          <p>terms and condition</p></div>
      </div>  
       
    
  </footer>
     </>
    
  )
}

export default Footer