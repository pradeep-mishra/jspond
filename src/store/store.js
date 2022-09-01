import create from 'zustand';
import { persist } from 'zustand/middleware';

const useExecResultStore = create((set) => ({
  result: '',
  setResult: (result) => {
    set((state) => ({ result: result }));
  }
}));

const useJsPondStore = create(
  persist(
    (set, get) => ({
      code: get()?.code || '',
      setCode: (code) => {
        set((state) => ({ code: code }));
      }
    }),
    {
      name: 'jspond-store'
    }
  )
);

export { useJsPondStore, useExecResultStore };
