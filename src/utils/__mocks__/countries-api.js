const fetchCountries = async () => [
  {
    id: 'brazil',
    name: 'Brazil',
    regions: [{
      id: 'distrito_federal',
      name: 'Distrito Federal',
      todayNewConfirmed: '10',
      todayNewDeaths: '0',
    },
    {
      id: 'india',
      name: 'India',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 3991,
    todayNewDeaths: 34,
  },
  {
    id: 'germany',
    name: 'Germany',
    regions: [{
      id: 'berlin',
      name: 'Berin',
      todayNewConfirmed: '10',
      todayNewDeaths: '0',
    },
    {
      id: 'mexico',
      name: 'Mexico',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 39,
    todayNewDeaths: 3,
  },
  {
    id: 'italy',
    name: 'Italy',
    regions: [{
      id: 'veneto',
      name: 'Veneto',
      todayNewConfirmed: '13',
      todayNewDeaths: '0',
    }],
    todayNewConfirmed: 1000,
    todayNewDeaths: 40,
  },
];

export default fetchCountries;
