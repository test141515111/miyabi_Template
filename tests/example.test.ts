/**
 * Example test file for Miyabi Obsidian Cursor project
 * This demonstrates the testing setup and conventions
 */

describe('Example Test Suite', () => {
  it('should pass a basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should perform basic arithmetic', () => {
    expect(1 + 1).toBe(2);
  });

  describe('Array operations', () => {
    it('should correctly check array length', () => {
      const arr = [1, 2, 3];
      expect(arr).toHaveLength(3);
    });

    it('should find element in array', () => {
      const arr = ['foo', 'bar', 'baz'];
      expect(arr).toContain('bar');
    });
  });

  describe('Object operations', () => {
    it('should match object properties', () => {
      const obj = { name: 'Miyabi', version: '0.15.0' };
      expect(obj).toHaveProperty('name', 'Miyabi');
    });

    it('should match partial object', () => {
      const obj = { name: 'Miyabi', version: '0.15.0', active: true };
      expect(obj).toMatchObject({ name: 'Miyabi', active: true });
    });
  });

  describe('Async operations', () => {
    it('should resolve promise', async () => {
      const promise = Promise.resolve('success');
      await expect(promise).resolves.toBe('success');
    });

    it('should handle async/await', async () => {
      const getData = async () => {
        return { status: 'ok' };
      };

      const result = await getData();
      expect(result.status).toBe('ok');
    });
  });
});
