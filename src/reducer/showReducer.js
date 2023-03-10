

const initialState = {
    userDetails:{},
movies:[],
cinemaHall:[],
userList:[],

selectedShow:{},
selectedScreen:{},

seatBooked:[],
seatHolded:[],
userSelected:[],


}; //initial state should be assinged to avoid the error
// otherwise it shows undifined on initial render
const ShowReducers = (states=initialState,action)=>{
switch(action.type){
    case 'getuserlist':
         return {...states,userList:action.payload}
    case 'adduserdetails':
        return {...states,userDetails:action.payload};  

    case 'addmovies':
        return {...states,movies:action.payload};  

    case 'addcinemahall':
        return {...states,cinemaHall:action.payload};

    case 'selectedshow':
        return {...states,selectedShow:action.payload}
        
    case 'selectedscreen':
        return {...states,selectedScreen:action.payload}

    case 'userselected':
            return {...states,userSelected:action.payload}
    case 'seatholded':
             return {...states,seatHolded:action.payload}
    case 'seatbooked':
                return {...states,seatBooked:action.payload}

            
        
    default:
        return states;    
}

}

export default ShowReducers;