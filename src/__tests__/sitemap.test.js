import fs from 'fs';
import path from 'path';

const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');

describe('public/sitemap.xml', () => {
  let content;

  beforeAll(() => {
    content = fs.readFileSync(sitemapPath, 'utf8');
  });

  it('contains /methodology URL', () => {
    expect(content).toContain('https://finnsight.app/methodology');
  });

  it('contains /compliance URL', () => {
    expect(content).toContain('https://finnsight.app/compliance');
  });

  it('contains the root URL', () => {
    expect(content).toContain('https://finnsight.app/');
  });

  it('contains the /trust URL', () => {
    expect(content).toContain('https://finnsight.app/trust');
  });

  it('is valid XML (contains urlset element)', () => {
    expect(content).toContain('<urlset');
    expect(content).toContain('</urlset>');
  });
});
