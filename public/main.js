async function init() {
  let rustApp = null

  try {
    rustApp = await import('../pkg')
  } catch(e) {
    console.error(err)
    return;
  }

  console.log(rustApp)

  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  // Gets called when the file is loaded
  fileReader.onloadend = () => {
    // Remove meta data. Replace it with an empty string
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/, ''
    )
    let img_data_url = rustApp.grayscale(base64)
    document.getElementById('new-img').setAttribute(
      'src', img_data_url
    )
  }
  // Store image in the browser
  input.addEventListener('change', () => {
    // Convert a binary file into a string
    fileReader.readAsDataURL(input.files[0])
  })
}

init()