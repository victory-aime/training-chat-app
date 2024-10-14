import {MutableRefObject, useEffect, useRef} from 'react';

const useIsMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
