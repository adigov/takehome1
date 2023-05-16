import crypto from 'crypto';

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;

  // event not defined
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  // event has partition key
  if (event.partitionKey) {
    return event.partitionKey;
  }

  // create hash
  const data = JSON.stringify(event);
  let hash = crypto.createHash('sha3-512').update(data).digest('hex');

  // shorten hash
  if (hash.length > MAX_PARTITION_KEY_LENGTH) {
    hash = hash.substring(0, MAX_PARTITION_KEY_LENGTH);
  }

  return hash;
};

const _deterministicPartitionKey = deterministicPartitionKey;
export { _deterministicPartitionKey as deterministicPartitionKey };
