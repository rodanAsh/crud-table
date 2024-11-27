import { useContext } from 'react'
import './App.css'
import { UserContext } from './context/UserContextProvider'

function App() {
  
  const {users,filteredUsers,setFilteredUsers} = useContext(UserContext)

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => {
     return user.name.toLowerCase().includes(searchText) || user.crew.toLowerCase().includes(searchText)
    })
    setFilteredUsers(filteredUsers)
  }


  return (
    <div className='container'>
      <h3>CRUD Application with React.js for frontend and node.js for backend</h3>
      <div className='input-search'>
        <input type="search" onChange={handleSearch} />
        <button className='btn blue'>Add Search</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Crew</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers && filteredUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.crew}</td>
                <td>
                  <button className='btn green'>edit</button>
                </td>
                <td>
                  <button className='btn red'>delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App


