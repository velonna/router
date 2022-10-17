import React,{useState,useEffect} from 'react'


function ButtonsClass(){
    const [texto,setTexto] = useState('')
    //const [titulo,setTitulo] = useState('Aceptar')
    let titulo = 'Aceptar'
    

    useEffect(
        () => {
            console.log('componentDidUpdate - hook equivalente - Solo si cambia el estado texto',texto);
    
        }, [texto]
    );   
  


    useEffect(
        () => {
            return ()=>{
                console.log('componentWillUnmount - hook equivalente');
            }
        },
        []);
  
    return(
        <>
            
            <button className="btn btn-primary" type="button" onClick={()=>setTexto('Gracias por su compra!')}>{titulo}</button>
           
            <div>
            <p> {texto}</p>
                
            </div>
        </>
    )
}

export default ButtonsClass