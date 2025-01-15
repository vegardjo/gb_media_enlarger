const imagesToEnlarge = document.querySelectorAll('.expandable_image');

imagesToEnlarge.forEach(imageContainer => {
  const image = imageContainer.querySelector('img');
  const dialog = imageContainer.querySelector('dialog.image_enlarger');
  const largeImage = dialog.querySelector('img');
  const dialogCloseButton = imageContainer.querySelector('.enlarger_dialog_close');
  const dialogOpenButton = imageContainer.querySelector('.expand-indicator');

  // Dialogs natively scrolls to top on close(), so we need to address this manually.
  let scrollPosition = 0;

  const closeDialog = () => {
    dialog.close();
    window.scrollTo(0, scrollPosition);
  };

  const openDialog = () => {
    scrollPosition = window.scrollY;
    largeImage.src = largeImage.getAttribute('data-src');
    dialog.showModal();
  };

  // Event listeners for open
  image.addEventListener('click', openDialog);
  dialogOpenButton.addEventListener('click', openDialog);
  // ..and close
  dialogCloseButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', closeDialog);

  // Take over native ESC key press to close the dialog
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && dialog.open) {
      closeDialog();
    }
  });
});
