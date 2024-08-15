import React from 'react'

export default function TodoItems1() {
    let todoName ='Buy Milk';
    let todoDate ='4/10/2023';
  return (
    <div className="container">
        
        <div class="row Kg-row">
          <div class="col-4">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger Kg-button">Delete</button>
          </div>
        </div>
    </div>
  )
}
