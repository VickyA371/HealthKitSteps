import {useEffect, useState} from 'react';
import AppleHealthKit, {
  HealthInputOptions,
  HealthValue,
} from 'react-native-health';
import moment from 'moment';

import {StepsCountDurationType} from '../navigators/types';

const useHealthKitData = (type: StepsCountDurationType) => {
  const [data, setData] = useState<HealthValue[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const options: HealthInputOptions = {};

    const currentDate = moment();

    switch (type) {
      case StepsCountDurationType.WEEKLY: {
        options.startDate = currentDate.subtract(7, 'd').toISOString();
        options.endDate = moment().toISOString();
        break;
      }
      case StepsCountDurationType.MONTHLY: {
        options.startDate = currentDate.subtract(1, 'M').toISOString();
        options.endDate = moment().toISOString();
        break;
      }
      case StepsCountDurationType.SIX_MONTHS: {
        options.startDate = currentDate.subtract(6, 'M').toISOString();
        options.endDate = moment().toISOString();
        break;
      }
      case StepsCountDurationType.YEARLY: {
        options.startDate = currentDate.subtract(1, 'year').toISOString();
        options.endDate = moment().toISOString();
        break;
      }
      default:
        options.startDate = currentDate.subtract(1, 'd').toISOString();
        options.endDate = moment().toISOString();
    }

    AppleHealthKit.getDailyStepCountSamples(
      options,
      (err: string, results: HealthValue[]) => {
        setLoading(false);
        if (err) {
          console.log('Error : ', err);
          setError(err);
        } else {
          console.log('results : ', results);
          setData(results);
        }
      },
    );
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useHealthKitData;
