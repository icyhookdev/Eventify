const checkGuests = (guests, userId) => {
  const guu = guests.find(guest => guest._id === userId);

  if (guu) {
    return true;
  }
  return false;
};

export default checkGuests;
