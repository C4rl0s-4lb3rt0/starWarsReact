import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPeople, favoriteItemSlice , favoriteNot} from './store/slices/starWars';

export const StarWars = () => {


    const dispatch = useDispatch();
    localStorage.setItem('load','init' );

    const { page, starPeople, isLoading   } = useSelector( state => state.peopleStarWars ) 

    
    // window.addEventListener('scroll', (event) => {
    //     console.log('object');

    //     const pos = ( document.documentElement.scrollTop || document.body.scrollTop) + 1000
    //     const max = ( document.documentElement.scrollHeight || document.body.scrollHeight  )
    //     console.log({pos , max});

    //     if( pos > max ){
    //         console.log('llamra servicio');
    //         console.log(isLoading);
    //         let localPage = localStorage.getItem('page')
    //         const auxPage= (!localPage) ? 1 : localPage   
    //         console.log('auxPage');
    //         console.log(auxPage);
    //         if(!isLoading){ dispatch( getPeople( localPage , true ) ) }
            
    //     }
    // });



    function isScrolling(){
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
          return;
        }
        else {
          console.log("scrolling down");
          let localPage = localStorage.getItem('page')
            const auxPage= (!localPage) ? 1 : localPage   
          dispatch( getPeople( auxPage , true ) )
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);}, [])






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
            <br />
            <br />
            <br />
            <Link to="/favorite" className="link">  Favoritos</Link>           
            <br />
            <br />
            <br />
            <div className="container">
            {
                
                starPeople.map( ({name, url, favorite}) => (
                    

                    <div className="card" key={url}>
                    <div className={ (favorite )? 'favorite': 'notFavorite' } key={name}> 
                        <h3>
                            { name }
                        </h3>
                         { favorite }
                        <button onClick={ ()=>   dispatch( favoriteItemSlice(url ) ) } > { (favorite )? 'Favorito': 'No Favorito' }</button>
                    </div>
                        
                    </div>
                ) ) 
            }
                
            </div>   
         
        </>
    )
}
