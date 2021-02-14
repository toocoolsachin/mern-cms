module.exports = async (req, res, next) => {
  try {
    if (!req.files) {
      return res.status(400).send('Please upload a photo');
    }

    // console.log(req.files);

    const image = req.files.image;

    // Make sure the file is an image
    if (!image.mimetype.startsWith('image')) {
      return res.status(400).json({ msg: `Please upload an image file` });
    }

    // Create custom file name
    image.name = `photo_${image.name}`;

    req.body.image = image.name;

    image.mv(`${process.env.FILE_UPLOAD_PATH}/${image.name}`, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Problem with file upload');
      }
    });
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};
