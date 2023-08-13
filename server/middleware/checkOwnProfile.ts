export const checkOwnProfile = (req,res,next) => {
   // Assuming the user's Discord ID is in the URL as a parameter
   if (req.user.discordId === req.params.discordId) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
}