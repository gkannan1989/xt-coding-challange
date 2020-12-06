import { useEffect } from 'react';

export function usePersistedContext(context, key = 'state') {
  /** to play with the JSON temprorly commentting */
  const persistedContext = '';
  return persistedContext ? JSON.parse(persistedContext) : context;
  // return context;
}

export function usePersistedReducer([state, dispatch], key = 'state') {
  useEffect(() => '');
  return [state, dispatch];
}
