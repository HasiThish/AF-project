import React from 'react';
import AdminMenu from './Admin_menu'
import '../styles/admin.css'
import '../styles/heritagelist.css'
import Edit from '../images/edit.png'
import Delete from '../images/delete.jpeg'
import Add from '../images/add.png'

function HeritageList() {
  return (
    <div>
      <AdminMenu />
      <div className='adminContainer'>
        <h1>List of Heritage Places</h1>
        <a href={'/addHeritage'}><button className="signin-btn">Add A Place</button></a><br/>
        
        <div>
            <table border={1}>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Sri Dalada Maligawa</td>
                    <td>Kandy</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}} />   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sigiriya</td>
                    <td>Dambulla</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}}/>   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Gadaladeniya Viharaya</td>
                    <td>Kandy</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}}/>   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>

                </tr>
                <tr>
                    <td>4</td>
                    <td>Embekke Dewalaya</td>
                    <td>Kandy</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}}/>   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>

                </tr>
                <tr>
                    <td>5</td>
                    <td>Ruwanweliseya</td>
                    <td>Anuradhapura</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}}/>   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>

                </tr>
                <tr>
                    <td>6</td>
                    <td>Galle Fort</td>
                    <td>Galle</td>
                    <td><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}}/>   <img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></td>

                </tr>
            </table>
        </div>
        
      </div>
    </div>
  );
}

export default HeritageList;
