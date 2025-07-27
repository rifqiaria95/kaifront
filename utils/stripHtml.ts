/**
 * Menghapus semua tag HTML dari string
 * @param html - String yang mengandung HTML tags
 * @returns String tanpa HTML tags
 */
export function stripHtml(html: string): string {
  if (!html) return ''
  
  // Membuat temporary div element untuk parsing HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  
  // Ambil text content saja (tanpa HTML tags)
  return tempDiv.textContent || tempDiv.innerText || ''
}

/**
 * Menghapus HTML tags menggunakan regex (alternatif untuk server-side)
 * @param html - String yang mengandung HTML tags  
 * @returns String tanpa HTML tags
 */
export function stripHtmlRegex(html: string): string {
  if (!html) return ''
  
  return html
    .replace(/<[^>]*>/g, '') // Hapus semua HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; dengan space
    .replace(/&amp;/g, '&')  // Replace &amp; dengan &
    .replace(/&lt;/g, '<')   // Replace &lt; dengan <
    .replace(/&gt;/g, '>')   // Replace &gt; dengan >
    .replace(/&quot;/g, '"') // Replace &quot; dengan "
    .replace(/&#39;/g, "'")  // Replace &#39; dengan '
    .trim() // Hapus whitespace di awal dan akhir
}

/**
 * Membersihkan text dan membatasi panjang karakter
 * @param html - String yang mengandung HTML tags
 * @param maxLength - Panjang maksimal karakter (optional)
 * @returns String bersih dengan panjang terbatas
 */
export function cleanText(html: string, maxLength?: number): string {
  const cleanedText = stripHtmlRegex(html)
  
  if (maxLength && cleanedText.length > maxLength) {
    return cleanedText.substring(0, maxLength).trim() + '...'
  }
  
  return cleanedText
} 