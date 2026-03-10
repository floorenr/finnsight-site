import { PAGE_SEO, SITE_CONFIG } from '../utils/seo';

describe('PAGE_SEO', () => {
  describe('methodology entry', () => {
    it('exists', () => {
      expect(PAGE_SEO.methodology).toBeDefined();
    });

    it('has path /methodology', () => {
      expect(PAGE_SEO.methodology.path).toBe('/methodology');
    });

    it('has a non-empty title', () => {
      expect(PAGE_SEO.methodology.title).toBeTruthy();
    });

    it('has a non-empty description', () => {
      expect(PAGE_SEO.methodology.description).toBeTruthy();
    });

    it('has a non-empty ogTitle', () => {
      expect(PAGE_SEO.methodology.ogTitle).toBeTruthy();
    });
  });

  describe('compliance entry', () => {
    it('exists', () => {
      expect(PAGE_SEO.compliance).toBeDefined();
    });

    it('has path /compliance', () => {
      expect(PAGE_SEO.compliance.path).toBe('/compliance');
    });

    it('has a non-empty title', () => {
      expect(PAGE_SEO.compliance.title).toBeTruthy();
    });

    it('has a non-empty description', () => {
      expect(PAGE_SEO.compliance.description).toBeTruthy();
    });

    it('has a non-empty ogTitle', () => {
      expect(PAGE_SEO.compliance.ogTitle).toBeTruthy();
    });
  });

  it('methodology and compliance paths are distinct', () => {
    expect(PAGE_SEO.methodology.path).not.toBe(PAGE_SEO.compliance.path);
  });

  it('all paths start with /', () => {
    Object.values(PAGE_SEO).forEach(({ path }) => {
      if (path !== null) {
        expect(path).toMatch(/^\//);
      }
    });
  });

  describe('SITE_CONFIG', () => {
    it('baseUrl includes finnsight.app', () => {
      expect(SITE_CONFIG.baseUrl).toContain('finnsight.app');
    });
  });
});
