import {useState} from "react";

export default function useMutation(url: string): [(data: any) => void, { loading: boolean, data: undefined | any, error: undefined | any }] {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined
  })

  function mutation(data: any) {
    setState({...state, loading: true})

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
      .catch(() => {
      })
      .then((data) => setState({...state, data: data}))
      .catch((error) => setState({...state, error: error}))
      .finally(() => setState({...state, loading: false}));
  }

  return [mutation, {...state}];
}