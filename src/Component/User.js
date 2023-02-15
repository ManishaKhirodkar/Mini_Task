import React, { useEffect, useState } from 'react'
import '../Component/style.css'
import axios from 'axios';


const User = () => {
const [show,setShow]=useState(0);
    const [myData, setMyData] = useState([]);

    const getUser = () => {
        axios.get("https://reqres.in/api/users?page=1")
        .then((res)=>
        setMyData(res.data.data)
        )
    }

    useEffect(() => {
       show && getUser();
    }, [show]);

    const showData=()=>{
        setShow(function(cardlist){
            return cardlist+1
        })
    }

    return (
        <>
            <nav>
                <div className="compo1">
                    <div className="row">
                        <div className="col-1">
                            <h1>FrontEnd</h1>
                        </div>
                        <div className="col-2">
                            <button onClick={showData}>Get Users</button>
                        </div>
                    </div>
                </div>
            </nav>

            {
                myData.map((userInfo) => {
                    const {id,email,first_name,last_name,avatar}=userInfo;
                    return (
                        <div className="compo2">
                            <div id="card">
                                <div className="card-box">
                                    <div className="clients">
                                        <img src={avatar} alt='avatar' className="profile_photo" />
                                        <h1 className="text">{first_name} {last_name}</h1>
                                        <p className="mail">{email}</p>
                                        <p>Id:{id}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default User;