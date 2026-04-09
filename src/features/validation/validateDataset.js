export function validateDataset(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Dataset is missing or invalid.');
  }

  if (typeof data.name !== 'string' || typeof data.status !== 'string') {
    throw new Error('Dataset must include name and status fields.');
  }

  return true;
}