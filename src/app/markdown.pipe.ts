import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    if (!value) return '';


    /**
     * 
     * ** bold ** → bold
     * __italic__ → italic
     * ++underline++ → <u>underline </u>
     * `code` → inline code
     * [text to display](url)
     * 
     */
    
    // Bold: **text**
    let formatted = value.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic: __text__
    formatted = formatted.replace(/__(.+?)__/g, '<em>$1</em>');

    // Inline code: `code`
    formatted = formatted.replace(/`(.+?)`/g, '<code>$1</code>');

    // Links: [text](url)
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Underline: ++text++
    formatted = formatted.replace(/\+\+(.+?)\+\+/g, '<u>$1</u>');


    return this.sanitizer.bypassSecurityTrustHtml(formatted)
  }

}
