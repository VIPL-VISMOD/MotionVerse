document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('copy-bibtex');
  const block = document.getElementById('bibtex-block');
  if (btn && block) {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.innerText);
        const span = btn.querySelector('span:last-child');
        const original = span.textContent;
        span.textContent = 'Copied!';
        setTimeout(() => { span.textContent = original; }, 1500);
      } catch (e) {
        console.error('Copy failed', e);
      }
    });
  }
});
