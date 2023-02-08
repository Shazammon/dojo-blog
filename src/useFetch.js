import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState()

    // const [ name, setName ] = useState('mario')

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    console.log(err.message)
                    setError(err.message)
                })

        }, 500)
        // console.log('use effect ran')
        // console.log(blogs)
        // console.log(name)
        return () => console.log('cleanup')
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;