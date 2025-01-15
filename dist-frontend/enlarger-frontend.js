const imagesToEnlarge = document.querySelectorAll('.expandable_image');

imagesToEnlarge.forEach(imageContainer => {
  const image = imageContainer.querySelector('img');
  const dialog = imageContainer.querySelector('dialog.image_enlarger')
  const dialogCloseButton = imageContainer.querySelector('.enlarger_dialog_close');
  const dialogOpenButton = imageContainer.querySelector('.expand-indicator');

  image.addEventListener('click', () => {
    dialog.showModal();
  });

  dialogOpenButton.addEventListener('click', () => {
    dialog.showModal();
  });

  dialogCloseButton.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', () => {
    dialog.close();
  })
})
