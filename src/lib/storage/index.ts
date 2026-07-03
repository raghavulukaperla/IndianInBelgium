function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function readList(key: string): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeList(key: string, list: string[]): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, JSON.stringify(list));
}

function makeSetStore(key: string) {
  return {
    getAll(): string[] {
      return readList(key);
    },
    has(id: string): boolean {
      return readList(key).includes(id);
    },
    add(id: string): void {
      const list = readList(key);
      if (!list.includes(id)) writeList(key, [...list, id]);
    },
    remove(id: string): void {
      writeList(
        key,
        readList(key).filter((item) => item !== id),
      );
    },
    toggle(id: string): boolean {
      const list = readList(key);
      if (list.includes(id)) {
        writeList(
          key,
          list.filter((item) => item !== id),
        );
        return false;
      }
      writeList(key, [...list, id]);
      return true;
    },
  };
}

export const bookmarks = makeSetStore("iib:bookmarks");
export const favorites = makeSetStore("iib:favorites");

const RECENTLY_VIEWED_KEY = "iib:recently-viewed";
const RECENTLY_VIEWED_LIMIT = 8;

export const recentlyViewed = {
  getAll(): string[] {
    return readList(RECENTLY_VIEWED_KEY);
  },
  record(path: string): void {
    if (!isBrowser()) return;
    const list = readList(RECENTLY_VIEWED_KEY).filter((item) => item !== path);
    list.unshift(path);
    writeList(RECENTLY_VIEWED_KEY, list.slice(0, RECENTLY_VIEWED_LIMIT));
  },
};

const CHECKLIST_KEY = "iib:checklist-done";

export const checklistProgress = makeSetStore(CHECKLIST_KEY);
