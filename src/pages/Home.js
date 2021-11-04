import React, { useEffect, useState } from 'react'
import Endpoint from '../globals/api-endpoint'
import axios from 'axios'
import { Button, FormWrap } from '../components'

const Home = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const getChecklist = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        const data = await axios.get(Endpoint.checlist)
        .then(res => setData(res.data.data))
        .catch(err => console.log(err))

        return data
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(Endpoint.checlist, { name: name })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    // const handleDelete = async (id) => {
    //     // e.preventDefault()
    //     axios.delete(`${Endpoint.checlist}/${id}`)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    useEffect(() => {
        getChecklist();
        // console.log(data)
    }, [data])

    return (
        <>
        {data && (
            <div>
                <FormWrap>
                <form onSubmit={(e) => handleSubmit(e)} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    padding: 10,
                    gap: 20
                }}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <Button name="Submit"/>
                    </form>
                </FormWrap>
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                // width: 150,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
            {data.map(item => (
                    <div key={item.id} style={{
                        background: '#FFFFFF',
                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                        padding: 15,
                        borderRadius: 8,
                        width: 250,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // flexDirection: 'column'
                    }}>
                        {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
                        <p>{item.name} {item.checklistCompletionStatus}</p>
                        {item.items ? (
                            <>
                            {item.items.map(child => (
                                <div key={child.id}>
                                    <p>{child.name}</p>
                                    <p>{child.itemCompletionStatus}</p>
                                </div>
                            ))}
                            </>
                        ): (
                            <p style={{marginLeft: 10}}>gak ada</p>
                        )}
                    </div>
                ))}     
            </div>
            </div>
        )}
        </>
    )
}

export default Home
