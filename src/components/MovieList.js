import React from 'react'

const MovieList = (props) =>{

    return (
      <div className='row'>
        {props.movies.map((movie) => (
          <div className='col-lg-4 m-0 mb-1'key={movie.id}>
            <div className='card shadow-sm'>
              <img src={movie.imageURL} className='card-img-top' alt='Sample Movive' />
              <div className='card-body'>
                <h5 className='card-title'>{movie.name}</h5>
                <p className='card-text'>{movie.overview}</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <button type='button' onClick={(event) => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                  <h2><span className="badge badge-info" style={{ 'background': '#17A2B8' }}>{movie.rating}</span></h2>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  ) 
}

export default MovieList