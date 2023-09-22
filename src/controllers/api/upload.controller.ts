export const index: any = (req:any, res:any) => {
  
  if (req.body.images.length <= 0) {
    return res.send(`You must select at least 1 image.`);
  }

  const images = req.body.images.map((image: any) => "" + image + " ")
    .join("");

  return res.send(`Images were uploaded:${images}`);
};
