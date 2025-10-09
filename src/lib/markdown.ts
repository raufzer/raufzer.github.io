// @ts-ignore
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function markdownToHtml(markdown: string, className?: string): string {
    md.renderer.rules.paragraph_open = () => `<p class="${className}">`;

    return md.render(markdown);
}

