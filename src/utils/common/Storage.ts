/* eslint-disable max-classes-per-file, @typescript-eslint/no-use-before-define, class-methods-use-this */
export interface Storage {
  get(key: string): string | null;

  set(key: string, value: string): void;

  remove(key: string): void;

  clear(): void;
}

class MemoStorage implements Storage {
  private storage = new Map<string, string>();

  public get(key: string) {
    return this.storage.get(key) || null;
  }

  public set(key: string, value: string) {
    this.storage.set(key, value);
  }

  public remove(key: string) {
    this.storage.delete(key);
  }

  public clear() {
    this.storage.clear();
  }
}

class SessionStorage implements Storage {
  public static canUse(): boolean {
    const TEST_KEY = generateTestKey();

    try {
      sessionStorage.setItem(TEST_KEY, 'test');
      sessionStorage.removeItem(TEST_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }

  public get(key: string) {
    return sessionStorage.getItem(key);
  }

  public set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public remove(key: string) {
    sessionStorage.removeItem(key);
  }

  public clear() {
    sessionStorage.clear();
  }
}

function generateTestKey() {
  return new Array(4)
    .fill(null)
    .map(() => Math.random().toString(36).slice(2))
    .join('');
}

export function generateStorage(): Storage {
  if (SessionStorage.canUse()) {
    return new SessionStorage();
  }
  return new MemoStorage();
}

export const safeSeesionStorage = generateStorage();
