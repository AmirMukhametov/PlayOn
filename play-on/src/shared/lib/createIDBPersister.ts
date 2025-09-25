import { get, set, del } from 'idb-keyval';
import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';

export function createIDBPersister(
  idbKey: IDBValidKey = 'reactQuery'
): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(idbKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbKey);
    },
    removeClient: async () => {
      await del(idbKey);
    },
  };
}