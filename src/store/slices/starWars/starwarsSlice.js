import { createSlice } from '@reduxjs/toolkit';

export const starWarsSlice = createSlice({
    name: 'starWars',
    initialState: {
        page:0,
        starPeople:[],
        isLoading:false
    },
    reducers: {
        starLoadingPeople: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPeople: (state, action  ) => {
            // console.log(action)
            state.isLoading = false;
            state.page = action.payload.page;
            state.starPeople= action.payload.starPeople
        },
        favoriteItemSlice: (state, action  ) => {
            let auxPersonas =  JSON.parse(  localStorage.getItem('peolple')  ) 
            auxPersonas.map( item => {
                if(item.url == action.payload){
                    item.favorite = !item.favorite 
                }
                return item
            })
            localStorage.setItem('peolple',JSON.stringify(auxPersonas) );
            state.starPeople = auxPersonas

        },
        favoriteNot: (state, action  ) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const { starLoadingPeople,favoriteNot ,setPeople, favoriteItemSlice } = starWarsSlice.actions;