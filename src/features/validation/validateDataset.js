export function validateDataset(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Dataset is missing or invalid.');
  }

  return true;
}