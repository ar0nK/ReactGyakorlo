import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'

export default function MindenTargy() {
  
    const [isPending, setIsPending] = useState(false);
   
    const [items, setItems] = useState([]);
    // Volt-e hiba
    const [error, setError] = useState(false)

    
    useEffect(() => {
        setError(false)
        setIsPending(true)
        GetItems()

    }, [])

    // A GET függvény személyesen
    function GetItems() {
        fetch("http://192.168.50.49:3005/items")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
               
                let normalized = [];

                if (data && data.status === 'ok') {
                    const payload = data.data ?? data.items ?? [];
                    if (Array.isArray(payload)) {
                        normalized = payload;
                    } else if (payload && typeof payload === 'object') {
                        normalized = Object.values(payload);
                    }
                } else if (Array.isArray(data)) {
                    normalized = data;
                } 

                setItems(normalized);
                setIsPending(false);
            })
            .catch(function (error) {
                setError(true)
                setIsPending(false)
            })
    }
    return (
        <div>
            {items.map(function (item) {
                return <Card key={item.id} item={item} />
            })}
        </div>
    )
  
}
