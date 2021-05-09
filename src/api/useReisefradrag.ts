import { useState } from 'react';

import { useCalculationContext } from '../context/calculationContext';
import { IFormValues } from '../interfaces/IFormValues';

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
  const { setCalculation } = useCalculationContext();

  const doTheFetch = async (postBody: IFormValues) => {
    setLoading(true);
    const options = createOptions(postBody);

    try {
      const fetchedResult = await fetch(url, options);
      const response = await fetchedResult.json();
      setCalculation(response);
    } catch (e) {
      console.error('something went wrong', e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, doTheFetch };
};

export default useReiseFradag;
