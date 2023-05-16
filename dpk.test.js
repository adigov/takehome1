import crypto from 'crypto';
const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  const TRIVIAL_PARTITION_KEY = '0';

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it('Returns the partition key from the event when provided', () => {
    const event = { partitionKey: 'aSimplePartitionKey' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });

  it('Returns newly created hash when event has no partition key', () => {
    const event = { name: 'noPartitionKey' };
    const hash = crypto
      .createHash('sha3-512')
      .update(JSON.stringify(event))
      .digest('hex');
    const expected = hash.substring(0, 256);

    const result = deterministicPartitionKey(event);
    expect(result).toBe(expected);
  });
});
