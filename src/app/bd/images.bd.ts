export const images = new Array(4000).fill(null).map((_, id) => ({
  id: id,
  photo: `url_photo_${id}`,
  text: generateRandomText()
}))

function generateRandomText() {
  const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
  const length = Math.floor(Math.random() * 15)

  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result
}