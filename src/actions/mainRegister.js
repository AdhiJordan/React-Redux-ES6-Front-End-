import update from 'react-addons-update'

import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const initialState = {
  registerUsers: []

}

// Action Creators


export function createUserSuccess(newData) {
   alert("create");

  return { type: types.CREATE_USER_SUCCESS, payload: newData };

console.log(newdata);
}

// export function updateCustomerSuccess(entityId, entity) {
//   // alert("update");
  
//   return { type: types.UPDATE_CUSTOMER_SUCCESS, payload: [entityId, entity] };
// }

// export function deleteCustomerSuccess(entityId) {
  
//   alert()
//   return { type: types.DELETE_CUSTOMER_SUCCESS, payload: entityId};
// }


// export function clearAllAttributes() {
//   return { type: types.CLEAR_ALL_ATTRIBUTES};
// }

// export function loadCustomer() {
//    return function(dispatch, getState) {
//     // dispatch(beginAjaxCall());
//     return fetch('http://localhost:1337/entity', {
//             method: 'get',
//                       headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
        
      
//     }).then(r=>(r.json()))
//     .then(entity => {
//       // alert(entity)
//     // alert(JSON.stringify(entity))      
//     // console.log(entity)
//       dispatch(loadCustomerSuccess(entity)); })
//   };
// }
export function createUser(newData) {
// return function(dispatch) {
//   dispatch(createUserSuccess(newData));
// }
alert('hai')
  return (dispatch) => {

   
      dispatch ({
         type: types.CREATE_USER_SUCCESS,
         payload: newData
      })
  };
}
// export function createUser(userData) {
   
//     return => (dispatch) {
//     // dispatch(beginAjaxCall());
//     alert('hai')
//     // console.log(getState())
//     // return fetch({
//     //         body: JSON.stringify(userData)
      
//     // }).then(r=>(r.json()))
//     // .then(newdata => {
//     //   // alert(entity)
//     // alert(JSON.stringify(newdata))      
//     // // console.log(entity)
//       dispatch(createEntitySuccess(newdata)); 
//   };

// }
// export function createUser(userData) {
  
//    console.log(userData);
//    console.log(userData);
//     return function(dispatch) {
      
      
//     // dispatch(beginAjaxCall());
//     //  alert("in customer");
//     // console.log(getState());
//     // return fetch('http://localhost:1337/customersegments', {
//     //         method: 'post',
//     //                   headers: {
//     //             'Accept': 'application/json',
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(customerData)
      
//     // })
//      // .then(r=>(r.json()))
//         }
//     .then(newdata =>
//      {
//       alert(entity)
//     alert(JSON.stringify(newdata)) 
//     dispatch(createCustomerSuccess(newdata));     
//    });
      

//   }

// export function updateCustomer(id, editedCustomerData, indexOfEntityToUpdate) {
//   alert('edited customer data');
//   console.log(id);
//  console.log(editedCustomerData);

//     // console.log(data)
//     return function(dispatch, getState) {
//     // dispatch(beginAjaxCall());
//     return fetch(`http://localhost:1337/customersegments/${id}`, {
//             method: 'put',
//                       headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(editedCustomerData)
      
//     }).then(r=>(r.json()))
//     .then(entity => {
//       // alert(entity)
//     // alert(JSON.stringify(entity))      
//      console.log(entity)
//      dispatch(updateCustomerSuccess(indexOfEntityToUpdate, entity)); })
//   };

// }

// export function deleteCustomer(id, indexOfEntityToDelete) {

// console.log(id);
//       return function(dispatch, getState) {
    
//     return fetch(`http://localhost:1337/customersegments/${id}`, {
//             method: 'delete'
      
//     }).then(() => 
//         dispatch(deleteCustomerSuccess(indexOfEntityToDelete)))
//     .catch(error => {
//       throw(error);
//     });
//   };
// }
export default function reducer(state = initialState, action) {
  let { type, payload } = action

  switch(type) {
    // case types.LOAD_CUSTOMER_SUCCESS: 

    //   return update(state, { customers: { $set: payload } });

    case types.CREATE_USER_SUCCESS:

    // return update(state, { list: { $set: payload } })
        // return [
        //    ...state,
        //    Object.assign({}, payload)
        // ];
        alert('hai');
        return update(state, { registerUsers: { $push: [payload] }  });
        


    // case types.UPDATE_CUSTOMER_SUCCESS:
    // let result = payload[1]
    // console.log(result);
    //     return update(state, { customers: { $splice: [[payload[0], 1, result]]} });

    // case types.DELETE_CUSTOMER_SUCCESS:

    //             return update(state, { customers: { $splice: [[payload, 1]]} });
    // case types.CLEAR_ALL_ATTRIBUTES:
    //   return update(state, { customers: { $set: []} });
    default: 
      return state;
  }

}
