import {Link} from 'react-router-dom';

const HeroCard = ({
    id ,
    superhero ,
    publisher ,
    alter_ego ,
    first_appearance ,
    characters ,
}) => {

  const imagePath= `/assets/heroes/${id}.jpg`
  return (
    <div className="col" style={{marginBottom:"20px"}}>
      <div className="card" style={{width:"250px"}}>
          <div className="row no-gutters">
            <div className="col-12">
              <img src={imagePath} className="card-img" alt={superhero} />
            </div>

            <div className="col-12">
              <div className="card-body" style={{width: "100%", height:"10rem"}}>
                <h5 className="card-title">{superhero}</h5>
                {/* <p className="card-text">{alter_ego}</p>

                {
                  (alter_ego !== characters) && 
                    <p className="text-muted">{characters}</p>
                } */}
                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                  Mas informacion...
                </Link>

                </div>
            </div>


          </div>
      </div>
    </div>
    
  )
}

export default HeroCard
