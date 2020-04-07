import {useState, useEffect} from 'react';

import firestore from '@react-native-firebase/firestore';

type TReturn = {
  data: Array<Object>,
  error: ?string,
};

export const useSubscribeToCollection = (
  collection: string,
  fields: Array<string>,
): TReturn => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(collection);
    console.log(fields);
    const unsubscribe = firestore()
      .collection(collection)
      .onSnapshot(
        (querySnapshot) => {
          console.log(querySnapshot);
          setData(
            querySnapshot.docs.map((doc) => {
              const docData = doc.data();

              return fields.reduce(
                (acc, field) => {
                  return {...acc, [field]: docData[field]};
                },
                {id: doc.id},
              );
            }),
          );
        },
        (err) => setError(err),
      );

    return () => unsubscribe();
  }, [collection, fields]);

  return {data, error};
};
