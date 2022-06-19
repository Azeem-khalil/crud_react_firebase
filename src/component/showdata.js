import React from 'react'

function showdata() {
  return (
    <>
    <h3>showdata</h3>
    <table class="table table-fluid" id="example">
                    <thead class="table-dark ">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col"> Name</th>
                            <th scope="col"> Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Pharmacy Name</th>
                            <th scope="col">Date/Time</th>


                            <th scope="col" width="0%">Actions</th>
                        </tr>
                    </thead>

                    <tbody id="ex-table"></tbody>
                </table>

    
    
    </>
  )
}

export default showdata