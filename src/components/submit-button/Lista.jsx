import React from "react";

function Lista(props){
  return (
    <div>
      <ul class="cabecalho">
        <a href=""><strong>{props.texto1}</strong></a>
        <a href=""><strong>{props.texto2}</strong></a>
        <a href=""><strong>{props.texto3}</strong></a>
        <a href=""><strong>{props.texto4}</strong></a>
        <a href=""><strong>{props.texto5}</strong></a>
        <a href=""><strong>{props.texto6}</strong></a>
      </ul>
    </div>
  );
};

export default Lista;