let lastId = 1;

export default function generateId(): number {
  lastId += 1;

  return lastId;
}
