import { isServer } from './Device';

export const copyToClipboard = async (value: string) => {
  if (isServer()) {
    throw new Error('Cannot be executed unless it is a client environment.');
  }

  try {
    await navigator.clipboard.writeText(value);

    return value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error(`Copying to the clipboard failed. message: ${err.message}`);
    throw err;
  }
};
