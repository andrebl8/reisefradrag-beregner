import { IFormValues } from '../interfaces/IFormValues';

const url = '';
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

const calculateTaxReduction = (postBody: IFormValues) => {
  const options = createOptions(postBody);

  fetch(url, options).then((response) => {
    console.log(response);
  });
};

export default calculateTaxReduction;
