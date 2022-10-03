import { starWarsApi } from "../../../api/starWarsApi"
import { starLoadingPeople, setPeople } from "./starwarsSlice"


export const getPeople = ( page = 1 , click = false) => {
    return async( dispatch , getState ) => {



        let loadingPage = localStorage.getItem('loading')
        console.log('loadingPage')
        console.log(loadingPage)

        

        if(loadingPage == 'false' || loadingPage == null ){

        
            localStorage.setItem('loading', 'true' );
            if(!loadingPage == 'false' ){
                return
            }
            dispatch( starLoadingPeople() )
    
            // let localPeople = localStorage.getItem('people')
            let localPage = localStorage.getItem('page')
            let newPersonas;
    
            if( localPage ){
                if(click){
                    if( localPage < 10){
                        const resp = await fetch( `https://swapi.dev/api/people/?page=${page}` )
                        const data = await resp.json();
                        const apiPersonas = data.results.map( item =>{
                            item.favorite = false
                            return item
                        })
                       
                        let auxPersonas =  JSON.parse(  localStorage.getItem('peolple')  ) 
                       
    
                        const arrayConcat = auxPersonas.concat(apiPersonas);
                       
    
                        localStorage.setItem('peolple',JSON.stringify(arrayConcat) );
    
                       
    
                        newPersonas =  arrayConcat 
    
    
    
                    }
                }else{
                    if( localPage < 10){
                      
    
                        let auxPersonas =  JSON.parse(  localStorage.getItem('peolple')  ) 
                        newPersonas = auxPersonas  
                        
                    }
                    let auxPersonas =  JSON.parse(  localStorage.getItem('peolple')  ) 
                    newPersonas = auxPersonas  
                    
                }
                
            }else{
                
                const resp = await fetch( `https://swapi.dev/api/people/?page=${page}` )
                const data = await resp.json();
                // localStorage.setItem('people',JSON.stringify(data.results) );
                const apiPersonas = data.results.map( item =>{
                    item.favorite = false
                    return item
                })
                localStorage.setItem('peolple',JSON.stringify(apiPersonas) );
                newPersonas = data.results
            }   
            if( localPage < 10){

                var integer = parseInt(page) + 1; 
               
                
                localStorage.setItem('load', false);
                localStorage.setItem('page', integer.toString());
                
        
    
                dispatch( setPeople( { starPeople:newPersonas , page : integer + 1 } ) )
            }else {
                let auxPersonas =  JSON.parse(  localStorage.getItem('peolple')  ) 
                newPersonas = auxPersonas  
                dispatch( setPeople( { starPeople:newPersonas , page : integer + 1 } ) )
            }

        }            


        localStorage.setItem('loading', 'false' );
    }





}