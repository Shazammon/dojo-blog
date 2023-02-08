import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState()
    // const [ name, setName ] = useState('mario')
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false)
                        console.log(err.message)
                        setError(err.message)
                    }
                })

        }, 500)
        // console.log('use effect ran')
        // console.log(blogs)
        // console.log(name)
        return () => abortCont.abort()
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;