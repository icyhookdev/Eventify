// INCOMING DRY HELL AS FCK

export const checkRestrictionAge = restrictions => {
  const ageRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('age')
    );

  if (ageRestric) {
    return true;
  }

  return false;
};

export const checkRestrictionGenre = restrictions => {
  const genreRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('genre')
    );

  if (genreRestric) {
    return true;
  }

  return false;
};

export const getAgeRestric = restrictions => {
  const ageRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('age')
    );
  if (ageRestric) {
    return ageRestric.restrictionType;
  }

  return null;
};

export const getAgeRestricSingleValue = restrictions => {
  const ageRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('age-m')
    );
  if (ageRestric) {
    return ageRestric.rules[0];
  }

  return null;
};

export const getAgeRestricRangeValue = restrictions => {
  const ageRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('age-range')
    );
  if (ageRestric) {
    return { min: ageRestric.rules[0], max: ageRestric.rules[1] };
  }

  return null;
};

export const getGenreRestricValues = restrictions => {
  const genreRestric =
    restrictions &&
    restrictions.find(restriction =>
      restriction.restrictionType.includes('genre')
    );

  if (genreRestric) {
    return genreRestric.restrictTo;
  }

  return false;
};
