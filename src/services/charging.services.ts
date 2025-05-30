

import { ChargingState } from '../components/molecules/battery-chart/index.interface'
import { useApiQuery } from './api-fetching/useApiQuery';

const mockData: ChargingState[] = [
    {
      "date": "2024-09-02T07:00:12.072Z",
      "chargingLevel": 42,
      "internalEventId": 986073
    },
    {
      "date": "2024-09-02T08:00:02.836Z",
      "chargingLevel": 44,
      "internalEventId": 347729
    },
    {
      "date": "2024-09-02T09:00:07.730Z",
      "chargingLevel": 48,
      "internalEventId": 257013
    },
    {
      "date": "2024-09-02T10:00:14.169Z",
      "chargingLevel": 45,
      "internalEventId": 402389
    },
    {
      "date": "2024-09-02T11:00:02.935Z",
      "chargingLevel": 51,
      "internalEventId": 999341
    },
    {
      "date": "2024-09-02T12:00:03.345Z",
      "chargingLevel": 55,
      "internalEventId": 409775
    },
    {
      "date": "2024-09-02T13:00:17.870Z",
      "chargingLevel": 58,
      "internalEventId": 270725
    },
    {
      "date": "2024-09-02T14:00:01.231Z",
      "chargingLevel": 67,
      "internalEventId": 305212
    },
    {
      "date": "2024-09-02T16:00:05.735Z",
      "chargingLevel": 71,
      "internalEventId": 178869
    },
    {
      "date": "2024-09-02T17:00:04.175Z",
      "chargingLevel": 66,
      "internalEventId": 923633
    },
    {
      "date": "2024-09-02T18:00:01.866Z",
      "chargingLevel": 61,
      "internalEventId": 624563
    },
    {
      "date": "2024-09-02T19:00:00.342Z",
      "chargingLevel": 55,
      "internalEventId": 441161
    },
    {
      "date": "2024-09-02T20:00:10.376Z",
      "chargingLevel": 52,
      "internalEventId": 932071
    },
    {
      "date": "2024-09-02T21:00:08.753Z",
      "chargingLevel": 49,
      "internalEventId": 854300
    },
    {
      "date": "2024-09-02T22:00:02.065Z",
      "chargingLevel": 45,
      "internalEventId": 868056
    },
    {
      "date": "2024-09-02T23:00:04.099Z",
      "chargingLevel": 43,
      "internalEventId": 988726
    },
    {
      "date": "2024-09-03T00:00:01.254Z",
      "chargingLevel": 43,
      "internalEventId": 917156
    },
    {
      "date": "2024-09-03T01:00:01.643Z",
      "chargingLevel": 43,
      "internalEventId": 919020
    },
    {
      "date": "2024-09-03T02:00:03.736Z",
      "chargingLevel": 42,
      "internalEventId": 381231
    },
    {
      "date": "2024-09-03T03:00:02.587Z",
      "chargingLevel": 42,
      "internalEventId": 368035
    },
    {
      "date": "2024-09-03T04:00:09.0234Z",
      "chargingLevel": 42,
      "internalEventId": 345455
    },
    {
      "date": "2024-09-03T05:00:04.432Z",
      "chargingLevel": 42,
      "internalEventId": 262147
    },
    {
      "date": "2024-09-03T06:00:02.835Z",
      "chargingLevel": 39,
      "internalEventId": 822226
    }
  ]
;
const fetchChargingData = async (): Promise<ChargingState[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockData), 500);
  });
};

export const useChargingData = () => useApiQuery('chargingData', fetchChargingData);
