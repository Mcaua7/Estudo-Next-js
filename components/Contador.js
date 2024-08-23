import styles from '@/styles/Home.module.css';
import React, { useState } from 'react';



function Contador(){

    const [contador, setContador] = useState(0)

    function Incrementar(){

        return(
            <button className={styles.botaoAdicionar} onClick={() => setContador(contador + 1)} >Incrementar</button>
        )
    }
    function Decrementar(){
        
        return(
            <button className={styles.botaoTirar} onClick={() => setContador(contador  - 1)} >Decrementar</button>
        )
    };
    return(
        <>   
        <div className={styles.container} >


        {Decrementar()}
        <div className={styles.BoxContador}>
        
          <p id={styles.Frase}>Contador:</p>
          <p1 id={styles.numero}> {contador}</p1>
        </div>
        {Incrementar()}
  
        
      
        </div>
            
            
            
        </>
    )
}

export default Contador