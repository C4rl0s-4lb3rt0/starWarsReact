import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPeople, favoriteItemSlice , } from './store/slices/starWars';

export const FavoritePage = () => {
    
        const dispatch = useDispatch();

        const { page, starPeople, isLoading   } = useSelector( state => state.peopleStarWars ) 
    
        
        const favoriteItem = ( url , favorite )=>{
    
           
        }
    
    
        useEffect (() => {
            let localPage = localStorage.getItem('page')
            console.log('!!localPage');
            console.log(localPage);
            // let auxNum = parseInt(localPage)
            (!localPage) ? dispatch( getPeople(   ) ) : dispatch( getPeople( localPage  ) )
        //   dispatch( getPeople(   ) );
        }, [])
        console.log('starPeople')
        console.log(starPeople)
    
        return (
            <>
                <h1>StarWars</h1> 
                <h3>
                    Lista de Favoritos
                </h3>
                <br />
                <br />
                <br />
                <Link to="/" className="link">  Home</Link>           
                <br />
                <br />
                <br />
                <div className="container">
                    {
                       starPeople.map( ({name, url , favorite}) => (
                            (favorite)?
                                <div className="card" key={url}>

                                    <div className='favorite'>
                                        <h3>{name}</h3> 
                                            <button onClick={ ()=> dispatch(favoriteItemSlice(url) ) }  disabled={ isLoading  } > cambiar</button>
                                        
                                        </div>
                                </div>  :'' 
                       ) ) 
                    }

                </div>
            </>
        )

}

