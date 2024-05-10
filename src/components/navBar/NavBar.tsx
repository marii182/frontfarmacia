import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Navbar() {
    let navigate = useNavigate()

    let navbarComponent
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia</div>

            <div className='flex gap-4'>
            <Link to ='/home' className='hover:underline'>Home</Link>
              <Link to ='/produtos' className='hover:underline'>Produtos</Link>
              <Link to ='/categorias' className='hover:underline'>Categorias</Link>
              <Link to ='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Carrinho</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar