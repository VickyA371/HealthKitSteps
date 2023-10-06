import {useLayoutEffect, useState} from 'react';
import AppleHealthKit, {
  HealthKitPermissions,
  HealthStatusResult,
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
    AppleHealthKit.isAvailable(
      (availableError: Object, isAvailable: boolean) => {
        if (availableError) {
          setError(availableError?.toLocaleString() ?? 'Something went wrong');
          setLoading(false);
        } else {
          if (isAvailable) {
            AppleHealthKit.initHealthKit(
              permissions,
              (err: string, initRes: HealthValue) => {
                if (err) {
                  console.log(
                    '[AppleHealthKit.initHealthKit - useHealthPermissions] Error : ',
                    err,
                  );
                  setLoading(false);
                  setError(err);
                } else {
                  if (initRes) {
                    AppleHealthKit.getAuthStatus(
                      {
                        permissions: permissions.permissions,
                      },
                      (getAuthError: string, results: HealthStatusResult) => {
                        if (err) {
                          setLoading(false);
                          setError(getAuthError);
                        } else {
                          const readPermissions =
                            results?.permissions?.read?.every?.(
                              (permissionRes: number) => permissionRes === 2,
                            );

                          const writePermissions =
                            results?.permissions?.write?.every?.(
                              (permissionRes: number) => permissionRes === 2,
                            );
                          setLoading(false);
                          setPermissionGranted(
                            !!readPermissions && !!writePermissions,
                          );
                        }
                      },
                    );
                  } else {
                    setLoading(false);
                    setPermissionGranted(false);
                  }
                }
              },
            );
          } else {
            setLoading(false);
            setPermissionGranted(false);
          }
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
