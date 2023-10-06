import {useLayoutEffect, useState} from 'react';
import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue,
} from 'react-native-health';

const permissions: HealthKitPermissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.Steps],
    write: [AppleHealthKit.Constants.Permissions.Steps],
  },
};

const useHealthPermissions = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    AppleHealthKit.initHealthKit(
      permissions,
      (err: string, results: HealthValue) => {
        setLoading(false);
        if (err) {
          console.log(
            '[AppleHealthKit.initHealthKit - useHealthPermissions] Error : ',
            err,
          );
          setError(err);
        } else {
          setPermissionGranted(!!results);
        }
      },
    );
  }, []);

  return {
    error,
    isLoading,
    permissionGranted,
  };
};

export default useHealthPermissions;
