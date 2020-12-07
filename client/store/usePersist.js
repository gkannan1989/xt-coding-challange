import { useEffect } from 'react';

export function usePersistedContext(context, key = 'state') {
  if (typeof window !== 'undefined') {
    const persistedContext = window.localStorage.getItem(key);
    return persistedContext ? JSON.parse(persistedContext) : context;
  }
  return context;
}

export function usePersistedReducer([state, dispatch], key = 'state') {
  if (typeof window !== 'undefined') {
    useEffect(() => window.localStorage.setItem(key, JSON.stringify(state)),
      [state, key],
    );
  }
  return [state, dispatch];
}
