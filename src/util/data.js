const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export const getFolderImages = (folderName) => {
  const folderImages = (folderName) => {
    switch (folderName) {
      case "firstApartamentImages":
        const firstImages = importAll(
          require.context(
            "../assets/images/firstApartamentImages",
            false,
            /\.(png|jpe?g|svg)$/
          )
        );
        return firstImages;
      case "secondApartamentImages":
        const secondImages = importAll(
          require.context(
            "../assets/images/secondApartamentImages",
            false,
            /\.(png|jpe?g|svg)$/
          )
        );
        return secondImages;
      case "thirdApartamentImages":
        const thirdImages = importAll(
          require.context(
            "../assets/images/thirdApartamentImages",
            false,
            /\.(png|jpe?g|svg)$/
          )
        );
        return thirdImages;
      case "forthApartamentImages":
        const forthImages = importAll(
          require.context(
            "../assets/images/forthApartamentImages",
            false,
            /\.(png|jpe?g|svg)$/
          )
        );
        return forthImages;
      default:
        console.log("You need to pass correct folder name.");
    }
  };

  const images = folderImages(folderName);
  const denormalisedImages = Object.values(images).map((img) => img);
  return denormalisedImages;
};
