// Choose random item

export function choice(items) {
    let randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
}

// removes item from list, else returns undefined
export function remove(item, items) {
    const index = items.indexOf(item);
  if (index !== -1) {
    return items.splice(index, 1)[0];
  }
  return undefined;
}