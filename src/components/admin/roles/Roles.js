import React from 'react'
import AddRole from './AddRole'
import Role from './Role'
const DUMMY_ROLES = [
    {id:1 , name: 'ADMIN'},
    {id:2 , name: 'MANAGER'},
    {id:3 , name: 'ANIMATEUR'},
    {id:4 , name: 'RESPONSABLE'},

]
const Roles = (props)=> {
    return (
        <div >
            <h1 className='text-center'> Roles</h1>
           <div className='contanier'>
           <div className="row">
                <AddRole/>
           </div>
           <div className="row">
               <div className="col-md-auto">
               {DUMMY_ROLES.map(role => (
                     <Role key={role.id} id={role.id} name={role.name} />
                ))}
               </div>
           </div>

              
                   
                   
            </div>
        </div>
    )
}

export default Roles

