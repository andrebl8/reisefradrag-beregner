import { useEffect, useState } from 'react';

import { IFormValues } from '../interfaces/IFormValues';
import { IReisefradrag } from '../interfaces/IReisefradrag';

const url =
  'https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag';
const createOptions = (body: IFormValues) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(body)
  };
};

const useReiseFradag = () => {
  const [loading, setLoading] = useState(false);
  // TODO: Fix any type
  const [result, setResult] = useState<IReisefradrag>({} as IReisefradrag);

  useEffect(() => {
    console.log('LOOLOL', result);
    setResult(result);
  }, [result]);

  const doTheFetch = async (postBody: IFormValues) => {
    setLoading(true);
    const options = createOptions(postBody);

    try {
      const fetchedResult = await fetch(url, options);
      const response = await fetchedResult.json();
      console.log('kek', response);

      setResult(response);
    } catch (e) {
      console.error('something went wrong', e);
    } finally {
      setLoading(false);
    }
  };

  // return fetch(url, options).then((response) => {
  //   console.log(response);
  //   return response;
  // });

  return { loading, doTheFetch, result };
};

export default useReiseFradag;
