const checkGuests = (guests, userId) => {
  const guu = guests.find(guest => guest._id === userId);

  const guu2 = guests.includes(userId);
  if (guu || guu2) {
    return true;
  }
  return false;
};

export default checkGuests;
