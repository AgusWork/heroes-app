import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import getHeroById from '../../filters/getHeroById';

const Hero = () => {

  const {heroId} = useParams();

  const hero = useMemo( () =>  getHeroById(heroId), [heroId] );

  // el use memo nos permite guardar el valoe si no se modifica el id, para no volver a renderizarlo

  const navigate = useNavigate();

  const {
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance, 
    characters
  } = hero;
  
  if (!hero) {
    return <Navigate to='/' />
  }

  const imagePath = `/assets/heroes/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1)
  }
  // navigate(-1) te retorna a la pagina anterior


  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={imagePath} alt={ superhero } className="img-thumbnail"/>
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter Ego:</b> {alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
            <li className='list-group-item'><b>First appearance:</b> {first_appearance}</li>

        </ul>

        <h5 className='mt-4'>Characters</h5>
        <p>{characters}</p>

        <button 
            className='btn btn-outline-info'
            onClick={handleReturn}>
            Regresar
        </button>
      </div>
      
    </div>
  )
}

export default Hero
