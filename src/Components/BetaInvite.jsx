import React from "react";
import "./styles/BetaInvite.scss";
import Arrow from "./Btn_arrow";
import Rainbow from "./Rainbow";

function BetaInvite() {
  return (
    <div className='beta_invite'>
      <Rainbow />
      <h1>We’re in beta. Get your invite today!</h1>
      <Arrow BtnTheme='light' btnTitle='GET AN INVITE' />
    </div>
  );
}

export default BetaInvite;
