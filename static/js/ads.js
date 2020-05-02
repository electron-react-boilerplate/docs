document.addEventListener('DOMContentLoaded', () => {
  const item = document.createElement('script')
  item.src = 'https://cdn.carbonads.com/carbon.js?serve=CE7IC277&placement=electron-react-boilerplatejsorg'
  item.async = true;
  item.id = '_carbonads_js';
  setTimeout(() => {
    document.querySelector('body').appendChild(item);
  }, 1000)
});
