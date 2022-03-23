import React from 'react'
import Showdata from './Showdata'

export default function Form() {
    const [data, setData] = React.useState({
        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        isMarried : false
    })
    const [list, setList] = React.useState([])
    React.useEffect(() => {
        renderdata()
    },[])
    function renderdata() {
        fetch(`http://localhost:3001/details`)
        .then(res => res.json())
        .then(res => setList(res))
    }

    function handelInput(e) {
        const {id, value, checked, type} = e.target
        setData({
            ...data,
            [id] : type === "checkbox" ? checked : value
        })
    }

    function addData(e) {
        e.preventDefault()
        var jsondata = JSON.stringify(data)
        console.log(data.name)
        console.log(data.name.length)
        if(data.name.length < 2 || data.salary.length < 1) {
            alert("Please Enter Valid data")
        } else {
            fetch(`http://localhost:3001/details`, {
                method : "POST",
                body : jsondata,
                headers : {
                    "content-type" : "application/json"
                }
            })
            .then(res => res.json())
            .then(() => renderdata())
        }
    }


    return (
        <div>
            <form onSubmit={addData}>
                <input type="text" id='name' placeholder='Enter Name' onChange={handelInput}/>
                <br />
                <input type="number" id='age' placeholder='Enter Age' onChange={handelInput}/>
                <br />
                <input type="text" id='address' placeholder='Enter Address' onChange={handelInput}/>
                <br />
                <label>
                    Department : <select id="department" onChange={handelInput}>
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Civil">Civil</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </label>
                <br />
                <input type="number" id='salary' placeholder='Enter Salary' onChange={handelInput}/>
                <br />
                <label>
                    <span> Maritual Status : </span>
                    <input type="checkbox" id='isMarried' onChange={handelInput}/>
                </label>
                <br />
                <input type="submit" value="SUBMIT"/>
            </form>
            <div className="details">
                {list.map((item) => <Showdata {...item} key={item.id} /> )}
            </div>
        </div>
    )
}
