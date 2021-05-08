const url = '';
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({
    arbeidsreiser: [
      { km: 91, antall: 180 },
      { km: 378, antall: 4 }
    ],
    besoeksreiser: [{ km: 580, antall: 4 }],
    utgifterBomFergeEtc: 4850
  })
};

export { options, url };
